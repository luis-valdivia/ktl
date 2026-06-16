<template>
  <section class="py-12 bg-green-50 rounded-2xl shadow-md">
    <h2 
      style="color: var(--highlight);"
      class="text-3xl font-bold text-center mb-8"
    >
      Our Services
    </h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
      <div
        v-for="(service, index) in services"
        :key="index"
        style="background-color: var(--cadet-gray);"
        class="p-6 rounded-xl shadow hover:shadow-lg transition"
      >
        <h3 
          style="color: var(--rich-black);"
          class="text-xl font-semibold text-green-700 mb-2"
        >
          {{ service.title }}
        </h3>
        <p class="text-white text-sm">
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
    description: 'Mowing, weedeating, edging, and blowing to keep your lawn well maintained.',
  },
  {
    title: 'Mulching & Bed Edging',
    description: 'Professional mulching to suppress weeds and retain soil moisture, plus crisp bed edges.',
  },
  {
    title: 'Tree & Shrub Trimming',
    description: 'Get small trees and hedges back in shape.',
  },
  {
    title: 'Hardscaping',
    description: 'Patios, paths, and small retaining walls built for both durability and style.',
  },
  {
    title: 'Seasonal Cleanups',
    description: 'Leaf removal, storm cleanup, and garden refreshes — we handle the mess so you don’t have to.',
  },
  {
    title: 'Junk Hauls',
    description: 'Got a bunch of stuff to get rid of? We have a dump trailer.',
  },
  {
    title: 'Driveway Pressure Washing',
    description: 'Ground level pressure washing, at more affordable rates.',
  },
  {
    title: 'Handywork',
    description: 'Need furniture assembled? A fence stained? Minor repair work? All of the above? Yes, I can do that.',
  },
  {
    title: 'Landscape Design',
    description: 'Custom designs that blend aesthetics, functionality, and sustainability.',
  },
]
</script>
