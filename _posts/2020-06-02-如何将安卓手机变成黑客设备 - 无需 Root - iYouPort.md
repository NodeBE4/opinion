---
layout: post
title: "如何将安卓手机变成黑客设备 - 无需 Root - iYouPort"
date: 2020-06-02T16:04:23+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86%e5%ae%89%e5%8d%93%e6%89%8b%e6%9c%ba%e5%8f%98%e6%88%90%e9%bb%91%e5%ae%a2%e8%ae%be%e5%a4%87-%e6%97%a0%e9%9c%80-root/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-11891 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-67 tag-android tag-hacktivist tag-technique tag-technology tag-tools tag-userland" id="post-11891">
 <header class="entry-header">
  <h1 class="entry-title">
   如何将安卓手机变成黑客设备 — 无需 Root
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
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-06-03T00:04:23+08:00">
    2020年6月3日
   </time>
   <time class="updated" datetime="2019-12-31T15:10:58+08:00">
    2019年12月31日
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
       没有树莓派？不要急，你的安卓就可以
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-11892 jetpack-lazy-image" data-lazy-sizes="(max-width: 668px) 100vw, 668px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?resize=668%2C1002&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?w=668&amp;ssl=1 668w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?resize=200%2C300&amp;ssl=1 200w" data-recalc-dims="1" height="1002" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?resize=668%2C1002&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="668"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11892" data-recalc-dims="1" height="1002" sizes="(max-width: 668px) 100vw, 668px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?resize=668%2C1002&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?w=668&amp;ssl=1 668w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/hacking.jpeg?resize=200%2C300&amp;ssl=1 200w" width="668"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   只需轻按几下，即可将 Android 手机武器化为隐蔽的黑客设备，该设备可以运行
   <a class="markup--anchor markup--p-anchor" data-href="https://null-byte.wonderhowto.com/how-to/easily-detect-cves-with-nmap-scripts-0181925/" href="https://null-byte.wonderhowto.com/how-to/easily-detect-cves-with-nmap-scripts-0181925/" rel="noopener noreferrer" target="_blank">
    Nmap
   </a>
   、
   <a class="markup--anchor markup--p-anchor" data-href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-find-vulnerabilities-for-any-website-using-nikto-0151729/" href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-find-vulnerabilities-for-any-website-using-nikto-0151729/" rel="noopener noreferrer" target="_blank">
    Nikto
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-use-netcat-swiss-army-knife-hacking-tools-0148657/" href="https://null-byte.wonderhowto.com/how-to/hack-like-pro-use-netcat-swiss-army-knife-hacking-tools-0148657/" rel="noopener noreferrer" target="_blank">
    Netcat 之类的工具
   </a>
   —— 做到所有这些而无需Root。
  </p>
  <p class="graf graf--p">
   由 UserLAnd Technologies 创建的
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/CypherpunkArmory/UserLAnd" href="https://github.com/CypherpunkArmory/UserLAnd" rel="noopener noreferrer" target="_blank">
    UserLAnd
   </a>
   是一个完全免费的 Android 应用程序，它使安装 Linux 发行版变得快捷而轻松，无需 Root。
  </p>
  <p class="graf graf--p">
   这样就可以在当前的 Android OS 旁边运行
   <a class="markup--anchor markup--p-anchor" data-href="https://wiki.debian.org/Arm64Port" href="https://wiki.debian.org/Arm64Port" rel="noopener noreferrer" target="_blank">
    ARM64 Debian
   </a>
   操作系统。
  </p>
  <p class="graf graf--p">
   这种 ARM 架构有时也称为 “AARCH64”，与 Kali Linux Raspberry Pi ARM 映像所使用的架构相同，这使得导入 Kali 的工具库很容易。
  </p>
  <p class="graf graf--p">
   最重要的是，UserLAnd 团队添加了一个专用的 Kali 文件系统，因此，并非所有用户都需要导入存储库。
  </p>
  <p class="graf graf--p">
   所有创建的文件系统都很容易使用。尽管许多 Kali 工具可以正常工作，但 UserLAnd 仍然是一个新项目，在执行某些命令时可能会导致某些工具（例如 Nmap）损坏或失败。值得一提的是，这些问题可能会在不久的将来得到解决。
  </p>
  <p class="graf graf--p">
   UserLAnd 利用自定义脚本和可执行文件允许创建 Debian 和 Ubuntu 文件系统。其中一个例子是
   <a class="markup--anchor markup--p-anchor" data-href="https://proot-me.github.io/" href="https://proot-me.github.io/" rel="noopener noreferrer" target="_blank">
    PRoot
   </a>
   ，这是一种
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/proot-me/PRoot" href="https://github.com/proot-me/PRoot" rel="noopener noreferrer" target="_blank">
    开源软件
   </a>
   ，可实现类似于
   <a class="markup--anchor markup--p-anchor" data-href="https://www.computerhope.com/jargon/c/chroot.htm" href="https://www.computerhope.com/jargon/c/chroot.htm" rel="noopener noreferrer" target="_blank">
    chroot
   </a>
   的功能。
  </p>
  <p class="graf graf--p">
   PRoot 允许您使用备用根目录执行程序，而无需 Root。通常，
   <a class="markup--anchor markup--p-anchor" data-href="https://unix.stackexchange.com/questions/87625/what-is-difference-between-user-space-and-kernel-space" href="https://unix.stackexchange.com/questions/87625/what-is-difference-between-user-space-and-kernel-space" rel="noopener noreferrer" target="_blank">
    用户空间
   </a>
   应用程序将通过
   <a class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/System_call" href="https://en.wikipedia.org/wiki/System_call" rel="noopener noreferrer" target="_blank">
    系统调用
   </a>
   直接与内核通信。
  </p>
  <p class="graf graf--p">
   借助 UserLAnd，PRoot 在后台运行，解释这些系统调用，并且在必要时执行和操作它们，以模拟文件系统中的用户和权限。
  </p>
  <p class="graf graf--p">
   null-byte 的解释从安装SSH客户端开始，它将是与 Debian OS 进行交互的主要应用程序。然后逐步介绍一些操作系统设置技巧，并导入 Kali Linux 存储库，以将 Android 手机真正转变为黑客设备。
  </p>
  <p class="graf graf--p">
   如某些读者所知，Kali Linux 基于 Debian 操作系统，因此导入其存储库不会导致任何破坏或不可靠的情况。
  </p>
  <p class="graf graf--p">
   在下面看到他们的
   <strong>
    演示视频
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/zFo8okxBKDc" width="750">
   </iframe>
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第一步：安装 ConnectBot APP（可选）
   </strong>
  </h3>
  <p class="graf graf--p">
   UserLAnd 最近添加了内置的SSH功能，因此不再需要此步骤。但是，如果您愿意，仍可以使用第三方SSH客户端。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://connectbot.org/" href="https://connectbot.org/" rel="noopener noreferrer" target="_blank">
    ConnectBot
   </a>
   是专为 Android 智能手机设计的
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/connectbot" href="https://github.com/connectbot" rel="noopener noreferrer" target="_blank">
    开源
   </a>
   SSH客户端，可让您安全地与SSH服务器连接。
  </p>
  <p class="graf graf--p">
   这将是与新的 UserLAnd Debian 操作系统进行交互的主要方式。如果您不使用或无法访问 Google Play，则可以通过
   <a class="markup--anchor markup--p-anchor" data-href="https://f-droid.org/" href="https://f-droid.org/" rel="noopener noreferrer" target="_blank">
    F-Droid
   </a>
   存储库使用 ConnectBot。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     Play Store Link:
    </strong>
    <a class="markup--anchor markup--li-anchor" data-href="https://play.google.com/store/apps/details?id=org.connectbot" href="https://play.google.com/store/apps/details?id=org.connectbot" rel="nofollow noopener noreferrer" target="_blank">
     <strong class="markup--strong markup--li-strong">
      ConnectBot
     </strong>
    </a>
    <strong class="markup--strong markup--li-strong">
     (free)
    </strong>
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     F-Droid Link:
    </strong>
    <a class="markup--anchor markup--li-anchor" data-href="https://f-droid.org/packages/org.connectbot/" href="https://f-droid.org/packages/org.connectbot/" rel="nofollow noopener noreferrer" target="_blank">
     <strong class="markup--strong markup--li-strong">
      ConnectBot
     </strong>
    </a>
    <strong class="markup--strong markup--li-strong">
     (free)
    </strong>
   </li>
  </ul>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11893 jetpack-lazy-image" data-lazy-sizes="(max-width: 1080px) 100vw, 1080px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=1080%2C410&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?w=1080&amp;ssl=1 1080w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=300%2C114&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=1024%2C389&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=768%2C292&amp;ssl=1 768w" data-recalc-dims="1" height="410" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=1080%2C410&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1080"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11893" data-recalc-dims="1" height="410" sizes="(max-width: 1080px) 100vw, 1080px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=1080%2C410&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?w=1080&amp;ssl=1 1080w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=300%2C114&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=1024%2C389&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/12/1-10.jpg?resize=768%2C292&amp;ssl=1 768w" width="1080"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://play.google.com/store/apps/details?id=com.sonelli.juicessh&amp;hl=en_US" href="https://play.google.com/store/apps/details?id=com.sonelli.juicessh&amp;hl=en_US" rel="noopener noreferrer" target="_blank">
    JuiceSSH
   </a>
   也是替代 ConnectBot 的很好选择，因为它具有更多功能，因此您可以根据需要使用它。ConnectBot 定期更新，对于初学者来说更容易。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第二步：安装 UserLAnd App
   </strong>
  </h3>
  <p class="graf graf--p">
   上面已经介绍了 UserLAnd 的功能，因此这里不再赘述。重要的是您要安装它，使用 Google Play 或 F-Droid 进行安装。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     Play Store Link:
    </strong>
    <a class="markup--anchor markup--li-anchor" data-href="https://play.google.com/store/apps/details?id=tech.ula" href="https://play.google.com/store/apps/details?id=tech.ula" rel="nofollow noopener noreferrer" target="_blank">
     <strong class="markup--strong markup--li-strong">
      UserLAnd
     </strong>
    </a>
    <strong class="markup--strong markup--li-strong">
     (free)
    </strong>
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     F-Droid Link:
    </strong>
    <a class="markup--anchor markup--li-anchor" data-href="https://f-droid.org/packages/tech.ula/" href="https://f-droid.org/packages/tech.ula/" rel="nofollow noopener noreferrer" target="_blank">
     <strong class="markup--strong markup--li-strong">
      UserLAnd
     </strong>
    </a>
    <strong class="markup--strong markup--li-strong">
     (free)
    </strong>
   </li>
  </ul>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11894 jetpack-lazy-image" data-lazy-sizes="(max-width: 1080px) 100vw, 1080px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=1080%2C416&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?w=1080&amp;ssl=1 1080w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=300%2C116&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=1024%2C394&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=768%2C296&amp;ssl=1 768w" data-recalc-dims="1" height="416" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=1080%2C416&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1080"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11894" data-recalc-dims="1" height="416" sizes="(max-width: 1080px) 100vw, 1080px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=1080%2C416&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?w=1080&amp;ssl=1 1080w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=300%2C116&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=1024%2C394&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/2-10.jpg?resize=768%2C296&amp;ssl=1 768w" width="1080"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   免责声明：UserLAnd 确实有局限性。如果没有 root，Android 的 Wi-Fi 界面将无法切换为监控模式，因此传统的 Wi-Fi 黑客工具（如 Aircrack-ng）将无法使用。
  </p>
  <p class="graf graf--p">
   但是，使用 UserLAnd 仍然可以完成很多工作，在不 Root 或擦除 Android OS 的情况下运行 Kali 绝非易事。
  </p>
  <p class="graf graf--p">
   因此，您值得在 Google Play 上给 UserLAnd 应用程序一个良好的评分，开发者应该得到这样积极的反馈。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第三步：创建一个新的文件系统
   </strong>
  </h3>
  <p class="graf graf--p">
   安装完成后，打开 UserLAnd，然后查看 “Apps” 选项卡。刷新选项卡，然后等待几分钟以填充分发。
  </p>
  <p class="graf graf--p">
   Kali Linux OS 最近已添加到可用发行版列表中。选择 “Kali” 或 “Debian”，UserLAnd 应用程序将提示输入凭据。
  </p>
  <p class="graf graf--p">
   创建用户名、密码和VNC密码。文件系统安装完成后，该“密码”将允许您访问在文件系统准备安装时启动的SSH服务器。
  </p>
  <p class="graf graf--p">
   本教程中将不会使用 “VNC密码”。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11895 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1100%2C927&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?w=1196&amp;ssl=1 1196w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=300%2C253&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1024%2C863&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=768%2C647&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1100%2C927&amp;ssl=1 1100w" data-recalc-dims="1" height="927" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1100%2C927&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11895" data-recalc-dims="1" height="927" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1100%2C927&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?w=1196&amp;ssl=1 1196w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=300%2C253&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1024%2C863&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=768%2C647&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/3-17.png?resize=1100%2C927&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   然后，UserLAnd 将从其 GitHub 存档下载用于创建文件系统的必要可执行文件和脚本。下载和提取所需东西的时间将取决于您的 Android CPU 和互联网连接的速度。
  </p>
  <p class="graf graf--p">
   在某些测试中，安装过程最多需要20分钟才能完成，因此请耐心等待。
  </p>
  <p class="graf graf--p">
   在我的第一次尝试中，UserLAnd 返回了 “
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/CypherpunkArmory/UserLAnd/issues/369" href="https://github.com/CypherpunkArmory/UserLAnd/issues/369" rel="nofollow noopener noreferrer" target="_blank">
    Could not extract filesystem. Something went wrong
   </a>
   ” 这样的错误。在这种情况下删除并重新安装 UserLAnd 就可以解决问题。如果此错误仍然存​​在
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/CypherpunkArmory/UserLAnd/issues/" href="https://github.com/CypherpunkArmory/UserLAnd/issues/" rel="noopener noreferrer" target="_blank">
    ，请打开
   </a>
   一个新的 GitHub 问题。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第四步：与文件系统交互
   </strong>
  </h3>
  <p class="graf graf--p">
   安装完成后，转到 “会话” 选项卡，然后选择新创建的选项。
  </p>
  <p class="graf graf--p">
   UserLAnd 将自动尝试打开 ConnectBot 并询问“您确定要继续连接吗？”点击“是”，然后输入在上一步中创建的密码。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11896 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1100%2C931&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?w=1186&amp;ssl=1 1186w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1024%2C867&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=768%2C650&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1100%2C931&amp;ssl=1 1100w" data-recalc-dims="1" height="931" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1100%2C931&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11896" data-recalc-dims="1" height="931" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1100%2C931&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?w=1186&amp;ssl=1 1186w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=300%2C254&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1024%2C867&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=768%2C650&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/4-14.png?resize=1100%2C931&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   此时，将蓝牙键盘同步到手机可以使操作系统的设置更加容易，但这不是必需的。如果您不使用蓝牙键盘，建议您从Play商店安装
   <a class="markup--anchor markup--p-anchor" data-href="https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard" href="https://play.google.com/store/apps/details?id=org.pocketworkstation.pckeyboard" rel="noopener noreferrer" target="_blank">
    Hacker’s Keyboard
   </a>
   ，然后继续进行操作，您会了解原因的。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第五步：更新操作系统
   </strong>
  </h3>
  <p class="graf graf--p">
   在 Android 手机上安装新操作系统后，要做的第一件事就是确保该系统是最新版。
  </p>
  <p class="graf graf--p">
   这可以通过首先使用
   <strong class="markup--strong markup--p-strong">
    su
   </strong>
   创建根shell来完成。然后使用
   <strong class="markup--strong markup--p-strong">
    apt-get update &amp;&amp; apt-get dist-upgrade
   </strong>
   命令。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code"><a class="__cf_email__" data-cfemail="baded3c9ced5c8ced3d5d4fad6d5d9dbd6d2d5c9ce" href="/cdn-cgi/l/email-protection">[email protected]</a>:~$ su
