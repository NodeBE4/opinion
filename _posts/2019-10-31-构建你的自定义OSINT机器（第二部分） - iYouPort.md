---
layout: post
title: "构建你的自定义OSINT机器（第二部分） - iYouPort"
date: 2019-10-31T16:05:36+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6438 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-289 category-54 category-67 tag-osint tag-steganography tag-technique tag-technology tag-tools" id="post-6438">
 <header class="entry-header">
  <h1 class="entry-title">
   构建你的自定义OSINT机器（第二部分）
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-11-01T00:05:36+08:00">
    2019年11月1日
   </time>
   <time class="updated" datetime="2019-07-05T16:24:25+08:00">
    2019年7月5日
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
       继续前文：本文的目标是帮您挑装备
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6439 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1100%2C749&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=300%2C204&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=768%2C523&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1024%2C697&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1100%2C749&amp;ssl=1 1100w" data-recalc-dims="1" height="749" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1100%2C749&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6439" data-recalc-dims="1" height="749" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1100%2C749&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=300%2C204&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=768%2C523&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1024%2C697&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-1.jpg?resize=1100%2C749&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   上一篇文章中介绍了如何基于 Ubuntu Linux 创建自定义的 OSINT 虚拟机。如果您还没有看到，在这里回顾《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第一部分
   </a>
   》。
  </p>
  <p class="graf graf--p">
   本文是这一话题的继续（全部内容共五部分）。
  </p>
  <p class="graf graf--p">
   与之前一样，这篇文章依旧针对的是那些对 Linux 经验很少或没有经验的人。
  </p>
  <p class="graf graf--p">
   本文将介绍 Ubuntu 软件中心中可用于 OSINT 的一些应用程序。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Ubuntu 软件中心：安装应用程序
   </strong>
  </p>
  <p class="graf graf--p">
   本指南将首先展示如何安装
   <a class="markup--anchor markup--p-anchor" data-href="https://stegosuite.org/" href="https://stegosuite.org/" rel="noopener noreferrer" target="_blank">
    Stegosuite
   </a>
   。
  </p>
  <p class="graf graf--p">
   Stegosuite 是一个易于使用的
   <strong class="markup--strong markup--p-strong">
    隐写术程序
   </strong>
   ，允许您隐藏和提取在图像文件中不可见的信息。
  </p>
  <p class="graf graf--p">
   我们介绍过隐写术，一定程度上它比密码学更安全，详见这里《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e9%9a%90%e5%86%99%e6%9c%af%e7%9a%84%e5%b0%8f%e5%bf%83%e6%9c%ba/" href="https://www.iyouport.org/%e9%9a%90%e5%86%99%e6%9c%af%e7%9a%84%e5%b0%8f%e5%bf%83%e6%9c%ba/" rel="noopener noreferrer" target="_blank">
    隐写术的小心机
   </a>
   》。
  </p>
  <p class="graf graf--p">
   下面就是做法。
  </p>
  <p class="graf graf--p">
   首先打开软件中心并搜索“stegosuite”：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6440 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6440" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-9.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   单击应用程序并选择安装：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6441 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6441" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-7.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   系统将提示您输入密码。
  </p>
  <p class="graf graf--p">
   如果您习惯于 Windows 环境会觉得这样不寻常的，但它是 Linux 不可或缺的一部分，也是 Linux 系统通常被认为更安全的一个原因。
  </p>
  <p class="graf graf--p">
   在 Linux 中，没有像你下载、点击和运行的.exe文件那样的东西。Linux 只对文件是否具有运行权限感兴趣。
  </p>
  <p class="graf graf--p">
   如果它没有权限，则不允许运行。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6442 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6442" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-7.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   安装需要一些时间。您可以直接从软件中心单击启动，也可以从开始菜单访问该程序。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6443 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6443" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-4.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   单击开始菜单（左下角），然后键入“steg”以查找 Stegosuite。点击它即可启动。
  </p>
  <p class="graf graf--p">
   要将程序永久添加到工具栏，只需右键单击图标并选择“添加到收藏夹”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6444 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6444" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-3.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   要删除您不想要的程序，只需在软件中心找到它并选择“删除”即可。
  </p>
  <p class="graf graf--p">
   在下面的图片中默认删除了 Ubuntu 附带的亚马逊应用程序，因为我们不需要它。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6445 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6445" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-3.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   使用起来非常简单。这里有一个视频演示如何使用：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="409" src="//www.youtube.com/embed/W1fQNBJHomM" width="730">
   </iframe>
  </p>
  <p class="graf graf--p">
   还有其他介绍隐写技巧的视频：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/tRVFE7TuAlc" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   目前为止我们已经展示了如何安装 VLC 和 Stegosuite，但软件中心还有许多其他应用程序可用于 OSINT 构建。
  </p>
  <p class="graf graf--p">
   重申 Libre Office 已预先安装了 Ubuntu。
  </p>
  <p class="graf graf--p">
   以下这些是可从软件中心安装的一些建议程序：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    照片，视频和音频工具
   </strong>
  </p>
  <p class="graf graf--p">
   GIMP — 强大的图像和照片编辑软件。
  </p>
  <p class="graf graf--p">
   Flameshot — 非常强大的截图和图像捕捉工具。这是我最喜欢的截图工具。
  </p>
  <p class="graf graf--p">
   Shotwell — 用于组织图像集（预装）
  </p>
  <p class="graf graf--p">
   Audacity — 强大的音频编辑器
  </p>
  <p class="graf graf--p">
   SoundConverter — 将音频文件转换为不同类型。
  </p>
  <p class="graf graf--p">
   Darktable — 管理和编辑 RAW 图像。允许您编辑地理标记。
  </p>
  <p class="graf graf--p">
   Photoflare — 简单的图像编辑器。
  </p>
  <p class="graf graf--p">
   SimpleScreenRecorder — 许多有用的功能。让您录制全部或部分屏幕。用于记录您的工作以用于证据目的，或捕获难以下载的视频，例如 SnapMap 视频或实时流式传输的内容。
  </p>
  <p class="graf graf--p">
   Peek — 一个非常基本的屏幕录制工具。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    浏览器
   </strong>
  </p>
  <p class="graf graf--p">
   Tor 浏览器 — 访问暗网。
  </p>
  <p class="graf graf--p">
   Chromium — 谷歌 Chrome 的基础，但没有侵入性的附加功能。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    杂技
   </strong>
  </p>
  <p class="graf graf--p">
   Amass — 网络扫描工具，可发现子域、关联的IP块并映射结果。
  </p>
  <p class="graf graf--p">
   Zenmap — Nmap 的 GUI 版本，是最知名的网络扫描工具。
  </p>
  <p class="graf graf--p">
   Wireshark — 你是否需要这个取决于你正在做的是什么样的研究。它允许您捕获和监控网络流量。
  </p>
  <p class="graf graf--p">
   Transmission — 点对点文件共享应用程序（预安装）。
  </p>
  <p class="graf graf--p">
   telegram 客户端 — 对于 OSINT 构建来说不是必需的，但它是一个流行的通信平台。如果您要移交虚拟机的哈希副本以供证据使用，建议您将所有通信单独保存在主机上，除非它们与案例不可分割。
  </p>
  <p class="graf graf--p">
   Organize My Files — 保持工作井井有条。它有一个很好的GUI。
  </p>
  <p class="graf graf--p">
   PDFsam — 允许您拆分和排序PDF文件。
  </p>
  <p class="graf graf--p">
   Bleachbit — 允许安全的删除文件避免被取证。
  </p>
  <p class="graf graf--p">
   Kate — 简单但功能强大的文本编辑器。
  </p>
  <p class="graf graf--p">
   KeepassX — 密码管理器。它在本地存储密码而不是 LastPass 等其他地方。使用 AES 或 Twofish 加密。
  </p>
  <p class="graf graf--p">
   Yubico Authenticator — 允许您在计算机上为使用双因素身份验证的帐户生成一次性密码。
  </p>
  <p class="graf graf--p">
   好啦，以上是第二部分内容。下一部分将介绍如何使用.deb软件包直接安装应用程序，然后再继续说明如何安装和配置一些更高级的基于 Python 的 OSINT 工具。
  </p>
  <p class="graf graf--p">
   一共五部分内容哦。
   <strong class="markup--strong markup--p-strong">
    希望在发布完成时您可以拥有并熟练使用安全的深度调查工作环境。真相挖掘事业很难指望职业记者
   </strong>
   。下次见。⚪️
  </p>
  <div id="atatags-1611829871-5f3ec0655052d">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6438" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6438" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/steganography/" rel="tag">
     Steganography
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
   <time class="entry-date published" datetime="2019-11-01T00:05:36+08:00">
    2019年11月1日
   </time>
   <time class="updated" datetime="2019-07-05T16:24:25+08:00">
    2019年7月5日
   </time>
  </div>
 </div>
</article>

