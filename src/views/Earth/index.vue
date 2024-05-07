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
    const mat = new THREE.MeshStandardMaterial({
      map: this.textureLoader.load('/Earth/color.png'),
      normalMap: this.textureLoader.load('/Earth/normal.png'),
      displacementMap: this.textureLoader.load('/Earth/displacement.jpg'),
      displacementScale: 1,
      // metalnessMap: this.textureLoader.load('/Earth/MR.png'),
      // metalness: 1,
      // roughnessMap: this.textureLoader.load('/Earth/ROUGHNESS.png'),
      // roughness: 0,
      // wireframe: true
    });
    // const geo = new THREE.IcosahedronGeometry(0.5, 30);
    // const geo = new THREE.SphereGeometry(0.5, 60, 60);
    const geo = new THREE.PlaneGeometry(8, 4, 30, 30);
    const sphere = new Mesh(geo, mat);
    this.scene.add(sphere)
  }

  light() {
    // ambient
    this.scene.add(new AmbientLight(0xffffff, .7))

    // directionLight
    const light = new THREE.DirectionalLight( 0xFFFFFF, 2 );
    light.position.set(-2, 2, 2)
    this.scene.add( light );
    const helper = new THREE.DirectionalLightHelper( light, 1 );
    this.scene.add( helper );

    // spotLight
    // const sphere = new Mesh(
    //   new SphereGeometry(.05),
    //   new THREE.MeshBasicMaterial({color: 'red'})
    // );
    // sphere.position.set( 1, 1, 0 );
    // this.scene.add(sphere);

    // const spotLight = new THREE.SpotLight( 0xff0000, 14 );
    // sphere.add( spotLight );

    // const spotLightHelper = new THREE.SpotLightHelper( spotLight );
    // this.scene.add( spotLightHelper );
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);
})
</script>
