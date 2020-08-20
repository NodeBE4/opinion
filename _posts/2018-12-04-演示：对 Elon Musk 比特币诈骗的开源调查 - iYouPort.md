---
layout: post
title: "演示：对 Elon Musk 比特币诈骗的开源调查 - iYouPort"
date: 2018-12-04T17:11:39+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%bc%94%e7%a4%ba%ef%bc%9a%e5%af%b9-elon-musk-%e6%af%94%e7%89%b9%e5%b8%81%e8%af%88%e9%aa%97%e7%9a%84%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4732 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-bitcoin tag-investigative tag-osint" id="post-4732">
 <header class="entry-header">
  <h1 class="entry-title">
   演示：对 Elon Musk 比特币诈骗的开源调查
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
   <time class="entry-date published" datetime="2018-12-05T01:11:39+08:00">
    2018年12月5日
   </time>
   <time class="updated" datetime="2019-06-01T01:35:58+08:00">
    2019年6月1日
   </time>
  </span>
  <span class="word-count">
   5 Minutes
  </span>
 </div>
 <div class="entry-content">
  <div class="section-inner sectionLayout--insetColumn">
   <ul>
    <li class="graf graf--p graf-after--h3" id="3a63">
     <span style="color: #00ccff;">
      <em>
       <strong>
        Elon Musk 免费发比特币啦！带蓝V的账户啊！……哦不，等会，这是个在推特上很老套的骗局。本文尝试使用开源调查 #OSINT 找到所有和诈骗有关的东西 (主机名称、IP 地址、邮箱地址、名字、域名等等)，揭示诈骗者的真实身份；或者至少是可揭示身份的线索。感谢 Steve Micallef 的优秀演示！非常精彩
       </strong>
      </em>
     </span>
    </li>
   </ul>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4733 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1100%2C500&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?w=1760&amp;ssl=1 1760w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=300%2C136&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=768%2C349&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1024%2C465&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1100%2C500&amp;ssl=1 1100w" data-recalc-dims="1" height="500" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1100%2C500&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4733" data-recalc-dims="1" height="500" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1100%2C500&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?w=1760&amp;ssl=1 1760w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=300%2C136&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=768%2C349&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1024%2C465&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-27.jpeg?resize=1100%2C500&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </div>
  </div>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="7dd3">
    您也许听说了过去几周在 twitter 上有人以 Elon Musk 的名义进行比特币诈骗的事。在这篇文章中我会解说一下这个诈骗是怎么实现的，然后给您展示一个用简单和有效的方法对该诈骗进行开源调查 (OSINT) 的过程。
   </p>
   <p class="graf graf--p graf-after--p" id="bcc1">
    <strong class="markup--strong markup--p-strong">
     Elon Musk Bitcoin 诈骗事件
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="d4d8">
    我们先看一下这个诈骗是什么样的。下面的截图是其中一个骗子用的 twitter 推送号：
   </p>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <figure aria-describedby="caption-attachment-4734" class="wp-caption aligncenter" id="attachment_4734" style="width: 1128px">
     <img alt="" class="size-full wp-image-4734 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1100%2C1094&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?w=1128&amp;ssl=1 1128w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=150%2C150&amp;ssl=1 150w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=300%2C298&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=768%2C764&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1024%2C1019&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1100%2C1094&amp;ssl=1 1100w" data-recalc-dims="1" height="1094" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1100%2C1094&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="size-full wp-image-4734" data-recalc-dims="1" height="1094" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1100%2C1094&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?w=1128&amp;ssl=1 1128w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=150%2C150&amp;ssl=1 150w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=300%2C298&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=768%2C764&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1024%2C1019&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-28.jpeg?resize=1100%2C1094&amp;ssl=1 1100w" width="1100"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-4734">
      这个 tweet 本身十分荒诞 (Musk 发派免费比特币!? 骗谁…),而且推文充满语法错误,明显的假 Tesla 网站域名,昵称与账号名称也不符,可还是有很多人上当了.
     </figcaption>
    </figure>
    <p class="graf graf--p graf-after--figure" id="8340">
     简单来讲，骗子先黑掉了一些通过了认证的、小有名气的 twitter 账户，比如 Capgemini, Target and Google’s G Suite，再把昵称和头像换成 Musk，然后用推送 (promoted tweet) 的方式把含有诈骗链接的 tweet 发给潜在受害者。虽然这些 tweet 本身十分荒诞，而且充满语法错误和明显的假 Tesla 网站域名，昵称与账号名称也不符，可还是有很多人上了当。
    </p>
    <p class="graf graf--p graf-after--p" id="f302">
     <strong class="markup--strong markup--p-strong">
      骗子大致骗走了价值18万美元的比特币，简直难以置信！！
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="c8d7">
     当然 Twitter 上的比特币诈骗其实也不是什么新鲜事。可当我从 twitter 看到这次事件后，我忍不住想对涉及诈骗的域名做个开源调查 (OSINT)，就是出于好奇会发现什么。
    </p>
    <p class="graf graf--p graf-after--p" id="ff74">
     作为 SpiderFoot 的开发者，我也总是想有机会测试和完善 Spiderfoot，这次倒是个不错的机会。我把那些域名输入到了 spiderfoot，然后开启了150 个模块来收集尽可能多的数据。
    </p>
    <p class="graf graf--p graf-after--p" id="eb76">
     除了用 spiderfoot 自动收集的数据，我还人工收集了一些作为补充，在这里就会讲到。
    </p>
    <p class="graf graf--p graf-after--p" id="47a4">
     <strong class="markup--strong markup--p-strong">
      分析的目的
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="a933">
     说实话，一开始除了为完善 Spiderfoot 以外我没有什么其他目的。不过我灵光一现，觉得既然要写一个文章，我不如组织一下然后把处理的过程给写出来，长话短说，目的是：
    </p>
    <blockquote class="graf graf--blockquote graf-after--p" id="5e80">
     <p>
      <em class="markup--em markup--blockquote-em">
       找到所有和诈骗有关的东西 (主机名称、IP 地址、邮箱地址、名字、域名等等)，用来揭示诈骗者的真实身份；或者至少是可以找到用来揭示诈骗者的真实身份的线索。
      </em>
     </p>
    </blockquote>
    <p class="graf graf--p graf-after--blockquote" id="d562">
     <strong class="markup--strong markup--p-strong">
      了解诈骗的特征，希望可以对诈骗调查、和以后预防类似诈骗，都有用
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="3aa4">
     给调查的进一步深入提供可能的实行方案的建议，希望可以帮助对本案和以后类似案件的调查。开始之前，我要声明一下，我不是说这里调查出来的一定是诈骗者的真实身份，也不是说我的调查本身是全面的。这篇文章只是为了让大家对这次诈骗事件有更深入的了解，以及
     <strong class="markup--strong markup--p-strong">
      对进行类似调查的人提供一点指导
     </strong>
     。
    </p>
    <p class="graf graf--p graf-after--p" id="0310">
     那我们开始吧!
    </p>
    <p class="graf graf--p graf-after--p" id="6d59">
     <strong class="markup--strong markup--p-strong">
      分析
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="ede0">
     分析开始，我们要找一个可以进行自动化 OSINT 调查的起点。
    </p>
    <p class="graf graf--p graf-after--p" id="97f9">
     诈骗者使用的 twitter 是被黑掉的合法账号，那么从这些 twitter 账号入手的话大概得不到什么有用的信息；另外，诈骗者用的名字 (Elon Musk) 明显不是本人 (不过，客观来说也不能排除是本人哦！)。所以我们只好从诈骗者用的假域名入手调查。
    </p>
    <p class="graf graf--p graf-after--p" id="3704">
     诈骗 tweets 已经给出了一些域名，但是肯定不止就这些：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="98b6">
      m-tesla[.]me
     </li>
     <li class="graf graf--li graf-after--li" id="7040">
      elonmusk[.]id
     </li>
     <li class="graf graf--li graf-after--li" id="0b49">
      m-tesla[.]pw
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="0fbb">
     <strong class="markup--strong markup--p-strong">
      开始调查域名
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="22cc">
     我们要调查域名可以用哪些技巧呢？域名都会指向 IP 地址，有一个 Whois 的注册记录之类的。我们可以把这些叫做 ‘信息链’。看起来就像这样：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="10fb">
      域名 -&gt; IP 地址 -&gt; 查询被动 DNS -&gt; 同一主机下的其他站点 (Co-hosted sites)
     </li>
     <li class="graf graf--li graf-after--li" id="3849">
      域名 -&gt; Whois 查找 -&gt; 电子邮箱
     </li>
     <li class="graf graf--li graf-after--li" id="2c87">
      域名 -&gt; 抓区网页内容 -&gt; 名字, 其他
     </li>
     <li class="graf graf--li graf-after--li" id="41d6">
      And so on…
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="987b">
     当然上面的信息链是非常简单化的，表达的意思就是：一个信息线索可以追踪到另一个、再追踪到下一个，以此类推。很多调查中您可能要进行十多层的信息追踪，这就要看您有多少数据来源和信息链中每一环的质量了。
    </p>
    <p class="graf graf--p graf-after--p" id="4eb6">
     <strong class="markup--strong markup--p-strong">
      在域名被下架的情况下查找 IP 地址
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="9f15">
     现在去查找诈骗者的域名只会返还 127.0.0.1 (本机地址)。因为域名被下架了。
    </p>
    <p class="graf graf--p graf-after--p" id="4a8f">
     要是有 IP 地址是会很方便的，因为用它可以查到相关的威胁情报消息，网路拓扑/路由数据，甚至更多。从这些数据我们可以找到其他指向这些 IP 地址的更多域名，而且还可以查看有没有在同一个 IP 地址下的子网，这可能用来发现一个更大的诈骗网络。
    </p>
    <p class="graf graf--p graf-after--p" id="201b">
     那我们看看能不能查到诈骗域名曾经用过的 IP 地址。幸好被动 DNS 是一个不错的信息来源，而且网上有很多免费的查找被动 DNS 的服务，这个案例中，我用 Mnemonic Passive DNS search engine 找到了 3 个域名中的 2 个 IP 地址。在这里 m-tesla[.]me (193.233.15.187) 和 elonmusk[.]id(193.233.15.163)。
    </p>
    <figure aria-describedby="caption-attachment-4735" class="wp-caption aligncenter" id="attachment_4735" style="width: 1140px">
     <img alt="" class="size-full wp-image-4735 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1100%2C724&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?w=1140&amp;ssl=1 1140w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=300%2C197&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=768%2C505&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1024%2C674&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1100%2C724&amp;ssl=1 1100w" data-recalc-dims="1" height="724" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1100%2C724&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="size-full wp-image-4735" data-recalc-dims="1" height="724" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1100%2C724&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?w=1140&amp;ssl=1 1140w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=300%2C197&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=768%2C505&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1024%2C674&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-29.jpeg?resize=1100%2C724&amp;ssl=1 1100w" width="1100"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-4735">
      多亏了被动 DNS，我们可以查到域名曾经指向的 IP 地址
     </figcaption>
    </figure>
    <p class="graf graf--p graf-after--figure" id="b1f7">
     其他类似的工具还有
     <a class="markup--anchor markup--p-anchor" data-href="http://robtex.com/" href="https://robtex.com/" rel="noreferrer noopener nofollow" target="_blank">
      Robtex.com
     </a>
     ,
     <a class="markup--anchor markup--p-anchor" data-href="http://securitytrails.com/" href="https://securitytrails.com/" rel="noreferrer noopener nofollow" target="_blank">
      SecurityTrails.com
     </a>
     ,
     <a class="markup--anchor markup--p-anchor" data-href="http://hackertarget.com/" href="http://hackertarget.com/" rel="noreferrer noopener nofollow" target="_blank">
      HackerTarget.com
     </a>
     ,
     <a class="markup--anchor markup--p-anchor" data-href="http://cymon.io/" href="http://cymon.io/" rel="noreferrer noopener nofollow" target="_blank">
      Cymon.io
     </a>
     和
     <a class="markup--anchor markup--p-anchor" data-href="https://virustotal.com/" href="https://virustotal.com/" rel="noopener nofollow noreferrer" target="_blank">
      VirusTotal
     </a>
     。由于被动 DNS 的特性，很可能单一的工具查不到完整的线索。所以别只依赖一个工具。结合多个工具查到的信息在去整合出一个更完整的轮廓……现在我们有了 IP 地址，可以进一步分析了。
    </p>
    <p class="graf graf--p graf-after--p" id="86e2">
     <strong class="markup--strong markup--p-strong">
      谁是 IP 地址的所有者？
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="a666">
     有趣的是，这三个诈骗域名用的是同一个服务供应商“
     <a class="markup--anchor markup--p-anchor" data-href="http://storm-pro.net/" href="http://storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">
      storm-pro.net
     </a>
     ” 。从 Whois 数据可以看到：
    </p>
    <pre class="graf graf--pre graf-after--p" id="b4a1"><a class="__cf_email__" data-cfemail="2c5f58495a496c48495a" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ whois <a class="markup--anchor markup--pre-anchor" data-href="http://m-tesla.me/" href="http://m-tesla.me/" rel="noreferrer noopener nofollow" target="_blank">m-tesla.me</a>
