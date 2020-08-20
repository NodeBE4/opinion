---
layout: post
title: "想知道老大哥是如何侵犯你的吗？挖掘更深层的内幕 #OSINT - iYouPort"
date: 2019-03-27T06:16:51+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%83%b3%e7%9f%a5%e9%81%93%e8%80%81%e5%a4%a7%e5%93%a5%e6%98%af%e5%a6%82%e4%bd%95%e4%be%b5%e7%8a%af%e4%bd%a0%e7%9a%84%e5%90%97%ef%bc%9f%e6%8c%96%e6%8e%98%e6%9b%b4%e6%b7%b1%e5%b1%82%e7%9a%84%e5%86%85/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4900 post type-post status-publish format-standard has-post-thumbnail hentry category-hackingteam category-knowledge-node category-osint category-289 category-67 tag-hacking-team tag-osint tag-technique tag-technology tag-tools" id="post-4900">
 <header class="entry-header">
  <h1 class="entry-title">
   想知道老大哥是如何侵犯你的吗？挖掘更深层的内幕 #OSINT
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/hackingteam/" rel="category tag">
    Hackingteam
   </a>
   ,
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
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-03-27T14:16:51+08:00">
    2019年3月27日
   </time>
   <time class="updated" datetime="2019-06-01T14:51:00+08:00">
    2019年6月1日
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
      <strong>
       不需要 hacking 也能做到窥探你的一切
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   你自己可能都没有注意到的自己的特殊习惯，但数据全知道。本文演示一个开源调查，如何通过简单的元数据构建一个人/一个组织最私密的生活全景图。事实上我们真正希望演示的不仅仅是 OSINT 的真相挖掘思路，更关于，您应该如何避免被这类数据分析所追踪
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4901 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1100%2C574&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=300%2C157&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=768%2C401&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1024%2C535&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1100%2C574&amp;ssl=1 1100w" data-recalc-dims="1" height="574" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1100%2C574&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4901" data-recalc-dims="1" height="574" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1100%2C574&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?w=1456&amp;ssl=1 1456w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=300%2C157&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=768%2C401&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1024%2C535&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-108.jpeg?resize=1100%2C574&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="8e71">
   在沙特记者 Jamal Khashoggi 被残害案中，我们再次提到了臭名昭著的意大利间谍软件公司 Hacking Team，在这里看到《
   <a class="markup--anchor markup--p-anchor" data-href="https://steemit.com/news/@iyouport/wikileaks-hacking-team" href="https://steemit.com/news/@iyouport/wikileaks-hacking-team" rel="noopener nofollow noreferrer" target="_blank">
    Wikileaks：异议记者遇害案嫌犯之一曾接受 Hacking Team 间谍软件培训; 与沙特王储关系密切
   </a>
   》。
  </p>
  <p class="graf graf--p graf-after--p" id="e182">
   2015 年7月5日，世界上最大的网络战武器制造商和经销商之一、意大利公司 Hacking Team，面临内部电子邮件数据库的大规模泄密。泄漏者提供超过 400 千兆字节的数据，内部电子邮件、发票和源代码的链接。
  </p>
  <p class="graf graf--p graf-after--p" id="7ff3">
   在接下来的几天里，
   <a class="markup--anchor markup--p-anchor" data-href="https://wikileaks.org/hackingteam/emails/" href="https://wikileaks.org/hackingteam/emails/" rel="noopener nofollow noreferrer" target="_blank">
    Wikileaks
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="https://transparencytoolkit.org/project/hacking-team-archive/" href="https://transparencytoolkit.org/project/hacking-team-archive/" rel="noopener nofollow noreferrer" target="_blank">
    Transparency Toolkit 陆续
   </a>
   发布了一个可搜索的 Hacking Team 电子邮件数据库，
   <strong class="markup--strong markup--p-strong">
    揭示了他们与
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://labs.rs/en/hacking-team-the-italian-job-of-serbian-security-services/" href="https://labs.rs/en/hacking-team-the-italian-job-of-serbian-security-services/" rel="noopener nofollow noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     全球政府机构
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    、公司和个人的运作、联系和沟通的详细信息，以及他们的网络监视武器的功能
   </strong>
   。
  </p>
  <p class="graf graf--p graf-after--p" id="1522">
   人们很快就发现了隐藏在其中的另一些宝石。
  </p>
  <p class="graf graf--p graf-after--p" id="599b">
   <strong class="markup--strong markup--p-strong">
    自己做元数据调查
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="9ff8">
   世界各地的政府机构执行的数据挖掘和分析操作背后的概念是，
   <strong class="markup--strong markup--p-strong">
    通过分析元数据以揭示人与人之间的联系，这些相关性可以产生重要的调查线索
   </strong>
   。
  </p>
  <p class="graf graf--p graf-after--p" id="9dde">
   政府机构不是唯一这么做的人，我们的元数据一直在被各方不断收集，并由 Google 和 Facebook 等主要互联网公司进行检查，但目的是对用户进行剖析并将我们的行为转化为他们的利润，每年达到数百亿美元。
  </p>
  <p class="graf graf--p graf-after--p" id="98eb">
   感谢 Edward Snowden 在 2013 年6月的揭露，让我们深入了解了 NSA Stellar Wind，Boundless Informant，PRISM 和 XKeyscore 计划。这些老大哥计划的一个目标就是收集和分析大量的电子邮件元数据。分析涉及诸如链接相关性之类的操作，构建网络图，该网络图模拟目标实体（人员，组织等）的通信（电子邮件，电话等）模式以及目标发送或接收的通信。
  </p>
  <p class="graf graf--p graf-after--p" id="7057">
   为了说明元数据分析的侵入性，我们采取了大量的元数据，以 Hacking Team 为例，可以从该组织被泄漏的电子邮件数据库中提取这些元数据，结合公开可用的知识和在线提供的大量免费或试用版工具，演示 OSINT 开源调查。
  </p>
  <h3 class="graf graf--h3 graf-after--p" id="e3c0">
   — — 调查过程 — —
  </h3>
  <p class="graf graf--p graf-after--h3" id="022f">
   <strong class="markup--strong markup--p-strong">
    电子邮件元数据：调查的积木
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="8db6">
   从电子邮件标题的简短解释开始。每封电子邮件都包含三个组件：信封、标题和邮件正文。信封是电子邮件路由的内部工程的一部分，正文是邮件的实际内容，标题是电子邮件的第三个组成部分，也是我们研究的兴趣点。是的，大多数时候你根本没必要读正文。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4902 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1100%2C462&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?w=1872&amp;ssl=1 1872w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=300%2C126&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=768%2C322&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1024%2C430&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1100%2C462&amp;ssl=1 1100w" data-recalc-dims="1" height="462" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1100%2C462&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4902" data-recalc-dims="1" height="462" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1100%2C462&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?w=1872&amp;ssl=1 1872w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=300%2C126&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=768%2C322&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1024%2C430&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-109.jpeg?resize=1100%2C462&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   标题标识消息的特定路由信息包括发送者、接收者、日期和主题、发送和接收时间戳。在某些情况下，电子邮件标题还包含发件人的 IP 地址以及电子邮件从一台计算机传输到另一台计算机时所采用的路由信息​​。
  </p>
  <figure aria-describedby="caption-attachment-4903" class="wp-caption aligncenter" id="attachment_4903" style="width: 970px">
   <img alt="" class="wp-image-4903 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 970px) 100vw, 970px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=970%2C280&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?w=970&amp;ssl=1 970w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=768%2C222&amp;ssl=1 768w" data-recalc-dims="1" height="280" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=970%2C280&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="970"/>
   <noscript>
    <img alt="" class="wp-image-4903 size-full" data-recalc-dims="1" height="280" sizes="(max-width: 970px) 100vw, 970px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=970%2C280&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?w=970&amp;ssl=1 970w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-110.jpeg?resize=768%2C222&amp;ssl=1 768w" width="970"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4903">
    Tools : Export from MS Outlook Code Two Outlook Export &gt; Data processing MS Excel
   </figcaption>
  </figure>
  <p class="graf graf--p graf-after--figure" id="82a4">
   从大约 60 个帐户和数十万封 Hacking Team 员工的电子邮件中提取数据后，可以得到一个可用的数据库。
  </p>
  <p class="graf graf--p graf-after--p" id="46ff">
   <strong class="markup--strong markup--p-strong">
    针可以在大海里捞
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="039d">
   探索这大堆数据的
   <strong class="markup--strong markup--p-strong">
    第一步是执行
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Social_network_analysis" href="https://en.wikipedia.org/wiki/Social_network_analysis" rel="noopener nofollow noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     社交网络分析
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    ，这是一种基于网络和图形理论调查社会结构的策略
   </strong>
   。它根据节点（个体参与者 — 人）和连接它们的中心或边缘（相关或交互）来表征网络结构。在我们的案例中，网络图表示对 2012 年至 2015 年间 Hacking Team 员工与其联系人之间交换的所有电子邮件标题的分析。即使在调查最初，也能够检测到主要的内部和外部参与者和关系，更多正是通过它们之间交换的电子邮件数量得来的。
  </p>
  <p class="graf graf--p graf-after--p" id="a62e">
   通过选择单个节点，我们能够探索他们各自的社交关系和联系。
  </p>
  <p class="graf graf--p graf-after--p" id="450e">
   工具：使用
   <a class="markup--anchor markup--p-anchor" data-href="http://gephi.github.io/" href="https://gephi.github.io/" rel="noopener noreferrer nofollow" target="_blank">
    Gephy 进行
   </a>
   社交网络分析， 由
   <a class="markup--anchor markup--p-anchor" data-href="http://blogs.oii.ox.ac.uk/vis/" href="http://blogs.oii.ox.ac.uk/vis/" rel="noopener noreferrer nofollow" target="_blank">
   </a>
   <a class="markup--anchor markup--p-anchor" data-href="http://gephi.github.io/" href="https://gephi.github.io/" rel="noopener noreferrer nofollow" target="_blank">
    Sigma.js
   </a>
   导出。
  </p>
  <p class="graf graf--p graf-after--p" id="aa26">
   在探索元数据时，我们注意到，对数据的理解和从中得到的线索高度依赖于我们应用于数据集的可视化类型。有时，不同行为者之间的联系更成功，通过使用不同的可视化能够更清晰地揭示出来。就像在这个例子中，我们看到的数据集与上面提到的相同，但这次是以热图的形式出现的。
  </p>
  <figure aria-describedby="caption-attachment-4904" class="wp-caption aligncenter" id="attachment_4904" style="width: 961px">
   <img alt="" class="wp-image-4904 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=961%2C895&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=300%2C279&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=768%2C715&amp;ssl=1 768w" data-recalc-dims="1" height="895" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=961%2C895&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="wp-image-4904 size-full" data-recalc-dims="1" height="895" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=961%2C895&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=300%2C279&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-111.jpeg?resize=768%2C715&amp;ssl=1 768w" width="961"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4904">
    内部沟通的热图
   </figcaption>
  </figure>
  <p class="graf graf--p graf-after--figure" id="4f39">
   <strong class="markup--strong markup--p-strong">
    方块颜色的明暗可以揭示组织内不同员工之间的个人关系
   </strong>
   。D. Vincenzetti 显然是该图中的主要参与者，但我们也可以注意到该热图中的一些其他强关系，这可以帮助我们更好地了解他们的组织结构。
  </p>
  <p class="graf graf--p graf-after--p" id="ffb0">
   最后，通过使用两种可视化方法，我们能够形成一个可能代表组织结构内部真实关系的通信图表。它可能不会显示与其名片上的内容相符的关系，但另一方面，它可能更好地代表组织内部人员之间真实的关系。
  </p>
  <figure aria-describedby="caption-attachment-4905" class="wp-caption aligncenter" id="attachment_4905" style="width: 970px">
   <img alt="" class="size-full wp-image-4905 jetpack-lazy-image" data-lazy-sizes="(max-width: 970px) 100vw, 970px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=970%2C693&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?w=970&amp;ssl=1 970w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=300%2C214&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=768%2C549&amp;ssl=1 768w" data-recalc-dims="1" height="693" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=970%2C693&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="970"/>
   <noscript>
    <img alt="" class="size-full wp-image-4905" data-recalc-dims="1" height="693" sizes="(max-width: 970px) 100vw, 970px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=970%2C693&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?w=970&amp;ssl=1 970w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=300%2C214&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-112.jpeg?resize=768%2C549&amp;ssl=1 768w" width="970"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4905">
    基于沟通水平和方向的潜在组织结构
   </figcaption>
  </figure>
  <p>
   撇开组织结构，如果我们要添加从元数据中检索到的另一个有趣的信息，那就是 — 时间组件，我们将能够根据每个员工发送的消息数量及时跟踪每个员工的活动。完成此操作后，我们创建了以下活动图表。通过这种分析，您可以，例如，推测或确定一年中哪一部分是组织最繁忙的时段，或者与其他信息输入相结合来分析，可以看到某些员工什么时候去度假或请假。
  </p>
  <figure aria-describedby="caption-attachment-4906" class="wp-caption aligncenter" id="attachment_4906" style="width: 947px">
   <img alt="" class="size-full wp-image-4906 jetpack-lazy-image" data-lazy-sizes="(max-width: 947px) 100vw, 947px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=947%2C1052&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?w=947&amp;ssl=1 947w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=270%2C300&amp;ssl=1 270w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=768%2C853&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=922%2C1024&amp;ssl=1 922w" data-recalc-dims="1" height="1052" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=947%2C1052&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="947"/>
   <noscript>
    <img alt="" class="size-full wp-image-4906" data-recalc-dims="1" height="1052" sizes="(max-width: 947px) 100vw, 947px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=947%2C1052&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?w=947&amp;ssl=1 947w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=270%2C300&amp;ssl=1 270w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=768%2C853&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-113.jpeg?resize=922%2C1024&amp;ssl=1 922w" width="947"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4906">
    每位HT员工及时发送的电子邮件数量
   </figcaption>
  </figure>
  <p class="graf graf--p graf-after--figure" id="661c">
   和调查性新闻的做法一样。在我们的数据集中，这意味着大约 4600 个不同的人在2年的时间内与 Hacking Team 员工交换了电子邮件。
  </p>
  <p class="graf graf--p graf-after--p" id="d283">
   如果我们排除所有 @hackingteam.com 地址并按记录数量对结果进行排名，将可以直接指向这一结论。以下是 Hacking Team 联系人列表，交换了50多封电子邮件：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4907 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=961%2C719&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=300%2C224&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=768%2C575&amp;ssl=1 768w" data-recalc-dims="1" height="719" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=961%2C719&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4907" data-recalc-dims="1" height="719" sizes="(max-width: 961px) 100vw, 961px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=961%2C719&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=300%2C224&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-114.jpeg?resize=768%2C575&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <figure aria-describedby="caption-attachment-4908" class="wp-caption aligncenter" id="attachment_4908" style="width: 960px">
   <img alt="" class="size-full wp-image-4908 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=960%2C349&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=300%2C109&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=768%2C279&amp;ssl=1 768w" data-recalc-dims="1" height="349" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=960%2C349&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
   <noscript>
    <img alt="" class="size-full wp-image-4908" data-recalc-dims="1" height="349" sizes="(max-width: 960px) 100vw, 960px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=960%2C349&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=300%2C109&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-115.jpeg?resize=768%2C279&amp;ssl=1 768w" width="960"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4908">
    HT 员工与外部联系人之间交换的电子邮件数量（&gt; 30）（2014–2015）
   </figcaption>
  </figure>
  <p>
   此外，如果我们添加时间组件，就可以全面了解谁与谁以及何时进行通信。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4909 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=960%2C747&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=300%2C233&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=768%2C598&amp;ssl=1 768w" data-recalc-dims="1" height="747" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=960%2C747&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4909" data-recalc-dims="1" height="747" sizes="(max-width: 960px) 100vw, 960px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=960%2C747&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=300%2C233&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-116.jpeg?resize=768%2C598&amp;ssl=1 768w" width="960"/>
   </noscript>
  </p>
  <p>
   按域名分组电子邮件，在对域名背后的公司进行一些研究后，我们根据他们正式提供的服务类型对它们进行了分类。
  </p>
  <figure aria-describedby="caption-attachment-4910" class="wp-caption aligncenter" id="attachment_4910" style="width: 960px">
   <img alt="" class="size-full wp-image-4910 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=960%2C683&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=768%2C546&amp;ssl=1 768w" data-recalc-dims="1" height="683" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=960%2C683&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
   <noscript>
    <img alt="" class="size-full wp-image-4910" data-recalc-dims="1" height="683" sizes="(max-width: 960px) 100vw, 960px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=960%2C683&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-117.jpeg?resize=768%2C546&amp;ssl=1 768w" width="960"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-4910">
    外部联系人根据 d.vincenzetti 电子邮件按域名分组
   </figcaption>
  </figure>
  <p class="graf graf--p graf-after--figure" id="8cbf">
   根据这个树形图，与 HT 合作的最大组织来自“数字安全”部门，其次是个人联系人，即“顾问”和风险投资公司。
  </p>
  <p class="graf graf--p graf-after--p" id="3f09">
   我们可以及时探索选定公司与 HT 团队之间的关系。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4911 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=961%2C624&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=300%2C195&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=768%2C499&amp;ssl=1 768w" data-recalc-dims="1" height="624" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=961%2C624&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4911" data-recalc-dims="1" height="624" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=961%2C624&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=300%2C195&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-118.jpeg?resize=768%2C499&amp;ssl=1 768w" width="961"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="55e2">
   不同的颜色代表组织内的不同人。我们可以注意到，例如，根据检查的元数据可见，Hacking Team 的最大合作伙伴 Nice Solutions，Hacking Team 和 Nice 之间的联系非常紧密，两家公司之间的沟通很多，包括很多不同级别的不同员工（图表上不同颜色的数量）。我们还可以跟踪不同行为者在不同时间进行交流的方式。
  </p>
  <p class="graf graf--p graf-after--p" id="321e">
   <strong class="markup--strong markup--p-strong">
    生活模式
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="769a">
   人类是惊人的模式识别机器。我们不断分析复杂的输入集，并根据我们之前遇到或学到的事实做出决策[即 经验]。但是近年来，我们并不是唯一分析周围模式的人了，我们自己正在越来越成为被分析的对象，主要通过机器和算法来完成。
  </p>
  <p class="graf graf--p graf-after--p" id="8172">
   <strong class="markup--strong markup--p-strong">
    我们与我们使用的技术进行交互的独特方式、拥有的独特联系方式、或我们独特的行为模式，定义了我们的元数据签名，我们的指纹。在算法分析的眼中，每个人都是独一无二的
   </strong>
   。
  </p>
  <p class="graf graf--p graf-after--p" id="c3ff">
   生活模式分析是一种专门用于记录或理解受试者日常习惯的监视方法。
  </p>
  <p class="graf graf--p graf-after--p" id="6612">
   它是一种计算机化的数据收集和分析方法，用于确定受试者的过去行为、确定其当前行为、并预测其未来行为。
   <strong class="markup--strong markup--p-strong">
    也就是《少数派报告》。
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://plus.google.com/104314277918209223775/posts/ivNzdi8gjYo" href="https://plus.google.com/104314277918209223775/posts/ivNzdi8gjYo" rel="noopener nofollow noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     美国已经在使用这种方法监视社交媒体并预测社会抗议活动
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    ，而中国也开始钟情于这一技术。
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="8f90">
   这种形式的分析通常在未经您同意的情况下完成，并且不仅适用于政府维稳，而且它还是许多大型互联网公司的核心活动和商业模式。更常见的是，生活模式分析被称为剖析。在大多数情况下，我们使用电子邮件、IP 流量或手机数据以及我们使用的其他技术，就是我们最致命的弱点。
  </p>
  <p class="graf graf--p graf-after--p" id="6a6b">
   尽管本文的研究仅限于电子邮件元数据，但我们将尝试对 Hacking Team 的一个关键人物进行了
   <strong class="markup--strong markup--p-strong">
    生活模式分析
   </strong>
   ，并尝试了解我们可以获得的内容。⚠️
   <strong class="markup--strong markup--p-strong">
    请记住，政府当局和数字极权能做到的程度是本文✖️10、✖️100.
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="a40b">
   根据我们的元数据调查的前几个阶段，显然具有最大内部和外部联系和通信的节点（人）是
   <a class="markup--anchor markup--p-anchor" data-href="mailto:d.vincenzetti@hackingteam.com" href="/cdn-cgi/l/email-protection#f793d9819e999492998d9283839eb79f96949c9e99908392969ad994989a" rel="noreferrer noopener" target="_blank">
    <span class="__cf_email__" data-cfemail="bade94ccd3d4d9dfd4c0dfceced3fad2dbd9d1d3d4ddcedfdbd794d9d5d7">
     [email protected]
    </span>
   </a>
   。我们称他为 Mr.D.
  </p>
  <p class="graf graf--p graf-after--p" id="720f">
   我们试图在这里理解3个主要内容：
  </p>
  <ul class="postList">
   <li class="graf graf--li graf-after--p" id="528c">
    D 先生的行为模式是什么？
   </li>
   <li class="graf graf--li graf-after--li" id="0492">
    这种模式有什么异常？
   </li>
   <li class="graf graf--li graf-after--li" id="0e71">
    与他的社交/专业圈其他人相比，Mr.D 的行为模式有何不同？
   </li>
  </ul>
  <div class="aspectRatioPlaceholder is-locked">
   <figure aria-describedby="caption-attachment-4912" class="wp-caption aligncenter" id="attachment_4912" style="width: 960px">
    <img alt="" class="size-full wp-image-4912 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=960%2C401&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=300%2C125&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=768%2C321&amp;ssl=1 768w" data-recalc-dims="1" height="401" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=960%2C401&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
    <noscript>
     <img alt="" class="size-full wp-image-4912" data-recalc-dims="1" height="401" sizes="(max-width: 960px) 100vw, 960px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=960%2C401&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?w=960&amp;ssl=1 960w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=300%2C125&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-119.jpeg?resize=768%2C321&amp;ssl=1 768w" width="960"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4912">
     模式识别：当天发送和接收的电子邮件总数（2014 年）
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="13b5">
    发送的电子邮件代表
    <strong class="markup--strong markup--p-strong">
     我们正在检查的人的行为
    </strong>
    ，并且收到的电子邮件代表了他的社交或专业环境的整体行为模式。
   </p>
   <p class="graf graf--p graf-after--p" id="88f0">
    Mr.D 与其他人不一样。
   </p>
   <p class="graf graf--p graf-after--p" id="527a">
    他每天很早就开始活动。几乎每天凌晨4点左右是他专注的时间，也就是他白天发送最多电子邮件的那一刻。如果我们比较发送和接收的电子邮件的数量，我们可以看到 Mr.D 与他的大多数联系人有不同的习惯。他的社交和专业圈在上午10点左右最富有成效，大多数人在下午1点左右休息，他们的生产力从下午4点开始迅速下降。
   </p>
   <p class="graf graf--p graf-after--p" id="bec4">
    另一方面，D 先生在白天没有太大的生产力。 他在工作时间的高峰期是中午。看起来他没有定时的午休时间，当他的同事和外部联系人在下午开始失去注意力时，他在下午5点左右又有一次活动高峰。此外，D 先生很少在晚上8点之后发送任何电子邮件。
   </p>
   <figure aria-describedby="caption-attachment-4913" class="wp-caption aligncenter" id="attachment_4913" style="width: 961px">
    <img alt="" class="size-full wp-image-4913 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=961%2C500&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=300%2C156&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=768%2C400&amp;ssl=1 768w" data-recalc-dims="1" height="500" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=961%2C500&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
    <noscript>
     <img alt="" class="size-full wp-image-4913" data-recalc-dims="1" height="500" sizes="(max-width: 961px) 100vw, 961px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=961%2C500&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=300%2C156&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-120.jpeg?resize=768%2C400&amp;ssl=1 768w" width="961"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4913">
     模式识别：每周和每月（2014年）MR.D 发送和收到的电子邮件的总和
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="72ef">
    如果我们在一周的时间内分析 Mr.D 的行为模式，我们可以发现，他在周末期间甚至比他的职业圈其他人工作得更多。他的电子邮件在每个星期六中午午餐时间出现。
   </p>
   <p class="graf graf--p graf-after--p" id="9c0d">
    这是 Mr.D 的平均行为，但对我们的分析更重要的是他的行为异常。异常可以指向很多事。当人们在沮丧、生病、在压力下工作、有一些截止日期或重要事件、旅行或恋爱时，人们就会改变自己的行为。
   </p>
   <figure aria-describedby="caption-attachment-4914" class="wp-caption aligncenter" id="attachment_4914" style="width: 960px">
    <img alt="" class="size-full wp-image-4914 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=960%2C401&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=300%2C125&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=768%2C321&amp;ssl=1 768w" data-recalc-dims="1" height="401" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=960%2C401&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
    <noscript>
     <img alt="" class="size-full wp-image-4914" data-recalc-dims="1" height="401" sizes="(max-width: 960px) 100vw, 960px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=960%2C401&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=300%2C125&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.jpeg?resize=768%2C321&amp;ssl=1 768w" width="960"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4914">
     ANOMALY 检测：每小时发送的电子邮件数量（2014年）
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="a4ff">
    在这张图上，我们可以看到代表 Mr.D 生产力异常的一些峰值。
   </p>
   <p class="graf graf--p graf-after--p" id="ba54">
    例如，在12月11日晚上7点，他在一小时内发送了 19 封电子邮件，而他通常发送的邮件平均为 2.7 封。
   </p>
   <p class="graf graf--p graf-after--p" id="521e">
    以下热图可能对发现异常最有效：
   </p>
   <figure aria-describedby="caption-attachment-4915" class="wp-caption aligncenter" id="attachment_4915" style="width: 961px">
    <img alt="" class="size-full wp-image-4915 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=961%2C999&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=289%2C300&amp;ssl=1 289w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=768%2C798&amp;ssl=1 768w" data-recalc-dims="1" height="999" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=961%2C999&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
    <noscript>
     <img alt="" class="size-full wp-image-4915" data-recalc-dims="1" height="999" sizes="(max-width: 961px) 100vw, 961px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=961%2C999&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?w=961&amp;ssl=1 961w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=289%2C300&amp;ssl=1 289w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.jpeg?resize=768%2C798&amp;ssl=1 768w" width="961"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4915">
     模式识别和异常检测：mr.d 每小时发送电子邮件的热图（2014）
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="5e88">
    查看热图，您可以在9月发现一个有趣的异常现象。在20号的下午，我们看到一个非常低的活动水平，这对于 Mr.D 是不寻常的，因为我们已经知道这是他的每日生产高峰时段。
   </p>
   <p class="graf graf--p graf-after--p" id="2ef6">
    此外，9月21日凌晨4点，当他一般情况下醒来并开始工作时，那天没有活动，直到第二天早上7点才开始活动。
   </p>
   <p class="graf graf--p graf-after--p" id="0e5d">
    在接下来的几天里，我们看到这种模式并不常见。看起来D先生在下午睡觉，并在夜间集中工作。9月27日，我们再次看到缺乏沟通，然后在接下来的日子里，D 先生的模式恢复正常。
   </p>
   <p class="graf graf--p graf-after--p" id="9e5b">
    根据我们稍后将在研究中解释的其他元数据输入，我们发现 Mr.D 在9月21日至27日期间前往新加坡。有了这个线索，我们可以很容易地得出结论，时区的变化会影响 Mr.D 的电子邮件（作息）模式。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4916 jetpack-lazy-image" data-lazy-sizes="(max-width: 970px) 100vw, 970px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=970%2C259&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?w=970&amp;ssl=1 970w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=300%2C80&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=768%2C205&amp;ssl=1 768w" data-recalc-dims="1" height="259" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=970%2C259&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="970"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4916" data-recalc-dims="1" height="259" sizes="(max-width: 970px) 100vw, 970px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=970%2C259&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?w=970&amp;ssl=1 970w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=300%2C80&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.jpeg?resize=768%2C205&amp;ssl=1 768w" width="970"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="1581">
    从10月5日到10月12日，我们可以在模式中找到另一个异常，但这种模式看起来与上一次有点不同，它朝着另一个方向摆动。在这期间，Mr.D 去了美国。这些数据向我们展示了不同的时区如何在他的生活模式中留下了不同的足迹。
   </p>
   <p class="graf graf--p graf-after--p" id="d1e3">
    6月24日和次日还有一个非常有趣的模式异常（你可以看到更暗的方块和更高的沟通水平）。当天，公民实验室的研究人员发布了“
    <a class="markup--anchor markup--p-anchor" data-href="https://citizenlab.org/2014/06/backdoor-hacking-teams-tradecraft-android-implant/" href="https://citizenlab.org/2014/06/backdoor-hacking-teams-tradecraft-android-implant/" rel="noopener nofollow noreferrer" target="_blank">
     警察故事：Hacking Team 的政府监视恶意软件
    </a>
    ”分析，揭露了
    <strong class="markup--strong markup--p-strong">
     Hacking Team 远程控制系统（RCS）的功能和架构，其前所未有的细节
    </strong>
    。该报道有很多媒体转载，包括经济学人， 美联社，有线，VICE，国际商业时报，福布斯等。
   </p>
   <p class="graf graf--p graf-after--p" id="9551">
    <strong class="markup--strong markup--p-strong">
     我们可以看到 Hacking Team 的这一压力事件时段中如何反映在 Mr.D 的电子邮件模式上
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="b38c">
    <strong class="markup--strong markup--p-strong">
     主题的奥秘
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="65f6">
    除了定义的活动模式和发现的异常之外，电子邮件主题还揭示了 Mr.D 与 Hacking Team 其他员工沟通的非常详细的概述。
   </p>
   <p class="graf graf--p graf-after--p" id="f7a8">
    电子邮件主题有时可以给我们一些非常有趣的信息。例如，亚马逊等许多公司在您处理完付款后收到的确认电子邮件主题中会列出订购商品。
   </p>
   <p class="graf graf--p graf-after--p" id="5168">
    通过提取亚马逊发送给 Hacking Team 员工的电子邮件，我们能够深入了解他们的购买情况。（
    <a href="https://cdn-images-1.medium.com/max/1280/1*4dgUgyRB7NiiJi1zmI5tSw.jpeg" rel="noopener noreferrer" target="_blank">
     大图
    </a>
    ）
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4917 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=961%2C1928&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=150%2C300&amp;ssl=1 150w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=768%2C1541&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=510%2C1024&amp;ssl=1 510w" data-recalc-dims="1" height="1928" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=961%2C1928&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4917" data-recalc-dims="1" height="1928" sizes="(max-width: 961px) 100vw, 961px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=961%2C1928&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?w=961&amp;ssl=1 961w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=150%2C300&amp;ssl=1 150w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=768%2C1541&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.jpeg?resize=510%2C1024&amp;ssl=1 510w" width="961"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="561c">
    但是，
    <strong class="markup--strong markup--p-strong">
     还有一些更极端的例子
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="6348">
    如果我们查看 Hacking Team 合作伙伴的树形图，就会发现一家名为 Carlson Wagonit Travel 的公司。根据该公司的网站介绍，他们为商务旅行、会议和活动管理提供解决方案。
   </p>
   <p class="graf graf--p graf-after--p" id="c051">
    对于 HT，他们帮助安排和购买机票、预订酒店并提供旅行协助。但是他们有一个坏习惯（这对许多预订机构来说都很常见），每次预订机票时，机构都会向潜在乘客发送主题行中包含姓名和机场代码的电子邮件。从主题中提取该信息并与发送电子邮件的日期交叉引用，我们能够获得有关 HT 员工旅程的大致信息。
   </p>
   <p class="graf graf--p graf-after--p" id="6752">
    HT 员工频繁的旅行和他们访问的地理位置的列表看起来像这样：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4918 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1100%2C597&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=300%2C163&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=768%2C417&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1024%2C556&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1100%2C597&amp;ssl=1 1100w" data-recalc-dims="1" height="597" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1100%2C597&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4918" data-recalc-dims="1" height="597" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1100%2C597&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=300%2C163&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=768%2C417&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1024%2C556&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.jpeg?resize=1100%2C597&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="fd48">
    这些数据提供了一些有趣的信息，这些信息完全可以构建 Hacking Team 的组织结构。如果我们回到基于社交网络分析的组织结构图并与此常见的列表进行比较的话，我们可以看到根据我们的网络图，最常见的旅行在层次结构中不是很高。
   </p>
   <p class="graf graf--p graf-after--p" id="7b24">
    但是，如果按乘客的名义对航班进行分组，我们会发现
    <strong class="markup--strong markup--p-strong">
     每个最常见的旅行都位于某个地方，并且覆盖某个地区/市场
    </strong>
    ，例如东南亚，中东，南美等。可以从中得到的结论是：
    <strong class="markup--strong markup--p-strong">
     这些员工负责全球某些市场或区域的 Hacking Team 办公室
    </strong>
    。
   </p>
   <figure aria-describedby="caption-attachment-4919" class="wp-caption aligncenter" id="attachment_4919" style="width: 1105px">
    <img alt="" class="size-full wp-image-4919 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=1100%2C1207&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?w=1105&amp;ssl=1 1105w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=274%2C300&amp;ssl=1 274w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=768%2C842&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=934%2C1024&amp;ssl=1 934w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=1100%2C1207&amp;ssl=1 1100w" data-recalc-dims="1" height="1207" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=1100%2C1207&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="size-full wp-image-4919" data-recalc-dims="1" height="1207" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=1100%2C1207&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?w=1105&amp;ssl=1 1105w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=274%2C300&amp;ssl=1 274w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=768%2C842&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=934%2C1024&amp;ssl=1 934w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.jpeg?resize=1100%2C1207&amp;ssl=1 1100w" width="1100"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4919">
     基于CWT EMAILS SUBJECT LINES 的 HT 员工航班地图
    </figcaption>
   </figure>
   <p>
    如果我们按位置重新组合同一组数据，我们可以看到两个或更多 Hacking Team 员工在哪个地点遇到或一起旅行的时间点。这
    <strong class="markup--strong markup--p-strong">
     意味着潜在的商务会议、监视工具的销售，如何与全球客户和政府机构建立新的关系
    </strong>
    。
   </p>
   <figure aria-describedby="caption-attachment-4920" class="wp-caption aligncenter" id="attachment_4920" style="width: 961px">
    <img alt="" class="size-full wp-image-4920 jetpack-lazy-image" data-lazy-sizes="(max-width: 961px) 100vw, 961px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=961%2C1375&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=210%2C300&amp;ssl=1 210w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=768%2C1099&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=716%2C1024&amp;ssl=1 716w" data-recalc-dims="1" height="1375" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=961%2C1375&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="961"/>
    <noscript>
     <img alt="" class="size-full wp-image-4920" data-recalc-dims="1" height="1375" sizes="(max-width: 961px) 100vw, 961px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=961%2C1375&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?w=961&amp;ssl=1 961w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=210%2C300&amp;ssl=1 210w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=768%2C1099&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.jpeg?resize=716%2C1024&amp;ssl=1 716w" width="961"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-4920">
     HT 员工飞往不同国家的时间表：TABLEAU
    </figcaption>
   </figure>
   <p class="graf graf--p graf-after--figure" id="49ec">
    <strong class="markup--strong markup--p-strong">
     回家
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="155e">
    电子邮件标题隐藏了一个更精确的位置信息。在某些情况下，电子邮件标题会显示发件人的 IP 地址。然后，
    <strong class="markup--strong markup--p-strong">
     可以使用一些公开可用的工具将 IP 地址地理定位到城市或单个路由器的级别
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="0429">
    这使我们能够追踪 Mr.D 的每一个联系人。每当有人向 Mr.D 发送电子邮件时，这些人基本上都会向我们透露他们的位置。只需分析 Mr.D 收到的电子邮件的元数据，我们就可以获得发件人所在地的信息，当他们改变城市或国家时能及时发现。
   </p>
   <p class="graf graf--p graf-after--p" id="0cce">
    这使我们能够更准确地找到 Hacking Team 的所有员工。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4921 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1100%2C277&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?w=1990&amp;ssl=1 1990w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=300%2C76&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=768%2C193&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1024%2C258&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1100%2C277&amp;ssl=1 1100w" data-recalc-dims="1" height="277" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1100%2C277&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4921" data-recalc-dims="1" height="277" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1100%2C277&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?w=1990&amp;ssl=1 1990w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=300%2C76&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=768%2C193&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1024%2C258&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-128.jpeg?resize=1100%2C277&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="1ab7">
     例如，我们可以看到，大多数员工都位于意大利，但其中一些员工位于世界各地。
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="453a">
      D.Maglietta 是新加坡办事处的负责人，但他在西班牙度过了圣诞节。
     </li>
     <li class="graf graf--li graf-after--li" id="0642">
      E.Pardo 大多数时间都在哥伦比亚的波哥大，并于1月14日访问了另一位 HT 员工 A.Scarafile。
     </li>
     <li class="graf graf--li graf-after--li" id="11c2">
      我们可以看到 E.Shehata 如何穿越中东地区前往卡塔尔，黎巴嫩，阿联酋，埃及和约旦。
     </li>
     <li class="graf graf--li graf-after--li" id="8f13">
      E. Rabe 位于美国宾夕法尼亚州阿德莫尔，但于2月14日搬到另一个地方在费城郊区。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="0de6">
     最后，尽管 HT 声称在华盛顿特区设有办事处，但是，基于元数据，我们没有找到任何支持这一点的证据。
    </p>
    <p class="graf graf--p graf-after--p" id="9c68">
     在世界地图上，其位置的分布如下所示：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4923 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1100%2C869&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?w=1200&amp;ssl=1 1200w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=300%2C237&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=768%2C607&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1024%2C809&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1100%2C869&amp;ssl=1 1100w" data-recalc-dims="1" height="869" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1100%2C869&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4923" data-recalc-dims="1" height="869" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1100%2C869&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?w=1200&amp;ssl=1 1200w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=300%2C237&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=768%2C607&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1024%2C809&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-130.jpeg?resize=1100%2C869&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
    <div>
     <div class="section-inner sectionLayout--insetColumn">
      <p class="graf graf--p graf-after--figure" id="5401">
       Mr.D 的外部联系人的位置使我们真正了解他们的全球运营。
      </p>
      <p class="graf graf--p graf-after--p" id="9ba6">
       见下图，注意中国！⚠️颜色对比上图中最下面列表。
      </p>
     </div>
     <div class="section-inner sectionLayout--outsetColumn">
      <div class="aspectRatioPlaceholder is-locked">
       <img alt="" class="aligncenter size-full wp-image-4924 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1100%2C623&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?w=1528&amp;ssl=1 1528w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=300%2C170&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=768%2C435&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1024%2C580&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1100%2C623&amp;ssl=1 1100w" data-recalc-dims="1" height="623" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1100%2C623&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
       <noscript>
        <img alt="" class="aligncenter size-full wp-image-4924" data-recalc-dims="1" height="623" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1100%2C623&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?w=1528&amp;ssl=1 1528w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=300%2C170&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=768%2C435&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1024%2C580&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-131.jpeg?resize=1100%2C623&amp;ssl=1 1100w" width="1100"/>
       </noscript>
      </div>
      <div>
       <p class="graf graf--p graf-after--figure" id="659a">
        这一小部分信息就使我们能够探索每个国家/地区的个人联系人，找到他们的主要合作伙伴，甚至能够及时跟踪他们联系人的位置。
       </p>
       <p class="graf graf--p graf-after--p" id="b158">
        <strong class="markup--strong markup--p-strong">
         是的，它只是元数据
        </strong>
       </p>
       <p class="graf graf--p graf-after--p" id="2e84">
        通常情况下，元数据的力量被认为是天真的，或者与我们的沟通内容相比，它的潜在用途过于简单。但我们发现即使是本文这样不那么复杂的 DIY 方法，也可以使用从“唯一”电子邮件元数据中提取的信息，创建一个深刻而清晰的个人习惯和活动全景图。
       </p>
       <p class="graf graf--p graf-after--p" id="5123">
        虽然我们的调查主要是发现某人工作生活的关系，模式和异常现象，但它仍然让我们深入了解这个人与私人生活相关的习惯 — —
        <strong class="markup--strong markup--p-strong">
         这些数据不仅能构成最深入的政治审查，并且能揭穿你希望要隐瞒的一切
        </strong>
        。因为，元数据完全能够比内容相关的传统监控实践在更深层次上扫描某人的行为。
       </p>
       <p class="graf graf--p graf-after--p" id="d4ec">
        我们正在偷看某人生命中最深处的角落。更令人不安的是，我们的分析主体可能并不了解自己的行为模式。它只是元数据，并且在我们的例子中，只是它的一小部分。
       </p>
       <p class="graf graf--p graf-after--p" id="1141">
        NSA 监测计划的支持者多次声称收集和分析元数据“不是监视”。根据我们的数据探索，我们可以明确告诉他们：这比常规内容监控更具侵入性。
       </p>
       <p class="graf graf--p graf-after--p" id="d198">
        <strong class="markup--strong markup--p-strong">
         ⚠️谁有权访问元数据？ — — 换句话说就是，谁有能力如此深入地侵犯你
        </strong>
       </p>
       <p class="graf graf--p graf-after--p" id="0a37">
        了解谁可以访问元数据以及分析元数据的可能性，将使我们能够解答信息社会中新的权力结构和财富分配问题。
       </p>
       <p class="graf graf--p graf-after--p" id="7b1d">
        <strong class="markup--strong markup--p-strong">
         公司 — —
        </strong>
        第一个也是最显而易见的就是提供 Google 或 Facebook 等服务的公司。他们不仅可以访问元数据，还可以在服务器上拥有实际数据和内容。谷歌拥有的关于其服务的每个用户的元数据的质量、种类和数量，存储在巨大的数据中心，都是史无前例的威胁。
       </p>
       <p class="graf graf--p graf-after--p" id="61c2">
        <strong class="markup--strong markup--p-strong">
         政府 — —
        </strong>
        在大多数情况下，国家法律赋予政府或其中一些机构合法访问用户数据的权利，包括电子邮件和其他元数据。互联网基础设施所有者或提供服务的公司有义务与其所在地的政府合作。他们经常遵守政府的要求，并有不同形式的技术合作。并且，在许多国家，政府机构已经投资制定了基于元数据的收集方案。这些程序通常依赖于创建和利用后门程序的软件（就像Hacking Team 的情况一样）或使用其他一些创造性的方式来访问元数据。
       </p>
       <p class="graf graf--p graf-after--p" id="bdfa">
        <strong class="markup--strong markup--p-strong">
         基础设施 — —
        </strong>
        这些是互联网服务提供商，移动服务提供商、互联网交换点和海底光缆，都可以访问数据。它们可以收集的元数据质量取决于附加到基础结构的端点，但无论如何，它们都可以访问 Internet 数据包的基本元数据。即使电子邮件的内容被认为是加密的（至少在使用这些主流服务时），
        <strong class="markup--strong markup--p-strong">
         元数据可没加密！
        </strong>
        因为电子邮件架构需要依赖可读的元数据，如前所述。
       </p>
       <p class="graf graf--p graf-after--p" id="692c">
        我们不打算总结有关 Hacking Team 的活动，这不是本文主题，我们希望通过研究和实践来理解如何执行元数据分析，以及我们可以从中学到什么。
        <strong class="markup--strong markup--p-strong">
         我们希望研究人员和调查记者可以将这些数据探索方法运用于他们自己的研究，挖掘真相。而不是希望引起人们的隐私恐慌。⚪️
        </strong>
       </p>
      </div>
     </div>
    </div>
   </div>
  </div>
  <div id="atatags-1611829871-5f3e505aa0996">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4900" href="https://www.iyouport.org/%e6%83%b3%e7%9f%a5%e9%81%93%e8%80%81%e5%a4%a7%e5%93%a5%e6%98%af%e5%a6%82%e4%bd%95%e4%be%b5%e7%8a%af%e4%bd%a0%e7%9a%84%e5%90%97%ef%bc%9f%e6%8c%96%e6%8e%98%e6%9b%b4%e6%b7%b1%e5%b1%82%e7%9a%84%e5%86%85/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4900" href="https://www.iyouport.org/%e6%83%b3%e7%9f%a5%e9%81%93%e8%80%81%e5%a4%a7%e5%93%a5%e6%98%af%e5%a6%82%e4%bd%95%e4%be%b5%e7%8a%af%e4%bd%a0%e7%9a%84%e5%90%97%ef%bc%9f%e6%8c%96%e6%8e%98%e6%9b%b4%e6%b7%b1%e5%b1%82%e7%9a%84%e5%86%85/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/hacking-team/" rel="tag">
     Hacking Team
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
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
   <time class="entry-date published" datetime="2019-03-27T14:16:51+08:00">
    2019年3月27日
   </time>
   <time class="updated" datetime="2019-06-01T14:51:00+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

