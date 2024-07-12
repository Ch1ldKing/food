<template>
    <div class="bowl-container">
      <div class="bowl-wrapper">
        <img :src="bowlImage" alt="Bowl" class="bowl-image" @click="shakeBowl" :class="{ 'shake': isShaking }" />
        <img :src="fireImage" alt="Fire" class="fire-image" />
        <Bubble 
          v-for="(bubble, index) in bubbles" 
          :key="index" 
          :text="bubble.text" 
          :style="bubble.style"
          :url="bubble.url" 
        />
      </div>
    </div>
  </template>
  
  <script>
  import bowlImage from '@/assets/food_img/bowl.png';
  import fireImage from '@/assets/fire.webp'; // 导入火焰图片
  import Bubble from '@/components/bubble.vue';  // 导入气泡组件
  
  export default {
    components: {
      Bubble
    },
    data() {
      return {
        bowlImage,
        fireImage, // 添加火焰图片数据属性
        isShaking: false,
        bubbles: [], // 用于存储气泡信息
        foodItems: [
          { text: 'Carrot', url: 'https://en.wikipedia.org/wiki/Carrot' },
          { text: 'Potato', url: 'https://en.wikipedia.org/wiki/Potato' },
          { text: 'Tomato', url: 'https://en.wikipedia.org/wiki/Tomato' }
        ] // 示例食材列表，包含 URL
      };
    },
    mounted() {
      this.generateAllBubbles(); // 一次性生成所有气泡
    },
    methods: {
      shakeBowl() {
        this.isShaking = true;
        setTimeout(() => {
          this.isShaking = false;
        }, 500); // 抖动持续时间与动画时间匹配
      },
      generateAllBubbles() { // 一次性生成所有气泡
        const radius = 120; // 环绕的半径，可以根据需要调整
        const centerX = 50; // 中心点的 X 坐标（百分比）
        const centerY = 50; // 中心点的 Y 坐标（百分比）
        
        this.foodItems.forEach((food, index) => {
          const angle = (index / this.foodItems.length) * 2 * Math.PI; // 根据索引计算角度
          const x = centerX + radius * Math.cos(angle); // 计算 x 坐标，使用百分比
          const y = centerY + radius * Math.sin(angle); // 计算 y 坐标，使用百分比
          const position = { left: `${x}%`, top: `${y}%` };
          this.bubbles.push({ text: food.text, style: position, url: food.url });
        });
      }
    }
  };
  </script>
  
  <style scoped>
  .bowl-container {
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center;     /* 垂直居中 */
    height: 100vh;           /* 使容器的高度占满整个视口高度 */
  }
  
  .bowl-wrapper {
    position: relative; /* 使碗和火焰相对定位 */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .bowl-image {
    width: 150px; /* 根据需要调整大小 */
    height: auto;
    cursor: pointer; /* 添加手型光标 */
  }
  
  .fire-image {
    width: 100px; /* 根据需要调整大小 */
    height: auto;
    position: absolute;
    top: 60%; /* 根据碗图片的高度调整，使其在碗的下方 */
    left: 50%;
    transform: translateX(-50%);
  }
  
  @keyframes shake {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5px, -5px); }
    20% { transform: translate(5px, 5px); }
    30% { transform: translate(-5px, 5px); }
    40% { transform: translate(5px, -5px); }
    50% { transform: translate(0, 0); }
    60% { transform: translate(-5px, 5px); }
    70% { transform: translate(5px, -5px); }
    80% { transform: translate(-5px, -5px); }
    90% { transform: translate(5px, 5px); }
    100% { transform: translate(0, 0); }
  }
  
  .shake {
    animation: shake 0.5s;
  }
  </style>
  
  
  
  
  
  
  
  
  
  