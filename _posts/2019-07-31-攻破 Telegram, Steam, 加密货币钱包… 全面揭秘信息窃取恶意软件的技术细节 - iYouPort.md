---
layout: post
title: "攻破 Telegram, Steam, 加密货币钱包… 全面揭秘信息窃取恶意软件的技术细节 - iYouPort"
date: 2019-07-31T16:06:17+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%94%bb%e7%a0%b4-telegram-steam-%e5%8a%a0%e5%af%86%e8%b4%a7%e5%b8%81%e9%92%b1%e5%8c%85-%e5%85%a8%e9%9d%a2%e6%8f%ad%e7%a7%98%e4%bf%a1%e6%81%af%e7%aa%83%e5%8f%96%e6%81%b6%e6%84%8f%e8%bd%af/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-748 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-security tag-tech tag-technique tag-technology tag-tools" id="post-748">
 <header class="entry-header">
  <h1 class="entry-title">
   攻破 Telegram, Steam, 加密货币钱包… 全面揭秘信息窃取恶意软件的技术细节
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
   <time class="entry-date published" datetime="2019-08-01T00:06:17+08:00">
    2019年8月1日
   </time>
   <time class="updated" datetime="2019-05-11T23:23:02+08:00">
    2019年5月11日
   </time>
  </span>
  <span class="word-count">
   3 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      如何窃取 Telegram 数据？如何窃取 Steam 数据？如何窃取加密货币钱包？如何窃取浏览器数据？……Fumik0 对 Predator 恶意软件进行了详细分析。本文适合初级逆向工程师或恶意软件分析人员阅读，希望能让大家轻松了解恶意软件所使用的某些技术或技巧，并掌握应对方法
     </em>
    </span>
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    一、概述
   </strong>
  </p>
  <p class="graf graf--p">
   本文主要针对一个窃取用户信息的恶意软件 Predator the thief 进行深入分析，该软件使用 C/C++ 语言编写。与当今主流的恶意软件一样，该恶意软件可以作为构建器（Builder），也可以通过C&amp;C渠道下载额外的恶意软件。
  </p>
  <p class="graf graf--p">
   对这一恶意软件进行了详细分析，并对其中的一些重点功能模块进行了详细拆解和分析。本文适合初级逆向工程师或恶意软件分析人员阅读，希望通过我们的分析，能让大家轻松了解恶意软件所使用的某些技术或技巧，并掌握应对方法。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    二、信息窃取软件的典型生命周期
   </strong>
  </p>
  <p class="graf graf--p">
   对于如今的大多数信息窃取软件来说，其执行顺序几乎相同，但逃避检测技术则根据所使用的 C&amp;C 通信方式而有所不同。举例来说，在 Predator 中，设置过程非常简单，但如果攻击者在其 C&amp;C 上部署了加载程序（Loader），就会有所不同了。
  </p>
  <p class="graf graf--p">
   Predator the thief 的生命周期：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-751 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 783px) 100vw, 783px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=783%2C783&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?w=783&amp;ssl=1 783w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=768%2C768&amp;ssl=1 768w" data-recalc-dims="1" height="783" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=783%2C783&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="783"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-751 size-full" data-recalc-dims="1" height="783" sizes="(max-width: 783px) 100vw, 783px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=783%2C783&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?w=783&amp;ssl=1 783w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=150%2C150&amp;ssl=1 150w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=300%2C300&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-27.png?resize=768%2C768&amp;ssl=1 768w" width="783"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    三、准备阶段
   </strong>
  </p>
  <p class="graf graf--p">
   在窃取敏感数据之前，Predator 首先需要进行一些基本的设置才能正常工作。所有的配置，都是逐步加载到内存之中的。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-752 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1056px) 100vw, 1056px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=1056%2C737&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?w=1056&amp;ssl=1 1056w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=300%2C209&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=768%2C536&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=1024%2C715&amp;ssl=1 1024w" data-recalc-dims="1" height="737" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=1056%2C737&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1056"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-752 size-full" data-recalc-dims="1" height="737" sizes="(max-width: 1056px) 100vw, 1056px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=1056%2C737&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?w=1056&amp;ssl=1 1056w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=300%2C209&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=768%2C536&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-28.png?resize=1024%2C715&amp;ssl=1 1024w" width="1056"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   我们将断点设置在 0x00472866 的位置，并检查代码：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-753 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 355px) 100vw, 355px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?resize=355%2C745&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?w=355&amp;ssl=1 355w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?resize=143%2C300&amp;ssl=1 143w" data-recalc-dims="1" height="745" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?resize=355%2C745&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="355"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-753 size-full" data-recalc-dims="1" height="745" sizes="(max-width: 355px) 100vw, 355px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?resize=355%2C745&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?w=355&amp;ssl=1 355w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-29.png?resize=143%2C300&amp;ssl=1 143w" width="355"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   1、EBX 设置为循环的长度（在我们所分析的样本中，长度为 0x0F）；
  </p>
  <p class="graf graf--p">
   2、ESI 保存所有函数地址；
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-754 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 545px) 100vw, 545px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?resize=545%2C107&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?w=545&amp;ssl=1 545w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?resize=300%2C59&amp;ssl=1 300w" data-recalc-dims="1" height="107" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?resize=545%2C107&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="545"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-754 size-full" data-recalc-dims="1" height="107" sizes="(max-width: 545px) 100vw, 545px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?resize=545%2C107&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?w=545&amp;ssl=1 545w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-30.png?resize=300%2C59&amp;ssl=1 300w" width="545"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   3、EAX 将从 ESI 获取一个地址，并将其移动到 EBP-8；
  </p>
  <p class="graf graf--p">
   4、调用 EBP（在这时，配置函数将解压缩一些数据，并将其保存到栈中）；
  </p>
  <p class="graf graf--p">
   5、ESI 的位置现在提前4位；
  </p>
  <p class="graf graf--p">
   6、EDI 递增，直至该值与 EBX 值相等；
  </p>
  <p class="graf graf--p">
   7、当 EDI == EBX 时，也就表示所有必须的配置值都已经存储到栈中。此时，恶意软件的主要部分便可以启动。
  </p>
  <p class="graf graf--p">
   举例来说，我们看看 00488278 位置的 0040101D 中的内容。
  </p>
  <p class="graf graf--p">
   通过x32dbg，使用简单的命令就可以进行查看。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">go 0x0040101D</span></pre>
  <p class="graf graf--p">
   如我们所见，这是C&amp;C存储的位置，该内容已经保存到了栈中。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-755 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 777px) 100vw, 777px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=777%2C256&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?w=777&amp;ssl=1 777w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=300%2C99&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=768%2C253&amp;ssl=1 768w" data-recalc-dims="1" height="256" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=777%2C256&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="777"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-755 size-full" data-recalc-dims="1" height="256" sizes="(max-width: 777px) 100vw, 777px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=777%2C256&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?w=777&amp;ssl=1 777w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=300%2C99&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-31.png?resize=768%2C253&amp;ssl=1 768w" width="777"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   恶意软件使用这种方式，存储如下内容：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    C&amp;C 域名
   </li>
   <li class="graf graf--li">
    %APPDATA% 文件夹
   </li>
   <li class="graf graf--li">
    Predator 文件夹
   </li>
   <li class="graf graf--li">
    Predator 压缩文件的临时名称和位置
   </li>
   <li class="graf graf--li">
    发送给 C&amp;C 服务器的压缩文件名称
   </li>
   <li class="graf graf--li">
    等等…
   </li>
  </ul>
  <p class="graf graf--p">
   恶意软件在 %APPDATA%/Roaming 路径下创建 Predator 文件夹（\ptst）。值得注意的是，其名称是通过 XOR 操作后的硬编码字符串保存的，而并非随机生成。我们猜测，这有可能是 “Predator The Stealer” 的快捷方式。
  </p>
  <p class="graf graf--p">
   信息窃取过程中，临时存档的文件名为“
   <a class="markup--anchor markup--p-anchor" data-href="http://zpar.zip/" href="http://zpar.zip/" rel="noreferrer noopener" target="_blank">
    zpar.zip
   </a>
   ”。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    四、反逆向机制
   </strong>
  </p>
  <p class="graf graf--p">
   当我们终于来到恶意软件的主要模块时，发现寻址获得的结果是一个循环 0x06400000 次的文本。这应该是恶意软件设计的反逆向工程机制。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-756 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 900px) 100vw, 900px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=900%2C575&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?w=900&amp;ssl=1 900w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=300%2C192&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=768%2C491&amp;ssl=1 768w" data-recalc-dims="1" height="575" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=900%2C575&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="900"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-756 size-full" data-recalc-dims="1" height="575" sizes="(max-width: 900px) 100vw, 900px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=900%2C575&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?w=900&amp;ssl=1 900w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=300%2C192&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-32.png?resize=768%2C491&amp;ssl=1 768w" width="900"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    五、混淆技术
   </strong>
  </p>
  <p class="graf graf--p">
   5.1 大规模使用的 XOR 操作
  </p>
  <p class="graf graf--p">
   在分析中我们发现，该样本中几乎所有字符串都经过了 XOR 操作。但是，这种混淆技术很容易发现，并且是最易于解密的一种方式。在这里，XOR 操作的目的只是为了减慢恶意软件分析的速度。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-757 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 339px) 100vw, 339px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?resize=339%2C252&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?w=339&amp;ssl=1 339w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?resize=300%2C223&amp;ssl=1 300w" data-recalc-dims="1" height="252" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?resize=339%2C252&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="339"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-757 size-full" data-recalc-dims="1" height="252" sizes="(max-width: 339px) 100vw, 339px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?resize=339%2C252&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?w=339&amp;ssl=1 339w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-33.png?resize=300%2C223&amp;ssl=1 300w" width="339"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    5.2 使用 GetProcAddress 的替代方案
   </strong>
  </p>
  <p class="graf graf--p">
   为了避免直接调用来自不同库的模块，恶意软件使用一些传统的机制，逐一搜索特定的API请求，并将其存储到寄存器中。此外，它还允许将对模块的直接调用隐藏到简单的寄存器调用中。
  </p>
  <p class="graf graf--p">
   首先，解密 XOR 运算后的字符串（一个DLL）。针对这种情况，恶意软件要调用的特定模块需要用到 kernel32.dll。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-758 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 586px) 100vw, 586px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?resize=586%2C491&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?w=586&amp;ssl=1 586w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?resize=300%2C251&amp;ssl=1 300w" data-recalc-dims="1" height="491" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?resize=586%2C491&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="586"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-758 size-full" data-recalc-dims="1" height="491" sizes="(max-width: 586px) 100vw, 586px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?resize=586%2C491&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?w=586&amp;ssl=1 586w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-34.png?resize=300%2C251&amp;ssl=1 300w" width="586"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   解密完成后，该库使用 LoadLibraryA 进行加载。随后，明文内容 “CreateDirectoryA” 被 PUSH 到 EDX 中，这是恶意软件需要使用到的模块。
  </p>
  <p class="graf graf--p">
   现在，恶意软件需要从 kernel32.dll 中检索并导出函数 CreateDirectoryA 的地址。通常，需要通过 GetProcAddress 来实现。但由于 GetProcAddress 是众多安全防护机制重点关注的目标，该恶意软件换用了另一种方式来获取该值。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-759 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 466px) 100vw, 466px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?resize=466%2C271&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?w=466&amp;ssl=1 466w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?resize=300%2C174&amp;ssl=1 300w" data-recalc-dims="1" height="271" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?resize=466%2C271&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="466"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-759 size-full" data-recalc-dims="1" height="271" sizes="(max-width: 466px) 100vw, 466px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?resize=466%2C271&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?w=466&amp;ssl=1 466w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-35.png?resize=300%2C174&amp;ssl=1 300w" width="466"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   该字符串和 kernel32.dll 的 IMAGE_DOS_HEADER 都将一起被发送到 func_GetProcesAddress_0。我们可以在导出表（Export Table）的帮助下，手动获取到想要的函数地址的指针。我们接下来仔细查看其中的代码。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">struct IMAGE_EXPORT_DIRECTORY {</span>
