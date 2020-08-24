---
layout: post
title: "报告：中国的防火长城已经封锁加密服务器名称指示（ESNI） - iYouPort"
date: 2020-08-07T22:49:04+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%8a%a5%e5%91%8a%ef%bc%9a%e4%b8%ad%e5%9b%bd%e7%9a%84%e9%98%b2%e7%81%ab%e9%95%bf%e5%9f%8e%e5%b7%b2%e7%bb%8f%e5%b0%81%e9%94%81%e5%8a%a0%e5%af%86%e6%9c%8d%e5%8a%a1%e5%99%a8%e5%90%8d%e7%a7%b0%e6%8c%87/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-14821 post type-post status-publish format-standard hentry category-289 tag-esni tag-gfw" id="post-14821">
 <header class="entry-header">
  <h1 class="entry-title">
   报告：中国的防火长城已经封锁加密服务器名称指示（ESNI）
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/onoketa/" rel="author" title="由onoketa发布">
    onoketa
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published updated" datetime="2020-08-08T06:49:04+08:00">
    2020年8月8日
   </time>
  </span>
  <span class="word-count">
   2 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   我们于2020年7月30日
   <a href="https://mailarchive.ietf.org/arch/msg/tls/YzT5LjLJ_6WWhdnU2wVsKNKR6_I/" rel="nofollow">
    报告
   </a>
   (
   <a href="https://web.archive.org/web/20200801221253/https://mailarchive.ietf.org/arch/msg/tls/YzT5LjLJ_6WWhdnU2wVsKNKR6_I/" rel="nofollow">
    存档
   </a>
   )中国封锁了带有ESNI扩展的TLS连接。初次封锁见于2020年7月29日。
  </p>
  <p>
   我们确认中国的防火长城（GFW）已经开始封锁ESNI这一TLS1.3和HTTPS的基础特性。我们在本文中实证性地展示如何触发审查，并研究”残余审查”的延续时长。 我们还将展示7种用
   <a href="https://geneva.cs.umd.edu" rel="nofollow">
    Geneva
   </a>
   发现的基于客户端或服务端的绕过审查策略。
  </p>
  <h2>
   什么是加密服务器名称指示（ESNI）？
  </h2>
  <p>
   TLS是网络通讯的安全基础（HTTPS）。TLS提供的认证加密使得用户可以确定他们在与谁通讯， 并确保通讯信息不被中间人看到或篡改。 虽然TLS可以隐藏用户通讯的
   <em>
    内容
   </em>
   ，但其并不能总是隐藏与用户通讯的
   <em>
    对象
   </em>
   。 比如TLS握手可以携带一个叫做加密服务器名称指示（SNI）的扩展, 这个扩展帮助客户端告诉服务器其想要访问的网站的域名。 包括中国在内的审查者利用这一扩展来检查并阻止用户访问特定的网站。
  </p>
  <p>
   TLS1.3引入了加密SNI（ESNI）。 简而言之就是用加密了的SNI阻止中间人查看客户端要访问的特定网站。 （更多ESNI的益处请见
   <a href="https://blog.cloudflare.com/encrypted-sni/" rel="nofollow">
    Cloudflare的介绍文章
   </a>
   ）。 ESNI
   <a href="https://www.usenix.org/system/files/foci19-paper_chai_update.pdf" rel="nofollow">
    有让审查HTTPS流量变得更加困难的潜能
   </a>
   ; 因为不知道用户使用ESNI访问的网站，审查者要么不封锁任何ESNI连接，要么封锁所有的ESNI连接。 我们现在确认中国的审查者选择了后者。
  </p>
  <h2>
  </h2>
  <h2>
   主要结论
  </h2>
  <ul>
   <li>
    GFW通过丢弃从客户端到服务器的数据包来阻止ESNI连接。
   </li>
   <li>
    封锁可以从GFW内外双向触发。
   </li>
   <li>
    <code>
     0xffce
    </code>
    扩展标识是触发封堵的必要条件。
   </li>
   <li>
    封锁可以发生在1到65535的所有端口上。
   </li>
   <li>
    一旦GFW阻断了一个连接，残留的审查就会继续阻断与（原IP，目标IP，目标端口）三元组相关的所有TCP流量，持续120或180秒。
   </li>
   <li>
    我们已经发现了6种可以部署于客户端和4种可以部署于服务端的规避策略。
   </li>
  </ul>
  <h2>
  </h2>
  <h2>
   我们是怎么知道的？
  </h2>
  <p>
   我们写了一个简单的Python程序，它可以：
  </p>
  <ol>
   <li>
    完成与指定服务器的TCP握手；
   </li>
   <li>
    然后发送一个带有ESNI扩展名的TLS ClientHello消息；ClientHello的指纹和Firefox 79.0所发送的一样正常。
   </li>
  </ol>
  <p>
   我们让程序发送带有ESNI的ClientHello消息。我们既尝试了从墙内向墙外发送，也尝试了从墙外向墙内发送。我们同时采集客户端和服务端两边的流量进行分析，我们确保发送ClientHello的服务器会完成TCP握手，但不会向客户端发送任何数据包，也不会首先关闭连接。所有的实验都在7月30日到8月6日之间进行。
  </p>
  <h2>
  </h2>
  <h2>
   关于封锁的细节
  </h2>
  <h3>
  </h3>
  <h3>
   通过丢弃数据包来阻止，而不是注入RST
  </h3>
  <p>
   对比两端捕获的流量，我们发现GFW通过丢弃从客户端到服务器的数据包来阻止ESNI连接。
  </p>
  <p>
   这与GFW对其他常用协议的阻断方式有两点不同。 首先，GFW审查SNI和HTTP的方式是向服务器和客户端注入伪造的TCP RST。但是我们没有观察到GFW注入任何数据包来阻断ESNI流量。其次，GFW通过丢弃
   <em>
    服务器到客户端
   </em>
   的流量封锁Tor和
   <a href="https://gfw.report/blog/gfw_shadowsocks" rel="nofollow">
    Shadowsocks
   </a>
   服务器的端口和IP；然而，GFW会丢弃
   <em>
    客户端到服务器
   </em>
   的ESNI流量。
  </p>
  <p>
   我们还注意到，GFW在丢弃TCP包时，并不区分TCP包的标志。（这与伊朗的一些审查系统不同，后者不丢弃带有RST或FIN标志的数据包。）
  </p>
  <h3>
  </h3>
  <h3>
   封堵可以双向触发
  </h3>
  <p>
   我们发现封堵是可以双向触发的。 换句话说，从防火墙外向防火墙内发送一个ESNI握手，和从防火墙内向外发送一样，都可以触发审查。
  </p>
  <p>
   得益于这种双向性，人们可以在不控制任何位于中国的服务器的情况下，从GFW外部远程测试这种基于ESNI的审查。 我们指出，除了ESNI审查外，GFW对DNS、HTTP、SNI、FTP、SMTP和Shadowsocks的审查也可以从墙外进行测量。
  </p>
  <h4>
  </h4>
  <h4>
   GFW对ESNI进行审查，但不封锁没有SNI扩展的ClientHello
  </h4>
  <p>
   我们确认没有ESNI和SNI扩展的TLS ClientHello不能触发封锁。 换句话说，
   <code>
    encrypted_server_name
   </code>
   扩展的
   <code>
    0xffce
   </code>
   扩展标识是触发封堵的必要条件。
  </p>
  <p>
   我们将ClientHello中的
   <code>
    0xffce
   </code>
   替换为
   <code>
    0x7777
   </code>
   然后进行测试。替换后，发送这样的ClientHello就不能再触发封锁了。
  </p>
  <p>
   这个确认是很重要的，因为有人观察到其他审查者可能会屏蔽
   <a href="https://github.com/net4people/bbs/issues/10#issuecomment-532035677">
    任何没有SNI扩展的ClientHello消息
   </a>
   ，这将导致ESNI和
   <a href="https://tlsfingerprint.io/static/frolov2019.pdf" rel="nofollow">
    无SNI
   </a>
   都会被屏蔽。
  </p>
  <h4>
  </h4>
  <h4>
   新的扩展值还未被封锁
  </h4>
  <p>
   <a href="https://pad.riseup.net/p/xCRfphD5CoxmbFcpc1s2" rel="nofollow">
    riseup pad
   </a>
   上的匿名人士指出， 现有的ESNI使用
   <code>
    0xffce
   </code>
   作为扩展值（详见
   <a href="https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni-01" rel="nofollow">
    Section 8.1
   </a>
   ）。 但时新的ECH使用
   <code>
    0xff02
   </code>
   ，
   <code>
    0xff03
   </code>
   和
   <code>
    0xff04
   </code>
   作为扩展值（
   <a href="https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni-07" rel="nofollow">
    Section 11.1
   </a>
   ). 我们确认这些新的扩展值还未被封锁。
  </p>
  <p>
   具体而言， 我们把一个能够触发审查的ClientHello的
   <code>
    0xffce
   </code>
   替换为了
   <code>
    0xff02
   </code>
   ，
   <code>
    0xff03
   </code>
   和
   <code>
    0xff04
   </code>
   。 发送修改后的ClientHello不能触发审查。
  </p>
  <h4>
  </h4>
  <h4>
   GFW需要看到一个完整的TCP握手以触发ESNI封锁
  </h4>
  <p>
   我们发现GFW需要看到一个完整的TCP握手以触发ESNI封锁。
  </p>
  <p>
   我们从外部对中国的服务器进行了两次实验。在第一个实验中，在没有发送任何SYN包的情况下，我们的客户端每2秒发送一个带ESNI扩展的ClientHello消息。在第二个实验中，我们的客户端每2秒发送一个SYN数据包和一个带ESNI扩展的ClientHello消息；但服务器不会响应任何数据包（也不会发送SYN+ACK来完成握手）。
  </p>
  <p>
   在每次实验中，我们都发送了10条ClientHello消息。结果发现没有触发过任何审查或残余审查。所有的ClientHello消息实际上都到达了服务器。这个结果表明，在触发基于ESNI的审查之前，TCP握手是必要条件。 这也表明，与GFW基于SNI的审查机类似，ESNI的审查机也是有状态的。
  </p>
  <h4>
  </h4>
  <h4>
   封锁发生在所有端口上
  </h4>
  <p>
   我们发现ESNI封锁不仅会发生在443端口，也会发生在1到65535的所有端口。
  </p>
  <p>
   具体来说，我们从外部向中国服务器的1-65535的每个端口连续发送了两次ESNI握手。 对于每个端口，我们先发送一次ESNI握手；然后在连接超时后（20秒后），我们再尝试与服务器完成一次TCP握手。如果第二次没有收到服务器发来的SYN+ACK，我们就认为该端口被封锁了。 结果是，在1到65535的所有端口上都观察到了对ESNI的封锁。这个特性可以让我们高效地测试ESNI封锁，因为我们可以对同一IP地址的多个端口进行同时测试。
  </p>
  <h4>
  </h4>
  <h4>
   审查残留
  </h4>
  <p>
   我们发现在阻断ESNI握手后，GFW会继续阻断与（源IP，目标IP，目标端口)3元组相关的任何连接一段时间。确切的审查残留时间可能会有所不同。我们观察到它有时持续120秒，有时持续180秒。我们注意到，在残留审查时间内发送额外的ESNI握手不会重置审查持续的定时器。这与之前观察到的基于SNI的拦截GFW的残余审查类似；而且它与伊朗的残余审查不同，在伊朗，
   <a href="https://geneva.cs.umd.edu/posts/iran-whitelister/" rel="nofollow">
    定时器将被重置
   </a>
   。
  </p>
  <p>
   这些发现部分基于以下实验。从外部，我们每秒向中国服务器的443端口发送一条ClientHello消息。 第一秒，第二秒和第121秒的TCP握手被接受。其他所有的握手尝试都不成功，因为由于残留的审查，
   <code>
    SYN
   </code>
   包甚至没有到达服务器。
  </p>
  <p>
   这个结果表明，与之前发现的GFW对SNI的残留审查类似，GFW也对ESNI也采用了残留审查。此外，第二秒的握手可以完成，意味着GFW至少需要1秒的时间来反应并启用拦截规则。
  </p>
  <h2>
  </h2>
  <h2>
   如何规避封锁？
  </h2>
  <p>
   <strong>
    Geneva(
    <em>
     Gen
    </em>
    etic
    <em>
     Eva
    </em>
    sion)
   </strong>
   是我们中位于马里兰大学的研究人员开发的一种遗传算法，它在进化过程中自动发现新的审查规避策略。 它在不影响原始连接的前提下，通过注入、替换、分割或丢弃数据包流来迷惑审查者。 与大多数反审查系统不同的是，它不需要在连接的两端都进行部署：它只在一方（客户端或服务器）运行。
  </p>
  <p>
   Geneva利用审查机器来实时地训练自己的遗传算法。 截至今日，其已经找到了许多可以规避不同国家审查的策略。 Geneva的审查规避策略描述了应该如何修改流量。 由于Geneva将不断发展这些策略，因此它们用领域特定语言(domain-specific language)来表达，这些语言构成了每个策略的 “DNA”。(关于Geneva的完整代码及文档，请参见
   <a href="https://github.com/kkevsterrr/geneva">
    我们的Github页面
   </a>
   )。
  </p>
  <p>
   要了解更多关于Geneva（或Geneva策略引擎）工作原理的信息，请参阅我们的
   <a href="https://geneva.cs.umd.edu/papers" rel="nofollow">
    论文
   </a>
   或
   <a href="https://geneva.cs.umd.edu/about" rel="nofollow">
    关于
   </a>
   页面。
  </p>
  <p>
   为了让Geneva能够直接利用GFW对ESNI审查进行训练，我们写了一个自定义的插件来执行以下步骤。
  </p>
  <ol>
   <li>
    Geneva在位于墙外的TCP服务器上随机开放一个端口。随机开放端口是为了避免此前审查的残留。
   </li>
   <li>
    Geneva驱动一个位于中国境内的TCP客户端连接到服务器。
   </li>
   <li>
    客户端发送一个带有加密SNI（ESNI）扩展的TLS 1.3 ClientHello。
   </li>
   <li>
    客户端休眠2秒，等待GFW审查机制启动。
   </li>
   <li>
    客户端发送一个简短的测试消息
    <code>
     "test"
    </code>
    来测试是否已经被审查。
   </li>
   <li>
    重复步骤4和5。
   </li>
   <li>
    服务器确认是否收到了客户端发送的完整的TLS ClientHello以及测试消息。如果收到了，该策略就会得到正向的适合度奖励；如果没有收到（或者客户端在发送测试消息时超时了），该策略就会受到惩罚。
   </li>
  </ol>
  <p>
   利用这个适合度函数，Geneva可以直接针对ESNI审查制度测试和训练策略。 在
   <em>
    短短几个小时内
   </em>
   ，它就发现了多个绕过审查的策略。在本节中，我们将详细描述它们。
  </p>
  <p>
   Geneva策略引擎在
   <a href="https://github.com/kkevsterrr/geneva">
    我们的Github
   </a>
   上是开源的，所以所有这些策略都可以被任何人部署和使用。由于它们在 TCP 层运行，因此可以应用于任何需要使用 ESNI 的应用程序：随着 Geneva 的运行，即使是未经修改的网络浏览器也可以成为一个简单的审查规避工具。
  </p>
  <p>
   请注意，Geneva
   <em>
    不是
   </em>
   通用的翻墙软件，也不提供任何额外的加密、隐私或保护。它是一个测试版的研究原型，而且它并没有针对速度进行优化。使用这些策略，风险自担。
  </p>
  <h3>
  </h3>
  <h3>
   策略
  </h3>
  <p>
   我们在48小时的时间里，从客户端和服务器端对Geneva进行了训练。我们总共发现了6种策略来打败对ESNI的封锁机制。其中有4个可以在服务器端使用，所有6个都可以在客户端使用。
  </p>
  <p>
   以下是TCP层的策略，只需部署在客户端，即可击败针对ESNI的封锁。
  </p>
  <p>
   <strong>
    策略 1: 三重
    <code>
     SYN
    </code>
   </strong>
  </p>
  <p>
   第一种客户端策略的工作原理是用
   <em>
    三个
   </em>
   <code>
    SYN
   </code>
   数据包启动TCP的三次握手，这样第三个
   <code>
    SYN
   </code>
   的序列号就是错误的。
  </p>
  <p>
   在Geneva的语法中，这个策略是这样的：
  </p>
  <p>
   <code>
    [TCP:flags:S]-duplicate(duplicate,tamper{TCP:seq:corrupt})-| \/
   </code>
  </p>
  <p>
   这种策略是对于GFW的跳出同步攻击（synchronization attack）。GFW会转而追踪这个新的错误序列号，而错过ESNI请求。
  </p>
  <p>
   这个策略也可以部署在服务端：
  </p>
  <p>
   <code>
    [TCP:flags:SA]-tamper{TCP:flags:replace:S}(duplicate(duplicate,tamper{TCP:seq:corrupt}),)-| \/
   </code>
  </p>
  <p>
   虽然这种策略使得服务器永远不会发送
   <code>
    SYN+ACK
   </code>
   数据包，但这并不会破坏三次握手。在三次握手过程中，服务器没有像往常一样发送一个
   <code>
    SYN+ACK
   </code>
   数据包，而是发送三个
   <code>
    SYN
   </code>
   数据包（第三个数据包的校验和是错误的）。
  </p>
  <p>
   第一个
   <code>
    SYN
   </code>
   数据包的作用是启动TCP的同步打开（Simultaneous Open），这是所有主流操作系统都支持的一个古老的TCP功能，用于处理两个TCP栈同时发送
   <code>
    SYN
   </code>
   数据包的情况。当客户端收到服务器发送的
   <code>
    SYN
   </code>
   时，客户端发送一个
   <code>
    SYN+ACK
   </code>
   数据包，服务器响应一个
   <code>
    ACK
   </code>
   来完成握手。这样就有效地将传统的三次握手改为四次握手。带有损坏序列号的
   <code>
    SYN
   </code>
   使GFW跳出同步（但被客户端忽略），成功地击败了封锁机制的同时并不伤害到原有连接。
  </p>
  <p>
   <strong>
    策略2：四字节分割
   </strong>
  </p>
  <p>
   我们发现的下一个策略也可以从客户端或服务器使用。在这个策略中，客户端将ESNI请求分为两段TCP发送，第一段TCP的长度小于或等于4个字节。
  </p>
  <p>
   客户端策略的Geneva语法是这样的：
   <code>
    [TCP:flags:PA]-fragment{tcp:4:True}-| \/
   </code>
  </p>
  <p>
   这已经不是Geneva第一次发现分段策略，但令人惊讶的是，这种策略在中国竟然有效。毕竟防火长城拥有著名的TCP重建能力已经有近十年了（见
   <a href="https://github.com/NullHypothesis/brdgrd">
    brdgrd
   </a>
   ）。TLS头是5个字节长，所以我们推测，像这样将TLS头分割到多个数据包中，打破了GFW将包含ESNI的数据包识别为TLS的能力。这对GFW如何通过指纹识别连接有有趣的影响：它表明GFW中负责识别的组件并不能从TCP层面中重组所有的上层协议。这一理论得到了Geneva过去所发现的其他基于分段的策略的支持（详见
   <a href="https://geneva.cs.umd.edu/papers/come-as-you-are.pdf" rel="nofollow">
    这篇论文
   </a>
   ）。
  </p>
  <p>
   这个策略也可以从服务器端触发。通过在三次握手期间减少TCP窗口大小，服务器可以强制客户端分割请求。在Geneva的语法中，可以通过以下方式实现：
   <code>
    [TCP:flags:SA]-tamper{TCP:window:replace:4}-| \/
   </code>
  </p>
  <p>
   <strong>
    策略3：TCB Teardown
   </strong>
  </p>
  <p>
   下一个策略是经典的TCB（TCP Control Block）Teardown：客户端向连接中注入一个带有错误的校验和的
   <code>
    RST
   </code>
   数据包。这将欺骗GFW，使其认为连接已被中断。
  </p>
  <p>
   在Geneva的语法中，这个策略看起来是这样的：
   <code>
    [TCP:flags:A]-duplicate(,tamper{TCP:flags:replace:RA}(tamper{TCP:chksum:corrupt},))-| \/
   </code>
  </p>
  <p>
   TCB Teardowns并不是什么新鲜事：
   <a href="https://www.usenix.org/conference/foci13/workshop-program/presentation/khattak" rel="nofollow">
    Khattak et al.
   </a>
   在几乎十年前就已经演示过了，Geneva过去也多次发现了针对GFW的
   <a href="https://geneva.cs.umd.edu/papers/geneva_ccs19.pdf" rel="nofollow">
    Teardown攻击
   </a>
   。
  </p>
  <p>
   令人惊讶的是，这种策略也可以从服务器端诱导。 在三次握手过程中，服务器可以发送一个带有错误ACK的
   <code>
    SYN+ACK
   </code>
   数据包，从而诱导客户端发送
   <code>
    RST
   </code>
   。这将导致
   <code>
    RST
   </code>
   的序列号不正确（ACK为0，但仍足以引起TCB Teardown）。
  </p>
  <p>
   <strong>
    策略4：
    <code>
     FIN+SYN
    </code>
   </strong>
  </p>
  <p>
   下一个策略似乎是另一种角度的跳出同步攻击。在这一策略中，客户端（或服务器）发送一个数据包，在三次握手过程中同时设置
   <code>
    FIN
   </code>
   和
   <code>
    SYN
   </code>
   。 客户端的Geneva语法是
   <code>
    [TCP:flags:A]-duplicate(tamper{TCP:flags:replace:FS},)-| \/
   </code>
   服务端的Geneva语法是
   <code>
    [TCP:flags:SA]-duplicate(tamper{TCP:flags:replace:FS},)-| \/
   </code>
  </p>
  <p>
   在过去，我们发现GFW在对其他协议进行审查时，对
   <code>
    FIN
   </code>
   数据包有特殊的处理。 似乎
   <code>
    FIN
   </code>
   的出现会使GFW立即同步到对当前连接的跟踪，但
   <code>
    SYN
   </code>
   的出现会使它认为实际的序列号与实际值相差
   <code>
    +1
   </code>
   ，使GFW与实际连接偏离1。
  </p>
  <p>
   我们对以上假设进行了测试：在这个策略运行的时候，将客户端实际请求的序列号增加1后，连接被阻断了。
  </p>
  <p>
   在服务端，这个策略不需要
   <code>
    FIN
   </code>
   就可以运行。
  </p>
  <p>
   <strong>
    策略5：TCB Turnaround
   </strong>
  </p>
  <p>
   TCB Turnaround策略很简单：在客户端发起三次握手之前，首先向服务器发送一个
   <code>
    SYN+ACK
   </code>
   数据包。
   <code>
    SYN+ACK
   </code>
   使让GFW混淆了客户机和服务器的角色，从而使客户端能够不受阻碍地进行通信。TCB Turnaround攻击在哈萨克斯坦仍然有效，但在GFW上，TCB Turnaround攻击对其他协议不起作用。
  </p>
  <p>
   在Geneva的语法中：
   <code>
    [TCP:flags:S]-duplicate(tamper{TCP:flags:replace:SA},)-| \/
   </code>
  </p>
  <p>
   该策略只适用于客户端，因为当
   <code>
    SYN
   </code>
   数据包到达服务器时，GFW已经知道哪一方是客户端了。
  </p>
  <p>
   <strong>
    策略6：TCB 跳出同步
   </strong>
  </p>
  <p>
   最后，Geneva发现了简单的基于载荷的TCB跳出攻击。从客户端，注入一个带有载荷和错误的校验和的数据包就足以使GFW跳出对当前连接的同步。 Geneva在研究GFW对其他协议的审查时，已经发现过这一策略了。
  </p>
  <p>
   Geneva的语法是这样的
   <code>
    [TCP:flags:A]-duplicate(tamper{TCP:load:replace:AAAAAAAAAA}(tamper{TCP:chksum:corrupt},),)-|
   </code>
  </p>
  <p>
   这个策略不能在服务器端使用。
  </p>
  <h3>
  </h3>
  <h3>
   对审查规避策略的总结
  </h3>
  <p>
   我们已经找到6种可以部署在客户端，和4种可以部署在服务端的审查规避策略。 每一种都有近乎100%的可靠性，并可以用于规避针对ESNI的审查。 遗憾的是，这些策略并非是一劳永逸的：就像猫捉老鼠一般，防火长城也会继续提升其审查能力。
  </p>
  <h2>
  </h2>
  <h2>
   未解决的问题
  </h2>
  <p>
   我们仍不清楚为和会观察到不同的残余审查时长。 与所有类似研究一样，在与我们所用节点不同的中国地区，可能存在着不同于我们所观察到的审查的方式。 如果你观察到了不同与上述的审查方式，或者我们的审查规避策略对你并不奏效， 尽请联系我们。
  </p>
  <h2>
  </h2>
  <h2>
   鸣谢
  </h2>
  <p>
   我们想在此感谢所有在
   <a href="https://pad.riseup.net/p/xCRfphD5CoxmbFcpc1s2" rel="nofollow">
    riseup留言板
   </a>
   上提问，反馈和建议的匿名人士。 这些评论帮助我们给予社区所最关心的问题更高的优先级，并从而加速了我们的研究。
  </p>
  <p>
   我们还感谢OONI和OTF社区所有人的支持。
  </p>
  <h2>
   联系我们
  </h2>
  <p>
   Geneva团队:
  </p>
  <ul>
   <li>
    Kevin Bock (
    <a href="https://geneva.cs.umd.edu/keys/kevin_pgp.asc" rel="nofollow">
     PGP key
    </a>
    )
   </li>
   <li>
    <a href="https://www.cs.umd.edu/~dml" rel="nofollow">
     Dave Levin
    </a>
    (
    <a href="https://geneva.cs.umd.edu/keys/dave_pgp.asc" rel="nofollow">
     PGP key
    </a>
    )
   </li>
  </ul>
  <p>
   <a href="https://gfw.report" rel="nofollow">
    GFW Report
   </a>
   :
  </p>
  <ul>
   <li>
    Anonymous (
    <a href="https://gfw.report/gfw_report.asc" rel="nofollow">
     PGP key
    </a>
    )
   </li>
   <li>
    <a href="https://people.cs.umass.edu/~amir" rel="nofollow">
     Amir Houmansadr
    </a>
    (
    <a href="https://people.cs.umass.edu/~amir/Amir%20Houmansadr%20(3C599DC4)%20%E2%80%93%20Public.asc" rel="nofollow">
     PGP key
    </a>
    )
   </li>
  </ul>
  <p>
   <a href="https://www.iyouport.org">
    iYouPort
   </a>
   :
  </p>
  <ul>
   <li>
    onoketa (
    <a href="http://keys.gnupg.net/pks/lookup?op=get&amp;search=0xF93249C1AFD15196">
     PGP key
    </a>
    )
   </li>
  </ul>
  <p>
   我们在censorship.ai，iyouport.org，gfw.report，net4people和ntc.party上同步更新了这篇报告。
  </p>
  <div id="atatags-1611829871-5f43b3a72a2fb">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-14821" href="https://www.iyouport.org/%e6%8a%a5%e5%91%8a%ef%bc%9a%e4%b8%ad%e5%9b%bd%e7%9a%84%e9%98%b2%e7%81%ab%e9%95%bf%e5%9f%8e%e5%b7%b2%e7%bb%8f%e5%b0%81%e9%94%81%e5%8a%a0%e5%af%86%e6%9c%8d%e5%8a%a1%e5%99%a8%e5%90%8d%e7%a7%b0%e6%8c%87/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-14821" href="https://www.iyouport.org/%e6%8a%a5%e5%91%8a%ef%bc%9a%e4%b8%ad%e5%9b%bd%e7%9a%84%e9%98%b2%e7%81%ab%e9%95%bf%e5%9f%8e%e5%b7%b2%e7%bb%8f%e5%b0%81%e9%94%81%e5%8a%a0%e5%af%86%e6%9c%8d%e5%8a%a1%e5%99%a8%e5%90%8d%e7%a7%b0%e6%8c%87/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Facebook 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-end">
      </li>
     </ul>
    </div>
   </div>
  </div>
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-14821-5f43b3a72acbe" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=14821&amp;origin=www.iyouport.org&amp;obj_id=161182987-14821-5f43b3a72acbe" id="like-post-wrapper-161182987-14821-5f43b3a72acbe">
   <h3 class="sd-title">
    赞过：
   </h3>
   <div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;">
    <span class="button">
     <span>
      赞
     </span>
    </span>
    <span class="loading">
     正在加载……
    </span>
   </div>
   <span class="sd-text-color">
   </span>
   <a class="sd-link-color">
   </a>
  </div>
  <div class="jp-relatedposts" id="jp-relatedposts">
   <h3 class="jp-relatedposts-headline">
    <em>
     相关
    </em>
   </h3>
  </div>
 </div>
 <div class="entry-footer">
  <ul class="post-tags light-text">
   <li>
    Tagged
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/esni/" rel="tag">
     ESNI
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/gfw/" rel="tag">
     GFW
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published updated" datetime="2020-08-08T06:49:04+08:00">
    2020年8月8日
   </time>
  </div>
 </div>
</article>

