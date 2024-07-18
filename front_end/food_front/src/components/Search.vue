<!-- <template>
    <div class="container">
      <div class="search-bar">
        <input type="text" class="search-input" placeholder="Search dish..." />
        <button class="search-button">
          🔍
        </button>
      </div>
      <div class="button-container">
        <button v-for="(recipe, index) in recipes" 
                :key="index" 
                :id="'button' + (index + 1)" 
                :name="'button' + (index + 1)" 
                class="recipe-button">
          {{ recipe.recipe }}
        </button>
      </div>
    </div>
</template>
  
<script lang="'ts">
import {useRecipeStore} from '@/stores/recipeStore';
import {toRefs, defineComponent, onMounted} from 'vue';

export default defineComponent({
    name: 'Search',
    setup() {
        const recipeStore = useRecipeStore();
        const {recipes} = toRefs(recipeStore);
        return {
            recipes
        };
    },
});

</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 垂直方向排列子元素 */
  align-items: center; /* 子元素居中对齐 */
  width: 100%; /* 宽度100% */
  padding: 20px; /* 内边距20px */
  overflow-y: hidden; /* 禁用垂直滚动 */
}

.search-bar {
  display: flex;
  align-items: center; /* 子元素居中对齐 */
  width: 100%; /* 宽度100% */
  max-width: 500px; /* 最大宽度500px */
  margin-top: 10px;
  margin-bottom: 10px; /* 将搜索框底部外边距为10px */
}

.search-input {
  flex-grow: 1; /* 自动扩展宽度 */
  padding: 10px; /* 内边距10px */
  font-size: 16px; /* 字体大小16px */
  border: 1px solid #ccc; /* 边框为1px实线灰色 */
  border-radius: 5px 0 0 5px; /* 边框圆角 */
}

.search-button {
  margin-top: 0px;
  padding: 10px; /* 内边距10px */
  font-size: 16px; /* 字体大小16px */
  border: 0px solid #ccc; /* 边框为1px实线灰色 */
  border-left: none; /* 左边框取消 */
  background-color: #c7e7fc; /* 背景颜色淡蓝色 */
  color: white; /* 文字颜色白色 */
  border-radius: 0 5px 5px 0; /* 边框圆角 */
  cursor: pointer; /* 鼠标指针样式为手型 */
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px; /* 按钮之间的间距 */
  width: 100%;
  margin-top: 18px; /* 将按钮容器顶部外边距为18px */
  margin-left: -25px; /* 负边距来抵消按钮自带的左边距 */
  margin-right: -25px; /* 负边距来抵消按钮自带的右边距 */

  max-height: 800px; /* 设置最大高度，你可以根据需要调整 */
  overflow-y: auto; /* 启用垂直滚动 */
}

.recipe-button {
  width: calc(100% - 50px); /* 按钮宽度为页面宽度减去两侧边距的总和 */
  margin: 5px 25px; /* 上下间距为5px，左右间距为25px */
  padding: 10px; /* 内边距10px */
  font-size: 14px; /* 字体大小16px */
  color: #000000; /* 文字颜色黑色 */
  background-color: #eff1f1; /* 背景颜色浅灰色 */
  border: none; /* 移除按钮的边框 */
  border-radius: 5px; /* 边框圆角 */
  cursor: pointer; /* 鼠标指针样式为手型 */
  text-align: center; /* 文字居中对齐 */
  transition: border-color 0.3s ease; /* 添加边框颜色过渡效果 */

  box-shadow: 0px 4px 6px rgba(0, 0, 0.1, 0.1); /* 添加阴影效果 */
}

.recipe-button:focus {
  outline: none; /* 移除焦点时的默认轮廓 */
  border: 1px solid green; /* 设置焦点时的边框颜色为绿色 */
}

.recipe-button:active {
  background-color: #616161; /* 点击时的背景颜色 */
}
</style> -->

