---
layout: post
title: "如何在 OS X 中创建加密磁盘映像以便安全储存敏感文件 - iYouPort"
date: 2020-05-26T16:03:38+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-os-x-%e4%b8%ad%e5%88%9b%e5%bb%ba%e5%8a%a0%e5%af%86%e7%a3%81%e7%9b%98%e6%98%a0%e5%83%8f%e4%bb%a5%e4%be%bf%e5%ae%89%e5%85%a8%e5%82%a8%e5%ad%98%e6%95%8f%e6%84%9f%e6%96%87/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-11681 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-encryption tag-os-x tag-security tag-technique tag-technology" id="post-11681">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在 OS X 中创建加密磁盘映像以便安全储存敏感文件
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
   <time class="entry-date published" datetime="2020-05-27T00:03:38+08:00">
    2020年5月27日
   </time>
   <time class="updated" datetime="2019-12-23T00:25:44+08:00">
    2019年12月23日
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
       就像制作自己的加密文件容器一样
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-11682 jetpack-lazy-image" data-lazy-sizes="(max-width: 750px) 100vw, 750px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?resize=750%2C1000&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?w=750&amp;ssl=1 750w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?resize=225%2C300&amp;ssl=1 225w" data-recalc-dims="1" height="1000" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?resize=750%2C1000&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="750"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11682" data-recalc-dims="1" height="1000" sizes="(max-width: 750px) 100vw, 750px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?resize=750%2C1000&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?w=750&amp;ssl=1 750w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/计算机.jpeg?resize=225%2C300&amp;ssl=1 225w" width="750"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   正寻找在 Mac 上加密敏感数据文件夹的方法吗？
  </p>
  <p class="graf graf--p">
   您可以使用 File Vault 加密整个硬盘，但这对大多数人来说可能是过大的选择。幸运的是，OS X 具有内置功能，可让您创建一个加密的磁盘映像。
  </p>
  <p class="graf graf--p">
   打开磁盘映像的唯一方法是输入密码。您可以像普通文件一样复制磁盘映像，除非在Mac上解锁，否则它将不可读。
  </p>
  <p class="graf graf--p">
   总体而言，这就像创建自己的加密文件容器一样。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    创建加密的磁盘映像
   </strong>
  </p>
  <p class="graf graf--p">
   要在Mac上创建磁盘映像（DMG），请首先创建一个包含所有要加密数据的文件夹。
  </p>
  <p class="graf graf--p">
   请注意，创建了磁盘映像后，原始的未加密文件夹仍将保留在您的系统上，您应该立即将其删除。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e4%bc%aa%e8%a3%85%e6%93%a6%e9%99%a4%e2%80%8a-%e2%80%8a-%e5%9c%a8%e7%ba%bf%e9%9a%90%e8%ba%ab%e7%9a%84%e9%87%8d%e8%a6%81%e6%ad%a5%e9%aa%a4%ef%bc%88%e5%b0%91%e6%95%b0%e6%b4%be%e7%8e%a9/" href="https://www.iyouport.org/%e4%bc%aa%e8%a3%85%e6%93%a6%e9%99%a4%e2%80%8a-%e2%80%8a-%e5%9c%a8%e7%ba%bf%e9%9a%90%e8%ba%ab%e7%9a%84%e9%87%8d%e8%a6%81%e6%ad%a5%e9%aa%a4%ef%bc%88%e5%b0%91%e6%95%b0%e6%b4%be%e7%8e%a9/" rel="noopener noreferrer" target="_blank">
     伪装+擦除 — — 在线隐身的重要步骤（少数派玩家）
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   首先，请转到 “应用程序” 或单击右上角的 Spotlight 图标（放大镜）并键入 “磁盘工具”，然后打开 “磁盘工具”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11683 jetpack-lazy-image" data-lazy-sizes="(max-width: 1016px) 100vw, 1016px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=1016%2C544&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?w=1016&amp;ssl=1 1016w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=300%2C161&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=768%2C411&amp;ssl=1 768w" data-recalc-dims="1" height="544" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=1016%2C544&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1016"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11683" data-recalc-dims="1" height="544" sizes="(max-width: 1016px) 100vw, 1016px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=1016%2C544&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?w=1016&amp;ssl=1 1016w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=300%2C161&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-18.png?resize=768%2C411&amp;ssl=1 768w" width="1016"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   打开磁盘工具实用程序后，继续并单击顶部的
   <strong class="markup--strong markup--p-strong">
    File
   </strong>
   —
   <strong class="markup--strong markup--p-strong">
    New Image
   </strong>
   <strong class="markup--strong markup--p-strong">
    — Image from Folder
   </strong>
   .
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11684 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1100%2C254&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?w=1108&amp;ssl=1 1108w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=300%2C69&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1024%2C237&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=768%2C177&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1100%2C254&amp;ssl=1 1100w" data-recalc-dims="1" height="254" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1100%2C254&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11684" data-recalc-dims="1" height="254" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1100%2C254&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?w=1108&amp;ssl=1 1108w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=300%2C69&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1024%2C237&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=768%2C177&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-15.png?resize=1100%2C254&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，选择您要加密为磁盘映像的文件夹。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11685 jetpack-lazy-image" data-lazy-sizes="(max-width: 1070px) 100vw, 1070px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=1070%2C406&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?w=1070&amp;ssl=1 1070w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=300%2C114&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=1024%2C389&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=768%2C291&amp;ssl=1 768w" data-recalc-dims="1" height="406" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=1070%2C406&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1070"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11685" data-recalc-dims="1" height="406" sizes="(max-width: 1070px) 100vw, 1070px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=1070%2C406&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?w=1070&amp;ssl=1 1070w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=300%2C114&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=1024%2C389&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-13.png?resize=768%2C291&amp;ssl=1 768w" width="1070"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   点击 “打开”，您将打开 “另存为” 对话框，在其中您需要给新映像起一个名字，然后从几个选项中进行选择。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11686 jetpack-lazy-image" data-lazy-sizes="(max-width: 836px) 100vw, 836px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=836%2C450&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?w=836&amp;ssl=1 836w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=300%2C161&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=768%2C413&amp;ssl=1 768w" data-recalc-dims="1" height="450" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=836%2C450&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="836"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11686" data-recalc-dims="1" height="450" sizes="(max-width: 836px) 100vw, 836px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=836%2C450&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?w=836&amp;ssl=1 836w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=300%2C161&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-10.png?resize=768%2C413&amp;ssl=1 768w" width="836"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   默认情况下，它将新磁盘映像保存在您要加密的同一文件夹中。在 “Encryption” 下，可以选择128位或256位AES加密。
  </p>
  <p class="graf graf--p">
   加密等级越高，速度会随之下降，但您的数据将得到更好的保护。选择任何加密选项后，系统都会要求您输入密码。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11687 jetpack-lazy-image" data-lazy-sizes="(max-width: 848px) 100vw, 848px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=848%2C450&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?w=848&amp;ssl=1 848w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=300%2C159&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=768%2C408&amp;ssl=1 768w" data-recalc-dims="1" height="450" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=848%2C450&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="848"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11687" data-recalc-dims="1" height="450" sizes="(max-width: 848px) 100vw, 848px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=848%2C450&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?w=848&amp;ssl=1 848w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=300%2C159&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-7.png?resize=768%2C408&amp;ssl=1 768w" width="848"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   确保输入一个非常长且很强的密码，因为这是保护数据的唯一安全措施。
  </p>
  <p class="graf graf--p">
   如果政府间谍控制了您的文件，他们可以尝试使用暴力攻击来破解密码。包括字母、数字和符号在内的超过12个字符的任何密码都将花费很长时间才能破解，即使是在非常快的计算机或计算机集群上也是如此。
  </p>
  <p class="graf graf--p">
   对于格式，您可以选择 “读取/写入磁盘映像”，以便可以随时读取和写入。
  </p>
  <p class="graf graf--p">
   单击保存，将创建新映像。请注意，如果您选择256位AES加密，则创建磁盘映像可能需要花费一些时间。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11688 jetpack-lazy-image" data-lazy-sizes="(max-width: 756px) 100vw, 756px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?resize=756%2C240&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?w=756&amp;ssl=1 756w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?resize=300%2C95&amp;ssl=1 300w" data-recalc-dims="1" height="240" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?resize=756%2C240&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="756"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11688" data-recalc-dims="1" height="240" sizes="(max-width: 756px) 100vw, 756px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?resize=756%2C240&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?w=756&amp;ssl=1 756w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/6-8.png?resize=300%2C95&amp;ssl=1 300w" width="756"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，当您想要打开该文件时，会提示您输入密码。⚠️注意，确保
   <strong class="markup--strong markup--p-strong">
    不要
   </strong>
   在 “我的钥匙串” 框中选中 “记住密码”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11689 jetpack-lazy-image" data-lazy-sizes="(max-width: 806px) 100vw, 806px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=806%2C334&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?w=806&amp;ssl=1 806w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=300%2C124&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=768%2C318&amp;ssl=1 768w" data-recalc-dims="1" height="334" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=806%2C334&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="806"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11689" data-recalc-dims="1" height="334" sizes="(max-width: 806px) 100vw, 806px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=806%2C334&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?w=806&amp;ssl=1 806w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=300%2C124&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/7-8.png?resize=768%2C318&amp;ssl=1 768w" width="806"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您选择 “读/写” 作为 “格式”，则可以随时在加密的映像中添加或删除项目。当您向其中添加内容时，它将自动被加密和保护。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11690 jetpack-lazy-image" data-lazy-sizes="(max-width: 592px) 100vw, 592px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?resize=592%2C236&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?w=592&amp;ssl=1 592w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?resize=300%2C120&amp;ssl=1 300w" data-recalc-dims="1" height="236" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?resize=592%2C236&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="592"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11690" data-recalc-dims="1" height="236" sizes="(max-width: 592px) 100vw, 592px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?resize=592%2C236&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?w=592&amp;ssl=1 592w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/8-7.png?resize=300%2C120&amp;ssl=1 300w" width="592"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    创建空白的加密映像
   </strong>
  </p>
  <p class="graf graf--p">
   还值得注意的是，您不是必须要从文件夹中创建加密映像。您也可以打开“磁盘工具”，然后单击
   <strong class="markup--strong markup--p-strong">
    File
   </strong>
   —
   <strong class="markup--strong markup--p-strong">
    New Image
   </strong>
   —
   <strong class="markup--strong markup--p-strong">
    Blank Image
   </strong>
   .
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11691 jetpack-lazy-image" data-lazy-sizes="(max-width: 852px) 100vw, 852px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=852%2C650&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?w=852&amp;ssl=1 852w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=300%2C229&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=768%2C586&amp;ssl=1 768w" data-recalc-dims="1" height="650" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=852%2C650&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="852"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11691" data-recalc-dims="1" height="650" sizes="(max-width: 852px) 100vw, 852px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=852%2C650&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?w=852&amp;ssl=1 852w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=300%2C229&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/9-7.png?resize=768%2C586&amp;ssl=1 768w" width="852"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在这里，您将看到更多其他选择。首先，您可以指定磁盘映像的大小和文件系统格式。建议您坚持使用 OS X 扩展（日志式）以便支持所有安全功能。
  </p>
  <p class="graf graf--p">
   对于分区，可以从 “单个分区– GUID分区图” 或 “单个分区– Apple分区图” 中选择。所有其他设置与前面提到的相同。
  </p>
  <p class="graf graf--p">
   总体而言，这是保护 Mac 上的数据免遭窥视的好方法，而无需安装任何第三方软件或在整个系统上启用 File Vault。您学会了吗？⚪️
  </p>
  <div id="atatags-1611829871-5f426be16d097">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-11681" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-os-x-%e4%b8%ad%e5%88%9b%e5%bb%ba%e5%8a%a0%e5%af%86%e7%a3%81%e7%9b%98%e6%98%a0%e5%83%8f%e4%bb%a5%e4%be%bf%e5%ae%89%e5%85%a8%e5%82%a8%e5%ad%98%e6%95%8f%e6%84%9f%e6%96%87/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-11681" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-os-x-%e4%b8%ad%e5%88%9b%e5%bb%ba%e5%8a%a0%e5%af%86%e7%a3%81%e7%9b%98%e6%98%a0%e5%83%8f%e4%bb%a5%e4%be%bf%e5%ae%89%e5%85%a8%e5%82%a8%e5%ad%98%e6%95%8f%e6%84%9f%e6%96%87/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-11681-5f426be16df62" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=11681&amp;origin=www.iyouport.org&amp;obj_id=161182987-11681-5f426be16df62" id="like-post-wrapper-161182987-11681-5f426be16df62">
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
    <a href="https://www.iyouport.org/tag/encryption/" rel="tag">
     encryption
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/os-x/" rel="tag">
     OS X
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
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
   <time class="entry-date published" datetime="2020-05-27T00:03:38+08:00">
    2020年5月27日
   </time>
   <time class="updated" datetime="2019-12-23T00:25:44+08:00">
    2019年12月23日
   </time>
  </div>
 </div>
</article>

