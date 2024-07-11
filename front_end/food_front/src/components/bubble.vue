<template>
    <div class="bubble" :style="{ top: `${position}%`, left: `${positionX}%` }" @click="navigateToUrl">
      {{ text }}
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      position: {
        type: Number,
        default: 0
      },
      url: {
        type: String,
        required: true
      }
    },
    methods: {
    navigateToUrl() {
      window.open(this.url, '_blank'); // 打开新标签页
    }
  }
  };
  </script>
  
  <style scoped>
.bubble {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(255, 255, 255, 0.9); /* 提高背景透明度 */
  width: 60px; /* 设置宽度 */
  height: 60px; /* 设置高度，使其与宽度相等 */
  border-radius: 50%; /* 使气泡变成圆形 */
  border: 2px solid #a9a9a9; /* 添加显眼的边框颜色 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px; /* 调整字体大小 */
  color: #333; /* 设置字体颜色 */
  font-weight: bold; /* 设置字体加粗 */
  animation: float 3s infinite ease-in-out; /* 调整动画时间 */
}
  
  @keyframes float {
    0% {
      transform: translate(-50%, 0);
    }
    50% {
      transform: translate(-50%, -30px); /* 增大浮动幅度 */
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  </style>
  
  