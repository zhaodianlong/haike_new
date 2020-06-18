<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="immigration">
      <div class="card-box">
        <el-row :gutter="27.5">
          <el-col :span="8" v-for="(item, index) of cards" :key="index">
            <div class="card" :style="{backgroundImage: 'url('+item.img+')'}">
              <div class="mengban">
                <div class="name">{{item.name}}</div>
                <div class="subname">{{item.subname}}</div>
                <el-button class="detail-btn" round @click="toDetailPage(item)">详情</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
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
        name: '海外移民',
        url: require('../assets/immigration/banner.png')
      },
      cards: [
        {
          name: '马耳他移民',
          englishName: 'Malta',
          subname: '四位一体国家 含金量高',
          img: require('../assets/immigration/1.png')
        },
        {
          name: '塞浦路斯移民',
          englishName: 'Cyprus',
          subname: '欧盟国家 含金量高',
          img: require('../assets/immigration/2.png')
        },
        {
          name: '黑山移民',
          englishName: 'Montenegro',
          subname: '准欧盟国家',
          img: require('../assets/immigration/3.png')
        },
        {
          name: '土耳其移民',
          englishName: 'Turkey',
          subname: '准欧盟国家',
          img: require('../assets/immigration/4.png')
        },
        {
          name: '安提瓜移民',
          englishName: 'Antigua',
          subname: '北美国家 性价比高',
          img: require('../assets/immigration/5.png')
        },
        {
          name: '圣卢西亚移民',
          englishName: 'St. Lucia',
          subname: '北美国家 性价比高',
          img: require('../assets/immigration/6.png')
        },
        {
          name: '多米尼克移民',
          englishName: 'Dominic',
          subname: '北美国家 性价比高',
          img: require('../assets/immigration/7.png')
        },
        {
          name: '圣基茨移民',
          englishName: 'SaintKitts',
          subname: '岛国移民 一步到位',
          img: require('../assets/immigration/8.png')
        },
        {
          name: '格林纳达移民',
          englishName: 'Grenada',
          subname: '北美国家 性价比高',
          img: require('../assets/immigration/9.png')
        },
        {
          name: '瓦努阿图移民',
          englishName: 'Vanuatu',
          subname: '性价比之王 多重国籍',
          img: require('../assets/immigration/10.png')
        },
        {
          name: '香港移民',
          englishName: 'HongKong',
          subname: '定居创业 优才进修',
          img: require('../assets/immigration/11.png')
        },
        {
          name: '加拿大移民',
          englishName: 'Canada',
          subname: '传统移民国 退休首选',
          img: require('../assets/immigration/12.png')
        }
      ]
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
.bg {
  width: 100%;
  .immigration {
    width: 1366px;
    margin: 0 auto;
    .card-box {
      width: 1120px;
      margin: 65px auto 63px;
      .card {
        position: relative;
        height: 397px;
        margin-bottom: 27px;
        background-size: cover;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
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
            font-family: NotoSansSC-Medium;
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
  }
}
</style>