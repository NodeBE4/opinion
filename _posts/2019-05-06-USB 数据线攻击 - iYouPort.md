---
layout: post
title: "USB 数据线攻击 - iYouPort"
date: 2019-05-06T16:04:29+00:00
author: iYouPort
from: https://www.iyouport.org/usb-%e6%95%b0%e6%8d%ae%e7%ba%bf%e6%94%bb%e5%87%bb/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-641 post type-post status-publish format-standard has-post-thumbnail hentry category-newsletters category-54 tag-security tag-technology tag-threat-intelligence" id="post-641">
 <header class="entry-header">
  <h1 class="entry-title">
   USB 数据线攻击
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-05-07T00:04:29+08:00">
    2019年5月7日
   </time>
   <time class="updated" datetime="2019-05-07T00:18:29+08:00">
    2019年5月7日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <strong>
      <em>
       一个插入计算机的USB 数据线就可以让攻击者通过WiFi来执行命令，就像使用计算机键盘一样 😨这是怎么做到的？
      </em>
     </strong>
    </span>
   </li>
  </ul>
  <p class="graf graf--p">
   将 USB 线插入PC可能看起来再普通不过了。但是，目前这已经是一直骇客攻击的方法。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    一个插入计算机的最新攻击型 USB 数据线可以让攻击者通过WiFi来执行命令，就像使用计算机键盘一样
   </strong>
   。
  </p>
  <p class="graf graf--p">
   当这种特殊的 USB 数据线连接到 Linux、Mac 或 Windows 计算机时，操作系统会将其视为人机交互设备中的输入设备，它们可以像键盘一样给计算机发布命令。
  </p>
  <p class="graf graf--p">
   这种USB数据线由安全研究员 Mike Grover 制造，其推特名为 MG，上面集成了一个 WiFi 的电路板。攻击者可借此远程连接到USB数据线，然后在计算机上执行命令或操作鼠标。
  </p>
  <p class="graf graf--p">
   在 Grover 的演示视频中，你可以看到研究人员只要将USB数据线插入计算机，就能够远程连接到计算机，并通过手机上的应用程序发出命令。
  </p>
  <p class="graf graf--p">
   在这里看到视频：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="350" src="//player.vimeo.com/video/317931734?title=0&amp;byline=0&amp;portrait=0&amp;color=8dc7dc" width="425">
   </iframe>
  </p>
  <p class="graf graf--p">
   在一次 BleepingComputer 的采访中，Grover 解释说，当USB数据线插上后，就像插上了一个键盘或一个鼠标。这意味着无论计算机是否被锁定，攻击者都可以输入命令。更可怕的是，如果计算机设置了定时锁屏，则可以通过一定的配置，使得USB数据线定时操控计算机，让其一直保持激活状态。
  </p>
  <p class="graf graf--p">
   Grover 还告诉 BleepingComputer，USB数据线中的WiFi芯片可以预先配置为攻击者连接到WiFi网络后自动返回 shell。这就使远程攻击者在USB数据线拔下后依然能够控制服务器。
  </p>
  <p class="graf graf--p">
   根据 Grover 的博客文章，这种 USB 数据线专属的用来发送命令的app正在合作开发中。开发人员希还望将 ESPloitV2 移植到 USB 数据线中。
  </p>
  <p class="graf graf--p">
   Grover 最后告诉 BleepingComputer，虽然使用USB安全套可以阻止人机交互设备的攻击，但它仍然进行WiFi身份验证攻击。
  </p>
  <p class="graf graf--p">
   WiFi deauth 攻击可以利用虚假的 MAC 地址发送 deauthentication 数据帧来断开附近无线设备与接入点的连接。
  </p>
  <p class="graf graf--p">
   Grover设想，deauth 攻击可以在攻击者虽已插入USB数据线，但无法远程连接的情况下进行。攻击者也许可以借此让目标进行物理转移，看看会不会产生新的攻击机会。
  </p>
  <p class="graf graf--p">
   Grover 假设了以下场景，“你虽然不在WiFi的接入范围内，但目标人物在。使用此USB数据线，你可以让目标在一定区域内携带黑客USB数据线进行移动。可能只是针对某种相机，也可能只是一次小小突袭。想象一下，一个办公室里的IT设备突然全部断网。
  </p>
  <p class="graf graf--p">
   这种USB数据线目前并不出售，但 Grover 希望在未来能将其出售给其他安全研究人员。
  </p>
  <p class="graf graf--p">
   Grover 告诉 BleepingComputer，他花了大约4000美元以及300多小时来研究所需的WiFi模块并将其添加到USB数据线中。这一切都是通过使用较为初级工作台来完成的，而这通常不适用于在 DIY 环境中创建高质量的电路板。
  </p>
  <p class="graf graf--p">
   因此，许多用户对 Grover’s电路板的质量感到惊讶，连电路板工作台的制造商 Bantam 也想了解 Grover 是如何做到的。
  </p>
  <p class="graf graf--p graf--hasDropCapModel graf--hasDropCap">
   <span class="graf-dropCap">
    E
   </span>
   <a class="markup--anchor markup--p-anchor" data-href="https://in.pcmag.com/news/128571/evil-usb-cable-can-remotely-accept-commands-from-hacker" href="https://in.pcmag.com/news/128571/evil-usb-cable-can-remotely-accept-commands-from-hacker" rel="noopener noreferrer" target="_blank">
    vil USB Cable Can Remotely Accept Commands From Hacker.
   </a>
   The cable itself looks pretty generic, but the security researcher Mike Grover actually fitted a Wi-Fi chip inside one of the sockets, which can be used to remotely send commands to the connected PC.
  </p>
  <p>
   <span style="color: #993366;">
    <em>
     <strong>
      与大多数内容网站不同，IYP 没有付费墙、不会投放广告、也不会出卖您的信息；我们需要您的支持来获得生存。如果您觉得我们提供的内容对您有用，您可以帮助我们活下去。谢谢！PayPal 和 比特币捐助通道已开通，您可以在网页上找到两个浅橙色按钮
     </strong>
    </em>
   </span>
  </p>
  <div id="atatags-1611829871-5f3db1e2eeb5d">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-641" href="https://www.iyouport.org/usb-%e6%95%b0%e6%8d%ae%e7%ba%bf%e6%94%bb%e5%87%bb/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-641" href="https://www.iyouport.org/usb-%e6%95%b0%e6%8d%ae%e7%ba%bf%e6%94%bb%e5%87%bb/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/threat-intelligence/" rel="tag">
     Threat intelligence
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-05-07T00:04:29+08:00">
    2019年5月7日
   </time>
   <time class="updated" datetime="2019-05-07T00:18:29+08:00">
    2019年5月7日
   </time>
  </div>
 </div>
</article>

