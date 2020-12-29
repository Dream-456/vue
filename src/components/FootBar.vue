<template>
  <el-row id="footbar" class="footbar">
    <el-col
      :xl="{ span: 4, offset: 2 }"
      :lg="{ span: 4, offset: 2 }"
      :sm="{ span: 4, offset: 2 }"
    >
      <div class="title">产品和服务</div>
      <router-link class="link" to="/">- 首页</router-link>
    </el-col>
    <el-col
      :xl="{ span: 4, offset: 3 }"
      :lg="{ span: 4, offset: 3 }"
      :sm="{ span: 8, offset: 2 }"
    >
      <div class="title">与我们联系</div>
      <router-link class="link" to="/contact">- 联系我们</router-link>
      <div class="con1">
        <img class src="../icon/phone.png" alt />&nbsp;&nbsp;96116
      </div>
      <div class="con1">
        <img
          class="row2"
          src="../icon/email.png"
          alt
        />&nbsp;&nbsp;panzhaohui@msn.com
      </div>
    </el-col>
    <el-col
      :xl="{ span: 8, offset: 3 }"
      :lg="{ span: 8, offset: 3 }"
      :sm="{ span: 4, offset: 1 }"
    >
      <div class="title">资产云开放协同创新中心</div>
      <router-link class="link" to="/about">- 关于我们</router-link>
      <div class="con2">
        我们作为开放型非营利公共组织，欢迎所有富有创意和激情的团队的加入！我们的愿景是通过大规模的开放协作，培育高效云原生服务新模式，支撑持续的业务演化和变革，推动国有资产管理数字化转型。
        开放、协同，催化创新，共建、共享，促进共赢！
      </div>
    </el-col>
    <div class="foot">
      Copyright © 2020 资产云开放协同创新中心
      <a class="foot-link" href="http://beian.miit.gov.cn/" target="_blank"
        >浙ICP备12028388-5</a
      >
    </div>
  </el-row>
</template>

<script>
export default {
  mounted: function() {
    if (window.location.href.indexOf("login3") != -1) {
      document.getElementById("footbar").style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.link {
  display: inline;
}
.footbar {
  width: 100%;
  height: 500px;
  background: rgba(37, 43, 67, 1);
  background-image: url(../icon/footbarbg.png);
  background-position-y: 260px;
  background-repeat: no-repeat;
  background-size: 100%;
}
.title {
  margin-top: 94px;
  font-size: 24px;

  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
}
.link {
  margin-top: 142px;
  font-size: 16px;

  font-weight: 400;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
  opacity: 0.4;
}
.con1 {
  font-size: 20px;
  font-family: Gotham;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
  img{
    vertical-align: -2px;
  }
}
.con2 {
  width: 480px;
  font-size: 16px;

  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
}
.foot {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  line-height: 50px;
  position: absolute;
  margin: 440px 0 0 160px;
}

.foot-link {
  color: rgba(255, 255, 255, 0.4);
}

.foot-link:hover {
  color: rgba(255, 255, 255, 1);
}
</style>
