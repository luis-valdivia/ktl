<template>
  <form
    class="grid gap-6 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg"
    @submit.prevent="handleSubmit"
  >
    <h2 class="text-2xl font-bold text-green-800 text-center">
      Send Us a Message
    </h2>

    <input
      v-model="form.name"
      type="text"
      placeholder="Your Name"
      required
      class="input"
    >

    <input
      v-model="form.email"
      type="email"
      placeholder="Your Email"
      required
      class="input"
    >

    <textarea
      v-model="form.message"
      rows="5"
      placeholder="Your Message"
      required
      class="input"
    />

    <button
      type="submit"
      class="bg-green-700 text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition"
    >
      Send Message
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

const handleSubmit = () => {
  // Placeholder: Connect to backend or email service later
  alert(`Message sent! Thanks, ${form.name}.`)
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-400;
}
</style>
