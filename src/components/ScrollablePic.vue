<template>
  <div class="relative h-[600vh]">
    <div class="sticky h-screen w-full flex justify-center">
      <!-- First Image -->
      <img
        src="@/assets/before.png"
        alt="Before"
        class="absolute top-3/4 w-1/4 object-cover z-10"
        :style="{ opacity: 1 - opacity }"
      >
      <!-- Second Image -->
      <img
        src="@/assets/after.png"
        alt="After"
        class="absolute top-3/4 w-1/4 object-cover z-20 transition-opacity duration-100 ease-in-out"
        :style="{ opacity: opacity }"
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const opacity = ref(0)

const handleScroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  const blendStart = 0
  const blendEnd = windowHeight
  const blendRange = blendEnd - blendStart

  // Clamp between 0 and 1
  opacity.value = Math.min(1, Math.max(0, (scrollY - blendStart) / blendRange))
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
