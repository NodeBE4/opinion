---
layout: post
title: "开源调查：收集信息追踪钱的轨迹 #OSINT 基础和一个 Timeline 示例 - iYouPort"
date: 2018-08-15T18:26:44+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e6%94%b6%e9%9b%86%e4%bf%a1%e6%81%af%e8%bf%bd%e8%b8%aa%e9%92%b1%e7%9a%84%e8%bd%a8%e8%bf%b9-osint-%e5%9f%ba%e7%a1%80%e5%92%8c%e4%b8%80%e4%b8%aa-timeline/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4203 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-activism tag-osint tag-technique tag-technology tag-tools tag-truth" id="post-4203">
 <header class="entry-header">
  <h1 class="entry-title">
   开源调查：收集信息追踪钱的轨迹 #OSINT 基础和一个 Timeline 示例
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
   <time class="entry-date published" datetime="2018-08-16T02:26:44+08:00">
    2018年8月16日
   </time>
   <time class="updated" datetime="2019-05-20T02:42:02+08:00">
    2019年5月20日
   </time>
  </span>
  <span class="word-count">
   2 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       本博客会陆续演示一些开源调查的案例，以演示其技巧。公民记者的技能可以完全不差职业记者的（尤其是中国的那些职业记者，嗯…）
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4204 jetpack-lazy-image" data-lazy-sizes="(max-width: 642px) 100vw, 642px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?resize=642%2C336&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?w=642&amp;ssl=1 642w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?resize=300%2C157&amp;ssl=1 300w" data-recalc-dims="1" height="336" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?resize=642%2C336&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="642"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4204" data-recalc-dims="1" height="336" sizes="(max-width: 642px) 100vw, 642px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?resize=642%2C336&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?w=642&amp;ssl=1 642w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-138.jpeg?resize=300%2C157&amp;ssl=1 300w" width="642"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <blockquote class="graf graf--blockquote graf-after--figure" id="deee">
    <p>
     <em>
      (
      <span class="markup--quote markup--blockquote-quote is-other" data-creator-ids="c4049b914b6c">
       Open-source intelligence
      </span>
      ) OSINT 是从公开可用的来源收集数据的调查。OSINT 不同于一般的调查研究（Research），它是为特定的个人或团队量身定制的特的情报处理工作，以支持其必须做出的特定决策，不论是情报机构、调查性新闻记者还是民间独立组织
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="67da">
    想必绝大多数人在阅读巴拿马文件或有关贪腐的法庭文件后只把它们当成了新闻，对挖掘感兴趣的人还是太少。但的确是有的，当然技能也是个关键。
   </p>
   <p class="graf graf--p graf-after--p" id="2ad0">
    通过阅读法庭文件，你是否想知道该如何查看一些公司所经历的事件的时间表？被税务人员追赶后，他们是否改变了公司结构？你该怎么做才能清楚地看到这些信息？
   </p>
   <p class="graf graf--p graf-after--p" id="5fd3">
    许多 OSINT 调查涉及到公司，他们的结构，当然还有他们的董事。这里面会需要一些工具，比如
    <a class="markup--anchor markup--p-anchor" data-href="http://opencorporates.com/" href="http://opencorporates.com/" rel="noopener nofollow noreferrer" target="_blank">
     OpenCorporates
    </a>
    就是个非常不错的帮手，TimelineJS 也是一个强大的工具，对于深入调查来说很有效，调查性记者都应该会用。
   </p>
   <p class="graf graf--p graf-after--p" id="8a1d">
    本文先介绍一些基础知识和简单步骤，然后使用一个实例来展示使用 TimelineJS 做出的调查。
   </p>
   <p class="graf graf--p graf-after--p" id="c648">
    <strong class="markup--strong markup--p-strong">
     OpenCorporates API 教程
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="ce8a">
    你现在的目标是拥有一个工具，可以打入公司名称和管辖区（2个字母的国家代码）并让它自动返回该公司的所有公司文件。第一步是解决 API 中的公司记录。你可以
    <a class="markup--anchor markup--p-anchor" data-href="https://api.opencorporates.com/documentation/API-Reference" href="https://api.opencorporates.com/documentation/API-Reference" rel="noopener nofollow noreferrer" target="_blank">
     在这里看到
    </a>
    一些文档。看起来你需要使用两个端点：
   </p>
   <ol class="postList">
    <li class="graf graf--li graf-after--p" id="97da">
     GET companies/search — 需要一个 q 参数的查询字符串和一个你正在搜索的管辖区（国家/地区）的 jurisdiction_code。
    </li>
    <li class="graf graf--li graf-after--li" id="9afa">
     GET companies/jurisdiction_code/company_number/filings — 再次使用 jurisdiction_code 从原始的企业搜索 API 调用返回的公司编号。
    </li>
   </ol>
   <p class="graf graf--p graf-after--li" id="c4be">
    这两个小的 API 调用可以为我们提供有关公司的大量信息，但是我们也可以将许多其他 API 调用在 OSINT 目的上（如果您想到的话欢迎在留言板提出建议）。现在我们需要弄清楚如何将这些数据放到时间线上。
   </p>
   <p class="graf graf--p graf-after--p" id="b1ce">
    <strong class="markup--strong markup--p-strong">
     与 TimelineJS 连接
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="a344">
    正如之前提到的，TimelineJS 是一个了不起的工具，它可以获取一些标准化数据并创建非常漂亮的时间线可视化，其中包括推文，YouTube 视频，并具有极大的灵活性。
   </p>
   <p class="graf graf--p graf-after--p" id="742f">
    如果你希望非常快速地完成，那么查看他们的电子表格格式最好。TimelineJS 允许您执行的操作是以特定格式创建 Google 电子表格，将该电子表格发布到 Web，然后 TimelineJS 将自动读取数据并根据数据创建时间线。
   </p>
   <p class="graf graf--p graf-after--p" id="9eb6">
    现在我只是打开了这个模板，并从电子表格中复制出所需的标题行，以便我可以用 Python 写出来。我们的脚本只会使用此格式输出 CSV，然后就可以将结果上传到 Google 云端硬盘并开始浏览数据。十分简单。
   </p>
   <p class="graf graf--p graf-after--p" id="d9e6">
    <strong class="markup--strong markup--p-strong">
     开始编码
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="55cc">
    好啦，开始工作。打开 Python 编辑器并开始编写以下代码：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4205 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1100%2C328&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?w=1920&amp;ssl=1 1920w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=300%2C90&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=768%2C229&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1024%2C306&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1100%2C328&amp;ssl=1 1100w" data-recalc-dims="1" height="328" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1100%2C328&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4205" data-recalc-dims="1" height="328" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1100%2C328&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?w=1920&amp;ssl=1 1920w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=300%2C90&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=768%2C229&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1024%2C306&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-378.png?resize=1100%2C328&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <figure class="graf graf--figure graf--layoutOutsetCenter graf-after--p" data-scroll="native" id="6420">
    <div class="aspectRatioPlaceholder is-locked">
     OK, 这是设置代码，我们只是设置导入以引入我们需要使用的模块，创建一些可以传入的命令行参数，并定义一些全局变量来存储命令行信息。现在开始构建公司名称搜索功能：
    </div>
   </figure>
   <div>
    <img alt="" class="aligncenter size-full wp-image-4206 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1100%2C518&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?w=1490&amp;ssl=1 1490w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=300%2C141&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=768%2C362&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1024%2C482&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1100%2C518&amp;ssl=1 1100w" data-recalc-dims="1" height="518" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1100%2C518&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4206" data-recalc-dims="1" height="518" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1100%2C518&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?w=1490&amp;ssl=1 1490w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=300%2C141&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=768%2C362&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1024%2C482&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-379.png?resize=1100%2C518&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="e98c">
     这里稍微复杂一点点，来深入了解一下：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="3df9">
      第 23 行： 定义了 corporate_search 函数，该函数接收将成为我们正在搜索的公司的*公司参数*以及作为双字母国家/地区代码的 jurisdiction 。
     </li>
     <li class="graf graf--li graf-after--li" id="cef2">
      第 25–26 行： 构建 API URL，传递 URL 编码的公司名称（25），然后将 jurisdiction_code 参数添加到 URL 以缩窄结果（26）。
     </li>
     <li class="graf graf--li graf-after--li" id="233f">
      第 28–32 行： 发送请求（28），如果我们收到有效的响应（30），处理收到的JSON（32）。
     </li>
     <li class="graf graf--li graf-after--li" id="c721">
      第 34–38 行： 迭代返回的所有匹配项（34），然后检查是否与我们传入脚本的公司名称完全匹配（36），如果有完全匹配，会返回公司编号和公司名称（38）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="c015">
     好，下一步，让它提取该公司的文件。
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4207 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1100%2C876&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?w=1604&amp;ssl=1 1604w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=300%2C239&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=768%2C612&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1024%2C816&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1100%2C876&amp;ssl=1 1100w" data-recalc-dims="1" height="876" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1100%2C876&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4207" data-recalc-dims="1" height="876" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1100%2C876&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?w=1604&amp;ssl=1 1604w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=300%2C239&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=768%2C612&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1024%2C816&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-380.png?resize=1100%2C876&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <ul class="postList">
    <li class="graf graf--li graf-after--figure" id="89d5">
     第 46 行： 定义了 corporate_filings 函数，以接受从公司搜索返回的 corporation_id 参数，当然还有 jurisdiction。
    </li>
    <li class="graf graf--li graf-after--li" id="797c">
     第 48 行： 在这里正在构建我们的 API url，它将告诉 OpenCorporates 回复申请结果的第一页。
    </li>
    <li class="graf graf--li graf-after--li" id="f04c">
     第 58 行： 从搜索结果中获取结果并将其存储在文件变量中，该变量将包含所有公司文件。
    </li>
    <li class="graf graf--li graf-after--li" id="8042">
     第 61–62 行： 由于我们只能从 API 检索 30 个结果，获取总页数（61）然后初始化计数器（62），以便我们可以继续调用 OpenCorporates 来检索所有记录。
    </li>
    <li class="graf graf--li graf-after--li" id="8b9f">
     第 64–76 行： 继续将页面参数添加到申请请求中（66），发送请求（68），解析（72）和存储结果（74），然后递增页面计数器（76）并继续，直到检索了所有的文件。
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="c2ac">
    一旦完成了所有可用的文件就会返回列表。现在我们有了一份文件清单，需要将它们按到一个 CSV 文件中，该文件符合 TimelineJS 正在寻找的适当结构。现在实现这个功能：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4208 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1100%2C954&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?w=1702&amp;ssl=1 1702w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=300%2C260&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=768%2C666&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1024%2C888&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1100%2C954&amp;ssl=1 1100w" data-recalc-dims="1" height="954" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1100%2C954&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4208" data-recalc-dims="1" height="954" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1100%2C954&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?w=1702&amp;ssl=1 1702w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=300%2C260&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=768%2C666&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1024%2C888&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-381.png?resize=1100%2C954&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <ul class="postList">
     <li class="graf graf--li graf-after--figure" id="f742">
      第 87 行： 在这里定义 build_timeline 函数，以获取文件列表，和它们所关联的公司名称。
     </li>
     <li class="graf graf--li graf-after--li" id="d121">
      第 89–93 行： 这是从 TimelineJS 电子表格模板中复制的大字段列表，这些是您的时间线能正确呈现所必需的。
     </li>
     <li class="graf graf--li graf-after--li" id="4871">
      第 95–98 行： 这里只是检查目标 CSV 文件的存在。如果该文件不存在，我们将编写电子表格标题，如果存在，开始将记录添加到电子表格的末尾。
     </li>
     <li class="graf graf--li graf-after--li" id="bacf">
      第 100–105 行： 打开输出文件（100），然后初始化 CSV 编写（102），传入文件句柄和字段列表（102）。正如此前提到的，如果这是一个新文件（104），在电子表格（105）中写出标题行。
     </li>
     <li class="graf graf--li graf-after--li" id="57cb">
      第 109–123 行： 循环遍历每个文件（109），拆分以 YYYY-MM-DD 格式存储的日期字段（111），然后用我们想要在时间线中显示的所有信息填充字典。最后一步是将数据写入电子表格（123）。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="a7a7">
     剩下要做的唯一事就是将函数调用添加到脚本的底部，以完成所有操作：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4209 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1100%2C376&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?w=1122&amp;ssl=1 1122w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=300%2C103&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=768%2C263&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1024%2C350&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1100%2C376&amp;ssl=1 1100w" data-recalc-dims="1" height="376" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1100%2C376&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4209" data-recalc-dims="1" height="376" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1100%2C376&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?w=1122&amp;ssl=1 1122w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=300%2C103&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=768%2C263&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1024%2C350&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-382.png?resize=1100%2C376&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="4bd0">
    好啦，看看运行下会发生什么。
   </p>
   <p class="graf graf--p graf-after--p" id="46f0">
    这里有三个公司，它们都位于
    <strong class="markup--strong markup--p-strong">
     非常适合避税的马恩岛
    </strong>
    （国家代码为 im）。
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="46c6">
     Lochside Limited
    </li>
    <li class="graf graf--li graf-after--li" id="7aba">
     Korderry Limited
    </li>
    <li class="graf graf--li graf-after--li" id="668e">
     Ogral Company Limited
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="8da8">
    所以你的命令行参数看起来像这样：
   </p>
   <p class="graf graf--p graf-after--p" id="6c21">
    # python followthemoney. py -c“Lochside Limited”-j im -t cbcstory.csv
   </p>
   <p class="graf graf--p graf-after--p" id="d32c">
    # python followthemoney. py -c“Korderry Limited”-j im -t cbcstory.csv
   </p>
   <p class="graf graf--p graf-after--p" id="c989">
    # python followthemoney. py -c“Ogral Company Limited”-j im cbcstory.csv
   </p>
   <p class="graf graf--p graf-after--p" id="3d7c">
    现在转到 Google 云硬盘，创建新的电子表格，转到“文件”菜单并选择“导入”，然后使用“更换当前工作表”选项。
   </p>
   <p class="graf graf--p graf-after--p" id="6fd5">
    转到
    <a class="markup--anchor markup--p-anchor" data-href="http://timeline3.knightlab.com/" href="http://timeline3.knightlab.com/" rel="noopener nofollow noreferrer" target="_blank">
     此处的
    </a>
    TimelineJS 页面，然后按照其步骤发布时间轴电子表格，并生成预览。完成后，你应该能够浏览数据，甚至将其嵌入到自己的网站中。
   </p>
   <p class="graf graf--p graf-after--p" id="94a6">
    非常整洁的东西。如果你有大量记录可能会想要把它放大。并且你还可以使用 OpenCorporates API 做更多的事，嗯你懂的。
   </p>
   <h3 class="graf graf--h3 graf-after--p" id="e497">
    — — 数据集 — —
   </h3>
   <p class="graf graf--p graf-after--h3" id="20a7">
    以下提供一些数据集，根据你希望调查的内容，应该知道在哪里能找到。
   </p>
   <p class="graf graf--p graf-after--p" id="1198">
    &gt; World Bank Open Data（
    <a class="markup--anchor markup--p-anchor" data-href="https://data.worldbank.org/" href="https://data.worldbank.org/" rel="noreferrer noopener nofollow" target="_blank">
     https://data.worldbank.org/
    </a>
    ）：涵盖世界各地的金融、服务指标等数据。
   </p>
   <p class="graf graf--p graf-after--p" id="18bb">
    &gt; IMF Economic Data（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.imf.org/en/Data" href="https://www.imf.org/en/Data" rel="noreferrer noopener nofollow" target="_blank">
     https://www.imf.org/en/Data
    </a>
    )：这是一个非常有用的信息源，包括全球金融稳定报告、地区经济报告、国际金融统计数据、汇率、贸易方向等。
   </p>
   <p class="graf graf--p graf-after--p" id="628a">
    &gt; UN Comtrade Database（
    <a class="markup--anchor markup--p-anchor" data-href="https://comtrade.un.org/" href="https://comtrade.un.org/" rel="noreferrer noopener nofollow" target="_blank">
     https://comtrade.un.org/
    </a>
    ）：用户可以以可视化的形式免费访问详细的全球贸易数据。它是国际贸易组织统计数据和相关分析表的官方资源库。
   </p>
   <p class="graf graf--p graf-after--p" id="5ebf">
    &gt; Global Financial Data（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.globalfinancialdata.com/" href="https://www.globalfinancialdata.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://www.globalfinancialdata.com/
    </a>
    ）：涵盖超过 6 万家公司的数据，时间跨度为 300 年左右，为分析全球经济的变化提供了独特的来源。
   </p>
   <p class="graf graf--p graf-after--p" id="fbaa">
    &gt; Google Finance（
    <a class="markup--anchor markup--p-anchor" data-href="https://finance.google.com/finance" href="https://finance.google.com/finance" rel="noreferrer noopener nofollow" target="_blank">
     https://finance.google.com/finance
    </a>
    ）：包括实时股票报价和图表、财经新闻、外汇汇率、投资组合等。
   </p>
   <p class="graf graf--p graf-after--p" id="2acb">
    &gt; Google Public Data Explorer（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/publicdata/directory" href="https://www.google.com/publicdata/directory" rel="noreferrer noopener nofollow" target="_blank">
     https://www.google.com/publicdata/directory
    </a>
    ）：提供来自世界银行、OECD、欧盟统计局和丹佛大学等一系列国际组织和学术机构的公开数据和预测。这些数据可以以曲线图、条形图、横截面图的形式显示，也可以在地图上显示。
   </p>
   <p class="graf graf--p graf-after--p" id="7260">
    &gt; Financial Data Finder at OSU（
    <a class="markup--anchor markup--p-anchor" data-href="https://guides.osu.edu/c.php?g=280921&amp;p=2281286" href="https://guides.osu.edu/c.php?g=280921&amp;p=2281286" rel="noreferrer noopener nofollow" target="_blank">
     https://guides.osu.edu/c.php?g=280921&amp;p=2281286
    </a>
    ）：这里提供一切与金融相关的数据的链接，包括在线世界发展指标（World Development Indicators Online）、世界银行公开数据（World Bank Open Data）、全球金融数据（Global Financial Data）、国际货币基金组织统计数据（International Monetary Fund Statistical Databases）和 EMIS 情报。
   </p>
   <p class="graf graf--p graf-after--p" id="0bdc">
    &gt;AmazonAPI（
    <a class="markup--anchor markup--p-anchor" data-href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html" rel="noreferrer noopener nofollow" target="_blank">
     https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html
    </a>
    ：可以按分类浏览 AWS 上的公共数据集，获取大量信息。
   </p>
   <p class="graf graf--p graf-after--p" id="eb13">
    &gt; American Society of Travel Agents（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.asta.org/" href="https://www.asta.org/" rel="noreferrer noopener nofollow" target="_blank">
     https://www.asta.org/
    </a>
    ）：ASTA 是世界上最大的旅游协会。该网站提供旅游代理信息，还提供旅游、邮轮、酒店、租车等产品信息。
   </p>
   <p class="graf graf--p graf-after--p" id="a662">
    &gt; Social Mention（
    <a class="markup--anchor markup--p-anchor" data-href="https://socialmention.com/" href="https://socialmention.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://socialmention.com/
    </a>
    ）： Social Mention 是一个社交媒体搜索和分析平台，它将来自世界各地的用户产生的内容聚合成单一信息流。
   </p>
   <p class="graf graf--p graf-after--p" id="78af">
    &gt; Google Trends（
    <a class="markup--anchor markup--p-anchor" data-href="https://trends.google.com/trends/" href="https://trends.google.com/trends/" rel="noreferrer noopener nofollow" target="_blank">
     https://trends.google.com/trends/
    </a>
    ）：展示了在世界上不同地区，特定的搜索词出现的频率。
   </p>
   <p class="graf graf--p graf-after--p" id="24b2">
    &gt; Facebook API（
    <a class="markup--anchor markup--p-anchor" data-href="https://developers.facebook.com/?locale=en_US" href="https://developers.facebook.com/?locale=en_US" rel="noreferrer noopener nofollow" target="_blank">
     https://developers.facebook.com/?locale=en_US
    </a>
    ）：大家可以学习如何利用 Graph API 发布和检索数据。
   </p>
   <p class="graf graf--p graf-after--p" id="41d4">
    &gt; Twitter API（
    <a class="markup--anchor markup--p-anchor" data-href="https://developer.twitter.com/en/docs" href="https://developer.twitter.com/en/docs" rel="noreferrer noopener nofollow" target="_blank">
     https://developer.twitter.com/en/docs
    </a>
    ）：利用 Twitter 平台，大家可以在 Twitter 上接入网站或应用程序。
   </p>
   <p class="graf graf--p graf-after--p" id="fe1d">
    &gt; Instagram API（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.instagram.com/developer/" href="https://www.instagram.com/developer/" rel="noreferrer noopener nofollow" target="_blank">
     https://www.instagram.com/developer/
    </a>
    ）：大家可以利用 Instagram API 平台构建非自动化的、真实的、高质量的应用和服务。
   </p>
   <p class="graf graf--p graf-after--p" id="b522">
    &gt; Foursquare API（
    <a class="markup--anchor markup--p-anchor" data-href="https://developer.foursquare.com/" href="https://developer.foursquare.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://developer.foursquare.com/
    </a>
    ）：支持访问 Foursquare 数据库，能与 Foursquare 上的用户和商家进行互动。
   </p>
   <p class="graf graf--p graf-after--p" id="8d20">
    &gt; HubSpot（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.hubspot.com/marketing-statistics" href="https://www.hubspot.com/marketing-statistics" rel="noreferrer noopener nofollow" target="_blank">
     https://www.hubspot.com/marketing-statistics
    </a>
    ）：大型市场数据库。你可以在这里找到最新的市场统计数据和趋势。这里也为社交媒体营销、内容管理、网页分析、登陆页面和搜索引擎优化提供相关工具。
   </p>
   <p class="graf graf--p graf-after--p" id="9427">
    &gt; Moz（
    <a class="markup--anchor markup--p-anchor" data-href="https://moz.com/" href="https://moz.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://moz.com/
    </a>
    ）：关于 SEO 的相关见解，包括关键词研究、链接建设、网站审计和页面优化，可以帮助公司直接地分析他们在搜索引擎上的位置，改进排名。
   </p>
   <p class="graf graf--p graf-after--p" id="224e">
    &gt; Content Marketing Institute（
    <a class="markup--anchor markup--p-anchor" data-href="https://contentmarketinginstitute.com/" href="https://contentmarketinginstitute.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://contentmarketinginstitute.com/
    </a>
    ）：关于内容营销的最新新闻、专著和研究。
   </p>
   <p class="graf graf--p graf-after--p" id="a22d">
    &gt; Associated Press API（
    <a class="markup--anchor markup--p-anchor" data-href="https://developer.ap.org/ap-content-api" href="https://developer.ap.org/ap-content-api" rel="noreferrer noopener nofollow" target="_blank">
     https://developer.ap.org/ap-content-api
    </a>
    ）：无需访问美联社站点，该 API 支持大家用自己的编辑工具搜索和下载内容。大家可以下载美联社、网站成员和来自第三方的图片，还可以下载美联社和选定的第三方制作的视频。
   </p>
   <p class="graf graf--p graf-after--p" id="1748">
    &gt; Google Books Ngram Viewer（
    <a class="markup--anchor markup--p-anchor" data-href="https://books.google.com/ngrams" href="https://books.google.com/ngrams" rel="noreferrer noopener nofollow" target="_blank">
     https://books.google.com/ngrams
    </a>
    ）：在线搜索引擎，提供谷歌文本语料库在 1500–2008 年间的 n-gram 数据。可以以图例的形式显示查询词在这些年间出现频率的变化情况。
   </p>
   <p class="graf graf--p graf-after--p" id="baa9">
    &gt; Wikipedia Database（
    <a class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Main_Page" href="https://en.wikipedia.org/wiki/Main_Page" rel="noreferrer noopener nofollow" target="_blank">
     https://en.wikipedia.org/wiki/Main_Page
    </a>
    ）：向用户免费提供平台上的所有数据。
   </p>
   <p class="graf graf--p graf-after--p" id="a063">
    &gt; FiveThirtyEight（
    <a class="markup--anchor markup--p-anchor" data-href="https://fivethirtyeight.com/" href="https://fivethirtyeight.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://fivethirtyeight.com/
    </a>
    ）：它是一个关注民意调查分析、政治、经济和体育的网站。Github 上的数据和代码基于 FiveThirtyEight 上的故事和内容。
   </p>
   <p class="graf graf--p graf-after--p" id="6652">
    &gt; Google Scholar（
    <a class="markup--anchor markup--p-anchor" data-href="https://scholar.google.com/" href="https://scholar.google.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://scholar.google.com/
    </a>
    ）：Google 推出的面向学术资源的免费搜索引擎，能够帮助用户查找包括期刊论文、学位论文、书籍、预印本、文摘和技术报告在内的学术文献，内容涵盖自然科学、人文科学、社会科学等多种学科。
   </p>
   <p class="graf graf--p graf-after--p" id="e376">
    &gt; OpenCorporates（
    <a class="markup--anchor markup--p-anchor" data-href="https://opencorporates.com/" href="https://opencorporates.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://opencorporates.com/
    </a>
    ）：OpenCorporates 是世界上最大的关于公司和公司内部数据的公开数据库，它有超过 1 亿家公司的数据管辖权。
   </p>
   <p class="graf graf--p graf-after--p" id="ddb0">
    &gt; The CIA World Factbook（
    <span class="markup--quote markup--p-quote is-other" data-creator-ids="e2d3352aa053">
     <a class="markup--anchor markup--p-anchor" data-href="https://www.cia.gov/library/publications/the-world-factbook/" href="https://www.cia.gov/library/publications/the-world-factbook/" rel="noreferrer noopener nofollow" target="_blank">
      https://www.cia.gov/library/publications/the-world-factbook/
     </a>
    </span>
    ）：各国状况。重点关注历史、政府、人口、经济、能源、地理、通信、交通、军事和跨国问题（267 个国家）。
   </p>
   <p class="graf graf--p graf-after--p" id="c8b8">
    &gt; Octoparse（
    <a class="markup--anchor markup--p-anchor" data-href="https://www.octoparse.com/" href="https://www.octoparse.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://www.octoparse.com/
    </a>
    ）：免费的数据提取工具，可以收集上面提到的所有网站的数据。
   </p>
   <p class="graf graf--p graf-after--p" id="172f">
    <span class="markup--quote markup--p-quote is-other" data-creator-ids="a181444761f4">
     <strong class="markup--strong markup--p-strong">
      上述不是全部
     </strong>
     ，别的暂时没想起来，今后想起来再慢慢说哈。
    </span>
   </p>
   <h3 class="graf graf--h3 graf-after--p" id="81fe">
    — — 以下是一个 TimelineJS 调查使用的示例：ISIS 是否在叙利亚 Marea 使用了芥子气攻击？
   </h3>
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4210 jetpack-lazy-image" data-lazy-sizes="(max-width: 786px) 100vw, 786px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=786%2C442&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?w=786&amp;ssl=1 786w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=768%2C432&amp;ssl=1 768w" data-recalc-dims="1" height="442" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=786%2C442&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="786"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4210" data-recalc-dims="1" height="442" sizes="(max-width: 786px) 100vw, 786px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=786%2C442&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?w=786&amp;ssl=1 786w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-139.jpeg?resize=768%2C432&amp;ssl=1 768w" width="786"/>
    </noscript>
   </div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="10d3">
    叙利亚是全球假消息云集的胜地，由于战争的混乱和消息封锁，极难找到真相。但是逻辑和公开资料一直都是可用的，我们用 OSINT 的方法来试试看。
   </p>
   <p class="graf graf--p graf-after--p" id="952a">
    当时，伊斯兰国据称对反叛分子控制的 Marea 地区发动了不分青红皂白的轰炸，公民和反叛分子担心他们将很快袭击阿勒颇北部城镇。Marea 三面环绕着伊斯兰国，位于一个月前的 IS 攻势前线。
   </p>
   <p class="graf graf--p graf-after--p" id="e2dc">
    当炮弹落下时，Marea 医院的医务人员准备接受伤员，就像平常那样。然而这次似乎不同，医院工作人员很快发现了异常症状。
   </p>
   <p class="graf graf--p graf-after--p" id="a208">
    大约 10 名受伤的人，“其中有一些孩子，来到我们的急诊室，他们称呼吸困难，眼睛和皮肤发红，眼睑肿胀，散发着很臭的气味”，Marea 医院行政主任 Tariq a-Najjar 告诉Shahba新闻。
   </p>
   <p class="graf graf--p graf-after--p" id="659e">
    袭击事件发生后，叙利亚美国医学会（SAMS）报告说“超过 23 名平民表现出化学品暴露的症状。”无国界医生（MSF）证实了 SAMS 的说法，称伤者已在无国界医生的野战医院接受治疗“，四名患者，来自同一家庭，其临床症状、随时间变化的方式、以及患者对中毒情况的证词，都指向了接触化学药剂的结果。“
   </p>
   <p class="graf graf--p graf-after--p" id="a8d2">
    起初，记者、活动家和新闻网都没有说过“芥子气”，连“非传统的攻击”都没说，正如后来在反对派和政权控制的媒体中的报道中所呈现的那样。
   </p>
   <p class="graf graf--p graf-after--p" id="a659">
    a-Najjar 说，有大约 50 枚炮弹袭击了 Marea。据报道，至少有一枚击中了一个家庭的房子，然后在里面爆炸了。炮弹释放出毒气。四天后无国界医生做出总结。
   </p>
   <p class="graf graf--p graf-after--p" id="40ee">
    袭击发生的当天下午，亲反对派叙利亚革命的论坛推特发布了两个 SHAAM 新闻网的照片，显示一名男子呈现红色和浮肿着的眼睛，似乎二十岁左右，据说是 IS- 炮击 Marea 的伤者。
   </p>
   <p class="graf graf--p graf-after--p" id="3148">
    大约五个小时后，以 Hama 为基地的活动家 Abu al-Huda al-Hamawi 在推特上发了一张照片，显示了几乎一样的红色浮肿的眼睛，这次是另一名病人，一名三十多岁的男子，显然是在 Marea 或附近的一家医院接受治疗。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4211 jetpack-lazy-image" data-lazy-sizes="(max-width: 540px) 100vw, 540px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?resize=540%2C960&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?w=540&amp;ssl=1 540w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?resize=169%2C300&amp;ssl=1 169w" data-recalc-dims="1" height="960" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?resize=540%2C960&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="540"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4211" data-recalc-dims="1" height="960" sizes="(max-width: 540px) 100vw, 540px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?resize=540%2C960&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?w=540&amp;ssl=1 540w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-140.jpeg?resize=169%2C300&amp;ssl=1 169w" width="540"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="278b">
    但在次日，由反对派记者 Mohamed al-Fateh 发布的推文中，Marea 报告的另外两例患者受伤的图片讲述了更多的情况。一张照片显示一名年轻男子或一名男孩带有充满液体的眼睑。另一张照片显示一名男子的背部布满了黄色的水泡。
   </p>
   <p class="graf graf--p graf-after--p" id="a8e9">
    医生促进人权组织（PHR）在向叙利亚公开的声明中评估了涉嫌芥子气中毒患者的照片，称其表现为“芥子气损伤的特征”。
   </p>
   <p class="graf graf--p graf-after--p" id="0201">
    SAMS 报告了芥子气中毒的实地诊断。总部位于阿勒颇的 FSA 联盟第 13 分部于次日同意了这一结论，在 Facebook 上张贴了一张患有严重背部水疱的男子的照片，该照片附文字称他的妻子和孩子正处于“危急状态”，“是毒气弹。”（后来被 Facebook 删除了）
   </p>
   <p class="graf graf--p graf-after--p" id="1852">
    在袭击发生后的几天里，活动人士和记者分享了至少五次炮弹的视频和照片，他们声称这些炮弹是在 Marea 发射的。后来据传拍下的弹片中含有芥子物质。而且这些弹片看起来像是完整的外壳。
   </p>
   <p class="graf graf--p graf-after--p" id="9a83">
    在对图像进行分析后，Open Syria 组织认为拍摄上传的弹片极不可能将芥子气洒在 Marea 土地上。现代的芥子气炮弹包含一个高爆炸中心管，在爆炸时将周围的芥子气 — 浓稠的浆状液体，而不是气体 — 变成细云，从而粉碎炮弹。
   </p>
   <p class="graf graf--p graf-after--p" id="0af8">
    除了哑弹之外，所有芥子气的炮弹残骸都会分散成碎片，有些大一点的碎片与人的掌心相当。因为不可能事后观察到完整的弹片，于是那些据称是在 Marea 攻击事件发生后拍摄到的在互联网上传播的所谓芥子气弹药的照片是错的。
   </p>
   <p class="graf graf--p graf-after--p" id="c5a0">
    <strong class="markup--strong markup--p-strong">
     这不意味着 ISIS 没有攻击或者没有使用芥子气
    </strong>
    ，这是意味着我们还没有真的发现物证：即 可识别的化学弹药的遗骸。
   </p>
   <p class="graf graf--p graf-after--p" id="d4ac">
    <strong class="markup--strong markup--p-strong">
     他们如何做到的？
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="d7a2">
    Marea 是此前在叙利亚和伊拉克发生的一系列可能的 IS 芥子气袭击事件的最新目标。据报道，美国军事人员此前两日在伊拉克 Makhmour 以及此前十天在叙利亚 al-Hasakah 对库尔德部队发射的迫击炮碎片进行了实地测试。
   </p>
   <p class="graf graf--p graf-after--p" id="0d27">
    Marea 是第一次被攻击，其中患者症状的发作和表现形式，如社交媒体上所记录的那样，与芥子气制剂的接触结果非常接近。但如果 IS 确实在 Marea 部署了芥子气，他们是如何做到的？
   </p>
   <p class="graf graf--p graf-after--p" id="53bc">
    首先，修改常规弹药或制造自己的弹药，以提供被盗的或自制的毒气制剂，是一项复杂而危险的任务。IS 的化学家必须从头开始，或使用一种或多种芥子气前体 — 用于大规模生产毒剂的原料化学品，来完善芥类起泡剂。与此同时，工程师必须掌握自己动手制造芥子气炮弹的艰巨挑战，这种炮弹需要能够通过野战炮承受非凡的火力暴力。即使是填充这一设备也可能导致数十人受伤。
   </p>
   <p class="graf graf--p graf--startsWithDoubleQuote graf-after--p" id="fec1">
    “最危险的工作都是填充炮弹……英国装载设施的数千名工人都受到了不利影响; 在一个设施中有九成人生病或受伤，而在另一个工厂，这一比率达到了劳动力的100％“，Gerald Fitzgerald 博士写道，引用他父亲当年的记载，他父亲是一战时德国的毒气专家 Fritz Haber，专门研究芥子气的化学家。
   </p>
   <p class="graf graf--p graf-after--p" id="3985">
    这不是说 ISIS 就做不了。他们曾经部署过复杂的自制武器。但
    <strong class="markup--strong markup--p-strong">
     一个显著的问题在于攻击“效果”，芥子气最大的效果是致残和污染，而不是杀戮
    </strong>
    ，芥子气释放后令敌方在数小时或数天内难以接近污染地区，然而它的
    <strong class="markup--strong markup--p-strong">
     杀伤率仅在1％到3％之间
    </strong>
    。而老式的高爆炸药更便宜也是更可靠的杀手，如果死亡和伤残是 IS 的唯一目标的话。
   </p>
   <p class="graf graf--p graf-after--p" id="be99">
    虽然自行调制芥子毒剂和构建机制似乎有些难度过大，但鉴于大规模化学武器计划和地区混乱的令人担忧的组合状况，在叙利亚或伊拉克偷窃、寻找或购买芥子剂的可能性似乎是存在的。
   </p>
   <p class="graf graf--p graf-after--p" id="bd42">
    例如，2013 年解密的法国情报报告估计，叙利亚拥有“数百吨库存芥。”虽然有些消息来源称是 560 公吨，但目前还不清楚此前是否有国际努力制止，正如禁止化学武器组织的一份报告所述，阿萨德的化学武器库被摧毁了超过 20 公吨最终形式的芥子气剂。
   </p>
   <p class="graf graf--p graf-after--p" id="3aac">
    叙利亚政府声称在 2013 年3月在三个地点销毁了 200 公吨，但是斯德哥尔摩国际和平化学和生物战项目负责人 Jean Pascal Zanders 博士指出：“据我所知，[尽管]禁化武组织已经能够确定芥子气破坏活动发生在叙利亚声称的地点……但未能确定被销毁的数量”。“叙利亚显然缺乏与其相关的活动，包括武器装备和破坏活动的记录……这当然并不意味着武器没有被销毁，但它造成了一定程度的不确定性。”
   </p>
   <p class="graf graf--p graf-after--p" id="cf5d">
    因此，芥子气原料有可能在叙利亚某处丢失或隐藏。
   </p>
   <p class="graf graf--p graf-after--p" id="a1e5">
    以上是信息收集，以下是具体分析。
   </p>
   <p class="graf graf--p graf-after--p" id="707e">
    <strong class="markup--strong markup--p-strong">
     症状：认定和评估
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="24a5">
    无国界医生指出曾治疗过四个病人，都来自同一个家庭，其中包括“两位家长，三岁的女孩和一个出生五天的女婴”，攻击发生当日在阿勒颇北部的一家无国界医生医院。
   </p>
   <p class="graf graf--p graf-after--p" id="f307">
    虽然无国界医生没有实验室证据可以确认症状的原因，但“患者的临床症状、症状随时间变化的方式、以及患者对中毒情况的证词，都指向接触过化学药剂的结论”，叙利亚无国界医生项目经理 Pablo Marco 在同一份报告中说。
   </p>
   <p class="graf graf--p graf-after--p" id="7840">
    特别值得注意的是
    <strong class="markup--strong markup--p-strong">
     水疱延迟发作
    </strong>
    ，无国界医生报告在初次接触后约四小时发现水疱。初始暴露和起泡之间的四小时时间表
    <strong class="markup--strong markup--p-strong">
     与芥子气剂临床效果的科学文献相匹配
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="c276">
    下表列出了芥子气暴露的症状，以及症状发作的指定时间范围：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4212 jetpack-lazy-image" data-lazy-sizes="(max-width: 427px) 100vw, 427px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?resize=427%2C582&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?w=427&amp;ssl=1 427w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?resize=220%2C300&amp;ssl=1 220w" data-recalc-dims="1" height="582" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?resize=427%2C582&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="427"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4212" data-recalc-dims="1" height="582" sizes="(max-width: 427px) 100vw, 427px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?resize=427%2C582&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?w=427&amp;ssl=1 427w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-383.png?resize=220%2C300&amp;ssl=1 220w" width="427"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="58ad">
    在报告的 IS 化学炮袭击后拍摄到的炮弹弹壳很可能是传统的中国或俄罗斯制造的照明弹或 WP 烟雾弹的130毫米底座。于是记者和活动家的声称有误。
   </p>
   <p class="graf graf--p graf-after--p" id="f6d2">
    炮兵部队很有可能向 Marea 发射各种炮弹，使用烟雾弹和照明弹可以隐藏前一次袭击阿勒颇北部城镇的战斗机的动作，或者为车载 IED 自杀客扫清道路。鉴于有充分证据和评估以证明受伤居民的状况，
    <strong class="markup--strong markup--p-strong">
     含有芥状起泡剂的弹壳可能和其他弹壳混在一起了。
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="cd51">
    正如此前所述，
    <strong class="markup--strong markup--p-strong">
     除了哑弹之外很难找到完整的碎片以证明气剂的存在，因此尚未能确定其属于芥子气剂。
    </strong>
    最简单的假设是，IS 抢劫了现成的化学品火炮，即装载在可行的运载工具中的芥子气剂 — 比如在伊拉克或叙利亚捕获的炮弹或迫击炮。
   </p>
   <p class="graf graf--p graf-after--p" id="eaa1">
    如上所述，似乎没有什么看似合理的其他可能：独立设计、开发和测试芥子剂，以及提供毒物的装置，那将是复杂危险且昂贵的，并且不比现成的高爆炸药更致命。
   </p>
   <p class="graf graf--p graf-after--p" id="1c2b">
    下图是袭击发生的当日出现在推特上的弹壳照片：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4213 jetpack-lazy-image" data-lazy-sizes="(max-width: 771px) 100vw, 771px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=771%2C573&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?w=771&amp;ssl=1 771w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=300%2C223&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=768%2C571&amp;ssl=1 768w" data-recalc-dims="1" height="573" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=771%2C573&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="771"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4213" data-recalc-dims="1" height="573" sizes="(max-width: 771px) 100vw, 771px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=771%2C573&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?w=771&amp;ssl=1 771w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=300%2C223&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-384.png?resize=768%2C571&amp;ssl=1 768w" width="771"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="b428">
    下图出现在袭击次日的凌晨：
   </p>
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4214 jetpack-lazy-image" data-lazy-sizes="(max-width: 877px) 100vw, 877px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=877%2C649&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?w=877&amp;ssl=1 877w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=768%2C568&amp;ssl=1 768w" data-recalc-dims="1" height="649" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=877%2C649&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="877"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4214" data-recalc-dims="1" height="649" sizes="(max-width: 877px) 100vw, 877px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=877%2C649&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?w=877&amp;ssl=1 877w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=300%2C222&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-385.png?resize=768%2C568&amp;ssl=1 768w" width="877"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   两个假设
  </div>
  <div>
   <p class="graf graf--p graf-after--p" id="1ac1">
    假设1：IED 前体
   </p>
   <p class="graf graf--p graf-after--p" id="27df">
    首先，弹壳完好无损。现代的芥子气炮弹包含一个爆炸物的中心管，它的爆炸以分散一种细雾状的浓稠浆态的芥子剂，从而粉碎外壳。因此，应该观察到的是碎片，而不是完整的壳。
   </p>
   <p class="graf graf--p graf-after--p" id="4832">
    其次，炮弹需要使用熔断器进行爆炸，并将其拧入弹丸的螺纹鼻部。然而，上述照片显示被剥去了螺纹，似乎是有意的扩大炮弹引线，表明 Marea叛乱分子可能一直在努力将拍下的弹药转换成简易爆炸装置。居民反过来拍到了实际上是 IED 前体的东西。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4215 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1100%2C658&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?w=1278&amp;ssl=1 1278w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=300%2C179&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=768%2C459&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1024%2C612&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1100%2C658&amp;ssl=1 1100w" data-recalc-dims="1" height="658" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1100%2C658&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4215" data-recalc-dims="1" height="658" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1100%2C658&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?w=1278&amp;ssl=1 1278w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=300%2C179&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=768%2C459&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1024%2C612&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-386.png?resize=1100%2C658&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="6bb4">
    假设 2：常规照明弹或 WP 烟雾弹
   </p>
   <p class="graf graf--p graf-after--p" id="4299">
    然而仔细检查发现，壳体似乎不是 IED 前体。相反照片更像是来自弹射炮弹：弹射炮弹鼻部有一个爆炸装药，爆炸时会将炮弹的有效载荷推出尾端，壳体会保持完整，不像壳体有中心爆裂管的那种外壁肯定破裂。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4216 jetpack-lazy-image" data-lazy-sizes="(max-width: 678px) 100vw, 678px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?resize=678%2C636&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?w=678&amp;ssl=1 678w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?resize=300%2C281&amp;ssl=1 300w" data-recalc-dims="1" height="636" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?resize=678%2C636&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="678"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4216" data-recalc-dims="1" height="636" sizes="(max-width: 678px) 100vw, 678px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?resize=678%2C636&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?w=678&amp;ssl=1 678w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-387.png?resize=300%2C281&amp;ssl=1 300w" width="678"/>
    </noscript>
   </p>
   <p>
    那么究竟是什么炮弹击中了 Marea？鉴于每个炮弹底座上的双旋转带，很容易推测是俄罗斯DTs1或中国 59 型 130 毫米可见光烟雾弹或照明弹。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4217 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1100%2C589&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?w=1172&amp;ssl=1 1172w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=300%2C161&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=768%2C412&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1024%2C549&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1100%2C589&amp;ssl=1 1100w" data-recalc-dims="1" height="589" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1100%2C589&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4217" data-recalc-dims="1" height="589" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1100%2C589&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?w=1172&amp;ssl=1 1172w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=300%2C161&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=768%2C412&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1024%2C549&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-388.png?resize=1100%2C589&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="e63e">
    那么能够造成深度烧伤的 WP 能否导致 Marea 显示的那种伤害？
   </p>
   <p class="graf graf--p graf-after--p" id="c851">
    日内瓦把白磷弹列为违禁武器，明确规定不允许在平民区或针对平民使用，但充许白磷弹被用作烟幕弹或照明弹。“白磷燃烧更多会造成离散的烧伤，这种烧伤非常深，可以渗透到骨骼中，“ 利兹大学毒理学教授 Alastair Hay 写信给 Open Syria，并且指出，
    <strong class="markup--strong markup--p-strong">
     “照片所显示的更像是芥子气的证据而不是 WP”。
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="b410">
    尽管暴露于 WP 烟雾中可能会造成类似暴露于其他武器化学物质中所造成的创伤，但 WP 似乎不太可能造成照片中所呈现的那种伤害。
   </p>
   <p class="graf graf--p graf-after--p" id="4455">
    在没有可识别的弹药的情况下，Open Syria 发现，经过医学和化学武器专家独立评估的受害者的照片，是 ISIS 芥子气袭击 Marea 的最有说服力的证据。虽然如此，依旧需要指出，
    <strong class="markup--strong markup--p-strong">
     那些流传的照片很可能是搞错了状况，不可作为证据
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="d4ea">
    好啦，上述案例希望能呈现一个思路，即什么是证据，如何评估各方面来源的信息。希望中国的独立调查人士能掌握数据收集、证据评估和逻辑梳理的技巧。⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e34a57e817">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4203" href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e6%94%b6%e9%9b%86%e4%bf%a1%e6%81%af%e8%bf%bd%e8%b8%aa%e9%92%b1%e7%9a%84%e8%bd%a8%e8%bf%b9-osint-%e5%9f%ba%e7%a1%80%e5%92%8c%e4%b8%80%e4%b8%aa-timeline/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4203" href="https://www.iyouport.org/%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e6%94%b6%e9%9b%86%e4%bf%a1%e6%81%af%e8%bf%bd%e8%b8%aa%e9%92%b1%e7%9a%84%e8%bd%a8%e8%bf%b9-osint-%e5%9f%ba%e7%a1%80%e5%92%8c%e4%b8%80%e4%b8%aa-timeline/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/activism/" rel="tag">
     Activism
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
   <li>
    <a href="https://www.iyouport.org/tag/truth/" rel="tag">
     truth
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-08-16T02:26:44+08:00">
    2018年8月16日
   </time>
   <time class="updated" datetime="2019-05-20T02:42:02+08:00">
    2019年5月20日
   </time>
  </div>
 </div>
</article>

