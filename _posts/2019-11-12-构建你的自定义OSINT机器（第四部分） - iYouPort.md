---
layout: post
title: "构建你的自定义OSINT机器（第四部分） - iYouPort"
date: 2019-11-12T16:04:41+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e5%9b%9b%e9%83%a8%e5%88%86%ef%bc%89/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6890 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-289 category-67 tag-activism tag-diy tag-investigation tag-linux tag-osint tag-technique tag-technology tag-tools" id="post-6890">
 <header class="entry-header">
  <h1 class="entry-title">
   构建你的自定义OSINT机器（第四部分）
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-11-13T00:04:41+08:00">
    2019年11月13日
   </time>
   <time class="updated" datetime="2019-07-21T13:22:36+08:00">
    2019年7月21日
   </time>
  </span>
  <span class="word-count">
   2 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       开始安装更多有用的深度调查工具啦
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6891 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1100%2C627&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=300%2C171&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=768%2C438&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1024%2C584&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1100%2C627&amp;ssl=1 1100w" data-recalc-dims="1" height="627" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1100%2C627&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6891" data-recalc-dims="1" height="627" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1100%2C627&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=300%2C171&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=768%2C438&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1024%2C584&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/DIY-1.jpg?resize=1100%2C627&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   上一篇文章介绍了如何直接从 Internet 安装一些有用的 Linux OSINT 程序。这篇文章将展示如何安装一些流行的基于 Python 的 OSINT 工具。
  </p>
  <p class="graf graf--p">
   如果您还没有读过前面的部分，可以在这里回顾：“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第一部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第二部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第三部分
   </a>
   ”。
  </p>
  <p class="graf graf--p">
   使用命令行也许很容易让人感到恐惧，但是本指南将
   <strong class="markup--strong markup--p-strong">
    以最简洁的方法
   </strong>
   说明这其实没有想象中那么难。
  </p>
  <p class="graf graf--p">
   Python 非常适合执行大量重复性任务并快速排序数据。
   <strong class="markup--strong markup--p-strong">
    这些工具比大多数基于浏览器的工具要快得多
   </strong>
   。
  </p>
  <p class="graf graf--p">
   本指南将逐步安装
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/laramies/theHarvester" href="https://github.com/laramies/theHarvester" rel="noopener noreferrer" target="_blank">
    theHarvester
   </a>
   的侦查工具，从绝对基础一直到使用自定义别名启动它。
  </p>
  <p class="graf graf--p">
   然后将解释如何安装
   <strong class="markup--strong markup--p-strong">
    其他侦查工具
   </strong>
   ，如 Photon，Sublist3r 和 Gasmask，用户名搜索工具 Sherlock，社交网络 Twitter（Twint）和 Instagram（Instalooter）的抓取工具，电话号码侦查工具 PhoneInfoga 和密码破解检查工具 h8mail。
  </p>
  <p class="graf graf--p">
   听起来似乎很多，但是一旦你理解了这些程序是如何工作的，就可以从 Github 克隆它们并将它们用于你的研究，非常简单。
  </p>
  <p class="graf graf--p">
   于是只要画出一只猫，后面就能有一堆老虎。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    安装入门 — 基础知识
   </strong>
  </p>
  <p class="graf graf--p">
   这些程序通常没有一个特别漂亮的用户界面，就像你从 Ubuntu 软件中心安装的那些程序一样。
  </p>
  <p class="graf graf--p">
   这可能会使它们看起来很复杂，但是在本指南的最后，您将能够安装各种功能强大的 OSINT 工具。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    本指南适用于 Linux 新手
   </strong>
   ，因此会从一开始就尝试覆盖所有内容。
  </p>
  <p class="graf graf--p">
   在 DIY-Buscador Ubuntu 机器中，按 Ctrl + Alt + T 打开终端。你会看到这样的画面：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6892 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6892" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-18.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您以前从未使用过终端，也不用担心；计算机不关心指令是来自您单击的闪亮 GUI 还是直接在终端中键入命令。
  </p>
  <p class="graf graf--p">
   就如上篇文章中展示的如何通过在 Ubuntu 商店中找到并安装 Stegosuite 一样，点击“安装”并输入管理员密码以授予其运行权限。
  </p>
  <p class="graf graf--p">
   在终端中，输入以下命令效果可以完全相同：
  </p>
  <pre class="graf graf--pre"><code>sudo apt install stegosuite</code></pre>
  <p class="graf graf--p">
   你会看到 sudo 提示输入管理员密码并确认该程序已被授权运行。
  </p>
  <p class="graf graf--p">
   Apt 只是 Ubuntu 用来管理软件包的程序，因此添加 ’install’ 告诉 apt 我想要它做什么，而 stegosuite 告诉 apt 我要在我的系统上安装数千个可用的 Ubuntu 软件包中的哪一个。
  </p>
  <p class="graf graf--p">
   所以这个命令会做什么很明显：
  </p>
  <pre class="graf graf--pre"><code>sudo apt remove stegosuite</code></pre>
  <p class="graf graf--p">
   请注意，如果您尝试使用不带 sudo 的 apt，Linux 不会允许。如果您未获得授权，则不允许您修改软件或操作系统的任何部分。（在一些较旧的教程中您可能会看到“apt-get”而不是“apt”，但它们会做同样的事）
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    搞个 Git
   </strong>
  </p>
  <p class="graf graf--p">
   使用 sudo apt install programname 适用于 Ubuntu 存储库中列出的程序 —— 但是这里没有列出任何我们想要安装的OSINT Python工具。
  </p>
  <p class="graf graf--p">
   想要的东西都在 GitHub 上，因此要在 OSINT 机器上安装它们，必须使用一个名为 git 的程序。
  </p>
  <p class="graf graf--p">
   一些工具也可以使用另一个名为 Pip 的程序安装，后面慢慢说。
  </p>
  <p class="graf graf--p">
   Git 是开发人员用于软件版本控制的复杂工具，但就本指南而言，
   <strong class="markup--strong markup--p-strong">
    只需要知道
   </strong>
   Git 允许您将软件直接从 GitHub 克隆到您的计算机上，就够了。
  </p>
  <p class="graf graf--p">
   在控制台中，通过输入以下命令来检查 Ubuntu 中安装的 git 版本：
  </p>
  <pre class="graf graf--pre"><code>git --version</code></pre>
  <p class="graf graf--p">
   你会被告知没有安装 git。因为默认情况下它不是 Ubuntu 的一部分，所以快速将其添加到您的 OSINT 构建中，这样：
  </p>
  <pre class="graf graf--pre"><code>sudo apt install git</code></pre>
  <p class="graf graf--p">
   出现提示时按Y键，git 将在几分钟后安装。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Pip &amp; Python
   </strong>
  </p>
  <p class="graf graf--p">
   默认情况下，Python 随 Ubuntu 一起安装，但了解它附带的两个不同版本非常重要。可以在以后拯救一个痛苦的世界。
  </p>
  <p class="graf graf--p">
   控制台类型：
  </p>
  <pre class="graf graf--pre"><code>python --version</code></pre>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6893 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6893" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-14.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   你会被告知 Ubuntu 正在运行 Python 2.7.16 版本。
  </p>
  <p class="graf graf--p">
   主要问题是从2020年开始不再支持 Python 2.7，现在大多数 Python 程序都运行 Python 3；幸运的是，Ubuntu 也预装了 Python 3 来解决这个问题。
  </p>
  <p class="graf graf--p">
   在控制台类型中：
  </p>
  <pre class="graf graf--pre"><code>python3 --version</code></pre>
  <p class="graf graf--p">
   这表明要使用 Python 3.7.3 而不是 Python 2.7，
   <strong class="markup--strong markup--p-strong">
    必须
   </strong>
   使用命令 python3 而不仅仅是 python。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    用 Pip 安装
   </strong>
  </p>
  <p class="graf graf--p">
   Pip 是 Python 的包管理器。它确保在您安装 Python 程序时，还将安装所有必需的库和模块。
  </p>
  <p class="graf graf--p">
   通常这些要求列在名为 requirements.txt 的文本文件中，因此安装所有必需的插件会很简单：
  </p>
  <pre class="graf graf--pre"><code>sudo pip install -r requirements.txt</code></pre>
  <p class="graf graf--p">
   正如 pip 与 Python 2.7 一样，pip3 也与 Python 3 结合在一起。因此，如果程序说使用 pip3 安装需求，那就键入：
  </p>
  <pre class="graf graf--pre"><code>sudo pip3 install -r requirements.txt</code></pre>
  <p class="graf graf--p">
   关于 pip3 的另一个好处是它允许你用一个简单的命令安装一堆 Python 程序。这比从 GitHub 构建软件更清晰、更容易。稍后介绍如何以这种方式安装 Twint。
  </p>
  <p class="graf graf--p">
   因此，
   <strong class="markup--strong markup--p-strong">
    为了获得最佳实践，请使用以下准则
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   1、如果您可以选择直接使用 pip 进行安装（例如 h8mail 或 Twint），那就请使用 pip；
  </p>
  <p class="graf graf--p">
   2、如果不能，请使用 git；
  </p>
  <p class="graf graf--p">
   3、如果程序使用 Python 2.7，只需在控制台中使用 python 和 pip；
  </p>
  <p class="graf graf--p">
   4、如果程序使用 Python 3（即大多数）在控制台中使用 python3 和 pip3；
  </p>
  <p class="graf graf--p">
   5、大多数教程通常假设您以 root 用户身份运行；但在这个版本中，总是需要将 sudo 放在任何 pip 或 pip3 命令之前。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    安装 theHarvester
   </strong>
  </p>
  <p class="graf graf--p">
   依旧建议您尝试，而不仅仅是阅读，试着做一下就会印象非常深刻。
  </p>
  <p class="graf graf--p">
   下面将演示如何安装 Harvester。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    theHarvester是一个成熟的工具，社交工程神器
   </strong>
   ，它通过搜索引擎、PGP 服务器以及 SHODAN 数据库收集用户的 email，子域名，主机，雇员名，开放端口和 banner 等信息。
  </p>
  <p class="graf graf--p">
   theHarvester Github 页面可以在这里找到：
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/laramies/theHarvester" href="https://github.com/laramies/theHarvester" rel="nofollow noopener noreferrer" target="_blank">
    https://github.com/laramies/theHarvester
   </a>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    此 URL 很重要
   </strong>
   ，因此请从浏览器的导航栏中复制该 URL 并将其保留在剪贴板中。
  </p>
  <p class="graf graf--p">
   使用 Ctrl + Alt + T 打开终端并输入以下内容，您只需使用 Ctrl + Shift + V（而不仅仅是常规桌面上的 Ctrl + V）将您复制的 URL 粘贴到终端中：
  </p>
  <pre class="graf graf--pre"><code>git clone <a class="markup--anchor markup--pre-anchor" data-href="https://github.com/laramies/theHarvester" href="https://github.com/laramies/theHarvester" rel="noopener noreferrer" target="_blank">https://github.com/laramies/theHarvester</a></code></pre>
  <p class="graf graf--p">
   现在，git 将所有在 GitHub 上发布的文件直接克隆到主目录中名为 theHarvester 的文件夹中。 git 完成克隆后：
  </p>
  <pre class="graf graf--pre"><code>cd theHarvester</code></pre>
  <p class="graf graf--p">
   （注意终端区分大小写）
  </p>
  <p class="graf graf--p">
   cd 只是意味着“更改目录”。要列出目录的内容，只需输入：
  </p>
  <pre class="graf graf--pre"><code>ls</code></pre>
  <p class="graf graf--p">
   你会看到这样的画面：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6894 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6894" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-13.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   那里有一个名为 requirements.txt 的文件。
  </p>
  <p class="graf graf--p">
   在运行 Harvester 之前，需要使用 pip3 安装这些 Python 库。在控制台中输入以下内容：
  </p>
  <pre class="graf graf--pre"><code>sudo pip3 install -r requirements.txt</code></pre>
  <p class="graf graf--p">
   然后 Pip 将安装所需的额外软件：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6895 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6895" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-9.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   就是这么简单。现在一切都完成了！
  </p>
  <p class="graf graf--p">
   要运行 Harvester，请留在 Harvester 目录并输入：
  </p>
  <pre class="graf graf--pre"><code>python3 theHarvester.py -h</code></pre>
  <p class="graf graf--p">
   请注意，如果您键入了 python 而不是 python3，程序将无法运行，因为它需要较新版本的 Python。
  </p>
  <p class="graf graf--p">
   所有这个命令都在告诉 python3 运行一个名为 theHarvester.py 的脚本。
  </p>
  <p class="graf graf--p">
   末尾的 -h 标志告诉脚本打开程序的帮助指南。
  </p>
  <p class="graf graf--p">
   如果它正常工作你会看到这样的画面：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6896 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6896" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-8.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   解释如何使用 Harvester 超出了本文的范围，今后可以单独讲，它的确是个神器。
  </p>
  <p class="graf graf--p">
   这样就完成了 Harvester 的安装 —— 请记得可以对我们的 OSINT 构建设置进行定制，这将使得使用 Harvester 变得更加平滑。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    theHarvester 别名快捷方式
   </strong>
  </p>
  <p class="graf graf--p">
   在开始每个查询之前键入 “python3~ / theHarvester / theHarvester.py” 会让人觉得有点烦。
  </p>
  <p class="graf graf--p">
   幸运的是，在 Linux 中很容易DIY，因此可以创建一个别名快捷方式。这可以通过编辑控制所有终端设置的 .bashrc 文件来完成。
  </p>
  <p class="graf graf--p">
   再次按 Ctrl + Alt + T 打开终端，然后输入：
  </p>
  <pre class="graf graf--pre"><code>nano ~/.bashrc</code></pre>
  <p class="graf graf--p">
   Nano 只是终端的内置文本编辑器。这将打开需要编辑的 .bashrc 文件。打开时，滚动到底部并添加以下行：
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">#alias for theHarvester

