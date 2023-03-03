<template>
  <select id="countries" class="h-14 border border-gray-300 text-gray-900 text-lg rounded-lg
   focus:ring-blue-500 focus:border-blue-500 block w-64 p-2.5" required 
  @change="emitSelectedCity"
>
  <option value="">
      {{placeholder}}</option>
  <option v-for="(city,index) in cities"
  :v-model="selectedCity"
  :key="index"
  v-bind="$attrs"
>{{city}}</option>
</select>
{{ modelValue }}
</template>

<script>
import citiesData from '../../api/cities.json'
import { Dropdown } from 'flowbite';
export default {
    name: 'DropdownMenu',
    data () {
        return {
          cities: citiesData.cities,
          selectedCity: null
        }
    },
    props: {
      placeholder: {
        type: String,
        default: ''
      },
      modelValue: {
      type: String,
      default: '',
    }
    },
    methods: {
      emitSelectedCity(e) {
        this.$emit('selected-city',e.target.value)
    },
      handleOpenDropdown () {
          const $targetEl = document.getElementById('dropdown');
          const $triggerEl = document.getElementById('dropdownButton');
          const dropdown = new Dropdown($targetEl, $triggerEl);
          dropdown.show()
            console.log('calistii')
        }
    }

}
</script>
