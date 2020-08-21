---
layout: post
title: "“缴钱不杀”！恶意行为者如何行动：剖析 sextortion 骗局 - iYouPort"
date: 2018-11-17T08:31:21+00:00
author: iYouPort
from: https://www.iyouport.org/%e7%bc%b4%e9%92%b1%e4%b8%8d%e6%9d%80%ef%bc%81%e6%81%b6%e6%84%8f%e8%a1%8c%e4%b8%ba%e8%80%85%e5%a6%82%e4%bd%95%e8%a1%8c%e5%8a%a8%ef%bc%9a%e5%89%96%e6%9e%90-sextortion-%e9%aa%97/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7884 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 category-67 tag-attacks tag-security tag-sextortion tag-technology" id="post-7884">
 <header class="entry-header">
  <h1 class="entry-title">
   “缴钱不杀”！恶意行为者如何行动：剖析 sextortion 骗局
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-11-17T16:31:21+08:00">
    2018年11月17日
   </time>
   <time class="updated" datetime="2019-08-10T19:00:48+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <p>
   大多情况下，勒索邮件发送者从公开泄露的数据中获取电子邮件地址和密码，然后使用这些数据来促进 sextortion 攻击。Talos 仔细研究了部分 sector tion 活动，深入了解犯罪分子的运作方式：关于勒索者是如何行动的？看到中国的 IP ？
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7885 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=1000%2C500&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=300%2C150&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=768%2C384&amp;ssl=1 768w" data-recalc-dims="1" height="500" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=1000%2C500&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7885" data-recalc-dims="1" height="500" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=1000%2C500&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=300%2C150&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-3.jpeg?resize=768%2C384&amp;ssl=1 768w" width="1000"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="8d85">
   自今年7月以来，越来越多的 sextortion 攻击在互联网上传播。过去几个月，
   <a class="bj cu ld le lf lg" href="https://blog.talosintelligence.com/2018/10/anatomy-of-sextortion-scam.html?m=1">
    Talos 一直在调查这些活动
   </a>
   。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5e0d">
   大多情况下，垃圾邮件发送者从公开泄露的数据中获取电子邮件地址和密码，然后使用这些数据来促进 sextortion 攻击。虽然攻击者实际上并没有任何视频来暴露受害者，但他们通过邮件声称：如果受害者在一定时间内没有支付勒索款项，那么他们将传播视频。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="0562">
   虽然这些攻击已持续数月，但 Talos 还是希望仔细研究下其中的一些活动，以了解为什么攻击者的威胁看似很薄弱，但还是有用户被欺骗，且向攻击者发送了大量比特币。通过详细研究 sextortion 垃圾邮件活动，研究人员可以深入了解这些犯罪分子的运作方式。（请仔细看下面这张图）
  </p>
  <figure aria-describedby="caption-attachment-7886" class="wp-caption aligncenter" id="attachment_7886" style="width: 1294px">
   <img alt="" class="wp-image-7886 size-full jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1.gif?resize=1100%2C1122&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="1122" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1.gif?resize=1100%2C1122&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="wp-image-7886 size-full" data-recalc-dims="1" height="1122" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1.gif?resize=1100%2C1122&amp;ssl=1" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-7886">
    sextortion电子邮件的示例，其中包含对邮件正文措辞的轻微改动
   </figcaption>
  </figure>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="c873">
   <strong class="jy lm">
    一、SEXTORTION分析
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="610a">
   为更深入的了解 sextortion 骗局，Talos 提取并分析了两个非常相似的 sextortion 垃圾邮件活动相关的消息。我们分析的第一个垃圾邮件活动始于2018年8月30日，第二个活动开始于2018年10月5日。在撰写此博客时，这两个攻击仍处于活跃状态。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="a6f2">
   Talos 从这两个 sextortion 攻击活动中提取了 SpamCop 收到的所有邮件，从2018年8月30日到2018年10月26日，共计58天的垃圾邮件。作为这两个 sextortion 活动的一部分，发送的每条消息都包含一个 From：头部与以下两个正则表达式之一匹配：
  </p>
  <pre class="ks kt ku kv kw hd ev ln"><span class="lo lp ce bc lq b eg lr ls l lt" data-selectable-paragraph="" id="e5a9">From =~ /Aaron\d{3}<a class="__cf_email__" data-cfemail="481b25213c20083129202727" href="/cdn-cgi/l/email-protection">[email protected]</a>\.jp/
