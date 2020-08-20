---
layout: post
title: "高级运算符辅助开源调查：巧用搜索引擎挖掘情报 #OSINT - iYouPort"
date: 2018-11-07T14:20:30+00:00
author: iYouPort
from: https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-3562 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-activism tag-osint tag-technique tag-technology tag-tools" id="post-3562">
 <header class="entry-header">
  <h1 class="entry-title">
   高级运算符辅助开源调查：巧用搜索引擎挖掘情报 #OSINT
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
   <time class="entry-date published" datetime="2018-11-07T22:20:30+08:00">
    2018年11月7日
   </time>
   <time class="updated" datetime="2019-05-09T22:35:04+08:00">
    2019年5月9日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       Google 涵盖的数据量之大往往超乎你的想象，随着这个世界的数字化程度越来越高，对于开源调查来说已经是一种极其强大的工具。如果你还找不到自己想要的信息，很可能只是你没有用*对*搜索引擎。
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-3563 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1100%2C619&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=768%2C432&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1024%2C576&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1100%2C619&amp;ssl=1 1100w" data-recalc-dims="1" height="619" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1100%2C619&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-3563" data-recalc-dims="1" height="619" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1100%2C619&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?w=1200&amp;ssl=1 1200w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=768%2C432&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1024%2C576&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/7.jpeg?resize=1100%2C619&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="2fc4">
   高级运算符是 Google 黑客军械库中真正的武器。今天我们来简单演示一下它在开源调查中的作用。以及大多数可用的运算符的使用方法。
  </p>
  <p class="graf graf--p graf-after--p" id="ce1a">
   仅在几年前，为了搜索诸如 VIN（车辆识别号码）或所有者详细信息之类的车辆信息，还需要你有权访问高级数据库。而如今，我们正在慢慢开始看到这种类型的数据泄露到免费的公共资源中。
  </p>
  <p class="graf graf--p graf-after--p" id="86ff">
   比如一个这样的工具，汽车所有者（
   <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
    carsowners.net
   </a>
   ）。该网站没有太多的搜索功能。相反，您必须用类型、年份、最终的个人详细信息来导航。所以你不如考虑自定义 Google 搜索。
  </p>
  <p class="graf graf--p graf-after--p" id="5a45">
   比如你想要寻找“John Smith”拥有的任何车辆，就在 Google 中输入以下内容：
  </p>
  <p class="graf graf--p graf-after--p" id="6980">
   site：
   <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
    carsowners.net
   </a>
   “john smith”
  </p>
  <p class="graf graf--p graf-after--p" id="104f">
   这能产生了许多结果。如果你知道目标人的车子是马自达，那么就可以进行以下搜索：
  </p>
  <p class="graf graf--p graf-after--p" id="09e8">
   site：
   <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
    carsowners.net
   </a>
   “john smith”“mazda”“tx”
  </p>
  <p class="graf graf--p graf-after--p" id="592c">
   这就能将你引导至
   <a class="markup--anchor markup--p-anchor" data-href="https://carsowners.net/mazda/mazda3/2007/tx/page8" href="https://carsowners.net/mazda/mazda3/2007/tx/page8" rel="noreferrer noopener nofollow" target="_blank">
    https://carsowners.net/mazda/mazda3/2007/tx/page8
   </a>
   的直接 URL 了 。在此页面上，以下是应该期望的详细信息类型的示例：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-3564 jetpack-lazy-image" data-lazy-sizes="(max-width: 820px) 100vw, 820px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=820%2C276&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?w=820&amp;ssl=1 820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=300%2C101&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=768%2C258&amp;ssl=1 768w" data-recalc-dims="1" height="276" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=820%2C276&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="820"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-3564" data-recalc-dims="1" height="276" sizes="(max-width: 820px) 100vw, 820px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=820%2C276&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?w=820&amp;ssl=1 820w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=300%2C101&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-281.png?resize=768%2C258&amp;ssl=1 768w" width="820"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="3f3d">
    你
    <span class="markup--quote markup--p-quote is-other" data-creator-ids="9a84393f36dc">
     还可以搜索个人详细信息，例如电话号码，地址或 VIN
    </span>
    。以下搜索示例非常有效：
   </p>
   <p class="graf graf--p graf-after--p" id="ffe6">
    site：
    <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
     carsowners.net
    </a>
    “（618）463–4164”
   </p>
   <p class="graf graf--p graf-after--p" id="d1fb">
    site：
    <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
     carsowners.net
    </a>
    “4900 Ridgewood Ln”
   </p>
   <p class="graf graf--p graf-after--p" id="4516">
    site：
    <a class="markup--anchor markup--p-anchor" data-href="http://carsowners.net/" href="http://carsowners.net/" rel="noreferrer noopener nofollow" target="_blank">
     carsowners.net
    </a>
    “1G4GE5GD0BF256768”
   </p>
   <p class="graf graf--p graf-after--p" id="d53a">
    试试看，很棒吧。不论你想要找的是什么，以此类推就行啦。
   </p>
   <p class="graf graf--p graf-after--p" id="5c13">
    服务器的地址（或域名）作为 URL 的一部分，最好使用 site 运算符对其进行搜索。
    <strong class="markup--strong markup--p-strong">
     site 允许你搜索仅仅位于一个特定服务器上的或在一个特定域名里面的页面。
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="5431">
    尽管看起来非常简明易懂，但还是要花点时间来习惯于如何恰当地使用 site 运算符，因为Google 是从右往左读取 Web 服务器的名字，和大多数人类的习惯相反。考虑一个普通的 Web 服务器名字，
    <a class="markup--anchor markup--p-anchor" data-href="http://www.blackhat.com/" href="https://www.blackhat.com/" rel="noreferrer noopener nofollow" target="_blank">
     www.blackhat.com
    </a>
    ，为了找到位于
    <a class="markup--anchor markup--p-anchor" data-href="http://blackhat.com/" href="https://blackhat.com/" rel="noreferrer noopener nofollow" target="_blank">
     blackhat.com
    </a>
    上的页面，一个简单的查询 site:blackhat.com 就够了。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-3565 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1100%2C745&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?w=1852&amp;ssl=1 1852w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=300%2C203&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=768%2C520&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1024%2C693&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1100%2C745&amp;ssl=1 1100w" data-recalc-dims="1" height="745" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1100%2C745&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-3565" data-recalc-dims="1" height="745" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1100%2C745&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?w=1852&amp;ssl=1 1852w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=300%2C203&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=768%2C520&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1024%2C693&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-79.jpeg?resize=1100%2C745&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="2203">
    看到没，前几个结果都来自于
    <a class="markup--anchor markup--p-anchor" data-href="http://www.blackhat.com/" href="https://www.blackhat.com/" rel="noreferrer noopener nofollow" target="_blank">
     www.blackhat.com
    </a>
    。服务器都是以
    <a class="markup--anchor markup--p-anchor" data-href="http://blackhat.com/" href="https://blackhat.com/" rel="noreferrer noopener nofollow" target="_blank">
     blackhat.com
    </a>
    结尾的，都是你要查询的有效结果。很棒吧。
   </p>
   <p class="graf graf--p graf-after--p" id="44c3">
    就像很多 Google 的高级运算符一样，site 也能够以有趣的方式被使用。举个例子比如，查询 site:r，得到以下结果：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-3566 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1100%2C536&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?w=1848&amp;ssl=1 1848w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=300%2C146&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=768%2C374&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1024%2C499&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1100%2C536&amp;ssl=1 1100w" data-recalc-dims="1" height="536" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1100%2C536&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-3566" data-recalc-dims="1" height="536" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1100%2C536&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?w=1848&amp;ssl=1 1848w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=300%2C146&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=768%2C374&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1024%2C499&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-80.jpeg?resize=1100%2C536&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="2eac">
    仔细地看一下查询结果，你会发现第一个返回结果的 URL 看起来有点怪异。事实上就是怪异的。Google（也可以说整个因特网）都是从右往左读取服务器名字的，而非从左往右。所以 Google 对 site:r 的查询永远不可能返回有效结果，因为没有 .r 这样的域名。那么为什么 Google 返回结果呢？不好说，但有一件事是确定的：这些古怪的搜索和它们相关联的响应能让高级搜索引擎用户感兴趣，也点燃了他们进一步探索的激情。
   </p>
   <p class="graf graf--p graf-after--p" id="5c1f">
    site 运算符还能很容易与其他运算符结合使用，比如 daterange。
   </p>
   <p class="graf graf--p graf-after--p" id="b7cb">
    <strong class="markup--strong markup--p-strong">
     daterange
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="e507">
    <strong class="markup--strong markup--p-strong">
     daterange 这个运算符能找到在特定日期范围内被 Google 索引过的页面，能让你更精准地挖到信息
    </strong>
    。Google 每次抓取一个网页，这个日期就会改变。如果 Google 找到了某个很冷门的页面，它可能只抓取了该页面一次，而没有对它进行再次索引。如果你发现搜索中被塞满了这种冷门页面，那么你就可以通过有效地使用 daterange 运算符把没用的东西从搜索中移除（然后得到刷新的结果）。
   </p>
   <p class="graf graf--p graf-after--p" id="a564">
    这个运算符的参数必需总是被表达成一个范围，即 被连字符分隔的两个日期。如果你只想找到在某个特定日期被索引过的网页，你必须提供两次相同的日期，由连字符分隔。如果你觉得这似乎简单到不真实的程度了，那就对了。它就是简单得像骗人一样。
   </p>
   <p class="graf graf--p graf-after--p" id="4ce3">
    两个传递给这个运算符的日期都必须符合 Julian dates 格式。Julian dates 就是自公元前 4713 年 1 月 1 日起经过的天数。比如日期 2001 年9月11日，表示成 Julian 格式就是 2452164。所以，如果要搜索被 Google 在 2001 年9月11日索引过的并包含 Osama Bin Laden 的网页，那么这个查询就应该是这样： daterang:2452164–2452164 “osama bin laden”。
   </p>
   <p class="graf graf--p graf-after--p" id="63df">
    Google 官方没有正式支持 daterange 运算符，正因此你可能觉得有点不便。Google 似乎更喜欢高级搜索表格中使用的日期限制，其位于
    <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/advanced_search" href="https://www.google.com/advanced_search" rel="noreferrer noopener nofollow" target="_blank">
     https://www.google.com/advanced_search
    </a>
    。这个表格通过创建 URL 字符串中的域值来执行特别的功能。Google 设计了 as_qdr 域来帮助你找到在某个时间框架内已经被更新过的网页。比如找到在过去三个月内已经被更新同时包含单词 Google 的网页，那么使用查询
    <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=google&amp;as_qdr=m3" href="https://www.google.com/search?q=google&amp;as_qdr=m3" rel="noreferrer noopener nofollow" target="_blank">
     https://www.google.com/search?q=google&amp;as_qdr=m3
    </a>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="be54">
    datesrange 看起来笨拙，相比下这样可能是个限制日期的好办法。只需将其理解为不同的功能就好啦。daterange 不是等同于 as_qdr 的高级运算符，根本就没有相同的运算符这种事。如果你想要找到过去一年或更短的时间内被更新过的网页，你必须要么使用 Google 高级搜索页面或者把 &amp;as_qdr=/y（或类似的）粘贴在你的 URL 最后。
   </p>
   <p class="graf graf--p graf-after--p" id="2f6d">
    注意，
    <span class="markup--quote markup--p-quote is-other" data-creator-ids="17261fb24077">
     daterange 运算符必须和其他搜索项或高级运算符一起使用，如果单独使用它不会返回任何结果
    </span>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="c54e">
    <strong class="markup--strong markup--p-strong">
     filetype
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="aa4c">
    filetype 运算符可以用来搜索特定类型的文件。在调查中也是很好用的。
   </p>
   <p class="graf graf--p graf-after--p" id="12ba">
    Google 可以搜索很多不同类型的文件，这就是 filetype 派上用场的时候。更确切地说，filetype 搜索以一个特别的文件扩展名结尾的页面。文件扩展名是 URL 的一部分，它跟在文件名最后一个休止符之后，在参数列表的起始问号之前。因为文件扩展名能够显示用哪种类型的软件来打开一个文件，通过搜索一个特别的文件扩展名，filetype 运算符就能够用来搜索特定类型的文件。
   </p>
   <p class="graf graf--p graf-after--p" id="8f26">
    Google 会把它搜索到的每一个文档转换成 HTML 格式或者可以在线看的文本文件。例如这样 filetype:doc pirate。第一个搜索结果在文档标题前列出了[DOS]，表示该文件为微软 word 格式。这就表示 Google 识别出了这个文件就是一个微软 word 文档。另外 Google 也提供了 HTML 链接，点击后将会显示该文件的 HTML 网页快照。
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-3567 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1100%2C511&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?w=1920&amp;ssl=1 1920w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=300%2C139&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=768%2C357&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1024%2C476&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1100%2C511&amp;ssl=1 1100w" data-recalc-dims="1" height="511" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1100%2C511&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-3567" data-recalc-dims="1" height="511" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1100%2C511&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?w=1920&amp;ssl=1 1920w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=300%2C139&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=768%2C357&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1024%2C476&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-81.jpeg?resize=1100%2C511&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="c492">
    当你点击一个已经被 Google 转换的文档链接时，在页面顶部会出现一个页眉，就像上面这样，表明你正在浏览该页面的 HTML 版本。当然也提供了原始文件的链接。如果你觉得这看起来很像网页快照，那就对了。这是原始文件的缓存版本被转换成了 HTML。
   </p>
   <p class="graf graf--p graf-after--p" id="fc1b">
    尽管上述看起来很棒，但 Google 也是不完美的，记住：
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="de48">
     Google 并非总是为一个页面转换后的版本提供链接；
    </li>
    <li class="graf graf--li graf-after--li" id="120d">
     Google 并非总是能准确识别出哪怕是最普通文件格式的类型；
    </li>
    <li class="graf graf--li graf-after--li" id="fe9e">
     当 Google 抓取一个以特别文件扩展名结尾的页面但它又是个空白文件时，Google 有时会提供一个有效的文件类型和转换后页面的链接。即使一个空白 word 文档的 HTML 版本依然是空白的。
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="13cf">
    有很多高级运算符可以帮助你更精准地找到你想要的开源信息。其中 site，filetype 都是非常强大的，其他的也很有效，而且很容易记住，比如 stocks 运算符返回某个特定代码的股票信息，define 运算符返回一个单词或简单短语的定义。
   </p>
   <p class="graf graf--p graf-after--p" id="1add">
    下面简单总结一下，就看你需要什么啦。
   </p>
   <p class="graf graf--p graf-after--p" id="bf04">
    <strong class="markup--strong markup--p-strong">
     intitle
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="15ba">
    <p>
     <em>
      在页面的标题里查找字符串
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="11e9">
    <p>
     <em>
      与其他运算符混合使用效果很好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="ca21">
    <p>
     <em>
      最好在网页、网上论坛、图片和新闻搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="abd3">
    <p>
     <em>
      例：intitle:”index of””backup files”
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="fca1">
    <strong class="markup--strong markup--p-strong">
     allintitle
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="5124">
    <p>
     <em>
      在一个页面的标题里查找所有搜索项
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="26f7">
    <p>
     <em>
      其他运算符或搜索项混合使用效果不好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="cb8b">
    <p>
     <em>
      最好在网页、网上论坛、图片和新闻搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="a68e">
    <p>
     <em>
      例：allintitle:”index of””backup files”（和上面那个返回不一样的结果）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="27ef">
    <strong class="markup--strong markup--p-strong">
     inurl
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="1464">
    <p>
     <em>
      在一个页面的 URL 里查找字符串
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="143e">
    <p>
     <em>
      与其他运算符混合使用效果很好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="f794">
    <p>
     <em>
      最好在网页和图片搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="dca2">
    <p>
     <em>
      例：inurl:admin index
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="3390">
    <strong class="markup--strong markup--p-strong">
     allinurl
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="bf9b">
    <p>
     <em>
      在一个页面的 URL 里查找所有搜索项
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="6fe2">
    <p>
     <em>
      其他运算符和搜索项混合使用效果不好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="ddaf">
    <p>
     <em>
      最好在网页、网上论坛和图片搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="2ba5">
    <p>
     <em>
      例：allinurl:admin index
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="f909">
    <strong class="markup--strong markup--p-strong">
     filetype
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="65f9">
    <p>
     <em>
      基于文件扩展名搜索特殊文件类型
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="39a2">
    <p>
     <em>
      与 ext 同义
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="65de">
    <p>
     <em>
      需要一个额外的搜索项
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="9ebb">
    <p>
     <em>
      其他运算符或搜索项混合使用效果不好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="48a3">
    <p>
     <em>
      最好在网页和网上论坛搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="f683">
    <p>
     <em>
      （这个例子上面有）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="6d2d">
    <strong class="markup--strong markup--p-strong">
     site
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="59d0">
    <p>
     <em>
      把一个搜索限定在一个特别的网站或域中
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="4f7f">
    <p>
     <em>
      与其他运算符混合使用效果好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="d13f">
    <p>
     <em>
      能够单独使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="8779">
    <p>
     <em>
      最好在网页、网上论坛和图片搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="9f00">
    <p>
     <em>
      （这个例子上面有）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="0199">
    <strong class="markup--strong markup--p-strong">
     link
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="9061">
    <p>
     <em>
      搜索一个网站的链接或者 URL
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="e56f">
    <p>
     <em>
      无法和其他运算符或搜索项混合使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="fe81">
    <p>
     <em>
      最好在网页搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="3020">
    <p>
     <em>
      例：link:www.defcon.org 或者 link:linux
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="3656">
    <strong class="markup--strong markup--p-strong">
     inanchor
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="a8c4">
    <p>
     <em>
      在链接的描述性文字中查找文本
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="c95c">
    <p>
     <em>
      其他运算符或搜索项混合使用效果好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="17a3">
    <p>
     <em>
      最好在网页、图片和新闻搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="e8a9">
    <p>
     <em>
      例：inanchor:click
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="20ed">
    <strong class="markup--strong markup--p-strong">
     daterange
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="90e8">
    <p>
     <em>
      寻找在一个特定日期范围内索引过的页面
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="5935">
    <p>
     <em>
      需要一个搜索项
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="b046">
    <p>
     <em>
      混合使用效果好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="cb84">
    <p>
     <em>
      可能会让位于 as_qdr 而被淘汰
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="204d">
    <p>
     <em>
      （这个例子上面有）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="d20f">
    <strong class="markup--strong markup--p-strong">
     numrange
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="284a">
    <p>
     <em>
      在特定范围内查找一个数字
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="667b">
    <p>
     <em>
      混合使用效果好
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="363d">
    <p>
     <em>
      与 ext 同义
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="3457">
    <p>
     <em>
      例：numrange:12344–12346 (返回 12345)
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="d927">
    <strong class="markup--strong markup--p-strong">
     cache
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="e586">
    <p>
     <em>
      显示 Google 缓存的页面拷贝
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="6ddd">
    <p>
     <em>
      无法与其他运算符或搜索项混合使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="6589">
    <p>
     <em>
      最好在网页搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="48f7">
    <p>
     <em>
      例：cache:linux（与“cache:linux” 加引号返回的结果数量一致）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="da01">
    <strong class="markup--strong markup--p-strong">
     info
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="4f4f">
    <p>
     <em>
      显示关于一个页面的总结信息
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="a845">
    <p>
     <em>
      无法与其他运算符或搜索项混合使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="c402">
    <p>
     <em>
      最好在网页搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="a978">
    <p>
     <em>
      例：info:www.csc.com
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="9446">
    <strong class="markup--strong markup--p-strong">
     related
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="b14f">
    <p>
     <em>
      显示与所有网站或 URL 相关的站点
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="8f93">
    <p>
     <em>
      无法与其他运算符或搜索项混合使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="f721">
    <p>
     <em>
      最好在网页搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="dc63">
    <p>
     <em>
      例：related:linux （注意 其返回的结果与加引号的“related:linux”完全不一样）
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="6739">
    <strong class="markup--strong markup--p-strong">
     stocks
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="a8e2">
    <p>
     <em>
      为一个股票代码显示 Yahoo 财经的股票列表
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="fcb7">
    <p>
     <em>
      无法与其他运算符或搜索项混合使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="21da">
    <p>
     <em>
      最好在网页搜索中使用
     </em>
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="87fb">
    <p>
     <em>
      就不用举例子了，参数必须是一个有效的股票缩写
     </em>
    </p>
   </blockquote>
   <p class="graf graf--p graf-after--blockquote" id="8eb5">
    <strong class="markup--strong markup--p-strong">
     define
    </strong>
   </p>
   <blockquote class="graf graf--blockquote graf-after--p" id="80d5">
    <p>
     显示单词或短语的不同含义
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="b316">
    <p>
     无法与其他运算符或搜索项混合使用
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="3e27">
    <p>
     最好在网页搜索中使用
    </p>
   </blockquote>
   <blockquote class="graf graf--blockquote graf-after--blockquote" id="4e3d">
    <p>
     例：define:ironic
    </p>
   </blockquote>
   <p>
    <img alt="" class="aligncenter size-full wp-image-3568 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1100%2C785&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?w=1590&amp;ssl=1 1590w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=300%2C214&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=768%2C548&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1024%2C730&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1100%2C785&amp;ssl=1 1100w" data-recalc-dims="1" height="785" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1100%2C785&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-3568" data-recalc-dims="1" height="785" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1100%2C785&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?w=1590&amp;ssl=1 1590w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=300%2C214&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=768%2C548&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1024%2C730&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-82.jpeg?resize=1100%2C785&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="4610">
    <a class="markup--anchor markup--p-anchor" data-href="http://filext.com/" href="http://filext.com/" rel="noreferrer noopener nofollow" target="_blank">
     filext.com/
    </a>
    这个网站能帮你找到与某个特定的扩展名相关联的程序。
   </p>
   <p class="graf graf--p graf-after--p" id="23d6">
    你也许已经意识到了，
    <strong class="markup--strong markup--p-strong">
     本文不仅仅是为
    </strong>
    <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/5b90106d8c955800448fb0b2/edit/search/posts?query=%23OSINT" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/5b90106d8c955800448fb0b2/edit/search/posts?query=%23OSINT" rel="nofollow noopener noreferrer" target="_blank">
     <strong class="markup--strong markup--p-strong">
      #OSINT
     </strong>
    </a>
    <strong class="markup--strong markup--p-strong">
     开源调查提供的工具，它在社交工程攻击和防御中也非常好用
    </strong>
    ，完全正确！社交工程攻击的基础就是信息收集，需要很多类似开源调查的收集和分析能力，所以它俩是“相关”的。
   </p>
   <p class="graf graf--p graf-after--p" id="29d4">
    后面文章还有机会专门介绍用于社交工程学的信息收集方法及其好用的工具。下次见。
   </p>
  </div>
  <div id="atatags-1611829871-5f3e17d29dfb8">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-3562" href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-3562" href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-11-07T22:20:30+08:00">
    2018年11月7日
   </time>
   <time class="updated" datetime="2019-05-09T22:35:04+08:00">
    2019年5月9日
   </time>
  </div>
 </div>
</article>

