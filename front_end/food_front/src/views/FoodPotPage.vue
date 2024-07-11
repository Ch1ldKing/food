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
<!--   这两个是子菜单的容器 -->
    <div class="scroll-container">
      <div class="container">
        <h2>Choose your ingredients</h2>
        
        <row :gutter="20">
          <col :span="24">
            <card class="preference-box" shadow="always">
              <h3 slot="header">Vegetables</h3>
              <FoodList category="vegetable" @food-selected="handleFoodSelected" v-show="showAllVegetables" />
              <div v-show="!showAllVegetables">
                <FoodList category="vegetable" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <button type="primary" @click="toggleShowAll('vegetables')">
                {{ showAllVegetables ? 'Show Less' : 'Show More' }}
              </button>
            </card>
          </col>
        </row>

        <row :gutter="20">
          <col :span="24">
            <card class="preference-box" shadow="always">
              <h3 slot="header">Meat</h3>
              <FoodList category="meat" @food-selected="handleFoodSelected" v-show="showAllMeats" />
              <div v-show="!showAllMeats">
                <FoodList category="meat" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <button type="primary" @click="toggleShowAll('meats')">
                {{ showAllMeats ? 'Show Less' : 'Show More' }}
              </button>
            </card>
          </col>
        </row>

        <row :gutter="20">
          <col :span="24">
            <card class="preference-box" shadow="always">
              <h3 slot="header">Grains</h3>
              <FoodList category="grain" @food-selected="handleFoodSelected" v-show="showAllGrains" />
              <div v-show="!showAllGrains">
                <FoodList category="grain" @food-selected="handleFoodSelected" :max-items="3" />
              </div>
              <button type="primary" @click="toggleShowAll('grains')">
                {{ showAllGrains ? 'Show Less' : 'Show More' }}
              </button>
            </card>
          </col>
        </row>
        
      </div>
    </div>
<!--     这个是单独在最底下的锅的容器 -->
    <div class="pot-container">
      <Pot />
    </div>
  </div>
</template>


<!-- 下面是全部CSS的代码和注脚 -->

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
  padding-bottom: 100px; /* 为Pot组件腾出足够的空间，确保滚动到最底部 */
}

.container {
  flex: 1; /* 允许容器在主轴方向上伸展 */
  width: 80%;
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 20px; /* 为了在移动端保证底部内容的显示，增加底部填充 */
}

@media (max-width: 600px) {
  .scroll-container {
    height: calc(100vh - 100px); /* 限制滚动容器的高度，为Pot组件腾出空间 */
  }

  .container {
    flex: 1; /* 允许容器在主轴方向上伸展 */
    width: 100%; /* 在手机模式下占满容器宽度 */
    padding-bottom: 100px; /* 增加底部填充，以确保在移动端显示最底部内容 */
  }
}


.preference-box {
  padding: 20px;
  margin-bottom: 20px;
}

.pot-container {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
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

@media (max-width: 600px) {
  .scroll-container {
    height: calc(100vh - 100px); /* 限制滚动容器的高度，为Pot组件腾出空间 */
  }

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
</style>


