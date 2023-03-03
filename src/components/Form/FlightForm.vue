<template>
  <form>
    <div class="flex items-center sm:justify-center space-x-4 md:flex-row flex-col sm:space-y-6 md:space-y-0">
      <div class="flex items-baseline min-w-0 px-4 sm:px-0 space-x-4 sm:flex-col md:flex-row sm:space-y-6 md:space-y-0">
        <Dropdown placeholder="Nereden" 
          @selected-city="emitSelectedFrom"/>
        <Dropdown placeholder="Nereye" 
          @selected-city="emitSelectedtoWhere" :disabled="!setDisabled"/>
        <BaseInput
          icon="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
          :placeholder="currentDate"
        />
      </div>
      <PopoverMenu @passengerCountChanged="emitPassengerCount"/>

      <ButtonCard text="UCUS ARA" 
      @click="navigateToNextPage"
      class="inline-flex items-center justify-center h-14 flex-shrink-0 w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 border border-transparent rounded-md sm:mt-0 sm:w-auto"
      
      type="button"/>
    </div>
  </form>
  <FormModal v-if="isModalOpen" @close-modal="closeModal"/>
</template>

<script>
import BaseInput from "../Input/BaseInput";
import jsonData from "../../api/data.json";
import citiesData from "../../api/cities.json";
import PopoverMenu from "../Popover/PopoverMenu";
import Dropdown from "../Dropdown/Dropdown";
import FormModal from "../Modal/FormModal";
import { mapGetters } from "vuex";
import ButtonCard from '../Button/ButtonCard'

export default {
  name: "FlightForm",
  components: { BaseInput, PopoverMenu, Dropdown,FormModal,ButtonCard  },
  data() {
    return {
      from: "",
      toWhere: "",
      passengers: 1,
      flights: jsonData,
      cities: citiesData.cities,
      currentDate: "",
      isModalOpen: false
    };
  },
  computed: {
    ...mapGetters(["getFlights"]),
    setDisabled () {
      return this.from
    }
  },

  mounted() {
    const today = new Date();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear().toString();
    this.currentDate = `${day}.${month}.${year}`;
  },
  methods: {
    closeModal (newValue) {
      this.isModalOpen = newValue
    },
    emitSelectedFrom (newValue) {
      this.from = newValue
    },
    emitSelectedtoWhere (newValue) {
      this.toWhere = newValue
    },
    emitPassengerCount (data) {
      this.passengers = data
    },
    navigateToNextPage() {
      const checkFlights = this.getFlights.find(
        (airport) => airport.originAirport.city.name === this.from && airport.destinationAirport.city.name === this.toWhere
      );

      if (checkFlights) {
        const form = 
          {
            from: this.from,
            toWhere: this.toWhere,
            passengers: this.passengers,
          }
        
        this.$store.commit('updateForm',form)
        this.$store.commit('updateStep',true)
        this.$router.push({
        name: "SearchResults"
      });
      } else {
        this.isModalOpen = true
      }
    },
  },
};
</script>