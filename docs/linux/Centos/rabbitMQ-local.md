---
sidebar_position: 3
---

# 安装RabbitMQ(离线安装)

## 安装erlang

由于rabbitmq是基于erlang语言开发的，所以必须先安装erlang。

## 安装依赖

``` bash
yum -y install gcc glibc-devel make ncurses-devel openssl-devel xmlto perl wget gtk2-devel binutils-devel
```

erlang官网：

<https://www.erlang.org/downloads>

下载（会比较慢，请耐心等待）

``` bash
wget http://erlang.org/download/otp_src_22.0.tar.gz
```

解压

``` bash
tar -zxvf otp_src_22.0.tar.gz
```

移走

``` bash
mv otp_src_22.0 /usr/local/
```

切换目录

``` bash
cd /usr/local/otp_src_22.0/
```

创建即将安装的目录

``` bash
mkdir ../erlang
```

配置安装路径

``` bash
./configure --prefix=/usr/local/erlang
```

安装

``` bash
make install
```

查看一下是否安装成功

``` bash
ll /usr/local/erlang/bin
```

添加环境变量

``` bash
echo 'export PATH=$PATH:/usr/local/erlang/bin' >> /etc/profile
```

刷新环境变量

``` bash
source /etc/profile
```

甩一条命令

``` bash
erl
```

在里面输入halt().命令退出来（那个点号别忘记）

## 安装RabbitMQ

rabbitmq下载地址：
<https://github.com/rabbitmq/rabbitmq-server/releases/tag/v3.7.15>

下载

``` bash
wget https://github.com/rabbitmq/rabbitmq-server/releases/download/v3.7.15/rabbitmq-server-generic-unix-3.7.15.tar.xz
```

由于是tar.xz格式的所以需要用到xz，没有的话就先安装

``` bash
yum install -y xz
```

第一次解压

``` bash
/bin/xz -d rabbitmq-server-generic-unix-3.7.15.tar.xz
```

第二次解压

``` bash
tar -xvf rabbitmq-server-generic-unix-3.7.15.tar
```

移走

``` bash
mv rabbitmq_server-3.7.15/ /usr/local/
```

改名

``` bash
mv /usr/local/rabbitmq_server-3.7.15  rabbitmq
```

配置环境变量

``` bash
echo 'export PATH=$PATH:/usr/local/rabbitmq/sbin' >> /etc/profile
```

刷新环境变量

``` bash
source /etc/profile
```

创建配置目录

``` bash
mkdir /etc/rabbitmq
```

## 启动命令

启动：

``` bash
rabbitmq-server -detached
```

停止：

``` bash
rabbitmqctl stop
```

状态：

``` bash
rabbitmqctl status
```

防火墙之类的请自行处理（5672和15672端口），反正我是从来不开防火墙。

## WEB管理

开启web插件

``` bash
rabbitmq-plugins enable rabbitmq_management
```

访问：<http://127.0.0.1:15672/>
默认账号密码：guest guest（这个账号只允许本机访问）

## 用户管理

查看所有用户

``` bash
rabbitmqctl list_users
```

添加一个用户

``` bash
rabbitmqctl add_user zhaobl 123456
```

配置权限

``` bash
rabbitmqctl set_permissions -p "/" zhaobl ".*" ".*" ".*"
```

查看用户权限

``` bash
rabbitmqctl list_user_permissions zhaobl
```

设置tag

``` bash
rabbitmqctl set_user_tags zhaobl administrator
```

删除用户（安全起见，删除默认用户）

``` bash
rabbitmqctl delete_user guest
```

## 登陆

配置好用户之后重启一下rabbit

然后就可以用新账号进行登陆