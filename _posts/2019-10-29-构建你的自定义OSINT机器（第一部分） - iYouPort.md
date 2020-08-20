---
layout: post
title: "构建你的自定义OSINT机器（第一部分） - iYouPort"
date: 2019-10-29T16:05:20+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6343 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-289 category-54 tag-diy tag-linux tag-osint tag-technology tag-tools" id="post-6343">
 <header class="entry-header">
  <h1 class="entry-title">
   构建你的自定义OSINT机器（第一部分）
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
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-10-30T00:05:20+08:00">
    2019年10月30日
   </time>
   <time class="updated" datetime="2019-07-01T17:19:58+08:00">
    2019年7月1日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       顺手的工具和工作环境对调查者来说很重要
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6344 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1100%2C670&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=300%2C183&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=768%2C468&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1024%2C624&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1100%2C670&amp;ssl=1 1100w" data-recalc-dims="1" height="670" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1100%2C670&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6344" data-recalc-dims="1" height="670" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1100%2C670&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=300%2C183&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=768%2C468&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1024%2C624&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY.jpg?resize=1100%2C670&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   从 Windows 切换到 Linux 的原因有很多，虽然不仅仅是为了 OSINT。
  </p>
  <p class="graf graf--p">
   Linux 非常稳定，几乎不会出现崩溃状况；
  </p>
  <p class="graf graf--p">
   而且，能够以无限多种方式
   <strong class="markup--strong markup--p-strong">
    自定义工作区，并能够轻松集成 GitHub 中不断增长的 OSINT 工具。
   </strong>
  </p>
  <p class="graf graf--p">
   这意味着 Linux 对调查者来说是一个更高效的工作环境。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://nixintel.info/linux/build-your-own-custom-osint-machine-diy-buscador-part-1/" href="https://nixintel.info/linux/build-your-own-custom-osint-machine-diy-buscador-part-1/" rel="noopener noreferrer" target="_blank">
    nixintel
   </a>
   对此做了很多介绍。本指南将分为五部分内容，您将能由此体验到，做一个专业的调查人员事实上可以很容易。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    DIY Buscador
   </strong>
  </p>
  <p class="graf graf--p">
   OSINT 社区中的大多数人都会在某些时候使用 Mike Bazzell 的
   <a class="markup--anchor markup--p-anchor" data-href="https://inteltechniques.com/" href="https://inteltechniques.com/" rel="noopener noreferrer" target="_blank">
    IntelTechniques
   </a>
   网站。
  </p>
  <p class="graf graf--p">
   不幸的是，一些恶意的家伙为他的网站带来了很多问题，Mike 现在必须在没有工具的情况下运行他的网站，但幸运的是他的 Buscador OSINT 虚拟机仍然可以
   <a class="markup--anchor markup--p-anchor" data-href="https://inteltechniques.com/buscador/" href="https://inteltechniques.com/buscador/" rel="noopener noreferrer" target="_blank">
    在这里下载
   </a>
   。
  </p>
  <p class="graf graf--p">
   Buscador 本身是一个基于 Ubuntu 的定制 Linux 虚拟机。因此，作为一个小项目，我决定使用新发布的 Ubuntu 19.04 作为基本操作系统，为 OSINT 工作创建一个 DIY-Buscador 机器，展示它有多容易做到 。
  </p>
  <p class="graf graf--p">
   本系列文章（共五部分）将展示如何
   <strong class="markup--strong markup--p-strong">
    创建专用的 Linux OSINT 虚拟机，并使用各种工具对其进行自定义
   </strong>
   。
  </p>
  <p class="graf graf--p">
   本系列选择的工具与原始 Buscador 中的工具有很多重叠，但这一系列文章将展示如何从 Ubuntu 软件中心轻松安装您想要的任何软件，通过使用命令行从 GitHub 安装工具。
  </p>
  <p class="graf graf--p">
   本指南假设您对虚拟机或 Linux 没有太多经验，但最终您将能够
   <strong class="markup--strong markup--p-strong">
    以零成本构建自己的强大 Linux OSINT 虚拟机
   </strong>
   ，并以您喜欢的方式自定义它。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    要求
   </strong>
  </p>
  <p class="graf graf--p">
   1、安装
   <a class="markup--anchor markup--p-anchor" data-href="https://www.virtualbox.org/wiki/Downloads" href="https://www.virtualbox.org/wiki/Downloads" rel="noopener noreferrer" target="_blank">
    VirtualBox
   </a>
   。Windows 的
   <a class="markup--anchor markup--p-anchor" data-href="https://download.virtualbox.org/virtualbox/6.0.8/VirtualBox-6.0.8-130520-Win.exe" href="https://download.virtualbox.org/virtualbox/6.0.8/VirtualBox-6.0.8-130520-Win.exe" rel="noopener noreferrer" target="_blank">
    在这里
   </a>
   获取；Linux 的
   <a class="markup--anchor markup--p-anchor" data-href="https://www.virtualbox.org/wiki/Linux_Downloads" href="https://www.virtualbox.org/wiki/Linux_Downloads" rel="noopener noreferrer" target="_blank">
    在这里
   </a>
   获取；Mac 的
   <a class="markup--anchor markup--p-anchor" data-href="https://download.virtualbox.org/virtualbox/6.0.8/VirtualBox-6.0.8-130520-OSX.dmg" href="https://download.virtualbox.org/virtualbox/6.0.8/VirtualBox-6.0.8-130520-OSX.dmg" rel="noopener noreferrer" target="_blank">
    在这里
   </a>
   获取。
  </p>
  <p class="graf graf--p">
   像 Manjaro、Mint 和 Ubuntu 这样的 Linux 发行版的存储库中已经有 Virtualbox 了，可以直接安装。
  </p>
  <p class="graf graf--p">
   2、
   <a class="markup--anchor markup--p-anchor" data-href="http://releases.ubuntu.com/19.04/" href="http://releases.ubuntu.com/19.04/" rel="noopener noreferrer" target="_blank">
    从这里
   </a>
   下载 Ubuntu 19.04 Desktop ISO 的副本。
  </p>
  <p class="graf graf--p">
   3、需要最低 2.0ghz 的处理器速度，2GB的RAM和20GB的磁盘空间。
  </p>
  <p class="graf graf--p">
   在本指南中，DIY-Buscador 虚拟机将分配4GB的RAM和30GB的磁盘空间，这足以让它顺利运行。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    入门
   </strong>
  </p>
  <p class="graf graf--p">
   安装 Virtualbox 后，单击“新建”以创建新虚拟机。
  </p>
  <p class="graf graf--p">
   输入要创建的虚拟机的名称，并指定机器类型。
  </p>
  <p class="graf graf--p">
   在本案例中，该机器将被称为 Buscador DIY；类型将是“Linux”；版本将是 Ubuntu 64位。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6346 jetpack-lazy-image" data-lazy-sizes="(max-width: 575px) 100vw, 575px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?resize=575%2C463&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?w=575&amp;ssl=1 575w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?resize=300%2C242&amp;ssl=1 300w" data-recalc-dims="1" height="463" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?resize=575%2C463&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="575"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6346" data-recalc-dims="1" height="463" sizes="(max-width: 575px) 100vw, 575px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?resize=575%2C463&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?w=575&amp;ssl=1 575w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-4.png?resize=300%2C242&amp;ssl=1 300w" width="575"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   设置RAM。 Ubuntu 19.04至少要求2GB，
   <strong class="markup--strong markup--p-strong">
    但4GB的运行速度会更顺畅
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6345 jetpack-lazy-image" data-lazy-sizes="(max-width: 573px) 100vw, 573px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?resize=573%2C464&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?w=573&amp;ssl=1 573w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?resize=300%2C243&amp;ssl=1 300w" data-recalc-dims="1" height="464" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?resize=573%2C464&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="573"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6345" data-recalc-dims="1" height="464" sizes="(max-width: 573px) 100vw, 573px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?resize=573%2C464&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?w=573&amp;ssl=1 573w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-3.png?resize=300%2C243&amp;ssl=1 300w" width="573"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   创建虚拟硬盘。
  </p>
  <p class="graf graf--p">
   这是您的虚拟机将被分配以运行的空间。忽略那个将大小设置为10GB的建议 — 它太小了。
  </p>
  <p class="graf graf--p">
   在创建完成后再增加虚拟机硬盘的大小是非常困难的，因此
   <strong class="markup--strong markup--p-strong">
    最好在创建的时候就选一个大一点的而不是太小的硬盘
   </strong>
   。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6347 jetpack-lazy-image" data-lazy-sizes="(max-width: 573px) 100vw, 573px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?resize=573%2C461&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?w=573&amp;ssl=1 573w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?resize=300%2C241&amp;ssl=1 300w" data-recalc-dims="1" height="461" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?resize=573%2C461&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="573"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6347" data-recalc-dims="1" height="461" sizes="(max-width: 573px) 100vw, 573px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?resize=573%2C461&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?w=573&amp;ssl=1 573w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-3.png?resize=300%2C241&amp;ssl=1 300w" width="573"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   选择硬盘文件类型。 VDI是默认设置，保持原样就可以了。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6348 jetpack-lazy-image" data-lazy-sizes="(max-width: 656px) 100vw, 656px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?resize=656%2C506&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?w=656&amp;ssl=1 656w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?resize=300%2C231&amp;ssl=1 300w" data-recalc-dims="1" height="506" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?resize=656%2C506&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="656"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6348" data-recalc-dims="1" height="506" sizes="(max-width: 656px) 100vw, 656px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?resize=656%2C506&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?w=656&amp;ssl=1 656w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-1.png?resize=300%2C231&amp;ssl=1 300w" width="656"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   为硬盘文件类型选择动态分配：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6349 jetpack-lazy-image" data-lazy-sizes="(max-width: 658px) 100vw, 658px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?resize=658%2C502&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?w=658&amp;ssl=1 658w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?resize=300%2C229&amp;ssl=1 300w" data-recalc-dims="1" height="502" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?resize=658%2C502&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="658"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6349" data-recalc-dims="1" height="502" sizes="(max-width: 658px) 100vw, 658px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?resize=658%2C502&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?w=658&amp;ssl=1 658w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5.png?resize=300%2C229&amp;ssl=1 300w" width="658"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   设置虚拟硬盘的大小。在这个例子中，我将它设置为30GB，当然，您可以根据自己的 OSINT 需求选择最合适的大小。
  </p>
  <p class="graf graf--p">
   例如，如果您要下载很多视频，那么您会希望将它更大一点。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6350 jetpack-lazy-image" data-lazy-sizes="(max-width: 656px) 100vw, 656px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?resize=656%2C507&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?w=656&amp;ssl=1 656w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?resize=300%2C232&amp;ssl=1 300w" data-recalc-dims="1" height="507" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?resize=656%2C507&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="656"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6350" data-recalc-dims="1" height="507" sizes="(max-width: 656px) 100vw, 656px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?resize=656%2C507&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?w=656&amp;ssl=1 656w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6.png?resize=300%2C232&amp;ssl=1 300w" width="656"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   点击“创建”后。右键单击刚刚创建的 Buscador-DIY 机器，然后选择“设置”。
  </p>
  <p class="graf graf--p">
   将视频内存调整到最高位置（本例中为128mb）并选择启用3D加速。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6351 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=800%2C534&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=768%2C513&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="534" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=800%2C534&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6351" data-recalc-dims="1" height="534" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=800%2C534&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=768%2C513&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7.png?resize=272%2C182&amp;ssl=1 272w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在“常规”下，将“共享剪贴板”和“拖动”选项设置为“双向”。这将允许您在主机和OSINT机器之间轻松移动文件：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6352 jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.png?resize=260%2C65&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="65" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.png?resize=260%2C65&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="260"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6352" data-recalc-dims="1" height="65" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.png?resize=260%2C65&amp;ssl=1" width="260"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在机器几乎准备好开始了。在“设置”中，转到“存储”。在光驱的右侧，单击磁盘图标。
  </p>
  <p class="graf graf--p">
   导航到您下载 Ubuntu 19.04 ISO 文件的文件夹并选择它。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6353 jetpack-lazy-image" data-lazy-sizes="(max-width: 802px) 100vw, 802px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=802%2C533&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=300%2C199&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=768%2C510&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="533" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=802%2C533&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="802"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6353" data-recalc-dims="1" height="533" sizes="(max-width: 802px) 100vw, 802px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=802%2C533&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=300%2C199&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=768%2C510&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9.png?resize=272%2C182&amp;ssl=1 272w" width="802"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   Ubuntu 安装盘位于虚拟机的虚拟驱动器中。单击“开始”以首次启动它并开始安装 Ubuntu。
  </p>
  <p class="graf graf--p">
   选择您的语言（建议非母语），然后单击“安装 Ubuntu”。有一些本地设置，如时区等，构成安装过程的一部分，但这里没有图示。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6354 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6354" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=800%2C678&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   选择正常安装，安装时下载更新，最重要的是
   <strong class="markup--strong markup--p-strong">
    允许
   </strong>
   安装第三方驱动程序。
  </p>
  <p class="graf graf--p">
   并非所有 Linux 爱好者都对此感到满意，但它将使操作系统在未来遇到障碍的可能性降低。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6355 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6355" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-1.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   选择擦除磁盘并在出现提示时安装 Linux（请记住这是指您刚创建的虚拟硬盘，而不是实际的主操作系统，所以不用担心）：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6356 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6356" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/12-1.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   系统将提示您创建将成为管理员的用户，设置管理员密码，然后设置机器的名称。
  </p>
  <p class="graf graf--p">
   这里选择了用户名 ’nixintel’，机器将被称为 diy-buscador，但你可以选择任何你喜欢的名字。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    确保您不会丢失或忘记密码非常重要。如果你把自己锁在机器外面了，没有简单的方法可以恢复它
   </strong>
   。
  </p>
  <p class="graf graf--p">
   单击“立即安装”后，Ubuntu 将开始自行安装。您可以听首歌或者再喝点什么。
  </p>
  <p class="graf graf--p">
   我这里的安装时间不到十分钟，但时间可能会因您自己的硬件设置而异。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6357 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6357" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/13.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   单击立即重新启动以完成安装：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6358 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6358" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/14.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   当计算机重新启动时，它会提示您删除安装介质，即插入虚拟驱动器的虚拟磁盘。这时只需按 Enter 键即可。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6359 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6359" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/15.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在使用在设置期间创建的密码登录：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6360 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6360" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=800%2C678&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/16.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   全部完成！安装了 Ubuntu 19.04 并准备将其转换为自定义OSINT机器。
  </p>
  <p class="graf graf--p">
   首次启动时，它会向您介绍软件中心，您可以选择安装数千个应用程序。
  </p>
  <p class="graf graf--p">
   这也是管理软件更新以及可以删除不需要的程序的地方。
  </p>
  <p class="graf graf--p">
   最好先更新系统，如果出现提示，请执行此操作。
  </p>
  <p class="graf graf--p">
   在 Ubuntu 和 Mint 系统中，更新是在后台完成的，您可以在更新过程中继续使用本机。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6361 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6361" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=800%2C678&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?w=800&amp;ssl=1 800w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=300%2C254&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/17.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   你可以轻松调整窗口大小。如果愿意，甚至可以在全屏模式下运行VM。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6362 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6362" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=800%2C678&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?w=800&amp;ssl=1 800w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/18.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在软件中心预览中，其中一个推广应用是 VLC 媒体播放器。我想在 OSINT 构建中包含它。
  </p>
  <p class="graf graf--p">
   只需单击“安装”，输入密码即可在出现提示时对其进行授权，程序将在几秒钟后自行安装。
  </p>
  <p class="graf graf--p">
   此外不需要做任何事。谁说使用 Linux 很难？
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6363 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=800%2C678&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=300%2C254&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=768%2C651&amp;ssl=1 768w" data-recalc-dims="1" height="678" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=800%2C678&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6363" data-recalc-dims="1" height="678" sizes="(max-width: 800px) 100vw, 800px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=800%2C678&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=300%2C254&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/19.png?resize=768%2C651&amp;ssl=1 768w" width="800"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这是创建自己的 DIY Buscador OSINT 机器的第一部分内容（也是最难的部分，后面就容易多了）。
  </p>
  <p class="graf graf--p">
   在本指南的下一部分中，将介绍如何安装软件中心已有的一些有用的 OSINT 工具；以及如何设置 Pip、Python 和 Git 来安装一些专业命令行工具，如Sherlock、Cloudflair、Photon 和 Twint。对于 Chrome 和 Firefox，还有一些有用的浏览器扩展。
  </p>
  <p class="graf graf--p">
   下次见。⚪️
  </p>
  <div id="atatags-1611829871-5f3ec021f188d">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6343" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6343" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/diy/" rel="tag">
     DIY
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/linux/" rel="tag">
     Linux
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
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
   <time class="entry-date published" datetime="2019-10-30T00:05:20+08:00">
    2019年10月30日
   </time>
   <time class="updated" datetime="2019-07-01T17:19:58+08:00">
    2019年7月1日
   </time>
  </div>
 </div>
</article>

