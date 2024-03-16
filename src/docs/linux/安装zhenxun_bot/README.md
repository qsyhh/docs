---
title: 安装真寻
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - Markdown
---

# 一 开始安装真寻本体

1. 通过github下载真寻本体（在root目录终端执行）

```
git clone --depth 1 https://github.com/HibiKier/zhenxun_bot ./Bot/zhenxun_bot
```

2. 修改真寻数据库配置（在root目录终端执行，此处需要重新打开终端刷新在执行）

``` 
cd Bot/zhenxun_bot
sed -i 's|bind.*|bind: str = "postgres://zhenxun:zhenxun@localhost:5432/zhenxun"|g' configs/config.py
```
3. 安装依赖

如果你的python没有单独安装可使用下方命令！

```
poetry shell
poetry install
```

如果你的python是跟着教程安装了python需要使用下方命令（无需使用上方命令）

```
poetry shell
poetry add pyyaml@latest
poetry lock --no-update
poetry install
```

安装时间较长！请耐心等待捏

安装依赖完成后继续执行下方命令
```
sudo pip install playwright
playwright install chromium
```

4. 在SUPERUSERS中添加自己大号（主人）的QQ号，123456789为QQ号，修改后执行即可

```
sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
```

5. 启动真寻，会在 configs 和 data/configs 目录下生成各种配置文件

```
sudo apt install -y screen
screen -S zhenxun
poetry shell
python3 bot.py
注意！如果你安装了python请使用下方命令启动
python3.10 bot.py
```

6. 打开 configs/config.yaml，里面包含的是各种插件的配置项，填写完毕后重启真寻Bot（如果你没有这些需求可以忽略这步，毕竟默认配置了）

7. 重新运行真寻机器人（接下来会下载一些资源，下载失败的也不用管）

```
screen -r zhenxun
poetry shell
python3 bot.py
注意！如果你安装了python请使用下方命令启动
python3.10 bot.py
```

8. 关于screen命令说明：

* screen命令一般用于Linux的持久化运行
* 其中下方命令当中的name为创建screen窗口的名称
```
screen -S name //创建一个screen窗口
screen -r name //打开这个screen窗口
screen -ls     //查看全部screen窗口
screen -S name -X quit  //删除这个screen窗口
```
