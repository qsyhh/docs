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

[点击此处下载Node.Js](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/v16.13.0/node-v16.13.0-x86.msi)

2. 打开Cmd运行
 - 拉取项目+进入目录+安装yarn+安装依赖

```
git clone https://github.com/HibiKier/zhenxun_bot_webui.git && cd zhenxun_bot_webu && npm install -g yarn && yarn add @vue/cli -g && yarn install
```

## 配置密码

1. 打开`configs/config.yaml`文件

```
web-ui:
  # web-ui
  # USERNAME: 前端管理用户名
  # PASSWORD: 前端管理密码
  USERNAME: admin
  PASSWORD: 
```

## 运行

```
yarn run serve
```

#### 高版本NodeJs也可以用，这里提供方法（不建议就是了）

1. 只要把node-ipc版本更换为兼容高版本NodeJs的即可

2. 修改`yarn.lock`即可
 - 原版本号9.2.2改为`10.5.2`
 - tgz下载链接版本改为`10.1.11`
 - integrity改为`sha512-3z2yix2G8KP8gW6dWgRPj61Mu2nleqbWqTuS5vluZiXe2VDFkimqaeb4fnuS6JV2nhJz4gX+PR5PQjRKsuXm8w==`

3. 重新安装依赖

```
yarn install
```


