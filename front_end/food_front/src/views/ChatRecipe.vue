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
        <div class="new-card">
          <div class="bg"></div>
          <div class="blob"></div>
          <div class="card-content" >
          <div v-html="chatRecipe.process"></div>
          
          </div>
          
            <!-- <p>{{ chatRecipe.process }}</p> -->
        </div>
      </div>
      <div v-else>
        <p>No Recipe Process Available</p>
      </div>
    </el-main>
    <el-footer class="bottom-container">
      <button class="fetch-button" @click="fetchChatRecipe">
        <span class="back"></span>
        <span class="front">AI</span>
      </button>
    </el-footer>
  </el-container>
</template>

<script>
import { useRecipeStore } from '@/stores/recipeStore';
import { defineComponent, computed, ref } from 'vue';

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

    return {
      fetchChatRecipe,
      chatRecipe,
    };
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 0px;
  box-sizing: border-box;
}

.card {
  width: 300px;
  padding: 10px;
  border-radius: 30px;
  background: #f3f0f0;
  box-shadow: 0px 5px 10px #bebebe, -5px -5px 15px #ffffff; /* 调小阴影 */
  text-align: center;
  word-wrap: break-word;
}

.new-card {
  position: relative;
  width: 100%; /* 调整新卡片的宽度 */
  height: 66vh; /* 调整新卡片的高度 */
  border-radius: 14px;
  z-index: 1111;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 5px 5px 15px #bebebe, -10px -10px 30px #ffffff; /* 调小阴影 */
}

.bg {
  position: absolute;
  top: 5px;
  left: 5px;
  width: calc(100% - 10px);
  height: calc(100% - 10px);
  z-index: 2;
  background: rgba(255, 255, 255, .95);
  backdrop-filter: blur(24px);
  border-radius: 10px;
  overflow: hidden;
  outline: 2px solid white;
}

.blob {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #ff0000;
  opacity: 1;
  filter: blur(12px);
  animation: blob-bounce 5s infinite ease;
}

.card-content {
  position: relative;
  z-index: 3;
  padding: 20px;
  text-align: left;
  color: #000;
  word-wrap: break-word;
  overflow-y: auto; /* 添加滚动条 */
  max-height: calc(100% - 40px); /* 适应card的高度 */
}

@keyframes blob-bounce {
  0% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }

  25% {
    transform: translate(-100%, -100%) translate3d(100%, 0, 0);
  }

  50% {
    transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
  }

  75% {
    transform: translate(-100%, -100%) translate3d(0, 100%, 0);
  }

  100% {
    transform: translate(-100%, -100%) translate3d(0, 0, 0);
  }
}

.top-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 25px;
  width: 100%;
}

.middle-container {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
}

.bottom-container {
  position: fixed;
  bottom: 20px; /* 添加20px的底部空间 */
  width: 100%;
  background-color: #fff;
  text-align: center;
  padding: 10px 0;
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  left: 0px;
}

.fetch-button {
  --primary: 255, 90, 120;
  --secondary: 150, 50, 60;
  width: 60px;
  height: 50px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  outline: 10px solid rgba(var(--primary), .5);
  border-radius: 100%;
  position: relative;
  transition: .3s;
}

.fetch-button .back {
  background: rgb(var(--secondary));
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.fetch-button .front {
  background: linear-gradient(0deg, rgba(var(--primary), .6) 20%, rgba(var(--primary)) 50%);
  box-shadow: 0 .5em 1em -0.2em rgba(var(--secondary), .5);
  border-radius: 100%;
  position: absolute;
  border: 1px solid rgb(var(--secondary));
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: 'Baloo 2', sans-serif; /* 使用圆润字体 */
  transform: translateY(-15%);
  transition: .15s;
  color: rgb(var(--secondary));
}

.fetch-button:active .front {
  transform: translateY(0%);
  box-shadow: 0 0;
}

/* Media query for responsive design */
@media (max-height: 700px) {
  .new-card {
    width: 100%;
    height: 60vh;
  }

  .bottom-container {
    padding: 5px 0;
  }
}

</style>
