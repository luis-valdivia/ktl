<script setup>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/FooterComponent.vue'
</script>

<template>
  <div>
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>