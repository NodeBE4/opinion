---
layout: post
title: "从一个 Ubuntu 版本升级到另一个版本，而无需重新安装操作系统，怎么做？ - iYouPort"
date: 2018-05-10T13:30:06+00:00
author: iYouPort
from: https://www.iyouport.org/%e4%bb%8e%e4%b8%80%e4%b8%aa-ubuntu-%e7%89%88%e6%9c%ac%e5%8d%87%e7%ba%a7%e5%88%b0%e5%8f%a6%e4%b8%80%e4%b8%aa%e7%89%88%e6%9c%ac%ef%bc%8c%e8%80%8c%e6%97%a0%e9%9c%80%e9%87%8d%e6%96%b0%e5%ae%89%e8%a3%85/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7952 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 category-67 tag-security tag-technology tag-ubuntu" id="post-7952">
 <header class="entry-header">
  <h1 class="entry-title">
   从一个 Ubuntu 版本升级到另一个版本，而无需重新安装操作系统，怎么做？
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-05-10T21:30:06+08:00">
    2018年5月10日
   </time>
   <time class="updated" datetime="2019-08-10T21:44:19+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   您可以从一个 Ubuntu 版本升级到另一个版本，而无需重新安装操作系统。 如果您运行的是 LTS 版本的 Ubuntu，则只会提供具有默认设置的新LTS版本 – 但您可以更改它。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   我们建议在继续之前备份您的重要文件。 您应该始终拥有重要个人数据的备份副本，但在升级操作系统时为此提供这些备份非常重要 – 以防万一。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    你能升级吗？
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   无论何时发布新版本的 Ubuntu，升级都可以从以前的版本中立即获得。 例如，现在 Ubuntu 18.04 LTS 已经发布，如果您使用的是 Ubuntu 17.10，则可以立即升级。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   一般来说，你只能从一个 Ubuntu 版本升级到下一个版本。 例如，如果您安装了 Ubuntu 17.04并且您想要升级到 Ubuntu 18.04 LTS，升级过程将安装 Ubuntu 17.10。 然后，您可以再次通过升级过程从 Ubuntu 17.10 升级到 Ubuntu 18.04 LTS。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   从一个长期服务（LTS）版本升级到另一个LTS版本是允许的，但它们被推迟给新的LTS版本一段时间来稳定。 例如，虽然 Ubuntu 18.04 LTS 于 2018 年4月26日发布，但直到 Ubuntu 18.04.1 LTS 发布，预计将于2018年7月26日发布，您将无法直接从 Ubuntu 16.04 LTS 升级。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    图形方法
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   您可以使用内置于标准 Ubuntu 桌面的图形工具或使用终端命令进行升级。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    如何选择升级到的版本
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   默认情况下，Ubuntu 的标准版本提供将您升级到新的标准版本，而 Ubuntu 的长期支持（LTS）版本只提供您升级到新的 LTS 版本。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   例如，如果您安装了 Ubuntu 18.04 LTS，那么在 Ubuntu 18.10 发布时不会提供升级。 只有在 Ubuntu 20.04 LTS 发布后才会提供升级。 但是如果你喜欢，你可以改变这种行为。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   要找到此选项，请单击屏幕左上角的“活动”按钮（在GNOME Shell中）或 Ubuntu 徽标按钮（在 Unity 中）。 搜索“更新”并点击“软件和更新”快捷方式。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   您也可以打开 Software Updater 应用程序，然后单击“设置”打开此窗口。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7953 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1100%2C367&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=768%2C257&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1024%2C342&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1100%2C367&amp;ssl=1 1100w" data-recalc-dims="1" height="367" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1100%2C367&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7953" data-recalc-dims="1" height="367" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1100%2C367&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=768%2C257&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1024%2C342&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12.jpeg?resize=1100%2C367&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   点击“更新”标签。 在“通知我新的 Ubuntu 版本”右侧，单击该框并选择“对于任何新版本”或“对于长期支持版本”，具体取决于您想要的更新类型。 完成后点击“关闭”。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7954 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?w=1560&amp;ssl=1 1560w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1024%2C683&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7954" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1100%2C733&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?w=1560&amp;ssl=1 1560w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1024%2C683&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    如何升级
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   Ubuntu 可能会通知您，通过标准软件更新程序工具可以获得新版本。 但是，即使软件更新程序工具没有找到更新，也可以手动检查它。 要升级到最新版本的 Ubuntu，请按 Alt + F2 键入以下命令，然后按 Enter 键：update-manager -c
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   软件更新程序工具检查 Ubuntu 的服务器，并通知您新的 Ubuntu 版本可用（如果有的话）。 点击“升级”按钮升级到较新版本的 Ubuntu。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7955 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1100%2C313&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?w=1820&amp;ssl=1 1820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=300%2C85&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=768%2C219&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1024%2C291&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1100%2C313&amp;ssl=1 1100w" data-recalc-dims="1" height="313" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1100%2C313&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7955" data-recalc-dims="1" height="313" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1100%2C313&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?w=1820&amp;ssl=1 1820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=300%2C85&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=768%2C219&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1024%2C291&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/14.jpeg?resize=1100%2C313&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   如果在软件更新程序工具中没有看到告诉您新版本可用的消息，请按 Alt + F2，键入以下命令，然后按 Enter 键：/ usr / lib目录/ Ubuntu的发行版，升级程序/签新版本，GTK
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   您会看到一条消息，告诉您新版本可用，如果有的话。 点击“是，立即升级”进行安装。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7956 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1100%2C331&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=300%2C90&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=768%2C231&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1024%2C308&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1100%2C331&amp;ssl=1 1100w" data-recalc-dims="1" height="331" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1100%2C331&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7956" data-recalc-dims="1" height="331" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1100%2C331&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=300%2C90&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=768%2C231&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1024%2C308&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/15.jpeg?resize=1100%2C331&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    终端方法
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   您还可以使用终端命令进行升级，该命令在服务器系统或其他类型的 Ubuntu 上适用于不同的桌面环境。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   在继续之前，运行以下命令以确保安装了 update-manager-core 软件包。 如果没有安装此软件包，您用于升级的命令将不起作用。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   sudo apt 安装 update-manager-core
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7957 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1100%2C346&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?w=1820&amp;ssl=1 1820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=300%2C94&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=768%2C241&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1024%2C322&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1100%2C346&amp;ssl=1 1100w" data-recalc-dims="1" height="346" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1100%2C346&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7957" data-recalc-dims="1" height="346" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1100%2C346&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?w=1820&amp;ssl=1 1820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=300%2C94&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=768%2C241&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1024%2C322&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/16.jpeg?resize=1100%2C346&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    如何选择升级到的版本
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   与上面的图形工具一样，Ubuntu 的标准版本通常会将您升级到下一个可用版本，而长期支持版本通常只会将您升级到下一个LTS版本。 例如，如果在 Ubuntu 18.10 发布时运行 Ubuntu 18.04 LTS，则不会收到升级，因为系统默认配置为等待 Ubuntu 20.04 LTS。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   要从终端进行更改，请运行以下命令，以root权限打开 nano 文本编辑器中的 /etc/update-manager/release-upgrades 文件。 您可以使用任何您喜欢的其他文本编辑器，但我们在此处使用 nano 作为示例。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   sudo nano / etc / update-manager / release-upgrades
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7958 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1100%2C176&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=300%2C48&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=768%2C123&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1024%2C164&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1100%2C176&amp;ssl=1 1100w" data-recalc-dims="1" height="176" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1100%2C176&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7958" data-recalc-dims="1" height="176" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1100%2C176&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?w=1820&amp;ssl=1 1820w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=300%2C48&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=768%2C123&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1024%2C164&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/17.jpeg?resize=1100%2C176&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   根据是否要提示升级到正常版本还是仅LTS版本，编辑文件中的“Prompt =”行以表示“ Prompt=normal ”或“ Prompt=lts ”。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7959 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1100%2C826&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?w=1560&amp;ssl=1 1560w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=300%2C225&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=768%2C577&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1024%2C769&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1100%2C826&amp;ssl=1 1100w" data-recalc-dims="1" height="826" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1100%2C826&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7959" data-recalc-dims="1" height="826" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1100%2C826&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?w=1560&amp;ssl=1 1560w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=300%2C225&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=768%2C577&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1024%2C769&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/18.jpeg?resize=1100%2C826&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   保存该文件并关闭文本编辑器。 例如，在 nano 中，可以按 Ctrl + O 然后按 Enter 保存文件。 按 Ctrl + X 关闭纳米。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    如何升级
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   要检查可以升级到的任何可用新版本，请运行以下命令：do-release-upgrade -c
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   该命令检查 Ubuntu 的服务器是否有可用更新，并通知您将升级到哪个版本的 Ubuntu。 它提供的版本由系统的/ etc / update-manager / release-upgrades文件中的内容控制。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7960 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1100%2C284&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?w=1820&amp;ssl=1 1820w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=300%2C77&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=768%2C198&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1024%2C264&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1100%2C284&amp;ssl=1 1100w" data-recalc-dims="1" height="284" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1100%2C284&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7960" data-recalc-dims="1" height="284" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1100%2C284&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?w=1820&amp;ssl=1 1820w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=300%2C77&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=768%2C198&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1024%2C264&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/19.jpeg?resize=1100%2C284&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   要执行升级，请运行以下命令： sudo do-release-upgrade
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7961 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1100%2C519&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?w=1560&amp;ssl=1 1560w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=768%2C362&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1024%2C483&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1100%2C519&amp;ssl=1 1100w" data-recalc-dims="1" height="519" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1100%2C519&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7961" data-recalc-dims="1" height="519" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1100%2C519&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?w=1560&amp;ssl=1 1560w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=768%2C362&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1024%2C483&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/20.jpeg?resize=1100%2C519&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   Ubuntu 开始升级过程。 您必须输入“y”并按 Enter 键确认。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7962 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1100%2C523&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?w=1560&amp;ssl=1 1560w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=300%2C143&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=768%2C365&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1024%2C487&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1100%2C523&amp;ssl=1 1100w" data-recalc-dims="1" height="523" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1100%2C523&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7962" data-recalc-dims="1" height="523" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1100%2C523&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?w=1560&amp;ssl=1 1560w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=300%2C143&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=768%2C365&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1024%2C487&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/21.jpeg?resize=1100%2C523&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   do-release-upgrade terminal 命令与图形升级工具类似。 您无法使用它直接从 Ubuntu 16.04 LTS升级到 Ubuntu 18.04 LTS，无需等待 Ubuntu 18.04.1 LTS 版本。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   有一个 do-release-upgrade -d 命令可以将你升级到 Ubuntu 的当前不稳定的开发分支。 但是，这不建议用于生产系统。 Ubuntu 的开发版本不稳定，只能用于测试。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   <strong>
    你总是可以重新安装 Ubuntu
   </strong>
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   当然，即使上述工具无法升级您的系统 – 例如，如果您运行的是 Ubuntu 16.04 LTS 并希望在7月26日之前升级，您可以从网站下载最新版本的 Ubuntu ， 制作一个可启动的USB驱动器或刻录光盘，然后在您的系统上重新安装 Ubuntu。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   相关： 如何创建一个可启动的 Linux USB 闪存驱动器，简单的方法
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   尽管您应该能够在保留个人文件的同时重新安装 Ubuntu，但在此过程中您肯定会丢失已安装的应用程序。 在尝试此操作之前，您还应该备份，因为您可能很容易意外擦除分区并擦除文件 – 或者安装程序意外删除它们的错误。
  </p>
  <p class="XzvDs _208Ie _2Dym_ blog-post-text-font blog-post-text-color _2p1aK _2R0Lu _2Dym_">
   正如俗话所说，安全性好于抱歉。⚪️
  </p>
  <div id="atatags-1611829871-5f402eeb4eef8">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7952" href="https://www.iyouport.org/%e4%bb%8e%e4%b8%80%e4%b8%aa-ubuntu-%e7%89%88%e6%9c%ac%e5%8d%87%e7%ba%a7%e5%88%b0%e5%8f%a6%e4%b8%80%e4%b8%aa%e7%89%88%e6%9c%ac%ef%bc%8c%e8%80%8c%e6%97%a0%e9%9c%80%e9%87%8d%e6%96%b0%e5%ae%89%e8%a3%85/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7952" href="https://www.iyouport.org/%e4%bb%8e%e4%b8%80%e4%b8%aa-ubuntu-%e7%89%88%e6%9c%ac%e5%8d%87%e7%ba%a7%e5%88%b0%e5%8f%a6%e4%b8%80%e4%b8%aa%e7%89%88%e6%9c%ac%ef%bc%8c%e8%80%8c%e6%97%a0%e9%9c%80%e9%87%8d%e6%96%b0%e5%ae%89%e8%a3%85/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7952-5f402eeb4f6ae" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7952&amp;origin=www.iyouport.org&amp;obj_id=161182987-7952-5f402eeb4f6ae" id="like-post-wrapper-161182987-7952-5f402eeb4f6ae">
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
    <a href="https://www.iyouport.org/tag/ubuntu/" rel="tag">
     Ubuntu
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-05-10T21:30:06+08:00">
    2018年5月10日
   </time>
   <time class="updated" datetime="2019-08-10T21:44:19+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

