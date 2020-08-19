---
layout: post
title: "如何在您的 PC 上创建 Android 开源研究设备？ #OSINT 安全性工具 💡 - iYouPort"
date: 2019-04-10T16:24:28+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e6%82%a8%e7%9a%84-pc-%e4%b8%8a%e5%88%9b%e5%bb%ba-android-%e5%bc%80%e6%ba%90%e7%a0%94%e7%a9%b6%e8%ae%be%e5%a4%87%ef%bc%9f-osint-%e5%ae%89%e5%85%a8%e6%80%a7%e5%b7%a5/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-523 post type-post status-publish format-standard has-post-thumbnail hentry category-osint category-67 tag-osint tag-tech tag-technology tag-tools" id="post-523">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在您的 PC 上创建 Android 开源研究设备？ #OSINT 安全性工具 💡
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
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-04-11T00:24:28+08:00">
    2019年4月11日
   </time>
   <time class="updated" datetime="2019-04-24T15:10:40+08:00">
    2019年4月24日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <em>
     手机是危险的东西，尤其是当您做深度调查和研究的时候 ——如果您的调查主题将具有能够撼动权力关系的伟大意义，保密其过程是至关重要的……💡 如果有一种办法能做到既安全，又省钱，你想不想要？
    </em>
   </li>
  </ul>
  <p class="graf graf--p graf-after--figure" id="79ef">
   大多数数字研究可以在台式机或笔记本电脑上完成，而不会出现任何问题; 但是，有时您可能需要使用移动设备才能使用特定的应用程序。本指南将提供有关在 PC 上设置虚拟 Android 设备以进行开源调查研究的演练。在 Mac 上也可以进行 Android 模拟，只是需要不同的应用程序。
  </p>
  <p class="graf graf--p graf-after--p" id="e1fb">
   那么，为什么要设置 Android 虚拟设备来进行开源调查呢？大多数人可以将实际的手机或网络应用程序用于相同的目的，但有一些理由您必需知道：
  </p>
  <ul class="postList">
   <li class="graf graf--li graf-after--p" id="50ae">
    <strong class="markup--strong markup--li-strong">
     隐私
    </strong>
    — — 在您自己的手机上进行研​​究时，您必须考虑是否在意外的情况下广播了您的个人信息。
    <strong class="markup--strong markup--li-strong">
     如果您的调查主题将具有能够撼动权力关系的伟大意义，保密是至关重要的
    </strong>
    。在 Android 虚拟设备上，您可以匿名，不使用您的个人设备、帐户或电话号码进行研究。
   </li>
   <li class="graf graf--li graf-after--li" id="8afe">
    <strong class="markup--strong markup--li-strong">
     GPS 欺骗
    </strong>
    — — 虽然您可以在真实手机或平板电脑上做到欺骗位置信息，但在 Android 虚拟设备上这样做会非常容易。如本指南中所述，您可以输入要访问各种应用程序信息的任何坐标。
   </li>
   <li class="graf graf--li graf-after--li" id="05d9">
    <strong class="markup--strong markup--li-strong">
     省钱
    </strong>
    — — 设置 Android 虚拟设备的一个特别简单的原因是，您无需购买另一部手机来进行研究，无论您是否拥有 iPhone，或者想要购买第二台 Android 设备以便与您的真实电话号码和帐户分开。
   </li>
  </ul>
  <p class="graf graf--p graf-after--li" id="b576">
   <strong class="markup--strong markup--p-strong">
    安装：Genymotion 和 VirtualBox
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="d65b">
   对于本指南，我们将使用 Genymotion 在 Windows 上设置 Android 虚拟设备。我们在本指南中使用了 Windows 10，如果您使用的是其他版本，则结果可能会有所不同。
  </p>
  <p class="graf graf--p graf-after--p" id="a87b">
   Genymotion 是 Windows 上比较流行的 Android 模拟程序之一，主要由应用程序开发人员使用。但是，有一个免费版本的程序供个人使用（主要用于游戏）。该程序运行 Oracle 的 VirtualBox 程序，该程序需要与 Genymotion 一起安装。
  </p>
  <p class="graf graf--p graf-after--p" id="2971">
   首先，在
   <a class="markup--anchor markup--p-anchor" data-href="https://www.genymotion.com/fun-zone/" href="https://www.genymotion.com/fun-zone/" rel="noopener nofollow noreferrer" target="_blank">
    此处
   </a>
   找到一个供个人使用的 Genymotion 帐户。
   <strong class="markup--strong markup--p-strong">
    务必
   </strong>
   在使用类型字段中选择“游戏”。您需要输入真实的电子邮件地址才能进行确认步骤。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-526 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=716%2C388&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=1024%2C555&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=300%2C163&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=768%2C416&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=1100%2C596&amp;ssl=1 1100w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?w=1528&amp;ssl=1 1528w" data-recalc-dims="1" height="388" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=716%2C388&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-526" data-recalc-dims="1" height="388" sizes="(max-width: 716px) 100vw, 716px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=716%2C388&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=1024%2C555&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=300%2C163&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=768%2C416&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?resize=1100%2C596&amp;ssl=1 1100w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-42.jpeg?w=1528&amp;ssl=1 1528w" width="716"/>
   </noscript>
  </p>
  <p>
   注册和帐户验证后，在 30 天试用和购买选项下方选择“下载 Genymotion 供个人使用”链接。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-527 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=716%2C447&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=1024%2C639&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=300%2C187&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=768%2C480&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=1100%2C687&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?w=1406&amp;ssl=1 1406w" data-recalc-dims="1" height="447" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=716%2C447&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-527" data-recalc-dims="1" height="447" sizes="(max-width: 716px) 100vw, 716px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=716%2C447&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=1024%2C639&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=300%2C187&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=768%2C480&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?resize=1100%2C687&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-43.jpeg?w=1406&amp;ssl=1 1406w" width="716"/>
   </noscript>
  </p>
  <p>
   在跟随此链接后，您需要再点击几下以获取安装文件。
  </p>
  <p>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-528 size-large jetpack-lazy-image" data-lazy-sizes="(max-width: 1024px) 100vw, 1024px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1024%2C387&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1024%2C387&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=300%2C113&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=768%2C290&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1100%2C416&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?w=1232&amp;ssl=1 1232w" data-recalc-dims="1" height="387" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1024%2C387&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1024"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-528 size-large" data-recalc-dims="1" height="387" sizes="(max-width: 1024px) 100vw, 1024px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1024%2C387&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1024%2C387&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=300%2C113&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=768%2C290&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?resize=1100%2C416&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-44.jpeg?w=1232&amp;ssl=1 1232w" width="1024"/>
   </noscript>
  </p>
  <p>
   如果您尚未安装 Oracle 的 VirtualBox 程序，则需要选择第一个较大的文件，Genymotion 会运行该程序。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-529 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 658px) 100vw, 658px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?resize=658%2C556&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?w=658&amp;ssl=1 658w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?resize=300%2C253&amp;ssl=1 300w" data-recalc-dims="1" height="556" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?resize=658%2C556&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="658"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-529 size-full" data-recalc-dims="1" height="556" sizes="(max-width: 658px) 100vw, 658px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?resize=658%2C556&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?w=658&amp;ssl=1 658w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-45.jpeg?resize=300%2C253&amp;ssl=1 300w" width="658"/>
   </noscript>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-530 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?resize=716%2C560&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?w=741&amp;ssl=1 741w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?resize=300%2C235&amp;ssl=1 300w" data-recalc-dims="1" height="560" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?resize=716%2C560&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-530" data-recalc-dims="1" height="560" sizes="(max-width: 716px) 100vw, 716px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?resize=716%2C560&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?w=741&amp;ssl=1 741w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-46.jpeg?resize=300%2C235&amp;ssl=1 300w" width="716"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="7c6c">
   根据您的 Windows 安全设置，您的计算机可能会在安装 VirtualBox 软件时发生轻微的恐慌。如果要使用 Genymotion，则需要提供安装程序的权限。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-531 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?resize=716%2C337&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?w=759&amp;ssl=1 759w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?resize=300%2C141&amp;ssl=1 300w" data-recalc-dims="1" height="337" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?resize=716%2C337&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-531" data-recalc-dims="1" height="337" sizes="(max-width: 716px) 100vw, 716px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?resize=716%2C337&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?w=759&amp;ssl=1 759w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-47.jpeg?resize=300%2C141&amp;ssl=1 300w" width="716"/>
   </noscript>
  </p>
  <p>
   安装 VirtualBox 和 Genymotion 后，您需要从使用通知对话框中选择“个人使用”。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-532 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=716%2C577&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=768%2C619&amp;ssl=1 768w" data-recalc-dims="1" height="577" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=716%2C577&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-532" data-recalc-dims="1" height="577" sizes="(max-width: 716px) 100vw, 716px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=716%2C577&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-48.jpeg?resize=768%2C619&amp;ssl=1 768w" width="716"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="dfe9">
   恭喜！您已经安装了 Genymotion，成功已经一半了。
  </p>
  <p class="graf graf--p graf-after--p" id="2b32">
   <strong class="markup--strong markup--p-strong">
    设置 Android 虚拟设备
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="a0c7">
   在 Genymotion 上，您可以设置多个 Android 虚拟设备来模拟特定设备，包括手机和平板电脑。我们在此演练中设置了 Pixel 2 XL 虚拟设备，但您也可以设置自定义 Android 设备，Samsung Galaxy 或其他一系列选项。
   <strong class="markup--strong markup--p-strong">
    在特定应用程序存在兼容性问题的情况下，使用不同版本的 Android 设置虚拟设备可能很有用
   </strong>
   。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-533 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=716%2C577&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=768%2C619&amp;ssl=1 768w" data-recalc-dims="1" height="577" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=716%2C577&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-533" data-recalc-dims="1" height="577" sizes="(max-width: 716px) 100vw, 716px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=716%2C577&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-49.jpeg?resize=768%2C619&amp;ssl=1 768w" width="716"/>
   </noscript>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-534 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=716%2C577&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=768%2C619&amp;ssl=1 768w" data-recalc-dims="1" height="577" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=716%2C577&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-534" data-recalc-dims="1" height="577" sizes="(max-width: 716px) 100vw, 716px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=716%2C577&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=300%2C242&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-50.jpeg?resize=768%2C619&amp;ssl=1 768w" width="716"/>
   </noscript>
  </p>
  <p>
   您需要使用 Genymotion 帐户登录才能访问其虚拟设备数据范围。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-535 size-large jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=716%2C1024&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=716%2C1024&amp;ssl=1 716w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=210%2C300&amp;ssl=1 210w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=768%2C1099&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?w=868&amp;ssl=1 868w" data-recalc-dims="1" height="1024" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=716%2C1024&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-535 size-large" data-recalc-dims="1" height="1024" sizes="(max-width: 716px) 100vw, 716px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=716%2C1024&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=716%2C1024&amp;ssl=1 716w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=210%2C300&amp;ssl=1 210w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?resize=768%2C1099&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-51.jpeg?w=868&amp;ssl=1 868w" width="716"/>
   </noscript>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-537 jetpack-lazy-image" data-lazy-sizes="(max-width: 716px) 100vw, 716px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=716%2C523&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=300%2C219&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=768%2C561&amp;ssl=1 768w" data-recalc-dims="1" height="523" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=716%2C523&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="716"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-537" data-recalc-dims="1" height="523" sizes="(max-width: 716px) 100vw, 716px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=716%2C523&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?w=802&amp;ssl=1 802w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=300%2C219&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-52.jpeg?resize=768%2C561&amp;ssl=1 768w" width="716"/>
   </noscript>
  </p>
  <p>
  </p>
  <p class="graf graf--p graf-after--figure" id="5ca1">
   <strong class="markup--strong markup--p-strong">
    GAPPS
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="efd4">
   Android 虚拟设备在没有访问 Google Play 应用商店的情况下无法用于研究目的。我们建议您仅为虚拟设备设置新的 Gmail 帐户。
  </p>
  <p class="graf graf--p graf-after--p" id="85a8">
   为将来的 Google Play 下载设置 Gmail 帐户后，请点击 Genymotion 用户界面右上角的“打开 GApps”按钮。在其他关于设置 Android 虚拟设备的指南中，例如来自
   <a class="markup--anchor markup--p-anchor" data-href="https://inteltechniques.com/android/index.html" href="https://inteltechniques.com/android/index.html" rel="noopener nofollow noreferrer" target="_blank">
    IntelTechniques 的优秀
   </a>
   指南，Genymotion 没有准备好 GApps，于是相比下这个过程对我们来说更加轻松。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-538 size-large jetpack-lazy-image" data-lazy-sizes="(max-width: 538px) 100vw, 538px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=538%2C1024&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=538%2C1024&amp;ssl=1 538w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=158%2C300&amp;ssl=1 158w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=768%2C1461&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?w=1067&amp;ssl=1 1067w" data-recalc-dims="1" height="1024" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=538%2C1024&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="538"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-538 size-large" data-recalc-dims="1" height="1024" sizes="(max-width: 538px) 100vw, 538px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=538%2C1024&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=538%2C1024&amp;ssl=1 538w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=158%2C300&amp;ssl=1 158w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?resize=768%2C1461&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-53.jpeg?w=1067&amp;ssl=1 1067w" width="538"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="952e">
   单击 GApps 按钮将向您发送一些下载和安装过程。最终，您的虚拟设备将重新启动，GApps 处于活动状态。现在，您可以使用 Gmail（或您使用的任何其他服务）地址浏览 Google Play 商店，并将应用程序安装到虚拟设备上。
  </p>
  <p class="graf graf--p graf-after--p" id="be3d">
   <strong class="markup--strong markup--p-strong">
    安装和使用应用程序
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="dac4">
   与真实手机一样，您可以通过 Google Play 商店在 Android 虚拟设备上搜索并安装应用。例如，您可以轻松地搜索并安装 Whisper 应用程序。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-539 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 499px) 100vw, 499px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?resize=499%2C998&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?w=499&amp;ssl=1 499w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?resize=150%2C300&amp;ssl=1 150w" data-recalc-dims="1" height="998" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?resize=499%2C998&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="499"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-539 size-full" data-recalc-dims="1" height="998" sizes="(max-width: 499px) 100vw, 499px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?resize=499%2C998&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?w=499&amp;ssl=1 499w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-54.jpeg?resize=150%2C300&amp;ssl=1 150w" width="499"/>
   </noscript>
  </p>
  <p>
   但是，默认情况下，您的虚拟设备不会启用任何 GPS 位置，因此像 Whisper 这样的应用程序几乎无用。不过这正是有趣的地方。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-540 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 492px) 100vw, 492px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?resize=492%2C854&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?w=492&amp;ssl=1 492w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?resize=173%2C300&amp;ssl=1 173w" data-recalc-dims="1" height="854" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?resize=492%2C854&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="492"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-540 size-full" data-recalc-dims="1" height="854" sizes="(max-width: 492px) 100vw, 492px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?resize=492%2C854&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?w=492&amp;ssl=1 492w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-55.jpeg?resize=173%2C300&amp;ssl=1 173w" width="492"/>
   </noscript>
  </p>
  <p>
   在 Genymotion 用户界面的右上角，在电池图标下方，选择“GPS”按钮。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-541 size-full jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0、.jpeg?resize=69%2C287&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="287" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0、.jpeg?resize=69%2C287&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="69"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-541 size-full" data-recalc-dims="1" height="287" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0、.jpeg?resize=69%2C287&amp;ssl=1" width="69"/>
   </noscript>
  </p>
  <p>
   此按钮将弹出一个新框，
   <strong class="markup--strong markup--p-strong">
    允许您输入精确的坐标以进行欺骗
   </strong>
   。在这里，我们放入了中央公园的坐标。重置 Whisper 应用程序后，我们将找到一个在纽约市附近的欺骗坐标。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-542 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 485px) 100vw, 485px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?resize=485%2C850&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?w=485&amp;ssl=1 485w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?resize=171%2C300&amp;ssl=1 171w" data-recalc-dims="1" height="850" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?resize=485%2C850&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="485"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-542 size-full" data-recalc-dims="1" height="850" sizes="(max-width: 485px) 100vw, 485px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?resize=485%2C850&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?w=485&amp;ssl=1 485w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-56.jpeg?resize=171%2C300&amp;ssl=1 171w" width="485"/>
   </noscript>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-543 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 490px) 100vw, 490px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?resize=490%2C856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?w=490&amp;ssl=1 490w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?resize=172%2C300&amp;ssl=1 172w" data-recalc-dims="1" height="856" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?resize=490%2C856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="490"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-543 size-full" data-recalc-dims="1" height="856" sizes="(max-width: 490px) 100vw, 490px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?resize=490%2C856&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?w=490&amp;ssl=1 490w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-57.jpeg?resize=172%2C300&amp;ssl=1 172w" width="490"/>
   </noscript>
  </p>
  <p>
  </p>
  <p class="graf graf--p graf-after--figure" id="8c46">
   <strong class="markup--strong markup--p-strong">
    Snapchat 问题
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="b6c8">
   大多数应用程序在您的虚拟设备上运行良好; 但是，也有例外。特别是 Snapchat 目前不适用于 Genymotion。在其他一些 Android 模拟器中，例如 BlueStacks，您可以安装和启动 Snapchat，但该应用程序不允许您使用“假”手机登录。Snapchat 可能会在 Genymotion 和其他模拟器的未来更新中实现，但就目前而言，可能让它在虚拟设备上工作更麻烦。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-544 size-large jetpack-lazy-image" data-lazy-sizes="(max-width: 550px) 100vw, 550px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=550%2C1024&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=550%2C1024&amp;ssl=1 550w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=161%2C300&amp;ssl=1 161w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=768%2C1431&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?w=1067&amp;ssl=1 1067w" data-recalc-dims="1" height="1024" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=550%2C1024&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="550"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-544 size-large" data-recalc-dims="1" height="1024" sizes="(max-width: 550px) 100vw, 550px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=550%2C1024&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=550%2C1024&amp;ssl=1 550w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=161%2C300&amp;ssl=1 161w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?resize=768%2C1431&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-58.jpeg?w=1067&amp;ssl=1 1067w" width="550"/>
   </noscript>
  </p>
  <p>
  </p>
  <p class="graf graf--p graf-after--figure" id="1cdf">
   <strong class="markup--strong markup--p-strong">
    结论
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="67d6">
   虽然使用 Genymotion 进行 Android 虚拟设备并不是一个完美的解决方案，但大多数应用程序都能正常运行，并且可以
   <strong class="markup--strong markup--p-strong">
    轻松欺骗 GPS 坐标，以最大化新闻采集和验证功能
   </strong>
   。此外，您还可以增加一层信心，确保您的设备或帐户不会受到损害或被窥探，尤其是对于可疑组织开发的某些应用程序。
  </p>
  <p class="graf graf--p graf-after--p" id="6685">
   如果您对本指南有任何建议、意见或更正，欢迎在回复中提出。此外，如果您对在开源调查、信息收集或验证中特别有用的应用程序有任何建议，也请发送。
  </p>
  <p>
  </p>
  <div id="atatags-1611829871-5f3db1a8c6a62">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-523" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e6%82%a8%e7%9a%84-pc-%e4%b8%8a%e5%88%9b%e5%bb%ba-android-%e5%bc%80%e6%ba%90%e7%a0%94%e7%a9%b6%e8%ae%be%e5%a4%87%ef%bc%9f-osint-%e5%ae%89%e5%85%a8%e6%80%a7%e5%b7%a5/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-523" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e6%82%a8%e7%9a%84-pc-%e4%b8%8a%e5%88%9b%e5%bb%ba-android-%e5%bc%80%e6%ba%90%e7%a0%94%e7%a9%b6%e8%ae%be%e5%a4%87%ef%bc%9f-osint-%e5%ae%89%e5%85%a8%e6%80%a7%e5%b7%a5/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/tech/" rel="tag">
     tech
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
   <time class="entry-date published" datetime="2019-04-11T00:24:28+08:00">
    2019年4月11日
   </time>
   <time class="updated" datetime="2019-04-24T15:10:40+08:00">
    2019年4月24日
   </time>
  </div>
 </div>
</article>

