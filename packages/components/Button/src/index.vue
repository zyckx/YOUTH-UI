<template>
  <button class="y-button" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
// eslint-disable-next-line no-undef
defineEmits(['click']);
</script>

<style scoped lang="scss">
.y-button {
  appearance: none;
  padding: 5px 10px;
  background: lightskyblue;
  border: none;
  border-radius: 4px;
  color: #fff;
  &:active {
    background: rgb(92, 185, 243);
  }
  &:not(:last-child) {
    margin-right: 15px;
  }
}
</style>
