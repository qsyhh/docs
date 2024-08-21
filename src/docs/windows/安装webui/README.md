---
title: 配置安装webui
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## 安装webui

1. 下载Node.Js（由于achrinza/node-ipc 9.2.2模块兼容问题所以只8~17版本的Node.Js！！！）

[点击此处下载Node.Js](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/v16.20.2/node-v16.20.2-x64.msi)

2. 打开Cmd运行
 - 拉取项目+进入目录+安装yarn+安装依赖

```
git clone --depth 1 https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot_webui.git && cd zhenxun_bot_webui && npm config set registry https://registry.npmmirror.com && npm install
```

## 运行

```
npm run serve
```

#### 高版本NodeJs无法使用用，目前许多依赖库已不在更新，最高支持到Node 20，但考虑到谦容问题不建议使用8~17以外的版本


