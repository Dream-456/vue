<template>
<div>
    <el-dialog
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    :close-on-click-modal="false"
    width="840px"
    height="700px"
    class="dialog">
    <div style="height:550px">
        <el-row class="row-1">
        <div class="head">
            <div class="head-box">
                <img :src="list.icon ? list.icon : require('../icon/application/default-app.svg')" alt class="portrait">
                <div class="text-box">
                    <div class="head-name">{{list.appName}}</div>
                    <div class="head-team">
                        <el-rate
                            v-model="value"
                            disabled
                            :colors="colors"
                            text-color="#154AD8"
                            score-template="{value}">
                        </el-rate>
                    </div>
                </div>
            </div>
            <a
                class="row-1-btn"
                href="http://platform.assetcloud.org.cn/"
                target="_blank"
                >获取</a
            >
        </div>
    </el-row>
    <el-row class="row-2">
      <el-tabs
        class="diy-tabs"
        v-model="activeName"
        type="card"
        @tab-click="handleClick"
      >
        <el-tab-pane label="应用介绍" name="first"></el-tab-pane>
        <el-tab-pane label="评价" name="second"></el-tab-pane>
        <el-tab-pane label="信息" name="third"></el-tab-pane>
      </el-tabs>
    </el-row>
    <div v-show="index == 0">
        <el-row class="row-3">
            <el-carousel class="row-3-img" :arrow="image.length !== 1 ? 'hover' : 'never'" indicator-position="none"  trigger="click" height="300px" width="537px">
                <el-carousel-item v-for="(item,index) in image" :key="index" style="text-align: center;">
                    <el-image
                        v-if="item"
                        class="img"
                        :src="item">
                    </el-image>
                    <el-image
                        v-else
                        style="height:90%"
                        class="img"
                        :src="require('../icon/application/default-appImg.svg')">
                    </el-image>
                    <div>暂无数据</div>
                </el-carousel-item>
            </el-carousel>
        </el-row>
        <el-row class="row-4">
            <div class="row-4-text">{{list.description}}</div>
        </el-row>
    </div>
    <div v-show="index == 1">
        <el-row class="row-5">
            <div class="row-5-box">
                <div class="row-5-input">
                    <el-input
                    type="textarea"
                    placeholder="对应用评价一下吧~"
                    v-model="textarea"
                    >
                    </el-input>
                    <div class="row-5-btn">发表评论</div>
                </div>
                <div class="row-5-rate" style="margin-left:20px">
                    <el-rate
                        class="row-6-rate"
                        v-model="value2"
                        :colors="colors">
                    </el-rate>
                </div>
            </div>
        </el-row>
        <el-row class="row-6">
            <div class="head" v-for="(item,index) in commentList" :key="index">
                <div class="row-6-portrait"></div>
                <div class="text-box">
                    <div class="row-6-name">{{item.name}}</div>
                    <div class="row-6-team">
                        <el-rate
                            class="row-6-rate"
                            v-model="item.value"
                            disabled
                            :colors="colors2"
                            score-template="{value}">
                        </el-rate>
                    </div>
                    <div class="row-6-text">{{item.content}}</div>
                </div>
            </div>
        </el-row>
    </div>
    <div v-show="index == 2">
        <el-row class="row-7">
            <div class="row-7-tit">联系应用开发者</div>
            <div class="row-7-contact">
                <div class="el-icon-phone-outline"></div>
                <div class="con-phone-text">{{list.contact}}</div>
                <div class="el-icon-message" v-if="list.appMail"></div>
                <div class="con-email-text">{{list.appMail}}</div>
                <div class="el-icon-link" v-if="list.appAddress"></div>
                <div class="con-link">{{list.appAddress}}</div>
            </div>
        </el-row>
        <el-row class="row-8">
            <div class="row-8-tit">历史更新</div>
            <div class="row-8-content">
                <div class="row-8-left">
                    <p class="left-top">{{list.version}}</p>
                    <!-- <p class="left-btm">{{list.content}}</p> -->
                </div>
                <div class="row-8-right">
                    {{list.updateTime}}
                </div>
            </div>
        </el-row>
    </div>
    </div>
    </el-dialog>
</div>
</template>

