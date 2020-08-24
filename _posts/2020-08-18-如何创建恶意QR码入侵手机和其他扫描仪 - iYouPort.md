---
layout: post
title: "如何创建恶意QR码入侵手机和其他扫描仪 - iYouPort"
date: 2020-08-18T16:04:25+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%9b%e5%bb%ba%e6%81%b6%e6%84%8fqr%e7%a0%81%e5%85%a5%e4%be%b5%e6%89%8b%e6%9c%ba%e5%92%8c%e5%85%b6%e4%bb%96%e6%89%ab%e6%8f%8f%e4%bb%aa/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-13473 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-hacking tag-qr-codes tag-security tag-selfcare tag-technology tag-tools" id="post-13473">
 <header class="entry-header">
  <h1 class="entry-title">
   如何创建恶意QR码入侵手机和其他扫描仪
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-08-19T00:04:25+08:00">
    2020年8月19日
   </time>
   <time class="updated" datetime="2020-05-24T01:30:44+08:00">
    2020年5月24日
   </time>
  </span>
  <span class="word-count">
   4 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       QR码不安全，希望这篇文章能帮助您提高安全意识
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-13481 jetpack-lazy-image" data-lazy-sizes="(max-width: 894px) 100vw, 894px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=894%2C994&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?w=894&amp;ssl=1 894w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=270%2C300&amp;ssl=1 270w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=768%2C854&amp;ssl=1 768w" data-recalc-dims="1" height="994" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=894%2C994&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="894"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13481" data-recalc-dims="1" height="994" sizes="(max-width: 894px) 100vw, 894px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=894%2C994&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?w=894&amp;ssl=1 894w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=270%2C300&amp;ssl=1 270w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/0-1.png?resize=768%2C854&amp;ssl=1 768w" width="894"/>
   </noscript>
  </p>
  <p class="p1">
   <span class="s1">
    如今
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码已经无处不在，这使得扫描它们的扫描仪成为了黑客的主要攻击目标。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    由于许多此类专有扫描设备中存在缺陷，因此可以制作自定义的二维码来利用这些常见漏洞。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    名为
   </span>
   <span class="s2">
    QRGen
   </span>
   <span class="s1">
    的工具可以创建恶意二维码，甚至可以编码定制的有效载荷。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    这些攻击之所以有效，是因为除非先进行扫描，否则人类将无法直接读取或理解
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码中包含的信息，从而可能将试图解密该代码的任何设备暴露于其中包含的漏洞。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    甚至智能手机等
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码扫描仪也容易受到此类攻击，因为
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码能够诱使
   </span>
   <span class="s2">
    iPhone
   </span>
   <span class="s1">
    用户访问恶意站点。
   </span>
  </p>
  <p>
   以下是中国的电视台近期发布过的一个视频。该视频似乎可以说明，这种攻击方式也许已经在中国流行：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="618" src="//player.vimeo.com/video/421949831?title=0&amp;byline=0&amp;portrait=0&amp;color=8dc7dc" width="750">
   </iframe>
  </p>
  <h3 class="p1">
   <span class="s1">
    <b>
     什么是
    </b>
   </span>
   <span class="s2">
    <b>
     QR
    </b>
   </span>
   <span class="s1">
    <b>
     码？
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码是机器可读的数据格式，可用于需要自动扫描的任何内容。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    在
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码之前，还有其他几种称为线性条形码的格式，它们也以易于读取的方式存储数据。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    您可能已经在产品上看到过
   </span>
   <span class="s2">
    UPC
   </span>
   <span class="s1">
    条形码，如下图所示，该条形码通常用于识别待售商品，以便收银员可以对其进行扫描以加快结帐速度。
   </span>
  </p>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13474 jetpack-lazy-image" data-lazy-sizes="(max-width: 803px) 100vw, 803px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=803%2C333&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?w=803&amp;ssl=1 803w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=300%2C124&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=768%2C318&amp;ssl=1 768w" data-recalc-dims="1" height="333" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=803%2C333&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="803"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13474" data-recalc-dims="1" height="333" sizes="(max-width: 803px) 100vw, 803px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=803%2C333&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?w=803&amp;ssl=1 803w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=300%2C124&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-4.jpg?resize=768%2C318&amp;ssl=1 768w" width="803"/>
    </noscript>
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    自
   </span>
   <span class="s2">
    1974
   </span>
   <span class="s1">
    年以来，一直在使用
   </span>
   <span class="s2">
    UPC
   </span>
   <span class="s1">
    条形码或通用产品代码。其目的主要是在零售中，并且仅对一系列数字进行编码，从而限制了其应用范围。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    尽管存在许多不同类型的线性条形码，但它们无法存储大量信息。诸如运输和汽车制造业之类的应用领域需要一个能够容纳更多数据的标准。
   </span>
  </p>
  <h3 class="p4">
   <span class="s3">
    <b>
     二维条形码以获取更多数据
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s1">
    解决线性条形码的局限性的答案就是二维条形码，它具有更大的存储能力，可以防止物理损坏影响其中的信息。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    第一代二维码如下面这样，如今仍在广泛使用。
   </span>
  </p>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13475 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1100%2C456&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=300%2C124&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1024%2C425&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=768%2C319&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1100%2C456&amp;ssl=1 1100w" data-recalc-dims="1" height="456" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1100%2C456&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13475" data-recalc-dims="1" height="456" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1100%2C456&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=300%2C124&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1024%2C425&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=768%2C319&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2-4.jpg?resize=1100%2C456&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </span>
  </p>
  <p class="p1">
   <span class="s2">
    Aztec
   </span>
   <span class="s1">
    代码是
   </span>
   <span class="s2">
    2D
   </span>
   <span class="s1">
    的机器可读代码，在很多方面与
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    代码相似，并且可以保存比线性条形码更多的信息。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    最初是为物流而开发的，当需要存储的数据量超出线性条形码所能提供的数量时，您可能就会看到把它用于包装和信封的情况。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    其他类型的
   </span>
   <span class="s2">
    2D
   </span>
   <span class="s1">
    码可能包含大量数据。例如，在美国大多数驾驶执照背面都可以找到
   </span>
   <span class="s2">
    PDF417
   </span>
   <span class="s1">
    格式的二维码，最多可以编入
   </span>
   <span class="s2">
    1800
   </span>
   <span class="s1">
    个
   </span>
   <span class="s2">
    ASCII
   </span>
   <span class="s1">
    字符。
   </span>
  </p>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13476 jetpack-lazy-image" data-lazy-sizes="(max-width: 644px) 100vw, 644px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?resize=644%2C180&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?w=644&amp;ssl=1 644w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?resize=300%2C84&amp;ssl=1 300w" data-recalc-dims="1" height="180" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?resize=644%2C180&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="644"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13476" data-recalc-dims="1" height="180" sizes="(max-width: 644px) 100vw, 644px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?resize=644%2C180&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?w=644&amp;ssl=1 644w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/3-4.jpg?resize=300%2C84&amp;ssl=1 300w" width="644"/>
    </noscript>
   </span>
   <span class="s1">
    像上面的
   </span>
   <span class="s2">
    PDF417
   </span>
   <span class="s1">
    码可以编码文本、数字、文件和实际数据字节，并且它们比线性条形码更能抵抗错误。像
   </span>
   <span class="s2">
    FedEx
   </span>
   <span class="s1">
    这样的公司在装箱单上使用
   </span>
   <span class="s2">
    PDF417
   </span>
   <span class="s1">
    和其他条码的组合来实现自动交付和跟踪。
   </span>
  </p>
  <h3 class="p4">
   <span class="s3">
    <b>
     它可以处理更多数据吗
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码起源于汽车工业，是一种跟踪汽车制造过程的方法，但很快在该行业之外迅速流行。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    与其他二维码类似，
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码可以打包大量数据，甚至在分辨率降低或以其他方式损坏时也可以使用。
   </span>
  </p>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13477 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1100%2C456&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=300%2C124&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1024%2C425&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=768%2C319&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1100%2C456&amp;ssl=1 1100w" data-recalc-dims="1" height="456" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1100%2C456&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13477" data-recalc-dims="1" height="456" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1100%2C456&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=300%2C124&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1024%2C425&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=768%2C319&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/4-3.jpg?resize=1100%2C456&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </span>
   <span class="s1">
    一个
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码可以包含
   </span>
   <span class="s2">
    4296
   </span>
   <span class="s1">
    个
   </span>
   <span class="s2">
    ASCII
   </span>
   <span class="s1">
    字符，这使得您可以对它们进行更多的创作。您甚至可以格式化数据以便在阅读器设备识别它时触发操作。
   </span>
  </p>
  <p class="p1">
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码具有更大的数据容量，这是一种引人入胜的有趣应用，可以使用它们来管理
   </span>
   <span class="s2">
    Wi-Fi
   </span>
   <span class="s1">
    连接，而无需以纯文本形式共享密码。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    通过编码以下字符串您可以创建一个
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码，以将
   </span>
   <span class="s2">
    Android
   </span>
   <span class="s1">
    用户自动登录到一个
   </span>
   <span class="s2">
    Wi-Fi
   </span>
   <span class="s1">
    网络。
   </span>
  </p>
  <pre class="syntax-highlighted"><code>WIFI:S:&lt;SSID&gt;;T:&lt;WPA|WEP|&gt;;P:&lt;password&gt;;H:&lt;true|false|&gt;;</code></pre>
  <p class="p1">
   <span class="s1">
    任何在
   </span>
   <span class="s2">
    Android
   </span>
   <span class="s1">
    设备上扫描该
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码的人都会发现自己已自动登录到已编码的
   </span>
   <span class="s2">
    Wi-Fi
   </span>
   <span class="s1">
    网络。要了解
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码可以打包多少数据，请查看下面这个：
   </span>
  </p>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13478 jetpack-lazy-image" data-lazy-sizes="(max-width: 600px) 100vw, 600px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?resize=600%2C249&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?w=600&amp;ssl=1 600w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?resize=300%2C125&amp;ssl=1 300w" data-recalc-dims="1" height="249" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?resize=600%2C249&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="600"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13478" data-recalc-dims="1" height="249" sizes="(max-width: 600px) 100vw, 600px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?resize=600%2C249&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?w=600&amp;ssl=1 600w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/5-2.jpg?resize=300%2C125&amp;ssl=1 300w" width="600"/>
    </noscript>
   </span>
   <span class="s1">
    上图中包含以下文本：
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">Version 40 QR Code can contain up to 1852 chars.
A QR code (abbreviated from Quick Response code) is a type of matrix barcode (or two-dimensional code) that is designed to be read by smartphones.
The code consists of black modules arranged in a square pattern on a white background. The information encoded may be text, a URL, or other data.
Created by Toyota subsidiary Denso Wave in 1994, the QR code is one of the most popular types of two-dimensional barcodes.
The QR code was designed to allow its contents to be decoded at high speed.
The technology has seen frequent use in Japan and South Korea; the United Kingdom is the seventh-largest national consumer of QR codes.
Although initially used for tracking parts in vehicle manufacturing, QR codes now are used in a much broader context,
including both commercial tracking applications and convenience-oriented applications aimed at mobile phone users (termed mobile tagging).
QR codes may be used to display text to the user, to add a vCard contact to the user's device, to open a Uniform Resource Identifier (URI), or to compose an e-mail or text message.
Users can generate and print their own QR codes for others to scan and use by visiting one of several paid and free QR code generating sites or apps.</code></pre>
  <p class="p1">
   <span class="s1">
    图片中包含的文字大于
   </span>
   <span class="s4">
    QR
   </span>
   <span class="s1">
    码本身。这种能力使
   </span>
   <span class="s4">
    QR
   </span>
   <span class="s1">
    码既强大又危险，因为如果不先扫描它们你就无法理解其中的数据。
   </span>
  </p>
  <h3 class="p10">
   <span class="s3">
    <b>
     使用
    </b>
   </span>
   <span class="s1">
    <b>
     QRgen
    </b>
   </span>
   <span class="s3">
    <b>
     进行
    </b>
   </span>
   <span class="s1">
    <b>
     QR
    </b>
   </span>
   <span class="s3">
    <b>
     码黑客
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s1">
    由于人们无法在实际扫描前发现恶意
   </span>
   <span class="s4">
    QR
   </span>
   <span class="s1">
    码，因此
   </span>
   <span class="s4">
    QR
   </span>
   <span class="s1">
    码相对较大的有效载荷可以为黑客带来很多好处，尤其是与易受攻击的设备结合使用时。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    今天将用来创建它们的工具称为
   </span>
   <span class="s4">
    QRGen
   </span>
   <span class="s1">
    。它将把一个有效载荷使用
   </span>
   <span class="s4">
    Python
   </span>
   <span class="s1">
    编入
   </span>
   <span class="s4">
    QR
   </span>
   <span class="s1">
    码。
   </span>
  </p>
  <p class="p1">
   <span class="s4">
    QRGen
   </span>
   <span class="s1">
    带有一个内置的库，其中包含许多流行的漏洞利用程序，如果您有时间坐下来寻找对于您的目标设备来说哪个可行的话，这将非常有用。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    在运行脚本时，可以使用
   </span>
   <span class="s2">
    <b>
     -l
    </b>
   </span>
   <span class="s1">
    加数字来访问
   </span>
   <span class="s2">
    QRGen
   </span>
   <span class="s1">
    上可用的有效载荷类别。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    数字和有效载荷类型如下：
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     0 :
    </b>
   </span>
   <span class="s1">
    SQL Injections
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     1 :
    </b>
   </span>
   <span class="s1">
    XSS
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     2 :
    </b>
   </span>
   <span class="s1">
    Command Injection
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     3 :
    </b>
   </span>
   <span class="s1">
    Format String
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     4 :
    </b>
   </span>
   <span class="s1">
    XXE
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     5 :
    </b>
   </span>
   <span class="s1">
    String Fuzzing
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     6 :
    </b>
   </span>
   <span class="s1">
    SSI Injection
   </span>
  </p>
  <p class="p11">
   <span class="s5">
    <b>
     7 :
    </b>
   </span>
   <span class="s1">
    LFI / Directory Traversal
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    要创建一堆包含字符串模糊有效载荷的恶意
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    代码，只需运行
   </span>
   <span class="s2">
    <b>
     QRGen.py -l 5
    </b>
   </span>
   <span class="s1">
    即可创建许多测试码。
   </span>
  </p>
  <h3 class="p4">
   <span class="s3">
    <b>
     你需要什么
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s1">
    要使用
   </span>
   <span class="s2">
    QRGen
   </span>
   <span class="s1">
    ，您需要安装
   </span>
   <span class="s2">
    Python3
   </span>
   <span class="s1">
    。因为它是跨平台的，所以应该可以在任何操作系统上进行。
   </span>
  </p>
  <p class="p3">
   <span class="s3">
    您还需要一些
   </span>
   <span class="s1">
    Python
   </span>
   <span class="s3">
    库，包括
   </span>
   <span class="s1">
    qrcode
   </span>
   <span class="s3">
    、
   </span>
   <span class="s1">
    Pillow
   </span>
   <span class="s3">
    和
   </span>
   <span class="s1">
    argparse
   </span>
   <span class="s3">
    ，我们将在安装过程中安装它们。
   </span>
  </p>
  <h3 class="p3">
   <span class="s3">
    <b>
     步骤
    </b>
   </span>
   <span class="s1">
    <b>
     1
    </b>
   </span>
   <span class="s3">
    <b>
     ：安装
    </b>
   </span>
   <span class="s1">
    <b>
     QRGen
    </b>
   </span>
  </h3>
  <p class="p3">
   <span class="s3">
    要开始使用
   </span>
   <span class="s1">
    QRGen
   </span>
   <span class="s3">
    ，需要从
   </span>
   <a href="https://github.com/h0nus/QRGen" rel="noopener noreferrer" target="_blank">
    <span class="s1">
     GitHub
    </span>
   </a>
   <span class="s3">
    <a href="https://github.com/h0nus/QRGen" rel="noopener noreferrer" target="_blank">
     下载存储库
    </a>
    ：
   </span>
   <span class="s3">
    。通过在终端窗口中运行以下命令来执行此操作。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~$ git clone https://github.com/h0nus/QRGen

