---
title: 注释规范
prev: /naming/README.md
next: /html/README.md
---

## 1.HTML

### 嵌套注释

::: warning 注意
当模块注释内再出现模块注释的时候，为了突出主要模块，嵌套模块不再使用
:::

推荐：

```html
<!-- S Comment Text A -->
<div class="mod_a">
  <div class="mod_b">...</div>
  <!-- /mod_b -->

  <div class="mod_c">...</div>
  <!-- /mod_c -->
</div>
<!-- E Comment Text A -->
```

### 模块注释

一般用于描述模块的名称以及模块开始与结束的位置

推荐：

```html
<!-- S Comment Text A -->
<div class="mod_a">...</div>
<!-- E Comment Text A -->

<!-- S Comment Text B -->
<div class="mod_b">...</div>
<!-- E Comment Text B -->
```

不推荐：

```html
<!-- S Comment Text A -->
<div class="mod_a">...</div>
<!-- E Comment Text A -->
<!-- S Comment Text B -->
<div class="mod_b">...</div>
<!-- E Comment Text B -->
```

### 单行注释

推荐：

```html
<!-- Comment Text -->
<div>...</div>
```

不推荐：

```html
<div>...</div>
<!-- Comment Text -->

<div>
  <!-- Comment Text -->
  ...
</div>
```


## 2.CSS

::: warning 注意
CSS 注释不能嵌套
:::

### 模块注释

推荐：

```css
/* Module A
---------------------------------------------------------------- */
.mod_a {
}

/* Module B
---------------------------------------------------------------- */
.mod_b {
}
```

不推荐

```css
/* Module A ---------------------------------------------------- */
.mod_a {
}
/* Module B ---------------------------------------------------- */
.mod_b {
}
```

### 单行注释

推荐

```css
/* Comment Text */
.zsc {
}

/* Comment Text */
.zsc {
}
```

不推荐

```css
/*Comment Text*/
.zsc {
  display: block;
}
.zsc {
  display: block; /*Comment Text*/
}
```

## 3.JavaScript

推荐

```js

/**
 * 功能说明
 *
 */
 function() {
   this._timeId = 0; // 重要注释
}
```


