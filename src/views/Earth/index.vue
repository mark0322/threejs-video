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

    this.earth()
  }


  earth() {
    const textureLoader = new THREE.TextureLoader();

    const color = textureLoader.load('/Earth/color.png');

    const mat = new THREE.MeshStandardMaterial({
      // color: '#3399ee',
      map: color,
      // wireframe: true,
      // flatShading: true,
      
      normalMap: textureLoader.load('/Earth/normal.png'),
      displacementMap: textureLoader.load('/Earth/displacement.jpg'),
      displacementScale: 0.7,
      metalnessMap: textureLoader.load('/Earth/MR.png'),
      metalness: 0.1,
      roughnessMap: textureLoader.load('/Earth/ROUGHNESS.png'),
      roughness: 0.5,
    });
    // const geo = new THREE.IcosahedronGeometry(0.5, 30);
    const geo = new THREE.SphereGeometry(3, 40, 40);
    // const geo = new THREE.PlaneGeometry(8, 4, 30, 30);
    const sphere = new Mesh(geo, mat);
    sphere.rotateY(-Math.PI);
    this.scene.add(sphere)
  }

  light() {
    // ambient
    this.scene.add(new AmbientLight(0xffffff, 0.2))

    // directionLight
    const light = new THREE.DirectionalLight( 0xFFFFFF, 3 );
    light.position.set(-3, 3, 3)
    this.scene.add( light );
    const helper = new THREE.DirectionalLightHelper( light, 1 );
    this.scene.add( helper );
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);
})
</script>
