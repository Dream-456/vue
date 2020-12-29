<template>
  <footer class="foot-bg">
    <ul>
      <li>
        <div class="title">产品和服务</div>
        <div>
          <router-link class="link" to="/">- 首页</router-link>
        </div>
      </li>
      <li>
        <div class="title">与我们联系</div>
        <div>
          <router-link class="link" to="/contact">- 联系我们</router-link>
        </div>
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
      </li>
      <li>
        <div class="title">资产云开放协同创新中心</div>
        <div>
          <router-link class="link" to="/about">- 关于我们</router-link>
        </div>
      </li>
    </ul>
    <div class="foot">
      Copyright © 2020 资产云开放协同创新中心
      <a class="foot-link" href="http://beian.miit.gov.cn/" target="_blank"
        >浙ICP备12028388-5</a
      >
    </div>
  </footer>
</template>

<style scoped>
.foot-bg {
  width: 100%;
  height: 430px;
  background: rgba(37, 43, 67, 1);
  background-image: url(../icon/footbarbg.png);
  background-position-y: 300px;
  background-position-x: -80px;
  background-repeat: no-repeat;
  background-size: 300%;
  position: absolute;
}
ul {
  margin: 20px;
  padding: 0;
}
.title {
  margin-top: 14px;
  font-size: 16px;

  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.link {
  margin-top: 9px;
  font-size: 12px;

  font-weight: 400;
  text-decoration: none;
  color: rgba(255, 255, 255, 1);
  line-height: 30px;
  opacity: 0.4;
}
.con1 {
  font-size: 12px;

  color: rgba(255, 255, 255, 1);
  line-height: 30px;
}
.con1 img {
  width: 12px;
  height: 14px;
  vertical-align: -4px;
}
.foot {
  font-size: 12px;

  font-weight: 400;
  color: rgba(255, 255, 255, 0.4);
  line-height: 50px;
  margin-top: 80px;
  margin-left: 20px;
}

.foot-link {
  color: rgba(255, 255, 255, 0.4);
}
</style>
