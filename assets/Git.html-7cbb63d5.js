import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as d,d as e,b as n,w as i,e as a,f as c}from"./app-16ec0135.js";const u="/blogs/assets/gitflow-5c67ec7f.png",h={},p=e("h1",{id:"git",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#git","aria-hidden":"true"},"#"),a(" Git")],-1),b={class:"table-of-contents"},m=c('<hr><h2 id="gitflow规范" tabindex="-1"><a class="header-anchor" href="#gitflow规范" aria-hidden="true">#</a> GitFlow规范</h2><figure><img src="'+u+`" alt="GitFlow" tabindex="0" loading="lazy"><figcaption>GitFlow</figcaption></figure><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 1 Master 分支
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">提示</p><h4 id="type" tabindex="-1"><a class="header-anchor" href="#type" aria-hidden="true">#</a> type</h4><ul><li>feat：新特性</li><li>fix: 修复bug</li><li>docs： 文档</li><li>style：格式</li><li>refactor：重构（不是新增功能，也是修改bug的代码变动）</li><li>perf：优化相关，比如提升性能、体验</li><li>test：增加测试</li><li>chore：构建过程或辅助工具的变动</li><li>revert：回滚到上一个版本</li><li>merge：代码合并</li><li>sync：同步分支代码</li></ul><h4 id="scope" tabindex="-1"><a class="header-anchor" href="#scope" aria-hidden="true">#</a> scope</h4><ul><li>scope用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，视项目不同而不同</li></ul><h4 id="subject" tabindex="-1"><a class="header-anchor" href="#subject" aria-hidden="true">#</a> subject</h4><ul><li>subject是 commit 目的的简短描述，不超过50个字符</li></ul><h4 id="body" tabindex="-1"><a class="header-anchor" href="#body" aria-hidden="true">#</a> body</h4><ul><li>详细说明，可以省略</li></ul><h4 id="footer" tabindex="-1"><a class="header-anchor" href="#footer" aria-hidden="true">#</a> footer</h4><ul><li>须关闭的Jira号或者链接</li></ul></div><h2 id="案例说明" tabindex="-1"><a class="header-anchor" href="#案例说明" aria-hidden="true">#</a> 案例说明</h2><h3 id="冒号后和-subject-要加一个空格-目的是在idea历史记录里看上去干净" tabindex="-1"><a class="header-anchor" href="#冒号后和-subject-要加一个空格-目的是在idea历史记录里看上去干净" aria-hidden="true">#</a> 冒号后和&#39;subject&#39;要加一个空格，目的是在IDEA历史记录里看上去干净</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>feat: 用户查询接口开发 Close<span class="token comment">#RM-23412</span>
fix<span class="token punctuation">(</span>DAO<span class="token punctuation">)</span>: 用户查询缺少username属性 Close<span class="token comment">#BUG-23412</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如果subject无法说明本次提交可以考虑body描述详细信息" tabindex="-1"><a class="header-anchor" href="#如果subject无法说明本次提交可以考虑body描述详细信息" aria-hidden="true">#</a> 如果subject无法说明本次提交可以考虑body描述详细信息</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>feat: 客户交易金额同步至风控平台

<span class="token number">1</span>、调用分控平台API_XXX
<span class="token number">2</span>、调用redis接口
<span class="token number">3</span>、xxx分布一致性

Close<span class="token comment">#RM-23412</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[参考]</p>`,15),v={href:"https://nvie.com/posts/a-successful-git-branching-model/",target:"_blank",rel:"noopener noreferrer"},f={href:"https://github.com/vuejs/core/blob/main/.github/commit-convention.md",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html",target:"_blank",rel:"noopener noreferrer"};function _(x,k){const s=l("router-link"),t=l("ExternalLinkIcon");return o(),d("div",null,[p,e("nav",b,[e("ul",null,[e("li",null,[n(s,{to:"#gitflow规范"},{default:i(()=>[a("GitFlow规范")]),_:1})]),e("li",null,[n(s,{to:"#commit-规范"},{default:i(()=>[a("commit 规范")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#格式"},{default:i(()=>[a("格式")]),_:1})])])]),e("li",null,[n(s,{to:"#案例说明"},{default:i(()=>[a("案例说明")]),_:1}),e("ul",null,[e("li",null,[n(s,{to:"#冒号后和-subject-要加一个空格-目的是在idea历史记录里看上去干净"},{default:i(()=>[a("冒号后和'subject'要加一个空格，目的是在IDEA历史记录里看上去干净")]),_:1})]),e("li",null,[n(s,{to:"#如果subject无法说明本次提交可以考虑body描述详细信息"},{default:i(()=>[a("如果subject无法说明本次提交可以考虑body描述详细信息")]),_:1})])])])])]),m,e("ul",null,[e("li",null,[e("a",v,[a("https://nvie.com/posts/a-successful-git-branching-model/"),n(t)])]),e("li",null,[e("a",f,[a("https://github.com/vuejs/core/blob/main/.github/commit-convention.md"),n(t)])]),e("li",null,[e("a",g,[a("https://www.ruanyifeng.com/blog/2019/09/getting-started-with-github-actions.html"),n(t)])])])])}const j=r(h,[["render",_],["__file","Git.html.vue"]]);export{j as default};