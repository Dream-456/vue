<template>
  <div>
    <div class="home hidden-xs-only">
      <el-row class="row-1">
        <el-col :span="12">
          <div class="row-1-col-1-tit">联系我们</div>
          <div class="row-1-col-1-con">
            愿意加入协同，愿意推广使用资产云，愿意贡献您的创意，以及需要反馈任何问题，
            <br />请联系我们。 我们会尽快回复您。
          </div>
          <div class="row-1-col-1-btn">
            <a
              role="button"
              id="
          o_contact_mail"
              href="mailto:panzhaohui@msn.com"
              class="link-sendemail link"
            >给我们发邮件</a>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="row-1-col-2-tit">资产云开放协同创新中心</div>
          <div class="row-1-col-2-con">中国·浙江杭州市西湖区文一路115号 310012</div>
          <div class="row-1-col-2-map">
            <i class="el-icon-location row-1-col-2-icon"></i> Google 地图
          </div>
          <div class="row-1-col-2-tel">T : 96116</div>
          <div class="row-1-col-2-email">M: panzhaohui@msn.com</div>
        </el-col>
      </el-row>
      <FootBar />
    </div>
    <div class="hidden-sm-and-up">
      <mTopBar></mTopBar>
      <div class="con-1">
        <div class="con-1-col-1-tit">联系我们</div>
        <div class="con-1-col-1-con">愿意加入协同，愿意推广使用资产云，愿意贡献您的创意，以及需要反馈任何问题，请联系我们。 我们会尽快回复您。</div>
        <div class="con-1-col-1-btn">
          <a
            role="button"
            id="
          o_contact_mail"
            href="mailto:panzhaohui@msn.com"
            class="con-link-sendemail con-link"
          >给我们发邮件</a>
        </div>
        <div class="con-1-col-2-tit">资产云开放协同创新中心</div>
        <div class="con-1-col-2-con">中国·浙江杭州市西湖区文一路115号 310012</div>
        <div class="con-1-col-2-map">
          <i class="el-icon-location con-1-col-2-icon"></i> Google 地图
        </div>
        <div class="con-1-col-2-tel">T : 96116</div>
        <div class="con-1-col-2-email">M: panzhaohui@msn.com</div>
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
  name: "app",
  components: {
    FootBar,
    mTopBar,
    mFootBar
  }
};
</script>

<style  scoped>
.row-1 {
  height: 750px;
  background-image: url(../icon/contact-bg.png);
}
.row-1-col-1-tit {
  font-size: 40px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  margin: 218px 0 0 16%;
}
.row-1-col-1-con {
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin: 28px 0 0 16%;
}
.row-1-col-1-btn {
  width: 180px;
  height: 50px;
  background: rgba(0, 49, 229, 1);
  border-radius: 25px;
  margin: 82px 0 0 16%;
  text-align: center;
}
.link-sendemail {
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 48px;
}
.row-1-col-2-tit {
  font-size: 30px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin: 218px 0 0 28%;
}
.row-1-col-2-con {
  font-size: 20px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin: 38px 0 0 28%;
}
.row-1-col-2-map {
  font-size: 18px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 18px;
  margin: 27px 0 0 28%;
}
.row-1-col-2-icon {
  color: #0031e5;
  font-size: 20px;
}
.row-1-col-2-tel {
  font-size: 20px;
  font-family: Gotham;
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin: 59px 0 0 28%;
}
.row-1-col-2-email {
  font-size: 20px;
  font-family: Gotham;
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin: 21px 0 0 28%;
}

/**移动端 */
.con-1 {
  padding: 20px;
  background-image: url(../icon/contact-bg.png);
}
.con-1-col-1-tit {
  font-size: 24px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 18px;
  margin-top: 80px;
}
.con-1-col-1-con {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  color: rgba(102, 102, 102, 1);
  line-height: 32px;
  margin-top: 20px;
}
.con-1-col-1-btn {
  width: 120px;
  height: 40px;
  background: rgba(0, 49, 229, 1);
  border-radius: 25px;
  margin-top: 20px;
  text-align: center;
}
.con-link-sendemail {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
}
.con-1-col-2-tit {
  font-size: 24px;
  font-weight: bold;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin-top: 40px;
}
.con-1-col-2-con {
  font-size: 14px;
  font-weight: 400;
  color: rgba(34, 34, 34, 1);
  line-height: 32px;
  margin-top: 20px;
}
.con-1-col-2-map {
  font-size: 14px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
  line-height: 18px;
  margin-top: 20px;
}
.con-1-col-2-icon {
  color: #0031e5;
  font-size: 18px;
}
.con-1-col-2-tel {
  font-size: 16px;
  font-family: Gotham;
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
  margin-top: 20px;
}
.con-1-col-2-email {
  font-size: 16px;
  font-family: Gotham;
  font-weight: bold;
  color: rgba(68, 68, 68, 1);
  line-height: 32px;
}
</style>
