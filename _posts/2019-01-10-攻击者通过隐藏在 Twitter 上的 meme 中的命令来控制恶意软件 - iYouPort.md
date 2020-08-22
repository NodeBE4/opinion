---
layout: post
title: "攻击者通过隐藏在 Twitter 上的 meme 中的命令来控制恶意软件 - iYouPort"
date: 2019-01-10T07:13:55+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%94%bb%e5%87%bb%e8%80%85%e9%80%9a%e8%bf%87%e9%9a%90%e8%97%8f%e5%9c%a8-twitter-%e4%b8%8a%e7%9a%84-meme-%e4%b8%ad%e7%9a%84%e5%91%bd%e4%bb%a4%e6%9d%a5%e6%8e%a7%e5%88%b6%e6%81%b6%e6%84%8f%e8%bd%af/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7823 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-289 category-54 tag-attacks tag-meme tag-security tag-technology tag-twitter" id="post-7823">
 <header class="entry-header">
  <h1 class="entry-title">
   攻击者通过隐藏在 Twitter 上的 meme 中的命令来控制恶意软件
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/newsletters/" rel="category tag">
    Newsletters
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
   <time class="entry-date published" datetime="2019-01-10T15:13:55+08:00">
    2019年1月10日
   </time>
   <time class="updated" datetime="2019-08-10T15:16:04+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   <span style="color: #515151;">
    Trend Micro 的安全研究人员近期发现了一种新的恶意软件，它会从攻击者控制的 Twitter 账户上所发布的 meme 中检索黑客所发布的命令。这种命令下发方式加大了恶意软件相关的流量的检测难度，因为在这种情况下，这些恶意软件流量看起来是合法的 Twitter 流量。
   </span>
  </p>
  <p>
   使用合法的 Web 服务来控制恶意软件并不是头一回，过去的也曾有黑客使用合法的网络服务，例如 Gmail、DropBox、PasteBin 以及 Twitter 来控制恶意软件。
  </p>
  <p>
   而此次，Trend Micro 发现黑客利用了隐写术将发送给恶意软件的命令隐藏在 Twitter 上的 meme 中。
  </p>
  <p>
   “这种新的安全威胁（标记为 TROJAN.MSIL.BERBOMTHUM.AA）是值得人们关注，因为恶意软件是通过合法的服务（流行的社交网络平台）接收的命令的，黑客往帐号上传了一个看起来无害但包含恶意代码的 meme，除非封禁这个恶意帐户，否则它就一直生效。”Trend Micro 发布的报告说道。
  </p>
  <p>
   “截至2018年12月13日，Twitter已经下线这个帐户。”
  </p>
  <p>
   攻击者将“/print”命令隐藏在 memes 中，该命令是让恶意软件截取受控制的机器的截图，并将其发送回 C&amp;C 服务器，服务器的地址是通过http://pastebin.com网站上的一个硬编码 URL 获得的。
  </p>
  <p>
   BERBOMTHUM 恶意软件会下载攻击者指定的 Twitter 帐户的内容，扫描 meme 文件，并提取其中包含的命令。
  </p>
  <p>
   这个黑客使用的 Twitter 账户创建于2017年，分别在10月25日和26日发布了两个 meme，用于向恶意软件传递“/print”命令。
  </p>
  <p>
  </p>
 </div>
</article>
