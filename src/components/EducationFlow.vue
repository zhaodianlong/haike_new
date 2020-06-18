<template>
  <div class="bg_flow">
    <div class="box_flow">
      <div class="title">
        服务流程
        <div class="line"></div>
      </div>
      <div class="img">
        <div class="item pos1">
          <div class="flow_title">初步咨询</div>
          <div class="desc">公司及服务介绍</div>
          <div class="desc">了解客户需要</div>
        </div>
        <div class="item pos2">
          <div class="flow_title">确认服务</div>
          <div class="desc">签定合约后</div>
          <div class="desc">进行专业评估</div>
        </div>
        <div class="item pos3">
          <div class="flow_title">入学申请</div>
          <div class="desc">协助处理申请</div>
          <div class="desc">安排面试及笔试</div>
        </div>
        <div class="item pos4">
          <div class="flow_title">录取后跟进服务</div>
          <div class="desc">处理客户与学校的文件往来</div>
          <div class="desc">（包括：录取通知，住宿安排等）</div>
        </div>
      </div>
      <div class="btn-box">
        <el-button round class="btn" @click="toPage">查询预约</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toPage() {
      this.$router.push({name: 'Interview'});
    }
  }
}
</script>

<style lang="scss" scoped>
.bg_flow {
  width: 100%;
  background: #EAE6E1;
  .box_flow {
    width: 950px;
    margin: 0 auto;
    .title {
      font-family: 'NotoSansSC-Bold';
      font-size: 36px;
      color: #3A3A3C;
      letter-spacing: 0;
      text-align: center;
      height: 54px;
      line-height: 54px;
      padding-top: 43px;
      margin-bottom: 114px;
      .line {
        width: 80px;
        height: 6px;
        background: #C9B884;
        margin: 0 auto;
      }
    }
    .img {
      width: 950px;
      height: 65px;
      background: url('../assets/education/flow_icon.png');
      background-size: cover;
      position: relative;
      .item {
        width: 330px;
        text-align: center;
        .flow_title {
          font-family: 'NotoSansSC-Bold';
          font-size: 24px;
          color: #3A3A3C;
          text-align: center;
          line-height: 36px;
          margin-bottom: 104px;
        }
        .desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #3A3A3C;
          text-align: center;
          line-height: 33px;
        }
        &.pos1 {
          position: absolute;
          top: -58px;
          left: -120px;
        }
        &.pos2 {
          position: absolute;
          top: -58px;
          left: 168px;
        }
        &.pos3 {
          position: absolute;
          top: -58px;
          left: 458px;
        }
        &.pos4 {
          position: absolute;
          top: -58px;
          right: -127px;
        }
      }
    }
    .btn-box {
      text-align: center;
      margin-top: 136px;
      .btn {
        width: 204px;
        height: 45px;
        background: #3A3A3C;
        color: #F8F7F2;
        margin-bottom: 64px;
        border: none;
      }
    }
  }
}
</style>