# eslint-config-tdym

## 背景

- 核心库：[Vue][1]
- 代码检查：[eslint][10]
- 格式化工具：[prettier][2]

我们的目标是：帮助团队在协作开发时保持代码规范与代码风格的一致性。通过配置化、工具化，更方便的共享经验，新加入的成员不用死背规范，更易于上手。经过多个项目的实践，我们结合社区方案与自身需求，针对 Vue 开发中的一些经验进行了[归纳总结](Document.md)，并创建了此项目。

## 版本依赖

- eslint ^5.0.0 || ^6.0.0
- prettier >= 1.13.0

## 用法

### 安装依赖包以及上述版本依赖

```shell
yarn add eslint-config-tdym -D
# or
npm install eslint-config-tdym -D
```

### prettier 配置

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

## git 配置

我们约定使用类 Unix 风格的换行符 `\n` 作为标准，[统一的换行符，使得 git diff 更友好][6]。

因此，建议在项目中添加 `.gitattributes` 文件，配置如下：

```
* text=auto eol=lf
```

## 开发工具配置

打通整个开发流程，使得整个过程中的结果保持一致性，开发工具作为最为常见的场景，它能良好的运转至关重要。

### vscode

用 vscode 开发 Vue 相关项目时，会安装插件 vetur 对 .vue 文件进行处理。vetur 默认使用 prettyhtml 对模板语法进行格式化，但它和使用 prettier 得到的不一致。因此，建议关闭工作区中 vetur 对 html 的格式化功能

```json
{
  "vetur.format.defaultFormatter.html": "none"
}
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
  },
}
```

[1]: https://vuejs.org/
[2]: https://prettier.io/
[3]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[4]: https://vuejs.org/v2/style-guide/index.html
[5]: https://github.com/prettier/eslint-plugin-prettier
[6]: https://help.github.com/en/github/using-git/configuring-git-to-handle-line-endings
[8]: https://github.com/prettier/prettier/issues/6061
[9]: https://www.zhihu.com/question/20298345/answer/14670020
[10]: https://eslint.org/
