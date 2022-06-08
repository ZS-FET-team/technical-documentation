---
title: CSS 规范
---

## 代码格式化

统一使用展开格式书写样式

```css
.zst {
  display: block;
  width: 50px;
}
```

## 代码大小写

```css
/* 推荐 */
.zst {
  display: block;
}

/* 不推荐 */
.ZST {
  display: BLOCK;
}
```

## 选择器

- 尽量少用通用选择器
- UI 组件选择器需注明修改情况
- 不使用 ID 选择器
- 不使用无具体语义定义的标签选择器

```css
/* 推荐 */
.zst {
}
.zst li {
}
.zst li p {
}

/* 不推荐 */
* {
}
#zst {
}
.zst div {
}
```

## 代码缩进

```css
.zst {
  width: 100%;
  height: 100%;
}
```

## 分号

```css
.zst {
  width: 100%;
  height: 100%;
}
```

## 属性书写顺序

建议遵循以下顺序：

- 布局定位属性：display / position / float / clear / visibility / overflow
- 自身属性：width / height / margin / padding / border / background
- 文本属性：color / font / text-decoration / text-align / vertical-align / white- space / break-word
- 其他属性（CSS3）：content / cursor / border-radius / box-shadow / text-shadow / background:linear-gradient …

```css
.zst {
  display: block;
  position: relative;
  float: left;
  width: 100px;
  height: 100px;
  margin: 0 10px;
  padding: 20px 0;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #333;
  background: rgba(0, 0, 0, 0.5);
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  -o-border-radius: 10px;
  -ms-border-radius: 10px;
  border-radius: 10px;
}
```
