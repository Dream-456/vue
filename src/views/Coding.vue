<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">编码平台</div>
        <div class="row-1__tit2">在线编码 全链追溯</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          利用GS1全球统一编码标识标准体系，以条码符号对资
          产进行标识，实现对资产进行全生命周期唯一编码标识，构建资产标准化产品数据库，应用条码、射
          频等技术实现资产的自动采集识别，实现资产全流程动态监管。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2__tit">唯一编码 多维分类</div>
        <div class="row-2__con">
          面向用户及开发者的统一入口，提供编码对接的标准规范和平台所有开放的API。
          <br />包括编码标准、接入指南、维护机制等。
        </div>
        <div class="row-2__btn">
          <a
            href="http://doc.ictdog.com/web/#/10?page_id=13"
            target="_blank"
            class="link-entercoding"
          >
            查看API&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">编码平台</div>
        <div class="con-1__tit2">在线编码 全链追溯</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          利用GS1全球统一编码标识标准体系，以条码符号对资
          产进行标识，实现对资产进行全生命周期唯一编码标识，构建资产标准化产品数据库，应用条码、射
          频等技术实现资产的自动采集识别，实现资产全流程动态监管。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__tit">唯一编码 多维分类</div>
        <div class="con-2__con">
          面向用户及开发者的统一入口，提供编码对接的标准规范和平台所有开放的API。包括编码标准、接入指南、维护机制等。
        </div>
        <div class="con-2__btn">
          <a
            href="http://doc.ictdog.com/web/#/10?page_id=13"
            target="_blank"
            class="con-link-entercoding"
          >
            查看API&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <mFootBar></mFootBar>
    </div>
  </div>
</template>

<script>
import FootBar from "../components/FootBar";
import mTopBar from "../components/mTopBar";
import mFootBar from "../components/mFootBar";

export default {
  components: {
    FootBar,
    mTopBar,
    mFootBar
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/coding-bg.jpg);
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
    width: 630px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    margin: 46px 0 0 8.33%;
  }
}
.row-2 {
  height: 300px;
  background: rgba(236, 243, 249, 1);

  &__tit {
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 90px 0 0 8.23%;
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 28px 0 0 8.23%;
  }
  &__btn {
    width: 180px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    margin: -80px 0 0 81.88%;
    text-align: center;
  }
  .link-entercoding {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

/*移动端 */

.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/coding-bg.jpg);
  color: rgba(255, 255, 255, 1);

  &__tit {
    font-size: 27px;
    font-weight: bold;
    position: absolute;
    margin: 50px 0 0 8.33%;
  }
  &__tit2 {
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
    width: 66%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    position: absolute;
    margin: 160px 0 0 8.33%;
  }
}

.con-2 {
  height: 250px;
  background: rgba(236, 243, 249, 1);

  &__tit {
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    position: absolute;
    margin: 40px 0 0 8.23%;
  }
  &__con {
    width: 86%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    position: absolute;
    margin: 80px 0 0 8.23%;
  }
  &__btn {
    margin: 180px 0 0 36%;
    width: 120px;
    height: 40px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    text-align: center;
  }

  .con-link-entercoding {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}
</style>
