<template>
  <div
    class="homeCon"
    style="widtch : 100%"
  >
    <el-carousel
      trigger="click"
      height="200px"
    >
      <el-carousel-item
        v-for="(item) in lunbotuList"
        :key="item.phid"
      >
        <img
          :src="baseUrl+''+item.photopath"
          width="100%"
          height="100%"
          alt="1"
        >
      </el-carousel-item>
    </el-carousel>
    <div class="row">
      <el-row style="min-height:100%; ">
        <el-col
          :span="13"
          style=" min-height:100%;"
        >
          <el-card
            class="box-card"
            style=" box-sizing:border-box; min-height:583px; border-right: 1px solid #6abeff; "
          >
            <div
              slot="header"
              class="clearfix"
            >
              <img
                class="WorkIcon"
                src="@/assets/WorkIcon.jpg"
                alt="工作简介图标"
              >
              <span class="WorkName">工作室简介</span>
            </div>
            <div>
              <article class="WorkInfo">{{info}}</article>
            </div>
          </el-card>
        </el-col>
        <el-col :span="11">
          <div
            class="rowRight"
            style=" min-height:100%;"
          >
            <el-row style=" min-height:100%;">
              <el-col
                :span="24"
                style=" min-height:50%;"
              >
                <el-card class="box-card">
                  <div
                    slot="header"
                    class="clearfix"
                  >
                    <img
                      class="WorkIcon"
                      src="@/assets/NotIcon.jpg"
                      alt="通知公告图标"
                    >
                    <span class="WorkName">通知公告</span>
                    <router-link to="/home/stuNotice">
                      <el-button
                        style="float: right; padding: 10px 8px 0 0; font-size:18px"
                        type="text"
                      >>>更多</el-button>
                    </router-link>
                  </div>
                  <div
                    v-for="(item, i) in noticeList"
                    :key="i"
                  >
                    <router-link :to="'/home/stuNotice/noticedynamics/'+item.noticeid">
                      <el-row
                        class="rowRightText"
                        :gutter="20"
                      >
                        <el-col :span="3">
                          <img
                            src="@/assets/TimeIcon.gif"
                            alt="时间图标"
                          >
                        </el-col>
                        <el-col :span="10">
                          <span>{{item.noticedate.substr(0,10)}}</span>
                        </el-col>
                        <el-col :span="11">
                          <span>{{item.noticetitle}}</span>
                        </el-col>
                      </el-row>
                    </router-link>
                  </div>
                </el-card>
              </el-col>
              <el-col
                :span="24"
                style=" min-height:50%;"
              >
                <el-card class="box-card">
                  <div
                    slot="header"
                    class="clearfix"
                  >
                    <img
                      class="WorkIcon"
                      src="@/assets/NewIcon.jpg"
                      alt="新闻动态图标"
                    >
                    <span class="WorkNames">新闻动态</span>
                    <router-link to="/studynamics">
                      <el-button
                        style="float: right; padding: 10px 8px 0 0; font-size:18px"
                        type="text"
                      >>>更多</el-button>
                    </router-link>
                  </div>
                  <div
                    v-for="(item, i) in newsList"
                    :key="i"
                  >
                    <router-link :to="'/studynamics/studynamicsInfo/'+item.newsid">
                      <el-row
                        class="rowRightText"
                        :gutter="20"
                      >
                        <el-col :span="3">
                          <img
                            src="@/assets/TimeIcon.gif"
                            alt="时间图标"
                          >
                        </el-col>
                        <el-col :span="10">
                          <span>{{item.newdate.substr(0,10)}}</span>
                        </el-col>
                        <el-col :span="11">
                          <span>{{item.newtitle}}</span>
                        </el-col>
                      </el-row>
                    </router-link>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getlunbo, gethomeinfo, getnotice, getnews } from '@/api/getData'
import { baseUrl } from '../config/env.js'
export default {
  name: "home",
  data() {
    return {
      lunbotuList: [], // 保存轮播图的数组
      noticeList: [],//通知数组
      newsList: [],//新闻动态数组
      Listdata: [
        { name: "2016-12-13", navItem: "首页" },
        { name: "2016-12-13", navItem: "工作室介绍" },
        { name: "2016-12-13", navItem: "项目与服务" },
        { name: "2016-12-13", navItem: "工作室动态" },
        { name: "2016-12-13", navItem: "人才招聘" },
        { name: "2016-12-13", navItem: "联系我们" }
      ],//导航数组
      page: 1,
      info: '',
      baseUrl: ''
    };
  },
  created() {
    this.getLunbotu();
    this.getinfo();
    this.getnotices();
    this.getnewslist();
    this.baseUrl = baseUrl
  },
  methods: {
    async getLunbotu() {
      const lunbo = await getlunbo({ page: 1, limit: 4 });
      console.log('lunbo :', lunbo);
      if (lunbo.code == 0) {
        this.lunbotuList = lunbo.data;
      } else {
        console.log('lunbo.msg :', lunbo.msg);
        this.errorToast("加载录播图失败：" + lunbo.msg)
      }
    },
    async getinfo() {
      const info = await gethomeinfo({ page: this.page, limit: 1 });
      console.log('info :', info);
      if (info.code == 0) {
        this.info = info.data[0].bfcontent;
      } else {
        console.log('msg :', info.msg);
        this.errorToast("加载简介失败：" + info.msg)
      }
    },
    async getnotices() {
      const notice = await getnotice({ page: this.page, limit: 5 });
      console.log('notice :', notice);
      if (notice.code == 0) {
        this.noticeList = notice.data;
      } else {
        console.log('msg :', notice.msg);
        this.errorToast("加载通知公告失败：" + notice.msg)
      }
    },
    async getnewslist() {
      const news = await getnews({ page: this.page, limit: 5 });
      console.log('news :', news);
      if (news.code == 0) {
        this.newsList = news.data;
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
.homeCon {
  margin-top: 8px;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  .row {
    margin: 5px 0;
    min-height: 550px;
    border-right: 1px solid #6abeff;
    .clearfix {
      border-bottom: 1px solid #6abeff;
      .WorkName {
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        top: 25px;
        left: 80px;
      }
      .WorkNames {
        font-size: 22px;
        font-weight: bold;
        position: absolute;
        // top: 300px;
        left: 80px;
      }
    }
    .rowRight {
      background: #ffffff;
      border: none;
      padding: 0 10px;
      .rowRightText > div {
        text-align: center;
        line-height: 26px;
        color: #333;
        font-weight: 700;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both;
  }

  .box-card {
    width: 100%;
    height: 100%;
    .WorkInfo {
      text-indent: 2em;
      font-size: 18px;
    }
  }
}
</style>

