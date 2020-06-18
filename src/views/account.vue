<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="account">
      <!-- 香港银行开户 -->
      <div class="bank" v-for="(item, index) of bankData" :key="index">
        <div class="banner" :style="{backgroundImage: 'url('+ item.banner.img +')'}">
          <div class="mengban">
            <div class="content">
              <div class="title">{{item.banner.title}}</div>
              <div class="line"></div>
              <div class="sub">{{item.banner.sub1}}</div>
              <div class="sub">{{item.banner.sub2}}</div>
            </div>
          </div>
        </div>
        <div class="list-box">
          <el-row :gutter="25">
            <el-col :span="8" v-for="(bItem, bIndex) of item.bankList" :key="bIndex">
              <div class="bank-item">
                <div class="title">{{bItem.title}}</div>
                <div class="subTitle">{{bItem.subTitle}}</div>
                <div class="desc">{{bItem.desc}}</div>
                <img :src="bItem.logo" class="logo" :class="{lianchang: bIndex === 4}" alt="">
                <el-button class="detail-btn" round @click="showDialog">详情</el-button>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 开户所需文件弹窗 -->
    <AccountFileDialog :data="dialogData" />
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import AccountFileDialog from '@/components/AccountFileDialog';

export default {
  components: {
    CustomHeaderAndName,
    AccountFileDialog
  },
  data() {
    return {
      bannerData: {
        name: '境外开户',
        url: require('../assets/account/banner.png')
      },
      bankData: [
        {
          banner: {
            img: require('../assets/account/hk-banner.png'),
            title: '香港银行开户',
            sub1: '香港账户方便日常运作，隐私安全受保护，外汇进出自由，',
            sub2: '可合理避税，国内ATM方便提现。'
          },
          bankList: [
            {
              title: '恒生银行',
              subTitle: 'Hang Seng Bank',
              desc: '以香港及大陆业务为重点的银行',
              logo: require('../assets/account/1.png')
            },
            {
              title: '汇丰银行',
              subTitle: 'HSBC',
              desc: '香港三大发钞银行之一',
              logo: require('../assets/account/2.png')
            },
            {
              title: '渣打银行',
              subTitle: 'Standard Chartered',
              desc: '为亚洲、非洲、中东提供金融服务',
              logo: require('../assets/account/3.png')
            },
            {
              title: '花旗银行',
              subTitle: 'Citi Bank',
              desc: '在全球近150个国家设有分支机构',
              logo: require('../assets/account/4.png')
            },
            {
              title: '中国银行',
              subTitle: 'Bank of China',
              desc: '香港三大发钞银行之一',
              logo: require('../assets/account/5.png')
            },
            {
              title: '招商银行',
              subTitle: 'China Merhants Bank',
              desc: '中国内地规模第六大的银行',
              logo: require('../assets/account/6.png')
            }
          ]
        },
        {
          banner: {
            img: require('../assets/account/new-beatles-banner.png'),
            title: '新加坡银行开户',
            sub1: '新加坡是世界第四大金融中心，也是国际转口贸易中心政治环境稳定。 ',
            sub2: ''
          },
          bankList: [
            {
              title: '星展银行',
              subTitle: 'DBS Bank',
              desc: '新加坡最大的商业银行，业务遍及东南亚，东北亚和南亚市场。',
              logo: require('../assets/account/7.png')
            },
            {
              title: '华侨银行',
              subTitle: 'OCBC Bank',
              desc: '新加坡第二大银行',
              logo: require('../assets/account/8.png')
            },
            {
              title: '大华银行 ',
              subTitle: 'United Overseas Bank',
              desc: '东南亞第三大银行',
              logo: require('../assets/account/9.png')
            },
            {
              title: '花旗银行',
              subTitle: 'Citi Bank',
              desc: '在全球近150个国家设有分支机构',
              logo: require('../assets/account/10.png')
            },
            {
              title: '联昌国际银行',
              subTitle: 'CIMB Bank',
              desc: '馬來西亞第二大銀行',
              logo: require('../assets/account/11.png')
            }
          ]
        }
      ],
      dialogData: {
        bSwitch: false
      }
    }
  },
  methods: {
    showDialog() {
      this.dialogData.bSwitch = true;
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  background: #f8f7f2;
  .account {
    width: 1366px;
    margin: 0 auto;
    .bank {
      width: 1113px;
      margin: 63px auto 0;
      padding-bottom: 63px;
      .banner {
        width: 100%;
        height: 218px;
        background-size: cover;
        position: relative;
        margin-bottom: 48px;
        .mengban {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          background-image: linear-gradient(180deg, rgba(173,151,115,0.80) 36%, rgba(146,115,115,0.70) 100%);
          .content {
            width: 1000px;
            height: 116px;
            margin: 49px auto 0;
            .title {
              font-family: 'NotoSansSC-Bold';
              font-size: 36px;
              color: #F8F7F2;
              text-align: center;
              line-break: 54px;
            }
            .line {
              width: 80px;
              height: 6px;
              margin: 8px auto 10px;
              background: #C9B884;
            }
            .sub {
              font-family: NotoSansSC-Medium;
              font-size: 20px;
              color: #F8F7F2;
              text-align: center;
              line-height: 29px;
            }
          }
        }
      }
      .list-box {
        .bank-item {
          width: 100%;
          height: 263px;
          background-image: linear-gradient(180deg, #F8F7F2 56%, #EAE6E1 100%);
          margin-bottom: 31px;
          position: relative;
          padding: 14px;
          box-sizing: border-box;
          .detail-btn {
            position: absolute;
            left: 18px;
            bottom: 27px;
            width: 108px;
            height: 45px;
            background: #C9B884;
            font-family: 'NotoSansSC-Medium';
            font-size: 18px;
            color: #3A3A3C;
            border: none;
            &:hover {
              background: #e6e0ca;
            }
          }
          .logo {
            position: absolute;
            top: 25px;
            right: 18px;
            object-fit: cover;
          }
          .lianchang {
            right: 7px;
          }
          .title {
            font-family: 'NotoSansSC-Bold';
            font-size: 36px;
            color: #3A3A3C;
            line-height: 54px;
          }
          .subTitle {
            font-family: 'NotoSansSC-Regular';
            font-size: 18px;
            color: #3A3A3C;
            line-height: 27px;
            margin-bottom: 5px;
          }
          .desc {
            font-family: 'NotoSansSC-Regular';
            font-size: 18px;
            color: #3A3A3C;
            line-height: 27px;
            width: 252px;
          }
        }
      }
    }
  }
}
</style>