<span style="font-family: 'courier new', courier, monospace;">       long Characteristics;</span>
<span style="font-family: 'courier new', courier, monospace;">       long TimeDateStamp;</span>
<span style="font-family: 'courier new', courier, monospace;">       short MajorVersion;</span>
<span style="font-family: 'courier new', courier, monospace;">       short MinorVersion;</span>
<span style="font-family: 'courier new', courier, monospace;">       long Name;</span>
<span style="font-family: 'courier new', courier, monospace;">       long Base;</span>
<span style="font-family: 'courier new', courier, monospace;">       long NumberOfFunctions;</span>
<span style="font-family: 'courier new', courier, monospace;">       long NumberOfNames;</span>
<span style="font-family: 'courier new', courier, monospace;">       long *AddressOfFunctions;    &lt;= This good boy</span>
<span style="font-family: 'courier new', courier, monospace;">       long *AddressOfNames;        &lt;= This good boy</span>
<span style="font-family: 'courier new', courier, monospace;">       long *AddressOfNameOrdinals; &lt;= This good boy</span>
<span style="font-family: 'courier new', courier, monospace;">}</span></pre>
  <p class="graf graf--p">
   结构IMAGE_EXPORT_DIRECTORY中，必须要包含三个字段：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    AddressOfFunctions：包含模块中函数相对值地址（RVA）的数组；
   </li>
   <li class="graf graf--li">
    AddressOfNames：包含模块中所有函数的数组，以升序排列；
   </li>
   <li class="graf graf--li">
    AddressOfNamesOrdinals：一个16位数组，其中包含 AddressOfNames 所有相关的函数名称。
   </li>
  </ul>
  <p class="graf graf--p">
   源代码：
   <a class="markup--anchor markup--p-anchor" data-href="https://en.wikibooks.org/wiki/X86_Disassembly/Windows_Executable_Files" href="https://en.wikibooks.org/wiki/X86_Disassembly/Windows_Executable_Files" rel="noreferrer noopener" target="_blank">
    https://en.wikibooks.org/wiki/X86_Disassembly/Windows_Executable_Files
   </a>
  </p>
  <p class="graf graf--p">
   在保存了这三个数组的绝对位置后，循环过程非常简单。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-760 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 540px) 100vw, 540px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?resize=540%2C323&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?w=540&amp;ssl=1 540w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?resize=300%2C179&amp;ssl=1 300w" data-recalc-dims="1" height="323" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?resize=540%2C323&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="540"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-760 size-full" data-recalc-dims="1" height="323" sizes="(max-width: 540px) 100vw, 540px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?resize=540%2C323&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?w=540&amp;ssl=1 540w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-36.png?resize=300%2C179&amp;ssl=1 300w" width="540"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   1、抓取一个函数的相对值地址（RVA）；
  </p>
  <p class="graf graf--p">
   2、获取该函数的名称；
  </p>
  <p class="graf graf--p">
   3、将字符串与所需字符串进行比较。
  </p>
  <p class="graf graf--p">
   在这里，详细分析一下其实现方式：
  </p>
  <p class="graf graf--p">
   如果我们对 ds:[eax+edx*4] 进行仔细查看，发现其中存储了 kernel32.dll 导出表函数的所有相对值地址。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-761 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 537px) 100vw, 537px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?resize=537%2C277&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?w=537&amp;ssl=1 537w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?resize=300%2C155&amp;ssl=1 300w" data-recalc-dims="1" height="277" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?resize=537%2C277&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="537"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-761 size-full" data-recalc-dims="1" height="277" sizes="(max-width: 537px) 100vw, 537px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?resize=537%2C277&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?w=537&amp;ssl=1 537w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-37.png?resize=300%2C155&amp;ssl=1 300w" width="537"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   下一条指令是 eax,ecx，用于计算 AddressOfNames 数组中字符串值的准确位置。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">DLLBaseAddress + AddressOfNameRVA[i] = Function Name</span>
