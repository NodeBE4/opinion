---
layout: post
title: "如何反用 OSINT 为防御 - iYouPort"
date: 2019-01-24T05:23:16+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%8f%8d%e7%94%a8-osint-%e4%b8%ba%e9%98%b2%e5%be%a1/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4887 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-security tag-technology tag-threat-intelligence" id="post-4887">
 <header class="entry-header">
  <h1 class="entry-title">
   如何反用 OSINT 为防御
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-01-24T13:23:16+08:00">
    2019年1月24日
   </time>
   <time class="updated" datetime="2019-06-01T13:27:15+08:00">
    2019年6月1日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       OSINT 就是这样一种东西，能进攻也能防御
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4888 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1100%2C615&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?w=1102&amp;ssl=1 1102w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=300%2C168&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=768%2C429&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1024%2C572&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1100%2C615&amp;ssl=1 1100w" data-recalc-dims="1" height="615" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1100%2C615&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4888" data-recalc-dims="1" height="615" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1100%2C615&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?w=1102&amp;ssl=1 1102w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=300%2C168&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=768%2C429&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1024%2C572&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-155.png?resize=1100%2C615&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   <span style="color: #515151;">
    虽然2018年已经结束了，但针对关键基础设施的网络攻击运动没有放缓的迹象。最近，威胁研究人员发现了一项名为“神枪手行动”的全球运动，该运动试图渗透核、国防、能源和金融公司。同样，意大利石油服务公司 Saipem 最近也成为了袭击事件的受害者，这次袭击使数百台服务器和计算机陷入瘫痪。
   </span>
  </p>
  <p>
   威胁情报显示，由于攻击者使用网络钓鱼技术 — 也就是社交工程技术 — 危害 IT 企业网络，对关键基础设施领域的组织进行大量攻击。通过访问 IT 环境，IT 和 ICS 环境之间的互连可以允许攻击者在这些网络之间进行遍历。
  </p>
  <p>
   我们在讲述社交工程时最多强调的是OSINT，也就是侦查作为基础，信息搜集在很大程度上帮助了攻击的有效性。因此对于安防来说，了解攻击者可以获得哪些有关组织的信息非常重要。
  </p>
  <p>
   OSINT 的一个定义是“来自公共信息的情报 — 量身定制的情报，它基于可以从公共来源合法和道德地获得的信息。”
  </p>
  <p>
   这些技术允许攻击者被动地利用互联网上可用的信息来开发有关其目标的信息，并在不被注意的情况下改进其攻击方法。就如我们曾经多次演示的那样，无论攻击者是使用专用工具，还是仅使用 Google，都可以获得有关组织的信息类型，包括：
   <br/>
  </p>
 </div>
</article>
