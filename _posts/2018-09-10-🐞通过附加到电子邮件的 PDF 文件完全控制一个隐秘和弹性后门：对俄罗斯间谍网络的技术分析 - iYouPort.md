---
layout: post
title: "🐞通过附加到电子邮件的 PDF 文件完全控制一个隐秘和弹性后门：对俄罗斯间谍网络的技术分析 - iYouPort"
date: 2018-09-10T14:03:25+00:00
author: iYouPort
from: https://www.iyouport.org/%f0%9f%90%9e%e9%80%9a%e8%bf%87%e9%99%84%e5%8a%a0%e5%88%b0%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6%e7%9a%84-pdf-%e6%96%87%e4%bb%b6%e5%ae%8c%e5%85%a8%e6%8e%a7%e5%88%b6%e4%b8%80%e4%b8%aa%e9%9a%90%e7%a7%98/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7974 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-security tag-spyware tag-technology" id="post-7974">
 <header class="entry-header">
  <h1 class="entry-title">
   🐞通过附加到电子邮件的 PDF 文件完全控制一个隐秘和弹性后门：对俄罗斯间谍网络的技术分析
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-09-10T22:03:25+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:09:09+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   近日，ESET 研究人员发布了关于 APT 组织 Turla（或称 Snake 或 Uroburos）所使用后门的研究报告，该后门用于
   <strong>
    获取至少三个欧洲国家当局的敏感通信
   </strong>
   。
  </p>
  <p>
   后门最近的目标是 Microsoft Outlook。该后门并不使用传统的命令和控制（C＆C）方式，例如基于HTTP（S），而是通过电子邮件附件中的特制PDF文件，指示受感染的机器执行一系列命令。命令包括数据泄露、下载其他文件以及执行其他程序和命令。
   <strong>
    数据泄露本身也通过PDF文件进行
   </strong>
   。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7977 jetpack-lazy-image" data-lazy-sizes="(max-width: 928px) 100vw, 928px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=928%2C646&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?w=928&amp;ssl=1 928w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=300%2C209&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=768%2C535&amp;ssl=1 768w" data-recalc-dims="1" height="646" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=928%2C646&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="928"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7977" data-recalc-dims="1" height="646" sizes="(max-width: 928px) 100vw, 928px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=928%2C646&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?w=928&amp;ssl=1 928w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=300%2C209&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-100.png?resize=768%2C535&amp;ssl=1 768w" width="928"/>
   </noscript>
  </p>
  <p>
   <strong>
    背景
   </strong>
  </p>
  <p>
   <strong>
    Turla 是俄罗斯网络间谍 APT 组织（也被称为 Snake 或 Uroburos），自 2008 年以来一直活跃于攻击政府机构与民间企业。
   </strong>
   其中值得注意的受害者是2013年芬兰外交部，2014年至2016年瑞士军事公司 RUAG，以及最近于2017年底至2018年初的德国政府。此前已经有报道发布了一些关于攻击者使用的攻击方式：他们使用电子邮件附件来控制恶意软件，并从系统中传输被盗数据。但是没有公开关于此后门的技术信息。为此，ESET 研究人员发布了 Turla 后门的深入分析。
  </p>
  <p>
   ESET 的调查还显示，针对 Microsoft Outlook 的这一后门被用于对抗各种政治和军事组织。能够确定其他两个欧洲政府的外国办事处和一个大型国防承包商都受到了损害。同时还发现了 Turla 为此活动注册的数十个电子邮件地址，用于接收受害者的详细数据。
  </p>
  <p>
   该后门可能最早在2009年出现。多年来，其作者一直在添加各种功能，最终赋予它一种罕见的隐身能力和恢复力。以下是过去几年后门的演变过程。
  </p>
  <p>
   <strong>
    攻击流程
   </strong>
  </p>
  <p>
   Turla Outlook 后门主要有两个功能。首先，它通过将所有发送的电子邮件转发给攻击者来窃取信息。
   <strong>
    它主要针对 Microsoft Outlook，但也针对 The Bat! ，一个在东欧很受欢迎的邮件客户端
   </strong>
   。其次，使用电子邮件消息作为其命令和控制（C＆C）协议的传输层。数据（例如通过后门命令请求的文件）附加到电子邮件的特制PDF文档中，并且命令也在PDF附件中接收。因此，它的行为特别隐蔽。
   <strong>
    值得注意的是，PDF 阅读器和 Outlook 中都没有使用漏洞。实际上是恶意软件能够解码PDF文档中的数据并将其解释为后门的命令
   </strong>
   。
  </p>
  <p>
   最新版本后门是一个独立的动态链接库（DLL），它具有安装自身并与邮件客户端 Outlook 和 The Bat！交互的代码。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7975 jetpack-lazy-image" data-lazy-sizes="(max-width: 1002px) 100vw, 1002px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=1002%2C528&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?w=1002&amp;ssl=1 1002w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=300%2C158&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=768%2C405&amp;ssl=1 768w" data-recalc-dims="1" height="528" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=1002%2C528&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1002"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7975" data-recalc-dims="1" height="528" sizes="(max-width: 1002px) 100vw, 1002px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=1002%2C528&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?w=1002&amp;ssl=1 1002w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=300%2C158&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-23.png?resize=768%2C405&amp;ssl=1 768w" width="1002"/>
   </noscript>
  </p>
  <p>
   <strong>
    后门安装：
   </strong>
  </p>
  <p>
   为了安装后门，攻击者执行名为 Install 的 DLL 导出或使用 regsvr32.exe 注册它。参数是目标邮件客户端。
  </p>
  <p>
   <strong>
    Microsoft Outlook：
   </strong>
  </p>
  <p>
   Turla开发人员再一次依赖COM对象劫持来为他们的恶意软件建立持久性。包括通过修改Windows注册表中相应的CLSID条目来重定向目标应用程序使用的COM对象。一旦进行了修改，每次 Outlook 加载此 COM 对象时都会加载后门DLL。此COM重定向不需要管理权限，因为它仅适用于当前用户。最后，使用 COM 劫持允许后门保持隐蔽性。
  </p>
  <p>
   <strong>
    与邮件客户端的交互：
   </strong>
  </p>
  <p>
   Microsoft 维护一个 API，即消息应用程序编程接口（MAPI），它允许应用程序与Outlook 进行交互。此 Turla 后门利用API来访问和管理受感染系统的人员的邮箱。首先，它使用MAPILogonEx连接到消息传递系统。Outlook 使用标志 MAPI_ALLOW_OTHERS 打开默认会话。因此，后门将使用此先前打开的会话来访问默认邮箱配置文件。完成此操作后，它可以访问完整邮箱，并可以使用其他MAPI功能轻松管理。它将遍历各种消息存储库，解析电子邮件并在收件箱和发件箱中添加回调。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7976 jetpack-lazy-image" data-lazy-sizes="(max-width: 1032px) 100vw, 1032px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=1032%2C748&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?w=1032&amp;ssl=1 1032w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=300%2C217&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=768%2C557&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=1024%2C742&amp;ssl=1 1024w" data-recalc-dims="1" height="748" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=1032%2C748&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1032"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7976" data-recalc-dims="1" height="748" sizes="(max-width: 1032px) 100vw, 1032px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=1032%2C748&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?w=1032&amp;ssl=1 1032w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=300%2C217&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=768%2C557&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-20.png?resize=1024%2C742&amp;ssl=1 1024w" width="1032"/>
   </noscript>
  </p>
  <p>
   <strong>
    收件箱回调
   </strong>
   ：
  </p>
  <p>
   收件箱回调首先记录有关传入电子邮件的元数据。这包括发件人，收件人，主题和附件名称。然后，解析电子邮件及其附件，以检查它们是否包含来自攻击者的命令。最后，通过检查传入的电子邮件是否包含运营商的电子邮件地址来拦截非传递报告（NDR）电子邮件。因此，任何包含运营商电子邮件地址的电子邮件将被丢弃。
  </p>
  <p>
   <strong>
    发件箱回调：
   </strong>
  </p>
  <p>
   与收件箱回调类似，发件箱回调会记录每封外发电子邮件的元数据。它还会将每封外发电子邮件转发给攻击者的电子邮件地址。后门会定期向攻击者的电子邮件地址发送报告。
  </p>
  <p>
   <strong>
    隐藏恶意行为：
   </strong>
  </p>
  <p>
   由于后门在用户使用计算机和Outlook的同时工作，因此会努力隐藏可能出现在屏幕上的各种恶意行为，例如来自攻击者的电子邮件。首先，后门总是删除发送给攻击者或从攻击者收到的所有电子邮件。其次，hook 住 CreateWindowsEx 函数。阻止创建 NetUIHWND 类型的窗口，该窗口是 Outlook 用于显示在屏幕右下角通知的窗口类型。
  </p>
  <p>
   <strong>
    —— 结论 ——
   </strong>
  </p>
  <p>
   据 ESET 调查，
   <strong>
    Turla 是目前唯一一个使用完全由电子邮件控制的后门的间谍组织，更具体地说是通过 PDF 附件控制。
   </strong>
   虽然Turla后门不是第一个使用受害者的真实邮箱接收命令和泄露数据的后门，但它是第一个使用标准API（MAPI）与 Microsoft Outlook 进行交互的公知后门。这是对旧邮件控制后门的一个重大改进，旧后门依赖Outlook Express，只是读取收件箱文件和写入发件箱文件。相比之下，Turla后门甚至可以与最新版本的 Outlook一起使用。
  </p>
  <p>
   受到破坏的组织不仅有被种植后门的Turla监视的风险，而且还有被其他攻击者监视的风险。后门只是执行它收到的任何命令，而无法识别操作符。因此，其他攻击者可能已经对后门进行了逆向工程并找出了如何控制它，甚至还在利用后门对受害者进行间谍活动。
  </p>
  <p>
   可以在
   <a href="https://github.com/eset/malware-ioc/tree/master/turla#outlook-indicators-of-compromise" rel="nofollow noopener" title="This link will take you away from steemit.com">
    GitHub 上
   </a>
   找到完整而全面的妥协指标（IoC）和样本。
  </p>
  <p>
   这里有一个白皮书《
   <a href="https://www.welivesecurity.com/wp-content/uploads/2018/08/Eset-Turla-Outlook-Backdoor.pdf" rel="nofollow noopener" title="This link will take you away from steemit.com">
    Turla Outlook Backdoor：一个不寻常的 Turla 后门
   </a>
   》是对该后门的详细分析。◾️
  </p>
  <div id="atatags-1611829871-5f402f000c3ac">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7974" href="https://www.iyouport.org/%f0%9f%90%9e%e9%80%9a%e8%bf%87%e9%99%84%e5%8a%a0%e5%88%b0%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6%e7%9a%84-pdf-%e6%96%87%e4%bb%b6%e5%ae%8c%e5%85%a8%e6%8e%a7%e5%88%b6%e4%b8%80%e4%b8%aa%e9%9a%90%e7%a7%98/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7974" href="https://www.iyouport.org/%f0%9f%90%9e%e9%80%9a%e8%bf%87%e9%99%84%e5%8a%a0%e5%88%b0%e7%94%b5%e5%ad%90%e9%82%ae%e4%bb%b6%e7%9a%84-pdf-%e6%96%87%e4%bb%b6%e5%ae%8c%e5%85%a8%e6%8e%a7%e5%88%b6%e4%b8%80%e4%b8%aa%e9%9a%90%e7%a7%98/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7974-5f402f000cbf8" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7974&amp;origin=www.iyouport.org&amp;obj_id=161182987-7974-5f402f000cbf8" id="like-post-wrapper-161182987-7974-5f402f000cbf8">
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
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/spyware/" rel="tag">
     Spyware
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
   <time class="entry-date published" datetime="2018-09-10T22:03:25+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:09:09+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

