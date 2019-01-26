<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="WorkName">工作室简介</span>
          </div>
        </div>
      </div>
      <div style="min-height:450px; padding: 2px 0 2px 20px; width:100%; ">
        <el-row>
          <el-col
            :span="10"
            style="min-height:450px;"
          >
            <el-col
              :span="24"
              style="min-height:200px; width:100%;"
            >
              <img
                :src="introimag1"
                height="100%"
                width="100%"
                alt
              >
            </el-col>
            <el-col
              :span="24"
              class="rowText"
              style="min-height:183px; width:100%; "
              v-html="introtext1"
            >

            </el-col>
          </el-col>
          <el-col
            :span="4"
            style="min-height:450px; background: #FFF"
          ></el-col>
          <el-col
            :span="10"
            style="min-height:450px;"
          >

            <el-col
              :span="24"
              class="rowText"
              style="min-height:183px; width:100%;"
              v-html="introtext2"
            >

            </el-col>
            <el-col
              :span="24"
              style="height:228px; margin-top:5px;"
            >
              <img
                :src="introimag2"
                height="100%"
                width="100%"
                alt
              >
            </el-col>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getintro } from '@/api/getData'
import { baseUrl } from '../config/env.js'
export default {
  name: "StudioInfo",
  data() {
    return {
      introtext1: '',
      introimag1: '../assets/stuInfo (1).jpg',
      introimag2: '../assets/stuInfo (2).jpg',
      introtext2: '',
      baseUrl: ''

    };
  },
  created() {
    this.getintros();
    this.baseUrl = baseUrl
  },
  methods: {
    async getintros() {
      const intro = await getintro({ page: 1, limit: 2 });
      console.log('intro :', intro);
      if (intro.code == 0) {
        this.introtext1 = intro.data[0].intorcontent;
        if (intro.data[0].photopath) {
          this.introimag1 = this.baseUrl + intro.data[0].photopath
        }
        this.introtext2 = intro.data[1].intorcontent;
        if (intro.data[1].photopath) {
          this.introimag2 = this.baseUrl + intro.data[1].photopath
        }
      } else {
        console.log('intro.msg :', intro.msg);
        this.errorToast("加载介绍失败：" + intro.msg)
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
    .rowText {
      font-family: "Hiragino Sans GB", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      font-size: 16px;
      text-indent: 2em;
      word-wrap: break-word;
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
    }
  }
}
</style>

