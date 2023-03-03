<template>
  <div class="relative text-gray-400 focus-within:text-gray-600">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
    >
      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          :d="icon"
        />
      </svg>
    </div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      :placeholder="placeholder"
      class="block w-full py-3 h-14 pl-10 pr-4 text-lg text-black placeholder-gray-500 transition-all duration-200 border-gray-200 rounded-md caret-blue-600 focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
    />
  </div>
</template>

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    icon: {
      type: String,
      default: "",
    }
  },
};
</script>