Domain Name: <a class="markup--anchor markup--pre-anchor" data-href="http://m-tesla.me/" href="http://m-tesla.me/" rel="noreferrer noopener nofollow" target="_blank">M-TESLA.ME</a>
...
Name Server: <a class="markup--anchor markup--pre-anchor" data-href="http://dns2.storm-pro.net/" href="http://dns2.storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">DNS2.STORM-PRO.NET</a>
Name Server: <a class="markup--anchor markup--pre-anchor" data-href="http://dns1.storm-pro.net/" href="http://dns1.storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">DNS1.STORM-PRO.NET</a>
...</pre>
    <p class="graf graf--p graf-after--pre" id="9524">
     但是域名好像没有网站，而且所有有用的 Whois 信息都被打码处理了，输入 host -t a storm-pro. net 看到：
    </p>
    <pre class="graf graf--pre graf-after--p" id="952b"><a class="__cf_email__" data-cfemail="691a1d0c1f0c290d0c1f" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ host -t a <a class="markup--anchor markup--pre-anchor" data-href="http://storm-pro.net/" href="http://storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">storm-pro.net</a>
<a class="markup--anchor markup--pre-anchor" data-href="http://storm-pro.net/" href="http://storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">storm-pro.net</a> has no A record
<a class="__cf_email__" data-cfemail="f28186978497b2969784" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ host -t a <a class="markup--anchor markup--pre-anchor" data-href="http://www.storm-pro.net/" href="http://www.storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">www.storm-pro.net</a>
Host <a class="markup--anchor markup--pre-anchor" data-href="http://www.storm-pro.net/" href="http://www.storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">www.storm-pro.net</a> not found: 3(NXDOMAIN)
<a class="__cf_email__" data-cfemail="dcafa8b9aab99cb8b9aa" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ whois <a class="markup--anchor markup--pre-anchor" data-href="http://storm-pro.net/" href="http://storm-pro.net/" rel="noreferrer noopener nofollow" target="_blank">storm-pro.net</a>
...
Registrant Name: GDPR Masked
Registrant Organization: GDPR Masked
Registrant Street: GDPR Masked GDPR Masked GDPR Masked
Registrant City: GDPR Masked
Registrant State/Province: GDPR Masked
Registrant Postal Code: 00000
Registrant Country: GDPR Masked
Registrant Phone: +0.00000000
Registrant Phone Ext:
Registrant Fax:
Registrant Fax Ext:
Registrant Email: <a class="markup--anchor markup--pre-anchor" data-href="mailto:gdpr-masking@gdpr-masked.com" href="/cdn-cgi/l/email-protection#23444753510e4e4250484a4d4463444753510e4e42504846470d404c4e" rel="noreferrer noopener" target="_blank"><span class="__cf_email__" data-cfemail="7d1a190d0f50101c0e1614131a3d1a190d0f50101c0e161819531e1210">[email protected]</span></a>
Admin Email: <a class="markup--anchor markup--pre-anchor" data-href="mailto:gdpr-masking@gdpr-masked.com" href="/cdn-cgi/l/email-protection#e384879391ce8e8290888a8d84a384879391ce8e8290888687cd808c8e" rel="noreferrer noopener" target="_blank"><span class="__cf_email__" data-cfemail="8deae9fdffa0e0ecfee6e4e3eacdeae9fdffa0e0ecfee6e8e9a3eee2e0">[email protected]</span></a>
Registry Tech ID: Not Available From Registry
Tech Name: GDPR Masked
Tech Organization: GDPR Masked
Tech Street: GDPR Masked GDPR Masked GDPR Masked
Tech City: GDPR Masked
Tech State/Province: GDPR Masked
Tech Postal Code: 00000
Tech Country: GDPR Masked
Tech Phone: +0.00000000
Tech Phone Ext:
Tech Fax:
Tech Fax Ext:
Tech Email: <a class="markup--anchor markup--pre-anchor" data-href="mailto:gdpr-masking@gdpr-masked.com" href="/cdn-cgi/l/email-protection#e681829694cb8b87958d8f8881a681829694cb8b87958d8382c885898b" rel="noreferrer noopener" target="_blank"><span class="__cf_email__" data-cfemail="37505347451a5a56445c5e595077505347451a5a56445c52531954585a">[email protected]</span></a>
...</pre>
    <p class="graf graf--p graf-after--pre" id="f8a6">
     那我们试试直接从 IP 地址抓取内容，看看背后可能有什么。当我们试图访问https://193[.]233[.]15[.]163 时，显示的是这个：
    </p>
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4737 jetpack-lazy-image" data-lazy-sizes="(max-width: 907px) 100vw, 907px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=907%2C752&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?w=907&amp;ssl=1 907w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=300%2C249&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=768%2C637&amp;ssl=1 768w" data-recalc-dims="1" height="752" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=907%2C752&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="907"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4737" data-recalc-dims="1" height="752" sizes="(max-width: 907px) 100vw, 907px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=907%2C752&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?w=907&amp;ssl=1 907w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=300%2C249&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-121.png?resize=768%2C637&amp;ssl=1 768w" width="907"/>
     </noscript>
    </div>
    <div>
     <p class="graf graf--p graf-after--figure" id="031e">
      看起来诈骗者用这个服务商运行他们的网站。看起来这个是面向俄语市场的提供 DDOS 攻击防御和网站服务的公司。
     </p>
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-4738 jetpack-lazy-image" data-lazy-sizes="(max-width: 851px) 100vw, 851px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=851%2C633&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?w=851&amp;ssl=1 851w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=300%2C223&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=768%2C571&amp;ssl=1 768w" data-recalc-dims="1" height="633" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=851%2C633&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="851"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-4738" data-recalc-dims="1" height="633" sizes="(max-width: 851px) 100vw, 851px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=851%2C633&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?w=851&amp;ssl=1 851w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=300%2C223&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-122.png?resize=768%2C571&amp;ssl=1 768w" width="851"/>
      </noscript>
     </div>
     <div>
      <p class="graf graf--p graf-after--figure" id="b442">
       这个公司的网站上提供的信息很少，但是他们的 LinkedIn 页面显示他们是一家在斯洛伐克注册的公司，员工有4人，其中3个在俄罗斯，1个在捷克。到目前为止我们知道，诈骗网站不是被这家公司就是被诈骗者自己关闭了。
      </p>
      <p class="graf graf--p graf-after--p" id="3b29">
       <strong class="markup--strong markup--p-strong">
        在同一个服务器和网站上还有别的线索吗？
       </strong>
      </p>
      <p class="graf graf--p graf-after--p" id="6e24">
       因为这个诈骗在统一子网上有很多 IP，查找一下子网的所有者就有价值了，这里可以用到
       <a class="markup--anchor markup--p-anchor" data-href="http://bgpview.io/" href="http://bgpview.io/" rel="noreferrer noopener nofollow" target="_blank">
        BGPView.io
       </a>
       。
      </p>
      <figure aria-describedby="caption-attachment-4739" class="wp-caption aligncenter" id="attachment_4739" style="width: 1212px">
       <img alt="" class="size-full wp-image-4739 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1100%2C451&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?w=1212&amp;ssl=1 1212w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=300%2C123&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=768%2C315&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1024%2C420&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1100%2C451&amp;ssl=1 1100w" data-recalc-dims="1" height="451" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1100%2C451&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
       <noscript>
        <img alt="" class="size-full wp-image-4739" data-recalc-dims="1" height="451" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1100%2C451&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?w=1212&amp;ssl=1 1212w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=300%2C123&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=768%2C315&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1024%2C420&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-123.png?resize=1100%2C451&amp;ssl=1 1100w" width="1100"/>
       </noscript>
       <figcaption class="wp-caption-text" id="caption-attachment-4739">
        从193.233.15.0/24 子网的搜索结果看，一部分自动化系统是由一个叫 Smart Telecom SARL 的黎巴嫩注册的公司所有，而公司地点可能是在塞舌尔
       </figcaption>
      </figure>
      <p>
       深入调查我们可以发现上游提供商(提供网路服务的公司)。我们又看到了 StormWall，那就是说他们在为那个 IP 提供 HTTP 代理：
      </p>
      <figure aria-describedby="caption-attachment-4740" class="wp-caption aligncenter" id="attachment_4740" style="width: 1219px">
       <img alt="" class="size-full wp-image-4740 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1100%2C458&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?w=1219&amp;ssl=1 1219w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=300%2C125&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=768%2C320&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1024%2C427&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1100%2C458&amp;ssl=1 1100w" data-recalc-dims="1" height="458" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1100%2C458&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
       <noscript>
        <img alt="" class="size-full wp-image-4740" data-recalc-dims="1" height="458" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1100%2C458&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?w=1219&amp;ssl=1 1219w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=300%2C125&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=768%2C320&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1024%2C427&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-124.png?resize=1100%2C458&amp;ssl=1 1100w" width="1100"/>
       </noscript>
       <figcaption class="wp-caption-text" id="caption-attachment-4740">
        STORMSYSTEMS-AG = StormWall
       </figcaption>
      </figure>
      <p class="graf graf--p graf-after--figure" id="31d3">
       对 193.233.15.0/24 子网进行 Whois，可以看到一家叫 Safe Value Management 的公司：
      </p>
      <pre class="graf graf--pre graf-after--p" id="0150"><a class="__cf_email__" data-cfemail="43303726352603272635" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ whois 193.233.15.0/24
