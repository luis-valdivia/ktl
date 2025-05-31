<script>
export default {
  data() {
    return {
      isNavHidden: false,
      prevScrollpos: window.pageYOffset,
      mobileMenuOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      const currentScrollPos = window.pageYOffset
      const scrollDelta = currentScrollPos - this.prevScrollpos
    
      // Ignore tiny scrolls that are likely browser chrome moving
      const isSignificant = Math.abs(scrollDelta) > 10
    
      if (!isSignificant) return
    
      // Don't hide navbar if near the top of the page (mobile auto-scroll)
      if (currentScrollPos < 100) {
        this.isNavHidden = false
      } else {
        this.isNavHidden = scrollDelta > 0 // hide if scrolling down
      }
    
      this.prevScrollpos = currentScrollPos
    },
    toggleMobileMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    closeMobileMenu() {
      this.mobileMenuOpen = false
    }
  },
}
</script>

<template>
  <nav
    class="shadow fixed top-0 w-full z-30"
    :class="{ 'nav-hidden': isNavHidden }"
  >
    <div class="max-w-7xl mx-auto px-3 sm:px-7 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img
            class="h-16 w-16"
            src="../assets/logo.png"
            alt="Logo"
          >
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:block">
          <div class="ml-10 flex items-baseline space-x-4">
            <a
              href="/"
              class="nav-link"
            >Home</a>
            <a
              href="/services"
              class="nav-link"
            >Services</a>
            <a
              href="/about"
              class="nav-link"
            >About Us</a>
            <a
              href="/contact"
              class="nav-link"
            >Contact Us</a>
          </div>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden">
          <button
            style="color: var(--lavender-pink);"
            class="text-gray-200 hover:text-white focus:outline-none"
            @click="toggleMobileMenu"
          >
            <svg
              class="h-8 w-8"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <transition name="fade">
      <div
        v-if="mobileMenuOpen"
        class="md:hidden fixed inset-0 bg-gray-800 bg-opacity-90 z-40 flex flex-col items-center justify-center space-y-6 text-white text-xl"
      >
        <a
          href="/"
          class="hover:underline"
          @click="closeMobileMenu"
        >Home</a>
        <a
          href="/services"
          class="hover:underline"
          @click="closeMobileMenu"
        >Services</a>
        <a
          href="/about"
          class="hover:underline"
          @click="closeMobileMenu"
        >About Us</a>
        <a
          href="/contact"
          class="hover:underline"
          @click="closeMobileMenu"
        >Contact Us</a>
        <button
          class="absolute top-6 right-6 text-3xl"
          @click="closeMobileMenu"
        >
          &times;
        </button>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
nav {
  background: var(--rich-black);
}
.nav-hidden {
  transform: translateY(-100%);
  transition: transform 0.4s ease-in-out;
}

.nav-link {
  @apply text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md font-medium;
  color: var(--lavender-pink);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
