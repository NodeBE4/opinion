---
layout: post
title: "人类数据库和算法劳工：Facebook 的算法工厂 (第2部) —— 关于数字极权是如何折腾你的 - iYouPort"
date: 2019-05-21T16:05:01+00:00
author: iYouPort
from: https://www.iyouport.org/%e4%ba%ba%e7%b1%bb%e6%95%b0%e6%8d%ae%e5%ba%93%e5%92%8c%e7%ae%97%e6%b3%95%e5%8a%b3%e5%b7%a5%ef%bc%9afacebook-%e7%9a%84%e7%ae%97%e6%b3%95%e5%b7%a5%e5%8e%82-%e7%ac%ac2%e9%83%a8/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-1120 post type-post status-publish format-standard has-post-thumbnail hentry category-osint category--facebook category-20 category-3 tag-algorithm tag-big-tech tag-censorship tag-facebook tag-humanrights tag-privacy tag-surveillance tag-surveillancecapitalism" id="post-1120">
 <header class="entry-header">
  <h1 class="entry-title">
   人类数据库和算法劳工：Facebook 的算法工厂 (第2部) —— 关于数字极权是如何折腾你的
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/osint/" rel="category tag">
    OSINT
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e5%85%b3%e4%ba%8e-facebook/" rel="category tag">
    关于 Facebook
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%9b%91%e8%a7%86%e4%b8%8e%e6%93%8d%e7%ba%b5/" rel="category tag">
    监视与操纵
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%9b%91%e8%a7%86%e8%b5%84%e6%9c%ac%e4%b8%bb%e4%b9%89/" rel="category tag">
    监视资本主义
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-05-22T00:05:01+08:00">
    2019年5月22日
   </time>
   <time class="updated" datetime="2019-04-26T22:00:25+08:00">
    2019年4月26日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      本系列调查仅以 facebook 为例，事实上 FATBAG（Facebook Amazon Tencent Baidu Alibaba Google）都在干同样的事，只是方法略与不同、范围或大或小。您完全可以利用本系列演示的思路和提供的工具对任何一个数字极权作出独立调查。这一过程能帮助您和您的读者更深刻地理解我们所有人正在遭遇什么
     </em>
    </span>
   </li>
  </ul>
  <p class="graf graf--p">
   在著名的 ”
   <a class="markup--anchor markup--p-anchor" data-href="https://cidadeinseguranca.files.wordpress.com/2012/02/deleuze_control.pdf" href="https://cidadeinseguranca.files.wordpress.com/2012/02/deleuze_control.pdf" rel="noopener noreferrer" target="_blank">
    Postscript on the Societies of Control
   </a>
   ” 中，Deleuze 设想了一种权力形式，它不再基于个人的生产，而是基于个体的调制。个人被解构为通过“数据库”管理的数字足迹……
  </p>
  <p class="graf graf--p">
   继续
   <a href="https://www.iyouport.org/%E9%9D%9E%E7%89%A9%E8%B4%A8%E5%8A%B3%E5%8A%A8%E5%92%8C%E6%95%B0%E6%8D%AE%E6%94%B6%E9%9B%86%EF%BC%9Afacebook-%E7%9A%84%E7%AE%97%E6%B3%95%E5%B7%A5%E5%8E%82-%E7%AC%AC1%E9%83%A8/" rel="noopener noreferrer" target="_blank">
    前文
   </a>
   。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    研究工具和方法
   </strong>
   ：如何存储数据、以及内部使用何种算法是最难调查的部分。幸运的是，找到了一个知识来源，让我们对这些神秘的算法过程有了一些了解：所有公开的 Facebook 专利的数据库。
  </p>
  <p class="graf graf--p">
   我们发现 Facebook 注册了大约
   <strong class="markup--strong markup--p-strong">
    8000 种不同的专利
   </strong>
   。基于它们，我们创建了对这个黑匣子内发生的事的一些可能解释。另一个主要信息来源是 Facebook Graph API，这是第三方开发人员将数据输入和移出 Facebook 平台的主要方式。
  </p>
  <figure aria-describedby="caption-attachment-1123" class="wp-caption aligncenter" id="attachment_1123" style="width: 960px">
   <img alt="" class="wp-image-1123 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=960%2C1139&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=253%2C300&amp;ssl=1 253w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=768%2C911&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=863%2C1024&amp;ssl=1 863w" data-recalc-dims="1" height="1139" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=960%2C1139&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
   <noscript>
    <img alt="" class="wp-image-1123 size-full" data-recalc-dims="1" height="1139" sizes="(max-width: 960px) 100vw, 960px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=960%2C1139&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=253%2C300&amp;ssl=1 253w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=768%2C911&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.jpeg?resize=863%2C1024&amp;ssl=1 863w" width="960"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-1123">
    17th century engraving of the pons asinorum in logic
   </figcaption>
  </figure>
  <h4 class="graf graf--h4">
   存储数据
  </h4>
  <p class="graf graf--p">
   在我们探索 Facebook 如何存储和分析数据的不同方式之前，了解
   <strong class="markup--strong markup--p-strong">
    社交图
   </strong>
   的概念非常重要，社交图是将所有数据连接到一个结构的元结构。
  </p>
  <p class="graf graf--p">
   社交图的故事是通过将 Facebook 帝国内外的每条信息互连到一个单独的图中来驾驭他们对元数据世界的统治和野心。“这就是 Facebook 工作的原因”，马克·扎克伯格在 2007 年将 Facebook 的力量归功于社交图。
  </p>
  <p class="graf graf--p">
   社交图是 Facebook 如何表示其所有数据的方法，它基本上包括两件事：对象，也称为节点；和描述这些节点之间的连接，也称为边缘。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1124 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=961%2C245&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=300%2C76&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=768%2C196&amp;ssl=1 768w" data-recalc-dims="1" height="245" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=961%2C245&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1124" data-recalc-dims="1" height="245" sizes="(max-width: 961px) 100vw, 961px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=961%2C245&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=300%2C76&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-112.png?resize=768%2C196&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   每个用户、地点、照片、群组、活动，在 Facebook 上创建或上传的所有内容都是 Facebook 数据库中具有自己 ID 的唯一对象。例如，当您点赞 Facebook 上的某些图片时，会在两个对象之间创建连接&lt;like&gt;，即 &lt;userID&gt; 和 photo &lt;photoID&gt;。此照片可以包含许多其他连接，即点赞相同照片的其他用户、与该照片相关联的位置、或在该照片上标记的用户。
  </p>
  <p class="graf graf--p">
   根据 Facebook API，Facebook 社交图中存在不同类型的节点：（
   <span style="color: #00ccff;">
    在这里看
    <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-10.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-10.png" rel="noopener noreferrer" style="color: #00ccff;" target="_blank">
     大图
    </a>
   </span>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1125 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1100%2C808&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?w=1991&amp;ssl=1 1991w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=300%2C220&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=768%2C564&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1024%2C752&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1100%2C808&amp;ssl=1 1100w" data-recalc-dims="1" height="808" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1100%2C808&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1125" data-recalc-dims="1" height="808" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1100%2C808&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?w=1991&amp;ssl=1 1991w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=300%2C220&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=768%2C564&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1024%2C752&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-113.png?resize=1100%2C808&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   通过使用社交图，Facebook 能够将点赞相同照片的不同用户联系起来，或者将照片上标记的人与照片所属的位置联系起来。
  </p>
  <p class="graf graf--p">
   ⚠️ Facebook 帝国世界是由数十亿个对象组成的庞大社交图，由不同类型的链接互连。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    喂养社交图
   </strong>
  </p>
  <p class="graf graf--p">
   ⚠️ 根据 Facebook 的几十项专利，有3个不同的商店，数据库提供社交图谱，并存储我们创建的所有数据、元数据和内容。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     Action store
    </strong>
    — 维护描述用户操作的信息；
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     Content Store
    </strong>
    — 存储表示各种类型内容的对象；
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     Edge store
    </strong>
    — 存储描述用户与其他对象之间连接的信息。
   </li>
  </ul>
  <p class="graf graf--p">
   Content Store 和 Edge Store 一起基本上是一个数据库，主要元结构的结构资源，社交图将所有对象和连接形成一个结构。
  </p>
  <p class="graf graf--p">
   我们在Facebook上的所有操作都由“行动和内容记录器”记录，这些记录器为 Action and Content stores 提供新数据，不断扩展关于我们的数据库，它们由 Facebook 拥有，并很可能与许多人共享。（这里点击
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-11.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-11.png" rel="noopener noreferrer" target="_blank">
    下面的大图
   </a>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1126 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1100%2C804&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?w=1991&amp;ssl=1 1991w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=300%2C219&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=768%2C562&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1024%2C749&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1100%2C804&amp;ssl=1 1100w" data-recalc-dims="1" height="804" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1100%2C804&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1126" data-recalc-dims="1" height="804" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1100%2C804&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?w=1991&amp;ssl=1 1991w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=300%2C219&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=768%2C562&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1024%2C749&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-114.png?resize=1100%2C804&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Action Store
   </strong>
  </p>
  <p class="graf graf--p">
   每次点击、滚动、分享等动作，基本上你在 Facebook 上做的任何事都由行动记录器收集并存储在 Action Store 中。Action Store 维护描述用户动作的信息，以及在向 Facebook 传达信息的第三方网站上执行的动作。
  </p>
  <p class="graf graf--p">
   操作或交互的示例包括：评论帖子、共享链接、标记对象、签到物理位置、评论相册、向另一个用户发送消息、加入活动、加入群组、粉丝品牌页面、创建事件、授权应用程序、使用应用程序、与广告交互、以及参与交易。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Content Store
   </strong>
  </p>
  <p class="graf graf--p">
   这个 Content Store 存储表示各种类型内容的对象，例如页面发布、状态更新、照片、视频、链接、共享内容项目、游戏应用程序成就、本地企业的登记事件、品牌页面、或任何其他类型的内容。对象可以由用户创建，或者在某些情况下从第三方应用程序（其他网站或应用程序）接收。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Edge Store
   </strong>
  </p>
  <p class="graf graf--p">
   这个 Edge Store 存储描述用户与其他对象之间连接的信息。一些边缘可以由用户定义，允许用户指定他们与其他用户的关系。当用户与对象交互时生成其他边缘，例如表达对页面的兴趣，与其他用户共享链接以及评论其他人发布的帖子等等。边缘存储还存储其他信息，例如对象的关联性分数，兴趣以及我们将在之后介绍的算法处理生成的其他信息。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Profile Store
   </strong>
  </p>
  <p class="graf graf--p">
   正如我们已经提到的，我们所有人的行动数据被收集并存储在动作、内容和 Profile Store 中。另一方面，我们在个人资料信息部分中分享的有关我们自己的信息也存储在 Profile Store 中。（这里点击
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-12.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-12.png" rel="noopener noreferrer" target="_blank">
    下面的大图
   </a>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1127 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1100%2C804&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?w=1991&amp;ssl=1 1991w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=300%2C219&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=768%2C562&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1024%2C749&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1100%2C804&amp;ssl=1 1100w" data-recalc-dims="1" height="804" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1100%2C804&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1127" data-recalc-dims="1" height="804" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1100%2C804&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?w=1991&amp;ssl=1 1991w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=300%2C219&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=768%2C562&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1024%2C749&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-115.png?resize=1100%2C804&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   每个用户被与用户简档相关联，该用户简档存储在用户简档存储中。用户简档包括关于用户明确共享的声明性信息，并且还可以包括由 Facebook 执行的其他数据收集和分析手段
   <strong class="markup--strong markup--p-strong">
    推断的
   </strong>
   简档信息。
  </p>
  <p class="graf graf--p">
   用户简档可以包括一个或多个直接特征，其唯一地标识与用户配置文件相关联的例如电子邮件地址、或电话号码。
   <strong class="markup--strong markup--p-strong">
    这些信息可用于识别 Facebook 之外的用户
   </strong>
   ，指示用户配置文件和附加用户配置文件与同一用户相关联。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    这允许 Facebook 跟踪用户并合并来自其他来源的信息
   </strong>
   。结合 Facebook 的“实名制”，
   <strong class="markup--strong markup--p-strong">
    它完全可以准确地将您的用户档案与您的真实身份相关联
   </strong>
   。“Facebook 是一个人们使用真实身份的社区。我们要求每个人都提供他们的真实姓名，以便您始终知道您与谁联系“…他们自己说的。
  </p>
  <p class="graf graf--p">
   这些结构就是 Facebook Factory 的建筑物，其中资源材料，从我们所有人的行为中提取的数据，被存储并准备供算法工作者处理。在下一章中，我们将探讨一些最有趣的 Facebook 工作人员的深度权力结构 — — 将行为数据转化为最终产品的算法。
  </p>
  <h4 class="graf graf--h4">
   数据处理：算法劳工的剖析、任务和职责
  </h4>
  <p class="graf graf--p">
   了解算法如何处理大量数据以及它们究竟是做什么的，对于理解可能利用我们的个人数据的形式、以及每天影响数十亿人的
   <strong class="markup--strong markup--p-strong">
    大规模操纵机制，
   </strong>
   非常重要。
  </p>
  <p class="graf graf--p">
   我们在这项研究中的主要目标之一是尝试对这些过程进行独立的洞察，尝试提出不同的测量方法，或从外部独立审计算法的潜在方法，但我们遇到了很多困难。尽管我们没有设法根据实际数据创建方法论，但对 Facebook 专利的研究让我们深入了解了一些最重要的流程。
  </p>
  <figure aria-describedby="caption-attachment-1128" class="wp-caption aligncenter" id="attachment_1128" style="width: 1346px">
   <img alt="" class="wp-image-1128 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1100%2C505&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?w=1346&amp;ssl=1 1346w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=300%2C138&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=768%2C353&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1024%2C470&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1100%2C505&amp;ssl=1 1100w" data-recalc-dims="1" height="505" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1100%2C505&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="wp-image-1128 size-full" data-recalc-dims="1" height="505" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1100%2C505&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?w=1346&amp;ssl=1 1346w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=300%2C138&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=768%2C353&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1024%2C470&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-116.png?resize=1100%2C505&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-1128">
    Euclid - Detail from the painting “The School of Athens” by the Italian Renaissance artist Raphael created between 1509 and 1511
   </figcaption>
  </figure>
  <h4 class="graf graf--h4">
   行动数据分析
  </h4>
  <p class="graf graf--p">
   正如之前所解释的那样，Facebook 上的每一项活动都存储在所谓的 Action store 中。这意味着动作存储是一个庞大的结构化用户活动数据集，使其成为目标机制的一个非常方便的选择。（点击这里看
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-13.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-13.png" rel="noopener noreferrer" target="_blank">
    下面大图
   </a>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1129 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=961%2C739&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=300%2C231&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=768%2C591&amp;ssl=1 768w" data-recalc-dims="1" height="739" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=961%2C739&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1129" data-recalc-dims="1" height="739" sizes="(max-width: 961px) 100vw, 961px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=961%2C739&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=300%2C231&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-117.png?resize=768%2C591&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    该过程的说明
   </strong>
  </p>
  <p class="graf graf--p">
   模糊匹配算法用作基于来自 action store 的数据进行定向的主要机制。发生两个并行过程以生成模糊匹配器的输入。首先，活动日志通过 Action Interest Extractor 从 Action 日志中获取。在 Action Interest Extractor 中加载这些日志后，特定用户的兴趣列表将仅根据 Action 日志中的数据确定，即他的活动（点击、like、评论、分享等等）。然后，将感兴趣的列表作为查询转发给模糊匹配器。
  </p>
  <p class="graf graf--p">
   第二个过程是为模糊匹配器所针对的用户选择适当的广告的过程。此过程的第一步是广告服务器向信息项概念提取器提供广告。一旦信息项概念提取器加载了一组广告，就会对它们进行分析，并确定每个广告的概念，即为每个广告分配一个表示其概念的属性。
  </p>
  <p class="graf graf--p">
   最后，模糊匹配算法使用兴趣作为查询来执行搜索; 因此，选择与查询最匹配的广告，然后将其投放给目标用户。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    内容分析
   </strong>
  </p>
  <p class="graf graf--p">
   在前几段中，解释了使用 Action store 中的数据来定位用户的机制。除了该数据，来自内容存储库的数据也用于定位用户。毋庸置疑，在这种情况下，定位是基于用户以多种不同方式在 Facebook 上发布的内容。（点击这里看
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-14.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-14.png" rel="noopener noreferrer" target="_blank">
    下面大图
   </a>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1130 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=961%2C711&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=768%2C568&amp;ssl=1 768w" data-recalc-dims="1" height="711" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=961%2C711&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1130" data-recalc-dims="1" height="711" sizes="(max-width: 961px) 100vw, 961px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=961%2C711&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-118.png?resize=768%2C568&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   基于内容的定位有两个相关方面。第一个是主题，第二个是关键字。当用户向 Facebook 发布某种内容时，有一个
   <strong class="markup--strong markup--p-strong">
    主题提取引擎
   </strong>
   ，用于标识与该内容相关联的一个或多个主题。为了将主题与内容相关联，提取引擎对其进行分析并识别包含在内容中的锚定术语并确定其含义。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    该过程的说明
   </strong>
  </p>
  <p class="graf graf--p">
   使用提取的主题，算法定义关键字列表并将它们与一个或多个期望值相关联。该算法使用关于用户的信息来确定与列表上的候选关键字相关联的值。分配的值用于对候选关键字进行排名，最高排名被选择为能最精确定义内容的一个。
  </p>
  <p class="graf graf--p">
   算法使用在用户和内容中的关键字之间创建的连接来确定下一步给你扔什么饲料。
  </p>
  <p class="graf graf--p">
   基于内容定位的重要输入也来自 Action store，它与广告定位的负面信号相关。事实上，这是一组用户可能对此产生负面情绪的东西，并用于标记用户不希望看到的东西。当 Facebook 基于用户不喜欢特定对象（内容）的行为来确定时，它确定对象的主题并将负面情绪与他们相关联。
   <strong class="markup--strong markup--p-strong">
    负面情绪和主题之间的关联用于降低与所述主题匹配的内容被提供给用户的可能性
   </strong>
   。
  </p>
  <p class="graf graf--p">
   这就是为什么如果你一直呆在集中化的网络上只会形成认知封闭，因为你再也看不到与自己不一致的观点、看不到可以帮助提升认知的信息。如果我们所有人都呆在这里，就是严重的气泡化和极化，
   <strong class="markup--strong markup--p-strong">
    为操纵者提供了极大便利
   </strong>
   。（点击这里看
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-15.png" href="https://labs.rs/wp-content/uploads/2016/08/FB-Research-Final-15.png" rel="noopener noreferrer" target="_blank">
    下面大图
   </a>
   ）
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1131 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=961%2C1379&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=209%2C300&amp;ssl=1 209w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=768%2C1102&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=714%2C1024&amp;ssl=1 714w" data-recalc-dims="1" height="1379" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=961%2C1379&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1131" data-recalc-dims="1" height="1379" sizes="(max-width: 961px) 100vw, 961px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=961%2C1379&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=209%2C300&amp;ssl=1 209w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=768%2C1102&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-119.png?resize=714%2C1024&amp;ssl=1 714w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   通过形成用户的逻辑结构来收集用于精确定向的重要数据。Facebook 将特定属性的用户分组到被称为种子集群的结构中。一旦创建了种子集群，就会检索与该用户相关的一组其他用户或对象。
  </p>
  <p class="graf graf--p">
   在这些集合中，算法确定集合中的用户是否与主要用户共有相同的属性。确定过程基于次要用户的明确声明、对其连接的分析、并使用随机游走算法。结果用于确定辅助用户是否也可以与群集关联。因此，建立了定位群集，可用于定位用户并向其展示特定内容。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    该过程的说明
   </strong>
  </p>
  <p class="graf graf--p">
   通过测量群集中用户对特定内容的点击率或测量群集中用户的负面反馈，来测试这些群集的可信度。除此之外，用户可以根据他们与页面、应用程序等的交互进入群集。
  </p>
  <p class="graf graf--p">
   形成群和子群的过程使用几个不同的模块。首先，种子用户选择模块，其收集关于潜在种子（主要）用户的信息，并创建共有特定从属关系、兴趣或特征的用户的种子群集。在第一阶段，算法选择在其配置文件上明确声明这些属性的用户（如页面等）。但是，与用户相关的点赞、评论、签到等活动可用于聚类。
  </p>
  <p class="graf graf--p">
   第二个模块用于根据群成员（已在群集中的用户）创建子群，方法是探索其活动和属性，并检查它们是否可以构成群的一部分。这些次要用户的数据收集过程类似于对种子用户使用的过程。
  </p>
  <p class="graf graf--p">
   实体分析模块用于基于用户与页面或应用程序的交互来确定用户的属性。例如，如果有人支持某个政党，该算法假设他们会对某些类型的汽车感兴趣，因为大多数使用 Facebook 应用程序显示最近卖点的用户支持所述政党。该模块的作用是根据人们与之交互的对象以及最常与这些对象进行交互的用户类型，对人进行分组。
  </p>
  <p class="graf graf--p">
   可以通过评估用户与其他用户的连接来确定用户的某些属性。这是由分析评分模块完成的。此模块通过评估用户与其他人的连接来确定用户的特定属性。例如，如果用户与喜欢白葡萄酒的其他用户之间存在一些弱连接，并且与喜欢红葡萄酒的用户有更强的连接，则此模块将基于连接的强度（可能基于相互交互、签到、标签等）将主要用户视为喜欢红酒的用户。
  </p>
  <p class="graf graf--p">
   一旦某些属性由前述四个模块确定，目标群集定义模块就生成共享相同属性的用户群集。群集用于投放特定类型的广告，但也用于特定的用户可能喜欢的
   <strong class="markup--strong markup--p-strong">
    内容定位
   </strong>
   。这样，除了产生收益之外，⚠️
   <strong class="markup--strong markup--p-strong">
    Facebook 还基于偏好控制一组算法建立起了用户的信息流 — — 操纵了人们的认知。在某种程度上，这可以被视为审查制度
   </strong>
   。
  </p>
  <p class="graf graf--p">
   使用上述模块形成群和子群作为完整流程的过程具有几个步骤。首先，用户基于类似的属性构建为子群; 然后识别该群的中心用户，并通过它们识别整个群的特征。然后，子群中的所有用户通过其属性的相似性对中央用户的相似性进行排序。最后，该子群被标记为一个完整的紧凑单元; 例如，喜欢红酒和哈利波特的人。
  </p>
  <h4 class="graf graf--h4">
   根据事件定位用户
  </h4>
  <p class="graf graf--p">
   该算法基于若干不同标准执行事件定向。可以指示用户与事件的关联的第一个也是最简单的标准就是在 Facebook 上创建的事件的 RSVP 选项。然而，由于用户可以回复 Yes，但没有参加活动，因此算法可以基于他们先前的出勤得分、他们的朋友出席人数、和一般事件历史、来计算他们是否真的会参加活动 — —
   <strong class="markup--strong markup--p-strong">
    这就是行为预测
   </strong>
   。
  </p>
  <p class="graf graf--p">
   此外，该算法也使用其他输入，例如在活动场所登记、上传活动门票的照片、在外部网站上购买门票的记录、或在帖子中标记事件等等。事件定位用于从小型私人事件到全局事件的所有等级的事件 — —
   <strong class="markup--strong markup--p-strong">
    您现在能控制住自己想晒的欲望了吗
   </strong>
   ？
  </p>
  <p class="graf graf--p">
   更多：专利
   <a class="markup--anchor markup--p-anchor" data-href="http://worldwide.espacenet.com/publicationDetails/description?CC=WO&amp;NR=2013074367A3&amp;KC=A3&amp;FT=D&amp;ND=&amp;date=20141204&amp;DB=&amp;locale=" href="http://worldwide.espacenet.com/publicationDetails/description?CC=WO&amp;NR=2013074367A3&amp;KC=A3&amp;FT=D&amp;ND=&amp;date=20141204&amp;DB=&amp;locale=" rel="noopener noreferrer" target="_blank">
    WO2013074367（A2）
   </a>
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1132 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=961%2C607&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=300%2C189&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=768%2C485&amp;ssl=1 768w" data-recalc-dims="1" height="607" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=961%2C607&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1132" data-recalc-dims="1" height="607" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=961%2C607&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=300%2C189&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-120.png?resize=768%2C485&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <h4 class="graf graf--h4">
   根据在线系统中的搜索结果定位用户
  </h4>
  <p class="graf graf--p">
   该算法利用查询用户输入到 Facebook 的搜索框中的东西。此算法的目的是为用户提供与其搜索查询相对应的内容。当使用在搜索框中输入查询时，编译匹配查询的结果，而算法尝试识别查询和结果中的结构化节点。
  </p>
  <p class="graf graf--p">
   然后，它检索与识别的结构化节点对应的内容，同时检索有关用户的信息。在将广告与用户的信息（即属性）匹配之后，它确定应该与查询的结果一起显示哪些广告。
   <strong class="markup--strong markup--p-strong">
    这实际上是在用户输入查询时发生的，因此很难将其视为结构良好的东西
   </strong>
   。
  </p>
  <p class="graf graf--p">
   更多：专利
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.rs/patents/WO2014099558A2?cl=en&amp;dq=WO+2014099558+(A2)&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwifhPSsw4bNAhUEVBQKHdCkBFsQ6AEIGjAA" href="https://www.google.rs/patents/WO2014099558A2?cl=en&amp;dq=WO+2014099558+%28A2%29&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwifhPSsw4bNAhUEVBQKHdCkBFsQ6AEIGjAA" rel="noopener noreferrer" target="_blank">
    WO 2014099558 A2
   </a>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    常规估测
   </strong>
  </p>
  <p class="graf graf--p">
   该算法通过
   <strong class="markup--strong markup--p-strong">
    以小时间隔
   </strong>
   分析用户在一段时间内的地理位置，来确定用户的例程。
  </p>
  <p class="graf graf--p">
   该算法使用由移动设备提供的关于用户地理定位的数据，例如智能手机、平板电脑或笔记本电脑，或者安装在这些设备中的传感器，即 GPS 传感器、陀螺仪或指南针; 设备上安装的Facebook 应用程序收集必要的数据并将其提供给算法。
  </p>
  <p class="graf graf--p">
   接下来，算法分析重复、或者在一周中的某一天的某个小时处于相同位置的用户。然后算法聚集这些地理位置; 之后，群集由与群集中的地理定位质心对应的位置标记。
   <strong class="markup--strong markup--p-strong">
    以这种方式，算法可以确定用户居住的地方，他们工作的地方，最爱去的地方等 — — 也就是你的行踪
   </strong>
   。
  </p>
  <p class="graf graf--p">
   更多：专利：
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.rs/patents/WO2014123982A3?cl=en&amp;dq=inassignee:%22Facebook,+Inc.%22+location&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwj2sbzeyrjLAhWIDZoKHfRMAUQQ6AEIRDAG" href="https://www.google.rs/patents/WO2014123982A3?cl=en&amp;dq=inassignee:%22Facebook,+Inc.%22+location&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwj2sbzeyrjLAhWIDZoKHfRMAUQQ6AEIRDAG" rel="noopener noreferrer" target="_blank">
    WO 2014123982 A3
   </a>
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1133 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=961%2C675&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=300%2C211&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=768%2C539&amp;ssl=1 768w" data-recalc-dims="1" height="675" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=961%2C675&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1133" data-recalc-dims="1" height="675" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=961%2C675&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=300%2C211&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-121.png?resize=768%2C539&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    推断用户的家庭收入
   </strong>
  </p>
  <p class="graf graf--p">
   该算法将用户映射到特定的收入范围。这是通过分析用户提供的信息，即 当前和过去的工作岗位、他们参加的当前和过去的教育机构、生活事件、家庭关系、和婚姻状况等，来完成的。
  </p>
  <p class="graf graf--p">
   然而，由于用户能够向 Facebook 提供虚假信息，因
   <strong class="markup--strong markup--p-strong">
    此该算法进一步分析用户的行为，他们访问的网站、他们在线进行的购买等
   </strong>
   。该算法使用不同的技术将用户映射到特定范围中，包括图像分析以识别用户在上传的照片上使用的品牌、他们在帖子和搜索中使用品牌名称的频率等等。然后，这些信息用于使广告客户更容易按收入定位适当的目标群体。
  </p>
  <p class="graf graf--p">
   更多：专利
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.rs/patents/US8583471?dq=US+8583471+B1&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwiA1qzWyIbNAhWGbhQKHQuODb4Q6AEIGzAA" href="https://www.google.rs/patents/US8583471?dq=US+8583471+B1&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwiA1qzWyIbNAhWGbhQKHQuODb4Q6AEIGzAA" rel="noopener noreferrer" target="_blank">
    US 8583471 B1
   </a>
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1135 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=961%2C916&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=300%2C286&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=768%2C732&amp;ssl=1 768w" data-recalc-dims="1" height="916" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=961%2C916&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1135" data-recalc-dims="1" height="916" sizes="(max-width: 961px) 100vw, 961px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=961%2C916&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=300%2C286&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-123.png?resize=768%2C732&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    比较用户的财务交易
   </strong>
  </p>
  <p class="graf graf--p">
   该算法所做的是通过共享类似的属性（例如年龄、位置、教育水平、工作位置等）来比较用户的购买习惯与该用户可以关联的一组用户的比较。算法分析搜索查询，访问 Facebook 和第三方网站上的外部网站和其他类型的交易。
  </p>
  <p class="graf graf--p">
   使用此数据，该算法可以为用户提供以前的交易分析，但
   <strong class="markup--strong markup--p-strong">
    也可以预测未来的支出
   </strong>
   ，例如，它可以通过将他以前的交易与具有相似兴趣的其他用户进行比较，来预测用户在旅行上花费的金额，比如 年龄相同、与主要用户居住在同一个城市的同群用户。
  </p>
  <p class="graf graf--p">
   更多：专利
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.rs/patents/US20140222636?dq=inassignee:%22Facebook,+Inc.%22+Ethnicity&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwilu8uZ77jLAhWEQJoKHW2yAjk4ChDoAQg8MAU" href="https://www.google.rs/patents/US20140222636?dq=inassignee:%22Facebook,+Inc.%22+Ethnicity&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwilu8uZ77jLAhWEQJoKHW2yAjk4ChDoAQg8MAU" rel="noopener noreferrer" target="_blank">
    US 20140222636 A1
   </a>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    将相机与社交网络系统的用户相关联
   </strong>
  </p>
  <p class="graf graf--p">
   该算法基于使用相同相机（即设备）拍摄的图片和/或视频来关联 Facebook 用户。当在 Facebook 上上传照片或视频时，用户界面、相机签名因算法而变红，并且用作上传使用相同设备（即相机）拍摄的照片或视频的用户的连接点。这可以用于检测虚假账户，具有多个账户的用户; 但
   <strong class="markup--strong markup--p-strong">
    也是为了社交图的目的，即推荐朋友、缩小你的视野、操纵你的认知
   </strong>
   。
  </p>
  <p class="graf graf--p">
   更多：专利
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.rs/patents/US8472662?dq=US+8472662+B2&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwjymZecyYbNAhVD7BQKHQBfAcAQ6AEIGzAA" href="https://www.google.rs/patents/US8472662?dq=US+8472662+B2&amp;hl=en&amp;sa=X&amp;ved=0ahUKEwjymZecyYbNAhVD7BQKHQBfAcAQ6AEIGzAA" rel="noopener noreferrer" target="_blank">
    US 8472662 B2
   </a>
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-1136 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=961%2C512&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=300%2C160&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=768%2C409&amp;ssl=1 768w" data-recalc-dims="1" height="512" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=961%2C512&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-1136" data-recalc-dims="1" height="512" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=961%2C512&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=300%2C160&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-124.png?resize=768%2C409&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   以上这些特色算法只是数百种不同算法中的几个例子，它们试图理解我们所有人的每一个动作和帖子，将我们分类为纳米子类别、并预测我们未来的行为。我们鼓励本文的读者自己探索可用的专利，并继续这项研究，以了解这一现象。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    因为，这非常重要，关于我们如何才能摆脱这个魔掌的问题。它几乎铺天盖地了
   </strong>
   。
  </p>
  <p>
   希望这些演示能给中国的积极人士一些提示，稍微用点心，揭露并不难。好运。
  </p>
  <div id="atatags-1611829871-5f3dca4bbde7b">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-1120" href="https://www.iyouport.org/%e4%ba%ba%e7%b1%bb%e6%95%b0%e6%8d%ae%e5%ba%93%e5%92%8c%e7%ae%97%e6%b3%95%e5%8a%b3%e5%b7%a5%ef%bc%9afacebook-%e7%9a%84%e7%ae%97%e6%b3%95%e5%b7%a5%e5%8e%82-%e7%ac%ac2%e9%83%a8/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-1120" href="https://www.iyouport.org/%e4%ba%ba%e7%b1%bb%e6%95%b0%e6%8d%ae%e5%ba%93%e5%92%8c%e7%ae%97%e6%b3%95%e5%8a%b3%e5%b7%a5%ef%bc%9afacebook-%e7%9a%84%e7%ae%97%e6%b3%95%e5%b7%a5%e5%8e%82-%e7%ac%ac2%e9%83%a8/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/algorithm/" rel="tag">
     algorithm
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/big-tech/" rel="tag">
     big tech
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/censorship/" rel="tag">
     censorship
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/facebook/" rel="tag">
     Facebook
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/humanrights/" rel="tag">
     humanrights
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/privacy/" rel="tag">
     privacy
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/surveillance/" rel="tag">
     Surveillance
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/surveillancecapitalism/" rel="tag">
     Surveillancecapitalism
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-05-22T00:05:01+08:00">
    2019年5月22日
   </time>
   <time class="updated" datetime="2019-04-26T22:00:25+08:00">
    2019年4月26日
   </time>
  </div>
 </div>
</article>

