<template>
  <div class="linked-page">
    <div 
      class="bubble" 
      v-for="(food, index) in foods" 
      :key="index"
      :style="{ animationDelay: `${index * 0.5}s` }"
      @click="handleClick(index)"
      :class="{ active: activeIndex === index }"
    >
      <p>{{ food }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const foods = ref([
  'Tomato',
  'Carrot',
  'Broccoli',
  'Chicken',
  'Rice'
]);

const activeIndex = ref(null);

const handleClick = (index) => {
  activeIndex.value = index;
  setTimeout(() => {
    activeIndex.value = null;
  }, 300); // 恢复初始状态的时间
};
</script>

<style scoped>
.linked-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  flex-wrap: wrap; /* 允许换行 */
  gap: 20px; /* 气泡之间的间距 */
}

.bubble {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: moveUpDown 2s infinite ease-in-out;
  transition: transform 0.3s, background-color 0.3s; /* 添加过渡效果 */
}

.bubble:active, .bubble.active {
  transform: scale(2);
  background-color: #FF5722; /* 点击时的颜色变化 */
}

/* 定义上下运动的动画 */
@keyframes moveUpDown {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 移动端适配样式 */
@media (max-width: 600px) {
  .linked-page {
    gap: 20px; /* 减少气泡之间的间距 */
  }

  .bubble {
    width: 80px; /* 调整气泡大小以适应小屏幕 */
    height: 80px;
    font-size: 14px; /* 调整字体大小 */
  }
}
</style>






  

  