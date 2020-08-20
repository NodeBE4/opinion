---
layout: post
title: "如何在你的网页浏览器中使用Tor网络？ - iYouPort"
date: 2019-08-29T16:04:27+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4124 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 category-67 tag-anticensorship tag-privacy tag-technology tag-tor" id="post-4124">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在你的网页浏览器中使用Tor网络？
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-08-30T00:04:27+08:00">
    2019年8月30日
   </time>
   <time class="updated" datetime="2019-05-18T12:29:06+08:00">
    2019年5月18日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <p class="graf graf--p">
   在线隐私正在成为一个大问题，互联网用户一直在寻找有效的方法或工具，以便可以保持匿名上网。
  </p>
  <p class="graf graf--p">
   只要能做到有效的匿名，就没有人能轻易找到你的真实身份、你的真实位置；
   <strong class="markup--strong markup--p-strong">
    这样，您就可以通过公共网络共享任何敏感信息，而不会因此被置于危险之境地
   </strong>
   。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/?s=Tor" href="https://www.iyouport.org/?s=Tor" rel="noopener noreferrer" target="_blank">
    Tor 网络
   </a>
   是一组志愿者操作的服务器，允许人们在连接到互联网时增强个人隐私和安全性。
  </p>
  <p class="graf graf--p">
   在本文中，我们将展示如何安装 Tor 软件并配置您的 Web 浏览器（Firefox 和 Chrome）以将其用作代理。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Linux 系统中安装 Tor
   </strong>
  </p>
  <p class="graf graf--p">
   出于稳定性和安全性修复的原因，强烈建议从官方项目存储库安装Tor软件包。不要在 Linux 发行版的本机存储库中使用这些包，因为它们经常过时。按照以下说明在您的系统上设置官方软件包存储库。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Debian / Ubuntu 上安装 Tor
   </strong>
  </p>
  <p class="graf graf--p">
   首先，您需要使用以下命令查找发行名称：
  </p>
  <pre class="graf graf--pre">$ lsb_release -c</pre>
  <p class="graf graf--p">
   接下来，将以下条目添加到 /etc/apt/sources.list 文件中。确保将 DISTRIBUTION 替换为您的实际发行名称，例如 xenial）：
  </p>
  <pre class="graf graf--pre">deb <a class="markup--anchor markup--pre-anchor" data-href="https://deb.torproject.org/torproject.org" href="https://deb.torproject.org/torproject.org" rel="noopener noreferrer" target="_blank">https://deb.torproject.org/torproject.org</a> <code>DISTRIBUTION</code> main deb-src https://deb.torproject.org/torproject.org <code>DISTRIBUTION</code> main</pre>
  <p class="graf graf--p">
   然后通过执行以下命令添加用于签名的 gpg 密钥：
  </p>
  <pre class="graf graf--pre">$ gpg --keyserver keys.gnupg.net --recv 886DDD89
$ gpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 | sudo apt-key add -</pre>
  <p class="graf graf--p">
   接下来，通过以下命令进行更新并安装 Tor：
  </p>
  <pre class="graf graf--pre">$ sudo apt update
$ sudo apt install deb.torproject.org-keyring
$ sudo apt install tor</pre>
  <p class="graf graf--p">
   成功安装 Tor 后，应自动启动并启用该服务。您可以使用 systemctl 命令验证其状态：
  </p>
  <pre class="graf graf--pre">$ sudo systemctl status tor</pre>
  <p class="graf graf--p">
   或者这样也行：
  </p>
  <pre class="graf graf--pre">$ sudo systemctl start tor
$ sudo systemctl enable tor</pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 CentOS / RHEL 和 Fedora 上安装 Tor
   </strong>
  </p>
  <p class="graf graf--p">
   首先，您需要使用以下命令查找发行名称：
  </p>
  <pre class="graf graf--pre"># cat /etc/redhat-release</pre>
  <p class="graf graf--p">
   接下来，将以下条目添加到 /etc/yum.repos.d/tor.repo 文件中，并确保根据您的发行名将 DISTRIBUTION 名称替换为以下之一：fc / 29，el / 7 或 el / 76：
  </p>
  <pre class="graf graf--pre">[tor]
name=Tor repo
enabled=1
baseurl=https://deb.torproject.org/torproject.org/rpm/<code>DISTRIBUTION</code>/$basearch/ gpgcheck=1 gpgkey=https://deb.torproject.org/torproject.org/rpm/RPM-GPG-KEY-torproject.org.asc [tor-source] name=Tor source repo enabled=1 autorefresh=0 baseurl=https://deb.torproject.org/torproject.org/rpm/<code>DISTRIBUTION</code>/SRPMS gpgcheck=1 gpgkey=https://deb.torproject.org/torproject.org/rpm/RPM-GPG-KEY-torproject.org.asc</pre>
  <p class="graf graf--p">
   接下来，通过以下命令更新包源并安装 Tor：
  </p>
  <pre class="graf graf--pre"># yum update
# yum install tor</pre>
  <p class="graf graf--p">
   安装 Tor 后，您可以使用以下命令启动、启用和验证状态：
  </p>
  <pre class="graf graf--pre"># systemctl start tor
