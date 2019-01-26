<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="WorkName">联系我们</span>
          </div>
        </div>
      </div>
      <div style="min-height:450px; padding: 2px 0 2px 20px; width:100%; ">
        <el-row>
          <el-col
            :span="12"
            style="min-height:450px; padding-top:50px;"
          >
            <b-map-component
              :mapHeight="300"
              :longitude="113.39641"
              :latitude="22.437343"
            ></b-map-component>
          </el-col>

          <el-col
            :span="12"
            style="min-height:450px; padding:80px 15px;"
          >
            <el-row style="height:40px;">
              <el-col
                :span="5"
                class="rowText"
                style=""
              >地址：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              >广东省中山市五桂山职业教育园区</el-col>
            </el-row>
            <el-row style="height:40px;">
              <el-col
                :span="5"
                class="rowText"
                style=""
              >电话：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              >15913335765</el-col>
            </el-row>
            <el-row style="height:40px;">
              <el-col
                :span="5"
                class="rowText"
                style=""
              >网址：</el-col>
              <el-col
                :span="19"
                class="rowText"
                style=""
              ><a
                  style="text-decoration: none;color:inherit;"
                  target="_blank"
                  href="http://www.yidodev.cn/"
                >http://www.yidodev.cn/</a></el-col>
            </el-row>

          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import BMapComponent from './mapContainer'
export default {
  name: "StudioContactUs",
  components: {
    BMapComponent
  },
  data() {
    return {

    };
  },


  created() { },
  methods: {

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
      line-height: 40px;
      padding-left: 10px;
      font-size: 18px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
}
</style>

