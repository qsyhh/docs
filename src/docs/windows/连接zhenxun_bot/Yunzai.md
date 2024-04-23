---
title: 使用[云崽]的[ws插件]跳过gocq使用icqq连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

## 安装云崽

### ①安装前置

1. 请安装Git，已有可跳过

[点击我进行下载Git](https://registry.npmmirror.com/-/binary/git-for-windows/v2.43.0-rc0.windows.1/Git-2.43.0-rc0-64-bit.exe)

2. 下载node.js

[点击此处下载node.js](https://npmmirror.com/mirrors/node/v18.18.0/node-v18.18.0-x64.msi)

3. 右键鼠标打开`Open Git Bash here`

win11需先点击显示更多选项后才显示`Open Git Bash here`

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
git clone --depth=1 https://gitee.com/yoimiya-kokomi/Miao-Yunzai.git ./Yunzai/Miao-Yunzai/
```
```
cd Yunzai/Miao-Yunzai
```
```
git clone --depth=1 https://gitee.com/yoimiya-kokomi/miao-plugin.git ./plugins/miao-plugin/
```
```
npm --registry=https://registry.npmmirror.com install pnpm -g
```
```
//可选
pnpm config set registry https://registry.npmmirror.com
```
```
pnpm install -P
```
```
git clone --depth=1 https://gitee.com/xiaoye12123/ws-plugin.git ./plugins/ws-plugin/
```
```
pnpm install --filter=ws-plugin
```
```
cd ..
```
```
git clone --depth 1 -b redis https://gitee.com/SHIKEAIXYY/Trss-ComWeChat-Yunzai.git ./redis
```
```
git clone --depth 1 https://gitee.com/touchscale/Qsign.git ./Qsign
```
</details>
&nbsp;

4. 下载jdk

[点击此处下载jdk](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jdk/x64/windows/OpenJDK17U-jdk_x64_windows_hotspot_17.0.11_9.msi)

#### ②说明

1. 安装完的`云崽`和`数据库`在你bat运行的同级目录`Yunzai`的文件夹中

2. `redis`为数据库

3. `Miao-Yunzai`为机器人本体

4. `Qsign`为签名api

### ③启动云崽

1. 请打开`Yunzai`文件夹

2. 运行`redis`数据库（运行`redis/双击我启动redis.bat`即可）

3. 运行`Qsign`（运行`Qsign/一键startAPI.bat`即可）默认是80的签名，端口为801，秘钥为114514

4. 启动机器人并配置

在`Miao-Yunzai`目录下cmd输入`node app`即可

#### ④机器人配置

1. 请输入机器人QQ号(建议用小号)：`这里输入机器人的QQ号即可`

2. 请输入登录密码(为空则扫码登录)：`这里输入机器人的QQ密码即可`

3. 请选择登录端口：`这里请通过方向键选择aPad！！！`（下面的图片选错了别跟着图片走！！！）

4. 请输入主人QQ号：`这里输入用来管理机器人的QQ号即可`

5. 请输入签名API地址（可留空）：`这里输入下方内容即可`

```
http://127.0.0.1:801/sign?key=114514
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

![Alt](../img/机器人配置.png)

5. 触发滑动验证，需要获取ticket通过验证，请选择获取方式:`这里选择 0.自动获取ticket 进行扫码即可`

6. 查看云崽bot是否正常运行，如运行成功请关掉云崽重新输入`node app`并回车启动机器人

7. 连接本地bot(给云崽机器人QQ发送)

```
#ws添加连接
``` 
```
zhenxun_bot,1
``` 
```
ws://127.0.0.1:8080/onebot/v11/ws/
``` 
8. 发送`#ws查看连接`来查看是否连接成功

出现带以下内容的图片，则代表连接成功
```
连接名字: zhenxun_bot
连接类型: 1
当前状态: 已连接
```
### 注意不要关闭云崽和真寻本体

如果连接失败大概率就是你关了真寻或者真寻启动失败了