<span style="font-family: 'courier new', courier, monospace;">   751F0000    +       0C41D4        = CreateDirectoryA</span>

<img alt="" class="aligncenter wp-image-762 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 533px) 100vw, 533px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?resize=533%2C270&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?w=533&amp;ssl=1 533w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?resize=300%2C152&amp;ssl=1 300w" data-recalc-dims="1" height="270" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?resize=533%2C270&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="533"/><noscript><img alt="" class="aligncenter wp-image-762 size-full" data-recalc-dims="1" height="270" sizes="(max-width: 533px) 100vw, 533px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?resize=533%2C270&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?w=533&amp;ssl=1 533w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-38.png?resize=300%2C152&amp;ssl=1 300w" width="533"/></noscript></pre>
  <p class="graf graf--p">
   经过比较后，发现二者匹配，所以对 procAddress 进行存储。首先，保存函数的序号（Ordinal Number），然后借助该值，获取函数地址位置，并保存到ESI中。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">ADD           ESI, ECX</span>
<span style="font-family: 'courier new', courier, monospace;">ProcAddress = Function Address + DLLBaseAddress</span></pre>
  <p class="graf graf--p">
   经过反汇编后，大致如下：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-763 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 635px) 100vw, 635px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?resize=635%2C198&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?w=635&amp;ssl=1 635w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?resize=300%2C94&amp;ssl=1 300w" data-recalc-dims="1" height="198" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?resize=635%2C198&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="635"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-763 size-full" data-recalc-dims="1" height="198" sizes="(max-width: 635px) 100vw, 635px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?resize=635%2C198&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?w=635&amp;ssl=1 635w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-39.png?resize=300%2C94&amp;ssl=1 300w" width="635"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   procAddress 的代码如下：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-764 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 730px) 100vw, 730px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?resize=730%2C92&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?w=730&amp;ssl=1 730w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?resize=300%2C38&amp;ssl=1 300w" data-recalc-dims="1" height="92" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?resize=730%2C92&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="730"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-764 size-full" data-recalc-dims="1" height="92" sizes="(max-width: 730px) 100vw, 730px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?resize=730%2C92&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?w=730&amp;ssl=1 730w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-40.png?resize=300%2C38&amp;ssl=1 300w" width="730"/>
   </noscript>
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-765 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 371px) 100vw, 371px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?resize=371%2C193&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?w=371&amp;ssl=1 371w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?resize=300%2C156&amp;ssl=1 300w" data-recalc-dims="1" height="193" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?resize=371%2C193&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="371"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-765 size-full" data-recalc-dims="1" height="193" sizes="(max-width: 371px) 100vw, 371px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?resize=371%2C193&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?w=371&amp;ssl=1 371w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-41.png?resize=300%2C156&amp;ssl=1 300w" width="371"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   至此，一切妥当，函数的地址已经保存到EAX中，只需要等待调用即可。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    六、反虚拟机技术
   </strong>
  </p>
  <p class="graf graf--p">
   在这里，使用了一个简单的反虚拟机技术，来防止恶意软件在虚拟机上运行。这也是 Predator 所使用的唯一的反分析技术。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-766 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 725px) 100vw, 725px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?resize=725%2C540&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?w=725&amp;ssl=1 725w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?resize=300%2C223&amp;ssl=1 300w" data-recalc-dims="1" height="540" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?resize=725%2C540&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="725"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-766 size-full" data-recalc-dims="1" height="540" sizes="(max-width: 725px) 100vw, 725px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?resize=725%2C540&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?w=725&amp;ssl=1 725w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-42.png?resize=300%2C223&amp;ssl=1 300w" width="725"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   首先，通过 LoadLibraryA，动态加载 User32.dll（经过 XOR 处理），然后使用 User32.dll 请求 EnumDisplayDevicesA 模块。在这里，恶意软件希望获取当前使用显示器的“设备描述”值。
  </p>
  <p class="graf graf--p">
   完成后，将该结果与一些特定值进行比对（同样经过了 XOR 处理）：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Hyper-V</span>
<span style="font-family: 'courier new', courier, monospace;">VMware</span>
<span style="font-family: 'courier new', courier, monospace;">VirtualBox</span>

