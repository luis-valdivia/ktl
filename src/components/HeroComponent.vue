<script>
export default {
  data() {
    return {
      catchphrase_part_1: 'In case of lawn care...',
      catchphrase_part_2: '...call the lawn bear!',
    }
  },
  mounted() {
    this.$refs.title.addEventListener('animationend', () => {
      this.$refs.title.style.animation = 'none'
    })
  },
}
</script>

<template>
  <div>
    <img
      src="@/assets/branch.png"
      alt="left branch"
      class="floating-branch branch-left"
    >
    <img
      src="@/assets/branch.png"
      alt="right branch"
      class="floating-branch branch-right"
    >
    <div class="flex justify-center items-center h-screen">
      <div class="w-full max-w-screen-xl mx-auto px-6">
        <div class="flex flex-col items-center justify-center text-center">
          <!-- <img
          src="../assets/hero.JPG"
          alt="Image"
          class="max-w-xl h-auto mb-6"
        > -->
          <h1
            ref="title"
            class="hero-title text-3xl md:text-7xl lg:text-9xl"
          >
            <div class="mr-10">
              <span
                v-for="(letter, index) in catchphrase_part_1"
                :key="index"
                class="text-gray-100 italic"
                :style="{ 'animation-delay': `${index * 50 + 150 }ms` }"
              >
                {{ letter }}
              </span>
            </div>
            <div class="ml-10">
              <span
                v-for="(letter, index) in catchphrase_part_2"
                :key="index"
                class="text-gray-100 italic"
                :style="{ 'animation-delay': `${index * 50 + 1450 }ms` }"
              >
                {{ letter }}
              </span>
            </div>
          </h1>
        </div>
      </div>
    </div>
    <!-- Scroll Prompt -->
    <div class="-mt-20 mb-20 text-center animate-bounce">
      <p 
        style="color: var(--lavender-pink);"
        class="text-lg font-medium"
      >
        Scroll down to see the magic happen
      </p>
      <svg
        class="w-6 h-6 mx-auto mt-2 text-gray-100"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>
</template>
  
<style scoped>
.floating-branch {
  position: absolute;
  z-index: 0; /* Behind your text */
  width: 400px;
  opacity: 0;
}

.branch-left {
  top: 10%;
  left: -100px;
  transform: rotate(-15deg);
  animation-delay: 1s;
  animation: float-in-left 2s ease forwards;
}

.branch-right {
  top: 65%;
  right: -100px;
  transform: rotate(15deg) scaleX(-1);
  animation-delay: 1.5s;
  animation: float-in-right 2s ease forwards;
}

@keyframes float-in-left {
  0% {
    transform: translateX(-100px) scale(0.9);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scale(1);
    opacity: 1;
  }
}

@keyframes float-in-right {
  0% {
    transform: translateX(0) scale(0.9) scaleX(-1);
    opacity: 0;
  }
  100% {
    transform: translateX(-100px) scale(1) scaleX(-1);
    opacity: 1;
  }
}

h1 span {
  animation: snake 0.4s ease forwards;
  opacity: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

.hero-title {
  /* font-size: 2rem; */
  margin-bottom: 2rem;
  white-space: nowrap;
  overflow: hidden;
  animation: type 1s steps(30, end) forwards;
}

@keyframes snake {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes type {
  from {
    width: 0;
  }
}
</style>
