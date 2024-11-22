import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as t,c as r,d as e,b as s,w as l,e as n,f as v}from"./app-3417b901.js";const c={},u=e("h1",{id:"k8s环境安装",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#k8s环境安装","aria-hidden":"true"},"#"),n(" K8s环境安装")],-1),m={class:"table-of-contents"},b=v(`<hr><h2 id="_1、操作系统准备" tabindex="-1"><a class="header-anchor" href="#_1、操作系统准备" aria-hidden="true">#</a> 1、操作系统准备</h2><h3 id="_1-1、安装虚拟机软件" tabindex="-1"><a class="header-anchor" href="#_1-1、安装虚拟机软件" aria-hidden="true">#</a> 1.1、安装虚拟机软件</h3><blockquote><p>我的电脑是一台16G的macbook-pro，需要在电脑上安装一款虚拟机软件，然后在虚拟机上运行多台Linux服务器。</p></blockquote><table><thead><tr><th>虚拟机软件</th><th>支持的操作系统</th><th>说明</th></tr></thead><tbody><tr><td>vmware</td><td>mac win linux</td><td>提供收费和免费版</td></tr><tr><td>VirtualBox</td><td>mac win linux</td><td>个人和企业版均免费</td></tr><tr><td>Hyper-V</td><td>win</td><td>Windows子系统(WSL)安装Linux</td></tr><tr><td>Multipass</td><td>mac win linux</td><td>轻量、快速、支持命令行</td></tr><tr><td>Parallels Desktop</td><td>mac</td><td>Mac下使用Windows体验较好，收费</td></tr><tr><td>UTM</td><td>mac</td><td>M系列花片模批x86架构，基于QEMU</td></tr><tr><td>QEMU</td><td>mac win linux</td><td>模拟不同指令集架构</td></tr></tbody></table><p>相比于vmware和VirtualBox，Multipass更加的轻量快捷</p><p>安装<code>multipass</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> multipass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载<code>multipass</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew uninstall multipass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>卸载并删除数据</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ brew uninstall <span class="token parameter variable">--zap</span> multipass
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看软件版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>multipass version
multipass   <span class="token number">1.14</span>.1+mac
multipassd  <span class="token number">1.14</span>.1+mac
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>multipass常用命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 创建一个名字叫做k3s的虚拟机
multipass launch --name k3s

# 在虚拟机中执行命令
multipass exec k3s -- ls -l

# 进入虚拟机并执行shell
multipass shell k3s

# 查看虚拟机的信息
multipass info k3s

# 停止虚拟机
multipass stop k3s

# 启动虚拟机
multipass start k3s

# 删除虚拟机
multipass delete k3s

# 清理虚拟机
multipass purge

# 挂载目录（将本地的~/kubernetes/master目录挂载到虚拟机中的~/master目录）
multipass mount ~/kubernetes/master master:~/master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2、在虚拟机上创建操作系统镜像" tabindex="-1"><a class="header-anchor" href="#_1-2、在虚拟机上创建操作系统镜像" aria-hidden="true">#</a> 1.2、在虚拟机上创建操作系统镜像</h3><p>节点规划</p><table><thead><tr><th>node_name</th><th>cpu</th><th>mem</th><th>disk</th><th>system</th><th>ip</th></tr></thead><tbody><tr><td>k8s-master</td><td>2</td><td>2G</td><td>10G</td><td>ubuntu22.04LTS</td><td>10.0.0.1</td></tr><tr><td>k8s-work01</td><td>2</td><td>2G</td><td>10G</td><td>ubuntu22.04LTS</td><td>10.0.0.2</td></tr><tr><td>k8s-work02</td><td>2</td><td>2G</td><td>10G</td><td>ubuntu22.04LTS</td><td>10.0.0.3</td></tr></tbody></table><p>查看有那些可用的镜像</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ multipass <span class="token function">find</span>
Image   Aliases   Version    Description
core    core16    <span class="token number">20200818</span>   Ubuntu Core <span class="token number">16</span>
core20            <span class="token number">20230119</span>   Ubuntu Core <span class="token number">20</span>
core22            <span class="token number">20230717</span>   Ubuntu Core <span class="token number">22</span>
core24            <span class="token number">20240603</span>   Ubuntu Core <span class="token number">24</span>
<span class="token number">20.04</span>   focal     <span class="token number">20241112</span>   Ubuntu <span class="token number">20.04</span> LTS
<span class="token number">22.04</span>   jammy     <span class="token number">20241002</span>   Ubuntu <span class="token number">22.04</span> LTS
<span class="token number">24.04</span>   noble,lts <span class="token number">20241106</span>   Ubuntu <span class="token number">24.04</span> LTS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建3台服务器</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>multipass launch --name k8s-master --cpus 2 --memory 2G --disk 10G jammy
multipass launch --name k8s-work01 --cpus 2 --memory 2G --disk 10G jammy
multipass launch --name k8s-work02 --cpus 2 --memory 2G --disk 10G jammy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看是否创建了3个虚拟机(创建后默认是启动的)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>$ multipass list
Name                    State             IPv4             Image
k8s-master              Running           192.168.64.3     Ubuntu 22.04 LTS
k8s-work01              Running           192.168.64.4     Ubuntu 22.04 LTS
k8s-work02              Running           192.168.64.5     Ubuntu 22.04 LTS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3、镜像操作系统的配置设定" tabindex="-1"><a class="header-anchor" href="#_1-3、镜像操作系统的配置设定" aria-hidden="true">#</a> 1.3、镜像操作系统的配置设定</h3><ul><li>密码配置</li></ul><p>设置密码（镜像默认没有密码）<br> sudo passwd ubuntu</p><ul><li>设置静态ip</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#备份配置
root@k8s-master:~# mv /etc/netplan/50-cloud-init.yaml /etc/netplan/50-cloud-init.yaml.bak

#写入新的配置
root@k8s-master:~# cat &lt;&lt; EOF &gt; /etc/netplan/50-cloud-init.yaml
# This is the network config written by &#39;subiquity&#39;
network:
  version: 2
  renderer: networkd
  ethernets:
    ens3:
      dhcp4: no
      addresses:
        - 192.168.64.3/24
      routes:
        - to: default
          via: 192.168.64.1
      nameservers:
        addresses:
          - 223.6.6.6
          - 114.114.114.114
          - 8.8.8.8
EOF

# 应用配置文件
netplan apply
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭防火墙和selinux</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看防火墙状态
sudo ufw status
# 关闭防火墙
sudo ufw disable
# 永久关闭防火墙
sudo systemctl disable ufw

#关闭 selinux（22.04并不是默认安装的）
sudo setenforce 0
# 永久关闭 selinux 打开配置文件 ,将 SELINUX=enforcing 修改为 SELINUX=disabled
sudo vi /etc/selinux/config
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>关闭swap分区</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看
sudo swapon --show
#禁用
sudo swapoff /dev/sdaX
#永久禁用
从 /etc/fstab 文件中删除与交换分区相关的行。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>设置hostname</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>hostnamectl set-hostname k8s-master
hostnamectl set-hostname k8s-work01
hostnamectl set-hostname k8s-work02
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>host解析主机配置</li></ul><p>echo &#39;&#39;&#39;<br> 192.168.64.3 k8s-master<br> 192.168.64.4 k8s-work01<br> 192.168.64.5 k8s-work02<br> &#39;&#39;&#39; &gt;&gt; /etc/hosts</p><ul><li>设置时区</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看当前时区
timedatectl status

# 设置时区为上海
sudo timedatectl set-timezone Asia/Shanghai

# 查看时区是否设置成功
timedatectl status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置内核转发和网桥过滤</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#配置文件地址写入
cat &gt; /etc/modules-load.d/k8s.conf &lt;&lt; EOF
overlay
br_netfilter
EOF

#加载配置
modprobe overlay &amp;&amp; modprobe br_netfilter

# 查看是否加载
lsmod |grep overlay
lsmod |grep br_netfilter



cat &gt; /etc/sysctl.d/k8s.conf &lt;&lt; EOF
net.bridge.bridge-nf-call-ip6tables = 1
net.bridge.bridge-nf-call-iptables = 1
net.ipv4.ip_forward = 1
EOF

#让配置生效：
sysctl -p /etc/sysctl.d/k8s.conf
#查看是否加载生效
lsmod |grep br_netfilter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>安装ipset和ipvsadm</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt install ipset ipvsadm -y

#配置 ipvsadm 模块加载方式
cat &gt; /etc/modules-load.d/ipvs.conf &lt;&lt; EOF
#!/bin/bash
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF

#写成一个手动启动脚本文件
cat &lt;&lt; EOF | tee ipvs.sh
modprobe -- ip_vs
modprobe -- ip_vs_rr
modprobe -- ip_vs_wrr
modprobe -- ip_vs_sh
modprobe -- nf_conntrack
EOF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4、安装容器" tabindex="-1"><a class="header-anchor" href="#_1-4、安装容器" aria-hidden="true">#</a> 1.4、安装容器</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#containerd下载
wget https://github.com/containerd/containerd/releases/download/v1.7.23/cri-containerd-1.7.23-linux-amd64.tar.gz

#解压并查看
tar xf cri-containerd-1.7.23-linux-amd64.tar.gz -C /
which containerd
#containerd配置文件生成并修改
#创建文件
mkdir /etc/containerd
#生成配置文件：
containerd config default &gt; /etc/containerd/config.toml

#修改配置文件
#修改配置文件将pause:3.8改为3.9
cat /etc/containerd/config.toml |grep &quot;pause:&quot;
    sandbox_image = &quot;registry.k8s.io/pause:3.8&quot;
#将SystemdCgroup = false改为true

#启动并设置开机自启
systemctl enable --now containerd

#查看版本：
containerd --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2、安装k8s" tabindex="-1"><a class="header-anchor" href="#_2、安装k8s" aria-hidden="true">#</a> 2、安装k8s</h2><h3 id="_2-1、安装相关软件" tabindex="-1"><a class="header-anchor" href="#_2-1、安装相关软件" aria-hidden="true">#</a> 2.1、安装相关软件</h3><ul><li>2.1.1、设置镜像源</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建目录
sudo mkdir -p /etc/apt/keyrings/
#下载密钥
curl -fsSL https://pkgs.k8s.io/core:/stable:/v1.31/deb/Release.key | sudo gpg --dearmor -o /etc/apt/keyrings/kubernetes-apt-keyring.gpg
#添加kubernetes apt仓库
echo &#39;deb [signed-by=/etc/apt/keyrings/kubernetes-apt-keyring.gpg] https://pkgs.k8s.io/core:/stable:/v1.31/deb/ /&#39; | sudo tee /etc/apt/sources.list.d/kubernetes.list
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>2.1.2、安装<code>kubelet</code> <code>kubeadm</code> <code>kubectl</code></li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>apt clean &amp;&amp; rm -rf /var/lib/apt/lists/* &amp;&amp; apt update

#如果遇到时间不同步可以手动指定时间
date -s &quot;2024-11-19 18:29:40&quot;

#查看软件列表：
root@k8s-work01:~# apt-cache madison kubeadm
   kubeadm | 1.31.2-1.1 | https://pkgs.k8s.io/core:/stable:/v1.31/deb  Packages
   kubeadm | 1.31.1-1.1 | https://pkgs.k8s.io/core:/stable:/v1.31/deb  Packages
   kubeadm | 1.31.0-1.1 | https://pkgs.k8s.io/core:/stable:/v1.31/deb  Packages

#安装指定版本：
sudo apt-get install -y kubelet=1.31.0-1.1 kubeadm=1.31.0-1.1 kubectl=1.31.0-1.1

#锁定版本，防止后期自动更新。
sudo apt-mark hold kubelet kubeadm kubectl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2、集群初始化" tabindex="-1"><a class="header-anchor" href="#_2-2、集群初始化" aria-hidden="true">#</a> 2.2、集群初始化</h3><p>生成配置文件：<br> kubeadm config print init-defaults &gt; kubeadm-config.yaml</p><p>修改配置文件：<br> vim kubeadm-config.yaml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、修改master在集群中的名称
nodeRegistration:
  name: k8s-master #主节点名

2、添加master主机节点的IP
localAPIEndpoint:
  advertiseAddress: 192.168.64.3  # master 主机IP

3、添加pod集群的IP段
networking:
  podSubnet: 10.244.0.0/16

4、添加镜像仓库地址（根据需要设置）
imageRepository: registry.aliyuncs.com/google_containers

5、cgroupDriver 被设置为 systemd
---
apiVersion: kubelet.config.k8s.io/v1beta4
kind: KubeletConfiguration
cgroupDriver: systemd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>初始化镜像</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#查看镜像
root@k8s-master:~# kubeadm config images list --config kubeadm-config.yaml
registry.k8s.io/kube-apiserver:v1.31.0
registry.k8s.io/kube-controller-manager:v1.31.0
registry.k8s.io/kube-scheduler:v1.31.0
registry.k8s.io/kube-proxy:v1.31.0
registry.k8s.io/coredns/coredns:v1.11.1
registry.k8s.io/pause:3.10
registry.k8s.io/etcd:3.5.15-0

#下载镜像
root@k8s-master:~# kubeadm config images pull --config kubeadm-config.yaml
[config/images] Pulled registry.k8s.io/kube-apiserver:v1.31.0
[config/images] Pulled registry.k8s.io/kube-controller-manager:v1.31.0
[config/images] Pulled registry.k8s.io/kube-scheduler:v1.31.0
[config/images] Pulled registry.k8s.io/kube-proxy:v1.31.0
[config/images] Pulled registry.k8s.io/coredns/coredns:v1.11.1
[config/images] Pulled registry.k8s.io/pause:3.10
[config/images] Pulled registry.k8s.io/etcd:3.5.15-0

#初始化集群
kubeadm init --config kubeadm-config.yaml
.......
Your Kubernetes control-plane has initialized successfully!

To start using your cluster, you need to run the following as a regular user:

  mkdir -p $HOME/.kube
  sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config
  sudo chown $(id -u):$(id -g) $HOME/.kube/config

Alternatively, if you are the root user, you can run:

  export KUBECONFIG=/etc/kubernetes/admin.conf

You should now deploy a pod network to the cluster.
Run &quot;kubectl apply -f [podnetwork].yaml&quot; with one of the options listed at:
  https://kubernetes.io/docs/concepts/cluster-administration/addons/

Then you can join any number of worker nodes by running the following on each as root:

kubeadm join 192.168.64.3:6443 --token abcdef.0123456789abcdef \\
	--discovery-token-ca-cert-hash sha256:69a0ee0d71ae9ba0438d7c92988a3057d617ea13917b7718df0f4fb142c7fceb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据上面的提示</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1、
root@k8s-master:~# mkdir -p $HOME/.kube &amp;&amp; sudo cp -i /etc/kubernetes/admin.conf $HOME/.kube/config &amp;&amp; sudo chown $(id -u):$(id -g) $HOME/.kube/config

2、
root@k8s-master:~# export KUBECONFIG=/etc/kubernetes/admin.conf

3、
root@k8s-master:~# kubectl get nodes
NAME   STATUS     ROLES           AGE     VERSION
node   NotReady   control-plane   3m56s   v1.31.0

4、此时在其他两个work节点上执行加入集群的操作
kubeadm join 192.168.64.3:6443 --token abcdef.0123456789abcdef \\
	--discovery-token-ca-cert-hash sha256:69a0ee0d71ae9ba0438d7c92988a3057d617ea13917b7718df0f4fb142c7fceb

5、
root@k8s-master:~# kubectl get nodes
NAME         STATUS     ROLES           AGE     VERSION
k8s-work01   NotReady   &lt;none&gt;          25s     v1.31.0
k8s-work02   NotReady   &lt;none&gt;          17s     v1.31.0
node         NotReady   control-plane   4m42s   v1.31.0
root@k8s-master:~#
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-3、安装网络插件calico-只在master执行" tabindex="-1"><a class="header-anchor" href="#_2-3、安装网络插件calico-只在master执行" aria-hidden="true">#</a> 2.3、安装网络插件Calico(只在master执行)</h2><p>Calico是一个网络插件，提供高性能网络功能和网络安全策略</p><table><thead><tr><th>特性</th><th>Calico</th><th>Flannel</th><th>Cilium</th></tr></thead><tbody><tr><td>数据路径</td><td>路由+eBPF</td><td>Overlay网络</td><td>eBPF</td></tr><tr><td>网络策略</td><td>支持</td><td>不支持</td><td>支持</td></tr><tr><td>性能</td><td>高</td><td>较低</td><td>高</td></tr><tr><td>复杂性</td><td>中等</td><td>简单</td><td>较复杂</td></tr><tr><td>扩展性</td><td>高</td><td>较低</td><td>高</td></tr></tbody></table><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#创建配置文件 1
kubectl create -f https://raw.githubusercontent.com/projectcalico/calico/v3.28.2/manifests/tigera-operator.yaml

#查看是否运行：
root@k8s-master:~# kubectl get pods -n tigera-operator
NAME                              READY   STATUS              RESTARTS   AGE
tigera-operator-89c775547-xmrnt   0/1     ContainerCreating   0          20s

wget https://raw.githubusercontent.com/projectcalico/calico/v3.28.2/manifests/custom-resources.yaml
# 注我们在kubeadm-config.yaml文件中添加的pod网段是10.244.0.0/16所以我们要修改为一样的
vim custom-resources.yaml

#应用配置
kubectl create -f custom-resources.yaml

#查看命名空间
root@k8s-master:~# kubectl get ns
NAME              STATUS   AGE
calico-system     Active   5s
default           Active   9m41s
kube-node-lease   Active   9m40s
kube-public       Active   9m43s
kube-system       Active   9m46s
tigera-operator   Active   2m24s

# 查看命名空间中运行的pods 如果没有全部起来稍微等一下，应该是在创建中，如果网络慢可能要半个小时。
root@k8s-master:~# kubectl get pods -n calico-system
NAME                                       READY   STATUS              RESTARTS   AGE
calico-kube-controllers-85459c57fb-pl965   0/1     Pending             0          34s
calico-node-86pq4                          0/1     Init:0/2            0          38s
calico-node-9n9bf                          0/1     Init:0/2            0          38s
calico-node-mh8cx                          0/1     Init:1/2            0          38s
calico-typha-66c7594bc7-dbzjk              0/1     ContainerCreating   0          32s
calico-typha-66c7594bc7-rv6ph              0/1     ContainerCreating   0          40s
csi-node-driver-7nv5x                      0/2     ContainerCreating   0          36s
csi-node-driver-bf87x                      0/2     ContainerCreating   0          37s
csi-node-driver-w9mfl                      0/2     ContainerCreating   0          37s

#查看集群状态：
kubectl get nodes
NAME         STATUS     ROLES           AGE     VERSION
k8s-work01   NotReady   &lt;none&gt;          4m37s   v1.31.0
k8s-work02   NotReady   &lt;none&gt;          4m31s   v1.31.0
node         NotReady   control-plane   10m     v1.31.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3、测试k8s集群" tabindex="-1"><a class="header-anchor" href="#_3、测试k8s集群" aria-hidden="true">#</a> 3、测试k8s集群</h2><h3 id="_3-1、安装nginx测试集群可用性" tabindex="-1"><a class="header-anchor" href="#_3-1、安装nginx测试集群可用性" aria-hidden="true">#</a> 3.1、安装nginx测试集群可用性</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@k8s-master:~# cat nginx.yaml
---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: nginxweb
spec:
  selector:
    matchLabels:
      app: nginxweb1
  replicas: 2
  template:
    metadata:
      labels:
        app: nginxweb1
    spec:
      containers:
      - name: nginxwebc
        image: nginx:latest
        imagePullPolicy: IfNotPresent
        ports:
        - containerPort: 80

---
apiVersion: v1
kind: Service
metadata:
  name: nginxweb-service
spec:
  externalTrafficPolicy: Cluster
  selector:
    app: nginxweb1
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
    nodePort: 30080
  type: NodePort
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>启动创建容器<br> kubectl apply -f nginx.yaml</p><p>查看是否创建成功</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>root@k8s-master:~# kubectl get deployment
NAME       READY   UP-TO-DATE   AVAILABLE   AGE
nginxweb   1/2     2            1           32m


root@k8s-master:~# kubectl get pods
NAME                       READY   STATUS              RESTARTS   AGE
nginxweb-b4ccbf5dc-f684w   1/1     Running             0          32m
nginxweb-b4ccbf5dc-hbpxs   0/1     ContainerCreating   0          32m


root@k8s-master:~# kubectl get svc
NAME               TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)        AGE
kubernetes         ClusterIP   10.96.0.1        &lt;none&gt;        443/TCP        40h
nginxweb-service   NodePort    10.104.125.155   &lt;none&gt;        80:30080/TCP   48m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2、网络访问nginx" tabindex="-1"><a class="header-anchor" href="#_3-2、网络访问nginx" aria-hidden="true">#</a> 3.2、网络访问nginx</h3><p>network test</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>╭─test@MacBook-Pro ~
╰─$ curl 192.168.64.3:30080
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Welcome to nginx!&lt;/title&gt;
&lt;style&gt;
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;
&lt;p&gt;If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.&lt;/p&gt;

&lt;p&gt;For online documentation and support please refer to
&lt;a href=&quot;http://nginx.org/&quot;&gt;nginx.org&lt;/a&gt;.&lt;br/&gt;
Commercial support is available at
&lt;a href=&quot;http://nginx.com/&quot;&gt;nginx.com&lt;/a&gt;.&lt;/p&gt;

&lt;p&gt;&lt;em&gt;Thank you for using nginx.&lt;/em&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;

╭─test@MacBook-Pro ~
╰─$ curl 192.168.64.4:30080
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Welcome to nginx!&lt;/title&gt;
&lt;style&gt;
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;
&lt;p&gt;If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.&lt;/p&gt;

&lt;p&gt;For online documentation and support please refer to
&lt;a href=&quot;http://nginx.org/&quot;&gt;nginx.org&lt;/a&gt;.&lt;br/&gt;
Commercial support is available at
&lt;a href=&quot;http://nginx.com/&quot;&gt;nginx.com&lt;/a&gt;.&lt;/p&gt;

&lt;p&gt;&lt;em&gt;Thank you for using nginx.&lt;/em&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;

╭─test@MacBook-Pro ~
╰─$ curl 192.168.64.5:30080
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Welcome to nginx!&lt;/title&gt;
&lt;style&gt;
html { color-scheme: light dark; }
body { width: 35em; margin: 0 auto;
font-family: Tahoma, Verdana, Arial, sans-serif; }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Welcome to nginx!&lt;/h1&gt;
&lt;p&gt;If you see this page, the nginx web server is successfully installed and
working. Further configuration is required.&lt;/p&gt;

&lt;p&gt;For online documentation and support please refer to
&lt;a href=&quot;http://nginx.org/&quot;&gt;nginx.org&lt;/a&gt;.&lt;br/&gt;
Commercial support is available at
&lt;a href=&quot;http://nginx.com/&quot;&gt;nginx.com&lt;/a&gt;.&lt;/p&gt;

&lt;p&gt;&lt;em&gt;Thank you for using nginx.&lt;/em&gt;&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73);function o(g,p){const i=a("router-link");return t(),r("div",null,[u,e("nav",m,[e("ul",null,[e("li",null,[s(i,{to:"#_1、操作系统准备"},{default:l(()=>[n("1、操作系统准备")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#_1-1、安装虚拟机软件"},{default:l(()=>[n("1.1、安装虚拟机软件")]),_:1})]),e("li",null,[s(i,{to:"#_1-2、在虚拟机上创建操作系统镜像"},{default:l(()=>[n("1.2、在虚拟机上创建操作系统镜像")]),_:1})]),e("li",null,[s(i,{to:"#_1-3、镜像操作系统的配置设定"},{default:l(()=>[n("1.3、镜像操作系统的配置设定")]),_:1})]),e("li",null,[s(i,{to:"#_1-4、安装容器"},{default:l(()=>[n("1.4、安装容器")]),_:1})])])]),e("li",null,[s(i,{to:"#_2、安装k8s"},{default:l(()=>[n("2、安装k8s")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#_2-1、安装相关软件"},{default:l(()=>[n("2.1、安装相关软件")]),_:1})]),e("li",null,[s(i,{to:"#_2-2、集群初始化"},{default:l(()=>[n("2.2、集群初始化")]),_:1})])])]),e("li",null,[s(i,{to:"#_2-3、安装网络插件calico-只在master执行"},{default:l(()=>[n("2.3、安装网络插件Calico(只在master执行)")]),_:1})]),e("li",null,[s(i,{to:"#_3、测试k8s集群"},{default:l(()=>[n("3、测试k8s集群")]),_:1}),e("ul",null,[e("li",null,[s(i,{to:"#_3-1、安装nginx测试集群可用性"},{default:l(()=>[n("3.1、安装nginx测试集群可用性")]),_:1})]),e("li",null,[s(i,{to:"#_3-2、网络访问nginx"},{default:l(()=>[n("3.2、网络访问nginx")]),_:1})])])])])]),b])}const x=d(c,[["render",o],["__file","CAK_01_EnvInstall.html.vue"]]);export{x as default};