<img alt="" class="aligncenter wp-image-767 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 653px) 100vw, 653px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?resize=653%2C556&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?w=653&amp;ssl=1 653w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?resize=300%2C255&amp;ssl=1 300w" data-recalc-dims="1" height="556" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?resize=653%2C556&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="653"/><noscript><img alt="" class="aligncenter wp-image-767 size-full" data-recalc-dims="1" height="556" sizes="(max-width: 653px) 100vw, 653px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?resize=653%2C556&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?w=653&amp;ssl=1 653w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-43.png?resize=300%2C255&amp;ssl=1 300w" width="653"/></noscript></pre>
  <p class="graf graf--p">
   如果字符串匹配，那么就会重定向到名为 func_VmDetectedGoodBye 的函数。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    如何绕过这种反虚拟机技术？
   </strong>
  </p>
  <p class="graf graf--p">
   为了绕过恶意软件的这种检测技术，我们将 DriverDesc的REG_SZ 值修改为 {4d36e968-e325–11ce-bfc1–08002be10318}。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-768 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1100%2C462&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?w=1102&amp;ssl=1 1102w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=300%2C126&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=768%2C323&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1024%2C430&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1100%2C462&amp;ssl=1 1100w" data-recalc-dims="1" height="462" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1100%2C462&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-768 size-full" data-recalc-dims="1" height="462" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1100%2C462&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?w=1102&amp;ssl=1 1102w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=300%2C126&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=768%2C323&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1024%2C430&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-44.png?resize=1100%2C462&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   然后，便成功绕过了这一检测。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-769 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 956px) 100vw, 956px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=956%2C335&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?w=956&amp;ssl=1 956w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=300%2C105&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=768%2C269&amp;ssl=1 768w" data-recalc-dims="1" height="335" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=956%2C335&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="956"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-769 size-full" data-recalc-dims="1" height="335" sizes="(max-width: 956px) 100vw, 956px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=956%2C335&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?w=956&amp;ssl=1 956w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=300%2C105&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-45.png?resize=768%2C269&amp;ssl=1 768w" width="956"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    七、信息窃取部分
   </strong>
  </p>
  <p class="graf graf--p">
   接下来，我们分析这一恶意软件的主要目的，也就是它如何完成信息窃取的。目前，我对大部分代码进行了反汇编，得到了恶意软件在 ptst 存储库上设置的所有文件夹，并将其压缩后发送到 C&amp;C 服务器。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    文件夹
   </strong>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Files：保存特定路径中所有文本或文档文件。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   FileZilla：从FTP中获取1–2个文件。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   WinFTP：从FTP中获取1个文件。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Cookies：保存来自不同浏览器的Cookie内容。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   General：通用数据。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Steam：窃取账户登录信息。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Discord：窃取账户登录信息。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    文件
   </strong>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Information.log
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ·
   </strong>
   Screenshot.jpeg：当前屏幕截图。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.1 窃取Telegram数据
   </strong>
  </p>
  <p class="graf graf--p">
   恶意软件通过检查计算机上是否存在KeyPath“Software\Microsoft\Windows\CurrentVersion\Uninstall\{53F49750–6209–4FBF-9CA8–7A333C87D1ED}_is1”的方法，来验证计算机是否安装 了Telegram。
  </p>
  <p class="graf graf--p">
   那么，这个 KeyPath 中的内容是什么呢？在深入分析代码后，我们发现恶意软件会获取 InstallLocation 的值，这是主机上 Telegram 的安装位置。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-770 jetpack-lazy-image" data-lazy-sizes="(max-width: 688px) 100vw, 688px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?resize=688%2C402&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?w=688&amp;ssl=1 688w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?resize=300%2C175&amp;ssl=1 300w" data-recalc-dims="1" height="402" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?resize=688%2C402&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="688"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-770" data-recalc-dims="1" height="402" sizes="(max-width: 688px) 100vw, 688px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?resize=688%2C402&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?w=688&amp;ssl=1 688w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-46.png?resize=300%2C175&amp;ssl=1 300w" width="688"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   重新创建路径（在这里，所有字符串也都被异或）
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">%TELEGRAM_PATH%</span>
<span style="font-family: 'courier new', courier, monospace;">\Telegram Desktop</span>
<span style="font-family: 'courier new', courier, monospace;">\tdata</span>
<span style="font-family: 'courier new', courier, monospace;">\D877F783D5D3EF8C</span></pre>
  <p>
   <img alt="" class="aligncenter size-full wp-image-771 jetpack-lazy-image" data-lazy-sizes="(max-width: 630px) 100vw, 630px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?resize=630%2C663&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?w=630&amp;ssl=1 630w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?resize=285%2C300&amp;ssl=1 285w" data-recalc-dims="1" height="663" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?resize=630%2C663&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="630"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-771" data-recalc-dims="1" height="663" sizes="(max-width: 630px) 100vw, 630px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?resize=630%2C663&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?w=630&amp;ssl=1 630w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-47.png?resize=285%2C300&amp;ssl=1 285w" width="630"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   文件夹 D877F783D5D3EF8C 是存储所有 Telegram 缓存的位置，这也是恶意软件想要获取的敏感数据。此外，在此过程中，还会检查 map*文件（例如 map1），该文件实际上是加密密钥。所以，攻击者如果获取到这一文件夹中的内容，就能够访问目标用户的应用软件数据。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.2 窃取 Steam 数据
   </strong>
  </p>
  <p class="graf graf--p">
   该恶意软件用于窃取某个特定软件中数据的技术，在大多数情况下都是类似的。这样一来，就能极大的帮助我们理解这一恶意软件。
  </p>
  <p class="graf graf--p">
   首先，恶意软件检查 HKCU\Software\Valve\Steam中的SteamPath 键值，获取正确的 Steam 存储位置。在获取该位置之后，才能进一步找到保存 Steam 账户信息的相关文件。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-772 jetpack-lazy-image" data-lazy-sizes="(max-width: 556px) 100vw, 556px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?resize=556%2C162&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?w=556&amp;ssl=1 556w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?resize=300%2C87&amp;ssl=1 300w" data-recalc-dims="1" height="162" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?resize=556%2C162&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="556"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-772" data-recalc-dims="1" height="162" sizes="(max-width: 556px) 100vw, 556px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?resize=556%2C162&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?w=556&amp;ssl=1 556w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-48.png?resize=300%2C87&amp;ssl=1 300w" width="556"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   通过 func_FindFiles，检查计算机上是否存在 ssfn 文件。如果存在，会将其复制到位于 %APPDATA%/XXXX 的恶意软件临时文件夹中。同样，针对 config.vdf 也进行相同的操作。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-773 jetpack-lazy-image" data-lazy-sizes="(max-width: 637px) 100vw, 637px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?resize=637%2C726&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?w=637&amp;ssl=1 637w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?resize=263%2C300&amp;ssl=1 263w" data-recalc-dims="1" height="726" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?resize=637%2C726&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="637"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-773" data-recalc-dims="1" height="726" sizes="(max-width: 637px) 100vw, 637px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?resize=637%2C726&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?w=637&amp;ssl=1 637w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-49.png?resize=263%2C300&amp;ssl=1 263w" width="637"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   那么，这些文件有什么意义呢？经过搜索，我们发现了 Reddit 上的一篇文章，主要介绍了 ssfn 文件允许在用户登录期间绕过 SteamGuard 防护机制。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-774 jetpack-lazy-image" data-lazy-sizes="(max-width: 899px) 100vw, 899px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=899%2C386&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?w=899&amp;ssl=1 899w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=300%2C129&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=768%2C330&amp;ssl=1 768w" data-recalc-dims="1" height="386" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=899%2C386&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="899"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-774" data-recalc-dims="1" height="386" sizes="(max-width: 899px) 100vw, 899px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=899%2C386&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?w=899&amp;ssl=1 899w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=300%2C129&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-50.png?resize=768%2C330&amp;ssl=1 768w" width="899"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   那么，第二个文件的作用呢？在这里，可以找到关于用户账户，以及计算机上安装的所有应用程序的相关信息。此外，如果找到了有效的 ConnectCache 字段，就可以在不经 Steam 身份验证的情况下登录账户。其内容类似如下：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">"ConnectCache"</span>
