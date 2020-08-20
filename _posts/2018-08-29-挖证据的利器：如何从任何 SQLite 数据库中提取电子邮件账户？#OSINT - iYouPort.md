---
layout: post
title: "挖证据的利器：如何从任何 SQLite 数据库中提取电子邮件账户？#OSINT - iYouPort"
date: 2018-08-29T05:10:59+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%8c%96%e8%af%81%e6%8d%ae%e7%9a%84%e5%88%a9%e5%99%a8%ef%bc%9a%e5%a6%82%e4%bd%95%e4%bb%8e%e4%bb%bb%e4%bd%95-sqlite-%e6%95%b0%e6%8d%ae%e5%ba%93%e4%b8%ad%e6%8f%90%e5%8f%96%e7%94%b5%e5%ad%90%e9%82%ae/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4875 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-technique tag-technology tag-tools" id="post-4875">
 <header class="entry-header">
  <h1 class="entry-title">
   挖证据的利器：如何从任何 SQLite 数据库中提取电子邮件账户？#OSINT
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
   <time class="entry-date published" datetime="2018-08-29T13:10:59+08:00">
    2018年8月29日
   </time>
   <time class="updated" datetime="2019-06-01T13:22:28+08:00">
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
       一直以来“取证”都是他们对我们用，但为什么不可以反过来用呢……本系列文章介绍和演示的 OSINT 技术就是这个想法
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4876 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1100%2C619&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=768%2C432&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1024%2C576&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1100%2C619&amp;ssl=1 1100w" data-recalc-dims="1" height="619" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1100%2C619&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4876" data-recalc-dims="1" height="619" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1100%2C619&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=300%2C169&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=768%2C432&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1024%2C576&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-97.jpeg?resize=1100%2C619&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="6467">
    首先我会告诉你，与大多数执法或私人取证审查员相比，我对取证知之甚少。在查看取证采集的结果，看到从中流出的所有神奇数据时，我总是会发现令人惊讶的事。电子邮件地址、电话号码、用户名、社交媒体、图像、列表等等，这总是让我感到震惊，因为
    <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?query=%23OSINT" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/search/posts?query=%23OSINT" rel="nofollow noopener noreferrer" target="_blank">
     #OSINT
    </a>
    可以利用后续应用程序来尝试扩展您对所购设备和所有者的了解。
   </p>
   <p class="graf graf--p graf-after--p" id="e74f">
    所以我联系了一些取证专家，询问他们哪里有一个很好的
    <strong class="markup--strong markup--p-strong">
     取证信息来源
    </strong>
    ， 我可以用来开始查询在线服务以获取更多信息。他们推荐了 Skype 数据库采用 SQLite 格式，这是一个名副其实的信息宝库。
   </p>
   <p class="graf graf--p graf-after--p" id="12da">
    所以我们在这篇文章中要做的是双重的：
    <strong class="markup--strong markup--p-strong">
     我们将构建一个 Python 脚本，可以从任何 SQLite 数据库中提取电子邮件，利用 Full Contact API 对我们找到的电子邮件帐户执行查找。我们尝试的最终输出将是一个电子表格，其中包含所有发现的社交媒体配置文件
    </strong>
    。有意思吧～那么开始。
   </p>
   <p class="graf graf--p graf-after--p" id="1d5b">
    <strong class="markup--strong markup--p-strong">
     Python 和 SQLite
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="b24d">
    SQLite 是一个基于文件的数据库系统，它具有大多数基于服务器的数据库系统所具有的许多强大功能，所有这些功能都被压缩成一个很小的文件。奇妙之处在于 Python 内置了对 SQLite 的支持，因此这将使我们很容易与我们选择的任何 SQLite 文件进行交互。
   </p>
   <p class="graf graf--p graf-after--p" id="54cb">
    此脚本的设计将使得无论传入何种数据库，我们都将系统地遍历每个已发现的表，并搜索每个列以查找电子邮件地址，这样您就可以超越 Skype 进行探索。
   </p>
   <p class="graf graf--p graf-after--p" id="271d">
    SQLite 有一个名为 SQLITE_MASTER 的表，用于描述数据库的模式。我们将对此表执行查询以提取数据库中包含的所有表。从那里我们将遍历每个表 并执行 SQL SELECT 语句以从每个表中选择所有记录。当结果返回时，它们被分解为列，将逐个遍历每一列并尝试提取电子邮件地址。
   </p>
   <p class="graf graf--p graf-after--p" id="c57b">
    开始创建一个名为 sqlite_parser.py 的 Python 脚本并输入以下代码：
   </p>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4877 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1100%2C249&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?w=1486&amp;ssl=1 1486w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=300%2C68&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=768%2C174&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1024%2C232&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1100%2C249&amp;ssl=1 1100w" data-recalc-dims="1" height="249" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1100%2C249&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4877" data-recalc-dims="1" height="249" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1100%2C249&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?w=1486&amp;ssl=1 1486w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=300%2C68&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=768%2C174&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1024%2C232&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-98.jpeg?resize=1100%2C249&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   第1–3行：导入我们将用于解析数据库的必要库。
  </div>
  <div>
   <p class="graf graf--p graf-after--p" id="ab4b">
    第8–10行：设置一个命令行参数解析器来处理想要解析的数据库文件。
   </p>
   <p class="graf graf--p graf-after--p" id="8a5f">
    第9行：初始化一个空列表，该列表将包含我们从数据库中提取的所有匹配项。
   </p>
   <p class="graf graf--p graf-after--p" id="6c72">
    第10行：这里我们设置一个正则表达式来匹配电子邮件地址。这不是一个详尽的模式，但它完成了这项工作。最棒的是，你可以修改为 IP 地址 （我们将在第2部分中进行）或您希望从 SQLite 数据库中提取的任何其他模式。
   </p>
   <p class="graf graf--p graf-after--p" id="e0e1">
    现在让我们连接到 SQLite 数据库并找到所有可用的表：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4878 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1100%2C181&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=300%2C49&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=768%2C127&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1024%2C169&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1100%2C181&amp;ssl=1 1100w" data-recalc-dims="1" height="181" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1100%2C181&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4878" data-recalc-dims="1" height="181" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1100%2C181&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=300%2C49&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=768%2C127&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1024%2C169&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-99.jpeg?resize=1100%2C181&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="896b">
    第13行：通过传递数据库文件的路径连接到 SQLite 数据库文件。路径来自我们传入的命令行参数。
   </p>
   <p class="graf graf--p graf-after--p" id="6a5d">
    第14行：连接后，我们创建一个 SQLite 游标对象，我们将用它向数据库发出 SQL 语句。
   </p>
   <p class="graf graf--p graf-after--p" id="0190">
    第16行：执行查询以从 sqlite_master 表中提取所有表，这将为我们提供可以操作的表的列表。
   </p>
   <p class="graf graf--p graf-after--p" id="c381">
    第18行：我们使用 fetchall（）函数从第 16 行的先前查询中检索查询结果。这将返回一个列表，然后我们可以循环并执行后续查询。
   </p>
   <p class="graf graf--p graf-after--p" id="c573">
    现在我们需要遍历每个表，查询它的所有数据，然后遍历每一列，应用我们的正则表达式来尝试提取电子邮件地址。这将是一个更长的代码块，所以：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4879 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1100%2C554&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=300%2C151&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=768%2C387&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1024%2C515&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1100%2C554&amp;ssl=1 1100w" data-recalc-dims="1" height="554" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1100%2C554&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4879" data-recalc-dims="1" height="554" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1100%2C554&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=300%2C151&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=768%2C387&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1024%2C515&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-100.jpeg?resize=1100%2C554&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="1736">
     第20–27行：在表列表上循环（第20行），打印出有用的消息（第22行），然后在表上执行 SELECT 语句以从表中检索所有记录（第25行）。再 次使用 fetchall（）函数从 SELECT 查询中检索所有记录（第27行）。
    </p>
    <p class="graf graf--p graf-after--p" id="6f3c">
     第29–31行：循环遍历结果中的每一行（第29行），然后对于每一行，循环遍历其每一列（第31行）。
    </p>
    <p class="graf graf--p graf-after--p" id="46a5">
     第33–36行：尝试应用我们的电子邮件正则表达式（第34行），如果不匹配（第36行），回到第33行的循环顶部开始查看下一列。
    </p>
    <p class="graf graf--p graf-after--p" id="7b8a">
     第38–42行：从正则表达式中浏览匹配列表（第38行），如果遇到尚未添加的新匹配（第40行），将其添加到全局匹配列表（第42行）。
    </p>
    <p class="graf graf--p graf-after--p" id="51c8">
     现在我们对脚本进行最后的修改，以关闭我们的数据库资源并打印出所有匹配项。将以下代码行添加到脚本中：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4880 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1100%2C175&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?w=1482&amp;ssl=1 1482w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=300%2C48&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=768%2C122&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1024%2C163&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1100%2C175&amp;ssl=1 1100w" data-recalc-dims="1" height="175" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1100%2C175&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4880" data-recalc-dims="1" height="175" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1100%2C175&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?w=1482&amp;ssl=1 1482w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=300%2C48&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=768%2C122&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1024%2C163&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-101.jpeg?resize=1100%2C175&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   第43–44行：关闭数据库游标（第43行）和SQLite文件（第44行）的连接。
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--p" id="1fca">
     第48–49行：遍历所有匹配项并打印出来。
    </p>
    <p class="graf graf--p graf-after--p" id="1155">
     做得好！ 现在让它运行起来，以确保它可以正常工作。您可以找到 Skype 的 SQLite 文件，如下所示：
    </p>
    <p class="graf graf--p graf-after--p" id="0530">
     <strong class="markup--strong markup--p-strong">
      对于 Mac OSX
     </strong>
     ：
    </p>
    <p class="graf graf--p graf-after--p" id="d734">
     /Users/&lt;your_mac_username&gt;/Library/Application\ Support/Skype/&lt;your_skype_username&gt;/main.db
    </p>
    <p class="graf graf--p graf-after--p" id="5dd0">
     <strong class="markup--strong markup--p-strong">
      对于 Windows
     </strong>
     ：
    </p>
    <p class="graf graf--p graf-after--p" id="a948">
     %appdata%\Skype\main.db
    </p>
    <p class="graf graf--p graf-after--p" id="7d82">
     让它运行起来！
    </p>
    <p class="graf graf--p graf-after--p" id="87ca">
     那么让这个小单元运行起来，查看输出结果。在这种情况下，我将 main.db 文件放在与我的 Python 脚本相同的路径：
    </p>
    <p class="graf graf--p graf-after--p" id="4791">
     [*] Scanning table…DbMeta
    </p>
    <p class="graf graf--p graf-after--p" id="de7b">
     [*] Scanning table…AppSchemaVersion
    </p>
    <p class="graf graf--p graf-after--p" id="5273">
     [*] Scanning table…Contacts
    </p>
    <p class="graf graf--p graf-after--p" id="39bb">
     [*] Scanning table…LegacyMessages
    </p>
    <p class="graf graf--p graf-after--p" id="aa49">
     [*] Scanning table…Calls
    </p>
    <p class="graf graf--p graf-after--p" id="8c88">
     [*] Scanning table…Accounts
    </p>
    <p class="graf graf--p graf-after--p" id="29cc">
     [*] Scanning table…Transfers
    </p>
    <p class="graf graf--p graf-after--p" id="fa16">
     …more tables scanned here
    </p>
    <p class="graf graf--p graf-after--p" id="bcac">
     [*] Discovered 68 matches.
    </p>
    <p class="graf graf--p graf-after--p" id="9e4f">
     <a class="markup--anchor markup--p-anchor" data-href="mailto:justin.seitz@gmail.com" href="/cdn-cgi/l/email-protection#63091610170a0d4d10060a171923040e020a0f4d000c0e" rel="noreferrer noopener" target="_blank">
      <span class="__cf_email__" data-cfemail="08627d7b7c6166267b6d617c72486f65696164266b6765">
       [email protected]
      </span>
     </a>
    </p>
    <p class="graf graf--p graf-after--p" id="ec5b">
     … 67 other email addresses here.
    </p>
    <p class="graf graf--p graf-after--p" id="5d90">
     如果您得到如上所述的输出，那么您就知道一切正常！ 现在让我们集成 Full Contact API，这样我们就可以在我们提取的电子邮件地址上做一些 OSINT。
    </p>
    <p class="graf graf--p graf-after--p" id="46d0">
     <strong class="markup--strong markup--p-strong">
      集成 FullContact
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="dee6">
     现在我们可以从任何 SQLite 中提取电子邮件帐户，现在当然要利用我们想要尝试将这些电子邮件帐户归因于社交媒体或其他一些我们可以用来获取额外情报的在线展示。
    </p>
    <p class="graf graf--p graf-after--p" id="9934">
     我们将利用 FullContact（数据聚合器）对我们发现的电子邮件帐户进行一些额外的查找。当我们发现帐户时，我们会将它们添加到 CSV 文件中，以便我们可以使用 Excel 或 Google Fusion Tables 浏览数据，这也可以让我们轻松地将这些数据添加到其他工具中。
    </p>
    <p class="graf graf--p graf-after--p" id="4d65">
     第一步是
     <a class="markup--anchor markup--p-anchor" data-href="https://www.fullcontact.com/developer/" href="https://www.fullcontact.com/developer/" rel="noopener nofollow noreferrer" target="_blank">
      注册 FullContact API 密钥
     </a>
     。完成后，将 sqlite_parser.py 脚本保存为sqlite_fullcontact.py（从
     <a class="markup--anchor markup--p-anchor" data-href="https://raw.githubusercontent.com/automatingosint/osint_public/master/sqlite_parser/sqlite_osint_fullcontact.py" href="https://raw.githubusercontent.com/automatingosint/osint_public/master/sqlite_parser/sqlite_osint_fullcontact.py" rel="noopener nofollow noreferrer" target="_blank">
      此处下载
     </a>
     ），然后进行一些修改。在 import sqlite3 这一行之后添加以下内容：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4881 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1100%2C205&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=300%2C56&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=768%2C143&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1024%2C191&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1100%2C205&amp;ssl=1 1100w" data-recalc-dims="1" height="205" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1100%2C205&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4881" data-recalc-dims="1" height="205" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1100%2C205&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=300%2C56&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=768%2C143&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1024%2C191&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-102.jpeg?resize=1100%2C205&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <p>
     完美，我们只是添加一些额外的模块和用来保存 Full Contact API 密钥的变量。如果您没有 requests 库，可以使用 pip 进行安装（
     <a class="markup--anchor markup--p-anchor" data-href="http://www.automatingosint.com/blog/python-for-beginners/" href="http://www.automatingosint.com/blog/python-for-beginners/" rel="noopener nofollow noreferrer" target="_blank">
      在此处查看视频
     </a>
     以获取帮助）。现在我们将开始在第 53 行的脚本底部添加代码。请执行以下操作：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4882 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1100%2C129&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=300%2C35&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=768%2C90&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1024%2C120&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1100%2C129&amp;ssl=1 1100w" data-recalc-dims="1" height="129" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1100%2C129&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4882" data-recalc-dims="1" height="129" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1100%2C129&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=300%2C35&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=768%2C90&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1024%2C120&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-103.jpeg?resize=1100%2C129&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <p class="graf graf--p graf-after--figure" id="7354">
     第54行：打开 CSV 文件的文件句柄，将存储检索到的信息。
    </p>
    <p class="graf graf--p graf-after--p" id="04ae">
     第55行：设置了一个字段名称列表，它将成为我们电子表格中的列。
    </p>
    <p class="graf graf--p graf-after--p" id="416a">
     第56行：使用 csv 模块的 DictWriter 类，传入我们在第 54 行创建的文件句柄和第55行创建的字段名称列表。DictWriter 类允许我们通过传入字典在 电子表格中写行。
    </p>
    <p class="graf graf--p graf-after--p" id="96bb">
     第57行：我们写出了电子表格的顶行（标题），它将为我们提供任何好的电子表格应该具有的列名。
    </p>
    <p class="graf graf--p graf-after--p" id="ee54">
     接下来，我们需要遍历 SQLite 解析到的匹配列表，并将每个电子邮件地址传递给 FullContact API，以尝试检索它们可能具有的任何结果。我们现在实 现代码来执行此操作：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-4883 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1100%2C291&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=300%2C79&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=768%2C203&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1024%2C271&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1100%2C291&amp;ssl=1 1100w" data-recalc-dims="1" height="291" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1100%2C291&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4883" data-recalc-dims="1" height="291" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1100%2C291&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?w=1480&amp;ssl=1 1480w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=300%2C79&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=768%2C203&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1024%2C271&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-104.jpeg?resize=1100%2C291&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <div class="section-inner sectionLayout--insetColumn">
     <p class="graf graf--p graf-after--figure" id="b9c3">
      第59行：只要有要处理的电子邮件地址，此代码块将继续执行。
     </p>
     <p class="graf graf--p graf-after--p" id="4356">
      第62–63行：为了对FullContact API进行身份验证，我们必须传入X-FullContact-APIKey HTTP头。通过设置headers字典（第62行），然后设置所需的头部和API密钥的值（第63行）来完成此操作。
     </p>
     <p class="graf graf--p graf-after--p" id="0688">
      第65–68行：从列表中获取一个电子邮件地址（第65行）将其打印出来（第67行），然后我们构建一个以将电子邮件地址传递给 FullContact API 端点的 URL（第68行）。
     </p>
     <p class="graf graf--p graf-after--p" id="0b1c">
      第70–72行：将请求发送到 FullContact API，在 headers 变量（第70行）中传入我们的 HTTP 头，然后休眠两秒钟（第72行）以遵守 Full Contact 服务器施加的速率限制。
     </p>
     <p class="graf graf--p graf-after--p" id="24e9">
      我们已将请求发送出去，现在是时候测试结果了，如果有匹配，我们需要将它们存储在我们的 CSV 文件中。让我们实现代码来执行此操作：
     </p>
    </div>
    <div class="section-inner sectionLayout--outsetColumn">
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-4884 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1100%2C552&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=300%2C151&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=768%2C386&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1024%2C514&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1100%2C552&amp;ssl=1 1100w" data-recalc-dims="1" height="552" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1100%2C552&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-4884" data-recalc-dims="1" height="552" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1100%2C552&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=300%2C151&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=768%2C386&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1024%2C514&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-105.jpeg?resize=1100%2C552&amp;ssl=1 1100w" width="1100"/>
      </noscript>
     </div>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   第74行：如果从 FullContact API 收到良好的响应，我们就可以测试匹配了。
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--p" id="24d7">
     第76行：我们让 requests 库解析来自服务器的 JSON 响应，并将结果存储在 contact_object 变量中。
    </p>
    <p class="graf graf--p graf-after--p" id="a130">
     第78行：测试 contact_object（现在是字典）的 socialProfiles 键，它将向我们指示社交媒体配置文件的命中。
    </p>
    <p class="graf graf--p graf-after--p" id="9750">
     第80行：单个电子邮件帐户可以有多个社交媒体配置文件，它们存储在 socialProfiles 键的列表中。我们开始浏览每个社交媒体配置文件，并将每个配置文件存储在 profile 变量
    </p>
    <p class="graf graf--p graf-after--p" id="51d8">
     第82–87行：初始化一个名为 record（第82行）的空字典，并用从 FullContact API 检索到的所有数据填充它。get() 函数将尝试检索您看到的每个值（type，id，username，url），如果没有值，它将自动返回 “N/A”。
    </p>
    <p class="graf graf--p graf-after--p" id="7f16">
     第89行：将 record 字典作为新行写入 CSV 文件。
    </p>
    <p class="graf graf--p graf-after--p" id="ed56">
     第91–96行：打印出我们找到的信息，这样就可以在脚本运行时监控输出。
    </p>
    <p class="graf graf--p graf-after--p" id="938a">
     我们现在需要实现一个单独的检查，以查看 FullContact API 是否希望我们在检索结果之前等待。这可能是随机发生的，老实说我不知道为什么。
    </p>
    <p class="graf graf--p graf-after--p" id="f67c">
     我们将测试 HTTP 响应代码 202 而不是 200，然后将测试的电子邮件地址重新添加回我们的匹配列表，以确保我们不会丢弃电子邮件地址。请注意这里的缩进，它应该缩进到状态代码 200 检查：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4885 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1100%2C224&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=300%2C61&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=768%2C157&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1024%2C209&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1100%2C224&amp;ssl=1 1100w" data-recalc-dims="1" height="224" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1100%2C224&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4885" data-recalc-dims="1" height="224" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1100%2C224&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?w=1482&amp;ssl=1 1482w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=300%2C61&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=768%2C157&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1024%2C209&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-106.jpeg?resize=1100%2C224&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   就这样！ 我们测试 202 代码，如果遇到它，我们将电子邮件地址推回到电子邮件地址列表中进行检查，然后我们休眠 30 秒。最后一行代码只是关闭与 CSV 文件关联的文件句柄。现在是时候试一试了。
  </div>
  <div>
   <p class="graf graf--p graf-after--p" id="f1c8">
    让它运行起来！
   </p>
   <p class="graf graf--p graf-after--p" id="bf88">
    您将以与运行前一个脚本完全相同的方式运行此脚本，但输出应该不同，假设您从 FullContact API 获得了良好的结果：
   </p>
   <p class="graf graf--p graf-after--p" id="e500">
    Justins-MacBook-Pro:Desktop justin$ python sqlite_osint_fullcontact.py -d main.db
   </p>
   <p class="graf graf--p graf-after--p" id="7b66">
    [*] Scanning table…DbMeta
   </p>
   <p class="graf graf--p graf-after--p" id="c188">
    [*] Scanning table…AppSchemaVersion
   </p>
   <p class="graf graf--p graf-after--p" id="46d9">
    [*] Scanning table…Contacts
   </p>
   <p class="graf graf--p graf-after--p" id="2210">
    [*] Trying
    <a class="markup--anchor markup--p-anchor" data-href="mailto:justin.seitz@gmail.com" href="/cdn-cgi/l/email-protection#83e9f6f0f7eaedadf0e6eaf7f9c3e4eee2eaefade0ecee" rel="noreferrer noopener" target="_blank">
     <span class="__cf_email__" data-cfemail="c7adb2b4b3aea9e9b4a2aeb3bd87a0aaa6aeabe9a4a8aa">
      [email protected]
     </span>
    </a>
   </p>
   <p class="graf graf--p graf-after--p" id="cefe">
    Network: twitter
   </p>
   <p class="graf graf--p graf-after--p" id="c69d">
    Username: jms_dot_py
   </p>
   <p class="graf graf--p graf-after--p" id="13da">
    URL:
    <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/jms_dot_py" href="https://twitter.com/jms_dot_py" rel="noreferrer noopener nofollow" target="_blank">
     https://twitter.com/jms_dot_py
    </a>
   </p>
   <p class="graf graf--p graf-after--p" id="c1de">
    ID: 817668451
   </p>
   <p class="graf graf--p graf-after--p" id="36ae">
    当然，除了这个电子邮件地址之外还有更多的命中，但是一旦掌握了 SQLite 数据库，就可以大大扩展您的调查。
   </p>
   <p class="graf graf--p graf-after--p" id="1a9e">
    在下一部分中，我们将了解如何使用 IP 地址构建映射，以演示 SQLite 解析的灵活性以及调整脚本的容易程度。下次见！⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e5045ea574">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4875" href="https://www.iyouport.org/%e6%8c%96%e8%af%81%e6%8d%ae%e7%9a%84%e5%88%a9%e5%99%a8%ef%bc%9a%e5%a6%82%e4%bd%95%e4%bb%8e%e4%bb%bb%e4%bd%95-sqlite-%e6%95%b0%e6%8d%ae%e5%ba%93%e4%b8%ad%e6%8f%90%e5%8f%96%e7%94%b5%e5%ad%90%e9%82%ae/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4875" href="https://www.iyouport.org/%e6%8c%96%e8%af%81%e6%8d%ae%e7%9a%84%e5%88%a9%e5%99%a8%ef%bc%9a%e5%a6%82%e4%bd%95%e4%bb%8e%e4%bb%bb%e4%bd%95-sqlite-%e6%95%b0%e6%8d%ae%e5%ba%93%e4%b8%ad%e6%8f%90%e5%8f%96%e7%94%b5%e5%ad%90%e9%82%ae/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
   <time class="entry-date published" datetime="2018-08-29T13:10:59+08:00">
    2018年8月29日
   </time>
   <time class="updated" datetime="2019-06-01T13:22:28+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

