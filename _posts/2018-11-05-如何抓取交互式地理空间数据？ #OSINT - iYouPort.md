---
layout: post
title: "如何抓取交互式地理空间数据？ #OSINT - iYouPort"
date: 2018-11-05T18:40:36+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%93%e5%8f%96%e4%ba%a4%e4%ba%92%e5%bc%8f%e5%9c%b0%e7%90%86%e7%a9%ba%e9%97%b4%e6%95%b0%e6%8d%ae%ef%bc%9f-osint/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4805 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-technique tag-technology tag-tools" id="post-4805">
 <header class="entry-header">
  <h1 class="entry-title">
   如何抓取交互式地理空间数据？ #OSINT
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
   <time class="entry-date published" datetime="2018-11-06T02:40:36+08:00">
    2018年11月6日
   </time>
   <time class="updated" datetime="2019-06-01T03:41:03+08:00">
    2019年6月1日
   </time>
  </span>
  <span class="word-count">
   4 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       对于开源调查来说，技术工具很重要
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4820 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1100%2C510&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=300%2C139&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=768%2C356&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1024%2C474&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1100%2C510&amp;ssl=1 1100w" data-recalc-dims="1" height="510" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1100%2C510&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4820" data-recalc-dims="1" height="510" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1100%2C510&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=300%2C139&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=768%2C356&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1024%2C474&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-27.png?resize=1100%2C510&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="7171">
    除了极少数例外，浏览器中显示的所有内容都可以下载并转换为可用的数据格式，许多组织或个人都可以维护包含有价值信息的复杂且可公开访问的数据集。尽管可公开查看，但在许多情况下，基础数据无法下载和进一步分析。本指南将重点介绍如何抓取可探索但无法导出用于个人分析的地理空间数据，以及介绍存储在公共服务器上并可通过应用程序编程接口（API）访问的数据库的一些概念。
   </p>
   <p class="graf graf--p graf-after--p" id="1796">
    这个指南将侧重于下载地理空间数据，但希望其中一些概念也适用于以类似方式存储的其他数据格式。
   </p>
   <p class="graf graf--p graf-after--p" id="b85d">
    <strong class="markup--strong markup--p-strong">
     为什么要刮取地理空间数据？
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="931b">
    您希望这样做可能有几个原因，其中最重要的原因是对数据进行进一步的分析。
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="be7c">
     更深入的分析
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="6f3a">
    土耳其库尔德人占多数的省份被夷为平地的互动地图可以让您了解到被清理区域的范围和位置; 但是，通过抓取和下载数据，可以更加严格地进行分析，例如，与人口普查有关的数据或在大清洗前安装的临时障碍物上的遥感数据。
   </p>
   <p class="graf graf--p graf-after--p" id="366e">
    您还可以找到以色列和约旦河西岸之间隔离墙的互动地图。通过下载数据，您可以查看与1948年绿线相关的数据，并创建一张地图，显示以色列在隔离墙和绿线之间“附加”的区域，或者通过它们与隔离墙的距离分析事件发生的位置。
   </p>
   <p class="graf graf--p graf-after--p" id="fb09">
    显然，其他
    <span class="markup--quote markup--p-quote is-other" data-creator-ids="e5835fc6e3b2 anon">
     大型群体事件、大型事故
    </span>
    等方面的调查均需要这样的分析。
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="a18f">
     地理定位镜头
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="ee27">
    此外，抓取可用于地理定位素材。如果您正在分析来自利比亚的视频，其中高压电线穿过高速公路，则可以找到利比亚能源基础设施的交互式地图，并进行进一步的 GIS 空间分析，以隔离这些电力线穿过高速公路的位置。
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="7f9b">
     存档数据
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="644e">
    除了分析目的之外，为了存档它们，这些交互式地图也很重要。我们试图找到两个特定的交互式地图，一个出现的比较早，
    <a class="markup--anchor markup--p-anchor" data-href="http://www.alharak.org/nonviolence_map/ar/" href="http://www.alharak.org/nonviolence_map/ar/" rel="noopener nofollow noreferrer" target="_blank">
     非暴力的抗议活动
    </a>
    ，发生在叙利亚内战开始前，另一个是 Caerus Group 在 2013 年展示的
    <a class="markup--anchor markup--p-anchor" data-href="https://www.native.io/case_studies/aleppo" href="https://www.native.io/case_studies/aleppo" rel="noopener nofollow noreferrer" target="_blank">
     阿勒颇市检查站的位置和群控
    </a>
    。这两张地图都不再被维护，无法访问，因此这些信息丰富且可能很重要的数据已基本丢失。
   </p>
   <p class="graf graf--p graf-after--p" id="1bd3">
    <strong class="markup--strong markup--p-strong">
     你需要什么
    </strong>
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="7794">
     谷歌浏览器 谷歌的 Chrome 浏览器包含了一些可隔离有用信息包的工具，并且通过有限的数据转换，它们可以转换为常见的文件类型，例如 CSV 文件；
    </li>
    <li class="graf graf--li graf-after--li" id="6534">
     <a class="markup--anchor markup--li-anchor" data-href="https://notepad-plus-plus.org/download/" href="https://notepad-plus-plus.org/download/" rel="noopener nofollow noreferrer" target="_blank">
      Notepad ++
     </a>
     或任何其他允许您使用正则表达式（RegEx）搜索工具的程序；
    </li>
    <li class="graf graf--li graf-after--li" id="11a7">
     Excel 等效的“表格”或其他电子表格程序；
    </li>
    <li class="graf graf--li graf-after--li" id="f01a">
     用于可视化的一个映射程序（ArcMap [付费软件]，
     <a class="markup--anchor markup--li-anchor" data-href="https://www.qgis.org/en/site/forusers/download" href="https://www.qgis.org/en/site/forusers/download" rel="noopener nofollow noreferrer" target="_blank">
      QGIS
     </a>
     或
     <a class="markup--anchor markup--li-anchor" data-href="https://www.google.com/earth/download/gep/agree.html" href="https://www.google.com/earth/download/gep/agree.html" rel="noopener nofollow noreferrer" target="_blank">
      Google Earth Pro
     </a>
     ）
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="bc6d">
    值得注意的是，数据架构极其多样化，呈现数据所需的准备工作因几乎每个数据集而异。没有一种方法可以做到这一点，但所有必要的程序都有非常强大的在线支持，可以指导您完成所有需要做的事。这很重要。
   </p>
   <p class="graf graf--p graf-after--p" id="fc5d">
    <strong class="markup--strong markup--p-strong">
     指南
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="5810">
    以下是如何获取不可公开下载的数据的分步指南。将通过使用三个不同的数据集来完成，从简单的地图数据下载（ACLED 的伊拉克危机数据）到更复杂的数据（医生促进人权协会显示的叙利亚医疗设施的攻击，以及中欧大学显示的对阿勒颇项目的攻击）。
   </p>
   <p class="graf graf--p graf-after--p" id="134f">
    <strong class="markup--strong markup--p-strong">
     ACLED 数据
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="f397">
    一个很好的介绍性数据集是
    <a class="markup--anchor markup--p-anchor" data-href="https://www.acleddata.com/dashboard/" href="https://www.acleddata.com/dashboard/" rel="noopener nofollow noreferrer" target="_blank">
     ACLED Dashboard
    </a>
    。这些数据可以公开访问，并且它也是一个有用的学习工具，显示了需要处理的数据量。
   </p>
   <p class="graf graf--p graf-after--p" id="64fb">
    第一步是右键单击页面上的任意位置并选择“Inspect”，或按 Ctrl + Shift + i（在 PC 上）。
   </p>
   <p class="graf graf--p graf-after--p" id="b73f">
    然后第二步，一旦出现对话框，导航到“网络”选项卡。它应该看起来像这样：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4807 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1100%2C567&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?w=1920&amp;ssl=1 1920w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=300%2C155&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=768%2C396&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1024%2C527&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1100%2C567&amp;ssl=1 1100w" data-recalc-dims="1" height="567" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1100%2C567&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4807" data-recalc-dims="1" height="567" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1100%2C567&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?w=1920&amp;ssl=1 1920w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=300%2C155&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=768%2C396&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1024%2C527&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-14.png?resize=1100%2C567&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="ed6e">
     <strong class="markup--strong markup--p-strong">
      下载数据
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="e099">
     在上面的地图上导航到伊拉克; 如果您放大并移动地图，应该看到编号的 PNG 图像文件级联到网络表 — 这些是基本地图的图块。网络选项卡基本上显示了您在浏览时由网站启动或下载的每个文件或脚本。隐藏在网站代码中的是启动进一步下载的脚本。您可以在“网络”选项卡表的“Initiator”行中看到这些脚本; 例如，基本地图 PNG 图像文件由“ leaflet.js：5 ” 启动，它告诉 Carto 您要查看哪些文件。
    </p>
    <p class="graf graf--p graf-after--p" id="6f52">
     点击伊拉克加载伊拉克事件。您将看到一个以“read.csv”开头的文件 — 这是您想要的数据，它链接到您的 URL 是：
    </p>
    <p class="graf graf--p graf-after--p" id="69e4">
     <a class="markup--anchor markup--p-anchor" data-href="https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1" href="https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1" rel="noreferrer noopener nofollow" target="_blank">
      https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="1477">
     分析这个链接给出的内容。
    </p>
    <p class="graf graf--p graf-after--p" id="080c">
     首先，它将我们链接到 ACLED API，它允许您查询在线数据库以下载相关数据。每个特定的 API 都应该有一个用户指南，以确切了解可以使用它做什么; 但是，ACLED 与拥有自己的 API 的大多数数据集不同。大多数数据集是由第三方 API 托管的单个数据库或表，但现在我们关注简单的 ACLED 数据集。如果您只是导航到“
     <a class="markup--anchor markup--p-anchor" data-href="https://api.acleddata.com/acled/read.csv" href="https://api.acleddata.com/acled/read.csv" rel="noreferrer noopener nofollow" target="_blank">
      https://api.acleddata.com/acled/read.csv
     </a>
     ”，它将自动下载输入 ACLED 数据库的最新 500 个事件的 CSV 文件，可以在 Excel 或其他电子表格中查看程序。
    </p>
    <p class="graf graf--p graf--startsWithDoubleQuote graf-after--p" id="d233">
     “read.csv”之后的 URL 告诉 API 你想要什么。“limit = 0”表示查询将返回所有匹配的数据 — 您可以使用
     <strong class="markup--strong markup--p-strong">
      任何数字
     </strong>
     来下载所需的行数。下一个选项是将搜索限制为单个国家/地区。这
     <strong class="markup--strong markup--p-strong">
      可以更改为任何国家或添加其他限定符
     </strong>
     ; 例如，如果您在“Iraq”和“＆fields”之间插入“ ＆event_type = Riots / Protests ”，则只会下载 Protest 或 Riots 事件。你可以为当事人或地点做类似的修改，例如…..
    </p>
    <p class="graf graf--p graf-after--p" id="23dc">
     <a class="markup--anchor markup--p-anchor" data-href="https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;location=mosul&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1" href="https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;location=mosul&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1" rel="noreferrer noopener nofollow" target="_blank">
      https://api.acleddata.com/acled/read.csv?limit=0&amp;country=Iraq&amp;location=mosul&amp;fields=iso%7Cactor1%7Cactor2%7Cevent_date%7Cevent_type%7Cinteraction%7Cfatalities%7Clatitude%7Clongitude%7Cadmin1
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="2c45">
     ..将导致仅下载编码为在摩苏尔发生的事件。
    </p>
    <p class="graf graf--p graf--startsWithDoubleQuote graf-after--p" id="1ff2">
     “＆fields =”之后的 URL 告诉 API 要包含哪些列。这是重要的，因为它与没有自己专用 API 的数据库更相关。在这个 ％7C 中间是文本编码 | 字符，分隔不同的列。在这种情况下，您将获得iso，actor1，actor2，event_date，event_type 等。如果存在不需要的列，则可以从 URL 中删除它们，以使数据更简单。在这种情况下，由于 API 文档可用，您还可以添加 ％7Ccountry％7Cnotes 等字段以获取更多信息。
    </p>
    <p class="graf graf--p graf-after--p" id="72aa">
     此时，作为测试，如果您转到此 URL，请尝试确定要下载的事件：
    </p>
    <p class="graf graf--p graf-after--p" id="7a15">
     <a class="markup--anchor markup--p-anchor" data-href="https://api.acleddata.com/acled/read.csv?limit=0&amp;admin1=sulaymaniyah&amp;event_type=Riots/Protests&amp;fields=country%7Cevent_date%7Cevent_type%7Clatitude%7Clongitude%7Cnotes" href="https://api.acleddata.com/acled/read.csv?limit=0&amp;admin1=sulaymaniyah&amp;event_type=Riots/Protests&amp;fields=country%7Cevent_date%7Cevent_type%7Clatitude%7Clongitude%7Cnotes" rel="noreferrer noopener nofollow" target="_blank">
      https://api.acleddata.com/acled/read.csv?limit=0&amp;admin1=sulaymaniyah&amp;event_type=Riots/Protests&amp;fields=country%7Cevent_date%7Cevent_type%7Clatitude%7Clongitude%7Cnotes
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="da68">
     然后下载 CSV 并检查文件是否符合您的想法。您应该有一个包含所有重要列的 CSV 文件，包括纬度和经度，可用于将文件导入 Google Earth Pro 或任何 GIS 程序。.
    </p>
    <p class="graf graf--p graf-after--p" id="1a54">
     <strong class="markup--strong markup--p-strong">
      袭击叙利亚卫生保健设施
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="4b85">
     现在我们尝试一个更难的数据集。
    </p>
    <p class="graf graf--p graf-after--p" id="7982">
     医生促进人权协会维护了叙利亚卫生保健设施的
     <a class="markup--anchor markup--p-anchor" data-href="https://s3.amazonaws.com/PHR_syria_map/web/index.html" href="https://s3.amazonaws.com/PHR_syria_map/web/index.html" rel="noopener nofollow noreferrer" target="_blank">
      互动地图
     </a>
     。这是一张详细的地图，通过点击“事件”，您可以看到有关每个活动的更多信息。所有这些数据都是可下载的，要刮一下。
    </p>
    <ol class="postList">
     <li class="graf graf--li graf-after--p" id="d954">
      再次进入 Inspect&gt; Network。
     </li>
     <li class="graf graf--li graf-after--li" id="fc2b">
      刷新页面以清除加载页面时显示的所有数据。这个清单比较复杂。花点时间找到合适的项目。通常，您可以搜索 JOSN，CSV 或 SQL，其中一个将具有您想要的数据，但在这种情况下，唯一的命中是“SQL”，这是关于加载Tiled Map Server Basemap的全部内容。
     </li>
    </ol>
    <p class="graf graf--p graf-after--li" id="d642">
     有时，这是猜测和检查文件并提示页面加载与您正在寻找的内容相关的更多细节的问题。在这种情况下，我们通过单击一个 attack 并提示浏览器加载有关该事件的更多数据来查找数据。这使得一个新的 SQL 项目出现，标题为：
    </p>
    <p class="graf graf--p graf-after--p" id="189d">
     sql?q=select%20%22area%22%2C%22area_of_control%22%2C%22attack_description%22%2C%22city%22%2C%22date%22%2C%22date_stamp%22%2C%22deaths%22%2C%22exact_location%22%2C%22facility_type%22%2C%22field_61%22%2C%22field_source1%22%2C%22field_source2%22%2C%22governorate%22%2C%22hospital_name%22%2C%22hospital_type%22%2C%22image1_caption%22%2C%22image1_link%22%2C%22image1_source_caption%22%2C%22image1_source_link%22%2C%22image2%22%2C%22image2_caption%22%2C%22image2_link%22%2C%22image2_source_caption%22%2C%22image2_source_link%22%2C%22injuries%22%2C%22latitude%22%2C%22longitude%22%2C%22mode_of_attack%22%2C%22no_dead%22%2C%22no_injured%22%2C%22outcome_for_facility%22%2C%22perpetrator%22%2C%22source1_caption%22%2C%22source1_link%22%2C%22source1_period%22%2C%22source2_caption%22%2C%22source2_link%22%2C%22source2_period%22%2C%22source3_caption%22%2C%22source3_link%22%2C%22source3_period%22%2C%22source_type%22%2C%22total_no_of_attacks%22%2C%22video1%22%2C%22video1_caption%22%2C%22video1_code%22%2C%22video2%22%2C%22video2_caption%22%2C%22video2_code%22%2C%22video2_link%22%2C%22video3%22%2C%22video3_caption%22%2C%22video3_code%22%2C%22video3_link%22%2C%22video4%22%2C%22video4_caption%22%2C%22video4_code%22%2C%22video4_link%22%2C%22video_footage%22%2C%22video_height%22%2C%22weapons_used%22%20from%20(select%20*%20from%20facilityattacks_2017_12_update)%20as%20_cartodbjs_alias%20where%20cartodb_id%20%3D%20287
    </p>
    <p class="graf graf--p graf-after--p" id="a614">
     在新选项卡中打开它会显示将您链接到 SQL 数据库中单个条目的数据。这里，％20 表示空格，％22 是引号，％2C 是逗号。从 URL 可以看到此 API 首先列出要显示的字段，然后从整个数据库中选择 “
     <em class="markup--em markup--p-em">
      where cartodb_id = 20287
     </em>
     ”，最后将搜索限制为单个条目。
    </p>
    <p class="graf graf--p graf-after--p" id="703c">
     我们可以删除它，并通过调整 URL 删除多余的字段，为了本文的目的，使用了这个 URL：
    </p>
    <p class="graf graf--p graf-after--p" id="aab7">
     <a class="markup--anchor markup--p-anchor" data-href="https://phrusa.carto.com/api/v1/sql?q=select%20%22area%22%2C%22area_of_control%22%2C%22attack_description%22%2C%22city%22%2C%22date%22%2C%22deaths%22%2C%22exact_location%22%2C%22facility_type%22%2C%22hospital_name%22%2C%22hospital_type%22%2C%22injuries%22%2C%22latitude%22%2C%22longitude%22%2C%22mode_of_attack%22%2C%22no_dead%22%2C%22no_injured%22%2C%22outcome_for_facility%22%2C%22perpetrator%22%2C%22total_no_of_attacks%22%2C%22weapons_used%22%20from%20(select%20*%20from%20facilityattacks_2017_12_update)%20as%20_cartodbjs_alias" href="https://phrusa.carto.com/api/v1/sql?q=select%20%22area%22%2C%22area_of_control%22%2C%22attack_description%22%2C%22city%22%2C%22date%22%2C%22deaths%22%2C%22exact_location%22%2C%22facility_type%22%2C%22hospital_name%22%2C%22hospital_type%22%2C%22injuries%22%2C%22latitude%22%2C%22longitude%22%2C%22mode_of_attack%22%2C%22no_dead%22%2C%22no_injured%22%2C%22outcome_for_facility%22%2C%22perpetrator%22%2C%22total_no_of_attacks%22%2C%22weapons_used%22%20from%20%28select%20*%20from%20facilityattacks_2017_12_update%29%20as%20_cartodbjs_alias" rel="noreferrer noopener nofollow" target="_blank">
      https://phrusa.carto.com/api/v1/sql?q=select%20%22area%22%2C%22area_of_control%22%2C%22attack_description%22%2C%22city%22%2C%22date%22%2C%22deaths%22%2C%22exact_location%22%2C%22facility_type%22%2C%22hospital_name%22%2C%22hospital_type%22%2C%22injuries%22%2C%22latitude%22%2C%22longitude%22%2C%22mode_of_attack%22%2C%22no_dead%22%2C%22no_injured%22%2C%22outcome_for_facility%22%2C%22perpetrator%22%2C%22total_no_of_attacks%22%2C%22weapons_used%22%20from%20(select%20*%20from%20facilityattacks_2017_12_update)%20as%20_cartodbjs_alias
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="a2dd">
     需要注意的是，由于无法访问数据库的用户指南，因此无法在不猜测的情况下添加原始 SQL 文件中可能存在的其他字段。
    </p>
    <p class="graf graf--p graf-after--p" id="a0a8">
     <strong class="markup--strong markup--p-strong">
      解析数据
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="dd52">
     当我们转到该 URL 时，而不是下载文件，它在浏览器中显示为文本，这是我们需要准备数据的地方。
    </p>
    <p class="graf graf--p graf-after--p" id="a70a">
     打开 Notepad ++ 并将整个文本粘贴到一个新文件中。首先，需要检查数据是如何组合在一起的，以及希望它如何在 Excel 或其他电子表格程序中结束。由于此数据具有冗长的描述字段以及包含逗号的日期字段，因此我们无法将其准备为传统的 CSV 文件。
    </p>
    <p class="graf graf--p graf-after--p" id="ee02">
     所以想要准备这个文件的方法是将它作为一个表，其中每行包含以 | 分隔的分行符。为了实现这一目标，我想删除每个条目之前出现的数据标签，例如 “hospital_name”:,将其输入标题，并用 | 分隔每个值。
    </p>
    <p class="graf graf--p graf-after--p" id="f4c3">
     <strong class="markup--strong markup--p-strong">
      准备数据
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="974d">
     第一步是将每个条目分成它自己的行，从查看每个条目以 } 结尾的数据开始（大括号）。这是我们使用正则表达式的地方。有点复杂，但幸运的是，谷歌基本上可以做任何你想做的事，而且有人已经编写了代码。
    </p>
    <p class="graf graf--p graf-after--p" id="b8aa">
     按 Ctrl + H（在 PC 上）打开替换对话框; 为了方便起见，在本文中描述我的替换函数，如“ find | replace ”。
    </p>
    <p class="graf graf--p graf-after--p" id="2c3f">
     通过在 Regex 中输入 “\}，\ {| \ n” 将其分隔为新行。基本上，这会找到所有大括号 { 或 }，并用新行替换它们; \ 字符表明您正在寻找该字符，而不是使用它作为一个功能，\ n 创建一个新的行。现在，我们可以在开始和结束时剪掉多余的编码，我们将看到总共有 492 行，每行构成一个条目。
    </p>
    <p class="graf graf--p graf-after--p" id="ac4c">
     我们想用 | 分隔每一行字符，并删除单个行标签。如果在引号之间替换所有文本并后跟分号，就可以实现这一点。因此，我们将“，”（。*？）“：|，”替换为“。（|？）”，表示落在 a ,” 之后 a “:.之前的任意数量的字符。
    </p>
    <p class="graf graf--p graf-after--p" id="f932">
     在此之前，必须考虑之后如何分离字段。大多数字段将用“”，“”分隔，但不是数字和 null / true / false 值。如果你回到浏览器并查看数据的底部，你会看到一个行列表及其类型（字符串，布尔值和数字），布尔值和数字没有被引号括起来，这将使它们更难分开。
    </p>
    <p class="graf graf--p graf-after--p" id="31d0">
     所以我们应该用引号将它们全部包起来。再次，使用查找和替换最简单，首先使用数字，输入 “”:(\d.*?),| “:”\1”,”。 这将替换括号中的所有数字并继续 “： 数字本身用引号括起来。所有其他命令通常都很简单，例如 “true |”true“” 或 “null |”null“”。
    </p>
    <p class="graf graf--p graf-after--p" id="5b86">
     现在，是时候删除每个条目的行标签，我们可以使用与上面相同的公式，“,”(.*?)”:|,” ，最后，用 “”,”|”|”” 分隔所有行。尝试 ”area”:|” 删除第一行标签。好了，到目前为止，它看起来应该是这样的：（
     <a href="https://cdn-images-1.medium.com/max/2600/1*QOl55tGDb_AC1fjZXNTpiA.png" rel="noopener noreferrer" target="_blank">
      大图
     </a>
     ）
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4808 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1100%2C576&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?w=2600&amp;ssl=1 2600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=300%2C157&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=768%2C402&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1024%2C536&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1100%2C576&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?w=2200&amp;ssl=1 2200w" data-recalc-dims="1" height="576" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1100%2C576&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4808" data-recalc-dims="1" height="576" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1100%2C576&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?w=2600&amp;ssl=1 2600w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=300%2C157&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=768%2C402&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1024%2C536&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?resize=1100%2C576&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-15.png?w=2200&amp;ssl=1 2200w" width="1100"/>
     </noscript>
    </p>
    <p class="graf graf--p graf-after--figure" id="070a">
     在准备将数据输入 excel 之前的最后一步，应该返回浏览器，找到 URL 并选择行标题：
    </p>
    <p class="graf graf--p graf-after--p" id="ac0e">
     area%22%2C%22area_of_control%22%2C%22attack_description%22%2C%22city%22%2C%22date%22%2C%22deaths%22%2C%22exact_location%22%2C%22facility_type%22%2C%22hospital_name%22%2C%22hospital_type%22%2C%22injuries%22%2C%22latitude%22%2C%22longitude%22%2C%22mode_of_attack%22%2C%22no_dead%22%2C%22no_injured%22%2C%22outcome_for_facility%22%2C%22perpetrator%22%2C%22total_no_of_attacks%22%2C%22weapons_used
    </p>
    <p class="graf graf--p graf-after--p" id="5f2f">
     将其复制并粘贴到 Notepad ++ 文件顶部的一行中，并将编码的字符替换为 | 字符，例如 “％22％2C％22 ||”
    </p>
    <p class="graf graf--p graf-after--p" id="7df9">
     <strong class="markup--strong markup--p-strong">
      进入 Excel
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="b201">
     现在是让 Excel 或其他电子表格程序仔细检查所有内容是否正确。复制整个文档并将其粘贴到新的 Excel 工作表中，然后在 Excel 中，转到数据选项卡并选择 “Text to Columns”。选择 Delineated，选中“其他”框并输入 | 。然后按完成。当您返回工作表时，请确保没有未对齐行的列。它应该看起来像这样：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4809 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?w=1920&amp;ssl=1 1920w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=300%2C181&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=768%2C464&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1024%2C618&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4809" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1100%2C664&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?w=1920&amp;ssl=1 1920w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=300%2C181&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=768%2C464&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1024%2C618&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-16.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <p class="graf graf--p graf-after--figure" id="619d">
     现在已经完全删除了数据，并且可以根据需要对其进行分析。要做的第一件事就是用相关条目替换所有 Null（ F 和 K 为 False，O 和 P 列为 0）。
    </p>
    <p class="graf graf--p graf-after--p" id="60d3">
     <strong class="markup--strong markup--p-strong">
      探索数据
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="7a6e">
     我想对这些数据做的第一件事就是调查使用最危险的武器对卫生设施的攻击，所以我将插入一个新的伤亡总数。从这里可以制作一个数据透视表，显示汽车炸弹是迄今为止最致命的武器。
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4810 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1100%2C363&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?w=1200&amp;ssl=1 1200w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=300%2C99&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=768%2C253&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1024%2C338&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1100%2C363&amp;ssl=1 1100w" data-recalc-dims="1" height="363" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1100%2C363&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4810" data-recalc-dims="1" height="363" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1100%2C363&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?w=1200&amp;ssl=1 1200w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=300%2C99&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=768%2C253&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1024%2C338&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-17.png?resize=1100%2C363&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <div class="section-inner sectionLayout--insetColumn">
     <p class="graf graf--p graf-after--figure" id="e83b">
      我们还可以看到，大多数针对卫生设施的汽车炸弹并未明确归因于任何参与者，但是它们在 ISIS 的行为中最为常见（在此数据集中 AGAG 指的是反政府武装组织）。
     </p>
    </div>
    <div class="section-inner sectionLayout--outsetColumn">
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-4811 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1100%2C890&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?w=1178&amp;ssl=1 1178w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=300%2C243&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=768%2C621&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1024%2C828&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1100%2C890&amp;ssl=1 1100w" data-recalc-dims="1" height="890" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1100%2C890&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-4811" data-recalc-dims="1" height="890" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1100%2C890&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?w=1178&amp;ssl=1 1178w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=300%2C243&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=768%2C621&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1024%2C828&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-18.png?resize=1100%2C890&amp;ssl=1 1100w" width="1100"/>
      </noscript>
     </div>
    </div>
   </div>
   <div>
    <p class="graf graf--p graf-after--figure" id="d56d">
     也可以将这些数据导入到想要的任何程序中。例如，想探索不同方法的小提琴图及其杀伤力; 为此，我可以将数据导入 R Studio。在 R 中，可以更自由地制作不同类型的图表来汇总数据：
    </p>
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4812 jetpack-lazy-image" data-lazy-sizes="(max-width: 842px) 100vw, 842px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=842%2C914&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?w=842&amp;ssl=1 842w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=276%2C300&amp;ssl=1 276w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=768%2C834&amp;ssl=1 768w" data-recalc-dims="1" height="914" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=842%2C914&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="842"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4812" data-recalc-dims="1" height="914" sizes="(max-width: 842px) 100vw, 842px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=842%2C914&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?w=842&amp;ssl=1 842w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=276%2C300&amp;ssl=1 276w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-19.png?resize=768%2C834&amp;ssl=1 768w" width="842"/>
     </noscript>
    </div>
    <div>
     由于这是地理空间数据，因此还可以使用纬度和经度字段将数据导入到地图程序，比如 Google Earth Pro 或 ArcMap 等 GIS 程序中。
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <img alt="" class="aligncenter size-full wp-image-4813 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1100%2C779&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?w=1382&amp;ssl=1 1382w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=768%2C544&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1024%2C725&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1100%2C779&amp;ssl=1 1100w" data-recalc-dims="1" height="779" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1100%2C779&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4813" data-recalc-dims="1" height="779" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1100%2C779&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?w=1382&amp;ssl=1 1382w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=768%2C544&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1024%2C725&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-20.png?resize=1100%2C779&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </div>
  <div>
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="5a5b">
     <strong class="markup--strong markup--p-strong">
      提取多边形特征（阿勒颇邻域）
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="ce12">
     最后，我们来看看一些更复杂的地理空间特征。在这里谈论的是多边形，而不是点。如果您的研究需要直接与地域控制交互，或者您想要提取某些功能，这可能很有用。在这种情况下，我们将查看阿勒颇地区的详细地图。它由 Aleppo Project 策划，链接
     <a class="markup--anchor markup--p-anchor" data-href="http://www.aleppomaps.ceu.edu/" href="http://www.aleppomaps.ceu.edu/" rel="noopener nofollow noreferrer" target="_blank">
      在此处
     </a>
     。
    </p>
    <p class="graf graf--p graf-after--p" id="45e3">
     要查看邻域，您必须检查图层的可见性。此数据集中的地理数据现在应该很容易找到（查找提及 JSON 和访问令牌的条目），如果您遇到问题，那么看
     <a class="markup--anchor markup--p-anchor" data-href="http://a.tiles.mapbox.com/v4/sidl.pb54bhg5/features.json?access_token=pk.eyJ1Ijoic2lkbCIsImEiOiJkOGM1ZDc0ZTc5NGY0ZGM4MmNkNWIyMmIzNDBkMmZkNiJ9.Qn36nbIqgMc4V0KEhb4iEw" href="http://a.tiles.mapbox.com/v4/sidl.pb54bhg5/features.json?access_token=pk.eyJ1Ijoic2lkbCIsImEiOiJkOGM1ZDc0ZTc5NGY0ZGM4MmNkNWIyMmIzNDBkMmZkNiJ9.Qn36nbIqgMc4V0KEhb4iEw" rel="noopener nofollow noreferrer" target="_blank">
      这里
     </a>
     。查看数据，你会看到它很类似于前面针对健康设施的袭击数据，但它具有更多的坐标。
    </p>
    <p class="graf graf--p graf-after--p" id="0fc3">
     <strong class="markup--strong markup--p-strong">
      Well Keown Text
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="cfab">
     在准备这些数据之前，我们正在研究更复杂的地理形状，这意味着还需要熟悉 Well Keown Text（WKT）地理数据，这是一种以类似于传统 XML 编码的文本格式存储矢量形状的方式（通过其顶点的坐标在地理上定义的形状）。许多程序都能够导入这些数据，但它最容易访问，并且是 Google Earth Engine 的本地语言。如果您在 Google Earth 中绘制任何多边形，将其另存为 KML 并在记事本中打开它，您将在 WKT 中看到一个多边形。
    </p>
    <p class="graf graf--p graf-after--p" id="7e10">
     <strong class="markup--strong markup--p-strong">
      准备数据
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="147d">
     同样，我们需要做的第一件事是使用 Regex 将每个功能分成一个新行。我还利用这个机会从每个条目的前面清除了一些烦人的数据，所以我使用了 “\{“type”:”Feature”,”properties”:\{|”。在这种情况下，也只需要给每个文件的名称和坐标。在一些等值区域地图中，您还需要提取特征，但是现在可以更简单一些。您还可以修剪许多其他字段，例如，使用 “”,”NAME_A”:”(.*?)”,”title”:”(.*?)”,”description”:”(.*?)”,”marker-color”:””,”marker-size”:””,”marker-symbol”:””,”stroke”:”#000000″,”stroke-width”:1,”stroke-opacity”:1,”fill”:”
     <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%236c6c6c" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%236c6c6c" rel="nofollow noopener noreferrer" target="_blank">
      #6c6c6c
     </a>
     ”,”fill-opacity”:0.20000000298023224\},”geometry”:\{|”, and “\],”type”:”Polygon”\},”id”:”(.*?)”\},|” 等等。我在这点上构建了我的数据，所以每个特征现在得到 3 行，第一行是它的名字，第二是它的坐标，第三作为换行符来分隔条目：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4814 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1100%2C525&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?w=1920&amp;ssl=1 1920w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=768%2C367&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1024%2C489&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1100%2C525&amp;ssl=1 1100w" data-recalc-dims="1" height="525" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1100%2C525&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4814" data-recalc-dims="1" height="525" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1100%2C525&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?w=1920&amp;ssl=1 1920w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=768%2C367&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1024%2C489&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-21.png?resize=1100%2C525&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="bbc7">
    接下来要做的是将这些坐标重新格式化为 Google Earth 使用的同一系统。Well Known Text 格式化其坐标，像这样 “long,lat,elev long,lat,elev long,lat,elev” 等等，其中 long 是经度，lat 是纬度，elev 是海拔。这是一个简单的修复，你只需要替换 “\],\[|,0 “。然后移除开头的方括号，并用 “,0” 替换方括号。
   </p>
   <p class="graf graf--p graf-after--p" id="e596">
    <strong class="markup--strong markup--p-strong">
     将其格式化为 KML 文件
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="6067">
    您已完成了准备数据，现在是时候将它放在 KML 文件中了。选取你之前创建的随机 KML 多边形，在记事本中将其打开，然后用第一行替换 &lt;name&gt; 标签中的任何内容，以及 &lt;coordinates&gt; 标签的内容。
   </p>
   <p class="graf graf--p graf-after--p" id="40e4">
    从这里开始，所有需要做的就是替换坐标并将其保存为 KML。（
    <a href="https://cdn-images-1.medium.com/max/2600/1*5LJMDUFuVHl5PUgEqU10JQ.png" rel="noopener noreferrer" target="_blank">
     大图
    </a>
    ）
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4815 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1100%2C553&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?w=1400&amp;ssl=1 1400w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=300%2C151&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=768%2C386&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1024%2C515&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1100%2C553&amp;ssl=1 1100w" data-recalc-dims="1" height="553" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1100%2C553&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4815" data-recalc-dims="1" height="553" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1100%2C553&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?w=1400&amp;ssl=1 1400w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=300%2C151&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=768%2C386&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1024%2C515&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-22.png?resize=1100%2C553&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="e904">
    如果您只想导入一些功能，则可以轻松地将条目手动复制粘贴到 KML 文件中，但如果您要导入全部，则需要将整个数据本身重新格式化为多功能 KML 文件。
   </p>
   <p class="graf graf--p graf-after--p" id="0866">
    替换 “\n([A-Z|a-z])|\n|\1”, “([a-z])\n|\1\?\n”, “\n([0–9])|\n\!\1”, “([0–9])\n|\1#\n”.
   </p>
   <p class="graf graf--p graf-after--p" id="6926">
    这些命令用于在每行的开头和结尾添加标记，以便此后可以将它们复制到 KML 文件的 XML 格式中。所以每两行条目看起来像这样：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4816 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1100%2C153&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?w=1615&amp;ssl=1 1615w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=300%2C42&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=768%2C107&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1024%2C143&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1100%2C153&amp;ssl=1 1100w" data-recalc-dims="1" height="153" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1100%2C153&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4816" data-recalc-dims="1" height="153" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1100%2C153&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?w=1615&amp;ssl=1 1615w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=300%2C42&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=768%2C107&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1024%2C143&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-23.png?resize=1100%2C153&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="c4d0">
    现在必须使用多行替换命令将所有条目添加到 KML 中，因此，简单地复制和粘贴下面的内容，或者更容易点直接从您也打开的模拟 KML 文件中复制和粘贴这些行。
   </p>
   <ul class="postList">
    <li class="graf graf--li graf--startsWithDoubleQuote graf-after--p" id="38b3">
     “\|| &lt;Placemark&gt;\n &lt;name&gt;”. This replaces any | character with the above string.
    </li>
    <li class="graf graf--li graf--startsWithDoubleQuote graf-after--li" id="44cd">
     “\?|&lt;/name&gt;\n &lt;styleUrl&gt;
     <a class="markup--anchor markup--li-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23m_ylw" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23m_ylw" rel="nofollow noopener noreferrer" target="_blank">
      #m_ylw
     </a>
     -pushpin&lt;/styleUrl&gt;\n &lt;Polygon&gt;\n &lt;tessellate&gt;1&lt;/tessellate&gt;\n &lt;outerBoundaryIs&gt;\n &lt;LinearRing&gt;”. Likewise, this replaces the ? character with the above code, the following two commands do the same with ! and # characters.
    </li>
    <li class="graf graf--li graf--startsWithDoubleQuote graf-after--li" id="7d82">
     “\!| &lt;coordinates&gt;\n “
    </li>
    <li class="graf graf--li graf--startsWithDoubleQuote graf-after--li" id="38dd">
     “0\#|0\n &lt;/coordinates&gt;\n &lt;/LinearRing&gt;\n &lt;/outerBoundaryIs&gt;\n &lt;/Polygon&gt;\n &lt;/Placemark&gt;\n”
    </li>
    <li class="graf graf--li graf--startsWithDoubleQuote graf-after--li" id="b9f8">
     “&lt;/Placemark&gt;\n\n &lt;Placemark&gt;|&lt;/Placemark&gt;\n &lt;Placemark&gt;”. This command simply removes an empty line between XML codings.
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="ea88">
    在所有这些中，重要的是复制 | 之间的所有文本，符号和选项卡以及结束引号。
   </p>
   <p class="graf graf--p graf-after--p" id="2238">
    复制并粘贴 KML 文件的开始和结束标记，最好从模拟的 kml 文件中复制并粘贴它们，它们看起来应该是这样的：
   </p>
   <p class="graf graf--p graf-after--p" id="7470">
    &lt;?xml version=”1.0″ encoding=”UTF-8″?&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="cd52">
    &lt;kml xmlns=”
    <a class="markup--anchor markup--p-anchor" data-href="http://www.opengis.net/kml/2.2%E2%80%B3" href="http://www.opengis.net/kml/2.2%E2%80%B3" rel="noreferrer noopener nofollow" target="_blank">
     http://www.opengis.net/kml/2.2″
    </a>
    xmlns:gx=”
    <a class="markup--anchor markup--p-anchor" data-href="http://www.google.com/kml/ext/2.2%E2%80%B3" href="https://www.google.com/kml/ext/2.2%E2%80%B3" rel="noreferrer noopener nofollow" target="_blank">
     http://www.google.com/kml/ext/2.2″
    </a>
    xmlns:kml=”
    <a class="markup--anchor markup--p-anchor" data-href="http://www.opengis.net/kml/2.2%E2%80%B3" href="http://www.opengis.net/kml/2.2%E2%80%B3" rel="noreferrer noopener nofollow" target="_blank">
     http://www.opengis.net/kml/2.2″
    </a>
    xmlns:atom=”
    <a class="markup--anchor markup--p-anchor" data-href="http://www.w3.org/2005/Atom%E2%80%9D" href="https://www.w3.org/2005/Atom%E2%80%9D" rel="noreferrer noopener nofollow" target="_blank">
     http://www.w3.org/2005/Atom”
    </a>
    &gt;
   </p>
   <p class="graf graf--p graf-after--p" id="2cbb">
    &lt;Document&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="83cc">
    &lt;name&gt;tmp.kml&lt;/name&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="4e50">
    &lt;StyleMap id=”m_ylw-pushpin”&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="c0c5">
    &lt;Pair&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="0d72">
    &lt;key&gt;normal&lt;/key&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="04cf">
    &lt;styleUrl&gt;
    <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23s_ylw" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23s_ylw" rel="nofollow noopener noreferrer" target="_blank">
     #s_ylw
    </a>
    -pushpin&lt;/styleUrl&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="7249">
    &lt;/Pair&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="eeb8">
    &lt;Pair&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="f1ee">
    &lt;key&gt;highlight&lt;/key&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="7608">
    &lt;styleUrl&gt;
    <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23s_ylw" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23s_ylw" rel="nofollow noopener noreferrer" target="_blank">
     #s_ylw
    </a>
    -pushpin_hl&lt;/styleUrl&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="f046">
    &lt;/Pair&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="a994">
    &lt;/StyleMap&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="470d">
    &lt;Style id=”s_ylw-pushpin_hl”&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="a32b">
    &lt;IconStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="0aef">
    &lt;scale&gt;1.3&lt;/scale&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="8fc9">
    &lt;Icon&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="c4eb">
    &lt;href&gt;
    <a class="markup--anchor markup--p-anchor" data-href="http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" href="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" rel="noreferrer noopener nofollow" target="_blank">
     http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png
    </a>
    &lt;/href&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="d5a4">
    &lt;/Icon&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="8f2e">
    &lt;hotSpot x=”20″ y=”2″ xunits=”pixels” yunits=”pixels”/&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="8bed">
    &lt;/IconStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="50ea">
    &lt;PolyStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="bbea">
    &lt;color&gt;7fffffff&lt;/color&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="c5b3">
    &lt;colorMode&gt;random&lt;/colorMode&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="6ff4">
    &lt;/PolyStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="976c">
    &lt;/Style&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="180c">
    &lt;Style id=”s_ylw-pushpin”&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="2464">
    &lt;IconStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="62be">
    &lt;scale&gt;1.1&lt;/scale&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="32f7">
    &lt;Icon&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="1688">
    &lt;href&gt;
    <a class="markup--anchor markup--p-anchor" data-href="http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" href="https://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png" rel="noreferrer noopener nofollow" target="_blank">
     http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png
    </a>
    &lt;/href&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="ba6d">
    &lt;/Icon&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="3835">
    &lt;hotSpot x=”20″ y=”2″ xunits=”pixels” yunits=”pixels”/&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="668e">
    &lt;/IconStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="e682">
    &lt;PolyStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="a2a6">
    &lt;color&gt;7fffffff&lt;/color&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="de51">
    &lt;colorMode&gt;random&lt;/colorMode&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="e480">
    &lt;/PolyStyle&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="d922">
    &lt;/Style&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="7473">
    &lt;Folder&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="6a49">
    &lt;name&gt;Aleppo_Neighbourhoods&lt;/name&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="cc6b">
    &lt;open&gt;1&lt;/open&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="b5c7">
    开始部分还有…
   </p>
   <p class="graf graf--p graf-after--p" id="b5c6">
    &lt;/LinearRing&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="57c7">
    &lt;/outerBoundaryIs&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="9df2">
    &lt;/Polygon&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="c941">
    &lt;/Placemark&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="5204">
    &lt;/Folder&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="66c9">
    &lt;/Document&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="450f">
    &lt;/kml&gt;
   </p>
   <p class="graf graf--p graf-after--p" id="b161">
    现在尝试将其保存为 KML（在下拉菜单中选择可扩展标记语言文件并在保存对话框中将 “xml”替换为 “kml”）在 Google Earth 中打开它以查找任何错误。
   </p>
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4817 jetpack-lazy-image" data-lazy-sizes="(max-width: 529px) 100vw, 529px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?resize=529%2C291&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?w=529&amp;ssl=1 529w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?resize=300%2C165&amp;ssl=1 300w" data-recalc-dims="1" height="291" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?resize=529%2C291&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="529"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4817" data-recalc-dims="1" height="291" sizes="(max-width: 529px) 100vw, 529px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?resize=529%2C291&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?w=529&amp;ssl=1 529w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-24.png?resize=300%2C165&amp;ssl=1 300w" width="529"/>
    </noscript>
   </div>
   <div>
    <div class="section-inner sectionLayout--insetColumn">
     <p class="graf graf--p graf-after--figure" id="5a59">
      要诊断需要找到第 259 行，看看有什么不对。这里很容易看到：
     </p>
    </div>
    <div class="section-inner sectionLayout--outsetColumn">
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-4818 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1100%2C367&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?w=1824&amp;ssl=1 1824w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=768%2C256&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1024%2C341&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1100%2C367&amp;ssl=1 1100w" data-recalc-dims="1" height="367" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1100%2C367&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-4818" data-recalc-dims="1" height="367" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1100%2C367&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?w=1824&amp;ssl=1 1824w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=768%2C256&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1024%2C341&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-25.png?resize=1100%2C367&amp;ssl=1 1100w" width="1100"/>
      </noscript>
     </div>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="62bc">
    在 find 和 replace 标签中，因为行以 “）”结尾，所以它没有收到名称结束标记（“？”）。因此，它缺少 &lt;name&gt; 标记和 &lt;coordinates&gt; 标记之间的几行 XML 编码。解决此问题的最快方法是手动复制和粘贴缺失的行，但如果您的数据集有很多以结束括号结尾的名称，您可以在用于添加名称结束标记的“Find and Replace”中包含它，例如使用命令 “([a-z]|\))\n|\1\?\n”。我的数据集对于另外 6 个或 7 个条目具有相同的错误，但都通过了对缺失行的简单复制和粘贴得以修复。
   </p>
   <p class="graf graf--p graf-after--p" id="8a5f">
    通过它，您可以在单个 KML 文件中包含所有多边形条目，该文件可以在 Google Earth 中打开或导入到其他 GIS 程序中。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4819 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1100%2C646&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=300%2C176&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=768%2C451&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1024%2C602&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1100%2C646&amp;ssl=1 1100w" data-recalc-dims="1" height="646" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1100%2C646&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4819" data-recalc-dims="1" height="646" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1100%2C646&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=300%2C176&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=768%2C451&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1024%2C602&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/11/0-26.png?resize=1100%2C646&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="9d08">
    这些是关于如何刮取公共地理空间数据以供您自己分析的一些示例。可用于交互式地图中大多数数据集。有一些例外，ArcGIS 和 QGIS 的本机平台通过 Web 地图服务器隐藏其数据，因此无法下载基础数据。此外，几乎每个数据集都以不同的方式组织数据。
   </p>
   <p class="graf graf--p graf-after--p" id="804e">
    希望这些基础知识可以帮助您开始学习刮取数据所需的技能，但每个数据集都有各自不同的挑战。找到您自己喜欢的交互式地图，看看您可以从中提取哪些数据。这是很好的练习。
   </p>
   <p class="graf graf--p graf-after--p" id="e3c6">
    如果你想要一个真正的挑战，到目前为止我认为最困难的数据集是
    <a class="markup--anchor markup--p-anchor" data-href="http://conflictalert.info/generate-maps/" href="http://conflictalert.info/generate-maps/" rel="noopener nofollow noreferrer" target="_blank">
     菲律宾棉兰老岛穆斯林自治区（ARMM）的犯罪信息事件数据库
    </a>
    。有兴趣的朋友不妨试试看，可以将您的操作分析写成文章发给我们。好运！
   </p>
   <p class="graf graf--p graf-after--p" id="ba68">
    感谢
    <a class="markup--anchor markup--p-anchor" data-href="https://www.bellingcat.com/" href="https://www.bellingcat.com/" rel="noopener nofollow noreferrer" target="_blank">
     bellingcat
    </a>
    的技术分析。支持
    <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23OSINT" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?referralInfo=sidebar&amp;query=%23OSINT" rel="nofollow noopener noreferrer" target="_blank">
     #OSINT
    </a>
    民间独立调查，捍卫公民知情权，随时欢迎您的开创性思路。⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e50298af30">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4805" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%93%e5%8f%96%e4%ba%a4%e4%ba%92%e5%bc%8f%e5%9c%b0%e7%90%86%e7%a9%ba%e9%97%b4%e6%95%b0%e6%8d%ae%ef%bc%9f-osint/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4805" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%93%e5%8f%96%e4%ba%a4%e4%ba%92%e5%bc%8f%e5%9c%b0%e7%90%86%e7%a9%ba%e9%97%b4%e6%95%b0%e6%8d%ae%ef%bc%9f-osint/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-4805-5f3e50298c192" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=4805&amp;origin=www.iyouport.org&amp;obj_id=161182987-4805-5f3e50298c192" id="like-post-wrapper-161182987-4805-5f3e50298c192">
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
   <time class="entry-date published" datetime="2018-11-06T02:40:36+08:00">
    2018年11月6日
   </time>
   <time class="updated" datetime="2019-06-01T03:41:03+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

