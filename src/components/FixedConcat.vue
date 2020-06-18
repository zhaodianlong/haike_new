<template>
  <div class="box">
    <div class="item" v-for="(item, index) of list" :key="index">
      <!-- 弹窗 -->
      <el-popover
        placement="left-start"
        width="200"
        trigger="hover"
        v-if="index===0">
        <img src="../assets/home/ercode.png" alt="">
        <div class="sub-item" slot="reference" :style="{background: 'url('+item.img+')'}"></div>
      </el-popover>
      <!-- 链接 -->
      <div class="sub-item" :style="{background: 'url('+item.img+')'}" v-else>
        <a :href="item.link" class="link" target="_blank"></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          img: require('../assets/home/wx.png'),
          link: ''
        },
        {
          img: require('../assets/home/mobile.png'),
          link: 'https://api.whatsapp.com/send?phone=85269921971'
        },
        {
          img: require('../assets/home/email.png'),
          link: 'mailto:cherry@haike.com'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 90px;
  height: 300px;
  position: fixed;
  top: 470px;
  right: 32px;
  z-index: 99999;
  .sub-item {
    width: 90px;
    height: 90px;
    background-size: cover;
    margin-bottom: 19px;
    cursor: pointer;
    .link {
      display: block;
      width: 90px;
      height: 90px;
      border-radius: 100%;
    }
  }
}
</style>