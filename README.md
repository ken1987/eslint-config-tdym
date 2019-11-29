# eslint-config-tdym

eslint-config-tdym for Vue CLI.

## 背景

- 核心库：[Vue][1]
- 命令行工具: [vue-cli][11]
- 代码检查：[eslint][10]
- 格式化工具：[prettier][2]

我们的目标是：帮助团队在协作开发时保持代码规范与代码风格的一致性。通过配置化、工具化，更方便的共享经验，新加入的成员不用死背规范，更易于上手。经过多个项目的实践，我们结合社区方案与自身需求，针对 Vue 开发中的一些经验进行了[归纳总结](Document.md)，并创建了此项目。

## 版本依赖

- @vue/cli-service ^3.0.0 || ^4.0.0-0
- eslint ^5.16.0 || ^6.1.0
- vue-template-compiler ^2.0.0

## 用法

### 安装依赖包以及版本依赖

```shell
yarn add eslint-config-tdym -D
# or
npm install eslint-config-tdym -D
```

### 添加 prettier 配置项

在项目根目录中，添加 `.prettierrc` 文件，配置如下：

```json
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "all",
  "arrowParens": "always",
  "htmlWhitespaceSensitivity": "ignore"
}
```

- `singleQuote`: 在 js 中使用单引号风格、html 或 vue 模板中使用双引号；两者混用时不易产生混淆。
- `semi`: [做一个无分号党][9]。
- `trailingComma`: 对 git diff 友好，编码体验友好。
- `arrowParens`: 总是带括号，方便增减参数、或解构。
- `htmlWhitespaceSensitivity`: 参考[issue#6061][8]。

### 添加 git 配置项

在项目中根目录中，添加 `.gitattributes` 文件，配置如下：

```
* text=auto eol=lf
```

## 配置说明

实现初衷是希望最大程度的使用社区稳定的方案，减少维护和沟通成本，如下：

- [airbnb javascript 风格指南][3]
- [vue 风格指南][4]
- [prettier 风格指南][5]

## 推荐配置

```js
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  root: true,
  extends: ['eslint-config-tdym'],
  rules: {
    'no-console': isProduction ? 'warn' : 'off',
    'no-debugger': isProduction ? 'warn' : 'off',
    'no-param-reassign': 0,
  },
}
```

[1]: https://vuejs.org/
[2]: https://prettier.io/
[3]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[4]: https://vuejs.org/v2/style-guide/index.html
[5]: https://github.com/prettier/eslint-plugin-prettier
[8]: https://github.com/prettier/prettier/issues/6061
[9]: https://www.zhihu.com/question/20298345/answer/14670020
[10]: https://eslint.org/
[11]: https://cli.vuejs.org/
