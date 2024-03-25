<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="sm:h-dvh sm:p-16 flex flex-col justify-center items-center">
    <div class="text-mirage rounded-none w-full">
      <RouterView />
    </div>

    <footer class="py-4 px-8 flex flex-col sm:flex-row justify-between w-full text-prussian opacity-60 space-y-2">
      <div class="text-xs">
          <span>
            © 2024 - Designed, built, and backed by <span class="font-semibold underline">Boris Chan</span>.
          </span>

          <span>
            Icons by <a target="_blank" class="underline" href="https://icons8.com/">Icons8</a>
          </span>
      </div>

      <div class="text-xs">
        We ❤️ small business
      </div>
    </footer>
  </div>
</template>

<style scoped>

</style>
