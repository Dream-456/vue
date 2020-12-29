<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1-tit">设计平台</div>
        <div class="row-1-tit2">专注用户体验 持续迭代优化</div>
        <div class="row-1-break"></div>
        <div class="row-1-con">
          开放、包容、共享，安全、高效、理性，前瞻、生态、共生。基于人机交互、<br/>
          操作逻辑，界面美观的整体设计，不仅要考虑目前终端的呈现效果，也为未来<br/>
          多终端多模式呈现预留迭代的可能。设计规范制定涵盖全场景模式，灵活可扩<br/>
          展，适应不断成长和变化的业务诉求。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2-icon"></div>
        <div class="row-2-text">资产云 设计团队</div>
        <div class="row-2-box">
            <div class="left">
                <div class="left-tit">杭州电子科技大学</div>
                <div class="left-tit2">杭电UX&UI设计团队</div>
                <div class="left-break"></div>
                <div class="left-con">
                杭电UX&UI设计团队来自杭州电子科技大学人文艺术与数字媒体学院，团队由艺术设计系教授带领，青年骨干教师主力，优秀研究生、本科生团队组成。团队具有多年互联网产品设计经验，并在融媒体设计、品牌设计、互动媒体等视觉设计领域业有建树。
                </div>
                <div class="left-box">
                    <div class="left-right-box">
                      <div class="left-right"></div>
                    </div>
                    <div class="left-btn1" @click="gotoCase">设计案例</div>
                    <div class="left-btn2">
                        <div class="btn-icon"></div>
                        联系我们
                    </div>
                </div>
            </div>
            <div class="row-2-break"></div>
            <div class="right">
                <div class="left-tit">中国美术学院</div>
                <div class="left-tit2">政务应用设计研究所</div>
                <div class="left-break"></div>
                <div class="left-con">
                政务应用设计研究所由中国美术学院创新设计学院支撑和管理，2020年将随创新设计学院搬迁至良渚新校区。“政务应用设计研究所”将以“东方美学—创新创造—中国形象—未来标准”为学术理想和社会担当，着力成为国际一流研究院所。
                </div>
                <div class="left-box">
                    <div class="left-right-box">
                      <div class="left-right"></div>
                    </div>
                    <div class="right-btn1">
                        设计案例
                    </div>
                </div>
            </div>
        </div>
      </el-row>
      <el-row class="row-3">
        <p class="row-3-tit">2.1</p>
        <p class="row-3-text">PC端 应用系统 界面设计</p>
        <p class="row-3-text2">
            团队为资产云开放协同创新中心成员，服务于资产云管理云原生应用开发平台PC端UX&UI设计，团队精通于G端B端C端应用系统界面设计，尤为擅长中台应用界面设计及后台风格应用系统界面设计。
        </p>
        <div class="row-3-bg1"></div>
        <div class="row-3-bg2"></div>
        <div class="row-3-pc"></div>
        <div class="row-3-bg3"></div>
        <div class="row-3-right"></div>
      </el-row>
      <el-row class="row-4">
        <p class="row-4-tit">2.2</p>
        <p class="row-4-text">移动端 应用 界面设计</p>
        <p class="row-4-text2">
            团队拥有多样化的移动端交互设计及界面设计经验及对于互联网产品开发的见解。团队长期保持对移动端互联网产品UX&UI的最新设计趋势敏锐感知，并加以适当应用。
        </p>
        <div class="row-4-mobile"></div>
        <div class="row-4-bg1"></div>
        <div class="row-4-mobilebg"></div>
        <div class="row-4-right"></div>
      </el-row>
      <el-row class="row-5">
        <p class="row-5-tit">2.3</p>
        <p class="row-5-text">WEB端 网页设计</p>
        <p class="row-5-text2">
            团队为资产云开放协同创新中心成员，服务于资产云管理云原生应用开发平台PC端UX&UI设计，团队精通于G端B端C端应用系统界面设计，尤为擅长中台应用界面设计及后台风格应用系统界面设计。
        </p>
        <div class="row-5-right"></div>
        <div class="row-5-bg1"></div>
        <div class="row-5-bg2"></div>
        <div class="row-5-pc"></div>
        <div class="row-5-bg3"></div>
      </el-row>
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">设计平台</div>
        <div class="con-1__tit2">专注用户体验 持续迭代优化</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          开放、包容、共享，安全、高效、理性，前瞻、生态、共生。基于人机交互、操作逻辑，界面美观的整体设计，不仅要考虑目前终端的呈现效果，也为未来多终端多模式呈现预留迭代的可能。设计规范制定涵盖全场景模式，灵活可扩展，适应不断成长和变化的业务诉求。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__icon"></div>
        <div class="con-2__icontext">资产云 设计团队</div>
        <div class="con-2-box">
          <div class="con-2__tit">中国美术学院</div>
          <div class="con-2__tit2">政务应用设计研究所</div>
          <div class="con-2__break"></div>
          <div class="con-2__con">政务应用设计研究所由中国美术学院创新设计学院支撑和管理，2020年将随创新设计学院搬迁至良渚新校区。“政务应用设计研究所”将以“东方美学—创新创造—中国形象—未来标准”为学术理想和社会担当，着力成为国际一流研究院所。</div>
          <div class="con-2__box">
            <div class="con-2-rightbox">
              <div class="con-2__righticon"></div>
            </div>
            <div class="con-2__icon1" @click="gotoCase">设计案例</div>
            <div class="con-2-iconbox">
              <div class="con-2__icon2"></div>
                联系我们
              </div>
          </div>
        </div>
        <div class="con-2__footerbreak"></div>
      </el-row>
      <el-row class="con-3">
        <div class="con-3-box">
          <div class="con-3__tit">杭州电子科技大学</div>
          <div class="con-3__tit2">杭电UX&UI设计团队</div>
          <div class="con-3__break"></div>
          <div class="con-3__con">杭电UX&UI设计团队来自杭州电子科技大学人文艺术与数字媒体学院，团队由艺术设计系教授带领，青年骨干教师主力，优秀研究生、本科生团队组成。团队具有多年互联网产品设计经验，并在融媒体设计、品牌设计、互动媒体等视觉设计领域业有建树。</div>
          <div class="con-3__box">
            <div class="con-3-rightbox">
              <div class="con-3__righticon"></div>
            </div>
            <div class="con-3__icon1" @click="gotoCase">设计案例</div>
          </div>
        </div>
        <div class="con-3__footerbreak"></div>
      </el-row>
      <el-row class="con-4">
        <div class="con-4__tit">
          2.1<br /> PC端 应用系统 界面设计
        </div>
        <div class="con-4__tit2">
          团队为资产云开放协同创新中心成员，服务于资产云管理云原生应用开发平台PC端UX&UI设计，团队精通于G端B端C端应用系统界面设计，尤为擅长中台应用界面设计及后台风格应用系统界面设计。
        </div>
        <div class="con-4-bg2"></div>
        <div class="con-4-pc"></div>
        <div class="con-4-right"></div>
      </el-row>
      <el-row class="con-5">
        <div class="con-5__tit">
          2.2<br /> 移动端 应用 界面设计
        </div>
        <div class="con-5__tit2">
          团队拥有多样化的移动端交互设计及界面设计经验及对于互联网产品开发的见解。团队长期保持对移动端互联网产品UX&UI的最新设计趋势敏锐感知，并加以适当应用。
        </div>
        <div class="con-5-bg2"></div>
        <div class="con-5-mobile"></div>
        <div class="con-5-right"></div>
      </el-row>
      <el-row class="con-6">
        <div class="con-6__tit">
          2.3<br /> WEB端 网页设计
        </div>
        <div class="con-6__tit2">
          团队为资产云开放协同创新中心成员，服务于资产云管理云原生应用开发平台PC端UX&UI设计，团队精通于G端B端C端应用系统界面设计，尤为擅长中台应用界面设计及后台风格应用系统界面设计。
        </div>
        <div class="con-6-bg2"></div>
        <div class="con-6-web"></div>
        <div class="con-6-right"></div>
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
  methods:{
      gotoCase(){
          this.$router.push('/designCase')
      },
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
  height: 824px;
  background: #FAFAFA;
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
    margin-top: 32px;
}
.row-2-box{
    display: flex;
    flex-direction: row;
}
.left {
    width: 49%;
    height: 582px;
}
.right{
    width: 49%;
    height: 582;
}
.left-tit{
    width: 132px;
    height: 22px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    line-height: 22px;
    margin: 7.5% 0 0 30%;
}
.left-tit2 {
    width: 400px;
    height: 112px;
    font-size: 40px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 56px;
    letter-spacing: 1px;
    margin: 20px 0 0 30%;
}
.left-break {
  width: 40px;
  height: 6px;
  background:#0030E4;
  margin: 10px 0 0 30%;
}
.left-con {
    width: 492px;
    height: 128px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #808695;
    line-height: 32px;
    margin: 46px 0 0 30%;
}
.left-box{
    display: flex;
    flex-direction: row;
}
.left-right-box{
  position: relative;
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 48, 228, 0.3);
  border-radius: 50%;
  margin: 46px 0 0 30%;
  cursor: pointer;
}
.left-right{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 16px;
    height: 16px;
    background-image: url(../icon/right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.left-btn1{
    width: 97px;
    height: 38px;
    border-radius: 19px;
    text-align: center;
    line-height: 38px;
    border: 2px solid #0030E4;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #0030E4;
    margin: 46px 0 0 4.33%;
    cursor: pointer;
}
.left-btn2{
    display: flex;
    flex-direction: row;
    width: 127px;
    height: 38px;
    background: #0030E4;
    text-align: center;
    border-radius: 20px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 38px;
    margin: 46px 0 0 4.33%;
    cursor: pointer;
}
.btn-icon{
    width: 22px;
    height: 22px;
    background-image: url(../icon/design-email.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 10px 10px 0 15px;
    cursor: pointer;
}
.row-2-break{
    width: 2px;
    height: 282px;
    background-color: #DCDEE2;
    margin-top: 134px;
}
.right-btn1{
    width: 97px;
    height: 38px;
    background: #0030E4;
    text-align: center;
    border-radius: 20px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 38px;
    margin: 46px 0 0 4.33%;
    cursor: pointer;
}
.row-3{
    position: relative;
    width: 100%;
    height: 860px;
    background: #FAFAFA;
}
.row-3-tit{
    position: absolute;
    left: 14%;
    top: 296px;
    width: 222px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-3-text{
    position: absolute;
    left: 14%;
    top: 330px;
    width: 330px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-3-text2{
    position: absolute;
    left:18%;
    top:462px;
    width: 214px;
    height: 168px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 28px;
    z-index: 2;
}
.row-3-bg1{
    position: absolute;
    width: 168px;
    height: 168px;
    left:40%;
    top: 90px;
    background-image: url(../icon/design-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.row-3-pc{
    position: absolute;
    left: 50%;
    top:  134px;
    width: 720px;
    height: 421px;
    background-image: url(../icon/design-pc.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
}
.row-3-bg2{
    position: absolute;
    left: 18%;
    top:  268px;
    width: 200px;
    height: 150px;
    background-image: url(../icon/design-bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.row-3-bg3{
    position: absolute;
    left: 68%;
    top:  281px;
    width: 456px;
    height: 456px;
    background-image: url(../icon/design-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.row-3-right{
    position: absolute;
    left:26%;
    top: 680px;
    width: 33px;
    height: 24px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.row-4{
    position: relative;
    width: 100%;
    height: 860px;
    background: #FAFAFA;
}
.row-4-tit{
    position: absolute;
    left: 60%;
    top: 282px;
    width: 222px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-4-text{
    position: absolute;
    left: 60%;
    top: 320px;
    width: 300px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-4-text2{
    position: absolute;
    left:62%;
    top:448px;
    width: 214px;
    height: 168px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 28px;
    z-index: 2;
}
.row-4-mobile{
    position: absolute;
    left: 55%;
    top:  254px;
    width: 477px;
    height: 150px;
    background-image: url(../icon/design-mobile.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.row-4-bg1{
    position: absolute;
    left: 113px;
    top:  450px;
    width: 250px;
    height: 250px;
    background-image: url(../icon/design-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.row-4-mobilebg{
    position: absolute;
    left: 201px;
    top:  206px;
    width: 506px;
    height: 479px;
    background-image: url(../icon/mobile.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
}
.row-4-right{
    position: absolute;
    left: 70%;
    top: 647px;
    width: 33px;
    height: 23px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.row-5{
    position: relative;
    width: 100%;
    height: 860px;
    background: #FAFAFA;
}
.row-5-tit{
    position: absolute;
    left: 14%;
    top: 296px;
    width: 222px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-5-text{
    position: absolute;
    left: 14%;
    top: 330px;
    width: 280px;
    font-size: 30px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    z-index: 2;
}
.row-5-text2{
    position: absolute;
    left:16%;
    top:462px;
    width: 214px;
    height: 168px;
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 28px;
    z-index: 2;
}
.row-5-right{
    position: absolute;
    left:24%;
    top: 683px;
    width: 33px;
    height: 24px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
}
.row-5-bg1{
    position: absolute;
    width: 168px;
    height: 168px;
    left:40%;
    top: 90px;
    background-image: url(../icon/design-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
.row-5-pc{
    position: absolute;
    left: 50%;
    top:  134px;
    width: 720px;
    height: 421px;
    background-image: url(../icon/design-pc.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
}
.row-5-bg2{
    position: absolute;
    left: 16%;
    top:  268px;
    width: 350px;
    height: 150px;
    background-image: url(../icon/Web.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
.row-5-bg3{
    position: absolute;
    left: 68%;
    top:  281px;
    width: 456px;
    height: 456px;
    background-image: url(../icon/design-bg1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
}
/**移动端 */
.con-1 {
  height: 494px;
  background-image: url(../icon/mobile/design-bg.png);
  color: rgba(255, 255, 255, 1);
}
.con-1__tit,
.con-1__tit2 {
  color: rgba(255, 255, 255, 1);
}
.con-1__tit {
    font-size: 27px;
    font-weight: bold;
    position: absolute;
    margin: 50px 0 0 8.33%;
}
.con-1__tit2 {
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  margin: 100px 0 0 8.33%;
}
.con-1__break {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  margin: 140px 0 0 8.33%;
}
.con-1__con {
  width: 48%;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin: 160px 0 0 8.33%;
}
.con-2 {
  .con-2-box{
    width: 327px;
    margin: 0 0 0 50%;
    transform: translate(-50%);
  }
  .con-2__icon{
    width: 24px;
    height: 24px;
    margin: 0 auto;
    margin-top: 24px;
    background-image: url(../icon/design-icon1.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-2__icontext{
    width: 104px;
    height: 20px;
    font-size: 14px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 20px;
    margin: 0 auto;
    margin-top: 10px;
  }
  .con-2__tit{
    width: 99px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #0030E4;
    line-height: 17px;
    margin: 32px 0 0 0;
  }
  .con-2__tit2{
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 25px;
    margin: 16px 0 0 0;
  }
  .con-2__break{
    width: 15px;
    height: 2px;
    background:#0030E4;
  }
  .con-2__con{
    width: 327px;
    height: 100px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #808695;
    line-height: 20px;
    margin: 10px 0 0 0;
  }
  .con-2__box{
    display: flex;
    flex-direction: row;
  }
  .con-2-rightbox{
    position: relative;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(0, 48, 228, 0.3);
    border-radius: 50%;
    margin: 24px 0 0 0;
    cursor: pointer;
  }
  .con-2__righticon{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 16px;
    height: 16px;
    background-image: url(../icon/right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-2__icon1{
    width: 80px;
    height: 32px;
    border-radius: 19px;
    text-align: center;
    line-height: 32px;
    border: 1px solid #0030E4;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #0030E4;
    margin: 24px 0 0 16px;
    cursor: pointer;
  }
  .con-2-iconbox{
    display: flex;
    flex-direction: row;
    width: 90px;
    height: 32px;
    background: #0030E4;
    text-align: center;
    border-radius: 20px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 32px;
    margin: 24px 0 0 16px;
    cursor: pointer;
  }
  .con-2__icon2{
    width: 16px;
    height: 16px;
    background-image: url(../icon/design-email.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin: 8px 10px 0 8px;
    cursor: pointer;
  }
  .con-2__footerbreak{
    width: 281px;
    height: 2px;
    margin: 0 auto;
    margin-top: 31px;
    background: #DCDEE2;
  }
}
.con-3{
  .con-3-box{
    width: 327px;
    margin: 0 0 0 50%;
    transform: translate(-50%);
  }
  .con-3__tit{
    width: 99px;
    height: 17px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #0030E4;
    line-height: 17px;
    margin: 32px 0 0 0;
  }
  .con-3__tit2{
    width: 180px;
    height: 50px;
    font-size: 18px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #222222;
    line-height: 25px;
    margin: 16px 0 0 0;
  }
  .con-3__break{
    width: 15px;
    height: 2px;
    background:#0030E4;
  }
  .con-3__con{
    width: 327px;
    height: 60px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #808695;
    line-height: 20px;
    margin: 10px 0 0 0;
  }
  .con-3__box{
    display: flex;
    flex-direction: row;
  }
  .con-3-rightbox{
    position: relative;
    width: 32px;
    height: 32px;
    border: 1px solid rgba(0, 48, 228, 0.3);
    border-radius: 50%;
    margin: 24px 0 0 0;
    cursor: pointer;
  }
  .con-3__righticon{
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
    width: 16px;
    height: 16px;
    background-image: url(../icon/right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .con-3__icon1{
    width: 80px;
    height: 32px;
    border-radius: 19px;
    text-align: center;
    line-height: 32px;
    background: #0030E4;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #ffffff;
    margin: 24px 0 0 16px;
    cursor: pointer;
  }
  .con-3__footerbreak{
    width: 281px;
    height: 2px;
    margin: 0 auto;
    margin-top: 31px;
    background: #DCDEE2;
  }
}
.con-4{
  position: relative;
  height: 450px;
  .con-4__tit{
    position: absolute;
    width: 327px;
    height: 50px;
    left: 50%;
    transform: translate(-50%);
    top: 47px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    line-height: 22px;
    z-index: 2;
  }
  .con-4__tit2{
    position: absolute;
    width: 327px;
    height: 108px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 20px;
    left: 50%;
    transform: translate(-50%);
    top: 117px;
  }
  .con-4-bg2{
    position: absolute;
    left: 30%;
    top:  30px;
    width: 90px;
    height: 80px;
    background-image: url(../icon/design-bg2.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
  }
  .con-4-pc{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top:  233px;
    width: 289px;
    height: 211px;
    background-image: url(../icon/mobile/design-pc.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
  }
  .con-4-right{
    position: absolute;
    left:329px;
    top: 237px;
    width: 22px;
    height: 16px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
.con-5{
  position: relative;
  height: 450px;
  .con-5__tit{
    position: absolute;
    width: 327px;
    height: 50px;
    left: 50%;
    transform: translate(-50%);
    top: 47px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    line-height: 22px;
    z-index: 2;
  }
  .con-5__tit2{
    position: absolute;
    width: 327px;
    height: 108px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 20px;
    left: 50%;
    transform: translate(-50%);
    top: 117px;
  }
  .con-5-right{
    position: absolute;
    left:329px;
    top: 195px;
    width: 22px;
    height: 16px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
  .con-5-mobile{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top:  233px;
    width: 289px;
    height: 211px;
    background-image: url(../icon/mobile/design-mobile.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
  }
  .con-5-bg2{
    position: absolute;
    left: 20%;
    top:  30px;
    width: 230px;
    height: 80px;
    background-image: url(../icon/design-mobile.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
  }
}
.con-6{
  position: relative;
  height: 450px;
  .con-6__tit{
    position: absolute;
    width: 327px;
    height: 50px;
    left: 50%;
    transform: translate(-50%);
    top: 47px;
    font-size: 16px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #0030E4;
    line-height: 22px;
    z-index: 2;
  }
  .con-6__tit2{
    position: absolute;
    width: 327px;
    height: 108px;
    font-size: 12px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #0030E4;
    line-height: 20px;
    left: 50%;
    transform: translate(-50%);
    top: 117px;
  }
  .con-6-bg2{
    position: absolute;
    left: 22%;
    top:  30px;
    width: 156px;
    height: 80px;
    background-image: url(../icon/Web.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 1;
  }
  .con-6-web{
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top:  233px;
    width: 289px;
    height: 211px;
    background-image: url(../icon/mobile/design-web.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    z-index: 2;
  }
  .con-6-right{
    position: absolute;
    left:329px;
    top: 237px;
    width: 22px;
    height: 16px;
    background-image: url(../icon/design-right.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
  }
}
</style>
