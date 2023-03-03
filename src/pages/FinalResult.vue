<template>
  <div class="mx-auto w-full flex items-center flex-col mt-10 text-4xl	">
    <div class="flex">
      <font-awesome-icon
        icon="fa-check"
        class="mr-14"
        v-if="getFlightStatus === 'AVAILABLE'"
      />
      <font-awesome-icon icon="fa-triangle-exclamation" class="mr-14" v-else />
      <span class="mb-10">
        Kabin seciminiz
        {{
          getFlightStatus === "AVAILABLE" ? "tamamlandi" : "tamamlanamadi"
        }}</span
      >
    </div>
<DividerLine class="w-5/6 mb-8"/>
    <div v-if="getFlightStatus === 'AVAILABLE'">
      <span class="mr-14">Toplam Tutar</span>
      <span>{{getPaymentPrice}}</span>
    </div>
    <div v-else class="flex justify-end items-end">
      <ButtonCard text="Basa Don" @click="goBackToHomePage"/>
    </div>
  </div>
</template>

<script>
import DividerLine from "@/components/Divider/DividerLine";
import ButtonCard from "@/components/Button/ButtonCard";
import { mapGetters } from "vuex";
export default {
  name: "FinalResult",
  computed: {
    ...mapGetters(["getFlightStatus","getPaymentPrice"]),
  },
  components: {
    ButtonCard,DividerLine
  },
  created() {
    console.log(this.getFlightStatus);
  },
  mounted() {
    this.checkFlightStatus();
  },
  methods: {
    goBackToHomePage() {
        this.$router.push({
          name: "Home",
        });
        this.$store.commit('updatePaymentPrice',null)
    },
    checkFlightStatus() {
      if (!this.getFlightStatus) {
        this.$router.push({
          name: "Home",
        });
      }
    },
  },
};
</script>

<style>
</style>