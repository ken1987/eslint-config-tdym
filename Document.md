# 常见问题

## prettier 与 eslint

使用 prettier 格式化后的结果，可能并不符合 eslint 的规则，[到底如何配置，才能在 vscode 中正常使用 eslint 和 prettier？][1]

## git 配置

我们约定使用类 Unix 风格的换行符 `\n` 作为标准，[统一的换行符，使得 git diff 更友好][2]。因此，建议在项目中添加 `.gitattributes` 文件，配置如下：

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

[1]: https://segmentfault.com/a/1190000019599645
[2]: https://help.github.com/en/github/using-git/configuring-git-to-handle-line-endings
