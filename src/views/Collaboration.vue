<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">协同平台</div>
        <div class="row-1__tit2">破除壁垒 开放协作</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          以用户实际需求场景驱动，推动跨公司、跨部门、跨团队协作，打破技术、产
          <br />品和服务的边界，服务数字化转型。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2__tit">
          专注业务和客户价值，加速应用交付和服务响应。
        </div>
        <div class="row-2__con">
          通过应用与资源解藕，开放共享公共组件，乐高积木式开发平台，支撑应用的开发、架构、交付和运维的全流程。
          <br />避免重复造轮子，降低成本，提高开发运维效率。
        </div>
        <div class="row-2__btn">
          <a
            href="http://ks.assetcloud.org.cn"
            target="_blank"
            class="link-entercolla"
          >
            进入协同平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <el-row class="row-3" type="flex" justify="center">
        <el-col :xl="7" :lg="7" v-for="(items, index) in row3" :key="index">
          <div class="row-3__icon">
            <img :src="items.src" alt />
            <div class="row-3__txt">{{ items.tit }}</div>
            <div class="row-3__con">{{ items.con }}</div>
          </div>
          <div v-if="index > 0 && index < 3" class="row-3__break"></div>
        </el-col>
      </el-row>
      <el-row class="row-4" type="flex" justify="center">
        <el-col
          :lg="5"
          class="row-4__col"
          v-for="(items, index) in row4"
          :key="index"
        >
          <div class="row-4__bg">
            <div class="row-4__img">
              <img :src="items.src" />
            </div>
            <div class="row-4__break"></div>
            <div class="row-4__tit">{{ items.tit }}</div>
            <div class="row-4__con">{{ items.con }}</div>
          </div>
        </el-col>
      </el-row>
      <el-row class="row-5">
        <div class="row-5__col">
          <div class="row-5__tit">开放接口API</div>
          <div class="row-5__break"></div>
          <div class="row-5__con">
            高效、易用、功能强大的API管理平台
            <br />旨在为开发、产品、测试人员提供更优雅的接口管理服务
          </div>
          <div class="row-5__btn">
            <a
              href="http://yapi.assetcloud.org.cn"
              target="_blank"
              class="link-enterapi link"
            >
              进入YAPI&nbsp;
              <i class="el-icon-right" style="color:white;font-size:24px;"></i>
            </a>
          </div>
        </div>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">协同平台</div>
        <div class="con-1__tit2">破除壁垒 开放协作</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          以用户实际需求场景驱动，推动跨公司、跨部门、跨团队协作，打破技术、产品和服务的边界，服务数字化转型。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__tit">
          专注业务和客户价值，
          <br />加速应用交付和服务响应。
        </div>
        <div class="con-2__con">
          通过应用与资源解藕，开放共享公共组件，乐高积木式开发平台，支撑应用的开发、架构、交付和运维的全流程。避免重复造轮子，降低成本，提高开发运维效率。
        </div>
        <div class="con-2__btn">
          <a
            href="http://ks.assetcloud.org.cn"
            target="_blank"
            class="con-link-entercolla"
          >
            进入协同平台&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <div class="con-3">
        <div v-for="(items, index) in row3" :key="index">
          <div class="con-3__icon">
            <img class="con-3__img" :src="items.src" alt />
            <div class="con-3__txt">{{ items.tit }}</div>
            <div class="con-3__con">{{ items.con }}</div>
          </div>
        </div>
      </div>
      <div class="con-4">
        <div class="row-4__col" v-for="(items, index) in row4" :key="index">
          <div class="con-4__bg">
            <img class="con-4__img" :src="items.src" />
            <div class="con-4__break"></div>
            <div class="con-4__tit">{{ items.tit }}</div>
            <div class="con-4__con">{{ items.con }}</div>
          </div>
        </div>
      </div>
      <el-row class="con-5">
        <div class="con-5__col">
          <div class="con-5__tit">开放接口API</div>
          <div class="con-5__break"></div>
          <div class="con-5__con">
            高效、易用、功能强大的API管理平台
            <br />旨在为开发、产品、测试人员提供更优雅的接口管理服务
          </div>
          <div class="con-5__btn">
            <a
              href="http://yapi.assetcloud.org.cn"
              target="_blank"
              class="con-link-enterapi con-link"
            >
              进入YAPI&nbsp;
              <i class="el-icon-right" style="color:white;font-size:20px;"></i>
            </a>
          </div>
        </div>
      </el-row>
      <mFootBar></mFootBar>
    </div>
  </div>
</template>

