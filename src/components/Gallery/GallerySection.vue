<template>
  <section class="py-12 text-center bg-green-50 rounded-2xl shadow-md">
    <h2 class="text-3xl font-bold text-black mb-4">
      Gallery
    </h2>
    <p class="mx-auto text-lg text-gray-700 mb-10">
      At Koala T, we believe our work speaks for itself. Trust the process and let your eyes be the judge!
    </p>
    <!-- LightWidget WIDGET -->
    <iframe
      src="//lightwidget.com/widgets/b8a9525d818259d595cbb99a7c87e6ef.html"
      scrolling="no"
      allowtransparency="true"
      class="lightwidget-widget"
      style="width:100%;border:0;overflow:hidden;"
    />
  </section>
</template>


<script>
export default {
  mounted() {
    // Dynamically load LightWidget script
    const script = document.createElement('script')
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js'
    script.async = true
    document.body.appendChild(script)
  },
}
</script>

<style scoped>
section {
    margin-top: 100px;
}
</style>