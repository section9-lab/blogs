import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,d as n,b as c,w as l,e as s,f as i}from"./app-edbb690d.js";const u={},r=n("h1",{id:"python",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python","aria-hidden":"true"},"#"),s(" Python")],-1),k={class:"table-of-contents"},d=i(`<hr><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h2><p>Hello World</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Hello, World!&quot;</span><span class="token punctuation">)</span>
Hello<span class="token punctuation">,</span> World!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>变量</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>age <span class="token operator">=</span> <span class="token number">18</span>       <span class="token comment"># 年龄是 int 类型</span>
name <span class="token operator">=</span> <span class="token string">&quot;John&quot;</span>  <span class="token comment"># 名字现在是 str 类型</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>判断</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>num <span class="token operator">=</span> <span class="token number">200</span>
<span class="token keyword">if</span> num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num is greater than 0&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;num is not greater than 0&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>循环</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">for</span> item <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> item <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">:</span> <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Finally finished!&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>算术</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>result <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token number">30</span> <span class="token comment"># =&gt; 40</span>
result <span class="token operator">=</span> <span class="token number">40</span> <span class="token operator">-</span> <span class="token number">10</span> <span class="token comment"># =&gt; 30</span>
result <span class="token operator">=</span> <span class="token number">50</span> <span class="token operator">*</span> <span class="token number">5</span>  <span class="token comment"># =&gt; 250</span>
result <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">/</span> <span class="token number">4</span>  <span class="token comment"># =&gt; 4.0 (Float Division)</span>
result <span class="token operator">=</span> <span class="token number">16</span> <span class="token operator">//</span> <span class="token number">4</span> <span class="token comment"># =&gt; 4 (Integer Division)</span>
result <span class="token operator">=</span> <span class="token number">25</span> <span class="token operator">%</span> <span class="token number">2</span>  <span class="token comment"># =&gt; 1</span>
result <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">**</span> <span class="token number">3</span>  <span class="token comment"># =&gt; 125</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>文件读取</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;myfile.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> <span class="token builtin">file</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>line<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>函数</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">hello_world</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Hello, World!&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>异常处理</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">try</span><span class="token punctuation">:</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据类型</p><table><thead><tr><th>类型</th><th>名称</th></tr></thead><tbody><tr><td>str</td><td>文本／字符串（Text）</td></tr><tr><td>bool</td><td>布尔值／逻辑值（Boolean）</td></tr><tr><td>int, float, complex</td><td>数值（Numeric）</td></tr><tr><td>dict</td><td>映射／键值对（Mapping）</td></tr><tr><td>list, tuple, range</td><td>序列（Sequence）</td></tr><tr><td>set, frozenset</td><td>集合（Set）</td></tr><tr><td>bytes, bytearray,memoryview</td><td>二进制数据（Binary）</td></tr></tbody></table><p>字符串</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>hello <span class="token operator">=</span> <span class="token string">&quot;Hello World&quot;</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>数据类型</p><p>列表</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#定义</span>
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
    
<span class="token comment">#元组</span>
my_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
my_tuple <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#集合</span>
set1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">}</span>   
set2 <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">#字典</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> empty_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;two&quot;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;three&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">[</span><span class="token string">&quot;one&quot;</span><span class="token punctuation">]</span>
<span class="token number">1</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
dict_keys<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>values<span class="token punctuation">(</span><span class="token punctuation">)</span>
dict_values<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>update<span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token string">&quot;four&quot;</span><span class="token punctuation">:</span> <span class="token number">4</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
dict_keys<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;one&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;two&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;three&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;four&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> a<span class="token punctuation">[</span><span class="token string">&#39;four&#39;</span><span class="token punctuation">]</span>
<span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类&amp;继承</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#定义</span>
<span class="token keyword">class</span> <span class="token class-name">MyNewClass</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
<span class="token comment"># 类的实例化</span>
my <span class="token operator">=</span> MyNewClass<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">#构造函数</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> voice<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>voice <span class="token operator">=</span> voice
 
cat <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token string">&#39;Meow&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cat<span class="token punctuation">.</span>voice<span class="token punctuation">)</span>    <span class="token comment"># =&gt; Meow</span>
 
dog <span class="token operator">=</span> Animal<span class="token punctuation">(</span><span class="token string">&#39;Woof&#39;</span><span class="token punctuation">)</span> 
<span class="token keyword">print</span><span class="token punctuation">(</span>dog<span class="token punctuation">.</span>voice<span class="token punctuation">)</span>    <span class="token comment"># =&gt; Woof</span>


<span class="token comment">#方法</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">:</span>
    <span class="token comment"># 类的方法</span>
    <span class="token keyword">def</span> <span class="token function">bark</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Ham-Ham&quot;</span><span class="token punctuation">)</span>
 
charlie <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token punctuation">)</span>
charlie<span class="token punctuation">.</span>bark<span class="token punctuation">(</span><span class="token punctuation">)</span>   <span class="token comment"># =&gt; &quot;Ham-Ham&quot;</span>

<span class="token comment">#类变量</span>
<span class="token keyword">class</span> <span class="token class-name">MyClass</span><span class="token punctuation">:</span>
    class_variable <span class="token operator">=</span> <span class="token string">&quot;A class variable!&quot;</span>
<span class="token comment"># =&gt; 一个类变量！</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>MyClass<span class="token punctuation">.</span>class_variable<span class="token punctuation">)</span>
x <span class="token operator">=</span> MyClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
<span class="token comment"># =&gt; 一个类变量！</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>class_variable<span class="token punctuation">)</span>

<span class="token comment">#super函数</span>
<span class="token keyword">class</span> <span class="token class-name">ParentClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_test</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Parent Method&quot;</span><span class="token punctuation">)</span>
 
<span class="token keyword">class</span> <span class="token class-name">ChildClass</span><span class="token punctuation">(</span>ParentClass<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_test</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Child Method&quot;</span><span class="token punctuation">)</span>
        <span class="token comment"># 调用父级的 print_test()</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>print_test<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> child_instance <span class="token operator">=</span> ChildClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> child_instance<span class="token punctuation">.</span>print_test<span class="token punctuation">(</span><span class="token punctuation">)</span>
Child Method
Parent Method

<span class="token comment">#repr方法</span>
<span class="token keyword">class</span> <span class="token class-name">Employee</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
 
    <span class="token keyword">def</span> <span class="token function">__repr__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>name
 
john <span class="token operator">=</span> Employee<span class="token punctuation">(</span><span class="token string">&#39;John&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>john<span class="token punctuation">)</span>  <span class="token comment"># =&gt; John</span>

<span class="token comment">#多态</span>
<span class="token keyword">class</span> <span class="token class-name">ParentClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_self</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
 
<span class="token keyword">class</span> <span class="token class-name">ChildClass</span><span class="token punctuation">(</span>ParentClass<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_self</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span>
 
obj_A <span class="token operator">=</span> ParentClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
obj_B <span class="token operator">=</span> ChildClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
 
obj_A<span class="token punctuation">.</span>print_self<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># =&gt; A</span>
obj_B<span class="token punctuation">.</span>print_self<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># =&gt; B</span>

<span class="token comment">#重写</span>
<span class="token keyword">class</span> <span class="token class-name">ParentClass</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_self</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Parent&quot;</span><span class="token punctuation">)</span>
 
<span class="token keyword">class</span> <span class="token class-name">ChildClass</span><span class="token punctuation">(</span>ParentClass<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">print_self</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Child&quot;</span><span class="token punctuation">)</span>
 
child_instance <span class="token operator">=</span> ChildClass<span class="token punctuation">(</span><span class="token punctuation">)</span>
child_instance<span class="token punctuation">.</span>print_self<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment"># =&gt; Child</span>


<span class="token comment">#继承</span>
<span class="token keyword">class</span> <span class="token class-name">Animal</span><span class="token punctuation">:</span> 
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> name<span class="token punctuation">,</span> legs<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
        self<span class="token punctuation">.</span>legs <span class="token operator">=</span> legs
        
<span class="token keyword">class</span> <span class="token class-name">Dog</span><span class="token punctuation">(</span>Animal<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">sound</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Woof!&quot;</span><span class="token punctuation">)</span>
 
Yoki <span class="token operator">=</span> Dog<span class="token punctuation">(</span><span class="token string">&quot;Yoki&quot;</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Yoki<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment"># =&gt; YOKI</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>Yoki<span class="token punctuation">.</span>legs<span class="token punctuation">)</span> <span class="token comment"># =&gt; 4</span>
Yoki<span class="token punctuation">.</span>sound<span class="token punctuation">(</span><span class="token punctuation">)</span>     <span class="token comment"># =&gt; Woof!</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function m(v,b){const a=p("router-link");return e(),o("div",null,[r,n("nav",k,[n("ul",null,[n("li",null,[c(a,{to:"#基本语法"},{default:l(()=>[s("基本语法")]),_:1})])])]),d])}const w=t(u,[["render",m],["__file","Python.html.vue"]]);export{w as default};
