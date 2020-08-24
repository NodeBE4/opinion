---
layout: post
title: "如何使用 Maltego 监测推特上的政府信息战 - iYouPort"
date: 2020-07-02T16:02:56+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8-maltego-%e7%9b%91%e6%b5%8b%e6%8e%a8%e7%89%b9%e4%b8%8a%e7%9a%84%e6%94%bf%e5%ba%9c%e4%bf%a1%e6%81%af%e6%88%98/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-12401 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-51 category-67 tag-disinformation tag-information-warfare tag-investigation tag-maltego tag-social-media tag-technique tag-technology tag-tools tag-twitter" id="post-12401">
 <header class="entry-header">
  <h1 class="entry-title">
   如何使用 Maltego 监测推特上的政府信息战
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
   <a href="https://www.iyouport.org/category/%e5%bf%83%e7%90%86%e6%88%98%e5%92%8c%e4%bf%a1%e6%81%af%e6%88%98/" rel="category tag">
    心理战和信息战
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-07-03T00:02:56+08:00">
    2020年7月3日
   </time>
   <time class="updated" datetime="2020-06-27T22:23:05+08:00">
    2020年6月27日
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
       信息战和揭露抵制信息战，完全可以使用同一种工具
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12402 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?w=1240&amp;ssl=1 1240w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12402" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1100%2C733&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?w=1240&amp;ssl=1 1240w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-20.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   政府当局使用社交媒体进行跨国的大规模信息战已经频频被曝光，不论是操纵选举、洗脑受众、污染真相、还是
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%ba%ba%e6%a0%bc%e6%9a%97%e6%9d%80%e5%92%8c%e6%8a%b9%e9%bb%91%e8%bf%90%e5%8a%a8%ef%bc%9a%e8%b0%81%e5%9c%a8%e5%8f%97%e7%9b%8a%ef%bc%9f/" href="https://www.iyouport.org/%e4%ba%ba%e6%a0%bc%e6%9a%97%e6%9d%80%e5%92%8c%e6%8a%b9%e9%bb%91%e8%bf%90%e5%8a%a8%ef%bc%9a%e8%b0%81%e5%9c%a8%e5%8f%97%e7%9b%8a%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
    人格暗杀
   </a>
   。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    👉推荐下面这些报告
   </strong>
   ：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e7%9c%8b%e6%b8%85%e4%bf%a1%e6%81%af%e6%88%98%ef%bc%9a2019%e5%85%a8%e7%90%83%e6%9c%89%e7%bb%84%e7%bb%87%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%93%8d%e7%ba%b5%e6%b8%85%e5%8d%95/" href="https://www.iyouport.org/%e7%9c%8b%e6%b8%85%e4%bf%a1%e6%81%af%e6%88%98%ef%bc%9a2019%e5%85%a8%e7%90%83%e6%9c%89%e7%bb%84%e7%bb%87%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%93%8d%e7%ba%b5%e6%b8%85%e5%8d%95/" rel="noopener noreferrer" target="_blank">
     看清信息战：2019全球有组织社交媒体操纵清单
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%bd%93%e6%81%b6%e6%84%8f%e8%80%85%e6%8e%8c%e6%8f%a1%e6%8a%80%e6%9c%af%ef%bc%9a%e4%bf%a1%e6%81%af%e6%88%98%e7%9a%84%e6%9c%aa%e6%9d%a5%e7%a9%b6%e7%ab%9f%e6%9c%89%e5%a4%9a%e5%8f%af%e6%80%95%ef%bc%9f/" href="https://www.iyouport.org/%e5%bd%93%e6%81%b6%e6%84%8f%e8%80%85%e6%8e%8c%e6%8f%a1%e6%8a%80%e6%9c%af%ef%bc%9a%e4%bf%a1%e6%81%af%e6%88%98%e7%9a%84%e6%9c%aa%e6%9d%a5%e7%a9%b6%e7%ab%9f%e6%9c%89%e5%a4%9a%e5%8f%af%e6%80%95%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
     当恶意者掌握技术：信息战的未来究竟有多可怕？
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e7%ac%ac-1-%e9%83%a8%e5%88%86%ef%bc%9a%e5%9c%a8%e7%ba%bf%e5%aa%92%e4%bd%93%e4%b8%8a%e7%9a%84%e6%94%bf%e6%b2%bb%e5%ae%a3%e4%bc%a0%e3%80%81%e5%8e%8b%e8%bf%ab%e5%92%8c%e6%94%bb%e5%87%bb/" href="https://www.iyouport.org/%e7%ac%ac-1-%e9%83%a8%e5%88%86%ef%bc%9a%e5%9c%a8%e7%ba%bf%e5%aa%92%e4%bd%93%e4%b8%8a%e7%9a%84%e6%94%bf%e6%b2%bb%e5%ae%a3%e4%bc%a0%e3%80%81%e5%8e%8b%e8%bf%ab%e5%92%8c%e6%94%bb%e5%87%bb/" rel="noopener noreferrer" target="_blank">
     &lt;可视化信息战&gt; 第 1 部分：在线媒体上的政治宣传、压迫和攻击
    </a>
    》
   </li>
   <li class="graf graf--li">
    《&lt;
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e7%ac%ac2%e9%83%a8%e5%88%86%ef%bc%9a%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%88%98%e5%9c%ba%e3%80%81%e4%ba%ba%e5%b7%a5%e6%94%bf%e6%b2%bb%e5%92%8c%e9%80%ae%e6%8d%95/" href="https://www.iyouport.org/%e7%ac%ac2%e9%83%a8%e5%88%86%ef%bc%9a%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%88%98%e5%9c%ba%e3%80%81%e4%ba%ba%e5%b7%a5%e6%94%bf%e6%b2%bb%e5%92%8c%e9%80%ae%e6%8d%95/" rel="noopener noreferrer" target="_blank">
     可视化信息战&gt; 第2部分：社交媒体战场、逮捕和羁押
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e6%89%80%e6%9c%89%e4%bf%a1%e6%81%af%e9%83%bd%e6%98%af%e6%88%98%e7%95%a5%e6%80%a7%e7%9a%84%ef%bc%9a%e4%bf%a1%e6%81%af%e5%9c%b0%e7%bc%98%e6%94%bf%e6%b2%bb/" href="https://www.iyouport.org/%e6%89%80%e6%9c%89%e4%bf%a1%e6%81%af%e9%83%bd%e6%98%af%e6%88%98%e7%95%a5%e6%80%a7%e7%9a%84%ef%bc%9a%e4%bf%a1%e6%81%af%e5%9c%b0%e7%bc%98%e6%94%bf%e6%b2%bb/" rel="noopener noreferrer" target="_blank">
     所有信息都是战略性的：信息地缘政治
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e4%bf%a1%e6%81%af%e6%88%98%ef%bc%9a%e6%8f%ad%e9%9c%b2%e6%94%bf%e5%ba%9c%e7%9a%84%e5%ae%a3%e4%bc%a0%e6%9c%ba%e5%99%a8%e5%a6%82%e4%bd%95%e4%bc%aa%e8%a3%85%e6%88%90%e7%8b%ac%e7%ab%8b%e5%aa%92/" href="https://www.iyouport.org/%e4%bf%a1%e6%81%af%e6%88%98%ef%bc%9a%e6%8f%ad%e9%9c%b2%e6%94%bf%e5%ba%9c%e7%9a%84%e5%ae%a3%e4%bc%a0%e6%9c%ba%e5%99%a8%e5%a6%82%e4%bd%95%e4%bc%aa%e8%a3%85%e6%88%90%e7%8b%ac%e7%ab%8b%e5%aa%92/" rel="noopener noreferrer" target="_blank">
     信息战：揭露政府的宣传机器如何伪装成“独立媒体”和 NGO 以混淆视听
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    挖掘和揭露信息战操纵是开源情报协助 *公民掌握真相计划* 的重点用例之一。
   </strong>
   即便您不是行动者，也可能会好奇这些政府秘密行动是如何操作的。通过本文您可以掌握了解真相的方法。
  </p>
  <p class="graf graf--p">
   与任何一种最有效的攻击一样，一切都始于良好的侦察。
  </p>
  <p>
   以下是 null-byte 介绍的方法《
   <a href="https://null-byte.wonderhowto.com/how-to/use-maltego-monitor-twitter-for-disinformation-campaigns-0185998/" rel="noopener noreferrer" target="_blank">
    HOW TO Use Maltego to Monitor Twitter for Disinformation Campaigns
   </a>
   》
  </p>
  <p class="graf graf--p">
   在社交媒体上扫描全球对话与扫描网络并不相同，但是由于 Maltego 中设计的用于监视 Twitter 的功能，您可以使用一些与侦查网络相同的工具来可视化社交媒体对话。
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/wQV8QZLRO3U" width="750">
   </iframe>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     虚假信息的信息战行动
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   在信息战运动中，虚假信息的扩散是一个典型。这些攻击利用 Twitter 和其他热门社交平台，通过散布旨在
   <strong class="markup--strong markup--p-strong">
    促进两极分化
   </strong>
   的虚假和误导性信息，试图加深目标社会的政治和意见分歧，以令其难以作出有效决策。
  </p>
  <p class="graf graf--p">
   👉 没错，信息战操作者并不需要强迫你相信什么，正如我们在
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%88%90%e4%b8%ba%e4%bd%a0%e6%83%b3%e8%a6%81%e5%9c%a8%e8%bf%99%e4%b8%aa%e4%b8%96%e7%95%8c%e4%b8%8a%e7%9c%8b%e5%88%b0%e7%9a%84%e6%94%b9%e5%8f%98%ef%bc%9a%e4%b8%8eiyp%e4%b8%8b%e5%8d%88%e8%8c%b6/" href="https://www.iyouport.org/%e6%88%90%e4%b8%ba%e4%bd%a0%e6%83%b3%e8%a6%81%e5%9c%a8%e8%bf%99%e4%b8%aa%e4%b8%96%e7%95%8c%e4%b8%8a%e7%9c%8b%e5%88%b0%e7%9a%84%e6%94%b9%e5%8f%98%ef%bc%9a%e4%b8%8eiyp%e4%b8%8b%e5%8d%88%e8%8c%b6/" rel="noopener noreferrer" target="_blank">
    去年底的访谈中所强调的
   </a>
   ，
   <strong class="markup--strong markup--p-strong">
    他们只需要分化你和你的队友，让社区甚至整个社会无法联合抵抗，他们就成功了
   </strong>
   。
  </p>
  <p class="graf graf--p">
   于是他们会着手于社会讨论中所体现的两级分化 —— *同时*在两个极端上促进它们，也就是拉大分歧，令原本短暂的矛盾变成完全不可调和。
  </p>
  <p class="graf graf--p">
   也就是说，即便一些信息战操纵者表现出与您一致的立场，也请小心他们的信息，他们会向非常极端的方向引导对话，同时用虚假信息污染您的认知。
  </p>
  <p class="graf graf--p">
   👉为了了解和揭露信息战运动，您需要认真研究在线对话，观察攻击者如何精心制作能够发挥最大影响的信息。
  </p>
  <p class="graf graf--p">
   抓取到敏感话题后，假冒的新闻就会被具有战略意义的僵尸程序主动地注入到公众讨论中，
   <strong class="markup--strong markup--p-strong">
    这些僵尸程序专门瞄准不擅长鉴定真伪的真实用户和社群
   </strong>
   。
  </p>
  <p class="graf graf--p">
   通常，这些信息看起来非常像是有效的或已知的来源，或者至少是现有边缘组织的成员。事实上是伪造的。
  </p>
  <p class="graf graf--p">
   👉活动家或其他政治参与用户对在线对话的认真研究是抵御这些操纵运动的重要组成部分。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    方法参见我们的
    <a class="markup--anchor markup--li-anchor" data-href="https://start.me/p/nRBzO9/iyp-3" href="https://start.me/p/nRBzO9/iyp-3" rel="noopener noreferrer" target="_blank">
     列表3 — “让它民主：公民掌握真相的技巧和技术”
    </a>
   </li>
  </ul>
  <p class="graf graf--p">
   多种策略为这些操纵的成功做出了贡献，例如 通过监视谁共享新闻报道、以及他们倾向于共享什么，将定制的虚假内容有
   <strong class="markup--strong markup--p-strong">
    针对性地分发
   </strong>
   给目标人。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     扩大两极分化的讨论
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   社交媒体公司一直在开发使用机器学习来识别与正面或负面推文相关的模式，从而实现
   <strong class="markup--strong markup--p-strong">
    根据情感自动对推文和社交媒体消息进行分类
   </strong>
   的功能。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    这里是一个简介《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90%ef%bc%9a%e5%a6%82%e4%bd%95%e5%9c%a8%e7%a4%be%e4%ba%a4%e7%bd%91%e7%bb%9c%e4%b8%8a%e6%8a%93%e5%8f%96%e5%b9%b6%e5%88%86%e6%9e%90%e5%a4%a7%e4%bc%97%e5%af%b9%e6%9f%90/" href="https://www.iyouport.org/%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90%ef%bc%9a%e5%a6%82%e4%bd%95%e5%9c%a8%e7%a4%be%e4%ba%a4%e7%bd%91%e7%bb%9c%e4%b8%8a%e6%8a%93%e5%8f%96%e5%b9%b6%e5%88%86%e6%9e%90%e5%a4%a7%e4%bc%97%e5%af%b9%e6%9f%90/" rel="noopener noreferrer" target="_blank">
     情感分析：如何在社交网络上抓取并分析大众对某些话题的情绪？
    </a>
    》
   </li>
   <li class="graf graf--li">
    这里是一个演示案例《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%af%b9%e7%89%b9%e6%9c%97%e6%99%ae%e6%8e%a8%e6%96%87%e7%9a%84%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90-python-%f0%9f%90%8d/" href="https://www.iyouport.org/%e5%af%b9%e7%89%b9%e6%9c%97%e6%99%ae%e6%8e%a8%e6%96%87%e7%9a%84%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90-python-%f0%9f%90%8d/" rel="noopener noreferrer" target="_blank">
     对特朗普推文的情感分析: Python
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   👉通过使用情绪分析，攻击者可以通过触发一系列机器人程序转发并共享有关特定主题或人员的合法推文，从而扩大两极分化的讨论 —— 具体取决于目标人群所表述的是负面还是正面的内容。
  </p>
  <p class="graf graf--p">
   如上所述，两个极端同时被拉扯。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    不要错过《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e4%bb%8e%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%e5%88%b0%e5%ae%89%e5%85%a8%e9%98%b2%e5%be%a1-%e6%97%a5%e5%b8%b8%e5%bf%85%e5%a4%87%e7%9a%84%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%e5%8c%85/" href="https://www.iyouport.org/%e4%bb%8e%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%e5%88%b0%e5%ae%89%e5%85%a8%e9%98%b2%e5%be%a1-%e6%97%a5%e5%b8%b8%e5%bf%85%e5%a4%87%e7%9a%84%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%e5%8c%85/" rel="noopener noreferrer" target="_blank">
     从信息验证到安全防御 — 日常必备的调查工具包
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   这种攻击的优势在于，攻击者可以模拟反应式干扰器，在执行干扰操作之前会等待特定类型的通信发生。
  </p>
  <p class="graf graf--p">
   在这种情况下，攻击者可以使用情绪分析来分类两极分化的推文，以扩大并
   <strong class="markup--strong markup--p-strong">
    通过淹没边缘观点迅速淹没讨论
   </strong>
   。这就有效阻止了公平和公开的辩论 —— 从而使攻击者可以通过真实用户编写的推文来抵制不同意见。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e8%ae%a8%e8%ae%ba%e7%9a%84%e7%bb%88%e7%bb%93/" href="https://www.iyouport.org/%e8%ae%a8%e8%ae%ba%e7%9a%84%e7%bb%88%e7%bb%93/" rel="noopener noreferrer" target="_blank">
     讨论的终结
    </a>
    》没有讨论就没有民主。人们都谴责社交媒体终结了讨论，虽然这不完全是人的问题，但归根结底，依旧是人的问题……
   </li>
  </ul>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     干扰战术
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   通常，用于阻塞其他通信的技术同样适用于阻塞社交媒体上的交互。特别是，本文即将探讨的：如何使用连续干扰、欺骗性干扰、和扫描干扰来 主导/操纵 在线对话。
  </p>
  <p class="graf graf--p">
   连续干扰的目的是使目标通信过载、并产生大量的随机噪声，令目标人/群体产生厌倦感，从而主动退出。这种手段不会尝试融入对话，而是致力于让它看起来更像垃圾信息那样。
  </p>
  <p class="graf graf--p">
   👉机器人僵尸网络的大规模出没就是这个目的，它们使用完全无关的推文大批量淹没特定主题标签，从而削弱了讨论范围，令合法参与者无法找到有效推文。
  </p>
  <p class="graf graf--p">
   欺骗性干扰旨在通过
   <strong class="markup--strong markup--p-strong">
    使干扰看起来像是谈话的一部分，来掩饰攻击本身
   </strong>
   。在这种攻击中，有针对性的主题标签上充斥着合法的推文，但
   <strong class="markup--strong markup--p-strong">
    这些推文专门用来散布令人困惑的误导性信息
   </strong>
   。
  </p>
  <p class="graf graf--p">
   攻击者通过引入疑问使特定主题下的信息变得无用，任何使用井号标签进行交流或了解正在发生的事的人都将很快发现，自己已经被完全的虚假信息所掩盖。
  </p>
  <p class="graf graf--p">
   通过更快地传播有关关键人员的虚假负面信息，也可以有针对性地使用此攻击 —— 进行
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%ba%ba%e6%a0%bc%e6%9a%97%e6%9d%80%e5%92%8c%e6%8a%b9%e9%bb%91%e8%bf%90%e5%8a%a8%ef%bc%9a%e8%b0%81%e5%9c%a8%e5%8f%97%e7%9b%8a%ef%bc%9f/" href="https://www.iyouport.org/%e4%ba%ba%e6%a0%bc%e6%9a%97%e6%9d%80%e5%92%8c%e6%8a%b9%e9%bb%91%e8%bf%90%e5%8a%a8%ef%bc%9a%e8%b0%81%e5%9c%a8%e5%8f%97%e7%9b%8a%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
    人格暗杀行动
   </a>
   。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     使用 Maltego 实时监控信息战行动
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   👉正如本文简介中所声明的：信息战进攻和抵制/揭露信息战的防御，使用的是同样的工具。
  </p>
  <p class="graf graf--p">
   要发动这些攻击中的任何一种，至关重要的是能够像在一个网络上运行 Nmap 一样 “扫描” 正在进行的 Twitter 对话。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    如果不了解攻击面，就无法设计出可行的攻击计划。因此，挑战就变成了在Twitter 上映射非常有机的对话
   </strong>
   。
  </p>
  <p class="graf graf--p">
   👉事实证明，Maltego 是做到这点的理想工具。将目标直接导入 Maltego 进行后续研究或定位的附加优势，使用 Maltego 追踪社交媒体的黑客可以找到与事件、主题或特定人有关的信息传播所涉及的所有关键标签和用户。
  </p>
  <p class="graf graf--p">
   尽管大多数黑客认为 Maltego 对于查找静态信息（例如网络指纹）很有用，但有一些 Maltego 机器是
   <strong class="markup--strong markup--p-strong">
    专门设计用于在社交媒体上执行诸如跟踪用户和感兴趣主题的操作
   </strong>
   。
  </p>
  <p class="graf graf--p">
   ⚠️ 政府当局的间谍使用这些策略来实时跟踪已知的活动家和反抗者的社交媒体帐户，从而使警方能够在没有逮捕证的情况下迅速掌握抗议活动的最新情况。
   <strong class="markup--strong markup--p-strong">
    这就是社交媒体情报的致命性
   </strong>
   。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e4%bb%80%e4%b9%88%e6%98%af%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%ef%bc%9f%e4%bd%a0%e7%9a%84%e6%8e%a8%e7%89%b9%e5%a6%82%e4%bd%95%e6%88%90%e4%b8%ba%e6%8a%93%e6%8d%95%e4%bd%a0%e7%9a%84/" href="https://www.iyouport.org/%e4%bb%80%e4%b9%88%e6%98%af%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%ef%bc%9f%e4%bd%a0%e7%9a%84%e6%8e%a8%e7%89%b9%e5%a6%82%e4%bd%95%e6%88%90%e4%b8%ba%e6%8a%93%e6%8d%95%e4%bd%a0%e7%9a%84/" rel="noopener noreferrer" target="_blank">
     什么是社交媒体情报？你的推特如何成为抓捕你的理由？
    </a>
    》
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12403 jetpack-lazy-image" data-lazy-sizes="(max-width: 862px) 100vw, 862px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=862%2C2048&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?w=862&amp;ssl=1 862w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=126%2C300&amp;ssl=1 126w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=431%2C1024&amp;ssl=1 431w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=768%2C1825&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=647%2C1536&amp;ssl=1 647w" data-recalc-dims="1" height="2048" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=862%2C2048&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="862"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12403" data-recalc-dims="1" height="2048" sizes="(max-width: 862px) 100vw, 862px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=862%2C2048&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?w=862&amp;ssl=1 862w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=126%2C300&amp;ssl=1 126w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=431%2C1024&amp;ssl=1 431w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=768%2C1825&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/1-14-scaled.jpeg?resize=647%2C1536&amp;ssl=1 647w" width="862"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如上图 👆所示，社交媒体情报是开源情报的重头戏，它以其低技术性和广泛的工具利用，成为大多数初学者的入门课 — — 这其中包括政府间谍。也就是说，政府间谍不需要投入太多的精力和资源，也可以掌握这种追踪侦查的方法。于是，你知道，
   <strong class="markup--strong markup--p-strong">
    它才是最危险的一种
   </strong>
   。
  </p>
  <p class="graf graf--p">
   这就是为什么说对社交媒体的使用应该非常小心！
  </p>
  <p class="graf graf--p">
   上图中的保护措施文章在这里：《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%e5%92%8c%e5%8f%8d%e6%83%85%e6%8a%a5%e5%9f%ba%e6%9c%ac%e5%b7%a5%e5%85%b7%e6%89%8b%e5%86%8c%ef%bc%9a%e8%87%aa%e6%88%91%e4%ba%ba%e8%82%89%ef%bc%882/" href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e6%83%85%e6%8a%a5%e5%92%8c%e5%8f%8d%e6%83%85%e6%8a%a5%e5%9f%ba%e6%9c%ac%e5%b7%a5%e5%85%b7%e6%89%8b%e5%86%8c%ef%bc%9a%e8%87%aa%e6%88%91%e4%ba%ba%e8%82%89%ef%bc%882/" rel="noopener noreferrer" target="_blank">
    社交媒体情报和反情报基本工具手册：自我人肉（2）
   </a>
   》
  </p>
  <p class="graf graf--p">
   攻击者也可以使用相同的策略来决定如何最有效地使用 Twitter 机器人大军来破坏半个世界之外的社会。
  </p>
  <p class="graf graf--p">
   下面介绍一下它的使用 —— 再一次：揭露信息战也是同样的工具和方法。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     第一步：登录到 Maltego
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   要安装 Maltego，您需要在计算机上安装 Java。具体方法参见：《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e5%b7%a5%e5%85%b7%e7%94%a8%e4%ba%8e%e5%bc%80%e6%ba%90%e6%83%85%e6%8a%a5%e8%b0%83%e6%9f%a5%ef%bc%9a0%e5%9f%ba%e7%a1%80%e5%88%9d%e5%ad%a6%e8%80%85%e6%8c%87%e5%8d%97/" href="https://www.iyouport.org/%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e5%b7%a5%e5%85%b7%e7%94%a8%e4%ba%8e%e5%bc%80%e6%ba%90%e6%83%85%e6%8a%a5%e8%b0%83%e6%9f%a5%ef%bc%9a0%e5%9f%ba%e7%a1%80%e5%88%9d%e5%ad%a6%e8%80%85%e6%8c%87%e5%8d%97/" rel="noopener noreferrer" target="_blank">
    社交工程工具用于开源情报调查：0基础初学者指南
   </a>
   》。
  </p>
  <p class="graf graf--p">
   Maltego 默认已经安装在 Kali Linux 中，因此，如果您正在运行 Kali，则只需从主菜单中选择它就可以开始使用。
  </p>
  <p class="graf graf--p">
   如果您使用的是 macOS 或 Windows，那么可以从
   <a class="markup--anchor markup--p-anchor" data-href="https://www.paterva.com/web7/downloads.php" href="https://www.paterva.com/web7/downloads.php" rel="noopener noreferrer" target="_blank">
    Paterva 网站
   </a>
   下载 Maltego 社区版。
  </p>
  <p class="graf graf--p">
   在 Kali 中打开 Maltego 或将其安装在其他系统上后，您将需要在 Paterva 创建一个免费帐户才能使用
   <a class="markup--anchor markup--p-anchor" data-href="https://www.paterva.com/web7/community/community.php" href="https://www.paterva.com/web7/community/community.php" rel="noopener noreferrer" target="_blank">
    社区版本
   </a>
   。注册帐户，接收确认电子邮件，然后输入验证码以确认您的帐户，以便您可以登录。
  </p>
  <p class="graf graf--p">
   完成此操作后，登录 Maltego 社区版，您就可以开始创建新图谱了。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12404 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1100%2C812&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?w=1400&amp;ssl=1 1400w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1024%2C756&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=768%2C567&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1100%2C812&amp;ssl=1 1100w" data-recalc-dims="1" height="812" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1100%2C812&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12404" data-recalc-dims="1" height="812" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1100%2C812&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?w=1400&amp;ssl=1 1400w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1024%2C756&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=768%2C567&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-8.jpg?resize=1100%2C812&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     第二步：开始监测对话
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   在本示例中，我们将搜索有关可能在虚假信息战中使用的敏感时事主题的对话。首先，将使用一台机器来监视 Twitter 某些关键字的活动。
  </p>
  <p class="graf graf--p">
   👉 这些关键字的选取应该很容易引起对一个敏感话题的激烈辩论。通过监测围绕这些问题进行的全球对话，您可以开始确定谁是主要参与者、以及讨论的形式。
  </p>
  <p class="graf graf--p">
   首先，单击 Maltego 中的 “Machines” 选项卡，您将进入菜单，可以在其中选择 “运行机器” 图标。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12405 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1100%2C287&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?w=1266&amp;ssl=1 1266w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=300%2C78&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1024%2C267&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=768%2C200&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1100%2C287&amp;ssl=1 1100w" data-recalc-dims="1" height="287" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1100%2C287&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12405" data-recalc-dims="1" height="287" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1100%2C287&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?w=1266&amp;ssl=1 1266w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=300%2C78&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1024%2C267&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=768%2C200&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-5.jpg?resize=1100%2C287&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在机器的菜单中，有三个相关的内容可供探索：在这里您将看到 “Twitter Digger X”、“Twitter Digger Y”、和 “Twitter Monitor”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12406 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1100%2C487&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=300%2C133&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1024%2C454&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=768%2C340&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1100%2C487&amp;ssl=1 1100w" data-recalc-dims="1" height="487" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1100%2C487&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12406" data-recalc-dims="1" height="487" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1100%2C487&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=300%2C133&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1024%2C454&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=768%2C340&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-3.jpg?resize=1100%2C487&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   本案例将使用关键字来查找推文，因此应该选择 “Twitter Monitor”。这里的输入将是一个短语，希望对话能够围绕它进行。
  </p>
  <p class="graf graf--p">
   重要的是，需要选择一些最有可能会引起争议的关键字/主题，因此，在本示例中，分别搜索了 “Papa John”、“Space Force”、和 “Collusion”。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12407 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1100%2C683&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?w=1366&amp;ssl=1 1366w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=300%2C186&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1024%2C636&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=768%2C477&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1100%2C683&amp;ssl=1 1100w" data-recalc-dims="1" height="683" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1100%2C683&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12407" data-recalc-dims="1" height="683" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1100%2C683&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?w=1366&amp;ssl=1 1366w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=300%2C186&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1024%2C636&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=768%2C477&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-3.jpg?resize=1100%2C683&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     第三步：查找关键参与者和趋势信息
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   一旦启动机器，就必须让信息填充图表。Maltego 可能需要花费几分钟运行新的迭代来获取更多数据，特别是如果您使用的是 Maltego 免费版本的话。
  </p>
  <p class="graf graf--p">
   这会儿您在图表中看到的信息可能会让人不知所措，因此最好从图表左侧工具栏中的 “Layout” 部分中选择 “Set layout mode to Organic”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12408 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1100%2C740&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=300%2C202&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1024%2C689&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=768%2C517&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1100%2C740&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="740" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1100%2C740&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12408" data-recalc-dims="1" height="740" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1100%2C740&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=300%2C202&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1024%2C689&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=768%2C517&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=1100%2C740&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/6-2.jpg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   同样，通过从 “视图” 选项卡中的 “管理视图” 选项中将视图设置为 “不同大小的圆点尺寸”，这样可以更直观地看清楚主要和相对次要的讨论；大圆点表示很多人都在谈论的事，
   <strong class="markup--strong markup--p-strong">
    这样您可以看到更清晰的关系
   </strong>
   。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12409 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1100%2C758&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=300%2C207&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1024%2C705&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=768%2C529&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1100%2C758&amp;ssl=1 1100w" data-recalc-dims="1" height="758" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1100%2C758&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12409" data-recalc-dims="1" height="758" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1100%2C758&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=300%2C207&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1024%2C705&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=768%2C529&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/7-2.jpg?resize=1100%2C758&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   它将自动提取更新，您可以在 “机器” 窗格的右上方看到计时器。随着信息填充到图表中，您可以通过使用 Ctrl-A 选择所有实体以开始对其进行组织。
  </p>
  <p class="graf graf--p">
   在右下角的 “详细信息视图” 窗格中，您可以单击加号旁边的框以按类型组织实体。在这些分组中，您可以看到 Maltego 已将某些实体解析为经常被提及或讨论的人。
  </p>
  <p class="graf graf--p">
   👉这将开始向您显示有关此主题的对话背后的人员。在这个案例中可以看到，运行几次后就会显示出在 “collusion 共谋” 对话中提到的关键人物。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12410 jetpack-lazy-image" data-lazy-sizes="(max-width: 1008px) 100vw, 1008px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=1008%2C1192&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?w=1008&amp;ssl=1 1008w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=254%2C300&amp;ssl=1 254w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=866%2C1024&amp;ssl=1 866w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=768%2C908&amp;ssl=1 768w" data-recalc-dims="1" height="1192" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=1008%2C1192&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1008"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12410" data-recalc-dims="1" height="1192" sizes="(max-width: 1008px) 100vw, 1008px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=1008%2C1192&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?w=1008&amp;ssl=1 1008w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=254%2C300&amp;ssl=1 254w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=866%2C1024&amp;ssl=1 866w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/8-2.jpg?resize=768%2C908&amp;ssl=1 768w" width="1008"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   还可以使用这种方法来标识正在共享的有关某个主题的链接。
  </p>
  <p class="graf graf--p">
   👉在信息战操作中，可以
   <strong class="markup--strong markup--p-strong">
    搜索被共享的文章中最具倾向性的、和分歧最大的内容，并标记共享此类链接的用户 —— 他们会被作为攻击目标
   </strong>
   ，因为他们相对偏激，于是更容易依照自身立场而共享虚假信息。
  </p>
  <p class="graf graf--p">
   创建虚假的和煽动性的信息后，攻击者就可以将这些假消息定向传递给上述那些最有可能分享该假新闻的用户。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12411 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1100%2C567&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=300%2C155&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1024%2C528&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=768%2C396&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1100%2C567&amp;ssl=1 1100w" data-recalc-dims="1" height="567" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1100%2C567&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12411" data-recalc-dims="1" height="567" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1100%2C567&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=300%2C155&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1024%2C528&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=768%2C396&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/9-2.jpg?resize=1100%2C567&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     第四步：识别社交媒体干扰渠道
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   👉如果攻击者想要干扰某个话题的对话，那么这个 Maltego 机器会提供一个方便使用的＃标签列表，这些标签用于围绕特定主题进行对话。
  </p>
  <p class="graf graf--p">
   有了这些信息，一群机器人就可以在其中大规模地充斥噪音，从而使基本的常规对话变得不可能。
  </p>
  <p class="graf graf--p">
   您应该能够自动查看发现的推文中的主题标签，但是如果您仅在图表中看到推文，则可以通过点击图表来选择全部，Ctrl-A，右键单击以显示转换菜单，然后在出现的搜索栏中输入“hashtag”。
  </p>
  <p class="graf graf--p">
   这应该显示 “To Hash Tags” 转换，您可以点击该转换以从 tweet 中提取主题标签。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12412 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1100%2C568&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=300%2C155&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1024%2C529&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=768%2C397&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1100%2C568&amp;ssl=1 1100w" data-recalc-dims="1" height="568" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1100%2C568&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12412" data-recalc-dims="1" height="568" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1100%2C568&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?w=1456&amp;ssl=1 1456w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=300%2C155&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1024%2C529&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=768%2C397&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/10-2.jpg?resize=1100%2C568&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，您可以选择涉及的主题标签，在 “Detail View” 窗格中按它们与其他选项一起出现的次数对其进行排序。
  </p>
  <p class="graf graf--p">
   👉 在社交媒体干扰攻击中，超过一定知名度的任何标签都可以自动馈送到 Twitter 机器人以进行破坏，就像 “扫描干扰者” 那样，不断寻找目标。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12413 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1100%2C809&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?w=1314&amp;ssl=1 1314w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=300%2C221&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1024%2C753&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=768%2C565&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1100%2C809&amp;ssl=1 1100w" data-recalc-dims="1" height="809" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1100%2C809&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12413" data-recalc-dims="1" height="809" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1100%2C809&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?w=1314&amp;ssl=1 1314w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=300%2C221&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1024%2C753&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=768%2C565&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/11-1.jpg?resize=1100%2C809&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     第五步：通过情感分析扩大分歧意见
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   一旦获得关于某个主题的大量推文，就可以按照一些规则自动组织它们。
  </p>
  <p class="graf graf--p">
   情绪分析是最有趣的方法之一，它使您可以将有关所监视主题的负面或正面推文区分开。有很多工具可用，但是 Maltego 允许黑客拥有相同的优势。
  </p>
  <p class="graf graf--p">
   要按情感分析对发现的 tweet 进行排序，请使用 Ctrl-A 将其全部选中，然后右键单击以显示转换菜单。
  </p>
  <p class="graf graf--p">
   键入“sentiment” 以显示 “To Sentiment [IBM Watson]” 转换。单击它以在所有发现的推文上运行它。
  </p>
  <p class="graf graf--p">
   如果社区版中有很多推文，每个运行限制为50个实体，请在 “Detail View” 中一次获取50条推文，快速运行它们进行转换以快速压出所有数据。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12414 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1100%2C534&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?w=1276&amp;ssl=1 1276w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=300%2C146&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1024%2C498&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=768%2C373&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1100%2C534&amp;ssl=1 1100w" data-recalc-dims="1" height="534" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1100%2C534&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12414" data-recalc-dims="1" height="534" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1100%2C534&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?w=1276&amp;ssl=1 1276w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=300%2C146&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1024%2C498&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=768%2C373&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/12-1.jpg?resize=1100%2C534&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   👉输出将尝试根据推文背后的含义来组织推文，这是一项有用的工作。这确实有其局限性，因为反讽的内容仍然会严重欺骗该系统。
  </p>
  <p class="graf graf--p">
   通过选择 “负面” 圆点，然后选择左上方的 “调查” 标签，可以查看所有负面推文。接下来，点击 “Add Parents” 以添加已排序为 “负面” 的所有推文。
  </p>
  <p class="graf graf--p">
   您也可以对 “正面” 和 “中性” 进行相同的操作。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12415 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1100%2C411&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=300%2C112&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1024%2C383&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=768%2C287&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1100%2C411&amp;ssl=1 1100w" data-recalc-dims="1" height="411" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1100%2C411&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12415" data-recalc-dims="1" height="411" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1100%2C411&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=300%2C112&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1024%2C383&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=768%2C287&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/13-1.jpg?resize=1100%2C411&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   您可以使用这种方法对传入的 tweet 进行排序，并且在攻击中，
   <strong class="markup--strong markup--p-strong">
    一系列僵尸程序可以简单地通过放大对话中的任何一个极端，以压倒合法的论述
   </strong>
   。
  </p>
  <p class="graf graf--p">
   ⚠️ 使用使流程自动化的工具，可以根据用户所表达的内容对合法推文进行排序，并
   <strong class="markup--strong markup--p-strong">
    使用操纵令对话双方的力量严重失衡 —— 这是信息战的典型策略
   </strong>
   ，而且你看到，它已经变得更加容易和有效。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12416 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1100%2C617&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=300%2C168&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1024%2C575&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=768%2C431&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1100%2C617&amp;ssl=1 1100w" data-recalc-dims="1" height="617" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1100%2C617&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12416" data-recalc-dims="1" height="617" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1100%2C617&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=300%2C168&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1024%2C575&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=768%2C431&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/14-1.jpg?resize=1100%2C617&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     不能保证社交媒体的言论自由
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   由于承诺 “实时快速” 的信息访问能力，记者、活动家和其他报告关键信息或协调事件的人们都使用了 Twitter。
   <strong class="markup--strong markup--p-strong">
    这本身就已经使该平台成为了监视、干扰和禁止有价值在线对话的主要目标
   </strong>
   。
  </p>
  <p class="graf graf--p">
   诸如国家支持的黑客之类的高级持续威胁将继续利用诸如 Twitter 之类的平台中的这些弱点，实现其在线操纵，以满足政治、宣传和审查的野心。
  </p>
  <p class="graf graf--p">
   👉由于这些攻击源于传统的干扰，因此可以应用某些相同的防御措施。
  </p>
  <p class="graf graf--p">
   首先您必须确定是否发生了干扰。
  </p>
  <p class="graf graf--p">
   如果对话中突然充斥着来自几乎没有合法帖子的帐户发送的消息、或者出现似乎被劫持并且突然表现不正常的帐户，则表明该对话已自动成为目标。
  </p>
  <p class="graf graf--p">
   防御和揭露的方法就是本文 ——
   <strong class="markup--strong markup--p-strong">
    在 Maltego 中使用相同的策略，您可以探索重点话题，并确定它们是否受到影响或受阻的程度
   </strong>
   。⚪️
  </p>
  <p>
   《
   <a href="https://null-byte.wonderhowto.com/how-to/use-maltego-monitor-twitter-for-disinformation-campaigns-0185998/" rel="noopener noreferrer" target="_blank">
    HOW TO Use Maltego to Monitor Twitter for Disinformation Campaigns
   </a>
   》
  </p>
  <div id="atatags-1611829871-5f430f7bbe65c">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-12401" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8-maltego-%e7%9b%91%e6%b5%8b%e6%8e%a8%e7%89%b9%e4%b8%8a%e7%9a%84%e6%94%bf%e5%ba%9c%e4%bf%a1%e6%81%af%e6%88%98/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-12401" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8-maltego-%e7%9b%91%e6%b5%8b%e6%8e%a8%e7%89%b9%e4%b8%8a%e7%9a%84%e6%94%bf%e5%ba%9c%e4%bf%a1%e6%81%af%e6%88%98/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-12401-5f430f7bbf028" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=12401&amp;origin=www.iyouport.org&amp;obj_id=161182987-12401-5f430f7bbf028" id="like-post-wrapper-161182987-12401-5f430f7bbf028">
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
    <a href="https://www.iyouport.org/tag/disinformation/" rel="tag">
     disinformation
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/information-warfare/" rel="tag">
     Information warfare
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/investigation/" rel="tag">
     Investigation
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/maltego/" rel="tag">
     Maltego
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/social-media/" rel="tag">
     social media
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
   <li>
    <a href="https://www.iyouport.org/tag/twitter/" rel="tag">
     Twitter
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-07-03T00:02:56+08:00">
    2020年7月3日
   </time>
   <time class="updated" datetime="2020-06-27T22:23:05+08:00">
    2020年6月27日
   </time>
  </div>
 </div>
</article>

