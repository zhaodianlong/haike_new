<template>
  <div>
    <div class="bg">
      <!-- banner 部分 -->
      <CustomHeaderAndName :data="bannerData" />
      <div class="immigrationDetail">
        <div class="title">
          {{subTitle}}
          <div class="line"></div>
        </div>
        <div class="tag_page">
          <div class="item" v-for="item of tags" :key="item.id" :class="{'active': activeTag === item.id}" @click="changeTag(item)">{{item.name}}</div>
        </div>
        <div class="content">
          <div class="item" v-for="(item, index) of detailData.contents[activeTag - 1]" :key="index">
            <div class="title">{{item.title}}</div>
            <div class="list" v-for="(cItem, cIndex) of item.list" :key="cIndex">
              <div class="c-item" v-html="cItem"></div>
            </div>
            <div class="desc" v-if="item.desc">{{item.desc}}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 申请程序 -->
    <ApplyFlow />
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import ApplyFlow from '@/components/ApplyFlow';
import { getImmigrationDetail } from '@/utils/index'

export default {
  components: {
    CustomHeaderAndName,
    ApplyFlow
  },
  data() {
    return {
      bannerData: {
        name: '香港移民',
        url: require('../assets/immigration/banner.png')
      },
      detailData: {},
      activeTag: 1,
      tags: [
        { 
          id: 1,
          name: '香港定居 / 优才进修'
        },
        { 
          id: 2,
          name: '香港进修留学'
        },
        { 
          id: 3,
          name: '香港创业融资'
        }
      ]
    }
  },
  computed: {
    subTitle() {
      return this.detailData.subTitle;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.detailData = getImmigrationDetail(this.$route.query.country);
      this.bannerData.name = this.detailData.title;
    },
    changeTag(item) {
      this.activeTag = item.id;
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background: #f8f7f2;
  .immigrationDetail {
    width: 887px;
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
      margin-top: 45px;
      text-align: center;
      font-family: NotoSansSC-Medium;
      font-size: 22px;
      color: #3A3A3C;
      margin-bottom: 39px;
      .item {
        display: inline-block;
        margin-right: 24px;
        height: 33px;
        line-height: 33px;
        cursor: pointer;
        &.active {
          color: #C9B884;
          border-bottom: 2px solid #C9B884;
        }
      }
    }
    .content {
      padding-bottom: 55px;
      .item {
        .title {
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #3A3A3C;
          text-align: left;
          line-height: 54px;
          margin-bottom: 33px;
        }
        .list {
          .c-item {
            font-family: 'NotoSansSC-Regular';
            font-size: 22px;
            color: #000000;
            text-align: left;
            line-height: 37px;
          }
        }
        .desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #001B00;
          text-align: left;
          line-height: 37px;
          margin-top: 33px;
        }
      }
    }
  }
}
</style>