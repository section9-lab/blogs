import{_ as u}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as p,c as m,d as e,b as a,w as s,e as n,f as r}from"./app-81c422bc.js";const k="/blogs/assets/docker-flow-0d9b1c5d.png",b={},v=e("h1",{id:"docker",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker","aria-hidden":"true"},"#"),n(" Docker")],-1),h={class:"table-of-contents"},_=r('<hr><h1 id="docker-1" tabindex="-1"><a class="header-anchor" href="#docker-1" aria-hidden="true">#</a> Docker</h1><h2 id="_1、docker是什么" tabindex="-1"><a class="header-anchor" href="#_1、docker是什么" aria-hidden="true">#</a> 1、Docker是什么？</h2><p><img src="'+k+'" alt="运行流程" loading="lazy"><br> Docker 基于 Linux 内核的 cgroup，namespace，以及 OverlayFS 类的 Union FS 等技术，对进程进行封装隔离，属于 操作系统层面的虚拟化技术。<br> 由于隔离的进程独立于宿主和其它的隔离的进程，因此也称其为容器。</p><p>Docker 在容器的基础上，进行了进一步的封装，从文件系统、网络互联到进程隔离等等，极大的简化了容器的创建和维护。<br> 使得 Docker 技术比虚拟机技术更为轻便、快捷。</p><h2 id="_2、docker解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_2、docker解决了什么问题" aria-hidden="true">#</a> 2、Docker解决了什么问题？</h2><h3 id="_2-1、在docker诞生之前存在什么问题" tabindex="-1"><a class="header-anchor" href="#_2-1、在docker诞生之前存在什么问题" aria-hidden="true">#</a> 2.1、在Docker诞生之前存在什么问题？</h3><ul><li>没有版本控制，每次上线前要对老包备份。</li><li>没有统一配置，集群里各个硬件节点规格不一样。</li><li>没有统一的环境，dev环境和test环境和prod环境不一样。</li><li>没有隔离，ES和Redis、kafka运行在一起，抢占资源。</li><li>无法移植。</li></ul><h3 id="_2-2、docker的优点" tabindex="-1"><a class="header-anchor" href="#_2-2、docker的优点" aria-hidden="true">#</a> 2.2、Docker的优点：</h3><ul><li>更高效的利用系统资源</li></ul><blockquote><p>Docker 容器不需硬件虚拟和运行操作系统的开销,因此在同等配置下,主机可以运行更多数量的应用。</p></blockquote><ul><li>更快速的启动时间</li></ul><blockquote><p>Docker 容器直接运行于宿主机内核,避免启动完整操作系统,从而实现秒级甚至毫秒级的应用启动。</p></blockquote><ul><li>一致的运行环境</li></ul><blockquote><p>Docker 镜像提供除内核外完整的运行环境,确保从开发到生产的环境一致性,避免了「代码在我机器上没问题」这类问题的出现。</p></blockquote><ul><li>持续交付和部署</li></ul><blockquote><p>对开发和运维人员来说,Docker 可以通过制作应用镜像,实现从持续集成到持续交付及自动化部署,整个过程透明且高效。</p></blockquote><ul><li>更轻松的迁移</li></ul><blockquote><p>Docker 容器化应用执行环境,使应用迁移到任意平台时环境一致、顺利运行。</p></blockquote><ul><li>更轻松的维护和扩展</li></ul><blockquote><p>Docker 利用分层存储和镜像技术,使应用复用、维护和定制变得简单高效,配合优质官方镜像,可直接用于生产或定制使用,大幅降低应用镜像制作成本。</p></blockquote><h2 id="_3、安装docker" tabindex="-1"><a class="header-anchor" href="#_3、安装docker" aria-hidden="true">#</a> 3、安装docker</h2><p>docker_install.sh</p>',23),f=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token shebang important"},"#!/usr/bin/bash"),n(`
 
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(" remove "),e("span",{class:"token function"},"docker"),n(`
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` remove docker-engine
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` remove docker.io
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` update
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(" apt-transport-https ca-certificates "),e("span",{class:"token function"},"curl"),n(" gnupg lsb-release "),e("span",{class:"token parameter variable"},"-y"),n(`
`),e("span",{class:"token function"},"curl"),n(),e("span",{class:"token parameter variable"},"-fsSL"),n(" https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"sudo"),n(" gpg "),e("span",{class:"token parameter variable"},"--dearmor"),n(),e("span",{class:"token parameter variable"},"-o"),n(` /usr/share/keyrings/docker-archive-keyring.gpg
`),e("span",{class:"token builtin class-name"},"echo"),n(),e("span",{class:"token string"},[n('"deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu  '),e("span",{class:"token variable"},[e("span",{class:"token variable"},"$("),n("lsb_release "),e("span",{class:"token parameter variable"},"-cs"),e("span",{class:"token variable"},")")]),n(' stable"')]),n(),e("span",{class:"token operator"},"|"),n(),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"tee"),n(" /etc/apt/sources.list.d/docker.list "),e("span",{class:"token operator"},">"),n(` /dev/null
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(` update
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"apt-get"),n(),e("span",{class:"token function"},"install"),n(" docker-ce docker-ce-cli containerd.io "),e("span",{class:"token parameter variable"},"-y"),n(`

`),e("span",{class:"token function"},"sudo"),n(" systemctl "),e("span",{class:"token builtin class-name"},"enable"),n(),e("span",{class:"token function"},"docker"),n(`
`),e("span",{class:"token function"},"sudo"),n(" systemctl start "),e("span",{class:"token function"},"docker"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token shebang important"},"#!/usr/bin/bash"),n(`

yum `),e("span",{class:"token parameter variable"},"-y"),n(` update
yum remove `),e("span",{class:"token function"},"docker"),n("  docker-client "),e("span",{class:"token punctuation"},"\\"),n(`
docker-client-latest docker-common `),e("span",{class:"token punctuation"},"\\"),n(`
docker-latest docker-latest-logrotate `),e("span",{class:"token punctuation"},"\\"),n(`
docker-logrotate docker-engine

yum `),e("span",{class:"token function"},"install"),n(),e("span",{class:"token parameter variable"},"-y"),n(` yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum `),e("span",{class:"token function"},"install"),n(),e("span",{class:"token parameter variable"},"-y"),n(` docker-ce docker-ce-cli containerd.io docker-compose-plugin

systemctl `),e("span",{class:"token builtin class-name"},"enable"),n(` docker.service
systemctl restart `),e("span",{class:"token function"},"docker"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=r(`<h2 id="_4、docker命令" tabindex="-1"><a class="header-anchor" href="#_4、docker命令" aria-hidden="true">#</a> 4、docker命令</h2><h3 id="_4-1、image" tabindex="-1"><a class="header-anchor" href="#_4-1、image" aria-hidden="true">#</a> 4.1、image</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看服务器中docker 镜像列表：</span>
<span class="token function">docker</span> images

<span class="token comment">#搜索镜像：</span>
<span class="token function">docker</span> search <span class="token punctuation">[</span>镜像名<span class="token punctuation">]</span>

<span class="token comment">#拉取镜像：</span>
<span class="token function">docker</span> pull 镜像名 
<span class="token function">docker</span> pull 镜像名:tag

<span class="token comment">#运行镜像:</span>
<span class="token function">docker</span> run 镜像名
<span class="token function">docker</span> run 镜像名:Tag
<span class="token function">docker</span> stop containerId // containerId 是容器的ID

<span class="token comment">#修改镜像：</span>
<span class="token function">docker</span> <span class="token function">ps</span>
<span class="token function">docker</span> commit x7205xxxxxx1 sequenceiq/hadoop-docker:2.7.0-7

<span class="token comment">#删除一个</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> 镜像名/镜像ID

<span class="token comment">#删除全部镜像  -a 意思为显示全部, -q 意思为只显示ID</span>
<span class="token function">docker</span> rmi <span class="token parameter variable">-f</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">docker</span> images <span class="token parameter variable">-aq</span><span class="token variable">)</span></span>

<span class="token comment">#强制删除镜像</span>
<span class="token function">docker</span> image <span class="token function">rm</span> 镜像名称/镜像ID

<span class="token comment">#保存镜像(将我们的镜像 保存为tar 压缩文件 这样方便镜像转移和保存 ,然后 可以在任何一台安装了docker的服务器上 加载这个镜像)</span>
<span class="token function">docker</span> save <span class="token parameter variable">-o</span> rocketmq.tar

<span class="token comment">#加载镜像(任何装 docker 的地方加载镜像保存文件,使其恢复为一个镜像)</span>
<span class="token function">docker</span> load <span class="token parameter variable">--input</span> rocketmq.tar 或 <span class="token function">docker</span> load <span class="token operator">&lt;</span> rocketmq.tar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-1、文件" tabindex="-1"><a class="header-anchor" href="#_4-1、文件" aria-hidden="true">#</a> 4.1、文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#文件映射</span>
<span class="token function">docker</span> run <span class="token parameter variable">-v</span> /etc/config:/etc/config my_image

<span class="token comment">#文件cp</span>
<span class="token function">docker</span> <span class="token function">cp</span> /mnt/c/Users/wxx/Downloads/kafka_2.12-2.1.2.tar.gz 64222xxx110:/usr/local/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2、容器" tabindex="-1"><a class="header-anchor" href="#_4-2、容器" aria-hidden="true">#</a> 4.2、容器</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#查看正在运行的容器列表</span>
<span class="token function">docker</span> <span class="token function">ps</span>

<span class="token comment">#查看所有容器</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>

<span class="token comment">#创建并启动容器</span>
<span class="token operator">&gt;</span> <span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span><span class="token operator">=</span>kylin-test <span class="token parameter variable">--net</span><span class="token operator">=</span>host kylin-os-backup:latest /bin/bash

<span class="token comment">#停用</span>
<span class="token function">docker</span> stop xxxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5、dockerfile" tabindex="-1"><a class="header-anchor" href="#_5、dockerfile" aria-hidden="true">#</a> 5、Dockerfile</h2><h3 id="_5-1、本地文件" tabindex="-1"><a class="header-anchor" href="#_5-1、本地文件" aria-hidden="true">#</a> 5.1、本地文件</h3><h4 id="_5-1-1、创建dockerfile项目" tabindex="-1"><a class="header-anchor" href="#_5-1-1、创建dockerfile项目" aria-hidden="true">#</a> 5.1.1、创建dockerfile项目</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ <span class="token function">mkdir</span> redis <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> redis
$ <span class="token function">touch</span> Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>FROM centos
RUN yum -y install wget \\
    &amp;&amp; wget -O redis.tar.gz &quot;http://download.redis.io/releases/redis-5.0.3.tar.gz&quot; \\
    &amp;&amp; tar -xvf redis.tar.gz \\
    &amp;&amp; rm redis.tar.gz
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-1-2、构建" tabindex="-1"><a class="header-anchor" href="#_5-1-2、构建" aria-hidden="true">#</a> 5.1.2、构建</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> redis:test <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_5-1-3、运行" tabindex="-1"><a class="header-anchor" href="#_5-1-3、运行" aria-hidden="true">#</a> 5.1.3、运行</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis redis:test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-2、git构建" tabindex="-1"><a class="header-anchor" href="#_5-2、git构建" aria-hidden="true">#</a> 5.2、git构建</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> hello-world https://github.com/docker-library/hello-world.git<span class="token comment">#master:amd64/hello-world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3、标准输入构建" tabindex="-1"><a class="header-anchor" href="#_5-3、标准输入构建" aria-hidden="true">#</a> 5.3、标准输入构建</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> build <span class="token parameter variable">-t</span> mybusybox:latest -<span class="token operator">&lt;&lt;</span><span class="token string">EOF
FROM busybox
RUN echo &quot;hello world&quot;
EOF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6、例子" tabindex="-1"><a class="header-anchor" href="#_6、例子" aria-hidden="true">#</a> 6、例子</h2><h3 id="_6-1、启动一个本地hadoop镜像" tabindex="-1"><a class="header-anchor" href="#_6-1、启动一个本地hadoop镜像" aria-hidden="true">#</a> 6.1、启动一个本地hadoop镜像</h3><p>下载image</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull sequenceiq/hadoop-docker:2.7.1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动容器</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#后台运行</span>
<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-dti</span> <span class="token parameter variable">--hostname</span> bigdatadev.host <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">50070</span>:50070 <span class="token parameter variable">-p</span> <span class="token number">9000</span>:9000 <span class="token parameter variable">-p</span> <span class="token number">8088</span>:8088 <span class="token parameter variable">-p</span> <span class="token number">8040</span>:8040 <span class="token parameter variable">-p</span> <span class="token number">8042</span>:8042 <span class="token parameter variable">-p</span> <span class="token number">49707</span>:49707 <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">50010</span>:50010 <span class="token parameter variable">-p</span> <span class="token number">50075</span>:50075 <span class="token parameter variable">-p</span> <span class="token number">50090</span>:50090 <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token parameter variable">-p</span> <span class="token number">9092</span>:9092 <span class="token punctuation">\\</span>
sequenceiq/hadoop-docker:2.7.0 /etc/bootstrap.sh <span class="token parameter variable">-bash</span> <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hdfs-ui
http://localhost:50070/dfshealth.html#tab-overview

yarn-ui
http://localhost:8088/cluster/apps/RUNNING
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7、docker-镜像加速" tabindex="-1"><a class="header-anchor" href="#_7、docker-镜像加速" aria-hidden="true">#</a> 7、docker 镜像加速</h2>`,29),y=e("br",null,null,-1),D=e("a",{href:"#",title:"支持哪些镜像来源的镜像加速"},"？",-1),q=e("br",null,null,-1),C=e("br",null,null,-1),R={href:"https://github.com/DaoCloud/public-image-mirror",target:"_blank",rel:"noopener noreferrer"},E=e("code",null,"https://docker.m.daocloud.io",-1),w=e("br",null,null,-1),N={href:"https://c.163yun.com/hub",target:"_blank",rel:"noopener noreferrer"},F=e("code",null,"https://hub-mirror.c.163.com",-1),H=e("br",null,null,-1),O={href:"https://dockerproxy.com",target:"_blank",rel:"noopener noreferrer"},j=e("code",null,"https://dockerproxy.com",-1),I=e("br",null,null,-1),S={href:"https://cloud.baidu.com/doc/CCE/s/Yjxppt74z#%E4%BD%BF%E7%94%A8dockerhub%E5%8A%A0%E9%80%9F%E5%99%A8",target:"_blank",rel:"noopener noreferrer"},A=e("code",null,"https://mirror.baidubce.com",-1),G=e("br",null,null,-1),z={href:"https://doc.nju.edu.cn/books/35f4a",target:"_blank",rel:"noopener noreferrer"},V=e("code",null,"https://docker.nju.edu.cn",-1),$=e("br",null,null,-1),B={href:"https://mirrors.sjtug.sjtu.edu.cn/",target:"_blank",rel:"noopener noreferrer"},U=e("code",null,"https://docker.mirrors.sjtug.sjtu.edu.cn",-1),L=e("br",null,null,-1),T={href:"https://mirror.iscas.ac.cn/mirror/docker.html",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"https://mirror.iscas.ac.cn",-1),K=r(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /etc/docker
<span class="token function">sudo</span> <span class="token function">tee</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;-</span><span class="token string">&#39;EOF&#39;
{
    &quot;registry-mirrors&quot;: [
        &quot;https://dockerproxy.com&quot;,
        &quot;https://docker.mirrors.ustc.edu.cn&quot;,
        &quot;https://docker.nju.edu.cn&quot;
    ]
}
EOF</span>
<span class="token function">sudo</span> systemctl daemon-reload
<span class="token function">sudo</span> systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7.2、检测<br> 命令行执行<code>docker info</code>，如果从结果中看到了如下内容，说明配置成功。</p>`,2),Q=e("br",null,null,-1),P=e("br",null,null,-1),Y={href:"https://docker.m.daocloud.io",target:"_blank",rel:"noopener noreferrer"},J=r(`<p>7.3、测速<br> 使用镜像前后，可使用 time 统计所花费的总时间。测速前先移除本地的镜像！</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ docker rmi node:latest
$ time docker pull node:latest
Pulling repository node
[...]

real   1m14.078s
user   0m0.176s
sys    0m0.120s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function W(X,Z){const l=c("router-link"),d=c("CodeTabs"),i=c("ExternalLinkIcon");return p(),m("div",null,[v,e("nav",h,[e("ul",null,[e("li",null,[a(l,{to:"#_1、docker是什么"},{default:s(()=>[n("1、Docker是什么？")]),_:1})]),e("li",null,[a(l,{to:"#_2、docker解决了什么问题"},{default:s(()=>[n("2、Docker解决了什么问题？")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#_2-1、在docker诞生之前存在什么问题"},{default:s(()=>[n("2.1、在Docker诞生之前存在什么问题？")]),_:1})]),e("li",null,[a(l,{to:"#_2-2、docker的优点"},{default:s(()=>[n("2.2、Docker的优点：")]),_:1})])])]),e("li",null,[a(l,{to:"#_3、安装docker"},{default:s(()=>[n("3、安装docker")]),_:1})]),e("li",null,[a(l,{to:"#_4、docker命令"},{default:s(()=>[n("4、docker命令")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#_4-1、image"},{default:s(()=>[n("4.1、image")]),_:1})]),e("li",null,[a(l,{to:"#_4-1、文件"},{default:s(()=>[n("4.1、文件")]),_:1})]),e("li",null,[a(l,{to:"#_4-2、容器"},{default:s(()=>[n("4.2、容器")]),_:1})])])]),e("li",null,[a(l,{to:"#_5、dockerfile"},{default:s(()=>[n("5、Dockerfile")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#_5-1、本地文件"},{default:s(()=>[n("5.1、本地文件")]),_:1})]),e("li",null,[a(l,{to:"#_5-2、git构建"},{default:s(()=>[n("5.2、git构建")]),_:1})]),e("li",null,[a(l,{to:"#_5-3、标准输入构建"},{default:s(()=>[n("5.3、标准输入构建")]),_:1})])])]),e("li",null,[a(l,{to:"#_6、例子"},{default:s(()=>[n("6、例子")]),_:1}),e("ul",null,[e("li",null,[a(l,{to:"#_6-1、启动一个本地hadoop镜像"},{default:s(()=>[n("6.1、启动一个本地hadoop镜像")]),_:1})])])]),e("li",null,[a(l,{to:"#_7、docker-镜像加速"},{default:s(()=>[n("7、docker 镜像加速")]),_:1})])])]),_,a(d,{id:"133",data:[{id:"ubuntu"},{id:"CentOS"}],"tab-id":"bash"},{title0:s(({value:t,isActive:o})=>[n("ubuntu")]),title1:s(({value:t,isActive:o})=>[n("CentOS")]),tab0:s(({value:t,isActive:o})=>[f]),tab1:s(({value:t,isActive:o})=>[g]),_:1}),x,e("p",null,[n("7.1、配置"),y,n(" 镜像加速器 | 镜像加速器地址 | 其它加速"),D,q,n(" --- | --- | --- | ---"),C,e("a",R,[n("DaoCloud 镜像站"),a(i)]),n(" | "),E,n(" | Docker Hub、GCR、K8S、GHCR、Quay、NVCR 等"),w,e("a",N,[n("网易云"),a(i)]),n(" | "),F,n(" | Docker Hub"),H,e("a",O,[n("Docker 镜像代理"),a(i)]),n(" | "),j,n(" | Docker Hub、GCR、K8S、GHCR"),I,e("a",S,[n("百度云"),a(i)]),n(" | "),A,n(" | Docker Hub"),G,e("a",z,[n("南京大学镜像站"),a(i)]),n(" | "),V,n(" | | Docker Hub、GCR、GHCR、Quay、NVCR 等"),$,e("a",B,[n("上海交大镜像站"),a(i)]),n(" | "),U,n(" | Docker Hub、GCR 等"),L,e("a",T,[n("中科院软件所镜像站"),a(i)]),n(" | "),M,n(" | Docker Hub")]),K,e("p",null,[n("Registry Mirrors:"),Q,n(" [...]"),P,e("a",Y,[n("https://docker.m.daocloud.io"),a(i)])]),J])}const ae=u(b,[["render",W],["__file","Docker.html.vue"]]);export{ae as default};