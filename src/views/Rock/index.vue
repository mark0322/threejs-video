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

    this.plane()
  }

  plane() {
    const texture = this.textureLoader.load('/Rock/Color.jpg');
    const mat = new THREE.MeshStandardMaterial({
      map: this.textureLoader.load('/Rock/Color.jpg'),
      normalMap: this.textureLoader.load('/Rock/NormalGL.jpg'),
      aoMap: this.textureLoader.load('/Rock/AO.jpg'),

      displacementMap: this.textureLoader.load('/Rock/Displacement.jpg'),
      displacementScale: 0.15,

      roughnessMap: this.textureLoader.load('/Rock/Roughness.jpg'),
      roughness: 0.85,

      side:THREE.DoubleSide,
      // wireframe: true
    });

    // const geo = new THREE.IcosahedronGeometry(3, 6);
    // const geo = new THREE.SphereGeometry(3, 50, 50);
    const geo = new THREE.PlaneGeometry(3, 3, 20, 20);

    const rock = new Mesh(geo, mat);
    this.scene.add(rock);
  }

  light() {
    // ambient
    this.scene.add(new AmbientLight(0xffffff, 0.7))

    // directionLight
    const light = new THREE.DirectionalLight( 0xFFFFFF, 3 );
    light.position.set(-3, 3, 3)
    this.scene.add( light );
    const helper = new THREE.DirectionalLightHelper( light, 3 );
    this.scene.add( helper );
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);
})
</script>
