---
title: 安装dev真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

![dev真寻](../../Img/安装真寻/dev真寻.png)

虽然但是...阿米已经写很多了，没写的一些比如抽卡...主分支的不是也寄了嘛...
    
1.github下载真寻本体

```
git clone --depth 1 -b dev https://github.com/HibiKier/zhenxun_bot /root/Bot/zhenxun_bot
```

2.执行下面内容安装依赖以及连接数据库

```
cd Bot/zhenxun_bot && sed -i 's|bind.*|bind: str = "postgres://zhenxun:zhenxun@127.0.0.1:5432/zhenxun"|g' zhenxun/configs/config.py && poetry shell && poetry add pyyaml@latest && poetry lock --no-update && poetry install && sudo pip install playwright && playwright install chromium && exit
```

3.设置超级用户，复制命令后将123456789修改完自己大号的QQ号

```
sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
```

4.由于dev默认开启kaihiela(kook)，不连接将会无法启动，非使用kook连接需手动把env.dev里如图内容注释掉！！！

![kainhiela](../../Img/安装真寻/kook问题.png)

5.由于dev版中由于数据迁移所用，暂未考虑新建数据库没有sign_group_users所导致无法启动，应注释掉zhenxun/builtin_plugins/_init_.py中如图内容

![sign_group_users](../../Img/安装真寻/数据库表.png)

6.启动真寻(虚拟环境内)，会在 zhenxun/configs 和 data/configs 目录下生成各种配置文件

```
screen -R zhenxundev
poetry shell
python bot.py
```

#### 如果需要退出screen则 Ctrl+a+d 退出

（如果你没有这些需求可以忽略这步，毕竟默认存在配置）

7.打开 zhenxun/configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot

```
screen -R zhenxundev
poetry shell
python bot.py
```

#### 如果需要退出screen则 Ctrl+a+d 退出

## [ 前往连接真寻](../../连接zhenxun_bot/)
