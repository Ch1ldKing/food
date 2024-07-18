<script setup>
import Pot from '@/components/Pot.vue';
import Basket from '@/components/Basket.vue';  

import { ref } from 'vue'
import FoodList from '@/components/FoodList.vue'
import potImage from '@/assets/food_img/bowl.png'
import { useFoodStore } from '@/stores/foodStore';
import 'element-ui/lib/theme-chalk/index.css';


const category = ref('vegetable')
const showAllVegetables = ref(false)
const showAllMeats = ref(false)
const showAllGrains = ref(false)
const foodStore = useFoodStore();


const handleFoodSelected = (food) => {
  console.log('当前点击的食材:', food);
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
    <el-container>
      <el-header>
        <h2 class="head">🥰 Choose Ingredients 🥰</h2>
      </el-header>
      <el-main class="main-content">
        <div class="scroll-container">
          <div class="container">

            <row :gutter="20">
              <col :span="24">
              <card class="preference-box" shadow="always">
                <h3 slot="header">Vegetables & Fruits</h3>
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


<!--             原有的有show more & less的系统 grain的 -->
        <h3>Grains</h3>
        <FoodList category="grain" @food-selected="handleFoodSelected" />
          </div>
        </div>
      </el-main>
      <!--     这个是单独在最底下的锅的容器 -->
      <el-footer class="fixed-footer">
        <Pot />
        <Basket />
      </el-footer>
    </el-container>
  </div>
</template>


<!-- 下面是全部CSS的代码和注脚 -->

<style>

.divider {
  width: 1px;
  height: 100px; /* 根据需要调整高度 */
  background-color: #ccc; /* 设置分割线颜色 */
}

.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  /* 添加阴影效果 */
  left: 0px;
  
  display: flex;
  flex-direction: column; /* 设置为上下排列 */
  justify-content: center;
  align-items: center;

  gap: 0px; /* 设置图片之间的间距 */

}

/* 调整el-main的样式以避免内容被固定的el-footer遮挡 */
.main-content {
  padding-bottom: 60px;
  /* 确保主内容在底部有足够的空间 */
}

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
.head {
  text-align: center;
  margin-top: 30px;
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
  padding: 0.6rem 0.6rem; /* 缩小内边距 */
  border: 2px solid #32CD32; /* 使用小麦颜色的边框 */
  border-radius: 1rem; /* 增加边框圆角半径 */
  background-color: #ffffff; 
  color: rgb(0, 0, 0);
  font-size: 14px; /* 增加字体大小 */
  cursor: pointer;
  /* transition: background-color 0.3s, transform 0.3s; /* 添加过渡效果 */ 
  transition: background-color 0.3s, color 0.3s, padding 0.3s; /* 添加过渡效果 */
}



/* button:hover {
  background-color: #218838; /* 悬停时的深绿色背景 
  transform: scale(1.05);  悬停时的放大效果 
} */

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


