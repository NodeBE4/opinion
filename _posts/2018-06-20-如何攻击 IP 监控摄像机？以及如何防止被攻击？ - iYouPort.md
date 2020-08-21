---
layout: post
title: "如何攻击 IP 监控摄像机？以及如何防止被攻击？ - iYouPort"
date: 2018-06-20T06:19:24+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%94%bb%e5%87%bb-ip-%e7%9b%91%e6%8e%a7%e6%91%84%e5%83%8f%e6%9c%ba%ef%bc%9f%e4%bb%a5%e5%8f%8a%e5%a6%82%e4%bd%95%e9%98%b2%e6%ad%a2%e8%a2%ab%e6%94%bb%e5%87%bb%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7795 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-attacks tag-iot tag-security tag-selfcare tag-technique tag-technology" id="post-7795">
 <header class="entry-header">
  <h1 class="entry-title">
   如何攻击 IP 监控摄像机？以及如何防止被攻击？
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/knowledge-node/" rel="category tag">
    Knowledge Node
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-06-20T14:19:24+08:00">
    2018年6月20日
   </time>
   <time class="updated" datetime="2019-08-10T14:23:03+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       请注意：这里是一些知识，至于您如何使用它们，我们仅希望道德观能发挥充分作用
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7796 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=800%2C532&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=768%2C511&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="532" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=800%2C532&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7796" data-recalc-dims="1" height="532" sizes="(max-width: 800px) 100vw, 800px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=800%2C532&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=768%2C511&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-1.jpeg?resize=272%2C182&amp;ssl=1 272w" width="800"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="7d9c">
   连接到物联网（IoT）的设备的安全性一直是个热门话题，特别是互联网协议（IP）监控摄像机，已经成为日益严重争议性主题。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="7d9f">
   IP 摄像机因其相对较高的计算能力和良好的流量吞吐量而成为骇客的首选目标。一个典型的例子就是 2016 年底发生的事件，其中一个名为
   <a class="bj cu kw kx ky kz" href="https://blog.trendmicro.com/trendlabs-security-intelligence/internet-things-ecosystem-broken-fix/">
    Mirai
   </a>
   的基于 Linux 的僵尸网络被用来制造历史上最大的 DDoS 攻击。数据包流量
   <a class="bj cu kw kx ky kz" href="https://www.tripwire.com/state-of-security/latest-security-news/100000-bots-infected-mirai-malware-caused-dyn-ddos-attack/">
    突然高出
   </a>
   正常数量的 50 倍，互联网流量估计达到 1.2 Tbps 的历史最高水平。流量由远程命令触发，被劫持的设备主要是 IP 监控摄像头。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="ed27">
   此后，Mirai 类恶意软件的多个变种陆续浮出水面，进一步利用易受攻击的 IP 监控摄像头。准确说就是，网络安全必需是 IP 监控设备的主要考虑因素，也是 IP 监控摄像机市场的新决定性因素。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e14c">
   <strong class="jy la">
    针对 IP 监控摄像头的动机
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="57a0">
   骇客入侵物联网设备的主要动机之一是获得经济收益，当然还有其他动机。在货币化方面，IP 监控摄像机作为目标有着与众不同的价值，原因如下：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj lb lc ld" data-selectable-paragraph="" id="966a">
    <strong class="jy la">
     持续连接
    </strong>
    。与许多其他设备一样，IP 摄像机需要通过互联网连接才能正常运行。然而，暴露于互联网也使骇客很容易找到该设备并利用它。一旦被入侵，这些设备将能够满足骇客所有需求。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="6a3b">
    <strong class="jy la">
     低投入
    </strong>
    。与攻击 PC 不同，
    <strong class="jy la">
     一旦骇客发现了破坏 IP 摄像机等物联网设备的方法，同样的方法通常就可以应用于其他类似型号的设备
    </strong>
    ，从而导致平均每个设备的攻击成本非常低。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="93f7">
    <strong class="jy la">
     缺乏监督
    </strong>
    。与 PC 不同，尤其是办公室中使用的 PC，IP 摄像机的用户交互性较低，并且在安全性方面管理不善。也没有安装售后市场的反恶意软件应用程序。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="50b9">
    <strong class="jy la">
     高性能
    </strong>
    。 IP 监控摄像机的空闲计算能力通常足以执行挖矿之类的活动，而不会被最终用户注意到。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="32d6">
    <strong class="jy la">
     高互联网带宽
    </strong>
    。为视频通信设计的“始终连接”、快速和巨大的带宽，使其成为骇客能够发起 DDoS 攻击的合适目标。
   </li>
  </ul>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e210">
   <strong class="jy la">
    典型的攻击链
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="4eca">
   IP 监控摄像机周围的典型攻击链包括以下步骤。
  </p>
  <p data-selectable-paragraph="">
   <img alt="" class="aligncenter size-full wp-image-7797 jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2.gif?resize=700%2C282&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="282" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2.gif?resize=700%2C282&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="700"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7797" data-recalc-dims="1" height="282" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2.gif?resize=700%2C282&amp;ssl=1" width="700"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="af28">
   1.
   <strong class="jy la">
    初次感染
   </strong>
   。在找到具有开放端口的设备（例如 Telnet，Secure Shell 和通用即插即用（UPnP））后，攻击者使用设备的默认凭据（与 Mirai 一样）或利用未修补的系统漏洞（与 Persirai 和 Reaper 一样）获取访问控制。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9d30">
   2.
   <strong class="jy la">
    指挥和控制
   </strong>
   。在获得对设备的控制之后，攻击者下载并执行向命令和控制 (C&amp;C) 服务器报告的恶意脚本或样本。该服务器发出命令，指示受影响的 IP 摄像机通过用户数据报协议泛洪执行恶意活动，如加密货币挖掘或其他设备上的 DDoS 攻击。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="2c5b">
   3.
   <strong class="jy la">
    传播
   </strong>
   。根据其类型，使用的恶意软件可以扫描网络并使用相同的感染方法将自身传播到其他易受攻击的设备。攻击者可以自动触发此操作 (如蠕虫僵尸网络的情况 wormlike botnets )，也可以通过接收来自 C&amp;C 服务器的指令手动触发此操作。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="dd43">
   <strong class="jy la">
    连不连互联网同样有风险
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="bea8">
   在传统的自助（DIY）消费市场中提供的大多数家用 IP 摄像机都直接连接到互联网。这意味着家庭 IP 摄像机以与家庭中的个人计算机非常相似的水平
   <strong class="jy la">
    暴露于互联网，但缺乏安装安全软件的用户能力
   </strong>
   。虽然家用 IP 摄像机仅占所有已安装设备的一小部分，但它们构成了一个快速增长的市场，因为它们越来越便宜并令一般公众拥有可访问性。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="73b9">
   另一方面，有些人声称 IP 摄像机没有暴露在这种风险水平下，因为大多数产品通常是为企业设计的，它们基本上在局域网中部署 IP 摄像机，并使其在互联网上无法被搜索。这种说法可能适用，但它也同时忽略了几个
   <strong class="jy la">
    现实世界的因素
   </strong>
   ：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj lb lc ld" data-selectable-paragraph="" id="a99a">
    系统集成商可能无法按预期安装 IP 摄像机。在许多情况下，人们只需选择哪种方法更方便他们安装所有内容并使设备正常工作。易于维护是他们选择这样做的另一个动力。这解释了为什么
    <strong class="jy la">
     仍然可以找到许多原本应该留在局域网内的 IP 摄像机的 IP 地址
    </strong>
    。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="2133">
    IP 摄像机的商业模式正在发生变化。服务提供商正在使用 IP 摄像机来运行定制服务（例如老年人护理），并且
    <strong class="jy la">
     使用互联网上的摄像机是用户和远程操作员同时根据需要访问摄像机的最简单方式
    </strong>
    。
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="2ad4">
    视频分析功能等现代增值功能通常都部署在所谓的
    <strong class="jy la">
     云端
    </strong>
    ，以降低整体硬件和软件的成本，可灵活地打开或关闭特定功能，或添加新功能，无论相机的硬件性能如何。
   </li>
  </ul>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="b37a">
   综上，将 IP 摄像机连接到互联网是一个明显的趋势。鉴于全球部署了大量 IP 摄像机，一小部分在公共领域暴露自己的 IP 摄像机完全可以成为骇客的一大动力。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="ee83">
   另一个需要考虑的事情是网络隔离是如何成为网络安全的常用方法之一。但是要注意，在局域网中并不能保证 IP 摄像机免受骇客攻击 — —
   <strong class="jy la">
    精心设计的恶意软件很容易在局域网中传播，任何携带到同一局域网的便携式设备都很容易变成感染矢量
   </strong>
   。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="8080">
   以臭名昭着的 Mirai 僵尸网络为例：即使目标是在 Linux 上运行的 IP 摄像机，基于 Windows 的木马也同样会发挥重要作用。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="c1fe">
   <strong class="jy la">
    IP 摄像机的分层防御
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="7ca6">
   IP 摄像机提供的完整功能通常包括摄像机本身、网络功能和云服务。为了提供一个安全的产品，制造商需要实现一个总体方针安全战略-从设备到云计算：
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="649b">
   1.
   <strong class="jy la">
    IP 摄像头硬件
   </strong>
   。 由于发现系统漏洞是黑客入侵IP摄像头的最关键因素之一，业内领先的制造商密切关注监控固件和修补易受攻击的系统组件。 但是，为了提高安全性，可以应用进一步的增强功能，例如：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj lb lc ld" data-selectable-paragraph="" id="6bbb">
    强制更改默认凭据；
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="f83c">
    应用安全启动以防止受损设备运行；
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="df64">
    如有必要，实施固件无线 (FOTA) 更新，以修补补丁问题；
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="5572">
    如果不必要，通过最小化设备上的开放端口来采用最少功能的原则。
   </li>
  </ul>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="2070">
   2.
   <strong class="jy la">
    网络
   </strong>
   。 在封闭网络中部署 IP 摄像机已经是一种高度采用的机制，可确保更高级别的安全性。虚拟专用网络 (VPN) 可用于通过安全连接启用远程访问。其他与网络相关的安全实现包括：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj lb lc ld" data-selectable-paragraph="" id="a75c">
    <strong class="jy la">
     加密
    </strong>
    连接以阻止尝试妥协；
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="4631">
    连接安全隧道；
   </li>
   <li class="jw jx ce bc jy b jz le kb lf kd lg kf lh kh li kj lb lc ld" data-selectable-paragraph="" id="2b0b">
    使用硬件组件存储
    <strong class="jy la">
     加密密钥
    </strong>
    。
   </li>
  </ul>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9d38">
   3.
   <strong class="jy la">
    云
   </strong>
   。 云服务提供的功能越多，安全性就越要命。 从好的方面来看，许多 (如果不是大多数的话) 服务提供商已经意识到了这一点。大多数领先的服务提供商都对其云基础架构提供足够的保护。 高度集成的安全产品 也在云环境中发挥着重要作用。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="b684">
   <strong class="jy la">
    物联网安全由各个环节的角色承担
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d772">
   与其他物联网设备一样，在完整的基于 IP 摄像头的应用程序中有许多移动部件。因此，在发生安全事故时，任何人都不能也不应该对此负全部责任。从网络安全的角度来看，我们相信每个人都在充分实现安全方面发挥作用。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="20ab">
   IP 监控系统的传统业务模式是一次性付款。在 DIY 市场中，最终用户只需购买 IP 摄像机并将其安装在现有网络环境中。更复杂的情况是将引入系统集成商，他们基本上为用户处理所有事情，包括选择正确的硬件，将它们固定在所需的位置，将它们连接到外发路由器，以及设置网络。如果没有计算维护合同的话，这也是一次性付款。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5b6f">
   随着越来越多的各方试图在 IP 监控服务的基础上货币化，许多不同的商业模式应运而生以满足不同的需求。监控服务提供商现在向用户收取月费，而不是一次性付费，互联网服务提供商（ISP）也是如此。
   <strong class="jy la">
    该业务的新参与者不仅为用户提供视频监控系统，还提供增值服务，如云录制和各种智能功能
   </strong>
   ……
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="33bc">
   到目前为止，这个行业中有关各方之间的界限越来越模糊。例如，Nest 不仅是 Nest Cam™ 监视摄像头的制造商，而且还是促进相关云记录服务的服务提供商。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="2775">
   无论行业中的所有工作组件如何，都有一些人和实体在监控系统的网络安全中发挥关键作用：
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="4b29">
   <strong class="jy la">
    设备制造商
   </strong>
   。对于设计和交付的每个功能，负责任的制造商应始终牢记安全考虑因素。有人可能会争辩说，用户经常忽略或忘记采用基本的安全措施，这可能只是当今全球普遍存在恶意软件的根本原因。各国政府现在正在关注这一问题。由美国政府运营的工业控制系统网络应急响应小组（ICS-CERT）不时披露现有 IP 摄像机产品的系统漏洞，以便更好地了解网络安全问题。此外，
   <a class="bj cu kw kx ky kz" href="https://mysmahome.com/news/38424/taiwan-drafts-security-standards-ip-camera-surveillance-applications/">
    台湾
   </a>
   政府正在制定一系列旨在确保设备网络安全的法规，其中至少有四分之一的 IP 摄像机在世界各地运输。像 UL 这样的安全科学公司也在开展网络
   <a class="bj cu kw kx ky kz" href="https://industries.ul.com/cybersecurity">
    安全验证计划
   </a>
   ，以进一步提高网络安全实施的可见度。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5c4f">
   <strong class="jy la">
    服务供应商
   </strong>
   。那些使用 IP 摄像机构建系统并运行其服务的人应该负责系统级别的网络安全。通过集成 IP 摄像机的基本功能和其他高级功能，服务提供商基本上塑造了整个系统 — 从设备到网络再到云端。服务提供商和集成商不仅将各种事物放在一起，而且还确保设备和系统在整个使用寿命期间按预期运行。正如他们所希望的那样，服务提供商必须优先考虑网络安全以及承诺的功能。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9805">
   <strong class="jy la">
    系统集成商
   </strong>
   。那些设置硬件和软件并启动一切以启动监控系统服务的人也在使用安全性方面发挥作用。功能最少的原则在这里是关键指导原则，并且根据需要实现尽可能多的功能是目标。未使用的功能，尤其是开放端口等网络功能，通常是骇客的捷径。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d2df">
   <strong class="jy la">
    最终用户
   </strong>
   。通常有安全指南或与 IP 摄像头产品一起使用的用户手册。通过阅读并按指示设置摄像机，在网络安全中起着至关重要的作用。例如，Mirai 的成功主要归因于更改默认密码失败。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="10aa">
   确定安全的角色和责任不是要知道自己是谁 ，而是要知道自己做了什么。在 DIY 市场中，家庭用户也扮演系统集成商的角色。以相同的方式，IP 摄像机供应商不仅扮演设备制造商角色而且扮演服务提供者角色，因为所有应用和云服务也由供应商自己开发和维护。在我们可以想到的所有场景中，可以发现通过将涉及的实体映射到上述四个角色中的任何一个，可以轻松地传达安全责任和责任。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e117">
   <strong class="jy la">
    从现在开始保持安全
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="58ab">
   尽管 IP 摄像机市场成熟，但围绕它们的网络安全问题对整个行业来说仍然是一个巨大的挑战。与其他物联网设备和服务一样，IP 摄像机的信息流是一个长链，攻击可以在任何地方出现。在物联网相关业务上货币化的公司已经在很长一段时间内开始了解“云安全”，并且网络连接上的网络安全也很重要。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="dd66">
   设备缺乏足够的网络安全实施是下一个需要解决的问题，不仅适用于 IP 监控行业，还适用于所有基于物联网的业务。一切都相互关联的世界可能看起来很棒，但只有拥有
   <a class="bj cu kw kx ky kz" href="https://www.trendmicro.com/us/iot-security/Solutions">
    足够的网络安全
   </a>
   ，这个互联世界才会像智能一样安全。但做到这点有着相当的难度。⚪️
  </p>
  <div id="atatags-1611829871-5f402e42e2b5b">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7795" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%94%bb%e5%87%bb-ip-%e7%9b%91%e6%8e%a7%e6%91%84%e5%83%8f%e6%9c%ba%ef%bc%9f%e4%bb%a5%e5%8f%8a%e5%a6%82%e4%bd%95%e9%98%b2%e6%ad%a2%e8%a2%ab%e6%94%bb%e5%87%bb%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7795" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%94%bb%e5%87%bb-ip-%e7%9b%91%e6%8e%a7%e6%91%84%e5%83%8f%e6%9c%ba%ef%bc%9f%e4%bb%a5%e5%8f%8a%e5%a6%82%e4%bd%95%e9%98%b2%e6%ad%a2%e8%a2%ab%e6%94%bb%e5%87%bb%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7795-5f402e42e330d" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7795&amp;origin=www.iyouport.org&amp;obj_id=161182987-7795-5f402e42e330d" id="like-post-wrapper-161182987-7795-5f402e42e330d">
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
    <a href="https://www.iyouport.org/tag/attacks/" rel="tag">
     attacks
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/iot/" rel="tag">
     IoT
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/selfcare/" rel="tag">
     selfcare
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technique/" rel="tag">
     technique
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-06-20T14:19:24+08:00">
    2018年6月20日
   </time>
   <time class="updated" datetime="2019-08-10T14:23:03+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