alias theharvester='python3 ~/theHarvester/theHarvester.py'</code></pre>
  <p class="graf graf--p">
   使用 Ctrl + X 退出，并在提示询问您是否要保存更改时点 Y。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6897 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6897" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/Y.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在关闭终端，然后打开一个新终端，以使更改生效。
  </p>
  <p class="graf graf--p">
   现在输入：
  </p>
  <pre class="graf graf--pre"><code>theharvester -h</code></pre>
  <p class="graf graf--p">
   您也可以运行该命令直接启动查询，例如：
  </p>
  <pre class="graf graf--pre"><code>theharvester -d somerandomsite.org -b google -l 500</code></pre>
  <p class="graf graf--p">
   这是从 GitHub 安装 Python 程序的基本公式。在本文的其余部分将解释如何使用 pip 安装程序。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    用 Pip 安装 Twint
   </strong>
  </p>
  <p class="graf graf--p">
   Pip 使安装包更容易，这里将展示它可以如何用来安装 Twint。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Twint 是一个非常灵活的 Twitter 刮刀
   </strong>
   。它从 Twitter 获取各种数据，并将其导出为各种格式，如 csv 或 SQL。
  </p>
  <p class="graf graf--p">
   Twint GitHub 页面的链接就在
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/twintproject/twint" href="https://github.com/twintproject/twint" rel="noopener noreferrer" target="_blank">
    这里
   </a>
   。
  </p>
  <p class="graf graf--p">
   请注意，与 Harvester 不同，Twint 可以使用 Git 或 Pip 安装（或者甚至使用 Python 虚拟环境，这不在本指南的范围内）。
  </p>
  <p class="graf graf--p">
   根据上面提到的经验法则，如果要在 Git 或 Pip 之间做出选择，请始终使用 Pip。
  </p>
  <p class="graf graf--p">
   在终端中复制并粘贴以下内容：
  </p>
  <pre class="graf graf--pre"><code>sudo pip3 install --upgrade -e git+https://github.com/twintproject/<a class="__cf_email__" data-cfemail="82f6f5ebecf6ace5ebf6c2edf0ebe5ebec" href="/cdn-cgi/l/email-protection">[email protected]</a>/master#egg=twint</code></pre>
  <p class="graf graf--p">
   记得在命令前加上 sudo，否则你将无法运行它。一旦完成，只需输入：
  </p>
  <pre class="graf graf--pre"><code>twint -h</code></pre>
  <p class="graf graf--p">
   你会看到程序安装正确！甚至不需要创建别名，因为 Pip 在安装过程中会自动执行此操作。
  </p>
  <p class="graf graf--p">
   示例用法是：
  </p>
  <pre class="graf graf--pre"><code>twint -u nixintel -o nixinteltweets.csv --csv</code></pre>
  <p class="graf graf--p">
   这将从 Twitter 帐户中删除所有推文并将其保存到 csv 文件以供进一步分析。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    安装其他 Python OSINT 程序
   </strong>
  </p>
  <p class="graf graf--p">
   本指南已经展示了如何设置自定义 OSINT 机器，以便使用 Git 或直接使用 Pip 来安装程序。
  </p>
  <p class="graf graf--p">
   接下来将介绍一些其他有用的 OSINT 工具，它们的作用，安装它们的必要命令以及 .bashrc 文件中创建别名所需的条目。
  </p>
  <p class="graf graf--p">
   出于本文的目的，我已经在我的 DIY-Buscador VM 中安装了所有这些程序，因此我保证所有这些方法目前都可以使用。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Instalooter
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6898 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6898" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-7.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    GitHub Page
   </strong>
   :
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/althonos/InstaLooter" href="https://github.com/althonos/InstaLooter" rel="noopener noreferrer" target="_blank">
    https://github.com/althonos/InstaLooter
   </a>
  </p>
  <p class="graf graf--p">
   从指定的 Instagram 帐户中抓取内容。需要IG登录但没有API密钥。
  </p>
  <p class="graf graf--p">
   Git or Pip? ：Pip
  </p>
  <p class="graf graf--p">
   控制台命令：
  </p>
  <pre class="graf graf--pre"><code>sudo pip3 install instaLooter (note upper-case L)</code></pre>
  <p class="graf graf--p">
   使用：
  </p>
  <pre class="graf graf--pre"><code>instalooter -h (note lower case L)</code></pre>
  <p class="graf graf--p">
   Alias: 默认情况下自动安装
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    H8mail 2.0
   </strong>
  </p>
  <p class="graf graf--p">
   <p>
    <img alt="" class="aligncenter size-full wp-image-6900 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-6900" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2.0.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
    </noscript>
   </p>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     GitHub Page
    </strong>
    :
    <a class="markup--anchor markup--p-anchor" data-href="https://github.com/khast3x/h8mail" href="https://github.com/khast3x/h8mail" rel="noopener noreferrer" target="_blank">
     https://github.com/khast3x/h8mail
    </a>
   </p>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     PyPi Page
    </strong>
    :
    <a class="markup--anchor markup--p-anchor" data-href="https://pypi.org/project/h8mail/" href="https://pypi.org/project/h8mail/" rel="noopener noreferrer" target="_blank">
     https://pypi.org/project/h8mail/
    </a>
   </p>
   <p class="graf graf--p">
    H8mail 是一种用于在违规检查或侦察服务中查找密码的开箱即用解决方案。
   </p>
   <p class="graf graf--p">
    无论您是OSINT工具的新手还是高级用户，您都会发现使用它的价值。
   </p>
   <p class="graf graf--p">
    在大规模数据收集方面，数据集越大就越强大，分析的机会就越多。
   </p>
   <p class="graf graf--p">
    h8mail 能够从.txt读取，输出到.csv，并使用其输出重新定位，使您能够大规模增加数据库和OSINT功能。
   </p>
   <p class="graf graf--p">
    Git or Pip: Pip
   </p>
   <p class="graf graf--p">
    控制台命令：
   </p>
   <pre class="graf graf--pre"><code>sudo pip3 install h8mail</code></pre>
   <p class="graf graf--p">
    使用：
   </p>
   <pre class="graf graf--pre"><code>h8mail -h</code></pre>
   <p class="graf graf--p">
    Alias: 默认
   </p>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     Photon
    </strong>
   </p>
   <p class="graf graf--p">
    <img alt="" class="aligncenter size-full wp-image-6901 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-6901" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-7.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
    </noscript>
   </p>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     GitHub page
    </strong>
    :
    <a class="markup--anchor markup--p-anchor" data-href="https://github.com/s0md3v/Photon" href="https://github.com/s0md3v/Photon" rel="noopener noreferrer" target="_blank">
     https://github.com/s0md3v/Photon
    </a>
   </p>
   <p class="graf graf--p">
    我们介绍过 Photon 它是一个高效的OSINT爬虫。可以提取网址、电子邮件、文件、网站帐户等。
   </p>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     Git or Pip:
    </strong>
    Git
   </p>
   <p class="graf graf--p">
    控制台命令：
   </p>
   <pre class="graf graf--pre"><code class="markup--code markup--pre-code">git clone https://github.com/s0md3v/Photon

