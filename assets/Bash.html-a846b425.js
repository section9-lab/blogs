import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o,c,d as s,b as a,w as l,e as n,f as r}from"./app-3417b901.js";const u={},d=s("h1",{id:"bash",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#bash","aria-hidden":"true"},"#"),n(" Bash")],-1),v={class:"table-of-contents"},k=r(`<hr><h2 id="_1-编程风格" tabindex="-1"><a class="header-anchor" href="#_1-编程风格" aria-hidden="true">#</a> 1 编程风格：</h2><p>🎉Bash是个灵活度很高的脚本语言，好的编码风格阅读起来事半功倍。🎉</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>1、缩进用四个空格。 不要用制表符</p><p>2、代码超过30行都要放在函数中，并且由main函数启动。 不要写流水账</p><p>3、变量要注意作用域readonly和local按照需求声明好。 不要随意使用全局变量</p><p>4、函数要function check_disk()的方式声明。 不要用check_disk()的方式</p><p>5、逻辑判断用if [[ \${json} != &quot;fun&quot; ]]。 不要用test、[]的方式</p><p>6、if|while|for 循环分支逻辑在本行使用; then|; do。 不要另起一行</p></div><blockquote><p>调试代码要比写代码困难两倍。因此，你写代码时越多的使用奇技淫巧（自做聪明），你越难以调试它。 --Brian Kernighan</p></blockquote><p>Hello World</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#!/bin/bash

var=&quot;hello world&quot;;
echo &quot;$var&quot;

#执行
[root@localhost ~]# sh test.sh 
hello world
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-基础概念" tabindex="-1"><a class="header-anchor" href="#_2-基础概念" aria-hidden="true">#</a> 2 基础概念：</h2><h3 id="_2-1-变量" tabindex="-1"><a class="header-anchor" href="#_2-1-变量" aria-hidden="true">#</a> 2.1 变量</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#变量赋值</span>
<span class="token assign-left variable">test_str</span><span class="token operator">=</span><span class="token string">&quot;hello world&quot;</span>

<span class="token comment">#变量默认值</span>
<span class="token variable">\${hostname<span class="token operator">:=</span>&quot;127.0.0.1&quot;}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-read" tabindex="-1"><a class="header-anchor" href="#_2-2-read" aria-hidden="true">#</a> 2.2 read：</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入你的名字:&quot;</span> name
<span class="token builtin class-name">echo</span> <span class="token variable">\${name}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-for循环" tabindex="-1"><a class="header-anchor" href="#_2-3-for循环" aria-hidden="true">#</a> 2.3 for循环</h3><p>下面这两种形式</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">array</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token number">2</span> <span class="token number">3</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> <span class="token for-or-select variable">line</span> <span class="token keyword">in</span> <span class="token variable">\${array}</span><span class="token punctuation">;</span><span class="token keyword">do</span> 
   <span class="token builtin class-name">echo</span> <span class="token variable">\${line}</span>
<span class="token keyword">done</span>

<span class="token keyword">for</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;weclome <span class="token variable">$i</span>&quot;</span>
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-while循环" tabindex="-1"><a class="header-anchor" href="#_2-4-while循环" aria-hidden="true">#</a> 2.4 while循环</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">i</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token keyword">while</span><span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">&lt;=</span><span class="token number">5</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;welcome <span class="token variable">$i</span>&quot;</span>
  <span class="token builtin class-name">let</span> i++
<span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-case匹配" tabindex="-1"><a class="header-anchor" href="#_2-5-case匹配" aria-hidden="true">#</a> 2.5 case匹配</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">case</span> <span class="token variable">$1</span> <span class="token keyword">in</span>
start<span class="token punctuation">)</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;starting&quot;</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
stop<span class="token punctuation">)</span>
   <span class="token builtin class-name">echo</span> <span class="token string">&quot;stoping&quot;</span>
   <span class="token punctuation">;</span><span class="token punctuation">;</span>
*<span class="token punctuation">)</span>
  <span class="token builtin class-name">echo</span> <span class="token string">&quot;没有匹配的&quot;</span>
<span class="token keyword">esac</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-if判断" tabindex="-1"><a class="header-anchor" href="#_2-6-if判断" aria-hidden="true">#</a> 2.6 if判断</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入用户名&quot;</span> NAME
<span class="token builtin class-name">printf</span> <span class="token string">&#39;%s\\n&#39;</span> <span class="token variable">$NAME</span>

