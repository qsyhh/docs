---
title: 使用Lagtange连接真寻bot
icon: fab fa-markdown
order: 2
category:
  - 使用指南
tag:
  - tutorial
---

[Lagrange.OneBot文档](https://lagrangedev.github.io/Lagrange.Doc/Lagrange.OneBot/Config)

## 连接真寻

#### 安装完成需修改配置文件连接部分

```
{
  "Type": "ReverseWebSocket",
  "Host": "127.0.0.1",
  "Port": 8080,
  "Suffix": "/onebot/v11/ws/",
  "ReconnectInterval": 5000,
  "HeartBeatInterval": 5000,
  "AccessToken": ""
}
```
