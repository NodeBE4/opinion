---
layout: post
title: "如何在Linux上安装Tor浏览器：3种方法 - iYouPort"
date: 2020-05-11T16:03:15+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8linux%e4%b8%8a%e5%ae%89%e8%a3%85tor%e6%b5%8f%e8%a7%88%e5%99%a8%ef%bc%9a3%e7%a7%8d%e6%96%b9%e6%b3%95/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-11211 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-linux tag-privacy tag-technology tag-tor" id="post-11211">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在Linux上安装Tor浏览器：3种方法
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-05-12T00:03:15+08:00">
    2020年5月12日
   </time>
   <time class="updated" datetime="2019-12-02T20:22:49+08:00">
    2019年12月2日
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
       总有一种适合您
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter wp-image-11212 jetpack-lazy-image" data-lazy-sizes="(max-width: 750px) 100vw, 750px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?resize=750%2C531&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?w=640&amp;ssl=1 640w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?resize=300%2C212&amp;ssl=1 300w" data-recalc-dims="1" height="531" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?resize=750%2C531&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="750"/>
   <noscript>
    <img alt="" class="aligncenter wp-image-11212" data-recalc-dims="1" height="531" sizes="(max-width: 750px) 100vw, 750px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?resize=750%2C531&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?w=640&amp;ssl=1 640w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/11-1.png?resize=300%2C212&amp;ssl=1 300w" width="750"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   Tor 浏览器（以前称为 Tor Browser Bundle）是一种Web浏览器，可在您上网时保护您的隐私。
  </p>
  <p class="graf graf--p">
   它是 Mozilla Firefox ESR（扩展支持版本）的修改版，其中包括 TorButton、TorLauncher、NoScript 和 HTTPS Everywhere Firefox 扩展以及Tor代理。
  </p>
  <p class="graf graf--p">
   Tor浏览器会自动启动Tor后台进程并通过Tor网络路由流量； Cookie和浏览历史记录等敏感数据会在关闭浏览器后自动消失。
  </p>
  <p class="graf graf--p">
   其主要目的是从监视世界中隐藏用户的身份及其在线活动来规避审查；阻止某些人监视您的连接、他们不知道您访问过什么网站，并使其难以根据您的设备和浏览器进行指纹识别。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    不要忘了，技术不是万能的，人为的操作安全永远最重要
   </strong>
   ，见《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/opsec-%e6%93%8d%e4%bd%9c%e5%ae%89%e5%85%a8%ef%bc%9a%e5%9c%a8%e5%8f%8d%e4%be%a6%e5%af%9f%e7%9a%84%e8%bf%87%e7%a8%8b%e4%b8%ad%e6%82%a8%e5%ba%94%e8%af%a5%e6%b3%a8%e6%84%8f%e5%93%aa%e4%ba%9b%e9%99%b7/" href="https://www.iyouport.org/opsec-%e6%93%8d%e4%bd%9c%e5%ae%89%e5%85%a8%ef%bc%9a%e5%9c%a8%e5%8f%8d%e4%be%a6%e5%af%9f%e7%9a%84%e8%bf%87%e7%a8%8b%e4%b8%ad%e6%82%a8%e5%ba%94%e8%af%a5%e6%b3%a8%e6%84%8f%e5%93%aa%e4%ba%9b%e9%99%b7/" rel="noopener noreferrer" target="_blank">
    Opsec 操作安全：在反侦察的过程中您应该注意哪些陷阱？
   </a>
   》。
  </p>
  <p class="graf graf--p">
   监视您的浏览习惯的任何人仍然可以看到您正在使用Tor，虽然他们不知道你在干什么。在使用它之前请记住这一点。
  </p>
  <p class="graf graf--p">
   本文介绍了在Linux上安装 Tor Browser 的方法，为此提供了3个选项。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    选项1：从 Linux 发行版储存库安装Tor浏览器
   </strong>
  </h3>
  <p class="graf graf--p">
   Tor 浏览器未直接包含在存储库中，但许多 Linux 发行版提供了
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/micahflee/torbrowser-launcher" href="https://github.com/micahflee/torbrowser-launcher" rel="noopener noreferrer" target="_blank">
    Tor Browser Launcher
   </a>
   的软件包，该工具可在 Linux 上安全地下载和安装 Tor Browser。
  </p>
  <p class="graf graf--p">
   Tor Browser Launcher 以您的语言和您的计算机体系结构下载并安装最新的稳定Tor浏览器版本，验证该浏览器的签名，以确保下载的版本已由Tor开发人员加密签名，并且未被篡改。
  </p>
  <p class="graf graf--p">
   将 Tor Browser 和 Tor Browser Launcher 设置添加到应用程序菜单/启动器，同时还包括Tor浏览器的AppArmor配置文件。
  </p>
  <p class="graf graf--p">
   还值得一提的是，通过 Tor Browser Launcher 安装的Tor浏览器会自动进行自我更新，因此只要开发人员发布更新，您就可以获取更新。
  </p>
  <p class="graf graf--p">
   &gt; Debian，Ubuntu，Linux Mint，Pop！_OS 和其他基于 Debian 或 Ubuntu 的 Linux 发行版：
  </p>
  <pre class="graf graf--pre"><code>sudo apt install torbrowser-launcher</code></pre>
  <p class="graf graf--p">
   &gt; Fedora:
  </p>
  <pre class="graf graf--pre"><code>sudo dnf install torbrowser-launcher</code></pre>
  <p class="graf graf--p">
   &gt; openSUSE:
  </p>
  <pre class="graf graf--pre"><code>sudo zypper install torbrowser-launcher</code></pre>
  <p class="graf graf--p">
   &gt; Solus OS:
  </p>
  <pre class="graf graf--pre"><code>sudo eopkg install torbrowser-launcher</code></pre>
  <p class="graf graf--p">
   在 Arch Linux（和 Manjaro）上，Tor Browser 不在存储库中，但是您可以通过 AUR 安装它，并且有两种选择：直接安装 Tor Browser（仅适用于美式英语）或通过 Tor Browser Launcher 安装。
  </p>
  <p class="graf graf--p">
   如果您正在使用其他Linux发行版，请在存储库中搜索 “Tor Browser” 或 “Tor Browser Launcher”。
  </p>
  <p class="graf graf--p">
   安装 Tor Browser Launcher 后，打开应用程序菜单/启动器并启动Tor浏览器。第一次运行此程序时，它将自动下载您所用语言的最新Tor浏览器版本并解压缩，然后启动Tor浏览器。随后的运行将直接启动Tor浏览器。
  </p>
  <p class="graf graf--p">
   新版本发布后，Tor浏览器将自动提示您更新软件。这个时候 “ Torbutton” 图标将显示一个小的黄色三角形。
  </p>
  <p class="graf graf--p">
   在某些情况下，Tor Browser Launcher 可能无法下载Tor浏览器或无法验证其签名（“签名验证失败”错误）。
  </p>
  <p class="graf graf--p">
   这时候您可以选择使用 Flathub Tor Browser Launcher（下面的选项2），或者手动下载和安装Tor浏览器二进制文件（选项3）。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    选项2：从 Flathub 安装Tor浏览器
   </strong>
  </h3>
  <p class="graf graf--p">
   Flathub 已经将 Tor Browser Launcher 添加到其不断增加的存储库中，从而使其易于安装在任何支持 Flatpak 的 Linux 发行版上。
  </p>
  <p class="graf graf--p">
   这具有支持大量 Linux 发行版的优势，同时还为 Linux 发行版提供最新的 Tor Browser Launcher 版本。
  </p>
  <p class="graf graf--p">
   通过 Flathub 安装Tor浏览器之前，如果尚未在系统上设置 Flatpak 和 Flathub，则需要先完成这项工作。
  </p>
  <p class="graf graf--p">
   一个
   <a class="markup--anchor markup--p-anchor" data-href="https://flatpak.org/setup/" href="https://flatpak.org/setup/" rel="noopener noreferrer" target="_blank">
    快速设置页面
   </a>
   中包含许多 Linux 发行版的说明，包括 Ubuntu（和Kubuntu，Pop！_OS 或 Elementary OS），Fedora，RHEL，openSUSE，Arch Linux，Debian，CentOS，Gentoo，Mageia 等 。 Linux Mint 19 和更高版本默认情况下已启用 Flathub。
  </p>
  <p class="graf graf--p">
   接下来，打开您的 Software 应用程序并安装 Tor Browser Launcher。
  </p>
  <p class="graf graf--p">
   并非所有软件商店都支持安装 Flatpak 应用，在这种情况下，您可以使用以下命令从 Flathub 安装 Tor Browser Launcher：
  </p>
  <pre class="graf graf--pre"><code>flatpak install flathub com.github.micahflee.torbrowser-launcher</code></pre>
  <p class="graf graf--p">
   然后打开应用程序菜单/启动器并启动Tor浏览器。第一次运行此程序时，它将自动下载您所用语言的最新Tor浏览器版本并解压缩，然后启动Tor浏览器。随后的运行将直接启动Tor浏览器。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    选项3：手动下载并安装Tor浏览器二进制文件（并自动创建菜单项）
   </strong>
  </h3>
  <p class="graf graf--p">
   Tor项目
   <a class="markup--anchor markup--p-anchor" data-href="https://www.torproject.org/download/" href="https://www.torproject.org/download/" rel="noopener noreferrer" target="_blank">
    在此页面
   </a>
   上为所有受支持的操作系统提供了Tor浏览器的预编译二进制文件 —— 单击Tux徽标以下载最新的Linux版Tor浏览器。
  </p>
  <p class="graf graf--p">
   您也可以访问
   <a class="markup--anchor markup--p-anchor" data-href="https://www.torproject.org/download/languages/" href="https://www.torproject.org/download/languages/" rel="noopener noreferrer" target="_blank">
    此页面
   </a>
   ，以下载适用于其他不同语种的Tor浏览器。
  </p>
  <p class="graf graf--p">
   下载后，您可能需要验证签名。 Tor Browser Launcher（其他2个选项）会自动为您执行此操作，但是在这种情况下，您需要手动执行此操作。
  </p>
  <p class="graf graf--p">
   提取您从 Tor Project 网站下载的档案，并复制提取的 tor-browser_en-US 文件夹（其中 en-US 是Tor浏览器语言，因此根据您的语言，它可能有所不同; 该文件夹应包含一个 start-tor-browser.desktop 文件和一个 Browser 子文件夹）到您要运行Tor浏览器的位置。
  </p>
  <p class="graf graf--p">
   建议将其复制到用户具有读/写访问权限的目录中，以便Tor浏览器可以自动更新自身。例如，您可以将其复制到主目录中的“Apps”文件夹中。
  </p>
  <p class="graf graf--p">
   现在，您可以使Tor浏览器自动将其自身添加到桌面的应用程序菜单中。
  </p>
  <p class="graf graf--p">
   打开终端，导航到Tor浏览器的文件夹，使 start-tor-browser.desktop 文件可执行，并使用 — register-app 运行它，以便添加 Tor Browser 菜单项到您的应用程序菜单中：
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">cd /path/to/tor-browser_en-US
./start-tor-browser.desktop --register-app</code></pre>
  <p class="graf graf--p">
   您需要将 /path/to/tor-browser_en-US 替换为Tor浏览器文件夹的路径（该文件夹包含 start-tor-browser.desktop 文件和 Browser 子文件夹）。
  </p>
  <p class="graf graf--p">
   值得注意的是，您不能直接使用完整路径运行 start-tor-browser.desktop，您需要在该文件的父文件夹中运行它。
  </p>
  <p class="graf graf--p">
   例如，如果您的Tor浏览器文件夹称为 tor-browser_en-US，并且已将其放置在主目录中的 Apps 文件夹中，则将运行以下命令以便使 start-tor-browser.desktop 可执行，将Tor浏览器添加到桌面的应用程序菜单中：
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">cd ~/Apps/tor-browser_en-US/
./start-tor-browser.desktop --register-app</code></pre>
  <p class="graf graf--p">
   此后，Tor浏览器将显示在您的应用程序菜单中，因此您只需单击即可从那里启动它。⚪️
  </p>
  <div id="atatags-1611829871-5f4261d2a5d1e">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-11211" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8linux%e4%b8%8a%e5%ae%89%e8%a3%85tor%e6%b5%8f%e8%a7%88%e5%99%a8%ef%bc%9a3%e7%a7%8d%e6%96%b9%e6%b3%95/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-11211" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8linux%e4%b8%8a%e5%ae%89%e8%a3%85tor%e6%b5%8f%e8%a7%88%e5%99%a8%ef%bc%9a3%e7%a7%8d%e6%96%b9%e6%b3%95/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-11211-5f4261d2a64ce" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=11211&amp;origin=www.iyouport.org&amp;obj_id=161182987-11211-5f4261d2a64ce" id="like-post-wrapper-161182987-11211-5f4261d2a64ce">
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
    <a href="https://www.iyouport.org/tag/linux/" rel="tag">
     Linux
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
   <time class="entry-date published" datetime="2020-05-12T00:03:15+08:00">
    2020年5月12日
   </time>
   <time class="updated" datetime="2019-12-02T20:22:49+08:00">
    2019年12月2日
   </time>
  </div>
 </div>
</article>

