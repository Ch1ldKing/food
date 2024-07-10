<template>
    <span
      class="grain-tag rounded tag"
      p="x-2"
      border="~ yellow-200 dark:yellow-800"
      :class="[
        active ? 'bg-yellow-600 opacity-90' : 'bg-yellow-300 opacity-20',
        active ? 'text-yellow-100' : 'text-yellow-800 dark:text-yellow-200'
      ]"
    >
      <slot />
    </span>
  </template>
  
  <script lang="ts" setup>
  const props = defineProps<{
    active: boolean
  }>()
  </script>
  
  <style scoped>
  .grain-tag {
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-radius: 0.25rem;
  }
  </style>
  