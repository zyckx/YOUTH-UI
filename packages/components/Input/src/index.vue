<template>
  <div :class="[`y-group-input-${size}`]" :style="{ 'min-width': 'auto' }">
    <div :class="isClass" :style="isStyle">
      <!-- <i v-if="!showPassword && leftIcon != ''" :class="['left-icon', leftIcon]" /> -->
      <input
        :type="inputtype"
        :value="modelValue"
        :disabled="disabled"
        :placeholder="placeholder"
        :autofocus="autofocus"
        :readonly="readonly"
        :form="form"
        @focus="focus"
        @blur="blur"
        @input="iptChange"
        @change="change"
      />
      <transition name="slide-fade">
        <i
          v-if="!showPassword && clearable && modelValue != ''"
          class="clearable-icon y-icon-close"
          @click="clear"
        />
      </transition>
      <i v-if="!showPassword && rightIcon != ''" :class="['right-icon', rightIcon]" />
      <i v-if="showPassword" :class="['password-icon', 'y-icon-browse']" @click="showPwd(type)" />
    </div>
    <slot name="btn" />
  </div>
</template>

<script setup>
import { computed, onMounted, ref, useSlots } from 'vue';

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'input', 'change']);
const props = defineProps({
  modelValue: String || Number,
  disabled: Boolean,
  clearable: Boolean,
  showPassword: Boolean,
  type: String,
  size: {
    type: String,
    default: 'default',
  },
  leftIcon: {
    type: String,
    default: '',
  },
  rightIcon: {
    type: String,
    default: '',
  },
  placeholder: String,
  // 当页面加载时 <input> 元素自动获得焦点
  autofocus: Boolean,
  focusColor: {
    type: String,
    default: '#0e80eb',
  },
  readonly: Boolean,
  form: String,
});
const slot = useSlots();
const isStyle = ref({});
const inputtype = ref(props.type);
const focusStyle = {
  width: slot.btn ? 'auto' : '100%',
  float: slot.btn ? 'left' : 'auto',
  'border-radius': slot.btn ? '4px 0 0 4px' : '4px',
  'border-color': '#dcdfe6f6',
};
isStyle.value = focusStyle;
const focus = (e) => {
  focusStyle['border-color'] = '#0e80eb';
  isStyle.value = {
    width: slot.btn ? 'auto' : '100%',
    float: slot.btn ? 'left' : 'auto',
    'border-radius': slot.btn ? '4px 0 0 4px' : '4px',
    'border-color': props.focusColor,
  };
  emit('focus', e);
};
const blur = (e) => {
  isStyle.value = {
    width: slot.btn ? 'auto' : '100%',
    float: slot.btn ? 'left' : 'auto',
    'border-radius': slot.btn ? '4px 0 0 4px' : '4px',
  };
  emit('blur', e);
};
const iptChange = (e) => {
  emit('update:modelValue', e.target.value);
  emit('input', e.target.value);
};
const change = (e) => {
  emit('change', e);
};
const clear = (e) => {
  emit('update:modelValue', '');
  emit('clear');
};
// 显示密码
const showPwd = (e) => {
  if (inputtype.value == 'text') {
    inputtype.value = 'password';
  } else {
    inputtype.value = 'text';
  }

  console.log(e);
};
const isClass = computed(() => {
  return [
    // eslint-disable-next-line no-nested-ternary
    props.clearable
      ? 'y-input-clearable'
      : props.size == 'default'
      ? 'y-input-default'
      : `y-input-${props.size}`,
    // eslint-disable-next-line no-nested-ternary
    props.leftIcon != ''
      ? `y-input-left-icon-${props.size}`
      : // eslint-disable-next-line no-nested-ternary
      !props.clearable
      ? props.rightIcon != ''
        ? `y-input-right-icon-${props.size}`
        : ''
      : '',
    props.disabled ? 'y-input-disabled' : '',
    // eslint-disable-next-line no-nested-ternary
    props.type == 'password'
      ? props.showPassword
        ? `y-input-password-showpassword-${props.size}`
        : `y-input-password-${props.size}`
      : '',
  ];
});
</script>

