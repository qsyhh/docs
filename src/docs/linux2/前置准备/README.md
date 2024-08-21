---
title: 前置准备
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## 在写了...

# 前置准备

## ➊ 安装poetry与ffmpeg和中文字体等

##### 由于Ubuntu22+  系统自带python3.10，这里无需再次安装

1. 打开终端输入下方内容进行安装

```
apt update && apt upgrade && apt install -y wget git screen ffmpeg python3-pip && pip install --upgrade pip && pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && apt install python3-poetry && apt install fonts-wqy-microhei && fc-cache -f -v
```

---

## ➋ 安装PostgreSQL数据库

### 不同方法安装数据库

- [①使用宝塔面板安装PostgreSQL数据库](PostgreSQL数据库.md)
  - 使用宝塔商店安装
    
- [②使用XTerminal/JuiceSSH(终端)安装PostgreSQL](PostgreSQL数据库2.md)
  - 使用终端apt进行安装

- [③备份PostgreSQL数据库（提供方法，无需看该步骤）](PostgreSQL数据库3.md)
  - 备份和恢复数据库数据
  
---

## [➌ 前往安装真寻本体](../安装zhenxun_bot/)
