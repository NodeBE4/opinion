---
layout: post
title: "如何检查MacOS上的恶意软件和键盘监听程序 - iYouPort"
date: 2020-07-01T16:04:13+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%a3%80%e6%9f%a5macos%e4%b8%8a%e7%9a%84%e6%81%b6%e6%84%8f%e8%bd%af%e4%bb%b6%e5%92%8c%e9%94%ae%e7%9b%98%e7%9b%91%e5%90%ac%e7%a8%8b%e5%ba%8f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-12380 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-antisurveillance tag-macos tag-malware tag-security tag-selfcare tag-technology tag-tools" id="post-12380">
 <header class="entry-header">
  <h1 class="entry-title">
   如何检查MacOS上的恶意软件和键盘监听程序
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
   <time class="entry-date published" datetime="2020-07-02T00:04:13+08:00">
    2020年7月2日
   </time>
   <time class="updated" datetime="2020-01-19T01:53:47+08:00">
    2020年1月19日
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
       非常简单的工具，任何人都可以使用
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12396 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12396" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1100%2C733&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-9.jpg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   虽然您可能怀疑您的 MacOS 已感染了恶意软件，但可能很难确定。本文来说说这件事怎么做。
  </p>
  <p class="graf graf--p">
   发现恶意程序的一种方法是查找可疑行为，例如 恶意程序在键盘输入时监听。
  </p>
  <p class="graf graf--p">
   借助免费的 MacOS 工具 ReiKey 和 KnockKnock，您可以检测可疑程序，以发现潜伏在系统中的键盘监听和其他持久性恶意软件。
  </p>
  <p class="graf graf--p">
   键盘监听或恶意软件可以通过多种方式最终出现在MacOS系统上。它可能来自受感染的文件、USB Rubber Ducky 黑客等等。
  </p>
  <p class="graf graf--p">
   重视个人隐私的任何人都应该关注确保您的通信不会被恶意拦截。那么 MacOS 究竟有多少恶意软件？
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    适用于MacOS的恶意软件
   </strong>
  </h3>
  <p class="graf graf--p">
   创建 MacOS 安全工具的前国家安全局黑客 Patrick Wardle 研究了为 Apple 设备编写的恶意软件。Patrick 在其
   <a class="markup--anchor markup--p-anchor" data-href="https://objective-see.com/" href="https://objective-see.com/" rel="noopener noreferrer" target="_blank">
    网站
   </a>
   上托管了 MacOS 恶意软件的实时样本供研究人员研究，在野外发现的各种恶意软件令人震惊。
  </p>
  <p class="graf graf--p">
   对 keyloggers 的简单搜索就可以找到五种用于 MacOS 设备的键盘监听恶意软件。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12381 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1100%2C709&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=300%2C193&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1024%2C660&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=768%2C495&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1100%2C709&amp;ssl=1 1100w" data-recalc-dims="1" height="709" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1100%2C709&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12381" data-recalc-dims="1" height="709" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1100%2C709&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=300%2C193&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1024%2C660&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=768%2C495&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-5.jpg?resize=1100%2C709&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这就提出了一个挑战：既然键盘记录程序至少具有五种不同的风格，我们如何防御所有这些不同类型的恶意软件？
  </p>
  <p class="graf graf--p">
   Wardle 的答案是搜索诸如键盘记录程序之类的恶意程序的行为，而不仅仅是搜索程序本身。
  </p>
  <p class="graf graf--p">
   例如，一个键盘监听器从您的键盘上窃听了事件流，从而使攻击者可以截获受害者键入的每个键。这将使他们能够获知帐户密码、拦截通信等。
  </p>
  <p class="graf graf--p">
   但是，要真正生效，这些程序必须在您登录计算机后立即运行。这意味着恶意程序通常会永久安装，不需要受害者每次都误点击恶意文件。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ReiKey 和 KnockKnock 可以检测新型恶意软件
   </strong>
  </h3>
  <p class="graf graf--p">
   首先，ReiKey 允许您搜索键盘监听器的最基本特征之一：深入键盘流窃听的程序。寻找键盘流访问功能将使您能够警觉到系统上安装的所有键盘监听器，而不仅是防病毒程序可识别的键盘监听器。
  </p>
  <p class="graf graf--p">
   此外，由于键盘监听器也将永久安装，因此您可以使用另一个名为 KnockKnock 的免费工具来发现它。
  </p>
  <p class="graf graf--p">
   运行 KnockKock 时，它将持久安装的程序分为易于理解的类别。包括恶意软件通常会用来持续运行的程序类型：浏览器扩展、启动项、内核扩展和插件。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12382 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1100%2C566&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1024%2C527&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=768%2C395&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1100%2C566&amp;ssl=1 1100w" data-recalc-dims="1" height="566" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1100%2C566&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12382" data-recalc-dims="1" height="566" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1100%2C566&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1024%2C527&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=768%2C395&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-7.jpg?resize=1100%2C566&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   扫描系统后，KnockKnock 将识别每个永久安装的项目并检查是否已在 VirusTotal 中进行了标记。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12383 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1100%2C428&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?w=1320&amp;ssl=1 1320w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=300%2C117&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1024%2C399&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=768%2C299&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1100%2C428&amp;ssl=1 1100w" data-recalc-dims="1" height="428" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1100%2C428&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12383" data-recalc-dims="1" height="428" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1100%2C428&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?w=1320&amp;ssl=1 1320w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=300%2C117&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1024%2C399&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=768%2C299&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-4.jpg?resize=1100%2C428&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果恶意程序潜伏在您的系统中，则可以通过单击 “Info” 图标来进一步研究细节。
  </p>
  <p class="graf graf--p">
   如果您发现由 VirusTotal 标记的文件并且看起来可疑，这充分表明您的系统已受到恶意软件、广告软件或其他有害程序的破坏。
  </p>
  <p class="graf graf--p">
   下面测试下这些程序，看看可以在 Mac 上找到什么。
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/YKYH7d5vuCU" width="750">
   </iframe>
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    您需要什么
   </strong>
  </h3>
  <p class="graf graf--p">
   要使用 KnockKnock 和 ReiKey，您只需要一个最新版 MacOS 系统来安装它。您还需要互联网连接和浏览器才能下载安装程序。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第一步：从 Objective-see.com 下载工具
   </strong>
  </h3>
  <p class="graf graf--p">
   首先，在 Objective-see.com 上导航至 ReiKey 的产品
   <a class="markup--anchor markup--p-anchor" data-href="https://objective-see.com/products/reikey.html" href="https://objective-see.com/products/reikey.html" rel="noopener noreferrer" target="_blank">
    页面
   </a>
   ，然后在页面左上方的 ReiKey 图标下找到下载链接。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12384 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1100%2C941&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?w=1284&amp;ssl=1 1284w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1024%2C876&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=768%2C657&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1100%2C941&amp;ssl=1 1100w" data-recalc-dims="1" height="941" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1100%2C941&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12384" data-recalc-dims="1" height="941" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1100%2C941&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?w=1284&amp;ssl=1 1284w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1024%2C876&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=768%2C657&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-2.jpg?resize=1100%2C941&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   下载安装程序并解压缩。双击 “ReiKey Installer.app” 文件以启动安装。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第二步：安装 ReiKey
   </strong>
  </h3>
  <p class="graf graf--p">
   安装程序打开后，只需点击 “安装” 按钮即可在 MacOS 系统上安装 ReiKey。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12385 jetpack-lazy-image" data-lazy-sizes="(max-width: 906px) 100vw, 906px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=906%2C392&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?w=906&amp;ssl=1 906w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=300%2C130&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=768%2C332&amp;ssl=1 768w" data-recalc-dims="1" height="392" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=906%2C392&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="906"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12385" data-recalc-dims="1" height="392" sizes="(max-width: 906px) 100vw, 906px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=906%2C392&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?w=906&amp;ssl=1 906w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=300%2C130&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-2.jpg?resize=768%2C332&amp;ssl=1 768w" width="906"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   安装完成后，点击 “下一步” 以关闭安装程序。现在，您的任务栏中应该有一个 ReiKey 图标。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12386 jetpack-lazy-image" data-lazy-sizes="(max-width: 906px) 100vw, 906px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=906%2C384&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?w=906&amp;ssl=1 906w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=300%2C127&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=768%2C326&amp;ssl=1 768w" data-recalc-dims="1" height="384" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=906%2C384&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="906"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12386" data-recalc-dims="1" height="384" sizes="(max-width: 906px) 100vw, 906px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=906%2C384&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?w=906&amp;ssl=1 906w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=300%2C127&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-1.jpg?resize=768%2C326&amp;ssl=1 768w" width="906"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   点击任务栏中的 ReiKey 图标，然后点击 “首选项”。您可以在其中访问配置选项，允许您设置是否在登录时运行该程序，在状态栏中使用图标运行，以及在扫描时是否忽略 Apple 的程序。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12387 jetpack-lazy-image" data-lazy-sizes="(max-width: 1052px) 100vw, 1052px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=1052%2C666&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?w=1052&amp;ssl=1 1052w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=300%2C190&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=1024%2C648&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=768%2C486&amp;ssl=1 768w" data-recalc-dims="1" height="666" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=1052%2C666&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1052"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12387" data-recalc-dims="1" height="666" sizes="(max-width: 1052px) 100vw, 1052px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=1052%2C666&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?w=1052&amp;ssl=1 1052w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=300%2C190&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=1024%2C648&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-1.jpg?resize=768%2C486&amp;ssl=1 768w" width="1052"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   当我运行 Python 键盘记录程序时，在设备上收到以下警报。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12388 jetpack-lazy-image" data-lazy-sizes="(max-width: 732px) 100vw, 732px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?resize=732%2C164&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?w=732&amp;ssl=1 732w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?resize=300%2C67&amp;ssl=1 300w" data-recalc-dims="1" height="164" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?resize=732%2C164&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="732"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12388" data-recalc-dims="1" height="164" sizes="(max-width: 732px) 100vw, 732px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?resize=732%2C164&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?w=732&amp;ssl=1 732w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-1.jpg?resize=300%2C67&amp;ssl=1 300w" width="732"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第三步：扫描键盘监听器
   </strong>
  </h3>
  <p class="graf graf--p">
   现在已经安装并配置了 ReiKey，可以运行扫描了。
  </p>
  <p class="graf graf--p">
   再次点击状态栏中的 ReiKey 图标，这一次点击 “扫描” 选项。将会弹出一个窗口，显示扫描结果，显示是否有程序正窃听你的键盘。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12389 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1100%2C623&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=300%2C170&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1024%2C580&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=768%2C435&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1100%2C623&amp;ssl=1 1100w" data-recalc-dims="1" height="623" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1100%2C623&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12389" data-recalc-dims="1" height="623" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1100%2C623&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=300%2C170&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1024%2C580&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=768%2C435&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-1.jpg?resize=1100%2C623&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在这里可以看到进程。如果您在此处看到某些内容，则意味着某个程序正在监听您的每次按键。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第四步：安装 KnockKnock
   </strong>
  </h3>
  <p class="graf graf--p">
   接下来将安装 KnockKnock 来查找持久性恶意软件。为此，请导航至 “ KnockKnock”
   <a class="markup--anchor markup--p-anchor" data-href="https://objective-see.com/products/knockknock.html" href="https://objective-see.com/products/knockknock.html" rel="noopener noreferrer" target="_blank">
    页面
   </a>
   。在左上角找到该应用的下载图标。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12390 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1100%2C838&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?w=1268&amp;ssl=1 1268w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=300%2C229&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1024%2C780&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=768%2C585&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1100%2C838&amp;ssl=1 1100w" data-recalc-dims="1" height="838" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1100%2C838&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12390" data-recalc-dims="1" height="838" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1100%2C838&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?w=1268&amp;ssl=1 1268w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=300%2C229&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1024%2C780&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=768%2C585&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-1.jpg?resize=1100%2C838&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   下载 KnockKnock 后，您可以直接运行它而无需安装。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第五步：扫描您的MacOS系统
   </strong>
  </h3>
  <p class="graf graf--p">
   运行下载的 “KnockKnock.app” 文件，然后将打开以下窗口。
  </p>
  <p class="graf graf--p">
   首先，单击箭头图标以启动扫描。如果您正在运行最新版本的 MacOS Catalina，则扫描过程将需要您授予它访问各种文件夹和程序的权限。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12391 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1100%2C565&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1024%2C526&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=768%2C395&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1100%2C565&amp;ssl=1 1100w" data-recalc-dims="1" height="565" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1100%2C565&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12391" data-recalc-dims="1" height="565" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1100%2C565&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1024%2C526&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=768%2C395&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11.jpg?resize=1100%2C565&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   扫描系统中的文件后，将显示一个持久安装的程序列表。
  </p>
  <p class="graf graf--p">
   可能会永久安装很多不是恶意的东西，因此请仔细检查每个结果以查看是否可以识别该程序。例如，
   <strong class="markup--strong markup--p-strong">
    如果您有未使用或无法识别的浏览器扩展，那么最好删除它们，不管它们是什么
   </strong>
   。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12392 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1100%2C324&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=300%2C88&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1024%2C302&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=768%2C226&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1100%2C324&amp;ssl=1 1100w" data-recalc-dims="1" height="324" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1100%2C324&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12392" data-recalc-dims="1" height="324" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1100%2C324&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=300%2C88&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1024%2C302&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=768%2C226&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12.jpg?resize=1100%2C324&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   还可以识别具有可疑状态的程序。在这里，看到一个永久安装的脚本是未签名的，如解锁图标所示。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12393 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1100%2C546&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=300%2C149&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1024%2C508&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=768%2C381&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1100%2C546&amp;ssl=1 1100w" data-recalc-dims="1" height="546" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1100%2C546&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12393" data-recalc-dims="1" height="546" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1100%2C546&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=300%2C149&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1024%2C508&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=768%2C381&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13.jpg?resize=1100%2C546&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果想仔细看一下，可以单击 “Info” 图标以显示更多详细信息。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第六步：检查可疑的东西
   </strong>
  </h3>
  <p class="graf graf--p">
   如果想仔细查看文件，可以通过点击 VirusTotal 分数来完成。分数将显示检出率和报告链接。如果要再次提交文件，请点击 “重新扫描” 。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12394 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1100%2C519&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?w=1132&amp;ssl=1 1132w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1024%2C483&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=768%2C362&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1100%2C519&amp;ssl=1 1100w" data-recalc-dims="1" height="519" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1100%2C519&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12394" data-recalc-dims="1" height="519" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1100%2C519&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?w=1132&amp;ssl=1 1132w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1024%2C483&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=768%2C362&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14.jpg?resize=1100%2C519&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   重新发送将使您可以访问详细的报告。在这里，看到了发现的先前标记为未签名的 “Tor” 程序的检测报告。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12395 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12395" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1100%2C664&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/15.jpg?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   看起来该文件不是恶意文件。但是如果确实是恶意文件，那说明您的工作很有效。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    键盘监听程序和持久性恶意软件可能是一个严重的问题
   </strong>
  </h3>
  <p class="graf graf--p">
   普通的 MacOS 用户可能难以识别自己计算机上的恶意软件。借助 ReiKey 和 KnockKnock，可以在安装后立即检测行为不佳的软件。
  </p>
  <p class="graf graf--p">
   如果您担心合作伙伴安装键盘监听程序、雇主对您的计算机进行监视、或者不必要的广告软件在周围闲逛并消耗内存，那么使用这些工具可以轻松地使 MacOS 系统免受间谍软件和持久性恶意软件的侵害。⚪️
  </p>
  <div id="atatags-1611829871-5f430f6e4dc8f">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-12380" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%a3%80%e6%9f%a5macos%e4%b8%8a%e7%9a%84%e6%81%b6%e6%84%8f%e8%bd%af%e4%bb%b6%e5%92%8c%e9%94%ae%e7%9b%98%e7%9b%91%e5%90%ac%e7%a8%8b%e5%ba%8f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-12380" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%a3%80%e6%9f%a5macos%e4%b8%8a%e7%9a%84%e6%81%b6%e6%84%8f%e8%bd%af%e4%bb%b6%e5%92%8c%e9%94%ae%e7%9b%98%e7%9b%91%e5%90%ac%e7%a8%8b%e5%ba%8f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-12380-5f430f6e4e546" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=12380&amp;origin=www.iyouport.org&amp;obj_id=161182987-12380-5f430f6e4e546" id="like-post-wrapper-161182987-12380-5f430f6e4e546">
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
    <a href="https://www.iyouport.org/tag/antisurveillance/" rel="tag">
     antiSurveillance
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/macos/" rel="tag">
     macos
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/malware/" rel="tag">
     malware
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
   <time class="entry-date published" datetime="2020-07-02T00:04:13+08:00">
    2020年7月2日
   </time>
   <time class="updated" datetime="2020-01-19T01:53:47+08:00">
    2020年1月19日
   </time>
  </div>
 </div>
</article>

