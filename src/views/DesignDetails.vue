<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1-tit">设计平台</div>
        <div class="row-1-tit2">UX&UI云服务</div>
        <div class="row-1-break"></div>
        <div class="row-1-con">
          秉持“愉快办公”设计理念，基于用户心理模型，依据用户行为数据分析，设<br />计与用户场景适应的互联网产品。产品集人性化办公、关怀式设计、情感化设<br />计于一体，覆盖全员、全口径、全生命周期每一环节，以清晰的产品交互逻辑<br />和美观的产品视觉界面服务于B端、G端市场需求。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2-tit">
            <div class="head">
                <div class="portrait">UX</div>
                <div class="text-box">
                    <div class="head-name">案例名称</div>
                    <div class="head-team">杭电UX&UI设计团队</div>
                </div>
            </div>
            <div class="row-2-text">设计案例</div>
            <div class="row-2-close" @click="back"></div>
        </div>
        <el-row class="row-3">
            <div class="left"></div>
            <div class="image-box">
                <el-image
                class="img"
                v-for="(item,index) in row"
                :key="index"
                :src="item.url"></el-image>
            </div>
            <div class="right"></div>
        </el-row>
        <el-row class="row-4">
            <div class="row-4-btn1"></div>
            <div class="row-4-btn2"></div>
            <div class="row-4-btn3">
                <div class="btn-icon"></div>
                联系我们
            </div>
        </el-row>
        <el-row class="row-5">
            <div class="divide"></div>
            <div class="footer">
                <div class="footer-left">
                    <div class="footer-text-left"></div>
                    <div class="footer-text">PC端 应用程序 界面设计</div>
                </div>
                <div class="footer-right">
                    <div class="footer-text">Web端 网页设计</div>
                    <div class="footer-text-right"></div>
                </div>
            </div>
        </el-row>
      </el-row>
    </div>
    <div class="footers">
      <div class="gotop" v-show="gotop" @click="toTop">
        <div class="gotop-box">
          <div class="footers-icon"></div>
          <div class="footers-text">回到顶部</div>
        </div>
    </div>
  </div>
  <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1-box">
          <div class="con-1__back" @click="back"></div>
          <div class="con-1__tit">设计案例</div>
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2-row">
          <div class="con-2__head"></div>
          <div class="con-2-column">
            <div class="con-2__headtit">资产云应用市场界面设计</div>
            <div class="con-2__headtit2">杭州UX&UI设计团队</div>
          </div>
        </div>
      </el-row>
      <el-row class="con-3">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#0030E4" text-color="#8E93A1">
            <el-menu-item index="1">PC端设计</el-menu-item>
            <el-menu-item index="2">Mobile端设计</el-menu-item>
            <el-menu-item index="3">Web端设计</el-menu-item>
        </el-menu>
      </el-row>
      <el-row class="con-4">
        <el-image
          v-for="(item,index) in row"
          class="con-4__img"
          :key="index"
          :src="item.url">
        </el-image>
      </el-row>
      <el-row class="con-5">
        <div class="con-5__talk"></div>
        <div class="con-5__forward"></div>
        <div class="con-5__praise"></div>
      </el-row>
    </div>
</div>
</template>

<script>
import FootBar from "../components/FootBar";
import mTopBar from "../components/mTopBar";
import mFootBar from "../components/mFootBar";

