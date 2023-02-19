<template>
  <div
    class="y-select"
    :tabindex="disabled ? '' : -1"
    ref="selectRef"
    :class="{
      'is-disabled': disabled,
    }"
  >
    <!-- 单选选择器 -->
    <div v-if="!multiple" class="y-base-select" :tabindex="disabled ? '' : -1">
      <!-- holder -->
      <div v-show="modelLabel" class="y-select-label">{{ modelLabel }}</div>
      <div v-show="!modelLabel" class="y-select-placeholder">
        {{ placeholder }}
      </div>
      <div
        class="y-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
      >
        <span class="removes" v-if="modelLabel && closeVisible" @click="handleClear"></span>
        <span class="downs" v-else-if="closeVisible"></span>
      </div>
    </div>
    <!-- 多选选择器 -->
    <div class="y-base-select" v-if="multiple">
      <div style="display: flex; margin-right: 5px; width: auto">
        <div
          v-for="(item, index) in modelLabel"
          :key="index"
          @click="!disabled && handleClear(item)"
          :class="{
            'is-disabled': disabled,
            'y-select-tags': !disabled,
          }"
        >
          {{ item }}
        </div>
        <div v-show="modelLabel.length === 0" class="y-select-placeholder">
          {{ placeholder }}
        </div>
      </div>
      <div
        class="y-select-suffix"
        @mousemove="clearable ? (closeVisible = true) : ''"
        @mouseleave="clearable ? (closeVisible = false) : ''"
      >
        <div class="removes" v-if="modelLabel.length !== 0 && !disabled" @click="handleClear"></div>
        <div class="downs" v-else-if="!disabled"></div>
      </div>
    </div>
    <!-- 下拉框 -->
    <div class="y-select-dropdown">
      <div class="no-options" v-show="options.length === 0">无选项</div>
      <span
        class="y-select-option"
        :class="{
          'is-active': multiple ? modelValue.includes(item.value) : modelValue === item.value,
          'is-disabled': item.disabled,
          'is-multiple': multiple,
        }"
        v-for="item in options"
        :key="item.value"
        @click="handleOptionClick(item)"
      >
        <span>{{ item.label }}</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue';
import { selectProps, selectEmits, useSelect } from './select';
const props = defineProps(selectProps);
const emits = defineEmits(selectEmits);

const selectRef = ref();
const {
  options,
  modelValue,
  modelLabel,
  disabled,
  placeholder,
  clearable,
  closeVisible,
  multiple,
} = useSelect(props, emits);

const handleOptionClick = (item: any) => {
  if (!item.disabled) {
    if (multiple.value) {
      const isRemove = modelValue.value.includes(item.value);
      isRemove
        ? modelValue.value.splice(modelValue.value.indexOf(item.value), 1)
        : modelValue.value.push(item.value);
      emits('update:modelValue', modelValue.value);
      emits('change', modelValue.value);
    }

    if (!multiple.value) {
      selectRef.value.blur();
      emits('update:modelValue', item.value);
      emits('change', item.value);
    }
  }
};

const handleClear = (e: any) => {
  if (!multiple.value) {
    emits('update:modelValue', '');
    emits('clear', '');
  }
  if (multiple.value) {
    const value = options.value.find((v: any) => v.label === e)?.value;
    if (modelValue.value.indexOf(value) > -1) {
      modelValue.value.splice(modelValue.value.indexOf(value), 1);
    } else {
      modelValue.value.splice(0, modelValue.value.length);
    }
    emits('update:modelValue', modelValue.value);
    emits('clear', modelValue.value);
  }
};
</script>

