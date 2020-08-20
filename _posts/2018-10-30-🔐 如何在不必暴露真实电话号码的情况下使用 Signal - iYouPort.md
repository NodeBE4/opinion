---
layout: post
title: "🔐 如何在不必暴露真实电话号码的情况下使用 Signal - iYouPort"
date: 2018-10-30T21:14:46+00:00
author: iYouPort
from: https://www.iyouport.org/%f0%9f%94%90-%e5%a6%82%e4%bd%95%e5%9c%a8%e4%b8%8d%e5%bf%85%e6%9a%b4%e9%9c%b2%e7%9c%9f%e5%ae%9e%e7%94%b5%e8%af%9d%e5%8f%b7%e7%a0%81%e7%9a%84%e6%83%85%e5%86%b5%e4%b8%8b%e4%bd%bf%e7%94%a8-signal/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-2599 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 category-67 tag-activism tag-privacy tag-security tag-signal tag-technique tag-technology tag-tools" id="post-2599">
 <header class="entry-header">
  <h1 class="entry-title">
   🔐 如何在不必暴露真实电话号码的情况下使用 Signal
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
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-10-31T05:14:46+08:00">
    2018年10月31日
   </time>
   <time class="updated" datetime="2019-05-03T05:28:01+08:00">
    2019年5月3日
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
     <strong>
      <em>
       我们在以前的文章中曾经指出过关联电话号码这事不怎么靠谱，但是有些端对端通讯的确是这么设计的，其中 Signal 就是个典型。如果您必须使用它，又不希望您的私人电话号码曝光，方法还是有的，本文就说说这个怎么玩；还需要说说在 Signal 中如何防止中间人攻击；以及如何在语音视频通话中隐藏您的真实 IP 地址（因为它默认对方可见）
      </em>
     </strong>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2601 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1100%2C578&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?w=1200&amp;ssl=1 1200w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=300%2C158&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=768%2C403&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1024%2C538&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1100%2C578&amp;ssl=1 1100w" data-recalc-dims="1" height="578" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1100%2C578&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2601" data-recalc-dims="1" height="578" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1100%2C578&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?w=1200&amp;ssl=1 1200w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=300%2C158&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=768%2C403&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1024%2C538&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-9.jpeg?resize=1100%2C578&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="f716">
   就在几年前，发送加密信息还是一项挑战。刚开始，你不得不花费数小时折腾那些充满行话的教程，或者有幸找到一个书呆子哥们儿来教你。在这个过程中幸存下来的少数人很快就遇到了第二个障碍：他们只能与那些已经成功完成相同环节的人使用加密通信。因此，即使有人最终设置了加密，如果他们想要联系的人并没有加密，也是白搭。
  </p>
  <p class="graf graf--p graf-after--p" id="5c45">
   今天的情况要好得多了。有许多流行的应用程序非常简单易用，可以使加密像发送短信一样简单。其中 Signal 开源软件是很活跃的，记者、活动家和其他被当局盯着的人已经喜欢它很久了。你没必要学习绕嘴的技术名词，也不需要知道“公钥“是什么鬼，就能获得良好的安全性。
  </p>
  <p class="graf graf--p graf-after--p" id="16f4">
   但 Signal 和很多其他同类应用一样，存在一个主要问题：您的帐户被与电话号码相关联。
  </p>
  <p class="graf graf--p graf-after--p" id="36f3">
   虽然，这使得这些应用程序非常易于使用，还可以轻松发现其他使用该应用的朋友; 如果某人是您手机中的联系人并安装了该应用，您可以毫不费力地与之联系。
  </p>
  <p class="graf graf--p graf-after--p" id="66f3">
   但是，这也意味着如果您希望人们能够安全地向您发送消息，就需要分发您的电话号码给对方。这使得与公众互动的人处于尴尬的境地：对方值得您公开私人电话号码吗？
  </p>
  <p class="graf graf--p graf-after--p" id="347d">
   本文将解释如何创建第二个可以安全注册的 Signal 电话号码，这样陌生人就可以轻松安全地与您联系，同时您的真实电话号码仍然是私密的。
  </p>
  <p class="graf graf--p graf-after--p" id="5728">
   <strong class="markup--strong markup--p-strong">
    为什么你不应该公开自己的电话号码？
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="ac84">
   电话号码很可能会被滥用。支持言论自由的活动家 Jillian York 在她的个人博客上写道： “作为一名女性，将我的电话号码发给陌生人会产生一种中等风险：如果他在半夜打电话给我怎么办？如果他通过短信骚扰我怎么办？如果我必须换号以远离他是有多麻烦“。
  </p>
  <p class="graf graf--p graf-after--p" id="ec4a">
   如果你是一个公众人物，特别是如果你是一名女性或少数族裔，你肯定熟悉那些性别歧视或种族主义的混蛋在 Twitter，Facebook 和文章评论部分对你大吼大叫甚至威胁。发布您的私人电话号码可能会使这个问题变得更糟。
  </p>
  <p class="graf graf--p graf-after--p" id="2e89">
   电话号码还会引发在线帐户被攻击的危险。去年就有人通过接管私人电话号码来
   <a class="markup--anchor markup--p-anchor" data-href="https://techcrunch.com/2016/06/10/how-activist-deray-mckessons-twitter-account-was-hacked/" href="https://techcrunch.com/2016/06/10/how-activist-deray-mckessons-twitter-account-was-hacked/" rel="noopener nofollow noreferrer" target="_blank">
    攻击
   </a>
   种族司法活动家 DeRay Mckesson 的 Twitter 和电子邮件帐户。攻击者打电话给 Verizon 并冒充 Mckesson，要求将与他的电话号码相关联的 SIM 卡更改为被他们控制的新 SIM 卡，这样他们就可以窃听发送给他的短信。
  </p>
  <p class="graf graf--p graf-after--p" id="8e36">
   如果攻击者控制了您的电话号码，就像他们控制 Mckesson 那样，他们也可以接管您的 Signal 帐户。如果有人对您的朋友这样做，您会在 Signal 中看到“安全号码已更改”的警告。如果你忽略了这个警告并发送信息，你实际上是正在给攻击者发短信。你可以验证安全号码以确认你的 Signal 应用程序正在加密消息给你朋友的手机，而不是攻击者的电话（其方法最后介绍）
  </p>
  <p class="graf graf--p graf-after--p" id="f81a">
   <strong class="markup--strong markup--p-strong">
    如何获取第二个电话号码
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="0518">
   当您第一次打开 Signal 应用程序并输入您的电话号码时，会发生以下情况：
  </p>
  <ul class="postList">
   <li class="graf graf--li graf-after--p" id="336c">
    Signal 服务会向您的电话号码发送带有验证码的短信。如果您可以收到该消息或应用程序可以直接接收该消息，并且消息包含正确的代码，则会成功注册该帐户。
   </li>
   <li class="graf graf--li graf-after--li" id="b318">
    如果您无法收到验证消息，Signal 会尝试呼叫您的电话号码。当您接听时，机器人语音会告诉您验证码，您可以将其输入到应用程序中。
   </li>
  </ul>
  <p class="graf graf--p graf-after--li" id="1c80">
   您的电话号码仅用于识别您的 Signal 帐户（基本上是您的用户名），并且您的电话公司无法访问有关 Signal 中发生的任何信息。
  </p>
  <p class="graf graf--p graf-after--p" id="21ff">
   这意味着，只要您可以访问接听语音呼叫的电话号码（如固定电话或 VoIP 号码），您就可以将该电话号码与 Signal 配合使用。
  </p>
  <p class="graf graf--p graf-after--p" id="b42d">
   第二个号码可以是：
  </p>
  <ul class="postList">
   <li class="graf graf--li graf-after--p" id="c345">
    你办公室的座机；
   </li>
   <li class="graf graf--li graf-after--li" id="ceac">
    一个免费的 Google 语音电话号码，如果你住在美国的话；
   </li>
   <li class="graf graf--li graf-after--li" id="13a3">
    来自任何在线呼叫服务的任何电话号码，如 Skype；
   </li>
   <li class="graf graf--li graf-after--li" id="fc14">
    一个便宜的预付费 SIM 卡，每月只需几美元，并暂时将其放在手机上以注册 Signal。不知道中国还有没有不实名的黑卡卖，如果没有，这个方法不太适合中国用户；
   </li>
   <li class="graf graf--li graf-after--li" id="199d">
    Twilio，一种云服务，允许开发人员编写可以拨打和接听电话和短信的软件。教程没有那么复杂，稍微给点耐心您就可以从 Twilio 购买每月1美元的电话号码以用于 Signal。
   </li>
  </ul>
  <p class="graf graf--p graf-after--li" id="56ce">
   <strong class="markup--strong markup--p-strong">
    保持对此电话号码的控制非常重要
   </strong>
   。例如，您可以使用一次性 SMS 服务注册 Signal — 如果您搜索一下就能发现有许多此类服务 — 但是，任何人都可以使用这些电话号码这是很危险的。同样，您应该避免使用公用电话号码或您不打算续费的 SIM 卡。如果其他人可以收到此电话号码的短信或电话就麻烦了。
  </p>
  <p class="graf graf--p graf-after--p" id="f352">
   如果您有其他获取永久电话号码的方法，请在评论中和大家交流。
  </p>
  <p class="graf graf--p graf-after--p" id="e1ab">
   <strong class="markup--strong markup--p-strong">
    设置 Twilio
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="7c97">
   对于追求廉价的辅助电话号码的人来说，Twilio 是一个很好的选择。访问
   <a class="markup--anchor markup--p-anchor" data-href="http://twilio.com/" href="https://twilio.com/" rel="noreferrer noopener nofollow" target="_blank">
    twilio.com
   </a>
   。在顶部，点击“注册”。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2602 jetpack-lazy-image" data-lazy-sizes="(max-width: 1002px) 100vw, 1002px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=1002%2C824&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?w=1002&amp;ssl=1 1002w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=300%2C247&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=768%2C632&amp;ssl=1 768w" data-recalc-dims="1" height="824" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=1002%2C824&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1002"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2602" data-recalc-dims="1" height="824" sizes="(max-width: 1002px) 100vw, 1002px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=1002%2C824&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?w=1002&amp;ssl=1 1002w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=300%2C247&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0.png?resize=768%2C632&amp;ssl=1 768w" width="1002"/>
   </noscript>
  </p>
  <p>
   填写您的详细信息，您将被要求验证您的电话号码。 将验证码打入 Twilio 以完成注册。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2603 jetpack-lazy-image" data-lazy-sizes="(max-width: 1053px) 100vw, 1053px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=1053%2C382&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?w=1053&amp;ssl=1 1053w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=300%2C109&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=768%2C279&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=1024%2C371&amp;ssl=1 1024w" data-recalc-dims="1" height="382" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=1053%2C382&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1053"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2603" data-recalc-dims="1" height="382" sizes="(max-width: 1053px) 100vw, 1053px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=1053%2C382&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?w=1053&amp;ssl=1 1053w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=300%2C109&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=768%2C279&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-1.png?resize=1024%2C371&amp;ssl=1 1024w" width="1053"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="ea46">
   Twilio 通过订阅支付账单。要获得电话号码，需要支付少量月费来升级帐户。登录 Twilio 后，单击屏幕顶部的“升级”。
  </p>
  <p class="graf graf--p graf-after--p" id="fca4">
   要保持您的电话号码有效，填写您的付款信息后，需至少添加 20 美元。
  </p>
  <p class="graf graf--p graf-after--p" id="3f06">
   然后点击底部的“购买电话号码”。最后，将 Twilio 号码中的语音或短信转发到您的主要电话上，这样就可以在手机上接收验证消息了。
  </p>
  <p class="graf graf--p graf-after--p" id="6622">
   使用屏幕最左侧的菜单，导航到“所有产品和服务” &gt; “Runtime” &gt; “TwiML Bins”。
  </p>
  <p class="graf graf--p graf-after--p" id="cb9f">
   单击加号以创建新的“bin”，它将自动转发您的消息并呼叫主号码。
   <strong class="markup--strong markup--p-strong">
    用下面的代码段替换当前代码；需要将“您的电话号码”那个部分替换为您要用来接收转发信息的号码
   </strong>
   。可以参考下面那个动图。
  </p>
  <p class="graf graf--p graf-after--p" id="48b2">
   对于短信：
  </p>
  <div class="aspectRatioPlaceholder is-locked">
   <img alt="" class="aligncenter size-full wp-image-2604 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1100%2C368&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=768%2C257&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1024%2C342&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1100%2C368&amp;ssl=1 1100w" data-recalc-dims="1" height="368" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1100%2C368&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2604" data-recalc-dims="1" height="368" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1100%2C368&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=300%2C100&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=768%2C257&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1024%2C342&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-10.jpeg?resize=1100%2C368&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </div>
  <div>
  </div>
  <div>
   对于语音：
  </div>
  <div>
   <img alt="" class="aligncenter size-full wp-image-2605 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1100%2C331&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?w=1278&amp;ssl=1 1278w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=300%2C90&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=768%2C231&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1024%2C308&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1100%2C331&amp;ssl=1 1100w" data-recalc-dims="1" height="331" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1100%2C331&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2605" data-recalc-dims="1" height="331" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1100%2C331&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?w=1278&amp;ssl=1 1278w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=300%2C90&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=768%2C231&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1024%2C308&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-11.jpeg?resize=1100%2C331&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="75f6">
    起个名字，可以随便写，比如像动图这样：“my voice forwarding”。（动图：https://cdn-images-1.medium.com/max/1280/1*oWeCly3vyoOK7wM5HxPMEg.gif）
   </p>
   <p class="graf graf--p graf-after--p" id="7c21">
    最后，要在手机上接收验证消息，需要激活语音和消息转发。导航到“所有产品和服务”&gt;“电话号码”&gt;“管理号码”&gt;“活动号码”（或
    <a class="markup--anchor markup--p-anchor" data-href="https://www.twilio.com/console/phone-numbers/incoming" href="https://www.twilio.com/console/phone-numbers/incoming" rel="noopener nofollow noreferrer" target="_blank">
     单击此处
    </a>
    ）。
   </p>
   <p class="graf graf--p graf-after--p" id="8281">
    单击您的 Twilio 电话号码。将“A call come in”字段从“Webbook”更改为 “TwiML”，并通过选择适当的 bin 名称（如 “my voice forwarding”）切换到自定义语音转发设置。对消息传递设置执行相同的操作。
   </p>
   <p class="graf graf--p graf-after--p" id="6758">
    <strong class="markup--strong markup--p-strong">
     还有一件事：在 Twilio 中静音
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="8ee0">
    因为每条消息都需要花钱，在您设置了号码并注册 Signal 或其他应用程序之后，在 Twilio 帐户上选择静音是值得的。
   </p>
   <p class="graf graf--p graf-after--p" id="a3aa">
    要关闭来电和消息，请导航至“管理号码”&gt;“有效号码”（或
    <a class="markup--anchor markup--p-anchor" data-href="https://www.twilio.com/console/phone-numbers/incoming" href="https://www.twilio.com/console/phone-numbers/incoming" rel="noopener nofollow noreferrer" target="_blank">
     直接转到此处
    </a>
    ）。在此页面中，单击您的电话号码以更改设置。从“A call come in”和“A message come in”字段中删除 Web 地址。参考动图：https://cdn-images-1.medium.com/max/1280/1*Fx2VihsOCFAxBqSl_4uYlg.gif
   </p>
   <div class="aspectRatioPlaceholder is-locked">
    <p class="graf graf--p graf-after--figure" id="ee24">
     就这样！如果您想接听电话和短信，可以随时重新开启。
    </p>
    <p class="graf graf--p graf-after--p" id="4f7f">
     <strong class="markup--strong markup--p-strong">
      为您的第二个 Signal 选择一个设备
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="1503">
     为了使用第二个电话号码注册 Signal，您将需要一个专用设备 — 或者至少需要设备上的专用用户帐户。该设备不需要任何电话服务，甚至在技术上也不需要是电话。
    </p>
    <p class="graf graf--p graf-after--p" id="9b1a">
     <strong class="markup--strong markup--p-strong">
      如果您是 Android 用户
     </strong>
     ，那么您很幸运。Android 在单个设备上支持多个用户帐户。每个用户帐户都有自己的一组应用和应用数据。您可以在设备上专门为第二个 Signal 创建帐户。
    </p>
    <p class="graf graf--p graf-after--p" id="be75">
     不要忘记为新用户设置屏幕锁定！ — 否则，即使主用户帐户被锁定，对您的手机具有物理访问权限的任何人都可以轻松访问第二个用户的 Signal 消息！
    </p>
    <p class="graf graf--p graf-after--p" id="fbac">
     要在手机上切换用户，请向下滚动，然后点按用户图标。
    </p>
    <p class="graf graf--p graf-after--p" id="21c8">
     <strong class="markup--strong markup--p-strong">
      如果您是 iPhone 用户
     </strong>
     ，并且您已经将 Signal 与您的私人电话号码一起使用了，那么设置您的公共 Signal 帐户会有点复杂。不幸的是，没有办法在同一部 iPhone 上设置两个独立的 Signal 电话号码。
    </p>
    <p class="graf graf--p graf-after--p" id="c596">
     最简单的方法是找到一个单独的 iOS 或 Android 设备。此设备不需要电话服务或 SIM 卡。它可能是您不再使用的旧 iPhone 或 Android 手机，或 iPad，iPod Touch 或 Android 平板电脑。
    </p>
    <p class="graf graf--p graf-after--p" id="808a">
     您也可以选择仅使用 Signal Desktop，这包括从 iPhone 中删除您的私人 Signal 帐户，设置公共帐户和 Signal Desktop，然后恢复私人帐户，这将向您的联系人发出安全号码已更改的警告。
    </p>
    <p class="graf graf--p graf-after--p" id="e902">
     还可以使用你的计算机注册第二个 Signal 号码，但这需要一些技术基础。您可以使用名为
     <a class="markup--anchor markup--p-anchor" data-href="https://github.com/AsamK/signal-cli" href="https://github.com/AsamK/signal-cli" rel="noopener nofollow noreferrer" target="_blank">
      signal-cli
     </a>
     的命令行工具向 Signal 服务注册您的电话号码，或者您可以在虚拟机中安装
     <a class="markup--anchor markup--p-anchor" data-href="http://www.android-x86.org/" href="http://www.android-x86.org/" rel="noopener nofollow noreferrer" target="_blank">
      android-x86
     </a>
     并将其用作 Signal 的虚拟 Android 设备。
    </p>
    <p class="graf graf--p graf-after--p" id="d3c0">
     <strong class="markup--strong markup--p-strong">
      注册新号码
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="54bd">
     您已经选择了第二个电话号码和一个设备，现在可以将其注册到 Signal。我在下面的照片中使用了 Android 设备，但 iOS 中的过程是类似的。
    </p>
    <p class="graf graf--p graf-after--p" id="3395">
     在您的第二个 Signal 设备（或 Android 手机的第二个用户）上，首次打开 Signal 应用程序。输入您用作公共 Signal 号码的电话号码（不要输入您的私人电话号码！）
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-2606 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=1000%2C1333&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=768%2C1024&amp;ssl=1 768w" data-recalc-dims="1" height="1333" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-2606" data-recalc-dims="1" height="1333" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-12.jpeg?resize=768%2C1024&amp;ssl=1 768w" width="1000"/>
     </noscript>
    </p>
    <p>
     然后，Signal 服务将发送短信到此电话号码。但是由于此设备实际上并未与此电话号码相关联，因此发送失败。至少在 Android 上，你必须等整整两分钟才能失败。（如果您使用的是 iOS 并且能够通过短信接收验证码，例如在 Google 语音应用中，请将代码输入）
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-2607 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=1000%2C1333&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?w=1000&amp;ssl=1 1000w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=768%2C1024&amp;ssl=1 768w" data-recalc-dims="1" height="1333" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-2607" data-recalc-dims="1" height="1333" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?w=1000&amp;ssl=1 1000w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-13.jpeg?resize=768%2C1024&amp;ssl=1 768w" width="1000"/>
     </noscript>
    </p>
    <p>
     现在短信验证失败了，您可以选择进行语音验证。确保您能够接听。如果这是固定电话，请立正，站在电话旁边; 如果这是 Google 语音号码，请确保您已在浏览器标签中打开了 Goog​​le 语音，或正确配置了 Google 语音等。
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-2608 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=1000%2C1333&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=768%2C1024&amp;ssl=1 768w" data-recalc-dims="1" height="1333" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-2608" data-recalc-dims="1" height="1333" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=1000%2C1333&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=225%2C300&amp;ssl=1 225w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-14.jpeg?resize=768%2C1024&amp;ssl=1 768w" width="1000"/>
     </noscript>
    </p>
    <p class="graf graf--p graf-after--figure" id="6f1f">
     如果一切顺利，您的新电话号码将在 Signal 服务中注册成功。
    </p>
    <p class="graf graf--p graf-after--p" id="3097">
     就是这样！此设备现在可以接收第二个 Signal 的消息。您可以通过此电话号码告诉所有可以与您联系的人，并且短信将最终转到此设备。
    </p>
    <p class="graf graf--p graf-after--p" id="2f62">
     <strong class="markup--strong markup--p-strong">
      使用安全号验证加密是否受到攻击
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="b04e">
     中间人攻击是针对双方的 — 例如小红和小明 — 他们认为自己是在和对方说话，然而事实上两个人正在与同一个攻击者说话，攻击者正在连接这两个人，沿途监视着一切。为了保护您的通信安全，您必须采取额外的步骤以验证您是直接加密给您的朋友而不是冒充者。
    </p>
    <p class="graf graf--p graf-after--p" id="77fc">
     您和您的每个 Signal 联系人共享一个唯一的“安全号码”。例如，小红和小明之间有一个安全号码，但小红与小白之间有着不同的安全号码。当小红将她在手机上看到的安全号码与小明看到的号码进行比较时，
     <strong class="markup--strong markup--p-strong">
      如果号码相同，则表示加密是安全的
     </strong>
     。如果数字不同，那就错了：也许小红在她和攻击者之间看到了一个安全号码，或者小明看到他和攻击者之间的安全号码，这就是他们不匹配的原因。
    </p>
    <p class="graf graf--p graf-after--p" id="410d">
     因为第一次向联系人发送消息时，任何人都不太可能试图攻击您的加密，因此 Signal 会自动信任它让每个联系人看到的第一个安全号码。（如果你希望讨论任何敏感话题的话，你可能还是需要确认一下）。
    </p>
    <p class="graf graf--p graf-after--p" id="b7fe">
     要验证加密是否安全，请先导航到
     <strong class="markup--strong markup--p-strong">
      验证屏幕
     </strong>
     ：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="b9c5">
      打开 Signal 应用程序并点按对话以打开它。
     </li>
     <li class="graf graf--li graf-after--li" id="352f">
      点击屏幕顶部的联系人姓名。
     </li>
     <li class="graf graf--li graf-after--li" id="b4c7">
      点按“验证安全号码”。
     </li>
    </ul>
    <figure aria-describedby="caption-attachment-2609" class="wp-caption aligncenter" id="attachment_2609" style="width: 540px">
     <img alt="" class="size-full wp-image-2609 jetpack-lazy-image" data-lazy-sizes="(max-width: 540px) 100vw, 540px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?resize=540%2C480&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?w=540&amp;ssl=1 540w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?resize=300%2C267&amp;ssl=1 300w" data-recalc-dims="1" height="480" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?resize=540%2C480&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="540"/>
     <noscript>
      <img alt="" class="size-full wp-image-2609" data-recalc-dims="1" height="480" sizes="(max-width: 540px) 100vw, 540px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?resize=540%2C480&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?w=540&amp;ssl=1 540w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/10/0-15.jpeg?resize=300%2C267&amp;ssl=1 300w" width="540"/>
     </noscript>
     <figcaption class="wp-caption-text" id="caption-attachment-2609">
      左：iPhone。右：Android
     </figcaption>
    </figure>
    <p class="graf graf--p graf-after--figure" id="d56e">
     <strong class="markup--strong markup--p-strong">
      亲自验证联系人
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="04b0">
     如果您能亲自见面，其中一个人只需要扫描对方的二维码即可。Android 用户点击 QR 码圈进行扫描，iPhone 用户点击底部的“扫描码”相机图标进行扫描。将相机对准朋友的二维码进行扫描，如果成功，则说明加密是安全的。
    </p>
    <p class="graf graf--p graf-after--p" id="7a20">
     <strong class="markup--strong markup--p-strong">
      远程验证联系人
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="f927">
     多数时候无法见面，但您仍然可以验证您的安全号码是否匹配 — 只是这个有点累。
    </p>
    <p class="graf graf--p graf-after--p" id="5450">
     您需要使用某些其他安全的通信渠道共享您在联系人中看到的安全号码 — 也就是说，不要在 Signal 消息中共享它。
    </p>
    <p class="graf graf--p graf-after--p" id="7aa9">
     一旦您的联系人获得您的安全号码，他们就需要导航到验证屏幕并逐位比较您发送的内容与他们看到的内容。如果匹配，您的对话就是安全的。
    </p>
    <p class="graf graf--p graf-after--p" id="6167">
     对于 Android 和 iPhone，您可以点击验证屏幕右上角的共享图标，以使用其他应用分享您的安全号码，或将其复制到剪贴板中。
    </p>
    <p class="graf graf--p graf-after--p" id="9c14">
     有时，您可能会在 Signal 对话中看到“安全号码已更改”的警告。点按即可验证。“ 这只能代表出现了以下两种情况之一：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="1907">
      您的联系人切换到了 Signal 的更新，也可能是因为他们购买了新手机，或者，
     </li>
     <li class="graf graf--li graf-after--li" id="828e">
      攻击者正在尝试将自己插入到您的 Signal 对话中。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="cef9">
     完全排除后者的可能性的唯一方法是再次通过上述验证过程之一。
    </p>
    <p class="graf graf--p graf-after--p" id="dc4f">
     <strong class="markup--strong markup--p-strong">
      隐藏 IP 地址
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="a596">
     当您在 Signal 拨打语音或视频电话时，您呼叫的对方可以查看您的 IP 地址，这可用于了解您的位置。但它无疑是个隐私暴露。
    </p>
    <p class="graf graf--p graf-after--p" id="4474">
     这里有一项功能允许您通过其服务器中继您的呼叫，以便呼叫另一端的人只能看到 Signal 服务器的 IP 地址，而不是您的真实 IP 地址。如果启用它，连接速度会稍微下降，会降低通话质量。但是更安全。以下是如何启用它：
    </p>
    <p class="graf graf--p graf-after--p" id="1624">
     如果您使用的是 Android：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="aeae">
      打开 Signal 应用程序，点击右上角的菜单图标，然后选择“设置”。
     </li>
     <li class="graf graf--li graf-after--li" id="b60d">
      转到“高级”，然后启用“始终中继呼叫”。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="90cb">
     如果你在 iPhone 上：
    </p>
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="8bbf">
      打开 Signal 应用程序，然后单击左上角的齿轮图标以进入 Signal 的设置。
     </li>
     <li class="graf graf--li graf-after--li" id="e8bb">
      转到隐私，然后启用“始终中继呼叫”。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="5ed4">
     好啦就是这么简单。你知道的，我们更支持 Tox/Cryptoact/Jitsi 等，但是 Signal 显然更大众，希望这篇文章能帮到您。
    </p>
   </div>
  </div>
  <div id="atatags-1611829871-5f3de74ae3156">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-2599" href="https://www.iyouport.org/%f0%9f%94%90-%e5%a6%82%e4%bd%95%e5%9c%a8%e4%b8%8d%e5%bf%85%e6%9a%b4%e9%9c%b2%e7%9c%9f%e5%ae%9e%e7%94%b5%e8%af%9d%e5%8f%b7%e7%a0%81%e7%9a%84%e6%83%85%e5%86%b5%e4%b8%8b%e4%bd%bf%e7%94%a8-signal/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-2599" href="https://www.iyouport.org/%f0%9f%94%90-%e5%a6%82%e4%bd%95%e5%9c%a8%e4%b8%8d%e5%bf%85%e6%9a%b4%e9%9c%b2%e7%9c%9f%e5%ae%9e%e7%94%b5%e8%af%9d%e5%8f%b7%e7%a0%81%e7%9a%84%e6%83%85%e5%86%b5%e4%b8%8b%e4%bd%bf%e7%94%a8-signal/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/activism/" rel="tag">
     Activism
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
    <a href="https://www.iyouport.org/tag/signal/" rel="tag">
     signal
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
   <time class="entry-date published" datetime="2018-10-31T05:14:46+08:00">
    2018年10月31日
   </time>
   <time class="updated" datetime="2019-05-03T05:28:01+08:00">
    2019年5月3日
   </time>
  </div>
 </div>
</article>

