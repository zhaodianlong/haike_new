<template>
  <div class="bg">
    <!-- banner -->
    <CustomHeaderAndName :data="bannerData" />
    <!-- 表单 -->
    <InterviewComponents />
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import InterviewComponents from '@/components/InterviewComponents';

export default {
  components: {
    CustomHeaderAndName,
    InterviewComponents
  },
  data() {
    return {
      bannerData: {
        name: '预约咨询',
        url: require('../assets/interview/banner.png')
      }
    }
  }
}
</script>

<style>

</style>