cd Photon

sudo pip install -r requirements.txt

python3 photon.py -h</code></pre>
   <p class="graf graf--p">
    Alias:
   </p>
   <pre class="graf graf--pre"><code>alias photon='python3 ~/Photon/photon.py'</code></pre>
   <p class="graf graf--p">
    <strong class="markup--strong markup--p-strong">
     Sherlock
    </strong>
   </p>
   <p class="graf graf--p">
    <p>
     <img alt="" class="aligncenter size-full wp-image-6903 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-6903" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=944%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?w=944&amp;ssl=1 944w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=300%2C296&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/sher.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
     </noscript>
    </p>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      GitHub Page
     </strong>
     :
     <a class="markup--anchor markup--p-anchor" data-href="https://github.com/sherlock-project/sherlock" href="https://github.com/sherlock-project/sherlock" rel="noopener noreferrer" target="_blank">
      https://github.com/sherlock-project/sherlock
     </a>
    </p>
    <p class="graf graf--p">
     Sherlock 是一个快速的用户名搜索器。也是非常好用的调查工具。
    </p>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      Git or Pip?
     </strong>
     Git
    </p>
    <p class="graf graf--p">
     控制台命令：
    </p>
    <pre class="graf graf--pre">git clone <a class="markup--anchor markup--pre-anchor" data-href="https://github.com/sherlock-project/sherlock" href="https://github.com/sherlock-project/sherlock" rel="nofollow noopener noreferrer" target="_blank">https://github.com/sherlock-project/sherlock</a></pre>
    <pre class="graf graf--pre"><code>cd sherlock</code> <code>sudo pip3 install -r requirements.txt</code> <code>python3 sherlock.py -h</code> <strong class="markup--strong markup--pre-strong">Alias:</strong><code> alias sherlock='python3 ~/sherlock/sherlock.py'</code></pre>
    <p class="graf graf--p">
     使用：
    </p>
    <pre class="graf graf--pre"><code>sherlock nixintel</code></pre>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      Gasmask
     </strong>
    </p>
    <p class="graf graf--p">
     <img alt="" class="aligncenter size-full wp-image-6904 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-6904" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-4.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
     </noscript>
    </p>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      GitHub Page
     </strong>
     :
     <a class="markup--anchor markup--p-anchor" data-href="https://github.com/twelvesec/gasmask" href="https://github.com/twelvesec/gasmask" rel="noopener noreferrer" target="_blank">
      https://github.com/twelvesec/gasmask
     </a>
    </p>
    <p class="graf graf--p">
     也是一种类似于 Photon 或 Harvester 的自动侦察工具。请注意，此程序使用Python 2.7运行。
    </p>
    <p class="graf graf--p">
     Git or Pip? ：Git
    </p>
    <p class="graf graf--p">
     控制台命令：
    </p>
    <pre class="graf graf--pre"><code class="markup--code markup--pre-code">git clone https://github.com/twelvesec/gasmask

