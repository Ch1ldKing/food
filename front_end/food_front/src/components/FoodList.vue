<template>
  <div class="food-list">
    <component 
     v-for="food in displayedFoods" 
    :is="getTagComponent()" 
    :key="food.id" 
    :active="food.active"
    :foodName="food.name"
    :name="food.name"  
    @click="toggleActive(food)">
      {{ food.name }}
    </component>
      <!-- 传递name属性  :name="food.name"-->
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
  category: 'vegetable' | 'meat' | 'grain',
  maxItems: {
    type: Number,
    default: null
  }
}>();

const emits = defineEmits(['food-selected']);

const foodStore = useFoodStore();

onMounted(() => {
  foodStore.fetchFoods();
});

const filteredFoods = computed(() => {
  return foodStore.getFoodsByCategory(props.category);
});

const displayedFoods = computed(() => {
  if (props.maxItems !== null) {
    return filteredFoods.value.slice(0, props.maxItems);
  }
  return filteredFoods.value;
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
  if (!food._isToggling) {
    food._isToggling = true;  // 防止重复点击
    foodStore.toggleFoodActive(food);
    emits('food-selected', food);
    setTimeout(() => {
      food._isToggling = false;  // 恢复状态
    }, 300);
  }
};
</script>

<style scoped>
.food-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>

