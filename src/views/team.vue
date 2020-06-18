<template>
  <div class="bg">
    <!-- banner -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="teams">
      <div class="team" v-for="(item, index) of teams" :key="index">
        <img :src="item.img" class="img" alt="">
        <div class="content">
          <div class="name">
            {{item.name}}
            <span class="position">{{item.position}}</span>
          </div>
          <div class="desc">{{item.desc}}</div>
          <div class="btn-box">
            <el-button class="btn" round @click="toPage">线上预约面谈</el-button>
          </div>
        </div>
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
        name: '专业团队',
        url: require('../assets/team/banner.png')
      },
      teams: [
        {
          name: 'Cici 李',
          position: '事务部总经理',
          desc: '熟知各国移民政策，陪同投资人到欧洲进行实地考察，擅长传统国家移民，协助百组家庭成功获批。',
          img: require('../assets/team/cici.jpg')
        },
        {
          name: 'Vivian 黄',
          position: '海外房产置业顾问',
          desc: '熟悉境外房地产及政策，擅长根据客户自身需求与实际情况制定移民方案，帮数十位客户实现移民。',
          img: require('../assets/team/vivian.jpg')
        },
        {
          name: 'Ray 雷',
          position: '专业移民顾问',
          desc: '具有丰富的移民从业经验，熟悉北美岛园，香港等主要移民民国家和地区的移民政策，获得客户认可。',
          img: require('../assets/team/ray.jpg')
        }
      ]
    }
  },
  methods:{
    toPage() {
      this.$router.push({name: 'Interview'});
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  .teams {
    width: 1115px;
    margin: 65px auto 113px;
    .team {
      overflow: hidden;
      margin-bottom: 28px;
      .img {
        width: 317px;
        height: 317px;
        float: left;
      }
      .content {
        width: 773px;
        height: 317px;
        background: #EAE6E1;
        float: right;
        padding: 49px 58px;
        box-sizing: border-box;
        position: relative;
        .name {
          font-family: 'NotoSansSC-Bold';
          font-size: 36px;
          color: #3A3A3C;
          line-height: 54px;
          margin-bottom: 33px;
          .position {
            margin-left: 8px;
            font-family: 'NotoSansSC-Regular';
            font-size: 22px;
            color: #000000;
            line-height: 54px;
          }
        }
        .desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #000000;
          line-height: 37px;
        }
        .btn-box {
          .btn {
            position: absolute;
            bottom: 46px;
            right: 40px;
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
}
</style>
