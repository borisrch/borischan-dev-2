<script setup lang="ts">
import Cactus from '../assets/plant-1.png'
import Grass from '../assets/plant-2.png'
import Lavender from '../assets/plant-3.png'
import Bonsai from '../assets/plant-4.png'
</script>

<template>
  <div class="relative flex w-64 sm:w-80">
    <div class="relative w-8">
      <div class="absolute bottom-0 bg-[#e64a19] h-4 w-6 rounded-b-lg"/>
      <img
        :src="Cactus"
        class="absolute w-9 bottom-5 -left-1"/>
      <div class="absolute bottom-4 -left-0.5 bg-[#bf360c] h-2 w-7 rounded-b"/>
    </div>

    <div class="relative w-8">
      <div class="absolute bottom-0 bg-[#e64a19] h-4 w-6 rounded-b-lg hue-rotate-30 brightness-150"/>
      <img
        :src="Grass"
        class="absolute w-9 bottom-5 -left-1"/>
      <div class="absolute bottom-4 -left-0.5 bg-[#bf360c] h-2 w-7 rounded-b hue-rotate-30 brightness-125"/>
    </div>

    <div class="relative w-8">
      <div class="absolute bottom-0 bg-[#e64a19] h-4 w-6 rounded-b-lg -hue-rotate-30"/>
      <img
        :src="Lavender"
        class="absolute w-10 bottom-5 -left-1"/>
      <div class="absolute bottom-4 -left-0.5 bg-[#bf360c] h-2 w-7 rounded-b -hue-rotate-30"/>
    </div>

    <div class="ml-auto relative w-8">
      <div class="absolute bottom-0 bg-[#e64a19] h-4 w-6 rounded-b-lg hue-rotate-180"/>
      <img
        :src="Bonsai"
        class="absolute w-9 bottom-5 -left-1"/>
      <div class="absolute bottom-4 -left-0.5 bg-[#bf360c] h-2 w-7 rounded-b hue-rotate-180"/>
    </div>

    <div class="absolute bg-mirage h-1.5 rounded-b-xl w-full"/>
  </div>
</template>

<style scoped>

</style>