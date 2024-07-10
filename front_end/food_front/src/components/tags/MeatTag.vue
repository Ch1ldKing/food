<template>
    <span
      class="meat-tag rounded tag"
      p="x-2"
      border="~ red-200 dark:red-800"
      :class="[
        active ? 'bg-red-600 opacity-90' : 'bg-red-300 opacity-20',
        active ? 'text-red-100' : 'text-red-800 dark:text-red-200'
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
  .meat-tag {
    padding: 0.5rem 1rem;
    border: 1px solid;
    border-radius: 0.25rem;
  }
  </style>
  