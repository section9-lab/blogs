import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o,c as i,d as n,b as e,w as t,e as s,f as c}from"./app-3c55e35a.js";const r={},u=n("h1",{id:"python",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),s(" Python")],-1),d={class:"table-of-contents"},k=c(`<hr><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><h3 id="hello-world" tabindex="-1"><a class="header-anchor" href="#hello-world" aria-hidden="true">#</a> Hello World</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python</span>

<span class="token comment"># -*- encoding: utf-8 -*-</span>

<span class="token keyword">def</span> <span class="token function">print_hi</span><span class="token punctuation">(</span>name<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> say<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;I am python&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    hello<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&#39;Hello&#39;</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>hello<span class="token punctuation">}</span></span><span class="token string">, </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">! \\n</span><span class="token interpolation"><span class="token punctuation">{</span>say<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    print_hi<span class="token punctuation">(</span><span class="token string">&#39;World&#39;</span><span class="token punctuation">)</span>

    
<span class="token punctuation">[</span>root@loacl <span class="token operator">~</span><span class="token punctuation">]</span>python3 run<span class="token punctuation">.</span>py
Hello<span class="token punctuation">,</span> World! 
I am python
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="变量" tabindex="-1"><a class="header-anchor" href="#变量" aria-hidden="true">#</a> 变量</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">18</span>  <span class="token comment"># 年龄是 int 类型</span>
name<span class="token punctuation">:</span> <span class="token builtin">str</span> <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span>  <span class="token comment"># 名字现在是 str 类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span>

<span class="token punctuation">[</span>root@loacl <span class="token operator">~</span><span class="token punctuation">]</span>python3 run<span class="token punctuation">.</span>py
John <span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="判断" tabindex="-1"><a class="header-anchor" href="#判断" aria-hidden="true">#</a> 判断</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">200</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num is greater than 0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num is not greater than 0&quot;</span><span class="token punctuation">)</span>
    
<span class="token punctuation">[</span>root@loacl <span class="token operator">~</span><span class="token punctuation">]</span>python3 run<span class="token punctuation">.</span>py
num <span class="token keyword">is</span> greater than <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环" tabindex="-1"><a class="header-anchor" href="#循环" aria-hidden="true">#</a> 循环</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> item <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Finally finished!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="算术" tabindex="-1"><a class="header-anchor" href="#算术" aria-hidden="true">#</a> 算术</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>result <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">30</span> <span class="token comment"># =&gt; 40</span>
result <span class="token operator">=</span> <span class="token number">40</span> <span class="token operator">-</span> <span class="token number">10</span> <span class="token comment"># =&gt; 30</span>
result <span class="token operator">=</span> <span class="token number">50</span> <span class="token operator">*</span> <span class="token number">5</span>  <span class="token comment"># =&gt; 250</span>
result <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">/</span> <span class="token number">4</span>  <span class="token comment"># =&gt; 4.0 (Float Division)</span>
result <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">//</span> <span class="token number">4</span> <span class="token comment"># =&gt; 4 (Integer Division)</span>
result <span class="token operator">=</span> <span class="token number">25</span> <span class="token operator">%</span> <span class="token number">2</span>  <span class="token comment"># =&gt; 1</span>
result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">**</span> <span class="token number">3</span>  <span class="token comment"># =&gt; 125</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件读取" tabindex="-1"><a class="header-anchor" href="#文件读取" aria-hidden="true">#</a> 文件读取</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;myfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数" aria-hidden="true">#</a> 函数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;x is %s, y is %s&quot;</span> <span class="token operator">%</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
add<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span>    <span class="token comment"># =&gt; 11</span>

<span class="token keyword">def</span> <span class="token function">swap</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> y<span class="token punctuation">,</span> x
x <span class="token operator">=</span> <span class="token number">1</span>
y <span class="token operator">=</span> <span class="token number">2</span>
x<span class="token punctuation">,</span> y <span class="token operator">=</span> swap<span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span>  <span class="token comment"># =&gt; x = 2, y = 1</span>

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
add<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>      <span class="token comment"># =&gt; 15</span>
add<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>  <span class="token comment"># =&gt; 25</span>

<span class="token comment"># =&gt; True</span>
<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">:</span> x <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token comment"># =&gt; 5</span>
<span class="token punctuation">(</span><span class="token keyword">lambda</span> x<span class="token punctuation">,</span> y<span class="token punctuation">:</span> x <span class="token operator">**</span> <span class="token number">2</span> <span class="token operator">+</span> y <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异常处理" tabindex="-1"><a class="header-anchor" href="#异常处理" aria-hidden="true">#</a> 异常处理</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
    <span class="token comment"># 使用“raise”来引发错误</span>
    <span class="token keyword">raise</span> IndexError<span class="token punctuation">(</span><span class="token string">&quot;这是一个索引错误&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">except</span> IndexError <span class="token keyword">as</span> e<span class="token punctuation">:</span>
    <span class="token keyword">pass</span>                 <span class="token comment"># pass只是一个空操作。 通常你会在这里做恢复。</span>
<span class="token keyword">except</span> <span class="token punctuation">(</span>TypeError<span class="token punctuation">,</span> NameError<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>                 <span class="token comment"># 如果需要，可以一起处理多个异常。</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>                    <span class="token comment"># try/except 块的可选子句。 必须遵循除块之外的所有内容</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;All good!&quot;</span><span class="token punctuation">)</span>   <span class="token comment"># 仅当 try 中的代码未引发异常时运行</span>
<span class="token keyword">finally</span><span class="token punctuation">:</span>                 <span class="token comment"># 在所有情况下执行</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;我们可以在这里清理资源&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h3><table><thead><tr><th>类型</th><th>名称</th></tr></thead><tbody><tr><td>str</td><td>文本／字符串（Text）</td></tr><tr><td>bool</td><td>布尔值／逻辑值（Boolean）</td></tr><tr><td>int, float, complex</td><td>数值（Numeric）</td></tr><tr><td>dict</td><td>映射／键值对（Mapping）</td></tr><tr><td>list, tuple, range</td><td>序列（Sequence）</td></tr><tr><td>set, frozenset</td><td>集合（Set）</td></tr><tr><td>bytes, bytearray,memoryview</td><td>二进制数据（Binary）</td></tr></tbody></table><h4 id="字符串" tabindex="-1"><a class="header-anchor" href="#字符串" aria-hidden="true">#</a> 字符串</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hello <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
hello <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span>
multi_string <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Multiline Strings
Lorem ipsum dolor sit amet,
consectetur adipiscing elit &quot;&quot;&quot;</span>

<span class="token comment">#切片</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> msg <span class="token operator">=</span> <span class="token string">&quot;Hello, World!&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>msg<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
llo

<span class="token comment">#下标</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello <span class="token operator">=</span> <span class="token string">&quot;Hello, World&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>hello<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 获取第二个字符</span>
e
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span>hello<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>  <span class="token comment"># 获取倒数第一个字符</span>
d
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">type</span><span class="token punctuation">(</span>hello<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 得到的还是字符串</span>
<span class="token operator">&lt;</span><span class="token keyword">class</span> <span class="token string">&#39;str&#39;</span><span class="token operator">&gt;</span>

<span class="token comment">#长度</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> hello <span class="token operator">=</span> <span class="token string">&quot;Hello, World!&quot;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>hello<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token number">13</span>

<span class="token comment">#存在性判断</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token string">&#39;spam&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token keyword">in</span> <span class="token string">&#39;I saw spamalot!&#39;</span>
<span class="token boolean">True</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token keyword">not</span> <span class="token keyword">in</span> <span class="token string">&#39;I saw The Holy Grail!&#39;</span>
<span class="token boolean">True</span>

<span class="token comment">#字符串拼接</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">=</span> <span class="token string">&#39;spam&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> t <span class="token operator">=</span> <span class="token string">&#39;egg&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> s <span class="token operator">+</span> t  <span class="token comment"># 可以使用加号进行拼接</span>
<span class="token string">&#39;spamegg&#39;</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token string">&#39;spam&#39;</span> <span class="token string">&#39;egg&#39;</span>  <span class="token comment"># 两个字符串之间可以省略加号</span>
<span class="token string">&#39;spamegg&#39;</span>

<span class="token comment">#格式化</span>
name <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, %s!&quot;</span> <span class="token operator">%</span> name<span class="token punctuation">)</span>
name <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span>
age <span class="token operator">=</span> <span class="token number">23</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%s is %d years old.&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span>name<span class="token punctuation">,</span> age<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token builtin">format</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 方法
txt1 <span class="token operator">=</span> <span class="token string">&quot;My name is {fname}, I&#39;m {age}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>fname<span class="token operator">=</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> age<span class="token operator">=</span><span class="token number">36</span><span class="token punctuation">)</span>
txt2 <span class="token operator">=</span> <span class="token string">&quot;My name is {0}, I&#39;m {1}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span>
txt3 <span class="token operator">=</span> <span class="token string">&quot;My name is {}, I&#39;m {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="列表" tabindex="-1"><a class="header-anchor" href="#列表" aria-hidden="true">#</a> 列表</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#定义</span>
list1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;apple&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;banana&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cherry&quot;</span><span class="token punctuation">]</span>
list2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token boolean">True</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">]</span>
list3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
list4 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li1
<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li2
<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li3 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li3
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li4 <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> li4
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span>

<span class="token comment">#添加</span>
mylist <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
mylist<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
mylist<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> item <span class="token keyword">in</span> mylist<span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token comment"># 打印输出 1,2</span>
    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="元组" tabindex="-1"><a class="header-anchor" href="#元组" aria-hidden="true">#</a> 元组</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>my_tuple = (1, 2, 3)
my_tuple = tuple((1, 2, 3))
#集合
set1 = {&quot;a&quot;, &quot;b&quot;, &quot;c&quot;}   
set2 = set((&quot;a&quot;, &quot;b&quot;, &quot;c&quot;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>####字典</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; empty_dict = {}
&gt;&gt;&gt; a = {&quot;one&quot;: 1, &quot;two&quot;: 2, &quot;three&quot;: 3}
&gt;&gt;&gt; a[&quot;one&quot;]
1
&gt;&gt;&gt; a.keys()
dict_keys([&#39;one&#39;, &#39;two&#39;, &#39;three&#39;])
&gt;&gt;&gt; a.values()
dict_values([1, 2, 3])
&gt;&gt;&gt; a.update({&quot;four&quot;: 4})
&gt;&gt;&gt; a.keys()
dict_keys([&#39;one&#39;, &#39;two&#39;, &#39;three&#39;, &#39;four&#39;])
&gt;&gt;&gt; a[&#39;four&#39;]
4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="类-继承" tabindex="-1"><a class="header-anchor" href="#类-继承" aria-hidden="true">#</a> 类&amp;继承</h3><h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>
<span class="token keyword">class</span> <span class="token class-name">MyNewClass</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token comment"># 类的实例化</span>
my <span class="token operator">=</span> MyNewClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Animal:
    def __init__(self, voice):
        self.voice = voice
 
cat = Animal(&#39;Meow&#39;)
print(cat.voice)    # =&gt; Meow
 
dog = Animal(&#39;Woof&#39;) 
print(dog.voice)    # =&gt; Woof
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="方法" tabindex="-1"><a class="header-anchor" href="#方法" aria-hidden="true">#</a> 方法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Dog:
    # 类的方法
    def bark(self):
        print(&quot;Ham-Ham&quot;)
 
charlie = Dog()
charlie.bark()   # =&gt; &quot;Ham-Ham&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="类变量" tabindex="-1"><a class="header-anchor" href="#类变量" aria-hidden="true">#</a> 类变量</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class MyClass:
    class_variable = &quot;A class variable!&quot;
# =&gt; 一个类变量！
print(MyClass.class_variable)
x = MyClass()
 
# =&gt; 一个类变量！
print(x.class_variable)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="super函数" tabindex="-1"><a class="header-anchor" href="#super函数" aria-hidden="true">#</a> super函数</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ParentClass:
    def print_test(self):
        print(&quot;Parent Method&quot;)
 
class ChildClass(ParentClass):
    def print_test(self):
        print(&quot;Child Method&quot;)
        # 调用父级的 print_test()
        super().print_test() 
&gt;&gt;&gt; child_instance = ChildClass()
&gt;&gt;&gt; child_instance.print_test()
Child Method
Parent Method
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="repr方法" tabindex="-1"><a class="header-anchor" href="#repr方法" aria-hidden="true">#</a> repr方法</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Employee:
    def __init__(self, name):
        self.name = name
 
    def __repr__(self):
        return self.name
 
john = Employee(&#39;John&#39;)
print(john)  # =&gt; John
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ParentClass:
    def print_self(self):
        print(&#39;A&#39;)
 
class ChildClass(ParentClass):
    def print_self(self):
        print(&#39;B&#39;)
 
obj_A = ParentClass()
obj_B = ChildClass()
 
obj_A.print_self() # =&gt; A
obj_B.print_self() # =&gt; B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重写" tabindex="-1"><a class="header-anchor" href="#重写" aria-hidden="true">#</a> 重写</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class ParentClass:
    def print_self(self):
        print(&quot;Parent&quot;)
 
class ChildClass(ParentClass):
    def print_self(self):
        print(&quot;Child&quot;)
 
child_instance = ChildClass()
child_instance.print_self() # =&gt; Child
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>class Animal: 
    def __init__(self, name, legs):
        self.name = name
        self.legs = legs
        
class Dog(Animal):
    def sound(self):
        print(&quot;Woof!&quot;)
 
Yoki = Dog(&quot;Yoki&quot;, 4)
print(Yoki.name) # =&gt; YOKI
print(Yoki.legs) # =&gt; 4
Yoki.sound()     # =&gt; Woof!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function v(m,b){const a=l("router-link");return o(),i("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[e(a,{to:"#基本语法"},{default:t(()=>[s("基本语法")]),_:1}),n("ul",null,[n("li",null,[e(a,{to:"#hello-world"},{default:t(()=>[s("Hello World")]),_:1})]),n("li",null,[e(a,{to:"#变量"},{default:t(()=>[s("变量")]),_:1})]),n("li",null,[e(a,{to:"#判断"},{default:t(()=>[s("判断")]),_:1})]),n("li",null,[e(a,{to:"#循环"},{default:t(()=>[s("循环")]),_:1})]),n("li",null,[e(a,{to:"#算术"},{default:t(()=>[s("算术")]),_:1})]),n("li",null,[e(a,{to:"#文件读取"},{default:t(()=>[s("文件读取")]),_:1})]),n("li",null,[e(a,{to:"#函数"},{default:t(()=>[s("函数")]),_:1})]),n("li",null,[e(a,{to:"#异常处理"},{default:t(()=>[s("异常处理")]),_:1})]),n("li",null,[e(a,{to:"#数据类型"},{default:t(()=>[s("数据类型")]),_:1})]),n("li",null,[e(a,{to:"#类-继承"},{default:t(()=>[s("类&继承")]),_:1})])])])])]),k])}const y=p(r,[["render",v],["__file","Python.html.vue"]]);export{y as default};
