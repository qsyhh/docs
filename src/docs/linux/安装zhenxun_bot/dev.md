---
title: 安装dev真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

首先安装Git，以有可跳过

```
sudo apt install git
```

<br>
    <img src="图片/dev真寻.png" width="50%">
    
1.github下载真寻本体

```
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
```

3.设置超级用户，复制命令后将123456789修改完自己大号的QQ号

```
sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
```

4.启动真寻(虚拟环境内)，会在 zhenxun/configs 和 data/configs 目录下生成各种配置文件

```
screen -S zhenxundev
poetry shell
python3 bot.py
```

（如果你没有这些需求可以忽略这步，毕竟默认配置了）

5.由于dev默认开启kaihiela(kook)，不连接将会无法启动，如使用Websocket反向连接需手动把env.dev里的kaiheila_bots注释掉

6.打开 zhenxun/configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot

```
screen -r zhenxundev
poetry shell
python3 bot.py
```
