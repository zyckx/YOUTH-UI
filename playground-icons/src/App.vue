<template>
  <component :is="Icon" v-for="(Icon, key) in icons" :key="key" class="icon" />
  <hr />
  123
  <component :is="`YIcon${key}`" v-for="key in Object.keys(icons)" :key="key" class="icon" />
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import { ArrowLeft, icons } from '@youth-ui/icons-vue/global';

onMounted(() => {
  console.log(icons);
});
</script>

<style>
.icon {
  height: 48px;
  color: #409eff;
}
</style>
