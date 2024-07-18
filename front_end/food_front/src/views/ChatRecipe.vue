<template>

  <el-container class="container">
    <el-header class="top-container">
      <div class="card">
        <div class="title">
          {{ chatRecipe ? chatRecipe.dishName : 'No Recipe Available' }}
        </div>
      </div>
    </el-header>
    <el-main class="middle-container">
      <div v-if="chatRecipe">
        <p>{{ chatRecipe.process }}</p>
      </div>
      <div v-else>
        <p>No Recipe Process Available</p>
      </div>
    </el-main>
    <el-footer class="bottom-container">
      <!--   -->
      <button @click="fetchChatRecipe">Fetch Chat Recipe</button>
    </el-footer>
  </el-container>
</template>

<script>
import { useRecipeStore } from '@/stores/recipeStore';
import { defineComponent, computed,ref } from 'vue';

export default defineComponent({
  name: 'Chat',
  setup() {
    const recipeStore = useRecipeStore();
    const ingredients = ref(['carrot', 'pork', 'cabbage']); // 示例配料

    const fetchChatRecipe = () => {
      recipeStore.fetchChatRecipe(ingredients.value);
    };

    const chatRecipe = computed(() => {
      return recipeStore.chatRecipes.length > 0 ? recipeStore.chatRecipes[0] : null;
    });

    const goBack = () => {
      // 实现返回功能，例如使用路由导航返回上一页
      window.history.back();
    };
    return {
      fetchChatRecipe,
      chatRecipe,
      goBack
    };
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  /* 元素垂直排列 */
  align-items: center;
  /* 水平居中 */
  justify-content: space-between;
  /* 子元素均匀分布在容器内 */
  height: 100vh;
  /* 高度为视口高度 */
  padding: 0px;
  /* 内边距 */
  box-sizing: border-box;
  /* 包含内边距和边框在内的总宽度和高度计算 */
}

.card {
  width: 300px;
  padding: 10px;
  /* 添加内边距以防止文本靠近边框 */
  border-radius: 30px;
  background: #f3f0f0;
  box-shadow: 0px 10px 20px #bebebe, -15px -15px 30px #ffffff;
  text-align: center;
  /* 文本居中对齐 */
  word-wrap: break-word;
  /* 强制长词换行 */
}

.top-container {
  
  display: flex;
  justify-content: center;
  /* 水平居中 */
  align-items: center;
  /* 垂直居中 */
  flex-wrap: wrap;
  /* 换行 */
  gap: 20px;
  /* 间距为20px */
  margin-bottom: 20px;
  /* 底部外边距20px */
  margin-top: 25px;
  /* 顶部外边距20px，距离页面顶部20px */
  width: 100%;
}

.middle-container {
    flex: 1;
      /* 使中间部分占据剩余空间 */
      overflow-y: auto;
      /* 垂直滚动 */
      padding: 20px;
      /* 内边距 */
      box-sizing: border-box;
      /* 包含内边距和边框在内的总宽度和高度计算 */
      width: 100%;
      /* 宽度100% */
  /* 通过平移将元素居中 */
}


.bottom-container {
  position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
    /* 添加阴影效果 */
    left: 0px;
    /* 向左移动1px，可以根据需要调整距离 */
}

.back-button {
  margin-left: 10px;
  background: #f3f0f0;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 20px #bebebe, -15px -15px 30px #ffffff;
}

.back-button:hover {
  background: #e0dddd;
}


</style>