Cloning into 'QRGen'...
remote: Enumerating objects: 86, done.
remote: Counting objects: 100% (86/86), done.
remote: Compressing objects: 100% (78/78), done.
remote: Total 86 (delta 26), reused 4 (delta 1), pack-reused 0
Unpacking objects: 100% (86/86), done.</code></pre>
  <p class="p1">
   <span class="s1">
    存储库下载完毕后，将切换（
   </span>
   <span class="s2">
    cd
   </span>
   <span class="s1">
    ）到其目录并列出（
   </span>
   <span class="s2">
    ls
   </span>
   <span class="s1">
    ）其内容以查找需求文件。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~$ cd QRGen
~/QRGen$ ls

demo.gif  qrgen.py  README.md  requirements.txt  words</code></pre>
  <p class="p13">
   <span class="s1">
    现在，您需要确保已经安装了所有必需的库。为此，使用以下命令运行安装文件。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen$ pip3 install -r requirements.txt

Collecting qrcode (from -r requirements.txt (line 1))
  Downloading https://files.pythonhosted.org/packages/42/87/4a3a77e59ab7493d64da1f69bf1c2e899a4cf81e51b2baa855e8cc8115be/qrcode-6.1-py2.py3-none-any.whl
Requirement already satisfied: Pillow in /usr/lib/python3/dist-packages (from -r requirements.txt (line 2)) (5.4.1)
Collecting argparse (from -r requirements.txt (line 3))
  Downloading https://files.pythonhosted.org/packages/f2/94/3af39d34be01a24a6e65433d19e107099374224905f1e0cc6bbe1fd22a2f/argparse-1.4.0-py2.py3-none-any.whl