<a class="__cf_email__" data-cfemail="44362b2b3004282b2725282c2b3730" href="/cdn-cgi/l/email-protection">[email protected]</a>: /home/distortion# apt-get update &amp;&amp; apt-get dist-upgrade
Ign:1 http://cdn-fastly.deb.debian.org/debian stable InRelease
Get:2 http://cdn-fastly.deb.debian.org/debian stable-updates InRelease [91.0 kB]
Hit:3 http://cdn-fastly.deb.debian.org/debian stable Release
Get:4 http://cdn-fastly.deb.debian.org/debian stable Release.gpg [2434 B]
Get:5 http://cdn-fastly.deb.debian.org/debian stable-updates/main arm64 Packages [5096 B]
Get:6 http://cdn-fastly.deb.debian.org/debian stable-updates/main Translation-en [4512 B]
Get:7 http://cdn-fastly.deb.debian.org/debian stable/main Translation-en [5393 B]
Get:8 http://cdn-fastly.deb.debian.org/debian stable/contrib arm64 Packages [29.9 kB]
Get:9 http://cdn-fastly.deb.debian.org/debian stable/contrib Translation-en [45.9 kB]
Get:10 http://cdn-fastly.deb.debian.org/debian stable/non-free arm64 Package [50.8 kB]
Get:11 http://cdn-fastly.deb.debian.org/debian stablenon-free Translation-en [80.6 kB]
Fetched 5714 kB in 31s (183 kB/s)
Reading package lists... Done
Reading package lists... Done
Building dependency tree... Done
Calculating upgrade... Done
The following packages will be upgraded:
  tzdata
