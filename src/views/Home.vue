<template>
  <div>
    <el-row class="home hidden-xs-only">
      <el-row class="row-1">
        <el-row justify="center" type="flex">
          <div class="row-1__tit-1">资产云开放协同创新中心</div>
          <div class="row-1__tit-2">
            开放 / 协同 / 创新 / 共建 / 共享 / 共赢
          </div>
          <el-row class="row-1__btn" justify="center" type="flex">
            <el-col :span="12">
              <div class="row-1__btn-about">
                <router-link class="link-about link" to="/about"
                  >关于我们</router-link
                >
              </div>
            </el-col>
            <el-col :span="12">
              <div class="row-1__btn-contact">
                <router-link class="link-contact link" to="/contact"
                  >联系我们</router-link
                >
              </div>
            </el-col>
          </el-row>
        </el-row>
      </el-row>
      <el-row class="row-2" justify="center" type="flex">
        <el-col :span="3" v-for="(items, index) in row2" :key="index">
          <div class="row-2__icon">
            <img :src="items.src" alt />
            <div class="row-2__txt">{{ items.tit }}</div>
          </div>
          <div v-if="index > 0 && index < 6" class="row-2__break"></div>
        </el-col>
      </el-row>
      <el-row class="row-3" justify="center" type="flex">
        <div class="row-3__tit">使命和愿景</div>
        <div class="row-3__con">
          资产云开放协同创新中心是为加强国有资产管理，发挥其在政府管理中的基础性作用，支撑政府资产管理的创新需求而发起成立的开放型非营利公共组织。
          <br />负责搭建开放协同创新平台，加速“资产云”落地示范以及推广。中心秉持“开放、协同、创新，共建、共享、共赢”的理念，推进国有资产管理相关职能部门、“资产云”应用单位、科研机构、行业协会、软件公司、第三方服务公司等政产学研用多方协同，营造良好的政府数字化转型服务市场，促进政务软件从分散独立的应用向平台间聚合的生态模式转变，创新国有资产管理模式，探索社会数字化转型有效路径，更好的服务于国家治理体系和治理能力的现代化。
        </div>
      </el-row>
      <el-row class="row-4" justify="center" type="flex">
        <div class="row-4__bg"></div>
        <div class="row-4__tit">Code For China !</div>
        <div class="row-4__con">
          加入我们，可以推动社会和政府数字化转型。单位拥有高效便捷的管理手段，利于开放共享资源，提高资产绩效。
          <br />科研机构可以掌握前沿技术和行业领先动态，促进产学研结合。社会组织可以高效连接和服务行业发展。开发商对接需求，
          <br />提高效率，加速应用 部署和交付。
          运维服务商可以降低成本，提升服务质量。
        </div>
        <div div class="row-4__btn">
          <a
            class="link-add link"
            href="http://platform.assetcloud.org.cn"
            target="_blank"
          >
            加入我们
            <i class="el-icon-arrow-right"></i>
          </a>
        </div>
      </el-row>
      <el-row class="row-5" justify="center" type="flex">
        <div class="row-5__bg"></div>
        <div class="row-5__tit">协同单位</div>
        <div class="row-5__con">
          浙江省财政厅
          <span class="break">|</span>
          浙江省教育厅
          <span class="break">|</span>
          浙江省科技厅
          <span class="break">|</span>
          浙江省市场监管局
          <br />杭州电子科技大学
          <span class="break">|</span>
          浙江工业大学
          <span class="break">|</span>
          中国美术学院
          <span class="break">|</span>
          浙江工商大学
          <span class="break">|</span>
          浙江理工大学
          <span class="break">|</span>
          浙江师范大学
          <span class="break">|</span>
          浙江财经大学
          <span class="break">|</span>
          中国计量大学
          <span class="break">|</span>
          浙江传媒学院
          <span class="break">|</span>
          浙大城市学院
          <br />省标准化研究院（省物品编码中心）
          <span class="break">|</span>
          省科技信息研究院
          <span class="break">|</span>
          省工业和信息化研究院
          <span class="break">|</span>
          省教育技术中心
          <span class="break">|</span>
          省电子信息产品检验研究院
          <br />省物联网产业协会
          <span class="break">|</span>
          省软件协会
          <span class="break">|</span>
          省安防协会
          
       </div>
      </el-row>
      <FootBar />
    </el-row>
    <el-row class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <div>
        <el-row class="con-1">
          <el-row justify="center" type="flex">
            <div class="con-1__tit-1">资产云开放协同创新中心</div>
            <div class="con-1__tit-2">
              开放 / 协同 / 创新 / 共建 / 共享 / 共赢
            </div>
            <el-row class="con-1__btn" justify="center" type="flex">
              <el-col :span="12">
                <div class="con-1__btn-about">
                  <router-link class="con-link-about con-link" to="/about"
                    >关于我们</router-link
                  >
                </div>
              </el-col>
              <el-col :span="12">
                <div class="con-1__btn-contact">
                  <router-link class="con-link-contact con-link" to="/contact"
                    >联系我们</router-link
                  >
                </div>
              </el-col>
            </el-row>
          </el-row>
        </el-row>
        <el-row
          class="con-2"
          justify="center"
          type="flex"
          v-for="(lines, indexs) in mrow2"
          :key="indexs"
        >
          <el-col :span="8" v-for="(items, index) in lines.line" :key="index">
            <div class="con-2__icon">
              <img :src="items.src" alt />
              <div class="con-2__txt">{{ items.tit }}</div>
            </div>
            <div v-if="index > 0 && index < 3" class="con-2__break"></div>
          </el-col>
        </el-row>
        <el-row class="con-3" justify="center" type="flex">
          <div class="con-3__tit">使命和愿景</div>
          <div class="con-3__con">
            <p>
              资产云开放协同创新中心是为加强国有资产管理，发挥其在政府管理中的基础性作用，支撑政府资产管理的创新需求而发起成立的开放型非营利公共组织。
            </p>
            <p>
              负责搭建开放协同创新平台，加速“资产云”落地示范以及推广。中心秉持“开放、协同、创新，共建、共享、共赢”的理念，推进国有资产管理相关职能部门、“资产云”应用单位、科研机构、行业协会、软件公司、第三方服务公司等政产学研用多方协同，营造良好的政府数字化转型服务市场，促进政务软件从分散独立的应用向平台间聚合的生态模式转变，创新国有资产管理模式，探索社会数字化转型有效路径，更好的服务于国家治理体系和治理能力的现代化。
            </p>
          </div>
        </el-row>
        <el-row class="con-4" justify="center" type="flex">
          <div class="con-4__tit">Code For China !</div>
          <div class="con-4__con">
            加入我们，可以推动社会和政府数字化转型。单位拥有高效便捷的管理手段，利于开放共享资源，提高资产绩效。
            <br />科研机构可以掌握前沿技术和行业领先动态，促进产学研结合。社会组织可以高效连接和服务行业发展。开发商对接需求，
            提高效率，加速应用 部署和交付。
            运维服务商可以降低成本，提升服务质量。
          </div>
          <div div class="con-4__btn">
            <a
              class="con-link-add link"
              href="https://github.com/assetcloud"
              target="_blank"
            >
              加入我们
              <i class="el-icon-arrow-right"></i>
            </a>
          </div>
        </el-row>
        <el-row class="con-5" justify="center" type="flex">
          <div class="con-5__tit">协同单位</div>
          <div class="con-5__con">
            浙江省财政厅
            <span class="break">|</span>
            浙江省教育厅
            <span class="break">|</span>
            浙江省科技厅
            <span class="break">|</span>
            浙江省市场监管局
            <br />杭州电子科技大学
            <span class="break">|</span>
            浙江工业大学
            <span class="break">|</span>
            中国美术学院
            <span class="break">|</span>
            浙江工商大学
            <span class="break">|</span>
            浙江理工大学
            <span class="break">|</span>
            浙江师范大学
            <span class="break">|</span>
            浙江财经大学
            <span class="break">|</span>
            中国计量大学
            <span class="break">|</span>
            浙江传媒学院
            <span class="break">|</span>
            浙大城市学院
            <br />省标准化研究院(省物品编码中心)
            <span class="break">|</span>
            省科技信息研究院
            <span class="break">|</span>
            省工业和信息化研究院
            <span class="break">|</span>
            省教育技术中心
            <span class="break">|</span>
            省电子信息产品检验研究院
            <br />省物联网产业协会
            <span class="break">|</span>
            省软件协会
            <span class="break">|</span>
            省安防协会
           
          </div>
        </el-row>
      </div>
      <mFootBar></mFootBar>
    </el-row>
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
      row2: [
        {
          tit: "开放",
          src: require("../icon/icon1.png")
        },
        {
          tit: "协同",
          src: require("../icon/icon2.png")
        },
        {
          tit: "创新",
          src: require("../icon/icon3.png")
        },
        {
          tit: "共建",
          src: require("../icon/icon4.png")
        },
        {
          tit: "共享",
          src: require("../icon/icon5.png")
        },
        {
          tit: "共赢",
          src: require("../icon/icon6.png")
        }
      ],
      mrow2: [
        {
          line: [
            {
              tit: "开放",
              src: require("../icon/icon1.png")
            },
            {
              tit: "协同",
              src: require("../icon/icon2.png")
            },
            {
              tit: "创新",
              src: require("../icon/icon3.png")
            }
          ]
        },
        {
          line: [
            {
              tit: "共建",
              src: require("../icon/icon4.png")
            },
            {
              tit: "共享",
              src: require("../icon/icon5.png")
            },
            {
              tit: "共赢",
              src: require("../icon/icon6.png")
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 700px;
  background-image: url(../icon/home_bg.png);
  padding: 0 5%;

  &__tit-1,
  &__tit-2 {
    color: rgba(255, 255, 255, 1);
    position: absolute;
  }
  &__tit-1 {
    font-size: 60px;
    font-weight: bold;
    margin-top: 180px;
  }
  &__tit-2 {
    font-size: 24px;
    font-weight: 400;
    margin-top: 280px;
  }
  &__btn {
    width: 20%;
    position: absolute;
    margin-top: 392px;
  }
  &__btn-about,
  &__btn-contact {
    width: 140px;
    height: 45px;
    border-radius: 23px;
    text-align: center;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
  }
  .link-about,
  .link-contact {
    font-size: 18px;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 45px;
  }
  &__btn-about:hover,
  &__btn-contact:hover {
    background: rgba(0, 48, 228, 1);
  }
  .link-about:hover,
  .link-contact:hover {
    color: rgba(255, 255, 255, 1);
  }
}

.row-2 {
  height: 300px;

  &__icon {
    text-align: center;
    margin-top: 80px;
  }
  &__txt {
    margin: 40px auto;
    font-size: 20px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }
  &__break {
    width: 1px;
    height: 101px;
    border-left: dashed 1px #dfdfdf;
    margin-top: -150px;
    float: left;
  }
}

.row-3 {
  height: 500px;
  background-image: url(../icon/home_bg2.png);

  &__tit {
    font-size: 40px;
    font-weight: bold;
    color: rgba(255, 255, 255, 1);
    margin-top: 144px;
  }
  &__con {
    width: 70%;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    text-align: center;
    position: absolute;
    text-indent: 2em;
    margin-top: 249px;
  }
}

.row-4 {
  height: 500px;
  background-image: url(../icon/home_bg3.png);
  background-position-x: center;

  &__bg {
    width: 85%;
    height: 500px;
    position: absolute;
  }
  &__tit {
    font-size: 50px;
    font-family: OCRAExtended;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    position: absolute;
    margin-top: 104px;
  }
  &__con {
    width: 59%;
    font-size: 18px;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 32px;
    text-align: center;
    position: absolute;
    margin-top: 196px;
  }
  &__btn {
    width: 170px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    position: absolute;
    margin-top: 328px;
    text-align: center;
  }
  .link-add {
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

.row-5 {
  height: 400px;
  background-image: url(../icon/home_bg4.png);
  background-position-x: 48%;
  color: rgba(34, 34, 34, 1);

  &__bg {
    width: 85%;
    height: 500px;
    margin-top: -1px;
  }
  &__tit {
    font-size: 40px;
    font-weight: bold;
    position: absolute;
    margin-top: 82px;
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    line-height: 50px;
    text-align: center;
    position: absolute;
    margin-top: 180px;
  }
  .break {
    color: #c6c6c6;
  }
}


/*移动端样式 */
.con-1 {
  height: 340px;
  background-image: url(../icon/home_bg.png);
  padding-bottom: 20px;

  &__tit-1,
  &__tit-2 {
    color: rgba(255, 255, 255, 1);
    position: absolute;
  }
  &__tit-1 {
    font-size: 26px;
    font-weight: bold;
    margin-top: 98px;
  }
  &__tit-2 {
    font-size: 12px;
    font-weight: 400;
    margin-top: 144px;
  }
  &__btn {
    width: 70%;
    position: absolute;
    margin-top: 204px;
  }
  &__btn-about,
  &__btn-contact {
    width: 110px;
    height: 35px;
    border-radius: 23px;
    text-align: center;
    margin: 0 auto;
    background: rgba(255, 255, 255, 1);
  }
  .con-link {
    display: block;
    font-size: 14px;
    font-weight: 400;
    line-height: 35px;
  }
  .con-link-about,
  .con-link-contact {
    color: rgba(68, 68, 68, 1);
  }
}
.con-2 {
  height: 110px;

  &__icon {
    text-align: center;
    margin-top: 30px;

    img {
      width: 32px;
      height: 32px;
    }
  }
  &__txt {
    margin: 10px auto;
    font-size: 12px;

    font-weight: bold;
    color: rgba(34, 34, 34, 1);
  }
  &__break {
    width: 1px;
    height: 39px;
    border-left: dashed 1px #dfdfdf;
    margin-top: -60px;
    float: left;
  }
}

.con-3 {
  height: 460px;
  background-image: url(../icon/home_bg2.png);
  padding-bottom: 20px;
  color: rgba(255, 255, 255, 1);

  &__tit {
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    margin-top: 30px;
  }
  &__con {
    width: 90%;
    font-size: 12px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    position: absolute;
    text-indent: 2em;
    margin-top: 70px;
  }
}

.con-4 {
  height: 300px;
  background-image: url(../icon/home_bg3.png);
  background-position-x: center;

  &__tit {
    font-size: 23px;
    font-family: OCRAExtended;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    position: absolute;
    margin-top: 28px;
  }
  &__con {
    width: 90%;
    height: 130px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 24px;
    text-align: left;
    text-indent: 2em;
    position: absolute;
    margin-top: 72px;
  }
  &__btn {
    width: 110px;
    height: 35px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    position: absolute;
    margin-top: 240px;
    text-align: center;
  }
  .con-link-add {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 35px;
  }
}

.con-5 {
  height: 400px;
  background-image: url(../icon/home_bg4.png);

  &__tit {
    font-size: 20px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    position: absolute;
    margin-top: 25px;
  }
  &__con {
    width: 90%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(68, 68, 68, 1);
    line-height: 34px;
    text-align: left;
    position: absolute;
    margin-top: 66px;
  }
  .break {
    color: #c6c6c6;
  }
}
</style>
