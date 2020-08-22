---
layout: post
title: "如何在 macOS 上轻松安装开源软件 - iYouPort"
date: 2018-08-20T13:11:40+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-macos-%e4%b8%8a%e8%bd%bb%e6%9d%be%e5%ae%89%e8%a3%85%e5%bc%80%e6%ba%90%e8%bd%af%e4%bb%b6/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7944 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-mac-os tag-open-source tag-technology" id="post-7944">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在 macOS 上轻松安装开源软件
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-08-20T21:11:40+08:00">
    2018年8月20日
   </time>
   <time class="updated" datetime="2019-08-10T21:22:59+08:00">
    2019年8月10日
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
       一起来，F**那个愚蠢的 App Store
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7947 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1100%2C641&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?w=1600&amp;ssl=1 1600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=300%2C175&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=768%2C447&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1024%2C596&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=740%2C430&amp;ssl=1 740w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1100%2C641&amp;ssl=1 1100w" data-recalc-dims="1" height="641" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1100%2C641&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7947" data-recalc-dims="1" height="641" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1100%2C641&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?w=1600&amp;ssl=1 1600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=300%2C175&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=768%2C447&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1024%2C596&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=740%2C430&amp;ssl=1 740w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-7.jpeg?resize=1100%2C641&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="54b0">
   在我转向使用 macOS 作为日常工作操作系统之前，我使用了无数的 GNU / Linux 平台。Linux（以及构建 macOS 的 FreeBSD 和 OpenBSD）使我可以通过包管理器轻松访问各种开源软件。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="5cfa">
   <strong class="jy ld">
    什么是包管理器
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9abd">
   包管理器是一个命令行工具，它允许我访问在计算机上安装和下载的大量预构建软件包（或有时是源代码，如果需要的话）。我可以打开一个终端，只需输入一个命令，告诉包管理员下载并安装我所需的任何免费开源软件。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="07ee">
   虽然 macOS 有 App Store，但它不是我最喜欢的开源软件存储库（至少不是原始的纯粹形式）。像 mplayer，wget 和 gcc 这样的东西根本不在 App Store 中，搜索或构建包的源代码会使工作变得繁重。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="ffb9">
   💡有办法 — — Homebrew
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="3cc1">
   <strong class="jy ld">
    什么是 Homebrew
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="cb02">
   <a class="bj cu le lf lg lh" href="https://brew.sh/">
    Homebrew
   </a>
   将自己称为“缺少 macOS 的软件包管理器”，它将“安装 Apple 所不需要的东西”。一旦安装在 Mac 上，您就可以轻松访问数百个可供您使用的开源软件包。需要下载 YouTube 视频吗？打开命令提示符并键入“brew install youtube-dl”；需要交叉编译另一个平台吗？输入“brew install gcc”；想在 macOS 上玩基于 Windows PC 的游戏吗？输入“brew install wine”。就这么简单。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="041e">
   <strong class="jy ld">
    安装 Homebrew
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9a7e">
   &gt; 启动终端
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="8ee7">
   &gt; 在命令行输入：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj li lj lk" data-selectable-paragraph="" id="7ff3">
    <strong class="jy ld">
     / usr / bin / ruby​​ -e“$（curl -fsSL
    </strong>
    <a class="bj cu le lf lg lh" href="https://raw.githubusercontent.com/Homebrew/install/master/install%EF%BC%89">
     <strong class="jy ld">
      https://raw.githubusercontent.com/Homebrew/install/master/install）
     </strong>
    </a>
   </li>
  </ul>
  <blockquote>
   <ul>
    <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" id="cbcb">
     Return
    </li>
    <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj">
     再次点击 Return 以允许安装开始。
    </li>
    <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj">
     输入您的密码
    </li>
    <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj">
     Return
    </li>
   </ul>
  </blockquote>
  <p data-selectable-paragraph="">
   <img alt="" class="aligncenter size-full wp-image-7945 jetpack-lazy-image" data-lazy-sizes="(max-width: 1095px) 100vw, 1095px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=1095%2C716&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?w=1095&amp;ssl=1 1095w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=300%2C196&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=768%2C502&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=1024%2C670&amp;ssl=1 1024w" data-recalc-dims="1" height="716" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=1095%2C716&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1095"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7945" data-recalc-dims="1" height="716" sizes="(max-width: 1095px) 100vw, 1095px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=1095%2C716&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?w=1095&amp;ssl=1 1095w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=300%2C196&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=768%2C502&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-21.png?resize=1024%2C670&amp;ssl=1 1024w" width="1095"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="a7dd">
   等待下载开始，安装程序完成。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="9165">
   <strong class="jy ld">
    安装软件包
   </strong>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="3008">
   一旦安装了 Homebrew，您现在可以下载任何您喜欢的开源软件，有数百种应用程序可供选择。例如，假设我想安装像 Transmission 这样的轻量级 torrent 客户端，那么就这样：
  </p>
  <ul class="">
   <li class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj li lj lk" data-selectable-paragraph="" id="9391">
    打开终端
   </li>
   <li class="jw jx ce bc jy b jz lm kb ln kd lo kf lp kh lq kj li lj lk" data-selectable-paragraph="" id="e747">
    在命令行输入：brew install transmission
   </li>
   <li class="jw jx ce bc jy b jz lm kb ln kd lo kf lp kh lq kj li lj lk" data-selectable-paragraph="" id="3c93">
    点击返回
   </li>
   <li class="jw jx ce bc jy b jz lm kb ln kd lo kf lp kh lq kj li lj lk" data-selectable-paragraph="" id="625c">
    完成！
   </li>
  </ul>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="708f">
   很快吧。就是这么简单。
  </p>
  <p data-selectable-paragraph="">
   <img alt="" class="aligncenter size-full wp-image-7946 jetpack-lazy-image" data-lazy-sizes="(max-width: 1053px) 100vw, 1053px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=1053%2C758&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?w=1053&amp;ssl=1 1053w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=300%2C216&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=768%2C553&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=1024%2C737&amp;ssl=1 1024w" data-recalc-dims="1" height="758" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=1053%2C758&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1053"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7946" data-recalc-dims="1" height="758" sizes="(max-width: 1053px) 100vw, 1053px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=1053%2C758&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?w=1053&amp;ssl=1 1053w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=300%2C216&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=768%2C553&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-18.png?resize=1024%2C737&amp;ssl=1 1024w" width="1053"/>
   </noscript>
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="dbb6">
   凭借 Apple 在其 BSD 基础上创建的令人惊叹的图形界面，很容易忘记 UNIX 命令行可以提供的强大功能。它具有灵活性和快速性，拥有大量可以将任何用户转变为高级用户的免费软件。
  </p>
  <p class="jw jx ce bc jy b jz ka kb kc kd ke kf kg kh ki kj" data-selectable-paragraph="" id="70e5">
   您认为 App Store 应该将开源软件包推广到其范围吗？拥有像 Homebrew 这样的第三方软件包管理器是更好的选择吗？欢迎留言。
  </p>
  <div id="atatags-1611829871-5f402edd2e64f">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7944" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-macos-%e4%b8%8a%e8%bd%bb%e6%9d%be%e5%ae%89%e8%a3%85%e5%bc%80%e6%ba%90%e8%bd%af%e4%bb%b6/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7944" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-macos-%e4%b8%8a%e8%bd%bb%e6%9d%be%e5%ae%89%e8%a3%85%e5%bc%80%e6%ba%90%e8%bd%af%e4%bb%b6/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7944-5f402edd2eda0" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7944&amp;origin=www.iyouport.org&amp;obj_id=161182987-7944-5f402edd2eda0" id="like-post-wrapper-161182987-7944-5f402edd2eda0">
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
    <a href="https://www.iyouport.org/tag/mac-os/" rel="tag">
     Mac OS
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/open-source/" rel="tag">
     Open Source
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
   <time class="entry-date published" datetime="2018-08-20T21:11:40+08:00">
    2018年8月20日
   </time>
   <time class="updated" datetime="2019-08-10T21:22:59+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

