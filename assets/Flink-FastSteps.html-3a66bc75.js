import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o,c as i,d as n,e as a,b as t,f as p}from"./app-81c422bc.js";const l="/blogs/assets/flink-window-6442eb55.png",u="/blogs/assets/flink-windows-ass-94a3e3c9.png",k="/blogs/assets/flink-trigger-b30586f8.png",d="/blogs/assets/flink-evictor-fb8c94e0.png",r={},m=p('<h1 id="flink-faststeps" tabindex="-1"><a class="header-anchor" href="#flink-faststeps" aria-hidden="true">#</a> Flink-FastSteps</h1><nav class="table-of-contents"><ul></ul></nav><hr><h1 id="概念" tabindex="-1"><a class="header-anchor" href="#概念" aria-hidden="true">#</a> 概念：</h1>',4),v={href:"https://mp.weixin.qq.com/s/oBmRhRA-52CLRLXp6sZwEw",target:"_blank",rel:"noopener noreferrer"},b={href:"https://matt33.com/2019/11/23/flink-learn-start-1/",target:"_blank",rel:"noopener noreferrer"},g=p(`<h1 id="一、应用场景" tabindex="-1"><a class="header-anchor" href="#一、应用场景" aria-hidden="true">#</a> 一、应用场景：</h1><p>1、Data Pipeline<br> 实时数仓<br> 2、Data Analytics<br> 实时大屏<br> 实时报表<br> 3、Data Driven<br> 风控系统</p><h1 id="二、windows-watermark" tabindex="-1"><a class="header-anchor" href="#二、windows-watermark" aria-hidden="true">#</a> 二、windows&amp;watermark</h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//开窗测试 指定窗口分配器</span>
<span class="token class-name">DataStream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> resultStream <span class="token operator">=</span> dataStream<span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">//设置一个15秒的一个滚动窗口</span>
        <span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">TumblingProcessingTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">//滑动窗口</span>
        <span class="token comment">//.window(SlidingProcessingTimeWindows.of(Time.seconds(20),Time.seconds(10)))</span>
        <span class="token comment">//会话窗口</span>
        <span class="token comment">//.window(ProcessingTimeSessionWindows.withGap(Time.seconds(15)))</span>

env<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+l+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>Tumbling Windows：统计每一分钟中用户购买的商品的总数，需要将用户的行为事件按每一分钟进行切分，这种切分被成为翻滚时间窗口；</li><li>Slidding Windows：每30秒计算一次最近一分钟用户购买的商品总数；</li><li>Session Windows：一计算每个用户在活跃期间总共购买的商品数量，如果用户30秒没有活动则视为会话断开</li></ul><p>Window解决了什么问题？<br> 在流处理应用中，数据是连续不断的，因此我们不可能等到所有数据都到了才开始处理。当然我们可以每来一个消息就处理一次，但是有时我们需要做一些聚合类的处理，例如：在过去的1分钟内有多少用户点击了我们的网页。在这种情况下，我们必须定义一个窗口，用来收集最近一分钟内的数据，并对这个窗口内的数据进行计算。</p><p>Watermark解决了什么问题？<br> 实时系统中，由于各种原因造成的延时，造成某些消息发到flink的时间延时于事件产生的时间。如果基于event time构建window，但是对于late element，我们又不能无限期的等下去，必须要有个机制来保证一个特定的时间后，必须触发window去进行计算了。这个特别的机制，就是watermark。默认是丢弃，也可以通过配置allowedLateness()延迟丢弃</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>val outputWindow<span class="token operator">:</span> <span class="token class-name">DataStream</span><span class="token punctuation">[</span><span class="token class-name">String</span><span class="token punctuation">]</span> <span class="token operator">=</span> waterMarkStream
      <span class="token punctuation">.</span><span class="token function">keyBy</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
      <span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">TumblingEventTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
      <span class="token comment">// .allowedLateness(Time.seconds(2))//允许数据迟到2S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>剖析 Window API<br> Flink 中定义一个窗口主要需要以下三个组件。</p><ul><li>Window Assigner：用来决定某个元素被分配到哪个/哪些窗口中去。如下类图展示了目前内置实现的 Window Assigners：<br><img src="`+u+'" alt="" loading="lazy"></li><li>Trigger：触发器。决定了一个窗口何时能触发计算输出结果，每个窗口都会拥有一个自己的Trigger。<br><img src="'+k+'" alt="" loading="lazy"></li><li>Evictor：可以译为“驱逐者”。在Trigger触发之后，在窗口被处理之前，Evictor（如果有Evictor的话）会用来剔除窗口中不需要的元素，相当于一个filter。<br><img src="'+d+`" alt="" loading="lazy"></li></ul><p>上述三个组件的不同实现的不同组合，可以定义出非常复杂的窗口。Flink 中内置的窗口也都是基于这三个组件构成的，当然内置窗口有时候无法解决用户特殊的需求，所以 Flink 也暴露了这些窗口机制的内部接口供用户实现自定义的窗口。</p><p>窗口在类别上有两大类：<br> 时间窗口.timewindow()和计数窗口.countwindow()</p><p>其中时间窗口有两种使用方法：<br> 一个是.timewindow()通过输入的参数区分窗口类别。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//滚动窗口</span>
<span class="token punctuation">.</span><span class="token function">timeWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//滑动窗口</span>
<span class="token punctuation">.</span><span class="token function">timeWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//会话窗口</span>
<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">ProcessingTimeSessionWindows</span><span class="token punctuation">.</span><span class="token function">withGap</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//计数滚动窗口</span>
<span class="token punctuation">.</span><span class="token function">countWindow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">//滑动计数窗口</span>
<span class="token punctuation">.</span><span class="token function">countWindow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>一个是.window()在参数中声明窗口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//滚动窗口</span>
<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">TumblingProcessingTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//滑动窗口</span>
<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">SlidingProcessingTimeWindows</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">//会话窗口</span>
<span class="token punctuation">.</span><span class="token function">window</span><span class="token punctuation">(</span><span class="token class-name">ProcessingTimeSessionWindows</span><span class="token punctuation">.</span><span class="token function">withGap</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment">//计数滚动窗口</span>
<span class="token punctuation">.</span><span class="token function">countWindow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span>
<span class="token comment">//滑动计数窗口</span>
<span class="token punctuation">.</span><span class="token function">countWindow</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>窗口函数分为两类：增量聚合函数、全量聚合函数<br> 增量聚合函数：ReduceFunction、AggregateFunction</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">//对窗口进行聚合操作 增量窗口操作</span>
<span class="token punctuation">.</span><span class="token function">timeWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">aggregate</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">AggregateFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SensorReading</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token comment">//创建累加器</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">createAccumulator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">SensorReading</span> sensorReading<span class="token punctuation">,</span> <span class="token class-name">Integer</span> accumulator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> accumulator<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">getResult</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> accumulator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> accumulator<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Integer</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> integer<span class="token punctuation">,</span> <span class="token class-name">Integer</span> acc1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>全量聚合函数：ProcessWindowFunction，WindowFunction</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token punctuation">.</span><span class="token function">timeWindow</span><span class="token punctuation">(</span><span class="token class-name">Time</span><span class="token punctuation">.</span><span class="token function">seconds</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">WindowFunction</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SensorReading</span><span class="token punctuation">,</span> <span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Long</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">,</span>
<span class="token class-name">Tuple</span><span class="token punctuation">,</span> <span class="token class-name">TimeWindow</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">Tuple</span> tuple<span class="token punctuation">,</span> 
                      <span class="token class-name">TimeWindow</span> window<span class="token punctuation">,</span> 
                      <span class="token class-name">Iterable</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SensorReading</span><span class="token punctuation">&gt;</span></span> input<span class="token punctuation">,</span> 
                      <span class="token class-name">Collector</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Tuple3</span><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">Long</span><span class="token punctuation">,</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> out<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">String</span> id <span class="token operator">=</span>tuple<span class="token punctuation">.</span><span class="token function">getField</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Long</span> windowEnd <span class="token operator">=</span>window<span class="token punctuation">.</span><span class="token function">getEnd</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Integer</span> count <span class="token operator">=</span> <span class="token class-name">IteratorUtils</span><span class="token punctuation">.</span><span class="token function">toList</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span><span class="token function">iterator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        out<span class="token punctuation">.</span><span class="token function">collect</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Tuple3</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>windowEnd<span class="token punctuation">,</span>count<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21);function w(f,h){const s=c("ExternalLinkIcon");return o(),i("div",null,[m,n("ul",null,[n("li",null,[n("a",v,[a("https://mp.weixin.qq.com/s/oBmRhRA-52CLRLXp6sZwEw"),t(s)])]),n("li",null,[n("a",b,[a("https://matt33.com/2019/11/23/flink-learn-start-1/"),t(s)])])]),g])}const W=e(r,[["render",w],["__file","Flink-FastSteps.html.vue"]]);export{W as default};