<span style="font-family: 'courier new', courier, monospace;">{</span>
<span style="font-family: 'courier new', courier, monospace;">       "STEAM_USERNAME_IN_CRC32_FORMAT" "SOME_HEX_STUFF"</span>
<span style="font-family: 'courier new', courier, monospace;">}</span></pre>
  <p class="graf graf--p">
   攻击者想要窃取的最后一个文件是 loginusers.vdf。该文件有多种用途，但最主要的是用于手动对离线状态的账户进行设置。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-775 jetpack-lazy-image" data-lazy-sizes="(max-width: 399px) 100vw, 399px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?resize=399%2C211&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?w=399&amp;ssl=1 399w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?resize=300%2C159&amp;ssl=1 300w" data-recalc-dims="1" height="211" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?resize=399%2C211&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="399"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-775" data-recalc-dims="1" height="211" sizes="(max-width: 399px) 100vw, 399px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?resize=399%2C211&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?w=399&amp;ssl=1 399w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-51.png?resize=300%2C159&amp;ssl=1 300w" width="399"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   有关 Steam 信息窃取的更多详情，Kapersky 曾经发布过一次非常
   <a class="markup--anchor markup--p-anchor" data-href="https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07191212/Steam_Stealers_research_ENG.pdf" href="https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2018/03/07191212/Steam_Stealers_research_ENG.pdf" rel="noopener noreferrer" target="_blank">
    完整的分析
   </a>
   。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.3 窃取加密货币钱包
   </strong>
  </p>
  <p class="graf graf--p">
   该恶意软件支持窃取多个数字钱包，包括：Ethereum、Multibit、Electrum、Armory、Bytecoin、Bitcoin 等。
  </p>
  <p class="graf graf--p">
   与之前一样，相关的文件都经过了 XOR 操作。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-776 jetpack-lazy-image" data-lazy-sizes="(max-width: 595px) 100vw, 595px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?resize=595%2C232&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?w=595&amp;ssl=1 595w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?resize=300%2C117&amp;ssl=1 300w" data-recalc-dims="1" height="232" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?resize=595%2C232&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="595"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-776" data-recalc-dims="1" height="232" sizes="(max-width: 595px) 100vw, 595px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?resize=595%2C232&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?w=595&amp;ssl=1 595w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-52.png?resize=300%2C117&amp;ssl=1 300w" width="595"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.4 窃取FTP软件数据
   </strong>
  </p>
  <p class="graf graf--p">
   该恶意软件支持对两个 FTP 软件的信息窃取，包括 FileZilla 和 WinFTP。
  </p>
  <p class="graf graf--p">
   这部分模块非常简单，只会对以下3个文件进行搜索，如果找到，会将其复制，以实现窃取过程：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">%APPDATA%\Filezilla\sitemanager.xml</span>
<span style="font-family: 'courier new', courier, monospace;">%APPDATA%\Filezilla\recentservers.xml</span>
<span style="font-family: 'courier new', courier, monospace;">%PROGRAMFILES%\WinFtp Client\Favorites.dat</span>

<img alt="" class="aligncenter size-full wp-image-777 jetpack-lazy-image" data-lazy-sizes="(max-width: 517px) 100vw, 517px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?resize=517%2C147&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?w=517&amp;ssl=1 517w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?resize=300%2C85&amp;ssl=1 300w" data-recalc-dims="1" height="147" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?resize=517%2C147&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="517"/><noscript><img alt="" class="aligncenter size-full wp-image-777" data-recalc-dims="1" height="147" sizes="(max-width: 517px) 100vw, 517px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?resize=517%2C147&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?w=517&amp;ssl=1 517w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-53.png?resize=300%2C85&amp;ssl=1 300w" width="517"/></noscript></pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.5 窃取浏览器数据
   </strong>
  </p>
  <p class="graf graf--p">
   在本文，将不对恶意软件窃取浏览器数据的过程做过多解释，因为目前已经有很多文章都详细解释了此类型恶意软件是如何获取Web数据的。建议大家阅读
   <a class="markup--anchor markup--p-anchor" data-href="https://thisissecurity.stormshield.com/2018/08/28/acridrain-stealer/" href="https://thisissecurity.stormshield.com/2018/08/28/acridrain-stealer/" rel="noopener noreferrer" target="_blank">
    @coldshell撰写的文章
   </a>
   。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Predator 的主要目标是如今流行的 Chrome、Firefox 和 Opera 浏览器。该恶意软件支持对众多浏览器进行信息窃取
   </strong>
   ，包括：Amigo、BlackHawk、Chromium、Comodo Dragon、Cyberfox、Epic Privacy Browser、Google Chrome、IceCat、K-Meleon、Kometa、Maxthon5、Mozilla Firefox、Nichrome、Opera、Orbitum、Pale Moon、Sputnik、Torch、Vivaldi、Waterfox。
  </p>
  <p class="graf graf--p">
   恶意软件使用 SQLite，从浏览器中提取数据，并将其保存到名为 vlmi{lulz}yg.col 的临时文件中。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-778 jetpack-lazy-image" data-lazy-sizes="(max-width: 465px) 100vw, 465px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?resize=465%2C404&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?w=465&amp;ssl=1 465w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?resize=300%2C261&amp;ssl=1 300w" data-recalc-dims="1" height="404" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?resize=465%2C404&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="465"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-778" data-recalc-dims="1" height="404" sizes="(max-width: 465px) 100vw, 465px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?resize=465%2C404&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?w=465&amp;ssl=1 465w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-54.png?resize=300%2C261&amp;ssl=1 300w" width="465"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   该过程非常简单：
  </p>
  <ol class="postList">
   <li class="graf graf--li">
    窃取 SQL 浏览器文件；
   </li>
   <li class="graf graf--li">
    通过 SQLite，将提取到的数据保存到临时文件中；
   </li>
   <li class="graf graf--li">
    读取文件，并将其中的内容保存到特定名称的文本文件中（针对每种浏览器创建一个文件）。
   </li>
  </ol>
  <pre class="graf graf--pre"><img alt="" class="aligncenter size-full wp-image-779 jetpack-lazy-image" data-lazy-sizes="(max-width: 596px) 100vw, 596px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?resize=596%2C132&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?w=596&amp;ssl=1 596w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?resize=300%2C66&amp;ssl=1 300w" data-recalc-dims="1" height="132" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?resize=596%2C132&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="596"/><noscript><img alt="" class="aligncenter size-full wp-image-779" data-recalc-dims="1" height="132" sizes="(max-width: 596px) 100vw, 596px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?resize=596%2C132&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?w=596&amp;ssl=1 596w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-55.png?resize=300%2C66&amp;ssl=1 300w" width="596"/></noscript></pre>
  <p class="graf graf--p">
   如果找到表单数据或身份认证凭据，则会将这部分内容保存到通用存储库的相应文件（forms.log、password.log、cards.log）中。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-780 jetpack-lazy-image" data-lazy-sizes="(max-width: 594px) 100vw, 594px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?resize=594%2C127&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?w=594&amp;ssl=1 594w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?resize=300%2C64&amp;ssl=1 300w" data-recalc-dims="1" height="127" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?resize=594%2C127&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="594"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-780" data-recalc-dims="1" height="127" sizes="(max-width: 594px) 100vw, 594px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?resize=594%2C127&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?w=594&amp;ssl=1 594w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-56.png?resize=300%2C64&amp;ssl=1 300w" width="594"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.6 窃取 Discord 数据
   </strong>
  </p>
  <p class="graf graf--p">
   如果检测到计算机上安装了 Discord，恶意软件将搜索 https_discordapp_*localstorage，并将其复制到 ptst 文件夹中。该文件包含所有关于账户的敏感信息，如果将该文件复制到攻击者计算机的正确目录中，那么攻击者可以无需身份验证直接进行登录。
  </p>
  <pre class="graf graf--pre"><img alt="" class="aligncenter size-full wp-image-781 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1100%2C753&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?w=1312&amp;ssl=1 1312w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=300%2C205&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=768%2C526&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1024%2C701&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1100%2C753&amp;ssl=1 1100w" data-recalc-dims="1" height="753" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1100%2C753&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/><noscript><img alt="" class="aligncenter size-full wp-image-781" data-recalc-dims="1" height="753" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1100%2C753&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?w=1312&amp;ssl=1 1312w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=300%2C205&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=768%2C526&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1024%2C701&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.jpeg?resize=1100%2C753&amp;ssl=1 1100w" width="1100"/></noscript></pre>
  <p class="graf graf--p">
   Predator 会对多个位置进行检查。主要将窃取3个文件夹（Desktop、Downloads、Documents）中的数据。每次，其执行的任务都是相同的，会通过 GetFileAttributesA 搜索4种类型的文件：*.doc、*.docx、*.txt、*.log。
  </p>
  <p class="graf graf--p">
   如果找到，就会将其复制到名为 Files 的文件夹内。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    7.7 产生 Information.log
   </strong>
  </p>
  <p class="graf graf--p">
   在上述任务完成后，恶意软件将生成摘要文件，该文件包含被感染计算机的特定和敏感数据。其中，DFIR 文件适用于标识恶意软件名称的组件，其中包含恶意软件的名称和版本信息。
  </p>
  <p class="graf graf--p">
   首先，向该文件中写入被感染计算机的用户名称、计算机名称和操作系统版本：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">User name: lolilol</span>
