---
icon: fab fa-markdown
date: 2023-11-24
category:
   - Linux
tag:
  - tools
star: true
sticky: true
---

# Kubernetes
## 1、部署架构的发展
![](../../.vuepress/public/assets/images/runtime.svg)
- 1、统部署方式：
> 应用直接在物理机上部署，机器资源分配不好控制，出现Bug时，可能机器的大部分资源被某个应用占用，导致其他应用无法正常运行，无法做到应用隔离。

- 2、虚拟机部署
> 在单个物理机上运行多个虚拟机，每个虚拟机都是完整独立的系统，性能损耗大。

- 3、容器部署
> 所有容器共享主机的系统，轻量级的虚拟机，性能损耗小，资源隔离，CPU和内存可按需分配

## 2、既然有了Docker那k8s解决了什么问题？
- 单机Docker很好用，但是服务器上百台、上千台时，每次加机器、软件更新、版本回滚，都会变得非常麻烦; 如果容器发生故障，需要手动启动另一个容器
- Kubernetes 提供集中式的管理集群机器和应用，加机器、版本升级、版本回滚、不停机的灰度更新、确保高可用、高性能、高扩展。

## 3、Kubernetes 提供：
- 服务发现和负载均衡
> Kubernetes 可以使用 DNS 名称或自己的 IP 地址来暴露容器。 如果进入容器的流量很大， Kubernetes 可以负载均衡并分配网络流量，从而使部署稳定。
- 存储编排
> Kubernetes 允许你自动挂载你选择的存储系统，例如本地存储、公共云提供商等。
- 自动部署和回滚
> 你可以使用 Kubernetes 描述已部署容器的所需状态， 它可以以受控的速率将实际状态更改为期望状态。 例如，你可以自动化 Kubernetes 来为你的部署创建新容器， 删除现有容器并将它们的所有资源用于新容器。
- 自动完成装箱计算
> 你为 Kubernetes 提供许多节点组成的集群，在这个集群上运行容器化的任务。 你告诉 Kubernetes 每个容器需要多少 CPU 和内存 (RAM)。 Kubernetes 可以将这些容器按实际情况调度到你的节点上，以最佳方式利用你的资源。
- 自我修
> Kubernetes 将重新启动失败的容器、替换容器、杀死不响应用户定义的运行状况检查的容器， 并且在准备好服务之前不将其通告给客户端。
- 密钥与配置管
> Kubernetes 允许你存储和管理敏感信息，例如密码、OAuth 令牌和 SSH 密钥。 你可以在不重建容器镜像的情况下部署和更新密钥和应用程序配置，也无需在堆栈配置中暴露密钥。
- 批处理执行 
>除了服务外，Kubernetes 还可以管理你的批处理和 CI（持续集成）工作负载，如有需要，可以替换失败的容器。
- 水平扩缩 
>使用简单的命令、用户界面或根据 CPU 使用率自动对你的应用进行扩缩。
- IPv4/IPv6 双栈 
> 为 Pod（容器组）和 Service（服务）分配 IPv4 和 IPv6 地址。
- 为可扩展性设计 
> 在不改变上游源代码的情况下为你的 Kubernetes 集群添加功能。

## 4、k8s架构
一组工作机器，称为节点， 会运行容器化应用程序。每个集群至少有一个工作节点。

工作节点会托管 Pod，而 Pod 就是作为应用负载的组件。 控制平面管理集群中的工作节点和 Pod。 在生产环境中，控制平面通常跨多台计算机运行， 一个集群通常运行多个节点，提供容错性和高可用性。
![](../../.vuepress/public/assets/images/components-of-kubernetes.svg)

### 4.1、控制平面组件
控制平面组件会为集群做出全局决策，比如资源的调度。 以及检测和响应集群事件，例如当不满足部署的 replicas 字段时， 要启动新的 pod。

#### 4.1.1、kube-apiserver
API 服务器是 Kubernetes 控制平面的组件， 该组件负责公开了 Kubernetes API，负责处理接受请求的工作。 API 服务器是 Kubernetes 控制平面的前端。

Kubernetes API 服务器的主要实现是 kube-apiserver。 kube-apiserver 设计上考虑了水平扩缩，也就是说，它可通过部署多个实例来进行扩缩。 你可以运行 kube-apiserver 的多个实例，并在这些实例之间平衡流量。

#### 4.1.2、etcd
一致且高可用的键值存储，用作 Kubernetes 所有集群数据的后台数据库。

#### 4.1.3、kube-scheduler
kube-scheduler 是控制平面的组件， 负责监视新创建的、未指定运行节点（node）的 Pods， 并选择节点来让 Pod 在上面运行。

调度决策考虑的因素包括单个 Pod 及 Pods 集合的资源需求、软硬件及策略约束、 亲和性及反亲和性规范、数据位置、工作负载间的干扰及最后时限。

