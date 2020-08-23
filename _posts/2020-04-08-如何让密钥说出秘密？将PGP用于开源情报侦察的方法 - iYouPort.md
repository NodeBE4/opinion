---
layout: post
title: "如何让密钥说出秘密？将PGP用于开源情报侦察的方法 - iYouPort"
date: 2020-04-08T16:03:17+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e8%ae%a9%e5%af%86%e9%92%a5%e8%af%b4%e5%87%ba%e7%a7%98%e5%af%86%ef%bc%9f%e5%b0%86pgp%e7%94%a8%e4%ba%8e%e5%bc%80%e6%ba%90%e6%83%85%e6%8a%a5%e4%be%a6%e5%af%9f%e7%9a%84%e6%96%b9/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-10620 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-investigations tag-osint tag-pgp tag-technique tag-technology tag-tools" id="post-10620">
 <header class="entry-header">
  <h1 class="entry-title">
   如何让密钥说出秘密？将PGP用于开源情报侦察的方法
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
   <time class="entry-date published" datetime="2020-04-09T00:03:17+08:00">
    2020年4月9日
   </time>
   <time class="updated" datetime="2019-11-14T12:58:58+08:00">
    2019年11月14日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       密钥也能作为情报资源？是的，而且是很厉害的情报资源，因为它能挖出谷歌和其他搜索引擎挖不到的东西……
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-10621 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?w=2048&amp;ssl=1 2048w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10621" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1100%2C733&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?w=2048&amp;ssl=1 2048w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/钥匙.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   PGP 密钥有多种用途，但存在的主要原因之一是允许某人验证并保护其在线身份。它们可用于对文档或软件进行数字签名、验证用户名或电子邮件地址、或对文档进行加密。
  </p>
  <p class="graf graf--p">
   无论将它们用作什么用途，PGP密钥始终与用户名或电子邮件地址绑定，因此，
   <strong class="markup--strong markup--p-strong">
    无论哪里有PGP密钥，都可能存在对开源调查有用的信息片段
   </strong>
   。
  </p>
  <p class="graf graf--p">
   这篇文章将展示 PGP 密钥如何在开源情报调查中用作信息源。
  </p>
  <p class="graf graf--p">
   研究用户名和电子邮件地址是大多数开源情报工作的基本任务，但是，PGP 密钥还可以提供其他信息，
   <strong class="markup--strong markup--p-strong">
    从而能以大多数电子邮件和用户名调查方法普遍会遗漏的方式帮助在不同实体之间建立链接
   </strong>
   。
  </p>
  <p class="graf graf--p">
   例如，PGP公钥经过编码，这意味着搜索引擎无法读取其内容；也就是意味着，分析PGP密钥有时可能会发现 Google 和其他搜索引擎找不到的东西。
  </p>
  <figure aria-describedby="caption-attachment-10622" class="wp-caption aligncenter" id="attachment_10622" style="width: 523px">
   <img alt="" class="wp-image-10622 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 523px) 100vw, 523px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?resize=523%2C253&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?w=523&amp;ssl=1 523w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?resize=300%2C145&amp;ssl=1 300w" data-recalc-dims="1" height="253" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?resize=523%2C253&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="523"/>
   <noscript>
    <img alt="" class="wp-image-10622 size-full" data-recalc-dims="1" height="253" sizes="(max-width: 523px) 100vw, 523px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?resize=523%2C253&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?w=523&amp;ssl=1 523w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/1-20.png?resize=300%2C145&amp;ssl=1 300w" width="523"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-10622">
    This sample of a public PGP key shows why keyword searches will not lead to the identification of the associated username or e-mail address.
   </figcaption>
  </figure>
  <p class="graf graf--p">
   在某些常见的暗网市场中用于验证身份的 PGP 密钥也经常在其他平台上重用，因此，最终可以链接到明网身份。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    请注意：上述同时也是安全提示！
   </strong>
  </p>
  <p class="graf graf--p">
   您可以
   <a class="markup--anchor markup--p-anchor" data-href="https://techcrunch.com/2019/05/03/how-german-and-us-authorities-took-down-the-owners-of-darknet-drug-emporium-wall-street-market/" href="https://techcrunch.com/2019/05/03/how-german-and-us-authorities-took-down-the-owners-of-darknet-drug-emporium-wall-street-market/" rel="noopener noreferrer" target="_blank">
    在此处阅读
   </a>
   美国和德国当局如何使用PGP密钥将两个暗网市场管理员帐户链接到真实的电子邮件地址。
  </p>
  <p class="graf graf--p">
   以上这些只是关于其众多用途中的几个例子。
  </p>
  <p class="graf graf--p">
   如果可以找到PGP密钥，就可以找到电子邮件地址或用户名，并且由于PGP密钥是唯一的和用于验证的，因此，无论您在何处找到密钥，都可以确信它与相同的电子邮件地址或用户名相关联。
  </p>
  <p class="graf graf--p">
   本指南的其余部分将介绍一些常见的地方以查找PGP密钥，它们的结构、以及如何分析它们才能提取与该密钥相关的用户名或电子邮件地址。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     PeeGeePee.com
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   首先应该清楚，使用PGP密钥的人自己很少会这样做，或者说并没有想到这样做；另一方面公钥必然是要公开列出的，以便人们可以验证其身份并允许其他人发送经过加密的电子邮件。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=list+of+public+pgp+keyservers" href="https://www.google.com/search?q=list+of+public+pgp+keyservers" rel="noopener noreferrer" target="_blank">
    有许多
   </a>
   公共PGP密钥服务器，但是 PeeGeePee.com 具有很清晰的格式，有助于解释PGP密钥结构。
  </p>
  <p class="graf graf--p">
   请注意，PeeGeePee.com 编辑了与密钥关联的实际电子邮件地址（大多数PGP密钥服务器一开始甚至都没有显示太多信息）—— 但是，作为开源情报调查人员，这才是我们真正想要的细节。
  </p>
  <p class="graf graf--p">
   下面将说明如何从PGP密钥中提取电子邮件地址，但是值得注意的是有关PGP密钥的一些其他信息：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10623 jetpack-lazy-image" data-lazy-sizes="(max-width: 651px) 100vw, 651px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?resize=651%2C392&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?w=651&amp;ssl=1 651w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?resize=300%2C181&amp;ssl=1 300w" data-recalc-dims="1" height="392" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?resize=651%2C392&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="651"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10623" data-recalc-dims="1" height="392" sizes="(max-width: 651px) 100vw, 651px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?resize=651%2C392&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?w=651&amp;ssl=1 651w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/2-15.png?resize=300%2C181&amp;ssl=1 300w" width="651"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   每个PGP密钥都有唯一的指纹。指纹从完整密钥派生，然后可以进一步缩写为长版和短版。
  </p>
  <p class="graf graf--p">
   这些指纹使PGP密钥更易于共享（例如，它们非常适合您的名片），但是，
   <strong class="markup--strong markup--p-strong">
    也使得它们更易于在互联网和其他PGP密钥服务器上进行搜索
   </strong>
   。
  </p>
  <p class="graf graf--p">
   请注意，指纹通常在前面用 0x 缩短，后跟8个十六进制字符，例如 0xA1B2C3D4 等：
  </p>
  <figure aria-describedby="caption-attachment-10624" class="wp-caption aligncenter" id="attachment_10624" style="width: 138px">
   <img alt="" class="size-full wp-image-10624 jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-16.png?resize=138%2C35&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="35" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-16.png?resize=138%2C35&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="138"/>
   <noscript>
    <img alt="" class="size-full wp-image-10624" data-recalc-dims="1" height="35" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/3-16.png?resize=138%2C35&amp;ssl=1" width="138"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-10624">
    PGP key fingerprint abbreviated for sharing…and searching.
   </figcaption>
  </figure>
  <p class="graf graf--p">
   其他信息将确认密钥的创建时间（这对于构建开源调查报告的时间线来说很有帮助），它尚未被撤销以及到期日期是何时（尽管并非所有密钥都具有到期日期）。
  </p>
  <p class="graf graf--p">
   还要记得，该密钥可用于加密、签名、认证和身份验证。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     从PGP密钥中提取电子邮件地址的方法
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   确定了感兴趣的PGP密钥后，如果一开始没有用户名或电子邮件地址，则只需做一些工作即可提取它。
  </p>
  <p class="graf graf--p">
   此示例将结合两个内置的 Linux 命令 curl 和 gpg 来下载和提取感兴趣的密钥。
  </p>
  <p class="graf graf--p">
   默认情况下，Curl 内置于 Linux 和 Mac OS 中；大多数 Linux 版本中也安装了 GPG，但是您需要使用
   <a class="markup--anchor markup--p-anchor" data-href="https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/" href="https://blog.ghostinthemachines.com/2015/03/01/how-to-use-gpg-command-line/" rel="noopener noreferrer" target="_blank">
    Homebrew
   </a>
   在 Mac 上安装 GPG。
  </p>
  <p class="graf graf--p">
   可能要明确一下，PGP（Pretty Good Privacy）是密钥/加密类型，GPG（Gnu Privacy Guard）是用于管理和创建 PGP 密钥的软件。很绕嘴……
  </p>
  <p class="graf graf--p">
   对于 Windows，有
   <a class="markup--anchor markup--p-anchor" data-href="https://www.gpg4win.org/" href="https://www.gpg4win.org/" rel="noopener noreferrer" target="_blank">
    GPG4Win
   </a>
   ，它将允许您下载和导入PGP密钥，本指南中不会引用它。
  </p>
  <p class="graf graf--p">
   以下是一个安装入门视频指南，以及
   <a class="markup--anchor markup--p-anchor" data-href="https://www.gpg4win.org/doc/en/gpg4win-compendium_15.html" href="https://www.gpg4win.org/doc/en/gpg4win-compendium_15.html" rel="noopener noreferrer" target="_blank">
    这里的介绍
   </a>
   ，帮助您导入公钥以确定电子邮件地址。
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/Yfj0mWn8jM4" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   本示例将使用
   <a class="markup--anchor markup--p-anchor" data-href="https://peegeepee.com/B3889B1D99B288587ADBC2BDCE92C995CC4803BB" href="https://peegeepee.com/B3889B1D99B288587ADBC2BDCE92C995CC4803BB" rel="noopener noreferrer" target="_blank">
    这里
   </a>
   从 PeeGeePee.com 完全随机选择的密钥。这是过期的钥匙，但是依旧可以用来说明其原理。
  </p>
  <p class="graf graf--p">
   您要提取和分析的文件是包含公钥的 .asc 文件。要获得该URL请右键单击它并复制链接路径。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10625 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1100%2C352&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?w=1150&amp;ssl=1 1150w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=300%2C96&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=768%2C246&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1024%2C328&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1100%2C352&amp;ssl=1 1100w" data-recalc-dims="1" height="352" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1100%2C352&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10625" data-recalc-dims="1" height="352" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1100%2C352&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?w=1150&amp;ssl=1 1150w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=300%2C96&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=768%2C246&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1024%2C328&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/4-11.png?resize=1100%2C352&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   下面是步骤。
  </p>
  <p class="graf graf--p">
   1、打开一个终端并输入以下命令（Ctrl + Shift + V将URL粘贴到终端中）。
  </p>
  <pre class="graf graf--pre"><code>$ curl https://peegeepee.com/B3889B1D99B288587ADBC2BDCE92C995CC4803BB.asc</code></pre>
  <p class="graf graf--p">
   2、输出将如下所示：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10626 jetpack-lazy-image" data-lazy-sizes="(max-width: 535px) 100vw, 535px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?resize=535%2C500&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?w=535&amp;ssl=1 535w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?resize=300%2C280&amp;ssl=1 300w" data-recalc-dims="1" height="500" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?resize=535%2C500&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="535"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10626" data-recalc-dims="1" height="500" sizes="(max-width: 535px) 100vw, 535px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?resize=535%2C500&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?w=535&amp;ssl=1 535w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/11/5-9.png?resize=300%2C280&amp;ssl=1 300w" width="535"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这是完整的PGP公钥，其中包含我们想要的信息，但由于无法直接阅读，因此它本身并不是很有用。
  </p>
  <p class="graf graf--p">
   这就是GPG的用武之地了。GPG是用于创建和管理PGP密钥的程序，通常用于加密电子邮件或签名软件，但是因为它可以解码原始PGP公钥块，所以当我们要查找哪个用户名或电子邮件地址链接到感兴趣的PGP密钥时，可以使用它。
  </p>
  <p class="graf graf--p">
   要在命令行中执行此操作，可以使用（|）来获取 curl命令的输出，而不是将完整的PGP打印到终端中，您可以将 curl 命令的结果传递给 gpg，以便它为您读取密钥并告诉您相关的电子邮件地址是什么
  </p>
  <p class="graf graf--p">
   3、命令如下：
  </p>
  <pre class="graf graf--pre"><code>$ curl https://d.peegeepee.com/B3889B1D99B288587ADBC2BDCE92C995CC4803BB.asc | gpg</code></pre>
  <p class="graf graf--p">
   它给出了这样的输出：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10627 jetpack-lazy-image" data-lazy-sizes="(max-width: 653px) 100vw, 653px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?resize=653%2C82&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?w=653&amp;ssl=1 653w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?resize=300%2C38&amp;ssl=1 300w" data-recalc-dims="1" height="82" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?resize=653%2C82&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="653"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10627" data-recalc-dims="1" height="82" sizes="(max-width: 653px) 100vw, 653px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?resize=653%2C82&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?w=653&amp;ssl=1 653w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/6-6.png?resize=300%2C38&amp;ssl=1 300w" width="653"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，您已经得到了此人的姓名和与PGP密钥关联的完整电子邮件地址！
  </p>
  <p class="graf graf--p">
   请注意，
   <strong class="markup--strong markup--p-strong">
    Google 找不到与此电子邮件地址匹配的内容，因为它无法轻松索引公共PGP服务器：
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10628 jetpack-lazy-image" data-lazy-sizes="(max-width: 464px) 100vw, 464px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?resize=464%2C101&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?w=464&amp;ssl=1 464w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?resize=300%2C65&amp;ssl=1 300w" data-recalc-dims="1" height="101" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?resize=464%2C101&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="464"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10628" data-recalc-dims="1" height="101" sizes="(max-width: 464px) 100vw, 464px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?resize=464%2C101&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?w=464&amp;ssl=1 464w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/7-6.png?resize=300%2C65&amp;ssl=1 300w" width="464"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   当PGP密钥与用户名而不是电子邮件地址相关联时，此命令以相同的方式返回数据，只是用用户名代替电子邮件。
  </p>
  <p class="graf graf--p">
   现在是一个真实的例子了……
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     Keybase — 揭露马虎的小骇客
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   Keybase.io 是一个非常受欢迎的公共PGP密钥服务器。它本身就几乎是一个社交媒体平台。
  </p>
  <p class="graf graf--p">
   用户具有关注者、指向其他平台上的个人资料的链接、与特定钥匙关联的多个设备的列表、以及个人资料照片（尽管并非总是本人照片）。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10629 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1100%2C778&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?w=1209&amp;ssl=1 1209w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=300%2C212&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=768%2C543&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1024%2C724&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1100%2C778&amp;ssl=1 1100w" data-recalc-dims="1" height="778" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1100%2C778&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10629" data-recalc-dims="1" height="778" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1100%2C778&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?w=1209&amp;ssl=1 1209w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=300%2C212&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=768%2C543&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1024%2C724&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/8-6.png?resize=1100%2C778&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如上这个例子，请注意，用户的电子邮件地址未在其个人资料中列出，因此搜索引擎无法轻松将其编入索引。
  </p>
  <p class="graf graf--p">
   于是有必要以与上述示例类似的方式从PGP密钥下载并提取电子邮件地址。
  </p>
  <p class="graf graf--p">
   为了展示这对开源调查的帮助，下面将演示如何帮助验证一个粗心的小骇客的身份，此人去年对 Protonmail 发起DDOS攻击时使用的绰号是 Opt1cz。
  </p>
  <p class="graf graf--p">
   当 Protonmail
   <a class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/ProtonMail/comments/8uu9t7/update_regarding_the_ddos_situation/" href="https://www.reddit.com/r/ProtonMail/comments/8uu9t7/update_regarding_the_ddos_situation/" rel="noopener noreferrer" target="_blank">
    在 Reddit 上发布
   </a>
   情况更新时，
   <strong class="markup--strong markup--p-strong">
    一个名为
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/user/opt1cz" href="https://www.reddit.com/user/opt1cz" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     Opt1cz
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    的用户发布了对该消息的回复，声称他和他的帮派对这场DDOS攻击负责
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10630 jetpack-lazy-image" data-lazy-sizes="(max-width: 680px) 100vw, 680px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?resize=680%2C170&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?w=680&amp;ssl=1 680w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?resize=300%2C75&amp;ssl=1 300w" data-recalc-dims="1" height="170" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?resize=680%2C170&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="680"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10630" data-recalc-dims="1" height="170" sizes="(max-width: 680px) 100vw, 680px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?resize=680%2C170&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?w=680&amp;ssl=1 680w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/9-6.png?resize=300%2C75&amp;ssl=1 300w" width="680"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   他在 Reddit 上唯一的其他帖子是在 Reddit
   <a class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/KeybaseProofs/" href="https://www.reddit.com/r/KeybaseProofs/" rel="noopener noreferrer" target="_blank">
    KeybaseProofs
   </a>
   论坛上发布的：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10631 jetpack-lazy-image" data-lazy-sizes="(max-width: 660px) 100vw, 660px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?resize=660%2C402&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?w=660&amp;ssl=1 660w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?resize=300%2C183&amp;ssl=1 300w" data-recalc-dims="1" height="402" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?resize=660%2C402&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="660"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10631" data-recalc-dims="1" height="402" sizes="(max-width: 660px) 100vw, 660px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?resize=660%2C402&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?w=660&amp;ssl=1 660w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/10-2.png?resize=300%2C183&amp;ssl=1 300w" width="660"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   他提供了指向他的 Keybase 个人资料的链接：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10632 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1100%2C789&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?w=1164&amp;ssl=1 1164w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=300%2C215&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=768%2C551&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1024%2C735&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1100%2C789&amp;ssl=1 1100w" data-recalc-dims="1" height="789" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1100%2C789&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10632" data-recalc-dims="1" height="789" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1100%2C789&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?w=1164&amp;ssl=1 1164w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=300%2C215&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=768%2C551&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1024%2C735&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/11/11-5.png?resize=1100%2C789&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果可以知道他的电子邮件地址将很有帮助 —— 于是，可以通过如上所述结合 curl 和 gpg 的方法来获得。URL始终采用以下格式：
  </p>
  <pre class="graf graf--pre"><code>curl https://keybase.io/username/pgp_keys.asc</code></pre>
  <p class="graf graf--p">
   顺便说一句，这也意味着在进行用户名搜索时，您始终可以在 Keybase 上尝试目标用户名，然后尝试使用此方法来获取电子邮件地址。
  </p>
  <p class="graf graf--p">
   要找出 Opt1cz 的电子邮件地址是什么，请使用以下命令：
  </p>
  <pre class="graf graf--pre"><code>$ curl https://keybase.io/opt1cz/pgp_keys.asc | gpg</code></pre>
  <p class="graf graf--p">
   这将在终端中提供以下输出：
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">% Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  3165  100  3165    0     0   5178      0 --:--:-- --:--:-- --:--:--  5171
pub  4096R/396BD3BB 2018-07-01 opt1cz &lt;<a class="__cf_email__" data-cfemail="fe918e8acf9d84be8e8c918a9190939f9792d09d96" href="/cdn-cgi/l/email-protection">[email protected]</a>&gt;
sub  4096R/5A61C24C 2018-07-01 [expires: 2034-06-27]</code></pre>
  <p class="graf graf--p">
   因此，从中您可以了解到他的电子邮件地址是什么了 —— 非常有用。
  </p>
  <p class="graf graf--p">
   当然，由于他在 Keybase 上具有可识别的关注者，因此，也有可能找到他们的电子邮件地址和用户名，并开始对他的在线同事进行更好的了解。
  </p>
  <p class="graf graf--p">
   如果您对PGP密钥的开源情报调查应用有任何疑问，Keybase 甚至提供了一个有用的图形来显示用户的密钥如何链接到他们的社交媒体帐户、和他们自己的硬件：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10633 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1100%2C540&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?w=1211&amp;ssl=1 1211w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=300%2C147&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=768%2C377&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1024%2C503&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1100%2C540&amp;ssl=1 1100w" data-recalc-dims="1" height="540" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1100%2C540&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10633" data-recalc-dims="1" height="540" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1100%2C540&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?w=1211&amp;ssl=1 1211w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=300%2C147&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=768%2C377&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1024%2C503&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/11/12-2.png?resize=1100%2C540&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您怀疑某人真的会愚蠢到DDOS自己的电子邮件提供商？答案是肯定的，他确实是个愚蠢的人，现在因自己的麻烦而判入狱三年。⚪️
  </p>
  <div id="atatags-1611829871-5f42603068cdf">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-10620" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e8%ae%a9%e5%af%86%e9%92%a5%e8%af%b4%e5%87%ba%e7%a7%98%e5%af%86%ef%bc%9f%e5%b0%86pgp%e7%94%a8%e4%ba%8e%e5%bc%80%e6%ba%90%e6%83%85%e6%8a%a5%e4%be%a6%e5%af%9f%e7%9a%84%e6%96%b9/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-10620" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e8%ae%a9%e5%af%86%e9%92%a5%e8%af%b4%e5%87%ba%e7%a7%98%e5%af%86%ef%bc%9f%e5%b0%86pgp%e7%94%a8%e4%ba%8e%e5%bc%80%e6%ba%90%e6%83%85%e6%8a%a5%e4%be%a6%e5%af%9f%e7%9a%84%e6%96%b9/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-10620-5f4260306969d" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=10620&amp;origin=www.iyouport.org&amp;obj_id=161182987-10620-5f4260306969d" id="like-post-wrapper-161182987-10620-5f4260306969d">
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
    <a href="https://www.iyouport.org/tag/investigations/" rel="tag">
     Investigations
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/pgp/" rel="tag">
     PGP
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
   <time class="entry-date published" datetime="2020-04-09T00:03:17+08:00">
    2020年4月9日
   </time>
   <time class="updated" datetime="2019-11-14T12:58:58+08:00">
    2019年11月14日
   </time>
  </div>
 </div>
</article>