<span style="font-family: 'courier new', courier, monospace;">Machine name: Computer</span>
<span style="font-family: 'courier new', courier, monospace;">OS version: Windoge 10</span></pre>
  <p class="graf graf--p">
   随后，通过 GetClipBoardData 复制剪贴板中的内容：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Current clipboard:</span>
<span style="font-family: 'courier new', courier, monospace;">--------------</span>
<span style="font-family: 'courier new', courier, monospace;">Omelette du fromage</span></pre>
  <p class="graf graf--p">
   保存启动目录下的内容：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Startup folder: C:\Users\lolilol\AppData\Local\Temp\predator.exe</span></pre>
  <p class="graf graf--p">
   将计算机的一些硬件信息保存到文件中：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">CPU info: Some bad CPU | Amount of kernels: 128 (Current CPU usage: 46.112917%)</span>
<span style="font-family: 'courier new', courier, monospace;">GPU info: Fumik0_ graphical display</span>
<span style="font-family: 'courier new', courier, monospace;">Amount of RAM: 12 GB (Current RAM usage: 240 MB)</span>
<span style="font-family: 'courier new', courier, monospace;">Screen resolution: 1900x1005</span></pre>
  <p class="graf graf--p">
   列出计算机上所有账户：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Computer users:</span>
<span style="font-family: 'courier new', courier, monospace;">lolilol</span>
<span style="font-family: 'courier new', courier, monospace;">Administrator</span>
<span style="font-family: 'courier new', courier, monospace;">All Users</span>
<span style="font-family: 'courier new', courier, monospace;">Default</span>
<span style="font-family: 'courier new', courier, monospace;">Default User</span>
<span style="font-family: 'courier new', courier, monospace;">Public</span></pre>
  <p class="graf graf--p">
   接下来的一部分内容，是一些看上去非常奇怪的外部信息，我们没有对这部分信息进行深入猜测。这部分内容是在 Payload 中进行了硬编码。
  </p>
  <pre class="graf graf--pre"><img alt="" class="aligncenter size-full wp-image-782 jetpack-lazy-image" data-lazy-sizes="(max-width: 591px) 100vw, 591px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?resize=591%2C532&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?w=591&amp;ssl=1 591w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?resize=300%2C270&amp;ssl=1 300w" data-recalc-dims="1" height="532" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?resize=591%2C532&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="591"/><noscript><img alt="" class="aligncenter size-full wp-image-782" data-recalc-dims="1" height="532" sizes="(max-width: 591px) 100vw, 591px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?resize=591%2C532&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?w=591&amp;ssl=1 591w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-57.png?resize=300%2C270&amp;ssl=1 300w" width="591"/></noscript></pre>
  <p class="graf graf--p">
   最后一部分奇怪的信息，是在被感染主机执行信息窃取操作的事件，这个信息可能用于恶意软件开发者调试功能。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Additional information:</span>
<span style="font-family: 'courier new', courier, monospace;">Compile time: Aug 31 2018</span>
<span style="font-family: 'courier new', courier, monospace;">Grabbing time: 0.359375 second(s)</span></pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    八、C&amp;C 通信
   </strong>
  </p>
  <p class="graf graf--p">
   为了记录 Information.log，将会使用 GET 请求，获取一些被感染用户的网络数据。
  </p>
  <p class="graf graf--p">
   首先，在请求中设置如下内容：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">User-agent</span>
