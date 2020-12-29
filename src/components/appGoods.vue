<template>
<div>
    <!-- <div class="row-right-tit">{{goodsList.title}}</div> -->
    <div class="row-right-box">
        <div class="row-right-bg" v-for="(item,index) in list" :key="index" @click="openDialog(item)">
            <el-image
                class="img"
                :src="item.icon ? item.icon : require('../icon/application/default-app.svg')">
            </el-image>
            <div class="divide"></div>
            <div class="right-tit">{{item.appName}}</div>
            <div class="right-text">{{item.description}}</div>
        </div>
    </div>
    <div class="footer-pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        :current-page.sync="params.current"
        :page-size="9"
        layout="total, prev, pager, next"
        :total="total"
        class="pagination"
        
      >
      </el-pagination>
    </div>
    <appDialog :dialogVisible="dialogVisible" :listId="listId" ></appDialog>
</div>
</template>

<script>
import appDialog from '../components/appDialog';
import {getListWithoutToken} from "../api/market";
export default {
components: {
    appDialog
},
created(){
  this.getList()
},
data(){
    return{
        dialogVisible: false,
        params: {
          current: 1,
          size: 9,
        },
        url:'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
        list:[],
        currentPage:1,
        pagesize:9,
        total:1000,
        listId:''
    }
},
methods:{
    getList(){
      getListWithoutToken(this.params).then((res) => {
        this.list = res.data.data.records
        this.total = res.data.data.total
        console.log(res);
      });
    },
     /**
     * el-pagination 分页配置
     */
    async handleSizeChange(val) {
      await this.updatePageSize(val);
      this.page.currentPage = 1;
      this.$emit("handleUpdate");
    },
    openDialog(data){
        this.dialogVisible = true
        this.listId = data.id
    },
    closeDialog(){
        this.dialogVisible = false
    },
    handleCurrentChange(val) {
      this.params.current = val
      this.getList()
    }
}
};
</script>

<style lang="scss" scoped>
.row-right-tit{
    width: 87px;
    height: 29px;
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #222222;
    line-height: 29px;
    margin-top: 40px;
  }
  .row-right-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .row-right-bg{
    width: 347px;
    height: 271px;
    background: #FFFFFF;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    margin-top:33px;
    margin-right: 24px;
    cursor: pointer;
  }
  .row-right-bg:hover{
      box-shadow: 0px 0px 6px rgba(0,0,0,0.1);
  }
  .img{
    width: 64px;
    height: 64px;
    border-radius: 4px;
    border: 1px solid #EBEEF5;
    margin: 21px 0 0 142px;
  }
  .divide{
    width: 283px;
    height: 1px;
    margin-top: 20px;
    margin-left: 32px;
    background: #EBEEF5;
  }
  .right-tit{
    width: 100%;
    height: 29px;
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #303133;
    line-height: 29px;
    text-align: center;
    margin-top: 17px;
    /* margin: 17px 0 0 130px; */
  }
  .right-text{
    width: 236px;
    height: 60px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #909399;
    line-height: 20px;
    margin: 11px 0 0 56px;
    display: -webkit-box;    
    -webkit-box-orient: vertical;    
    -webkit-line-clamp: 3;    
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .el-input__inner{
    width: 10px;
    border:1px solid red;
  }
  .pagination{
    text-align:right;
    margin-top:30px;
    margin-right: 90px;
  }
  // .footer-pagination {
  //     & ::v-deep .btn-prev {
  //       border-radius: 16px;
  //     }
  //     & ::v-deep .el-pager > .number {
  //       border-radius: 4px;
  //     }
  //     & ::v-deep .btn-next {
  //       border-radius: 16px;
  //     }
  //     & ::v-deep .el-pagination__sizes .el-input__inner {
  //       border-radius: 16px;
  //       background: rgba(231, 239, 252, 1);
  //       border-color: transparent;
  //     }
  //   }
</style>
