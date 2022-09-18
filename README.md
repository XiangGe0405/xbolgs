# Website

本项目基于[Docusaurus 2](https://docusaurus.io/)

## 初始化

```bash
yarn
```

### 本地开发

```bash
yarn start
```

默认启动站点(<http://localhost:3000/>)

## 编译

```bash
yarn build
```

### 结构目录

```text
.
├── README.md
├── babel.config.js
├── blog                             // 博客文章目录
│   ├── 2019-05-28-hola.md
│   ├── 2019-05-29-hello-world.md
│   └── 2019-05-30-welcome.md
├── docs                             // 文档目录
│   ├── doc1.md
│   ├── doc1.md
│   ├── doc3.md
│   └── mdx.md                       // 支持 mdx 哦
├── docusaurus.config.js             // 配置文件目录
├── node_modules
├── package.json
├── sidebars.js      // 文档侧边栏配置文件
├── src              // 页面或自定义的 React 组件目录
│   ├── css
│   └── pages
├── static                           // 静态文件目录
└── yarn.lock

```
