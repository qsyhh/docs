---
title: 前置准备
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

1. 安装PostgreSQL数据库

```
sudo apt install -y postgresql postgresql-contrib

```

2. 创建数据库(依次输入)

```
sudo su - postgres
psql
CREATE USER zhenxun WITH PASSWORD 'zhenxun';
CREATE DATABASE zhenxun OWNER zhenxun;
\q
exit
```
---
