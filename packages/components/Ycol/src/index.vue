<template>
  <div class="y-col"><slot /></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  span: {
    type: Number,
    default: 24,
  },
  offset: {
    type: Number,
    default: 0,
  },
});
let tempWidth;
if (props.span <= 24) {
  tempWidth = props.span % 1 == 0 ? `${(100 / 24) * props.span}%` : '';
} else {
  tempWidth = '';
}
const width = ref(tempWidth);
let tempOffset;
if (props.offset <= 24) {
  tempOffset = props.offset % 1 == 0 ? `${(100 / 24) * props.offset}%` : '';
} else {
  tempOffset = '';
}
const offset = ref(tempOffset);
onMounted(() => {
  console.log('col组件', props.span, props.offset);
});
</script>

<style lang="scss" scoped>
.y-col {
  width: v-bind(width);
  float: left;
  margin-left: v-bind(offset);
}
</style>
