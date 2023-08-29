---
icon: fab fa-markdown
date: 2022-01-12
category:
  - Middleware
tag:
  - tools
star: true
sticky: true
---

# Docker

[[toc]]
---
# Docker
## 安装docker

<CodeGroup>
  <CodeGroupItem title="ubuntu_docker_install.sh" active>

```bash
#!/usr/bin/bash
 
sudo apt-get remove docker
sudo apt-get remove docker-engine
sudo apt-get remove docker.io
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y
curl -fsSL https://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.aliyun.com/docker-ce/linux/ubuntu  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io -y
```

  </CodeGroupItem>

  <CodeGroupItem title="centos_docker_install.sh">

```bash
#!/usr/bin/bash

yum -y update
yum remove docker  docker-client \
docker-client-latest docker-common \
docker-latest docker-latest-logrotate \
docker-logrotate docker-engine

yum install -y yum-utils device-mapper-persistent-data lvm2
yum-config-manager --add-repo http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
yum install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

systemctl enable docker.service
systemctl restart docker
```

  </CodeGroupItem>
</CodeGroup>

## 启动docker
```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## docker命令
#### docker image
```sh
#查看服务器中docker 镜像列表：
docker images

#搜索镜像：
docker search [镜像名]

#拉取镜像：
docker pull 镜像名 
docker pull 镜像名:tag

#运行镜像:
docker run 镜像名
docker run 镜像名:Tag
docker stop containerId // containerId 是容器的ID

#修改镜像：
docker ps
docker commit x7205xxxxxx1 sequenceiq/hadoop-docker:2.7.0-7

#删除一个
docker rmi -f 镜像名/镜像ID

#删除全部镜像  -a 意思为显示全部, -q 意思为只显示ID
docker rmi -f $(docker images -aq)

#强制删除镜像
docker image rm 镜像名称/镜像ID

#保存镜像(将我们的镜像 保存为tar 压缩文件 这样方便镜像转移和保存 ,然后 可以在任何一台安装了docker的服务器上 加载这个镜像)
docker save -o rocketmq.tar

#加载镜像(任何装 docker 的地方加载镜像保存文件,使其恢复为一个镜像)
docker load --input rocketmq.tar 或 docker load < rocketmq.tar
```

```sh
#文件映射
docker run -v /etc/config：/etc/config my_image

#文件cp
docker cp /mnt/c/Users/wxx/Downloads/kafka_2.12-2.1.2.tar.gz 64222xxx110:/usr/local/
```
### docker 容器
```sh
#查看正在运行的容器列表
docker ps

#查看所有容器
docker ps -a

#创建并启动容器
> docker run -itd --name=kylin-test --net=host kylin-os-backup:latest /bin/bash
```

## Dockerfile
### 本地文件
#### 创建dockerfile项目
```bash
$ mkdir redis && cd redis
$ touch Dockerfile
```
```txt
FROM centos
RUN yum -y install wget \
    && wget -O redis.tar.gz "http://download.redis.io/releases/redis-5.0.3.tar.gz" \
    && tar -xvf redis.tar.gz \
    && rm redis.tar.gz
```
#### 构建
```bash
docker build -t redis:test .
```
#### 运行
```bash
docker run -d -p 6379:6379 --name redis redis:test
```

### git构建
```bash
docker build -t hello-world https://github.com/docker-library/hello-world.git#master:amd64/hello-world
```

### 标准输入构建
```bash
docker build -t mybusybox:latest -<<EOF
FROM busybox
RUN echo "hello world"
EOF
```


## 例子
> 启动一个本地hadoop镜像

### 拉取镜像
```bash
docker pull sequenceiq/hadoop-docker:2.7.1
```

### 使用镜像
```bash
#后台运行
sudo docker run -dti -p 50070:50070 -p 9000:9000 -p 8088:8088 -p 8040:8040 -p 8042:8042  \
-p 49707:49707  -p 50010:50010  -p 50075:50075  -p 50090:50090 -p 2181:2181 -p 9092:9092 \
sequenceiq/hadoop-docker:2.7.0 /etc/bootstrap.sh -bash --privileged=true
```
### 测试：
hdfs-ui
http://localhost:50070/dfshealth.html#tab-overview

yarn-ui
http://localhost:8088/cluster/apps/RUNNING