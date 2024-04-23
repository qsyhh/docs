---
title: 使用go-cqhttp连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

::: danger

再提醒你一句，gocq作者已经不再更新，签名服务以无法解决gocq45问题

:::
  
1. 下载go-cqhttp（此时我们的目录在root/Bot）

```
git clone --depth 1 -b go-cqhttp_1.2.0_linux_arm64.deb https://gitee.com/SHIKEAIXY/zhenxun.git ./go-cqhttp
```

2. 打开root/Bot/go-cqhttp/config.yml，修改qq账号和密码，后保存

3. 安装unidbg-fetch-qsign（返回root/Bot目录终端输入）

先安装一下jdk17
```
sudo apt install openjdk-17-jdk
```

然后下载unidbg-fetch-qsign
```
git clone --depth 1 https://gitee.com/touchscale/Qsign
```

然后启动unidbg-fetch-qsign（此处的8.9.78可修改）
```
cd Qsign
screen -S api
cd unidbg-fetch-qsign&&bash bin/unidbg-fetch-qsign --basePath=txlib/8.9.78
```

4. 启动go-cqhttp（此时应该在root/Bot/go-cqhttp目录终端输入）

输入以下内容回车即可
```
screen -S gocq
go-cqhttp
```

5. 我说过gocq寄了，无法登录就更换签名版本（唯一的办法，不一定能行）


使用他人提供的签名API

::: tip
1. 签名API推荐使用78或85.
2. 由于签名API来自他人部署可能不稳定谨慎使用
3. API收集来自煌,聊群：695596638
:::

::: details 煌提供的签名API

- 煌群：695596638

======「8.9.78」======
``` link
https://huai-huai-8-9-78.hf.space/sign?key=ngm
```
``` link
https://yue-yue-moon.hf.space/sign?key=ngm
```
``` link
http://124.70.223.35:4414/sign?key=ngm
```
``` link
http://h.winterqkl.cn:4414/sign?key=ngm
```
:::

::: details 叽叽叽提供的签名API

- 叽叽叽群：未知

======「8.9.78」======
``` link
http://47.108.180.154:9001/sign?key=baicai
```
======「8.9.93」======
``` link
http://47.108.180.154:9002/sign?key=baicai
```
======「9.0.17」======
``` link
http://47.108.180.154:9003/sign?key=baicai
```
:::

::: details 小运提供的签名API

- 小运群：未知

======「8.9.78」======
``` link
http://salipet.com:1535/sign?key=2394
```
======「8.9.83」======
``` link
http://salipet.com:1692/sign?key=2394
```
:::

::: details 咕咕咕提供的签名API

- 咕咕咕群：235589956或339695166
- 签名状态：http://47.108.180.154:3001/status/qsign

======「8.9.78」======
``` link
http://47.108.180.154:8978/sign?key=114514  
```
======「8.9.85」======
``` link
http://47.108.180.154:8985/sign?key=114514
```
======「8.9.88」======
``` link
http://47.108.180.154:8988/sign?key=114514
```
======「8.9.90」======
``` link
http://47.108.180.154:8990/sign?key=114514
```
======「8.9.93」======
``` link
http://47.108.180.154:8993/sign?key=114514
```
:::

6. 关于screen命令说明：

* screen命令一般用于Linux的持久化运行
* 其中下方命令当中的name为创建screen窗口的名称
```
screen -S name //创建一个screen窗口
screen -r -d name //强制打开这个screen窗口
screen -ls     //查看全部screen窗口
screen -S name -X quit  //删除这个screen窗口
```