Requirement already satisfied: six in /usr/lib/python3/dist-packages (from qrcode-&gt;-r requirements.txt (line 1)) (1.12.0)
Installing collected packages: qrcode, argparse
Successfully installed argparse-1.4.0 qrcode-6.1</code></pre>
  <p class="p1">
   <span class="s1">
    如果不起作用，您也可以使用此替代命令进行安装。
   </span>
  </p>
  <pre class="syntax-highlighted"><code>~/QRGen$ python3 -m pip install -r requirements.txt</code></pre>
  <h3 class="p4">
   <span class="s3">
    <b>
     步骤
    </b>
   </span>
   <span class="s2">
    <b>
     2
    </b>
   </span>
   <span class="s3">
    <b>
     ：根据有效载荷类型生成恶意
    </b>
   </span>
   <span class="s2">
    <b>
     QR
    </b>
   </span>
   <span class="s3">
    <b>
     码
    </b>
   </span>
  </h3>
  <p class="p3">
   <span class="s3">
    现在，您应该可以通过键入
   </span>
   <span class="s1">
    <b>
     python3 qrgen.py
    </b>
   </span>
   <span class="s3">
    来运行脚本。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen$ python3 qrgen.py

  e88 88e   888 88e    e88'Y88
 d888 888b  888 888D  d888  'Y   ,e e,  888 8e
