---
title: 使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## 安装node.js

- [①使用宝塔面板安装node.js](node.md)
  - 通过宝塔商店安装
    
- [②使用XTerminal/JuiceSSH安装node.js](node2.md)
  - 通过终端apt安装

2. 打开Cmd运行
 - 拉取项目+进入目录+安装yarn+安装依赖

## 安装webui

打开终端运行
 - 拉取项目+进入目录+安装yarn+安装依赖

```
git clone --depth 1 https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot_webui.git /root/Bot/ && cd /root/Bot/zhenxun_bot_webui && npm config set registry https://registry.npmmirror.com && npm install
```

## 运行

```
npm run serve
```

#### 高版本NodeJs无法使用用，目前许多依赖库已不在更新，最高支持到Node 20，但考虑到谦容问题不建议使用8~17以外的版本