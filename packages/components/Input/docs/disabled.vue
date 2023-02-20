<template>
  <y-input v-model="value" placeholder="禁用状态，无法输入" disabled />
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
