<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="WorkName">人才招聘</span>
          </div>
        </div>
      </div>
      <div style="min-height:400px; padding: 8px 0 8px 10px; ">
        <div
          v-for="(item) in jobList"
          :key="item.jobid"
        >
          <router-link :to="'/recruitment/recruitInfo/'+item.jobid">
            <el-row
              :gutter="20"
              class="routext"
            >
              <el-col
                :span="19"
                class="rowText"
                style="height:30px;"
              >{{item.jobname}}</el-col>
              <el-col
                :span="5"
                class="rowText"
                style="height:30px;"
              >{{item.jobbdate.substr(0,10)}}</el-col>
            </el-row>
          </router-link>
        </div>

      </div>
      <div class="more">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="total, prev, pager, next, jumper"
          :total="count"
          style="width:550px;margin:0 auto;"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import { getjob } from '@/api/getData'
export default {
  name: "Recruitment",
  data() {
    return {
      count: 80,
      page: 1,
      jobList: [],
    };
  },
  created() {
    this.getjoblist();
  },
  methods: {
    handleCurrentChange(val) {
      console.log('当前页：', val);
      this.page = val;
      this.getjoblist();
    },
    async getjoblist() {
      const job = await getjob({ page: this.page, limit: 10 });
      console.log('job :', job);
      if (job.code == 0) {
        this.jobList = job.data;
        this.count = job.count;
      } else {
        console.log('msg :', job.msg);
        this.errorToast("加载招聘信息失败。。。")
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
     .routext {
      width: 100%;
      height: 30px;
      color: #000;
      margin-bottom: 10px;
    }
    .routext:hover {
      color: #6abeff;
    }
    .rowText {
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    .more {
      height: 30px;
      padding: 10px 0;
      width: 100%;
    }
  }
}
</style>

