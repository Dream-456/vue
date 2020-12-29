<template>
  <div>
    <div class="home hidden-xs-only">
      <el-row class="row-1" type="flex" justify="center">
        <div class="row-1__tit">资产云开放协同创新中心</div>
        <div class="row-1__con">
          开放 / 协同 / 创新 &nbsp;&nbsp;&nbsp; 共建 / 共享 / 共赢
        </div>
      </el-row>
      <el-row class="row-2">
        <el-col class="row-2__col" :span="12">
          <div class="row-2__tit">
            资产云开放协同创新中心是为加强国有资产管理，发挥其在财政管理中的基础性作用，支撑政府资产管理的创新需求而发起成立的开放型非营利公共组织。中心负责搭建开放协同创新平台，加速“资产云”落地示范以及推广。
            <br />
            <br />中心秉持“开放、协同、创新，共建、共享、共赢”的理念，推进国有资产管理相关职能部门、“资产云”应用单位、科研机构、行业协会、软件公司、第三方服务公司等政产学研用多方协同，营造良好的政府数字化转型服务市场，促进政务软件从分散独立的应用向平台间聚合的生态模式转变，创新国有资产管理模式，探索社会数字化转型有效路径，更好的服务于国家治理体系和治理能力的现代化。
          </div>
        </el-col>
        <el-col class="row-2__col" :span="12">
          <img class="row-2__img" src="../icon/about-pic.png" alt />
        </el-col>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1" type="flex" justify="center">
        <div class="con-1__tit">资产云开放协同创新中心</div>
        <div class="con-1__con">
          开放 / 协同 / 创新 &nbsp;&nbsp; 共建 / 共享 / 共赢
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2-col">
          <div class="con-2__tit">
            资产云开放协同创新中心是为加强国有资产管理，发挥其在财政管理中的基础性作用，支撑政府资产管理的创新需求而发起成立的开放型非营利公共组织。中心负责搭建开放协同创新平台，加速“资产云”落地示范以及推广。
            <br />
            <br />中心秉持“开放、协同、创新，共建、共享、共赢”的理念，推进国有资产管理相关职能部门、“资产云”应用单位、科研机构、行业协会、软件公司、第三方服务公司等政产学研用多方协同，营造良好的政府数字化转型服务市场，促进政务软件从分散独立的应用向平台间聚合的生态模式转变，创新国有资产管理模式，探索社会数字化转型有效路径，更好的服务于国家治理体系和治理能力的现代化。
          </div>
        </div>
        <div class="con-2-col">
          <img class="con-2__img" src="../icon/about-pic.png" alt />
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
    mFootBar
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 300px;
  background: rgba(246, 246, 246, 1);

  &__tit {
    position: absolute;
    margin-top: 107px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }
  &__con {
    position: absolute;
    margin-top: 176px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }
}
.row-2 {
  height: 600px;
  background: rgba(255, 255, 255, 1);

  &__tit {
    width: 760px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 32px;
    margin: 147px 0 0 162px;
  }
  &__img {
    margin: 105px 0 0 30px;
  }
}

/**移动端 */
.con-1 {
  height: 300px;
  background: rgba(246, 246, 246, 1);

  &__tit {
    position: absolute;
    margin-top: 110px;
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    text-align: center;
  }
  &__con {
    position: absolute;
    margin-top: 180px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }
}

.con-2 {
  width: 100%;
  padding: 20px 0;
  background: rgba(255, 255, 255, 1);

  &__tit {
    width: 90%;
    font-size: 18px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 32px;
    padding: 0 5%;
    text-indent: 2em;
  }
  &__img {
    width: 90%;
    height: 280px;
    padding: 20px;
  }
}
</style>
