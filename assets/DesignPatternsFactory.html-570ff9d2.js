import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as d,o as r,c,d as e,b as a,w as s,e as n,f as t}from"./app-22982d81.js";const u={},v=e("h1",{id:"design-patterns-factory",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#design-patterns-factory","aria-hidden":"true"},"#"),n(" Design Patterns Factory")],-1),m={class:"table-of-contents"},o=t(`<hr><h1 id="一、创建型模式" tabindex="-1"><a class="header-anchor" href="#一、创建型模式" aria-hidden="true">#</a> 一、创建型模式：</h1><h2 id="_2、工厂模式" tabindex="-1"><a class="header-anchor" href="#_2、工厂模式" aria-hidden="true">#</a> 2、工厂模式</h2><h3 id="简单工厂" tabindex="-1"><a class="header-anchor" href="#简单工厂" aria-hidden="true">#</a> 简单工厂</h3><figure><img src="https://kroki.io/plantuml/svg/eNqlU81KAzEQvucp5liRBi966qGi9AFsb-JhSKZx2PyZTBVp67O73S3SQ-mu9BLCwPc7ybwKFtkEr2rDMWPBAAVjUynD_d3J0GaGh9NBRtOgoxWLp0fPLgaKAp7WopTxWCuYFLRQFW2wUtUhWfJ61Q6eKSTYqlvYturCZg-fiS0E5DhZSuHoXt9u1F5xFCprNHSeqr5jJr08nC3bT09iC35NDuALHnrgExfjqfMxGtmJLdBIKt8dsld3JN3l6H6U_AsZwej-6-AY-mOD5Ryy7X6oqtluOh3u5Xqev4DXU_Vx1eUHNdtpPby1MWbG8ICaU7Ttx_kFgWYoOQ==" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>─model
    │  ShapeFactory.java
    │  TestDemo.java
    │
    └─shape
            Circle.java
            Rectangle.java
            Shape.java
            Square.java
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public interface Shape</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model.shape;

public interface Shape {
    void draw();
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class Square implements Shape</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model.shape;

public class Square implements Shape{
    @Override
    public void draw() {
        System.out.println(&quot;Shape Square draw&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class Rectangle implements Shape</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model.shape;

public class Rectangle implements Shape {
    @Override
    public void draw() {
        System.out.println(&quot;Shape Rectangle draw&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class Circle implements Shape</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model.shape;

public class Circle implements Shape{
    @Override
    public void draw() {
        System.out.println(&quot;Shape Circle draw&quot;);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class ShapeFactory</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model;

import com.test.cases.model.shape.Circle;
import com.test.cases.model.shape.Rectangle;
import com.test.cases.model.shape.Shape;
import com.test.cases.model.shape.Square;

public class ShapeFactory {
    public Shape getShape(String shapeType){
        if(shapeType == null){
            return null;
        }
        if(shapeType.equalsIgnoreCase(&quot;CIRCLE&quot;)){
            return new Circle();
        } else if(shapeType.equalsIgnoreCase(&quot;RECTANGLE&quot;)){
            return new Rectangle();
        } else if(shapeType.equalsIgnoreCase(&quot;SQUARE&quot;)){
            return new Square();
        }
        return null;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>public class TestDemo</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>package com.test.cases.model;

import com.test.cases.model.shape.Shape;

public class TestDemo {
    public static void main(String[] args) {
        ShapeFactory shapeFactory = new ShapeFactory();

<span class="token code keyword">        //获取 Circle 的对象，并调用它的 draw 方法
        Shape circle = shapeFactory.getShape(&quot;CIRCLE&quot;);
        circle.draw();</span>

<span class="token code keyword">        //获取 Rectangle 的对象，并调用它的 draw 方法
        Shape rectangle = shapeFactory.getShape(&quot;RECTANGLE&quot;);
        rectangle.draw();</span>

<span class="token code keyword">        //获取 Square 的对象，并调用它的 draw 方法
        Shape square = shapeFactory.getShape(&quot;SQUARE&quot;);
        square.draw();
    }</span>
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="抽象工厂" tabindex="-1"><a class="header-anchor" href="#抽象工厂" aria-hidden="true">#</a> 抽象工厂</h3><figure><img src="https://kroki.io/plantuml/svg/eNq1VkFOwzAQvPsVPoKq-AUcCkVwRS03hJBxtsGSa5e1A0JteTuOnVRpRaXYUS6JlWxmZse768yt4-jqjSJSO8A1F0ANVqwEKyv9tuXOP9WW8XfrkAvnA5zBHyaMMsgWzZXuyC_9MrKka6nU1TU5EKG4tQk4d6oGDzPLhnkG6-5hYwLIzufkpDhEtA2X-mrlUOrq5TUN9SHen9CUtQA8Bb9tg9sgWkG3bNlyjFhCOcqH1QffQqeoAQoPGm1hcVQ2o3Hr_Iuw6EnuIOlw1nMrgk9d0OECUz_kgsqUzG3zJVtIFKpXSiXy70QLg8pxFqa1UlQeWY6tlCE8VtAjAuhRNRT1LEE4rquRZra5fdYc_wPKKa6bfVEk98K0TP2SyWMq6m2RM5JIzhgbznYcq4SkHgrDSZLdO6HZM5Z40EzN4Wf41BShyYftSX-6DN-T5N45oRmazNmkmZoojqGpWeIRRMgcdOn_q_4AyO2Gqg==" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,20);function p(b,h){const i=d("router-link");return r(),c("div",null,[v,e("nav",m,[e("ul",null,[e("li",null,[a(i,{to:"#_2、工厂模式"},{default:s(()=>[n("2、工厂模式")]),_:1}),e("ul",null,[e("li",null,[a(i,{to:"#简单工厂"},{default:s(()=>[n("简单工厂")]),_:1})]),e("li",null,[a(i,{to:"#抽象工厂"},{default:s(()=>[n("抽象工厂")]),_:1})])])])])]),o])}const q=l(u,[["render",p],["__file","DesignPatternsFactory.html.vue"]]);export{q as default};
