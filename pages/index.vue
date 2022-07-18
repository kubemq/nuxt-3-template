<template>
  <div>
    <h5>Basic</h5>
    <Textarea v-model="value1" rows="5" cols="30" />

    <h5>Auto Resize</h5>
    <Textarea v-model="value2" :autoResize="true" rows="5" cols="30" />

    <h5>Disabled</h5>
    <Textarea v-model="value3" disabled rows="5" cols="30" />
    <pre lang="json">{{ x }} {{ y }}</pre>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  useMouse } from '@vueuse/core'
  const value1 = ref('sd');
  const value2 = ref('');
  const value3 = ref('');
  const { x, y } = useMouse();
  value1.value = `${x.value} ${y.value}`;
</script>

<style scoped>

</style>
