---
title: 安装main主分支真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

1.github下载真寻本体

```
git clone --depth 1 -b https://github.com/HibiKier/zhenxun_bot /root/Bot/zhenxun_bot
```

2.执行下面内容安装依赖以及连接数据库

```
cd /root/Bot/zhenxun_bot && sed -i 's|bind.*|bind: str = "postgres://zhenxun:zhenxun@127.0.0.1:5432/zhenxun"|g' configs/config.py && poetry shell && poetry add pyyaml@latest && poetry lock --no-update && poetry install && pip install playwright && playwright install chromium && exit
```

3.设置超级用户，复制命令后将123456789修改完自己大号的QQ号

```
sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
```

4.启动真寻(虚拟环境内)，会在 configs 和 data/configs 目录下生成各种配置文件

```
screen -R zhenxun
poetry shell
python bot.py
```

#### 如果需要退出screen则 Ctrl+a+d 退出

（如果你没有这些需求可以忽略这步，毕竟默认存在配置）

5.打开 configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot

```
screen -R zhenxun
poetry shell
python bot.py
```

#### 如果需要退出screen则 Ctrl+a+d 退出

## [ 前往连接真寻](../../连接zhenxun_bot/)