cd gasmask

sudo pip install -r requirement.txt

python gasmask.py -h</code></pre>
    <p class="graf graf--p">
     Alias:
    </p>
    <pre class="graf graf--pre"><code>alias gasmask='python ~/gasmask/gasmask.py'</code></pre>
    <p class="graf graf--p">
     使用：
    </p>
    <pre class="graf graf--pre"><code>gasmask -h</code></pre>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      Sublist3r
     </strong>
    </p>
    <p class="graf graf--p">
     <img alt="" class="aligncenter size-full wp-image-6905 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-6905" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=944%2C931&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?w=944&amp;ssl=1 944w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=300%2C296&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-3.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
     </noscript>
    </p>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      GitHub page:
     </strong>
     <a class="markup--anchor markup--p-anchor" data-href="https://github.com/aboul3la/Sublist3r" href="https://github.com/aboul3la/Sublist3r" rel="noopener noreferrer" target="_blank">
      https://github.com/aboul3la/Sublist3r
     </a>
    </p>
    <p class="graf graf--p">
     这是一种子域名快速枚举工具，其设计原理是基于通过使用搜索引擎，从而对站点子域名进行列举。
    </p>
    <p class="graf graf--p">
     必要时可以暴力破解。
    </p>
    <p class="graf graf--p">
     Git or Pip? ：Git
    </p>
    <p class="graf graf--p">
     控制台命令：
    </p>
    <pre class="graf graf--pre"><code class="markup--code markup--pre-code">git clone https://github.com/aboul3la/Sublist3r

