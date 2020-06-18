<template>
  <div class="home">
    <!-- banner 部分 -->
    <CustomHeader />
    <!-- 产品介绍 -->
    <div class="product">
      <div class="title">
        产品介绍
        <div class="line"></div>
      </div>
      <div class="tag_page">
        <div class="item" v-for="item of tags" :key="item.id" :class="{'active': activeTag === item.id}" @click="changeTag(item)">{{item.name}}</div>
      </div>
      <!-- 海外移民标签页 -->
      <ImgCarousel :images="productImages" v-if="activeTag === 1" />
      <!-- 境外开户标签页 -->
      <div class="box2" v-if="activeTag === 2">
        <el-row :gutter="23">
          <el-col :span="12" v-for="(item, inde) of bankData" :key="inde">
            <div class="item" :style="{backgroundImage: 'url('+item.img+')'}">
              <div class="mengban">
                <div class="name">{{item.name}}</div>
                <div class="subname">{{item.subname}}</div>
                <el-button class="btn" round @click="toBankPage">详情</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <!-- 商务预定标签页 -->
      <div class="box3" v-if="activeTag === 5">
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, index) of businessTagData" :key="index">
            <div class="box3-item" :style="{backgroundImage: 'url('+item.img+')'}">
              <div class="mengban">
                <div class="box3-item-title">{{item.name}}</div>
                <el-button class="btn" round @click="toVisaPage" v-if="index === 0">查看详情</el-button>
                <el-button class="btn" round @click="toInterviewPage" v-else>查询预约</el-button>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 公司介绍 -->
    <div class="company">
      <div class="mengban">
        <div class="content">
          <div class="logo"></div>
          <div class="desc">海客咨询立足于香港，以国际化理念服务于全球精英阶层。自成立以来，专注于高端全球移民服务，秉承专业、诚信、高效的服务理念为顾客提供服务，助力全球高净值人群家庭完美实现移民梦想。独有的管家体系，致力于全球精英提供海外移民、多重国籍、境外开户、外国学历和房产置业等服务，全方位为您提供适合的计划。</div>
        </div>
      </div>
    </div>
    <!-- 模块 -->
    <div class="bg-box">
      <div class="row-box">
        <el-row :gutter="65">
          <el-col :span="6" v-for="item of modules" :key="item.name">
            <div class="item">
              <div class="title">{{item.name}}</div>
              <div class="icon">
                <img :src="item.icon" alt="">
              </div>
              <div class="desc">{{item.desc}}</div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 专业团队 -->
    <div class="team-bg">
      <div class="team">
        <div class="title">
          专业团队
          <div class="line"></div>
        </div>
        <el-row :gutter="20">
          <el-col :span="8" v-for="item of teams" :key="item.name">
            <div class="team-item" :style="{backgroundImage: 'url(' + item.img + ')'}">
              <div class="mengban">
                <div class="position">{{item.position}}</div>
                <div class="name">{{item.name}}</div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <!-- 海外移民动态 -->
    <div class="news-bg">
      <div class="news">
        <div class="title">
          海外移民动态
          <div class="line"></div>
        </div>
        <div class="box">
          <NewsItem v-for="(item, index) of news" :key="index" :data="item" />
          <div class="btn-box">
            <el-button class="all-btn" round @click="toNewsPage">浏览全部</el-button>
          </div>
        </div>
      </div>
    </div>
    <!-- 预约咨询 -->
    <InterviewComponents />
  </div>
</template>

<script>
import CustomHeader from '@/components/CustomHeader';
import InterviewComponents from '@/components/InterviewComponents';
import NewsItem from '@/components/NewsItem';
import ImgCarousel from '@/components/ImgCarousel';

