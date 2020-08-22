---
layout: post
title: "GandCrab 勒索软件升级，增加了 NSA 的 SMB 漏洞，以便更快地传播 - iYouPort"
date: 2018-05-10T14:10:12+00:00
author: iYouPort
from: https://www.iyouport.org/gandcrab-%e5%8b%92%e7%b4%a2%e8%bd%af%e4%bb%b6%e5%8d%87%e7%ba%a7%ef%bc%8c%e5%a2%9e%e5%8a%a0%e4%ba%86-nsa-%e7%9a%84-smb-%e6%bc%8f%e6%b4%9e%ef%bc%8c%e4%bb%a5%e4%be%bf%e6%9b%b4%e5%bf%ab%e5%9c%b0%e4%bc%a0/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7979 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-289 category-54 tag-gandcrab tag-nsa tag-security tag-technology" id="post-7979">
 <header class="entry-header">
  <h1 class="entry-title">
   GandCrab 勒索软件升级，增加了 NSA 的 SMB 漏洞，以便更快地传播
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/newsletters/" rel="category tag">
    Newsletters
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
   <time class="entry-date published" datetime="2018-05-10T22:10:12+08:00">
    2018年5月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:13:44+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   互联网时代是这样的时代：一种能力，要么无人能掌握，要么任何人都能掌握。没有第三种选项。这就是为什么情报机构开发的也许为了“抓坏人”的间谍工具、漏洞和后门，最终都会被任何人利用来做任何事。也是为什么国家安全局在这个时代的存在纯粹起了反作用 —— 他们糟糕的策略已经导致了一系列灾难，并且没有终止的迹象
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7980 jetpack-lazy-image" data-lazy-sizes="(max-width: 894px) 100vw, 894px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=894%2C470&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?w=894&amp;ssl=1 894w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=300%2C158&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=768%2C404&amp;ssl=1 768w" data-recalc-dims="1" height="470" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=894%2C470&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="894"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7980" data-recalc-dims="1" height="470" sizes="(max-width: 894px) 100vw, 894px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=894%2C470&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?w=894&amp;ssl=1 894w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=300%2C158&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-101.png?resize=768%2C404&amp;ssl=1 768w" width="894"/>
   </noscript>
  </p>
  <p>
   NSA 漏洞利用工具已经在高端恶意软件中使用。现在，GandCrab 勒索软件 v4 增加了 NSA 的 SMB 漏洞，以便更快地传播。
  </p>
  <p>
   在版本4中，GandCrab 勒索软件经历了
   <strong>
    重大改变，增加了对 NSA 漏洞的利用，以帮助蔓延和针对更大的系统集
   </strong>
   。
  </p>
  <p>
   更新的 GandCrab 勒索软件本月早些时候首次被发现，但研究人员才刚了解到这些变化的程度。
  </p>
  <p>
   GandCrab 勒索软件的代码结构被完全重写。而且，根据英国安全架构师 Kevin Beaumont 的说法，该恶意软件现在使用国家安全局（NSA）的黑客工具  EternalBlue 来针对 SMB 漏洞并更快速地传播。
  </p>
  <p>
   “它不再需要 C2 服务器（例如它可以在气隙环境中运行），现在它通过 SMB 漏洞进行传播 – 包括 XP 和 Windows Server 2003（以及其他现代操作系统）”，Beaumont
   <a href="https://doublepulsar.com/gandcrab-v4-1-in-the-wild-first-windows-xp-and-server-2003-impacting-ransomware-smb-worm-7a7250253b6" rel="nofollow noopener" title="This link will take you away from steemit.com">
    在博客
   </a>
   中写道。
  </p>
  <p>
   “据我所知，这是第一个传播到 XP 和 2003 的勒索软件真正的蠕虫 – 你可能还记得很多关于 WannaCry 和 XP 的新闻报道和猜测，但
   <strong>
    现实是对NSA 的 SMB漏洞利用（EternalBlue.exe）还从来没有开箱即用的 XP ​​目标
   </strong>
   。“
  </p>
  <p>
   位于加利福尼亚州桑尼维尔的 Fortinet 高级威胁研究员 Joie Salvio 发现
   <strong>
    GandCrab 勒索软件正在通过垃圾邮件和恶意 WordPress 网站传播到目标，他还注意到代码的另一个重大变化。
   </strong>
  </p>
  <p>
   “然而，最大的变化是从使用 RSA-2048 切换到速度更快的 Salsa20 流密码来加密数据，过去 Petya 勒索软件也使用过这种密码，”Salvio 在分析中写道。 “此外，它已经取消了连接到其 C2 服务器，然后才能加密其受害者的文件的这种方法，这意味着
   <strong>
    它现在能够加密未连接到互联网的用户！
   </strong>
   ”
  </p>
  <p>
   但是值得注意的是，
   <strong>
    GandCrab 勒索软件似乎专门针对俄语地区的用户。 Fortinet 发现恶意软件会在继续感染之前检查系统是否使用俄语键盘布局
   </strong>
   。
  </p>
  <p>
   尽管 GandCrab 勒索软件被进行了大修，并且扩展系统成为目标，但 Beaumont 和 Salvio 都表示，基本的网络卫生应足以保护用户免受攻击。这包括安装 Microsoft 发布的 EternalBlue 补丁，使防病毒软件能保持最新状态并完全禁用 SMB 版本1，这是自最初的 WannaCry 攻击开始以来各种网点（包括 US-CERT）不断重复的建议。
  </p>
  <p>
   无独有偶，今天同时出现了另一则消息。
  </p>
  <p>
   今年5月一名黑客利用 Shodan 搜索引擎仔细阅读易受攻击的系统，发现了一个早前已被公开的 FTP 漏洞，由此访问了位于克里奇空军基地的 Netgear 路由器，并且获得了美国空军机长计算机的内容。
  </p>
  <p>
   包括维护手册、分配被基地Reaper维护小组的飞行员名单。现在这些军事文件
   <a href="https://arstechnica.com/information-technology/2018/07/year-old-router-bug-exploited-to-steal-sensitive-dod-drone-tank-documents/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    正在网上销售
   </a>
   。
  </p>
  <p>
   MQ-9 Reaper 是一款能够自动、远程操控的无人机，它被认为是美国迄今为止研发的最先进的、最致命的无人机之一。
  </p>
  <p>
   五角大楼、国土安全局、CIA以及NASA目前都在使用这款无人机。目前在网上出售的文件包括数十本训练手册、生存手册以及坦克拍战术。
  </p>
  <p>
   这些文件如何落在有目的的人手里，很容易据此推测到美军和情报机构的弱点。
   <strong>
    美国国防部和情报机构对后门和网络间谍工具的痴迷正在为自己构建灾难。
   </strong>
  </p>
  <p>
   <em>
    <strong>
     延伸阅读：
    </strong>
   </em>
   <a href="https://www.iyouport.org/%e4%b8%ba%e4%bb%80%e4%b9%88%e8%a6%81%e6%b1%82%e8%a7%a3%e6%95%a3%e5%9b%bd%e5%ae%89%e5%b1%80%ef%bc%9f-%e7%9b%91%e8%a7%86%e4%b9%8b%e6%81%b6%ef%bc%88%e5%85%ad%ef%bc%89%e7%ab%8b%e6%b3%95/">
    <em>
     <strong>
      为什么说如今国家安全局的存在纯属错误
     </strong>
    </em>
   </a>
   <em>
    <strong>
     ？
    </strong>
   </em>
  </p>
  <div id="atatags-1611829871-5f402f0840cee">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7979" href="https://www.iyouport.org/gandcrab-%e5%8b%92%e7%b4%a2%e8%bd%af%e4%bb%b6%e5%8d%87%e7%ba%a7%ef%bc%8c%e5%a2%9e%e5%8a%a0%e4%ba%86-nsa-%e7%9a%84-smb-%e6%bc%8f%e6%b4%9e%ef%bc%8c%e4%bb%a5%e4%be%bf%e6%9b%b4%e5%bf%ab%e5%9c%b0%e4%bc%a0/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7979" href="https://www.iyouport.org/gandcrab-%e5%8b%92%e7%b4%a2%e8%bd%af%e4%bb%b6%e5%8d%87%e7%ba%a7%ef%bc%8c%e5%a2%9e%e5%8a%a0%e4%ba%86-nsa-%e7%9a%84-smb-%e6%bc%8f%e6%b4%9e%ef%bc%8c%e4%bb%a5%e4%be%bf%e6%9b%b4%e5%bf%ab%e5%9c%b0%e4%bc%a0/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7979-5f402f084134f" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7979&amp;origin=www.iyouport.org&amp;obj_id=161182987-7979-5f402f084134f" id="like-post-wrapper-161182987-7979-5f402f084134f">
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
    <a href="https://www.iyouport.org/tag/gandcrab/" rel="tag">
     GandCrab
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/nsa/" rel="tag">
     NSA
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
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
   <time class="entry-date published" datetime="2018-05-10T22:10:12+08:00">
    2018年5月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:13:44+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