cd Sublist3r

sudo pip3 install -r requirements.txt

python3 sublist3r.py -h</code></pre>
    <p class="graf graf--p">
     Alias
     <strong class="markup--strong markup--p-strong">
      :
     </strong>
    </p>
    <pre class="graf graf--pre"><code>alias sublister='python3 ~/Sublist3r/sublist3r.py'</code></pre>
    <p class="graf graf--p">
     使用：
    </p>
    <pre class="graf graf--pre"><code>sublister -h</code></pre>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      PhoneInfoga
     </strong>
    </p>
    <p class="graf graf--p">
     <img alt="" class="aligncenter size-full wp-image-6906 jetpack-lazy-image" data-lazy-sizes="(max-width: 944px) 100vw, 944px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=944%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=768%2C757&amp;ssl=1 768w" data-recalc-dims="1" height="931" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=944%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="944"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-6906" data-recalc-dims="1" height="931" sizes="(max-width: 944px) 100vw, 944px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=944%2C931&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?w=944&amp;ssl=1 944w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=300%2C296&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10-3.png?resize=768%2C757&amp;ssl=1 768w" width="944"/>
     </noscript>
    </p>
    <p class="graf graf--p">
     GitHub page:
     <a class="markup--anchor markup--p-anchor" data-href="https://github.com/sundowndev/PhoneInfoga/" href="https://github.com/sundowndev/PhoneInfoga/" rel="nofollow noopener noreferrer" target="_blank">
      https://github.com/sundowndev/PhoneInfoga/
     </a>
    </p>
    <p class="graf graf--p">
     这是一种
     <strong class="markup--strong markup--p-strong">
      针对手机号的开源情报收集工具
     </strong>
     。该工具可以抓取数十个资源在目标电话号码上进行 OSINT。准确性很高。
    </p>
    <ul class="postList">
     <li class="graf graf--li">
      检查电话号码是否存在且是否可行
     </li>
     <li class="graf graf--li">
      收集国家/地区，线路类型和运营商等标准信息
     </li>
     <li class="graf graf--li">
      OSINT足迹使用外部 API，Google Hacking，电话簿和搜索引擎
     </li>
     <li class="graf graf--li">
      检查声誉报告、社交媒体、一次性号码等
     </li>
     <li class="graf graf--li">
      一次扫描多个号码
     </li>
     <li class="graf graf--li">
      使用自定义格式进行更有效的OSINT侦察
     </li>
    </ul>
    <p class="graf graf--p">
     Git or Pip? ：Git
    </p>
    <p class="graf graf--p">
     控制台命令：
    </p>
    <pre class="graf graf--pre"><code class="markup--code markup--pre-code">git clone https://github.com/sundowndev/PhoneInfoga

