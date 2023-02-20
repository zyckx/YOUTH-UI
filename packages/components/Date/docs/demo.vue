<template>
  <div>
    <y-date v-model="dateVal" placeholder="请选择日期" @change="dateChange" />
  </div>
</template>
<script setup>
import { ref } from 'vue';

const dateVal = ref('');
const dateChange = (e) => {
  console.log(e);
};
</script>
