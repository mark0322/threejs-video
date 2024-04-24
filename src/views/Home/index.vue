<template>
  <div ref="containerRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup lang="ts">
import {Base} from '@/three'
import { onMounted, ref } from 'vue';

const containerRef = ref();

class Three extends Base {
  constructor(dom: HTMLDivElement) {
    super(dom);
  }
}

onMounted(() => {
  const three = new Three(containerRef.value);

  three.tick.add((deltaTime) => {
    // console.log('deltaTime', deltaTime)
  })
})
</script>
