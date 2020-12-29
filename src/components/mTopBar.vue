<template>
  <div id="m-bar" class="m-barbg">
    <el-row class="m-top" type="flex">
      <el-col :span="12" class="m-icon">
        <img src="../icon/logo.png" alt />
      </el-col>
      <el-col :span="12" class="m-btn">
        <div class="m-btn-list" @click="changeMenu">
          <div v-if="!showSubmenu">
            <span class="m-btn-line" style="width:24px"></span>
            <span class="m-btn-line" style="width:30px"></span>
            <span class="m-btn-line" style="width:18px"></span>
          </div>
          <div v-else>
            <i class="el-icon-close m-btn-back"></i>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row id="m-bar-content" v-if="showSubmenu" class="m-menu-bg">
      <div class="m-menu-content">
        <div>
          <ul>
            <li
              class="m-menu-list"
              v-for="(items, index) in nav"
              :key="index"
              @click="changePage(index)"
            >
              <router-link class="m-link" :to="items.src">{{
                items.tit
              }}</router-link>
            </li>
          </ul>
        </div>
        <div class="m-line"></div>
        <div class="m-login">
          <div class="m-link-lt" @click="changePage">
            <a
            class="link-login-con"
            href="http://assetdocs.assetcloud.org.cn/"
            target="_blank"
            >文档</a>
          </div>
          <div class="m-link-login" @click="changePage">
            <a
              class="link m-link-login-con"
              href="http://mobile.assetcloud.org.cn/"
              target="_blank"
              >登陆</a
            >
          </div>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      nav: [
        {
          tit: "首页",
          src: "/",
          isCur: true
        },
        {
          tit: "资产云",
          src: "/assetcloud",
          isCur: false
        },
        {
          tit: "设计平台",
          src: "/design",
          isCur: false
        },
        {
          tit: "协同平台",
          src: "/collaboration",
          isCur: false
        },
        {
          tit: "应用平台",
          src: "/application",
          isCur: false
        },
        {
          tit: "共享平台",
          src: "/shared",
          isCur: false
        },
        {
          tit: "创新平台",
          src: "/innovation",
          isCur: false
        },
        {
          tit: "资讯动态",
          src: "/news",
          isCur: false
        }
      ]
    };
  },
  methods: {
    changeMenu: function() {
      this.showMenu = !this.showMenu;
      if (this.showMenu == true) {
        var top = document.documentElement.scrollTop;
        document.body.addEventListener("touchmove", this.bodyScroll, false);
        document.body.style.position = "fixed";
        document.body.style.top = -top + "px";
      } else {
        var top = document.body.style.top;
        document.body.addEventListener("touchmove", this.bodyScroll, true);
        document.body.style.position = "static";
        document.documentElement.scrollTop = -Number(top.replace("px", ""));
      }
    },
    bodyScroll: function(event) {
      event.preventDefault();
    },
    changePage: function(index) {
      this.showMenu = !this.showMenu;
      document.body.addEventListener("touchmove", this.bodyScroll, true);
      document.body.style.position = "static";
      this.handleNav(index)
    },
    handleNav(obj) {
      this.nav.forEach(function(item) {
        item.isCur = false;
      });
      this.nav[obj].isCur = true;
    }
  },
  computed: {
    showSubmenu: function() {
      // if (this.showMenu != true) {
      //   document.getElementById("app").style.overflow = "visible";
      // }
      return this.showMenu;
    }
  }
};
</script>

<style scoped>
.m-barbg {
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  display: block;
  background: white;
  box-shadow: 0px 2px 10px #ccccccb0;
  z-index: 999;
}

.m-top {
  width: 100%;
  height: 70px;
  line-height: 70px;
}
.m-icon {
  text-align: left;
  vertical-align: middle;
}
.m-icon img {
  width: 67.8%;
  height: 50%;
  margin-left: 6.4%;
  margin-top: 7%;
}
.m-btn {
  text-align: right;
  margin-right: 3.4%;
}
.m-btn-list {
  width: 40px;
  height: 40px;
  margin-top: 10px;
  float: right;
  line-height: 40px;
}
.m-btn-list span:first-child {
  margin-top: 15px;
}
.m-btn-line {
  height: 3px;
  background: rgba(0, 48, 228, 1);
  margin: 3px auto;
  display: block;
  float: right;
}
.m-btn-back {
  font-size: 2.2rem;
  color: rgba(0, 48, 228, 1);
  margin-top: 12px;
  display: block;
  float: right;
}
.m-menu-list {
  line-height: 50px;
  margin-left: 3.4%;
}
.m-menu-bg {
  width: 100%;
  height: 800px;
  position: absolute;
  background-color: rgba(34, 34, 34, 0.5);
}
.m-menu-content {
  width: 100%;
  background-color: white;
  color: #000;
}
.m-link {
  font-size: 16px;
  font-weight: 500;
  color: rgba(34, 34, 34, 1);
  line-height: 50px;
  text-decoration: none;
  display: block;
}
.m-line {
  width: 100%;
  height: 1px;
  background: rgba(238, 238, 238, 1);
}
.m-login {
  padding: 20px 5px;
  height: 60px;
  background-color: white;
}
.m-link-luntan {
  float: left;
  line-height: 30px;
  margin-left: 3.4%;
  color: rgba(34, 34, 34, 1);
}
.m-link-login {
  width: 70px;
  height: 30px;
  border: 1px solid rgba(0, 48, 228, 1);
  border-radius: 15px;
  line-height: 30px;
  text-align: center;
  float: right;
  margin-right: 3.4%;
}
.m-link-login-con {
  display: block;
  color: rgba(34, 34, 34, 1);
}
</style>
