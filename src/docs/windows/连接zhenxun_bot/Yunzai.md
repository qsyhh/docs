---
title: 使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## 安装云崽

### ①安装前置

1. 请安装Git，已有可跳过

[点击我进行下载Git](https://registry.npmmirror.com/-/binary/git-for-windows/v2.43.0-rc0.windows.1/Git-2.43.0-rc0-64-bit.exe)

2. 下载node.js

[点击此处下载node.js](https://mirrors.tuna.tsinghua.edu.cn/nodejs-release/v20.9.0/node-v20.9.0-x86.msi)

3. 右键鼠标打开`Open Git Bash here`

Win11需先点击显示更多选项后才显示`Open Git Bash here`

![Alt](../img/win11打开git.png)

![Alt](../img/win打开git2.png)
 
然后运行下方命令
```
bash <(curl -L https://gitee.com/SHIKEAIXY/zhenxun/raw/master/Yunzai.sh)
```

<details>
  <summary>如果不想使用sh一键下载可点击此处手动下载</summary>

&nbsp;2.1. 在cmd依次输入以下内容并回车 

```
git clone --depth 1 https://gitee.com/TimeRainStarSky/Yunzai ./Yunzai/TRSS-Yunzai
```
```
cd Yunzai/TRSS-Yunzai
```
```
npm --registry=https://registry.npmmirror.com install pnpm -g
```
```
//可选
pnpm config set registry https://registry.npmmirror.com
```
```
git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
```
```
pnpm i
```
```
cd ..
```
```
git clone --depth 1 -b redis https://gitee.com/SHIKEAIXYY/Trss-ComWeChat-Yunzai.git ./redis
```
</details>
&nbsp;

#### ②说明

1. 安装完的`云崽`和`数据库`在你bat运行的同级目录`Yunzai`的文件夹中

2. `redis`为数据库

3. `Trss-Yunzai`为机器人本体


### ③启动云崽

1. 请打开`Yunzai`文件夹

2. 运行`redis`数据库（运行`redis/双击我启动redis.bat`即可）

3. 启动机器人并配置
 - 在`TRSS-Yunzai`目录下cmd输入`node app`即可
```
node app
```

# 手动部署签名api（如果打算使用他人的api可跳过）

### ①下载java 

1.[点击此处下载Jdk](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/18/jdk/x64/windows/OpenJDK18U-jdk_x64_windows_hotspot_18.0.2.1_1.msi)

2.安装完成后打开cmd运行`java`查看是否有输出

[如果没有输出点击此处查看如何配置变量，如果你看不懂那就没办法了](https://blog.csdn.net/qq_41436122/article/details/82620080)

配置完成后重新启动服务器后再打开cmd运行`java`查看是否有输出

### ②使用

1.下载Qsign(请在Yunzai目录克隆)

```
git clone --depth 1 https://gitee.com/SHIKEAIXYY/Qsign
```

2.运行`一键startAPI.bat`启动签名，自行根据提示配置TRSS路径

没有闪退即可使用（默认使用8.9.78版本）

3.切记api不要关闭！！！

#### ④机器人配置

1. 等待Bot的启动完成

2. 对`该窗口(运行Yunzai的Cmd)`输入`以下内容并回车`
 - 上方自建签名
```
#QQ签名http://127.0.0.1:801/sign?key=114514
```
 - 使用他人签名
```
#QQ签名https://huai-huai-8-9-78.hf.space/sign?key=ngm
```

3. 对`该窗口(运行Yunzai的Cmd)`输入`以下内容并回车`
 - 密码登录：QQ号 114514 密码 1919810 登录设备 安卓手机(1)/平板(2)
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
### 注意不要关闭云崽和真寻本体

如果连接失败大概率就是你关了真寻或者真寻启动失败了

### 更新ICQQ

私库ICQQ，需你的 GitHub 账号（且在库内）

```
pnpm login --scope=@icqqjs --auth-type=legacy --registry=https://npm.pkg.github.com
pnpm add icqq@npm:@icqqjs/icqq
```