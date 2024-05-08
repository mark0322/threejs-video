<template>
  <div ref="containerRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup lang="ts">
import {Base} from '@/three'
import { onMounted, ref } from 'vue';
import * as THREE from 'three';

const containerRef = ref();

class Three extends Base {
  constructor(dom: HTMLDivElement) {
    super(dom);

    this.light()

    this.test()
  }

  test() {
    const textureLoader = new THREE.TextureLoader();

    const geometry = new THREE.PlaneGeometry(5, 5);
    const material = new THREE.MeshBasicMaterial({

    })    
    // const material = new THREE.MeshStandardMaterial({
    //   color: 'red',
    //   map: textureLoader.load(''),
    //   // wireframe: true
    // });
    const mesh = new THREE.Mesh(geometry, material);

    this.scene.add(mesh)
  }

  light() {
    // ambient
    this.scene.add(new THREE.AmbientLight(0xffffff, 0.7));

    const light = new THREE.PointLight( 0xFFFFFF, 3 );
    light.position.set(-1, 1, 1)
    this.scene.add( light );

    const helper = new THREE.PointLightHelper( light, .3 );
    this.scene.add( helper );
  }
}

onMounted(() => {
  const three = new Three(containerRef.value)
})
</script>
