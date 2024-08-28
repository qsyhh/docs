---
title: 使用Vanilla-Client连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

# Vanilla-Client仍在开发阶段...

## 最新版真寻Bot支持Onebot12协议

## ①下载WeChat微信

版本有限制，请务必安装下方链接中的微信客户端！！！(已有微信需卸载后再安装)

[点击我进行下载WeChat 3.9.8.25](https://musetransfer.com/s/cpi4miwgj)

如果你的网络良好可通过[Github Releases下载](https://github.com/tom-snow/wechat-windows-versions/releases/download/v3.9.8.25/WeChatSetup-3.9.8.25.exe)

## ②登录微信（微信账号需要实名）

！可选！[安装禁用更新补丁防止自动更新](https://gitee.com/SHIKEAIXYY/Trss-ComWeChat-Yunzai/releases/download/1.1/禁用pc微信自动升级补丁.exe)

## ③下载 Vanilla-Client（不能在有中文文件夹的路径中下载！！！）

```
git clone --depth 1 https://github.com/barryblueice/Vanilla-Client && cd Vanilla-Client
```

## ④安装依赖

```
poetry install
```

## ④运行 Vanilla-Client 

1. 打开 Vanilla-Client/dll 文件夹双击运行 dll-inject.bat 注入（记得要运行微信）
 - 注入完成将会提示 dll inject successdll path : C dll path : 23128  注入结果：1

2. 输入下方内容启动 Vanilla-Client
 - 这里会生成文件并退出是正常的

```
poetry run python main.py
```

3. 重新启动Vanilla-Client

```
poetry run python main.py
```

# 请保持真寻Bot，ComWeChat，微信的运行，不要关闭
