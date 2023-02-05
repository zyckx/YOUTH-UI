<template>
  <div>
    <y-button @click="onClick(1)">第一个</y-button>
    <y-button @click="onClick(2)">第二个</y-button>
    <y-button @click="onClick(3)">第三个</y-button>
  </div>
</template>

<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onClick = (num) => {
  console.log(`我是第 ${num} 个自定义按钮`);
};
</script>