1 upgraded, 0 newly intalled, 0 to remove and 0 not upgraded.
Need to get 270 kB of archives.
After this operation, 1024 B of additional disk space will be used.
Do you want to continue? [Y/n]</code></pre>
  <p class="graf graf--p">
   对于上面的输出，只有一个包需要更新，但并非总是如此。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第六步：安装基本软件
   </strong>
  </h3>
  <p class="graf graf--p">
   这个新的文件系统极其简单，默认情况下不包含太多软件。
  </p>
  <p class="graf graf--p">
   以下是为日常 Debian 和 Kali 用户推荐的一些软件包。其中某些软件包不是必需的，但可以使今后将Android用作主要黑客设备更加容易。
  </p>
  <p class="graf graf--p">
   1、
   <strong class="markup--strong markup--p-strong">
    screen
   </strong>
   — Screen 是一个终端多路复用器，允许用户同时运行并在多个终端会话之间交替。
  </p>
  <p class="graf graf--p">
   这是使用 UserLAnd 时要安装的最重要的软件包之一。 Android 手机无法很好地处理长时间SSH会话，并且可能会无缘无故地断开连接。这种问题可能导致正在运行的命令失败，无法重新连接到会话以查看进度。
  </p>
  <p class="graf graf--p">
   所以要使用 Screen 来维持持久的Shell会话。
  </p>
  <p class="graf graf--p">
   2、
   <strong class="markup--strong markup--p-strong">
    net-tools
   </strong>
   — Net-tools 是一套工具，包含 ifconfig、netstat、route 和其他一些有用的网络应用程序。
  </p>
  <p class="graf graf--p">
   3、
   <strong class="markup--strong markup--p-strong">
    netcat
   </strong>
   — Netcat 是功能丰富的 UNIX 实用程序，旨在成为创建TCP和UDP连接的可靠工具。Netcat 可用于创建简单的macOS后门并与之交互。
  </p>
  <p class="graf graf--p">
   4、
   <strong class="markup--strong markup--p-strong">
    neofetch
   </strong>
   — Neofetch 是一种跨平台的系统信息收集工具。除了帮您向同事和朋友炫耀分发内容或为 WonderHowTo 创建封面照片外，此程序包没有其他功能。
  </p>
  <p class="graf graf--p">
   5、
   <strong class="markup--strong markup--p-strong">
    gnupg
   </strong>
   —
   <a class="markup--anchor markup--p-anchor" data-href="https://www.gnupg.org/" href="https://www.gnupg.org/" rel="nofollow noopener noreferrer" target="_blank">
    GnuPG
   </a>
   （有时称为 gpg）通常用于加密文件和保护电子邮件通信。一些安装程序脚本（例如 Metasploit）使用 gpg 来导入其软件签名密钥。
  </p>
  <p class="graf graf--p">
   可以在没有 gpg 的情况下手动安装 Metasploit，可能过程相对复杂。
  </p>
  <p class="graf graf--p">
   6、
   <strong class="markup--strong markup--p-strong">
    curl
   </strong>
   — cURL 是一种命令行工具，能够通过HTTP和其他流行协议下载文件。这是从Internet下载文件的有用工具。
  </p>
  <p class="graf graf--p">
   7、
   <strong class="markup--strong markup--p-strong">
    wget
   </strong>
   — 类似于 cURL，也是用于从Internet下载文件的命令行工具。一些开发人员更喜欢 wget 而不是 cURL，对于保持安装状态和可用性都很有帮助。
  </p>
  <p class="graf graf--p">
   8、
   <strong class="markup--strong markup--p-strong">
    git
   </strong>
   — Git 是一种流行的版本控制软件，通常用于克隆（下载）GitHub 项目。
  </p>
  <p class="graf graf--p">
   9、
   <strong class="markup--strong markup--p-strong">
    nano
   </strong>
   — Nano 是命令行文本编辑器，它可以使通过SSH编辑文件更加方便。如果首选 Vim 或 Emacs，则改为下载这些文本编辑器（或除nano外）。
  </p>
  <p class="graf graf--p">
   可以使用
   <strong class="markup--strong markup--p-strong">
    apt-get
   </strong>
   命令安装以上软件包：
  </p>
  <pre class="graf graf--pre"><code>apt-get update &amp;&amp; apt-get install net-tools netcat neofetch gnupg curl wget git nano screen</code></pre>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    第七步：导入 Kali Linux 存储库（视情况而定）
   </strong>
  </h3>
  <p class="graf graf--p">
   如果您在步骤3中安装了 Kali OS，则可以跳过此步骤。
  </p>
  <p class="graf graf--p">
   对于 Debian OS 用户，这不是必须的，但是，这样做可以快速安装诸如 sqlmap、Commix、Bettercap、Nikto、dnsmap 之类的应用程序，以及数百种在 Debian 的默认存储库中找不到的软件包。
  </p>
  <p class="graf graf--p">
   要开始导入 Kali Linux 存储库，请使用
   <strong class="markup--strong markup--p-strong">
    nano
   </strong>
   将 Kali 的存储库添加到 /etc/apt/sources.list 文件中。
  </p>
  <pre class="graf graf--pre"><code>nano /etc/apt/sources.list</code></pre>
  <p class="graf graf--p">
   将以下行添加到文件底部，然后使用 Ctrl + X 退出并保存更改。
  </p>
  <p class="graf graf--p">
   ConnectBot 在屏幕上有按钮，如 Ctrl 和 Shift 等键。或者使用蓝牙键盘或黑客键盘应用也一样。
  </p>
  <pre class="graf graf--pre"><code>deb http://http.kali.org/kali kali-rolling main contrib non-free</code></pre>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-11897 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1100%2C883&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?w=1186&amp;ssl=1 1186w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=300%2C241&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1024%2C822&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=768%2C616&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1100%2C883&amp;ssl=1 1100w" data-recalc-dims="1" height="883" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1100%2C883&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11897" data-recalc-dims="1" height="883" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1100%2C883&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?w=1186&amp;ssl=1 1186w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=300%2C241&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1024%2C822&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=768%2C616&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/12/5-12.png?resize=1100%2C883&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   然后，使用以下 wget 命令添加 Kali 签名密钥：
  </p>
  <pre class="graf graf--pre"><code>wget -q -O - https://www.kali.org/archive-key.asc | apt-key add -</code></pre>
  <p class="graf graf--p">
   如果命令成功，终端将返回 “OK”（如下所示）。最后，使用
   <strong class="markup--strong markup--p-strong">
    apt-get update
   </strong>
   命令更新 APT 缓存。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code"><a class="__cf_email__" data-cfemail="42302d2d36022e2d21232e2a2d3136" href="/cdn-cgi/l/email-protection">[email protected]</a>:/home/distortion# wget -q -O - https://www.kali.org/archive-key.asc | apt-key add -
