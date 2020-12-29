<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">共享平台</div>
        <div class="row-1__tit2">资产资源共建共享共用</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          为仪器共享 场馆共享 办公空间共享 图书共享 科技成果共享 信息共享 数据共
          <br />享 等各类资产资源共享提供平台、工具和服务支持。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2__tit">开放共享服务</div>
        <div class="row-2__con">
          推动教育、科技、文化、体育等公共资产资源开放共享
        </div>
        <div class="row-2__btn">
          <a
            href="http://www.zjsti.gov.cn/instrument/home"
            target="_blank"
            class="link-entershared"
          >
            进入共享平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">共享平台</div>
        <div class="con-1__tit2">资产资源共建共享共用</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          为仪器共享 场馆共享 办公空间共享 图书共享 科技成果共享 信息共享
          数据共享 等各类资产资源共享提供平台、工具和服务支持。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__tit">开放共享服务</div>
        <div class="con-2__con">
          推动教育、科技、文化、体育等公共资产资源开放共享
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
  name: "app",
  components: {
    FootBar,
    mTopBar,
    mFootBar,
  },
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/share-bg.jpg);
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
    font-size: 18px;
    font-weight: 400;
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
    margin: 90px 0 0 8.33%;
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 28px 0 0 8.33%;
  }
  &__btn {
    width: 180px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    margin: -80px 0 0 81.88%;
    text-align: center;
  }
  .link-entershared {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

/**移动端 */
.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/share-bg.jpg);
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
    width: 50%;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    margin: 160px 0 0 8.33%;
  }
}

.con-2 {
  height: 180px;
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
  .con-link-entershared {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}
</style>
