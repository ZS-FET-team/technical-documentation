---
title: JavaScript 规范
---

## 变量命名

- 代码中的命名为驼峰式命名（constiableName）

- 方法名、参数名、成员变量、局部变量都遵从驼峰形式

- 其中 method 方法命名必须是 动词 或者 动词+名词 形式

- 增删查改，add / update / delete / detail / get 5 个单词，不得使用其他

::: details 函数方法常用的动词

```hash
get 获取/set 设置,
add 增加/remove 删除,
create 创建/destory 销毁,
start 启动/stop 停止,
open 打开/close 关闭,
read 读取/write 写入,
load 载入/save 保存,
begin 开始/end 结束,
backup 备份/restore 恢复,
import 导入/export 导出,
split 分割/merge 合并,
inject 注入/extract 提取,
attach 附着/detach 脱离,
bind 绑定/separate 分离,
view 查看/browse 浏览,
edit 编辑/modify 修改,
select 选取/mark 标记,
copy 复制/paste 粘贴,
undo 撤销/redo 重做,
insert 插入/delete 移除,
add 加入/append 添加,
clean 清理/clear 清除,
index 索引/sort 排序,
find 查找/search 搜索,
increase 增加/decrease 减少,
play 播放/pause 暂停,
launch 启动/run 运行,
compile 编译/execute 执行,
debug 调试/trace 跟踪,
observe 观察/listen 监听,
build 构建/publish 发布,
input 输入/output 输出,
encode 编码/decode 解码,
encrypt 加密/decrypt 解密,
compress 压缩/decompress 解压缩,
pack 打包/unpack 解包,
parse 解析/emit 生成,
connect 连接/disconnect 断开,
send 发送/receive 接收,
download 下载/upload 上传,
refresh 刷新/synchronize 同步,
update 更新/revert 复原,
lock 锁定/unlock 解锁,
check out 签出/check in 签入,
submit 提交/commit 交付,
push 推/pull 拉,
expand 展开/collapse 折叠,
enter 进入/exit 退出,
abort 放弃/quit 离开,
obsolete 废弃/depreciate 废旧,
collect 收集/aggregate 聚集
```

:::

- 常量命名全部大写，单词间用下划线隔开，力求语义表达完整清楚， 不要嫌名字长

推荐：MAX_STOCK_COUNT

不推荐：MAX_COUNT

## 代码格式

- 使用 2 个空格进行缩进

- 不同逻辑、不同语义、不同业务的代码之间插入一个空行分隔开来以 提升可读性

说明：任何情形，没有必要插入多个空行进行隔开。

## 字符串

统一使用单引号(‘)，不使用双引号(“)。这在创建 HTML 字符串非常有好处：

推荐：

```js
let str = 'foo';
let testDiv = '<div id="test"></div>';
```

避免：

```js
let str = "foo";
let testDiv = "<div id='test'></div>";
```

## 对象声明

### 使用字面值创建对象

推荐： `let user = {};`

避免： `let user = new Object();`

### 使用字面量来代替对象构造器

推荐： `var user = { age: 0, name: 1, city: 3 };`

避免：

```js
var user = new Object();
user.age = 0;
user.name = 0;
user.city = 0;
```

## 使用 ES6+

必须优先使用 ES6 + 中新增的语法糖和函数。

比如：箭头函数、await/async 、解构、let、for...of 等等



## 条件判断和循环最多三层

- 条件判断能使用三元运算符和逻辑运算符解决的，就不用使用条件判断

## this 的转换命名

对上下文 this 的引用只能使用"that"来命名

## 慎用 console.log

console.log 使用完记得要删除
