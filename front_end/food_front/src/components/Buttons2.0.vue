<template>
    <!-- <p class="cutetitle">5只可爱的按钮们</p> -->
    <div class="button-container">
        <button id="001" class="cute-button">Button1: Hello! 😊</button>
      <button id="002" class="cute-button">Button2: Let's go! 💪</button>
      <button id="003" class="cute-button">Button3: Great! 👍</button>
      <button id="004" class="cute-button">Button4: Awesome! 🎉</button>
      <button id="005" class="cute-button">Button5: Bon Appétit! 🍽️</button>
      <button id="006" class="cute-button">Button6: Cheers! 🥂</button>
      <button id="007" class="cute-button">Button7: Goodbye! 👋</button>
    </div>
</template>
  
<script>
    export default {
        name: 'CuteButtons',
    }
</script>
  
<style scoped>
/* .cutetitle {
  margin-top: 35px; /* 往下挪一些 
  margin-bottom: 15px; /* 与按钮之间的间距 
  text-align: center;
  font-size: 18px;
} */

.button-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 0;
    width: 90%;
}
  
.cute-button {
    width: 90%; /* 按钮宽度略小于页面宽度 */
    margin: 9px 0; /* 按钮之间的间距 */
    padding: 10px;
    font-size: 16px;
    color: #000000;
    background-color: #eff1f1;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
</style>
  