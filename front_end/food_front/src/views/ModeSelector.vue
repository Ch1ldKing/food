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
      ingredients: ['Tomato', 'Lettuce', 'Cheese']
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
}

.top-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap; /* 自动换行 */
  gap: 20px;
  margin-bottom: 20px;
  margin-top: 20px; /* 距离页面顶部20px */
}

.rect-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px; /* 缩小宽度 */
  height: 50px; /* 长方形 */
  background-color: #eff1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.middle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: absolute; /* 绝对定位 */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 横向纵向居中 */
}

.mode-button {
  width: 200px;
  padding: 10px;
  font-size: 16px;
  color: #000;
  background-color: #c7e7fc;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
}

.bottom-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 500px;
  margin-top: 20px;
}

.search-input {
  flex-grow: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
}

.search-button {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-left: none;
  background-color: #c7e7fc;
  color: white;
  border-radius: 0 5px 5px 0;
  cursor: pointer;
}
</style>
