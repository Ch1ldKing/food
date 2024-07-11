<template>
  <div>
    <h3 class="centered-text">菜品列表</h3>
    <div class="button-container">
      <button v-for="(dish, index) in dishes" :id="dish.id" :name="dish.name" :index="index">
        {{ dish.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 模拟菜品数据
const dishes = ref([
  { id: '0001', name: '红烧排骨', url: '' },
  { id: '0002', name: '麻婆豆腐', url: '' },
  { id: '0003', name: '清蒸鲈鱼', url: '' },
  { id: '0004', name: '宫保鸡丁', url: '' },
  { id: '0005', name: '酸辣土豆丝', url: '' },
  { id: '0006', name: '糖醋里脊', url: '' },
  { id: '0007', name: '水煮肉片', url: '' },
  { id: '0008', name: '鱼香茄子', url: '' },
  { id: '0009', name: '蒜蓉菠菜', url: '' },
  { id: '0010', name: '肉末茄子', url: '' },
  { id: '0011', name: '白切鸡', url: '' },
  { id: '0012', name: '糖醋排骨', url: '' },
  { id: '0013', name: '麻辣香锅', url: '' },
  { id: '0014', name: '酸菜鱼', url: '' },
  { id: '0015', name: '黄焖鸡米饭', url: '' },
  { id: '0016', name: '番茄鸡蛋面', url: '' },
  { id: '0017', name: '红烧茄子', url: '' },
  { id: '0018', name: '香辣小龙虾', url: '' },
  { id: '0019', name: '冒菜', url: '' },
  { id: '0020', name: '炸鸡翅', url: '' },
  { id: '0021', name: '凉皮', url: '' },
  { id: '0022', name: '糖醋鲤鱼', url: '' },
  { id: '0023', name: '蒸饺', url: '' },
  { id: '0024', name: '烤鸭', url: '' },
  { id: '0025', name: '火锅', url: '' },
  { id: '0026', name: '羊肉串', url: '' },
  { id: '0027', name: '香菇青菜包', url: '' },
  { id: '0028', name: '肉包', url: '' },
  { id: '0029', name: '西红柿炒鸡蛋', url: '' },
  { id: '0030', name: '鱼头豆腐汤', url: '' },
]);
</script>

<style>
.centered-text {
  text-align: center;
  /* 让文本水平居中对齐 */
}

.button-container {
  display: flex;
  flex-wrap: wrap;
  /* 自动换行 */
  gap: 8px;
  /* 按钮之间的间距 */
  justify-content: flex-start;
  /* flex-start左对齐 ，center(居中对齐) */
  /*padding: 40px; /* 页面边框的按钮距离 */
  margin-top: 20px;
  /* 按钮顶部边距 */
  margin-left: 20px;
  margin-right: 20px;
}

button {
  min-width: 15px;
  /* 按钮的最小宽度 */
  padding: 6px;
  font-size: 12px;
  /* font-weight: bold; /* 设置字体加粗 */
  text-align: center;
  /* 文本居中 */
  white-space: nowrap;
  /* 防止文本换行 */
  background-color: #b8f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  /* background-color: #97b3b3; /* 按钮点击后的颜色 */
}
</style>
