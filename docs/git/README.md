---
title: git 规范
---

## 分支管理

### `master` 为线上分支

- master 分支也可称为 生产分支

- 不能在 master 分支上写代码

### `dev` 为开发分支

- dev 分支为开发汇总分支 ，个人不能在分支上写代码

### `name` 为个人开发分支

- 需要个人从 dev 分支上切出分支

- 分支名需要以个人名命名缩写

### 临时分支

在通过测试并上线后需要将临时分支进行删除。避免 git 上出现太多无用的分支。

#### `feature` 为开发新功能分支

当团队成员开发新功能时，需要从 dev 上拉一个 feature-功能名称-开发姓名 分支进行开发，例如：feature-login-zst。开发完成后需要合并回 dev 分支。


### 部署

当 dev 分支通过测试后，就可以合并到 master 进行发布了。

## git commit 提交

git 在每次提交时，都需要填写 commit message。

`git commit -m '类型type ：描述subject' `

`git commit -m 'feat ：增加头部导航功能' `

### type commit 的类型：

- feat: 新功能、新特性
- fix: 修改 bug
- perf: 更改代码，以提高性能（在不影响代码内部行为的前提下，对程序性能进行优化）
- refactor: 代码重构（重构，在不影响代码内部行为、功能下的代码修改）
- docs: 文档修改
- style: 代码格式修改, 注意不是 css 修改（例如分号修改）
- test: 测试用例新增、修改
- build: 影响项目构建或依赖项修改
- revert: 恢复上一次提交
- ci: 持续集成相关文件修改
- chore: 其他修改（不在上述类型中的修改）
- release: 发布新版本


### subject commit 的描述

commit message 的概述