% This is the RIPE Database query service.
% The objects are in RPSL format.
%
...</pre>
      <pre class="graf graf--pre graf-after--pre" id="d72c">organisation:   ORG-SVL6-RIPE
org-name:       Safe Value Limited
org-type:       OTHER
address:        Global Gateway 8, Rue de la Perle, Providence, Mahe, Seychelles
geoloc:         -4.678633 55.467250
abuse-c:        SVM142-RIPE
mnt-ref:        safevalue-mnt
mnt-ref:        FREENET-MNT
mnt-by:         safevalue-mnt
mnt-by:         FREENET-MNT
created:        2017-03-13T16:19:46Z
last-modified:  2017-04-30T08:54:48Z
source:         RIPE # Filtered</pre>
      <pre class="graf graf--pre graf-after--pre" id="908f">role:           Safe Value Management
address:        Global Gateway 8, Rue de la Perle, Providence, Mahe, Seychelles
abuse-mailbox:  <a class="markup--anchor markup--pre-anchor" data-href="mailto:abuses@safevalue.pro" href="/cdn-cgi/l/email-protection#a7c6c5d2d4c2d4e7d4c6c1c2d1c6cbd2c289d7d5c8" rel="noreferrer noopener" target="_blank"><span class="__cf_email__" data-cfemail="85e4e7f0f6e0f6c5f6e4e3e0f3e4e9f0e0abf5f7ea">[email protected]</span></a>
nic-hdl:        SVM142-RIPE
...</pre>
      <p class="graf graf--p graf-after--pre" id="1f11">
       从被打码的邮箱
       <a class="__cf_email__" data-cfemail="19787b6c6a7c6a596a787f7c6f78756c7c37" href="/cdn-cgi/l/email-protection">
        [email protected]
       </a>
       pro，我们可以猜测到
       <a class="markup--anchor markup--p-anchor" data-href="http://safevalue.pro/" href="http://safevalue.pro/" rel="noopener nofollow noreferrer" target="_blank">
        公司的主页
       </a>
       。我们来看看：
      </p>
      <p>
       <img alt="" class="aligncenter size-full wp-image-4741 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1100%2C539&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?w=1223&amp;ssl=1 1223w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=300%2C147&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=768%2C376&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1024%2C502&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1100%2C539&amp;ssl=1 1100w" data-recalc-dims="1" height="539" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1100%2C539&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
       <noscript>
        <img alt="" class="aligncenter size-full wp-image-4741" data-recalc-dims="1" height="539" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1100%2C539&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?w=1223&amp;ssl=1 1223w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=300%2C147&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=768%2C376&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1024%2C502&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-125.png?resize=1100%2C539&amp;ssl=1 1100w" width="1100"/>
       </noscript>
      </p>
      <p class="graf graf--p graf-after--figure" id="13f9">
       主页上找不到关于公司的具体信息。虽然从 Whois 的记录来看公司的位置是在塞舌尔，可主页上也没有找到明显的关于公司位置的情报。
      </p>
      <p class="graf graf--p graf-after--p" id="f3d9">
       虽然主页上没有明显的选择其他语言的功能，其实您可以手动进入一个可以显示俄语鼠标弹窗 (mouseover) 的网页，虽然网页内容还是英语。就是在
       <a class="markup--anchor markup--p-anchor" data-href="https://safevalue.pro/" href="https://safevalue.pro/" rel="noreferrer noopener nofollow" target="_blank">
        https://safevalue.pro
       </a>
       后面加上 /ru 来实现。尝试其他语言会显示 404 (就是说只有俄语选项)。
      </p>
      <figure aria-describedby="caption-attachment-4742" class="wp-caption aligncenter" id="attachment_4742" style="width: 334px">
       <img alt="" class="size-full wp-image-4742 jetpack-lazy-image" data-lazy-sizes="(max-width: 334px) 100vw, 334px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?resize=334%2C133&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?w=334&amp;ssl=1 334w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?resize=300%2C119&amp;ssl=1 300w" data-recalc-dims="1" height="133" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?resize=334%2C133&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="334"/>
       <noscript>
        <img alt="" class="size-full wp-image-4742" data-recalc-dims="1" height="133" sizes="(max-width: 334px) 100vw, 334px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?resize=334%2C133&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?w=334&amp;ssl=1 334w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-126.png?resize=300%2C119&amp;ssl=1 300w" width="334"/>
       </noscript>
       <figcaption class="wp-caption-text" id="caption-attachment-4742">
        在 safevalue.pro/ru 里, 虽然网页还是英语，但您可以看到俄语的 mouseover.。尝试其他语言会显示 404
       </figcaption>
      </figure>
      <p class="graf graf--p graf-after--figure" id="a021">
       那其他相邻子网的情况呢？他们在什么地点、由谁控制？下边的 whois 脚本(粗体)就是用来查找这些 193.233.15.0/24 的相邻子网的所在国家和注册组织的：
      </p>
      <pre class="graf graf--pre graf-after--p" id="0405"><a class="__cf_email__" data-cfemail="e19295849784a1858497" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ for i in `seq 5 25`; do whois 193.233.$i.0/24 | egrep -i country\|org-name | sort -u; done
