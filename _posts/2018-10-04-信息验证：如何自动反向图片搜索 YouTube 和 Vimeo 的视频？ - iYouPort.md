---
layout: post
title: "信息验证：如何自动反向图片搜索 YouTube 和 Vimeo 的视频？ - iYouPort"
date: 2018-10-04T19:59:45+00:00
author: iYouPort
from: https://www.iyouport.org/%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%ef%bc%9a%e5%a6%82%e4%bd%95%e8%87%aa%e5%8a%a8%e5%8f%8d%e5%90%91%e5%9b%be%e7%89%87%e6%90%9c%e7%b4%a2-youtube-%e5%92%8c-vimeo-%e7%9a%84%e8%a7%86%e9%a2%91%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4822 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-opinion category-289 tag-investigative tag-osint tag-technique tag-technology tag-tools" id="post-4822">
 <header class="entry-header">
  <h1 class="entry-title">
   信息验证：如何自动反向图片搜索 YouTube 和 Vimeo 的视频？
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
   <a href="https://www.iyouport.org/category/opinion/" rel="category tag">
    Opinion
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-10-05T03:59:45+08:00">
    2018年10月5日
   </time>
   <time class="updated" datetime="2019-06-01T04:11:49+08:00">
    2019年6月1日
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
      <strong>
       小工具，挖信息，提高生产力
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4823 jetpack-lazy-image" data-lazy-sizes="(max-width: 987px) 100vw, 987px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=987%2C662&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?w=987&amp;ssl=1 987w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=300%2C201&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=768%2C515&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="662" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=987%2C662&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="987"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4823" data-recalc-dims="1" height="662" sizes="(max-width: 987px) 100vw, 987px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=987%2C662&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?w=987&amp;ssl=1 987w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=300%2C201&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=768%2C515&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-52.jpeg?resize=272%2C182&amp;ssl=1 272w" width="987"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="5817">
   如何从 YouTube 视频中获取预览图像并将其用于信息验证？以及找到链接到该视频的其他网站？这种技术称为
   <strong class="markup--strong markup--p-strong">
    反向图像搜索 — —
   </strong>
   对于开源调查 OSINT 来说是非常强大的，因为它可以为您提供额外的站点，可以查看谁正在使用特定的视频，并且它还可以告诉您是否有人在制作原始视频时撒了谎。
  </p>
  <p class="graf graf--p graf-after--p" id="8272">
   我们现在要做的是使用 YouTube API 和 TinEye API（付费）自动完成此过程。本练习的目的是开发一个脚本，只需输入 YouTube 视频 ID，让脚本检索视频缩略图并将其提交给 TinEye 进行反向图像搜索。这里的目标是加快进行此验证的过程。
  </p>
  <p class="graf graf--p graf-after--p" id="5ce3">
   <strong class="markup--strong markup--p-strong">
    YouTube API — 检索预览照片
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="e3ee">
   <strong class="markup--strong markup--p-strong">
    YouTube API 非常适合搜索视频以及从视频记录中提取大量元数据
   </strong>
   。我们将利用 API 检索特定视频的缩略图，然后将这些缩略图传递给 TinEye API，以便让它帮助执行反向图像搜索。
  </p>
  <p class="graf graf--p graf-after--p" id="f269">
   首先，
   <span class="markup--quote markup--p-quote is-other" data-creator-ids="e5835fc6e3b2">
    请务必
    <a class="markup--anchor markup--p-anchor" data-href="https://developers.google.com/youtube/v3/getting-started" href="https://developers.google.com/youtube/v3/getting-started" rel="noopener nofollow noreferrer" target="_blank">
     在此处
    </a>
    获取 YouTube API 密钥
   </span>
   。此外，还有一种已知的 URL 格式，可以为您提供额外的视频预览图像。我们将在脚本中构建此 URL 格式，以便获得最佳覆盖率。
  </p>
  <p class="graf graf--p graf-after--p" id="7219">
   <strong class="markup--strong markup--p-strong">
    TinEye API
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="3d67">
   TinEye 的人很友好，还创建了一个 Python 库，用于与他们的商业 API 进行通信。您可以从
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/TinEye/pytineye" href="https://github.com/TinEye/pytineye" rel="noopener nofollow noreferrer" target="_blank">
    这里
   </a>
   获取它，文档在
   <a class="markup--anchor markup--p-anchor" data-href="https://api.tineye.com/python/docs/" href="https://api.tineye.com/python/docs/" rel="noopener nofollow noreferrer" target="_blank">
    这里
   </a>
   。请确保按照他们的说明安装 Python 库。
  </p>
  <p class="graf graf--p graf-after--p" id="1020">
   <strong class="markup--strong markup--p-strong">
    开始编码
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="8f3b">
   首先，
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4824 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1100%2C366&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?w=1480&amp;ssl=1 1480w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=768%2C255&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1024%2C340&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1100%2C366&amp;ssl=1 1100w" data-recalc-dims="1" height="366" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1100%2C366&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4824" data-recalc-dims="1" height="366" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1100%2C366&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?w=1480&amp;ssl=1 1480w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=768%2C255&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1024%2C340&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-53.jpeg?resize=1100%2C366&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="1789">
    这里只是介绍必要的库，初始化 TinEye API 并添加一些命令行参数解析。没有什么太花哨的。现在进入 YouTube API 调用的管道：
   </p>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4825 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1100%2C433&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?w=1478&amp;ssl=1 1478w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=300%2C118&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=768%2C302&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1024%2C403&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1100%2C433&amp;ssl=1 1100w" data-recalc-dims="1" height="433" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1100%2C433&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4825" data-recalc-dims="1" height="433" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1100%2C433&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?w=1478&amp;ssl=1 1478w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=300%2C118&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=768%2C302&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1024%2C403&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-54.jpeg?resize=1100%2C433&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="4d99">
    好的，再解释一下：
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="7765">
     第 20 行： 正在定义 youtube_video_details 函数以获取视频 ID。
    </li>
    <li class="graf graf--li graf-after--li" id="a4fe">
     第 22–24 行： 通过传递视频 ID 和 YouTube API 密钥来构建我们的 YouTube API 请求网址。
    </li>
    <li class="graf graf--li graf-after--li" id="44ca">
     第 26 行： 将请求发送到 Google 服务器。
    </li>
    <li class="graf graf--li graf-after--li" id="6cf8">
     第 28–32 行： 如果我们得到一个好的响应（28）解析 JSON（30）并返回查询结果（32）。
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="1a8c">
    完美，此功能将用于获取与每个 YouTube 视频相关联的默认缩略图。现在将使用此函数构建一个可以传递给 TinEye 的图像 URL 列表。我们现在添加这样的代码：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4826 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1100%2C338&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?w=1476&amp;ssl=1 1476w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=300%2C92&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=768%2C236&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1024%2C315&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1100%2C338&amp;ssl=1 1100w" data-recalc-dims="1" height="338" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1100%2C338&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4826" data-recalc-dims="1" height="338" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1100%2C338&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?w=1476&amp;ssl=1 1476w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=300%2C92&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=768%2C236&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1024%2C315&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-55.jpeg?resize=1100%2C338&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="fbe1">
      第 38 行： 使用之前开发的函数来检索与特定视频相关的所有数据（请注意：您可以浏览 video_data 变量并查看附加到每个视频的所有元数据）。
     </li>
     <li class="graf graf--li graf-after--li" id="06d2">
      第 40 行： 从结果中提取缩略图列表。
     </li>
     <li class="graf graf--li graf-after--li" id="5cd5">
      第 47–49 行： 在这里循环每个缩略图（47）并将其添加到 URL 的主列表（49）。稍后将使用此主列表。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="eb4a">
     现在有了一个众所周知但未被记录过的 YouTube 视频技巧，可让您为感兴趣的视频获取额外的预览图像。这只是简单地在 YouTube 服务器上采用已知路径，以及视频 ID 和请求顺序图像列表。添加以下代码来实现此目的：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4827 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1100%2C196&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=300%2C54&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=768%2C137&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1024%2C183&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1100%2C196&amp;ssl=1 1100w" data-recalc-dims="1" height="196" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1100%2C196&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4827" data-recalc-dims="1" height="196" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1100%2C196&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=300%2C54&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=768%2C137&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1024%2C183&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-56.jpeg?resize=1100%2C196&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="7685">
     非常简单，只需运行从 0 到 3 的循环计数，并使用计数器和我们传入脚本的视频 ID 构建 URL。所以这将生成一个列表，这样：
    </p>
    <p class="graf graf--p graf-after--p" id="c06a">
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/0.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/0.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/0.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="5faf">
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/1.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/1.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/1.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="474d">
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/2.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/2.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/2.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="52d7">
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/3.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/3.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/3.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="33ed">
     现在我们将遍历每个 URL 并将其提交给 TinEye API。敲以下代码：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4828 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1100%2C384&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?w=1478&amp;ssl=1 1478w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=300%2C105&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=768%2C268&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1024%2C357&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1100%2C384&amp;ssl=1 1100w" data-recalc-dims="1" height="384" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1100%2C384&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4828" data-recalc-dims="1" height="384" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1100%2C384&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?w=1478&amp;ssl=1 1478w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=300%2C105&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=768%2C268&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1024%2C357&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-57.jpeg?resize=1100%2C384&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="0e0b">
      第 60 行： 初始化一个结果列表，将存储从 TinEye 返回的所有匹配项。
     </li>
     <li class="graf graf--li graf-after--li" id="e28e">
      第 63–73 行： 遍历我们的 URL 列表（63）然后使用 search_url 函数（68）将 URL 提交给 TinEye API 。如果检测到匹配（72）将每个匹配添加到 results 列表中（73）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="8a5f">
     好的，此时应该有一个 TinEye Match 对象列表，其中包含有关搜索结果的信息。现在选择该对象，并提取重要的信息，即该图像的任何匹配网站的 URL 以及 TinEye 抓取它的日期。
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4829 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1100%2C296&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?w=1478&amp;ssl=1 1478w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=300%2C81&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=768%2C207&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1024%2C276&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1100%2C296&amp;ssl=1 1100w" data-recalc-dims="1" height="296" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1100%2C296&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4829" data-recalc-dims="1" height="296" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1100%2C296&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?w=1478&amp;ssl=1 1478w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=300%2C81&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=768%2C207&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1024%2C276&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-58.jpeg?resize=1100%2C296&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="ffe0">
      第 75–76 行： 初始化 result_urls 列表（75）以存储在 TinEye 索引中找到的任何 URL 和一个 日期 字典，该字典将保存按日期键入的 URL，以便对它们进行排序，并确定包含匹配图像的最早日子的网址。
     </li>
     <li class="graf graf--li graf-after--li" id="c1ea">
      第 78–85 行： 遍历每个匹配（78）然后开始循环遍历 TinEye Match 对象（80）中包含的每个链接。测试一下是否已经捕获了 URL（82）如果没有存储 URL（84）和它已被检索的日期（85）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="da35">
     很棒，完成了！只需要下面这一点：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4830 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1100%2C295&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?w=1478&amp;ssl=1 1478w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=300%2C80&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=768%2C206&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1024%2C274&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1100%2C295&amp;ssl=1 1100w" data-recalc-dims="1" height="295" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1100%2C295&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4830" data-recalc-dims="1" height="295" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1100%2C295&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?w=1478&amp;ssl=1 1478w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=300%2C80&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=768%2C206&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1024%2C274&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-59.jpeg?resize=1100%2C295&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <p class="graf graf--p graf-after--figure" id="282d">
     非常简单的东西。只是循环遍历所有发现的网址并将其打印出来。然后通过对日期进行排序并使用最早的 date 作为 dictionary 中的 Key 来查找。
    </p>
    <p class="graf graf--p graf-after--p" id="9c4a">
     这里有一个关于在叙利亚从地面发射火箭的视频，用它来测试一下。该视频位于：
     <a class="markup--anchor markup--p-anchor" data-href="http://www.youtube.com/watch?v=zGM47VtGQ-4" href="https://www.youtube.com/watch?v=zGM47VtGQ-4" rel="noreferrer noopener nofollow" target="_blank">
      www.youtube.com/watch?v=zGM47VtGQ-4
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="eaed">
     因此，要使用的视频 ID 是：zGM47VtGQ-4
    </p>
    <p class="graf graf--p graf-after--p" id="c4b9">
     justin$:&gt; python
     <a class="markup--anchor markup--p-anchor" data-href="http://bellingcatyoutube.py/" href="http://bellingcatyoutube.py/" rel="noreferrer noopener nofollow" target="_blank">
      bellingcatyoutube.py
     </a>
     -v zGM47VtGQ-4
    </p>
    <p class="graf graf--p graf-after--p" id="3126">
     [*] Retrieving video ID: zGM47VtGQ-4
    </p>
    <p class="graf graf--p graf-after--p" id="52f3">
     [*] Thumbnails retrieved. Now submitting to TinEye.
    </p>
    <p class="graf graf--p graf-after--p" id="5f75">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="https://i.ytimg.com/vi/zGM47VtGQ-4/default.jpg" href="https://i.ytimg.com/vi/zGM47VtGQ-4/default.jpg" rel="noreferrer noopener nofollow" target="_blank">
      https://i.ytimg.com/vi/zGM47VtGQ-4/default.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="ccad">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="https://i.ytimg.com/vi/zGM47VtGQ-4/hqdefault.jpg" href="https://i.ytimg.com/vi/zGM47VtGQ-4/hqdefault.jpg" rel="noreferrer noopener nofollow" target="_blank">
      https://i.ytimg.com/vi/zGM47VtGQ-4/hqdefault.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="b33c">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="https://i.ytimg.com/vi/zGM47VtGQ-4/mqdefault.jpg" href="https://i.ytimg.com/vi/zGM47VtGQ-4/mqdefault.jpg" rel="noreferrer noopener nofollow" target="_blank">
      https://i.ytimg.com/vi/zGM47VtGQ-4/mqdefault.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="60de">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="https://i.ytimg.com/vi/zGM47VtGQ-4/maxresdefault.jpg" href="https://i.ytimg.com/vi/zGM47VtGQ-4/maxresdefault.jpg" rel="noreferrer noopener nofollow" target="_blank">
      https://i.ytimg.com/vi/zGM47VtGQ-4/maxresdefault.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="4992">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="https://i.ytimg.com/vi/zGM47VtGQ-4/sddefault.jpg" href="https://i.ytimg.com/vi/zGM47VtGQ-4/sddefault.jpg" rel="noreferrer noopener nofollow" target="_blank">
      https://i.ytimg.com/vi/zGM47VtGQ-4/sddefault.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="cbed">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/0.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/0.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/0.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="3cf9">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/1.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/1.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/1.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="928d">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/2.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/2.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/2.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="5140">
     [*] Searching TinEye for:
     <a class="markup--anchor markup--p-anchor" data-href="http://img.youtube.com/vi/zGM47VtGQ-4/3.jpg" href="https://img.youtube.com/vi/zGM47VtGQ-4/3.jpg" rel="noreferrer noopener nofollow" target="_blank">
      http://img.youtube.com/vi/zGM47VtGQ-4/3.jpg
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="5241">
     [*] Discovered 725 unique URLs with image matches.
    </p>
    <p class="graf graf--p graf-after--p" id="9ef7">
     <a class="markup--anchor markup--p-anchor" data-href="http://nnm.me/blogs/Y2k_live/chto-mogut-protivopostavit-boeviki-igil-rossiyskim-samoletam/" href="http://nnm.me/blogs/Y2k_live/chto-mogut-protivopostavit-boeviki-igil-rossiyskim-samoletam/" rel="noreferrer noopener nofollow" target="_blank">
      http://nnm.me/blogs/Y2k_live/chto-mogut-protivopostavit-boeviki-igil-rossiyskim-samoletam/
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="8b68">
     <a class="markup--anchor markup--p-anchor" data-href="http://edition.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html" href="https://edition.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html" rel="noreferrer noopener nofollow" target="_blank">
      http://edition.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="57ff">
     <a class="markup--anchor markup--p-anchor" data-href="http://www.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html" href="https://www.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html" rel="noreferrer noopener nofollow" target="_blank">
      http://www.cnn.com/2014/11/12/world/meast/syria-isis-child-fighter/index.html
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="4ba5">
     <a class="markup--anchor markup--p-anchor" data-href="http://www.aktuel.com.tr/multimedya/galeri/gundem/isid-2-adet-helikopter-dusurdu?albumId=67897&amp;page=8&amp;tc=12" href="http://www.aktuel.com.tr/multimedya/galeri/gundem/isid-2-adet-helikopter-dusurdu?albumId=67897&amp;page=8&amp;tc=12" rel="noreferrer noopener nofollow" target="_blank">
      http://www.aktuel.com.tr/multimedya/galeri/gundem/isid-2-adet-helikopter-dusurdu?albumId=67897&amp;page=8&amp;tc=12
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="1f0c">
     <a class="markup--anchor markup--p-anchor" data-href="http://www.cnn.com/2014/11/14/world/meast/isis-setbacks-iraq-lister/" href="https://www.cnn.com/2014/11/14/world/meast/isis-setbacks-iraq-lister/" rel="noreferrer noopener nofollow" target="_blank">
      http://www.cnn.com/2014/11/14/world/meast/isis-setbacks-iraq-lister/
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="90a1">
     <a class="markup--anchor markup--p-anchor" data-href="http://www.tinmoi.vn/thach-thuc-tag.html" href="http://www.tinmoi.vn/thach-thuc-tag.html" rel="noreferrer noopener nofollow" target="_blank">
      http://www.tinmoi.vn/thach-thuc-tag.html
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="65e5">
     <a class="markup--anchor markup--p-anchor" data-href="http://www.abc.net.au/news/2015-11-20/two-australians-accused-of-being-part-of-terrorist-kuwait-plot/6957330" href="https://www.abc.net.au/news/2015-11-20/two-australians-accused-of-being-part-of-terrorist-kuwait-plot/6957330" rel="noreferrer noopener nofollow" target="_blank">
      http://www.abc.net.au/news/2015-11-20/two-australians-accused-of-being-part-of-terrorist-kuwait-plot/6957330
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="cf99">
     <a class="markup--anchor markup--p-anchor" data-href="http://finance.chinanews.com/stock/2013/10-11/5364352.shtml" href="http://finance.chinanews.com/stock/2013/10-11/5364352.shtml" rel="noreferrer noopener nofollow" target="_blank">
      http://finance.chinanews.com/stock/2013/10-11/5364352.shtml
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="fa52">
     ….
    </p>
    <p class="graf graf--p graf-after--p" id="cb26">
     [*] Oldest match was crawled on 2014–10–10 00:00:00 at
     <a class="markup--anchor markup--p-anchor" data-href="http://finance.chinanews.com/stock/2013/11-15/5508881.shtml" href="http://finance.chinanews.com/stock/2013/11-15/5508881.shtml" rel="noreferrer noopener nofollow" target="_blank">
      http://finance.chinanews.com/stock/2013/11-15/5508881.shtml
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="3e71">
     很棒啊，所以现在你可能有很多网站可以去调查。如果要验证正在观看的镜头是新的还是旧的，被抓取的最早日期是非常重要的。过程可能由于 TinEye index 的不同而不同。
    </p>
    <h3 class="graf graf--h3 graf-after--p" id="ae38">
     自动反向图像搜索第 2 部分：Vimeo
    </h3>
    <p class="graf graf--p graf-after--h3" id="10d8">
     <strong class="markup--strong markup--p-strong">
      Vimeo Simple API
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="00a3">
     Vimeo 确实有一个全功能的 API，可以用它来做各种奇特的东西，如搜索视频、用户等。这称为高级 API。但是 Vimeo 还有一个方便的功能，它们会自动为他们发布的每个视频提供 JSON 输出，他们称之为 Simple API。例如，这个排球视频：
    </p>
    <p class="graf graf--p graf-after--p" id="a124">
     <a class="markup--anchor markup--p-anchor" data-href="https://vimeo.com/71215064" href="https://vimeo.com/71215064" rel="noreferrer noopener nofollow" target="_blank">
      https://vimeo.com/71215064
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="da79">
     我们可以看到该视频的视频 ID 是：71215064
    </p>
    <p class="graf graf--p graf-after--p" id="eccf">
     要检索此视频的所有 JSON，我们可以使用以下 URL 方案：
    </p>
    <p class="graf graf--p graf-after--p" id="a616">
     <a class="markup--anchor markup--p-anchor" data-href="http://vimeo.com/api/v2/video/%7BVIDEOID%7D.json" href="https://vimeo.com/api/v2/video/%7BVIDEOID%7D.json" rel="noreferrer noopener nofollow" target="_blank">
      http://vimeo.com/api/v2/video/{VIDEOID}.json
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="9630">
     所以在排球示例中，看起来像这样：
    </p>
    <p class="graf graf--p graf-after--p" id="23a3">
     <a class="markup--anchor markup--p-anchor" data-href="http://vimeo.com/api/v2/video/71215064.json" href="https://vimeo.com/api/v2/video/71215064.json" rel="noreferrer noopener nofollow" target="_blank">
      http://vimeo.com/api/v2/video/71215064.json
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="5e0a">
     使用 Simple API 的
     <strong class="markup--strong markup--p-strong">
      主要缺点是它仅对公共视频有用。如果您需要脚本查询私有视频或对 Vimeo 进行更高级的查询，则需要获取 API 密钥并查看
     </strong>
     <a class="markup--anchor markup--p-anchor" data-href="https://developer.vimeo.com/" href="https://developer.vimeo.com/" rel="noopener nofollow noreferrer" target="_blank">
      <strong class="markup--strong markup--p-strong">
       开发人员文档
      </strong>
     </a>
     <strong class="markup--strong markup--p-strong">
      。
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="cae8">
     <strong class="markup--strong markup--p-strong">
      检查 JSON
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="3968">
     那么这个 JSON 文档实际上包含什么？如果您只是浏览到该 URL，浏览器将下载一个 JSON 文件，您可以使用喜欢的文本编辑器或我最喜欢的 Python IDE，
     <a class="markup--anchor markup--p-anchor" data-href="http://www.wingide.com/" href="http://www.wingide.com/" rel="noopener nofollow noreferrer" target="_blank">
      Wing
     </a>
     打开它。我们来看看JSON：
    </p>
    <p class="graf graf--p graf-after--p" id="b00f">
     u’duration’: 303,
    </p>
    <p class="graf graf--p graf-after--p" id="b752">
     u’embed_privacy’: u’anywhere’,
    </p>
    <p class="graf graf--p graf-after--p" id="88cd">
     u’height’: 480,
    </p>
    <p class="graf graf--p graf-after--p" id="61e1">
     u’id’: 71215064,
    </p>
    <p class="graf graf--p graf-after--p" id="ba7e">
     u’mobile_url’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://vimeo.com/71215064%E2%80%B2" href="https://vimeo.com/71215064%E2%80%B2" rel="noreferrer noopener nofollow" target="_blank">
      https://vimeo.com/71215064′
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="2445">
     u’stats_number_of_comments’: 3,
    </p>
    <p class="graf graf--p graf-after--p" id="3c5c">
     u’stats_number_of_likes’: 59,
    </p>
    <p class="graf graf--p graf-after--p" id="8a93">
     u’stats_number_of_plays’: 49593,
    </p>
    <p class="graf graf--p graf-after--p" id="9b8b">
     u’tags’: u’volleyball, olympics, olympic games, london 2012, highlights, slow motion, brazil, russia, poland, italy’,
    </p>
    <p class="graf graf--p graf-after--p" id="2a4e">
     u’thumbnail_large’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/video/444712440_640.webp%E2%80%99" href="https://i.vimeocdn.com/video/444712440_640.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/video/444712440_640.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="30d4">
     u’thumbnail_medium’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/video/444712440_200x150.webp%E2%80%99" href="https://i.vimeocdn.com/video/444712440_200x150.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/video/444712440_200x150.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="0fe5">
     u’thumbnail_small’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/video/444712440_100x75.webp%E2%80%99" href="https://i.vimeocdn.com/video/444712440_100x75.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/video/444712440_100x75.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="a704">
     u’title’: u’Olympic Games 2012 Volleyball in slow motion’,
    </p>
    <p class="graf graf--p graf-after--p" id="aaa4">
     u’upload_date’: u’2013–07–28 17:34:09′,
    </p>
    <p class="graf graf--p graf-after--p" id="f043">
     u’url’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://vimeo.com/71215064%E2%80%B2" href="https://vimeo.com/71215064%E2%80%B2" rel="noreferrer noopener nofollow" target="_blank">
      https://vimeo.com/71215064′
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="f1cb">
     u’user_id’: 2460313,
    </p>
    <p class="graf graf--p graf-after--p" id="cafd">
     u’user_name’: u’Yngve Sundfjord’,
    </p>
    <p class="graf graf--p graf-after--p" id="830f">
     u’user_portrait_huge’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/portrait/362408_300x300.webp%E2%80%99" href="https://i.vimeocdn.com/portrait/362408_300x300.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/portrait/362408_300x300.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="d571">
     u’user_portrait_large’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/portrait/362408_100x100.webp%E2%80%99" href="https://i.vimeocdn.com/portrait/362408_100x100.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/portrait/362408_100x100.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="094b">
     u’user_portrait_medium’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/portrait/362408_75x75.webp%E2%80%99" href="https://i.vimeocdn.com/portrait/362408_75x75.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/portrait/362408_75x75.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="70bb">
     u’user_portrait_small’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://i.vimeocdn.com/portrait/362408_30x30.webp%E2%80%99" href="https://i.vimeocdn.com/portrait/362408_30x30.webp%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://i.vimeocdn.com/portrait/362408_30x30.webp’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="ee94">
     u’user_url’: u’
     <a class="markup--anchor markup--p-anchor" data-href="https://vimeo.com/sundfjord%E2%80%99" href="https://vimeo.com/sundfjord%E2%80%99" rel="noreferrer noopener nofollow" target="_blank">
      https://vimeo.com/sundfjord’
     </a>
     ,
    </p>
    <p class="graf graf--p graf-after--p" id="144a">
     u’width’: 640}]
    </p>
    <p class="graf graf--p graf-after--p" id="f379">
     很棒吧，在这里存储了大量有用的信息。特别是如果你对 thumbnail_large 密钥感兴趣，因为这将为你提供可用于提交给 TinEye API 的图像，以查看是否有其他结果或包含目标图像的其他网站。同样，你会注意到 upload_date ，可以使用它来验证此视频是否在反向图像搜索中找到的其他结果之前出现过。
    </p>
    <p class="graf graf--p graf-after--p" id="7dfa">
     开始编码。打开一个新脚本并将其命名为
     <a class="markup--anchor markup--p-anchor" data-href="http://vimeoreversesearch.py/" href="http://vimeoreversesearch.py/" rel="noreferrer noopener nofollow" target="_blank">
      vimeoreversesearch.py
     </a>
     并打入以下代码：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4831 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1100%2C305&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?w=1472&amp;ssl=1 1472w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=300%2C83&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=768%2C213&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1024%2C284&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1100%2C305&amp;ssl=1 1100w" data-recalc-dims="1" height="305" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1100%2C305&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4831" data-recalc-dims="1" height="305" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1100%2C305&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?w=1472&amp;ssl=1 1472w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=300%2C83&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=768%2C213&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1024%2C284&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-60.jpeg?resize=1100%2C305&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <div class="section-inner sectionLayout--insetColumn">
     <p class="graf graf--p graf-after--figure" id="9d1a">
      没有什么太花哨的。只是设置 TinEye API，为脚本添加一些参数解析，并从传入的命令行参数中提取 video_id 变量。现在实现我们的 Vimeo JSON 检索功能：
     </p>
    </div>
    <div class="section-inner sectionLayout--outsetColumn">
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-4832 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1100%2C502&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?w=1476&amp;ssl=1 1476w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=300%2C137&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=768%2C351&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1024%2C468&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1100%2C502&amp;ssl=1 1100w" data-recalc-dims="1" height="502" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1100%2C502&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-4832" data-recalc-dims="1" height="502" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1100%2C502&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?w=1476&amp;ssl=1 1476w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=300%2C137&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=768%2C351&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1024%2C468&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-61.jpeg?resize=1100%2C502&amp;ssl=1 1100w" width="1100"/>
      </noscript>
     </div>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="26ce">
      第 17 行： 定义了 get_vimeo_video 函数，该函数接收一个 video_id 参数，该参数表示我们之前介绍过的 Vimeo 视频 ID。
     </li>
     <li class="graf graf--li graf-after--li" id="95f1">
      第 19–21 行： 正在构建 URL 以检索视频 JSON（19），然后关闭 HTTP 请求（21）。
     </li>
     <li class="graf graf--li graf-after--li" id="e425">
      第 23–29 行： 如果我们的请求成功（23）那么将解析的 JSON 存储在 video_info 变量中（25）。输出视频上传的日期（27）然后返回视频的大预览图像的位置（29）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="3227">
     好的，到目前为止开发的代码将负责从 Vimeo 服务器中获取和解析 JSON，并为我们提供一个图像位置，可以用它来使用 TinEye API 进行反向搜索。现在通过实现一个处理它的函数将该图像传送给 TinEye。其中一些代码可以从之前的帖子中重复过来，因此看起来很熟悉。将以下代码添加到脚本中：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4833 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1100%2C525&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=768%2C366&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1024%2C488&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1100%2C525&amp;ssl=1 1100w" data-recalc-dims="1" height="525" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1100%2C525&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4833" data-recalc-dims="1" height="525" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1100%2C525&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=768%2C366&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1024%2C488&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-62.jpeg?resize=1100%2C525&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <ul class="postList">
    <li class="graf graf--li graf-after--figure" id="f2b7">
     第 39 行： 创建 search_tineye 函数，该函数接收 image_url 参数，该参数是 Vimeo 预览图像的位置。
    </li>
    <li class="graf graf--li graf-after--li" id="b655">
     第 41–45 行： 将请求发送到 TinEye API（42），如果我们的调用有任何问题（通常是因为您错误地复制/粘贴了 API 密钥），那么输出一条错误消息（44）并返回（ 45）。
    </li>
    <li class="graf graf--li graf-after--li" id="2d9b">
     第 50–57 行： 浏览 TinEye 结果列表（50），每个结果可以包含已跑过的 links（52）。开始向 result_urls 添加新链接（56）并将链接日期添加到日期列表中，以便稍后可以找到最早出现的帖子。
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="2721">
    现在实现将向我们展示 API 请求结果的部分。添加以下代码：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4834 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1100%2C411&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?w=1478&amp;ssl=1 1478w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=300%2C112&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=768%2C287&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1024%2C382&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1100%2C411&amp;ssl=1 1100w" data-recalc-dims="1" height="411" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1100%2C411&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4834" data-recalc-dims="1" height="411" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1100%2C411&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?w=1478&amp;ssl=1 1478w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=300%2C112&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=768%2C287&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1024%2C382&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-63.jpeg?resize=1100%2C411&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="9111">
      第 59 行： 在这里测试 result_urls 列表中是否有项目表明我们的 TinEye 请求有点击。
     </li>
     <li class="graf graf--li graf-after--li" id="b894">
      第 60–65 行： 打印出命中数（61）然后遍历结果列表（63）并打印出找到图像的URL（65）。
     </li>
     <li class="graf graf--li graf-after--li" id="1370">
      第 68–71 行： 对日期列表（68）进行排序，这将按时间顺序排列，这样我们就可以打印出最早的日期了（71）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="7fc7">
     好了大部分脚本已经完成，所以现在需要做的就是调用我们设置的函数：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4835 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1100%2C149&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?w=1480&amp;ssl=1 1480w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=300%2C41&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=768%2C104&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1024%2C138&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1100%2C149&amp;ssl=1 1100w" data-recalc-dims="1" height="149" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1100%2C149&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4835" data-recalc-dims="1" height="149" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1100%2C149&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?w=1480&amp;ssl=1 1480w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=300%2C41&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=768%2C104&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1024%2C138&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-64.jpeg?resize=1100%2C149&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="1341">
    当您使用上面的 ID 运行脚本时，它将如下所示：
   </p>
   <p class="graf graf--p graf-after--p" id="a1a2">
    # python vimeo_reverse_search.py​​ -v 71215064
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="c498">
    <p>
     [*] Video uploaded: 2013–07–28 17:34:09
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="ecd8">
    <p>
     [*] Discovered 2 unique URLs with image matches.
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="a256">
    <p>
     <a class="markup--anchor markup--blockquote-anchor" data-href="http://wn.com/Olympic_Games" href="http://wn.com/Olympic_Games" rel="noreferrer noopener nofollow" target="_blank">
      http://wn.com/Olympic_Games
     </a>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="4c13">
    <p>
     <a class="markup--anchor markup--blockquote-anchor" data-href="http://www.volleyball-movies.net/category/84" href="http://www.volleyball-movies.net/category/84" rel="noreferrer noopener nofollow" target="_blank">
      http://www.volleyball-movies.net/category/84
     </a>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="ab86">
    <p>
     [*] Oldest match was crawled on 2014–02–07 00:00:00 at
     <a class="markup--anchor markup--blockquote-anchor" data-href="http://wn.com/Olympic_Games" href="http://wn.com/Olympic_Games" rel="noreferrer noopener nofollow" target="_blank">
      http://wn.com/Olympic_Games
     </a>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="0625">
    很酷，所以可以看到视频已于 2013 年7月28日上传，我们发现最早检测到的图像是从 2014年2月7日开始的。这可能表明 Vimeo 上的视频在被检测之前已经在其他网站上线了。如果发布者声称这是一条新闻，那么他很可能在做假。
   </p>
   <p class="graf graf--p graf-after--p" id="9e52">
    当记者不专业的时候你也可以指出他们的错误，有理有据。⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e503083093">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4822" href="https://www.iyouport.org/%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%ef%bc%9a%e5%a6%82%e4%bd%95%e8%87%aa%e5%8a%a8%e5%8f%8d%e5%90%91%e5%9b%be%e7%89%87%e6%90%9c%e7%b4%a2-youtube-%e5%92%8c-vimeo-%e7%9a%84%e8%a7%86%e9%a2%91%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4822" href="https://www.iyouport.org/%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%ef%bc%9a%e5%a6%82%e4%bd%95%e8%87%aa%e5%8a%a8%e5%8f%8d%e5%90%91%e5%9b%be%e7%89%87%e6%90%9c%e7%b4%a2-youtube-%e5%92%8c-vimeo-%e7%9a%84%e8%a7%86%e9%a2%91%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/investigative/" rel="tag">
     investigative
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
   <time class="entry-date published" datetime="2018-10-05T03:59:45+08:00">
    2018年10月5日
   </time>
   <time class="updated" datetime="2019-06-01T04:11:49+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

