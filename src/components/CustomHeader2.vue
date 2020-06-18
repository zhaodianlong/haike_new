<template>
  <div class="box">
    <div class="logo-bg">
      <div class="header">
        <img src="../assets/logo2.png" alt="" class="logo" @click="toHome">
      </div>
    </div>
    <div class="nav-bg">
      <div class="nav-box">
        <div class="nav"
          v-for="(item, index) of navList"
          :key="index"
          :class="{active: $route.name === item.url}"
          @click="toPage(item)"
        >
          {{item.name}}
        </div>
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
      ]
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    toPage(item) {
      this.$router.push({name: item.url});
    },
    toHome() {
      this.$router.push({name: 'Home'});
    }
  }
}
</script>

<style lang="scss" scoped>
.logo-bg {
  width: 100%;
  background: #F8F7F2;
}
.nav-bg {
  width: 100%;
  height: 67px;
  background: #C9B884;
  .nav-box {
    width: 1366px;
    margin: 0 auto 21px;
    text-align: center;
    background: #C9B884;
    .nav {
      display: inline-block;
      height: 67px;
      line-height: 67px;
      margin-right: 18px;
      font-family: NotoSansSC-Medium;
      font-size: 22px;
      color: #3A3A3C;
      cursor: pointer;
      &:hover {
        color:#fff;
      }
      &.active {
        color: #fff;
      }
    }
  }
}
.header {
  width: 1366px;
  margin: 0 auto;
  text-align: center;
  background: #F8F7F2;
  padding-bottom: 16px;
  .logo {
    width: 177px;
    height: 84px;
    display: block;
    margin: 0 auto;
  }
}
@media only screen and (max-width: 600px) {
  .header {
    .nav {
      font-size: 26px;
    }
  }
}
</style>