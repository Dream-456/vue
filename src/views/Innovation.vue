<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">创新平台</div>
        <div class="row-1__tit2">富有活力的国有资产管理创新平台</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          整合各类国有、公共资产和资源的基础上，推动共建共享共用，赋能各领域国
          <br />有资产管理，打造富有活力的公共创新平台。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2__tit">连接赋能创新</div>
        <div class="row-2__con">
          丰富的业务场景，汇聚各类资源，推进各领域创新力量迸发。
        </div>
        <div class="row-2__btn">
          <a
            href="  http://www.zjsti.gov.cn/"
            target="_blank"
            class="link-enterinnov"
          >
            进入创新平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <el-row class="row-3" type="flex" justify="center">
        <el-col
          :lg="5"
          class="row-3__col"
          v-for="(items, index) in row3"
          :key="index"
        >
          <div class="row-3__bg">
            <div class="row-3__img">
              <img :src="items.src" />
            </div>
            <div class="row-3__break"></div>
            <div class="row-3__tit">{{ items.tit }}</div>
            <div class="row-3__con">{{ items.con }}</div>
          </div>
        </el-col>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">创新平台</div>
        <div class="con-1__tit2">富有活力的国有资产管理创新平台</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          整合各类国有、公共资产和资源的基础上，推动共建共享共用，赋能各领域国有资产管理，打造富有活力的公共创新平台。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__tit">连接赋能创新</div>
        <div class="con-2__con">
          丰富的业务场景，汇聚各类资源，推进各领域创新力量迸发。
        </div>
        <div class="con-2__btn">
          <a
            href="  http://www.zjsti.gov.cn/"
            target="_blank"
            class="con-link-enterinnov"
          >
            进入创新平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <div class="con-3">
        <div class="row-3__col" v-for="(items, index) in row3" :key="index">
          <div class="con-3__bg">
            <img class="con-3__img" :src="items.src" />
            <div class="con-3__break"></div>
            <div class="con-3__tit">{{ items.tit }}</div>
            <div class="con-3__con">{{ items.con }}</div>
          </div>
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

export default {
  components: {
    FootBar,
    mTopBar,
    mFootBar
  },
  data() {
    return {
      row3: [
        {
          tit: "开源实验室",
          con: "充分利用开源社区的最佳创意和实践，结合实际应用场景落地运用。",
          src: require("../icon/innov-1.png")
        },
        {
          tit: "资源共享实验室",
          con: "推动政府、社会、企业各类资源的共享共用。降低社会运行成本。",
          src: require("../icon/innov-2.png")
        },
        {
          tit: "数字孪生实验室",
          con: "以物联网技术和虚拟现实、数字孪生，BIM等拓展资产管理新模式。",
          src: require("../icon/innov-3.png")
        },
        {
          tit: "业务创新实验室",
          con:
            "流程再造，安全防范，资产管理、财务管理、教学管理、科研管理等各行业管理业务创新示范。",
          src: require("../icon/innov-4.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/innov-bg.jpg);
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
  .link-enterinnov {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

.row-3 {
  height: 700px;
  background: rgba(246, 246, 246, 1);

  &__img {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__bg {
    width: 380px;
    height: 520px;
    background: white;
    margin: 0 auto;
    margin-top: 90px;
  }
  &__bg:hover {
    box-shadow: 0px 0px 5px #cccccc;
  }
  &__tit {
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 23px 0 0 39px;
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 24px 0 0 0;
    padding: 0 40px;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(229, 229, 229, 1);
    margin: 31px 0 0 42px;
  }
}

/**移动端 */
.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/innov-bg.jpg);
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
    width: 60%;
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
  .con-link-enterinnov {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}

.con-3 {
  background: rgba(246, 246, 246, 1);

  &__bg {
    width: 100%;
    height: 400px;
    background: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  &__img {
    width: 100%;
    height: 250px;
  }
  &__tit {
    font-size: 16px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 10px 0 0 10px;
  }
  &__con {
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 20px;
    margin: 15px 0 0 10px;
    padding-right: 10px;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(229, 229, 229, 1);
    margin: 20px 0 0 10px;
  }
}
</style>
