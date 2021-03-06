---
layout: post
title: "扫盲 Tails——专门强化隐匿性的 Linux 发行版"
date: 2013-12-23T22:58:00+08:00
author: 编程随想
from: https://program-think.blogspot.com/2013/12/linux-tails-guide.html
tags: [ 编程随想 ]
categories: [ 编程随想 ]
---

<div class="post hentry uncustomized-post-template">
 <a name="6139481491343144940">
 </a>
 <h1 class="post-title entry-title">
  <a href="https://program-think.blogspot.com/2013/12/linux-tails-guide.html">
   扫盲 Tails——专门强化隐匿性的 Linux 发行版
  </a>
 </h1>
 <div class="post-header">
  <div class="post-header-line-1">
   <div class="post-inner-index">
   </div>
  </div>
 </div>
 <div class="post-body entry-content">
  这篇教程是半年前就答应要写的，如今已到年底，实在抱歉 :( 另感谢多位网友反复催促，有效杜绝了俺的健忘。
  <br/>
  今天这篇是面向菜鸟读者的初级扫盲，先介绍 Tails 的最基本使用。
  <br/>
  <a name="more">
  </a>
  <!--program-think-->
  <br/>
  <br/>
  <h2>
   ★Tails 是啥？
  </h2>
  <br/>
  （如果你之前没有接触过 Linux，建议先看俺写的《
  <a href="https://program-think.blogspot.com/2013/10/linux-newbie-guide.html">
   扫盲 Linux：新手如何搞定 Linux 操作系统
  </a>
  》）
  <br/>
  Tails 是洋文“The Amnesic Incognito Live System”的缩写。作为 Linux 发行版，Tails 衍生自 Debian（Debian 是最有影响力的社区发行版，没有之一）。设计 Tails 的目的就是为了帮助用户实现匿名上网，并最大限度保护个人隐私。为了达到这个目的，Tails 内置了各种隐匿身份和保护隐私的工具。俺随便列举如下几个：
  <br/>
  TOR——用于匿名上网的工具，也可用于翻墙（它的入门教程在“
  <a href="https://program-think.blogspot.com/2009/09/break-through-gfw-with-tor.html">
   这里
  </a>
  ”，FAQ在“
  <a href="https://program-think.blogspot.com/2013/11/tor-faq.html">
   这里
  </a>
  ”）
  <br/>
  I2P——同上（它的入门教程在“
  <a href="https://program-think.blogspot.com/2012/06/gfw-i2p.html">
   这里
  </a>
  ”）
  <br/>
  GnuPG——名气很大的文件加密工具（以后俺会抽空写它的教程）
  <br/>
  TrueCrypt——跨平台的磁盘加密工具（俺写的系列教程在“
  <a href="https://program-think.blogspot.com/2011/05/recommend-truecrypt.html">
   这里
  </a>
  ”，共5篇）
  <br/>
  LUKS——Linux 上的磁盘加密工具
  <br/>
  Pidgin——跨平台的 IM 客户端，并捆绑了 OTR（用于对 IM 聊天内容进行强加密）
  <br/>
  Claws Mail——邮件客户端，可以搭配 GnuPG 进行邮件内容加密
  <br/>
  KeePassX——口令管理工具
  <br/>
  <br/>
  上述列举的这一大堆工具都是开源（开放源代码）滴，在业界也都是响当当滴。所以，工具本身的可靠性，大伙儿完全可以放心（不会有流氓软件混入其中）。
  <br/>
  <br/>
  <br/>
  <h2>
   ★如何获取？
  </h2>
  <br/>
  要获取 Tails 很容易，只要访问他的官网（
  <a href="https://tails.boum.org/" rel="nofollow" target="_blank">
   https://tails.boum.org/
  </a>
  ），在主页就可以看到下载页面的链接。打开下载页面后，你可以选择直接下载 ISO 镜像，也可以先下载 BT 种子，然后用 BT 下 ISO 镜像（俺个人感觉，用 BT 更快）。
  <br/>
  <br/>
  <br/>
  <h2>
   ★如何安装？
  </h2>
  <br/>
  Tails 可以有几种玩法：其一，装在虚拟机中；其二，装在U盘（或SD卡）；其三，刻录成光盘。对于初学者，俺建议先拿虚拟机来练手。因为虚拟机方式上手很快。比如常见的虚拟机软件（VirtualBox 和 VMware）默认都开启 DHCP 服务，而 Tails 默认也支持 DHCP，就省去了你配置网卡参数（比如：IP地址、掩码）的麻烦。
  <br/>
  <br/>
  <h3>
   ◇安装到虚拟机
  </h3>
  <br/>
  要在虚拟机中使用 Tails，先创建一个空白的虚拟系统（Guest OS），内存
  <b>
   至少
  </b>
  分配 768 MB（Tails 官网建议要 1GB，俺试验了一下，768兆也勉强可以跑）。然后在这个 Guest OS 的光驱设置中设置你刚才下载的那个 ISO 镜像。再启动虚拟系统，就 OK 啦。
  <br/>
  从来没用过虚拟机的同学，建议先看俺的教程《
  <a href="https://program-think.blogspot.com/2012/10/system-vm-0.html">
   扫盲操作系统虚拟机
  </a>
  》。
  <br/>
  <br/>
  <h3>
   ◇安装到U盘
  </h3>
  <br/>
  如果要安装到U盘，可以有两种方法：
  <br/>
  <b>
   方法1
  </b>
  <br/>
  参考俺前天的那篇博文《
  <a href="https://program-think.blogspot.com/2013/12/create-bootable-usb-stick-from-iso.html">
   如何用 ISO 镜像制作【U盘】安装盘（通用方法、无需 WinPE）
  </a>
  》，把刚才下载的 ISO 镜像制作到U盘。然后这个U盘就可以直接用来启动 Tails 系统。
  <br/>
  补充说明：
  <br/>
  本文发布之后，看到有读者质疑说，那篇博文介绍的方法是用来制作安装盘的（安装环境），为啥也可以用来制作 Tails 的运行环境。
  <br/>
  俺稍微解释一下：Tails 本身就支持 Live CD 和 Live USB。也就是说，它是无需安装滴。所以用那篇博文介绍的方法把 Tails 镜像制作到 U盘中，这个 U盘 无需安装，直接就是运行使用环境。
  <br/>
  <br/>
  <b>
   方法2
  </b>
  <br/>
  先用前面说的虚拟机方式启动 Tails，在你的实体机（Host OS）上插入U盘/SD卡（容量至少1GB）。在虚拟机的菜单项中找 USB 相关的选项，把刚才插入的 U盘/SD卡 映射到这个虚拟系统。
  <br/>
  然后，进入 Tails 桌面，找到如下菜单项（截图如下）。
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/ylpG2aJvI78RxI3Y2WZVvv6se_cm1dYKLQV4NUed_30wB9uzzlghCRgh9G2ClKwkBCGP4b3ZzLVPt6NnAzUQmH5R6F8LX-t-TsSoGrRTk3rg8IdR7JoDrESJNoyY"/>
  </center>
  <br/>
  启动它内置的 Tails Installer 工具（截图如下）这个工具可以把正在运行的 Tails 系统制作到 U盘/SD卡 中。
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/n2GgNqQpOdN6Sf8ytCgZNSHdfmiElsFfnbbAKF0qrz82gltbEsoU9Mg3yA40uKKPqB_yOkh2sTz-kwzvo5vjfmqJcJna30Sbjw-lisB8sU7iRKUBkZPqf5YWX0GQ"/>
  </center>
  <br/>
  这两种方法的效果有点小差别——第二种方法虽然稍微繁琐，但感觉比较正宗 :)
  <br/>
  <br/>
  <h3>
   ◇刻录成光盘
  </h3>
  <br/>
  最后这种玩法，应该不用俺再费口水了吧？不懂得如何刻盘的同学，自己去 Google 一下。
  <br/>
  <br/>
  <br/>
  <h2>
   ★如何配置？
  </h2>
  <br/>
  作为入门教程，俺先介绍如何用 Tails 内置的 Tor Browser 上网。因为 Web 浏览是最常见的需求。
  <br/>
  如果你是在墙外（天朝之外）使用 Tails，无需对 TOR 进行额外设置，直接启动内置的浏览器就可以了。
  <br/>
  可惜大多数网友都是在墙内，因为 GFW 严密封锁了 TOR 在全球的中继节点和 TOR 网桥，所以你如果直接运行 Tails 里面的 TOR，多半是没法联网的。解决办法就是俺常年罗嗦的老法子——双重代理。对双重代理不了解的同学，建议先看俺之前的教程《
  <a href="https://program-think.blogspot.com/2012/03/howto-cover-your-tracks-5.html">
   如何隐藏你的踪迹，避免跨省追捕[5]：用多重代理隐匿公网IP
  </a>
  》
  <br/>
  <br/>
  <h3>
   ◇先准备好前置代理
  </h3>
  <br/>
  要使用双重代理，你需要先准备好另外一款【
  <b>
   可用的
  </b>
  】翻墙工具（比如：VPN、自由门、无界、赛风...）作为 TOR 的前置代理。此处有必要提醒一下，GAE 类的翻墙工具无法作为 TOR 的前置代理——因为 GAE 类的翻墙工具没有原生支持加密的 HTTPS 代理（而 TOR 恰恰需要 HTTPS 代理）。
  <br/>
  这款前置代理可以安装在另外一台虚拟系统，也可以直接安装在实体机（Host OS）。因为前置代理跟 Tails 不是同一个系统，所以你还要记得作适当的配置，把前置代理的翻墙通道共享出来（具体如何搞，请看《
  <a href="https://program-think.blogspot.com/2013/01/cross-host-use-gfw-tool.html">
   多台电脑如何共享翻墙通道
  </a>
  》）。
  <br/>
  <br/>
  <h3>
   ◇配置 TOR
  </h3>
  <br/>
  前置代理搞定了之后，接下来就是配置 TOR。以下是多张截图，大伙儿按部就班。
  <br/>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/Yhr8Mk3rK4Gyzao9yzRee9cCEtA34m4WGH-HaakTwJoPke33yH4xkZidbxt_QUCxxn_InaMLUnbrgxm2HEtS1Zo8c4E48k2C_QyP2o0Eqr3nPWs7tL5iVEXbOzJp"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/rSlwth0K7iBXaNPS7lVj60Jx_MlSxbBrKDWKWnIUXbYszYXMN-k07UcMoXUmN4JpdCPKDpFn9CkmGfeW4HGdQtQDuPQ0YhRxzku4Y8Q3UtwOOMG6NSC96qH9AZbP"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/z-Q_RuiySMLdM47NlnMt7_yM8zfvlZrnUnXc6pEzNgRj382-LtzLOwT6LNwZ_PEgY_adn4e_T8y64aLOAwAZIbUhTykxM7aC6dhgCn4ZEn0k_-IWdl955d89mFJ6"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/W7HRt-hrqP6KlCLAouHQR3vSBnmbNItv-BRAKq1Qjy3FDqJmlEZW09gD80nUv_TS0BSvEUW8_jwsApG75_WZLkcNlYW9qXdVxiGVTAhFbK9frq-3eiRx8nBzkMWu"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/NQFtO_UM4IrKWbCmD8j1UlviBi2tZBbVYHVobu3bIu4NyfB0Lb5liGjImo_1o5AfEkjWu9kVTmW6GvXAZQ_EHzjHLv9fpDNcYOM2lA160I4aQPJ9m5M65ECJiDFI"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/zsEMAjsTOX34KM5oLeeFxkyMoLmfvI5tV_M1PAqFKHHSrBkiJOfwG3qGtdBmPOZarVwy_8hMmaPQU7y1ttMECCcCPyblR4TqzF2uzBk5zXgHsxMCAoP0rsn2REhJ"/>
  </center>
  <br/>
  <b>
   到了这步，你需要在 root 终端上运行 vidalia &amp; 命令
  </b>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/JHFPebCvdmzX-K_UHSOf8s56PR0p4315CkA8GmzE1-4_aT7ZUY9oa5Xndq2_xfUPO1_p_9g1hS87E7fKuZ-I5WbbWxaS5wHPTquaS-TLzAFQX3-M12IlD7uCeVtc"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh6.googleusercontent.com/pT0JBkgUqKJDvi4ySueLuDRFipuwQwEHePN8LiB7ZfXtUB37jEMDq0fdZ4Zas16RJxT3DdmEYPMg9iJmLfRYFEDNIP-3Qngwv7HnqZ68c2Zfr2zGvOJqD7N1PmfQ"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/WrYE80d8LIw0B5A_ORw47KTy66Dz6laydXi8aAuT7uQtLsUbZQltvqg1Gdnj9_B-E_pgNTv_CmfDMvwYSdNI27p6l5K2aMXzU-CWyBxfRH7gVE4lcqEYYw5uTWx-"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/s7ykBgjtI8yqFkdG48FwfztRm2f9UydsnNHfV-5ppx6M2gdz4pPdqRdgKcssBwB-eaRELCKMvaO5UTr4X6BmlD3Xe5_4BOIrg9QBPA0mS-KyV5Pdz7_GPralybqW"/>
  </center>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/4tsSzk3GYObxYCn8QVxhzRz_aSSlnsZWeoUHg4ZBk1xOjs8Co1DG1sxH68q40JItKlOSvjiXSg7K2TW9iFHCrBEoWQqFTt17ptzL7YSMyeDtsou_oQPTbHuUaMDi"/>
  </center>
  <br/>
  <b>
   到了这步，就大功告成啦
  </b>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh5.googleusercontent.com/KXmeS-ioB-y6SQCCK5xVKr2w6r5SogbCzep6yEzal6M9z8q0CJ9Ks03Md-fAOt_tRyaMQ0AZ4X0qXITP49mShSK-Oh06uh2usNFc_mN_IU2TM7LGJMa0UwzMFCSz"/>
  </center>
  <br/>
  <b>
   顺便再贴个截图，show 一下内置浏览器上安装的扩展（这些扩展主要都是为了加强安全性，尤其是【隐私性】和【隐匿性】）
  </b>
  <br/>
  <center>
   <img alt="不见图 请翻墙" src="https://lh3.googleusercontent.com/Cu0rqQ5dSQrQuX5NLcakR_qATZH44I95QmJhANFLGdv6FnRaJsElfST7qIikeF9_SB6FzebEffQE6d9N34nWHa82KRAX1ewrlVLyn5DIeajPIBgoxU4SLxwseNA9"/>
  </center>
  <br/>
  <br/>
  <h2>
   ★结尾
  </h2>
  <br/>
  因为是入门扫盲，今天就先聊到这里。如果有很多人对 Tails 感兴趣，俺根据大伙儿的反馈，再决定是否继续介绍 Tails 的其它功能。
  <br/>
  补充一下：如果你是在虚拟机中玩 Tails，可以再参考俺之前的博文《
  <a href="https://program-think.blogspot.com/2013/01/howto-cover-your-tracks-6.html">
   如何隐藏你的踪迹，避免跨省追捕[6]：用虚拟机隐匿公网 IP（原理介绍）
  </a>
  》，把 Tails 虚拟系统的虚拟网卡设置为 Host-Only，可以把安全性再提高一个等级。
  <br/>
  <br/>
  <br/>
  <b>
   俺博客上，和本文相关的帖子（需翻墙）
  </b>
  ：
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/10/linux-newbie-guide.html">
   扫盲 Linux：新手如何搞定 Linux 操作系统
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/10/linux-distributions-guide.html">
   扫盲 Linux：如何选择发行版
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2019/11/POSIX-TUI-from-TTY-to-Shell-Programming.html">
   扫盲 Linux＆UNIX 命令行——从“电传打字机”聊到“shell 脚本编程”
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2012/10/system-vm-0.html">
   扫盲操作系统虚拟机
  </a>
  》（系列）
  <br/>
  《
  <a href="https://program-think.blogspot.com/2009/09/break-through-gfw-with-tor.html">
   “如何翻墙”系列：戴“套”翻墻的方法
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/11/tor-faq.html">
   “如何翻墙”系列：关于 Tor 的常见问题解答
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/01/cross-host-use-gfw-tool.html">
   多台电脑如何【共享】翻墙通道——兼谈【端口转发】的几种方法
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2019/04/Proxy-Tricks.html">
   如何让【不支持】代理的网络软件，通过代理进行联网（不同平台的 N 种方法）
  </a>
  》
  <br/>
  《
  <a href="https://program-think.blogspot.com/2010/04/howto-cover-your-tracks-0.html">
   如何隐藏你的踪迹，避免跨省追捕
  </a>
  》（系列）
  <br/>
  《
  <a href="https://program-think.blogspot.com/2013/12/create-bootable-usb-stick-from-iso.html">
   如何用 ISO 镜像制作【U盘】安装盘（通用方法、无需 WinPE）
  </a>
  》
  <div class="post-copyright">
   <b>
    版权声明
   </b>
   <br/>
   本博客所有的原创文章，作者皆保留版权。转载必须包含本声明，保持本文完整，并以超链接形式注明作者
   <a href="mailto:program.think@gmail.com">
    编程随想
   </a>
   和本文原始地址：
   <br/>
   <a href="https://program-think.blogspot.com/2013/12/linux-tails-guide.html" id="OriginalPostUrl">
    https://program-think.blogspot.com/2013/12/linux-tails-guide.html
   </a>
  </div>
  <div style="clear: both;">
  </div>
 </div>
 <div class="post-footer" style="margin-bottom:50px;">
  <div class="post-footer-line post-footer-line-1" style="display:none;">
   <span class="post-author vcard">
   </span>
   <span class="reaction-buttons">
   </span>
   <span class="star-ratings">
   </span>
   <span class="post-icons">
   </span>
   <span class="post-backlinks post-comment-link">
   </span>
  </div>
  <div class="post-footer-line post-footer-line-2 post-toolbar">
  </div>
  <div class="post-footer-line post-footer-line-3">
   <span class="post-location">
   </span>
  </div>
 </div>
</div>

