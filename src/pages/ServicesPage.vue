<script setup>
import ServiceHero from '@/components/Services/ServiceHero.vue'
import ServiceList from '@/components/Services/ServiceList.vue'
import CallToAction from '@/components/Services/CallToAction.vue'
</script>

<template>
  <div class="space-y-16">
    <ServiceHero />
    <ServiceList />
    <CallToAction />
  </div>
</template>

<style scoped>
div {
    margin-top: 100px
}
</style>

