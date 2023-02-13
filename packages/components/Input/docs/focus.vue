<template>
  <y-input v-model="value" placeholder="自定义focus状态的颜色" focus-color="red" />
</template>

<!-- js -->
<script setup>
import { ref } from 'vue';

const value = ref('');
</script>
