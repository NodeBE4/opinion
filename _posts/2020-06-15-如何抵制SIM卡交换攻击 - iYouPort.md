---
layout: post
title: "如何抵制SIM卡交换攻击 - iYouPort"
date: 2020-06-15T16:03:28+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%b5%e5%88%b6%e6%8a%b5%e5%88%b6sim%e5%8d%a1%e4%ba%a4%e6%8d%a2%e6%94%bb%e5%87%bb/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-12160 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-attacks tag-phone-number tag-security tag-selfcare tag-sim-swapping tag-technique" id="post-12160">
 <header class="entry-header">
  <h1 class="entry-title">
   如何抵制SIM卡交换攻击
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
   <time class="entry-date published" datetime="2020-06-16T00:03:28+08:00">
    2020年6月16日
   </time>
   <time class="updated" datetime="2020-06-16T13:58:24+08:00">
    2020年6月16日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       最容易遭受的威胁
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12165 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1100%2C825&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=300%2C225&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1024%2C768&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=768%2C576&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1100%2C825&amp;ssl=1 1100w" data-recalc-dims="1" height="825" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1100%2C825&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12165" data-recalc-dims="1" height="825" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1100%2C825&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?w=1280&amp;ssl=1 1280w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=300%2C225&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1024%2C768&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=768%2C576&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/0-3.jpg?resize=1100%2C825&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   SIM卡交换攻击是一种常用的攻击形式，攻击者会控制您的电话号码，然后在您的电话号码作为2FA时，控制您的数字生活。
  </p>
  <p class="graf graf--p">
   本文尝试确切解释什么是SIM交换攻击，以及缓解这些攻击的最有效方法。
  </p>
  <p class="graf graf--p">
   本文将假设您的移动设备已建立基本安全级别，即 没有Root/越狱，并且您近期尚未成为网络钓鱼攻击的受害者。
  </p>
  <figure aria-describedby="caption-attachment-12626" class="wp-caption aligncenter" id="attachment_12626" style="width: 1422px">
   <img alt="" class="size-full wp-image-12626 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1100%2C951&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?w=1422&amp;ssl=1 1422w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=300%2C259&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1024%2C886&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=768%2C664&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1100%2C951&amp;ssl=1 1100w" data-recalc-dims="1" height="951" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1100%2C951&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-12626" data-recalc-dims="1" height="951" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1100%2C951&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?w=1422&amp;ssl=1 1422w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=300%2C259&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1024%2C886&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=768%2C664&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/06/unnamed-file.png?resize=1100%2C951&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-12626">
    https://www.techdirt.com/articles/20200114/06480143727/study-shows-internet-is-hugely-vulnerable-to-sim-hijacking-attacks.shtml
   </figcaption>
  </figure>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    什么是SIM卡交换攻击？
   </strong>
  </h3>
  <p class="graf graf--p">
   这是一种越来越流行的攻击形式，涉及欺诈，在许多情况下还涉及社交工程。
  </p>
  <p class="graf graf--p">
   通常情况是这样的：犯罪分子会提前检查您的电话号码，然后通过电话与您的移动运营商联系，选择那种看似容易被操纵的新人、思维简单的或超级友善的客户代表。
  </p>
  <p class="graf graf--p">
   ⚠️攻击者在此前已经收集了足够的有关你的个人信息（物理地址、SSN、电话号码、出生日期 ……所有这些都可以轻松获得，因为人们太喜欢晒了）以此来冒充您，然后 —— 他们会编造一些引人入胜的故事，例如 “我需要在几个小时内上飞机，更糟糕的是，我刚丢了手机！您能帮忙吗？”
  </p>
  <p class="graf graf--p">
   一般而言，我们都是好人，并希望在任何可能的时候提供帮助。攻击者知道这一点，并利用这种性质来控制帐户并最终控制SIM卡。请注意这比听起来容易得多。
  </p>
  <p class="graf graf--p">
   一旦攻击者控制了您的SIM卡并进而控制了您的手机号码，就会迅速发生一系列古怪的事。
   <strong class="markup--strong markup--p-strong">
    这里是当您遭受SIM卡交换攻击时通常都会遇到的现象
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   1、您可能会注意到的第一件事是您的手机显示 “没有服务”。许多人没有立即注意到这一点，因为他们的手机还连接了WiFi，并且诸如电子邮件、社交媒体、音乐之类的东西一开始仍然可以正常工作。
  </p>
  <p class="graf graf--p">
   2、直到发现自己没有接到电话或发不出短信，他们才开始怀疑某些事情不对。到那时就已经晚了。
  </p>
  <p class="graf graf--p">
   3、然后更多奇怪的事发生。例如发送重置密码的请求、无法访问电子邮件、社交媒体等。这似乎是一次突然发生的噩梦。
  </p>
  <p class="graf graf--p">
   攻击者对您的短信或电话的兴趣不大，他们会致力于控制有价值的帐户和您已采取额外措施保护的银行帐户 —— 使用您的手机号码接收这些2FA验证码。
  </p>
  <p class="graf graf--p">
   攻击者可以在这些帐户中启动密码重置，然后在他们控制了您的手机号码后拦截这些一次性验证码。
  </p>
  <p class="graf graf--p">
   他们会使用手动或自动工具在您的所有帐户中 —— 电子邮件和社交媒体帐户、银行、保险、贷款、零售等等 —— 快速启动密码重置。
  </p>
  <p class="graf graf--p">
   4、您开始害怕了。但这仅仅是一个开始。
  </p>
  <p class="graf graf--p">
   5、成功接管您的身份后，攻击者会将您的所有息转售给暗网。这会使缓解和遏制变得更加困难。
  </p>
  <p class="graf graf--p">
   6、攻击者不会停下来，他们会将攻击提高到一个新的水平，这些活动包括以您的名义开立贷款和信用卡、新的电子邮件帐户、以及更全面地有效接管您的身份。
  </p>
  <p class="graf graf--p">
   7、⚠️通常需要您花费数月甚至数年的时间来清理，时间长度取决于攻击者活动的速度和范围、控制的账户和资产的数量、以及攻击者有多聪明。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    最小化被攻击的风险
   </strong>
  </h3>
  <p class="graf graf--p">
   这些提示可在最大程度地减少您遭受这种攻击的可能性：
  </p>
  <p class="graf graf--p">
   <strong>
    1、不要使用短信和邮件验证，使用身份验证应用程序。
   </strong>
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%9d%a5%e6%94%bb%e5%87%bb-2fa%ef%bc%9f/" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%9d%a5%e6%94%bb%e5%87%bb-2fa%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
     如何使用社交工程来攻击 2FA？
    </a>
    》
   </li>
  </ul>
  <p class="graf graf--p">
   请改用身份验证APP，Authy、Google Authenticator 或 Duo 等应用。
  </p>
  <p class="graf graf--p">
   这应该是个原则 —— 即 尽可能寻找那些可以不使用手机号码的方式。这样能帮您减少很多痛苦，提高保护能力。
  </p>
  <p class="graf graf--p">
   <strong>
    2、在您的移动运营商帐户上设置PIN码
   </strong>
  </p>
  <p class="graf graf--p">
   如果您最近没有与移动运营商联系，那么值得打个电话来办理一下手续，尤其是如果您怀疑自己已经受到损害时。
  </p>
  <p class="graf graf--p">
   一些小的迹象，比如 一个莫名其妙的 Netflix 帐户、一个在线零售帐户、或者有钓鱼邮件要求您的电话号码、姓名、实际地址等，这些通常都是SIM攻击的先兆。
  </p>
  <p class="graf graf--p">
   为避免这种情况，请致电您的移动运营商，并要求他们在帐户中设置PIN码。这样做至少能给攻击者带来一些挑战性。这个PIN码通常是4到8个字符的数字。
  </p>
  <p class="graf graf--p">
   <strong>
    3、在物理设备上设置PIN
   </strong>
  </p>
  <p class="graf graf--p">
   如果您经常丢失手机或随手乱放，则应考虑在手机的SIM卡上启用PIN码。这里指的不是您用来登录手机的 PIN 码。而是防止他人激活和使用您的SIM卡的密码。
  </p>
  <p class="graf graf--p">
   想象一下有坏人偷了你的电话。即使他们不能破解密码进入您的手机，他们也可以简单地取出SIM卡并控制您的手机号码。但是如果您设置了PIN码，至少能给坏人制造点麻烦。
  </p>
  <p class="graf graf--p">
   以下是在不同设备上执行此操作的一些步骤：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    <a class="markup--anchor markup--li-anchor" data-href="https://support.apple.com/en-us/HT201529" href="https://support.apple.com/en-us/HT201529" rel="noopener noreferrer" target="_blank">
     在 iPhone 或 iPad 上为您的 SIM 启用 PIN
    </a>
   </li>
   <li class="graf graf--li">
    <a class="markup--anchor markup--li-anchor" data-href="https://www.digitalcitizen.life/how-change-or-remove-sim-pin-android-2-steps" href="https://www.digitalcitizen.life/how-change-or-remove-sim-pin-android-2-steps" rel="noopener noreferrer" target="_blank">
     在 Android 上为您的 SIM 卡启用 PIN 码
    </a>
   </li>
  </ul>
  <p class="graf graf--p">
   <strong>
    4、尽可能避免使用您的真实手机号码
   </strong>
  </p>
  <p class="graf graf--p">
   尽可能不共享您的真实手机号码 —— 尽一切可能。例如，将其从社交媒体帐户中删除。
  </p>
  <p class="graf graf--p">
   仔细想想，其实并非总是需要提供手机号码的，但人们只是出于习惯就顺手写下了真实的号码。要改掉这个毛病，因为它很危险。
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/4%e6%ac%be%e6%9c%80%e4%bd%b3%e4%b8%80%e6%ac%a1%e6%80%a7%e6%89%8b%e6%9c%ba%e5%8f%b7%e7%a0%81%e5%ba%94%e7%94%a8%ef%bc%9a%e9%80%82%e7%94%a8-android-iphone/" href="https://www.iyouport.org/4%e6%ac%be%e6%9c%80%e4%bd%b3%e4%b8%80%e6%ac%a1%e6%80%a7%e6%89%8b%e6%9c%ba%e5%8f%b7%e7%a0%81%e5%ba%94%e7%94%a8%ef%bc%9a%e9%80%82%e7%94%a8-android-iphone/" rel="noopener noreferrer" target="_blank">
     4款最佳一次性手机号码应用：适用 Android &amp; iPhone
    </a>
    》
   </li>
   <li class="graf graf--li">
    <a class="markup--anchor markup--li-anchor" data-href="https://t.me/iyouport/6597" href="https://t.me/iyouport/6597" rel="noopener noreferrer" target="_blank">
     一次性手机号服务列表
    </a>
   </li>
  </ul>
  <p class="graf graf--p">
   当然，可以想像，对于做业务的人来说，这种方法也许会造成麻烦；但是，请尽可能考虑分身，把它当成原则，让安全进入您的习惯。
  </p>
  <p class="graf graf--p">
   衡量自己的威胁模型，并从 *最有价值* 的在线帐户中删除您的真实手机号码，这样可以极大地降低遭遇SIM交换攻击的风险，尤其是在您必须将手机号码与帐户关联的情况下。
  </p>
  <p class="graf graf--p">
   例如，登录到Google帐户页面，然后在 “个人信息” 部分中编辑您的手机号码。如果您在那看到的是自己的真实手机号码，请用虚拟号码代替它，或者将其全部删除（只要您可以选择先接收2FA）。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12161 jetpack-lazy-image" data-lazy-sizes="(max-width: 670px) 100vw, 670px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?resize=670%2C282&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?w=670&amp;ssl=1 670w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?resize=300%2C126&amp;ssl=1 300w" data-recalc-dims="1" height="282" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?resize=670%2C282&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="670"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12161" data-recalc-dims="1" height="282" sizes="(max-width: 670px) 100vw, 670px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?resize=670%2C282&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?w=670&amp;ssl=1 670w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/01/2-9.png?resize=300%2C126&amp;ssl=1 300w" width="670"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   请注意，此屏幕截图中2FA已关闭。一旦设置了身份验证器或使用了一次性号码来接收那些2FA代码，请确保重新启用它，以免被锁定。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12162 jetpack-lazy-image" data-lazy-sizes="(max-width: 670px) 100vw, 670px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?resize=670%2C230&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?w=670&amp;ssl=1 670w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?resize=300%2C103&amp;ssl=1 300w" data-recalc-dims="1" height="230" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?resize=670%2C230&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="670"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12162" data-recalc-dims="1" height="230" sizes="(max-width: 670px) 100vw, 670px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?resize=670%2C230&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?w=670&amp;ssl=1 670w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/3-6.png?resize=300%2C103&amp;ssl=1 300w" width="670"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这是另一个使用 Amazon 的示例：在您的帐户中，选择 “登录和安全”。在此处删除您的手机和/或添加一次性号码。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-12163 jetpack-lazy-image" data-lazy-sizes="(max-width: 670px) 100vw, 670px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?resize=670%2C365&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?w=670&amp;ssl=1 670w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?resize=300%2C163&amp;ssl=1 300w" data-recalc-dims="1" height="365" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?resize=670%2C365&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="670"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12163" data-recalc-dims="1" height="365" sizes="(max-width: 670px) 100vw, 670px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?resize=670%2C365&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?w=670&amp;ssl=1 670w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2020/01/4-4.png?resize=300%2C163&amp;ssl=1 300w" width="670"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   PayPal 是攻击者的另一个常规目标。登录后，通过单击页面右上角的设置（齿轮图标）在此处执行相同的操作。
  </p>
  <p class="graf graf--p">
   单击 “电话”，然后删除您的真实号码并添加一次性号码。请注意有些地区可能无法进行这个操作，因为它要求注册手机号和银行卡绑定的手机号一致。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-12164 jetpack-lazy-image" data-lazy-sizes="(max-width: 670px) 100vw, 670px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?resize=670%2C202&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?w=670&amp;ssl=1 670w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?resize=300%2C90&amp;ssl=1 300w" data-recalc-dims="1" height="202" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?resize=670%2C202&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="670"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-12164" data-recalc-dims="1" height="202" sizes="(max-width: 670px) 100vw, 670px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?resize=670%2C202&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?w=670&amp;ssl=1 670w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/01/5-4.png?resize=300%2C90&amp;ssl=1 300w" width="670"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   同样，请考虑尽可能从所有社交媒体、零售、尤其是财务帐户中删除您的真实手机号码。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    最后
   </strong>
  </h3>
  <p class="graf graf--p">
   我们应该保持友善和乐于助人的爱心，但是请准确判断，不要轻易被利用。见《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e7%a4%bc%e8%b2%8c%e7%9a%84%e5%81%8f%e6%89%a7/" href="https://www.iyouport.org/%e7%a4%bc%e8%b2%8c%e7%9a%84%e5%81%8f%e6%89%a7/" rel="noopener noreferrer" target="_blank">
    礼貌的偏执
   </a>
   》。
  </p>
  <p class="graf graf--p">
   如果 **任何人** 通过电子邮件和/或短信询问您的个人信息，请保持友善的怀疑态度，不要害怕要求验证 —— 如果显示为您认识的人，请用其他安全的方式联系此人，以确认是否真的是你认识的那个人发送的消息。
  </p>
  <p class="graf graf--p">
   还记得我们在 “
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e5%a4%a7%e4%bf%9d%e5%81%a5%e5%ba%94%e8%af%a5%e6%88%90%e4%b8%ba%e4%b9%a0%e6%83%af%ef%bc%9a%e5%8f%98%e5%be%97%e9%9a%be%e4%bb%a5%e8%a2%ab%e8%bf%bd%e8%b8%aa%e7%9a%84%e7%ae%80%e5%8d%95%e6%96%b9%e6%b3%95/" href="https://www.iyouport.org/%e5%a4%a7%e4%bf%9d%e5%81%a5%e5%ba%94%e8%af%a5%e6%88%90%e4%b8%ba%e4%b9%a0%e6%83%af%ef%bc%9a%e5%8f%98%e5%be%97%e9%9a%be%e4%bb%a5%e8%a2%ab%e8%bf%bd%e8%b8%aa%e7%9a%84%e7%ae%80%e5%8d%95%e6%96%b9%e6%b3%95/" rel="noopener noreferrer" target="_blank">
    变得难以被追踪
   </a>
   ” 系列中强调的原则吗：
   <strong class="markup--strong markup--p-strong">
    零信任，始终验证
   </strong>
   。
  </p>
  <p class="graf graf--p">
   如果您担心自己已​​成为SIM卡交换攻击的受害者，请寻求专业指导，以适当缓解和做出明智的选择以应对。
  </p>
  <p class="graf graf--p">
   请与您的亲人和朋友分享这些技巧，以帮助确保他们的安全。⚪️
  </p>
  <div id="atatags-1611829871-5f426d117ec75">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-12160" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%b5%e5%88%b6%e6%8a%b5%e5%88%b6sim%e5%8d%a1%e4%ba%a4%e6%8d%a2%e6%94%bb%e5%87%bb/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-12160" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e6%8a%b5%e5%88%b6%e6%8a%b5%e5%88%b6sim%e5%8d%a1%e4%ba%a4%e6%8d%a2%e6%94%bb%e5%87%bb/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-12160-5f426d117f5cb" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=12160&amp;origin=www.iyouport.org&amp;obj_id=161182987-12160-5f426d117f5cb" id="like-post-wrapper-161182987-12160-5f426d117f5cb">
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
    <a href="https://www.iyouport.org/tag/attacks/" rel="tag">
     attacks
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/phone-number/" rel="tag">
     phone number
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/selfcare/" rel="tag">
     selfcare
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/sim-swapping/" rel="tag">
     SIM Swapping
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technique/" rel="tag">
     technique
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-06-16T00:03:28+08:00">
    2020年6月16日
   </time>
   <time class="updated" datetime="2020-06-16T13:58:24+08:00">
    2020年6月16日
   </time>
  </div>
 </div>
</article>