export default {
  name: "app",
  components: {
    FootBar,
    mTopBar,
    mFootBar
  },
   data() {
      return {
          row:[
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            }
        ],
        gotop: false,
        activeIndex: '2', // 默认的导航
        index: '1', // 选择的导航
      }
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll, true);
    },
    methods: {
      handleScroll() {
        let scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        scrolltop > 30 ? (this.gotop = true) : (this.gotop = false);
      },
      toTop() {
        let top = document.documentElement.scrollTop || document.body.scrollTop;
        // 实现滚动效果 
        const timeTop = setInterval(() => {
          document.body.scrollTop = document.documentElement.scrollTop = top -= 50;
          if (top <= 0) {
            clearInterval(timeTop);
          }
        }, 10);
      },
      back(){
        this.$router.go(-1)
      },
      handleSelect(key, keyPath) {
        console.log('key',key, '',keyPath);
        this.index = key
      }
    }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/design-bg.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 31%;
}
.row-1-tit {
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  margin: 7.5% 0 0 8.33%;
}
.row-1-tit2 {
  font-size: 36px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin: 20px 0 0 8.33%;
}
.row-1-break {
  width: 40px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  margin: 46px 0 0 8.33%;
}
.row-1-con {
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 32px;
  margin: 46px 0 0 8.33%;
}
.row-2 {
    height: 2343px;
    background: rgba(0, 0, 0, 0.85);
}
.row-2-con {
  width: 64%;
  font-size: 18px;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin: 61px 0 0 8.33%;
}
.row-2-icon{
    width: 50px;
    height: 50px;
    margin: 0 auto;
    margin-top: 120px;
    background-image: url(../icon/design-icon1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.row-2-text{
    width: 207px;
    height: 40px;
    font-size: 28px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #ffffff;
    line-height: 40px;
    margin-top: 120px;
}
.row-2-box{
    width: 1202px;
    height: 1468px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.row-2-tit{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.head{
    display: flex;
    flex-direction: row;
    margin-left: 80px;
}
.portrait{
    width: 64px;
    height: 64px;
    background: #FFFFFF;
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #5D7FFF;
    border-radius: 40px;
    margin-top: 120px;
    margin-left: 201px;
    line-height: 64px;
    text-align: center;
}
.text-box{
    display: flex;
    flex-direction: column;
}
.head-name{
    width: 91px;
    height: 30px;
    font-size: 22px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FAFAFA;
    line-height: 30px;
    margin-top: 120px;
    margin-left: 20px;
}
.head-team{
    width: 152px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #5D7FFF;
    line-height: 22px;
    margin: 10px 0 0 20px;
}
.row-2-close{
    width: 40px;
    height: 40px;
    margin-top: 120px;
    margin-right: 290px;
    background-image: url(../icon/close.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.row-3{
    width: 100%;
    height: 1750px;
    display: flex;
    flex-direction: row;
    margin-top: 30px;
}
.left{
    width: 64px;
    height: 64px;
    background-image: url(../icon/detail-left.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    margin-left: 74px;
    margin-top: 550px;
}
.right{
    width: 64px;
    height: 64px;
    background-image: url(../icon/detail-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
    margin-left: 1554px;
    margin-top: 550px;
}
.row-4{
    display: flex;
    flex-direction: row;
    margin-top: 40px;
}
.row-4-btn1{
    position: relative;
    width: 80px;
    height: 80px;
    left: 40%;
    background-image: url(../icon/share.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.forward{
    width: 24px;
    height: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-image: url(../icon/forward.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.row-4-btn2{
    position: relative;
    width: 80px;
    height: 80px;
    left: 45%;
    background-image: url(../icon/zan.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.row-4-btn3{
    display: flex;
    flex-direction: row;
    width: 179px;
    height: 73px;
    border-radius: 37px;
    border: 3px solid #0030E4;
    margin-left: 50%;
    color: #FFFFFF;
    text-align: center;
    line-height: 73px;
    cursor: pointer;
}
.btn-icon{
    width: 22px;
    height: 22px;
    background-image: url(../icon/design-email.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 26px 10px 0 35px;
}
.divide{
    width: 1279px;
    height: 2px;
    background: #FFFFFF;
    margin: 0 auto;
    margin-top: 128px;
}
.footer{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.footer-left{
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    margin-left: 292px;
    cursor: pointer;
}
.footer-text-left{
    width: 22px;
    height: 22px;
    background-image: url(../icon/detail-footer-left.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.footer-text{
    width: fit-content;
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #F8F8F9;
    line-height: 25px;
    margin: 0 20px;
}
.footer-text-right{
    width: 22px;
    height: 22px;
    background-image: url(../icon/detail-footer-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.footer-right{
    display: flex;
    flex-direction: row;
    margin-top: 60px;
    margin-right: 292px;
    cursor: pointer;
}
.image-box{
    position: absolute;
    width: 1279px;
    height: 1704px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
.img{
    width: 1279px;
    height: 568px;
}
.footers .gotop {
  text-align: center;
  position: fixed;
  right: 50px;
  bottom: 30px;
  cursor: pointer;
  color: #000000;
}
.footers-icon{
    width: 18px;
    height: 14px;
    background-image: url(../icon/footers-icon.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.gotop-box{
  color: #A1A3A4;
  width: 20px;
  text-align: center;
  word-wrap:break-word;
  letter-spacing: 20px;
  margin-left: 18px;
}
.footers-text{
  margin-left: 3px;
  margin-top: 10px;
}
/**移动端 */
.con-1{
  .con-1-box{
    display: flex;
    flex-direction: row;
  }
  .con-1__back{
    width: 16px;
    height: 16px;
    background-image: url(../icon/mobile/back.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 14px 0 0 16px;
  }
  .con-1__tit{
    position: absolute;
    width: 57px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 20px;
    top: 14px;
    left: 50%;
    transform: translate(-50%);
  }
}
.con-2{
  .con-2-row{
    display: flex;
    flex-direction: row;
    margin: 30px 0 0 24px;
  }
  .con-2__head{
    width: 48px;
    height: 48px;
    background-image: url(../icon/mobile/header.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-2-column{
    display: flex;
    flex-direction: column;
    margin-left: 16px;
  }
  .con-2__headtit{
    width: 159px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 20px;
    margin-top: 4px;
  }
  .con-2__headtit2{
    width: 113px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303133;
    line-height: 17px;
    margin-top: 4px;
  }
}
.con-4{
  margin-top: 11px;
  padding: 20px;
  .con-4__img{
    margin-top: 4px;
  }
}
.con-5{
  .con-5__talk{
    width: 40px;
    height: 40px;
    position: fixed;
    left: 14px;
    bottom: 30px;
    background-image: url(../icon/mobile/talk.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-5__forward{
    width: 40px;
    height: 40px;
    position: fixed;
    right: 80px;
    bottom: 30px;
    background-image: url(../icon/mobile/forward.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-5__praise{
    width: 40px;
    height: 40px;
    position: fixed;
    right: 18px;
    bottom: 30px;
    background-image: url(../icon/mobile/praise.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
}
.el-menu-demo{
  margin-top: 24px;
  margin-left: 30px;
}
/deep/.el-menu.el-menu--horizontal{
    border-bottom: 0px solid #ffffff;
}
</style>