#### 4.1.4、kube-controller-manager
kube-controller-manager 是控制平面的组件， 负责运行控制器进程。

从逻辑上讲， 每个控制器都是一个单独的进程， 但是为了降低复杂性，它们都被编译到同一个可执行文件，并在同一个进程中运行。

有许多不同类型的控制器。以下是一些例子：
- 节点控制器（Node Controller）：负责在节点出现故障时进行通知和响应
- 任务控制器（Job Controller）：监测代表一次性任务的 Job 对象，然后创建 Pods 来运行这些任务直至完成
- 端点分片控制器（EndpointSlice controller）：填充端点分片（EndpointSlice）对象（以提供 Service 和 Pod 之间的链接）。
- 服务账号控制器（ServiceAccount controller）：为新的命名空间创建默认的服务账号（ServiceAccount）。

#### 4.1.5、cloud-controller-manager
一个 Kubernetes 控制平面组件， 嵌入了特定于云平台的控制逻辑。 云控制器管理器（Cloud Controller Manager） 允许你将你的集群连接到云提供商的 API 之上， 并将与该云平台交互的组件同与你的集群交互的组件分离开来。

cloud-controller-manager 仅运行特定于云平台的控制器。 因此如果你在自己的环境中运行 Kubernetes，或者在本地计算机中运行学习环境， 所部署的集群不需要有云控制器管理器。
与 kube-controller-manager 类似，cloud-controller-manager 将若干逻辑上独立的控制回路组合到同一个可执行文件中， 供你以同一进程的方式运行。 你可以对其执行水平扩容（运行不止一个副本）以提升性能或者增强容错能力。

下面的控制器都包含对云平台驱动的依赖：
- 节点控制器（Node Controller）：用于在节点终止响应后检查云提供商以确定节点是否已被删除
- 路由控制器（Route Controller）：用于在底层云基础架构中设置路由
- 服务控制器（Service Controller）：用于创建、更新和删除云提供商负载均衡器

### 4.2、Node组件
节点组件会在每个节点上运行，负责维护运行的 Pod 并提供 Kubernetes 运行环境。

#### 4.2.1、kubelet
kubelet 会在集群中每个节点（node）上运行。 它保证容器（containers）都运行在 Pod 中。

kubelet 接收一组通过各类机制提供给它的 PodSpec，确保这些 PodSpec 中描述的容器处于运行状态且健康。 kubelet 不会管理不是由 Kubernetes 创建的容器。

#### 4.2.2、kube-proxy
kube-proxy 是集群中每个节点（node）上所运行的网络代理， 实现 Kubernetes 服务（Service） 概念的一部分。

kube-proxy 维护节点上的一些网络规则， 这些网络规则会允许从集群内部或外部的网络会话与 Pod 进行网络通信。

如果操作系统提供了可用的数据包过滤层，则 kube-proxy 会通过它来实现网络规则。 否则，kube-proxy 仅做流量转发。

#### 4.2.3、容器运行时（Container Runtime）
这个基础组件使 Kubernetes 能够有效运行容器。 它负责管理 Kubernetes 环境中容器的执行和生命周期。

Kubernetes 支持许多容器运行环境，例如 containerd、 CRI-O 以及 Kubernetes CRI (容器运行环境接口) 的其他任何实现。

## 5、安装
`minikube` 是一个工具， 能让你在本地运行 Kubernetes。

::: code-tabs#shell

@tab debian

```shell
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube_latest_amd64.deb
sudo dpkg -i minikube_latest_amd64.deb
```

@tab rpm

```shell
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-latest.x86_64.rpm
sudo rpm -Uvh minikube-latest.x86_64.rpm
```

:::


## 6、使用

### 6.1、minikube指令
通过运行以下命令启动集群：
```shell
minikube start
```
访问在 minikube 集群中运行的 Kubernetes 仪表板：
```shell
minikube dashboard
```
Minikube 使在浏览器中打开这个公开的端点变得容易：
```shell
minikube service hello-minikube
```
升级集群：
```shell
minikube start --kubernetes-version=latest
```
启动第二个本地集群（注意：如果 minikube 使用裸机/无驱动程序，这将不起作用）：
```shell
minikube start -p cluster2
```
停止本地群集：
```shell
minikube stop
```
删除本地集群：
```shell
minikube delete
```
删除所有本地集群和配置文件
```shell
minikube delete --all
```

### 6.2、k8s指令
启动服务器：kubectl
```shell
kubectl create deployment hello-minikube --image=kicbase/echo-server:1.0
```
将服务公开为 NodePort
```shell
kubectl expose deployment hello-minikube --type=NodePort --port=8080
```

[参考]
- https://kubernetes.io/zh-cn/docs/concepts/overview/