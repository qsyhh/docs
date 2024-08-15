# 该Docs由VuePress搭建

[VuePress文档](https://theme-hope.vuejs.press/zh)

# 运行

```
apt install nodejs -y
npm --registry=https://registry.npmmirror.com install pnpm -g
pnpm config set registry https://registry.npmmirror.com
```
```
git clone --depth 1 https://github.com/qsyhh/docs && cd docs
pnpm i
pnpm docs:dev
```

#  目录结构

```
└─ src                        （1级目录）1Vue所有相关文件
   ├─ docs                    （2级目录）教程所有相关文件
   │  ├─ linux                （3级目录）linux教程所有相关文件
   │  │  ├─ Img               （4级目录）图片相关文件
   │  │  ├─ plugins           （4级目录）安装插件教程相关文件
   │  │  ├─ 安装zhenxun_bot   （4级目录）安装机器人教程相关文件
   │  │  ├─ 连接zhenxun_bot   （4级目录）不同协议端连接教程相关文件
   │  │  ├─ 前置准备          （4级目录）前置需要准备的内容教程相关文件
   │  │  └─ README.md         （4级目录 教程引导页
   │  ├─ windows              （3级目录）windows教程所有相关文件
   │  │  ├─ Img               （4级目录）图片相关文件
   │  │  ├─ plugins           （4级目录）安装插件教程相关文件
   │  │  ├─ 安装zhenxun_bot   （4级目录）安装机器人教程相关文件
   │  │  ├─ 连接zhenxun_bot   （4级目录）不同协议端连接教程相关文件
   │  │  ├─ 前置准备          （4级目录）前置需要准备的内容教程相关文件
   │  │  └─ README.md         （4级目录 教程引导页
   │  └─ README.md            （3级目录）windows与linux引导页
   ├─ SHIKEAIXY               （2级目录） 加密的内容
   │  └─ ...                  （3级目录）暂无打算
   └─ sponsor                 （2级目录）赞助所有相关文件
      ├─ img                  （3级目录）图片
      └─ README.md            （3级目录）赞助内容
```