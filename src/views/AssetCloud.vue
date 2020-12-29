<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1__tit">资产云</div>
        <div class="row-1__tit2">国有资产管理云服务平台</div>
        <div class="row-1__break"></div>
        <div class="row-1__con">
          在政府数字化转型大背景下，利用互联网、云计算、大数据、物联网和人工智能
          <br />等技术，将传统分散、独立的国有资产管理信息系统整合成一个互联互通、
          <br />业务协同、资源共享的云服务。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2__num">25000+</div>
        <div class="row-2__tit">单位使用资产云管理资产。</div>
        <div class="row-2__con">加入我们，让国有资产管理更加高效。</div>
        <div class="row-2__btn">
          <a
            href="http://online.assetcloud.org.cn/"
            target="_blank"
            class="link-enterasset"
          >
            进入资产云&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <el-row class="row-3" type="flex" justify="center">
        <el-col :xl="4" :lg="6" v-for="(items, index) in row3" :key="index">
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
          :lg="8"
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
      <el-row class="row-5" type="flex" justify="center">
        <div class="row-5__tit">资产云的功能与特性</div>
        <el-row type="flex" justify="center" :gutter="90">
          <el-col class="row-5__con" :span="12">
            资产云是立足当前又考虑长远的、持续迭代更新的国有资产管理云服务平台，兼顾单位内部资产具体管理的需求和各级财政、国有资产监管部门、主管部门对国有资产宏观监管的需求，包含实物管理、价值管理、审批管理、共享共用、决策支持等各项功能，涵盖互联网业务、移动应用、政务网业务。
            <br />资产云将单位国有资产管理内部控制规范的要求嵌入信息系统，立足单位具体资产管理需求，支持分级构建组织关系、设置流程权限，灵活定义资产卡片样式和报表格式，通过与财务、预算、国库支付、政府采购、非税收入等应用的对接和协同，减少数据重复录入，实现“最多录一次”。利用移动互联网、物联网等技术及时动态更新资产状态信息，利用资产大数据为管理提供基础支撑和决策辅助，提高国有资产配置和使用的绩效。
          </el-col>
          <el-col class="row-5__img" :span="12">
            <img src="../icon/asset-img.png" />
          </el-col>
        </el-row>
      </el-row>
      <el-row class="row-8">
        <div class="row-8__tit">编码平台</div>
        <div class="row-8__tit2">在线编码 全链追溯</div>
        <div class="row-8__break"></div>
        <div class="row-8__con">
          利用GS1全球统一编码标识标准体系，以条码符号对资
          产进行标识，实现对资产进行全生命周期唯一编码标识，构建资产标准化产品数据库，应用条码、射
          频等技术实现资产的自动采集识别，实现资产全流程动态监管。
        </div>
      </el-row>
      <el-row class="row-9">
        <div class="row-9__tit">唯一编码 多维分类</div>
        <div class="row-9__con">
          面向用户及开发者的统一入口，提供编码对接的标准规范和平台所有开放的API。
          <br />包括编码标准、接入指南、维护机制等。
        </div>
        <div class="row-9__btn">
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
      <el-row class="row-6" type="flex" justify="center">
        <el-col class="row-6__col" :span="5">
          <img src="../icon/asset-xcx.png" alt />
          <div class="row-6__tit">资产云助手</div>
        </el-col>
        <div class="row-6__break"></div>
        <el-col class="row-6__col" :span="5">
          <img src="../icon/asset-ewm.png" alt />
          <div class="row-6__tit">
            资产云开放协同
            <br />创新中心公众号
          </div>
        </el-col>
        <div class="row-6__break"></div>
        <el-col class="row-6__col" :span="5">
          <img width="129px" height="129px" src="../icon/asset-Android.png" alt />
          <div class="row-6__tit">
            资产云 2.0 安卓版
          </div>
        </el-col>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1__tit">资产云</div>
        <div class="con-1__tit2">国有资产管理云服务平台</div>
        <div class="con-1__break"></div>
        <div class="con-1__con">
          在政府数字化转型大背景下，利用互联网、云计算、大数据、物联网和人工智能
          等技术，将传统分散、独立的国有资产管理信息系统整合成一个互联互通、
          业务协同、资源共享的云服务。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2__num">25000+</div>
        <div class="con-2__tit">单位使用资产云管理资产。</div>
        <div class="con-2__btn">
          <a
            href="http://mobile.assetcloud.org.cn/"
            target="_blank"
            class="con-link-enterasset"
          >
            进入资产云&nbsp;&nbsp;
            <i class="el-icon-right" style="color:white"></i>
          </a>
        </div>
      </el-row>
      <el-row class="con-3" type="flex" justify="center">
        <el-col :xl="4" :lg="6" v-for="(items, index) in row3" :key="index">
          <div class="con-3__icon">
            <img class="con-3__img" :src="items.src" alt />
            <div class="con-3__txt">{{ items.tit }}</div>
            <div class="con-3__con">{{ items.con }}</div>
          </div>
          <div v-if="index > 0 && index < 3" class="con-3__break"></div>
        </el-col>
      </el-row>
      <div class="con-4">
        <div class="con-4__col" v-for="(items, index) in row4" :key="index">
          <div class="con-4__bg">
            <div class="con-4__img">
              <img :src="items.src" />
            </div>
            <div class="con-4__break"></div>
            <div class="con-4__tit">{{ items.tit }}</div>
            <div class="con-4__con">{{ items.con }}</div>
          </div>
        </div>
      </div>
      <el-row class="con-5" type="flex" justify="center">
        <div class="con-5__tit">资产云的功能与特性</div>
        <div class="con-5__con">
          <p>
            资产云是立足当前又考虑长远的、持续迭代更新的国有资产管理云服务平台，兼顾单位内部资产具体管理的需求和各级财政、国有资产监管部门、主管部门对国有资产宏观监管的需求，包含实物管理、价值管理、审批管理、共享共用、决策支持等各项功能，涵盖互联网业务、移动应用、政务网业务。
          </p>
          <p>
            资产云将单位国有资产管理内部控制规范的要求嵌入信息系统，立足单位具体资产管理需求，支持分级构建组织关系、设置流程权限，灵活定义资产卡片样式和报表格式，通过与财务、预算、国库支付、政府采购、非税收入等应用的对接和协同，减少数据重复录入，实现“最多录一次”。利用移动互联网、物联网等技术及时动态更新资产状态信息，利用资产大数据为管理提供基础支撑和决策辅助，提高国有资产配置和使用的绩效。
          </p>
        </div>
      </el-row>
      <el-row class="con-7">
        <div class="con-7__tit">编码平台</div>
        <div class="con-7__tit2">在线编码 全链追溯</div>
        <div class="con-7__break"></div>
        <div class="con-7__con">
          利用GS1全球统一编码标识标准体系，以条码符号对资
          产进行标识，实现对资产进行全生命周期唯一编码标识，构建资产标准化产品数据库，应用条码、射
          频等技术实现资产的自动采集识别，实现资产全流程动态监管。
        </div>
      </el-row>
      <el-row class="con-8">
        <div class="con-8__tit">唯一编码 多维分类</div>
        <div class="con-8__con">
          面向用户及开发者的统一入口，提供编码对接的标准规范和平台所有开放的API。包括编码标准、接入指南、维护机制等。
        </div>
        <div class="con-8__btn">
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
      <el-row class="con-6" type="flex" justify="center">
        <div class="con-6__line"></div>
        <el-col class="con-6__col"  :span="8">
          <img src="../icon/asset-xcx.png" alt />
          <div class="con-6__tit">资产云助手</div>
        </el-col>
        <div class="con-6__break"></div>
        <el-col class="con-6__col" :span="8">
          <img src="../icon/asset-ewm.png" alt />
          <div class="con-6__tit">
            资产云开放协同创新中心公众号
          </div>
        </el-col>
        <div class="con-6__break"></div>
        <el-col class="con-6__col" :span="8">
          <img width="129px" height="129px" src="../icon/asset-Android.png" alt />
          <div class="con-6__tit">
            资产云 2.0 安卓版
          </div>
        </el-col>
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
  },
  data() {
    return {
      row3: [
        {
          tit: "开放性",
          con: "鼓励开源开放接入",
          src: require("../icon/asset-icon-1.png")
        },
        {
          tit: "生态性",
          con: "打造政务应用良好生态",
          src: require("../icon/asset-icon-2.png")
        },
        {
          tit: "平台性",
          con: "资产资源共享共用的公共平台",
          src: require("../icon/asset-icon-3.png")
        }
      ],
      row4: [
        {
          tit: "全口径",
          con:
            "覆盖各类国有资产，包含行政事业性国有资产、企业国有资产、国有自然资源。",
          src: require("../icon/asset-pic1.png")
        },
        {
          tit: "全生命周期",
          con:
            "贯穿国有资产管理全生命周期，提供资产配置、使用、处置、收益等从入口到出口全过程管理。",
          src: require("../icon/asset-pic2.png")
        },
        {
          tit: "全员",
          con:
            "满足行政事业等国有单位实现全员资产管理的需要，为每一个用户提供高效便捷资产管理工具。",
          src: require("../icon/asset-pic3.png")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.row-1 {
  height: 600px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-bottom: 31%;
  background-image: url(../icon/asset-bg.jpg);
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
    color: rgba(255, 255, 255, 1);
    line-height: 32px;
    margin: 46px 0 0 8.33%;
  }
}

.row-2 {
  height: 300px;
  background: rgba(236, 243, 249, 1);

  &__num {
    font-size: 100px;
    font-family: Fette-Engschrift;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    position: absolute;
    margin: 85px 0 0 8.33%;
  }
  &__tit {
    font-size: 30px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    position: absolute;
    margin: 189px 0 0 8.33%;
  }
  &__con {
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 18px;
    margin: 107px 0 0 76.41%;
  }

  &__btn {
    margin: 0.93% 0 0 81.88%;
    width: 180px;
    height: 50px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    text-align: center;
  }

  .link-enterasset {
    display: block;
    font-size: 18px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 48px;
  }
}

.row-3 {
  height: 350px;
  background: rgba(255, 255, 255, 1);
  text-align: center;

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
    font-size: 18px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
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

  &__img {
    width: 500px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__bg {
    width: 500px;
    height: 520px;
    background: white;
    margin: 0 auto;
    margin-top: 90px;
  }

  &__bg:hover {
    box-shadow: 0px 0px 8px #cccccc;
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

.row-5 {
  height: 650px;
  background: rgba(255, 255, 255, 1);

  &__tit {
    width: 360px;
    height: 39px;
    font-size: 40px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    line-height: 32px;
    position: absolute;
    margin-top: 89px;
  }
  &__con,
  &__img {
    margin-top: 14%;
  }
  &__con {
    width: 746px;
    font-size: 18px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 32px;
  }
  &__img {
    width: 758px;
    height: 406px;
    margin-left: -20px;
  }
}

.row-6 {
  height: 300px;
  background: rgba(255, 255, 255, 1);
  text-align: center;
  margin-top: 30px;

  &__line {
    width: 1138px;
    height: 1px;
    background: rgba(229, 229, 229, 1);
    position: absolute;
  }
  &__col {
    margin-top: 55px;
  }
  &__break {
    width: 1px;
    height: 101px;
    border-left: dashed 1px #d2d2d2;
    margin-top: 93px;
  }
}
.row-8 {
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
.row-9 {
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
  background-image: url(../icon/mobile/asset-bg.jpg);
  color: rgba(255, 255, 255, 1);

  &__tit {
    font-size: 27px;
    font-weight: bold;
    position: absolute;
    margin: 40px 0 0 8.33%;
  }
  &__tit2 {
    font-size: 14px;
    font-weight: 400;
    position: absolute;
    margin: 94px 0 0 8.33%;
  }
  &__break {
    width: 20px;
    height: 2px;
    background: rgba(255, 255, 255, 1);
    position: absolute;
    margin: 130px 0 0 8.33%;
  }
  &__con {
    width: 45%;
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 20px;
    position: absolute;
    margin: 150px 0 0 8.33%;
  }
}
.con-2 {
  height: 150px;
  background: rgba(236, 243, 249, 1);

  &__num {
    font-size: 30px;
    font-family: Fette-Engschrift;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    position: absolute;
    margin: 40px 0 0 8.33%;
  }
  &__tit {
    font-size: 16px;
    font-weight: 400;
    color: rgba(34, 34, 34, 1);
    line-height: 18px;
    position: absolute;
    margin: 90px 0 0 8.33%;
  }
  &__btn {
    margin: 50px 0 0 64.88%;
    width: 110px;
    height: 35px;
    background: rgba(0, 49, 229, 1);
    border-radius: 25px;
    text-align: center;
  }
  .con-link-enterasset {
    font-size: 12px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 35px;
  }
}

.con-3 {
  height: 170px;
  background: rgba(255, 255, 255, 1);
  text-align: center;

  &__icon {
    text-align: center;
    margin-top: 30px;
  }
  &__img {
    width: 32px;
    height: 32px;
  }
  &__txt {
    font-size: 14px;
    font-weight: bold;
    color: rgba(34, 34, 34, 1);
    margin-top: 10px;
  }
  &__con {
    padding: 0 20px;
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin-top: 13px;
  }
  &__break {
    width: 1px;
    height: 50px;
    border-left: dashed 1px #dfdfdf;
    margin-top: -80px;
    float: left;
  }
}

.con-4 {
  height: 1100px;
  background: rgba(246, 246, 246, 1);
  padding-top: 10px;

  &__bg {
    width: 90%;
    height: 330px;
    background: white;
    margin: 0 auto;
    margin-top: 20px;
  }
  &__img {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 220px;
    }
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
  background: rgba(255, 255, 255, 1);

  &__tit,
  &__con {
    color: rgba(34, 34, 34, 1);
  }
  &__tit {
    font-size: 24px;
    line-height: 20px;
    position: absolute;
    margin-top: 20px;
    text-align: center;
    font-weight: bold;
  }
  &__con {
    width: 90%;
    padding: 14% 2%;
    font-size: 12px;
    font-weight: 400;
    line-height: 26px;
    text-indent: 2em;
  }
}
.con-6 {
  height: 220px;
  background: rgba(255, 255, 255, 1);
  text-align: center;

  &__tit {
    font-size: 14px;
  }
  &__line {
    width: 100%;
    height: 1px;
    background: rgba(229, 229, 229, 1);
    position: absolute;
  }
  &__col {
    padding: 5%;
    img{
      margin-top: 20px;
      width: 100%;
      height: 50%;
    }
  }
  &__break {
    width: 1px;
    height: 101px;
    border-left: dashed 1px #d2d2d2;
    margin-top: 50px;
  }
}
.con-7 {
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

.con-8 {
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
