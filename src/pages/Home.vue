<template>
  <section
    class="main-section relative py-10 bg-black sm:py-16 lg:py-24 xl:py-32 h-screen flex items-center "
  >
    
    <div class="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <HeroText />
      <div class="mt-8 lg:mt-12 p-5 bg-slate-300 rounded-md flight-form">
        <FlightForm />
      </div>
    </div>
  </section>
</template>
  
  <script>
import HeroText from "../components/Hero/HeroText.vue";
import FlightForm from "../components/Form/FlightForm.vue";

export default {
  name: "App",
  components: {
    HeroText,
    FlightForm,
  },
};
</script>
  
  <style scoped>
.main-section {
  background-color: #063048;
}
.flight-form {
  background-color: rgb(96 105 119 / 60%);
}
</style>