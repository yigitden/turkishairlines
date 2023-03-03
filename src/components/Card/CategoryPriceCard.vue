<template>
  <div v-for="(item, index) in info" :key="index">
    <div class="p-4 w-96">
      <div class="header flex justify-between p-4 pb-16">
        <span class="font-bold text-2xl">{{ item.brandCode }}</span>
        <div>
          <span class="text-sm pr-2">{{ item.price.currency }}</span>
          <span class="font-bold text-2xl">{{ item.price.amount }}</span>
        </div>
      </div>
      <div class="border border-gray-300 h-52">
        <div
          class="border-b border-gray-300 p-2"
          v-for="(right, index) in item.rights"
          :key="index"
        >
          {{ right }}
        </div>
      </div>
      <div class="content-end">
        <ButtonCard text="Ucusu sec" :disabled="toggleValue && item.brandCode !== 'ecoFly'" @click="goToResultPage(item.status,item.price.amount,item.price.currency )"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonCard from "../Button/ButtonCard";
export default {
  name: "CategoryPriceCard",
  components: { ButtonCard },
  data() {
    return {
      categoryCardInfo: [],
    };
  },
  props: {
    info: {
      type: Object,
      default: () => {},
    },
    toggleValue: {
      type: Boolean,
      default: false,
    },
  },
  methods:{
    goToResultPage (status,amount,currency) {
        this.$store.commit('updateFlightStatus',status)
        this.$router.push({ name: "FinalResult"});
        const fullPrice = currency+' '+amount
        if(status === 'AVAILABLE') {
            this.$store.commit('updatePaymentPrice',fullPrice)
        }
      }
    }
};
</script>

<style scoped>
.header {
  background-color: #f9f9f9;
}
</style>