export default {
  components: {
    CustomHeader,
    InterviewComponents,
    NewsItem,
    ImgCarousel
  },
  data() {
    return {
      // 商务预定标签页数据
      businessTagData: [
        {
          name: '代办签证',
          img: require('../assets/home/business1.png')
        },
        {
          name: '代办地址证明',
          img: require('../assets/home/business2.png')
        },
        {
          name: '代订机票、酒店',
          img: require('../assets/home/business3.png')
        },
        {
          name: '代办驾照',
          img: require('../assets/home/business4.png')
        }
      ],
      // 境外开户标签页数据
      bankData: [
        {
          name: '香港银行开户',
          subname: '香港账户方便日常运作，隐私安全受保护，外汇进出自由，可合理避税，国内ATM方便提现。',
          img: require('../assets/home/bank1.png')
        },
        {
          name: '新加坡银行开户',
          subname: '新加坡是世界第四大金融中心，也是国际转口贸易中心政治环境稳定。 ',
          img: require('../assets/home/bank2.png')
        }
      ],
      // 标签页数据
      activeTag: 1,
      tags: [
        {
          id: 1,
          name: '海外移民',
          images: [
            [
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
              }
            ],
            [
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
              }
            ],
            [
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
          ]
        }, {
          id: 2,
          name: '境外开户',
        }, {
          id: 3,
          name: '外国学历'
        }, {
          id: 4,
          name: '房产置业'
        }, {
          id: 5,
          name: '商户预定'
        }
      ],
      cards: [
        {
          name: '马耳他移民',
          subname: '四位一体国家 含金量高',
          img: require('../assets/1213.jpg')
        },
        {
          name: '土耳其移民',
          subname: '准欧盟国家',
          img: require('../assets/1213.jpg')
        },
        {
          name: '圣基茨移民',
          subname: '岛国移民 一步到位',
          img: require('../assets/1213.jpg')
        },
        {
          name: '香港移民',
          subname: '定居创业 优才进修',
          img: require('../assets/1213.jpg')
        },
        {
          name: '马耳他移民',
          subname: '四位一体国家 含金量高',
          img: require('../assets/1213.jpg')
        }
      ],
      // 模块
      modules: [
        {
          name: '移民方案定制系统',
          icon: require('../assets/home/m1.png'),
          desc: '甄选全球1000个优质项目一键匹配定制移民方案'
        },
        {
          name: '互联网流程管理',
          icon: require('../assets/home/m2.png'),
          desc: '行业首创 移民顾问7 * 24H在线跟进 移民进度不拖延'
        },
        {
          name: '海外交流社区',
          icon: require('../assets/home/m3.png'),
          desc: '在线海外社交圈和移民同路人交流'
        },
        {
          name: '实时海外房源',
          icon: require('../assets/home/m4.png'),
          desc: '甄选全球1000个优质项目一键匹配定制移民方案'
        }
      ],
      // 团队
      teams: [
        {
          img: require('../assets/home/cici.jpg'),
          name: 'Cici 李',
          position: '事务部总经理'
        },
        {
          img: require('../assets/home/vivian.jpg'),
          name: 'Vivian 黄',
          position: '海外房产置业顾问'
        },
        {
          img: require('../assets/home/ray.jpg'),
          name: 'Ray 雷',
          position: '专业移民顾问'
        }
      ],
      // 新闻
      news: [
        {
          img: require('../assets/news/news1.png'),
          name: '移民和拥有中国护照冲突吗？',
          profile: '不冲突。移民是指拥有某个国家的永久居留权。护照是指加入了某个国家的国籍。移民就像居住在北京但不一定有北京户口。移民美国，仅有永久居留权...'
        }
      ]
    }
  },
  computed: {
    productImages() {
      return this.tags[this.activeTag-1].images;
    }
  },
  methods: {
    changeTag(item) {
      /**
       * 外国学历，房产置业点击后直接进入相应页面
       * */ 
      if (item.id === 3) {
        this.$router.push({name: 'Education'});
      } else if (item.id === 4) {
        this.$router.push({name: 'House'});
      } else {
        this.activeTag = item.id;
      }
    },
    toNewsPage() {
      this.$router.push({name: 'News'});
    },
    toBankPage() {
      this.$router.push({name: 'Account'});
    },
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
.home {
  width: 100%;
  margin: 0 auto;
  background: #f8f7f2;
  .banner {
    width: 100%;
    height: 706px;
    position: relative;
    background: url('../assets/home/banner.png') no-repeat;
    background-size: cover;
    margin: 0 auto;
  }
  .product {
    width: 1366px;
    height: 773px;
    margin: 0 auto;
    overflow: hidden;
    .title {
      font-family: 'NotoSansSC-Bold';
      font-size: 36px;
      color: #3A3A3C;
      letter-spacing: 0;
      text-align: center;
      height: 54px;
      line-height: 54px;
      padding-top: 49px;
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
      margin-bottom: 54px;
      .item {
        display: inline-block;
        margin-right: 18px;
        height: 33px;
        line-height: 33px;
        cursor: pointer;
        &.active {
          color: #C9B884 ;
          border-bottom: 2px solid #C9B884 ;
        }
      }
    }
    .card-box {
      width: 99999999999px;
      height: 397px;
      margin-top: 49px;
      overflow: hidden;
      margin-left: -51px;
      .card {
        width: 355px;
        height: 397px;
        float: left;
        margin-right: 16px;
        background-size: cover;
        position: relative;
        box-sizing: border-box;
        background-repeat: no-repeat;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(180deg, #000000 0%, rgba(87,87,87,0.00) 89%);
          padding: 12px 26px;
          .name {
            font-family: 'NotoSansSC-Bold';
            font-size: 36px;
            color: #EEF4F3;
            line-height: 54px;
          }
          .subname {
            font-family: 'NotoSansSC-Regular';
            font-size: 18px;
            color: #73D9C9;
            line-height: 27px;
          }
          .detail-btn {
            width: 108px;
            height: 45px;
            background: #73D9C9;
            color: #3A3A3C;
            font-size: 18px;
            font-family: NotoSansSC-Medium;
            position: absolute;
            left: 26px;
            bottom: 24px;
            &.el-button:active{
              border-color: #73D9C9;
            }
          }
        }
        &.active {
          border: 10px solid #73D9C9;
          .mengban {
            padding: 2px 26px;
          }
        }
      }
    }
    .box2 {
      width: 100%;
      .item {
        position: relative;
        width: 100%;
        height: 397px;
        background-size: cover;
        background-repeat: no-repeat;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: linear-gradient(180deg, rgba(173, 151, 115, 0.8) 36%, rgba(146, 115, 115, 0.7) 100%);
          padding: 12px 26px;
          .name {
            font-family: 'NotoSansSC-Bold';
            font-size: 36px;
            color: #F8F7F2;
            line-height: 54px;
          }
          .subname {
            width: 292px;
            font-family: 'NotoSansSC-Regular';
            font-size: 18px;
            color: #F8F7F2;
            line-height: 27px;
          }
          .btn {
            width: 108px;
            height: 45px;
            background: #C9B884;
            border: none;
            font-family: 'NotoSansSC-Medium';
            font-size: 18px;
            color: #3A3A3C;
            position: absolute;
            bottom: 24px;
            left: 26px;
          }
        }
      }
    }
    .box3 {
      width: 100%;
      .box3-item {
        width: 100%;
        height: 397px;
        position: relative;
        background-repeat: no-repeat;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          right: 2px;
          bottom: 0;
          background-image: linear-gradient(180deg, #3A3A3C 4%, rgba(238,244,243,0.00) 69%);
          padding: 13px 20px;
          .box3-item-title {
            font-family: 'NotoSansSC-Bold';
            font-size: 36px;
            color: #F8F7F2;
            line-height: 54px;
          }
          .btn {
            width: 204px;
            height: 45px;
            background: #C9B884;
            border: none;
            font-family: 'NotoSansSC-Medium';
            font-size: 18px;
            color: #3A3A3C;
            position: absolute;
            bottom: 24px;
            left: 20px;
          }
        }
      }
    }
  }
  .company {
    height: 500px;
    background: url('../assets/home/about.png') no-repeat;
    background-size: cover;
    position: relative;
    .mengban {
      background: rgba(58,58,60, 0.54);;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
    .content {
      width: 886px;
      position: absolute;
      top: 56px;
      left: 50%;
      margin-left: -443px;
      .logo {
        width: 452px;
        height: 214px;
        background: url('../assets/big-logo.png') no-repeat;
        background-size: cover;
        margin: 0 auto 30px;
      }
      .desc {
        font-family: 'NotoSansSC-Regular';
        font-size: 22px;
        line-height: 33px;
        color: #F8F7F2;
        text-align: left;
        letter-spacing: 0;
      }
    }
  }
  .bg-box {
    width: 100%;
    background: #C9B884;
    .row-box {
      width: 1110px;
      margin: 0 auto;
      .item {
        text-align: center;
        padding-top: 31px;
        .title {
          font-family: 'NotoSansSC-Bold';
          font-size: 24px;
          color: #3A3A3C;
          margin-bottom: 22px;
          line-height: 36px;
        }
        .icon {
          margin: 0 auto 22px;
        }
        .desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 18px;
          color: #3A3A3C;
          line-height: 33px;
          margin-bottom: 31px;
        }
      }
    }
  }
  .team-bg {
    width: 100%;
    height: 674px;
    background: #eae6e1;
    .team {
      width: 1110px;
      margin: 0 auto;
      .title {
        font-family: 'NotoSansSC-Bold';
        font-size: 36px;
        color: #3A3A3C;
        letter-spacing: 0;
        text-align: center;
        height: 54px;
        line-height: 54px;
        padding-top: 49px;
        margin-bottom: 55px;
        .line {
          width: 80px;
          height: 6px;
          background: #C9B884;
          margin: 0 auto;
        }
      }
      .team-item {
        width: 355px;
        height: 410px;
        position: relative;
        background-repeat: no-repeat;
        background-size: cover;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          right: 2px;
          bottom: 0;
          transform: scaleY(-1);
          background-image: linear-gradient(180deg, #3A3A3C 0%, rgba(87,87,87,0.00) 89%);
          background-size: cover;
        }
        .name {
          transform: scaleY(-1);
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #EAE6E1;
          line-height: 54px;
          margin-left: 26px;
        }
        .position {
          transform: scaleY(-1);
          font-family: 'NotoSansSC-Regular';
          font-size: 18px;
          color: #EAE6E1;
          line-height: 27px;
          margin-left: 26px;
          padding-bottom: 12px;
        }
      }
    }
  }
  .news-bg {
    width: 100%;
    background: #f8f7f2;
    .news {
      width: 1110px;
      margin: 0 auto;
      .title {
        font-family: 'NotoSansSC-Bold';
        font-size: 36px;
        color: #3A3A3C;
        letter-spacing: 0;
        text-align: center;
        height: 54px;
        line-height: 54px;
        padding-top: 49px;
        margin-bottom: 94px;
        .line {
          width: 80px;
          height: 6px;
          background: #C9B884;
          margin: 0 auto;
        }
      }
      .box {
        overflow: hidden;
        .btn-box {
          text-align: center;
          .all-btn {
            width: 204px;
            height: 45px;
            background: #3A3A3C;
            color: #F8F7F2;
            margin-bottom: 47px;
            border: none;
            &:hover {
              background: #57575c;
            }
          }
        }
      }
    }
  }
}
@media only screen and (max-width: 600px) {
  .home {
    .product {
      .tag_page {
        font-size: 26px;
      }
    }
  }
}
</style>
