<template>
          <div
          class="flex items-center space-x-8 border py-8 px-4 bg-white sort-box"
        >
          <div class="flex items-center space-x-2">
            <div class="flex flex-col">
              <span class="font-bold">{{info.arrivalDateTimeDisplay}}</span>
              <span>{{info.originAirport.code}}</span>
              <span>{{info.originAirport.city.name}}</span>
            </div>
            <DividerLine/>
            <div class="flex flex-col items-end">
              <span class="font-bold">{{info.departureDateTimeDisplay}}</span>
              <span>{{info.destinationAirport.code}}</span>
              <span>{{info.destinationAirport.city.name}}</span>
            </div>
          </div>
          <div class="flex flex-col items-center px-4">
            <span>Ucus Suresi</span>
            <span class="font-bold">{{info.flightDuration}}</span>
          </div>
        </div>
</template>

<script>
import DividerLine from '../Divider/DividerLine';
export default {
  name:'FlightCard',
  components:{
    DividerLine
  },
  props:{
    info:{
      type: Object,
      default: () => {}
    }
  }

}
</script>

<style>
.sort-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
}
</style>