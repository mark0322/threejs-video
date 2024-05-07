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

  // three.tick.add(time => {
    // console.log('time', time)
  // })
})
</script>