<span style="font-family: 'courier new', courier, monospace;">Content-type</span></pre>
  <pre class="graf graf--pre"><img alt="" class="aligncenter size-full wp-image-783 jetpack-lazy-image" data-lazy-sizes="(max-width: 780px) 100vw, 780px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=780%2C286&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?w=780&amp;ssl=1 780w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=300%2C110&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=768%2C282&amp;ssl=1 768w" data-recalc-dims="1" height="286" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=780%2C286&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="780"/><noscript><img alt="" class="aligncenter size-full wp-image-783" data-recalc-dims="1" height="286" sizes="(max-width: 780px) 100vw, 780px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=780%2C286&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?w=780&amp;ssl=1 780w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=300%2C110&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-58.png?resize=768%2C282&amp;ssl=1 768w" width="780"/></noscript></pre>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">API URL ( /api/info.get )</span></pre>
  <p class="graf graf--p">
   最终得到结果如下所示：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Amsterdam;Netherlands;52.3702;4.89517;51.15.43.205;Europe/Amsterdam;1012;</span></pre>
  <p class="graf graf--p">
   当请求完成后，恶意软件使用循环和判断语句，合并所获得的数据。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-784 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1100%2C280&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?w=1634&amp;ssl=1 1634w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=300%2C76&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=768%2C196&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1024%2C261&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1100%2C280&amp;ssl=1 1100w" data-recalc-dims="1" height="280" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1100%2C280&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-784" data-recalc-dims="1" height="280" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1100%2C280&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?w=1634&amp;ssl=1 1634w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=300%2C76&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=768%2C196&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1024%2C261&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-59.png?resize=1100%2C280&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   任务完成后，将保存到 Information.log 中。
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">City: Nopeland</span>
<span style="font-family: 'courier new', courier, monospace;">Country:  NopeCountry</span>
<span style="font-family: 'courier new', courier, monospace;">Coordinates: XX.XXXX N, X.XXXX W</span>
<span style="font-family: 'courier new', courier, monospace;">IP: <a class="markup--anchor markup--pre-anchor" data-href="http://xxx.xxx.xxx.xxx/" href="http://xxx.xxx.xxx.xxx/" rel="noreferrer noopener" target="_blank">XXX.XXX.XXX.XXX</a></span>
<span style="font-family: 'courier new', courier, monospace;">Timezone: Nowhere</span>
<span style="font-family: 'courier new', courier, monospace;">Zip code: XXXXX</span></pre>
  <p class="graf graf--p">
   压缩包并不完整，它的作用只是将信息传送到 C&amp;C 服务器。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-785 jetpack-lazy-image" data-lazy-sizes="(max-width: 446px) 100vw, 446px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?resize=446%2C190&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?w=446&amp;ssl=1 446w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?resize=300%2C128&amp;ssl=1 300w" data-recalc-dims="1" height="190" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?resize=446%2C190&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="446"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-785" data-recalc-dims="1" height="190" sizes="(max-width: 446px) 100vw, 446px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?resize=446%2C190&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?w=446&amp;ssl=1 446w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-60.png?resize=300%2C128&amp;ssl=1 300w" width="446"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在，恶意软件会将一些信息，附加到gate.get请求的参数中，分别从 p1 到 p7，例如：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    p1：窃取账户的数量
   </li>
   <li class="graf graf--li">
    p2：窃取 Cookie 的数量
   </li>
   <li class="graf graf--li">
    p4：窃取表单的数量
   </li>
   <li class="graf graf--li">
    ……
   </li>
  </ul>
  <p class="graf graf--p">
   结果如下：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-786 jetpack-lazy-image" data-lazy-sizes="(max-width: 937px) 100vw, 937px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=937%2C127&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?w=937&amp;ssl=1 937w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=300%2C41&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=768%2C104&amp;ssl=1 768w" data-recalc-dims="1" height="127" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=937%2C127&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="937"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-786" data-recalc-dims="1" height="127" sizes="(max-width: 937px) 100vw, 937px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=937%2C127&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?w=937&amp;ssl=1 937w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=300%2C41&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-61.png?resize=768%2C104&amp;ssl=1 768w" width="937"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   在 POST 请求发出后，恶意软件会将所有内容清空，随后退出。
  </p>
  <p class="graf graf--p">
   Predator C&amp;C 服务器 Web 界面的背景比较花哨：
  </p>
  <figure aria-describedby="caption-attachment-787" class="wp-caption aligncenter" id="attachment_787" style="width: 830px">
   <img alt="" class="wp-image-787 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 830px) 100vw, 830px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=830%2C589&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?w=830&amp;ssl=1 830w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=768%2C545&amp;ssl=1 768w" data-recalc-dims="1" height="589" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=830%2C589&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="830"/>
   <noscript>
    <img alt="" class="wp-image-787 size-full" data-recalc-dims="1" height="589" sizes="(max-width: 830px) 100vw, 830px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=830%2C589&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?w=830&amp;ssl=1 830w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-62.png?resize=768%2C545&amp;ssl=1 768w" width="830"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-787">
    Example of Predator C2 Panel with fancy background…
   </figcaption>
  </figure>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    九、版本更新：V2.3.7
   </strong>
  </p>
  <p class="graf graf--p">
   在我们分析的过程中，这一恶意软件又推出了新的版本，接下来，我们将对新版本的变化进行分析。
  </p>
  <p class="graf graf--p">
   针对新的版本，如果从头进行研究，无疑性价比是比较低的。因此，我们找到了恶意软件编写者发布的修改日志，只关注这些恶意软件编写者指出的变化部分。
  </p>
  <figure aria-describedby="caption-attachment-788" class="wp-caption aligncenter" id="attachment_788" style="width: 1281px">
   <img alt="" class="size-full wp-image-788 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1100%2C467&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?w=1281&amp;ssl=1 1281w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=300%2C127&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=768%2C326&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1024%2C435&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1100%2C467&amp;ssl=1 1100w" data-recalc-dims="1" height="467" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1100%2C467&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-788" data-recalc-dims="1" height="467" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1100%2C467&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?w=1281&amp;ssl=1 1281w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=300%2C127&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=768%2C326&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1024%2C435&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-63.png?resize=1100%2C467&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-788">
    Changelog of v2.3.7 explained by the author
   </figcaption>
  </figure>
  <p class="graf graf--p">
   恶意软件进行版本升级，通常会在两个方面进行改动。一是代码优化，以使恶意软件运行速度更快，或者使其更为轻量化。二是增加功能，使恶意软件具有更强大的能力。
  </p>
  <p class="graf graf--p">
   正如我们所看到的，右侧 V2.3.7 代码比左侧 V2.3.5 要长很多，但其主干部分都是相同的。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-789 jetpack-lazy-image" data-lazy-sizes="(max-width: 228px) 100vw, 228px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?resize=228%2C604&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?w=228&amp;ssl=1 228w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?resize=113%2C300&amp;ssl=1 113w" data-recalc-dims="1" height="604" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?resize=228%2C604&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="228"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-789" data-recalc-dims="1" height="604" sizes="(max-width: 228px) 100vw, 228px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?resize=228%2C604&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?w=228&amp;ssl=1 228w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-64.png?resize=113%2C300&amp;ssl=1 113w" width="228"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    9.1 互斥体
   </strong>
  </p>
  <p class="graf graf--p">
   在 2.3.7 版本中，增加了一个互斥体（Mutex），该互斥体与一个名为 SyystemServs 的特定字符串集成在一起。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-790 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1100%2C239&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?w=1600&amp;ssl=1 1600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=300%2C65&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=768%2C167&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1024%2C223&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1100%2C239&amp;ssl=1 1100w" data-recalc-dims="1" height="239" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1100%2C239&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-790" data-recalc-dims="1" height="239" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1100%2C239&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?w=1600&amp;ssl=1 1600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=300%2C65&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=768%2C167&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1024%2C223&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-9.jpeg?resize=1100%2C239&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    9.2 XOR与混淆
   </strong>
  </p>
  <p class="graf graf--p">
   在 C&amp;C 请求期间，URL 参数是逐字节生成的，并且经过了 XOR 操作。
  </p>
  <p class="graf graf--p">
   例如：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">push 04</span>
<span style="font-family: 'courier new', courier, monospace;">...</span>
<span style="font-family: 'courier new', courier, monospace;">push 61</span>
<span style="font-family: 'courier new', courier, monospace;">...</span>
<span style="font-family: 'courier new', courier, monospace;">push 70</span>
<span style="font-family: 'courier new', courier, monospace;">...</span></pre>
  <p class="graf graf--p">
   最后结果为：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">HEX    : 046170692F676174652E6765743F70313D</span>
