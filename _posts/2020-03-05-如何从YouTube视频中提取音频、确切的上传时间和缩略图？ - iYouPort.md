---
layout: post
title: "如何从YouTube视频中提取音频、确切的上传时间和缩略图？ - iYouPort"
date: 2020-03-05T16:04:13+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bb%8eyoutube%e8%a7%86%e9%a2%91%e4%b8%ad%e6%8f%90%e5%8f%96%e9%9f%b3%e9%a2%91%e3%80%81%e7%a1%ae%e5%88%87%e7%9a%84%e4%b8%8a%e4%bc%a0%e6%97%b6%e9%97%b4%e5%92%8c%e7%bc%a9%e7%95%a5/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-10036 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-investigation tag-osint tag-technique tag-tools tag-verification tag-youtube" id="post-10036">
 <header class="entry-header">
  <h1 class="entry-title">
   如何从YouTube视频中提取音频、确切的上传时间和缩略图？
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-03-06T00:04:13+08:00">
    2020年3月6日
   </time>
   <time class="updated" datetime="2019-11-21T00:22:07+08:00">
    2019年11月21日
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
       非常简单的小工具就可以做到
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-10037 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1100%2C609&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?w=1344&amp;ssl=1 1344w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=300%2C166&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=768%2C425&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1024%2C567&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1100%2C609&amp;ssl=1 1100w" data-recalc-dims="1" height="609" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1100%2C609&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10037" data-recalc-dims="1" height="609" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1100%2C609&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?w=1344&amp;ssl=1 1344w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=300%2C166&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=768%2C425&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1024%2C567&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/头-7.jpg?resize=1100%2C609&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   YouTube视频是很多开源情报研究的重点情报来源 —— 因为大多数流行信息和热点事件都会被上传到这里。虚假消息也由此而生。
  </p>
  <p class="graf graf--p">
   不论是信息验证、深入调查还是寻找线索，能够深入挖掘 YouTube 视频的能力都是显著的优势。
  </p>
  <p class="graf graf--p">
   比如本文的主题：提取音频、提取确切的上传时间和缩略图，这些数据都是调查的重要，也是信息验证的关键依据。
  </p>
  <p class="graf graf--p">
   事实上做到这点很简单，因为有两个便利的工具。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     提取音频
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   该视频有没有造假？相关判断方法有很多种，其中音频是一个重点。
  </p>
  <p class="graf graf--p">
   如果发现音频显示出被编辑过的不自然的状态，也许就能发现造假的痕迹（需要根据实际情况进一步判断）。
  </p>
  <p class="graf graf--p">
   那么要做到这点首先就是要提取其中的音频。
  </p>
  <p class="graf graf--p">
   有一个简单的工具可以做到这点：
   <a class="markup--anchor markup--p-anchor" data-href="http://www.4kdownload.com/products/product-videodownloader" href="https://www.4kdownload.com/products/product-videodownloader" rel="noopener noreferrer" target="_blank">
    4K Video Downloader
   </a>
   。
  </p>
  <p class="graf graf--p">
   第一步
  </p>
  <p class="graf graf--p">
   安装
   <a class="markup--anchor markup--p-anchor" data-href="http://www.4kdownload.com/products/product-videodownloader" href="https://www.4kdownload.com/products/product-videodownloader" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     4K Video Downloader
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   第二步
  </p>
  <p class="graf graf--p">
   复制视频链接
  </p>
  <p class="graf graf--p">
   第三步
  </p>
  <p class="graf graf--p">
   在计算机上打开 4K Video Downloader，然后单击“粘贴URL”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10038 jetpack-lazy-image" data-lazy-sizes="(max-width: 930px) 100vw, 930px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=930%2C758&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?w=930&amp;ssl=1 930w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=300%2C245&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=768%2C626&amp;ssl=1 768w" data-recalc-dims="1" height="758" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=930%2C758&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="930"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10038" data-recalc-dims="1" height="758" sizes="(max-width: 930px) 100vw, 930px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=930%2C758&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?w=930&amp;ssl=1 930w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=300%2C245&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/10/1-6.jpg?resize=768%2C626&amp;ssl=1 768w" width="930"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   第四步
  </p>
  <p class="graf graf--p">
   从下拉菜单中选择“提取音频”
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10039 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1100%2C1025&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?w=1170&amp;ssl=1 1170w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=300%2C279&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=768%2C715&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1024%2C954&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1100%2C1025&amp;ssl=1 1100w" data-recalc-dims="1" height="1025" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1100%2C1025&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10039" data-recalc-dims="1" height="1025" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1100%2C1025&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?w=1170&amp;ssl=1 1170w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=300%2C279&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=768%2C715&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1024%2C954&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/2-19.png?resize=1100%2C1025&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   并选择要保存音频文件的质量、文件格式和文件夹。
  </p>
  <p class="graf graf--p">
   第五步
  </p>
  <p class="graf graf--p">
   点击“Extract”保存文件。
  </p>
  <p class="graf graf--p">
   就是这么简单。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     提取确切的上传时间和缩略图
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   这是验证视频真伪的一个最常用的关键手段。您可以在下面回顾视频和图片验证的基本方法：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/10%e4%b8%aa%e7%ae%80%e5%8d%95%e6%8a%80%e5%b7%a7-%e5%bf%ab%e9%80%9f%e9%aa%8c%e8%af%81%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e7%83%ad%e9%97%a8%e8%a7%86%e9%a2%91%e7%9a%84%e7%9c%9f%e4%bc%aa/" href="https://www.iyouport.org/10%e4%b8%aa%e7%ae%80%e5%8d%95%e6%8a%80%e5%b7%a7-%e5%bf%ab%e9%80%9f%e9%aa%8c%e8%af%81%e7%a4%be%e4%ba%a4%e5%aa%92%e4%bd%93%e7%83%ad%e9%97%a8%e8%a7%86%e9%a2%91%e7%9a%84%e7%9c%9f%e4%bc%aa/" rel="noopener noreferrer" target="_blank">
     10个简单技巧 快速验证社交媒体热门视频的真伪
    </a>
    》
   </li>
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e8%99%9a%e5%81%87%e4%bf%a1%e6%81%af%e9%89%b4%e5%88%ab%e5%b7%a5%e5%85%b7%e7%ae%b1%ef%bc%9a%e5%a6%82%e4%bd%95%e9%aa%8c%e8%af%81%e5%9b%be%e7%89%87%e5%92%8c%e8%a7%86%e9%a2%91%e7%9a%84%e7%9c%9f%e4%bc%aa/" href="https://www.iyouport.org/%e8%99%9a%e5%81%87%e4%bf%a1%e6%81%af%e9%89%b4%e5%88%ab%e5%b7%a5%e5%85%b7%e7%ae%b1%ef%bc%9a%e5%a6%82%e4%bd%95%e9%aa%8c%e8%af%81%e5%9b%be%e7%89%87%e5%92%8c%e8%a7%86%e9%a2%91%e7%9a%84%e7%9c%9f%e4%bc%aa/" rel="noopener noreferrer" target="_blank">
     虚假信息鉴别工具箱：如何验证图片和视频的真伪？
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   依旧是一个小工具就可以做到 —— 从 YouTube 视频中提取隐藏信息。
  </p>
  <p class="graf graf--p">
   当然手动做也是可以，但也许相对繁琐；利用这个工具可以将步骤简化很多：YouTube Data Viewer.
  </p>
  <p class="graf graf--p">
   第一步
  </p>
  <p class="graf graf--p">
   转到
   <a class="markup--anchor markup--p-anchor" data-href="https://citizenevidence.amnestyusa.org/" href="https://citizenevidence.amnestyusa.org/" rel="noopener noreferrer" target="_blank">
    YouTube Data Viewer
   </a>
  </p>
  <p class="graf graf--p">
   第二步
  </p>
  <p class="graf graf--p">
   输入视频的网址，然后按Enter
  </p>
  <p class="graf graf--p">
   第三步
  </p>
  <p class="graf graf--p">
   提取确切的上传时间。
  </p>
  <p class="graf graf--p">
   请注意：上传时间以UTC（世界标准时间）显示，可以通过使用简单的时区转换器将其转换为本地时间。
  </p>
  <p class="graf graf--p">
   第四步：
  </p>
  <p class="graf graf--p">
   查看缩略图。
  </p>
  <p class="graf graf--p">
   缩略图是验证信息真伪的关键部分，由此可进行反向图像搜索。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10040 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=1000%2C1356&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?w=1000&amp;ssl=1 1000w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=221%2C300&amp;ssl=1 221w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=768%2C1041&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=755%2C1024&amp;ssl=1 755w" data-recalc-dims="1" height="1356" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=1000%2C1356&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10040" data-recalc-dims="1" height="1356" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=1000%2C1356&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?w=1000&amp;ssl=1 1000w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=221%2C300&amp;ssl=1 221w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=768%2C1041&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/3-2.jpg?resize=755%2C1024&amp;ssl=1 755w" width="1000"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10041 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1100%2C1038&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?w=1300&amp;ssl=1 1300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=300%2C283&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=768%2C725&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1024%2C966&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1100%2C1038&amp;ssl=1 1100w" data-recalc-dims="1" height="1038" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1100%2C1038&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10041" data-recalc-dims="1" height="1038" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1100%2C1038&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?w=1300&amp;ssl=1 1300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=300%2C283&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=768%2C725&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1024%2C966&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/4-4.jpg?resize=1100%2C1038&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   ❗️请注意，现在这个工具已经更新啦，会更好用，在这里：https://intelx.io/tools?tab=youtube
  </p>
  <h3 class="graf graf--p">
   <span style="color: #ff6600;">
    <strong class="markup--strong markup--p-strong">
     案例 ——
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   这里使用的是 2013年11月在白宫外举行的集会的
   <a class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=wPXPxnyUxpo" href="https://www.youtube.com/watch?v=wPXPxnyUxpo" rel="noopener noreferrer" target="_blank" title="无人机受害者的正义">
    视频
   </a>
   ，作为演示。
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/wPXPxnyUxpo" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   第1步：使用 YouTube 数据查看器提取确切时间
  </p>
  <p class="graf graf--p">
   只需将视频链接复制并粘贴到适当的字段即可提取详细信息。白宫集会的视频发布于2013年11月7日，晚上9:53：
  </p>
  <p class="graf graf--p">
   第2步：将时间（UTC）转换为本地时区
  </p>
  <p class="graf graf--p">
   在此案例中，必须首先将其转换为东部标准时间（EST），以了解将其上传到华盛顿特区（抗议地点）的时间。
  </p>
  <p class="graf graf--p">
   使用一个简单的时区转换器来执行此操作。插入9:45 pm（它仅允许以15分钟为间隔选择时间，因此无法准确输入9:53）：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-10043 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1100%2C202&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?w=1296&amp;ssl=1 1296w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=300%2C55&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=768%2C141&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1024%2C188&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1100%2C202&amp;ssl=1 1100w" data-recalc-dims="1" height="202" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1100%2C202&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10043" data-recalc-dims="1" height="202" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1100%2C202&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?w=1296&amp;ssl=1 1296w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=300%2C55&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=768%2C141&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1024%2C188&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/10/5-2.jpg?resize=1100%2C202&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   华盛顿特区比UTC晚五个小时。因此，该视频于2013年11月7日（星期四）下午上传：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-10042 jetpack-lazy-image" data-lazy-sizes="(max-width: 948px) 100vw, 948px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=948%2C296&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?w=948&amp;ssl=1 948w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=300%2C94&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=768%2C240&amp;ssl=1 768w" data-recalc-dims="1" height="296" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=948%2C296&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="948"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-10042" data-recalc-dims="1" height="296" sizes="(max-width: 948px) 100vw, 948px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=948%2C296&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?w=948&amp;ssl=1 948w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=300%2C94&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/10/6-16.png?resize=768%2C240&amp;ssl=1 768w" width="948"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   很简单吧，所有人都可以玩。信息战几乎无法被阻止，但只要大众学会如何辨别 —— 哪怕仅仅是最简单的辨别方法，操纵就很难得逞。⚪️
  </p>
  <div id="atatags-1611829871-5f41be7a16ec1">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-10036" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bb%8eyoutube%e8%a7%86%e9%a2%91%e4%b8%ad%e6%8f%90%e5%8f%96%e9%9f%b3%e9%a2%91%e3%80%81%e7%a1%ae%e5%88%87%e7%9a%84%e4%b8%8a%e4%bc%a0%e6%97%b6%e9%97%b4%e5%92%8c%e7%bc%a9%e7%95%a5/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-10036" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bb%8eyoutube%e8%a7%86%e9%a2%91%e4%b8%ad%e6%8f%90%e5%8f%96%e9%9f%b3%e9%a2%91%e3%80%81%e7%a1%ae%e5%88%87%e7%9a%84%e4%b8%8a%e4%bc%a0%e6%97%b6%e9%97%b4%e5%92%8c%e7%bc%a9%e7%95%a5/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-10036-5f41be7a1769f" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=10036&amp;origin=www.iyouport.org&amp;obj_id=161182987-10036-5f41be7a1769f" id="like-post-wrapper-161182987-10036-5f41be7a1769f">
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
    <a href="https://www.iyouport.org/tag/investigation/" rel="tag">
     Investigation
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
    <a href="https://www.iyouport.org/tag/tools/" rel="tag">
     tools
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/verification/" rel="tag">
     verification
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/youtube/" rel="tag">
     YouTube
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-03-06T00:04:13+08:00">
    2020年3月6日
   </time>
   <time class="updated" datetime="2019-11-21T00:22:07+08:00">
    2019年11月21日
   </time>
  </div>
 </div>
</article>

