---
title: 使用llonebot连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

::: danger
本站该教程已经过作者允许上传
另外请勿将与本教程任何相关内容上传至流量平台如：B站
:::

# NapCatQQ相关

1. NapCatQQ 是基于 PC NTQQ 本体实现一套无头 Bot 框架。

2. NapCat名字寓意 瞌睡猫QQ，像睡着了一样在后台低占用运行的无需GUI界面的NTQQ

3. [NapCat官方文档](https://napneko.github.io/zh-CN/)

4. 本教程以 NapCat V1.8.4 为例

# 下载并安装Linux NTQQ

目前NapCat V1.8.4已支持到QQ Version: Linux 3.2.12-26702

1. 打开终端运行

```
wget https://dldir1.qq.com/qqfile/qq/QQNT/f74d4392/linuxqq_3.2.12-26702_amd64.deb && sudo apt install ./linuxqq_3.2.12-26702_amd64.deb -y 
```

# 安装NapCatQQ 

1. [前往Github Releases](https://github.com/NapNeko/NapCatQQ/releases)下载最新的NapCatQQ

 - 打开 Assets 下载 NapCat.linux.x64.zip 即可

![](../../Img/NapCatQQ/下载NapCatQQ.png)

2. 解压后打开 NapCat.linux.x64/config 目录

3. 复制一份 onebot11.json 重命名为 onebot11_<你的QQ号>.json 
 - 如：onebot11_536606294.json 

4. 编辑onebot11_<你的QQ号>.json ，保存
- 修改reverseWs配置（反向websocket服务）
- 17～18行的enable-urls

```
    "enable": true,
    "urls": ["ws://127.0.0.1:8080/onebot/v11/ws/"]
```

3. 运行 NapCatQQ 并扫码登陆QQ

```
napcat.sh
```



咕咕咕...