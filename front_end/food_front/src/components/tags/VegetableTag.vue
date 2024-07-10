<template>
    <span
      class="vegetable-tag rounded tag"
      p="x-2"
      border="~ green-200 dark:green-800"
      :class="[
        active ? 'bg-green-600 opacity-90' : 'bg-green-300 opacity-20',
        active ? 'text-green-100' : 'text-green-800 dark:text-green-200'
      ]"
    >
      <slot />
    </span>
  </template>
  
  
  <script lang="ts" setup>
  // 赋予属性，是否选中
  const props = defineProps<{
    active: boolean
  }>()
  </script>
  
  <style scoped>
  .vegetable-tag {
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-radius: 0.25rem;
  }
  </style>
  