<template>
  <div class="y-checkbox-group" role="group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCheckedAll: false,
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
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  setup(props, context) {},
  computed: {
    
  },
};
</script>
<style scoped></style>
