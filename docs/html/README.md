---
title: HTML 规范
---

## 元素及标签闭合

所有具有开始标签和结束标签的元素都要写上起止标签，某些允许省略开始标签或和束标签的元素亦都要写上。


推荐

```html
<div>
  <h1>我是h1标题</h1>
  <p>我是一段文字，我有始有终，浏览器能正确解析</p>
</div>

<br />
```


## 书写风格

- HTML 标签名、类名、标签属性和大部分属性值统一用小写

推荐

```html
<div class="demo"></div>
```

不推荐

```html
<div class="DEMO"></div>

<div class="DEMO"></div>
```

## 元素属性

元素属性值使用双引号语法
元素属性值可以写上的都写上

推荐

```html
<input type="text" />

<input type="radio" name="name" checked="checked" />
```

不推荐

```html
<input type="text" />
<input type="text" />

<input type="radio" name="name" checked />
```

## 代码缩进

```html
<div class="jdc">
  <a href="#"></a>
</div>
```

