---
icon: fab fa-markdown
date: 2022-01-12
category:
  - Tools
tag:
  - tools
star: true
sticky: true
---

# Git

[[toc]]
---

## 1 GitFlow规范

![GitFlow](../../docs/.vuepress/public/gitflow.png)

```text
# 1 Master 分支
提供基础分支，其他版本随时从主分支切分出去做版本开发;只能从release和hotfix分支合并过来，研发不可直接commit到主分支。
版本发布从合并后的主分支上打tag

# 2 Develop 分支
这个分支是开发分支，新增功能时候需要基于开发分支切分出 Feature 或以自己命名的分支，所有的Feature或命名分支都是从这个分支切出去的。
而 Feature 或命名分支的功能完成后，都会再合并到这个分支上来。

# 3 Hotfix 分支
客户的现场产品版本发生紧急故障时候,会从Master分支开一个Hotfix分支进行修复,Hotfix 修复完成后要再合并到Master和Develop 分支。
为什么合并回Dev分支？防止Dev合并到Master分支会被覆盖,故障再次出现。
为什么不在Dev分支修复？Dev还在开发,会有其他未知风险。

# 4 Release 分支
Develop分支成熟后可以合并到 Release 分支。做完最后的测试 Release 分支将会同时合并到 Master 以及 Develop 這两个分支上。

# 5 Feature||name 分支
Feature 分支都是从 Develop 分支來的，完成之后会在合并回 Develop 分支。
```
常驻分支只有两个master、develop;其中master是最新的，发布后需要在master上打版本tag，develop数据开发分支
临时分支有三个Release、Feature、Hotfix；其中release属于开发阶段用于质量测试的临时分支，feature属于开发过程中新作的功能，hotfix属于发布版本后再发现的问题修复

## 2 git commit 规范

### 2.1 格式
```bash
<type>(<scope>): <subject>
# 空一行
<body>
# 空一行
<footer>
```
::: tip
#### type
- feat：新特性
- fix: 修复bug
- docs： 文档
- style：格式
- refactor：重构（不是新增功能，也是修改bug的代码变动）
- perf：优化相关，比如提升性能、体验
- test：增加测试
- chore：构建过程或辅助工具的变动
- revert：回滚到上一个版本
- merge：代码合并
- sync：同步分支代码
#### scope
- scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同
#### subject
- subject是 commit 目的的简短描述，不超过50个字符
#### body
- 详细说明，可以省略
#### footer
- 须关闭的Jira号或者链接
:::

### 2.2 案例说明
```bash
# 1、冒号后和<subject>要加一个空格，目的是在IDEA历史记录里看上去干净
fix(DAO): 用户查询缺少username属性 Close#BUG-23412

# 2、如果设计修改小于3个文件可以用｜符号隔离
feat(UserController|UserService): 用户查询接口开发 Close#RM-23412

# 3、如果涉及多个文件的修改可以忽略(<scope>)字段
feat: 用户查询接口开发 Close#RM-23412

# 4、如果subject无法说明本次提交可以考虑body描述详细信息
`
feat: 客户交易金额同步至风控平台

1、调用分控平台API_XXX
2、调用redis接口
3、xxx分布一致性

Close#RM-23412
`
```

## 3 Actions

### 3.1 概念

### 3.2 案例
```yml
name: CI

on:
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]

  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      
      - name: Setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: '14'

      - name: Cache dependencies
        uses: actions/cache@v2
        id: yarn-cache
        with:
          path: |
            **/node_modules
          key: ${{ runner.os }}-yarn-${{ hashFiles('**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-yarn-
            
      # 如果缓存没有命中，安装依赖
      - name: Install dependencies
        if: steps.yarn-cache.outputs.cache-hit != 'true'
        run: yarn --frozen-lockfile

      # 运行构建脚本
      - name: Build dns-info site
        run: |
          yarn
          yarn build
```

https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html


[参考]
- https://nvie.com/posts/a-successful-git-branching-model/
- https://github.com/vuejs/core/blob/main/.github/commit-convention.md
- https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html