<span class="token keyword">if</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$NAME</span> <span class="token operator">=</span> root <span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$NAME</span> <span class="token operator">=~</span> <span class="token string">&quot;usr&quot;</span> <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;欢迎你 <span class="token variable">\${NAME}</span>&quot;</span>
<span class="token keyword">elif</span> <span class="token punctuation">[</span><span class="token punctuation">[</span> <span class="token variable">$NAME</span> <span class="token operator">=</span> magic <span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;欢迎你，<span class="token variable">\${NAME}</span>&quot;</span>          
<span class="token keyword">else</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;你是谁，886&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>判断参数详情</summary><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>-e 判断对象是否存在
-d 判断对象是否存在，并且为目录
-f 判断对象是否存在，并且为常规文件
-L 判断对象是否存在，并且为符号链接
-h 判断对象是否存在，并且为软链接
-s 判断对象是否存在，并且长度不为0
-r 判断对象是否存在，并且可读
-w 判断对象是否存在，并且可写
-x 判断对象是否存在，并且可执行
-O 判断对象是否存在，并且属于当前用户
-G 判断对象是否存在，并且属于当前用户组
-nt 判断file1是否比file2新  [ &quot;/data/file1&quot; -nt &quot;/data/file2&quot; ]
-ot 判断file1是否比file2旧  [ &quot;/data/file1&quot; -ot &quot;/data/file2&quot; ]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="_2-7-字符串" tabindex="-1"><a class="header-anchor" href="#_2-7-字符串" aria-hidden="true">#</a> 2.7 字符串</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#获取字符串长度</span>
<span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;abcd&quot;</span><span class="token builtin class-name">echo</span> <span class="token variable">\${<span class="token operator">#</span>string}</span> <span class="token comment">#输出 4</span>

<span class="token comment">#提取子字符串 </span>
<span class="token comment">#以下实例从字符串第 2 个字符开始截取 4 个字符：</span>
<span class="token assign-left variable">string</span><span class="token operator">=</span><span class="token string">&quot;turtle is a great site&quot;</span><span class="token builtin class-name">echo</span> <span class="token variable">\${string<span class="token operator">:</span>1<span class="token operator">:</span>4}</span> <span class="token comment"># 输出 le</span>

<span class="token comment">#查找子字符串</span>
<span class="token comment">#查找字符 i 或 o 的位置(哪个字母先出现就计算哪个)：</span>
<span class="token assign-left variable">str</span><span class="token operator">=</span><span class="token string">&quot;runoob is a great site&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">\`</span><span class="token function">expr</span> index <span class="token string">&quot;<span class="token variable">$str</span>&quot;</span> io<span class="token variable">\`</span></span> 
<span class="token number">4</span>

<span class="token comment">#字符串替换</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>JPG.JPG
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">/</span><span class="token operator">#</span>JPG<span class="token operator">/</span>jpg}</span>
jpg.JPG

<span class="token comment">#改变大小写</span>
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span>heLLo
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">^^</span>}</span>
HELLO
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token operator">,,</span>}</span>
hello
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-8-计算" tabindex="-1"><a class="header-anchor" href="#_2-8-计算" aria-hidden="true">#</a> 2.8 计算</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">4</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token variable">))</span></span>
<span class="token number">2</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token operator">**</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">3</span><span class="token variable">))</span></span>
<span class="token number">75</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable"><span class="token variable">$((</span> <span class="token punctuation">(</span><span class="token number">3</span> <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token variable">))</span></span>
<span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-9-三元表达式" tabindex="-1"><a class="header-anchor" href="#_2-9-三元表达式" aria-hidden="true">#</a> 2.9 三元表达式</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>
<span class="token assign-left variable">var</span><span class="token operator">=</span><span class="token variable">$1</span>
<span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token punctuation">[</span> <span class="token string">&quot;<span class="token variable">$var</span>&quot;</span> <span class="token operator">==</span> <span class="token number">123</span> <span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">echo</span> <span class="token boolean">true</span> <span class="token operator">||</span> <span class="token builtin class-name">echo</span> <span class="token boolean">false</span><span class="token variable">)</span></span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$res</span>&quot;</span>

<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sh test.sh 123</span>
<span class="token boolean">true</span>
<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sh test.sh 1234</span>
<span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-10-数组" tabindex="-1"><a class="header-anchor" href="#_2-10-数组" aria-hidden="true">#</a> 2.10 数组</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>定义数组
<span class="token comment">#在 Shell 中，用括号来表示数组，数组元素用&quot;空格&quot;符号分割开。</span>
<span class="token assign-left variable">array_name</span><span class="token operator">=</span><span class="token punctuation">(</span>value0 value1 value2 value3<span class="token punctuation">)</span>

