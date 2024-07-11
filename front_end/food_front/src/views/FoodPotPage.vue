<script setup>
import Pot from '@/components/Pot.vue';
import { ref } from 'vue'
import FoodList from '@/components/FoodList.vue'
import potImage from '@/assets/food_img/bowl.png'
import 'element-ui/lib/theme-chalk/index.css';
//import { ElRow, ElCol, ElButton } from 'element-plus'
//import 'element-plus/lib/theme-chalk/index.css'


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
        
        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="preference-box" shadow="always">
              <h3 slot="header">Vegetables</h3>
              <FoodList category="vegetable" @food-selected="handleFoodSelected" v-show="showAllVegetables" />
              <div v-show="!showAllVegetables">
                <FoodList category="vegetable" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <el-button type="primary" @click="toggleShowAll('vegetables')">
                {{ showAllVegetables ? 'Show Less' : 'Show More' }}
              </el-button>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="preference-box" shadow="always">
              <h3 slot="header">Meat</h3>
              <FoodList category="meat" @food-selected="handleFoodSelected" v-show="showAllMeats" />
              <div v-show="!showAllMeats">
                <FoodList category="meat" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <el-button type="primary" @click="toggleShowAll('meats')">
                {{ showAllMeats ? 'Show Less' : 'Show More' }}
              </el-button>
            </el-card>
          </el-col>
        </el-row>

        <el-row :gutter="20">
          <el-col :span="24">
            <el-card class="preference-box" shadow="always">
              <h3 slot="header">Grains</h3>
              <FoodList category="grain" @food-selected="handleFoodSelected" v-show="showAllGrains" />
              <div v-show="!showAllGrains">
                <FoodList category="grain" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <el-button type="primary" @click="toggleShowAll('grains')">
                {{ showAllGrains ? 'Show Less' : 'Show More' }}
              </el-button>
            </el-card>
          </el-col>
        </el-row>
        
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
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
}

.preference-box {
  padding: 20px;
  margin-bottom: 20px;
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

button {
  margin-top: 10px;
  padding: 10px 20px; /* 增加内边距 */
  border: none;
  border-radius: 25px; /* 更圆的边角 */
  background-color: #28a745; /* 绿色背景 */
  color: white;
  font-size: 16px; /* 增加字体大小 */
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s; /* 添加过渡效果 */
}

button:hover {
  background-color: #218838; /* 悬停时的深绿色背景 */
  transform: scale(1.05); /* 悬停时的放大效果 */
}

button:active {
  background-color: #1e7e34; /* 点击时的更深绿色背景 */
  transform: scale(0.95); /* 点击时的缩小效果 */
}
</style>

