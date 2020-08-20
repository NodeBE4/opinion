---
layout: post
title: "开源调查工具：情报地图、“黑客搜索”,及其他 #OSINT - iYouPort"
date: 2018-11-07T18:18:35+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%ef%bc%9a%e6%83%85%e6%8a%a5%e5%9c%b0%e5%9b%be%e3%80%81%e9%bb%91%e5%ae%a2%e6%90%9c%e7%b4%a2%e5%8f%8a%e5%85%b6%e4%bb%96-osint/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4791 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-technique tag-technology tag-tools" id="post-4791">
 <header class="entry-header">
  <h1 class="entry-title">
   开源调查工具：情报地图、“黑客搜索”,及其他 #OSINT
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
   <a href="https://www.iyouport.org/category/osint/" rel="category tag">
    OSINT
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-11-08T02:18:35+08:00">
    2018年11月8日
   </time>
   <time class="updated" datetime="2019-06-01T02:39:04+08:00">
    2019年6月1日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <div class="section-inner sectionLayout--insetColumn">
   <ul>
    <li class="graf graf--p graf-after--h3" id="dd25">
     <span style="color: #00ccff;">
      <em>
       <strong>
        想要更好地深入调查，挖掘信息的工具很重要 —— 有逻辑，有证据
       </strong>
      </em>
     </span>
    </li>
   </ul>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4792 jetpack-lazy-image" data-lazy-sizes="(max-width: 1024px) 100vw, 1024px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=1024%2C768&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?w=1024&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=300%2C225&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=768%2C576&amp;ssl=1 768w" data-recalc-dims="1" height="768" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=1024%2C768&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1024"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4792" data-recalc-dims="1" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=1024%2C768&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?w=1024&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=300%2C225&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-47.jpeg?resize=768%2C576&amp;ssl=1 768w" width="1024"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="9885">
    我们以前在诸多开源调查演示中已经陆续介绍过一些工具，本文专门介绍几种工具，及其有趣的用法。具体如何使用，要看您需要找的证据线索是什么，基于您最完美的逻辑，相信它们都有其最佳用途。在真相如此易于挖掘的当下时代，假消息和阴谋论理论上是没有存在空间的。但最重要的还是，
    <strong class="markup--strong markup--p-strong">
     需要更多人行动起来
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="f90a">
    开源情报（OSINT）是指来自公共来源的数据集合，用于情报环境，这类信息往往被链接爬行搜索引擎（如谷歌）所忽略，也就是说，大多数时候您无法通过常规搜索获得。此外，按照美国国防部的规定，OSINT 是“从公开获得的信息中产生的，并且可以及时收集，利用和传播给适当的受众，以满足特定的情报需求。”
   </p>
   <p class="graf graf--p graf-after--p" id="ba25">
    <strong class="markup--strong markup--p-strong">
     情报和信息不是同一种东西
    </strong>
    ，我们
    <a class="markup--anchor markup--p-anchor" data-href="https://medium.com/@iyouport/%E6%83%85%E6%8A%A5%E4%B8%8D%E6%98%AF%E7%AE%80%E5%8D%95%E7%9A%84%E4%BF%A1%E6%81%AF-iyouport-%E7%AD%94%E8%AF%BB%E8%80%85%E9%97%AE-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E8%80%8C%E5%AD%98%E5%9C%A8-%E4%B8%8B-b1f127d81cb2" href="https://medium.com/@iyouport/%E6%83%85%E6%8A%A5%E4%B8%8D%E6%98%AF%E7%AE%80%E5%8D%95%E7%9A%84%E4%BF%A1%E6%81%AF-iyouport-%E7%AD%94%E8%AF%BB%E8%80%85%E9%97%AE-%E5%85%B3%E4%BA%8E%E6%88%91%E4%BB%AC%E4%B8%BA%E4%BB%80%E4%B9%88%E8%80%8C%E5%AD%98%E5%9C%A8-%E4%B8%8B-b1f127d81cb2" rel="noopener noreferrer" target="_blank">
     在前面的文章中
    </a>
    简单介绍过。
   </p>
   <p class="graf graf--p graf-after--p" id="d12a">
    <strong class="markup--strong markup--p-strong">
     — — Talos — —
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="53b2">
    <a class="markup--anchor markup--p-anchor" data-href="https://www.talosintelligence.com/" href="https://www.talosintelligence.com/" rel="noopener nofollow noreferrer" target="_blank">
     Talos 情报地图
    </a>
    是一个世界地图，它可以实时报告全世界电子邮件流量数据。地图是互动的，如果你点击一个指示，就可以深入信息点，例如，通过点击北京方向的蓝色指示来获得下一个图像。
   </p>
   <p class="graf graf--p graf-after--p" id="ba77">
    您可以看到网上有很多关于谁产生的电子邮件流量的信息，在这种情况下它是合法流量，但
    <strong class="markup--strong markup--p-strong">
     查看垃圾邮件流或恶意软件类型的电子邮件
    </strong>
    会更有趣，对吧。
   </p>
   <p class="graf graf--p graf-after--p" id="03e2">
    首页左上角你会看到一个搜索框，可以搜索实时威胁数据。
   </p>
   <p class="graf graf--p graf-after--p" id="c128">
    在底部的图像中您会看到在美国生成的垃圾邮件呈爆炸状态。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4793 jetpack-lazy-image" data-lazy-sizes="(max-width: 894px) 100vw, 894px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=894%2C556&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?w=894&amp;ssl=1 894w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=300%2C187&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=768%2C478&amp;ssl=1 768w" data-recalc-dims="1" height="556" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=894%2C556&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="894"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4793" data-recalc-dims="1" height="556" sizes="(max-width: 894px) 100vw, 894px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=894%2C556&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?w=894&amp;ssl=1 894w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=300%2C187&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-48.jpeg?resize=768%2C478&amp;ssl=1 768w" width="894"/>
    </noscript>
    <img alt="" class="aligncenter size-full wp-image-4794 jetpack-lazy-image" data-lazy-sizes="(max-width: 894px) 100vw, 894px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=894%2C555&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?w=894&amp;ssl=1 894w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=300%2C186&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=768%2C477&amp;ssl=1 768w" data-recalc-dims="1" height="555" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=894%2C555&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="894"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4794" data-recalc-dims="1" height="555" sizes="(max-width: 894px) 100vw, 894px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=894%2C555&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?w=894&amp;ssl=1 894w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=300%2C186&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/00.jpeg?resize=768%2C477&amp;ssl=1 768w" width="894"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="552d">
    这不止是一个地图哦，根据页面顶部的栏目设置，有兴趣的人可以更多地了解所使用的产品和漏洞信息。
   </p>
   <p class="graf graf--p graf-after--p" id="e4c5">
    <strong class="markup--strong markup--p-strong">
     — — 卡巴斯基网络威胁实时地图 — —
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="1e8c">
    <a class="markup--anchor markup--p-anchor" data-href="https://cybermap.kaspersky.com/" href="https://cybermap.kaspersky.com/" rel="noopener nofollow noreferrer" target="_blank">
     卡巴斯基网络威胁实时地图
    </a>
    显示与公司实时发布的网络攻击方面有关的信息。这是一个三维呈现的地图，显示网络空间和主要威胁。
   </p>
   <p class="graf graf--p graf-after--p" id="b4cc">
    地图是互动的，所以您可以选择任何一个国家（比如选中国），你能获得一些重要信息，包括与最易受攻击排名中的位置相关联。
   </p>
   <p class="graf graf--p graf-after--p" id="bf41">
    地图可以被操控，放大，缩小并提供许多其他信息，尤其是关于攻击类型的信息，很重要。
   </p>
   <p class="graf graf--p graf-after--p" id="d9f8">
    画面很壮观的。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4795 jetpack-lazy-image" data-lazy-sizes="(max-width: 1024px) 100vw, 1024px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=1024%2C632&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?w=1024&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=300%2C185&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=768%2C474&amp;ssl=1 768w" data-recalc-dims="1" height="632" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=1024%2C632&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1024"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4795" data-recalc-dims="1" height="632" sizes="(max-width: 1024px) 100vw, 1024px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=1024%2C632&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?w=1024&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=300%2C185&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-148.png?resize=768%2C474&amp;ssl=1 768w" width="1024"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="e5c1">
     <strong class="markup--strong markup--p-strong">
      — — 入侵检测 — —
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="53f3">
     <strong class="markup--strong markup--p-strong">
      Vectra Cognito 平台
     </strong>
     将人工智能（AI）、深度机器学习和流量监控结合到一个工具中，该工具能够检测其他程序遗漏的威胁，即使它们已经在受保护的网络中根深蒂固。
    </p>
    <p class="graf graf--p graf-after--p" id="2972">
     Cognito 被归类为流量监控工具虽然不是太适合。
     <strong class="markup--strong markup--p-strong">
      Cognito 更像是一个称职的入侵检测系统（IDS）
     </strong>
     。它展示了面对高级入侵时未来 IDS 系统的运行方式。甚至还有一个威胁搜寻组件，使任何简单的分类变得更加详细。
    </p>
    <p class="graf graf--p graf-after--p" id="a68a">
     目前，Cognito 的 brains 仅作为硬件提供。每个设备可以处理多达 500 个传感器的数据，许多组织可能只需要一个。报告由设备编译并发送到仪表板界面，使其在这方面像更传统的安全信息和事件管理（SIEM）控制台。如果需要，Cognito 还可以将其数据发送到许多其他 SIEM 或安全设备。
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4796 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1100%2C774&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?w=1404&amp;ssl=1 1404w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=300%2C211&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=768%2C540&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1024%2C721&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1100%2C774&amp;ssl=1 1100w" data-recalc-dims="1" height="774" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1100%2C774&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4796" data-recalc-dims="1" height="774" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1100%2C774&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?w=1404&amp;ssl=1 1404w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=300%2C211&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=768%2C540&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1024%2C721&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-49.jpeg?resize=1100%2C774&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
   <div>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div>
     <p class="graf graf--p graf-after--figure" id="105f">
      <strong class="markup--strong markup--p-strong">
       — — Shodan — —
      </strong>
     </p>
     <p class="graf graf--p graf-after--p" id="eb31">
      Shodan 是一种搜索引擎，被誉为“黑客搜索引擎”，对于研究人员来说，这是一个惊人的金矿，
      <strong class="markup--strong markup--p-strong">
       可让用户使用各种过滤器查找连接到互联网的特定类型的设备（网络摄像头，路由器，服务器等）
      </strong>
      。嗯，就是你知道的那样，可以有*很高效*的用途。有些还将其描述为服务横幅的搜索引擎，这是服务器发送回客户端的元数据。这可以是有关服务器软件的信息、服务支持哪些选项、欢迎消息或客户端在与服务器交互之前可以找到的其他信息。
     </p>
     <p class="graf graf--p graf-after--p" id="a121">
      Shodan 主要收集在 Web 服务器上的数据（ HTTP / HTTPS — 端口 80,8080,443,8443）以及FTP（端口 21），SSH（端口 22），Telnet（端口 23），SNMP（端口 161），SIP（端口 5060），和实时流协议（ RTSP，端口 554）。
      <strong class="markup--strong markup--p-strong">
       后者可用于访问网络摄像头及其视频流。
      </strong>
     </p>
     <p class="graf graf--p graf-after--p" id="aa0c">
      它是由计算机程序员 John Matherly 于 2009 年推出的，他在 2003 年设想了搜索与互联网相关的设备的想法。
     </p>
     <p class="graf graf--p graf-after--p" id="54c7">
      <strong class="markup--strong markup--p-strong">
       Shodan 用户能够找到包括交通信号灯，安全摄像机，家庭供暖系统以及水上乐园，加油站，水厂，电网，核电站和粒子回旋加速器的控制系统
      </strong>
      ; 多数有小保安。许多设备使用“admin”作为其用户名，“1234”作为其密码，连接到它们的唯一软件是 Web 浏览器（如果不是这样的用户名和密码，需要稍微花点时间）
     </p>
     <p class="graf graf--p graf-after--p" id="df04">
      该网站专注于 SCADA（监控和数据采集）系统。 Shodan 目前将10个结果返回给没有帐户的用户，而有账户的用户则能收到 50 个。如果用户想要删除限制，则需要提供理由并支付费用。 Shodan 的主要用户是网络安全专业人员、研究人员和执法机构。虽然
      <strong class="markup--strong markup--p-strong">
       社交工程师、OSINT 研究人员、网络犯罪分子也可以使用该网站，但一些网络犯罪分子通常可以访问能完成相同任务而无需经过身份检测的僵尸网络。
      </strong>
     </p>
     <figure aria-describedby="caption-attachment-4797" class="wp-caption aligncenter" id="attachment_4797" style="width: 540px">
      <img alt="" class="size-full wp-image-4797 jetpack-lazy-image" data-lazy-sizes="(max-width: 540px) 100vw, 540px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?resize=540%2C297&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?w=540&amp;ssl=1 540w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?resize=300%2C165&amp;ssl=1 300w" data-recalc-dims="1" height="297" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?resize=540%2C297&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="540"/>
      <noscript>
       <img alt="" class="size-full wp-image-4797" data-recalc-dims="1" height="297" sizes="(max-width: 540px) 100vw, 540px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?resize=540%2C297&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?w=540&amp;ssl=1 540w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-50.jpeg?resize=300%2C165&amp;ssl=1 300w" width="540"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-4797">
       SHODAN Diggity — 为SHODAN搜索引擎提供免费，易于使用的扫描界面
      </figcaption>
     </figure>
    </div>
   </div>
   <p class="graf graf--p graf-after--figure" id="10ad">
    SHODAN 查询的批量搜索和处理可以使用 SHODAN Diggity 执行（SearchDiggity 的一部分，Bishop Fox 的免费搜索引擎攻击工具套件）。免费工具通过 SHODAN API 为流行的黑客搜索引擎提供了一个易于使用的扫描界面。
   </p>
   <p class="graf graf--p graf-after--p" id="ce83">
    SHODAN Diggity 配备了一个名为 SHODAN Hacking Database（SHDB）的预制字典文件中的 167 个搜索查询的便捷列表。这本词典有助于针对各种技术，包括网络摄像头、打印机、VoIP 设备、路由器、烤面包机、交换机，甚至 SCADA / 工业控制系统（ICS）等等。嗯，细思极恐。不过对于调查来说非常方便。
   </p>
   <figure aria-describedby="caption-attachment-4798" class="wp-caption aligncenter" id="attachment_4798" style="width: 413px">
    <img alt="" class="size-full wp-image-4798 jetpack-lazy-image" data-lazy-sizes="(max-width: 413px) 100vw, 413px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=413%2C409&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?w=413&amp;ssl=1 413w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=300%2C297&amp;ssl=1 300w" data-recalc-dims="1" height="409" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=413%2C409&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="413"/>
    <noscript>
     <img alt="" class="size-full wp-image-4798" data-recalc-dims="1" height="409" sizes="(max-width: 413px) 100vw, 413px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=413%2C409&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?w=413&amp;ssl=1 413w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-149.png?resize=300%2C297&amp;ssl=1 300w" width="413"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4798">
     SHODAN 黑客警报 — 在阅读器中监控RSS源
    </figcaption>
   </figure>
   <figure aria-describedby="caption-attachment-4799" class="wp-caption aligncenter" id="attachment_4799" style="width: 450px">
    <img alt="" class="size-full wp-image-4799 jetpack-lazy-image" data-lazy-sizes="(max-width: 450px) 100vw, 450px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?resize=450%2C410&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?w=450&amp;ssl=1 450w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?resize=300%2C273&amp;ssl=1 300w" data-recalc-dims="1" height="410" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?resize=450%2C410&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="450"/>
    <noscript>
     <img alt="" class="size-full wp-image-4799" data-recalc-dims="1" height="410" sizes="(max-width: 450px) 100vw, 450px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?resize=450%2C410&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?w=450&amp;ssl=1 450w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-150.png?resize=300%2C273&amp;ssl=1 300w" width="450"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4799">
     SHODAN 黑客警报 — 创建 RSS 源
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="691b">
    网上有很多使用指南，很容易找到。
   </p>
   <p class="graf graf--p graf-after--p" id="3d39">
    <strong class="markup--strong markup--p-strong">
     — — theHarvester — —
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="b295">
    这也是个小邪恶的工具，不仅能用于开源调查，也能很方便社交工程攻击的信息收集工作（
    <strong class="markup--strong markup--p-strong">
     对于后者，我们会令起篇幅单独介绍
    </strong>
    ）。
   </p>
   <p class="graf graf--p graf-after--p" id="4afa">
    <strong class="markup--strong markup--p-strong">
     TheHarvester 能够收集电子邮件账号、用户名、主机名和子域名等信息
    </strong>
    。它通过 Google、Bing、PGP、LinkedIn、Baidu、Yandex、People123、Jigsaw、Shodan 等公开资源整理收集这些信息。这些信息将在后期的渗透测试阶段发挥巨大的作用。
   </p>
   <p class="graf graf--p graf-after--p" id="9b30">
    这款工具可以帮助渗透测试工作者在渗透测试的早期阶段对目标进行互联网资料采集，同时也可以帮助人们了解自己的个人信息在网络上是否存在。
   </p>
   <p class="graf graf--p graf-after--p" id="3849">
    使用方法和下载很容易找到。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4800 jetpack-lazy-image" data-lazy-sizes="(max-width: 608px) 100vw, 608px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?resize=608%2C393&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?w=608&amp;ssl=1 608w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?resize=300%2C194&amp;ssl=1 300w" data-recalc-dims="1" height="393" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?resize=608%2C393&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="608"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4800" data-recalc-dims="1" height="393" sizes="(max-width: 608px) 100vw, 608px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?resize=608%2C393&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?w=608&amp;ssl=1 608w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-151.png?resize=300%2C194&amp;ssl=1 300w" width="608"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="ae24">
    <strong class="markup--strong markup--p-strong">
     — — Recon-Ng — —
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="be12">
    Recon-Ng 是对目标进行侦察的另一个有用工具，也是内置于 Kali Linux 中的。Recon-ng 具有内置的各种模块，其用法有点类似于 Metasploit。以下是 Kali Linux 上 Recon-ng 的欢迎屏幕。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4801 jetpack-lazy-image" data-lazy-sizes="(max-width: 624px) 100vw, 624px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?resize=624%2C285&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?w=624&amp;ssl=1 624w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?resize=300%2C137&amp;ssl=1 300w" data-recalc-dims="1" height="285" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?resize=624%2C285&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="624"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4801" data-recalc-dims="1" height="285" sizes="(max-width: 624px) 100vw, 624px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?resize=624%2C285&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?w=624&amp;ssl=1 624w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-152.png?resize=300%2C137&amp;ssl=1 300w" width="624"/>
    </noscript>
   </p>
   <p>
    Recon-ng 具有各种内置模块。下面显示了一小部分内容：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4802 jetpack-lazy-image" data-lazy-sizes="(max-width: 549px) 100vw, 549px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?resize=549%2C321&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?w=549&amp;ssl=1 549w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?resize=300%2C175&amp;ssl=1 300w" data-recalc-dims="1" height="321" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?resize=549%2C321&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="549"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4802" data-recalc-dims="1" height="321" sizes="(max-width: 549px) 100vw, 549px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?resize=549%2C321&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?w=549&amp;ssl=1 549w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-153.png?resize=300%2C175&amp;ssl=1 300w" width="549"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="b80a">
     可以创建工作区来执行其中的所有操作。只要工作区被创建，用户将被重定向到该工作区。一旦进入工作区，就可以使用添加域 &lt;domainname&gt; 来指定域。将域添加到重新调用后，重新调用模块可用于提取有关此域的信息。
    </p>
    <p class="graf graf--p graf-after--p" id="2a22">
     有一些优秀的模块，比如 bing_domain_Web 和 google_site_web 可以找到与初始目标域相关的其他域。这些域的输出将成为这些搜索引擎的所有索引域。
    </p>
    <p class="graf graf--p graf-after--p" id="2650">
     另一个方便的模块是 bing_linkedin_cache，它可以用来获取与域相关的电子邮件地址，这些地址可以进一步用于执行
     <strong class="markup--strong markup--p-strong">
      社交工程
     </strong>
     。所以，通过其他模块，我们可以获得有关目标的其他信息。
    </p>
    <p class="graf graf--p graf-after--p" id="9169">
     <strong class="markup--strong markup--p-strong">
      — — Maltego — —
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="5f2a">
     Maltego 由 Paterva 开发，是 Kali Linux 内置工具（附带社区版）。Maltego 可以借助几个内置转换（以及提供编写自定义转换的功能）帮助执行对目标的重要侦察。使用 Maltego，首先用户应该在 Paterva 网站上注册。
    </p>
    <p class="graf graf--p graf-after--p" id="e67c">
     注册后，用户可以创建新机器，或者运行机器来实现目标上的变换。配置完成后，需要启动已配置的机器。Maltego 内部有各种脚印，可以抵挡目标。Maltego 会开始使用 Maltego 服务器运行所有转换。
    </p>
    <p class="graf graf--p graf-after--p" id="df0f">
     预期的结果可能是域到 IP 的转换已经发生，netblock 将被识别，AS 号码也被识别，还有位置和其他短语。这些都是 Maltego 中的所有图标，并提供了有关所有这些图标的详细信息。研究人员可以继续这个过程来挖掘更多关于目标的信息。
    </p>
    <p class="graf graf--p graf-after--p" id="96aa">
     绝对奇妙的工具，
     <strong class="markup--strong markup--p-strong">
      通过互联网跟踪单个实体的脚印！
     </strong>
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4803 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1100%2C595&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?w=1920&amp;ssl=1 1920w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=300%2C162&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=768%2C415&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1024%2C554&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1100%2C595&amp;ssl=1 1100w" data-recalc-dims="1" height="595" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1100%2C595&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4803" data-recalc-dims="1" height="595" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1100%2C595&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?w=1920&amp;ssl=1 1920w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=300%2C162&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=768%2C415&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1024%2C554&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-51.jpeg?resize=1100%2C595&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
   </div>
   <div class="section-inner sectionLayout--fullWidth">
    <div class="aspectRatioPlaceholder is-locked">
     好啦，如果您还有顺手的好用工具，欢迎在评论中交流。我们一起来想办法，相信没有挖不到证据。为了正义的目标！
    </div>
   </div>
  </div>
  <div id="atatags-1611829871-5f3e50228f455">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4791" href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%ef%bc%9a%e6%83%85%e6%8a%a5%e5%9c%b0%e5%9b%be%e3%80%81%e9%bb%91%e5%ae%a2%e6%90%9c%e7%b4%a2%e5%8f%8a%e5%85%b6%e4%bb%96-osint/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4791" href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%ef%bc%9a%e6%83%85%e6%8a%a5%e5%9c%b0%e5%9b%be%e3%80%81%e9%bb%91%e5%ae%a2%e6%90%9c%e7%b4%a2%e5%8f%8a%e5%85%b6%e4%bb%96-osint/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
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
   <li>
    <a href="https://www.iyouport.org/tag/tools/" rel="tag">
     tools
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-11-08T02:18:35+08:00">
    2018年11月8日
   </time>
   <time class="updated" datetime="2019-06-01T02:39:04+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

