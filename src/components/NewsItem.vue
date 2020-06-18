<template>
  <div class="newsItem">
    <div class="img-box" :style="{backgroundImage: 'url('+data.img+')'}"></div>
    <div class="content">
      <div class="news_name">{{data.name}}</div>
      <!-- <div class="date">{{data.date}}</div> -->
      <div class="profile">{{data.profile}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    toNewsPage() {
      this.$router.push({name: 'News'});
    }
  }
}
</script>

<style lang="scss" scoped>
.newsItem {
  overflow: hidden;
  .img-box {
    width: 505px;
    height: 330px;
    float: left;
    background-size: cover;
  }
  .content {
    width: 605px;
    height: 330px;
    float: left;
    background: #EAE6E1;
    padding: 23px 37px 0 24px;
    box-sizing: border-box;
    position: relative;
    margin-bottom: 55px;
    .news_name {
      font-family: 'NotoSansSC-Bold';
      font-size: 36px;
      color: #3A3A3C;
      line-height: 54px;
      margin-bottom: 27px;
    }
    .date, .profile {
      font-family: 'NotoSansSC-Regular';
      font-size: 18px;
      color: #000000;
      line-height: 27px;
    }
  }
}
</style>