<template>
  <div class="box">
    <div class="footer">
      <!-- 公司信息 -->
      <div class="content">
        <div class="logo"></div>
        <div class="icon" v-for="(item, index) of concatList" :key="index">
          <!-- 弹窗 -->
          <el-popover
            placement="left-end"
            width="200"
            trigger="hover"
            v-if="index===0">
            <img src="../assets/home/ercode.png" alt="">
            <div class="sub-item" slot="reference" :style="{backgroundImage: 'url('+item.img+')'}"></div>
          </el-popover>
          <!-- 链接 -->
          <a :href="item.link" class="link" target="_blank" v-else>
            <div class="sub-item" :style="{backgroundImage: 'url('+item.img+')'}" ></div>
          </a>
        </div>
        <div class="message">
          <div class="line"></div>
          <div class="item-msg">电话: +852 6219 9610</div>
          <div class="item-msg">邮箱: cherry@haike.com</div>
        </div>
      </div>
      <!-- 导航信息 -->
      <div class="navList">
        <div class="nav" v-for="(item, index) of navList" :key="index" @click="toPage(item)">{{item.name}}</div>
      </div>
      <!-- 版权信息 -->
      <div class="copyright">
        <div>©Copyright 2020 香港海客商务咨询有限公司版权所有，对违反版权者保留一切追索权利。</div>
        <div>私隐政策 | 版权及免责声明</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: '首页',
          url: 'Home'
        },
        {
          name: '海外移民',
          url: 'Immigration'
        },
        {
          name: '境外开户',
          url: 'Account'
        },
        {
          name: '外国学历',
          url: 'Education'
        },
        {
          name: '房产置业',
          url: 'House'
        },
        {
          name: '商务预定',
          url: 'Business'
        },
        {
          name: '关于我们',
          url: 'AboutUs'
        },
        {
          name: '专业团队',
          url: 'Team'
        },
        {
          name: '新闻动态',
          url: 'News'
        },
        {
          name: '联系我们',
          url: 'Interview'
        }
      ],
      concatList: [
        {
          img: require('../assets/footer/1.png'),
          link: ''
        },
        {
          img: require('../assets/footer/2.png'),
          link: 'https://api.whatsapp.com/send?phone=85269921971'
        },
        {
          img: require('../assets/footer/3.png'),
          link: 'https://www.facebook.com/profile.php?id=100051059316277'
        },
        {
          img: require('../assets/footer/4.png'),
          link: 'https://twitter.com/universe_ltd'
        }
      ]
    }
  },
  methods: {
    toPage(item) {
      this.$router.push({name: item.url});
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  background: #3A3A3C;
  .footer {
    width: 1366px;
    height: 287px;
    margin: 0 auto;
    padding-top: 40px;
    box-sizing: border-box;
    .content {
      height: 90px;
      margin-bottom: 28px;
      .logo {
        width: 203.4px;
        height: 81.8px;
        background: url('../assets/footer/logo.png') no-repeat;
        background-size: cover;
        margin-left: 125px;
        margin-right: 57.6px;
        display: inline-block;
      }
      .icon {
        width: 50px;
        height: 50px;
        margin-right: 60px;
        display: inline-block;
        &.last {
          margin-right: 112px;
        }
        .sub-item {
          width: 51px;
          height: 51px;
          background-size: cover;
          background-repeat: no-repeat;
          cursor: pointer;
          .link {
            display: block;
            width: 50px;
            height: 50px;
            border-radius: 100%;
          }
        }
      }
      .message {
        display: inline-block;
        height: 66px;
        position: relative;
        .item-msg {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #C9B884;
          line-height: 33px;
        }
        .line {
          position: absolute;
          left: -26px;
          top: 2px;
          width: 2px;
          height: 66px;
          background: #3A3A3C;
        }
      }
    }
    .navList {
      font-family: NotoSansSC-Medium;
      font-size: 22px;
      color: #C9B884;
      text-align: center;
      margin-bottom: 18px;
      .nav {
        display: inline-block;
        margin-right: 18px;
        height: 33px;
        line-height: 33px;
        cursor: pointer;
      }
    }
    .copyright {
      font-family: 'NotoSansSC-Regular';
      font-size: 18px;
      color: #F8F7F2;
      letter-spacing: 0;
      text-align: center;
      line-height: 33px;
    }
  }
}
</style>