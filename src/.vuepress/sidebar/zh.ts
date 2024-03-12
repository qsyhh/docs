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
                link: "安装zhenxun_bot/"
              },
              {
                text: "连接zhenxun_bot",
                icon: "fab fa-markdown",
                link: "连接zhenxun_bot/"
              },
              {
                text: "zhenxun_bot插件下载",
                icon: "fab fa-markdown",
                prefix: "plugins/",
                link: "plugins/",
                collapsible: true,
                children: [
                  {
                    text: "真寻索引库",
                    icon: "book",
                    link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot"
                  },
                  {
                    text: "nb商店(不是全部都谦融",
                    icon: "book",
                    link: "https://nonebot.dev/store/plugins"
                  }
                ]
              }
            ],
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
                link: "安装zhenxun_bot/"
              },
              {
                text: "连接zhenxun_bot",
                icon: "fab fa-markdown",
                prefix: "连接zhenxun_bot/",
                link: "连接zhenxun_bot/",
                collapsible: true,
                children: [
                  {
                    text: "使用go-cqhttp连接真寻bot(不建议",
                    icon: "book",
                    link: "go-cqhttp/"
                  },
                  {
                    text: "使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot（在2024年2月5号的晚上7点ICQQ删库...建议各位早日使用Gensokyo）",
                    icon: "book",
                    link: "yunzai/"
                  },
                  {
                    text: "使用Gensokyo(QQBot)连接真寻bot",
                    icon: "book",
                    link: "gensokyo/"
                  },
                ]
              },
              {
                text: "zhenxun_bot插件下载",
                icon: "fab fa-markdown",
                prefix: "plugins/",
                // link: "plugins/",
                collapsible: true,
                children: [
                  {
                    text: "真寻索引库",
                    icon: "book",
                    link: "https://github.com/zhenxun-org/nonebot_plugins_zhenxun_bot"
                  },
                  {
                    text: "nb商店(不是全部都谦融",
                    icon: "book",
                    link: "https://nonebot.dev/store/plugins"
                  }
                ]
              }
            ],
          },
        ],
    },
    {
      text: "问题合集",
      icon: "book",
      prefix: "issues/",
      children: "structure",
    }
  ],
});
