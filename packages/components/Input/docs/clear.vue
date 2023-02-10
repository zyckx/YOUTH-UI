<template>
  <y-icon class="" />
  <y-input v-model="value" placeholder="可清空的输入框" clearable />
</template>

<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
