<template>
  <div id="app">
    <router-view />
    <!-- footer -->
    <CustomFooter />
    <!-- 右侧悬浮 -->
    <FixedConcat />
  </div>
</template>

<script>
import CustomFooter from '@/components/CustomFooter';
import FixedConcat from '@/components/FixedConcat';

export default {
  name: 'App',
  components: {
    CustomFooter,
    FixedConcat
  }
}
</script>

<style>
#app {
  font-family: 'NotoSansSC-Regular', Helvetica, Arial, sans-serif;
  min-width: 1366px;
}
</style>
