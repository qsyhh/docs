import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import theme from "./theme.js"; 

export default defineUserConfig({
  base: "/",

  theme: hopeTheme({
    // 可以在这里配置主题的选项
    plugins: {
      docsearch: {
        // 你的选项
        // appId, apiKey 和 indexName 是必填的
        appId: "XW744682VE",
        apiKey: "21627bc1b292d00d08fba06616b19b53",
        indexName: "qsyhh",
      },
    },
    // 如果有其他主题选项，可以在这里添加
    // 例如：...theme,
    ...theme, // 如果需要合并主题选项
  }),
  
  locales: {
    "/": {
      lang: "zh-CN",
      title: "zhenxun_bot安装教程",
      description: "这是一个安装zhenxun_bot的教程文档",
    }
  },
});
