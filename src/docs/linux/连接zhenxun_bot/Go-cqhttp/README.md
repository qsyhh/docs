---
title: 使用go-cqhttp连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

::: danger

再提醒你一句，gocq作者已经不再更新，签名服务以无法解决gocq45问题

:::
  
### gitee下载

```
cd /root/Bot
git clone --depth 1 https://gitee.com/SHIKEAIXYY/Qsign.git ./Gocq&Qsugn/unidbg-fetch-qsign-1.1.9
git clone -b go-cqhttp_1.2.0_linux_arm64.deb --depth 1 https://gitee.com/SHIKEAIXY/zhenxun.git ./Gocq&Qsugn/go-cqhttp_linux_amd64
```

下载后请配置`linux_amd64`而`unidbg-fetch-qsign-1.1.9`一会要用

## ②配置Go-cqhttp

1.打开config.yml文件，修改`QQ账号和密码`保存即可（先不要重新启动！！！）

2.如果你打算使用他人签名请修改`go-cqhttp_linux_amd64/config.yml`中`35-36行内容`（注意缩进）后保存修改即可
```
url: 'https://hlhs-nb.cn/signed'
key: '114514'
```

# 部署签名api（可选后面使用他人签名）推荐他人API

### ①下载java 

1.下载Jdk
```
sudo apt install openjdk-18-jdk
```

### ②使用

1.输入
```
screen -S api
cd /root/Gocq&Qsugn/unidbg-fetch-qsign-1.1.9/unidbg-fetch-qsign&&bash bin/unidbg-fetch-qsign --basePath=txlib/9.0.8
```

没有闪退即可使用（默认使用9.0.8版本）

2.切记api不要关闭！！！

### ③配置

1.端口默认是`801`

2.key默认为`114514`

3.如需修改可打开`unidbg-fetch-qsign-1.1.9\txlib`找到你要修改的版本打开这个文件如修改`9.0.8`则打开`9.0.8\config.json`进行修改并修改gocq的配置文件

### ④启动 Go-cqhttp

1. 启动go-cqhttp

输入以下内容回车即可
```
screen -S gocq
cd /root/Bot/Gocq&Qsugn/go-cqhttp_linux_amd64
go-cqhttp
```

2. 我说过Gocq寄了，无法登录就更换签名版本（唯一的办法，不一定能行）

3. 如果出现以下内容则不用管它，不影响登录和使用

```
[WARNING]: Callback error: Packet timed out, Or response data is empty
[ERROR]: Protocol -> parse incoming packet error: return code unsuccessful: -10005
```

4. 自动提交滑块ticket无反应
- 这个不知道有没有解决办法
- 如果没反应请使用`2. 手动抓取提交`
- [使用安卓手机点击此处下载](https://maupdate.rainchan.win/txcaptcha.apk)


5. 关于screen命令说明：

* screen命令一般用于Linux的持久化运行
* 其中下方命令当中的name为创建screen窗口的名称
```
screen -S name //创建一个screen窗口
screen -r -d name //强制打开这个screen窗口
screen -ls     //查看全部screen窗口
screen -S name -X quit  //删除这个screen窗口
```

### ⑤关于其他签名协议登录

1.现在个个版本都不稳定，看你73版本到最新版本哪个能登了

2.换登录版本教程在`go-cqhttp_linux_amd64\data\versions\修改版本.md`中