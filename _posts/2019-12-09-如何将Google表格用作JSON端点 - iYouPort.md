---
layout: post
title: "如何将Google表格用作JSON端点 - iYouPort"
date: 2019-12-09T16:01:17+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86-google-%e8%a1%a8%e6%a0%bc%e7%94%a8%e4%bd%9c-json-%e7%ab%af%e7%82%b9/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-8825 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-google-sheets tag-json-endpoint tag-technique tag-technology" id="post-8825">
 <header class="entry-header">
  <h1 class="entry-title">
   如何将Google表格用作JSON端点
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
   <time class="entry-date published" datetime="2019-12-10T00:01:17+08:00">
    2019年12月10日
   </time>
   <time class="updated" datetime="2019-08-26T19:34:39+08:00">
    2019年8月26日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p class="graf graf--p">
   您是否正在构建原型动态Web应用程序并需要与非开发人员合作？
  </p>
  <p class="graf graf--p">
   在最近参加的一次黑客松比赛中，Clark Jason Ngo 遇到了类似的问题。有非工程师想要帮助构建原型Web应用程序。
  </p>
  <p class="graf graf--p">
   他找到了一个方法，并分享了它。
  </p>
  <p class="graf graf--p">
   以下是这份指南的内容。
  </p>
  <p class="graf graf--p">
   其实非常简单，只有5步：
  </p>
  <ol class="postList">
   <li class="graf graf--li">
    在 Google Spreadsheets 中创建电子表格。
   </li>
   <li class="graf graf--li">
    将电子表格发布到Web。
   </li>
   <li class="graf graf--li">
    生成一个 JSON 端点。
   </li>
   <li class="graf graf--li">
    开放电子表格以进行公共协作。
   </li>
   <li class="graf graf--li">
    将 JSON 端点传递给后端开发人员。
   </li>
  </ol>
  <p class="graf graf--p">
   就是这样。现在来看看他是怎么做的。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第1部分：创建Google表格
   </strong>
  </p>
  <p class="graf graf--p">
   转到 Google Sheets；
  </p>
  <p class="graf graf--p">
   创建一个新的电子表格；
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8826 jetpack-lazy-image" data-lazy-sizes="(max-width: 404px) 100vw, 404px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?resize=404%2C448&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?w=404&amp;ssl=1 404w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?resize=271%2C300&amp;ssl=1 271w" data-recalc-dims="1" height="448" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?resize=404%2C448&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="404"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8826" data-recalc-dims="1" height="448" sizes="(max-width: 404px) 100vw, 404px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?resize=404%2C448&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?w=404&amp;ssl=1 404w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/1-50.png?resize=271%2C300&amp;ssl=1 271w" width="404"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第2部分：将这个Google表格发布到网络上
   </strong>
  </p>
  <p class="graf graf--p">
   选择：File &gt; Publish to the web…
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8827 jetpack-lazy-image" data-lazy-sizes="(max-width: 634px) 100vw, 634px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=634%2C1428&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?w=634&amp;ssl=1 634w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=133%2C300&amp;ssl=1 133w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=455%2C1024&amp;ssl=1 455w" data-recalc-dims="1" height="1428" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=634%2C1428&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="634"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8827" data-recalc-dims="1" height="1428" sizes="(max-width: 634px) 100vw, 634px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=634%2C1428&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?w=634&amp;ssl=1 634w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=133%2C300&amp;ssl=1 133w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-37.png?resize=455%2C1024&amp;ssl=1 455w" width="634"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8828 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=1100%2C1381&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?w=1268&amp;ssl=1 1268w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=239%2C300&amp;ssl=1 239w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=768%2C964&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=816%2C1024&amp;ssl=1 816w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=1100%2C1381&amp;ssl=1 1100w" data-recalc-dims="1" height="1381" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=1100%2C1381&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8828" data-recalc-dims="1" height="1381" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=1100%2C1381&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?w=1268&amp;ssl=1 1268w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=239%2C300&amp;ssl=1 239w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=768%2C964&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=816%2C1024&amp;ssl=1 816w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-34.png?resize=1100%2C1381&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这里不需要做任何事。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8829 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1100%2C1051&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?w=1258&amp;ssl=1 1258w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=300%2C287&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=768%2C734&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1024%2C978&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1100%2C1051&amp;ssl=1 1100w" data-recalc-dims="1" height="1051" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1100%2C1051&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8829" data-recalc-dims="1" height="1051" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1100%2C1051&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?w=1258&amp;ssl=1 1258w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=300%2C287&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=768%2C734&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1024%2C978&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-22.png?resize=1100%2C1051&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第4部分：将这个Google表格用作JSON端点
   </strong>
  </p>
  <p class="graf graf--p">
   这一步很重要。
  </p>
  <p class="graf graf--p">
   复制这个模版 URL 并粘贴到地址栏中：
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json" href="https://spreadsheets.google.com/feeds/cells/YOURGOOGLESHEETCODE/SHEETPAGENUMBER/public/full?alt=json" rel="nofollow noopener noreferrer" target="_blank">
    https://spreadsheets.google.com/feeds/cells/
    <strong class="markup--strong markup--p-strong">
     YOURGOOGLESHEETCODE
    </strong>
    /
    <strong class="markup--strong markup--p-strong">
     SHEETPAGENUMBER
    </strong>
    /public/full?alt=json
   </a>
  </p>
  <p class="graf graf--p">
   转到已打开的 Google 表格并查看地址栏。
  </p>
  <figure aria-describedby="caption-attachment-8830" class="wp-caption aligncenter" id="attachment_8830" style="width: 1678px">
   <img alt="" class="size-full wp-image-8830 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1100%2C41&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?w=1678&amp;ssl=1 1678w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=300%2C11&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=768%2C28&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1024%2C38&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1100%2C41&amp;ssl=1 1100w" data-recalc-dims="1" height="41" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1100%2C41&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-8830" data-recalc-dims="1" height="41" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1100%2C41&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?w=1678&amp;ssl=1 1678w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=300%2C11&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=768%2C28&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1024%2C38&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-15.png?resize=1100%2C41&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8830">
    Google Sheets url
   </figcaption>
  </figure>
  <figure aria-describedby="caption-attachment-8831" class="wp-caption aligncenter" id="attachment_8831" style="width: 1680px">
   <img alt="" class="size-full wp-image-8831 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1100%2C47&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?w=1680&amp;ssl=1 1680w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=300%2C13&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=768%2C33&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1024%2C44&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1100%2C47&amp;ssl=1 1100w" data-recalc-dims="1" height="47" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1100%2C47&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-8831" data-recalc-dims="1" height="47" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1100%2C47&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?w=1680&amp;ssl=1 1680w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=300%2C13&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=768%2C33&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1024%2C44&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/6-13.png?resize=1100%2C47&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8831">
    Google Sheets code
   </figcaption>
  </figure>
  <p class="graf graf--p">
   转到模板URL并替换2个部分：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    把 YOURGOOGLESHEETCODE 改成 1ifbWzueslEP5-_ysP6gg7o_NaHQmqF8LlXBfStCwFMs
   </li>
   <li class="graf graf--li">
    把 SHEETPAGENUMBER 改成 1
   </li>
  </ul>
  <p class="graf graf--p">
   然后变成这样：
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://spreadsheets.google.com/feeds/cells/1ifbWzueslEP5-_ysP6gg7o_NaHQmqF8LlXBfStCwFMs/1/public/full?alt=json" href="https://spreadsheets.google.com/feeds/cells/1ifbWzueslEP5-_ysP6gg7o_NaHQmqF8LlXBfStCwFMs/1/public/full?alt=json" rel="nofollow noopener noreferrer" target="_blank">
    https://spreadsheets.google.com/feeds/cells/1ifbWzueslEP5-_ysP6gg7o_NaHQmqF8LlXBfStCwFMs/1/public/full?alt=json
   </a>
  </p>
  <figure aria-describedby="caption-attachment-8832" class="wp-caption aligncenter" id="attachment_8832" style="width: 1600px">
   <img alt="" class="size-full wp-image-8832 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1100%2C861&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?w=1600&amp;ssl=1 1600w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=300%2C235&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=768%2C601&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1024%2C802&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1100%2C861&amp;ssl=1 1100w" data-recalc-dims="1" height="861" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1100%2C861&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-8832" data-recalc-dims="1" height="861" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1100%2C861&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?w=1600&amp;ssl=1 1600w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=300%2C235&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=768%2C601&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1024%2C802&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/7-14.png?resize=1100%2C861&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8832">
    Result of JSON url
   </figcaption>
  </figure>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第5部分：公开这个 Google 表格（用于协作和数据输入）
   </strong>
  </p>
  <p class="graf graf--p">
   在右上角，单击“共享”；
  </p>
  <p class="graf graf--p">
   添加名称，单击“保存”；
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-8833 jetpack-lazy-image" data-lazy-sizes="(max-width: 882px) 100vw, 882px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=882%2C584&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?w=882&amp;ssl=1 882w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=300%2C199&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=768%2C509&amp;ssl=1 768w" data-recalc-dims="1" height="584" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=882%2C584&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="882"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8833" data-recalc-dims="1" height="584" sizes="(max-width: 882px) 100vw, 882px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=882%2C584&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?w=882&amp;ssl=1 882w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=300%2C199&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/8-9.png?resize=768%2C509&amp;ssl=1 768w" width="882"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   单击“高级”；
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8834 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1100%2C598&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?w=1204&amp;ssl=1 1204w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=300%2C163&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=768%2C417&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1024%2C556&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1100%2C598&amp;ssl=1 1100w" data-recalc-dims="1" height="598" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1100%2C598&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8834" data-recalc-dims="1" height="598" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1100%2C598&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?w=1204&amp;ssl=1 1204w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=300%2C163&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=768%2C417&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1024%2C556&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/9-10.png?resize=1100%2C598&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   点击更改…
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8835 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1100%2C519&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?w=1190&amp;ssl=1 1190w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=768%2C363&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1024%2C484&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1100%2C519&amp;ssl=1 1100w" data-recalc-dims="1" height="519" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1100%2C519&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8835" data-recalc-dims="1" height="519" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1100%2C519&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?w=1190&amp;ssl=1 1190w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=300%2C142&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=768%2C363&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1024%2C484&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/10-6.png?resize=1100%2C519&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   单击 On — Public，然后单击Save。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8836 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1100%2C874&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?w=1206&amp;ssl=1 1206w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=300%2C238&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=768%2C610&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1024%2C813&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1100%2C874&amp;ssl=1 1100w" data-recalc-dims="1" height="874" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1100%2C874&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8836" data-recalc-dims="1" height="874" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1100%2C874&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?w=1206&amp;ssl=1 1206w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=300%2C238&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=768%2C610&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1024%2C813&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/11-8.png?resize=1100%2C874&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   就这么简单。完成了。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    常见问题
   </strong>
  </p>
  <p class="graf graf--p">
   如果您收到下面这样的回复，请检查您的网址，并检查上述步骤，确保使用地址栏中的Google表格代码。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8837 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1100%2C639&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?w=1392&amp;ssl=1 1392w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=300%2C174&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=768%2C446&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1024%2C594&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=740%2C430&amp;ssl=1 740w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1100%2C639&amp;ssl=1 1100w" data-recalc-dims="1" height="639" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1100%2C639&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8837" data-recalc-dims="1" height="639" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1100%2C639&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?w=1392&amp;ssl=1 1392w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=300%2C174&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=768%2C446&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1024%2C594&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=740%2C430&amp;ssl=1 740w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/12-8.png?resize=1100%2C639&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您收到的是下面这样的回复，请返回上述第2部分：将Google表格发布到网络上。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-8838 jetpack-lazy-image" data-lazy-sizes="(max-width: 760px) 100vw, 760px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?resize=760%2C234&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?w=760&amp;ssl=1 760w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?resize=300%2C92&amp;ssl=1 300w" data-recalc-dims="1" height="234" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?resize=760%2C234&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="760"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8838" data-recalc-dims="1" height="234" sizes="(max-width: 760px) 100vw, 760px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?resize=760%2C234&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?w=760&amp;ssl=1 760w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/13-6.png?resize=300%2C92&amp;ssl=1 300w" width="760"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/" href="https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/" rel="noopener noreferrer" target="_blank">
    How to use Google Sheets as a JSON Endpoint
   </a>
  </p>
  <div id="atatags-1611829871-5f40d54200255">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-8825" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86-google-%e8%a1%a8%e6%a0%bc%e7%94%a8%e4%bd%9c-json-%e7%ab%af%e7%82%b9/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-8825" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86-google-%e8%a1%a8%e6%a0%bc%e7%94%a8%e4%bd%9c-json-%e7%ab%af%e7%82%b9/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-8825-5f40d54200d71" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=8825&amp;origin=www.iyouport.org&amp;obj_id=161182987-8825-5f40d54200d71" id="like-post-wrapper-161182987-8825-5f40d54200d71">
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
    <a href="https://www.iyouport.org/tag/google-sheets/" rel="tag">
     Google Sheets
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/json-endpoint/" rel="tag">
     JSON Endpoint
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
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-12-10T00:01:17+08:00">
    2019年12月10日
   </time>
   <time class="updated" datetime="2019-08-26T19:34:39+08:00">
    2019年8月26日
   </time>
  </div>
 </div>
</article>