C8888 8888D 888 88"  C8888 eeee d88 88b 888 88b
 Y888 888P  888 b,    Y888 888P 888   , 888 888
  "88 88"   888 88b,   "88 88"   "YeeP" 888 888
      b
      8b,    QRGen ~ v0.1 ~ by h0nus

usage: qrgen.py -l [number]
usage: qrgen.py -w [/path/to/custom/wordlist]

Payload lists:
0 : SQL Injections
1 : XSS
2 : Command Injection
3 : Format String
4 : XXE
5 : String Fuzzing
6 : SSI Injection
7 : LFI / Directory Traversal

Tool to generate Malformed QRCodes for fuzzing QRCode parsers/reader

optional arguments:
  -h, --help            show this help message and exit

Options for QRGen:
  --list {0,1,2,3,4,5,6,7}, -l {0,1,2,3,4,5,6,7}
                        Set wordlist to use
  --wordlist WORDLIST, -w WORDLIST
                        Use a custom wordlist

Pay attention everywhere, even in the dumbest spot</code></pre>
  <p class="p1">
   <span class="s1">
    如您所见，创建有效载荷非常简单。首先创建一个包含格式化字符串的有效载荷。所以如下这样运行
   </span>
   <span class="s2">
    QRGen
   </span>
   <span class="s1">
    。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen$ python3 qrgen.py -l 5

  e88 88e   888 88e    e88'Y88
 d888 888b  888 888D  d888  'Y   ,e e,  888 8e
