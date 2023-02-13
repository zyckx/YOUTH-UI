<template>
  <y-input v-model="value" placeholder="只读内容" readonly />
  <hr />
  <y-input v-model="value1" placeholder="只读内容" readonly />
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';

const value = ref('');
const value1 = ref('唉呀，只可读取内容，无法修改');
</script>
