<template>
  <div class="bg">
    <CustomHeaderAndName :data="bannerData" />
    <div class="desc-box">
      <div class="education">
        <div class="desc">提供了一系列的海外留学课程选择，科目种类繁多，选科弹性自由，同时提供的大学衔接课程让学生免受参加考试而产生的压力，因此一直深受欢迎。当然，不同海外国家的留学费用、注意事项都不一样，如何在海外留学前充分准备？</div>
        <div class="left dot">❝</div>
        <div class="right dot">❞</div>
      </div>
    </div>
    <div class="content-box">
      <div class="content">
        <div class="title">
          升学国家概况
          <div class="line"></div>
        </div>
        <div class="tag_page">
          <div class="item" v-for="item of tags" :key="item.id" :class="{'active': activeTag === item.id}" @click="changeTag(item)">{{item.name}}</div>
        </div>
        <div v-for="(item, index) of contents[activeTag-1]" :key="index">
          <div class="content_title">{{item.title}}</div>
          <div class="content_desc">{{item.desc}}</div>
          <div class="content_list_item" v-for="(sItem, sIndex) of item.list" :key="sIndex">
            <i class="el-icon-caret-right"></i>{{sItem}}
          </div>
        </div>
      </div>
    </div>
    <!-- 服务流程 -->
    <EducationFlow />
  </div>
</template>

<script>
import CustomHeaderAndName from '@/components/CustomHeaderAndName';
import EducationFlow from '@/components/EducationFlow';

export default {
  components: {
    CustomHeaderAndName,
    EducationFlow
  },
  data() {
    return {
      bannerData: {
        name: '外国学历',
        url: require('../assets/education/banner.png')
      },
      activeTag: 1,
      tags: [
        {
          id: 1,
          name: '英国'
        },
        {
          id: 2,
          name: '美国'
        }
      ],
      contents: [
        [
          {
            title: '入學要求',
            desc: '英国被认为是最佳留学目的地之一，与美国相媲美，对于那些希望从世界顶级学府接受的教育的人来说是梦想之地。 所有英国大学的入学申请，均由「英国大学及院校招生事务处」（简称UCAS）统一处理，类似香港的JUPAS，透过UCAS申请，学生须要符合以下要求：',
            list: [
              'UCAS提供统一机制，将学生的 考试成续换算成UCAS分数（UC​​AS Tariff Points）。每所大学都会制定不同学科对UCAS分数的最低入学要求。 ',
              '到英国升学，海外学生（包括香港学生）的英语水平须达IELTS 6.0至6.5或以上，或其他国际认可的同等英语水平，但一些对英文水平有较高要求的专科学科，如法律，医科等，或会要求IELTS 7.0或以上。 ',
              '部分大学课程会对学生应考的学科有特别要求，例如工程学科要求数学科和物理科，医科要求生物科和化学科等。但有部分大学课程没有这种限制，如会计，管理学，社会科学等。 ',
              '有部分大学学科对英国会考GCSE的指定科目的成绩有特别要求。 ',
              '少数大学课程要求申请者另考入学试。 ',
              '有个别大学课程会要求面见申请者。 如有要求，学生宜早点准备一份自己的简历。 ',
              '校方有可能要求其他文件，如健康证明，财务证明，无刑事纪录证明，等等。'
            ]
          }
        ],
        [
          {
            title: '学院类型',
            desc: '从纽约的摩天大楼到加利福尼亚的海滩，美国从东到西有很多东西可以看。即使您尚未到访过美国，您一定会意识到其在商业、娱乐、政治和人权方面的全球影响力 - 美国处于这一切的最尖端。',
            list: [
              '小区学院(Community Colleges): 这些机构也被称为初级学院，提供为期两年的课程，毕业后将获得副学士学位。小区学院的学费通常低于私立学校的学费。',
              '学院(Colleges): 美国的大学允许学生在4年内完成学业后获得学士学位。与其他院校相比，学生和学习领域的人数都较多。',
              '文理学院 (Liberal Arts School): 这类学院专注于自由艺术研究，以住宿而闻名，入学人数和班级较少，因此他们的师生比例较高。',
              '大学: 学生中最受欢迎的是这些研究型教育机构，提供本科和研究生课程。一些大学提供针对特定学习领域的专业学校，如新闻学，医学，商学院。',
            ]
          },
          {
            title: '入學要求',
            desc: '为一名希望出国留学的学生，您必须记住，虽然排名确实会影响您毕业后的就业机会，但首先必须根据您的喜好选择一所大学。无论是课程的可用性，地点，学费，学生生活，您决定入读大学前都需要考虑。美国大学有一套既定收生标准，一般会考虑学生的学校成绩、英文水平、课外活动和专长、标准试 ACT/SAT及SAT 2 成绩、申请论文及推荐信等。其实，也有不少优质的美国大学并不要求 ACT / SAT成绩，可联络本公司了解更多。美国大学一般会在每年12月至翌年3月间公布取录结果。',
            list: []
          }
        ]
      ]
    }
  },
  methods: {
    changeTag(item) {
      this.activeTag = item.id;
    }
  }
}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  .desc-box {
    width: 100%;
    background: #EAE6E1;
    .education {
      width: 1366px;
      margin: 0 auto;
      position: relative;
      .desc {
        width: 887px;
        height: 279px;
        box-sizing: border-box;
        margin: 0 auto;
        font-family: 'NotoSansSC-Regular';
        font-size: 24px;
        color: #3A3A3C;
        line-height: 36px;
        padding: 88px 0 79px;
      }
      .dot {
        font-family: ZapfDingbatsITC;
        font-size: 72px;
        color: #3A3A3C;
      }
      .left {
        position: absolute;
        top: 54px;
        left: 125px;
      }
      .right {
        position: absolute;
        top: 163px;
        right: 127px;
      }
    }
  }
  .content-box {
    width: 100%;
    background: #f8f7f2;
    .content {
      width: 887px;
      margin: 0 auto;
      padding: 64px 0 80px;
      box-sizing: border-box;
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
      .content_title {
        font-family: 'NotoSansSC-Bold';
        font-size: 36px;
        color: #3A3A3C;
        line-height: 54px;
        margin-bottom: 33px;
      }
      .content_desc,
      .content_list_item {
        font-family: 'NotoSansSC-Regular';
        font-size: 22px;
        color: #000000;
        line-height: 37px;
        margin-bottom: 29px;
      }
    }
  }
}
</style>