C8888 8888D 888 88"  C8888 eeee d88 88b 888 88b
 Y888 888P  888 b,    Y888 888P 888   , 888 888
  "88 88"   888 88b,   "88 88"   "YeeP" 888 888
      b
      8b,    QRGen ~ v0.1 ~ by h0nus

Payload path generated..
Path already cleared or deleted..
Generated 46 payloads!
Opening last generated payload...
Thanks for using QRGen, made by H0nus..</code></pre>
  <p class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13479 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1100%2C474&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=300%2C129&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1024%2C442&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=768%2C331&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1100%2C474&amp;ssl=1 1100w" data-recalc-dims="1" height="474" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1100%2C474&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13479" data-recalc-dims="1" height="474" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1100%2C474&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=300%2C129&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1024%2C442&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=768%2C331&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/04/6-2.jpg?resize=1100%2C474&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </span>
   <span class="s1">
    要查看其余的有效载荷，您可以键入
   </span>
   <span class="s2">
    <b>
     cd genqr
    </b>
   </span>
   <span class="s1">
    更改为创建它们的目录及
   </span>
   <span class="s2">
    <b>
     ls
    </b>
   </span>
   <span class="s1">
    其内容。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen$ cd genqr
~/QRGen/genqr$ ls

payload-0.png   payload-19.png  payload-28.png  payload-37.png  payload-4.png
payload-10.png  payload-1.png   payload-29.png  payload-38.png  payload-5.png
payload-11.png  payload-20.png  payload-2.png   payload-39.png  payload-6.png
payload-12.png  payload-21.png  payload-30.png  payload-3.png   payload-7.png
payload-13.png  payload-22.png  payload-31.png  payload-40.png  payload-8.png
payload-14.png  payload-23.png  payload-32.png  payload-41.png  payload-9.png
payload-15.png  payload-24.png  payload-33.png  payload-42.png
payload-16.png  payload-25.png  payload-34.png  payload-43.png
payload-17.png  payload-26.png  payload-35.png  payload-44.png
payload-18.png  payload-27.png  payload-36.png  payload-45.png</code></pre>
  <h3 class="p4">
   <span class="s3">
    <b>
     步骤
    </b>
   </span>
   <span class="s2">
    <b>
     3
    </b>
   </span>
   <span class="s3">
    <b>
     ：对自定义有效载荷进行编码
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s1">
    要编码一个自定义有效载荷，首先可以创建一个文本文件，其中包含我们要编码的内容。
   </span>
  </p>
  <p class="p3">
   <span class="s3">
    首先，可以通过键入
   </span>
   <span class="s1">
    <b>
     nano badstuff.txt
    </b>
   </span>
   <span class="s3">
    创建一个文本文件：
   </span>
  </p>
  <pre class="syntax-highlighted"><code>~/QRGen/genqr$ nano badstuff.txt</code></pre>
  <p class="p1">
   <span class="s1">
    在该文本文件中可以放置有效载荷。下面的一个是
   </span>
   <span class="s2">
    forkbomb
   </span>
   <span class="s1">
    。可以在
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码扫描仪上起效吗？谁知道呢 ……
   </span>
  </p>
  <pre class="syntax-highlighted"><code>:(){ :|: &amp; };:</code></pre>
  <p class="p1">
   <span class="s1">
    可以通过按
   </span>
   <span class="s2">
    Control X
   </span>
   <span class="s1">
    进行保存，然后按
   </span>
   <span class="s2">
    <b>
     Y
    </b>
   </span>
   <span class="s1">
    并按
   </span>
   <span class="s2">
    Enter
   </span>
   <span class="s1">
    确认保存。现在，您应该看到一个包含有效载荷的文本文件。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen/genqr$ ls

