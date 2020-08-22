---
layout: post
title: "Whatsapp, Slack, Skype 等应用程序更容易被构建后门 - iYouPort"
date: 2019-11-20T16:01:46+00:00
author: iYouPort
from: https://www.iyouport.org/whatsapp-slack-skype-%e7%ad%89%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e6%9b%b4%e5%ae%b9%e6%98%93%e8%a2%ab%e6%9e%84%e5%bb%ba%e5%90%8e%e9%97%a8/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-8588 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-289 category-54 tag-backdoor tag-electron tag-security tag-technology" id="post-8588">
 <header class="entry-header">
  <h1 class="entry-title">
   Whatsapp, Slack, Skype 等应用程序更容易被构建后门
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
   <time class="entry-date published" datetime="2019-11-21T00:01:46+08:00">
    2019年11月21日
   </time>
   <time class="updated" datetime="2019-08-13T16:28:30+08:00">
    2019年8月13日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p class="graf graf--p">
   由于其跨平台功能，Electron 框架是
   <strong class="markup--strong markup--p-strong">
    许多
   </strong>
   应用程序的关键部分。
  </p>
  <p class="graf graf--p">
   Electron 已被广泛用于构建通信工具 —— 包括 Skype，WhatsApp 和 Slack —— 甚至 Microsoft 的 Visual Studio Code。
  </p>
  <p class="graf graf--p">
   但是 Electron 也会带来很大的风险，因为基于 Electron 的应用程序可以轻松被修改而不会触发警告。
  </p>
  <figure aria-describedby="caption-attachment-8589" class="wp-caption aligncenter" id="attachment_8589" style="width: 800px">
   <img alt="" class="size-full wp-image-8589 jetpack-lazy-image" data-lazy-sizes="(max-width: 800px) 100vw, 800px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=800%2C533&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="533" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=800%2C533&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" class="size-full wp-image-8589" data-recalc-dims="1" height="533" sizes="(max-width: 800px) 100vw, 800px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=800%2C533&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?w=800&amp;ssl=1 800w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=300%2C200&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=768%2C512&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/后门.jpg?resize=272%2C182&amp;ssl=1 272w" width="800"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8589">
    brown back door of an establishment
   </figcaption>
  </figure>
  <p class="graf graf--p">
   在 BSides LV 安全会议上，Pavel Tsakalidis 演示了他创建的一个
   <a class="markup--anchor markup--p-anchor" data-href="https://www.contextis.com/en/blog/basic-electron-framework-exploitation" href="https://www.contextis.com/en/blog/basic-electron-framework-exploitation" rel="noopener noreferrer" target="_blank">
    名为 BEEMKA 的工具
   </a>
   ，这是一个基于 Python 的工具，允许
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/electron/asar" href="https://github.com/electron/asar" rel="noopener noreferrer" target="_blank">
    解压缩 Electron ASAR 存档文件
   </a>
   并将新代码（后门）注入 Electron 的 JavaScript 库和内置的 Chrome 浏览器扩展。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    该漏洞不在应用程序本身，而是在底层 Electron 框架中 —— 于是该漏洞允许恶意活动隐藏在看似良性的流程中
   </strong>
   。
  </p>
  <p class="graf graf--p">
   Tsakalidis 说，他已经联系了 Electron 解释关于这个漏洞的问题，但他没有得到任何回应 —— 而且这个漏洞仍然存在。
  </p>
  <p class="graf graf--p">
   虽然进行这些更改如果在 Linux 和 MacOS 上进行就需要管理员访问权限，但是在 Windows 上做则不需要。
  </p>
  <p class="graf graf--p">
   ⚠️这些修改可以创建新的“功能”，可以访问文件系统、激活 Web cam，并使用受信的应用程序功能（包括用户凭据和敏感数据）从系统中泄露信息。
  </p>
  <p class="graf graf--p">
   在他的演示中，Tsakalidis 展示了一个后门版本的 Microsoft Visual Studio Code，它可以将打开的每个代码选项卡的内容发送到远程网站。
  </p>
  <p class="graf graf--p">
   视频：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/qDTKYNGsyuI" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   问题在于
   <strong class="markup--strong markup--p-strong">
    Electron ASAR 文件本身未加密或签名
   </strong>
   ，允许在不更改受影响应用程序的签名的情况下对其进行修改。
   <strong class="markup--strong markup--p-strong">
    开发人员要求加密 ASAR 文件的请求被 Electron 团队忽视，他们没有采取任何行动
   </strong>
   。
  </p>
  <p class="graf graf--p">
   Tsakalidis 表示，为了对 Electron 应用程序进行修改，需要进行本地访问，因此（至少目前）相关远程攻击不会构成威胁。
  </p>
  <p class="graf graf--p">
   但是，攻击者可以对应用程序进行后门处理，然后重新分发它们，并且修改后的应用程序不太可能触发警告 —— 因为它们的数字签名没有被修改过。⚪️
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://arstechnica.com/information-technology/2019/08/skype-slack-other-electron-based-apps-can-be-easily-backdoored/" href="https://arstechnica.com/information-technology/2019/08/skype-slack-other-electron-based-apps-can-be-easily-backdoored/" rel="noopener noreferrer" target="_blank">
    Skype, Slack, other Electron-based apps can be easily backdoored
   </a>
  </p>
  <div id="atatags-1611829871-5f409ec4810e6">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-8588" href="https://www.iyouport.org/whatsapp-slack-skype-%e7%ad%89%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e6%9b%b4%e5%ae%b9%e6%98%93%e8%a2%ab%e6%9e%84%e5%bb%ba%e5%90%8e%e9%97%a8/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-8588" href="https://www.iyouport.org/whatsapp-slack-skype-%e7%ad%89%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e6%9b%b4%e5%ae%b9%e6%98%93%e8%a2%ab%e6%9e%84%e5%bb%ba%e5%90%8e%e9%97%a8/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-8588-5f409ec481837" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=8588&amp;origin=www.iyouport.org&amp;obj_id=161182987-8588-5f409ec481837" id="like-post-wrapper-161182987-8588-5f409ec481837">
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
    <a href="https://www.iyouport.org/tag/backdoor/" rel="tag">
     backdoor
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/electron/" rel="tag">
     Electron
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
   <time class="entry-date published" datetime="2019-11-21T00:01:46+08:00">
    2019年11月21日
   </time>
   <time class="updated" datetime="2019-08-13T16:28:30+08:00">
    2019年8月13日
   </time>
  </div>
 </div>
</article>

