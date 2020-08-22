---
layout: post
title: "新的VPN协议 - iYouPort"
date: 2019-01-09T05:28:57+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%96%b0%e7%9a%84vpn%e5%8d%8f%e8%ae%ae/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7758 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-security tag-technology tag-vpn" id="post-7758">
 <header class="entry-header">
  <h1 class="entry-title">
   新的VPN协议
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
   <time class="entry-date published" datetime="2019-01-09T13:28:57+08:00">
    2019年1月9日
   </time>
   <time class="updated" datetime="2019-08-10T13:32:23+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   WireGuard 是一种新的 VPN 协议，可以同时实现更快和更安全。现在，您可以通过官方开源应用程序连接到 iOS 上的 WireGuard 服务器。它与其他 VPN 协议（如 OpenVPN 和 IPsec）相比更安全，即使您从一个网络切换到另一个网络，它也可以维持 VPN 连接。
  </p>
  <p>
   假设您在酒店，正前往繁忙的会议中心。如果您已与 WireGuard 服务器建立连接，当您走出酒店并切换到蜂窝网络时，以及当您到达会议中心并连接到 Wi-Fi 网络时，您的手机将可以一直保持与 VPN 服务器的连接。
  </p>
  <p>
   仅此功能就是一项很大的改进。其他协议允许您与 VPN 服务器“按需”建立连接，但每次网络状态更改时，重新激活 VPN 连接通常都需要至少几秒钟。WireGuard 团队表示 iOS 版应用程序仍处于测试阶段，但它足够稳定。安装应用程序后，您可以通过扫描服务器的 QR 码以添加 VPN 配置。
  </p>
  <p>
   如果您想亲自试用 WireGuard，建议您使用 Algo VPN 构建自己的 VPN 服务器。不要相信任何付费和免费的 VPN 服务公司。 VPN 公司可以在自己的服务器上看到您的所有互联网流量，这是一个很大的安全风险。这些公司可以分析您的浏览习惯，将其出售给广告商，在非安全页面上注入自己的广告或窃取您的身份。最糟糕的是，他们可以向当局提供大量有关您的隐私数据。
  </p>
  <p>
   除了 IKEv2 之外，Algo VPN 现在也支持 WireGuard了。
  </p>
  <p>
   Algo VPN 可在任何 Ubuntu 服务器上运行，但托管服务器的最简单方法是在 DigitalOcean 上创建一个帐户。之后，您需要下载一个 zip 文件并按照说明操作。
  </p>
  <p>
   设置完成后，您的硬盘驱动器上应该有一个新文件夹，其中包含连接到 VPN 服务器所需的一切。如果您使用的是 Mac，则可以双击 .mobileconfig 使用 IKEv2 从 Mac 连接到 VPN 服务器。
  </p>
  <p>
   如果你想尝试 WireGuard，你需要一台运行 macOS 或 Linux 或 Android 的设备。使用 WireGuard 最简单的方法是安装 Android 应用程序并将 .conf 文件添加到手机中。
  </p>
  <p>
   在 Mac 上，您需要使用 Homebrew（brew install wireguard-tools）安装 WireGuard 。然后，您可以将 myvpnserver.conf 文件移动到/etc/wireguard/ 硬盘驱动器上，并使用简单的命令行（“ wg-quick up myvpnserver”和“ wg-quick down myvpnserver”）进行连接。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7759 jetpack-lazy-image" data-lazy-sizes="(max-width: 1036px) 100vw, 1036px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=1036%2C806&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?w=1036&amp;ssl=1 1036w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=300%2C233&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=768%2C597&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=1024%2C797&amp;ssl=1 1024w" data-recalc-dims="1" height="806" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=1036%2C806&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1036"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7759" data-recalc-dims="1" height="806" sizes="(max-width: 1036px) 100vw, 1036px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=1036%2C806&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?w=1036&amp;ssl=1 1036w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=300%2C233&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=768%2C597&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-96.png?resize=1024%2C797&amp;ssl=1 1024w" width="1036"/>
   </noscript>
  </p>
  <p>
   还可以跳过终端窗口。在 macOS 上，您可以使用“脚本编辑器”应用程序创建 AppleScript，并通过启用设置中的菜单栏选项将其放在菜单栏中。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7760 jetpack-lazy-image" data-lazy-sizes="(max-width: 850px) 100vw, 850px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=850%2C364&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?w=850&amp;ssl=1 850w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=300%2C128&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=768%2C329&amp;ssl=1 768w" data-recalc-dims="1" height="364" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=850%2C364&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="850"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7760" data-recalc-dims="1" height="364" sizes="(max-width: 850px) 100vw, 850px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=850%2C364&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?w=850&amp;ssl=1 850w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=300%2C128&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-8.png?resize=768%2C329&amp;ssl=1 768w" width="850"/>
   </noscript>
  </p>
  <p>
   <span style="color: #515151;">
    此设置提供了与商用 VPN 相同的便利性，但具有更稳定的 VPN 连接。
   </span>
   <br/>
   ​
   <br/>
   W
   <a href="https://techcrunch.com/2018/12/21/you-can-now-connect-to-wireguard-vpn-servers-on-your-iphone/?guccounter=1" rel="noopener noreferrer" target="_blank">
    ireGuard is a new VPN protocol that promises to be faster and more secure at the same time. And you can now connect to a WireGuard server on iOS thanks to the official open-source app
   </a>
   .
  </p>
  <div id="atatags-1611829871-5f402e1309e05">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7758" href="https://www.iyouport.org/%e6%96%b0%e7%9a%84vpn%e5%8d%8f%e8%ae%ae/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7758" href="https://www.iyouport.org/%e6%96%b0%e7%9a%84vpn%e5%8d%8f%e8%ae%ae/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7758-5f402e130a56f" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7758&amp;origin=www.iyouport.org&amp;obj_id=161182987-7758-5f402e130a56f" id="like-post-wrapper-161182987-7758-5f402e130a56f">
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
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/vpn/" rel="tag">
     VPN
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-01-09T13:28:57+08:00">
    2019年1月9日
   </time>
   <time class="updated" datetime="2019-08-10T13:32:23+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

