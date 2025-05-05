import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Tick, oType } from './Tick'

export class Base {
  private dom: HTMLDivElement // 渲染 webgl 的父级容器
  protected controls: OrbitControls // 辅助工具：使得鼠标可以 控制 摄像机的运动
  protected renderer: THREE.WebGLRenderer // threejs 基本概念之一： renderer（渲染器）
  protected camera: THREE.PerspectiveCamera // threejs 基本概念之一： camera（摄像机）
  protected clock = new THREE.Clock() // threejs 提供的「时钟」类
  protected scene = new THREE.Scene() // 初始化 场景；threejs 基本概念之一： scene（场景）
  protected tick = new Tick() // 每一帧，执行一次

  constructor(dom: HTMLDivElement) {
    this.dom = dom
    this.camera = this.initCamera() // 初始化 摄像机
    this.renderer = this.initRenderer(dom) // 初始化渲染器
    this.controls = new OrbitControls(this.camera, this.renderer.domElement) // 初始化 摄像机的 controls

    this.addHelper()
    this.tickLoop()    
  }

  private tickLoop() {
    this.renderer.setAnimationLoop((time) => {
      this.controls.update()
      this.renderer.render(this.scene, this.camera)

      // 每一帧执行一次 tick
      Object.values(this.tick[oType]).forEach((fns) => {
        fns.forEach((fn) => fn(this.clock.getDelta()))
      })
    })
  }

  private initCamera() {
    // Field of View（相机可视角度的范围）
    const fov = 75 
    const aspect = this.dom.offsetWidth / this.dom.offsetHeight
    const near = 0.1
    const far = 1000000

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far)

    // 将相机 放在合适的位置
    camera.position.set(2.6363042712380986, 5.220899971406846, 6.232079279872723)
    return camera
  }

  private initRenderer(dom: HTMLDivElement) {
    const renderer = new THREE.WebGLRenderer({
      antialias: true // 开启抗锯齿 （MSAA）
    })
    renderer.setSize(dom.offsetWidth, dom.offsetHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    dom.appendChild(renderer.domElement)

    return renderer
  }

  // 增加 坐标轴 和 网格的 辅助工具
  private addHelper({openAxesHelper = true, openGridHelper = true} = {}) {
    // 坐标轴
    if (openAxesHelper) {
      const axesHelper = new THREE.AxesHelper(5)
      axesHelper.position.y = 0.01
      this.scene.add(axesHelper)
    }

    // 10*10 的辅助网格
    if (!openGridHelper) return
    const gridHelper = new THREE.GridHelper(10, 10)
    this.scene.add(gridHelper)
  }
}

export default Base;

