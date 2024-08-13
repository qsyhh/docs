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

虽然但是...阿米已经写很多了，并不比主分支差...
    
1.github下载真寻本体

```
git clone --depth 1 -b dev https://mirror.ghproxy.com/https://github.com/HibiKier/zhenxun_bot.git /root/Bot/zhenxun_bot
```

2.执行下面内容安装依赖

```
cd /root/Bot/zhenxun_bot && && poetry shell
```
本方法使用阿里镜像源进行安装可开启VPN直接使用pip install直接进行下载（安装时间较长属于正常情况）
```
poetry config repositories.ali https://mirrors.aliyun.com/pypi/simple/ && poetry install
```

3. 启动真寻(虚拟环境内)，会在 zhenxun/configs/ 和 data/ 目录下生成各种配置文件

 - 这里启动会报错是正常的，因为要先生成一下数据文件再进行配置，不要担心！

```
python bot.py
```

4. 设置超级用户，复制命令后将123456789修改完自己大号的QQ号

```
cd /root/Bot/zhenxun_bot && sed -i 's/SUPERUSERS.*/SUPERUSERS=["123456789"]/g' .env.dev
cd /root/Bot/zhenxun_bot && sed -i '/PLATFORM_SUPERUSERS =/{N; s/\("qq": \[""\]\)/\1, "qq": \["123456789"\]/;}' .env.dev
```

5. 配置数据库连接

```
cd /root/Bot/zhenxun_bot && sed -i 's|"bind": ""|"bind": "postgres://zhenxun:zhenxun@127.0.0.1:5432/zhenxun"|g' data/database.json
```

6. 打开 zhenxun/configs/config.yaml，里面包含的是各种插件的配置项
 - （如果你没有这些需求可以忽略这步，毕竟默认存在配置）

7. 启动真寻（下载一些资源可能需要VPN）

```
screen -R zhenxundev
cd /root/Bot/zhenxun_bot && poetry shell
python bot.py
```

#### 如果需要退出screen则 Ctrl+a+d 退出

（如果你没有这些需求可以忽略这步，毕竟默认存在配置）

8. 等待最后一步出现类似下面的内容就彻底启动完成了（首次启动时间较长属于正常情况）

```
[INFO] uvicorn | Uvicorn running on http://127.0.0.1:8080 (Press CTRL+C to quit)
```

---

## [ 前往连接真寻](../../连接zhenxun_bot/)