From =~ /<a class="__cf_email__" data-cfemail="2b6a4a5944456b7846425f43" href="/cdn-cgi/l/email-protection">[email protected]</a>\d{3}\.edu/</span></pre>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="df1b">
   <strong class="jy lm">
    1. 邮件总数
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="adcc">
   总的来说，SpamCop 收到了 233,236 封与“Aaron Smith” sextortion活动相关的电子邮件。消息是从 137,606 个独立的 IP 地址发送的。此活动中的绝大多数发送方 IP，120,659 个（87.7％），发送了两条或更少的消息。
  </p>
  <figure aria-describedby="caption-attachment-7887" class="wp-caption aligncenter" id="attachment_7887" style="width: 1459px">
   <img alt="" class="size-full wp-image-7887 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1100%2C561&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?w=1459&amp;ssl=1 1459w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=300%2C153&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=768%2C392&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1024%2C522&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1100%2C561&amp;ssl=1 1100w" data-recalc-dims="1" height="561" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1100%2C561&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-7887" data-recalc-dims="1" height="561" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1100%2C561&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?w=1459&amp;ssl=1 1459w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=300%2C153&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=768%2C392&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1024%2C522&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-3.jpeg?resize=1100%2C561&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-7887">
    SpamCop 收到的 Sextortion 电子邮件数量
   </figcaption>
  </figure>
  <div class="y iv x de dc dd">
   <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="8641">
    发件人 IP 分布在多个国家，但大约50％的信息仅来自五个国家：越南（15.9％），俄罗斯（15.7％），印度（8.5％），印度尼西亚（4.9％）和哈萨克斯坦（4.7%）。如果其中一些国家看起来很熟悉，那是因为印度和越南之前被认为拥有大量被 Necurs 僵尸网络感染的机器，Necurs 是一个恶意软件分发商。
   </p>
  </div>
  <div class="ar ej">
   <div class="kk kl km kn ko kp en kq eo kr x">
    <div class="lv l">
     <figure aria-describedby="caption-attachment-7888" class="wp-caption aligncenter" id="attachment_7888" style="width: 1476px">
      <img alt="" class="size-full wp-image-7888 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1100%2C544&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?w=1476&amp;ssl=1 1476w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=300%2C148&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=768%2C380&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1024%2C506&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1100%2C544&amp;ssl=1 1100w" data-recalc-dims="1" height="544" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1100%2C544&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="size-full wp-image-7888" data-recalc-dims="1" height="544" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1100%2C544&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?w=1476&amp;ssl=1 1476w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=300%2C148&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=768%2C380&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1024%2C506&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-1.jpeg?resize=1100%2C544&amp;ssl=1 1100w" width="1100"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7888">
       按国家/地区统计发件人IP地址
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5c78">
      尽管在这些攻击中发送了超过 233,000 封电子邮件，但单独收件人的数量实际上相当低。 Talos 仅发现 15,826 个不同的受害电子邮件地址。这意味着攻击者向每个收件人平均发送近15个 sextortion 垃圾邮件。令人吃惊的是，在我们搜集的数据中，其中一位不幸的受害者被发送了 354 次。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e04a">
      <strong class="jy lm">
       2. 支付
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5a5d">
      每个 sextortion 垃圾邮件都包含付款要求。攻击者请求的付款根据具体的攻击而有所不同，但在本例中，它是一个随机生成的数字，由1到7之间的整数后跟三个零（$ 1,000 — $ 7,000）组成。这几种不同的支付金额在整个电子邮件集中的频率几乎相同，这表明攻击者并没有为每个受害者量身定制付款要求。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="61db">
      <strong class="jy lm">
       3. 钱包
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="8304">
      除了支付需求之外，每个 sextortion 消息还包含比特币（BTC）钱包地址以便从受害者接收付款。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="fdae">
      总的来说，Talos 确定了与这两个垃圾邮件活动相关的 58,611 个独特比特币钱包地址。每个比特币钱包平均对应四条消息。在大约 58,000 个比特币钱包中，只有83个钱包拥有正余额。然而，这83个钱包的余额加起来为 23.3653711 比特币，相当于 146,380.31 美元。不算太糟糕的消息是，攻击者只分发了大约60天这种特殊的骗局，而且实际上并没有任何有关受害者的材料。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="327e">
      如果看一下独立比特币钱包的数量和独立受害者电子邮件地址的时间，可以发现攻击者定期向正在进行的攻击注入新鲜数据。独立的比特币钱包的数量趋于达到峰值，然后随着时间的推移逐渐减少，直到另一批新的攻击者生成的比特币钱包它再次达到峰值。新钱包地址的最后一次注入发生在10月9日。随着时间的推移，对于独立的邮件接收者也可以看到相同的情况，大约在10月9日左右也出现了大量新的收件人。
     </p>
     <figure aria-describedby="caption-attachment-7889" class="wp-caption aligncenter" id="attachment_7889" style="width: 640px">
      <img alt="" class="size-full wp-image-7889 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?resize=640%2C326&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?resize=300%2C153&amp;ssl=1 300w" data-recalc-dims="1" height="326" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?resize=640%2C326&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7889" data-recalc-dims="1" height="326" sizes="(max-width: 640px) 100vw, 640px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?resize=640%2C326&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-2.jpeg?resize=300%2C153&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7889">
       独立/重复的比特币钱包和收件人电子邮件地址
      </figcaption>
     </figure>
     <p>
      不幸的是，当进一步挖掘具有正余额的个别比特币钱包时，我们注意到了钱包支付金额的一些奇怪之处。几个钱包收到了远远低于此特定攻击活动所要求的最低 1,000 美元付款的转账。付款金额很低，不属于比特币价格波动可以解释的范围。
     </p>
     <figure aria-describedby="caption-attachment-7890" class="wp-caption aligncenter" id="attachment_7890" style="width: 640px">
      <img alt="" class="size-full wp-image-7890 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?resize=640%2C345&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?resize=300%2C162&amp;ssl=1 300w" data-recalc-dims="1" height="345" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?resize=640%2C345&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7890" data-recalc-dims="1" height="345" sizes="(max-width: 640px) 100vw, 640px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?resize=640%2C345&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-9.png?resize=300%2C162&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7890">
       在Aaron Smith sextortion垃圾邮件中发现的比特币钱包包含远低于1000美元转帐的最低需求
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="4e9a">
      研究人员发现，这次攻击中使用的一些钱包也被用于其他攻击。攻击者在不同的垃圾邮件活动中重复使用一些比特币钱包地址。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="efdb">
      鉴于攻击者的比特币钱包重用，Talos 决定扩大研究，包括所有提到“比特币”的垃圾邮件，同时邮件正文还拥有一串 26–35 个字符类似于比特币钱包地址。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="b1ab">
      <strong class="jy lm">
       二、攻击者使用个人信息
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="ddf7">
      在第一个 sextortion 活动中发现的一个案例中，使用了受害者的电话号码而不是泄露数据中的密码。虽然电话号码不像用户密码那样私密，但它仍然是用户隐私。攻击者希望他们能够说服收件人，他们可以通过把受害者的电话号码展现在邮件内，使收件人相信他们的骗局是真的。
     </p>
     <figure aria-describedby="caption-attachment-7891" class="wp-caption aligncenter" id="attachment_7891" style="width: 617px">
      <img alt="" class="size-full wp-image-7891 jetpack-lazy-image" data-lazy-sizes="(max-width: 617px) 100vw, 617px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?resize=617%2C609&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?w=617&amp;ssl=1 617w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?resize=300%2C296&amp;ssl=1 300w" data-recalc-dims="1" height="609" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?resize=617%2C609&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="617"/>
      <noscript>
       <img alt="" class="size-full wp-image-7891" data-recalc-dims="1" height="609" sizes="(max-width: 617px) 100vw, 617px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?resize=617%2C609&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?w=617&amp;ssl=1 617w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-8.png?resize=300%2C296&amp;ssl=1 300w" width="617"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7891">
       一个例子：使用受害者电话号码的 sextortion 攻击
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="97b6">
      如果仔细阅读文本，就会注意到此电子邮件中的大部分文本与 Talos 之前分析的 “Aaron Smith” 活动中包含的文本几乎相同，尤其是结尾段落中的文字。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="48ef">
      事实上，在搜索 SpamCop 时，我们发现了一个电子邮件，邮件中攻击者似乎错误的披露了自己的模板，其中包含选择自定义风格的文本，以生成各种邮件正文作为其传播垃圾邮件的一部分。
     </p>
     <figure aria-describedby="caption-attachment-7892" class="wp-caption aligncenter" id="attachment_7892" style="width: 640px">
      <img alt="" class="size-full wp-image-7892 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?resize=640%2C444&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?resize=300%2C208&amp;ssl=1 300w" data-recalc-dims="1" height="444" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?resize=640%2C444&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7892" data-recalc-dims="1" height="444" sizes="(max-width: 640px) 100vw, 640px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?resize=640%2C444&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-7.png?resize=300%2C208&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7892">
       攻击者错误地通过电子邮件发送的 sextortion 模板消息
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e330">
      <strong class="jy lm">
       三、国际化的 SEXTORTION
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d02d">
      IBM X-Force 的安全研究人员最近发现了一个于2018年9月底通过 Necurs 僵尸网络基础设施发送的 sextortion 活动。利用 IBM 提供的20个比特币钱包（IoC），Talos 确定了近 1,000 个不同的发送方IP地址参与发送“Aaron Smith”垃圾邮件，以及与 Necurs 僵尸网络相关的国际sextortion垃圾邮件。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="7bc2">
      发送方 IP 基础设施的重叠表明，相同的垃圾邮件发送者都支持这两个攻击活动。除了 X-Force 博客中确定的7种不同语言（ENG，GER，FRE，ITA，JPN，KOR，ARA）之外，Talos 还确定了捷克语，西班牙语，挪威语，瑞典语以及芬兰语中类似的 sextortion 活动的其他变体。
     </p>
     <figure aria-describedby="caption-attachment-7893" class="wp-caption aligncenter" id="attachment_7893" style="width: 640px">
      <img alt="" class="size-full wp-image-7893 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?resize=640%2C502&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?resize=300%2C235&amp;ssl=1 300w" data-recalc-dims="1" height="502" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?resize=640%2C502&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7893" data-recalc-dims="1" height="502" sizes="(max-width: 640px) 100vw, 640px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?resize=640%2C502&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-7.png?resize=300%2C235&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7893">
       一个例子：西班牙语的 sextortion
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="dfe9">
      <strong class="jy lm">
       四、其它攻击变种
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="199d">
      还有其他类似的 sextortion 垃圾邮件源自一些相同的 Necurs 僵尸网络基础设施。下面是看起来像支持票证的 sextortion 垃圾邮件的示例。为更加真实，该消息甚至包括正文顶部附近的文字：“相机就绪，通知：&lt;日期&gt;”。
     </p>
     <figure aria-describedby="caption-attachment-7894" class="wp-caption aligncenter" id="attachment_7894" style="width: 640px">
      <img alt="" class="size-full wp-image-7894 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=640%2C640&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?w=640&amp;ssl=1 640w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=150%2C150&amp;ssl=1 150w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=300%2C300&amp;ssl=1 300w" data-recalc-dims="1" height="640" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=640%2C640&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7894" data-recalc-dims="1" height="640" sizes="(max-width: 640px) 100vw, 640px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=640%2C640&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?w=640&amp;ssl=1 640w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=150%2C150&amp;ssl=1 150w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-4.png?resize=300%2C300&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7894">
       一个伪装成“票证”的 sextortion 电子邮件的例子
      </figcaption>
     </figure>
     <p>
      攻击者在完全不同类型的比特币相关电子邮件骗局中使用了相同的比特币钱包。位于上面“票证”示例中的 BTC 钱包 1HJbQG3NsDGqqnnF1cU2c1Cgj1BT65TYRy 也出现在视频诈骗中。在黄色视频诈骗中，攻击者冒充俄罗斯联邦的一名年轻女孩，并承诺发送一个自己的视频，换取100美元存入攻击者的比特币钱包。
     </p>
     <figure aria-describedby="caption-attachment-7895" class="wp-caption aligncenter" id="attachment_7895" style="width: 533px">
      <img alt="" class="size-full wp-image-7895 jetpack-lazy-image" data-lazy-sizes="(max-width: 533px) 100vw, 533px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?resize=533%2C640&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?w=533&amp;ssl=1 533w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?resize=250%2C300&amp;ssl=1 250w" data-recalc-dims="1" height="640" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?resize=533%2C640&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="533"/>
      <noscript>
       <img alt="" class="size-full wp-image-7895" data-recalc-dims="1" height="640" sizes="(max-width: 533px) 100vw, 533px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?resize=533%2C640&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?w=533&amp;ssl=1 533w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-5.png?resize=250%2C300&amp;ssl=1 250w" width="533"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7895">
       包含重复的比特币钱包的 sextortion 诈骗视频消息的示例
      </figcaption>
     </figure>
     <p>
      Talos 发现了其他重复的比特币钱包，这也显示了同样的垃圾邮件发送者也可能进行其他攻击。例如，比特币钱包 1NAXPRTdVdR5t7wfR1C4ggr9rwFCxqBZD7 不仅出现在上面详述的“票证”类型的 sextortion 诈骗消息中，而且它还出现在另一个不同的方案中，用于从其他重要收件人身上敲诈比特币。垃圾邮件发送者声称一直关注受害者，由此获得了收件人“不忠”（欺骗伴侣）照片的证据。
     </p>
     <figure aria-describedby="caption-attachment-7896" class="wp-caption aligncenter" id="attachment_7896" style="width: 640px">
      <img alt="" class="size-full wp-image-7896 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?resize=640%2C519&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?resize=300%2C243&amp;ssl=1 300w" data-recalc-dims="1" height="519" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?resize=640%2C519&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7896" data-recalc-dims="1" height="519" sizes="(max-width: 640px) 100vw, 640px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?resize=640%2C519&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?w=640&amp;ssl=1 640w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/、9.png?resize=300%2C243&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7896">
       非法关系勒索
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="38ca">
      <strong class="jy lm">
       五、其它攻击变种（无关的?）
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5d7b">
      查看来自 SpamCop 的其他与比特币相关的垃圾邮件时，我们看到了其他几种旨在获取比特币的社交工程攻击。在上面详述的 “I-know-you-are-cheatin” 勒索案例中，攻击者声称有证据证明受害人的伴侣实际上在欺骗他们。虽然消息中的文字措辞有点熟悉，但它与其他勒索攻击（例如，通过包含附加的 QR 代码）不同，它实际上可能是完全不同的攻击组织所为。
     </p>
     <figure aria-describedby="caption-attachment-7897" class="wp-caption aligncenter" id="attachment_7897" style="width: 517px">
      <img alt="" class="size-full wp-image-7897 jetpack-lazy-image" data-lazy-sizes="(max-width: 517px) 100vw, 517px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?resize=517%2C640&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?w=517&amp;ssl=1 517w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?resize=242%2C300&amp;ssl=1 242w" data-recalc-dims="1" height="640" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?resize=517%2C640&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="517"/>
      <noscript>
       <img alt="" class="size-full wp-image-7897" data-recalc-dims="1" height="640" sizes="(max-width: 517px) 100vw, 517px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?resize=517%2C640&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?w=517&amp;ssl=1 517w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-2.png?resize=242%2C300&amp;ssl=1 242w" width="517"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7897">
       勒索攻击的变体之一 — 向受害者提供伴侣不忠的证据
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="a563">
      Talos 还发现了更为可怕和暴力的敲诈勒索相关的信息。在这些消息中，
      <strong class="jy lm">
       攻击者声称已经付费找人干掉（杀死）收件人
      </strong>
      。攻击者声称已经安排了交通工具，但由于改变了主意，他们现在愿意将雇主的信息出售给潜在的受害者。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="39c6">
      同样，消息和措辞听起来与我们在多个 sextortion 电子邮件中看到的文本非常相似。虽然怀疑它，但 Talos 不能肯定这些暴力勒索电子邮件实际上是同一攻击者所为。
     </p>
    </div>
    <figure aria-describedby="caption-attachment-7898" class="wp-caption aligncenter" id="attachment_7898" style="width: 612px">
     <img alt="" class="size-full wp-image-7898 jetpack-lazy-image" data-lazy-sizes="(max-width: 612px) 100vw, 612px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?resize=612%2C640&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?w=612&amp;ssl=1 612w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?resize=287%2C300&amp;ssl=1 287w" data-recalc-dims="1" height="640" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?resize=612%2C640&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="612"/>
     <noscript>
      <img alt="" class="size-full wp-image-7898" data-recalc-dims="1" height="640" sizes="(max-width: 612px) 100vw, 612px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?resize=612%2C640&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?w=612&amp;ssl=1 612w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-1.png?resize=287%2C300&amp;ssl=1 287w" width="612"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-7898">
      暴力勒索消息
     </figcaption>
    </figure>
    <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d032">
     <strong class="jy lm">
      六、社交工程的部分案例
     </strong>
    </p>
    <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="fe9c">
     我们注意到有一些与比特币相关的垃圾邮件活动，虽然很少能将它们与通过 Necurs 僵尸网络发送的垃圾邮件联系起来，但他们代表了通过社会工程强迫一些受害者的创造性尝试。
    </p>
    <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="df3d">
     首先，针对攻击有快速致富计划倾向的受害者。在此方案中，鼓励收件人将比特币发送到指定钱包地址，他们的比特币将在三小时内神奇的翻倍。这个比特币“倍增器”声称利用了一个未公开的“系统中的错误”。虽然普通用户可能会快速发现这是一个骗局，但是一些没有受过比特币概念教育的用户，很可能受到这种类型垃圾邮件的影响。
    </p>
    <figure aria-describedby="caption-attachment-7899" class="wp-caption aligncenter" id="attachment_7899" style="width: 640px">
     <img alt="" class="size-full wp-image-7899 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?resize=640%2C250&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?resize=300%2C117&amp;ssl=1 300w" data-recalc-dims="1" height="250" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?resize=640%2C250&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
     <noscript>
      <img alt="" class="size-full wp-image-7899" data-recalc-dims="1" height="250" sizes="(max-width: 640px) 100vw, 640px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?resize=640%2C250&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-2.png?resize=300%2C117&amp;ssl=1 300w" width="640"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-7899">
      比特币倍增器电子邮件
     </figcaption>
    </figure>
    <p>
     其他与比特币相关的垃圾邮件针对那些可能倾向于捐赠给慈善机构的人。虽然减轻受到军事侵略影响儿童的痛苦是一个最令人钦佩的原因，但我们在这个信息中找不到任何迹象表明这是一个合法的慈善组织。
    </p>
    <figure aria-describedby="caption-attachment-7900" class="wp-caption aligncenter" id="attachment_7900" style="width: 640px">
     <img alt="" class="size-full wp-image-7900 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?resize=640%2C217&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?resize=300%2C102&amp;ssl=1 300w" data-recalc-dims="1" height="217" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?resize=640%2C217&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
     <noscript>
      <img alt="" class="size-full wp-image-7900" data-recalc-dims="1" height="217" sizes="(max-width: 640px) 100vw, 640px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?resize=640%2C217&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-1.png?resize=300%2C102&amp;ssl=1 300w" width="640"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-7900">
      可疑的“慈善儿童基金会”电子邮件
     </figcaption>
    </figure>
    <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="e090">
     我们还发现了一则声称是“正面垃圾邮件”的垃圾邮件。消息正文中写着：“你知道那些不断流传的电子邮件试图勒索你的比特币，声称他们已经破坏了你电脑中的相机，并且他们计划与你的朋友和家人分享一些令人尴尬的视频和照片吗？
    </p>
    <div class="mn l">
     <figure aria-describedby="caption-attachment-7901" class="wp-caption aligncenter" id="attachment_7901" style="width: 640px">
      <img alt="" class="size-full wp-image-7901 jetpack-lazy-image" data-lazy-sizes="(max-width: 640px) 100vw, 640px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?resize=640%2C417&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?resize=300%2C195&amp;ssl=1 300w" data-recalc-dims="1" height="417" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?resize=640%2C417&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="640"/>
      <noscript>
       <img alt="" class="size-full wp-image-7901" data-recalc-dims="1" height="417" sizes="(max-width: 640px) 100vw, 640px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?resize=640%2C417&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?w=640&amp;ssl=1 640w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14-1.png?resize=300%2C195&amp;ssl=1 300w" width="640"/>
      </noscript>
      <figcaption class="wp-caption-text" id="caption-attachment-7901">
       比特币彩票垃圾邮件
      </figcaption>
     </figure>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="53d9">
      在这封电子邮件底部附近的问答部分，垃圾邮件发送者写道：“问：我们怎么知道这是合法的？答：没有。我们实际上不能在暴露自己和赢家的情况下发布证据。我们道歉但是这是我们能做到的极限。”如果你对整个10月4日的比特币抽奖结果感到好奇，请注意垃圾邮件中提到的比特币钱包只有一笔交易 。这笔交易发生在9月28日，金额为4美元。
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d80f">
      <strong class="jy lm">
       七、总结
      </strong>
     </p>
     <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="d56f">
      大多数反垃圾邮件解决方案都会过滤掉明显的 sextortion ，就像我们在本文中强调的那样。然而，这不是全部。当这些类型的垃圾邮件活动进入用户的收件箱时，相信其中许多人可能没有受到足够的教育，无法确定这是一个旨在勒索比特币的骗局。不幸的是，从大量比特币被骗的案例中可以清楚的看出，潜在受害者还有很长的路要走。⚪️
     </p>
    </div>
   </div>
  </div>
  <div id="atatags-1611829871-5f402eac78358">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7884" href="https://www.iyouport.org/%e7%bc%b4%e9%92%b1%e4%b8%8d%e6%9d%80%ef%bc%81%e6%81%b6%e6%84%8f%e8%a1%8c%e4%b8%ba%e8%80%85%e5%a6%82%e4%bd%95%e8%a1%8c%e5%8a%a8%ef%bc%9a%e5%89%96%e6%9e%90-sextortion-%e9%aa%97/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7884" href="https://www.iyouport.org/%e7%bc%b4%e9%92%b1%e4%b8%8d%e6%9d%80%ef%bc%81%e6%81%b6%e6%84%8f%e8%a1%8c%e4%b8%ba%e8%80%85%e5%a6%82%e4%bd%95%e8%a1%8c%e5%8a%a8%ef%bc%9a%e5%89%96%e6%9e%90-sextortion-%e9%aa%97/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7884-5f402eac78ffb" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7884&amp;origin=www.iyouport.org&amp;obj_id=161182987-7884-5f402eac78ffb" id="like-post-wrapper-161182987-7884-5f402eac78ffb">
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
    <a href="https://www.iyouport.org/tag/attacks/" rel="tag">
     attacks
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/sextortion/" rel="tag">
     sextortion
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
   <time class="entry-date published" datetime="2018-11-17T16:31:21+08:00">
    2018年11月17日
   </time>
   <time class="updated" datetime="2019-08-10T19:00:48+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

