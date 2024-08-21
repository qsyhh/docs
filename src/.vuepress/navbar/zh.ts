import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([

   { text: '介绍', link: '/README.md', icon: 'lightbulb' },
   { text: "选择所需要系统", icon: "computer", prefix: "/docs",
   children: [ { text: "Windows", prefix: "windows/", children: [{ text: "windows安装", icon: "desktop", link: "README.md" }], },
   { text: "Linux Ubuntu", prefix: "./", children: [{ text: "Linux服务器安装", icon: "server", link: "linux/README.md" },{ text: "Linux桌面版安装", icon: "desktop", link: "linux2/ README.md" }], }, ], },
   { text: '问题合集', link: '/ISS.md', icon: 'pen-to-square' },
   { text: '打赏', link: '/sponsor.md', icon: 'heart' },
]);
