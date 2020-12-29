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
        <div class="row-2-exit" @click="back">
          <div class="exit-left"></div>
          返回
        </div>
        <div class="row-2-text">设计案例</div>
        <div class="row-2-box">
            <div v-for="(item,index) in row" :key="index" class="img-box" @mouseover="mouseOver(item)" @mouseleave="mouseLeave(item)">
                <el-image
                class="img"
                :src="item.url"></el-image>
                <div class="row-2-footer" v-show="item.show == false">
                    Minim Shop
                </div>
                <div class="row-2-footer2" v-show="item.show == true">
                    <p class="text">THWORKS</p>
                    <div class="btn1" @click="gotoDetails">
                        <div class="btn-icon1"></div>
                        预览
                    </div>
                    <div class="btn2">
                        <div class="btn-icon2"></div>
                        下载
                    </div>
                </div>
            </div>
        </div>
      </el-row>
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
        <div class="con-2-box"
          v-for="(item,index) in row"
          :key="index"
          @click="gotoDetails"
          >
          <el-image
            class="con-2__img"
            :src="item.url"
          ></el-image>
          <div class="con-2__text">Minim Shop</div>
        </div>
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
        isShow: false,
        row:[
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            },
            {
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                show: false
            }
        ],
        activeIndex: '2', // 默认的导航
        index: '1', // 选择的导航
      }
    },
    methods:{
        mouseOver(item){
            item.show = true
        },
        mouseLeave(item){
            item.show = false
        },
        back(){
          this.$router.go(-1)
        },
        gotoDetails(){
          this.$router.push('/designDetails')
        },
        handleSelect(key, keyPath) {
          console.log('key',key, '',keyPath);
          this.index = key
        }
    }
};
</script>

<style lang="scss" scoped>
/deep/.el-menu.el-menu--horizontal{
    border-bottom: 0px solid #ffffff;
}
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
  height: 1707px;
  background: #FAFAFA;
}
.row-2-exit{
  width: 94px;
  height: 32px;
  background: #0030E4;
  border-radius: 19px;
  font-size: 14px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 32px;
  text-align: center;
  display: flex;
  flex-direction: row;
  cursor: pointer;
  margin:40px 0 0 236px;
}
.exit-left{
  width: 13px;
  height: 13px;
  margin: 10px 10px 0 10px;
  background-image: url(../icon/detail-footer-left.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
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
    color: #222222;
    line-height: 40px;
    margin: 0 auto;
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
.img-box{
    width: 360px;
    height: 412px;
    margin: 0 10px;
    background: #FFFFFF;
    border-radius: 4px;
}
.img{
    width: 320px;
    height: 340px;
    margin-left: 20px;
    margin-top: 10px;
}
.row-2-footer{
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #314659;
    margin: 20px;
}
.row-2-footer2{
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 64px;
    background: #0030E4;
    border-radius: 0px 0px 4px 4px;
}
.text{
    width: 73px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 64px;
    margin-left: 20px;
}
.btn1{
    display: flex;
    flex-direction: row;
    width: 84px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 10px 10px 0 40px;
    text-align: center;
    line-height: 35px;
    color: #ffffff;
    cursor: pointer;
}
.btn2{
    display: flex;
    flex-direction: row;
    width: 84px;
    height: 35px;
    border-radius: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    margin: 10px 10px 0 10px;
    text-align: center;
    line-height: 35px;
    color: #ffffff;
    cursor: pointer;
}
.btn-icon1{
    width: 16px;
    height: 16px;
    background-image: url(../icon/actions.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 10px 10px 0 15px;
    cursor: pointer;
}
.btn-icon2{
    width: 16px;
    height: 16px;
    background-image: url(../icon/download.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 10px 10px 0 15px;
    cursor: pointer;
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
  margin-top: 20px;
  .con-2-box{
    position: relative;
    width: 359px;
    height: 250px;
    left: 50%;
    transform: translate(-50%);
  }
  .con-2__img{
    position: absolute;
    width: 330px;
    height: 205px;
    top: 10px;
    left: 50%;
    transform: translate(-50%);
  }
  .con-2__text{
    position: absolute;
    width: 150px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #314659;
    line-height: 20px;
    left: 15px;
    top: 220px;
  }
}
</style>
