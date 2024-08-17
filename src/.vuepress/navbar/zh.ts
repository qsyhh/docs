import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([

   { text: '介绍', link: '/README.md', icon: 'ellipsis' },
   { text: "选择所需要系统", icon: "lightbulb", prefix: "/docs",
   children: [ { text: "Windows", icon: "lightbulb", prefix: "windows/", children: [{ text: "windows安装", icon: "ellipsis", link: "README.md" }], },
   { text: "Linux", icon: "lightbulb", prefix: "linux/", children: [{ text: "Linux安装", icon: "ellipsis", link: "README.md" }], }, ], },
   { text: '打赏', link: '/sponsor.md', icon: 'ellipsis' },
]);