# systemctl enable tor
# systemctl status tor</pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    配置 Web 浏览器以使用 Tor 网络
   </strong>
  </p>
  <p class="graf graf--p">
   要 Torify 您的Web浏览器，您需要通过将Web浏览器指向Tor（localhost 端口 9050）直接使用 SOCKS。要确认 tor 正在监听此端口，请运行以下 netstat 命令：
  </p>
  <pre class="graf graf--pre">$ sudo netstat -ltnp | grep "tor"</pre>
  <pre class="graf graf--pre">tcp        0      0 127.0.0.1:9050          0.0.0.0:*               LISTEN      15782/tor</pre>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Firefox 上配置 Tor
   </strong>
  </p>
  <p class="graf graf--p">
   转至首选项→网络设置，在配置对 Internet 的代理访问权限下，选择手动代理配置选项。
  </p>
  <p class="graf graf--p">
   然后将 SOCKS 主机设置为 127.0.0.1，将端口设置为9050，并勾选“Proxy DNS when using SOCKS v5”，然后单击确定。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4126 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1100%2C960&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?w=1135&amp;ssl=1 1135w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=300%2C262&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=768%2C671&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1024%2C894&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1100%2C960&amp;ssl=1 1100w" data-recalc-dims="1" height="960" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1100%2C960&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4126" data-recalc-dims="1" height="960" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1100%2C960&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?w=1135&amp;ssl=1 1135w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=300%2C262&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=768%2C671&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1024%2C894&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/火狐.png?resize=1100%2C960&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   下一步是访问链接：check.torproject.org，测试您的浏览器是否已成功完成设置。如果你看到下面这样的画面就表示配置正确。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-4127 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1100%2C858&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?w=1107&amp;ssl=1 1107w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=300%2C234&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=768%2C599&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1024%2C798&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1100%2C858&amp;ssl=1 1100w" data-recalc-dims="1" height="858" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1100%2C858&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4127" data-recalc-dims="1" height="858" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1100%2C858&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?w=1107&amp;ssl=1 1107w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=300%2C234&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=768%2C599&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1024%2C798&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/配置正确.png?resize=1100%2C858&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Chrome 上配置 Tor
   </strong>
  </p>
  <p class="graf graf--p">
   转到设置→在“高级”下，单击隐私和安全，然后在“系统”下，单击打开代理设置。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-4128 jetpack-lazy-image" data-lazy-sizes="(max-width: 829px) 100vw, 829px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=829%2C398&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?w=829&amp;ssl=1 829w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=300%2C144&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=768%2C369&amp;ssl=1 768w" data-recalc-dims="1" height="398" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=829%2C398&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="829"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4128" data-recalc-dims="1" height="398" sizes="(max-width: 829px) 100vw, 829px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=829%2C398&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?w=829&amp;ssl=1 829w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=300%2C144&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/谷歌浏览器.png?resize=768%2C369&amp;ssl=1 768w" width="829"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您的桌面环境不受支持或启动系统配置时出现问题，则需要使用 — proxy-server 选项使用 google-chrome-stable 工具从命令行启用代理设置。
  </p>
  <pre class="graf graf--pre">$ google-chrome-stable --proxy-server="socks://127.0.0.1:9050"</pre>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-4129 jetpack-lazy-image" data-lazy-sizes="(max-width: 882px) 100vw, 882px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=882%2C59&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?w=882&amp;ssl=1 882w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=300%2C20&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=768%2C51&amp;ssl=1 768w" data-recalc-dims="1" height="59" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=882%2C59&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="882"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4129" data-recalc-dims="1" height="59" sizes="(max-width: 882px) 100vw, 882px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=882%2C59&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?w=882&amp;ssl=1 882w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=300%2C20&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/代理.png?resize=768%2C51&amp;ssl=1 768w" width="882"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   注意：如果您想使用Tor进行更有效的匿名网页浏览，请安装并使用Tor浏览器。
  </p>
  <p class="graf graf--p">
   ⚠️并请记住，Tor无法解决所有匿名问题。它的目的只是保护数据从一端到另一端的传输。人的因素依旧是最重要的，如果您出现操作错误，任何安全技术都帮不了您。具体详见《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%bd%bf%e7%94%a8-tor-%e4%bf%9d%e6%8a%a4%e8%87%aa%e5%b7%b1%e6%97%b6%e5%8d%83%e4%b8%87%e4%b8%8d%e8%a6%81%e5%81%9a%e8%bf%99%e4%b9%9d%e4%bb%b6%e4%ba%8b%ef%bc%81/" href="https://www.iyouport.org/%e4%bd%bf%e7%94%a8-tor-%e4%bf%9d%e6%8a%a4%e8%87%aa%e5%b7%b1%e6%97%b6%e5%8d%83%e4%b8%87%e4%b8%8d%e8%a6%81%e5%81%9a%e8%bf%99%e4%b9%9d%e4%bb%b6%e4%ba%8b%ef%bc%81/" rel="noopener noreferrer" target="_blank">
    使用 Tor 保护自己时千万不要做这九件事
   </a>
   》
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.tecmint.com/use-tor-network-in-web-browser/" href="https://www.tecmint.com/use-tor-network-in-web-browser/" rel="noopener noreferrer" target="_blank">
    How to Install and Use Tor Network in Your Web Browser
   </a>
  </p>
  <div id="atatags-1611829871-5f3e34640fdcf">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4124" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4124" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8%e4%bd%a0%e7%9a%84%e7%bd%91%e9%a1%b5%e6%b5%8f%e8%a7%88%e5%99%a8%e4%b8%ad%e4%bd%bf%e7%94%a8tor%e7%bd%91%e7%bb%9c%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/anticensorship/" rel="tag">
     anticensorship
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/privacy/" rel="tag">
     privacy
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
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
   <time class="entry-date published" datetime="2019-08-30T00:04:27+08:00">
    2019年8月30日
   </time>
   <time class="updated" datetime="2019-05-18T12:29:06+08:00">
    2019年5月18日
   </time>
  </div>
 </div>
</article>

