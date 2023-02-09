<template>
  <div class="y-checkbox-group" role="group">
    <slot />
  </div>
</template>
<script>
export default {
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
    min: Number,
    max: Number,
    disabled: Boolean,
  },
  data() {
    return {
      isCheckedAll: false,
    };
  },
};
</script>
<style scoped></style>
