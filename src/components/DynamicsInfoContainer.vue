<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="WorkName">工作室动态</span>
          </div>
        </div>
      </div>
      <article
        class="articleText"
        style="widch:100%;min-height:400px;"
      >
        <header v-html="newtitle"></header>

        <main v-html="newcontent"></main>
        <!--mainContent end-->
      </article>
    </div>
  </div>
</template>

<script>
import { getnews } from '@/api/getData'
export default {
  name: "dynamicsinfo",
  data() {
    return {
      newtitle: '',
      newcontent: '',
    };
  },
  created() {
    this.getnewss();
  },
  methods: {
    async getnewss() {
      const news = await getnews({ page: 1, limit: 1, keyType: 'newsId', keyWord: this.$route.params.id });
      console.log('news :', news);
      if (news.code == 0) {
        this.newtitle = news.data[0].newtitle;
        this.newcontent = news.data[0].newcontent;
      } else {
        console.log('msg :', news.msg);
        this.errorToast("加载新闻动态失败。。。")
      }
    },
    errorToast(message) {
      this.$notify.error({
        title: "错误",
        message: message
      });
    }
  }
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.container {
  widows: 100%;
  min-height: 500px;
  margin: 8px 0;
  padding: 5px 60px;
  // background: pink;
  .row {
    widows: 100%;
    min-height: 500px;
    // background: skyblue;
    .box-card {
      height: 100%;

      border-bottom: 1px solid #6abeff;
      .WorkName {
        font-size: 27px;
        padding-left: 10px;
        line-height: 30px;
      }
    }
    .articleText {
      header {
        text-align: center;
        font-size: 20px;
        font-weight: 700;
        width: 100%;
        line-height: 40px;
        height: 40px;
      }
      img {
        max-width: 50%;
      }
      font-family: "Hiragino Sans GB", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 16px;
      letter-spacing: 0.08em;
      p {
        font-size: 16px; /*字体大小*/
        text-indent: 2em; /*首行缩进两个单位*/
        line-height: 1.5em; /*行距为1.5个单位*/
        padding: 10px; /*用内边距代替外边距来设置段间距*/
        margin: 0; /*去掉默认的段间距*/
      }
      b {
        font-style: italic; /*转换为斜体*/
        text-transform: capitalize; /*首字母大写,参数还有lowercase,uppercase*/
        font-size: 16px; /*字号为14px*/
        word-spacing: -1px; /*词间距*/
        letter-spacing: -1px;
      }
      p:nth-of-type(1) {
        text-indent: 0;
      }
    }
  }
}
</style>

