<template>
    <div class="pot">
      <img src="@/assets/pot.png" alt="Pot" class="pot-image" />
      <transition name="shake">
        <div v-if="selectedFood" class="food-in-pot">
          {{ selectedFood.name }}
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      selectedFood: Object
    }
  };
  </script>
  
  <style scoped>
  .pot {
    position: relative;
  }
  .pot-image {
    width: 100px;
    height: 100px;
  }
  .food-in-pot {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .shake-enter-active, .shake-leave-active {
    animation: shake 0.5s;
  }
  @keyframes shake {
    0% { transform: translate(-50%, -50%) rotate(0deg); }
    25% { transform: translate(-50%, -50%) rotate(-5deg); }
    50% { transform: translate(-50%, -50%) rotate(5deg); }
    75% { transform: translate(-50%, -50%) rotate(-5deg); }
    100% { transform: translate(-50%, -50%) rotate(0deg); }
  }
  </style>
  