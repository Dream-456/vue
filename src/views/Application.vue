<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">应用平台</div>
        <div class="row-1__tit2">多云 聚合 生态</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          利用云原生跨平台技术，对接底层各类云资源。面向组织和用户聚合各类云服务。<br />支持对云原生应用的全生命周期管理。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2-left">
          <div class="row-2-tit">发现</div>
          <ul class="row-2-ul">
            <div class="row-2-icon"><li class="app-icon1"></li><li class="row-2-li">官方推荐</li></div>
            <div class="row-2-icon"><li class="app-icon2"></li><li class="row-2-li">最新上架</li></div>
            <div class="row-2-icon"><li class="app-icon3"></li><li class="row-2-li">行业典范</li></div>
          </ul>
          <div class="row-2-tit">分类</div>
          <ul class="row-2-ul">
            <div class="row-2-icon"><li class="app-icon4"></li><li class="row-2-li">大数据应用</li></div>
            <div class="row-2-icon"><li class="app-icon5"></li><li class="row-2-li">资产管理</li></div>
            <div class="row-2-icon"><li class="app-icon6"></li><li class="row-2-li">财务管理</li></div>
            <div class="row-2-icon"><li class="app-icon7"></li><li class="row-2-li">报表应用</li></div>
            <div class="row-2-icon"><li class="app-icon8"></li><li class="row-2-li">人事管理</li></div>
            <div class="row-2-icon"><li class="app-icon9"></li><li class="row-2-li">办公应用</li></div>
          </ul>
        </div>
        <div class="row-2-right">
          <div class="search">
            <el-input
              class="row-2-search"
              placeholder="搜索应用名称"
              prefix-icon="el-icon-search"
              v-model="input2">
            </el-input>
          </div>
          <!-- <div class="row-right-box">
            <div class="row-right-bg" v-for="(item,index) in row" :key="index">
              <el-image
                  class="img"
                  :src="item.url">
              </el-image>
              <div class="divide"></div>
              <div class="right-tit">资产监控</div>
              <div class="right-text">这是一段简要的介绍，这是一段简要的介绍，这是一段简要的介绍，这是一段简要的介绍，</div>
            </div>
          </div> -->
          <div class="row-right-tit">最新上架</div>
          <app-goods></app-goods>
        </div>
      </el-row>
      <el-row class="row-4" type="flex" justify="center">
        <el-col class="row-4-col" :span="12">
          <div>
            <span class="row-4__tit">一站式</span>
            <span class="row-4__con">应用全生命周期管理</span>
          </div>
          <el-container class="row-4-col-1">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-1.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">应用全生命周期管理</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  为应用架构、开发、测试、上架、版本等应用管理，一键部署，升级、扩容、更新、下线等运维管理，提供全栈工具链，无缝对接各类底层资源。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="row-4-col-2">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-2.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">高度可扩展和可插拔</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  应用平台可通过添加插件的方式支持新的各类云服务商，或者是新的应用类型，或者是新的打包规范，并可随时创建和删除。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="row-4-col-3">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-3.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">运营管理支持</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  平台为开发者提供管理和运维、计量计费、查看报表及统计信息等功能，开发好的应用可以放到公共市场，或者专有市场上去售卖。
                </div>
              </el-main>
            </el-container>
          </el-container>
        </el-col>
        <el-col class="row-4-col row-4-col2" :span="12">
          <div>
            <span class="row-4__tit" style="color:#11D5FF;margin-left:23px;"
              >多云</span
            >
            <span class="row-4__con">多云平台多应用类型支持</span>
          </div>
          <el-container class="row-4-col-1">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-4.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">多云平台支持</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  支持多云平台，如阿里云、华为云、腾讯云、百度云、QingCloud、Kubernetes、OpenStack、VMWare
                  等, 可以是公有云、私有云和混合云。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="row-4-col-2">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-5.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">多应用类型支持</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  支持多种应用程序的类型：传统应用、微服务应用、SaaS
                  应用、Serverless
                  应用等等。解耦应用和底层资源，避免供应商绑定。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="row-4-col-3">
            <el-aside width="112px">
              <img class="row-4-img" src="../icon/app-6.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="row-4-col__tit">多打包规范支持</div>
              </el-header>
              <el-main>
                <div class="row-4-col__con">
                  应用配置包支持各类应用打包规范，传统应用、容器应用
                  、Kubernetes 原生 yaml 规范、Kubernetes 包管理器 Helm
                  规范等等。
                </div>
              </el-main>
            </el-container>
          </el-container>
        </el-col>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">应用平台</div>
        <div class="con-1__tit-2">多云 聚合 生态</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          利用云原生跨平台技术，对接底层各类云资源。面向组织和用户聚合各类云服务。支持对云原生应用的全生命周期管理。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__tit">云原生时代的应用平台</div>
        <div class="con-2__con">
          通过应用平台向数万家行政事业单位快速部署政务应用和展示您的产品和服务，提升品牌价值，通过开放协同新模式帮助您取得商业成功。
        </div>
        <div class="con-2__btn">
          <a
            href="http://platform.assetcloud.org.cn/"
            target="_blank"
            class="con-link-enterapp"
          >
            进入应用平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <el-row class="con-3">
        <div class="con-3__title">资产云生态应用</div>
        <div class="con-3__con">
          <a
            href="https://app.zcygov.cn"
            target="_blank"
            >点击了解详情</a
          >
        </div>
      </el-row>
      <div class="con-4">
        <div class="con-4-col">
          <div>
            <span class="con-4__tit">一站式</span>
            <span class="con-4__con">应用全生命周期管理</span>
          </div>
          <el-container class="con-4-col-1">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-1.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">应用全生命周期管理</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  为应用架构、开发、测试、上架、版本等应用管理，一键部署，升级、扩容、更新、下线等运维管理，提供全栈工具链，无缝对接各类底层资源。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="con-4-col-2">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-2.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">高度可扩展和可插拔</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  应用平台可通过添加插件的方式支持新的各类云服务商，或者是新的应用类型，或者是新的打包规范，并可随时创建和删除。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="con-4-col-3">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-3.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">运营管理支持</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  平台为开发者提供管理和运维、计量计费、查看报表及统计信息等功能，开发好的应用可以放到公共市场，或者专有市场上去售卖。
                </div>
              </el-main>
            </el-container>
          </el-container>
        </div>
        <div class="con-4-col con-4-col">
          <div>
            <span class="con-4__tit" style="color:#11D5FF;">多云</span>
            <span class="con-4__con">多云平台多应用类型支持</span>
          </div>
          <el-container class="con-4-col-1">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-4.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">多云平台支持</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  支持多云平台，如阿里云、华为云、腾讯云、百度云、QingCloud、Kubernetes、OpenStack、VMWare
                  等, 可以是公有云、私有云和混合云。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="con-4-col-2">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-5.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">多应用类型支持</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  支持多种应用程序的类型：传统应用、微服务应用、SaaS
                  应用、Serverless
                  应用等等。解耦应用和底层资源，避免供应商绑定。
                </div>
              </el-main>
            </el-container>
          </el-container>
          <el-container class="con-4-col-3">
            <el-aside width="80px">
              <img class="con-4-col__img" src="../icon/app-6.png" alt />
            </el-aside>
            <el-container>
              <el-header>
                <div class="con-4-col__tit">多打包规范支持</div>
              </el-header>
              <el-main>
                <div class="con-4-col__con">
                  应用配置包支持各类应用打包规范，传统应用、容器应用
                  、Kubernetes 原生 yaml 规范、Kubernetes 包管理器 Helm
                  规范等等。
                </div>
              </el-main>
            </el-container>
          </el-container>
        </div>
      </div>
      <mFootBar></mFootBar>
    </div>
  </div>