OK
<a class="__cf_email__" data-cfemail="087a67677c4864676b696460677b7c" href="/cdn-cgi/l/email-protection">[email protected]</a>:/home/distortion# apt-get update
Ign:1 http://cdn-fastly.deb.debian.org/debian stable InRelease
Hit:3 http://cdn-fastly.deb.debian.org/debian stable-updates InRelease
Hit:4 http://cdn-fastly.deb.debian.org/debian stable Release
Ign:2 http://ftp.halifax.rwth-aachen.de/kali kali-rolling InRelease
Get:6 http://ftp.acc.umu.se/mirror/kali.org/kali kali-rolling Release [29.6 kB]
Get:7 http://ftp.acc.umu.se/mirror/kali.org/kali kali-rolling Release.gpg [833 B]
Get:8 http://ftp.acc.umu.se/mirror/kali.org/kali kali-rolling/main arm64 Packages [16.4 MB]
64% [8 Packages 9415 kB/16.4 MB 57%]                               546 kB/s 13s</code></pre>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    最后
   </strong>
  </h3>
  <p class="graf graf--p">
   使用 UserLAnd，将 Android 变成黑客设备会非常容易。
  </p>
  <p class="graf graf--p">
   尽管 Android 处理数据的速度比树莓派要慢，但它仍然是一款功能强大、易于隐藏的进攻工具，能够运行 Kali 软件。
  </p>
  <p class="graf graf--p">
   您可以根据需要探索更多用途。不要做坏事！⚪️
  </p>
  <div id="atatags-1611829871-5f426c5c17095">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-11891" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86%e5%ae%89%e5%8d%93%e6%89%8b%e6%9c%ba%e5%8f%98%e6%88%90%e9%bb%91%e5%ae%a2%e8%ae%be%e5%a4%87-%e6%97%a0%e9%9c%80-root/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-11891" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%b0%86%e5%ae%89%e5%8d%93%e6%89%8b%e6%9c%ba%e5%8f%98%e6%88%90%e9%bb%91%e5%ae%a2%e8%ae%be%e5%a4%87-%e6%97%a0%e9%9c%80-root/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-11891-5f426c5c176ae" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=11891&amp;origin=www.iyouport.org&amp;obj_id=161182987-11891-5f426c5c176ae" id="like-post-wrapper-161182987-11891-5f426c5c176ae">
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
    <a href="https://www.iyouport.org/tag/android/" rel="tag">
     Android
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/hacktivist/" rel="tag">
     hacktivist
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
    <a href="https://www.iyouport.org/tag/userland/" rel="tag">
     UserLAnd
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-06-03T00:04:23+08:00">
    2020年6月3日
   </time>
   <time class="updated" datetime="2019-12-31T15:10:58+08:00">
    2019年12月31日
   </time>
  </div>
 </div>
</article>

