<template>
  <div class="container">
    <div class="row">
      <div style="width:100%;height:40px; padding: 10px 0;">
        <div class="box-card">
          <div
            slot="header"
            class="clearfix"
          >
            <span class="WorkName">项目与服务</span>
          </div>
        </div>
      </div>
      <div style="min-height:510px; padding: 2px 0 2px 0; width:100%;">
        <el-row>
          <el-col
            :span="24"
            style="min-height:510px;"
          >

            <el-tabs
              tab-position="left"
              style="min-height:510px;"
              @tab-click="handleClick2"
            >
              <el-tab-pane
                v-for="(item) in proditemList"
                :key="item.itemid"
                :label="item.itmename"
              >
                <div style="margin-left:20px; min-height:510px;">
                  <el-tabs
                    tab-position="top"
                    v-model="activeName"
                    @tab-click="handleClick"
                  >
                    <el-tab-pane
                      v-for="(list) in item.list"
                      :key="list.itemid"
                      :label="list.itmename"
                      :name="list.itemid+''"
                    >
                      <article
                        class="articleText"
                        v-html="productContent"
                      ></article>
                    </el-tab-pane>
                  </el-tabs>
                </div>
              </el-tab-pane>

            </el-tabs>

          </el-col>

        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { getproditem, getprod } from '@/api/getData'
export default {
  name: "proser",
  data() {
    return {
      proditemList: [],
      activenumber: '',
      activeId: '',
      activeName: '',
      productContent: ''
    };
  },
  created() {
    this.getproditemList(0);
  },
  methods: {
    handleClick2: function (tab, event) {
      console.log(event.target.getAttribute('id'))
      this.activenumber = ((event.target.getAttribute('id').substring(4)))
      this.getproditemList(this.activenumber);
      // this.activenumber=this.activenumber.parseInt()
    },
    handleClick: function (tab, event) {
      console.log('activeName :', this.activeName);
      this.getprodlist(this.activeName)
    },
    async getproditemList(number) {
      const proditem = await getproditem({ page: 1, limit: 99 });
      console.log('proditem :', proditem);
      if (proditem.code == 0) {
        this.proditemList = proditem.data;
        this.activeId = proditem.data[number].list[0].itemid
        this.getprodlist(this.activeId)
        this.activeName = this.activeId.toString();
      } else {
        console.log('msg :', proditem.msg);
        this.errorToast("加载项目条目数失败:" + proditem.msg)
      }
    },
    async getprodlist(id) {
      this.productContent = '';
      const prod = await getprod({ page: 1, limit: 1, keyType: 'itemId', keyWord: id });
      console.log('prod :', prod);
      if (prod.code == 0) {
        this.productContent = prod.data[0].productcontent;
      } else {
        console.log('msg :', prod.msg);
        this.errorToast("加载项目与服务列表失败:" + prod.msg)
      }
    },
    errorToast(message) {
      this.$notify.error({
        title: "错误",
        message: message
      });
    },
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
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
      font-size: 18px;
      font-family: "Hiragino Sans GB", Helvetica, "PingFang SC",
        "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
      letter-spacing: 0.08em;
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
    .el-tabs__item {
      height: 60px;
      line-height: 60px;
      font-size: 18px;
    }
  }
}
</style>

