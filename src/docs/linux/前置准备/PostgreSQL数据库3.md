---
title: 前置准备
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---
  
### ➊ 备份数据库

1. 打开终端，输入：（创建文件夹+赋予权限）

```
mkdir -p /tmp/Postgres-BF
sudo chmod -R 777 /tmp/Postgres-BF
```

2. 输入：（进入postgres，备份，输入密码zhenxun，退出）

注意！！！需要完成`安装PostgreSQL数据库`全部步骤才能备份数据库
```
sudo -su postgres
pg_dump -U postgres -W -F t -b -v -f "/tmp/Postgres-BF/zhenxun.tar" zhenxun
zhenxun // 这里是上一条命令输入的密码！！！
exit
```

3. 备份的数据将在`/tmp/Postgres-BF/zhenxun.tar`

### ➋恢复备份的PostgreSQL数据库

注意！！！需要完成`安装PostgreSQL数据库 + 备份PostgreSQL数据库`全部步骤才能备份数据库

1. 终端输入：（赋予权限，进入postgres，恢复备份，退出），/tmp/Postgres-BF/zhenxun.tar是已有的备份压缩文件

```
sudo chmod -R 777 /tmp/Postgres-BF
sudo -su postgres
pg_restore -U postgres -d zhenxun -v "/tmp/Postgres-BF/zhenxun.tar"
exit
```