<template>
  <div class="container">
    <div class="search-bar">
      <input type="text" 
             class="search-input" 
             placeholder="Search dish..." 
             v-model="searchQuery"
             @input="filterRecipes" />
      <button class="search-button">
        🔍
      </button>
    </div>
    <div class="button-container">
      <button v-for="(recipe, index) in filteredRecipes" 
              :key="index" 
              :id="'button' + (index + 1)" 
              :name="'button' + (index + 1)" 
              class="recipe-button">
        {{ recipe.recipe }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { useRecipeStore } from '@/stores/recipeStore';
import { toRefs, defineComponent, ref, computed, onMounted } from 'vue';

export default defineComponent({
name: 'Search',
setup() {
  const recipeStore = useRecipeStore();
  const { recipes } = toRefs(recipeStore);
  const searchQuery = ref('');

  const filterRecipes = () => {
    // 调用搜索过滤功能
    return recipes.value.filter((recipe) => {
      const query = searchQuery.value.toLowerCase();
      const recipeName = recipe.recipe.toLowerCase();
      // 忽略大小写和单复数影响
      return recipeName.includes(query) || recipeName.includes(query.slice(0, -1));
    });
  };

  const filteredRecipes = computed(() => filterRecipes());

  return {
    recipes,
    searchQuery,
    filteredRecipes,
    filterRecipes,
  };
},
});
</script>

<style scoped>
.container {
display: flex;
flex-direction: column; /* 垂直方向排列子元素 */
align-items: center; /* 子元素居中对齐 */
width: 100%; /* 宽度100% */
padding: 20px; /* 内边距20px */
overflow-y: hidden; /* 禁用垂直滚动 */
}

.search-bar {
display: flex;
align-items: center; /* 子元素居中对齐 */
width: 100%; /* 宽度100% */
max-width: 500px; /* 最大宽度500px */
margin-top: 10px;
margin-bottom: 10px; /* 将搜索框底部外边距为10px */
}

.search-input {
flex-grow: 1; /* 自动扩展宽度 */
padding: 10px; /* 内边距10px */
font-size: 16px; /* 字体大小16px */
border: 1px solid #ccc; /* 边框为1px实线灰色 */
border-radius: 5px 0 0 5px; /* 边框圆角 */
}

.search-button {
margin-top: 0px;
padding: 10px; /* 内边距10px */
font-size: 16px; /* 字体大小16px */
border: 0px solid #ccc; /* 边框为1px实线灰色 */
border-left: none; /* 左边框取消 */
background-color: #c7e7fc; /* 背景颜色淡蓝色 */
color: white; /* 文字颜色白色 */
border-radius: 0 5px 5px 0; /* 边框圆角 */
cursor: pointer; /* 鼠标指针样式为手型 */
}

.button-container {
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 2px; /* 按钮之间的间距 */
width: 100%;
margin-top: 18px; /* 将按钮容器顶部外边距为18px */
margin-left: -25px; /* 负边距来抵消按钮自带的左边距 */
margin-right: -25px; /* 负边距来抵消按钮自带的右边距 */

max-height: 800px; /* 设置最大高度，你可以根据需要调整 */
overflow-y: auto; /* 启用垂直滚动 */
}

.recipe-button {
width: calc(100% - 50px); /* 按钮宽度为页面宽度减去两侧边距的总和 */
margin: 5px 25px; /* 上下间距为5px，左右间距为25px */
padding: 10px; /* 内边距10px */
font-size: 14px; /* 字体大小16px */
color: #000000; /* 文字颜色黑色 */
background-color: #eff1f1; /* 背景颜色浅灰色 */
border: none; /* 移除按钮的边框 */
border-radius: 5px; /* 边框圆角 */
cursor: pointer; /* 鼠标指针样式为手型 */
text-align: center; /* 文字居中对齐 */
transition: border-color 0.3s ease; /* 添加边框颜色过渡效果 */

box-shadow: 0px 4px 6px rgba(0, 0, 0.1, 0.1); /* 添加阴影效果 */
}

.recipe-button:focus {
outline: none; /* 移除焦点时的默认轮廓 */
border: 1px solid green; /* 设置焦点时的边框颜色为绿色 */
}

.recipe-button:active {
background-color: #616161; /* 点击时的背景颜色 */
}
</style>
