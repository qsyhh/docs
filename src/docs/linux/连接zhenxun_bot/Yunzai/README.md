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

打开宝塔的软件商店搜索`Node.js版本管理器`并下载20.9.0以上的版本（请勿下载18以下的版本！！！）

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

② 安装云崽机器人

因为TRSS Yunzai不依赖与Miao-Plugin与Genshin(俩大型原神插件)，所以本教程使用TRSS崽

```
bash <(curl -L https://gitee.com/SHIKEAIXY/zhenxun/raw/linux/Yunzai.sh)
```

::: details 如果不想使用sh一键下载可点击此处手动下载

&nbsp;2.1. 在终端root/Bot目录依次输入以下内容并回车 

```
cd /root/Bot/
```
```
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai ./Yunzai/TRSS-Yunzai
```
```
cd Yunzai/TRSS-Yunzai
```
```
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai-ICQQ-Plugin ./plugins/ICQQ-Plugin
```
```
git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
```
```
npm --registry=https://registry.npmmirror.com install pnpm -g
```
```
//可选
pnpm config set registry https://registry.npmmirror.com
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

4. 自建签名（如使用他人api可跳过）推荐他人API

先安装一下Jdk
```
sudo apt install openjdk-18-jdk
```

然后下载unidbg-fetch-qsign
```
cd /root/Bot/
git clone --depth 1 https://gitee.com/touchscale/Qsign
```

然后启动unidbg-fetch-qsign（此处的9.0.8可修改）
```
screen -S api
cd Qsign/unidbg-fetch-qsign&&bash bin/unidbg-fetch-qsign --basePath=txlib/9.0.8
```

#### ④机器人/配置（此时应该在root/Bot目录执行）

```
cd TRSS-Yunzai
screen -r yunzai
node app
```

当你启动报错237频繁登录/非常用设备登录时，因尝试扫码/与载挂Bot的设备同一网络登录/在本地设备（可登录Bot的设备）进行登录后复制Yunzai/data/icqq/QQ号整个文件夹到服务器的Yunzai/data/路径中后重试

1. 等待Bot的启动完成

2. 对`该窗口(运行Yunzai的Cmd)`输入`以下内容并回车`
 - 上方自建签名
```
#QQ签名http://127.0.0.1:801/sign?key=114514
```
 - 使用他人签名
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

8. 关于screen命令说明：

* screen命令一般用于Linux的持久化运行
* 其中下方命令当中的name为创建screen窗口的名称
```
screen -S name //创建一个screen窗口
screen -r -d name //强制打开这个screen窗口
screen -ls     //查看全部screen窗口
screen -S name -X quit  //删除这个screen窗口
```

## 后续启动云崽
```
screen -r -d yunzai
node app
```

### 更新ICQQ

私库ICQQ，需你的 GitHub 账号（且在库内）

```
cd plugins/ICQQ-Plugin
pnpm login --scope=@icqqjs --auth-type=legacy --registry=https://npm.pkg.github.com
// 执行完成后需输入账号+密码/密钥
pnpm add icqq@npm:@icqqjs/icqq
```

::: warning
### 注意不要关闭云崽和真寻本体

如果连接失败大概率就是你关了真寻或者真寻启动失败了
:::
