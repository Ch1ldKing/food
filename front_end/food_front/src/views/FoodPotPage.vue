<script setup>
import Pot from '@/components/Pot.vue';

import { ref } from 'vue'
import FoodList from '@/components/FoodList.vue'
import potImage from '@/assets/food_img/bowl.png'

const category = ref('vegetable')

const showAllVegetables = ref(false)
const showAllMeats = ref(false)
const showAllGrains = ref(false)

const handleFoodSelected = (food) => {
  console.log('Selected food:', food)
}

const toggleShowAll = (category) => {
  if (category === 'vegetables') {
    showAllVegetables.value = !showAllVegetables.value
  } else if (category === 'meats') {
    showAllMeats.value = !showAllMeats.value
  } else if (category === 'grains') {
    showAllGrains.value = !showAllGrains.value
  }
}

</script>

<template>
  <div class="food-pot-page">
    <div class="scroll-container">
      <div class="container">
        <h2>Choose your ingredients</h2>

        <div class="preference-box">
          <h3>Vegetables</h3>
          <FoodList category="vegetable" @food-selected="handleFoodSelected" v-show="showAllVegetables" />
          <div v-show="!showAllVegetables">
            <FoodList category="vegetable" @food-selected="handleFoodSelected" :max-items="3" />
          </div>
          <button @click="toggleShowAll('vegetables')">
            {{ showAllVegetables ? 'Show Less' : 'Show More' }}
          </button>
        </div>

        <div class="preference-box">
          <h3>Meat</h3>
          <FoodList category="meat" @food-selected="handleFoodSelected" v-show="showAllMeats" />
          <div v-show="!showAllMeats">
            <FoodList category="meat" @food-selected="handleFoodSelected" :max-items="3" />
          </div>
          <button @click="toggleShowAll('meats')">
            {{ showAllMeats ? 'Show Less' : 'Show More' }}
          </button>
        </div>

        <div class="preference-box">
          <h3>Grains</h3>
          <FoodList category="grain" @food-selected="handleFoodSelected" v-show="showAllGrains" />
          <div v-show="!showAllGrains">
            <FoodList category="grain" @food-selected="handleFoodSelected" :max-items="3" />
          </div>
          <button @click="toggleShowAll('grains')">
            {{ showAllGrains ? 'Show Less' : 'Show More' }}
          </button>
        </div>
      </div>
    </div>
    <div class="pot-container">
      <Pot />
    </div>
  </div>
</template>



<style>
.food-pot-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; /* 防止外部容器滚动 */
  height: 100vh; /* 占满整个视口高度 */
}

.scroll-container {
  flex: 1; /* 允许容器在主轴方向上伸展 */
  overflow-y: auto; /* 垂直滚动 */
  width: 100%; /* 占满宽度 */
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.preference-box {
  min-height: 200px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
}

.pot-container {
  margin-top: 20px;
}

.pot-image-container {
  margin-top: 20px;
}

.pot-image {
  width: 200px;
  height: auto;
}

@media (max-width: 600px) {
  .container {
    width: 100%; /* 在手机模式下占满容器宽度 */
  }
  .preference-box {
    width: 100%;
  }
  .scroll-container {
    padding: 10px;
  }
}

button {
  margin-top: 10px;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
