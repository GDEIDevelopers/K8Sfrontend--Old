# k8s-ex

## 项目初始化

```sh
yarn
```

### Compile and Hot-Reload for Development

```sh
yarn dev
```

### Type-Check, Compile and Minify for Production

```sh
yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
yarn test:unit
```

项目的目录结构
├── public #公共资源目录
│ ├── favicon.ico
├── src #项目核心文件夹
│ ├── api #api
│ ├── assets #静态资源目录
│ ├── components #组件目录
│ ├── router #路由配置
│ ├── store #pinia 配置文件目录
│ ├── views #编写各个页面的目录,用于存放页面组件
│ ├── App.vue #应用程序的根组件
│ └── main.ts #应用程序的入口文件
├── index.html #项目入口页面
├── README.md
├── tsconfig.json
├── vite.config.ts #vite 的配置文件
└── package.json #插件管理文件

√ 是否使用 TypeScript 语法？ ... 否 / 是
√ 是否启用 JSX 支持？ ... 否 / 是
√ 是否引入 Vue Router 进行单页面应用开发？ ... 否 / 是
√ 是否引入 Pinia 用于状态管理？ ... 否 / 是
√ 是否引入 Vitest 用于单元测试？ ... 否 / 是
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 否 / 是
