<template>
  <section class="py-12 bg-green-50 rounded-2xl shadow-md">
    <h2 class="text-3xl font-bold text-center text-green-800 mb-8">
      Our Services
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        class="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
      >
        <h3 class="text-xl font-semibold text-green-700 mb-2">
          {{ service.title }}
        </h3>
        <p class="text-gray-600 text-sm">
          {{ service.description }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Lawn Care & Maintenance',
    description: 'Mowing, edging, fertilizing, and seasonal treatments to keep your lawn lush and healthy.',
  },
  {
    title: 'Landscape Design',
    description: 'Custom designs that blend aesthetics, functionality, and sustainability.',
  },
  {
    title: 'Mulching & Bed Edging',
    description: 'Professional mulching to suppress weeds and retain soil moisture, plus crisp bed edges.',
  },
  {
    title: 'Tree & Shrub Planting',
    description: 'Add structure and beauty with expertly placed greenery tailored to your environment.',
  },
  {
    title: 'Hardscaping',
    description: 'Patios, paths, and retaining walls built for both durability and style.',
  },
  {
    title: 'Seasonal Cleanups',
    description: 'Leaf removal, storm cleanup, and garden refreshes — we handle the mess so you don’t have to.',
  },
]
</script>
