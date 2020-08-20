---
layout: post
title: "如何在地图上轻而易举找到一个 Skype 用户的具体地理位置？#OSINT - iYouPort"
date: 2018-08-29T04:45:51+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e5%9c%b0%e5%9b%be%e4%b8%8a%e8%bd%bb%e8%80%8c%e6%98%93%e4%b8%be%e6%89%be%e5%88%b0%e4%b8%80%e4%b8%aa-skype-%e7%94%a8%e6%88%b7%e7%9a%84%e5%85%b7%e4%bd%93%e5%9c%b0%e7%90%86/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4867 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-technique tag-technology tag-tools" id="post-4867">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在地图上轻而易举找到一个 Skype 用户的具体地理位置？#OSINT
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
   <time class="entry-date published" datetime="2018-08-29T12:45:51+08:00">
    2018年8月29日
   </time>
   <time class="updated" datetime="2019-06-01T13:10:06+08:00">
    2019年6月1日
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
       继续这个游戏。如果能在地图上显示 Skype 呼叫的具体位置，是不是很酷呢？你也能做到！
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4868 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1100%2C733&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="733" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1100%2C733&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4868" data-recalc-dims="1" height="733" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1100%2C733&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?w=1456&amp;ssl=1 1456w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1024%2C682&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=1100%2C733&amp;ssl=1 1100w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-92.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="7ac9">
   在本系列的第一部分中，我们介绍了如何从 SQLite 数据库中提取电子邮件帐户，并从 FullContact.com 中提取其他信息，以查找与这些电子邮件地址关 联的社交媒体帐户或其他在线配置文件。
  </p>
  <p class="graf graf--p graf-after--p" id="c07d">
   在这篇文章中，我们将应用相同的技术，只是我们将提取IP地址，并地理定位它们，然后在地图上显示结果以可视化 Skype 呼叫的位置。大部分繁重的工作都是在上一篇文章中完成的，所以我们只是建立在这个基础上。
  </p>
  <p class="graf graf--p graf-after--p" id="d026">
   开始！
  </p>
  <p class="graf graf--p graf-after--p" id="50d8">
   <strong class="markup--strong markup--p-strong">
    修改正则表达
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="a4d9">
   首先从这里获取 sqlite_osint.py 脚本的副本，然后将其保存为 sqlite_osint_geoip.py。我们要做的第一件事是修改正则表达式以匹配 IP 地址而不是电 子邮件地址。把第10行替换成为：
  </p>
  <blockquote class="graf graf--blockquote graf-after--p" id="98a1">
   <p>
    regex_match = re.compile(“””^(25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?).(25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?).(25[0–5]|2[0–4][0–9]|[01]?[0–9][09]?).(25[0–5]|2[0–4][0–9]|[01]?[0–9][0–9]?)$”””)
   </p>
  </blockquote>
  <p class="graf graf--p graf-after--blockquote" id="1b8f">
   呃，好像有点复杂？没关系，现在我们已经实现了这一点，让我们继续设置将 IP 地址转换为地理位置。
  </p>
  <p class="graf graf--p graf-after--p" id="a34b">
   <strong class="markup--strong markup--p-strong">
    地理定位 IP 地址
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="27b1">
   虽然科学不精确，但有时尝试对 IP 地址进行地理定位仍然很有用。这涉及使用具有映射到地理位置的各种 IP 子网的数据库。其中一个经过验证的真实数 据库是 Maxmind Geolite 数据库（
   <a class="markup--anchor markup--p-anchor" data-href="http://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz" href="https://geolite.maxmind.com/download/geoip/database/GeoLite2-City.mmdb.gz" rel="nofollow noopener noreferrer" target="_blank">
    在此下载
   </a>
   ）。下载数据库后，您需要使用7-zip（Windows）或 OSX 解压缩，只需双击即可解压缩。记下生成的文件的 位置，因为我们很快就会需要它。
  </p>
  <p class="graf graf--p graf-after--p" id="3e55">
   Maxmind还慷慨地为我们提供了一个 Python 模块（
   <a class="markup--anchor markup--p-anchor" data-href="http://geoip2.readthedocs.io/en/latest/" href="https://geoip2.readthedocs.io/en/latest/" rel="nofollow noopener noreferrer" target="_blank">
    文档在这里
   </a>
   ），这将使我们能够轻松地使用他们的数据库格式，你可以使用 pip 安装它：
  </p>
  <blockquote class="graf graf--blockquote graf-after--p" id="3521">
   <p>
    pip install geoip2
   </p>
  </blockquote>
  <p class="graf graf--p graf-after--blockquote" id="6453">
   很棒，现在让我们为脚本添加更多内容。在所有 import 语句的下方，添加以下内容：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4869 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1100%2C160&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?w=1484&amp;ssl=1 1484w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=300%2C44&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=768%2C112&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1024%2C149&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1100%2C160&amp;ssl=1 1100w" data-recalc-dims="1" height="160" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1100%2C160&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4869" data-recalc-dims="1" height="160" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1100%2C160&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?w=1484&amp;ssl=1 1484w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=300%2C44&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=768%2C112&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1024%2C149&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-93.jpeg?resize=1100%2C160&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="aa1f">
   这将导入 geoip2 模块，专门用于处理数据库文件（第4行），然后通过传递数据库文件的路径（第6行）来初始化数据库读取器。路径应是电脑上的当 前位置。我们现在开始设置将IP地址解析到地理位置。接下来，我们需要安装必要的映射件。
  </p>
  <p class="graf graf--p graf-after--p" id="829c">
   <strong class="markup--strong markup--p-strong">
    使用 Folium 构建地图
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="e7cf">
   这里有一个叫做 Folium 的 Python 模块。Folium 允许您使用 Leaflet 映射创建精彩的地图可视化，并输出到 HTML 文 件。要安装 Folium，正如您可能猜到的那样，您可以使用 pip：
  </p>
  <blockquote class="graf graf--blockquote graf-after--p" id="ecf5">
   <p>
    pip install folium
   </p>
  </blockquote>
  <p class="graf graf--p graf-after--blockquote" id="677d">
   现在让我们将导入语句添加到脚本上方的第5行，如下所示：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4870 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1100%2C157&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=300%2C43&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=768%2C110&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1024%2C146&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1100%2C157&amp;ssl=1 1100w" data-recalc-dims="1" height="157" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1100%2C157&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4870" data-recalc-dims="1" height="157" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1100%2C157&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=300%2C43&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=768%2C110&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1024%2C146&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-94.jpeg?resize=1100%2C157&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="77c7">
   好了，现在我们准备开始做一些真正的编码了。我们将编写一些 Python 语句来遍历我们的正则表达式的结果列表，检查 Maxmind 数据库的 IP 地址，然后 将其放在我们可以在Web浏览器中浏览的地图上。让我们开始吧。
  </p>
  <p class="graf graf--p graf-after--p" id="13f7">
   <strong class="markup--strong markup--p-strong">
    将它们整合在一起
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="a116">
   首先下拉到脚本的底部，在我的编辑器中，在最后一个打印语句之后的第 52 行左右。删除遍历 match_list 的两行代码（第 52 和 53 行）并修改为以下代码：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4871 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1100%2C318&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?w=1480&amp;ssl=1 1480w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=768%2C222&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1024%2C296&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1100%2C318&amp;ssl=1 1100w" data-recalc-dims="1" height="318" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1100%2C318&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4871" data-recalc-dims="1" height="318" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1100%2C318&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?w=1480&amp;ssl=1 1480w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=768%2C222&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1024%2C296&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-95.jpeg?resize=1100%2C318&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="13c6">
   第 52 行：初始化 Folium Map 对象，我们将使用它来添加标记。标记为你在地图上看到的那些小气球。
  </p>
  <p class="graf graf--p graf-after--p" id="478e">
   第 53 行：用于跟踪我们已解决的IP地址的空列表，这样我们就不会对它们进行双重解析并使地图变得混乱。
  </p>
  <p class="graf graf--p graf-after--p" id="1532">
   第 55–62 行：遍历提取到的IP地址（第 55 行），然后创建一个字符串，该字符串将保留IP地址并使用.分割（第 57 行）。接下来，我们检查当前 IP 是否在我们已解析地址列表中（第 59 行），如果不是，则将其添加到列表中（第 62 行）。
  </p>
  <p class="graf graf--p graf-after--p" id="6ee5">
   这是我们脚本的清理部分，现在我们需要实际利用 geoip2 模块将 IP 地址转换成位置。我们现在添加此代码：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4872 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1100%2C321&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?w=1482&amp;ssl=1 1482w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=768%2C224&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1024%2C298&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1100%2C321&amp;ssl=1 1100w" data-recalc-dims="1" height="321" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1100%2C321&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4872" data-recalc-dims="1" height="321" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1100%2C321&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?w=1482&amp;ssl=1 1482w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=300%2C87&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=768%2C224&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1024%2C298&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-96.jpeg?resize=1100%2C321&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="b815">
   第 64 行：使用 reader 对象并传入我们希望解决的IP地址。
  </p>
  <p class="graf graf--p graf-after--p" id="1281">
   第 66 行：测试 record 变量是否为有效纬度，以确保我们获得了正确的位置。
  </p>
  <p class="graf graf--p graf-after--p" id="c410">
   第 68 行：创建一个包含 IP 地址的 Folium Popup对象。这样我们就可以点击地图上的小气球，让它显示位置后面的 IP。
  </p>
  <p class="graf graf--p graf-after--p" id="d039">
   第 69 行：通过传入包含我们已解析的纬度和经度的列表以及在第 68 行创建的 Popup 对象来创建 Folium Marker 对象。
  </p>
  <p class="graf graf--p graf-after--p" id="e38d">
   第 71 行：使用 ip_map 对象并调用 add_child 函数将标记添加到地图中。
  </p>
  <p class="graf graf--p graf-after--p" id="712b">
   第 73 行：将地图保存到 index.html。 就是这样！ 只需将一些代码添加到我们之前构建的代码中，我们就拥有了全新的功能。让程序运行起来吧！
  </p>
  <p class="graf graf--p graf-after--p" id="ae92">
   <strong class="markup--strong markup--p-strong">
    让它运行起来
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="e2d8">
   当您针对 Skype 数据库运行时，
   <strong class="markup--strong markup--p-strong">
    您应该会看到一些结果（假设您已拨打 Skype 电话）结果可能会让您大吃一惊，因为您可以直观地看到您拨打 Skype 电话的位置
   </strong>
   。像这样运行脚本：
  </p>
  <p class="graf graf--p graf-after--p" id="6e5e">
   python sqlite_osint_geoip.py -d /Users/justin/Desktop/main.db
  </p>
  <p class="graf graf--p graf-after--p" id="5cf8">
   [*] Scanning table…DbMeta
   <br/>
   [*] Scanning table…AppSchemaVersion
   <br/>
   [*] Scanning table…Contacts
   <br/>
   [*] Scanning table…LegacyMessages
   <br/>
   [*] Scanning table…Calls
   <br/>
   [*] Scanning table…Accounts
   <br/>
   [*] Scanning table…Transfers
   <br/>
   [*] Scanning table…Voicemails
   <br/>
   [*] Scanning table…Chats
   <br/>
   [*] Scanning table…Messages
   <br/>
   [*] Scanning table…ContactGroups
   <br/>
   [*] Scanning table…Videos
   <br/>
   [*] Scanning table…SMSes
   <br/>
   [*] Scanning table…CallMembers
   <br/>
   [*] Scanning table…ChatMembers
   <br/>
   [*] Scanning table…Alerts
   <br/>
   [*] Scanning table…Participants
   <br/>
   [*] Scanning table…VideoMessages
   <br/>
   [*] Scanning table…MediaDocuments
   <br/>
   [*] Scanning table…Translators
   <br/>
   [*] Scanning table…tracker_journal
   <br/>
   [*] Scanning table…MessageAnnotations
   <br/>
   [*] Scanning table…Conversations
   <br/>
   [*] Discovered 52 matches.
   <br/>
   [*] Finished creating map!
  </p>
  <p class="graf graf--p graf-after--p" id="128c">
   现在，请您检查与脚本相同的目录，您应该会看到一个 index.html 文件，您可以在浏览器中打开该文件，然后您将看到一个可以浏览的地图。我看起来像这样：
  </p>
  <div class="aspectRatioPlaceholder is-locked">
   <img alt="" class="aligncenter size-full wp-image-4873 jetpack-lazy-image" data-lazy-sizes="(max-width: 541px) 100vw, 541px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?resize=541%2C386&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?w=541&amp;ssl=1 541w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?resize=300%2C214&amp;ssl=1 300w" data-recalc-dims="1" height="386" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?resize=541%2C386&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="541"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4873" data-recalc-dims="1" height="386" sizes="(max-width: 541px) 100vw, 541px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?resize=541%2C386&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?w=541&amp;ssl=1 541w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-154.png?resize=300%2C214&amp;ssl=1 300w" width="541"/>
   </noscript>
  </div>
  <div>
  </div>
  <div>
   好酷！当然，您可以调整一些 Folium 代码以显示地图中的各种数据，或者输入不同的 SQLite 文件，并查看您可以创建哪种酷炫的可视化。
  </div>
  <div>
   <p class="graf graf--p graf-after--p" id="ae95">
    您还可以探索从 geoip2 模块返回的其他字段，以输出城市和国家。也许你可以真正想象并抽出一个可以导入其他工具的 CSV 文件。全世界都在你的菜！⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e503f0db57">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4867" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e5%9c%b0%e5%9b%be%e4%b8%8a%e8%bd%bb%e8%80%8c%e6%98%93%e4%b8%be%e6%89%be%e5%88%b0%e4%b8%80%e4%b8%aa-skype-%e7%94%a8%e6%88%b7%e7%9a%84%e5%85%b7%e4%bd%93%e5%9c%b0%e7%90%86/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4867" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e5%9c%b0%e5%9b%be%e4%b8%8a%e8%bd%bb%e8%80%8c%e6%98%93%e4%b8%be%e6%89%be%e5%88%b0%e4%b8%80%e4%b8%aa-skype-%e7%94%a8%e6%88%b7%e7%9a%84%e5%85%b7%e4%bd%93%e5%9c%b0%e7%90%86/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
   <time class="entry-date published" datetime="2018-08-29T12:45:51+08:00">
    2018年8月29日
   </time>
   <time class="updated" datetime="2019-06-01T13:10:06+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

