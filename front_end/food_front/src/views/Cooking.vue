<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        
      </el-header>
      <el-main class="main-content"> <!-- 添加一个类来调整el-main的样式 -->
        <!--Buttons组件放在这个位置呈现-->
          <h3 class="head">try these!</h3>
          <Cookbook/>
      </el-main>
        <!-- 将el-footer固定在底部 -->
      <el-footer class="fixed-footer">
        <Pot> </Pot>
      </el-footer>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Pot from '../components/Pot.vue';
import Cookbook from '@/components/Cookbook.vue'



export default defineComponent({
    components: {
        Pot,
        Cookbook
    },
    setup() {
        const showPot = ref(true); // 控制 Pot 组件的显示
        return {
            showPot
        };
    }
});
</script>

<style scoped>
/* 这里定义过渡效果 */
/* .fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
} */
.common-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.fade-enter,
.fade-leave-to
/* .fade-leave-active in <2.1.8 */
{
    opacity: 0;
}

/* 新增样式：固定底部的el-footer */
.fixed-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;
    text-align: center;
    padding: 10px 0;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
    left: 0px; /* 向左移动1px，可以根据需要调整距离 */
}

/* 调整el-main的样式以避免内容s被固定的el-footer遮挡 */
.main-content {
    padding-bottom: 60px; /* 确保主内容在底部有足够的空间 */
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    left: 0px;
    
}

.head {
    text-align: center;
    margin-top: 30px;
}
</style>