country:        RU
org-name:       OOO Avantelecom
country:        RU
org-name:       Vostok Telecom LLC
country:        RU
org-name:       OOO Avantelecom
country:        RU
org-name:       L.Ya.Karpov Institute of Physical Chemistry
country:        RU
org-name:       Vostok Telecom LLC
country:        RU
org-name:       State Federal Budgetary Scientific Establishment Baikov Institute of Metallurgy and Materials Science of Russian Academy of Sciences
country:        RU
org-name:       State Federal Budgetary Scientific Establishment Baikov Institute of Metallurgy and Materials Science of Russian Academy of Sciences
country:        RU
org-name:       OOO Telecom-V
country:        RU
org-name:       OOO Telecom-V
country:        RU
org-name:       Russian National Public Library for Science and Technology
country:        SC
org-name:       Safe Value Limited
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       ZAO Redcom-Internet
country:        RU
org-name:       Federal Budgetary Educational Enterprise of Higher Professional Education Moscow State Forest University
country:        RU
org-name:       Federal Budgetary Educational Enterprise of Higher Professional Education Moscow State Forest University</pre>
      <p class="graf graf--p graf-after--pre" id="a9f3">
       可以发现 193.233.15.0/24 的相邻子网都在俄国，除了那个涉及诈骗的以外 (country:SC | org-name: Safe Value Limited)。此外除了这一个，其他的子网也和 Safe Value Limited 没有关联。
      </p>
      <p class="graf graf--p graf-after--p" id="564a">
       那我们总结一下，我们用被动 DNS 查到诈骗网页曾经的 IP 地址，他们都属于一个由 StormWall 和 Safe Value Management 提供的子网。两个公司都显示是俄国公司。而且后者 Safe Value 明显尝试隐藏这一事实。诈骗网站所在的子网显示的注册地址和注册组织和相邻子网里的其他网站也有很明显的不同。我们来扩大调查，看看还有没有其他网站涉及这次诈骗。
      </p>
      <p class="graf graf--p graf-after--p" id="10f2">
       <strong class="markup--strong markup--p-strong">
        扩大调查
       </strong>
      </p>
      <p class="graf graf--p graf-after--p" id="81cc">
       在 spiderfoot 中我们可以用查询多个被动 DNS 的方式来查找指向同一 IP 地址的其他诈骗网站。 这里，Robtex, Cymon and Mnemonic 现实了一些和 m-tesla[.]me 用相同 IP 的网站，他们曾经都用过 193.233.15.187 这个 IP：
      </p>
      <div class="aspectRatioPlaceholder is-locked">
       <figure aria-describedby="caption-attachment-4743" class="wp-caption aligncenter" id="attachment_4743" style="width: 775px">
        <img alt="" class="size-full wp-image-4743 jetpack-lazy-image" data-lazy-sizes="(max-width: 775px) 100vw, 775px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=775%2C720&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?w=775&amp;ssl=1 775w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=300%2C279&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=768%2C713&amp;ssl=1 768w" data-recalc-dims="1" height="720" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=775%2C720&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="775"/>
        <noscript>
         <img alt="" class="size-full wp-image-4743" data-recalc-dims="1" height="720" sizes="(max-width: 775px) 100vw, 775px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=775%2C720&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?w=775&amp;ssl=1 775w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=300%2C279&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-127.png?resize=768%2C713&amp;ssl=1 768w" width="775"/>
        </noscript>
        <figcaption class="wp-caption-text" id="caption-attachment-4743">
         SpiderFoot 用多个数据来源查询曾和 m-tesla[.]me 用过同样 IP 的网页.
        </figcaption>
       </figure>
       我们看到，利用同一基础设施，诈骗涉及了不少网站。我们在来查询 193.233.15.0/24 整个子网，看看都有那些网站：
      </div>
     </div>
    </div>
   </div>
  </div>
 </div>
</article>
