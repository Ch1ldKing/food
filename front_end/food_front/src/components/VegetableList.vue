<template>
  <div class="food-list">
    <component v-for="food in filteredFoods" :is="getTagComponent()" :key="food.id" :active="food.active"
      @click="toggleActive(food)">
      {{ food.name }}
    </component>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { defineProps, defineEmits } from 'vue';
import VegetableTag from '@/components/tags/VegetableTag.vue';
import MeatTag from '@/components/tags/MeatTag.vue';
import GrainTag from '@/components/tags/GrainTag.vue';

const props = defineProps<{
  category: 'vegetable' | 'meat' | 'grain'
}>()

const emits = defineEmits(['food-selected'])

const foods = ref([
  { id: 1, name: 'Carrot', category: 'vegetable', active: false },
  { id: 2, name: 'Potato', category: 'vegetable', active: false },
  { id: 3, name: 'Tomato', category: 'vegetable', active: false },
  { id: 4, name: 'Chicken', category: 'meat', active: false },
  { id: 5, name: 'Beef', category: 'meat', active: false },
  { id: 6, name: 'Pork', category: 'meat', active: false },
  { id: 7, name: 'Rice', category: 'grain', active: false },
  { id: 8, name: 'Wheat', category: 'grain', active: false },
  { id: 9, name: 'Corn', category: 'grain', active: false }
  // 更多食材
]);

const filteredFoods = computed(() => {
  return foods.value.filter(food => food.category === props.category);
});

const getTagComponent = () => {
  switch (props.category) {
    case 'vegetable':
      return VegetableTag
    case 'meat':
      return MeatTag
    case 'grain':
      return GrainTag
    default:
      return VegetableTag
  }
}

const toggleActive = (food) => {
  food.active = !food.active;
  emits('food-selected', food);
}
</script>

<style scoped>
.food-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
