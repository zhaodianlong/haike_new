<template>
  <div class="bg">
    <!-- banner -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="news-box">
      <div class="title">
        海外移民动态
        <div class="line"></div>
      </div>
      <NewsItem v-for="(item, index) of newsList" :key="index" :data="item" />
    </div>
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import NewsItem from '@/components/NewsItem';

export default {
  components: {
    CustomHeaderAndName,
    NewsItem
  },
  data() {
    return {
      bannerData: {
        name: '海外移民动态',
        url: require('../assets/news/banner.png')
      },
      newsList: [
        {
          img: require('../assets/news/news1.png'),
          name: '移民和拥有中国护照冲突吗？',
          profile: '不冲突。移民是指拥有某个国家的永久居留权。护照是指加入了某个国家的国籍。移民就像居住在北京但不一定有北京户口。移民美国，仅有永久居留权...'
        },
        {
          img: require('../assets/news/news2.png'),
          name: '这五种高净值人群 最适合移民 ',
          profile: '在人们的生产生活水平得到了极大提高的情况下，移民已经不再是少数人的选择，越来越多家庭因子女教育、改善生活环境、配置海外资产和传承财富等问题...'
        },
        {
          img: require('../assets/news/news3.png'),
          name: '官方数据出炉！谁瞄准了塞浦路斯房地产市场？',
          profile: '塞浦路斯国内房地产销售额占总房地产销售额的44％，与2019年1月相比增长了2％。虽然法马古斯塔和利马索尔的销售额分别下降了69％和41％，但在其余...'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  .news-box {
    width: 1113px;
    margin: 65px auto 57px;
    .title {
      font-family: 'NotoSansSC-Bold';
      font-size: 36px;
      color: #3A3A3C;
      letter-spacing: 0;
      text-align: center;
      height: 54px;
      line-height: 54px;
      padding-top: 64px;
      margin-bottom: 88px;
      .line {
        width: 80px;
        height: 6px;
        background: #C9B884;
        margin: 0 auto;
      }
    }
  }
}
</style>