import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Application from "../views/Application.vue";
import AssetCloud from "../views/AssetCloud.vue";
import Coding from "../views/Coding.vue";
import Collaboration from "../views/Collaboration.vue";
import Contact from "../views/Contact.vue";
import Innovation from "../views/Innovation.vue";
import Shared from "../views/Shared.vue";
import News from "../views/News.vue";
import Design from "../views/Design.vue";
import DesignCase from "../views/DesignCase.vue";
import DesignDetails from "../views/DesignDetails.vue";


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/application",
      name: "application",
      component: Application
    },
    {
      path: "/assetCloud",
      name: "assetCloud",
      component: AssetCloud
    },
    {
      path: "/coding",
      name: "coding",
      component: Coding
    },
    {
      path: "/collaboration",
      name: "collaboration",
      component: Collaboration
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: "/innovation",
      name: "innovation",
      component: Innovation
    },
    {
      path: "/shared",
      name: "shared",
      component: Shared
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/design",
      name: "design",
      component: Design
    },
    {
      path: "/designCase",
      name: "designCase",
      component: DesignCase
    },
    {
      path: "/designDetails",
      name: "designDetails",
      component: DesignDetails
    }
  ]
});
