---
layout: post
title: "“如何翻墙”系列：扫盲 Tor Browser 7.5——关于 meek 插件的配置、优化、原理"
date: 2018-04-12T21:21:00+08:00
author: 编程随想
from: https://program-think.blogspot.com/2018/04/gfw-tor-browser-7.5-meek.html
tags: [ 编程随想 ]
categories: [ 编程随想 ]
---

<div class="post hentry uncustomized-post-template">
 <a name="4252055166448016455">
 </a>
 <h1 class="post-title entry-title">
  <a href="https://program-think.blogspot.com/2018/04/gfw-tor-browser-7.5-meek.html">
   “如何翻墙”系列：扫盲 Tor Browser 7.5——关于 meek 插件的配置、优化、原理
  </a>
 </h1>
 <div class="post-header">
  <div class="post-header-line-1">
   <div class="post-inner-index">
   </div>
  </div>
 </div>
 <div class="post-body entry-content">
  <h2>
   ★引子
  </h2>
  <br/>
  3年前（2014年10月），Tor 官网发布了全新的 Tor Browser 4.0 版本——该版本引入了 meek 这个牛逼的流量混淆插件，可以让 Tor 在墙内独立联网。
  <br/>
  当年俺已经写过一篇教程（在“
  <a href="https://program-think.blogspot.com/2014/10/gfw-tor-meek.html">
   这里
  </a>
  ”），跟大伙儿分享 meek 使用心得（包括：安装、配置、优化、技术原理）。
  <br/>
  如今三年半过去了，Tor Browser 已经发展到 7.5 版本，（与 4.0 相比）配置界面有很多变化。上周，某热心读者在博客评论区提议，要俺更新一下 meek 的教程，于是有了今天这篇。
  <br/>
  <a name="more">
  </a>
  <!--program-think-->
  <br/>
  <br/>
  <h2>
   ★Tor 是啥？
  </h2>
  <br/>
  Tor 是洋文“The Onion Router”的缩写，中文又称“洋葱网络/洋葱路由”。
  <br/>
  它是一款非常老牌的翻墙工具（老网民亲切地称之为：戴“套”翻墻）。说它是翻墙工具，其实贬低它了——它不仅仅可以翻墙，还是一款很牛B 的【隐匿性工具】——在你上网时，帮你隐匿自己的【真实公网 IP】。
  <br/>
  关于 Tor 的更多介绍，请看《
  <a href="https://program-think.blogspot.com/2013/11/tor-faq.html">
   “如何翻墙”系列：关于 Tor 的常见问题解答
  </a>
  》。（不熟悉 Tor 的同学，最好先看完那篇，然后再看本文）
  <br/>
  <br/>
  <br/>
  <h2>
   ★前些年，为啥 Tor 无法在天朝内【独立联网】？
  </h2>
  <br/>
  大约在2010年的两会期间，GFW 开始全面屏蔽 Tor 在全球的节点（包括网桥）——也就是把这些节点都列入“IP 黑名单”。从那之后，天朝之内的 Tor 就很难独立联网了。
  <br/>
  顺便说一下：
  <br/>
  从2010到2014年，虽然 Tor 在墙内无法【独立】联网，但是可以利用双重代理的方式，借助其它翻墙工具联网，教程参见《
  <a href="https://program-think.blogspot.com/2012/03/howto-cover-your-tracks-5.html">
   如何隐藏你的踪迹，避免跨省追捕[5]：用多重代理隐匿公网IP
  </a>
  》。
  <br/>
  <br/>
  <br/>
  <h2>
   ★为啥 meek 插件可以帮 Tor【复活】？
  </h2>
  <br/>
  <h3>
   ◇原理概述
  </h3>
  <br/>
  在本文开篇处俺提到：Tor Browser 从 4.0 版本开始，内置了 meek 流量混淆插件。有了这个插件，可以把 Tor 流量伪装成访问云计算平台的流量。当你的数据流量到达云计算平台之后，会经过一系列中转（具体的技术原理，本文末尾有简介），最终转向你真正访问的网站。
  <br/>
  这么做的好处在于：
  <br/>
  1. 由于传输流量经过伪装，GFW 比较难区分“伪装的 Tor 流量”和“真正访问云计算的普通流量”。
  <br/>
  2. 由于 meek 依赖的这几个云计算平台都是大公司（亚马逊、微软）提供的，GFW 不太敢随便封杀它们的公网 IP 地址。
  <br/>
  注：meek 的这种手法，技术行话称之为【依附的自由】。
  <br/>
  <br/>
  <h3>
   ◇优点
  </h3>
  <br/>
  1.
  <br/>
  这几个大公司的云平台，有很多国内的商业公司也在用，GFW 不敢轻易封锁这几个云计算平台的“服务器 IP”。
  <br/>
  <br/>
  2.
  <br/>
  俺初步使用下来，感觉线路还是比较稳定。
  <br/>
  <br/>
  3.
  <br/>
  由于 Tor 本身就是多重代理（默认三重），所以当你用 Tor + meek 翻墙，你的“公网IP”的隐匿性会明显高于其它“单重代理”的工具（比如：VPN、自由门、无界）
  <br/>
  <br/>
  <h3>
   ◇缺点
  </h3>
  <br/>
  1.
  <br/>
  速度还不够快。俺自测的结果，大约是几十个 KB/s（字节率）。这个速度看视频肯定没戏，看网页还可以。
  <br/>
  希望今后可以有明显的改善——比如 Tor 社区部署更多的 meek 网桥；或者对代码和架构进行优化。
  <br/>
  注：有热心读者反馈说速度可以达到 100KB/s，俺估计不同的省份或者不同的 ISP，效果可能不同。
  <br/>
  <br/>
  <br/>
  <h2>
   ★基本使用教程
  </h2>
  <br/>
  先扫盲一下最基本的使用：如何配置 Tor Browser，让它走 meek 类型的网桥。
  <br/>
  <br/>
  <h3>
   ◇获取安装包
  </h3>
  <br/>
  <b>
   通过官网下载
  </b>
  <br/>
  首先，你要到 Tor 的
  <a href="https://www.torproject.org/" rel="nofollow" target="_blank">
   官网
  </a>
  去下载。下载页面在”
  <a href="https://www.torproject.org/download/download-easy.html" rel="nofollow" target="_blank">
   这里
  </a>
  “。
  <br/>
  这个页面上提供了 Windows、Linux、Mac OS 三大平台的下载链接；并且也提供了不同语言（包括中文）的安装包——点击下载页面的“Other Languages”就可以选语言。
  <br/>
  <br/>
  <b>
   通过 BT Sync/Resilio Sync 获取
  </b>
  <br/>
  俺提供了一个 BTsync 网盘，里面包含各种常见翻墙工具，Tor Browser 也在其中。该网盘的同步密钥是：
  <br/>
  <blockquote style="font-family:Courier,monospace;">
   BTLZ4A4UD3PEWKPLLWEOKH3W7OQJKFPLG
  </blockquote>
  顺便说一下：
  <br/>
  如果你想使用 BTsync，建议先看如下这几篇教程：
  <br/>
  《
  <a href="https://program-think.blogspot.com/2015/01/BitTorrent-Sync.html">
   扫盲 BTSync（Resilio Sync）——不仅是同步利器，而且是【分布式】网盘
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2017/08/GFW-Resilio-Sync.html">
   聊聊 GFW 如何封杀 Resilio Sync（BTSync）？以及如何【免翻墙】继续使用？
  </a>
  》
  <br/>
  <br/>
  <h3>
   ◇安装
  </h3>
  <br/>
  安装过程的第一步会让你选择安装界面的语言。不熟悉洋文的同学，可以先切换为【chinese】。
  <br/>
  整个安装过程很傻瓜化，没啥好说的。你就照着安装向导一步步往下走，既可。
  <br/>
  <br/>
  <h3>
   ◇网络配置
  </h3>
  <br/>
  第一次运行 Tor Browser 会出现如下网络设置的对话框。只需按照俺给出的截图进行配置，就可以让 Tor 通过 meek 插件联网。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/tgONa9umvDR_FKBnH9UdTXz4xlmq6A64ok_gU4LP_eRCwnlnKVexQiuK4mNulAV8sF2VqikjhC2ckpavl-LPQH_bSSmOfmIWTJxHQLLoIJqF47cG6pcjCpDx6hj49ZeDeBc1IWplt8w"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/Zhf2WZ5FA4_lxaD3VlvKOxdGV5dst3lOM17LtOZFXLYRqgM838d4_iQu4ce9KMfNcvuI4uB1lhVwARCrEo0B2ERcCqTdcfN8qANkQMH4zw7EeeWHMtl77aWbcdAhYQi7lDxL1ffBpuA"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/9hfXaLU_WgR9DBMBck3ZwgVFEgu7yDPa7Sjzepy1kfqWJZC7HllObPf_F99NzwBqnMq75yH7UV9HNw5PV_1orGjzJi9Mo2ABm13E7EZRadblTcWDhmA02s4rNhQGA-3iSp7csu4Ngqc"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/doNzefWoPCmEO44_wKs21alBvxr74RDQjo_yS7y0zAZuKwUTJvtUjn4OfJAgA2cYTjHUSbGxy4NwLusUjnfb5nVyINe_Mplxv5JAluoHrgVffuRZGPuSMn6INxi7C3OIpiJ51ioQK1o"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/Z3BS-Eun0txgQEsuqbTAX3mTrEXia76uS1d9A7TRbQR4_GObytNa-E58zjUEMXMzPE4e_NNHz6xP9y_D3_RSud1nCPseZ98K1l5u_jE5aiG00KkRUsJweWtpZqqd4GaJ0ZKvLcwLb4s"/>
  </center>
  <br/>
  <h3>
   ◇版本升级
  </h3>
  <br/>
  如果你启动了 Tor Browser 之后，看到如下提示，说明 Tor Browser 内置的 Firefox 需要升级版本。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/FlaWC45lp9FasInsVlrXOB64PG8QRUmB46SP0aQSEopksjHy_xb_bcCI8hITkydQs6ruzkEuJsCnVH7cIZntrgVasWKPa6-j6oGJDrKbHqC2u7iUcS9cysPaRyWLyxLO8yBDjcZ-J-0"/>
  </center>
  <br/>
  先点击如下菜单项，就会弹出升级的对话框，并自动下载最新版本的 Tor Browser。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/xtUgbLQf0GsERDs7r98zaOdG2Sn1rCrbd2ww5UVUtuE690_YKfA9WGlVsT-nA3rQdopUuMA6lq0X9IJnsvIKVDDm5BU-WqvH31Wk7px_XT2Lds_ErtZItYLKB_wXQ3E8u7_yLgtAhIY"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/saCSp8VjbQEVIfb8j1pb2AloEz6dgYo9ur94XDhv1yGTTUH3wa_4JpVzZwU6BmPaMdVfCJ6sr7WEn3FammWbkaCof6ponOk6l9gc31EWjY2u4DMpw8vy1tx7hi4QIylBkA7nYxiABHs"/>
  </center>
  <br/>
  <h3>
   ◇安全设置
  </h3>
  <br/>
  还有一个“安全设置”的功能，也简单说一下。先点击如下菜单项。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/CIbQBu4yaiJJB76VFL3jR7gD2-d9p3RW_zwGGleolHbzPF16cr3hpBzf_1-FwaluGc_O7zOcV-Hw9bTLC8Z9wo0zNpquWlauOgW0FVwf515c5EUMuD9G17hImXooAItkbzuFqYhF55Y"/>
  </center>
  <br/>
  然后会弹出一个对话框。通过移动对话框左侧的滑块，可以切换不同的安全等级（共3级）。具体截图如下：
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/T7BgSaXUOav4cZslkgTCrDnUm505vGZQuUeNCGx1o0SFoVm0U4_9jTKutxUEZCkxot8m1F6Q2_kyFeH_R-FZ8hLTsW0o8ic0-I0H2kWVX8v_8_rdNkSkx-gcSeEVAzmQKMmNCOw6Jd0"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/0pSchusPNN_IgjkHp6ABh6DgK385eEWrPXGeWM8pVeaA4HU1Urf_SXEOSVmXijDkCKkpf4QYuZoxEI72zYBkIRYZ0u6dMvun3huR3gy8Hs5Z2KFTUHbA70-zoyxwRFBsRjlD2iC5wDM"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/X5uMp2T6gQwEsctGzqx_8apnuttHUM2r0HpH2S9IcA-3pDwxOcb1mQ2vla0X5E2l-ANmctxi2K4i9Kws2lopzVZ7fYkfdzEvfv69e88ClpOYVW-o2uQCW8MdcIvwiiQx6nfo4j1CjPA"/>
  </center>
  <br/>
  <br/>
  <h2>
   ★常见问题解答（FAQ）
  </h2>
  <br/>
  <h3>
   ◇Tor Browser 提供的 SOCKS 代理，端口号是多少？
  </h3>
  <br/>
  Tor Browser 内置了 Tor。这个内置的 Tor 会在本机地址（
  <code>
   127.0.0.1
  </code>
  ）开启一个 SOCKS 的监听端口。
  <br/>
  Tor Browser Bundle 软件包从
  <code>
   2.3.25
  </code>
  版本开始，其内部 Tor 提供的 SOCKS 监听端口号改为
  <code>
   9150
  </code>
  ，而 Tor 的其它软件包（比如 Tor Expert Bundle）继续使用
  <code>
   9050
  </code>
  作为 SOCKS 代理的端口号。
  <br/>
  由于端口号的改动，导致很多翻墙的同学，把端口号设错了，功亏一篑 :(
  <br/>
  <br/>
  <h3>
   ◇如何让【本机】的第三方软件通过 Tor Browser 联网？
  </h3>
  <br/>
  这个问题要分两种情况来描述——关键看第三方软件是否支持 SOCKS 代理。
  <br/>
  <br/>
  <b>
   第三方软件支持 SOCKS 代理
  </b>
  <br/>
  前面说了：Tor Browser 内置的 Tor 会在本机地址（
  <code>
   127.0.0.1
  </code>
  ）开启一个 SOCKS 端口，端口号是
  <code>
   9150
  </code>
  <br/>
  因此，如果某个网络软件跟 Tor Browser 安装在同一个操作系统中，那么该软件就可以利用 Tor Browser 内置的 Tor，进行翻墙。
  <br/>
  举例1：
  <br/>
  假如你不喜欢 Tor Browser 内置的 Firefox，喜欢用自己的 Chrome。那么你可以设置 Chrome，让 Chrome 走 Tor 提供的 SOCKS 代理。
  <br/>
  举例2：
  <br/>
  假设你想让自己的 Skype 走 Tor 的线路，同样也可以修改 Skype 的代理设置，让 Skype 走 Tor 的线路联网。
  <br/>
  <br/>
  <b>
   第三方软件只支持 HTTP 代理，【不】支持 SOCKS 代理
  </b>
  <br/>
  这种情况就稍微麻烦一些——你需要利用 Privoxy 这款牛X的工具，来实现【HTTP 代理转 SOCKS 代理】。关于 Privoxy 的扫盲教程，俺在3年前（2014）写过一篇（如下），本文这里就不再多费口水了。
  <br/>
  《
  <a href="https://program-think.blogspot.com/2014/12/gfw-privoxy.html">
   如何用 Privoxy 辅助翻墙？
  </a>
  》
  <br/>
  <br/>
  <h3>
   ◇如何【跨机器】共享 Tor Browser 的翻墙通道？
  </h3>
  <br/>
  要想【跨机器】共享 Tor Browser 的翻墙通道，同样要考虑第三方软件是否支持 SOCKS 代理。关于这点，前一个小节已经介绍过了，此处不再罗嗦。
  <br/>
  下面介绍两个招数——“招数1”是专门针对 Tor 的；“招数2”是通用的（也可以用于其它翻墙工具）。
  <br/>
  <br/>
  <b>
   招数1：修改 Tor 的配置文件
  </b>
  <br/>
  在 Tor Browser 的安装目录下搜索
  <code>
   torrc
  </code>
  文件。找到后用记事本（notepad）打开，在该文件末尾新增一行，内容如下。
  <br/>
  <pre style="font-family:Courier,monospace;">SOCKSPort  0.0.0.0:9150</pre>
  修改完记得保存，然后记得重启 Tor Browser。之后，Tor 的监听端口就会绑定到
  <code>
   0.0.0.0
  </code>
  这个地址——意思就是说，任何地址（任何机器）都可以连接到 Tor 的监听端口。
  <br/>
  （唠叨一下：如果要跨机器共享 Tor 的 SOCKS 端口，别忘了修改防火墙的配置，允许
  <code>
   9150
  </code>
  端口的 TCP 连入）
  <br/>
  <br/>
  <b>
   招数2：端口转发
  </b>
  <br/>
  除了上述方法，你还可以参考俺之前的博文《
  <a href="https://program-think.blogspot.com/2013/01/cross-host-use-gfw-tool.html">
   多台电脑如何共享翻墙通道
  </a>
  》。此文中介绍了两种常见的“端口转发”方式。
  <br/>
  端口转发的好处是：跟具体的翻墙软件无关——既可以用于 Tor，也可以用于其它的翻墙代理。
  <br/>
  <br/>
  <h3>
   ◇如何剥离“内置的 Firefox”？
  </h3>
  <br/>
  经过俺的初步研究：如果你想用 meek 插件，就【没办法】剥离内置的 Firefox。因为 Tor 的这个 meek 插件需要 Firefox 才能正常工作。
  <br/>
  虽然无法剥离，但还是有希望进行一些优化滴。请看下一节。
  <br/>
  <br/>
  <h3>
   ◇Tor Browser 可以做成免安装的绿色版吗？
  </h3>
  <br/>
  可以！
  <br/>
  比较简单的做法是：
  <br/>
  1. 先安装一遍
  <br/>
  2. 配置好 meek
  <br/>
  3. 把安装目录打个压缩包
  <br/>
  然后就可以把这个压缩包拿到其它电脑上，解压并运行。
  <br/>
  <br/>
  <br/>
  <h2>
   ★如何优化“内置的 Firefox”？
  </h2>
  <br/>
  本小节针对如下两种人：
  <br/>
  1. 想用自己的浏览器，不喜欢 Tor Browser 内置的 Firefox
  <br/>
  2. 只拿 Tor 来充当翻墙代理，完全不需要用到浏览器
  <br/>
  <br/>
  <h3>
   ◇为啥需要优化？
  </h3>
  <br/>
  当你按照前面的基本教程，把 Tor Browser 启动起来并利用 meek 这个流量混淆插件翻墙成功。这时候 Tor Browser 会在内存中运行如下几个进程（请看截图）。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/RmK77OACn1tLlUpXpQ2bHLpAV7tPIyAojXgKoIabO4fnCHzO6YIj0RVWl5Ex1_ZudW2bKfvGIp0shnfk1jpqNB3-A0CBWaE4kEzPsMfsYLPwzL5BgyxeoKxQz5G4dxJ9uzG5"/>
  </center>
  <br/>
  截图中显示的是进程的父子关系（术语叫“进程树”）。Windows 内置的“任务管理器”只能显示“进程列表”，无法显示“进程树”。俺这里用的是【Process Explorer】（该工具由微软官网提供，链接在“
  <a href="https://technet.microsoft.com/en-us/sysinternals/bb896653.aspx" rel="nofollow" target="_blank">
   这里
  </a>
  ”）
  <br/>
  只要你眼睛没瞎，自然会发现：在 Tor Browser 的进程树中，有两个 Firefox 进程。这是咋回事捏？俺来解释一下：
  <br/>
  【最上面】的那个 Firefox 对应的就是你看到的 Firefox 浏览器界面。而【下面】那个 Firefox 是用来跟 meek 插件搭配的（俺猜测是用来进行网络流量转发）。这也就是为啥俺刚才说【Firefox 没法剥离】。因为 Firefox 参与了 meek 插件的工作。
  <br/>
  现在，假设你不想用内置的 Firefox，想用别的浏览器，那么最上面的那个 Firefox 进程对你而言就是多余的（而且浪费了你的系统内存）。但是没有它，你又没法启动 Tor，咋办捏？
  <br/>
  <br/>
  <h3>
   ◇如何优化？
  </h3>
  <br/>
  俺想了一个解决办法：
  <b>
   不依赖【内置的】 Firefox，直接启动 Tor（以及 meek 插件）
  </b>
  。操作步骤如下：
  <br/>
  <br/>
  <b>
   1. 先正常启动一次
  </b>
  <br/>
  你先根据俺前面介绍的教程，把 Tor Browser 正常启动一次，并配置好 meek 插件。
  <br/>
  <br/>
  <b>
   2. 制作一个启动脚本（bat 批处理文件）
  </b>
  <br/>
  首先，俺准备了一个 BAT 脚本（由于这个脚本很简单，只有一行，就不放到网盘上了）。这个脚本的内容如下：
  <br/>
  <blockquote style="font-family:Courier,monospace;">
   .\TorBrowser\Tor\tor.exe --defaults-torrc .\TorBrowser\Data\Tor\torrc-defaults -f .\TorBrowser\Data\Tor\torrc DataDirectory .\TorBrowser\Data\Tor GeoIPFile .\TorBrowser\Data\Tor\geoip GeoIPv6File .\TorBrowser\Data\Tor\geoip6
  </blockquote>
  <br/>
  把上述内容复制下来，用记事本（notepad）保存成某个批处理文件（记得扩展名要用
  <code>
   .bat
  </code>
  ，比如说就叫
  <code>
   run.bat
  </code>
  ）。
  <br/>
  友情提醒一下：上述内容总共只有一行，中间【不要】出现换行/回车。
  <b>
   保存的时候，文件编码用 ANSI，【不要用】UTF8
  </b>
  <br/>
  <br/>
  <b>
   3. 把上述脚本放置到 Tor Browser 的主目录下
  </b>
  <br/>
  假设你把 Tor Browser 安装到 XXX 目录，那么俺所说的“主目录”就是：XXX 目录下的 Browser 子目录
  <br/>
  （放置批处理文件的目录【一定不要搞错】，否则运行不了）
  <br/>
  <br/>
  <b>
   4. 运行上述脚本
  </b>
  <br/>
  这步很简单——只需在资源管理器里面双击这个 bat 文件，既可。运行之后会弹出一个黑色的命令行窗口。
  <br/>
  这时候，如果你手头有 Process Explorer，再去查看系统中运行的进程，就会看到如下（截图）：
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/bcpS9wJQI3bxiIEWDiW-yTyFlPG_2vCp9O3hdF78gdBxqyHoGcr72Hy0FCM_vDt2P1lMBibGRxJ8gv9MjnYJdhtdkYonkXCqnpW66PP29n3c8zX04BUyUdb5b3CP_K0b0utn"/>
  </center>
  <br/>
  从截图中可以看出，原先的两个 Firefox 如今只剩下一个啦（节约了不少内存）。
  <br/>
  <br/>
  <h3>
   ◇其它平台
  </h3>
  <br/>
  由于俺的读者里面，以 Windows 用户居多，所以刚才举了 Windows 的例子（bat 脚本）。如果你用的是其它操作系统（Linux 或 Mac OS X），可以参照俺的例子，依样画葫芦。
  <br/>
  <br/>
  <br/>
  <h2>
   ★简介 meek 网桥的技术原理
  </h2>
  <br/>
  （如果你是技术菜鸟，本小节可以略过不看，以免浪费时间）
  <br/>
  <br/>
  <h3>
   ◇啥是“流量混淆”？
  </h3>
  <br/>
  首先，Tor 网络内部（从“你本机”一直到“出口节点”）的传输是强加密的，别人无法偷窥你的真实网络流量。除非 Tor 软件本身出现严重安全漏洞 或者 你碰到的“出口节点”是蜜罐。
  <br/>
  虽然别人无法偷窥你的真实上网内容，但是如果有人（比如：电信运营商）监控你的流量，可以判断出你在使用 Tor——（请注意：“判断流量类型”【不等于】“解密内容”）。
  <br/>
  而“流量混淆”的作用就是：把 Tor 流量伪装成其它的上网流量，让监控者看不出你在用 Tor。
  <br/>
  出于软件架构方面的考虑，“流量混淆”的功能不是做到 Tor 的核心软件中，而是通过插件的方式来提供。因为“混淆流量”的方式是多种多样的，用插件来扩展，就无需频繁改动核心模块的代码。
  <br/>
  <br/>
  <h3>
   ◇普通的“流量混淆插件”，有啥缺点？
  </h3>
  <br/>
  在 meek 之前，Tor 开源社区已经出过好几款流量混淆插件。俺就拿 obfsproxy 来举例——下面是 obfsproxy 的示意图。
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/1M-p-hMprj7T3Ba_XXVu2pfoBN4_2ujk8zPhfdunFjTjHbjtMqG44rAddHko4yIpSK2YVblmfzK9LpfgLpNaPrLFdsmpoJhGoHnH4kiBF3r5fqgA13Ap2dL9ezg5"/>
  </center>
  图中的“Tor client”和“obfsproxy client”在你本机，他们要正常工具，就需要先连接到“obfsproxy server”。
  <br/>
  虽然 GFW 无法区分被 obfsproxy 混淆过的流量，但是因为全球的 obfsproxy server 数量是有限的，GFW 可以把所有的“obfsproxy server”都加入“IP 黑名单”。如此一来，就足以让 obfsproxy 失效。
  <br/>
  <br/>
  <h3>
   ◇“meek 插件”有啥优点？
  </h3>
  <br/>
  meek 插件跟 obfsproxy 插件类似，也是 client/server 架构。meek client 也是跟 Tor client 一起运行在你本机。下面这张是 meek 的示意图（摘自 Tor 官网的文档）：
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/x5qtvlfMnuFXfRiBlJWvrowm-CdniQEIxiHQY0H8VFJftKf0yq3431KAQcwGiYCGmx6-wWYFNUlICm3wHKVWAthrCByxkhDzHvdbPCgNR6pvmc4Iq_4mKfSvfZSPtxzVPXdS"/>
  </center>
  <br/>
  从图中可以看出，meek 跟 obfsproxy 的主要差异在于：meek server 并不是直接暴露出来的。换句话说，你本机【不需要】直接连接 meek server，而是直接连接云计算平台的服务器（图中的“Frontend Server”）。
  <br/>
  如此一来，即便 GFW 知道 meek server 的 IP，并且封杀这些 IP，也【没有意义】。而云计算平台的 IP，GFW 又不敢封杀。这就是 meek 插件可以突破 GFW 的关键所在。
  <br/>
  <br/>
  如果你是 IT 技术人员，想更多地了解 meek 的机制，请看 Tor 官网的相关文档（链接在“
  <a href="https://trac.torproject.org/projects/tor/wiki/doc/meek" rel="nofollow" target="_blank">
   这里
  </a>
  ”，是洋文）
  <br/>
  <br/>
  <br/>
  <b>
   俺博客上，和本文相关的帖子（需翻墙）
  </b>
  ：
  <br/>
  《
  <a href="https://program-think.blogspot.com/2009/05/how-to-break-through-gfw.html">
   如何翻墙
  </a>
  》（传说中的翻墙入门教程，不定期更新）
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/11/tor-faq.html">
   关于 Tor 的常见问题解答
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2009/09/break-through-gfw-with-tor.html">
   戴“套”翻墻的方法
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/01/cross-host-use-gfw-tool.html">
   多台电脑如何【共享】翻墙通道——兼谈【端口转发】的几种方法
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2019/04/Proxy-Tricks.html">
   如何让【不支持】代理的网络软件，通过代理进行联网（不同平台的 N 种方法）
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2014/12/gfw-privoxy.html">
   如何用 Privoxy 辅助翻墙？
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2015/01/BitTorrent-Sync.html">
   扫盲 BTSync（Resilio Sync）——不仅是同步利器，而且是【分布式】网盘
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2017/08/GFW-Resilio-Sync.html">
   聊聊 GFW 如何封杀 Resilio Sync（BTSync）？以及如何【免翻墙】继续使用？
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/04/gfw-vpngate.html">
   扫盲 VPN Gate——分布式的 VPN 服务器
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2011/12/gfw-wujie.html">
   新版本无界——赛风3失效后的另一个选择
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2011/10/gfw-psiphon.html">
   双管齐下的赛风3
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2010/03/choose-free-gate.html">
   自由門——Tor 被封之后的另一个选择
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2011/09/gfw-vpn-hotspot-shield.html">
   扫盲 VPN 翻墙——以 Hotspot Shield 为例
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2012/06/gfw-i2p.html">
   简单扫盲 I2P 的使用
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2010/04/howto-cover-your-tracks-0.html">
   如何隐藏你的踪迹，避免跨省追捕
  </a>
  》（系列）
  <div class="post-copyright">
   <b>
    版权声明
   </b>
   <br/>
   本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者
   <a href="mailto:program.think@gmail.com">
    编程随想
   </a>
   和本文原始地址：
   <br/>
   <a href="https://program-think.blogspot.com/2018/04/gfw-tor-browser-7.5-meek.html" id="OriginalPostUrl">
    https://program-think.blogspot.com/2018/04/gfw-tor-browser-7.5-meek.html
   </a>
  </div>
  <div style="clear: both;">
  </div>
 </div>
 <div class="post-footer" style="margin-bottom:50px;">
  <div class="post-footer-line post-footer-line-1" style="display:none;">
   <span class="post-author vcard">
   </span>
   <span class="reaction-buttons">
   </span>
   <span class="star-ratings">
   </span>
   <span class="post-icons">
   </span>
   <span class="post-backlinks post-comment-link">
   </span>
  </div>
  <div class="post-footer-line post-footer-line-2 post-toolbar">
  </div>
  <div class="post-footer-line post-footer-line-3">
   <span class="post-location">
   </span>
  </div>
 </div>
</div>

