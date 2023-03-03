<template>
          <div
          class="flex items-center space-x-8 border py-8 px-4 bg-white sort-box"
        >
          <input type="radio"
            id="default-radio"
            :value="title"
            @change="handleChange"
            name="default-radio"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500"/>
          <div class="underline decoration-slate-400 underline-offset-4">
            {{title}}
          </div>
          <div class="flex flex-col items-center">
            <span>Yolcu Basina</span>
            <span class="font-bold">{{info.subcategories[0].price.currency}} {{info.subcategories[0].price.amount}}</span>
          </div>
        </div>
        <div class="bg-white order-4 my-2 items-center justify-center flex" v-if="selectedCat === title">
            <CategoryPriceCard :info="info.subcategories" :toggleValue="toggleValue"/>
          </div>
</template>

<script>
import CategoryPriceCard from './CategoryPriceCard';
export default {
    name:'CategoryCard',
    components:{
        CategoryPriceCard
    },
    inheritAttrs: false,

    props:{
    info:{
      type: Object,
      default: () => {}
    },
    title: {
        type:String,
        default:''
    },
    selectedCat: {
        type:String,
        default:''
    },
    toggleValue:{
        type:Boolean,
        default: false
    }
  },
  methods:{
    handleChange(e){
      this.$emit('selected-category',e.target.value)
    }
  }

}
</script>

<style>
.sort-box {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.05);
}
</style>