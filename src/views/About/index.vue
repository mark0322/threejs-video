<template>
  <div ref="containerRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup lang="ts">
import {Base} from '@/three'
import { BoxGeometry, Mesh, MeshBasicMaterial } from 'three';
import { onMounted, ref } from 'vue';

const containerRef = ref();

class Three extends Base {
  constructor(dom: HTMLDivElement) {
    super(dom);

    this.box()
  }

  box() {
    const geo = new BoxGeometry()
    const mat = new MeshBasicMaterial({
      color: 0xee3399
    })
    const mesh = new Mesh(geo, mat)
    this.scene.add(mesh)
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);

  three.tick.add((deltaTime) => {
    // console.log('deltaTime', deltaTime)
  })
})
</script>