<style scoped lang="scss">
.y-input-default,
.y-input-password-default,
.y-input-password-showpassword-default,
.y-group-input-default {
  width: 100%;
  height: 35px;
  border: 1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  input {
    width: 100%;
    font-size: 14px;
    outline: none;
    border: 0;
    margin: 0;
    padding: 10px 10px 10px 10px;
    box-sizing: border-box;
    color: #606266;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 14px;
  }
  i.password-icon {
    position: absolute;
    right: 10px;
    top: 11px;
    color: #94969b;
    transition: all 0.2s ease;
    cursor: pointer;
  }
}
.y-input-password-showpassword-default {
  input {
    padding-right: 30px;
  }
}
.y-input-clearable {
  width: 100%;
  height: 35px;
  border: 1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  input {
    width: 100%;
    font-size: 14px;
    outline: none;
    border: 0;
    margin: 0;
    padding: 10px 30px 10px 10px;
    box-sizing: border-box;
    color: #606266;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 14px;
  }
  .clearable-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #94969b;
    transition: all 0.2s ease;
    cursor: pointer;
  }
}
.y-input-small,
.y-input-password-small,
.y-input-password-showpassword-small,
.y-group-input-small {
  position: relative;
  width: 100%;
  height: 30px;
  border: 1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease;
  box-sizing: border-box;
  input {
    width: 100%;
    font-size: 13px;
    outline: none;
    border: 0;
    margin: 0;
    padding: 7px 30px 7px 10px;
    box-sizing: border-box;
    color: #606266;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 13px;
  }
  i.password-icon {
    position: absolute;
    right: 10px;
    top: 8px;
    color: #94969b;
    transition: all 0.2s ease;
    cursor: pointer;
  }
}
.y-input-password-showpassword-small {
  input {
    padding-right: 30px;
  }
}
.y-input-mini,
.y-input-password-mini,
.y-input-password-showpassword-mini,
.y-group-input-mini {
  width: 100%;
  height: 28px;
  border: 1px solid #dcdfe6f6;
  overflow: hidden;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  input {
    width: 100%;
    font-size: 12px;
    outline: none;
    border: 0;
    margin: 0;
    padding: 6px 10px 6px 10px;
    box-sizing: border-box;
    color: #606266;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 12px;
  }
  i.password-icon {
    position: absolute;
    right: 10px;
    top: 7px;
    color: #94969b;
    transition: all 0.2s ease;
    cursor: pointer;
  }
}
.y-input-password-showpassword-mini {
  input {
    padding-right: 30px;
  }
}
.y-input-left-icon-default {
  height: 35px;
  input {
    padding: 10px 25px 10px 32px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 14px;
  }
  .left-icon {
    position: absolute;
    left: 10px;
    top: 11px;
    color: #94969b;
  }
}
.y-input-left-icon-small {
  height: 30px;
  input {
    padding: 7px 25px 7px 32px;
    font-size: 13px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 13px;
  }
  .left-icon {
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 13px;
    color: #94969b;
  }
  .clearable-icon {
    font-size: 13px;
    top: 8px;
  }
}
.y-input-left-icon-mini {
  height: 28px;
  input {
    padding: 6px 25px 6px 32px;
    font-size: 12px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 12px;
  }
  .left-icon {
    position: absolute;
    left: 10px;
    top: 7px;
    font-size: 12px;
    color: #94969b;
  }
  .clearable-icon {
    font-size: 12px;
    top: 7px;
  }
}
.y-input-right-icon-default {
  height: 35px;
  input {
    padding: 10px 32px 10px 10px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
  }
  .right-icon {
    position: absolute;
    right: 10px;
    top: 11px;
    color: #94969b;
  }
}
.y-input-right-icon-small {
  height: 30px;
  input {
    padding: 7px 32px 7px 10px;
    font-size: 13px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 13px;
  }
  .right-icon {
    position: absolute;
    right: 10px;
    top: 8px;
    font-size: 13px;
    color: #94969b;
  }
}
.y-input-right-icon-mini {
  height: 28px;
  input {
    padding: 6px 32px 6px 10px;
    font-size: 12px;
  }
  input::placeholder {
    /* 大部分现代浏览器 */
    color: #c6c8cc;
    font-size: 12px;
  }
  .right-icon {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 12px;
    color: #94969b;
  }
}
.y-input-disabled {
  input {
    cursor: no-drop;
    color: #c3bfbf;
  }
  .clearable-icon {
    display: none;
  }
  .left-icon {
    position: absolute;
    left: 10px;
    top: 10px;
    color: #c6c8cc;
  }
  .right-icon {
    position: absolute;
    right: 10px;
    top: 10px;
    color: #c6c8cc;
  }
}
.y-group-input-default {
  border: none;
  height: auto;
}
.y-group-input-small {
  border: none;
  height: auto;
  .y-input-clearable {
    height: 30px;
    .clearable-icon {
      top: 7px;
      font-size: 13px;
    }
  }
}
.y-group-input-mini {
  border: none;
  .y-input-clearable {
    height: 28px;
    .clearable-icon {
      top: 8px;
      font-size: 12px;
    }
  }
}
.y-group-input-default :deep(.y-button) {
  padding: 9px 20px !important;
  border-radius: 0 2px 2px 0;
}
.y-group-input-small :deep(.y-button) {
  padding: 6.6px 15px !important;
  border-radius: 0 2px 2px 0;
}
.y-group-input-mini :deep(.y-button) {
  padding: 7px 15px !important;
  font-size: 12px;
  border-radius: 0 2px 2px 0;
  i {
    font-size: 12px;
  }
}
input::-webkit-input-placeholder {
  /* WebKit, Blink, Edge */
  color: #c6c8cc;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 ~ 18 */
  color: #c6c8cc;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  color: #c6c8cc;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10 ~ 11 */
  color: #c6c8cc;
}
input::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #c6c8cc;
}

.slide-fade-enter-active {
  transition: all 0.1s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