<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>读取数组
读取数组元素值的一般格式是：
<span class="token variable">\${数组名<span class="token punctuation">[</span>下标<span class="token punctuation">]</span>}</span>
例如
<span class="token assign-left variable">valuen</span><span class="token operator">=</span><span class="token variable">\${array_name<span class="token punctuation">[</span>n<span class="token punctuation">]</span>}</span>
<span class="token comment">#使用 @ 符号可以获取数组中的所有元素：</span>
<span class="token builtin class-name">echo</span> <span class="token variable">\${array_name<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>

<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>获取数组的长度
获取数组长度的方法与获取字符串长度的方法相同，例如：
<span class="token comment"># 取得数组元素的个数</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
<span class="token comment"># 或者</span>
<span class="token assign-left variable">length</span><span class="token operator">=</span><span class="token variable">\${<span class="token operator">#</span>array_name<span class="token punctuation">[</span>*<span class="token punctuation">]</span>}</span>

<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>删除数组
$ <span class="token assign-left variable">foo</span><span class="token operator">=</span><span class="token punctuation">(</span>a b c d e f<span class="token punctuation">)</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b c d e f

$ <span class="token builtin class-name">unset</span> foo<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
$ <span class="token builtin class-name">echo</span> <span class="token variable">\${foo<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>
a b d e f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-11-哈希表" tabindex="-1"><a class="header-anchor" href="#_2-11-哈希表" aria-hidden="true">#</a> 2.11 哈希表</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token assign-left variable">ARRAY</span><span class="token operator">=</span><span class="token punctuation">(</span> <span class="token string">&quot;zhangsan:7123&quot;</span>
        <span class="token string">&quot;lisi:9212&quot;</span>
        <span class="token string">&quot;wangwu:6323&quot;</span>
        <span class="token string">&quot;zhaoliu:3212&quot;</span> <span class="token punctuation">)</span>

<span class="token comment">#获取第2个元素</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;key:<span class="token variable">\${ARRAY<span class="token punctuation">[</span>2<span class="token punctuation">]</span><span class="token operator">%%</span><span class="token operator">:</span>*}</span><span class="token entity" title="\\t">\\t</span>value:<span class="token variable">\${ARRAY<span class="token punctuation">[</span>2<span class="token punctuation">]</span><span class="token operator">#</span>*<span class="token operator">:</span>}</span><span class="token entity" title="\\n">\\n</span>&quot;</span>

<span class="token comment">#遍历所有元素</span>
<span class="token keyword">for</span> <span class="token for-or-select variable">shard</span> <span class="token keyword">in</span> <span class="token string">&quot;<span class="token variable">\${ARRAY<span class="token punctuation">[</span>@<span class="token punctuation">]</span>}</span>&quot;</span><span class="token punctuation">;</span> <span class="token keyword">do</span>
    <span class="token assign-left variable">key</span><span class="token operator">=</span><span class="token variable">\${shard<span class="token operator">%%</span><span class="token operator">:</span>*}</span>
    <span class="token assign-left variable">value</span><span class="token operator">=</span><span class="token variable">\${shard<span class="token operator">#</span>*<span class="token operator">:</span>}</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;key:<span class="token variable">\${key}</span><span class="token entity" title="\\t">\\t</span>value:<span class="token variable">\${value}</span>&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">done</span>


<span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sh hashtable.sh</span>
key:wangwu	value:6323

key:zhangsan	value:7123
key:lisi	     value:9212
key:wangwu	   value:6323
key:zhaoliu	   value:3212
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-12-函数" tabindex="-1"><a class="header-anchor" href="#_2-12-函数" aria-hidden="true">#</a> 2.12 函数</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">print_sum</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">#分别表示第一个参数，第二个参数</span>
    <span class="token assign-left variable">args1</span><span class="token operator">=</span><span class="token variable">$1</span>
    <span class="token assign-left variable">args2</span><span class="token operator">=</span><span class="token variable">$2</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;input args1, <span class="token variable">$args1</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;input args2, <span class="token variable">$args1</span>&quot;</span>
    <span class="token builtin class-name">return</span> <span class="token variable"><span class="token variable">$((</span>\${args1} <span class="token operator">+</span> \${args2}<span class="token variable">))</span></span>
<span class="token punctuation">}</span>
print_sum <span class="token number">12</span> <span class="token number">13</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;<span class="token variable">$?</span>&quot;</span>

<span class="token punctuation">[</span>root@loacl ~<span class="token punctuation">]</span><span class="token comment"># sh test.sh </span>
input args1, <span class="token number">12</span>
input args2, <span class="token number">12</span>
<span class="token number">25</span>
--------------------------------------------------------------
<span class="token variable">$?</span> 表示上一个命令退出的状态,0表示执行正常，不等于0表示执行不正常。
<span class="token variable">$$</span> 表示当前进程编号
<span class="token variable">$0</span> 表示当前脚本名称
<span class="token variable">$#</span> 表示参数的个数，常用于循环
<span class="token variable">$*</span>和<span class="token variable">$@</span> 都表示参数列表 
<span class="token variable">$n</span> 表示n位置的输入参数（n代表数字，n<span class="token operator">&gt;=</span><span class="token number">1</span>）
--------------------------------------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-13-文本处理" tabindex="-1"><a class="header-anchor" href="#_2-13-文本处理" aria-hidden="true">#</a> 2.13 文本处理</h3><h4 id="awk" tabindex="-1"><a class="header-anchor" href="#awk" aria-hidden="true">#</a> awk</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">awk</span> <span class="token string">&#39;{print $5}&#39;</span> <span class="token function">file</span>              <span class="token comment"># 打印文件中以空格分隔的第五列</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $5}&#39;</span> <span class="token function">file</span>       <span class="token comment"># 打印文件中以逗号分隔的第五列</span>
<span class="token function">awk</span> <span class="token string">&#39;/str/ {print $2}&#39;</span> <span class="token function">file</span>        <span class="token comment"># 打印文件中包含 str 的所有行的第二列</span>
<span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $NF}&#39;</span> <span class="token function">file</span>      <span class="token comment"># 打印逗号分隔的文件中的每行最后一列 </span>
<span class="token function">awk</span> <span class="token string">&#39;{s+=$1} END {print s}&#39;</span> <span class="token function">file</span>   <span class="token comment"># 计算所有第一列的合</span>
<span class="token function">awk</span> <span class="token string">&#39;NR%3==1&#39;</span> <span class="token function">file</span>                 <span class="token comment"># 从第一行开始，每隔三行打印一行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sed" tabindex="-1"><a class="header-anchor" href="#sed" aria-hidden="true">#</a> sed</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token string">&#39;s/find/replace/&#39;</span> <span class="token function">file</span>         <span class="token comment"># 替换文件中首次出现的字符串并输出结果 </span>
<span class="token function">sed</span> <span class="token string">&#39;10s/find/replace/&#39;</span> <span class="token function">file</span>       <span class="token comment"># 替换文件第 10 行内容</span>
<span class="token function">sed</span> <span class="token string">&#39;10,20s/find/replace/&#39;</span> <span class="token function">file</span>    <span class="token comment"># 替换文件中 10-20 行内容</span>
<span class="token function">sed</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;s/regex/replace/g&#39;</span> <span class="token function">file</span>    <span class="token comment"># 替换文件中所有出现的字符串</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/find/replace/g&#39;</span> <span class="token function">file</span>     <span class="token comment"># 替换文件中所有出现的字符并且覆盖文件</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/find/i\\newline&#39;</span> <span class="token function">file</span>      <span class="token comment"># 在文件的匹配文本前插入行</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;/find/a\\newline&#39;</span> <span class="token function">file</span>      <span class="token comment"># 在文件的匹配文本后插入行</span>
<span class="token function">sed</span> <span class="token string">&#39;/line/s/find/replace/&#39;</span> <span class="token function">file</span>   <span class="token comment"># 先搜索行特征再执行替换</span>
<span class="token function">sed</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/f/r/&#39;</span> <span class="token parameter variable">-e</span> <span class="token string">&#39;s/f/r&#39;</span> <span class="token function">file</span>    <span class="token comment"># 执行多次替换</span>
<span class="token function">sed</span> <span class="token string">&#39;s#find#replace#&#39;</span> <span class="token function">file</span>         <span class="token comment"># 使用 # 替换 / 来避免 pattern 中有斜杆</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token parameter variable">-r</span> <span class="token string">&#39;s/^\\s+//g&#39;</span> <span class="token function">file</span>         <span class="token comment"># 删除文件每行头部空格</span>
<span class="token function">sed</span> <span class="token string">&#39;/^$/d&#39;</span> <span class="token function">file</span>                   <span class="token comment"># 删除文件空行并打印</span>
<span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/\\s\\+$//&#39;</span> <span class="token function">file</span>            <span class="token comment"># 删除文件每行末尾多余空格</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2p&#39;</span> <span class="token function">file</span>                   <span class="token comment"># 打印文件第二行</span>
<span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2,5p&#39;</span> <span class="token function">file</span>                 <span class="token comment"># 打印文件第二到第五行</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="grep" tabindex="-1"><a class="header-anchor" href="#grep" aria-hidden="true">#</a> grep</h4><p>正则过滤</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">###############################################</span>
<span class="token comment"># ^_              匹配以下划线\`_\`为开始</span>
<span class="token comment"># [a-zA-Z]{3,5}   匹配3-5个大小写字母</span>
<span class="token comment"># :\\*:            匹配\`:*:\`字符</span>
<span class="token comment"># [7-9].          匹配1-9开头后面\`.\`代表一个占位符</span>
<span class="token comment"># :[0-9]{2}       匹配\`:\`加上2位0-9的数字</span>
<span class="token comment">###############################################</span>

<span class="token punctuation">[</span>root@dev ~<span class="token punctuation">]</span><span class="token comment"># cat /etc/passwd|grep -E &quot;^_[a-zA-Z]{3,5}:\\*:[7-9].:[0-9]{2}&quot;</span>

_www:*:70:70:World Wide Web Server:/Library/WebServer:/usr/bin/false
_eppc:*:71:71:Apple Events User:/var/empty:/usr/bin/false
_cvs:*:72:72:CVS Server:/var/empty:/usr/bin/false
_svn:*:73:73:SVN Server:/var/empty:/usr/bin/false
_mysql:*:74:74:MySQL Server:/var/empty:/usr/bin/false
_sshd:*:75:75:sshd Privilege separation:/var/empty:/usr/bin/false
_qtss:*:76:76:QuickTime Streaming Server:/var/empty:/usr/bin/false
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sort" tabindex="-1"><a class="header-anchor" href="#sort" aria-hidden="true">#</a> sort</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sort</span> <span class="token function">file</span>                          <span class="token comment"># 排序文件</span>
<span class="token function">sort</span> <span class="token parameter variable">-r</span> <span class="token function">file</span>                       <span class="token comment"># 反向排序（降序）</span>
<span class="token function">sort</span> <span class="token parameter variable">-n</span> <span class="token function">file</span>                       <span class="token comment"># 使用数字而不是字符串进行比较</span>
<span class="token function">sort</span> -t: <span class="token parameter variable">-k</span> 3n /etc/passwd         <span class="token comment"># 按:切分 passwd 文件的第三列进行排序</span>
<span class="token function">sort</span> <span class="token parameter variable">-u</span> <span class="token function">file</span>                       <span class="token comment"># 去重排序</span>
<span class="token function">sort</span> <span class="token parameter variable">-h</span> <span class="token function">file</span>                       <span class="token comment"># 支持 K/M/G 等量级符号，可与 du 结合使用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-14-颜色" tabindex="-1"><a class="header-anchor" href="#_2-14-颜色" aria-hidden="true">#</a> 2.14 颜色</h3><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>#字体
\\033[1;37m：白色    \\033[1;33m：黄色
\\033[0;30m：黑色    \\033[1;30m：深灰色
\\033[0;31m：红色    \\033[1;31m：浅红色
\\033[0;32m：绿色    \\033[1;32m：浅绿色
\\033[0;33m：棕色    \\033[0;37m：浅灰色
\\033[0;34m：蓝色    \\033[1;34m：浅蓝色
\\033[0;35m：粉红    \\033[1;35m：浅粉色
\\033[0;36m：青色    \\033[1;36m：浅青色

#背景
\\033[0;40m：蓝色    \\033[1;44m：黑色
\\033[0;41m：红色    \\033[1;45m：粉红
\\033[0;42m：绿色    \\033[1;46m：青色
\\033[0;43m：棕色    \\033[1;47m：浅灰色
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-其他" tabindex="-1"><a class="header-anchor" href="#_3-其他" aria-hidden="true">#</a> 3 其他：</h2><details class="hint-container details"><summary>错误处理</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function-name function">err</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;[<span class="token variable"><span class="token variable">$(</span><span class="token function">date</span> +<span class="token string">&#39;%Y-%m-%dT%H:%M:%S%z&#39;</span><span class="token variable">)</span></span>]: <span class="token variable">$@</span>&quot;</span> <span class="token operator">&gt;</span><span class="token file-descriptor important">&amp;2</span>
<span class="token punctuation">}</span>

<span class="token keyword">if</span> <span class="token operator">!</span> do_something<span class="token punctuation">;</span> <span class="token keyword">then</span>
    err <span class="token string">&quot;Unable to do_something&quot;</span>
    <span class="token builtin class-name">exit</span> <span class="token string">&quot;<span class="token variable">\${E_DID_NOTHING}</span>&quot;</span>
<span class="token keyword">fi</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><details class="hint-container details"><summary>进度条：</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/bash</span>

<span class="token keyword">function</span> <span class="token function-name function">progress</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">out</span><span class="token operator">=</span><span class="token string">&#39;&#39;</span>
    <span class="token keyword">for</span> <span class="token variable"><span class="token punctuation">((</span>i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>$i<span class="token operator">&lt;=</span><span class="token number">100</span><span class="token punctuation">;</span>i<span class="token operator">+=</span><span class="token number">1</span><span class="token punctuation">))</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span>
            <span class="token builtin class-name">printf</span> <span class="token string">&quot;progress:[%-100s] %d%%<span class="token entity" title="\\r">\\r</span>&quot;</span> <span class="token variable">\${out}</span> <span class="token variable">$i</span>
            <span class="token function">sleep</span> <span class="token number">0.01</span>
            <span class="token builtin class-name">local</span> <span class="token assign-left variable">out</span><span class="token operator">=</span><span class="token comment">#\${out}  </span>
    <span class="token keyword">done</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&#39;&#39;</span>
<span class="token punctuation">}</span>

progress


<span class="token punctuation">[</span>root@dev ~<span class="token punctuation">]</span><span class="token comment"># sh print200.sh </span>
progress:<span class="token punctuation">[</span><span class="token comment">##################################################################]100%</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="_4-案例" tabindex="-1"><a class="header-anchor" href="#_4-案例" aria-hidden="true">#</a> 4 案例：</h2><h3 id="案例一" tabindex="-1"><a class="header-anchor" href="#案例一" aria-hidden="true">#</a> 案例一：</h3><details class="hint-container details"><summary>根据pid获取进程的执行信息\`show_pid_info.sh\`</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#! /bin/bash</span>

<span class="token builtin class-name">read</span> <span class="token parameter variable">-p</span> <span class="token string">&quot;请输入要查询的PID: &quot;</span> P

<span class="token assign-left variable">n</span><span class="token operator">=</span><span class="token variable"><span class="token variable">\`</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$<span class="token punctuation">{</span>P<span class="token punctuation">}</span><span class="token string">&#39;$/{print $0}&#39;</span><span class="token operator">|</span><span class="token function">wc</span> <span class="token parameter variable">-l</span><span class="token variable">\`</span></span>

<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$n</span> <span class="token parameter variable">-eq</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
 <span class="token builtin class-name">echo</span> <span class="token string">&quot;该PID不存在！！&quot;</span>
 <span class="token builtin class-name">exit</span>
<span class="token keyword">fi</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[32m--------------------------------<span class="token entity" title="\\e">\\e</span>[0m&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程PID: <span class="token variable">\${P}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程命令：$(ps -aux| awk &#39;<span class="token variable">$2</span>~/^&#39;<span class="token variable">$P</span>&#39;$/{for (i=11;i&lt;=NF;i++) printf(&quot;</span>%s <span class="token string">&quot;,<span class="token variable">$i</span>)}&#39;)&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程所属用户: <span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $1}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;CPU占用率：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $3}&#39;</span><span class="token variable">)</span></span>%&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;内存占用率：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $4}&#39;</span><span class="token variable">)</span></span>%&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程开始运行的时间：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $9}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程运行的时间：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $10}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程状态：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $8}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程虚拟内存：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $5}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;进程共享内存：<span class="token variable"><span class="token variable">$(</span><span class="token function">ps</span> -aux<span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;$2~/^&#39;</span>$P<span class="token string">&#39;$/{print $6}&#39;</span><span class="token variable">)</span></span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\e">\\e</span>[32m--------------------------------<span class="token entity" title="\\e">\\e</span>[0m&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@localhost ~<span class="token punctuation">]</span><span class="token comment"># sh show_pid_info.sh</span>
请输入要查询的PID: <span class="token number">1</span>
--------------------------------
进程PID: <span class="token number">1</span>
进程命令：/usr/lib/systemd/systemd --switched-root <span class="token parameter variable">--system</span> <span class="token parameter variable">--deserialize</span> <span class="token number">22</span> 
进程所属用户: root
CPU占用率：0.0%
内存占用率：0.2%
进程开始运行的时间：Jul28
进程运行的时间：0:01
进程状态：Ss
进程虚拟内存：128160
进程共享内存：3720
--------------------------------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="案例二" tabindex="-1"><a class="header-anchor" href="#案例二" aria-hidden="true">#</a> 案例二</h3><details class="hint-container details"><summary>系统负载查看\`show_cpu_info.sh\`</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash</span>

<span class="token comment">#物理内存使用量</span>
<span class="token assign-left variable">mem_used</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print$3}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#物理内存总量</span>
<span class="token assign-left variable">mem_total</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">free</span> <span class="token parameter variable">-m</span> <span class="token operator">|</span> <span class="token function">grep</span> Mem <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print$2}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#cpu核数</span>
<span class="token assign-left variable">cpu_num</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span>lscpu  <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&#39;CPU(s)&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;NR==1 {print$2}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#平均负载</span>
<span class="token assign-left variable">load_average</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">uptime</span>  <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token builtin class-name">:</span> <span class="token string">&#39;{print$5}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#用户态的CPU使用率</span>
<span class="token assign-left variable">cpu_us</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">top</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">grep</span> Cpu <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $1}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $(NF-1)}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#内核态的CPU使用率</span>
<span class="token assign-left variable">cpu_sys</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">top</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">grep</span> Cpu <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $2}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $(NF-1)}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#等待I/O的CPU使用率</span>
<span class="token assign-left variable">cpu_wa</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">top</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">grep</span> Cpu <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $5}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $(NF-1)}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#处理硬中断的CPU使用率</span>
<span class="token assign-left variable">cpu_hi</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">top</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">grep</span> Cpu <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $6}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $(NF-1)}&#39;</span><span class="token variable">)</span></span>

<span class="token comment">#处理软中断的CPU使用率</span>
<span class="token assign-left variable">cpu_si</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">top</span> <span class="token parameter variable">-d</span> <span class="token number">1</span> <span class="token parameter variable">-n</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token function">grep</span> Cpu <span class="token operator">|</span> <span class="token function">awk</span> -F<span class="token string">&#39;,&#39;</span> <span class="token string">&#39;{print $7}&#39;</span><span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $(NF-1)}&#39;</span><span class="token variable">)</span></span>

<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;物理内存使用量(M)为：<span class="token variable">\${mem_used}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;物理内存总量(M)为：<span class="token variable">\${mem_total}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;cpu核数为：<span class="token variable">\${cpu_num}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;平均负载为：<span class="token variable">\${load_average}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;用户态的CPU使用率为：<span class="token variable">\${cpu_us}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;内核态的CPU使用率为：<span class="token variable">\${cpu_sys}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;等待I/O的CPU使用率为：<span class="token variable">\${cpu_wa}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;处理硬中断的CPU使用率为：<span class="token variable">\${cpu_hi}</span>&quot;</span>
<span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;处理软中断的CPU使用率为：<span class="token variable">\${cpu_si}</span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="案例三" tabindex="-1"><a class="header-anchor" href="#案例三" aria-hidden="true">#</a> 案例三</h3><p>随着postman越来越慢占用资源越来越大，有必要使用bash+curl代替它；微服务后台直接测试接口速度酸爽很多。</p><details class="hint-container details"><summary>postman.h</summary><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/usr/bin/bash</span>

<span class="token comment">##############################</span>
<span class="token comment">#</span>
<span class="token comment">#des:API测试脚本</span>
<span class="token comment">#date:20210901</span>
<span class="token comment">#</span>
<span class="token comment">##############################</span>

<span class="token assign-left variable">SERVICE_HOST</span><span class="token operator">=</span><span class="token string">&quot;http://localhost:443/v1/api/xxservice&quot;</span>


<span class="token keyword">function</span> <span class="token function-name function">get_token</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">local</span> <span class="token assign-left variable">token_api</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">\${SERVICE_HOST}</span>/token&quot;</span>

    <span class="token builtin class-name">local</span> <span class="token assign-left variable">res</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-k</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-XPOST</span> $<span class="token punctuation">{</span>token_api<span class="token punctuation">}</span> <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
                <span class="token string">&#39;{&quot;username&quot;:&quot;xxxxxxxxxx&quot;,
                  &quot;password&quot;:&quot;yyyyyyyyyyyy&quot;,
                  &quot;date&quot;:&quot;1609430400000&quot;}&#39;</span>
               <span class="token variable">)</span></span>

    <span class="token builtin class-name">echo</span> <span class="token string">&quot;API: <span class="token variable">\${token_api}</span>&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;token: <span class="token variable">\${res<span class="token operator">:=</span>null}</span>&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">help</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;where options include:&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>-help              <span class="token entity" title="\\t">\\t</span>脚本帮助文档&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>-version           <span class="token entity" title="\\t">\\t</span>脚本版本信息&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>-get_token         <span class="token entity" title="\\t">\\t</span>获取token认证&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">version</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;ScriptName: rest_api_dev.sh&quot;</span>
    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token entity" title="\\t">\\t</span>V1.0&quot;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function-name function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;<span class="token variable">$1</span>&quot;</span> <span class="token keyword">in</span>
        -help<span class="token punctuation">)</span>                <span class="token builtin class-name">help</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
        -version<span class="token punctuation">)</span>             version<span class="token punctuation">;</span><span class="token punctuation">;</span>
        -get_token<span class="token punctuation">)</span>           get_token<span class="token punctuation">;</span><span class="token punctuation">;</span>
        *<span class="token punctuation">)</span>                    <span class="token builtin class-name">echo</span> <span class="token parameter variable">-e</span> <span class="token string">&quot;Usages：rest_api_dev.sh [-options] <span class="token entity" title="\\n">\\n</span>&quot;</span><span class="token punctuation">;</span> <span class="token builtin class-name">help</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
    <span class="token keyword">esac</span>
<span class="token punctuation">}</span>

main <span class="token variable">$@</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><p>[参考]</p>`,58),b={href:"https://wangdoc.com/bash/",target:"_blank",rel:"noopener noreferrer"},m={href:"https://google.github.io/styleguide/shell.xml",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/Bash-it/bash-it",target:"_blank",rel:"noopener noreferrer"};function g(f,$){const e=i("router-link"),t=i("ExternalLinkIcon");return o(),c("div",null,[d,s("nav",v,[s("ul",null,[s("li",null,[a(e,{to:"#_1-编程风格"},{default:l(()=>[n("1 编程风格：")]),_:1})]),s("li",null,[a(e,{to:"#_2-基础概念"},{default:l(()=>[n("2 基础概念：")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#_2-1-变量"},{default:l(()=>[n("2.1 变量")]),_:1})]),s("li",null,[a(e,{to:"#_2-2-read"},{default:l(()=>[n("2.2 read：")]),_:1})]),s("li",null,[a(e,{to:"#_2-3-for循环"},{default:l(()=>[n("2.3 for循环")]),_:1})]),s("li",null,[a(e,{to:"#_2-4-while循环"},{default:l(()=>[n("2.4 while循环")]),_:1})]),s("li",null,[a(e,{to:"#_2-5-case匹配"},{default:l(()=>[n("2.5 case匹配")]),_:1})]),s("li",null,[a(e,{to:"#_2-6-if判断"},{default:l(()=>[n("2.6 if判断")]),_:1})]),s("li",null,[a(e,{to:"#_2-7-字符串"},{default:l(()=>[n("2.7 字符串")]),_:1})]),s("li",null,[a(e,{to:"#_2-8-计算"},{default:l(()=>[n("2.8 计算")]),_:1})]),s("li",null,[a(e,{to:"#_2-9-三元表达式"},{default:l(()=>[n("2.9 三元表达式")]),_:1})]),s("li",null,[a(e,{to:"#_2-10-数组"},{default:l(()=>[n("2.10 数组")]),_:1})]),s("li",null,[a(e,{to:"#_2-11-哈希表"},{default:l(()=>[n("2.11 哈希表")]),_:1})]),s("li",null,[a(e,{to:"#_2-12-函数"},{default:l(()=>[n("2.12 函数")]),_:1})]),s("li",null,[a(e,{to:"#_2-13-文本处理"},{default:l(()=>[n("2.13 文本处理")]),_:1})]),s("li",null,[a(e,{to:"#_2-14-颜色"},{default:l(()=>[n("2.14 颜色")]),_:1})])])]),s("li",null,[a(e,{to:"#_3-其他"},{default:l(()=>[n("3 其他：")]),_:1})]),s("li",null,[a(e,{to:"#_4-案例"},{default:l(()=>[n("4 案例：")]),_:1}),s("ul",null,[s("li",null,[a(e,{to:"#案例一"},{default:l(()=>[n("案例一：")]),_:1})]),s("li",null,[a(e,{to:"#案例二"},{default:l(()=>[n("案例二")]),_:1})]),s("li",null,[a(e,{to:"#案例三"},{default:l(()=>[n("案例三")]),_:1})])])])])]),k,s("ul",null,[s("li",null,[s("a",b,[n("https://wangdoc.com/bash/"),a(t)])]),s("li",null,[s("a",m,[n("https://google.github.io/styleguide/shell.xml"),a(t)])]),s("li",null,[s("a",h,[n("https://github.com/Bash-it/bash-it"),a(t)])])])])}const y=p(u,[["render",g],["__file","Bash.html.vue"]]);export{y as default};
