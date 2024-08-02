---
title: 前置准备
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

# 前置准备

## ➊ 首先呢我们应该有一个方便连接服务器、便于管理文件的东东

### SSH工具安装

- [①服务器安装宝塔面板（不建议）](bt.md)
  - 宝塔面板是一个便于服务器管理的web端
  - 在移动端上访问可能会让你玉玉（x
    
- [②XTerminal（Windows用户安装）](XTerminal.md)
  - XTerminal是一个SSH开发工具并且拥有丰富的功能
  - 目前为止是我个人认为最好用的一个

- [③JuiceSSH+NMM（Android用户安装）](JuiceSSHNMM.md)
  - JuiceSSH是一个SSH连接工具
  - NMM是一个文件管理工具
  - JuiceSSH+NMM配合使用效果非常的奈斯

- [④XTerminal（Linux用户安装）](JuiceSSHNMM2.md)
  - JuiceSSH是一个SSH连接工具
  - XTerminal是一个SSH开发工具并且拥有丰富的功能
  - 目前为止是我个人认为最好用的一个
  
苹果用[Termius](https://termius.com/)，怎么用不知道（）

---

## ➋ 安装poetry与ffmpeg和中文字体等

##### 由于Ubuntu22+  系统自带python3.10，这里无需再次安装

1. 打开终端输入下方内容进行安装

```
apt update && apt upgrade && apt install -y wget git screen ffmpeg python3-pip && pip install --upgrade pip && pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && pip install poetry && apt install fonts-wqy-microhei && fc-cache -f -v
```

---

## ➌ 安装PostgreSQL数据库

### 不同方法安装数据库

- [①使用宝塔面板安装PostgreSQL数据库](PostgreSQL数据库.md)
  - 使用宝塔商店安装
    
- [②使用XTerminal/JuiceSSH(终端)安装PostgreSQL](PostgreSQL数据库2.md)
  - 使用终端apt进行安装

- [③备份PostgreSQL数据库（提供方法，无需看该步骤）](PostgreSQL数据库3.md)
  - 备份和恢复数据库数据
  
---

## [➍ 前往安装真寻本体](../安装zhenxun_bot/)
