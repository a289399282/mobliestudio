<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="RowName">人才招聘</span>
          </div>
        </div>
      </div>
      <el-card
        class="box-card"
        style="padding-left:10px; border:none;"
      >
        <div
          slot="header"
          class="clearfix"
        >
          <el-row>
            <el-col
              :span="4"
              class="WorkName"
              style=""
            >应聘岗位：</el-col>
            <el-col
              :span="18"
              class="WorkName"
              style=""
            >{{jobname}}</el-col>
          </el-row>
        </div>
        <el-row>
          <el-col :span="24">
            <el-row style="height:40px;">
              <el-col
                :span="3"
                class="rowText"
                style=""
              >招聘人数：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              >{{jobnumber}}</el-col>
            </el-row>
            <el-row style="height:40px;">
              <el-col
                :span="3"
                class="rowText"
                style=""
              >发布时间：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              >{{jobbdate}}</el-col>
            </el-row>
            <el-row style="height:40px;">
              <el-col
                :span="3"
                class="rowText"
                style=""
              >截止时间：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              >{{jobedate}}</el-col>
            </el-row>
            <el-row style="height:40px;">
              <el-col
                :span="5"
                class="rowText"
                style=""
              >岗位要求：</el-col>
              <el-col
                :span="19"
                style=""
              >
                <el-button
                  type="primary"
                  v-bind:disabled="flag"
                  @click="jump"
                  style="float: right;  font-size:17px;"
                  v-text="btn"
                ></el-button>
              </el-col>
            </el-row>
            <el-row style="min-height:200px; margin-bottom:25px;">
              <el-col
                :span="19"
                style="font-size: 18px;"
              >
                <article
                  v-html="jobrequest"
                  class="articleText"
                ></article>
              </el-col>
            </el-row>

          </el-col>
        </el-row>

      </el-card>
    </div>
  </div>
</template>

<script>
import { getjob } from '@/api/getData'
export default {
  name: "Recruitment",
  data() {
    return {
      jobname: '',
      jobnumber: '',
      jobbdate: '',
      jobedate: '',
      jobrequest: '',
      flag: false,
      btn: '应聘'
    };
  },
  created() {
    this.getjoblist();
  },
  methods: {
    async getjoblist() {
      const job = await getjob({ page: 1, limit: 1, keyType: 'jobId', keyWord: this.$route.params.id });
      console.log('job :', job);
      if (job.code == 0) {
        this.jobname = job.data[0].jobname;
        this.jobnumber = job.data[0].jobnumber;
        this.jobbdate = job.data[0].jobbdate;
        this.jobedate = job.data[0].jobedate;
        this.jobrequest = job.data[0].jobrequest;
        if (job.data[0].statu === 0) {
          this.flag = true;
          this.btn = '已招满'
        } else if (job.data[0].statu === 3) {
          this.flag = true;
          this.btn = '已过期'
        }
      } else {
        console.log('msg :', job.msg);
        this.errorToast("加载招聘信息失败。。。")
      }
    },
    jump() {
      this.$router.push({ path: '/recruitment/recruitInfo/recruitApply/' + this.$route.params.id })
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
      .RowName {
        font-size: 27px;
        padding-left: 10px;
        line-height: 30px;
      }
      .WorkName {
        font-size: 20px;
        line-height: 30px;
      }
    }
    .rowText {
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .articleText {
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

