---
title: 使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## ➊ 安装node.js

- [①使用宝塔面板安装node.js](node.md)
  - 通过宝塔商店安装
    
- [②使用XTerminal/JuiceSSH安装node.js](node2.md)
  - 通过终端apt安装

## ➋ 安装机器人和插件

1.安装云崽机器人

因为TRSS Yunzai不依赖与Miao-Plugin与Genshin(俩大型原神插件)，所以本教程使用TRSS崽

输入以下内容并回车 

```
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai /root/Bot/Yunzai/TRSS-Yunzai && git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai-ICQQ-Plugin /root/Bot/Yunzai/TRSS-Yunzai/plugins/ICQQ-Plugin && git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git /root/Bot/Yunzai/TRSS-Yunzai/plugins/ws-plugin/ && npm --registry=https://registry.npmmirror.com install pnpm -g && pnpm config set registry https://registry.npmmirror.com && pnpm i
```

## ➌ 安装redis数据库

- [①使用宝塔面板安装redis数据库](redis.md)
  - 通过宝塔商店安装
    
- [②使用XTerminal/JuiceSSH安装redis数据库](redis2.md)
  - 通过终端apt安装
  
#### ➍️配置ICQQ版本信息

1. 打开路径`Yunzai\TRSS-Yunzai\plugins\ICQQ-Plugin\node_modules\icqq\lib\core`
 - `没有node_modules`这个文件夹就是你依赖没装（pnpm i）

2. 找到`device.js`文件并打开

3. 翻到第`261`行

![](../../Img/修改ICQQ版本/修改ICQQ.png)

4. 在`261`行后面换成转到`262`行

![](../../Img/修改ICQQ版本/修改ICQQ2.png)

5. 在`262`行顶格位置粘贴下方内容后保存即可

![](../../Img/修改ICQQ版本/修改ICQQ3.png)

```
    {
        name: "A9.0.70.e4b76fcc",
        version: "9.0.70.17645",
        ver: "9.0.70",
        subid: 537228487,
        apad_subid: 537228526,
        qua: "V1_AND_SQ_9.0.70_6698_YYB_D",
        channel: "GuanWang",
        sdkver: "6.0.0.2561",
        buildtime: 0x666bfec0,
        bitmap: 0x08f7ff7c,
        ssover: 0x15,
    },
```

6. 至此修改完成

### ➎ 启动️机器人

1. 执行

```
cd TRSS-Yunzai
screen -R yunzai
node app
```

#### 如果需要退出screen则 Ctrl+a+d 退出

2. 启动机器人
 - 在`TRSS-Yunzai`目录下cmd输入`node app`即可
```
node app
```

当你启动报错237频繁登录/非常用设备登录：

 - 尝试扫码登录Bot
 - 与载挂Bot的设备同一网络登录
 - 在本地常用设备（可登录Bot的设备）进行登录后复制Yunzai/data/icqq/QQ号整个文件夹到服务器的Yunzai/data/路径中后重试
 
### ➏ ️配置机器人

1. 等待Bot的启动完成

2. 对`该窗口(运行Yunzai的Cmd)`输入`以下内容并回车`
 - 白嫖hlh佬
```
#QQ签名https://hlhs-nb.cn/signed/?key=114514
```

3. 对`该窗口(运行Yunzai的Cmd)`输入`以下内容并回车`
 - 密码登录：QQ号 114514 密码 1919810 登录设备 安卓手机(1)/平板(2)，使用扫码登录因密码留空
```
#QQ设置114514:1919810:2
```

4. 设置主人：发送 `#设置主人`，`日志获取验证码`并发送（QQ设置主人）

5. 触发滑动验证，需要获取ticket通过验证，请选择获取方式:`这里选择 0.自动获取ticket 进行扫码即可`

6. 连接本地bot(给云崽机器人QQ发送)

```
#ws添加连接
``` 
```
zhenxun_bot,1
``` 
```
ws://127.0.0.1:8080/onebot/v11/ws/
``` 
7. 发送`#ws查看连接`来查看是否连接成功

出现带以下内容的图片，则代表连接成功
```
连接名字: zhenxun_bot
连接类型: 1
当前状态: 已连接
```

## 后续启动云崽

```
screen -R yunzai
node app
```

#### 如果需要退出screen则 Ctrl+a+d 退出

### 注意不要关闭云崽和真寻本体

如果连接失败大概率就是你关了真寻或者真寻启动失败了