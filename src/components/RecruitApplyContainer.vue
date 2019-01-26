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
      <el-row>
        <el-col
          :span="6"
          style="min-height: 30px; font-size:17px;"
        >请扫描二维码填写信息</el-col>
        <el-col
          :span="12"
          style="height: 430px; font-size:17px;"
        >
          <img
            src="../assets/xiaochengxu.jpg"
            alt="小程序码"
            width="100%"
            height="100%"
          >
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Recruitapply",
  data() {
    return {
    };
  },
  created() { },
  methods: {}
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
  }
}
</style>

