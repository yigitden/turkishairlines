<template>
  <button type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 
  font-medium text-base px-5 py-2.5 text-center mr-2 mb-2 w-full" :disabled="disabled"
  :class="addToClass">{{text}}</button>
</template>

<script>
export default {
    name:'ButtonCard',
    props:{
      text:{
        type:String,
        default:''
      },
      disabled:{
        type:Boolean,
        default:false
      }
    },
    computed:{
      addToClass () {
        return this.disabled ? 'cursor-not-allowed bg-red-300 hover:bg-red-200' : 'cursor-pointer'
      }
    }
    
}
</script>

<style>

</style>