import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "zhenxun_bot安装教程",
      description: "这是一个安装zhenxun_bot的教程文档",
    }
  },

  theme,
});
