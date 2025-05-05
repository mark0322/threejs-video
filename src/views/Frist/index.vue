<template>
  <div ref="containerRef" style="width: 100vw; height: 100vh;"></div>
</template>

<script setup lang="ts">
import {Base} from '@/three'
import { onMounted, ref } from 'vue';
import { BufferGeometry, DoubleSide, Line, LineBasicMaterial, Matrix4, Mesh, MeshBasicMaterial, Points, PointsMaterial, Vector3 } from 'three';

const containerRef = ref();

const vectors = [
  new Vector3(1, 5, 0),
  new Vector3(3, 5, 0),
  new Vector3(3, 4, 0),
  new Vector3(1, 4, 0),
  new Vector3(1, 3, 0),
  new Vector3(3, 3, 0),
  new Vector3(3, 2, 0),
  new Vector3(1, 2, 0),
]

class Three extends Base {
  constructor(dom: HTMLDivElement) {
    super(dom);


    this.points()
  }

  points() {
    const geometry = new BufferGeometry().setFromPoints( vectors )
    const material = new PointsMaterial({
      color: 'red',
      size: .1
    })
    const points = new Points(geometry, material)

    // points.scale.set(0.1, 0.2, 0.1)
    const matrix = new Matrix4()
    const rotateXMatrix = matrix.makeRotationX(Math.PI / 2)
    points.applyMatrix4(rotateXMatrix)

    const translateZMatrix = matrix.makeTranslation(new Vector3(0, 0, 3))
    points.applyMatrix4(translateZMatrix)


    this.scene.add(points)
  }


}

onMounted(() => {
  const three = new Three(containerRef.value)
})
</script>