</template>

<script>
import FootBar from "../components/FootBar";
import mTopBar from "../components/mTopBar";
import mFootBar from "../components/mFootBar";
import appGoods from "../components/appGoods";

export default {
  name: "app",
  components: {
    FootBar,
    mTopBar,
    mFootBar,
    appGoods
  },
  data(){
    return{
      input2: '',
    }
  },
  methods:{}
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/app-bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 31%;
  color: rgba(255, 255, 255, 1);

  &__tit {
    font-size: 60px;
    font-weight: bold;
    margin: 7.5% 0 0 8.33%;
  }
  &__tit2 {
    font-size: 36px;
    font-weight: 400;
    margin: 20px 0 0 8.33%;
  }
  &__break {
    width: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 1);
    margin: 46px 0 0 8.33%;
  }
  &__con {
    width: 650px;
    height: 82px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    margin: 46px 0 0 8.33%;
  }
}

.row-2 {
  height: 1168px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #FAFAFA;
  .row-2-left {
    height: 100%;
  }
  .row-2-right{
    width: 1200px;
    margin-left: 140px;
  }
  .row-2-tit{
    width: 44px;
    height: 29px;
    font-size: 21px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: bold;
    color: #303133;
    line-height: 29px;
    margin-top: 32px;
  }
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
  .row-2-icon{
    display: flex;
    flex-direction: row;
    margin-top: 32px;
  }
  .row-2-icon:hover{
    .row-2-li{
      color: #154AD8;
    }
    .app-icon1{
      background-image: url(../icon/application/app-hover-icon1.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon2{
      background-image: url(../icon/application/app-hover-icon2.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon3{
      background-image: url(../icon/application/app-hover-icon3.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon4{
      background-image: url(../icon/application/app-hover-icon4.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon5{
      background-image: url(../icon/application/app-hover-icon5.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon6{
      background-image: url(../icon/application/app-hover-icon6.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon7{
      background-image: url(../icon/application/app-hover-icon7.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon8{
      background-image: url(../icon/application/app-hover-icon8.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
    .app-icon9{
      background-image: url(../icon/application/app-hover-icon9.svg);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .row-2-ul {
    margin: 30px 0 0 8.75%;
  }
  .row-2-li{
    width: 100px;
    height: 25px;
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #303133;
    line-height: 35px;
    margin-left: 13px;
    cursor: pointer;
  }
  
  .app-icon1{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon1.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon2{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon2.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon3{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon3.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon4{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon4.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon5{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon5.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon6{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon6.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon7{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon7.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon8{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon8.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .app-icon9{
    width: 32px;
    height: 32px;
    background-image: url(../icon/application/app-icon9.svg);
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .search{
    margin-top: 32px;
    /deep/.el-input__inner{
      width: 1110px;
      height: 48px;
      border-radius: 32px;
      border: 1px solid #979797;
      background: #FAFAFA;
    }
  }
  
  &__tit {
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    margin: 90px 0 0 8.33%;
  }
  &__con {
    width: 920px;
    height: 50px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 40px 0 0 8.33%;
  }

  &__btn {
    width: 180px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    margin: -80px 0 0 81.88%;
    text-align: center;
  }
  .link-enterapp {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

.row-3 {
  height: 400px;
  background-image: url(../icon/app-storeurl.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &__title {
    font-size: 60px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    line-height: 18px;
    margin: 90px 0 0 8.33%;
  }

  &__con {
    box-sizing: border-box;
    width: 300px;
    height: 80px;
    border: 4px solid white;
    margin: 100px 0 0 8.33%;

    & > a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 60px;
      font-size: 40px;
      color: rgb(255, 255, 255);
    }
  }
}

.row-4 {
  height: 700px;
  background: rgba(255, 255, 255, 1);
  margin-top: 92px;

  &__tit {
    width: 120px;
    height: 37px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(1, 50, 229, 1);
  }
  &__con {
    width: 215px;
    height: 23px;
    font-size: 24px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-left: 20px;
  }
  .row-4-col {
    margin-left: 8.39%;

    &__tit {
      width: 220px;
      height: 23px;
      font-size: 24px;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      position: absolute;
      margin-left: 14px;
    }
    &__con {
      width: 29.9%;
      height: 48px;
      font-size: 18px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 30px;
      position: absolute;
      margin-top: -41px;
      margin-left: 14px;
    }
  }
  .row-4-col-1 {
    margin-top: 65px;
  }
  .row-4-col-2 {
    margin-top: 70px;
  }
  .row-4-col-3 {
    margin-top: 67px;
  }
}

/**移动端 */
.con-1,
.con-2,
.con-4,
.con-4,
.con-5,
.con-6 {
  margin: 0;
  padding: 0;
  width: 100%;
}
.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/app-bg.jpg);
  color: rgba(255, 255, 255, 1);

  &__tit {
    font-size: 27px;
    font-weight: bold;
    position: absolute;
    margin: 50px 0 0 8.33%;
  }
  &__tit-2 {
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    margin: 100px 0 0 8.33%;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    margin: 140px 0 0 8.33%;
  }
  &__con {
    width: 50%;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin: 160px 0 0 8.33%;
  }
}

.con-2 {
  height: 280px;
  background: rgba(236, 243, 249, 1);

  &__tit {
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 30px;
    position: absolute;
    margin: 40px 0 0 8.23%;
  }
  &__con {
    width: 86%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 80px 0 0 8.23%;
  }

  &__btn {
    margin: 20px 0 0 36%;
    width: 120px;
    height: 40px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    text-align: center;
  }
  .con-link-enterapp {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}

.con-3 {
  height: 200px;
  background-image: url(../icon/app-storeurl.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &__title {
    font-size: 25px;
    font-weight: bold;
    color: rgb(255, 255, 255);
    line-height: 18px;
    margin: 40px 0 0 8.33%;
  }

  &__con {
    box-sizing: border-box;
    width: 120px;
    height: 40px;
    border: 2px solid white;
    margin: 50px 0 0 8.33%;

    & > a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 35px;
      font-size: 16px;
      color: rgb(255, 255, 255);
    }
  }
}
.con-4 {
  background: rgba(255, 255, 255, 1);
  margin-top: 10px;
  padding: 20px 0;

  &__tit {
    font-size: 28px;
    font-weight: bold;
    color: rgba(1, 50, 229, 1);
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-left: 20px;
  }

  .con-4-col {
    margin-left: 8.39%;
    padding: 20px 0;

    &__img {
      width: 60px;
      height: 60px;
      padding: 10%;
    }
    &__tit {
      font-size: 14px;
      font-weight: bold;
      color: rgba(34, 34, 34, 1);
      position: absolute;
    }
    &__con {
      width: 55%;
      font-size: 12px;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      line-height: 20px;
      position: absolute;
      margin-top: -41px;
    }
  }
  .con-4-col-1 {
    margin-top: 40px;
  }
  .con-4-col-2 {
    margin-top: 50px;
  }
  .con-4-col-3 {
    margin-top: 50px;
  }
}
/deep/.el-input__inner{
  font-size: 20px;
}
/deep/ .el-input--prefix .el-input__inner{
  padding-left: 60px;
  padding-top: 3px;
}
/deep/.el-icon-search{
  font-size: 22px;
  padding: 3px 10px;
}
</style>
