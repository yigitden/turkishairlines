<template>
  <button
    @mouseover="handlePopover"
    id="popoverButton"
    data-popover-target="popover-bottom"
    data-popover-placement="bottom"
    type="button"
    class="text-white relative h-14 w-40 flex text-lg justify-between items-center bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center "
  >
    Yolcu ({{ passengerCount }})
    <font-awesome-icon :icon="setPassengerIcon" />
    <font-awesome-icon icon="fa-plus" v-if="passengerCount >= 3" class="absolute right-2.5"/>
  </button>
  <div
    data-popover
    id="popover-bottom"
    role="tooltip"
    class="absolute z-10 invisible inline-block max-w-xs text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0"
  >
    <div
      class="px-3 py-2 bg-gray-100 border-b border-gray-200 rounded-t-lg"
    >
      <h3 class="font-semibold text-gray-900">
        Kabin ve yolcu secimi
      </h3>
    </div>
    <div class="px-3 py-2 flex flex-col items-center justify-around">
      <div class="flex space-x-6">
        <div class="flex items-center">
          <input
            id="default-radio-1"
            checked
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            for="default-radio-1"
            class="ml-2 text-sm font-normal text-gray-900"
            >Economy Class</label
          >
        </div>
        <div class="flex items-center">
          <input
            id="default-radio-2"
            type="radio"
            value=""
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"
          />
          <label
            for="default-radio-2"
            class="ml-2 text-sm font-normal text-gray-900 "
            >Business Class</label
          >
        </div>
      </div>
      <div class="flex justify-around items-center w-full mt-4">
        <div class="font-bold text-xl">Yolcu</div>
        <div class="flex items-center space-x-4">
          <button
            type="button"
            class="text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            @click.prevent="decrementPassengerCount"
          >
            -
          </button>
          <span class="font-normal text-base">{{passengerCount}}</span>
          <button
            type="button"
            class="text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none
             focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
             @click.prevent="incrementPassengerCount"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div data-popper-arrow></div>
  </div>
</template>

<script>
import { Popover } from "flowbite";
export default {
  name: "PopoverMenu",  
  inheritAttrs: false,
  data () {
    return {
      passengerCount: 1
    }
  },
  computed: {
    setPassengerIcon () {
        return this.passengerCount === 1 ? 'fa-user-large' : 'fa-user-group'
    }
  },
  watch: {
    passengerCount(newVal) {
      this.$emit('passengerCountChanged', newVal);
    }
  },
  methods: {
    incrementPassengerCount() {
      this.passengerCount++;
    },
    decrementPassengerCount() {
      if (this.passengerCount > 1) {
        this.passengerCount--;
      }
    },
    handlePopover() {
      const options = { placement: "bottom" };
      const $targetEl = document.getElementById("popover-bottom");
      const $triggerEl = document.getElementById("popoverButton");
      const popover = new Popover($targetEl, $triggerEl, options);
      popover.show();
    },
  },
};
</script>