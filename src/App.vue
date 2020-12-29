<template>
  <div id="app">
    <div class="hidden-xs-only">
      <TopBar></TopBar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/display.css";
import TopBar from "./components/TopBar";
export default {
  components: {
    TopBar
  }
};
</script>

<style>
/**初始化CSS */
#app {
  font-family: "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑",
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
html,
body {
  width: 100%;
  height: 100%;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  vertical-align: top;
  border: none;
}
.clearf:after,
.clearf:before {
  content: "";
  display: block;
  clear: both;
}
@media screen and (min-width: 768px) {
  body {
    zoom: 0.4;
  }
}
@media screen and (min-width: 1200px) {
  body {
    zoom: 0.68;
  }
}
@media screen and (min-width: 1920px) {
  body {
    zoom: 1;
  }
}

/**通用CSS */
div {
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.link,
.con-link {
  display: block;
}

::-webkit-scrollbar {
  width: 10px;
  height: 0px;
  background: #e7e7e7;
}
::-webkit-scrollbar-thumb {
  height: 0px;
  border-radius: 4px;
  background: #818181;
}
</style>