<script lang="ts">
export default {
  name: 'YSelect',
};
</script>
<style lang="scss">
.y-select {
  width: 100%;
  position: relative;
  cursor: pointer;

  .y-select-placeholder {
    color: rgba(194, 194, 194, 1);
  }

  .y-select-label,
  .y-select-placeholder {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .y-base-select {
    width: 100%;
    line-height: 34px;
    min-height: 34px;
    background-color: #fff;
    background-image: none;
    border-radius: 6px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: flex;
    font-size: inherit;
    outline: none;
    padding: 0 30px 0 15px;
    color: rgb(51, 54, 57);
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    position: relative;
    align-items: center;
    overflow-y: hidden;
    overflow-x: hidden;
    &:hover {
      border-color: #c0c4cc;
      overflow-x: auto;
    }
    &:active,
    &:focus {
      outline: none;
      border-color: black;
      // box-shadow: 0 0 0 2px #1773c2;
      overflow-x: auto;
    }

    .y-select-suffix {
      position: absolute;
      right: 5px;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .y-select-tags {
    padding: 1px 10px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    color: 94, 96, 99;
    background-color: 250, 250, 252;
    font-size: inherit;
    cursor: pointer;
    position: relative;
    right: 5px;
    display: block;
    white-space: nowrap;
    margin-right: 2px;
  }

  .is-disabled {
    cursor: not-allowed !important;
    background-color: #f5f7fa;
    border-color: #e4e7ed;
    color: #c0c4cc;

    // pointer-events: none;
    padding: 1px 10px;
    height: 22px;
    line-height: 22px;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    font-size: inherit;
    position: relative;
    right: 5px;
    display: block;
    white-space: nowrap;
    margin-right: 2px;
  }

  .y-select-dropdown {
    z-index: 10000;
    position: absolute;
    border-radius: 3px;
    padding: 0;
    top: calc(100% + 5px);
    width: 100%;
    opacity: 0;
    height: 0px;
    width: 100%;
    pointer-events: none;
    background-color: #fff;
    transition: all 250ms ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 3px 6px -4px, rgba(0, 0, 0, 0.08) 0px 6px 16px 0px,
      rgba(0, 0, 0, 0.05) 0px 9px 28px 8px;
    overflow-y: auto;
    overflow-x: hidden;
    text-overflow: ellipsis;

    .no-options {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .y-select-option {
      z-index: 10000;
      display: inline-block;
      cursor: pointer;
      min-width: 100%;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      height: 32px;
      padding: 0 10px;
      line-height: 32px;
      overflow: visible;
      background-color: #fff;
      position: relative;
      margin-bottom: 1px;

      .y-select-option-suffix-icon {
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        width: 30px;
        right: 0;
        top: 0;
      }

      &:hover,
      &.is-active {
        background-color: #f3f3f5;
        // color: #409eff;
      }

      &.is-disabled {
        cursor: not-allowed;
        background-color: #fff;
        color: #c2cddd;
      }

      &.is-disabled.is-active {
        background-color: #f9f9fa;
        color: #a5ceaf;
      }

      &.is-multiple {
        padding-right: 30px;
      }
    }
  }

  &:hover .y-select-dropdown {
    pointer-events: auto;
  }
  &:focus-within .y-select-dropdown {
    opacity: 1;
    height: auto;
    max-height: 300px;
    width: 100%;
    pointer-events: auto;
  }

  &:focus-within .y-base-select {
    outline: none;
    border-color: #1773c2;
  }

  &.is-disabled {
    cursor: not-allowed;
  }
  &.is-disabled .y-base-select {
    cursor: not-allowed;
    background-color: #fafafc;
    color: rgba(194, 194, 194, 1);

    &:hover,
    &:focus,
    &:active {
      border: 1px solid #dcdfe6;
      box-shadow: none;
    }
  }
}

.removes {
  position: absolute;
  z-index: 1000000;
  right: 0;
  top: 0;
  color: #999;
  cursor: pointer;
  padding: 1px 10px;
  font-style: normal;
  &::before {
    content: '\2716';
    display: inline-block;
    transition: all 0.4s;
    transform: rotate(0deg);
  }
  &:hover::before {
    color: #2c3e50;
    transform: rotate(90deg);
  }
}

.downs {
  position: absolute;
  right: 0;
  top: 0;
  color: #999;
  cursor: pointer;
  padding: 1px 10px;
  font-style: normal;
  &::before {
    content: '\25BC';
    display: inline-block;
    transition: all 0.4s;
  }
  &:hover::before {
    color: #2c3e50;
  }
}
</style>