cd PhoneInfoga

sudo pip3 install -r requirements.txt

python3 phoneinfoga.py -h</code></pre>
    <p class="graf graf--p">
     <strong class="markup--strong markup--p-strong">
      Alias:
     </strong>
     <code>
      alias='python3 ~/PhoneInfoga/phoneinfoga.py'
     </code>
    </p>
    <p class="graf graf--p">
     使用：phoneinfoga -h
    </p>
    <p class="graf graf--p">
     好了，如上，这就是构建您自己的自定义 OSINT Linux 机器指南。
    </p>
    <p class="graf graf--p">
     如果您之前没有 Linux 经验也没有安装并运行过这些程序，这些简易的方法将很有帮助，它们可以用来做一些非常强大的事。
    </p>
    <p class="graf graf--p">
     当然可以使用相同的方法来安装其他基于 GitHub 的工具，如 Skiptracer，Knock，Cloudflair 等等。
    </p>
    <p class="graf graf--p">
     本指南及其前面的指南应该清楚地表明创建自己的自定义 OSINT VM 有多么简单。
    </p>
    <p class="graf graf--p">
     在下一篇文章中将解释如何克隆和备份您的 OSINT VM，以防它中断、如何将其传输到另一台计算机上、以及如何在需要时对其进行哈希处理。之后我还会为 Firefox 和 Chrome 推荐一些有用的OSINT插件。
    </p>
    <p class="graf graf--p">
     下次见！⚪️
    </p>
    <div id="atatags-1611829871-5f3edce5dfdde">
    </div>
    <div class="sharedaddy sd-sharing-enabled">
     <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
      <h3 class="sd-title">
       共享此文章：
      </h3>
      <div class="sd-content">
       <ul>
        <li class="share-twitter">
         <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6890" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e5%9b%9b%e9%83%a8%e5%88%86%ef%bc%89/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
          <span>
          </span>
          <span class="sharing-screen-reader-text">
           点击以在 Twitter 上共享（在新窗口中打开）
          </span>
         </a>
        </li>
        <li class="share-facebook">
         <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6890" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e5%9b%9b%e9%83%a8%e5%88%86%ef%bc%89/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-6890-5f3edce5e0f70" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=6890&amp;origin=www.iyouport.org&amp;obj_id=161182987-6890-5f3edce5e0f70" id="like-post-wrapper-161182987-6890-5f3edce5e0f70">
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
   </p>
  </p>
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
    <a href="https://www.iyouport.org/tag/diy/" rel="tag">
     DIY
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/investigation/" rel="tag">
     Investigation
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/linux/" rel="tag">
     Linux
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
   <time class="entry-date published" datetime="2019-11-13T00:04:41+08:00">
    2019年11月13日
   </time>
   <time class="updated" datetime="2019-07-21T13:22:36+08:00">
    2019年7月21日
   </time>
  </div>
 </div>
</article>

