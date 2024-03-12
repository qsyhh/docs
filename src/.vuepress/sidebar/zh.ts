import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  "/": [
    "",
    {
      text: "教程",
      icon: "laptop-code",
      prefix: "docs/",
      link: "docs/",
      collapsible: true,
      children:[
          {
            text: "Windows",
            icon: "lightbulb",
            prefix: "windows/",
            link: "windows/",
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
            children: "structure"
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
