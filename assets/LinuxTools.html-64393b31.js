import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as d,c,d as a,b as n,w as i,e as s,f as p}from"./app-12139c72.js";const o={},u=a("h1",{id:"linuxtools",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#linuxtools","aria-hidden":"true"},"#"),s(" LinuxTools")],-1),v={class:"table-of-contents"},m=p(`<hr><h2 id="压缩" tabindex="-1"><a class="header-anchor" href="#压缩" aria-hidden="true">#</a> 压缩</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tar.gz格式
解压：tar zxvf FileName.tar.gz
压缩：tar zcvf FileName.tar.gz DirName

tar.tgz格式
解压： <span class="token function">tar</span> zxvf FileName.tar.tgz
压缩： <span class="token function">tar</span> zcvf FileName.tar.tgz FileName

zip格式
解压：unzip FileName.zip
压缩：zip FileName.zip DirName
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="curl" tabindex="-1"><a class="header-anchor" href="#curl" aria-hidden="true">#</a> curl</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-H</span> <span class="token string">&quot;Content-Type: application/json&quot;</span> <span class="token parameter variable">-XPOST</span> localhost:8080/user <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span>  <span class="token string">&#39;{&quot;username&quot;:&quot;zhangsan_01&quot;,
      &quot;age&quot;:18,
      &quot;timestamp&quot;:&quot;168318059133&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="sdkman" tabindex="-1"><a class="header-anchor" href="#sdkman" aria-hidden="true">#</a> sdkman</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-s</span> <span class="token string">&quot;https://get.sdkman.io&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span>
<span class="token builtin class-name">source</span> <span class="token string">&quot;<span class="token environment constant">$HOME</span>/.sdkman/bin/sdkman-init.sh&quot;</span>
sdk version

sdk list <span class="token function">java</span>
sdk <span class="token function">install</span> <span class="token function">java</span> <span class="token number">8.0</span>.382-zulu

sdk default <span class="token function">java</span> <span class="token number">8.0</span>.382-zulu
sdk current <span class="token function">java</span> 
sdk use <span class="token function">java</span> <span class="token number">8.0</span>.382-zulu

<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tcpdump" tabindex="-1"><a class="header-anchor" href="#tcpdump" aria-hidden="true">#</a> tcpdump</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#(1) 捕获指定源地址和目的地址及端口</span>
tcpdump <span class="token parameter variable">-Xns0</span> <span class="token parameter variable">-i</span> eth1 src <span class="token number">192.27</span>.198.179 and dst <span class="token number">100.130</span>.73.95 and dst port <span class="token number">30007</span> <span class="token parameter variable">-c10</span>

<span class="token comment">#(2) 捕获不区分源地址和目的地址</span>
tcpdump <span class="token parameter variable">-Xns0</span> <span class="token parameter variable">-i</span> eth1 <span class="token function">host</span> <span class="token number">192.27</span>.198.179 and <span class="token number">100.130</span>.73.95 and  port <span class="token number">30007</span> <span class="token parameter variable">-c10</span>

<span class="token comment">#(3) 捕获主机192.27.198.179和主机192.27.198.169或100.130.73.95的数据包</span>
tcpdump <span class="token function">host</span> <span class="token number">192.27</span>.198.179 and <span class="token punctuation">\\</span><span class="token punctuation">(</span><span class="token number">172.27</span>.198.169 or <span class="token number">10.130</span>.73.95<span class="token punctuation">\\</span><span class="token punctuation">)</span> and port <span class="token number">30007</span> <span class="token parameter variable">-c10</span>

<span class="token comment">#(4) 捕获主机192.27.198.179除了和主机100.130.73.95之外所有主机通信的IP数据包，!后面要有一个空格</span>
tcpdump <span class="token function">ip</span> <span class="token function">host</span> <span class="token number">192.27</span>.198.179 and <span class="token operator">!</span> <span class="token number">100.130</span>.73.95

<span class="token comment">#(5) 将捕获的数据包保存在文件中，进行后续分析</span>
tcpdump <span class="token parameter variable">-Xns0</span> <span class="token function">host</span> <span class="token number">192.27</span>.198.179 <span class="token parameter variable">-w</span> <span class="token number">179</span>.cap
tcpdump <span class="token parameter variable">-r</span> <span class="token number">179</span>.cap

<span class="token comment">#(6) 只显示具体的协议，不显示包体内容</span>
tcpdump <span class="token parameter variable">-S</span> <span class="token parameter variable">-nn</span> <span class="token parameter variable">-vvv</span> <span class="token parameter variable">-i</span> lo port <span class="token number">6888</span>
<span class="token parameter variable">-S</span> 打印TCP 数据包的顺序号时, 使用绝对的顺序号, 而不是相对的顺序号
<span class="token parameter variable">-nn</span> 表示不进行端口到名称的转换
<span class="token parameter variable">-vvv</span> 表示产生尽可能详细的协议输出

<span class="token comment">#（7）http请求和响应</span>
tcpdump <span class="token parameter variable">-XvvennSs</span> <span class="token number">0</span> <span class="token parameter variable">-i</span> eth0 tcp<span class="token punctuation">[</span><span class="token number">20</span>:2<span class="token punctuation">]</span><span class="token operator">=</span>0x4745 or tcp<span class="token punctuation">[</span><span class="token number">20</span>:2<span class="token punctuation">]</span><span class="token operator">=</span>0x4854
0x4745 为<span class="token string">&quot;GET&quot;</span>前两个字母<span class="token string">&quot;GE&quot;</span>
0x4854 为<span class="token string">&quot;HTTP&quot;</span>前两个字母<span class="token string">&quot;HT&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="hint-container details"><summary>tcpdump详细参数</summary><div class="language-txt line-numbers-mode" data-ext="txt"><pre class="language-txt"><code>————————————————————————————————
-a #将网络地址和广播地址转变成名字
-A #以ASCII格式打印出所有分组，并将链路层的头最小化
-b #数据链路层上选择协议，包括ip/arp/rarp/ipx都在这一层
-c #指定收取数据包的次数，即在收到指定数量的数据包后退出tcpdump
-d #将匹配信息包的代码以人们能够理解的汇编格式输出
-dd  #将匹配信息包的代码以c语言程序段的格式输出
-ddd #将匹配信息包的代码以十进制的形式输出
-D #打印系统中所有可以监控的网络接口
-e #在输出行打印出数据链路层的头部信息
-f #将外部的Internet地址以数字的形式打印出来，即不显示主机名
-F #从指定的文件中读取表达式，忽略其他的表达式
-i #指定监听网络接口
-l #使标准输出变为缓冲形式，可以数据导出到文件
-L #列出网络接口已知的数据链路
-n #不把网络地址转换为名字
-N 不输出主机名中的域名部分，例如www.baidu.com只输出www
-nn #不进行端口名称的转换
-P #不将网络接口设置为混杂模式
-q #快速输出，即只输出较少的协议信息
-r #从指定的文件中读取数据，一般是-w保存的文件
-w #将捕获到的信息保存到文件中，且不分析和打印在屏幕
-s #从每个组中读取在开始的snaplen个字节，而不是默认的68个字节
-S #将tcp的序列号以绝对值形式输出，而不是相对值
-T #将监听到的包直接解析为指定的类型的报文，常见的类型有rpc（远程过程调用）和snmp（简单网络管理协议）
-v #输出稍微详细的信息，例如在ip包中可以包括ttl和服务类型的信息
-vv#输出相信的保报文信息
————————————————————————————————
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="scp" tabindex="-1"><a class="header-anchor" href="#scp" aria-hidden="true">#</a> SCP</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>本地复制到远程
<span class="token function">scp</span> /home/space/music/1.mp3 server01.com:/home/root/others/music/001.mp3 
<span class="token function">scp</span> <span class="token parameter variable">-r</span> /home/space/music/ server01.com:/home/root/others/ 


从远程复制到本地
<span class="token function">scp</span> root@server01.com:/home/root/others/music /home/space/music/1.mp3 
<span class="token function">scp</span> <span class="token parameter variable">-r</span> server01.com:/home/root/others/ /home/space/music/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh隧道转发" tabindex="-1"><a class="header-anchor" href="#ssh隧道转发" aria-hidden="true">#</a> SSH隧道转发</h2><blockquote><p>环境：开发人员电脑IP:192.168.10.100, 研发团队的开发环境服务器IP:192.168.20.200, 提测环境的服务器IP:192.168.30.123</p><p>为了防止程序员搞乱测试服务器环境，禁止程序员电脑访问测试服务器; 但是程序员和开发服务器,以及开发服务器与测试服务器网络是联通的。</p></blockquote><p>现在就是要通过研发服务器做跳板，让研发人员连接到测试服务器。</p><h3 id="方案一-本地转发" tabindex="-1"><a class="header-anchor" href="#方案一-本地转发" aria-hidden="true">#</a> 方案一 本地转发</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#使用个人PC本地的2222端口，用20.122为跳板,访问30.123:22</span>
<span class="token punctuation">[</span>root@dev-pc-100 ~<span class="token punctuation">]</span><span class="token comment"># ssh -L 2222:192.168.30.123:22 -fN 192.168.20.200</span>

<span class="token punctuation">[</span>root@dev-pc-100 ~<span class="token punctuation">]</span><span class="token comment"># ssh 127.0.0.1 -p 2222</span>
<span class="token punctuation">[</span>root@test-server-123 ~<span class="token punctuation">]</span><span class="token comment">#ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方案二-远程转发" tabindex="-1"><a class="header-anchor" href="#方案二-远程转发" aria-hidden="true">#</a> 方案二 远程转发</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#从开发服务器上，操作个人PC的2222端口；</span>
<span class="token comment">#然后将PC的2222端口的流量通过开发服务器，转发到测试服务器的22端口</span>
<span class="token punctuation">[</span>root@dev-server-200 ~<span class="token punctuation">]</span><span class="token comment"># ssh -R 2222:192.168.30.123:22 -fN 192.168.10.100</span>

<span class="token punctuation">[</span>root@dev-pc-100 ~<span class="token punctuation">]</span><span class="token comment"># ssh 127.0.0.1 -p 2222</span>
<span class="token punctuation">[</span>root@test-server-123 ~<span class="token punctuation">]</span><span class="token comment">#ifconfig</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="firewall" tabindex="-1"><a class="header-anchor" href="#firewall" aria-hidden="true">#</a> firewall</h2><h3 id="_1、服务启停" tabindex="-1"><a class="header-anchor" href="#_1、服务启停" aria-hidden="true">#</a> 1、服务启停</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start firewalld
<span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> firewalld

<span class="token function">sudo</span> systemctl stop firewalld
<span class="token function">sudo</span> systemctl disable firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、运行状态" tabindex="-1"><a class="header-anchor" href="#_2、运行状态" aria-hidden="true">#</a> 2、运行状态</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--state</span>

<span class="token function">sudo</span> systemctl status firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、重载配置" tabindex="-1"><a class="header-anchor" href="#_3、重载配置" aria-hidden="true">#</a> 3、重载配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4、获取-区域-信息" tabindex="-1"><a class="header-anchor" href="#_4、获取-区域-信息" aria-hidden="true">#</a> 4、获取“区域”信息</h3><p>（针对给定位置或场景 例如家庭、公共、受信任等）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#获取默认区域</span>
firewall-cmd --get-default-zone

<span class="token comment">#获取区域网卡接口</span>
firewall-cmd --get-active-zones

<span class="token comment">#获取区域的所有规则</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --list-all
firewall-cmd --list-all-zones
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、规则" tabindex="-1"><a class="header-anchor" href="#_5、规则" aria-hidden="true">#</a> 5、规则</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#允许或禁止12345TCP端口流量</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-port<span class="token operator">=</span><span class="token number">12345</span>/tcp <span class="token parameter variable">--permanent</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-port<span class="token operator">=</span><span class="token number">12345</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment">#同一台服务器上将 80 端口的流量转发到 12345 端口</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span><span class="token string">&quot;public&quot;</span> --add-forward-port<span class="token operator">=</span>port<span class="token operator">=</span><span class="token number">80</span>:proto<span class="token operator">=</span>tcp:toport<span class="token operator">=</span><span class="token number">12345</span>

<span class="token comment">#允许来自主机 192.168.0.14 的所有 IPv4 流量</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule <span class="token string">&#39;rule family=&quot;ipv4&quot; source address=192.168.0.14 accept&#39;</span>

<span class="token comment">#拒绝来自主机 192.168.1.10 到 22 端口的 IPv4 的 TCP 流量</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule <span class="token string">&#39;rule family=&quot;ipv4&quot; source address=&quot;192.168.1.10&quot; port port=22 protocol=tcp reject&#39;</span>

<span class="token comment">#允许来自主机 10.1.0.3 到 80 端口的 IPv4 的 TCP 流量，并将流量转发到 6532 端口上。 </span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --add-rich-rule <span class="token string">&#39;rule family=ipv4 source address=10.1.0.3 forward-port port=80 protocol=tcp to-port=6532&#39;</span>

<span class="token comment">#删除规则</span>
firewall-cmd <span class="token parameter variable">--zone</span><span class="token operator">=</span>public --remove-rich-rule <span class="token string">&#39;rule family=ipv4 source address=10.1.0.3 forward-port port=80 protocol=tcp to-port=6532&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tmux" tabindex="-1"><a class="header-anchor" href="#tmux" aria-hidden="true">#</a> tmux</h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> tmux <span class="token parameter variable">-y</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作" aria-hidden="true">#</a> 基本操作</h3><h4 id="创建会话" tabindex="-1"><a class="header-anchor" href="#创建会话" aria-hidden="true">#</a> 创建会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux new <span class="token parameter variable">-s</span> 00
tmux new-window <span class="token parameter variable">-n</span> 01
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="后台退出" tabindex="-1"><a class="header-anchor" href="#后台退出" aria-hidden="true">#</a> 后台退出</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux detach
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看会话" tabindex="-1"><a class="header-anchor" href="#查看会话" aria-hidden="true">#</a> 查看会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux <span class="token function">ls</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="使用会话" tabindex="-1"><a class="header-anchor" href="#使用会话" aria-hidden="true">#</a> 使用会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux attach <span class="token parameter variable">-t</span> 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="杀死会话" tabindex="-1"><a class="header-anchor" href="#杀死会话" aria-hidden="true">#</a> 杀死会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux kill-session <span class="token parameter variable">-t</span> 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="会话内切换会话" tabindex="-1"><a class="header-anchor" href="#会话内切换会话" aria-hidden="true">#</a> 会话内切换会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux switch <span class="token parameter variable">-t</span> 01
tmux switch <span class="token parameter variable">-t</span> 02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="重命名会话" tabindex="-1"><a class="header-anchor" href="#重命名会话" aria-hidden="true">#</a> 重命名会话</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux rename-session <span class="token parameter variable">-t</span> 01 001
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="窗格操作" tabindex="-1"><a class="header-anchor" href="#窗格操作" aria-hidden="true">#</a> 窗格操作</h3><h4 id="进入会话后分割上下窗格" tabindex="-1"><a class="header-anchor" href="#进入会话后分割上下窗格" aria-hidden="true">#</a> 进入会话后分割上下窗格</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux split-window
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="进入会话后分割左右窗格" tabindex="-1"><a class="header-anchor" href="#进入会话后分割左右窗格" aria-hidden="true">#</a> 进入会话后分割左右窗格</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux split-window <span class="token parameter variable">-h</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="切换窗格上下左右" tabindex="-1"><a class="header-anchor" href="#切换窗格上下左右" aria-hidden="true">#</a> 切换窗格上下左右</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux select-pane <span class="token parameter variable">-U</span>
tmux select-pane <span class="token parameter variable">-D</span>
tmux select-pane <span class="token parameter variable">-L</span>
tmux select-pane <span class="token parameter variable">-R</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="移动窗格" tabindex="-1"><a class="header-anchor" href="#移动窗格" aria-hidden="true">#</a> 移动窗格</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tmux swap-pane <span class="token parameter variable">-U</span>
tmux swap-pane <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>配置</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>root@dev ~<span class="token punctuation">]</span> <span class="token function">cat</span> ~/.tmux.conf
setw <span class="token parameter variable">-g</span> mouse-resize-pane on
setw <span class="token parameter variable">-g</span> mouse-select-pane on
setw <span class="token parameter variable">-g</span> mouse-select-window on
setw <span class="token parameter variable">-g</span> mode-mouse on
<span class="token punctuation">[</span>root@dev ~<span class="token punctuation">]</span> tmux source-file ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快捷键</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">alias</span> <span class="token assign-left variable">tns</span><span class="token operator">=</span><span class="token string">&#39;tmux new -s&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tnw</span><span class="token operator">=</span><span class="token string">&#39;tmux new-window -n&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">td</span><span class="token operator">=</span><span class="token string">&#39;tmux detach&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tls</span><span class="token operator">=</span><span class="token string">&#39;tmux ls&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tat</span><span class="token operator">=</span><span class="token string">&#39;tmux attach -t&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tkill</span><span class="token operator">=</span><span class="token string">&#39;tmux kill-session -t&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">ts</span><span class="token operator">=</span><span class="token string">&#39;tmux switch -t&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tsw</span><span class="token operator">=</span><span class="token string">&#39;tmux split-window&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tsu</span><span class="token operator">=</span><span class="token string">&#39;tmux select-pane -U&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tsd</span><span class="token operator">=</span><span class="token string">&#39;tmux select-pane -D&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tsl</span><span class="token operator">=</span><span class="token string">&#39;tmux select-pane -L&#39;</span>
<span class="token builtin class-name">alias</span> <span class="token assign-left variable">tsr</span><span class="token operator">=</span><span class="token string">&#39;tmux select-pane -R&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[参考]</p>`,63),b={href:"https://solitum.net/posts/an-illustrated-guide-to-ssh-tunnels/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://github.com/wangdoc/ssh-tutorial/",target:"_blank",rel:"noopener noreferrer"},k={href:"https://linux.cn/article-8098-1.html",target:"_blank",rel:"noopener noreferrer"};function g(f,x){const e=t("router-link"),l=t("ExternalLinkIcon");return d(),c("div",null,[u,a("nav",v,[a("ul",null,[a("li",null,[n(e,{to:"#压缩"},{default:i(()=>[s("压缩")]),_:1})]),a("li",null,[n(e,{to:"#curl"},{default:i(()=>[s("curl")]),_:1})]),a("li",null,[n(e,{to:"#sdkman"},{default:i(()=>[s("sdkman")]),_:1})]),a("li",null,[n(e,{to:"#tcpdump"},{default:i(()=>[s("tcpdump")]),_:1})]),a("li",null,[n(e,{to:"#scp"},{default:i(()=>[s("SCP")]),_:1})]),a("li",null,[n(e,{to:"#ssh隧道转发"},{default:i(()=>[s("SSH隧道转发")]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#方案一-本地转发"},{default:i(()=>[s("方案一 本地转发")]),_:1})]),a("li",null,[n(e,{to:"#方案二-远程转发"},{default:i(()=>[s("方案二 远程转发")]),_:1})])])]),a("li",null,[n(e,{to:"#firewall"},{default:i(()=>[s("firewall")]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#_1、服务启停"},{default:i(()=>[s("1、服务启停")]),_:1})]),a("li",null,[n(e,{to:"#_2、运行状态"},{default:i(()=>[s("2、运行状态")]),_:1})]),a("li",null,[n(e,{to:"#_3、重载配置"},{default:i(()=>[s("3、重载配置")]),_:1})]),a("li",null,[n(e,{to:"#_4、获取-区域-信息"},{default:i(()=>[s("4、获取“区域”信息")]),_:1})]),a("li",null,[n(e,{to:"#_5、规则"},{default:i(()=>[s("5、规则")]),_:1})])])]),a("li",null,[n(e,{to:"#tmux"},{default:i(()=>[s("tmux")]),_:1}),a("ul",null,[a("li",null,[n(e,{to:"#安装"},{default:i(()=>[s("安装")]),_:1})]),a("li",null,[n(e,{to:"#基本操作"},{default:i(()=>[s("基本操作")]),_:1})]),a("li",null,[n(e,{to:"#窗格操作"},{default:i(()=>[s("窗格操作")]),_:1})])])])])]),m,a("ul",null,[a("li",null,[a("a",b,[s("https://solitum.net/posts/an-illustrated-guide-to-ssh-tunnels/"),n(l)])]),a("li",null,[a("a",h,[s("https://github.com/wangdoc/ssh-tutorial/"),n(l)])]),a("li",null,[a("a",k,[s("https://linux.cn/article-8098-1.html"),n(l)])])])])}const q=r(o,[["render",g],["__file","LinuxTools.html.vue"]]);export{q as default};
