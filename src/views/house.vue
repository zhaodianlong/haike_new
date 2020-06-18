<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <!-- 内容区 -->
    <div class="house">
      <div class="title">
        国家
        <div class="line"></div>
      </div>
      <div class="countries">
        <div class="country"
          v-for="(item, index) of countries"
          :key="index"
          :class="{active: activeIndex === index, ml50: index === 0}"
          @click="changeCountry(index)">
          {{item.name}}
        </div>
      </div>
      <div class="desc-box" v-html="activeContent"></div>
      <!-- 查询预约 -->
      <div class="btn-box">
        <el-button class="btn" round @click="toPage">查询预约</el-button>
      </div>
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
        name: '房产置业',
        url: require('../assets/house/banner.png')
      },
      countries: [
        {
          name: '泰国',
          desc: '泰国一直以来都是世界上最受欢迎的旅游目的地之一。 泰国经济在各个领域保持着活力，其房地产业最为突出。根据泰国政府的统计，泰国房产近一半是由外籍人士持有，并且目前有180万的外国退休人士在泰国生活。 <br><br><br>泰国一年四季夏季的气候，冬无严寒，非常适合居住，泰国是拥有全球最宜居城市最多的国度，清迈，曼谷，芭堤雅都是全 世界宜居城市的前十，泰国的空气质量在全球排名考前置，宜居指数非常高。 这有各人文环境的熏陶，有物种极其丰富的华欣皇家圣地的植物园，也有绵连不断的海岸线，沙滩文化极其浓厚，滑板，冲浪、日光浴，一年365天不玩重样的。'
        },
        {
          name: '塞浦路斯',
          desc: '在塞浦路斯购房的最大好处是许多其他经济文化大国都比不上的。购置200万欧元房产，全家直接获得欧盟护照，免签171个国家和地区，可在欧盟所有成员国家，包括德、法国及欧洲经济区国家(包括瑞士，挪威，冰岛和列支敦士登)自由出入、定居、学习和工作。而且出租回报率可观。作为热门的旅游胜地，塞浦路斯气候适宜，游人众多，如果您购买的房产用于出租，会有很好的回报率。比如四到六居室的公寓或联排别墅平均租金为每周500欧元(淡季)-850欧元(旺季)，热门地区的别墅，夏季的租金为每周700英镑'
        }
      ],
      activeIndex: 0
    }
  },
  computed: {
    activeContent() {
      return this.countries[this.activeIndex].desc;
    }
  },
  methods: {
    changeCountry(index) {
      this.activeIndex = index;
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
  .house {
    width: 1366px;
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
      margin-bottom: 45px;
      .line {
        width: 80px;
        height: 6px;
        background: #C9B884;
        margin: 0 auto;
      }
    }
    .countries {
      text-align: center;
      margin-bottom: 55px;
      .country {
        display: inline-block;
        font-family: NotoSansSC-Medium;
        font-size: 22px;
        color: #3A3A3C;
        margin-right: 39px;
        line-height: 33px;
        cursor: pointer;
        &.active {
          color: #C9B884;
          border-bottom: 2px solid #C9B884;
        }
        &.ml50 {
          margin-left: 50px;
        }
      }
    }
    .desc-box {
      width: 887px;
      font-family: 'NotoSansSC-Regular';
      font-size: 22px;
      color: #3A3A3C;
      line-height: 33px;
      margin: 0 auto 55px;
    }
    .btn-box {
      text-align: center;
      margin-bottom: 64px;
      .btn {
        width: 204px;
        height: 45px;
        background: #3A3A3C;
        font-family: NotoSansSC-Medium;
        font-size: 18px;
        color: #F8F7F2;
        border: none;
        &:hover {
          background: #57575c;
        }
      }
    }
  }
}
</style>