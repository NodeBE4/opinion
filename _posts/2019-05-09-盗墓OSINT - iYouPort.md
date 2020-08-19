---
layout: post
title: "盗墓OSINT - iYouPort"
date: 2019-05-09T16:00:48+00:00
author: iYouPort
from: https://www.iyouport.org/%e7%9b%97%e5%a2%93osint/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-705 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-osint tag-tech tag-technique tag-technology tag-tools" id="post-705">
 <header class="entry-header">
  <h1 class="entry-title">
   盗墓OSINT
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
   <time class="entry-date published" datetime="2019-05-10T00:00:48+08:00">
    2019年5月10日
   </time>
   <time class="updated" datetime="2019-04-24T23:55:51+08:00">
    2019年4月24日
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
      深度调查过程中经常会遇到您想要的信息/内容/网站已被删除的棘手情况，别怕，办法还是有的，怎么做？
     </em>
    </span>
   </li>
  </ul>
  <p class="graf graf--p">
   想象一下，您正在调查一个网站。您已经获得了域名，但其内容不可用或已被删除。这种情况在 OSINT 调查中有可能经常出现。不过办法还是有的，本文来说说它可以怎么办。
  </p>
  <p class="graf graf--p">
   首先，检查域名注册可能会对您有所帮助；另外有很多网站可以帮助你：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-708 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1067px) 100vw, 1067px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=1067%2C390&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?w=1067&amp;ssl=1 1067w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=300%2C110&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=768%2C281&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=1024%2C374&amp;ssl=1 1024w" data-recalc-dims="1" height="390" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=1067%2C390&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1067"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-708 size-full" data-recalc-dims="1" height="390" sizes="(max-width: 1067px) 100vw, 1067px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=1067%2C390&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?w=1067&amp;ssl=1 1067w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=300%2C110&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=768%2C281&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-16.png?resize=1024%2C374&amp;ssl=1 1024w" width="1067"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您经常使用 Google，可能会注意到这个方便的技巧：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    URL旁边有一个小三角形图标；
   </li>
   <li class="graf graf--li">
    单击三角形，它会为您提供查看 URL 缓存版本的选项，或者它为您提供类似的版本（不一定总是很好）；
   </li>
   <li class="graf graf--li">
    找到感兴趣的网站的缓存版。
   </li>
  </ul>
  <p class="graf graf--p">
   对于那些使用 Bing 和 Yandex 的人来说它们也为你提供了同样的东西。
  </p>
  <p class="graf graf--p">
   关于 Google Cache 内容的一个重要注意事项是，它将显示来自 Google 缓存的文本内容。但是，如果您不在URL中添加“＆strip = 1”，您的浏览器将从实际站点提取实时 JavaScript、图像和其他内容。
   <strong class="markup--strong markup--p-strong">
    当您研究恶意软件站点、煽动仇恨的群组、民族国家内容、和有组织犯罪时，这对您的 OPSEC（操作安全性）来说非常重要，因为你肯定不希望他们知道你正在研究他们
   </strong>
   。
  </p>
  <p class="graf graf--p">
   以下使用动画 GIF 说明这一点，步骤如下：
  </p>
  <ol class="postList">
   <li class="graf graf--li">
    访问感兴趣的网站：http：
    <a class="markup--anchor markup--li-anchor" data-href="https://cached.sec487.info/" href="https://cached.sec487.info/" rel="noreferrer noopener" target="_blank">
     //cached.sec487.info/
    </a>
   </li>
   <li class="graf graf--li">
    在 Google 上搜索该网站；
   </li>
   <li class="graf graf--li">
    使用 Google 缓存来检索网站，现在，请查看右侧的黄色图像；
   </li>
   <li class="graf graf--li">
    使用“仅文字”Google 缓存内容；
   </li>
   <li class="graf graf--li">
    将“＆strip = 1”添加到网址，以提取仅限 Google 缓存的内容；
   </li>
   <li class="graf graf--li">
    使用开发人员工具查看您的浏览器使用仅限Google缓存的内容进行的网络通话（它只会抓取Google 网站上的内容）；
   </li>
   <li class="graf graf--li">
    然后尝试相同的操作，但这次不要在URL中添加“＆strip = 1”。
   </li>
  </ol>
  <p class="graf graf--p">
   这里有一个动图演示：https://osintcurio.files.wordpress.com/2019/02/cached.gif?w=644&amp;zoom=2
  </p>
  <p class="graf graf--p">
   其次，档案馆是众所周知的好办法。
   <a class="markup--anchor markup--p-anchor" data-href="http://archive.org/" href="https://archive.org/" rel="noreferrer noopener" target="_blank">
    Archive.org
   </a>
   （存档超过3450亿页）和
   <a class="markup--anchor markup--p-anchor" data-href="http://archive.today/" href="https://archive.today/" rel="noreferrer noopener" target="_blank">
    Archive.today
   </a>
   （确保在深灰色框中搜索URL。使用红色框将存档您的页面而不是搜索存档）这是两个存档大量网页的站点。我们以前介绍给。顺便说一句，Archive.today与archive.is相同，由于最近冰岛提起的投诉，该URL可能会在不久后停止运作。
  </p>
  <p class="graf graf--p">
   同样有趣的是：检查您是否可以找到
   <strong class="markup--strong markup--p-strong">
    在网站上显示的旧图像中的 EXIF 元数据
   </strong>
   。这可能会给你带来一些很好的新研究机会。
  </p>
  <p class="graf graf--p">
   有些网站可以帮助您找到与您正在研究的网站类似的网站。这可能不会导致找到您想要查看的确切网站，但是，也许它们已经在其他网站复制了布局，或者它们可能使用了新域名。比如Alexa、Similarweb，Similarsitesearch 或 Similarsites（可能还有更多）都可以帮你寻找类似的网站。
  </p>
  <p class="graf graf--p">
   有些网站可以帮助您为您感兴趣的域名创建常见域名拼写错误列表（
   <a class="markup--anchor markup--p-anchor" data-href="http://tools.seochat.com/tools/domain-typo-generator/#sthash.wUmL3Rdv.Qt2GiSzl.dpbs" href="http://tools.seochat.com/tools/domain-typo-generator/#sthash.wUmL3Rdv.Qt2GiSzl.dpbs" rel="noopener noreferrer" target="_blank">
    比如这样
   </a>
   ）。但是你也可以使用一种非常酷的工具：
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/elceef/dnstwist" href="https://github.com/elceef/dnstwist" rel="noopener noreferrer" target="_blank">
    DNStwist
   </a>
   。
   <strong class="markup--strong markup--p-strong">
    DNStwist 可以查看您的域名可能存在的错别字，如果网站仍在运行，还可以向您提供 WhoIs信息
   </strong>
   。尽管如此，这确实需要一些命令行技能才能使用。
  </p>
  <p class="graf graf--p">
   如果您更喜欢使用基于Web的工具而不是命令行工具，请查看
   <a class="markup--anchor markup--p-anchor" data-href="http://dnstwister.report/" href="https://dnstwister.report/" rel="noreferrer noopener" target="_blank">
    dnstwister.report
   </a>
   。它与 DNStwist 的作用相同，唯一的区别是，无论何时输入域名，它都会在后台运行 DNStwist。虽然
   <strong class="markup--strong markup--p-strong">
    这种设置非常快，不需要基础知识，但您仍然会因此失去了一些匿名性，因为您要求第三方在您的目标域名上运行 DNStwist
   </strong>
   。
  </p>
  <p class="graf graf--p">
   动图示范这一搜索：https://cdn-images-1.medium.com/max/1600/1*1Abx-kZ8wxEHozkJAfTUGQ.gif
  </p>
  <p class="graf graf--p">
   不要忘记子域名！有时网站可能看似空洞，但子域名仍然可能充满了许多有趣的东西。
   <a class="markup--anchor markup--p-anchor" data-href="http://pentest-tools.com/" href="https://pentest-tools.com/" rel="noreferrer noopener" target="_blank">
    Pentest-tools.com
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="http://findsubdomains.com/" href="http://findsubdomains.com/" rel="noreferrer noopener" target="_blank">
    Findsubdomains.com
   </a>
   都允许您搜索子域名。请注意前者有一点搜索限制。
  </p>
  <p class="graf graf--p">
   另一个信息来源是可以在多个站点上找到的证书透明度日志。例如，当您对旧（子）域名感兴趣时，可以通过像
   <a class="markup--anchor markup--p-anchor" data-href="http://crt.sh/" href="https://crt.sh/" rel="noreferrer noopener" target="_blank">
    crt.sh
   </a>
   这样的站点查看这些报告，以查找要转移的旧的、不存在的子域名。例如，可以查看包含“
   <a class="markup--anchor markup--p-anchor" data-href="http://twitter.com/" href="https://twitter.com/" rel="noreferrer noopener" target="_blank">
    twitter.com
   </a>
   ”在内的透明度报告中的所有证书，在查看结果时，旧的和​​已不存在的子域名将显示在历史记录中。
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-709 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1100%2C397&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?w=1368&amp;ssl=1 1368w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=300%2C108&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=768%2C277&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1024%2C370&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1100%2C397&amp;ssl=1 1100w" data-recalc-dims="1" height="397" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1100%2C397&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-709 size-full" data-recalc-dims="1" height="397" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1100%2C397&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?w=1368&amp;ssl=1 1368w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=300%2C108&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=768%2C277&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1024%2C370&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-17.png?resize=1100%2C397&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   查找过期证书甚至隐藏子域名的
   <strong class="markup--strong markup--p-strong">
    另一种方法是使用
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="http://censys.io/" href="https://censys.io/" rel="noreferrer noopener" target="_blank">
    <strong class="markup--strong markup--p-strong">
     Censys.io
    </strong>
   </a>
   。要查看已扫描的过期 Twitter 证书，可以这样查询 Censys：
  </p>
  <pre class="graf graf--pre"><span style="font-family: 'courier new', courier, monospace;">parsed.names：<a class="markup--anchor markup--pre-anchor" data-href="http://twitter.com/" href="https://twitter.com/" rel="noreferrer noopener" target="_blank">twitter.com</a> AND tags.raw：“expired”</span></pre>
  <p class="graf graf--p">
   运行此查询并查看几行后，会看到另一个无效的子域示例：
  </p>
  <p>
   <img alt="" class="aligncenter wp-image-710 size-full jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1100%2C339&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?w=1498&amp;ssl=1 1498w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=300%2C93&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=768%2C237&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1024%2C316&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1100%2C339&amp;ssl=1 1100w" data-recalc-dims="1" height="339" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1100%2C339&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-710 size-full" data-recalc-dims="1" height="339" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1100%2C339&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?w=1498&amp;ssl=1 1498w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=300%2C93&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=768%2C237&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1024%2C316&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-18.png?resize=1100%2C339&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   通过在crt.sh或 Censys 中打开证书本身，可以获得更多的信息；通常会引导您访问更多的子域，有时还可以获得有关其所用环境的更详细信息。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    — — 如果你正在研究的社交媒体网站/帖子已被删除 — —
   </strong>
  </p>
  <p class="graf graf--p">
   如果您足够幸运能够获得一些信息，包括用户名、用户ID或帖子的链接，这在搜索该内容时会有很大帮助。
  </p>
  <p class="graf graf--p">
   比如我们介绍过的 Google“dorks”。Google dorks 只是在 Google 搜索引擎上执行的高级搜索。请查看您目前所获得的信息; 如果您有用户ID，请尝试搜索类似 inurl 的内容：userID（或用户名）
   <strong class="markup--strong markup--p-strong">
    也许ID或名称已在其他网站上使用过
   </strong>
   。详见：《
   <a class="markup--anchor markup--p-anchor" data-href="https://medium.com/@iyouport/%E9%AB%98%E7%BA%A7%E8%BF%90%E7%AE%97%E7%AC%A6%E8%BE%85%E5%8A%A9%E5%BC%80%E6%BA%90%E8%B0%83%E6%9F%A5-%E5%B7%A7%E7%94%A8%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8C%96%E6%8E%98%E6%83%85%E6%8A%A5-osint-c64e71b05a2f" href="https://medium.com/@iyouport/%E9%AB%98%E7%BA%A7%E8%BF%90%E7%AE%97%E7%AC%A6%E8%BE%85%E5%8A%A9%E5%BC%80%E6%BA%90%E8%B0%83%E6%9F%A5-%E5%B7%A7%E7%94%A8%E6%90%9C%E7%B4%A2%E5%BC%95%E6%93%8E%E6%8C%96%E6%8E%98%E6%83%85%E6%8A%A5-osint-c64e71b05a2f" rel="noopener noreferrer" target="_blank">
    高级运算符辅助开源调查
   </a>
   》
  </p>
  <p class="graf graf--p">
   或者，如果您也知道他们使用了什么平台，请尝试搜索 NameOfPlatform“userID”（或“username”）。而且还有很多其他选择，见上面链接，都可以试试。
  </p>
  <p class="graf graf--p">
   当有人更改了用户名（因此看起来内容好像被删除）时，按用户ID搜索会非常方便。这是一个唯一的编号，由您使用的平台给出，用户无法更改 ID。这适用于 Instagram; 因为有很多网站显示 Instagram 的内容，你可以很幸运地在那里找到信息。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    很多人喜欢在其他平台上使用相同的用户名
   </strong>
   。
   <strong class="markup--strong markup--p-strong">
    像 Namechk，Namecheckr 和 Usersearch 这样的网站都可以让你检查用户名是否在各种平台上使用过
   </strong>
   。您可以跟踪同一用户的其他配置文件。如果你很幸运; 他们还可能会将某些帖子自动转发到该平台。
  </p>
  <p class="graf graf--p">
   Google+ 将在2019年4月初关闭。这意味着他们的平台将不再可搜索。但Archive.org是一个很棒的团队，因为他们正在开发一个项目，
   <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/internetarchive/status/1092602334360657920" href="https://twitter.com/internetarchive/status/1092602334360657920" rel="noopener noreferrer" target="_blank">
    以便尽可能归档 Google+ 内容
   </a>
   。
  </p>
  <p class="graf graf--p">
   他们以前还归档过 MySpace，这是一个在 Facebook 出现之前非常受欢迎的社交网络，例如，荷兰 DJ Hardwell 的 MySpace 个人资料在Archive.org中
   <a class="markup--anchor markup--p-anchor" data-href="https://web.archive.org/web/20110716010540/https://myspace.com/deejayhardwell" href="https://web.archive.org/web/20110716010540/https://myspace.com/deejayhardwell" rel="noopener noreferrer" target="_blank">
    有多个条目
   </a>
   。Hyves（在 Facebook 出现之前在荷兰很受欢迎的平台）现在是一个游戏平台，也有 DJ Hardwell 的
   <a class="markup--anchor markup--p-anchor" data-href="https://web.archive.org/web/20130330033244/http://hardwell.hyves.nl/" href="https://web.archive.org/web/20130330033244/http://hardwell.hyves.nl/" rel="noopener noreferrer" target="_blank">
    多个条目
   </a>
   。
  </p>
  <p class="graf graf--p">
   如果有特定帖子已被删除，检索信息可能会有点困难。有时 Google Cache 和 Archive 会提供结果，如果没找到，您最好的机会是搜索可能已经发表过帖子的人，并且可能被保存了的屏幕截图。当然如果你是警察和间谍，网站会提供缓存给你。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    — — 如果你正在研究的Tor网站已被删除 — —
   </strong>
  </p>
  <p class="graf graf--p">
   虽然互联网的很大一部分存档得都很好，但对于 Darkweb 来说却不一样。但是，有几个有趣的事您值得了解。
  </p>
  <p class="graf graf--p">
   有几个项目，比如
   <a class="markup--anchor markup--p-anchor" data-href="http://onion.link/" href="http://onion.link/" rel="noreferrer noopener" target="_blank">
    onion.link
   </a>
   有时能帮你显示网站副本；尝试使用
   <a class="markup--anchor markup--p-anchor" data-href="https://www.tor2web.org/" href="https://www.tor2web.org/" rel="noopener noreferrer" target="_blank">
    Tor2Web 代理软件
   </a>
   通过普通网络上的搜索引擎也能搜索到 Darkweb。
  </p>
  <p class="graf graf--p">
   在 Google，Bing 或 Duckduckgo 中搜索完整的洋葱网址时，可能会找到该网页的副本。如果你很幸运，还有可能找到一个缓存版本。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    有很多站点可以跟踪 Darkweb 上发生的任何事情
   </strong>
   。其中一些保留了流行的 Darkweb 网站的图表，并发布了特定页面的截图（例如 Darkwebnews）可以检查是否有人存档/缓存了像 Darkwebnews 这样的网站，您可能能够找到您要查找的内容。
  </p>
  <p class="graf graf--p">
   此外，Deepdotweb.com和 Reddit （或 Dreadditevelidot.onion，通过Tor）等网站都有关于各种 Darkweb 页面的信息。也许某人已经发布了您感兴趣的网站的帖子，并且可能包含截图。
  </p>
  <p class="graf graf--p">
   或尝试免费的
   <a class="markup--anchor markup--p-anchor" data-href="https://www.hunch.ly/darkweb-osint/" href="https://www.hunch.ly/darkweb-osint/" rel="noopener noreferrer" target="_blank">
    Hunchly 每日暗网报告
   </a>
   。每天您都会收到一个 Excel 电子表格的链接，但要小心，它不会被过滤，所以你可能会遇到非法内容。虽然这可能不会显示任何屏幕截图，但它会为您提供有关该网站上的内容的一些线索。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    — — 预防措施 — —
   </strong>
  </p>
  <p class="graf graf--p">
   因为做调查报告需要时间，如果您担心在调查过程中内容或平台被删除，你可以采取一些预防措施。
  </p>
  <p class="graf graf--p">
   如果您无法获得 Hunchly 许可证，您可以随时使用
   <a class="markup--anchor markup--p-anchor" data-href="http://archive.org/" href="https://archive.org/" rel="noreferrer noopener" target="_blank">
    Archive.org
   </a>
   （他们有Chrome和FireFox的插件）或
   <a class="markup--anchor markup--p-anchor" data-href="http://archive.is/" href="https://archive.fo/" rel="noreferrer noopener" target="_blank">
    Archive.is
   </a>
   （将顶部的按钮拖到您的书签）来存档你正在做的事。
   <strong class="markup--strong markup--p-strong">
    缺点是，您存档的信息将公开提供给其他用户。但至少你知道你的数据不会丢失
   </strong>
   。
  </p>
  <p class="graf graf--p">
   如果您担心某些内容可能会被删除，您可以随时截取屏幕截图。为此目的，也有许多附加组件、应用程序和其他软件。
  </p>
  <p class="graf graf--p">
   在 Chrome 扩展 SingleFile 让您保存您正在浏览的、之后离线浏览的或采取截图的 MHTML 文件；Scroll ++在此也是一样的，而且它在Firefox也能用。
  </p>
  <p class="graf graf--p">
   此外，在进行在线研究时，让 Hunchly 跟踪您的调查几乎是您不可或缺的好处。它将跟踪您正在研究的所有内容，保存它们，允许您随时搜索它们等等。它的创建者贾斯汀塞茨（
   <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/jms_dot_py" href="https://twitter.com/jms_dot_py" rel="noopener noreferrer" target="_blank">
    Justin Seitz
   </a>
   ）撰写了相关博客，并提供免费的网络研讨会，介绍如何以最有效的方式使用 Hunchly。
  </p>
  <p class="graf graf--p">
   总之，巧妙地存档和检索数据，可以帮助您的 OSINT 研究更加成功。
  </p>
  <div id="atatags-1611829871-5f3db2318c318">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-705" href="https://www.iyouport.org/%e7%9b%97%e5%a2%93osint/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-705" href="https://www.iyouport.org/%e7%9b%97%e5%a2%93osint/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
   <time class="entry-date published" datetime="2019-05-10T00:00:48+08:00">
    2019年5月10日
   </time>
   <time class="updated" datetime="2019-04-24T23:55:51+08:00">
    2019年4月24日
   </time>
  </div>
 </div>
</article>

