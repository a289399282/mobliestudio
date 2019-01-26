<template>
  <div class="content">
    <el-container direction="vertical">
        <div class="Appheader">
      <el-header style="height:225px"></el-header></div>
      <div style="width:100%">
      <el-menu
        :default-active="$route.path"
        router
        background-color="#6da6fc"
        text-color="#fff"
        active-text-color="#684cb3"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">{{ item.navItem }}</el-menu-item>
      </el-menu>
      </div>
    <!-- <el-main> -->
        	<router-view></router-view>
    <!-- </el-main> -->
      <el-footer>
        <span>@移动应用工作室</span>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      navList: [
        { name: "/home", navItem: "首页" },
        { name: "/studioInfo", navItem: "工作室介绍" },
        { name: "/proSer", navItem: "项目与服务" },
        { name: "/studynamics", navItem: "工作室动态" },
        { name: "/recruitment", navItem: "人才招聘" },
        { name: "/contactUs", navItem: "联系我们" }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
        
      console.log(key, keyPath);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 70%;
  height: 100%;
  margin: 0 auto;
  .el-container {
    height: 100%;
     .Appheader{
       background: #6da6fc;
    .el-header {
      background: url(./assets/logo.jpg) no-repeat;
      background-size: 100% 100%;
    }
     }
    .el-menu.el-menu--horizontal {
      border: none;
      display: flex;
      .el-menu-item {
        flex: 1;
        height: 50px;
        line-height: 50px;
        text-align: center;
        font-size: 18px;
      }
    }
    .el-footer {
      width: 100%;
    //   position: absolute;
    //   bottom: 0;
      background: #6da6fc;
      text-align: center;
      line-height: 60px;
    }
  }
}
</style>


