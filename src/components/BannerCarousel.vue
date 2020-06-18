<template>
  <div class="box">
    <el-carousel trigger="hover" height="709px" :interval="2000">
      <el-carousel-item v-for="item in list" :key="item">
        <div class="item-banner" :style="{backgroundImage: 'url('+item+')'}"></div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        require('../assets/home/1.jpg'),
        require('../assets/home/2.jpg'),
        require('../assets/home/3.jpg'),
        require('../assets/home/4.jpg'),
        require('../assets/home/5.jpg'),
        require('../assets/home/6.jpg')
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.item-banner {
  width: 100%;
  height: 709px;
  background-size: cover;
  background-repeat: no-repeat;
}

/deep/ .el-carousel__arrow {
  background-color: rgba(248,247,242,0.50);
  border: 3px solid #F8F7F2;
  i {
    font-weight: bold;
    font-size: 16px;
  }
}
</style>