<script>
import {getListDetail} from "../api/market";
export default {
props:{
    dialogVisible:{
        type:Boolean
    },
    listId:{
        type:String,
        default: ''
    }
},
data(){
    return{
        value: 5, // 对应第一个评论号
        value2: 2, // 对应输入框下的评论分数
        colors:['#154AD8','#154AD8','#154AD8'], // 对应第一个评论颜色
        colors2:['#C0C4CC','#C0C4CC'],
        activeIndex: '1', // 默认的导航
        index: '0', // 选择的导航
        textarea:'',
        image:[],
        commentList:[ // 评论数据
            // {
            //     name: 'rl****n',
            //     value: 3,
            //     content: '能或越者千心素千结六京取石太具个社你联很速'
            // },
            // {
            //     name: 'rl****n',
            //     value: 3,
            //     content: '能或越者千心素千结六京取石太具个社你联很速'
            // },
            // {
            //     name: 'rl****n',
            //     value: 3,
            //     content: '能或越者千心素千结六京取石太具个社你联很速'
            // }
        ],
        updateList:[ // 更新数据
            {
                version: 'V5.23',
                content: '更新内容把压以条眼质率派始省我况党性革使指把压以条眼质率派始况党性革使指省我况党性革使指',
                time: '2006-03-01'
            },
            {
                version: 'V4.23',
                content: '更新内容把压以条眼质率派始省我况党性革使指把压以条眼质率派始况党性革使指省我况党性革使指',
                time: '2016-03-01'
            },
            {
                version: 'V4.11',
                content: '更新内容把压以条眼质率派始省我况党性革使指把压以条眼质率派始况党性革使指省我况党性革使指',
                time: '1976-03-01'
            }
        ],
        detailId:'',
        list:{},
        activeName:'first'
    }
},
watch:{
    listId:{
        handler(val){
            console.log('val',val);
            this.detailId = val
            this.loadList()
        },
        deep:true
    }
},
mounted(){
},
methods:{
    async loadList(){
        let id = { id: this.detailId }
        await  getListDetail(id).then((res) => {
            this.list = res.data.data
        });
        this.handleList()
    },
    handleList(){
        this.image = []
        let file = this.list.appPhoto.split(',')
        let url = {}
        for(let i=0;i<file.length;i++){
            url = file[i]
            this.image.push(url)
        }
    },
    handleClose() {
        this.$parent.closeDialog()
    },
    handleSelect(key, keyPath) {
        this.index = key
    },
    handleClick(tab, event) {
      this.index = tab.index
    }
}
};
</script>