<script>
import FootBar from "../components/FootBar.vue";
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
          tit: "需求",
          con:
            "促进最终用户、开发商、服务商和供应商等紧密协作，汇集整理分析用户真实业务场景，通过前期充分的沟通和反馈，整理挖掘真实需求，设计体现用户价值的解决方案。",
          src: require("../icon/colla-icon-1.png")
        },
        {
          tit: "开发",
          con:
            "高效项目协作沟通、一站式的开发和测试平台，培育高质量的开源生态社区，打造开箱即用的开放组件和能力，快速交付标准化、行业化和个性化的应用和服务。",
          src: require("../icon/colla-icon-2.png")
        },
        {
          tit: "运维",
          con:
            "自动化运维，统一监控管理各类资源，大规模云原生应用的运营能力，持续集成、交付、部署、跟踪、反馈等快速迭代的能力，有效预防问题的产生，快速定位故障，",
          src: require("../icon/colla-icon-3.png")
        }
      ],
      row4: [
        {
          tit: "开发平台",
          con:
            "围绕资产管理云原生应用开发平台，需求分析，验证，提供用户认证、组织管理、流程中心",
          src: require("../icon/colla-pic-1.png")
        },
        {
          tit: "大数据平台",
          con: "汇聚各类管理大数据，提供决策辅助，提高资产配置和使用绩效。",
          src: require("../icon/colla-pic-2.png")
        },
        {
          tit: "物联网平台",
          con:
            "利用物联网技术，实时跟踪资产状态，利用物联网开发组件，运维组件，网络组件，创新各类资产管理应用。",
          src: require("../icon/colla-pic-3.png")
        },
        {
          tit: "人工智能平台",
          con: "人工智能用于资产管理，创新资产管理模式，推进各类资产开放共享。",
          src: require("../icon/colla-pic-4.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/colla-bg.jpg);
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
    width: 620px;
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
    width: 900px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 90px 0 0 8.23%;
  }
  &__con {
    width: 900px;
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
  .link-entercolla {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}
.row-3 {
  height: 430px;
  background: rgba(255, 255, 255, 1);

  &__icon {
    text-align: center;
    margin-top: 88px;
  }
  &__txt {
    font-size: 30px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin-top: 33px;
  }
  &__con {
    width: 449px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 0 auto;
    margin-top: 13px;
  }
  &__break {
    width: 1px;
    height: 101px;
    border-left: dashed 1px #dfdfdf;
    margin-top: -150px;
    float: left;
  }
}

.row-4 {
  height: 700px;
  background: rgba(246, 246, 246, 1);

  &__bg {
    width: 380px;
    height: 520px;
    background: white;
    margin: 0 auto;
    margin-top: 90px;
  }
  &__bg:hover {
    box-shadow: 0px 0px 20px #cccccc;
  }
  &__img {
    img {
      width: 100%;
      height: 100%s;
    }
  }
  &__tit {
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 23px 0 0 9.74%;
  }
  &__con {
    width: 306px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 24px 0 0 9.74%;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(229, 229, 229, 1);
    margin: 31px 0 0 9.74%;
  }
}

.row-5 {
  height: 600px;
  background-image: url(../icon/colla-bg-2.png);

  &__col {
    width: 650px;
    height: 430px;
    background: rgba(255, 255, 255, 1);
    margin: 86px 0 0 8.33%;
    position: absolute;
  }
  &__tit {
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin: 75px 0 0 66px;
  }
  &__break {
    width: 40px;
    height: 2px;
    background: rgba(220, 220, 220, 1);
    margin: 38px 0 0 69px;
  }
  &__con {
    width: 455px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 40px 0 0 68px;
  }
  &__btn {
    width: 180px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    margin: 60px 0 0 59px;
    text-align: center;
  }
  .link-enterapi {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

/*移动端*/
.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/colla-bg.jpg);
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
    width: 40%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    margin: 160px 0 0 8.33%;
  }
}

.con-2 {
  height: 320px;
  background: rgba(236, 243, 249, 1);

  &__tit {
    height: 38px;
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
    margin: 120px 0 0 8.23%;
  }
  &__btn {
    margin: 20px 0 0 36%;
    width: 120px;
    height: 40px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    text-align: center;
  }
  .con-link-entercolla {
    display: block;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}

.con-3 {
  background: rgba(255, 255, 255, 1);
  padding: 20px 0;

  &__icon {
    text-align: center;
    margin-top: 20px;
  }
  &__img {
    width: 50px;
    height: 50px;
  }
  &__txt {
    font-size: 24px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin-top: 20px;
  }
  &__con {
    width: 70%;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 0 auto;
    margin-top: 13px;
    padding-bottom: 20px;
  }
  &__break {
    width: 1px;
    height: 101px;
    border-left: dashed 1px #dfdfdf;
    margin-top: -150px;
    float: left;
  }
}

.con-4 {
  background: rgba(246, 246, 246, 1);
  padding: 20px 0;

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

.con-5 {
  height: 480px;
  background-image: url(../icon/colla-bg-2.png);

  &__col {
    width: 80%;
    height: 360px;
    background: rgba(255, 255, 255, 1);
    margin: 15% 0 0 8.33%;
    position: absolute;
  }
  &__tit {
    width: 235px;
    height: 39px;
    font-size: 20px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    margin: 40px 0 0 33px;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(220, 220, 220, 1);
    margin: 18px 0 0 33px;
  }
  &__con {
    width: 80%;
    height: 49px;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 32px;
    margin: 20px 0 0 33px;
  }
  &__btn {
    width: 140px;
    height: 40px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    margin: 80px 0 0 33px;
    text-align: center;
  }
  .con-link-enterapi {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
  }
}
</style>