<span style="font-family: 'courier new', courier, monospace;">STRING : .api/gate.get?p1=</span></pre>
  <p class="graf graf--p">
   这是一个非常基础和简单的功能，但足以减慢我们的安全研究进度。这一部分调整就是新版本代码变长的主要原因。
  </p>
  <pre class="graf graf--pre"><img alt="" class="aligncenter size-full wp-image-791 jetpack-lazy-image" data-lazy-sizes="(max-width: 162px) 100vw, 162px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?resize=162%2C632&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?w=162&amp;ssl=1 162w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?resize=77%2C300&amp;ssl=1 77w" data-recalc-dims="1" height="632" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?resize=162%2C632&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="162"/><noscript><img alt="" class="aligncenter size-full wp-image-791" data-recalc-dims="1" height="632" sizes="(max-width: 162px) 100vw, 162px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?resize=162%2C632&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?w=162&amp;ssl=1 162w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-65.png?resize=77%2C300&amp;ssl=1 77w" width="162"/></noscript></pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    9.3 加载工具
   </strong>
  </p>
  <p class="graf graf--p">
   在此前分析中，我们没有见到这一加载工具（Loader）。在新版本中，集成了一个加载工具，用于向被感染主机推送其他的Payload。该内容可以通过GET请求轻松识别：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">/api/download.get</span></pre>
  <p class="graf graf--p">
   该API请求允许恶意软件将URL转化为文本格式，然后下载，并将其保存到磁盘。随后使用 ShellExecuteA 来执行下载的 Payload。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-792 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1100%2C630&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?w=1131&amp;ssl=1 1131w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=300%2C172&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=768%2C440&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1024%2C587&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1100%2C630&amp;ssl=1 1100w" data-recalc-dims="1" height="630" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1100%2C630&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-792" data-recalc-dims="1" height="630" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1100%2C630&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?w=1131&amp;ssl=1 1131w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=300%2C172&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=768%2C440&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1024%2C587&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-66.png?resize=1100%2C630&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   此外，还有一些其他调整，但我们认为没有必要对这些变化进行详细说明。如果大家好奇，可以自行探索发现。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    十、IoC
   </strong>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.1 V2.3.5
   </strong>
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    299f83d5a35f17aa97d40db667a52dcc | 加壳样本
   </li>
   <li class="graf graf--li">
    3cb386716d7b90b4dca1610afbd5b146 | 脱壳后样本
   </li>
   <li class="graf graf--li">
    <a class="markup--anchor markup--li-anchor" data-href="http://kent-adam.myjino.ru/" href="http://kent-adam.myjino.ru/" rel="noreferrer noopener" target="_blank">
     kent-adam.myjino.ru
    </a>
    | C&amp;C域名
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.2 V2.3.7
   </strong>
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    cbcc48fe0fa0fd30cb4c088fae582118 | 脱壳后样本
   </li>
   <li class="graf graf--li">
    <a class="markup--anchor markup--li-anchor" data-href="http://denbaliberdin.myjino.ru/" href="http://denbaliberdin.myjino.ru/" rel="noreferrer noopener" target="_blank">
     denbaliberdin.myjino.ru
    </a>
    | C&amp;C域名
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.3 HTTP模式
   </strong>
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    GET — /api/info.get
   </li>
   <li class="graf graf--li">
    POST — /api//gate.get?p1=X&amp;p2=X&amp;p3=X&amp;p4=X&amp;p5=X&amp;p6=X&amp;p7=X
   </li>
   <li class="graf graf--li">
    GET — /api/download.get
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.4 MITRE ATT&amp;CK
   </strong>
  </p>
  <p class="graf graf--p">
   V2.3.5
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Discovery – Peripheral Device Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – System Information Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – System Time Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – Query Registry</span>
<span style="font-family: 'courier new', courier, monospace;">Credential Access – Credentials in Files</span>
<span style="font-family: 'courier new', courier, monospace;">Exfiltration – Data Compressed</span></pre>
  <p class="graf graf--p">
   V2.3.7
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">Discovery – Peripheral Device Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – System Information Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – System Time Discovery</span>
<span style="font-family: 'courier new', courier, monospace;">Discovery – Query Registry</span>
<span style="font-family: 'courier new', courier, monospace;">Credential Access – Credentials in Files</span>
<span style="font-family: 'courier new', courier, monospace;">Exfiltration – Data Compressed</span>
<span style="font-family: 'courier new', courier, monospace;">Execution –  Execution through API</span></pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.5 恶意软件作者
   </strong>
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    Alexuiop1337
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    10.6 Yara规则
   </strong>
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">rule Predator_The_Thief : Predator_The_Thief {</span>
<span style="font-family: 'courier new', courier, monospace;">   meta:</span>
<span style="font-family: 'courier new', courier, monospace;">        description = "Yara rule for Predator The Thief v2.3.5 &amp; +"</span>
<span style="font-family: 'courier new', courier, monospace;">        author = "Fumik0_"</span>
<span style="font-family: 'courier new', courier, monospace;">        date = "2018/10/12"</span>
<span style="font-family: 'courier new', courier, monospace;">   strings:</span>
<span style="font-family: 'courier new', courier, monospace;">        $mz = { 4D 5A }</span>
 
<span style="font-family: 'courier new', courier, monospace;">        $hex1 = { BF 00 00 40 06 }</span>
<span style="font-family: 'courier new', courier, monospace;">        $hex2 = { C6 04 31 6B }</span>
<span style="font-family: 'courier new', courier, monospace;">        $hex3 = { C6 04 31 63 }</span>
<span style="font-family: 'courier new', courier, monospace;">        $hex4 = { C6 04 31 75 }</span>
<span style="font-family: 'courier new', courier, monospace;">        $hex5 = { C6 04 31 66 }</span>
 
<span style="font-family: 'courier new', courier, monospace;">        $s1 = "sqlite_" ascii wide</span>
<span style="font-family: 'courier new', courier, monospace;">   condition:</span>
<span style="font-family: 'courier new', courier, monospace;">        $mz at 0 and all of ($hex*) and all of ($s*)</span>
<span style="font-family: 'courier new', courier, monospace;">}</span></pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    十一、安全建议
   </strong>
  </p>
  <p class="graf graf--p">
   1、避免将文件存储在默认位置（例如：Desktop、Documents、Downloads），建议放在自定义的目录下。
  </p>
  <p class="graf graf--p">
   2、避免运行破解版本或其他非官方版本的游戏，这些非官方版本的游戏往往不能及时更新，特别是 Fortnite 的游戏。
  </p>
  <p class="graf graf--p">
   3、在运行软件的过程中使用容器，从而降低窃取数据的风险。
  </p>
  <p class="graf graf--p">
   4、在每次访问后刷新一次浏览器，并且不要将密码直接保存在浏览器中，不要使用自动填充功能。
  </p>
  <p class="graf graf--p">
   5、不要在所有网站都使用相同的密码，尽可能选用双因素认证（2FA）。
  </p>
  <p class="graf graf--p">
   6、针对一些重要数据，在计算机中准备一些迷惑性的文件，这样攻击者即使成功窃取，也会受到误导。
  </p>
  <p class="graf graf--p">
   7、使用 Vault 等密码管理软件。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    十二、总结
   </strong>
  </p>
  <p class="graf graf--p">
   这一信息泄露软件并不复杂，但
   <strong class="markup--strong markup--p-strong">
    它们却足以对被感染用户产生不可逆转的影响。其中，电子邮件账户和其他软件/平台账户是攻击者重点关注的内容
   </strong>
   。由此提醒广大用户，应该具有良好的安全意识，并在使用计算机的过程中注重安全性。防护恶意软件，并不是依靠一个简单的安全产品就能实现的，还需要从方方面面多加注意。
  </p>
  <div id="atatags-1611829871-5f3dc89c72dc0">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-748" href="https://www.iyouport.org/%e6%94%bb%e7%a0%b4-telegram-steam-%e5%8a%a0%e5%af%86%e8%b4%a7%e5%b8%81%e9%92%b1%e5%8c%85-%e5%85%a8%e9%9d%a2%e6%8f%ad%e7%a7%98%e4%bf%a1%e6%81%af%e7%aa%83%e5%8f%96%e6%81%b6%e6%84%8f%e8%bd%af/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-748" href="https://www.iyouport.org/%e6%94%bb%e7%a0%b4-telegram-steam-%e5%8a%a0%e5%af%86%e8%b4%a7%e5%b8%81%e9%92%b1%e5%8c%85-%e5%85%a8%e9%9d%a2%e6%8f%ad%e7%a7%98%e4%bf%a1%e6%81%af%e7%aa%83%e5%8f%96%e6%81%b6%e6%84%8f%e8%bd%af/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/tech/" rel="tag">
     tech
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technique/" rel="tag">
     technique
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/tools/" rel="tag">
     tools
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-08-01T00:06:17+08:00">
    2019年8月1日
   </time>
   <time class="updated" datetime="2019-05-11T23:23:02+08:00">
    2019年5月11日
   </time>
  </div>
 </div>
</article>

