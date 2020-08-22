---
layout: post
title: "对 LINE 中端到端加密的分析 - iYouPort"
date: 2018-01-10T13:24:29+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%af%b9-line-%e4%b8%ad%e7%ab%af%e5%88%b0%e7%ab%af%e5%8a%a0%e5%af%86%e7%9a%84%e5%88%86%e6%9e%90/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7949 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-line tag-security tag-technology" id="post-7949">
 <header class="entry-header">
  <h1 class="entry-title">
   对 LINE 中端到端加密的分析
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
   <time class="entry-date published" datetime="2018-01-10T21:24:29+08:00">
    2018年1月10日
   </time>
   <time class="updated" datetime="2019-08-10T21:29:20+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   LINE 是在亚洲流行的即时通信应用程序，每月活跃用户超过 2 亿。该公司于 2011 年由韩国 Naver 公司的日本子公司 LINE Corporation 推出。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7950 jetpack-lazy-image" data-lazy-sizes="(max-width: 960px) 100vw, 960px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=960%2C634&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=300%2C198&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=768%2C507&amp;ssl=1 768w" data-recalc-dims="1" height="634" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=960%2C634&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="960"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7950" data-recalc-dims="1" height="634" sizes="(max-width: 960px) 100vw, 960px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=960%2C634&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?w=960&amp;ssl=1 960w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=300%2C198&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/Line.png?resize=768%2C507&amp;ssl=1 768w" width="960"/>
   </noscript>
  </p>
  <p>
   从那时起，它在包括日本、泰国和台湾在内的几个亚洲市场经历了快速增长，2016 年拥有超过 2 亿用户。
  </p>
  <p>
   随着这一增长，LINE 经历了来自政府要求披露用户数据和内容法规的压力，因为它已扩展到新兴市场。 去年，LINE 推出了许多新的安全功能，包括端到端加密。
  </p>
  <p>
   新墨西哥大学和加拿大公民实验室的研究人员新发表的一篇论文，报告了对 LINE 的端到端加密协议的第一 次独立分析，并揭示了实施中的安全漏洞。
  </p>
  <p>
   通过分析这些漏洞以及对向 LINE 披露这些漏洞的过程的反思，该论文讨论了研究人员、开发人员和用户之间的沟通和理解方面的差距。 这篇题为“Alice and Bob Who the FOCI are they?: Analysis of End-to-End Encryption in the LINE Messaging Application”的论文，由Antonio M. Espinoza，William J. Tolley 和 Jedidah R. Crandall（新墨西哥大学）和 Andrew Hilts和Masashi Crete-Nishihata（公民实验室）撰写。
  </p>
  <p>
   在第7届 USENIX 互联网自由和开放通信研讨会（FOCI）上，该论文报告了使用各种威胁模型对 LINE 中的端到端加密功能进行安全审计，资源充足的攻击者也可能会采用这种模型。
  </p>
  <p>
   端到端加密是一种安全功能，通过加密它们来保护两个用户之间的通信，以便只有他们才能读取消息。从 2015 年开始，许多流行的聊天应用程序开始采用此功能。
  </p>
  <p>
   分析 LINE 的端到端加密详细的安全问题，同时也突显了研究人员、开发人员和用户之间的沟通差距，正如新墨西哥大学教授和论文作者 Jedidiah Crandall 所说，调查结果提出了两个主要问题：
   <strong>
    “一个是设计良好的端到端加密协议应该具有以下特性：如果发送方和接收方都删除了消息，即使他们的私钥和设备受到损害，也无法恢复这些已被删除的消息”。“
   </strong>
  </p>
  <p>
   <strong>
    LINE 没有这个特性
   </strong>
   ，因此删除 LINE 消息并不能保证该消息应该无法被恢复。” 这意味着即使已删除的邮件也可能被有权访问 LINE 服务器的第三方检索到，从而带来安全威胁。 “
  </p>
  <p>
   另一个首要问题是逆向工程的 LINE 版本有许多与众所周知的加密工程最佳实践不一致的做法，”Crandall 说。
  </p>
  <p>
   他将这最后一点比作建造一座桥梁：一家公司可能会使用以前从未经过测试的定制混凝土和不适用于桥梁的钢梁。这座桥可能会成立，但中立的工程师无法获得必要的蓝图和规格来进行适当的分析。 “
  </p>
  <p>
   同样，当密码学工程师不遵循最佳实践时，它使中立的加密工程师无法证明其安全性，”他说。 这一挑战提出了一个更大的问题，即供应商、研究人员和最终用户之间在如何查看和评估安全威胁方面存在的差距：供应商必须大规模实施安全性，同时平 衡可用性和资源; 研究人员可能精通安全最佳实践，但通常无法深入了解供应商的决策过程; 并且可能向用户呈现越来越多的安全特征，但是可能无法评估。
  </p>
  <p>
   特别是对研究人员和供应商而言，似乎缺乏关于所有这些方如何相互作用的研究。正如该论文所说：“尽管有大量关于最终用户理解和安全建议实施的文献， 但几乎没有类似的研究可以检查软件供应商的安全团队如何理解和处理漏洞报告。”
  </p>
  <p>
   那么，如何解决这些问题呢？ 作者说，该论文的目的是围绕这些差距产生讨论。与此相呼应的是，需要增加和改善各方之间的沟通。 “我认为我们需要以社区的形式开展工作，以用户真正关心的方式讨论加密或一般安全问题。”
  </p>
  <p>
   相关：
  </p>
  <p>
   <a href="https://citizenlab.ca/2013/11/asia-chats-analyzing-information-controls-privacy-asian-messaging-applications/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    Asia Chats: Analyzing Information Controls and Privacy in Asian Messaging Applications
   </a>
  </p>
  <p>
   <a href="https://citizenlab.ca/2013/11/asia-chats-investigating-regionally-based-keyword-censorship-line/" rel="nofollow noopener" title="This link will take you away from steemit.com">
    Asia Chats: Investigating Regionally-based Keyword Censorship in LINE
   </a>
  </p>
  <div id="atatags-1611829871-5f402ee40efca">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7949" href="https://www.iyouport.org/%e5%af%b9-line-%e4%b8%ad%e7%ab%af%e5%88%b0%e7%ab%af%e5%8a%a0%e5%af%86%e7%9a%84%e5%88%86%e6%9e%90/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7949" href="https://www.iyouport.org/%e5%af%b9-line-%e4%b8%ad%e7%ab%af%e5%88%b0%e7%ab%af%e5%8a%a0%e5%af%86%e7%9a%84%e5%88%86%e6%9e%90/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7949-5f402ee40f972" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7949&amp;origin=www.iyouport.org&amp;obj_id=161182987-7949-5f402ee40f972" id="like-post-wrapper-161182987-7949-5f402ee40f972">
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
    <a href="https://www.iyouport.org/tag/line/" rel="tag">
     Line
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
   <time class="entry-date published" datetime="2018-01-10T21:24:29+08:00">
    2018年1月10日
   </time>
   <time class="updated" datetime="2019-08-10T21:29:20+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

