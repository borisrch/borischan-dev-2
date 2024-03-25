<script setup lang="ts">
import PlantShelf from '../components/PlantShelf.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function routeCaseStudies() {
  router.push(`/case-studies`)
}
</script>

<template>
  <main class="flex flex-col justify-center items-center bg-beige rounded-[13px]">
    <div class="grid grid-cols-1 gap-4 w-[375px] sm:w-[600px] py-12 sm:py-16">
      <div class="mt-16">
        <PlantShelf/>
      </div>


      <div class="flex space-x-4 items-center mt-8 mb-2">
        <h1 class="font-serif font-bold text-5xl tracking-tighter text-prussian">
          Hi, I'm Boris.
        </h1>
      </div>

      <h2 class="text-3xl font-semibold tracking-tight text-tangerine">
        friendly web maker based in Toronto, ON.
      </h2>

      <p>
        I take on a few client projects each year, building unique digital experiences on the web.
      </p>

      <h3 class="font-serif text-2xl font-semibold tracking-tight text-prussian">
        If you're looking for a <span class="underline-marker">personalized approach</span> to revitalize your brand and online presence, you've come to the right place.
      </h3>

      <p class="tracking-tight">
        I'm interested in working with small and mid-sized companies. They're often underserved, ignored, and overworked.
      </p>

      <p>
        My team and I are here for them.
      </p>

      <div class="grid grid-cols-2 sm:flex gap-x-2 gap-y-4 mt-4">
        <button class="transition-all font-serif bg-fire text-beige px-5 py-3 rounded-3xl font-bold hover:bg-tangerine cursor-pointer">
          cast an email
        </button>

        <button
          class="transition-all font-serif bg-prussian text-beige px-5 py-3 rounded-3xl font-bold hover:bg-tangerine cursor-pointer"
          @click.prevent="routeCaseStudies">
          case studies
        </button>

        <div class="col-span-2 h-[48px] sm:h-auto">
          <button class="w-full transition-all font-serif box-border border-2 border-prussian text-prussian px-5 py-3 rounded-3xl font-bold hover:text-tangerine hover:border-tangerine cursor-pointer">
            view portfolio
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
h3 {
  z-index: 2;
}

.underline-marker {
  position: relative;
}

.underline-marker::after {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #FCBF49;
  width: 100%;
  opacity: 50%;
  height: 10px;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
