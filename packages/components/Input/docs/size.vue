<template>
  <y-row>
    <b>default:</b>
    <y-input v-model="value" placeholder="请输入内容" />
  </y-row>
  <y-row>
    <b>small:</b>
    <y-input v-model="value" placeholder="请输入内容" size="small" />
  </y-row>
  <y-row>
    <b>mini:</b>
    <y-input v-model="value" placeholder="请输入内容" size="mini" />
  </y-row>
</template>
<script lang="ts" setup>
import { ref } from 'vue';

const value = ref('');
</script>
<style scoped>
.y-row {
  margin-bottom: 10px;
}
</style>
