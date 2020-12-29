<template>
  <div>
    <div class="hidden-xs-only">
      <el-row class="row-1">
        <div class="row-1-tit">资讯动态</div>
        <div class="row-1-tit2">资产云开放协同创新动态</div>
        <div class="row-1-break"></div>
        <div class="row-1-con">
          协同单位在国有资产管理，政务应用研发，市场服务等方面新闻信息，政策解
          <br />读和经验介绍等内容。
        </div>
      </el-row>
      <el-row class="row-2">
        <div class="row-2-tit">资产云开放协同创新中心历程</div>
        <div class="row-2-con">
          2018年1月资产云正式上线，浙江省本级行政事业单位开始使用。
          <br />
          <br />2018年3月资产云全省培训。全省资产云应用培训圆满完成，政府资产管理再升级。
          <br />
          <br />2018年7月1日，浙江省财政厅和杭州电子科技大学共同在杭州电子科技大学文一校区举行了“共创政府资产管理新模式，资产云协同创新中心启动”活动。浙江省财政厅、杭州电子科技大学、省物联网协会、省软件协会、物品编码中心、方大信息、阿里云、华为云、网易云、用友政务、浙江电信物联网中心、省公众信息产业有限公司、钉钉、氚云、政采云、环保集团、和轩办公、杭州中房、黄龙体育公司等单位参加活动。介绍财政厅资产云项目情况、杭州电子科技大学资产云示范项目进展，共创单位分享资产云相关技术解决方案，业务协同单位介绍资产相关优化服务模式。
          <br />
          <br />2018年8月杭州电子科技大学资产云落地示范，利用物联网技术提高资产绩效项目取得阶段性成果。
          <br />
          <br />2018年9月资产云开放协同创新中心正式成立，中心具体负责“资产云”落地示范以及全省推广，采用开放组织运行模式，参照非营利公共组织管理。发挥高校在会计、管理、电子信息化以及物联网等方面的学科优势，结合智慧校园建设，产学研用全面结合，切实起到示范和引领效应，为全社会数字化转型探索有效路径。
          <br />
          <br />2018年10月资产云开始推广全省。
          <br />
          <br />2019年3月启动资产分类和编码规范制定，6月省财政厅与省市场监管局共同成立浙江省资产编码管理工作专班，推进资产编码管理工作，省物品编码中心承担具体工作。
          <br />
          <br />2019年6月全省行政事业单位基本完成资产管理上云。各级财政国有资产监管业务全部通过资产云办理，信息系统整合目标基本完成。原来分布各地区的近百个孤立的资产信息系统整合为全省互联互通、业务协同、资源共享的云平台，大幅节省了软硬件资源和运维成本，云服务规模效益初步显现。
          <br />
          <br />2019年9月在资产分类编码的基础上，开发资产云助手移动端，将资产编码贯穿于资产申领、接收、移交、盘点、维修等各环节，开启“人人都是资产管理员”的全员资产管理模式，将资产管理云端和个人移动端打通，提高高效便捷的个人资产管理工具，实现资产管理模式创新。
          <br />
          <br />2019年10月在中国美术学院象山校区举办资产云协同成果发布会，中国美术学院政务应用设计研究所成立。
          <br />
          <br />2019年11月《资产分类和编码规范》地方标准第1部分（DB33/T 2227.1-2019）正式发布。
          <br />
          <br />2019年12月，资产云与科技大脑对接启动，利用物联网技术探索资产实时状态数据的采集和跟踪，通过协同共建，以大型科研仪器开放服务作为切入点，推动国有资产向全社会开放共享，最大限度提高资产配置绩效，激发社会创新活力。
          <br />
          <br />2020年9月，云原生应用平台和资产云2.0上线测试，资产云应用生态培育启动。
        </div>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <el-row class="con-1">
        <div class="con-1-tit">资讯动态</div>
        <div class="con-1-tit2">资产云开放协同创新动态</div>
        <div class="con-1-break"></div>
        <div class="con-1-con">
          协同单位在国有资产管理，政务应用研发，市场服务等方面新闻信息，政策解读和经验介绍等内容。
        </div>
      </el-row>
      <el-row class="con-2">
        <div class="con-2-tit">资产云开放协同创新中心历程</div>
        <div class="con-2-con">
          2018年1月资产云正式上线，浙江省本级行政事业单位开始使用。
          <br />2018年3月资产云全省培训。全省资产云应用培训圆满完成，政府资产管理再升级。
          <br />2018年7月1日，浙江省财政厅和杭州电子科技大学共同在杭州电子科技大学文一校区举行了“共创政府资产管理新模式，资产云协同创新中心启动”活动。浙江省财政厅、杭州电子科技大学、省物联网协会、省软件协会、物品编码中心、方大信息、阿里云、华为云、网易云、用友政务、浙江电信物联网中心、省公众信息产业有限公司、钉钉、氚云、政采云、环保集团、和轩办公、杭州中房、黄龙体育公司等单位参加活动。介绍财政厅资产云项目情况、杭州电子科技大学资产云示范项目进展，共创单位分享资产云相关技术解决方案，业务协同单位介绍资产相关优化服务模式。
          <br />2018年8月杭州电子科技大学资产云落地示范，利用物联网技术提高资产绩效项目取得阶段性成果。
          <br />2018年9月资产云开放协同创新中心正式成立，中心具体负责“资产云”落地示范以及全省推广，采用开放组织运行模式，参照非营利公共组织管理。发挥高校在会计、管理、电子信息化以及物联网等方面的学科优势，结合智慧校园建设，产学研用全面结合，切实起到示范和引领效应，为全社会数字化转型探索有效路径。
          <br />2018年10月资产云开始推广全省。
          <br />2019年3月启动资产分类和编码规范制定，6月省财政厅与省市场监管局共同成立浙江省资产编码管理工作专班，推进资产编码管理工作，省物品编码中心承担具体工作。
          <br />2019年6月全省行政事业单位基本完成资产管理上云。各级财政国有资产监管业务全部通过资产云办理，信息系统整合目标基本完成。原来分布各地区的近百个孤立的资产信息系统整合为全省互联互通、业务协同、资源共享的云平台，大幅节省了软硬件资源和运维成本，云服务规模效益初步显现。
          <br />2019年9月在资产分类编码的基础上，开发资产云助手移动端，将资产编码贯穿于资产申领、接收、移交、盘点、维修等各环节，开启“人人都是资产管理员”的全员资产管理模式，将资产管理云端和个人移动端打通，提高高效便捷的个人资产管理工具，实现资产管理模式创新。
          <br />2019年10月在中国美术学院象山校区举办资产云协同成果发布会，中国美术学院政务应用设计研究所成立。
          <br />2019年11月《资产分类和编码规范》地方标准第1部分（DB33/T 2227.1-2019）正式发布。
          <br />2019年12月，资产云与科技大脑对接启动，利用物联网技术探索资产实时状态数据的采集和跟踪，通过协同共建，以大型科研仪器开放服务作为切入点，推动国有资产向全社会开放共享，最大限度提高资产配置绩效，激发社会创新活力。
          <br />2020年9月，云原生应用平台和资产云2.0上线测试，资产云应用生态培育启动。
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

