import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as d,c as o,d as e,b as n,w as s,e as i,f as c}from"./app-3417b901.js";const u="/blogs/assets/gitflow-5c67ec7f.png",p={},v=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),i(" Git")],-1),m={class:"table-of-contents"},b=c('<hr><h2 id="gitflow规范" tabindex="-1"><a class="header-anchor" href="#gitflow规范" aria-hidden="true">#</a> GitFlow规范</h2><figure><img src="'+u+`" alt="GitFlow" tabindex="0" loading="lazy"><figcaption>GitFlow</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1 Master 分支
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常驻分支只有两个master、develop;<br> 其中master是最新的，发布后需要在master上打版本tag，develop数据开发分支 临时分支有三个Release、Feature、Hotfix；<br> 其中release属于开发阶段用于质量测试的临时分支，feature属于开发过程中新作的功能，hotfix属于发布版本后再发现的问题修复</p><h2 id="commit-规范" tabindex="-1"><a class="header-anchor" href="#commit-规范" aria-hidden="true">#</a> commit 规范</h2><h3 id="格式" tabindex="-1"><a class="header-anchor" href="#格式" aria-hidden="true">#</a> 格式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>scope<span class="token operator">&gt;</span><span class="token punctuation">)</span>: <span class="token operator">&lt;</span>subject<span class="token operator">&gt;</span>
<span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>body<span class="token operator">&gt;</span>
<span class="token comment"># 空一行</span>
<span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><ul><li>feat：新特性</li><li>fix: 修复bug</li><li>docs： 文档</li><li>style：格式</li><li>refactor：重构（不是新增功能，也是修改bug的代码变动）</li><li>perf：优化相关，比如提升性能、体验</li><li>test：增加测试</li><li>chore：构建过程或辅助工具的变动</li><li>revert：回滚到上一个版本</li><li>merge：代码合并</li><li>sync：同步分支代码</li></ul><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4><ul><li>scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同</li></ul><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><ul><li>subject是 commit 目的的简短描述，不超过50个字符</li></ul><h4 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h4><ul><li>详细说明，可以省略</li></ul><h4 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h4><ul><li>须关闭的Jira号或者链接</li></ul></div><h2 id="commit-tips" tabindex="-1"><a class="header-anchor" href="#commit-tips" aria-hidden="true">#</a> commit Tips</h2><blockquote><p>冒号后和&#39;subject&#39;要加一个空格，目的是在IDEA历史记录里看上去干净</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>feat: 用户查询接口开发 Close<span class="token comment">#RM-23412</span>
fix<span class="token punctuation">(</span>DAO<span class="token punctuation">)</span>: 用户查询缺少username属性 Close<span class="token comment">#BUG-23412</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>如果subject无法说明本次提交可以考虑body描述详细信息</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>feat: 客户交易金额同步至风控平台

<span class="token number">1</span>、调用分控平台API_XXX
<span class="token number">2</span>、调用redis接口
<span class="token number">3</span>、xxx分布一致性

Close<span class="token comment">#RM-23412</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="如何优雅的merge-git-pull-rebase" tabindex="-1"><a class="header-anchor" href="#如何优雅的merge-git-pull-rebase" aria-hidden="true">#</a> 如何优雅的<code>merge</code>（git pull --rebase）</h2><p>场景：同事tom和自己对同项目代码进行修改，自己为了避免冲突报错，一般会先pull再merge，这样操作并没毛病。</p><p>问题：但是会在git记录中产生大量的merge记录，每次过滤历史信息时会有很多无效信息</p><p>解决方法：使用<code>git pull --rebase</code>命令，将自己的提交放一边，然后拉去同事tom记录，<br> 之后在tom的记录后面衔接自己的提交，形成线行记录，避免了无效的merge记录。</p><p>IDEA在git Update Project时候，选择Rebase就行。</p><h2 id="关于git-reset和git-revert" tabindex="-1"><a class="header-anchor" href="#关于git-reset和git-revert" aria-hidden="true">#</a> 关于<code>git reset</code>和<code>git revert</code></h2><p>git reset 适合本地修正，历史记录会被改写。<br> git revert 适合多人协作，不改写历史。</p><p>reset</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#有以下提交记录：
A - B - C - D (HEAD)

#想要撤销提交 D，不保留任何改动内容。
git reset --hard HEAD~1

#执行后：
A - B - C (HEAD)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>revert</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#有以下提交记录：
A - B - C - D (HEAD)

#想要撤销提交 D，但保留完整的历史记录。
git revert HEAD

执行后：
A - B - C - D - E (HEAD)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>场景对比<br> 假设你在开发过程中发现 D 提交引入了严重的bug：</p><p>在本地开发分支（未推送远程）<br> 使用 git reset --hard HEAD~1，快速撤销。</p><p>在共享分支（已推送远程）<br> 使用 git revert HEAD，生成新的撤销提交，避免影响其他开发者。</p><p>[参考]</p>`,29),h={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://github.com/vuejs/core/blob/main/.github/commit-convention.md",target:"_blank",rel:"noopener noreferrer"},f={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"};function x(_,k){const a=l("router-link"),t=l("ExternalLinkIcon");return d(),o("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[n(a,{to:"#gitflow规范"},{default:s(()=>[i("GitFlow规范")]),_:1})]),e("li",null,[n(a,{to:"#commit-规范"},{default:s(()=>[i("commit 规范")]),_:1}),e("ul",null,[e("li",null,[n(a,{to:"#格式"},{default:s(()=>[i("格式")]),_:1})])])]),e("li",null,[n(a,{to:"#commit-tips"},{default:s(()=>[i("commit Tips")]),_:1})]),e("li",null,[n(a,{to:"#如何优雅的merge-git-pull-rebase"},{default:s(()=>[i("如何优雅的merge（git pull --rebase）")]),_:1})]),e("li",null,[n(a,{to:"#关于git-reset和git-revert"},{default:s(()=>[i("关于git reset和git revert")]),_:1})])])]),b,e("ul",null,[e("li",null,[e("a",h,[i("https://nvie.com/posts/a-successful-git-branching-model/"),n(t)])]),e("li",null,[e("a",g,[i("https://github.com/vuejs/core/blob/main/.github/commit-convention.md"),n(t)])]),e("li",null,[e("a",f,[i("https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"),n(t)])])])])}const A=r(p,[["render",x],["__file","Git.html.vue"]]);export{A as default};
