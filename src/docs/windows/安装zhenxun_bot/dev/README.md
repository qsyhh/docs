---
title: 安装dev真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

![sign_group_users](../../Img/安装真寻/dev真寻.png)

虽然但是...阿米已经写很多了，没写的一些比如抽卡...主分支的不是也寄了嘛...

1.github下载真寻本体

```
git clone --depth 1 -b dev https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot
```

2.在zhenxun_bot文件夹内(真寻根目录)依次执行下面内容安装依赖（无法进入虚拟可尝试管理员权限打开输入）

```
poetry shell
```
```
poetry add pyyaml@latest && poetry lock --no-update && poetry install && playwright install chromium
```

3.设置超级用户，打开 .env.dev 文件（在真寻根目录），在中添加自己大号（主人）的QQ号，123456789为QQ号

    SUPERUSERS=["123456789"]

4.打开 zhenxun/configs/config.py 填写数据库数据

```
-----------------------------------------------------------
-----------------------------------------------------------
 如果你听我的话了 密码和名字与我填的一样 且数据库也在该服务器上 
 可以直接复制以下配置 替换掉 configs/config.py 中的数据库数据
-----------------------------------------------------------
-----------------------------------------------------------

```
```

bind: str = ""  # 数据库连接链接
sql_name: str = "postgres"
user: str = "postgres"
password: str = "zhenxun"
address: str = "127.0.0.1"
port: str = "5432"
database: str = "zhenxun"

```
```
---------------------------------------------------------------
---------------------------------------------------------------
  -------------------如果没有听我的怎么办呢--------------------
  -----------------按照下面的格式进行修改即可------------------
---------------------------------------------------------------
---------------------------------------------------------------

# 数据库（必要）
# 如果填写了bind就不需要再填写后面的字段了
# 示例："bind": "postgres://user:password@127.0.0.1:5432/database"
bind: str = ""       #数据库连接链接
sql_name: str = "postgres"
user: str = ""       #数据用户名
password: str = ""   #数据库密码
address: str = ""    #数据库地址
port: str = ""       #数据库端口
database: str = ""   #数据库名称

```

5.由于dev默认开启kaihiela(kook)，不连接将会无法启动，非使用kook连接需手动把env.dev里如图内容注释掉！！！

![kaihiela](../../Img/安装真寻/kook问题.png)

6.由于dev版中由于数据迁移所用，暂未考虑新建数据库没有sign_group_users所导致无法启动，应注释掉zhenxun/builtin_plugins/_init_.py中如图内容

![sign_group_users](../../Img/安装真寻/数据库表.png)

7.启动真寻(虚拟环境内)，会在 zhenxun/configs 和 data/configs 目录下生成各种配置文件

```
python bot.py
```

（如果你没有这些需求可以忽略这步，毕竟默认存在配置）

8.打开 zhenxun/configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot

---

## [➊ 前往连接真寻](../../连接zhenxun_bot/)
