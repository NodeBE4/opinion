---
layout: post
title: "所有没有 T2 芯片的 Mac 都容易受到最近发现的冷启动攻击 - iYouPort"
date: 2018-08-10T14:22:39+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%89%80%e6%9c%89%e6%b2%a1%e6%9c%89-t2-%e8%8a%af%e7%89%87%e7%9a%84-mac-%e9%83%bd%e5%ae%b9%e6%98%93%e5%8f%97%e5%88%b0%e6%9c%80%e8%bf%91%e5%8f%91%e7%8e%b0%e7%9a%84%e5%86%b7%e5%90%af%e5%8a%a8%e6%94%bb/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7991 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-newsletters category-289 category-54 tag-attacks tag-security tag-technology" id="post-7991">
 <header class="entry-header">
  <h1 class="entry-title">
   所有没有 T2 芯片的 Mac 都容易受到最近发现的冷启动攻击
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
   <time class="entry-date published" datetime="2018-08-10T22:22:39+08:00">
    2018年8月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:37:09+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   利用现代计算机固件中发现的漏洞，研究员可以复活冷启动攻击。由于该方法要求能物理接触到目标设备，更容易被盗的笔记本电脑就了这种攻击的理想目标。该漏洞影响多家主流供应商，包括戴尔、联想和苹果。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7992 jetpack-lazy-image" data-lazy-sizes="(max-width: 954px) 100vw, 954px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=954%2C574&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?w=954&amp;ssl=1 954w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=768%2C462&amp;ssl=1 768w" data-recalc-dims="1" height="574" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=954%2C574&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="954"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7992" data-recalc-dims="1" height="574" sizes="(max-width: 954px) 100vw, 954px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=954%2C574&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?w=954&amp;ssl=1 954w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-37.png?resize=768%2C462&amp;ssl=1 768w" width="954"/>
   </noscript>
  </p>
  <p>
   冷启动(Cold Boot)攻击属于一种边信道攻击方法，可以物理接触到计算机的攻击者能够运用这种攻击手段在冷启动或硬盘重启之后，比如计算机没经历正常的关机过程就突然重启时，从计算机的内存(RAM)中获取加密密钥、口令和其他数据。断电后内存中的数据能维持几十秒或数分钟，但通过液氮或压缩空气冷冻，这一数据衰减过程可被攻击者拉长至数小时之久。
  </p>
  <p>
   冷启动攻击10年前就出现了，计算机制造商通过实现系统重启时重写内存数据的机制来防止这种攻击。
  </p>
  <p>
   利用现代计算机固件中发现的漏洞，他们可以复活冷启动攻击。由于该方法要求能物理接触到目标设备，更容易被盗的笔记本电脑就了这种攻击的理想目标。
  </p>
  <p>
   据称，研究人员发现的漏洞影响多家主流供应商，包括戴尔、联想和苹果。F-Secure已向英特尔、苹果和微软等公司报告了其研究结果，但称修复不易。
  </p>
  <p>
   攻击者可以通过修改设备硬件来禁用重启时重写内存的功能，并将计算机设置成从外部设备启动。然后，攻击者就可以用特别制作的U盘对计算机进行冷启动了。该U盘上的恶意软件可以帮攻击者将预启动内存中的数据转储到一个文件里。
  </p>
  <p>
   实际操作显然没那么简单，但我们不应忽视可能已经有黑客发现并利用该漏洞的事实。低端黑客自然不会用这种方式去啃硬骨头，但如果是想要大赚一笔的高端黑客呢？比如想要侵入银行或大公司的网络犯罪组织，或者想要窃取情报的网络间谍？
  </p>
  <p>
   在永久修复推出之前，用户可以将自己的设备配置为不使用时就关机或者休眠，不要采用睡眠选项。对于Windows计算机，可以设置无论设备何时启动都要求输入BitLocker硬盘加密器的PIN码。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7993 jetpack-lazy-image" data-lazy-sizes="(max-width: 538px) 100vw, 538px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?resize=538%2C472&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?w=538&amp;ssl=1 538w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?resize=300%2C263&amp;ssl=1 300w" data-recalc-dims="1" height="472" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?resize=538%2C472&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="538"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7993" data-recalc-dims="1" height="472" sizes="(max-width: 538px) 100vw, 538px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?resize=538%2C472&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?w=538&amp;ssl=1 538w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-3.png?resize=300%2C263&amp;ssl=1 300w" width="538"/>
   </noscript>
  </p>
  <p>
   即便实施了上述方法，冷启动攻击依然有乘隙而入的空间，但至少可以保证内存中没留下有价值的数据。
  </p>
  <p>
   接到F-Secure的通告后，微软更新了其BitLocker应对措施页面，增加了如何缓解冷启动攻击的说明。苹果称，采用T2芯片的Mac机包含了应能抵御冷启动攻击的安全机制，并建议使用其他代系设备的用户设置固件密码。
  </p>
  <p>
   专家建议公司企业设立设备丢失相关的事件响应计划。
  </p>
  <p>
   能够无效化访问凭证的快速响应，可以大幅降低被盗笔记本电脑对攻击者的价值。IT安全及事件响应团队应演练设备被盗场景，确保公司员工在设备丢失或被盗时能及时通知IT部门。为安全事件做好应对准备，总比假设电脑不会被黑客亲身染指要靠谱些。◾️
  </p>
  <div id="atatags-1611829871-5f402f1ce6720">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7991" href="https://www.iyouport.org/%e6%89%80%e6%9c%89%e6%b2%a1%e6%9c%89-t2-%e8%8a%af%e7%89%87%e7%9a%84-mac-%e9%83%bd%e5%ae%b9%e6%98%93%e5%8f%97%e5%88%b0%e6%9c%80%e8%bf%91%e5%8f%91%e7%8e%b0%e7%9a%84%e5%86%b7%e5%90%af%e5%8a%a8%e6%94%bb/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7991" href="https://www.iyouport.org/%e6%89%80%e6%9c%89%e6%b2%a1%e6%9c%89-t2-%e8%8a%af%e7%89%87%e7%9a%84-mac-%e9%83%bd%e5%ae%b9%e6%98%93%e5%8f%97%e5%88%b0%e6%9c%80%e8%bf%91%e5%8f%91%e7%8e%b0%e7%9a%84%e5%86%b7%e5%90%af%e5%8a%a8%e6%94%bb/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7991-5f402f1ce75d6" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7991&amp;origin=www.iyouport.org&amp;obj_id=161182987-7991-5f402f1ce75d6" id="like-post-wrapper-161182987-7991-5f402f1ce75d6">
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
   <time class="entry-date published" datetime="2018-08-10T22:22:39+08:00">
    2018年8月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:37:09+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

