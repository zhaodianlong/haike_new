<template>
  <div class="bg2">
    <div class="applyflow">
      <div class="title">
        申请程序
        <div class="line"></div>
      </div>
      <div class="img">
        <div class="box pos1">
          <div class="name">确认服务</div>
          <div class="desc">匹配管家</div>
          <div class="desc">全程指导签订合同</div>
        </div>
        <div class="box pos2">
          <div class="name">移民申请</div>
          <div class="desc">协助准备申请材料</div>
          <div class="desc">安排移民材料翻译、公证</div>
        </div>
        <div class="box pos3">
          <div class="name">提交申请</div>
          <div class="desc">律师审核全套移民材料</div>
          <div class="desc">帮助提交移民局</div>
        </div>
        <div class="box pos4">
          <div class="name">完成服务</div>
          <div class="desc">领取护照和公民证明（如有）</div>
        </div>
        <div class="box pos5">
          <div class="name">投资移民</div>
          <div class="desc">协助进行投资购房／捐款</div>
        </div>
        <div class="box pos6">
          <div class="name">获得政府原则性批复</div>
          <div class="desc">全程帮助与移民局、沟通</div>
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
.bg2 {
  width: 100%;
  height: 720px;
  background: #eae6e1;
  .applyflow {
    width: 887px;
    height: 720px;
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
      margin-bottom: 109px;
      .line {
        width: 80px;
        height: 6px;
        background: #C9B884;
        margin: 0 auto;
      }
    }
    .img {
      width: 657px;
      height: 321px;
      background: url('../assets/immigration/apply-flow.png');
      background-size: cover;
      margin: 0 auto;
      position: relative;
      .box {
        &.pos1 {
          position: absolute;
          top: -61px;
          left: -104px;
        }
        &.pos2 {
          position: absolute;
          top: -61px;
          left: 182px;
        }
        &.pos3 {
          position: absolute;
          top: -61px;
          right: -104px;
        }
        &.pos4 {
          position: absolute;
          bottom: -44px;
          left: -104px;
        }
        &.pos5 {
          position: absolute;
          bottom: -44px;
          left: 182px;
        }
        &.pos6 {
          position: absolute;
          bottom: -44px;
          right: -104px;
        }
        .name {
          font-family: 'NotoSansSC-Bold';
          font-size: 24px;
          color: #3A3A3C;
          text-align: center;
          width: 290px;
          line-height: 36px;
          float: left;
          margin-bottom: 104px;
        }
        .desc {
          font-family: 'NotoSansSC-Regular';
          font-size: 22px;
          color: #3A3A3C;
          text-align: center;
          line-height: 33px;
        }
      }
    }
    .btn-box {
      text-align: center;
      margin-top: 94.2px;
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