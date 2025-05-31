<template>
  <div class="w-full flex items-start justify-center pt-[100px]">
    <div class="relative w-full flex justify-center h-[100vh]">
      <!-- First Image (Sticky Centered) -->
      <div class="sticky top-[100px] h-[80vh] flex items-center justify-center z-10">
        <img
          src="@/assets/before.png"
          alt="Before Lawn"
          class="w-1/2 h-auto object-cover rounded-xl shadow-lg"
        >
      </div>

      <!-- Second Image (Overlay Fade In) -->
      <div class="absolute top-[100px] h-[80vh] flex items-center justify-center z-20 pointer-events-none">
        <img
          src="@/assets/after.png"
          alt="After Lawn"
          class="w-1/2 h-auto object-cover transition-opacity duration-500 ease-in-out rounded-xl shadow-lg"
          :style="{ opacity: opacity }"
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const opacity = ref(0)

const handleScroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const triggerPoint = windowHeight / 2

  opacity.value = Math.min(1, (scrollY - triggerPoint) / triggerPoint)
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
