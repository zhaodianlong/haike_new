<template>
  <div class="bg">
    <!-- banner 部分 -->
    <CustomHeaderAndName :data="bannerData" />
    <div class="about">
      <!-- 公司简介 -->
      <div class="company">
        <div class="title">公司简介</div>
        <div class="desc">香港海客商务咨询有限公司成立于2020年3月，致力提供一站式海外移民咨询，办理海内外升学及签证办理等有关事宜。 与多家海内外资源机构合作，拥有数十名移民顾问及专家组成的团队，包括资深顾问，财务分析及海外置业专家等，竭诚协助有意移民人士于海投资置业，升学及移民，与您携手 创建美好未来。  </div>
        <!-- 模块 -->
        <div class="bg-box">
          <div class="row-box">
            <el-row :gutter="43">
              <el-col :span="6" v-for="item of modules" :key="item.name">
                <div class="item">
                  <div class="title">{{item.name}}</div>
                  <div class="icon">
                    <img :src="item.icon" alt="">
                  </div>
                  <div class="desc" v-html="item.desc"></div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <!-- 服务宗旨 -->
      <div class="service">
        <div class="title">服务宗旨</div>
        <div class="desc">由咨询到成功申请，我们团队用心聆听你的需要，综合及分析你的个案，提供专业意见，加强沟通，为你度身订造最好的移民方案。</div>
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
        name: '关于我们',
        url: require('../assets/about/banner.png')
      },
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
          desc: '在线海外社交圈<br>和移民同路人交流'
        },
        {
          name: '实时海外房源',
          icon: require('../assets/home/m4.png'),
          desc: '甄选全球1000个优质项目一键匹配定制移民方案'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  .about {
    width: 1113px;
    margin: 64px auto 76px;
    .company {
      margin-bottom: 63px;
      .title {
        font-family: 'NotoSansSC-Bold';
        font-size: 36px;
        color: #3A3A3C;
        line-height: 54px;
        margin-bottom: 33px;
      }
      .desc {
        font-family: 'NotoSansSC-Regular';
        font-size: 22px;
        color: #000000;
        line-height: 37px;
        margin-bottom: 42px;
      }
      .row-box {
        width: 1113px;
        margin: 0 auto;
        background: #C9B884;
        padding: 0 24px;
        box-sizing: border-box;
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
            font-size: 19px;
            color: #3A3A3C;
            line-height: 33px;
            margin-bottom: 31px;
          }
        }
      }
    }
    .service {
      .title {
        font-family: 'NotoSansSC-Bold';
        font-size: 36px;
        color: #3A3A3C;
        line-height: 54px;
        margin-bottom: 33px;
      }
      .desc {
        font-family: 'NotoSansSC-Regular';
        font-size: 22px;
        color: #000000;
        line-height: 37px;
      }
    }
  }
}
</style>