badstuff.txt    payload-18.png  payload-27.png  payload-36.png  payload-45.png
payload-0.png   payload-19.png  payload-28.png  payload-37.png  payload-4.png
payload-10.png  payload-1.png   payload-29.png  payload-38.png  payload-5.png
payload-11.png  payload-20.png  payload-2.png   payload-39.png  payload-6.png
payload-12.png  payload-21.png  payload-30.png  payload-3.png   payload-7.png
payload-13.png  payload-22.png  payload-31.png  payload-40.png  payload-8.png
payload-14.png  payload-23.png  payload-32.png  payload-41.png  payload-9.png
payload-15.png  payload-24.png  payload-33.png  payload-42.png
payload-16.png  payload-25.png  payload-34.png  payload-43.png
payload-17.png  payload-26.png  payload-35.png  payload-44.png</code></pre>
  <p class="p1">
   <span class="s1">
    要将您的有效载荷写入
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码使用
   </span>
   <span class="s2">
    <b>
     -w
    </b>
   </span>
   <span class="s1">
    。假设您的有效载荷文件名为
   </span>
   <span class="s2">
    “badstuff.txt”
   </span>
   <span class="s1">
    ，那么命令应该如下面这样（记住请先更改回
   </span>
   <span class="s2">
    QRGen
   </span>
   <span class="s1">
    目录）。
   </span>
  </p>
  <pre class="syntax-highlighted"><code class="language-unknown">~/QRGen/genqr$ cd ..