<style scoped>
.row-1 {
  height: 600px;
  background-image: url(../icon/news-bg.jpg);
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
  height: 1350px;
}
.row-2-tit {
  font-size: 30px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin: 84px 0 0 8.33%;
}
.row-2-con {
  width: 64%;
  font-size: 18px;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin: 61px 0 0 8.33%;
}

/**移动端 */
.con-1 {
  height: 340px;
  background-image: url(../icon/mobile/news-bg.jpg);
}
.con-1-tit,
.con-1-tit2 {
  color: rgba(255, 255, 255, 1);
}
.con-1-tit {
  font-size: 27px;
  font-weight: bold;
  position: absolute;
  margin: 50px 0 0 8.33%;
}
.con-1-tit2 {
  font-size: 14px;
  font-weight: 400;
  position: absolute;
  margin: 100px 0 0 8.33%;
}
.con-1-break {
  width: 20px;
  height: 2px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  margin: 140px 0 0 8.33%;
}
.con-1-con {
  width: 48%;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 20px;
  margin: 160px 0 0 8.33%;
}

.con-2 {
  padding: 20px 0;
}
.con-2-tit {
  font-size: 18px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin: 20px 0 0 8.33%;
}
.con-2-con {
  width: 86%;
  font-size: 14px;
  font-weight: 400;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin: 20px 0 0 8.33%;
}
</style>
