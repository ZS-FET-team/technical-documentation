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

