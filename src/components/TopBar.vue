<template>
  <div id="topbar" class="topbar">
    <div class="topbar__icon">
      <img class="icon-img" src="../icon/logo.png" />
    </div>
    <div class="topbar__barlist">
      <div v-for="(items, index) in nav" :key="index" @click="handleNav(index)">
        <router-link
          class="link"
          :to="items.src"
          :class="!items.isCur ? 'noselected' : 'selected'"
          >{{ items.tit }}</router-link
        >
      </div>
    </div>
    <div class="topbar__linkbtn">
      <div>
        <a
            class="link-login-con"
            href="http://assetdocs.assetcloud.org.cn/"
            target="_blank"
            >文档</a>
      </div>
      <div>
        <span class="break"></span>
      </div>
      <div>
        <div class="link-login">
          <a
            class="link-login-con"
            href="http://platform.assetcloud.org.cn/"
            target="_blank"
            >登录</a
          >
        </div>
      </div>
    </div>
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
        // {
        //   tit: "编码平台",
        //   src: "/coding",
        //   isCur: false
        // },
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
      ],
    };
  },
  watch:{
    $route:{
      handler(newRouter){
        this.handleRoute(newRouter)
      },
      immediate: true
    }
  },
  methods: {
    handleNav(obj) {
      this.nav.forEach(function(item) {
        item.isCur = false;
      });
      this.nav[obj].isCur = true;
      sessionStorage.setItem('nav',JSON.stringify(this.nav))
    },
    handleRoute(newRouter){
      let arr = []
      for(let i in this.nav){
        arr = [...arr, this.nav[i].src]
        if(newRouter.path ==  this.nav[i].src){
          this.nav[i].isCur = true
        }else{
          this.nav[i].isCur = false
        }
      }
      if(arr.indexOf(newRouter.path) < 0){
        this.nav = JSON.parse(sessionStorage.getItem('nav'))
      }
    }
  },
  mounted: function() {
    if (window.location.href.indexOf("login3") != -1) {
      document.getElementById("topbar").style.display = "none";
    }
  }
};
</script>

<style lang="scss" scoped>
.topbar {
  padding: 0 3%;
  display: flex;
  justify-content: space-between;
  line-height: 100px;

  &__icon {
    width: 150px;

    .icon-img {
      vertical-align: middle;
    }
  }
  &__barlist {
    display: flex;
    justify-content: space-around;
    width: 1000px;

    .selected {
      color: rgba(0, 47, 228, 1) !important;
    }
    .noselected {
      color: rgba(34, 34, 34, 1);
    }
  }
  &__linkbtn {
    width: 150px;
    display: flex;
    justify-content: space-between;

    .break {
      width: 1px;
      height: 15px;
      background: rgba(220, 220, 220, 1);
      float: left;
      margin: 43px 0 0 0;
    }
    .link-login {
      width: 70px;
      height: 30px;
      border: 1px solid rgba(0, 48, 228, 1);
      border-radius: 15px;
      text-align: center;
      margin-top: 35px;
      line-height: 30px;
    }

    .link-login-con:hover {
      color: rgba(0, 47, 228, 1);
    }
    .link-login-con {
      display: block;
      font-size: 20px;
      color: rgba(34, 34, 34, 1);
    }
  }
  .link {
    font-size: 20px;
    font-weight: 400;
    text-decoration: none;
    line-height: 100px;
    color: rgba(34, 34, 34, 1);
  }
  .link:hover {
    color: rgba(0, 47, 228, 1);
  }
}
</style>
