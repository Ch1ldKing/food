<template>
  <div class="common-layout">
    
    <el-container>
      
      <el-header>
        <h2 class="head">🥰 Choose one to eat 🥰</h2>
      </el-header>
      <el-main class="main-content"> <!-- 添加一个类来调整el-main的样式 -->
        <!--Buttons组件放在这个位置呈现-->
          <div v-if="loading" class="loading-container">
        <section class="dots-container">
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
          <div class="dot"></div>
        </section>
      </div>
          <Cookbook/>
      </el-main>
        <!-- 将el-footer固定在底部 -->
      <el-footer class="fixed-footer">
        <Pot> </Pot>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref,onMounted, computed } from 'vue';
import Pot from '../components/Pot.vue';
import Cookbook from '@/components/Cookbook.vue'
import { useRecipeStore } from '@/stores/recipeStore';
import { useFoodStore } from '@/stores/foodStore';

export default defineComponent({
    components: {
        Pot,
        Cookbook
    },
    setup() {
        const showPot = ref(true); // 控制 Pot 组件的显示
        const recipeStore = useRecipeStore();
        const foodStore = useFoodStore();
        const loading = ref(true);
        const ingredients = computed(() => foodStore.selectedFoods.map(food => food.name)); 

        onMounted(async () => {
            await new Promise(resolve => setTimeout(resolve, 1200));
            await recipeStore.fetchRecipes(ingredients.value); // 示例ingredients
            loading.value = false; // 数据加载完成后隐藏进度条
        });
        return {
            showPot,
            loading,
        };
    }
});
</script>

<style scoped>
/* 这里定义过渡效果 */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
} */
.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
    opacity: 0;
}

/* 新增样式：固定底部的el-footer */
.fixed-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    left: 0px; /* 向左移动1px，可以根据需要调整距离 */
}

/* 调整el-main的样式以避免内容s被固定的el-footer遮挡 */
.main-content {
    padding-bottom: 70px; /* 确保主内容在底部有足够的空间 */
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 0px;
    
}

.head {
    text-align: center;
    margin-top: 30px;
}

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000; /* 确保覆盖所有内容 */
}

.dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.dot {
  height: 20px;
  width: 20px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: #b3d4fc;
  animation: pulse 1.5s infinite ease-in-out;
}

.dot:last-child {
  margin-right: 0;
}

.dot:nth-child(1) {
  animation-delay: -0.3s;
}

.dot:nth-child(2) {
  animation-delay: -0.1s;
}

.dot:nth-child(3) {
  animation-delay: 0.1s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }

  50% {
    transform: scale(1.2);
    background-color: #6793fb;
    box-shadow: 0 0 0 10px rgba(178, 212, 252, 0);
  }

  100% {
    transform: scale(0.8);
    background-color: #b3d4fc;
    box-shadow: 0 0 0 0 rgba(178, 212, 252, 0.7);
  }
}
</style>



