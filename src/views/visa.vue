<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="visa">
      <div class="title">
        国家签证
        <div class="line"></div>
      </div>
      <div class="tag_page">
        <div class="item" v-for="item of tags" :key="item.id" :class="{'active': activeTag === item.id}" @click="changeTag(item)">{{item.name}}</div>
      </div>
      <div class="content-box">
        <div class="box" v-for="(item, index) of visaData[activeTag-1]" :key="index">
          <template v-if="item.title">
            <div class="content_title">{{item.title}}</div>
          </template>
          <template v-if="item.desc">
            <div class="content_desc" v-html="item.desc"></div>
          </template>
          <template v-if="item.list.length">
            <div class="content_list_item" v-for="(sItem, sIndex) of item.list" :key="sIndex" v-html="sItem"></div>
          </template>
        </div>
      </div>
      <div class="btn-box">
        <el-button round class="btn" @click="toPage">查询预约</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import visaData from '@/utils/visaData';

export default {
  components: {
    CustomHeaderAndName
  },
  data() {
    return {
      bannerData: {
        name: '代办签证',
        url: require('../assets/visa/banner.png')
      },
      activeTag: 1,
      tags: [
        {
          id: 1,
          name: '泰国签证'
        }, {
          id: 2,
          name: '缅甸签证'
        }, {
          id: 3,
          name: '越南签证'
        }, {
          id: 4,
          name: '日本签证'
        }, {
          id: 5,
          name: '英国签证'
        }, {
          id: 6,
          name: '美国签证'
        }, {
          id: 7,
          name: '新加坡签证'
        }, {
          id: 8,
          name: '中国签证'
        }
      ]
    }
  },
  computed: {
    visaData() {
      return visaData;
    }
  },
  methods: {
    changeTag(item) {
      this.activeTag = item.id;
    },
    toPage() {
      this.$router.push({name: 'Interview'});
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background: #f8f7f2;
  .visa {
    width: 1000px;
    margin: 0 auto;
    .title {
      font-family: 'NotoSansSC-Bold';
      font-size: 36px;
      color: #3A3A3C;
      letter-spacing: 0;
      text-align: center;
      height: 54px;
      line-height: 54px;
      padding-top: 64px;
      .line {
        width: 80px;
        height: 6px;
        background: #C9B884;
        margin: 0 auto;
      }
    }
    .tag_page {
      margin-top: 46px;
      text-align: center;
      font-family: NotoSansSC-Medium;
      font-size: 22px;
      color: #3A3A3C;
      margin-bottom: 39px;
      .item {
        display: inline-block;
        margin-right: 28px;
        height: 33px;
        line-height: 33px;
        cursor: pointer;
        &.active {
          color: #C9B884 ;
          border-bottom: 2px solid #C9B884 ;
        }
        &:nth-child(7) {
          width: 110px;
        }
      }
    }
    .content-box{
      width: 887px;
      margin: 39px auto 0;
      .box {
        margin-bottom: 33px;
        .content_title {
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #3A3A3C;
          line-height: 54px;
          margin-bottom: 33px;
        }
        .content_desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #000000;
          line-height: 37px;
        }
        .content_list_item {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #000000;
          line-height: 37px;
          margin-bottom: 29px;
          margin-bottom: 33px;
        }
      }
    }
    .btn-box {
      text-align: center;
      margin-top: 60px;
      .btn {
        width: 204px;
        height: 45px;
        background: #3A3A3C;
        color: #F8F7F2;
        margin-bottom: 64px;
        border: none;
      }
    }
  }
}
</style>