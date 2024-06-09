---
title: 安装dev真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

当前不建议安装dev，因为dev正在逐渐重构，阿咪还没写完（其实啥都没有）

首先安装Git，以有可跳过

```
sudo apt install git
```

![dev真寻](../../img/dev真寻.png)
    
1.github下载真寻本体

```
cd /root/
git clone --depth 1 -b dev https://github.com/HibiKier/zhenxun_bot ./Bot/zhenxun_bot
```

2.依次执行下面内容安装依赖以及连接数据库

```
cd Bot/zhenxun_bot

sed -i 's|bind.*|bind: str = "postgres://zhenxun:zhenxun@127.0.0.1:5432/zhenxun"|g' zhenxun/configs/config.py
poetry shell
poetry add pyyaml@latest
poetry lock --no-update
poetry install
sudo pip install playwright
playwright install chromium
exit
```

3.设置超级用户，复制命令后将123456789修改完自己大号的QQ号

```
sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
```

4.由于dev默认开启kaihiela(kook)，不连接将会无法启动，非使用kook连接需手动把env.dev里如图内容注释掉！！！

![kainhiela](../../img/kook问题.png)

5.由于dev版中由于数据迁移所用，暂未考虑新建数据库没有sign_group_users所导致无法启动，应注释掉zhenxun/builtin_plugins/_init_.py中如图内容

![sign_group_users](../../img/数据库表.png)

6.启动真寻(虚拟环境内)，会在 zhenxun/configs 和 data/configs 目录下生成各种配置文件

```
screen -S zhenxundev
poetry shell
python bot.py
```

（如果你没有这些需求可以忽略这步，毕竟默认配置了）

7.打开 zhenxun/configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot

```
screen -r -d zhenxundev
poetry shell
python bot.py
```
