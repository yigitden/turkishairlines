<template>
  <div class="flex flex-col w-11/12 mx-auto">
    <div class="bg-red-500 text-lg p-1 w-36 text-center text-gray-100 mt-4">
      UCUS
    </div>
    <span class="text-2xl my-4">{{getForm.from}} - {{getForm.toWhere}} {{getForm.passengers}} Yolcu</span>
    <div class="flex flex-col mb-4">
      <div class="flex items-center">
        <span>Promosyon Kodu</span>
        <label class="relative inline-flex items-center cursor-pointer ml-4">
          <input type="checkbox" @click="handleToggle" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"
          ></div>
        </label>
      </div>
      <div class="space-y-4 mt-4" v-if="toggleValue">
        <p>
          Promosyon Kodu secenegi ile tum Economy kabini Eco Fly paketlerini %50
          indirimle satin alabilirsiniz!
        </p>
        <p>
          Promosyon Kodu secenegi aktifken Eco Fly paketi haricinde secim
          yapilamamaktadir
        </p>
      </div>
    </div>
    <div class="result-table">
      <div
        class="bg-gray-800 text-gray-100 space-x-6 p-2 flex justify-end items-center"
      >
        <span>Siralama Kriteri</span>
        <span 
        class="p-2 border-solid border border-white  hover:opacity-90 rounded-md px-4 cursor-pointer" 
        @click="sortingFlightsByPrice"
          >Ekonomi Kabin Ucreti</span
        >
        <span 
        class="p-2 border-solid border border-white hover:opacity-90 rounded-md px-4 cursor-pointer"
         @click="sortingFlightsByTimes"
          >Kalkis Saati</span
        >
      </div>
      <div class="flights-sorting border border-black">
        <div class="flex flex-col items-center" v-for="(info,index) in flightInfo" :key="index">
          <div class="flex justify-center p-4 flex-wrap"> 
            <FlightCard :info="info"/>
            <CategoryCard :info="info.fareCategories.ECONOMY" title="ECONOMY" :toggleValue="toggleValue" @selected-category="emitSelectedCat" :selectedCat="selectedCat"/>
            <CategoryCard :info="info.fareCategories.BUSINESS" title="BUSINESS" :toggleValue="toggleValue" @selected-category="emitSelectedCat" :selectedCat="selectedCat"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FlightCard from "@/components/Card/FlightCard";
import CategoryCard from "@/components/Card/CategoryCard";
import { mapGetters } from "vuex";

export default {
  name: "SearchResults",
  data(){
    return {
      flightInfo: [],
      isSortingPrice: true,
      toggleValue:false,
      selectedCat: null
    }
  },
  components: {
    FlightCard,
    CategoryCard
  },
  mounted() {
    this.checkFlightStep()
  },
  created() {
    this.filteredFlights()
  },
  computed: {
    ...mapGetters(["getForm","getStep","getFlights"]),
    checkFlightSearching () {
      return this.$state
    },
  },
  methods: {
    emitSelectedCat(newValue){
      this.selectedCat = newValue
    },
    handleToggle() {
      this.toggleValue = !this.toggleValue;
    },
    filteredFlights () {
      this.flightInfo = this.getFlights.filter((flight) => flight.originAirport.city.name === this.getForm.from 
      && flight.destinationAirport.city.name === this.getForm.toWhere)
      this.sortingFlightsByPrice()
    },
    sortingFlightsByTimes () {
      this.flightInfo.sort(this.compareByArrivalTime);
      this.isSortingPrice = false
    },
    sortingFlightsByPrice () {
      this.flightInfo.sort((a, b) => {
        const priceA = a.fareCategories.ECONOMY.subcategories[0].price.amount;
        const priceB = b.fareCategories.ECONOMY.subcategories[0].price.amount;
        
        if (priceA < priceB) {
          return -1;
        }
        if (priceA > priceB) {
          return 1;
        }
        return 0;
      });
    },
    compareByArrivalTime(a, b) {
      const timeA = a.arrivalDateTimeDisplay.split(":");
      const timeB = b.arrivalDateTimeDisplay.split(":");
      if (timeA[0] < timeB[0]) {
        return -1;
      } else if (timeA[0] > timeB[0]) {
        return 1;
      } else {
        if (timeA[1] < timeB[1]) {
          return -1;
        } else if (timeA[1] > timeB[1]) {
          return 1;
        } else {
          return 0;
        }
      }
    },
    checkFlightStep () {
      if(!this.getStep) {
        this.$router.push({
        name: "Home"
      });
      }
    }
  },

};
</script>

<style scoped>
.flights-sorting {
  background-color: #f9f9f9;
}
</style>