import{_ as c}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as v,c as o,b as l,w as i,d as e,e as n,f as r}from"./app-95875cd0.js";const b="/blogs/assets/runtime-c49097f9.svg",m="/blogs/assets/components-of-kubernetes-cd7b9b2d.svg",p={},h=r('<h1 id="kubernetes" tabindex="-1"><a class="header-anchor" href="#kubernetes" aria-hidden="true">#</a> Kubernetes</h1><h2 id="_1、部署架构的发展" tabindex="-1"><a class="header-anchor" href="#_1、部署架构的发展" aria-hidden="true">#</a> 1、部署架构的发展</h2><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>1、统部署方式：</li></ul><blockquote><p>应用直接部署于物理机无法控制资源分配,一旦出现Bug,可能导致机器资源被单个应用占用,其它应用无法正常运行,无法实现应用隔离。</p></blockquote><ul><li>2、虚拟机部署</li></ul><blockquote><p>在单个物理机上运行多个虚拟机，每个虚拟机都是完整独立的系统，性能损耗大。</p></blockquote><ul><li>3、容器部署</li></ul><blockquote><p>所有容器共享主机的系统，轻量级的虚拟机，性能损耗小，资源隔离，CPU和内存可按需分配</p></blockquote><h2 id="_2、既然有了docker那k8s解决了什么问题" tabindex="-1"><a class="header-anchor" href="#_2、既然有了docker那k8s解决了什么问题" aria-hidden="true">#</a> 2、既然有了Docker那k8s解决了什么问题？</h2><ul><li>单机Docker很好用，但是服务器上百台、上千台时，每次加机器、软件更新、版本回滚，都会变得非常麻烦; 如果容器发生故障，需要手动启动另一个容器</li><li>Kubernetes 提供集中式的管理集群机器和应用，加机器、版本升级、版本回滚、不停机的灰度更新、确保高可用、高性能、高扩展。</li></ul><h2 id="_3、kubernetes-提供" tabindex="-1"><a class="header-anchor" href="#_3、kubernetes-提供" aria-hidden="true">#</a> 3、Kubernetes 提供：</h2><ul><li>服务发现和负载均衡</li></ul><blockquote><p>Kubernetes 可以使用 DNS 名称或自己的 IP 地址来暴露容器。 如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。</p></blockquote><ul><li>存储编排</li></ul><blockquote><p>Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。</p></blockquote><ul><li>自动部署和回滚</li></ul><blockquote><p>Kubernetes可以 declaratively 管理容器部署的预期状态,并以受控速率将实际状态调节为期望状态,实现自动弹性扩缩容器实例。</p></blockquote><ul><li>自动完成装箱计算</li></ul><blockquote><p>Kubernetes 是容器集群管理系统,可在集群节点上调度运行容器化应用,并根据指定的 CPU 和内存资源需求进行优化调度,以达到资源的最优利用。</p></blockquote><ul><li>自我修复</li></ul><blockquote><p>Kubernetes 将重新启动失败的容器、替换容器、杀死不响应用户定义的运行状况检查的容器， 并且在准备好服务之前不将其通告给客户端。</p></blockquote><ul><li>密钥与配置管</li></ul><blockquote><p>Kubernetes可以安全管理密码、令牌、SSH密钥等敏感信息,实现应用配置和密钥的更新部署,无需重建镜像和在配置文件中暴露密钥。</p></blockquote><ul><li>批处理执行</li></ul><blockquote><p>除了服务外，Kubernetes 还可以管理你的批处理和 CI（持续集成）工作负载，如有需要，可以替换失败的容器。</p></blockquote><ul><li>水平扩缩</li></ul><blockquote><p>使用简单的命令、用户界面或根据 CPU 使用率自动对你的应用进行扩缩。</p></blockquote><ul><li>IPv4/IPv6 双栈</li></ul><blockquote><p>为 Pod（容器组）和 Service（服务）分配 IPv4 和 IPv6 地址。</p></blockquote><ul><li>为可扩展性设计</li></ul><blockquote><p>在不改变上游源代码的情况下为你的 Kubernetes 集群添加功能。</p></blockquote><h2 id="_4、k8s架构" tabindex="-1"><a class="header-anchor" href="#_4、k8s架构" aria-hidden="true">#</a> 4、k8s架构</h2><p>Kubernetes集群由一组工作节点组成,这些节点上运行容器化应用程序。集群包含至少一个工作节点和控制平面,控制平面负责管理节点上运行的Pod。生产环境下控制平面跨多节点运行,并配合多工作节点实现容错和高可用。<br><img src="'+m+'" alt="k8s架构图" loading="lazy"></p><h3 id="_4-1、控制平面组件" tabindex="-1"><a class="header-anchor" href="#_4-1、控制平面组件" aria-hidden="true">#</a> 4.1、控制平面组件</h3><p>控制平面组件会为集群做出全局决策，比如资源的调度。 以及检测和响应集群事件，例如当不满足部署的 replicas 字段时， 要启动新的 pod。</p><h4 id="_4-1-1、kube-apiserver" tabindex="-1"><a class="header-anchor" href="#_4-1-1、kube-apiserver" aria-hidden="true">#</a> 4.1.1、kube-apiserver</h4><p>Kubernetes的API服务器公开了Kubernetes API用以处理请求,是控制平面的前端,其主要实现是kube-apiserver,支持通过运行多个实例实现水平扩展和流量负载均衡。</p><h4 id="_4-1-2、etcd" tabindex="-1"><a class="header-anchor" href="#_4-1-2、etcd" aria-hidden="true">#</a> 4.1.2、etcd</h4><p>一致且高可用的键值存储，用作 Kubernetes 所有集群数据的后台数据库。</p><h4 id="_4-1-3、kube-scheduler" tabindex="-1"><a class="header-anchor" href="#_4-1-3、kube-scheduler" aria-hidden="true">#</a> 4.1.3、kube-scheduler</h4><p>kube-scheduler是Kubernetes控制平面的组件,负责监视新创建的未调度Pod,并根据资源需求、策略限制、亲和性规范等多维因素选择最优节点去运行Pod。</p><h4 id="_4-1-4、kube-controller-manager" tabindex="-1"><a class="header-anchor" href="#_4-1-4、kube-controller-manager" aria-hidden="true">#</a> 4.1.4、kube-controller-manager</h4><p>kube-controller-manager 是控制平面的组件， 负责运行控制器进程。</p><p>从逻辑上讲， 每个控制器都是一个单独的进程， 但是为了降低复杂性，它们都被编译到同一个可执行文件，并在同一个进程中运行。</p><p>有许多不同类型的控制器。以下是一些例子：</p><ul><li>节点控制器（Node Controller）：负责在节点出现故障时进行通知和响应</li><li>任务控制器（Job Controller）：监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成</li><li>端点分片控制器（EndpointSlice controller）：填充端点分片（EndpointSlice）对象（以提供 Service 和 Pod 之间的链接）。</li><li>服务账号控制器（ServiceAccount controller）：为新的命名空间创建默认的服务账号（ServiceAccount）。</li></ul><h4 id="_4-1-5、cloud-controller-manager" tabindex="-1"><a class="header-anchor" href="#_4-1-5、cloud-controller-manager" aria-hidden="true">#</a> 4.1.5、cloud-controller-manager</h4><p>云控制器管理器是控制平面的组件,用来将Kubernetes集群连接到特定云平台并实现云平台相关的控制逻辑,它分离了云平台交互组件与集群内交互组件,对于本地环境部署的集群是可选的。<br> 云控制器管理器组合了多个逻辑上独立的控制回路,可以水平扩展提升性能和容错能力。</p><p>下面的控制器都包含对云平台驱动的依赖：</p><ul><li>节点控制器（Node Controller）：用于在节点终止响应后检查云提供商以确定节点是否已被删除</li><li>路由控制器（Route Controller）：用于在底层云基础架构中设置路由</li><li>服务控制器（Service Controller）：用于创建、更新和删除云提供商负载均衡器</li></ul><h3 id="_4-2、node组件" tabindex="-1"><a class="header-anchor" href="#_4-2、node组件" aria-hidden="true">#</a> 4.2、Node组件</h3><p>节点组件会在每个节点上运行，负责维护运行的 Pod 并提供 Kubernetes 运行环境。</p><h4 id="_4-2-1、kubelet" tabindex="-1"><a class="header-anchor" href="#_4-2-1、kubelet" aria-hidden="true">#</a> 4.2.1、kubelet</h4><p>kubelet 会在集群中每个节点（node）上运行。 它保证容器（containers）都运行在 Pod 中。</p><p>kubelet 接收一组通过各类机制提供给它的 PodSpec，确保这些 PodSpec 中描述的容器处于运行状态且健康。 kubelet 不会管理不是由 Kubernetes 创建的容器。</p><h4 id="_4-2-2、kube-proxy" tabindex="-1"><a class="header-anchor" href="#_4-2-2、kube-proxy" aria-hidden="true">#</a> 4.2.2、kube-proxy</h4><p>kube-proxy 是集群中每个节点（node）上所运行的网络代理， 实现 Kubernetes 服务（Service） 概念的一部分。</p><p>kube-proxy 维护节点上的一些网络规则， 这些网络规则会允许从集群内部或外部的网络会话与 Pod 进行网络通信。</p><p>如果操作系统提供了可用的数据包过滤层，则 kube-proxy 会通过它来实现网络规则。 否则，kube-proxy 仅做流量转发。</p><h4 id="_4-2-3、容器运行时-container-runtime" tabindex="-1"><a class="header-anchor" href="#_4-2-3、容器运行时-container-runtime" aria-hidden="true">#</a> 4.2.3、容器运行时（Container Runtime）</h4><p>这个基础组件使 Kubernetes 能够有效运行容器。 它负责管理 Kubernetes 环境中容器的执行和生命周期。</p><p>Kubernetes 支持许多容器运行环境，例如 containerd、 CRI-O 以及 Kubernetes CRI (容器运行环境接口) 的其他任何实现。</p><h2 id="_5、安装" tabindex="-1"><a class="header-anchor" href="#_5、安装" aria-hidden="true">#</a> 5、安装</h2><p><code>minikube</code> 是一个工具， 能让你在本地运行 Kubernetes。</p>',65),g=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),n(),e("span",{class:"token parameter variable"},"-LO"),n(` https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
`),e("span",{class:"token function"},"sudo"),n(" dpkg "),e("span",{class:"token parameter variable"},"-i"),n(` minikube_latest_amd64.deb
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token function"},"curl"),n(),e("span",{class:"token parameter variable"},"-LO"),n(` https://storage.googleapis.com/minikube/releases/latest/minikube-latest.x86_64.rpm
`),e("span",{class:"token function"},"sudo"),n(),e("span",{class:"token function"},"rpm"),n(),e("span",{class:"token parameter variable"},"-Uvh"),n(` minikube-latest.x86_64.rpm
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),x=r(`<h2 id="_6、使用" tabindex="-1"><a class="header-anchor" href="#_6、使用" aria-hidden="true">#</a> 6、使用</h2><h3 id="_6-1、minikube指令" tabindex="-1"><a class="header-anchor" href="#_6-1、minikube指令" aria-hidden="true">#</a> 6.1、minikube指令</h3><p>mac安装minikube</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>brew install minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过运行以下命令启动集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>版本升级</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>minikube update-check

CurrentVersion: v1.34.0
LatestVersion: v1.34.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问在 minikube 集群中运行的 Kubernetes 仪表板：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube dashboard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Minikube 使在浏览器中打开这个公开的端点变得容易：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube <span class="token function">service</span> hello-minikube
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>升级集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube start --kubernetes-version<span class="token operator">=</span>latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动第二个本地集群（注意：如果 minikube 使用裸机/无驱动程序，这将不起作用）：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube start <span class="token parameter variable">-p</span> cluster2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>停止本地群集：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除本地集群：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube delete
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除所有本地集群和配置文件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>minikube delete <span class="token parameter variable">--all</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6-2、k8s指令" tabindex="-1"><a class="header-anchor" href="#_6-2、k8s指令" aria-hidden="true">#</a> 6.2、k8s指令</h3><p>启动服务器：kubectl</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl create deployment hello-minikube <span class="token parameter variable">--image</span><span class="token operator">=</span>kicbase/echo-server:1.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>将服务公开为 NodePort</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>kubectl expose deployment hello-minikube <span class="token parameter variable">--type</span><span class="token operator">=</span>NodePort <span class="token parameter variable">--port</span><span class="token operator">=</span><span class="token number">8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取节点信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get nodes     

NAME       STATUS   ROLES           AGE   VERSION
minikube   Ready    control-plane   66m   v1.31.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取集群的命名空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get namespaces

NAME                   STATUS   AGE
default                Active   65m
kube-node-lease        Active   65m
kube-public            Active   65m
kube-system            Active   65m
kubernetes-dashboard   Active   21m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取pod运行信息(pod中也运行着k8s自身所需要的服务)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods -A
NAMESPACE              NAME                                READY   STATUS    RESTARTS      AGE
kube-system            coredns-6f6b679f8f-2zsb4            1/1     Running   0             67m
kube-system            etcd-minikube                       1/1     Running   0             67m
kube-system            kube-apiserver-minikube             1/1     Running   0             67m
kube-system            kube-controller-manager-minikube    1/1     Running   0             67m
kube-system            kube-proxy-q64vb                    1/1     Running   0             67m
kube-system            kube-scheduler-minikube             1/1     Running   0             67m
kube-system            storage-provisioner                 1/1     Running   1 (67m ago)   67m
kubernetes-dashboard   dashboard-metrics-scraper-cb4-24k   1/1     Running   0             24m
kubernetes-dashboard   kubernetes-dashboard-695-rwvnn      1/1     Running   0             24m
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>获取服务信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get services -A
NAMESPACE              NAME                        TYPE        CLUSTER-IP     EXTERNAL-IP   PORT(S)           AGE
default                kubernetes                  ClusterIP   10.96.0.1      &lt;none&gt;        443/TCP           71m
kube-system            kube-dns                    ClusterIP   10.96.0.10     &lt;none&gt;        53/UDP,9153/TCP   71m
kubernetes-dashboard   dashboard-metrics-scraper   ClusterIP   10.99.160.10   &lt;none&gt;        8000/TCP          27m
kubernetes-dashboard   kubernetes-dashboard        ClusterIP   10.108.78.40   &lt;none&gt;        80/TCP            27m
╭─localhost@MacBook-Pro ~ 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过YAML创建命名空间</p><p>vim namespace.yaml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
apiVersion: v1
kind: Namespace
metadata:
  name: development
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>╰─$ kubectl apply -f namespace.yaml 
namespace/development created
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get namespaces
NAME                   STATUS   AGE
default                Active   24h
development            Active   23s
kube-node-lease        Active   24h
kube-public            Active   24h
kube-system            Active   24h
kubernetes-dashboard   Active   23h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>增加一个生产环境命名空间<br> vim namespace.yaml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
apiVersion: v1
kind: Namespace
metadata:
  name: development
---
apiVersion: v1
kind: Namespace
metadata:
  name: production
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f namespace.yaml
namespace/development unchanged
namespace/production created

╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get namespaces         
NAME                   STATUS   AGE
default                Active   24h
development            Active   3m7s
kube-node-lease        Active   24h
kube-public            Active   24h
kube-system            Active   24h
kubernetes-dashboard   Active   23h
production             Active   6s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过YAML删除命名空间</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>╭─localhost@MacBook-Pro ~ 
╰─$ kubectl delete -f namespace.yaml 
namespace &quot;development&quot; deleted
namespace &quot;production&quot; deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get namespaces          
NAME                   STATUS   AGE
default                Active   24h
kube-node-lease        Active   24h
kube-public            Active   24h
kube-system            Active   24h
kubernetes-dashboard   Active   23h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>部署应用程序</p><p>vim deployment.yml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: pod-info-deployment
  namespace: development
  labels:
    app: pod-info
spec:
  replicas: 3
  selector:
    matchLabels:
      app: pod-info
  template:
    metadata:
      labels:
        app: pod-info
    spec:
      containers:
      - name: pod-info-container
        image: kimschles/pod-info-app:latest
        ports:
        - containerPort: 3000
        env:
          - name: POD_NAME
            valueFrom:
              fieldRef:
                fieldPath: metadata.name
          - name: POD_NAMESPACE
            valueFrom:
              fieldRef:
                fieldPath: metadata.namespace
          - name: POD_IP
            valueFrom:
              fieldRef:
                fieldPath: status.podIP
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据YAML文件创建</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>╭─localhost@MacBook-Pro ~ 
╰─$ kubectl apply -f deployment.yaml                                         
deployment.apps/pod-info-deployment created

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看创建后的状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 查看指定命名空间下的控制器信息
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get deployments -n development
NAME                  READY   UP-TO-DATE   AVAILABLE   AGE
pod-info-deployment   3/3     3            3           3m43s

#查看development命名空间下的pod
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get pods -n development       
NAME                                   READY   STATUS    RESTARTS   AGE
pod-info-deployment-7b697c564d-w4mlt   1/1     Running   0          3m39s
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          3m39s
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          3m39s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试k8s能否故障恢复<br> 测试方法：将development服务中的3个pod删除1个，之后集群会跟进配置的3副本再启动一个新node。<br> 操作如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#当前运行的三个node 时间也一样
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get pods -n development            
NAME                                   READY   STATUS    RESTARTS   AGE
pod-info-deployment-7b697c564d-w4mlt   1/1     Running   0          24m
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          24m
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          24m
#删除1个node
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl delete pod pod-info-deployment-7b697c564d-w4mlt -n development
pod &quot;pod-info-deployment-7b697c564d-w4mlt&quot; deleted
^C% 
#再次查看其中1个node name变了 而且运行时间短
╭─localhost@MacBook-Pro ~ 
╰─$ kubectl get pods -n       development
NAME                                   READY   STATUS    RESTARTS   AGE
pod-info-deployment-7b697c564d-6fg5x   1/1     Running   0          34s
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          26m
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          26m

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过事件日志查看pod运行情况<br> 1、获取命名空间的pod服务信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods -n development
NAME                                   READY   STATUS    RESTARTS   AGE
pod-info-deployment-7b697c564d-6fg5x   1/1     Running   0          5d21h
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          5d21h
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          5d21h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、通过 describe pod 查看某个命名空间显具体pod的详细信息</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl describe pod pod-info-deployment-7b697c564d-6fg5x -n development
Name:             pod-info-deployment-7b697c564d-6fg5x
Namespace:        development
Priority:         0
Service Account:  default
Node:             minikube/192.168.49.2
Start Time:       Sat, 26 Oct 2024 01:32:53 +0800
Labels:           app=pod-info
                  pod-template-hash=7b697c564d
Annotations:      &lt;none&gt;
Status:           Running
IP:               10.244.0.8
IPs:
  IP:           10.244.0.8
Controlled By:  ReplicaSet/pod-info-deployment-7b697c564d
Containers:
  pod-info-container:
    Container ID:   docker://4a7845e78feac55c79e9eb8f2f993655e2e0573e3fd2a06e87d9b8474f15c090
    Image:          kimschles/pod-info-app:latest
    Image ID:       docker-pullable://kimschles/pod-info-app@sha256:fa4f33bc2301bb242bdd078ac206d0e379dfed2e225d46a6952ff444ae6f4a7a
    Port:           3000/TCP
    Host Port:      0/TCP
    State:          Running
      Started:      Sat, 26 Oct 2024 01:33:06 +0800
    Ready:          True
    Restart Count:  0
    Environment:
      POD_NAME:       pod-info-deployment-7b697c564d-6fg5x (v1:metadata.name)
      POD_NAMESPACE:  development (v1:metadata.namespace)
      POD_IP:          (v1:status.podIP)
    Mounts:
      /var/run/secrets/kubernetes.io/serviceaccount from kube-api-access-pdtg2 (ro)
Conditions:
  Type                        Status
  PodReadyToStartContainers   True 
  Initialized                 True 
  Ready                       True 
  ContainersReady             True 
  PodScheduled                True 
Volumes:
  kube-api-access-pdtg2:
    Type:                    Projected (a volume that contains injected data from multiple sources)
    TokenExpirationSeconds:  3607
    ConfigMapName:           kube-root-ca.crt
    ConfigMapOptional:       &lt;nil&gt;
    DownwardAPI:             true
QoS Class:                   BestEffort
Node-Selectors:              &lt;none&gt;
Tolerations:                 node.kubernetes.io/not-ready:NoExecute op=Exists for 300s
                             node.kubernetes.io/unreachable:NoExecute op=Exists for 300s
Events:                      &lt;none&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用BusyBox检查应用程序<br> 1、创建一个运行BusyBox的pod，默认命名空间，1个副本就行<br> vim busybox.yaml</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>---
apiVersion: apps/v1
kind: Deployment
metadata:
  name: busybox
  namespace: default
  labels:
    app: busybox
spec:
  replicas: 1
  selector:
    matchLabels:
      app: busybox
  template:
    metadata:
      labels:
        app: busybox
    spec:
      containers:
      - name: busybox-container
        image: busybox:latest
        # Keep the container running
        command: [ &quot;/bin/sh&quot;, &quot;-c&quot;, &quot;--&quot; ]
        args: [ &quot;while true; do sleep 30; done;&quot; ]
        resources:
          requests:
            cpu: 30m
            memory: 64Mi
          limits:
            cpu: 100m
            memory: 128Mi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建BusyBox pod</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl apply -f busybox.yaml 
deployment.apps/busybox created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>3、查看是否启动</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods
NAME                       READY   STATUS    RESTARTS   AGE
busybox-574654f4cb-fldrp   1/1     Running   0          59s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、获取pod附加信息和K8s的IP地址</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods -n development -o wide                                                     
NAME                                   READY   STATUS    RESTARTS   AGE     IP           NODE       NOMINATED NODE   READINESS GATES
pod-info-deployment-7b697c564d-6fg5x   1/1     Running   0          5d22h   10.244.0.8   minikube   &lt;none&gt;           &lt;none&gt;
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          5d23h   10.244.0.5   minikube   &lt;none&gt;           &lt;none&gt;
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          5d23h   10.244.0.6   minikube   &lt;none&gt;           &lt;none&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>5、进入pod内运行命令</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl exec -it busybox-574654f4cb-fldrp -- /bin/sh
/ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>6、测试k8s内的pod网络是否可以连通</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/ # wget 10.244.0.8:3000
Connecting to 10.244.0.8:3000 (10.244.0.8:3000)
saving to &#39;index.html&#39;
index.html           100% |******************************************************************************|   103  0:00:00 ETA
&#39;index.html&#39; saved
/ # 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>7、退出busybox</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>/ # exit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>查看应用程序日志</p><p>1、获取命名空间中pod状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl get pods -n development        
NAME                                   READY   STATUS    RESTARTS   AGE
pod-info-deployment-7b697c564d-6fg5x   1/1     Running   0          6d21h
pod-info-deployment-7b697c564d-wrgsz   1/1     Running   0          6d21h
pod-info-deployment-7b697c564d-z4rk6   1/1     Running   0          6d21h
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、是用logs获取pod节点运行日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>kubectl logs pod-info-deployment-7b697c564d-6fg5x -n development                                                      
undefined
Example app listening on port 3000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[参考]</p>`,78),f={href:"https://kubernetes.io/zh-cn/docs/concepts/overview/",target:"_blank",rel:"noopener noreferrer"};function A(y,E){const t=a("CodeTabs"),u=a("ExternalLinkIcon");return v(),o("div",null,[h,l(t,{id:"315",data:[{id:"debian"},{id:"rpm"}],"tab-id":"shell"},{title0:i(({value:s,isActive:d})=>[n("debian")]),title1:i(({value:s,isActive:d})=>[n("rpm")]),tab0:i(({value:s,isActive:d})=>[g]),tab1:i(({value:s,isActive:d})=>[k]),_:1}),x,e("ul",null,[e("li",null,[e("a",f,[n("https://kubernetes.io/zh-cn/docs/concepts/overview/"),l(u)])])])])}const _=c(p,[["render",A],["__file","Kubernetes.html.vue"]]);export{_ as default};