<style lang="scss"  scoped>
::v-deep .el-dialog__body{
  padding: 30px 50px;
}
::v-deep .el-carousel__item::after{
    display: none;
}
/deep/.el-rate__icon{
    font-size: 26px;
}
/deep/.row-6-rate .el-rate__item .el-rate__icon
.row-5-rate .el-rate__item .el-rate__icon
{
    font-size: 16px;
}
/deep/.el-menu.el-menu--horizontal{
    border-bottom: 0px solid #ffffff;
}
/deep/.el-textarea__inner{
    resize:none;
    border:0;
    font-size: 18px;
    overflow: auto;
    outline: none;
    margin: 10px 0 0 10px;
    width: 600px;
    height: 60px;
}
.img{
    width: 50%;
    height: 100%;
}
.row-2{
    margin-top: 11.5px;
}
.head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.head-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.portrait{
    width: 70px;
    height: 70px;
}
.text-box{
    display: flex;
    flex-direction: column;
    width: 94%;
}
.head-name{
    width: fit-content;
    white-space: nowrap;
    height: 24px;
    font-size: 24px;
    font-family: PingFang SC;
    font-weight: 400;
    line-height: 30px;
    color: #303133;
    opacity: 1;
    margin-left: 30px;
}
.head-team{
    margin: 20px 0 0 30px;
}
.row-1-btn{
    width: 72px;
    height: 30px;
    border: 1px solid #154AD8;
    opacity: 0.6;
    border-radius: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 30px;
    color: #154AD8;
    opacity: 1;
    text-align: center;
    cursor: pointer;
    margin-top: 20px;
}
.row-3-img{
    margin: 12px 0 0 0;
}
.row-4-text{
    width: 742px;
    height: 62px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 17px;
    color: #606266;
    opacity: 1;
    margin: 20px 0 0 0;
    overflow: auto;
}
.row-5-input{
    display: flex;
    flex-direction: row;
}
.row-5-btn{
    width: 72px;
    height: 25px;
    background: #154AD8;
    opacity: 1;
    border-radius: 4px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 25px;
    color: #FFFFFF;
    opacity: 1;
    text-align: center;
    margin: 39px 18px 0 0;
    cursor: pointer;
}
.row-5-box{
    width: 750px;
    height: 103px;
    border: 1px solid #EBEEF5;
    opacity: 1;
    border-radius: 4px;
    margin: 18px 0 0 0;
}
.row-6{
    height: 315px;
    overflow-y: auto;
}
.row-6-portrait{
    width: 40px;
    height: 40px;
    background-image: url(../icon/dialog-img1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-top: 30px;
}
.row-6-name{
   width: 55px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #333333;
    opacity: 1;
    margin: 32px 0 0 16px;
}
.row-6-team{
    margin: 6px 0 0 16px;
}
.row-6-text{
    width: 710px;
    height: 20px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 300;
    line-height: 17px;
    color: #606266;
    opacity: 1;
    margin-top: 11px;
    margin-left: 16px;
}
.row-7-tit{
    width: 114px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: bold;
    line-height: 19px;
    color: #303133;
    opacity: 1;
    margin: 30px 0 0 0px;
}
.row-7-contact{
    display: flex;
    flex-direction: row;
}
.el-icon-phone-outline{
    font-size: 20px;
    margin-top: 24px;
}
.el-icon-message{
    font-size: 20px;
    margin-top: 24px;
    margin-left: 20px;
}
.el-icon-link{
    font-size: 20px;
    margin-top: 24px;
    margin-left: 20px;
}
.con-phone{
    width: 15px;
    height: 18px;
    margin: 23px 0 0 30px;
    background-image: url(../icon/dialog-phone.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.con-phone-text{
    width: 150px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #303133;
    opacity: 1;
    margin: 26px 0 0 12px;
}
.con-email{
    width: 15px;
    height: 12px;
    margin: 30px 0 0 30px;
    background-image: url(../icon/dialog-email.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.con-email-text{
    width: 150px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #303133;
    opacity: 1;
    margin: 26px 0 0 12px;
}
.el-icon-paperclip{
    width: 15px;
    height: 12px;
    margin: 30px 0 0 30px;
    font-size: 17px;
}
.con-link{
    width: 200px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #303133;
    opacity: 1;
    margin: 26px 0 0 12px;
}
.row-8-tit{
    width: 65px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #303133;
    opacity: 1;
    margin: 35px 0 0 0px;
}
.row-8-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 0 0px;
}
.left-top{
    width: 60px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 600;
    line-height: 19px;
    color: #303133;
    opacity: 1;
}
.left-btm{
    width: 680px;
    height: 44px;
    font-size: 14px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 17px;
    color: #303133;
    opacity: 1;
    margin-top: 13px;
}
.row-8-right{
    width: 96px;
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    line-height: 19px;
    color: #C0C4CC;
    opacity: 1;
    margin-top: 10px;
}

.diy-tabs {
  display: block;
  white-space: nowrap;
  padding-bottom: 10px;

  li + li {
    margin-left: 20px;
  }

  .active {
    font-size: 14px;
    font-weight: 600;
    line-height: 22px;
    color: rgba(48, 49, 51, 1);
    cursor: default;
  }

  .noactive {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    color: rgba(96, 98, 102, 1);
    cursor: pointer;
  }
  .line {
    margin: 0 auto;
    margin-top: 4px;
    width: 15px;
    height: 0px;
    border: 1px solid rgba(21, 74, 216, 1);
  }
}
.diy-tabs__item {
  display: block;
}

// element 样式修改
::v-deep .el-tabs__nav-wrap::after {
  display: none;
}
::v-deep .el-tabs__item.is-active {
  font-weight: bold;
  color: rgba(48, 49, 51, 1);
}
::v-deep .el-tabs__active-bar {
  display: none;
}
::v-deep .el-tabs__header {
  margin: 0;
}
::v-deep .is-active::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 35px;
  transform: translate(-50%);
  width: 25%;
  height: 2px;
  background-color: #154ad8;
}
::v-deep .el-tabs__header .el-tabs__nav {
  border: 0;
}
::v-deep .el-tabs__header .el-tabs__item {
  border: 0;
}
::v-deep .el-tabs__header {
  border: 0;
}
::v-deep .el-tabs__item {
  padding: 0 10px !important;
}
::v-deep .el-tabs--card>.el-tabs__header .el-tabs__nav{
  border: 0;
}
::v-deep .el-tabs--card>.el-tabs__header{
    border: 0;
}
::v-deep .el-tabs--card>.el-tabs__header .el-tabs__item{
    border:0;
}
</style>
