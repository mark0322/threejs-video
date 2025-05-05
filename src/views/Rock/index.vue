<template>
  <div ref="containerRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup lang="ts">
import {Base} from '@/three'
import { AmbientLight, Mesh, MeshPhongMaterial, SphereGeometry } from 'three';
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const containerRef = ref();

class Three extends Base {
  constructor(dom: HTMLDivElement) {
    super(dom);

    this.light()

    this.rock()
  }

  rock() {
    const textureLoader = new THREE.TextureLoader()
    const textureMap = textureLoader.load('/Rock/Color.jpg')

    const material = new THREE.MeshStandardMaterial({
      // color: 'blue'
      map: textureMap,
      normalMap: textureLoader.load('/Rock/NormalGL.jpg'),
      aoMap: textureLoader.load('/Rock/AO.jpg'),
      displacementMap: textureLoader.load('/Rock/Displacement.jpg'),
      displacementScale: 0.3,

      roughnessMap: textureLoader.load('/Rock/Roughness.jpg'),
      roughness: 0.25,

      // side:THREE.DoubleSide,
      // wireframe: true
    });
    // const geometry = new THREE.PlaneGeometry(3, 3, 20, 20);
    const geometry = new THREE.SphereGeometry(3, 100, 100)

    const rock = new Mesh(geometry, material);
    this.scene.add(rock);
  }

  light() {
    // ambient
    this.scene.add(new AmbientLight(0xffffff, .2))

    // directionLight
    const light = new THREE.DirectionalLight( 0xFFFFFF, 8 );
    light.position.set(-3, 3, 3)
    this.scene.add( light );
    const helper = new THREE.DirectionalLightHelper( light, 1 );
    this.scene.add( helper );

    // // ambient
    // this.scene.add(new AmbientLight(0xffffff, 0.7))

    // // directionLight
    // const light = new THREE.DirectionalLight( 0xFFFFFF, 3 );
    // light.position.set(-3, 3, 3)
    // this.scene.add( light );
    // const helper = new THREE.DirectionalLightHelper( light, 3 );
    // this.scene.add( helper );
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);
})
</script>
