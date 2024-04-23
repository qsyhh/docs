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
  
## ①下载go-cqhttp 

### gitee下载

请安装Git，已有可跳过

[点击我进行下载Git](https://registry.npmmirror.com/-/binary/git-for-windows/v2.43.0-rc0.windows.1/Git-2.43.0-rc0-64-bit.exe)

```
git clone --depth 1 https://gitee.com/SHIKEAIXYY/1.1.9unidbg_and_gocq.git
```
### zip下载 (不建议!)

[点击此处下载签名和go-cqhttp](https://gitee.com/SHIKEAIXYY/1.1.9unidbg_and_gocq/repository/archive/master.zip)

下载后请配置`windows_amd64`而`unidbg-fetch-qsign-1.1.9`一会要用

## ②配置go-cqhttp

1.打开config.yml文件，修改`QQ账号和密码`保存即可（先不要重新启动！！！）

 ![Alt](../img/账号.png)

# 部署签名api

### ①下载java 

1.[点击此处下载jdk](https://mirrors.tuna.tsinghua.edu.cn/Adoptium/17/jdk/x64/windows/OpenJDK17U-jdk_x64_windows_hotspot_17.0.11_9.msi)

2.安装完成后打开cmd运行`java`查看是否有输出

[如果没有输出点击此处查看如何配置变量，如果你看不懂那就没办法了](https://blog.csdn.net/qq_41436122/article/details/82620080)

配置完成后重新启动服务器后再打开cmd运行`java`查看是否有输出

### ②使用

1.打开`1.1.9unidbg_and_gocq\unidbg-fetch-qsign-1.1.9`双击运行`一键启动.bat` (就[下载go-cqhttp](https://gitee.com/SHIKEAIXY/zhenxun/blob/master/README.md#%E4%B8%8B%E8%BD%BDgo-cqhttp)下载的那个文件里面)

没有闪退即可使用（默认使用8.9.78版本）

2.签名启动成功后再重新启动 go-cqhttp.bat 登录即可

3.切记api不要关闭！！！

### ③配置

1.端口默认是`520`

2.key默认为`1314`

3.如需修改可打开`unidbg-fetch-qsign-1.1.9\txlib`找到你要修改的版本打开这个文件如修改`8.9.71`则打开`8.9.71\config.json`进行修改并修改gocq的配置文件

![Alt](../img/签名配置端口key.png)

### ④启动 go-cqhttp

1.返回上一目录打开`windows_amd64`文件

2.双击 `go-cqhttp.bat` 进行验证即可

![Alt](../img/gocq_bat.png)

3.如果出现以下内容则不用管它，不影响登录和使用 **（如果你看着变扭请看下一条）** 

```
[WARNING]: Callback error: Packet timed out, Or response data is empty
[ERROR]: Protocol -> parse incoming packet error: return code unsuccessful: -10005
```

4.在gocq运行的页面中使用`ctrl+c`后输入下方内容回车重新启动即可
```
go-cqhttp
```

5.自动提交滑块ticket无反应
- 这个不知道有没有解决办法
- 如果没反应请使用`2. 手动抓取提交`
- [使用安卓手机点击此处下载](https://maupdate.rainchan.win/txcaptcha.apk)

### ⑤关于其他签名协议登录

1.现在个个版本都不稳定，看你63版本到最新版本哪个能登了

2.换登录版本教程在`go-cqhttp_windows_amd64\data\versions\修改版本.md`中

### 如果你使用了gocq还登录上就别~~作~~让他好好run


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