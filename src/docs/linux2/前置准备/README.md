---
title: 前置准备
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

## Desktop 教程整体和 Server 一样

# 前置准备

## ➊ 安装poetry与ffmpeg和中文字体等

##### 由于Ubuntu22+  系统自带python3.10+

1. 打开终端，输入以下内容进入root账户
 - 需要输入密码验证账户
 - 该方法后续教程说法为：`进入root账户终端`

```
sudo su -
```

2. 输入下方内容进行安装

```
apt update && apt upgrade && apt install -y wget git screen ffmpeg python3-pip postgresql postgresql-contrib && pip install --upgrade pip && pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple && apt install python3-poetry && apt install fonts-wqy-microhei && fc-cache -f -v
```

3. 检查python版本

```
python3
```

---

## ➋ 创建PostgreSQL数据库

1. 创建数据库(依次输入)

```
sudo su - postgres
psql
CREATE USER zhenxun WITH PASSWORD 'zhenxun';
CREATE DATABASE zhenxun OWNER zhenxun;
\q
exit
```

- [备份PostgreSQL数据库（提供方法，无需看该步骤）](PostgreSQL数据库 .md)
  - 备份和恢复数据库数据
  
---

## [➌ 前往安装真寻本体](../安装zhenxun_bot/)
