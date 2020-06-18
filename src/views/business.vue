<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <!-- 内容区 -->
    <div class="business">
      <el-row :gutter="24">
        <el-col :span="12" v-for="(item, index) of listData" :key="index">
          <div class="item" :style="{backgroundImage: 'url('+item.img+')'}">
            <div class="mengban">
              <div class="name">{{item.name}}</div>
              <el-button class="btn" round @click="toVisaPage" v-if="index === 0">查看详情</el-button>
              <el-button class="btn" round @click="toInterviewPage" v-else>查询预约</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';

export default {
  components: {
    CustomHeaderAndName
  },
  data() {
    return {
      bannerData: {
        name: '商务预定',
        url: require('../assets/business/banner.png')
      },
      listData: [
        {
          name: '代办签证',
          img: require('../assets/business/1.png')
        },
        {
          name: '代办地址证明',
          img: require('../assets/business/2.png')
        },
        {
          name: '代订机票、酒店',
          img: require('../assets/business/3.png')
        },
        {
          name: '代办驾照',
          img: require('../assets/business/4.png')
        }
      ]
    }
  },
  methods: {
    toInterviewPage() {
      this.$router.push({name: 'Interview'});
    },
    toVisaPage() {
      this.$router.push({name: 'Visa'});
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background: #f8f7f2;
  .business {
    width: 1116px;
    margin: 64px auto 16px;
    .item {
      height: 397px;
      position: relative;
      margin-bottom: 24px;
      .mengban {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(180deg, #3A3A3C 4%, rgba(238,244,243,0.00) 69%);
        padding: 12px 26px;
        .name {
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #F8F7F2;
          line-height: 54px;
        }
        .btn {
          position: absolute;
          bottom: 26px;
          left: 12px;
          width: 204px;
          height: 45px;
          background: #C9B884;
          font-family: NotoSansSC-Medium;
          font-size: 18px;
          color: #3A3A3C;
          border: none;
          &:hover {
            background: #e6e0ca;
          }
        }
      }
    }
  }
}
</style>