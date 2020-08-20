---
layout: post
title: "Supermicro 电路板本身就 Bug 缠身，那么为什么(中国)攻击者还需要植入物呢？ - iYouPort"
date: 2018-09-01T11:06:13+00:00
author: iYouPort
from: https://www.iyouport.org/supermicro-%e7%94%b5%e8%b7%af%e6%9d%bf%e6%9c%ac%e8%ba%ab%e5%b0%b1-bug-%e7%bc%a0%e8%ba%ab%ef%bc%8c%e9%82%a3%e4%b9%88%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%ad%e5%9b%bd%e6%94%bb%e5%87%bb%e8%80%85%e8%bf%98/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-5033 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-53 tag-attacks tag-china tag-supermicro" id="post-5033">
 <header class="entry-header">
  <h1 class="entry-title">
   Supermicro 电路板本身就 Bug 缠身，那么为什么(中国)攻击者还需要植入物呢？
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
   <a href="https://www.iyouport.org/category/%e5%85%b3%e4%ba%8e%e6%94%bf%e5%ba%9c%e7%9a%84%e9%97%b4%e8%b0%8d%e8%a1%8c%e4%b8%ba/" rel="category tag">
    关于政府的间谍行为
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-09-01T19:06:13+08:00">
    2018年9月1日
   </time>
   <time class="updated" datetime="2019-08-11T11:11:19+08:00">
    2019年8月11日
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
       “有很多方法可以达成一模一样的目的。从能力，成本，复杂性，可靠性，可再生性的角度来看，植入物可以说根本没必要“
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-5034 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1100%2C823&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?w=1254&amp;ssl=1 1254w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=300%2C224&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=768%2C574&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1024%2C766&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1100%2C823&amp;ssl=1 1100w" data-recalc-dims="1" height="823" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1100%2C823&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5034" data-recalc-dims="1" height="823" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1100%2C823&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?w=1254&amp;ssl=1 1254w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=300%2C224&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=768%2C574&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1024%2C766&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-178.png?resize=1100%2C823&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   到目前为止所有人都知道了彭博社报道的中国微芯片攻击事件，在过去一周多的时间里它一直是头版。我们做了全文翻译，并且使用单独文章分析了这件事的可能性，也介绍了可验证这种攻击的方法。如果您还没有读过，可以在下面链接中找到：
  </p>
  <ul>
   <li>
    《
    <a href="https://www.iyouport.org/%e4%bc%81%e4%b8%9a%e5%aa%92%e4%bd%93%e7%a7%b0%e4%b8%ad%e5%9b%bd%e5%88%a9%e7%94%a8%e5%be%ae%e5%9e%8b%e8%8a%af%e7%89%87%e6%b8%97%e9%80%8f%e7%be%8e%e5%9b%bd%e5%85%ac%e5%8f%b8%ef%bc%8c%e4%bb%96%e4%bb%ac/" rel="nofollow noopener" title="This link will take you away from steemit.com">
     据报中国利用微型芯片渗透美国公司，他们是怎么做到的？
    </a>
    》
   </li>
   <li>
    《
    <a href="https://www.iyouport.org/%e8%bf%99%e4%b8%aa%e6%8a%80%e6%9c%af%e5%b0%86%e5%8f%af%e4%bb%a5%e5%bf%ab%e9%80%9f%e5%9c%b0%e5%8f%91%e7%8e%b0%e7%a7%98%e5%af%86%e7%9a%84%e4%b8%ad%e5%9b%bd%e5%be%ae%e8%8a%af%e7%89%87/" rel="nofollow noopener" title="This link will take you away from steemit.com">
     这个技术将可以快速地发现秘密的“中国微芯片”
    </a>
    》
   </li>
  </ul>
  <p>
   实现此类攻击所需的复杂性、和植入的精确度几乎是令人叹为观止，特别是在报告中所描述的攻击规模的基础上。
  </p>
  <p>
   首先，中国需要相当大的物流能力，以确保被改装的设备能够准确运送到特定的目标，而不会在中途失去控制。彭博社通过将其比喻成 “在上海把棍子扔进水里并确保它在西雅图上岸” 来形容这一壮举，承认了该行为成功的技巧和纯粹的运气；并引用硬件黑客专家 Joe Grand 将其描述为“见证一只独角兽跳过彩虹。“
  </p>
  <p>
   根据彭博社的说法，这些袭击涉及有人冒充 Supermicro 或中国政府的代表，接近至少四家建造 Supermicro 主板的分包商工厂的经理。代表们首先会提供贿赂，以换取管理人员更改官方设计。如果贿赂行不通，代表们会要求对管理人员进行检查，威胁关闭工厂（这个过程透露出的逻辑的确很中国。但几乎每一个和中国做过生意的外国人都了解这个逻辑）。最终，彭博社表示，工厂管理人员同意修改电路板设计，以添加肉眼几乎看不见的恶意硬件。
  </p>
  <p>
   但是这些文章没有解释攻击者如何能确保被变更的设备能够在远离国家的情况下运送到达目标，而不是被送去其他毫无价值的公司。
   <strong>
    民族国家级的骇客几乎总是尽力将他们定制的间谍软件分配给特定选择的高价值目标，以免间谍工具的广泛传播，否则将会很容易被发现
   </strong>
   ，针对伊朗核计划的 Stuxnet 蠕虫病毒就是由于其制造者失去了对它的控制才被公开的。
  </p>
  <p>
   这种供应链攻击所需的其他巨大努力还包括大量的工程和逆向工程。根据 Bloomberg 的描述，这些攻击涉及设计至少两个定制植入物（一个不大于一粒米），修改主板以使用定制植入物，并确保即使管理员安装新固件也不会有妨碍。
  </p>
  <p>
   虽然对中国来说理论上有可能做到，但是受访的三位硬件安全专家表示，工厂发生的硬件植入物攻击对其攻击目的性来说是不必要的、复杂的和繁琐的，特别是在彭博社所描述的规模上，涉及近30个目标。
  </p>
  <p>
   <strong>
    使用骇客的思考方式来看，“攻击者会倾向于选择最顺手的途径，这样可以让他们在最长的时间内获得最佳的通道
   </strong>
   ，”专门研究硬件黑客的研究员、英国 44CON 会议联合创始人史蒂夫罗德说，“硬件攻击可以提供很长的生命周期，但是在实施成本方面却非常高。”
  </p>
  <p>
   并且，一旦被发现，这种攻击就会被销毁，因为人们肯定会替换它们。此外，关于无论未来（合法）系统固件升级如何都无碍这个描述，这样的后门必须非常仔细地设计才能工作，因为植入物可能会对系统造成损害，从而导致能力丧失和可能被发现。
  </p>
  <p>
   尤其是，能达到同样的攻击目的的方法中显然还有更便宜更简单的。
  </p>
  <p>
   <strong>
    更简单的方法
   </strong>
  </p>
  <p>
   Lord 是 2013 年和 2014 年在 Supermicro 主板固件（ PDF ）中发现各种严重漏洞和弱点的几位研究人员之一。这一时间框架与报道中所说的 2014 年至 2015 年的硬件攻击密切吻合。
  </p>
  <p>
   <strong>
    作为 Supermicro 的弱点之一，固件更新过程没有使用数字签名来确保只安装了授权版本；如果没有提供这样的基本安全措施，攻击者就可以轻松地在 Supermicro 主板上安装恶意固件，这些固件可以与 Bloomberg 所说的硬件植入物具有完全相同的攻击能力。
   </strong>
  </p>
  <p>
   同样在 2013 年，一个学术研究团队发表了对 Supermicro 安全性（
   <a href="https://www.usenix.org/system/files/conference/woot13/woot13-bonkoski_0.pdf" rel="nofollow noopener" title="This link will take you away from steemit.com">
    PDF
   </a>
   ）的严厉批评。研究人员在 Supermicro 主板上使用的 BMC 固件中发现的“教科书级的漏洞”，暗示了其对客户安全性的无能或冷漠。“
   <strong>
    关键缺陷包括主板 Web 界面中的缓冲区溢出，使攻击者可以不受限制地访问服务器和以纯文本格式存储管理员密码的二进制文件
   </strong>
   。
  </p>
  <p>
   HD Moore 在 2013 年担任安全公司 Rapid7 的首席研究官和渗透测试人员以及黑客使用的 Metasploit 项目的首席架构师，他们也是研究人员之一，他们
   <a href="https://blog.rapid7.com/2013/07/02/a-penetration-testers-guide-to-ipmi/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    报告了大量的漏洞
   </a>
   。这包括堆栈缓冲区溢出、明文密码泄露错误，以及攻击者可以绕过身份验证要求以控制 BMC 的方式。Moore 现在是 Atredis Partners 的研发副总裁。
  </p>
  <p>
   Moore 本周表示，
   <strong>
    这些缺陷中的任何一个都可能被利用来在暴露的 Supermicro 主板上安装恶意的定制固件
   </strong>
   。
   <a href="https://arstechnica.com/information-technology/2013/08/remote-admin-tool-imperils-servers/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    这里有
   </a>
   介绍这些漏洞。
  </p>
  <p>
   “几个月前我和 Jordan 谈过，” Moore 说，他指的是两位记者之一的 Jordan Robertson，他的名字出现在彭博社的文章中，“我们谈论了很多事，但我推翻了使用硬件后门 Supermicro BMC 是切实可行的想法，因为在软件中这样做仍然是便捷的。即使只对闪存固件进行不怎么微妙的更改就足以实现同样的攻击，添加芯片真的很蠢。“
  </p>
  <p>
   多年来，Supermicro 发布了修补 2013 年报告的一些漏洞的更新，但在一年之后，研究人员发布了一份咨询报告，称
   <a href="https://arstechnica.com/information-technology/2014/06/at-least-32000-servers-broadcast-admin-passwords-in-the-clear-advisory-warns/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    近 32,000 台服务器在继续暴露密码
   </a>
   ，这些机器上的二进制文件很容易下载。更值得关注的是，
   <a href="https://blog.eclypsium.com/2018/09/06/insecure-firmware-updates-in-server-management-systems/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    来自安全公司 Eclypsium
   </a>
   的这篇文章 显示，
   <strong>
    截至上个月，Supermicro 主板的加密签名固件更新仍未公开可用
   </strong>
   。这意味着，
   <strong>
    在过去的五年中，对于具有物理访问权限的任何人来说，要想实现彭博社所报道的攻击效果都不需要植入物
   </strong>
   。
  </p>
  <p>
   <strong>
    并且，通过利用这些或类似的弱点而实现的软件修改可能比彭博社报告的硬件植入更难以被检测到
   </strong>
   。Moore 说，识别带有恶意 BMC 固件的 Supermicro 板的唯一方法是经历耗时的物理转储过程，将其与已知的良好版本进行比较，并检查启动固件的设置选项。
  </p>
  <p>
   他说，改进的 Supermicro 固件可以假装接受固件更新，提取版本号，并在下次启动时错误地显示它。如果通过正常的 Supermicro 接口请求转储，则恶意图像还可以通过响应未修改的图像来避免被检测到。
  </p>
  <p>
   根据 Edward Snowden 泄露的文件，定制固件攻击的使用方法是 NSA 在将思科网络设备运送到其感兴趣的目标之前对其进行植入的。而不是像彭博社描述的这样，直接在工厂进行。
  </p>
  <p>
   除此之外，后门固件可能更容易进入供应链。这些操作可能发生在工厂，无论是通过破坏工厂的计算机还是获得一个或多个内部员工的合作，或者通过在运输过程中拦截电路板，就像美国国家安全局对思科路由器所做的那样。
  </p>
  <p>
   但无论哪种方式，攻击者都不需要工厂管理人员的帮助，如果在运输过程中更改了固件，那么可以更容易地确保修改后的硬件能准确地送达预定的目标，而不是冒着对其他公司造成附带损害的风险。
  </p>
  <p>
   <strong>
    当然，使用固件支持主板的更简单路径决不会反驳彭博对硬件植入的描述
   </strong>
   。攻击者可能正在测试一种新的方法，并希望向全世界展示他们的能力；也或许他们有其他理由选择更昂贵和困难的后门方法。但这些可能性似乎遥不可及。
  </p>
  <p>
   “我相信[彭博社]描述的后门在技术上是可行的。但我不认为这是合理的，“彭博社引用的安全专家兼硬件安全资源创始人 Joe FitzPatrick 说。“有很多方法可以达成一模一样的目的。从能力，成本，复杂性，可靠性，可再生性的角度来看，植入物可以说根本没必要。”⚪️
  </p>
  <div id="atatags-1611829871-5f3e6bbae2989">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-5033" href="https://www.iyouport.org/supermicro-%e7%94%b5%e8%b7%af%e6%9d%bf%e6%9c%ac%e8%ba%ab%e5%b0%b1-bug-%e7%bc%a0%e8%ba%ab%ef%bc%8c%e9%82%a3%e4%b9%88%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%ad%e5%9b%bd%e6%94%bb%e5%87%bb%e8%80%85%e8%bf%98/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-5033" href="https://www.iyouport.org/supermicro-%e7%94%b5%e8%b7%af%e6%9d%bf%e6%9c%ac%e8%ba%ab%e5%b0%b1-bug-%e7%bc%a0%e8%ba%ab%ef%bc%8c%e9%82%a3%e4%b9%88%e4%b8%ba%e4%bb%80%e4%b9%88%e4%b8%ad%e5%9b%bd%e6%94%bb%e5%87%bb%e8%80%85%e8%bf%98/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/attacks/" rel="tag">
     attacks
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/china/" rel="tag">
     China
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/supermicro/" rel="tag">
     Supermicro
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-09-01T19:06:13+08:00">
    2018年9月1日
   </time>
   <time class="updated" datetime="2019-08-11T11:11:19+08:00">
    2019年8月11日
   </time>
  </div>
 </div>
</article>