~/QRGen$ python3 qrgen.py -w '/username/QRGen/genqr/badstuff.txt'

  e88 88e   888 88e    e88'Y88
 d888 888b  888 888D  d888  'Y   ,e e,  888 8e
C8888 8888D 888 88"  C8888 eeee d88 88b 888 88b
 Y888 888P  888 b,    Y888 888P 888   , 888 888
  "88 88"   888 88b,   "88 88"   "YeeP" 888 888
      b
      8b,    QRGen ~ v0.1 ~ by h0nus

Payload path exist, continuing...
Path already cleared or deleted..
Generated 1 payloads!
Opening last generated payload...
Thanks for using QRGen, made by H0nus..</code></pre>
  <p class="p1">
   <span class="s1">
    对于上面的
   </span>
   <span class="s2">
    forkbomb
   </span>
   <span class="s1">
    有效载荷，它会生成下面这样的
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码，然后将其弹出。
   </span>
  </p>
  <h3 class="p3">
   <span class="s1">
    <img alt="" class="aligncenter size-full wp-image-13480 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1100%2C474&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=300%2C129&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1024%2C442&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=768%2C331&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1100%2C474&amp;ssl=1 1100w" data-recalc-dims="1" height="474" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1100%2C474&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-13480" data-recalc-dims="1" height="474" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1100%2C474&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=300%2C129&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1024%2C442&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=768%2C331&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/7-1.jpg?resize=1100%2C474&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </span>
   <span class="s3">
    <b>
     并非所有扫码都是明智的
    </b>
   </span>
  </h3>
  <p class="p1">
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码可以编入很多信息，正如本文所演示的那样，甚至可以对其进行格式化以使设备执行诸如连接到
   </span>
   <span class="s2">
    Wi-Fi
   </span>
   <span class="s1">
    网络之类的操作。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    这使得扫描
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    码具有风险，因为在将设备暴露于内部任何有效载荷之前人们无法读取信息。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    如果您扫描似乎可疑的
   </span>
   <span class="s2">
    QR
   </span>
   <span class="s1">
    代码，请注意该码试图启动的内容，并且不要连接到
   </span>
   <span class="s2">
    Wi-Fi
   </span>
   <span class="s1">
    网络或导航到被缩短的链接。
   </span>
  </p>
  <p class="p1">
   <span class="s1">
    希望本文能提高您的安全意识。
   </span>
   <span class="s6">
    ⚪️
   </span>
  </p>
  <div id="atatags-1611829871-5f43b321b6ac4">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-13473" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%9b%e5%bb%ba%e6%81%b6%e6%84%8fqr%e7%a0%81%e5%85%a5%e4%be%b5%e6%89%8b%e6%9c%ba%e5%92%8c%e5%85%b6%e4%bb%96%e6%89%ab%e6%8f%8f%e4%bb%aa/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-13473" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%9b%e5%bb%ba%e6%81%b6%e6%84%8fqr%e7%a0%81%e5%85%a5%e4%be%b5%e6%89%8b%e6%9c%ba%e5%92%8c%e5%85%b6%e4%bb%96%e6%89%ab%e6%8f%8f%e4%bb%aa/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-13473-5f43b321b7613" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=13473&amp;origin=www.iyouport.org&amp;obj_id=161182987-13473-5f43b321b7613" id="like-post-wrapper-161182987-13473-5f43b321b7613">
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
    <a href="https://www.iyouport.org/tag/hacking/" rel="tag">
     hacking
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/qr-codes/" rel="tag">
     QR codes
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
   <time class="entry-date published" datetime="2020-08-19T00:04:25+08:00">
    2020年8月19日
   </time>
   <time class="updated" datetime="2020-05-24T01:30:44+08:00">
    2020年5月24日
   </time>
  </div>
 </div>
</article>

