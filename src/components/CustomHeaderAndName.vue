<template>
  <!-- banner 部分 -->
  <div>
    <CustomHeader2 />
    <div class="banner" :style="{backgroundImage: 'url('+ data.url +')'}">
      <div class="mengban">
        <div class="name">{{data.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeader2 from '@/components/CustomHeader2';

export default {
  props: {
    data: {
      type: Object,
      default() {
        return {
          url: '',
          name: ''
        }
      }
    }
  },
  components: {
    CustomHeader2
  }
}
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  height: 706px;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0 auto;
  .mengban {
    background: rgba(44,44,44,0.40);
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
  .name {
    width: 1120px;
    position: absolute;
    left: 50%;
    bottom: 58px;
    margin-left: -560px;
    font-family: 'NotoSansSC-Bold';
    font-size: 60px;
    color: #F8F7F2;
    line-height: 89px;
    
  }
}
</style>
