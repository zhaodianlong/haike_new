<template>
  <div class="interview-bg">
    <div class="interview">
      <div class="title">
        预约咨询
        <div class="line"></div>
      </div>
      <div class="sub_title">线上预约面谈</div>
      <div class="box">
        <div class="company-box">
          <div class="logo"></div>
          <div class="contact-box">
            <el-popover
              placement="left-end"
              width="200"
              trigger="hover">
              <img src="../assets/home/ercode.png" alt="">
              <img src="../assets/interview/1.png" class="item" slot="reference" alt="">
            </el-popover>
            <a href="https://api.whatsapp.com/send?phone=85269921971" target="_blank" class="item">
              <img src="../assets/interview/2.png" class="item" alt="">
            </a>
            <a href="https://www.facebook.com/profile.php?id=100051059316277" target="_blank" class="item">
              <img src="../assets/interview/3.png" class="item" alt="">
            </a>
            <a href="https://twitter.com/universe_ltd" target="_blank" class="item">
              <img src="../assets/interview/4.png" alt="">
            </a>
          </div>
          <div class="tel">电话: +852 6219 9610</div>
          <div class="email">邮箱: cherry@haike.com</div>
        </div>
        <div class="form-box">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item>
                  <el-input v-model="formInline.username" placeholder="名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item>
                  <el-input v-model="formInline.mobile" placeholder="联系电话"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item style="position: relative;">
                  <el-date-picker
                    v-model="formInline.time"
                    :picker-options="pickerOptions"
                    type="datetime"
                    prefix-icon=""
                    clear-icon=""
                    :editable="false"
                    popper-class="chooseDate"
                    placeholder="预约时间">
                  </el-date-picker>
                  <img src="../assets/interview/icon2.png" width="32" style="width: 28px; position: absolute; top: 10px; right: 15px;" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item style="position: relative;">
                  <el-select v-model="formInline.type"
                     popper-class="typeSelect"
                     placeholder="查询类别"
                     style="width: 100%;">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                    </el-option>
                  </el-select>
                  <img src="../assets/interview/icon1.png" style="width: 28px; position: absolute; top: 12px; right: 15px;" alt="">
                </el-form-item>
              </el-col>
              <el-col :span="24">
                <el-form-item>
                  <el-input type="textarea" v-model="formInline.other" placeholder="其他查询"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </div>
      </div>
      <div class="btn-box">
        <el-button class="submit-btn" round @click="onSubmit">提交</el-button>
      </div>
    </div>
    <!-- 成功弹窗 -->
    <el-dialog
      :visible.sync="dialogVisible"
      :show-close="false"
      :center="true"
      top="20vh"
      width="734px">
      <div class="content">
        <div class="item">我们已经收到您的查询</div>
        <div class="item">我们将于24小时内透过您留下的联系方式联系您〜</div>
        <div class="item">感谢您的查询〜</div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="btn" round @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        username: '',
        mobile: '',
        time: '',
        type: '',
        other: ''
      },
      dialogVisible: false,
      options: [
        {
          value: '11',
          label: '海外移民'
        },
        {
          value: '12',
          label: '境外开户'
        },
        {
          value: '13',
          label: '外国学历'
        },
        {
          value: '14',
          label: '房产置业'
        },
        {
          value: '15',
          label: '商务预定'
        }
      ],
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < new Date(new Date().toLocaleDateString()).getTime();
        }
      }
    }
  },
  methods: {
    onSubmit() {
      this.dialogVisible = true;
    }
  }
}
</script>

<style lang="scss" scoped>
  .interview-bg {
    width: 100%;
    background: #EAE6E1;
    .interview {
      width: 1110px;
      height: 653px;
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
        margin-bottom: 44px;
        .line {
          width: 80px;
          height: 6px;
          background: #C9B884;
          margin: 0 auto;
        }
      }
      .sub_title {
        font-family: 'NotoSansSC-Regular';
        font-size: 22px;
        color: #3A3A3C;
        text-align: center;
        line-height: 33px;
        margin-bottom: 50px;
      }
      .box {
        overflow: hidden;
        .company-box {
          width: 290px;
          height: 260px;
          float: left;
          .logo {
            width: 249px;
            height: 100px;
            background: url('../assets/interview/logo.png') no-repeat;
            background-size: cover;
            margin-bottom: 16px;
          }
          .contact-box {
            overflow: hidden;
            width: 249px;
            margin-bottom: 16px;
            .item {
              width: 45px;
              height: 45px;
              float: left;
              margin-right: 22px;
              cursor: pointer;
              &:nth-child(4) {
                margin-right: 0;
              }
              img {
                width: 45px;
                height: 45px;
              }
            }
          }
          .tel {
            font-family: 'NotoSansSC-Regular';
            font-size: 22px;
            color: #3A3A3C;
            line-height: 33px;
            margin-bottom: 15px;
          }
          .email {
            font-family: 'NotoSansSC-Regular';
            font-size: 22px;
            color: #3A3A3C;
            line-height: 33px;
          }
        }
        .form-box {
          width: 773px;
          height: 260px;
          float: right;
          font-family: 'NotoSansSC-Regular';
          font-size: 18px;
          color: #9A9594;
          /deep/ .el-form-item {
            width: 100%;
            .el-date-editor.el-input {
              width: 100%;
              .el-input__prefix {
                display: none;
              }
            }
            .el-form-item__content {
              width: 100%;
              .el-input {
                .el-input__inner {
                  border-color: #9A9594;
                  height: 48px;
                }
              }
              .el-textarea__inner {
                border-color: #9A9594;
                height: 119px;
              }
            }
          }
          /deep/.el-input--prefix .el-input__inner {
            padding-left: 15px;
          }
        }
      }
      .btn-box {
        padding-top: 55px;
        text-align: center;
        .submit-btn {
          width: 204px;
          height: 45px;
          background: #3A3A3C;
          color: #F8F7F2;
          border: none;
          &:hover {
            background: #57575c;
          }
        }
      }
    }
    .content {
      .item {
        font-family: 'NotoSansSC-Regular';
        font-size: 18px;
        color: #3A3A3C;
        letter-spacing: 0;
        text-align: center;
        line-height: 27px;
      }
    }
    .dialog-footer {
      .btn {
        width: 204px;
        height: 45px;
        background: #3A3A3C;
        font-family: NotoSansSC-Medium;
        font-size: 18px;
        color: #F8F7F2;
        letter-spacing: 0;
        text-align: center;
        &:hover {
          background: #57575c;
        }
      }
    }
    /deep/ .el-dialog {
      border-radius: 6px;
    }
  }
</style>
<style lang="scss">
  .chooseDate {
    /deep/ .el-date-table td.today span{
      color: #C9B884;
    }
    /deep/ .el-date-table td.current:not(.disabled) span {
      background: #C9B884;
      color: #fff;
      font-weight: normal;
    }
    /deep/ .el-picker-panel__footer .el-button--text {
      color: #C9B884;
    }
    /deep/ .el-date-table td.available:hover {
      color: #C9B884;
    }
    /deep/ .el-button.is-plain:hover {
      border-color: #C9B884;
      color: #fff;
    }
    /deep/ .el-button.is-plain {
      background: #C9B884;
      color: #EAE6E1;
    }
  }
  .typeSelect {
    .el-select-dropdown__item.selected {
      color: #C9B884;
    }
  }
</style>