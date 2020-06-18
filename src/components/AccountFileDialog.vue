<template>
  <el-dialog
    :visible.sync="data.bSwitch"
    width="734px"
    top="23vh"
    :center="true"
    :show-close="false">
    <div class="needFile">
      <div class="title">所需文件</div>
      <div class="file">1. 身份证明文件（如内地居民身份证+港澳通行证）</div>
      <div class="file">2. 住址证明（必须）</div>
      <div class="file">3. 收入证明、开户理由</div>
    </div>
    <div class="serviceFlow">
      <div class="title">服务流程</div>
      <div class="flow-box">
        <div class="text-box">
          <div class="text1">支付服务费</div>
          <div class="text2">准备开户文件</div>
          <div class="text3">开户成功</div>
          <div class="text4">合理指导</div>
        </div>
        <img src="../assets/account/flow-icon.png" class="img" alt="">
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button class="btn" round @click="toInterview">查询预约</el-button>
    </span>
  </el-dialog>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    methods: {
      toInterview() {
        this.$router.push({name: 'Interview'});
      }
    }
  };
</script>

<style lang="scss" scoped>
/deep/ .el-dialog__body {
  padding-top: 23px;
}
/deep/ .el-dialog__footer {
  padding-bottom: 35px;
}
/deep/ .el-button:active {
  border-color: #003947;
}
/deep/ .el-dialog {
  border-radius: 6px;
}
.needFile {
  margin-bottom: 17px;
  .title {
    font-family: 'NotoSansSC-Bold';
    font-size: 24px;
    color: #3A3A3C;
    text-align: center;
    line-height: 36px;
  }
  .file {
    font-family: 'NotoSansSC-Regular';
    font-size: 18px;
    color: #000000;
    line-height: 27px;
    text-align: center;
  }
}
.serviceFlow {
  .title {
    font-family: 'NotoSansSC-Bold';
    font-size: 24px;
    color: #3A3A3C;
    text-align: center;
    line-height: 36px;
  }
  .flow-box {
    width: 500px;
    margin: 0 auto;
    text-align: center;
    .text-box {
      font-family: 'NotoSansSC-Regular';
      font-size: 18px;
      color: #3A3A3C;
      line-height: 27px;
      position: relative;
      .text1 {
        display: inline-block;
        position: absolute;
        left: 22px;
      }
      .text2 {
        display: inline-block;
        position: absolute;
        left: 136px;
      }
      .text3 {
        display: inline-block;
        position: absolute;
        left: 276px;
      }
      .text4 {
        display: inline-block;
        position: absolute;
        left: 400px;
      }
    }
    .img {
      margin-top: 36px;
    }
  }
}
.btn {
  width: 204px;
  height: 45px;
  background: #3A3A3C;
  font-family: NotoSansSC-Medium;
  font-size: 18px;
  color: #F8F7F2;
  border: none;
}
</style>