---
title: 代码规范工具
---

## 安装 VS Code 插件

- ESLint

- Vetur

- Prettier - Code formatter

## 配置 VS Code

打开 vscode 软件 【文件】---【首选项】---【设置】按照下图点右上角那个小文件图标，会弹出一个 【settings.json】 文件。

settings.json

```json
{
  // #让函数(名)和后面的括号之间加个空格
  "javascript.format.insertSpaceBeforeFunctionParenthesis": false,
  "explorer.confirmDragAndDrop": false,
  "javascript.preferences.quoteStyle": "single",
  "typescript.preferences.quoteStyle": "single",
  // tab 大小为2个空格
  "editor.tabSize": 2,
  // 100 列后换行
  "editor.wordWrapColumn": 100,
  // 保存时格式化
  "editor.formatOnSave": true,
  // 开启 vscode 文件路径导航
  "breadcrumbs.enabled": true,
  // prettier 设置语句末尾不加分号
  "prettier.semi": false,
  // prettier 设置强制单引号
  "prettier.singleQuote": true,
  // 注释后面加空格
  "prettier.eslintIntegration": true,
  // 选择 vue 文件中 template 的格式化工具
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  // 显示 markdown 中英文切换时产生的特殊字符
  "editor.renderControlCharacters": true,
  // vetur 的自定义设置
  "vetur.format.defaultFormatterOptions": {
    "prettier": {
      "singleQuote": true, // true 为使用单引号
      "semi": true // 去掉分号
    },
    "js-beautify-html": {
      "wrap_attributes": "auto",
      "wrap_attributes_mode": "auto",
      "wrap-line-length": 100,
      "wrapped_attributes_per_line": "multiple",
      "wrapped_attributes_indent": "auto",
      "wrapped_attributes_end": "auto"
    }
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.eslint": true
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "octref.vetur" // 使用 vetur 格式化规则
  },
  "workbench.iconTheme": "vscode-icons-mac",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": "active",
  "[javascript]": {
    "editor.defaultFormatter": "vscode.typescript-language-features"
  },
  "eslint.enable": true,
  // eslint 检测文件类型
  "eslint.validate": [
    "html",
    "vue",
    "javascript",
    "javascriptreact"
    // { "language": "html", "autoFix": true }
    // {
    //   "language": "vue",
    //   "autoFix": true
    // }
  ],
  "bracketPairColorizer.depreciation-notice": false,
  "diffEditor.ignoreTrimWhitespace": false,
  "[html]": {
    "editor.defaultFormatter": "vscode.html-language-features"
  },
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "icon": "terminal-powershell"
    },
    "Command Prompt": {
      "path": [
        "${env:windir}\\Sysnative\\cmd.exe",
        "${env:windir}\\System32\\cmd.exe"
      ],
      "args": [],
      "icon": "terminal-cmd"
    },
    "Git Bash": {
      "source": "Git Bash"
    },
    "Windows PowerShell": {
      "path": "C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe"
    }
  },
  "terminal.integrated.defaultProfile.windows": "Windows PowerShell"
}


```

## 修改Eslint的配置文件

.eslintrc.js

```js

module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module',
    parser: "babel-eslint"
  },
  parser: "vue-eslint-parser",
  env: { //指定环境
    browser: true,
    node: true,
    es6: true,
  },
  // 全局变量
  // 如果访问未在同一文件中定义的变量，将会出现 no-undef 警告。如果要在文件内部使用全局变量，为了让 ESLint 不会出现警告，需要进行定义。
  // readonly-可读不可写 writable-可读可写
  globals: {
    echarts: "readonly",
    config: "readonly",
  },
  rules: {        //0，不启用这个规则   1，出现问题会有警告   2，出现问题会报错
    'no-console': 0,
    'no-useless-escape': 0,
    'semi': [0, 'always'], // 行尾使用分号
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "comma-dangle": [0, "never"], //是否允许对象中出现结尾逗号
    "no-cond-assign": 2, //条件语句的条件中不允许出现赋值运算符
    "no-dupe-keys": 2, //对象中不允许出现重复的键
    "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    "no-extra-semi": 2, //不允许出现不必要的分号
    "no-regex-spaces": 2, //正则表达式中不允许出现多个连续空格
    "no-unreachable": 2, //在return，throw，continue，break语句后不允许出现不可能到达的语句
    "use-isnan": 2, //要求检查NaN的时候使用isNaN()
    "no-var": 1,//禁用var，用let和const代替
    "no-alert": 1, //不允许使用alert，confirm，prompt语句
    "no-caller": 2, //不允许使用arguments.callee和arguments.caller属性
    "no-multi-spaces": 2, //不允许出现多余的空格
    "no-redeclare": 2, //不允许变量重复声明
    "no-sequences": 2, //不允许使用逗号表达式
    "no-label-var": 2, //不允许标签和变量同名
    "fun-call-spacing": [0, "never"], //函数调用时，函数名与()之间不能有空格
    "no-multiple-empty-lines": [2, { "max": 2 }], //空行最多不能超过两行
    "no-trailing-spaces": 2, //一行最后不允许有空格
    "no-extra-parens": 0, //不允许出现多余的括号
    "space-before-blocks": [2, "always"], //块前的空格
    "no-var": 1, //使用let和const代替var
    "eqeqeq": 0,  // == 验证
    "padded-blocks": [2, "never"],
    "arrow-spacing": [2, { "before": true, "after": true }],  //箭头函数空格限制
    "spaced-comment": [0, "always", { "exceptions": ["-"] }],
    "no-undef": 2,  //任何对未声明的变量的引用都会导致警告
    "no-unused-vars": [1, { "args": "none" }],  //消除未使用的变量  不检查函数的参数
    "prefer-promise-reject-errors": 0,
    'quotes': [1, 'single'], //引号类型 `` "" ''
    "no-dupe-args": 2,//函数参数不能重复
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "spaced-comment": ["error", "always", { //注释规则
      "line": {
        "markers": ["/"],
        "exceptions": ["-", "+"]
      },
      "block": {
        "markers": ["!"],
        "exceptions": ["*"],
        "balanced": true
      }
    }]
  }
}

```