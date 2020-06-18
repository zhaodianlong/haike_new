<template>
  <div class="img-carousel">
    <el-carousel trigger="click" indicator-position="none" :autoplay="false" height="397px" arrow="always">
      <el-carousel-item v-for="(item, index) in images" :key="index">
        <div class="box1">
          <div class="card" v-for="(sItem, sIndex) of item" :key="sIndex" :style="{backgroundImage: 'url('+sItem.img+')'}">
            <div class="mengban">
              <div class="name">{{sItem.name}}</div>
              <div class="subname">{{sItem.subname}}</div>
              <el-button class="detail-btn" round @click="toDetailPage(sItem)">详情</el-button>
            </div>
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    toDetailPage(item) {
      if (item.englishName === 'HongKong') {
        // 香港有标签页单独处理
        this.$router.push({name: 'ImmigrationHongKongDetail', query: {country: item.englishName}});
      } else {
        this.$router.push({name: 'ImmigrationDetail', query: {country: item.englishName}});
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.img-carousel {
  width: 1366px;
  overflow: hidden;
  .box1 {
    width: 1700px;
    overflow: hidden;
    .card {
      position: relative;
      width: 355px;
      height: 397px;
      background-size: cover;
      float: left;
      margin-right: 16px;
      &:nth-child(1) {
        margin-left: -46px;
      }
      .mengban {
        position: absolute;
        top: 0;
        left: 2px;
        right: 2px;
        bottom: 0;
        background-image: linear-gradient(180deg, #3A3A3C 0%, rgba(87,87,87,0.00) 89%);
        padding: 12px 26px;
        .name {
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #F8F7F2;
          line-height: 54px;
        }
        .subname {
          font-family: 'NotoSansSC-Regular';
          font-size: 18px;
          color: #F8F7F2;
          line-height: 27px;
        }
        .detail-btn {
          width: 108px;
          height: 45px;
          background: #C9B884;
          color: #3A3A3C;
          font-size: 18px;
          font-family: 'NotoSansSC-Medium';
          position: absolute;
          left: 26px;
          bottom: 24px;
          border: none;
          &:hover {
            background: #e6e0ca;
          }
        }
      }
    }
  }
  /deep/ .el-carousel__arrow {
    background-color: rgba(248,247,242,0.50);
    border: 3px solid #F8F7F2;
    i {
      font-weight: bold;
      font-size: 16px;
    }
  }
}
</style>