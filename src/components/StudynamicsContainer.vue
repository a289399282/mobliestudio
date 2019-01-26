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
      <el-row>
        <el-col
          :span="10"
          style="min-height:450px;"
        >
          <div
            class="leftRow"
            style="widch:100%;min-height:450px;"
          >
            <el-row style="witch:100%;height:100%;">
              <el-col
                :span="24"
                style="min-height:230px;"
              >
                <img
                  src="../assets/dynamics (1).jpg"
                  height="100%"
                  class="studioimg"
                  alt="工作室图片1"
                >
              </el-col>
              <el-col
                :span="24"
                style="min-height:230px;"
              >
                <img
                  src="../assets/dynamics (2).jpg"
                  class="studioimg"
                  height="100%"
                  alt="工作室图片2"
                >
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col
          :span="14"
          style=" padding: 8px 0 8px 40px;  position: relative; "
        >
          <div style="min-height:380px;">
            <div
              v-for="(item) in newsList"
              :key="item.newsid"
            >
              <router-link
                :to="'/studynamics/studynamicsInfo/'+item.newsid"
              >
                <el-row class="routext">
                  <el-col
                    :span="24"
                    class="rowText"
                    style="height:30px;"
                  >{{item.newtitle}}</el-col>
                  <el-col
                    :span="24"
                    class="rowText"
                    style="height:30px;"
                  >{{item.newdate.substr(0,10)}}</el-col>
                </el-row>
              </router-link>
            </div>
          </div>
          <div class="more">
            <el-pagination
              @current-change="handleCurrentChange"
              :page-size="5"
              layout="prev, pager, next,jumper"
              :total="count"
            ></el-pagination>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getnews } from '@/api/getData'
export default {
  name: "Studynamics",
  data() {
    return {
      count: 80,
      page: 1,
      newsList: [],
    };
  },
  created() {
    this.getnewslist();
  },
  methods: {
    handleCurrentChange(val) {
      console.log('当前页：', val);
      this.page = val;
      this.getnewslist();
    },
    async getnewslist() {
      const news = await getnews({ page: this.page, limit: 5 });
      console.log('news :', news);
      if (news.code == 0) {
        this.newsList = news.data;
        this.count = news.count;
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
    .studioimg {
      width: 100%;
    }
    .rowText {
      line-height: 40px;
      padding-left: 10px;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
      .routext{
        width:100%;
        height:30px; 
         margin-bottom:50px;
         color: #000;
      }
      .routext:hover {color: #6abeff}
    .more {
      height: 10px;
      padding: 10px 0;
      width: 100%;
    }
  }
}
</style>

