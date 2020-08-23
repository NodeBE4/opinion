---
layout: post
title: "如何在运行 Manjaro Linux 或 CentOS 的计算机上安装 Tor - iYouPort"
date: 2020-04-13T16:03:09+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e8%bf%90%e8%a1%8c-manjaro-linux-%e6%88%96-centos-%e7%9a%84%e8%ae%a1%e7%ae%97%e6%9c%ba%e4%b8%8a%e5%ae%89%e8%a3%85-tor/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-10717 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-linux tag-privacy tag-security tag-technology tag-tor" id="post-10717">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在运行 Manjaro Linux 或 CentOS 的计算机上安装 Tor
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
   <time class="entry-date published" datetime="2020-04-14T00:03:09+08:00">
    2020年4月14日
   </time>
   <time class="updated" datetime="2019-11-17T17:19:56+08:00">
    2019年11月17日
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
       非常简单
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p class="graf graf--p">
   如果您希望保护自己的上网安全，如果您不想投资VPN或认为VPN的思考方式本身不够安全，那么可以使用Tor浏览器。
  </p>
  <p class="graf graf--p">
   如果尚未熟悉 Tor，您可以在下面了解：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%bd%93%e6%90%ac%e7%9f%b3%e5%a4%b4%e7%a0%b8%e8%84%9a%e9%81%87%e5%88%b0%e8%bf%90%e5%8a%a8%e6%ad%bb%e4%ba%a1-%e6%b4%8b%e8%91%b1%e5%a4%b4%e4%bc%9a%e8%ae%a9%e8%b0%81/" href="https://www.iyouport.org/%e5%bd%93%e6%90%ac%e7%9f%b3%e5%a4%b4%e7%a0%b8%e8%84%9a%e9%81%87%e5%88%b0%e8%bf%90%e5%8a%a8%e6%ad%bb%e4%ba%a1-%e6%b4%8b%e8%91%b1%e5%a4%b4%e4%bc%9a%e8%ae%a9%e8%b0%81/" rel="noopener noreferrer" target="_blank">
     当搬石头砸脚遇到“运动死亡” — — 洋葱头会让谁流泪？（一）
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e8%bf%bd%e6%b1%82%e6%ad%a3%e4%b9%89%e7%9a%84%e4%ba%ba%e5%ba%94%e8%af%a5%e5%8a%a0%e5%bc%ba%e5%8f%8d%e4%be%a6%e6%8a%80%e5%b7%a7%e2%9d%97%ef%b8%8f-%e6%b4%8b%e8%91%b1%e5%a4%b4%e4%bc%9a/" href="https://www.iyouport.org/%e8%bf%bd%e6%b1%82%e6%ad%a3%e4%b9%89%e7%9a%84%e4%ba%ba%e5%ba%94%e8%af%a5%e5%8a%a0%e5%bc%ba%e5%8f%8d%e4%be%a6%e6%8a%80%e5%b7%a7%e2%9d%97%ef%b8%8f-%e6%b4%8b%e8%91%b1%e5%a4%b4%e4%bc%9a/" rel="noopener noreferrer" target="_blank">
     追求正义的人应该加强反侦技巧 — — 洋葱头会让谁流泪（二）
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e7%9c%9f%e7%9a%84%e5%ae%89%e5%85%a8%e5%90%97%ef%bc%9f%e9%82%a3%e4%b9%88%e4%bb%96%e4%bb%ac%e6%98%af%e6%80%8e%e4%b9%88%e6%8a%93%e4%ba%ba%e7%9a%84%ef%bc%9f-%e6%b4%8b%e8%91%b1%e5%a4%b4/" href="https://www.iyouport.org/%e7%9c%9f%e7%9a%84%e5%ae%89%e5%85%a8%e5%90%97%ef%bc%9f%e9%82%a3%e4%b9%88%e4%bb%96%e4%bb%ac%e6%98%af%e6%80%8e%e4%b9%88%e6%8a%93%e4%ba%ba%e7%9a%84%ef%bc%9f-%e6%b4%8b%e8%91%b1%e5%a4%b4/" rel="noopener noreferrer" target="_blank">
     真的安全吗？那么他们是怎么抓人的？ — — 洋葱头会让谁流泪（三）
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e8%af%b7%e5%85%b3%e4%b8%8a%e8%ba%ab%e5%90%8e%e7%9a%84%e9%97%a8%ef%bc%8c%e9%99%a4%e9%9d%9e%e4%bd%a0%e6%83%b3%e6%8a%8a%e5%88%80%e9%80%92%e7%bb%99%e6%95%8c%e4%ba%ba-%e6%b4%8b%e8%91%b1/" href="https://www.iyouport.org/%e8%af%b7%e5%85%b3%e4%b8%8a%e8%ba%ab%e5%90%8e%e7%9a%84%e9%97%a8%ef%bc%8c%e9%99%a4%e9%9d%9e%e4%bd%a0%e6%83%b3%e6%8a%8a%e5%88%80%e9%80%92%e7%bb%99%e6%95%8c%e4%ba%ba-%e6%b4%8b%e8%91%b1/" rel="noopener noreferrer" target="_blank">
     请关上身后的门，除非你想把刀递给敌人 — — 洋葱头会让谁流泪（四）
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
     如何在你的网页浏览器中使用Tor网络？
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e4%bd%bf%e7%94%a8-tor-%e4%bf%9d%e6%8a%a4%e8%87%aa%e5%b7%b1%e6%97%b6%e5%8d%83%e4%b8%87%e4%b8%8d%e8%a6%81%e5%81%9a%e8%bf%99%e4%b9%9d%e4%bb%b6%e4%ba%8b%ef%bc%81/" href="https://www.iyouport.org/%e4%bd%bf%e7%94%a8-tor-%e4%bf%9d%e6%8a%a4%e8%87%aa%e5%b7%b1%e6%97%b6%e5%8d%83%e4%b8%87%e4%b8%8d%e8%a6%81%e5%81%9a%e8%bf%99%e4%b9%9d%e4%bb%b6%e4%ba%8b%ef%bc%81/" rel="noopener noreferrer" target="_blank">
     使用 Tor 保护自己时千万不要做这九件事！
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8android%e4%b8%8a%e8%ae%be%e7%bd%ae%e5%92%8c%e4%bd%bf%e7%94%a8tor/" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8android%e4%b8%8a%e8%ae%be%e7%bd%ae%e5%92%8c%e4%bd%bf%e7%94%a8tor/" rel="noopener noreferrer" target="_blank">
     如何在Android上设置和使用Tor
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
     如何在你的网页浏览器中使用Tor网络？
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   使用Tor浏览器，您可以在流量最终到达目标服务器之前，通过多个节点反弹流量，这实际上使监视机构难以跟踪您的在线活动。
  </p>
  <p class="graf graf--p">
   Tor 是开源的，可用于包括 Linux 在内的所有主要平台。
  </p>
  <p class="graf graf--p">
   尽管在 Windows 计算机上安装 Tor 浏览器很容易，但是，在 Linux 计算机上安装 Tor 浏览器对于某些使用来说可能有点障碍。
  </p>
  <p class="graf graf--p">
   Tor 浏览器在 Linux 所有可用的官方存储库上均不可得，这意味着您必须从官方网站上下载安装程序，然后继续在 Linux 计算机上进行安装。
  </p>
  <p class="graf graf--p">
   对于所有的 Linux 发行版，安装 Tor 浏览器的过程几乎都是相同的，本文将讨论如何在运行 Manjaro Linux 和 CentOS 7/8 的计算机上安装它，其余的都可以照猫画。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    下载和安装 Tor 浏览器
   </strong>
  </p>
  <p class="graf graf--p">
   首先是访问 Tor 浏览器官方网站，并下载适用于 Linux 平台的 Tor 浏览器。
  </p>
  <p class="graf graf--p">
   您只需单击
   <a class="markup--anchor markup--p-anchor" data-href="https://www.torproject.org/download/" href="https://www.torproject.org/download/" rel="noopener noreferrer" target="_blank">
    此链接
   </a>
   即可在系统的默认下载目录中下载适用于Linux的Tor浏览器。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10718 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1100%2C467&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?w=1360&amp;ssl=1 1360w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=300%2C127&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1024%2C434&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=768%2C326&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1100%2C467&amp;ssl=1 1100w" data-recalc-dims="1" height="467" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1100%2C467&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10718" data-recalc-dims="1" height="467" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1100%2C467&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?w=1360&amp;ssl=1 1360w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=300%2C127&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1024%2C434&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=768%2C326&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-8.jpg?resize=1100%2C467&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   另外，您甚至可以在 Linux 终端中执行以下命令，以在计算机上启动 Tor 浏览器的下载。
  </p>
  <pre class="graf graf--pre">wget https://www.torproject.org/dist/torbrowser/9.0/tor-browser-linux64-9.0_en-US.tar.xz</pre>
  <p class="graf graf--p">
   下载完成后，您需要打开 Linux 终端，导航至存在下载文件的目录，然后键入以下命令，以开始解压缩 tar.xz 安装程序。
  </p>
  <pre class="graf graf--pre">sudo tar xf tor-browser-linux64-9.0_en-US.tar.xz</pre>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10719 jetpack-lazy-image" data-lazy-sizes="(max-width: 983px) 100vw, 983px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=983%2C205&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?w=983&amp;ssl=1 983w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=300%2C63&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=768%2C160&amp;ssl=1 768w" data-recalc-dims="1" height="205" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=983%2C205&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="983"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10719" data-recalc-dims="1" height="205" sizes="(max-width: 983px) 100vw, 983px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=983%2C205&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?w=983&amp;ssl=1 983w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=300%2C63&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-10.jpg?resize=768%2C160&amp;ssl=1 768w" width="983"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   解压缩过程不会花费很长时间，一旦完成，您需要使用默认的文件管理器导航至下载Tor浏览器的文件夹。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10720 jetpack-lazy-image" data-lazy-sizes="(max-width: 649px) 100vw, 649px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?resize=649%2C476&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?w=649&amp;ssl=1 649w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?resize=300%2C220&amp;ssl=1 300w" data-recalc-dims="1" height="476" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?resize=649%2C476&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="649"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10720" data-recalc-dims="1" height="476" sizes="(max-width: 649px) 100vw, 649px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?resize=649%2C476&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?w=649&amp;ssl=1 649w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-7.jpg?resize=300%2C220&amp;ssl=1 300w" width="649"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，您将找到一个名为 “
   <strong class="markup--strong markup--p-strong">
    tor-browser_zh-CN
   </strong>
   ” 的文件夹。只需打开该文件夹，您就可以找到一个名为 “
   <strong class="markup--strong markup--p-strong">
    Tor Browser Setup
   </strong>
   ” 的文件。
  </p>
  <p class="graf graf--p">
   最后，双击该文件以在 Linux 计算机上打开此安全浏览器。图标将更改，文件名也将更改为 “ Tor浏览器”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10721 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1100%2C402&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?w=1304&amp;ssl=1 1304w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=300%2C110&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1024%2C374&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=768%2C280&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1100%2C402&amp;ssl=1 1100w" data-recalc-dims="1" height="402" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1100%2C402&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10721" data-recalc-dims="1" height="402" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1100%2C402&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?w=1304&amp;ssl=1 1304w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=300%2C110&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1024%2C374&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=768%2C280&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-8.jpg?resize=1100%2C402&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   打开后请通过单击“连接”建立连接。
  </p>
  <p class="graf graf--p">
   如画面显示，如果您在中国、埃及和土耳其，这些国家已经封锁了 Tor，那么您需要使用代理和网桥，按照步骤操作即可。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10722 jetpack-lazy-image" data-lazy-sizes="(max-width: 652px) 100vw, 652px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?resize=652%2C502&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?w=652&amp;ssl=1 652w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?resize=300%2C231&amp;ssl=1 300w" data-recalc-dims="1" height="502" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?resize=652%2C502&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="652"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10722" data-recalc-dims="1" height="502" sizes="(max-width: 652px) 100vw, 652px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?resize=652%2C502&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?w=652&amp;ssl=1 652w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-6.jpg?resize=300%2C231&amp;ssl=1 300w" width="652"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   建立连接需要一点时间，一旦连接成功，您就可以开始使用此安全浏览器在互联网上几乎完全匿名。
  </p>
  <p class="graf graf--p">
   您可以使用 CentOS，Ubuntu，Fedora，Debian 或任何其他 Linux 发行版，安装 Tor 浏览器的过程不会有任何不同。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    请注意本文开始时提供的那一系列关联链接，那其中强调了操作安全
   </strong>
   ！操作安全是比保护性技术更重要的东西。⚪️
  </p>
  <div id="atatags-1611829871-5f42605fd308e">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-10717" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e8%bf%90%e8%a1%8c-manjaro-linux-%e6%88%96-centos-%e7%9a%84%e8%ae%a1%e7%ae%97%e6%9c%ba%e4%b8%8a%e5%ae%89%e8%a3%85-tor/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-10717" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e8%bf%90%e8%a1%8c-manjaro-linux-%e6%88%96-centos-%e7%9a%84%e8%ae%a1%e7%ae%97%e6%9c%ba%e4%b8%8a%e5%ae%89%e8%a3%85-tor/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-10717-5f42605fd37de" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=10717&amp;origin=www.iyouport.org&amp;obj_id=161182987-10717-5f42605fd37de" id="like-post-wrapper-161182987-10717-5f42605fd37de">
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
    <a href="https://www.iyouport.org/tag/linux/" rel="tag">
     Linux
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/privacy/" rel="tag">
     privacy
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/tor/" rel="tag">
     Tor
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-04-14T00:03:09+08:00">
    2020年4月14日
   </time>
   <time class="updated" datetime="2019-11-17T17:19:56+08:00">
    2019年11月17日
   </time>
  </div>
 </div>
</article>

