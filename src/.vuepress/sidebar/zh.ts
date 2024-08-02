import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "教程",
      icon: "laptop-code",
      prefix: "docs/",
      // link: "docs/",
      collapsible: true,
      children:[
        {
          text: "Windows",
          icon: "lightbulb",
          prefix: "windows/",
          // link: "windows/",
          collapsible: true,
          children: [
            {
              text: "前置准备",
              icon: "fab fa-markdown",
              link: "前置准备/"
            },
            {
              text: "安装zhenxun_bot",
              icon: "fab fa-markdown",
              prefix: "安装zhenxun_bot/",
              link: "安装zhenxun_bot/",
              collapsible: true,
              children: [
                {
                  text: "安装main真寻教程",
                  icon: "book",
                  link: "main/"
                },
                {
                  text: "安装dev真寻教程",
                  icon: "book",
                  link: "dev/"
                }
              ]
            },
            {
              text: "连接zhenxun_bot",
              icon: "fab fa-markdown",
              prefix: "连接zhenxun_bot/",
              link: "连接zhenxun_bot/",
              collapsible: true,
              children: [
                {
                  text: "使用[云崽]的[ws插件]跳过gocq使用icqq",
                  icon: "book",
                  link: "Yunzai/"
                },
                {
                  text: "使用Gensokyo(QQBot)",
                  icon: "book",
                  link: "Gensokyo/"
                },
                {
                  text: "使用ComWeChat(PC微信)",
                  icon: "book",
                  link: "ComWeChat/"
                },
                {
                  text: "LLOneBot & NapCat",
                  icon: "book",
                  link: "LLOneBot/"
                },
                {
                  text: "使用Lagrange.OneBot",
                  icon: "book",
                  link: "Lagrange.OneBot/"
                },
                {
                  text: "使用Shamrock",
                  icon: "book",
                  link: "Shamrock/"
                }
              ]
            },
            {
              text: "zhenxun_bot插件下载",
              icon: "fab fa-markdown",
              prefix: "plugins/",
              link: "plugins/",
              collapsible: true,
              children: [
                {
                  text: "插件安装问题",
                  icon: "book",
                  link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot/issues/27"
                },
                {
                  text: "真寻索引库",
                  icon: "book",
                  link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot"
                },
                {
                  text: "nb商店",
                  icon: "book",
                  link: "https://nonebot.dev/store/plugins"
                }
              ]
            }
          ]
        },
        {
          text: "Linux",
          icon: "lightbulb",
          prefix: "linux/",
          // link: "linux/",
          collapsible: true,
          children: [
            {
              text: "前置准备",
              icon: "fab fa-markdown",
              link: "前置准备/"
            },
            {
              text: "安装zhenxun_bot",
              icon: "fab fa-markdown",
              prefix: "安装zhenxun_bot/",
              link: "安装zhenxun_bot/",
              collapsible: true,
              children: [
                {
                  text: "安装main真寻教程",
                  icon: "book",
                  link: "main/"
                },
                {
                  text: "安装dev真寻教程",
                  icon: "book",
                  link: "dev/"
                }
              ]
            },
            {
              text: "连接zhenxun_bot",
              icon: "fab fa-markdown",
              prefix: "连接zhenxun_bot/",
              link: "连接zhenxun_bot/",
              collapsible: true,
              children: [
                {
                  text: "使用[云崽]的[ws插件]跳过gocq使用icqq",
                  icon: "book",
                  link: "Yunzai/"
                },
                {
                  text: "使用Gensokyo(QQBot)",
                  icon: "book",
                  link: "Gensokyo/"
                },
                {
                  text: "LLOneBot & NapCat",
                  icon: "book",
                  link: "LLOneBot/"
                },
                {
                  text: "使用Lagrange.OneBot",
                  icon: "book",
                  link: "Lagrange.OneBot/"
                },
                {
                  text: "使用Shamrock",
                  icon: "book",
                  link: "Shamrock/"
                }
              ]
            },
            {
              text: "zhenxun_bot插件下载",
              icon: "fab fa-markdown",
              prefix: "plugins/",
              link: "plugins/",
              collapsible: true,
              children: [
                {
                  text: "插件安装问题",
                  icon: "book",
                  link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot/issues/27"
                },
                {
                  text: "真寻索引库",
                  icon: "book",
                  link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot"
                },
                {
                  text: "nb商店",
                  icon: "book",
                  link: "https://nonebot.dev/store/plugins"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "问题合集",
      icon: "book",
      prefix: "issues/",
      children: "structure",
    }
  ]
})
