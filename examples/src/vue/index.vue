<template>
  <div class="hello-world">Hello world! {{ count }}</div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';

  const count = ref(0);
</script>

<style lang="less" scoped>
  .hello-world {
    font-size: 24px;
    color: aqua;

    .title {
      font-size: 16px;
    }
  }
</style>
