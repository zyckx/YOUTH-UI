<template>
  <div>
    <y-input v-model:value="value" placeholder="Basic usage" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const value = ref<string>('123');
    return {
      value,
    };
  },
});
</script>
