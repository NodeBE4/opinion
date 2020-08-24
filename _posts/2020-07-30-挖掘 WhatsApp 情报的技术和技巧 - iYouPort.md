---
layout: post
title: "挖掘 WhatsApp 情报的技术和技巧 - iYouPort"
date: 2020-07-30T16:04:22+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%8c%96%e6%8e%98-whatsapp-%e6%83%85%e6%8a%a5%e7%9a%84%e6%8a%80%e6%9c%af%e5%92%8c%e6%8a%80%e5%b7%a7/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-13059 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-googledorking tag-osint tag-technique tag-whatsapp" id="post-13059">
 <header class="entry-header">
  <h1 class="entry-title">
   挖掘 WhatsApp 情报的技术和技巧
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
   <time class="entry-date published" datetime="2020-07-31T00:04:22+08:00">
    2020年7月31日
   </time>
   <time class="updated" datetime="2020-05-28T23:46:19+08:00">
    2020年5月28日
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
       WhatsApp 也可以挖？是的。它没有很多人所认为的那样安全私密，虽然其中一种方法目前已经失效，但是其他方法依旧可用
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-13060 jetpack-lazy-image" data-lazy-sizes="(max-width: 1050px) 100vw, 1050px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=1050%2C700&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?w=1050&amp;ssl=1 1050w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=1024%2C683&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="700" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=1050%2C700&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1050"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13060" data-recalc-dims="1" height="700" sizes="(max-width: 1050px) 100vw, 1050px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=1050%2C700&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?w=1050&amp;ssl=1 1050w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=1024%2C683&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/00-1.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1050"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   注：从2月22日开始，一个dork已经不再起作用。 WhatsApp 已修改其网址，因此谷歌不能再对其进行索引。但是，本文中的其他 dorks 仍然有效。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-13145 jetpack-lazy-image" data-lazy-sizes="(max-width: 802px) 100vw, 802px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=802%2C1162&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=207%2C300&amp;ssl=1 207w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=707%2C1024&amp;ssl=1 707w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=768%2C1113&amp;ssl=1 768w" data-recalc-dims="1" height="1162" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=802%2C1162&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="802"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13145" data-recalc-dims="1" height="1162" sizes="(max-width: 802px) 100vw, 802px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=802%2C1162&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?w=802&amp;ssl=1 802w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=207%2C300&amp;ssl=1 207w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=707%2C1024&amp;ssl=1 707w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/07/unnamed-file-1.png?resize=768%2C1113&amp;ssl=1 768w" width="802"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在人们专注于冠状病毒的同时，Jordan Wildon 发表了一个轰动一时的推文，引起了人们的极大兴趣（很多中国读者可能错过了）—— 他展示了如何通过一个小小的 Google Dorking 就能从谷歌挖出 WhatsApp 群组。
  </p>
  <p class="graf graf--p">
   这个 dork 利用了 WhatsApp 创建公共群组的方式；群组管理员可以为该群组生成可共享的公共链接，以供其他人加入。
  </p>
  <p class="graf graf--p">
   Google 已将这些链接编入索引，以便可以对特定主题的 WhatsApp 群组进行针对性搜索。最广泛的搜索方法非常简单，就是这样：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    site:chat.whatsapp.com
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-13061 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1100%2C884&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?w=1536&amp;ssl=1 1536w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=300%2C241&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1024%2C823&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=768%2C618&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1100%2C884&amp;ssl=1 1100w" data-recalc-dims="1" height="884" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1100%2C884&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13061" data-recalc-dims="1" height="884" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1100%2C884&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?w=1536&amp;ssl=1 1536w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=300%2C241&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1024%2C823&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=768%2C618&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/03/1-2.png?resize=1100%2C884&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   它带回了将近 460000 个被索引的群组邀请。
  </p>
  <p class="graf graf--p">
   为了利用这一点，我们可以通过指定我们感兴趣的主题来修改搜索词。
  </p>
  <p class="graf graf--p">
   因此，如果想要找到有一群骗子的群组，可以尝试进行这样的搜索：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    site:chat.whatsapp.com crypto | forex | bitcoin | invest
   </strong>
  </p>
  <p class="graf graf--p">
   或者这样：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    site:chat.whatsapp.com “carding”
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-13062 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1100%2C884&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?w=1536&amp;ssl=1 1536w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=300%2C241&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1024%2C823&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=768%2C618&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1100%2C884&amp;ssl=1 1100w" data-recalc-dims="1" height="884" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1100%2C884&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13062" data-recalc-dims="1" height="884" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1100%2C884&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?w=1536&amp;ssl=1 1536w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=300%2C241&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1024%2C823&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=768%2C618&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/03/2-2.png?resize=1100%2C884&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   Google 实际上并没有以这种方式为群组聊天内容建立索引 —— 要找到与这些群组相关的内容和电话号码，仍然需要加入群组本身。但是，它显然提供了一个入口。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    获取 WhatsApp 内容
   </strong>
  </p>
  <p class="graf graf--p">
   那么我们可以和其他一些 Google Dorks 一起使用以获取 WhatsApp 的实际内容吗？
  </p>
  <p class="graf graf--p">
   无法直接收集全部内容，但是，只要有一点创意，实际上就可以从开源渠道中获取一些 WhatsApp 内容。
  </p>
  <p class="graf graf--p">
   例如，将备份的 WhatsApp 图像上传到可公开访问的服务器后，便可以找到它们。可以通过以下搜索找到这些备份：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    intitle: “WhatsApp Images”
   </strong>
  </p>
  <p class="graf graf--p">
   Google 会查找包含 WhatsApp 图像备份的开放目录：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-13063 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1100%2C967&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?w=1536&amp;ssl=1 1536w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=300%2C264&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1024%2C900&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=768%2C675&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1100%2C967&amp;ssl=1 1100w" data-recalc-dims="1" height="967" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1100%2C967&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13063" data-recalc-dims="1" height="967" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1100%2C967&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?w=1536&amp;ssl=1 1536w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=300%2C264&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1024%2C900&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=768%2C675&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/03/3-2.png?resize=1100%2C967&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   尽管这项技术行之有效，但目前它的有效性非常有限。主要原因是 WhatsApp 提供的默认备份选项倾向于用于 Google 云端硬盘或 Dropbox 之类的云服务，这些服务没有被索引，因此无法搜索。
  </p>
  <p class="graf graf--p">
   您还可以结合使用 inurl 和 intitle 参数来搜索包含 WhatsApp 的内容（例如消息、备份和图像）：
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    intitle:index of inurl://whatsapp/
   </strong>
  </p>
  <p class="graf graf--p">
   要使该方法更加有趣，您可以将搜索参数中的 “whatsapp” 替换为 “DCIM” 或 “Dropbox” 或 “Backups” …… 玩得开心。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    不要错过《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e6%9e%9c%e6%82%a8%e5%bf%85%e9%9c%80%e4%bd%bf%e7%94%a8-whatsapp%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e5%87%8f%e5%b0%91%e4%bc%a4%e5%ae%b3%e7%9a%84%e5%8a%9e%e6%b3%95/" href="https://www.iyouport.org/%e5%a6%82%e6%9e%9c%e6%82%a8%e5%bf%85%e9%9c%80%e4%bd%bf%e7%94%a8-whatsapp%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e5%87%8f%e5%b0%91%e4%bc%a4%e5%ae%b3%e7%9a%84%e5%8a%9e%e6%b3%95/" rel="noopener noreferrer" target="_blank">
     如果您必需使用 WhatsApp：这里是减少伤害的办法
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e6%98%af%e5%90%a6%e9%9c%80%e8%a6%81%e5%a4%87%e4%bb%bd%e4%bb%a5%e5%8f%8a%e8%af%a5%e5%a6%82%e4%bd%95%e5%ae%89%e5%85%a8%e5%9c%b0%e5%a4%87%e4%bb%bd-whatsapp%ef%bc%9f/" href="https://www.iyouport.org/%e6%98%af%e5%90%a6%e9%9c%80%e8%a6%81%e5%a4%87%e4%bb%bd%e4%bb%a5%e5%8f%8a%e8%af%a5%e5%a6%82%e4%bd%95%e5%ae%89%e5%85%a8%e5%9c%b0%e5%a4%87%e4%bb%bd-whatsapp%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
     是否需要备份以及该如何安全地备份 WhatsApp？
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   ⚪️
  </p>
  <p>
   原文《
   <a href="https://nixintel.info/osint/whatsapp-dorks-and-tricks/" rel="noopener noreferrer" target="_blank">
    WhatsApp Dorks And Tricks
   </a>
   》
  </p>
  <div id="atatags-1611829871-5f431168b8bab">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-13059" href="https://www.iyouport.org/%e6%8c%96%e6%8e%98-whatsapp-%e6%83%85%e6%8a%a5%e7%9a%84%e6%8a%80%e6%9c%af%e5%92%8c%e6%8a%80%e5%b7%a7/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-13059" href="https://www.iyouport.org/%e6%8c%96%e6%8e%98-whatsapp-%e6%83%85%e6%8a%a5%e7%9a%84%e6%8a%80%e6%9c%af%e5%92%8c%e6%8a%80%e5%b7%a7/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-13059-5f431168b936b" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=13059&amp;origin=www.iyouport.org&amp;obj_id=161182987-13059-5f431168b936b" id="like-post-wrapper-161182987-13059-5f431168b936b">
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
    <a href="https://www.iyouport.org/tag/googledorking/" rel="tag">
     GoogleDorking
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
    <a href="https://www.iyouport.org/tag/whatsapp/" rel="tag">
     WhatsApp
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-07-31T00:04:22+08:00">
    2020年7月31日
   </time>
   <time class="updated" datetime="2020-05-28T23:46:19+08:00">
    2020年5月28日
   </time>
  </div>
 </div>
</article>

