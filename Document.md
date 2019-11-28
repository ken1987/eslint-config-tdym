# 前端代码规范与代码风格实践

通过配置化、自动化手段，帮助团队协作开发时保持代码规范与代码风格一致。

## 项目信息

- 核心库：[Vue][1]
- cli-tool: [Vue-CLI][11]
- 代码检查：[eslint][10]
- 格式化工具：[prettier][2]

## prettier 与 eslint

使用 prettier 格式化后的结果，可能并不符合 eslint 的规则，[到底如何配置，才能在 vscode 中正常使用 eslint 和 prettier？][7]

## git 配置

我们约定使用类 Unix 风格的换行符 `\n` 作为标准，[统一的换行符，使得 git diff 更友好][6]。因此，建议在项目中添加 `.gitattributes` 文件，配置如下：

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

### prettier 配置项

在项目根目录中添加 `.prettierrc` 文件，修改默认项，配置如下：

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

### eslint 配置项

实现初衷是希望最大程度的使用社区稳定的方案，减少维护和沟通成本，如下：

- [airbnb javascript 风格指南][3]
- [vue 风格指南][4]
- [prettier 风格指南][5]

```js
module.exports = {
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/eslint-config-airbnb',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'comma-dangle': ['error', 'only-multiline'],
    'vue/v-on-function-call': 'error',
    'vue/no-boolean-default': 'error',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: false,
        ignores: [],
      },
    ],
  },
}
```

### babel

项目中使用了 babel，增加依赖包 `babel-eslint` 以及配置项：

```js
module.exports = {
  // ...
  parserOptions: {
    parser: 'babel-eslint',
  },
}
```

[1]: https://vuejs.org/
[2]: https://prettier.io/
[3]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base
[4]: https://vuejs.org/v2/style-guide/index.html
[5]: https://github.com/prettier/eslint-plugin-prettier
[6]: https://help.github.com/en/github/using-git/configuring-git-to-handle-line-endings
[7]: https://segmentfault.com/a/1190000019599645
[8]: https://github.com/prettier/prettier/issues/6061
[9]: https://www.zhihu.com/question/20298345/answer/14670020
[10]: https://eslint.org/
[11]: https://cli.vuejs.org/
