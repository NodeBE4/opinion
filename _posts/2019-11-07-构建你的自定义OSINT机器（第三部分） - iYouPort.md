---
layout: post
title: "构建你的自定义OSINT机器（第三部分） - iYouPort"
date: 2019-11-07T16:05:07+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6764 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-activism tag-osint tag-technique tag-technology tag-tools" id="post-6764">
 <header class="entry-header">
  <h1 class="entry-title">
   构建你的自定义OSINT机器（第三部分）
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
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-11-08T00:05:07+08:00">
    2019年11月8日
   </time>
   <time class="updated" datetime="2019-07-17T12:02:04+08:00">
    2019年7月17日
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
       本文是这一话题的继续（全部内容共五部分）。与之前一样，这篇文章依旧针对的是那些对 Linux 经验很少或没有经验的人。
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6765 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6765" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-14.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这里是全部五部分内容的第三部分，将展示如何使用类似于 Buscador 的自定义 Linux OSINT 虚拟机。
  </p>
  <p class="graf graf--p">
   第一篇文章展示了使用 Virtualbox 和 Ubuntu Linux 创建虚拟机，第二篇文章展示了如何直接从 Ubuntu 软件中心安装一些对调查很有用的应用程序。
  </p>
  <p class="graf graf--p">
   如果您还没有读过前两部分，在这里看到“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第一部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第二部分
   </a>
   ”。
  </p>
  <p class="graf graf--p">
   不需要任何命令行修改 —— Ubuntu 的一个优点就是它允许以简单的图形方式安装大多数软件包，这对于那些习惯于 Windows 或 Mac 环境的人来说更容易学习。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    安装 Google Earth
   </strong>
  </p>
  <p class="graf graf--p">
   谷歌地球毫无疑问是 OSINT 工作中最重要的工具，专注于地理定位和验证。
  </p>
  <p class="graf graf--p">
   默认情况下，它不是 Ubuntu 软件中心的一部分，但本指南将介绍如何下载和安装它，然后再查看可以通过这种方式从 Web 下载和安装的其他一些关键 OSINT 调查工具。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/earth/versions/#download-pro" href="https://www.google.com/earth/versions/#download-pro" rel="noopener noreferrer" target="_blank">
    在此处
   </a>
   访问 Google 地球网站，然后单击链接进行下载。
  </p>
  <p class="graf graf--p">
   Google 会检测到您正在运行 Linux 并提示您选择包类型。
  </p>
  <p class="graf graf--p">
   Ubuntu（以及 Mint，Kali，Debian 和许多其他 Linux 发行版）使用.deb包进行安装，因此是这样：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6766 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6766" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-12.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   选择“打开方式”（这里是默认设置），单击“确定”。然后程序将下载必要的安装文件。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6767 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6767" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-12.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   然后 Ubuntu 会告诉你它已经识别出一个存储库。存储库是程序将接收其更新和补丁的软件源。
  </p>
  <p class="graf graf--p">
   单击“安装”并允许 Ubuntu 添加 Google Earth 软件存储库并安装该程序。请注意，并非所有程序都有这样的软件存储库。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6768 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6768" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-8.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   安装完成后，通过开始菜单找到 Google 地球专业版并单击它以运行。
  </p>
  <p class="graf graf--p">
   就是这么简单！一如既往地右键单击启动图标，然后选择“添加到收藏夹”将启动图标固定到工具栏菜单。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6769 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6769" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-7.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
   互联网上有数百个程序可用于OSINT，可以使用.deb软件包轻松安装。以下是您要考虑的一些内容。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    适用于 Linux 的 OSINT 友好软件
   </strong>
  </p>
  <p class="graf graf--p">
   谷歌浏览器：自从 Chrome 宣布它将很快停止允许广告拦截器和反跟踪软件在其浏览器中运行后，很多人都宣布将转而使用 Firefox。这是绝对正确的。
  </p>
  <p class="graf graf--p">
   我更喜欢 Firefox（并且它很容易切换）但目前 Chrome 仍然是一个必要的恶魔，因为它是唯一支持
   <a class="markup--anchor markup--p-anchor" data-href="https://www.hunch.ly/" href="https://www.hunch.ly/" rel="noopener noreferrer" target="_blank">
    Hunchly
   </a>
   的浏览器。
  </p>
  <p class="graf graf--p">
   Hunchly：用于网络调查的最佳日志记录和证据捕获工具。如果您注重
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%bd%a0%e7%9f%a5%e9%81%93%e4%bb%80%e4%b9%88%e6%89%8d%e6%98%af%e7%9c%9f%e6%ad%a3%e7%9a%84%e8%b0%83%e6%9f%a5%e5%90%97%ef%bc%9f%e6%89%80%e8%b0%93%e7%9a%84%e8%b5%b7%e5%ba%95%e7%bb%8f%e5%b8%b8/" href="https://www.iyouport.org/%e4%bd%a0%e7%9f%a5%e9%81%93%e4%bb%80%e4%b9%88%e6%89%8d%e6%98%af%e7%9c%9f%e6%ad%a3%e7%9a%84%e8%b0%83%e6%9f%a5%e5%90%97%ef%bc%9f%e6%89%80%e8%b0%93%e7%9a%84%e8%b5%b7%e5%ba%95%e7%bb%8f%e5%b8%b8/" rel="noopener noreferrer" target="_blank">
    证据逻辑链
   </a>
   ，那么 Hunchly 就是必不可少的。
  </p>
  <p class="graf graf--p">
   在本系列中介绍的所有工具中 Hunchly 是唯一一个需要付费的。
  </p>
  <p class="graf graf--p">
   目前是12个月的费用为100美元。如果有一天 Hunchly 能与 Firefox 兼容，我会果断卸载 Chrome。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.paterva.com/web7/downloads.php" href="https://www.paterva.com/web7/downloads.php" rel="noopener noreferrer" target="_blank">
    Maltego
   </a>
   ：仍然是对您正在进行 OSINT 研究的主题之间进行可视化和映射连接的最佳工具。您需要在安装后创建帐户（免费 ）。
  </p>
  <p class="graf graf--p">
   我们介绍过它的多种用途，例如《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%e5%92%8c%e5%8f%8d%e6%83%85%e6%8a%a5%e5%9f%ba%e6%9c%ac%e5%b7%a5%e5%85%b7%e6%89%8b%e5%86%8c%ef%bc%9a%e8%87%aa%e6%88%91%e4%ba%ba%e8%82%89%ef%bc%882/" href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%e5%92%8c%e5%8f%8d%e6%83%85%e6%8a%a5%e5%9f%ba%e6%9c%ac%e5%b7%a5%e5%85%b7%e6%89%8b%e5%86%8c%ef%bc%9a%e8%87%aa%e6%88%91%e4%ba%ba%e8%82%89%ef%bc%882/" rel="noopener noreferrer" target="_blank">
    社交媒体情报和反情报基本工具手册：自我人肉（2）
   </a>
   》；《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%be%a6%e6%9f%a5%e5%92%8c%e6%ac%ba%e9%aa%97%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%94%bb%e5%87%bb%e5%bf%85%e5%a4%87%e7%9a%84%e6%8a%80%e6%9c%af%e5%b7%a5%e5%85%b7/" href="https://www.iyouport.org/%e4%be%a6%e6%9f%a5%e5%92%8c%e6%ac%ba%e9%aa%97%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%94%bb%e5%87%bb%e5%bf%85%e5%a4%87%e7%9a%84%e6%8a%80%e6%9c%af%e5%b7%a5%e5%85%b7/" rel="noopener noreferrer" target="_blank">
    侦查和欺骗：这里是社交工程攻击必备的技术工具
   </a>
   》；《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%ef%bc%9a%e6%83%85%e6%8a%a5%e5%9c%b0%e5%9b%be%e3%80%81%e9%bb%91%e5%ae%a2%e6%90%9c%e7%b4%a2%e5%8f%8a%e5%85%b6%e4%bb%96-osint/" href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%ef%bc%9a%e6%83%85%e6%8a%a5%e5%9c%b0%e5%9b%be%e3%80%81%e9%bb%91%e5%ae%a2%e6%90%9c%e7%b4%a2%e5%8f%8a%e5%85%b6%e4%bb%96-osint/" rel="noopener noreferrer" target="_blank">
    开源调查工具：情报地图、“黑客搜索”,及其他 #OSINT
   </a>
   》等等。
  </p>
  <p class="graf graf--p">
   它真的很强大，对于调查人员来说，它可以满足您很多需求。
  </p>
  <p class="graf graf--p">
   在下一篇文章中将展示如何使用命令行安装一些额外的 OSINT 调查程序，然后展示如何配置 Ubuntu 来运行和安装一些最强大的 OSINT 程序，如 Spiderfoot，theHarvester，Twint 和 Sherlock。⚪️
  </p>
  <div id="atatags-1611829871-5f3ec144ca484">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6764" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6764" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-6764-5f3ec144caae1" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=6764&amp;origin=www.iyouport.org&amp;obj_id=161182987-6764-5f3ec144caae1" id="like-post-wrapper-161182987-6764-5f3ec144caae1">
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
    <a href="https://www.iyouport.org/tag/activism/" rel="tag">
     Activism
    </a>
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
   <time class="entry-date published" datetime="2019-11-08T00:05:07+08:00">
    2019年11月8日
   </time>
   <time class="updated" datetime="2019-07-17T12:02:04+08:00">
    2019年7月17日
   </time>
  </div>
 </div>
</article>

