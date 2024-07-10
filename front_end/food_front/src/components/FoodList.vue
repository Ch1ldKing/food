<template>
  <div class="food-list">
    <component v-for="food in filteredFoods" :is="getTagComponent()" :key="food.id" :active="food.active"
      @click="toggleActive(food)">
      {{ food.name }}
    </component>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { useFoodStore } from '@/stores/foodStore';
import VegetableTag from '@/components/tags/VegetableTag.vue';
import MeatTag from '@/components/tags/MeatTag.vue';
import GrainTag from '@/components/tags/GrainTag.vue';

const props = defineProps<{
  category: 'vegetable' | 'meat' | 'grain'
}>();

const emits = defineEmits(['food-selected']);

const foodStore = useFoodStore();

onMounted(() => {
  foodStore.fetchFoods();
});

const filteredFoods = computed(() => {
  return foodStore.getFoodsByCategory(props.category);
});

const getTagComponent = () => {
  switch (props.category) {
    case 'vegetable':
      return VegetableTag;
    case 'meat':
      return MeatTag;
    case 'grain':
      return GrainTag;
    default:
      return VegetableTag;
  }
};

const toggleActive = (food) => {
  foodStore.toggleFoodActive(food);
  emits('food-selected', food);
};
</script>

<style scoped>
.food-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
