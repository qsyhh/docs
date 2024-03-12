---
title: 使用go-cqhttp连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

### 再提醒你一句，gocq作者已经不再更新，签名服务以无法解决gocq45问题
  
1. 下载go-cqhttp（此时我们的目录在root/Bot）

```
git clone --depth 1 -b go-cqhttp_1.2.0_linux_arm64.deb https://gitee.com/SHIKEAIXY/zhenxun.git ./go-cqhttp
```

2. 打开root/Bot/go-cqhttp/config.yml，修改qq账号和密码，后保存

3. 安装unidbg-fetch-qsign（返回root/Bot目录终端输入）

先安装一下jdk
```
sudo apt update&&sudo apt install openjdk-8-jdk
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

6. 关于screen命令说明：

* screen命令一般用于Linux的持久化运行
* 其中下方命令当中的name为创建screen窗口的名称
```
screen -S name //创建一个screen窗口
screen -r name //打开这个screen窗口
screen -ls     //查看全部screen窗口
screen -S name -X quit  //删除这个screen窗口
```