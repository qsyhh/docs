---
title: 使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

### 一 安装云崽

#### 1 安装前置

① 下载node.js

::: details 使用宝塔面板安装node.js（非终端）

打开宝塔的软件商店搜索`Node.js版本管理器`并下载20.9.0的版本（也可以下载16/18的版本）

![下载node管理器](../../img/下载node管理器.png)

:::

::: details 使用XTerminal安装node.js（终端安装）

终端依次输入下方内容

```
sudo apt install apt-transport-https curl ca-certificates software-properties-common
curl -sL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```
:::

② 安装云崽机器人（此时应该在root/Bot目录）

```
bash <(curl -L https://gitee.com/SHIKEAIXY/zhenxun/raw/linux/Yunzai.sh)
```

::: details 如果不想使用sh一键下载可点击此处手动下载

&nbsp;2.1. 在终端root/Bot目录依次输入以下内容并回车 

```
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git ./Miao-Yunzai/
```
```
cd Miao-Yunzai
```
```
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```
```
git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
```
```
npm --registry=https://registry.npmmirror.com install pnpm -g
```
```
pnpm i
```
:::

③ 安装redis数据库

::: details 使用宝塔面板安装redis数据库（非终端）

还是打开软件商店搜索`redis`（剩下的你自己搞吧，这么简单你不会还不会吧？）

:::

::: details 使用XTerminal安装redis数据库（终端安装）

终端输入下方内容

```
sudo apt install redis-server
```

安装完成后 Redis 服务会自动启动

可以使用以下命令来检查 Redis 服务的运行状态（如果 Redis 服务正在运行，你将看到类似于 "active (running)" 的输出）

```
sudo systemctl status redis-server
```

Redis 在系统启动时自动启动可以使用下方命令

```
sudo systemctl enable redis-server
```

:::

④ 安装unidbg-fetch-qsign（此时应该在root/Bot目录）

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

#### 2 机器人/配置（此时应该在root/Bot目录执行）

```
cd Miao-Yunzai
screen -r -d yunzai
node app
```

1. 请输入机器人QQ号(建议用小号)：`这里输入机器人的QQ号即可`

2. 请输入登录密码(为空则扫码登录)：`这里输入机器人的QQ密码即可`

3. 请选择登录端口：`这里请通过方向键选择aPad！！！`（图片选错了，别跟着图片走！！！）

4. 请输入主人QQ号：`这里输入用来管理机器人的QQ号即可`

5. 请输入签名API地址（可留空）：`这里输入下方内容即可`

```
http://http://127.0.0.1:801/sign?key=114514
```

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

![机器人配置](../../img/机器人配置.png)

5. 触发滑动验证，需要获取ticket通过验证，请选择获取方式:`这里选择 0.自动获取ticket 进行扫码即可`

6. 查看云崽bot是否正常运行，如运行成功请关掉云崽重新输入`node app`并回车启动机器人

### 二 连接本地bot

依次给云崽机器人QQ发送

```
#ws添加连接
``` 
```
zhenxun_bot,1
``` 
```
ws://127.0.0.1:8080/onebot/v11/ws/
``` 
发送`#ws查看连接`来查看是否连接成功

出现带以下内容的图片，则代表连接成功
```
连接名字: zhenxun_bot
连接类型: 1
当前状态: 已连接
```

::: warning
### 注意不要关闭云崽和真寻本体

如果连接失败大概率就是你关了真寻或者真寻启动失败了
:::
