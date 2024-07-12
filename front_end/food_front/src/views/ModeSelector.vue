<template>
  <el-container class="container">
    <!-- 顶部的三个长方形框 -->
    <el-header class="top-container">
      <p class="head">Ingredients have been selected</p>
      <div v-for="(ingredient, index) in ingredients" 
          :key="index" 
          class="rect-box">
        {{ ingredient }}
      </div>
    </el-header>    

    <!-- 中间的两个按钮 -->
    <el-main class="middle-container">
      <button :key="'strict-mode'" class="mode-button">Strict mode</button>
      <button :key="'relaxed-mode'" class="mode-button">Loose mode</button>
    </el-main>

    <!-- 底部的搜索框 -->
    <el-footer class="bottom-container">
      <input type="text" class="search-input" placeholder="Search..."/>
      <button class="search-button">🔍</button>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      ingredients: ['Tomato', 'Lettuce', 'Cheese'] //可继续增加食材
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column; /* 元素垂直排列 */
  align-items: center; /* 水平居中 */
  justify-content: space-between; /* 子元素均匀分布在容器内 */
  height: 100vh; /* 高度为视口高度 */
  padding: 20px; /* 内边距20px */
  box-sizing: border-box; /* 包含内边距和边框在内的总宽度和高度计算 */
}

.top-container {
  display: flex;
  justify-content: center; /* 水平居中 */
  flex-wrap: wrap; /* 换行 */
  gap: 20px; /* 间距为20px */
  margin-bottom: 20px; /* 底部外边距20px */
  margin-top: 20px; /* 顶部外边距20px，距离页面顶部20px */
}

.rect-box {
  display: flex;
  align-items: center; /* 元素垂直居中 */
  justify-content: center; /* 元素水平居中 */
  width: 100px; /* 宽度100px */
  height: 50px; /* 高度50px */
  background-color: #eff1f1; /* 背景颜色为浅灰色 */
  border: 1px solid #ccc; /* 边框为1px实线灰色 */
  border-radius: 8px; /* 边框圆角 */
  text-align: center; /* 文本居中对齐 */
}

.middle-container {
  display: flex;
  flex-direction: column; /* 元素垂直排列 */
  align-items: center; /* 元素水平居中 */
  gap: 20px; /* 元素之间的间距为20px */
  position: absolute; /* 使用绝对定位 */
  top: 50%; /* 距离顶部50% */
  left: 50%; /* 距离左侧50% */
  transform: translate(-50%, -50%); /* 通过平移将元素居中 */
}

.mode-button {
  width: 200px;
  padding: 10px; /* 内边距10px */
  font-size: 16px; /* 字体大小 */
  color: #000; /* 文字颜色 */
  background-color: #c7e7fc; /* 背景颜色 */
  border: 1px solid #ccc; /* 边框为1px实线灰色 */
  border-radius: 15px; /* 边框圆角 */
  cursor: pointer; /* 鼠标指针变为手型 */
  text-align: center; /* 文本居中对齐 */
}

.bottom-container {
  display: flex;
  align-items: center; /* 元素垂直居中 */
  justify-content: center; /* 元素水平居中 */
  width: 100%; /* 宽度100% */
  max-width: 500px; /* 最大宽度500px */
  margin-top: 20px; /* 顶部外边距20px */
}

.search-input {
  flex-grow: 1; /* 自动扩展宽度 */
  padding: 10px; /* 内边距10px */
  font-size: 16px; /* 字体大小16px */
  border: 1px solid #ccc; /* 边框为1px实线灰色 */
  border-radius: 5px 0 0 5px; /* 边框圆角 */
}

.search-button {
  padding: 10px; /* 内边距10px */
  font-size: 16px; /* 字体大小 */
  border: 1px solid #ccc; /* 边框为1px实线灰色 */
  border-left: none; /* 左边框去掉 */
  background-color: #c7e7fc; /* 背景颜色为淡蓝色 */
  color: white; /* 文字颜色为白色 */
  border-radius: 0 5px 5px 0; /* 边框圆角 */
  cursor: pointer; /* 鼠标指针变为手型 */
}
</style>