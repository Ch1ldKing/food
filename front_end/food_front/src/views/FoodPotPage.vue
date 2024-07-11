<script setup>
import Pot from '@/components/Pot.vue';

import { ref } from 'vue'
import FoodList from '@/components/FoodList.vue'
import potImage from '@/assets/food_img/bowl.png'

const category = ref('vegetable')

const handleFoodSelected = (food) => {
  console.log('Selected food:', food)
}
</script>

<template>
  <div class="food-pot-page">
    <div class="container">
      <h2>Choose your ingredients</h2>



        <h3>Vegetables</h3>
        <FoodList category="vegetable" @food-selected="handleFoodSelected" />



        <h3>Meat</h3>
        <FoodList category="meat" @food-selected="handleFoodSelected" />



        <h3>Grains</h3>
        <FoodList category="grain" @food-selected="handleFoodSelected" />

     </div>

    <div class="pot-container">
      <Pot />
    </div>

    <div class="pot-image-container">

      <img :src="potImage" alt="Pot Image" class="pot-image" />
    </div> -->
  </div>
</template>


<style>
.food-pot-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  min-height: 200px; /* 增加最小高度 */
  width: 400px; /* 增加宽度 */
  display: flex;
  flex-wrap: wrap; /* 允许项目换行 */
  justify-content: center; /* 从左边开始排列 */
  align-items: flex-start; /* 从顶部对齐项目 */
  row-gap: 10px; /* 行之间的间距 */
  column-gap: 15px; /* 列之间的间距 */
  border-radius: 15px;
  background-color: #ffffff;
  padding: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); /* 添加阴影 */
}

.pot-container {
  margin-top: 20px;
}


.preference-box {
}

@media (max-width: 600px) {
  .container {
    width: 100%; /* 在手机模式下占满容器宽度 */
  }
}




@media (max-width: 600px) {
  .food-pot-page {
    flex-direction: column;
  }

  .container {
    flex-direction: column;
    align-items: center;
  }
}
</style>