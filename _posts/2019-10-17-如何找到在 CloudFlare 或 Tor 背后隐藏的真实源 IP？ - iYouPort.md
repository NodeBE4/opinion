---
layout: post
title: "如何找到在 CloudFlare 或 Tor 背后隐藏的真实源 IP？ - iYouPort"
date: 2019-10-17T16:04:04+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%89%be%e5%88%b0%e5%9c%a8-cloudflare-%e6%88%96-tor-%e8%83%8c%e5%90%8e%e9%9a%90%e8%97%8f%e7%9a%84%e7%9c%9f%e5%ae%9e%e6%ba%90-ip%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-5815 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-cloudflare tag-privacy tag-security tag-technique tag-technology tag-tools tag-tor" id="post-5815">
 <header class="entry-header">
  <h1 class="entry-title">
   如何找到在 CloudFlare 或 Tor 背后隐藏的真实源 IP？
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
   <time class="entry-date published" datetime="2019-10-18T00:04:04+08:00">
    2019年10月18日
   </time>
   <time class="updated" datetime="2019-06-17T03:18:35+08:00">
    2019年6月17日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       获得用户的真实原始IP是攻击者梦寐以求的梦想，利用真实IP，攻击者发起的攻击才更有针对性和效率。这里有5个方法可以做到这点
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-5816 jetpack-lazy-image" data-lazy-sizes="(max-width: 630px) 100vw, 630px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?resize=630%2C387&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?w=630&amp;ssl=1 630w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?resize=300%2C184&amp;ssl=1 300w" data-recalc-dims="1" height="387" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?resize=630%2C387&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="630"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5816" data-recalc-dims="1" height="387" sizes="(max-width: 630px) 100vw, 630px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?resize=630%2C387&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?w=630&amp;ssl=1 630w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/Tor.jpeg?resize=300%2C184&amp;ssl=1 300w" width="630"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   配置了任何类似隐藏功能以及 CloudFlare 的服务，都具有隐藏用户真实原始IP的效果。攻击者只能利用其中的漏洞，才能找到想要的IP，进而利用这些IP，直接攻击使用 CloudFlare 的网站。
  </p>
  <p class="graf graf--p">
   比如绕过WAF、限制网速、绕过DDoS保护等。
  </p>
  <p class="graf graf--p">
   甚至干脆删除安全运营商提供的隐藏真实原始IP的服务，或者将Tor提供的身份隐藏服务取消。
  </p>
  <p class="graf graf--p">
   寻找隐藏在 CloudFlare 或 Tor 背后的真实原始IP的方法，会根据用户使用的服务或技术类型而异，例如，Tor 隐藏服务不存在MX记录，所以对它就要采取一种特殊的寻找IP的方法。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    1、利用SSL证书寻找真实原始IP
   </strong>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    1.1 使用给定的域名
   </strong>
  </p>
  <p class="graf graf--p">
   假如你在 xyz123boot.com 上托管了一个服务，原始服务器IP是136.23.63.44。
  </p>
  <p class="graf graf--p">
   而 CloudFlare 则会为你提供DDoS保护，Web应用程序防火墙和其他一些安全服务，以保护你的服务免受攻击。
  </p>
  <p class="graf graf--p">
   为此，你的Web服务器就必须支持SSL并具有证书，此时CloudFlare与你的服务器之间的通信，就像你和 CloudFlare 之间的通信一样，会被加密（即没有灵活的SSL存在）。
  </p>
  <p class="graf graf--p">
   这看起来很安全，但问题是，
   <strong class="markup--strong markup--p-strong">
    当你在端口 443（
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://136.23.63.44/" href="https://136.23.63.44/" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     https://136.23.63.44:443
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    ）上直接连接到IP时，SSL证书就会被暴露
   </strong>
   。
  </p>
  <p class="graf graf--p">
   此时，如果攻击者扫描 0.0.0.0/0，即整个互联网，他们就可以在端口443上获取在 xyz123boot.com 上的有效证书，进而获取提供给你的Web服务器IP。
  </p>
  <p class="graf graf--p">
   目前
   <a class="markup--anchor markup--p-anchor" data-href="https://censys.io/" href="https://censys.io/" rel="noopener noreferrer" target="_blank">
    Censys 工具
   </a>
   就能实现对整个互联网的扫描。
  </p>
  <p class="graf graf--p">
   Censys 是一款用以搜索联网设备信息的新型搜索引擎，安全专家可以使用它来评估他们实现方案的安全性，而黑客则可以使用它作为前期侦查攻击目标、收集目标信息的强大利器。
  </p>
  <p class="graf graf--p">
   Censys 搜索引擎能够扫描整个互联网，Censys 每天都会扫描IPv4地址空间，以搜索所有联网设备并收集相关的信息，并返回一份有关资源（如设备、网站和证书）配置和部署信息的总体报告。
  </p>
  <p class="graf graf--p">
   而攻击者唯一需要做的就是把上面用文字描述的搜索词翻译成实际的搜索查询参数。
  </p>
  <p class="graf graf--p">
   xyz123boot.com证书的搜索查询参数为：
   <code>
    parsed.names: xyz123boot.com
   </code>
  </p>
  <p class="graf graf--p">
   只显示有效证书的查询参数为：
   <code>
    tags.raw: trusted
   </code>
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.censys.io/certificates/help" href="https://www.censys.io/certificates/help" rel="noopener noreferrer" target="_blank">
    攻击者可以在 Censys 上实现多个参数的组合
   </a>
   ，这可以通过使用简单的布尔逻辑来完成。
  </p>
  <p class="graf graf--p">
   组合后的搜索参数为：
   <code>
    parsed.names: xyz123boot.com and tags.raw: trusted
   </code>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5817 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5817" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1100%2C664&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/1-7.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   Censys 将向你显示符合上述搜索条件的所有标准证书，以上这些证书是在扫描中找到的。
  </p>
  <p class="graf graf--p">
   要逐个查看这些搜索结果，攻击者可以通过单击右侧的“Explore”，打开包含多个工具的下拉菜单。
  </p>
  <p class="graf graf--p">
   选择
   <code>
    What's using this certificate?
   </code>
   &gt;
   <code>
    IPv4 Hosts
   </code>
   .
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5818 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=300%2C181&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=768%2C464&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1024%2C618&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5818" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1100%2C664&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=300%2C181&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=768%2C464&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1024%2C618&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/2-8.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   此时，攻击者将看到一个使用特定证书的IPv4主机列表，而真实原始 IP就藏在其中。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5819 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5819" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1100%2C664&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?w=1280&amp;ssl=1 1280w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=300%2C181&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=768%2C464&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1024%2C618&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/3-4.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   你可以通过导航到端口443上的IP来验证，看它是否重定向到xyz123boot.com？或它是否直接在IP上显示网站？
  </p>
  <p class="graf graf--p">
   <strong>
    1.2 使用给定的 SSL 证书
   </strong>
  </p>
  <p class="graf graf--p">
   如果你是执法部门的人员，想要找出一个隐藏在 cheesecp5vaogohv.onion 下的儿童色情网站。
  </p>
  <p class="graf graf--p">
   最好的办法就是找到其原始IP，这样你就可以追踪到其托管的服务器，甚至查到背后的运营商以及金融线索。
  </p>
  <p class="graf graf--p">
   隐藏服务具有SSL证书，要查找它使用的IPv4主机，只需将”SHA1 fingerprint”（签名证书的sha1值）粘贴到
   <a class="markup--anchor markup--p-anchor" data-href="https://www.censys.io/ipv4" href="https://www.censys.io/ipv4" rel="noopener noreferrer" target="_blank">
    Censys IPv4 主机搜索
   </a>
   中，即可找到证书，使用此方法可以轻松找到配置错误的Web服务器。
  </p>
  <p class="graf graf--p">
   <strong>
    2、利用DNS记录寻找真实原始IP
   </strong>
  </p>
  <p class="graf graf--p">
   CloudFlare 里含有DNS记录，利用 Censys 这样的工具，就可以找到存在于web服务器中的DNS记录。
  </p>
  <p class="graf graf--p">
   利用
   <a class="markup--anchor markup--p-anchor" data-href="https://securitytrails.com/" href="https://securitytrails.com/" rel="noopener noreferrer" target="_blank">
    SecurityTrails 平台
   </a>
   ，攻击者就可以精准的找到真实原始IP。
  </p>
  <p class="graf graf--p">
   他们只需在搜索字段中输入网站域名，然后按 Enter 键即可，这时“历史数据”就可以在左侧的菜单中找到。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5820 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5820" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1100%2C664&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/4-4.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    即使是当前的记录也可能泄漏原始服务器IP
   </strong>
   。
  </p>
  <p class="graf graf--p">
   例如，MX记录是一种常见的查找IP的方式。如果网站在与web相同的服务器和IP上托管自己的邮件服务器，那么原始服务器IP将在MX记录中。
  </p>
  <p class="graf graf--p">
   <strong>
    3、利用 HTTP 标头寻找真实原始IP
   </strong>
  </p>
  <p class="graf graf--p">
   借助 SecurityTrails 这样的平台，任何人都可以在茫茫的大数据搜索到自己的目标，甚至可以通过比较HTTP标头来查找到原始服务器。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    特别是当用户拥有一个非常特别的服务器名称与软件名称时，攻击者找到你就变得更容易
   </strong>
   。
  </p>
  <p class="graf graf--p">
   如果要搜索的数据相当多，如上所述，攻击者可以在 Censys 上组合搜索参数。
  </p>
  <p class="graf graf--p">
   假设你正在与1500个Web服务器共享你的服务器HTTP标头，这些服务器都发送的是相同的标头参数和值的组合。
  </p>
  <p class="graf graf--p">
   而且你还使用新的PHP框架发送唯一的HTTP标头（例如：X-Generated-Via：XYZ 框架），目前约有400名网站管理员使用了该框架。
  </p>
  <p class="graf graf--p">
   而最终由三个服务器组成的交集，只需手动操作就可以找到了IP，
   <strong class="markup--strong markup--p-strong">
    整个过程只需要几秒钟
   </strong>
   。
  </p>
  <p class="graf graf--p">
   例如，Censys 上用于匹配服务器标头的搜索参数是
   <code>
    80.http.get.headers.server:
   </code>
   ，
  </p>
  <p class="graf graf--p">
   查找由 CloudFlare 提供服务的网站的参数如下：
  </p>
  <p class="graf graf--p">
   <code>
    80.http.get.headers.server: cloudflare
   </code>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5821 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5821" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1100%2C664&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/5-2.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    4、利用应用和服务寻找真实原始IP
   </strong>
  </p>
  <p class="graf graf--p">
   由Tor隐藏服务或通过 CloudFlare 提供的网站是一个普通网站，而HTTP服务器之类的标头可用于查找正在使用的服务和版本的可能存在的漏洞。
  </p>
  <p class="graf graf--p">
   当攻击者获得对服务器的访问权限时，你显然可以轻松找到IP。
  </p>
  <p class="graf graf--p">
   另一种尝试是找到可能触发漏洞的提示信息，错误消息就可以显示敏感信息。这些信息可以只是IP本身，也可以是任何参数信息。
  </p>
  <p class="graf graf--p">
   在重新调试阶段运行
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/OJ/gobuster" href="https://github.com/OJ/gobuster" rel="noopener noreferrer" target="_blank">
    gobuster
   </a>
   以查找文件和目录，这个过程应该在每隔一段时间进行一次。
  </p>
  <p class="graf graf--p">
   攻击者可以找到的内容是日志，数据库转储或备份等等。
  </p>
  <p class="graf graf--p">
   此时攻击者会看看是否可以让为网站提供支持的应用程序与其他服务进行交互，
   <strong class="markup--strong markup--p-strong">
    如果你不是执法机构，如果用户只是在使用API，你可能无法获得IP
   </strong>
   。
  </p>
  <p class="graf graf--p">
   但作为本文的案例，
   <strong class="markup--strong markup--p-strong">
    也许攻击者可以在网站上设置一个头像并提供图片的URL而不是上传它
   </strong>
   。
  </p>
  <p class="graf graf--p">
   如果用户正在下载它，则他们可能是从其原始服务器进行的。此时，IP就会出现在日志中。
  </p>
  <p class="graf graf--p">
   <strong>
    5、利用网站返回的内容寻找真实原始IP
   </strong>
  </p>
  <p class="graf graf--p">
   如果原始服务器IP也返回了网站的内容，那么可以在网上搜索大量的相关数据。
  </p>
  <p class="graf graf--p">
   浏览网站源代码，
   <strong class="markup--strong markup--p-strong">
    寻找独特的代码片段
   </strong>
   。
  </p>
  <p class="graf graf--p">
   在 Java 中使用具有访问或标识符参数的第三方服务（例如 Google Analytics，reCAPTCHA）是攻击者经常使用的方法。
  </p>
  <p class="graf graf--p">
   以下是从
   <a class="markup--anchor markup--p-anchor" data-href="https://www.hackthebox.eu/" href="https://www.hackthebox.eu/" rel="noopener noreferrer" target="_blank">
    HackTheBox
   </a>
   网站获取的 Google Analytics 跟踪代码示例：
   <code>
    ga('create', 'UA-93577176-1', 'auto');
   </code>
  </p>
  <p class="graf graf--p">
   可以使用
   <code>
    80.http.get.body:
   </code>
   参数通过 body/source 过滤 Censys 数据。
  </p>
  <p class="graf graf--p">
   不幸的是，正常的搜索字段有局限性，但你可以
   <a class="markup--anchor markup--p-anchor" data-href="https://support.censys.io/getting-started/research-access-to-censys-data" href="https://support.censys.io/getting-started/research-access-to-censys-data" rel="noopener noreferrer" target="_blank">
    在 Censys 请求研究访问权限
   </a>
   ，该权限允许你通过 Google BigQuery 进行更强大的查询。
  </p>
  <p class="graf graf--p">
   Shodan是一种类似于Censys的服务，也提供了
   <code>
    http.html
   </code>
   搜索参数。
  </p>
  <p class="graf graf--p">
   搜索示例：
   <a class="markup--anchor markup--p-anchor" data-href="https://www.shodan.io/search?query=http.html%3AUA-32023260-1" href="https://www.shodan.io/search?query=http.html%3AUA-32023260-1" rel="nofollow noopener noreferrer" target="_blank">
    https://www.shodan.io/search?query=http.html%3AUA-32023260-1
   </a>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-5822 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1100%2C664&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1100%2C664&amp;ssl=1 1100w" data-recalc-dims="1" height="664" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1100%2C664&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-5822" data-recalc-dims="1" height="664" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1100%2C664&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=300%2C181&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=768%2C464&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1024%2C618&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/6-5.png?resize=1100%2C664&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   最后
  </p>
  <p class="graf graf--p">
   找到 Tor 隐藏服务或类似 CloudFlare 的反向代理服务背后的真实IP
   <strong class="markup--strong markup--p-strong">
    需要对web有一定的了解，也需要一定的创造力
   </strong>
   。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/x0rz" href="https://twitter.com/x0rz" rel="noopener noreferrer" target="_blank">
    x0rz
   </a>
   写的
   <a class="markup--anchor markup--p-anchor" data-href="https://blog.0day.rocks/securing-a-web-hidden-service-89d935ba1c1d" href="https://blog.0day.rocks/securing-a-web-hidden-service-89d935ba1c1d" rel="noopener noreferrer" target="_blank">
    保护web隐藏服务
   </a>
   介绍了 Tor 隐藏服务运营者针对本文中提出的几种方法的应对策略。
  </p>
  <p class="graf graf--p">
   其中包含了一些失败对策，隐藏服务并没有做好 OPSEC（操作安全），导致可以被监视者定位。
  </p>
  <p class="graf graf--p">
   整篇文章是关于由于网站管理员犯的错误而到导致被找到真实IP，绝对不是 CloudFlare 的错误。
  </p>
  <p class="graf graf--p">
   例如，当MX记录暴露真实IP时，你甚至会收到警告。最重要的是，CloudFlare 鼓励你将他们的IP列入你的web服务器的白名单，这样就不会在IP上公开你的网站或域名证书。
  </p>
  <p class="graf graf--p">
   他们还有一项名为
   <a class="markup--anchor markup--p-anchor" data-href="https://www.cloudflare.com/products/argo-tunnel/" href="https://www.cloudflare.com/products/argo-tunnel/" rel="noopener noreferrer" target="_blank">
    Argo Tunnel
   </a>
   的服务，Argo Tunnel 会在你的服务器和 CloudFlare 之间建立隧道，意味着你根本不必公开你的web服务器。
  </p>
  <p class="graf graf--p">
   CloudFlare 可能是此类别中最受欢迎的产品，这就是它在一些示例中被使用的原因。你也可以使用其他类似的服务代替 CloudFlare。
  </p>
  <p class="graf graf--p">
   操作安全是需要随时强调的《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%E4%BD%BF%E7%94%A8-tor-%E4%BF%9D%E6%8A%A4%E8%87%AA%E5%B7%B1%E6%97%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%81%9A%E8%BF%99%E4%B9%9D%E4%BB%B6%E4%BA%8B%EF%BC%81/" href="https://www.iyouport.org/%E4%BD%BF%E7%94%A8-tor-%E4%BF%9D%E6%8A%A4%E8%87%AA%E5%B7%B1%E6%97%B6%E5%8D%83%E4%B8%87%E4%B8%8D%E8%A6%81%E5%81%9A%E8%BF%99%E4%B9%9D%E4%BB%B6%E4%BA%8B%EF%BC%81/" rel="noopener noreferrer" target="_blank">
    使用 Tor 保护自己时千万不要做这九件事
   </a>
   》
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.secjuice.com/finding-real-ips-of-origin-servers-behind-cloudflare-or-tor/" href="https://www.secjuice.com/finding-real-ips-of-origin-servers-behind-cloudflare-or-tor/" rel="noopener noreferrer" target="_blank">
    Finding The Real Origin IPs Hiding Behind CloudFlare or Tor
   </a>
  </p>
  <div id="atatags-1611829871-5f3e88a5192f3">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-5815" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%89%be%e5%88%b0%e5%9c%a8-cloudflare-%e6%88%96-tor-%e8%83%8c%e5%90%8e%e9%9a%90%e8%97%8f%e7%9a%84%e7%9c%9f%e5%ae%9e%e6%ba%90-ip%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-5815" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%89%be%e5%88%b0%e5%9c%a8-cloudflare-%e6%88%96-tor-%e8%83%8c%e5%90%8e%e9%9a%90%e8%97%8f%e7%9a%84%e7%9c%9f%e5%ae%9e%e6%ba%90-ip%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/cloudflare/" rel="tag">
     CloudFlare
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/privacy/" rel="tag">
     privacy
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
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
    <a href="https://www.iyouport.org/tag/tor/" rel="tag">
     Tor
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-10-18T00:04:04+08:00">
    2019年10月18日
   </time>
   <time class="updated" datetime="2019-06-17T03:18:35+08:00">
    2019年6月17日
   </time>
  </div>
 </div>
</article>

