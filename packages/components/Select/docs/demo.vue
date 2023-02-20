<template>
  <div>
    <y-button :type="ButtonType" @click="triggerDisabled">{{ ButtonText }}</y-button>
    <p style="margin: 5px; height: 5px" />
    <y-select
      id="select"
      v-model="value1"
      style="width: 200px"
      :options="option1"
      :disabled="Disabled"
      clearable
      @change="print1"
    />
  </div>
  <p style="margin: 20px; height: 20px" />

  <div>
    <y-select
      id="select"
      v-model="value2"
      style="width: 400px"
      :options="option2"
      multiple
      placeholder="Please Choose"
      clearable
      :disabled="Disabled"
      @change="print2"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const abled = !!false;
const Disabled = ref(abled);
const type = 'info';
const ButtonType = ref(type);
const text = '禁用选项框';
const ButtonText = ref(text);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const triggerDisabled = () => {
  Disabled.value = !Disabled.value;
  ButtonType.value = Disabled.value ? 'success' : 'info';
  ButtonText.value = Disabled.value ? '启用选项框' : '禁用选项框';
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value1 = ref('4');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const option1 = [
  {
    label: '选项1',
    value: '1',
  },
  {
    label: '选项2',
    value: '2',
    disabled: true,
  },
  {
    label: '选项3',
    value: '3',
  },
  {
    label: '选项4',
    value: '4',
  },
  {
    label: '选项5',
    value: '5',
  },
  {
    label: '选项6',
    value: '6',
  },
  {
    label: '选项7',
    value: '7',
  },
  {
    label: '选项8',
    value: '8',
  },
  {
    label: '选项9',
    value: '9',
  },
  {
    label: '选项10',
    value: '10',
  },
  {
    label: '选项11',
    value: '11',
  },
  {
    label: '选项12',
    value: '12',
  },
  {
    label: '选项13',
    value: '13',
  },
  {
    label: '选项14',
    value: '14',
  },
  {
    label: '选项15',
    value: '15',
  },
  {
    label: '选项16',
    value: '16',
  },
  {
    label: '选项17',
    value: '17',
  },
  {
    label: '选项18',
    value: '18',
  },
  {
    label: '选项19',
    value: '19',
  },
  {
    label: '选项20',
    value: '20',
  },
  {
    label: '选项21',
    value: '21',
  },
  {
    label: '选项22',
    value: '22',
  },
  {
    label: '选项23',
    value: '23',
  },
  {
    label: '选项24',
    value: '24',
  },
  {
    label: '选项25',
    value: '25',
  },
  {
    label: '选项26',
    value: '26',
  },
  {
    label: '选项27',
    value: '27',
  },
  {
    label: '选项28',
    value: '28',
  },
  {
    label: '选项29',
    value: '29',
  },
  {
    label: '选项30',
    value: '30',
  },
  {
    label: '选项31',
    value: '31',
  },
  {
    label: '选项32',
    value: '32',
  },
  {
    label: '选项33',
    value: '33',
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const print1 = () => {
  // eslint-disable-next-line no-console
  console.log(`切换到选项${value1.value}`);
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const value2 = ref(['1', '3', '4']);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const option2 = [
  {
    label: '选项1',
    value: '1',
  },
  {
    label: '选项2',
    value: '2',
    disabled: true,
  },
  {
    label: '选项3',
    value: '3',
  },
  {
    label: '选项4',
    value: '4',
  },
  {
    label: '选项5',
    value: '5',
  },
  {
    label: '选项6',
    value: '6',
  },
  {
    label: '选项7',
    value: '7',
  },
  {
    label: '选项8',
    value: '8',
  },
  {
    label: '选项9',
    value: '9',
  },
  {
    label: '选项10',
    value: '10',
  },
  {
    label: '选项11',
    value: '11',
  },
  {
    label: '选项12',
    value: '12',
  },
  {
    label: '选项13',
    value: '13',
  },
  {
    label: '选项14',
    value: '14',
  },
  {
    label: '选项15',
    value: '15',
  },
  {
    label: '选项16',
    value: '16',
  },
  {
    label: '选项17',
    value: '17',
  },
  {
    label: '选项18',
    value: '18',
  },
  {
    label: '选项19',
    value: '19',
  },
  {
    label: '选项20',
    value: '20',
  },
  {
    label: '选项21',
    value: '21',
  },
  {
    label: '选项22',
    value: '22',
  },
  {
    label: '选项23',
    value: '23',
  },
  {
    label: '选项24',
    value: '24',
  },
  {
    label: '选项25',
    value: '25',
  },
  {
    label: '选项26',
    value: '26',
  },
  {
    label: '选项27',
    value: '27',
  },
  {
    label: '选项28',
    value: '28',
  },
  {
    label: '选项29',
    value: '29',
  },
  {
    label: '选项30',
    value: '30',
  },
  {
    label: '选项31',
    value: '31',
  },
  {
    label: '选项32',
    value: '32',
  },
  {
    label: '选项33',
    value: '33',
  },
];
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const print2 = () => {
  // eslint-disable-next-line no-console
  console.log(`切换到选项${value2.value}`);
};
</script>
