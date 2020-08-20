---
layout: post
title: "把 LinkedIn 作为情报挖掘工具：简易指南 - iYouPort"
date: 2019-10-31T16:04:35+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%8a%8a-linkedin-%e4%bd%9c%e4%b8%ba%e6%83%85%e6%8a%a5%e6%8c%96%e6%8e%98%e5%b7%a5%e5%85%b7%ef%bc%9a%e7%ae%80%e6%98%93%e6%8c%87%e5%8d%97/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6423 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-289 category-54 category-67 tag-linkedin tag-osint tag-technique tag-technology tag-tools" id="post-6423">
 <header class="entry-header">
  <h1 class="entry-title">
   把 LinkedIn 作为情报挖掘工具：简易指南
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-11-01T00:04:35+08:00">
    2019年11月1日
   </time>
   <time class="updated" datetime="2019-08-28T09:14:14+08:00">
    2019年8月28日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <p class="graf graf--p">
   <span style="color: #00ccff;">
    <em>
     <strong>
      不论任何角度的开源调查工具手册基本都会包含 LinkedIn 的工具。LinkedIn 的确可以是 OSINT 的重要来源。
     </strong>
    </em>
   </span>
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6424 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1100%2C706&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=300%2C192&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=768%2C493&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1024%2C657&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1100%2C706&amp;ssl=1 1100w" data-recalc-dims="1" height="706" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1100%2C706&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6424" data-recalc-dims="1" height="706" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1100%2C706&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=300%2C192&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=768%2C493&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1024%2C657&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/面纱.jpg?resize=1100%2C706&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   中国当局对 Linkedin 的间谍使用应该不是新闻了，如果您还不了解，
   <a href="https://www.nytimes.com/2019/08/27/world/asia/china-linkedin-spies.html" rel="noopener noreferrer" target="_blank">
    在这里看到
   </a>
   英文版的相关报道之一：“西方情报官员称，中国特工正在通过LinkedIn与数千名外国公民联系，其中包括前政府官员”。
  </p>
  <p>
   但是很多
   <strong>
    相关报道均没能挖掘到中国当局的操作细节
   </strong>
   。
  </p>
  <p>
   如所有社交媒体一样，Linkedin 具有强大情报潜力。
  </p>
  <p class="graf graf--p">
   我们演示过如何通过 LinkedIn 挖掘监视资本主义寡头的政治旋转门，详见《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%b7%b1%e5%b1%82%e6%94%bf%e6%b2%bb%ef%bc%9afacebook%e9%87%91%e5%ad%97%e5%a1%94%e7%9a%84%e4%ba%ba%e5%bd%a2%e8%82%8c%e7%90%86-%e4%bb%85%e4%bb%85%e4%be%9d%e9%9d%a0%e5%bc%80%e6%ba%90/" href="https://www.iyouport.org/%e6%b7%b1%e5%b1%82%e6%94%bf%e6%b2%bb%ef%bc%9afacebook%e9%87%91%e5%ad%97%e5%a1%94%e7%9a%84%e4%ba%ba%e5%bd%a2%e8%82%8c%e7%90%86-%e4%bb%85%e4%bb%85%e4%be%9d%e9%9d%a0%e5%bc%80%e6%ba%90/" rel="noopener noreferrer" target="_blank">
    深层政治：Facebook金字塔的人形肌理
   </a>
   》。
  </p>
  <p class="graf graf--p">
   LinkedIn 可以作为各种主题的在线研究人员的有用资源；不论您是调查威胁性信息的来源、还是挖掘战争内幕，都可以用到它。
  </p>
  <p class="graf graf--p">
   本指南旨在提供有用的工具和技术，用于识别 LinkedIn 的个人资料并提取调查信息，然后您可以转到属于调查目标的其他社交媒体配置文件。
  </p>
  <p class="graf graf--p">
   搜查工具大全在这里《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e5%a6%82%e6%9e%9c%e4%bd%a0%e6%93%85%e9%95%bf%e6%90%9c%e7%b4%a2%ef%bc%8c%e4%bd%a0%e8%83%bd%e6%89%be%e5%88%b0%e4%b8%80%e5%88%87%ef%bc%9a%e6%b2%a1%e6%9c%89%e8%b0%b7%e6%ad%8c%e7%9a%84%e5%bc%ba%e5%a4%a7/" href="https://www.iyouport.org/%e5%a6%82%e6%9e%9c%e4%bd%a0%e6%93%85%e9%95%bf%e6%90%9c%e7%b4%a2%ef%bc%8c%e4%bd%a0%e8%83%bd%e6%89%be%e5%88%b0%e4%b8%80%e5%88%87%ef%bc%9a%e6%b2%a1%e6%9c%89%e8%b0%b7%e6%ad%8c%e7%9a%84%e5%bc%ba%e5%a4%a7/" rel="noopener noreferrer" target="_blank">
    如果你擅长搜索，你能找到一切
   </a>
   》。
  </p>
  <p class="graf graf--p">
   本指南将假设您是新手，从一无所知开始。感谢
   <a class="markup--anchor markup--p-anchor" data-href="https://www.bellingcat.com/resources/how-tos/2019/03/21/bellingcats-invitation-is-waiting-for-your-response-an-investigative-guide-to-linkedin/" href="https://www.bellingcat.com/resources/how-tos/2019/03/21/bellingcats-invitation-is-waiting-for-your-response-an-investigative-guide-to-linkedin/" rel="noopener noreferrer" target="_blank">
    Nathan Patin
   </a>
   的演示。希望更多民间独立调查人员的水平超越主流媒体。
  </p>
  <p class="graf graf--p">
   您可能从社交网络中收集的一些有用信息包括如下：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    简历细节，包括就业历史、教育经历和其他从属关系；
   </li>
   <li class="graf graf--li">
    个人信息和工作联系信息；
   </li>
   <li class="graf graf--li">
    大致地理位置；
   </li>
   <li class="graf graf--li">
    头像照片；
   </li>
   <li class="graf graf--li">
    用户名；
   </li>
   <li class="graf graf--li">
    个人网站；
   </li>
   <li class="graf graf--li">
    雇主的网站；
   </li>
   <li class="graf graf--li">
    个人社交关系中的其他人。
   </li>
  </ul>
  <p class="graf graf--p">
   ⚠️重要的是要记住，个人资料中列出的所有信息都是自我报告的，并且可以完全是捏造的。（后面的文章将举例说明这个问题该怎么办）
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    锁定个人资料
   </strong>
  </p>
  <p class="graf graf--p">
   在开始调查之前，您应该采取一些步骤，以便尽可能多地访问内容并同时确保您的匿名性。
  </p>
  <p class="graf graf--p">
   方法类似我们在
   <strong class="markup--strong markup--p-strong">
    《
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     角色扮演游戏
    </strong>
   </a>
   <strong class="markup--strong markup--p-strong">
    》
   </strong>
   中介绍过的（这在任何平台都可以用）
  </p>
  <p class="graf graf--p">
   首先，创建一个配置文件。
  </p>
  <p class="graf graf--p">
   如果不这样做，您将无法查看设置为私有的目标配置文件。
  </p>
  <p class="graf graf--p">
   这是针对 LinkedIn 的服务条款，
   <strong class="markup--strong markup--p-strong">
    调查人员可以为自己创建一个或多个虚假的个人资料，这样做可以模糊你的真实身份，以避免影响调查
   </strong>
   。
  </p>
  <p class="graf graf--p">
   其次，请确保您的个人资料的隐私设置尽可能严格，这样您就不会过多透露自己的身份线索（尤其是当您没有足够时间去注册一个袜子木偶的时候，只能使用真实的账户进行调查，就必须严格设置隐私权限）
  </p>
  <p class="graf graf--p">
   点击页面右上角的“我”图标，然后转到“帐户”下的“设置和隐私权”。
  </p>
  <p class="graf graf--p">
   有许多设置要锁定，所以这里不会详细介绍所有这些设置，但可能最重要的更改设置是“配置文件查看选项”。
  </p>
  <p class="graf graf--p">
   在这里调整为私密模式，以便可以显示成 “匿名 LinkedIn 会员”。
  </p>
  <p class="graf graf--p">
   LinkedIn 高级用户可以查看在90天内谁看过他们的个人资料，但他们无法看到设置为私密模式的用户。
  </p>
  <p class="graf graf--p">
   名字旁边的这个黄色 LinkedIn 徽标就是高级帐户的意思：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6425 jetpack-lazy-image" data-lazy-sizes="(max-width: 355px) 100vw, 355px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?resize=355%2C84&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?w=355&amp;ssl=1 355w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?resize=300%2C71&amp;ssl=1 300w" data-recalc-dims="1" height="84" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?resize=355%2C84&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="355"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6425" data-recalc-dims="1" height="84" sizes="(max-width: 355px) 100vw, 355px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?resize=355%2C84&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?w=355&amp;ssl=1 355w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-8.png?resize=300%2C71&amp;ssl=1 300w" width="355"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   非私密模式的非高级 LinkedIn 用户可以看到有关查看其个人资料的一些最新出现的个人的详细信息：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6426 jetpack-lazy-image" data-lazy-sizes="(max-width: 789px) 100vw, 789px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=789%2C62&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?w=789&amp;ssl=1 789w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=300%2C24&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=768%2C60&amp;ssl=1 768w" data-recalc-dims="1" height="62" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=789%2C62&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="789"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6426" data-recalc-dims="1" height="62" sizes="(max-width: 789px) 100vw, 789px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=789%2C62&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?w=789&amp;ssl=1 789w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=300%2C24&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-6.png?resize=768%2C60&amp;ssl=1 768w" width="789"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   所以调查人员需要注意这些，使用袜子木偶或严格设置，以避免被目标察觉。
  </p>
  <p class="graf graf--p">
   另请注意，处于私密模式的非高级用户无法查看谁在浏览他们的个人资料。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    查找这些个人资料
   </strong>
  </p>
  <p class="graf graf--p">
   找到一个名字不常见的人的 LinkedIn 个人资料的最简单方法就是谷歌搜索他们的名字加上用引号括起的“LinkedIn”这个词。
  </p>
  <p class="graf graf--p">
   如果这样还不起作用，就添加上您对它们的了解，例如 他们的地理位置、或当前的雇主。
  </p>
  <p class="graf graf--p">
   通常情况下，Google 的搜索算法会显示相关的个人资料。
  </p>
  <p class="graf graf--p">
   如果您能识别相关人员，还可以使用像
   <a class="markup--anchor markup--p-anchor" data-href="https://pipl.com/api/demo" href="https://pipl.com/api/demo" rel="noopener noreferrer" target="_blank">
    Pipl
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="https://www.spokeo.com/" href="https://www.spokeo.com/" rel="noopener noreferrer" target="_blank">
    Spokeo
   </a>
   这样的人物搜索网站返回 LinkedIn 个人资料。
  </p>
  <p class="graf graf--p">
   如果目标人名字太普通重名很多、或者您在查找其个人资料时遇到困难，这里有一些尝试解决问题的技巧。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Email Trick
   </strong>
  </p>
  <p class="graf graf--p">
   默认情况下，LinkedIn 允许“所有人”通过电子邮件查找您的个人资料。您可以通过设置改变这点，更改为 “2nd-degree connections” 和 “nobody.”
  </p>
  <p class="graf graf--p">
   如果您有目标的电子邮件地址，请将其输入
   <a class="markup--anchor markup--p-anchor" data-href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/example@example.com" href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/example@example.com" rel="noopener noreferrer" target="_blank">
    这个URL
   </a>
   以代替末尾的
   <a class="markup--anchor markup--p-anchor" data-href="mailto:example@example.com" href="/cdn-cgi/l/email-protection#0d68756c607d61684d68756c607d6168236e6260" rel="nofollow noopener noreferrer" target="_blank">
    <span class="__cf_email__" data-cfemail="acc9d4cdc1dcc0c9ecc9d4cdc1dcc0c982cfc3c1">
     [email protected]
    </span>
   </a>
   （您必须先登录到 LinkedIn）：
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/example@example.com" href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/example@example.com" rel="noopener noreferrer" target="_blank">
    https://www.linkedin.com/sales/gmail/profile/viewByEmail/
    <strong class="markup--strong markup--p-strong">
     <span class="__cf_email__" data-cfemail="3f5a475e524f535a7f5a475e524f535a115c5052">
      [email protected]
     </span>
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   如果对方使用个人资料的电子邮件地址并将其隐私设置为“所有人”，您将看到如下内容：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6427 jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-6.png?resize=223%2C200&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="200" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-6.png?resize=223%2C200&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="223"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6427" data-recalc-dims="1" height="200" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-6.png?resize=223%2C200&amp;ssl=1" width="223"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   要转到目标的 LinkedIn 个人资料，请单击其姓名或 LinkedIn 徽标。
  </p>
  <p class="graf graf--p">
   在上面的示例中，我使用了丝绸之路创建者 Ross Ulbricht 的 Gmail 地址：
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/rossulbricht@gmail.com." href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/rossulbricht@gmail.com." rel="noopener noreferrer" target="_blank">
    https://www.linkedin.com/sales/gmail/profile/viewByEmail/
    <strong class="markup--strong markup--p-strong">
     <span class="__cf_email__" data-cfemail="8efce1fdfdfbe2ecfce7ede6facee9e3efe7e2a0ede1e3">
      [email protected]
     </span>
    </strong>
    .
   </a>
  </p>
  <p class="graf graf--p">
   单击 Ulbricht 的名称或 LinkedIn 徽标将指向他的个人资料，网址为
   <a class="markup--anchor markup--p-anchor" data-href="https://www.linkedin.com/in/rossulbricht" href="https://www.linkedin.com/in/rossulbricht" rel="nofollow noopener noreferrer" target="_blank">
    https://www.linkedin.com/in/rossulbricht
   </a>
   。
  </p>
  <p class="graf graf--p">
   再举一个例子。
  </p>
  <p class="graf graf--p">
   使用 URL 字符串搜索被起诉的俄罗斯黑客 Yevgeniy Aleksandrovich Nikulin 使用的电子邮件地址，
   <a class="__cf_email__" data-cfemail="6b080302050a09020c5b5a2b0c060a020745080406" href="/cdn-cgi/l/email-protection">
    [email protected]
   </a>
   ；返回一个 LinkedIn 个人资料，其中包含 Nikulkin 另一个隐秘的别名：“Jammiro Quatro”。
  </p>
  <p class="graf graf--p">
   很好用吧。
   <strong class="markup--strong markup--p-strong">
    如果您想要挖化名的诈骗犯或者trolls，也可以这么做。
   </strong>
  </p>
  <p class="graf graf--p">
   ⚠️而另一方面，如果您正在使用袜子木偶做调查工作的掩护，请注意这点，不要被他人挖出来。遵循我们的《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" rel="noopener noreferrer" target="_blank">
    角色扮演
   </a>
   》规则。
  </p>
  <p class="graf graf--p">
   虽然 Quatro 的配置文件在表面上看似乎没什么用 —— 它是空白的，除了一个被列为“俄罗斯联邦”的位置）。但研究人员和调查人员可以
   <strong class="markup--strong markup--p-strong">
    在其他地方搜索这个别名
   </strong>
   ，执法部门可以寻求获得法院命令或要求 LinkedIn 提交有关该帐户及其所有者的其他信息的传票。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 LinkedIn 内
   </strong>
  </p>
  <p class="graf graf--p">
   您可以通过页面顶部的搜索栏在 LinkedIn 内进行搜索。
  </p>
  <p class="graf graf--p">
   您可以单击“所有过滤器”按地点、公司和其他条件设置搜索。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    使用搜索运算符可以获得更准确的结果
   </strong>
   ，比如 “headline:” “yoe:” 和 “geo:”（文末有列表）。
  </p>
  <p class="graf graf--p">
   如果您使用的是虚假个人资料，那么您搜索的大多数结果可能都不会显示用户的姓名，应该看起来像这样：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6428 jetpack-lazy-image" data-lazy-sizes="(max-width: 343px) 100vw, 343px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?resize=343%2C375&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?w=343&amp;ssl=1 343w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?resize=274%2C300&amp;ssl=1 274w" data-recalc-dims="1" height="375" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?resize=343%2C375&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="343"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6428" data-recalc-dims="1" height="375" sizes="(max-width: 343px) 100vw, 343px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?resize=343%2C375&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?w=343&amp;ssl=1 343w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-3.png?resize=274%2C300&amp;ssl=1 274w" width="343"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   LinkedIn 不会让您查看这些个人资料 —— 当您点击“LinkedIn会员”查看个人资料时，LinkedIn 会告诉您“个人资料的能见度有限”。
  </p>
  <p class="graf graf--p">
   于是下一步应该是使用搜索运算符在 LinkedIn 之外进行搜索。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Google Dorks
   </strong>
  </p>
  <p class="graf graf--p">
   这是最经典的。
  </p>
  <p class="graf graf--p">
   例如 the site:[example.com] 将返回 Google 仅为该特定网站编入索引的搜索结果。
  </p>
  <p class="graf graf--p">
   以上面图中的 KKK Grandwizard 为例，搜索应该是这样的：site:linkedin.com “KKK grandwizard” rhode island。
  </p>
  <p class="graf graf--p">
   请注意，搜索结果为空并不一定意味着您的目标没有帐户，而是更改帐户的隐私设置可以让 Google 不对其编制索引：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6429 jetpack-lazy-image" data-lazy-sizes="(max-width: 860px) 100vw, 860px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=860%2C283&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?w=860&amp;ssl=1 860w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=300%2C99&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=768%2C253&amp;ssl=1 768w" data-recalc-dims="1" height="283" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=860%2C283&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="860"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6429" data-recalc-dims="1" height="283" sizes="(max-width: 860px) 100vw, 860px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=860%2C283&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?w=860&amp;ssl=1 860w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=300%2C99&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-2.png?resize=768%2C253&amp;ssl=1 768w" width="860"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如下，可以找到罗德岛地区普罗维登斯的自我描述的 KKK Grandwizard 的人指向 Klansmen Joe，这样就能看到了：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6430 jetpack-lazy-image" data-lazy-sizes="(max-width: 846px) 100vw, 846px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=846%2C313&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?w=846&amp;ssl=1 846w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=300%2C111&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=768%2C284&amp;ssl=1 768w" data-recalc-dims="1" height="313" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=846%2C313&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="846"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6430" data-recalc-dims="1" height="313" sizes="(max-width: 846px) 100vw, 846px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=846%2C313&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?w=846&amp;ssl=1 846w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=300%2C111&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-2.png?resize=768%2C284&amp;ssl=1 768w" width="846"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    使用 LinkedIn 工具
   </strong>
  </p>
  <p class="graf graf--p">
   在确定相关配置文件后，要做的第一件事就是使用类似
   <a class="markup--anchor markup--p-anchor" data-href="https://rocketreach.co/" href="https://rocketreach.co/" rel="noopener noreferrer" target="_blank">
    RocketReach
   </a>
   或
   <a class="markup--anchor markup--p-anchor" data-href="https://chrome.google.com/webstore/detail/find-anyones-email-contac/jjdemeiffadmmjhkbbpglgnlgeafomjo" href="https://chrome.google.com/webstore/detail/find-anyones-email-contac/jjdemeiffadmmjhkbbpglgnlgeafomjo" rel="noopener noreferrer" target="_blank">
    ContactOut
   </a>
   这样的工具 —— 它可以获取 LinkedIn 个人资料并返回社交媒体资料、电子邮件地址和电话号码，这些信息又可用于其他搜索，以进行进一步的调查。
  </p>
  <p class="graf graf--p">
   请注意，要使用 RocketReach 的免费试用版，您必须使用企业电子邮件或 Gmail 或 Facebook 帐户创建帐户。您可能还需要使用电话号码验证您的帐户。
  </p>
  <p class="graf graf--p">
   运气好的时候结果看起来像这样：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6431 jetpack-lazy-image" data-lazy-sizes="(max-width: 986px) 100vw, 986px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=986%2C182&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?w=986&amp;ssl=1 986w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=300%2C55&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=768%2C142&amp;ssl=1 768w" data-recalc-dims="1" height="182" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=986%2C182&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="986"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6431" data-recalc-dims="1" height="182" sizes="(max-width: 986px) 100vw, 986px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=986%2C182&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?w=986&amp;ssl=1 986w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=300%2C55&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-2.png?resize=768%2C142&amp;ssl=1 768w" width="986"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   点击 Google+和 Facebook 图标会在这些平台上显示 Ulbricht 的帐户。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    注意用户名和联系信息
   </strong>
  </p>
  <p class="graf graf--p">
   记下 LinkedIn 个人资料的网址中是否有用户名非常重要。
  </p>
  <p class="graf graf--p">
   LinkedIn 提供的默认 URL 通常用短划线分隔，最后部分是看似随机的字母和数字（例如这样 https://
   <a class="markup--anchor markup--p-anchor" data-href="http://www.linkedin.com/in/jammiro-quatro-1a410656" href="https://www.linkedin.com/in/jammiro-quatro-1a410656" rel="nofollow noopener noreferrer" target="_blank">
    www.linkedin.com/in/jammiro-quatro-1a410656
   </a>
   ）
  </p>
  <p class="graf graf--p">
   LinkedIn 允许用户将他们的 URL 定制为唯一的用户名（例如这样，https://
   <a class="markup--anchor markup--p-anchor" data-href="http://www.linkedin.com/in/rossulbricht" href="https://www.linkedin.com/in/rossulbricht" rel="nofollow noopener noreferrer" target="_blank">
    www.linkedin.com/in/rossulbricht
   </a>
   ），然后可以通过Google搜索或运行像
   <a class="markup--anchor markup--p-anchor" data-href="https://knowem.com/" href="https://knowem.com/" rel="noopener noreferrer" target="_blank">
    KnowEm
   </a>
   这样的服务，该服务可以在数百个网站上搜索用户名。
  </p>
  <p class="graf graf--p">
   另外请务必点击“查看联系信息”，其中包含电子邮件地址、个人网站和社交媒体资料。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    反向搜索个人资料照片
   </strong>
  </p>
  <p class="graf graf--p">
   如果您的目标包含个人资料照片，请通过反向图像搜索服务查找，工具包括 TinEye 和 Yandex。
  </p>
  <p class="graf graf--p">
   大量经验证明，即使使用过滤器，
   <strong class="markup--strong markup--p-strong">
    Yandex 在反向图像搜索和面部识别方面也远远优于谷歌。
   </strong>
  </p>
  <p class="graf graf--p">
   如果您仍然无法识别有用的信息以进行深入的调查，建议查看与目标相关的人，即 Endorser。
  </p>
  <p class="graf graf--p">
   这也是警察和间谍常用的办法。
  </p>
  <p class="graf graf--p">
   找几个名字不同的 Endorser，并尝试快速搜索他们的 Facebook 个人资料，例如，查看他们是否有公共朋友列表。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    绘制个人资料之间的连接
   </strong>
  </p>
  <p class="graf graf--p">
   如果您已经确定了多个感兴趣的 LinkedIn 个人资料，并且您有兴趣确定他们之间的联系，那么有一个名为
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/eth0izzle/the-endorser" href="https://github.com/eth0izzle/the-endorser" rel="noopener noreferrer" target="_blank">
    The Endorser
   </a>
   的命令行脚本可以直观显示两个或多个 LinkedIn 个人资料之间的关系。
  </p>
  <p class="graf graf--p">
   输出一个像这样的 PDF：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6432 jetpack-lazy-image" data-lazy-sizes="(max-width: 982px) 100vw, 982px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=982%2C582&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?w=982&amp;ssl=1 982w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=300%2C178&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=768%2C455&amp;ssl=1 768w" data-recalc-dims="1" height="582" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=982%2C582&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="982"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6432" data-recalc-dims="1" height="582" sizes="(max-width: 982px) 100vw, 982px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=982%2C582&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?w=982&amp;ssl=1 982w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=300%2C178&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8-1.png?resize=768%2C455&amp;ssl=1 768w" width="982"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   很直观是吧。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    查找邮编
   </strong>
  </p>
  <p class="graf graf--p">
   在某些情况下，您可能想要更具体地了解目标的居住地，特别是对于将其位置列为“[大城市]区域”的用户。
  </p>
  <p class="graf graf--p">
   例如，假设您的目标被列为华盛顿特区地铁沿线，那么这其中会包括马里兰州和弗吉尼亚州的部分区域以及D.C.全部，但您想要深入了解具体位置。
  </p>
  <p class="graf graf--p">
   您可以在 LinkedIn 个人资料的源代码中找到用户自行提交的邮政编码。右键单击页面，然后选择“查看页面源码”。
  </p>
  <p class="graf graf--p">
   然后，Control/Command+ F 搜“postal”。您将看到如下所示的代码：postalCode＆quot;：＆quot; [邮编在这里]。
  </p>
  <p class="graf graf--p">
   例如，Nikolay Tyaglo 将自己描述为俄罗斯驻华大使馆的二等秘书，并在他的 LinkedIn 个人资料中列出了他在华盛顿特区的地理位置(
   <a class="markup--anchor markup--p-anchor" data-href="https://www.linkedin.com/in/nikolay-tyaglo-019a8a25/" href="https://www.linkedin.com/in/nikolay-tyaglo-019a8a25/" rel="noopener noreferrer" target="_blank">
    https://www.linkedin.com/in/nikolay-tyaglo-019a8a25/
   </a>
   ).
  </p>
  <p class="graf graf--p">
   Tyaglo 将他的邮政编码列为 20007，与俄罗斯驻华大使馆的邮政编码相同：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6433 jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-1.png?resize=285%2C37&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="37" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-1.png?resize=285%2C37&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="285"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6433" data-recalc-dims="1" height="37" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/9-1.png?resize=285%2C37&amp;ssl=1" width="285"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   只使用他的名字进行几次搜索，就有可能找到 Tyaglo 的 Twitter 个人资料(
   <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/NTyaglo" href="https://twitter.com/NTyaglo" rel="noopener noreferrer" target="_blank">
    https://twitter.com/NTyaglo
   </a>
   ) 和 Facebook 账户 (
   <a class="markup--anchor markup--p-anchor" data-href="https://www.facebook.com/nikolay.tyaglo.3" href="https://www.facebook.com/nikolay.tyaglo.3" rel="noopener noreferrer" target="_blank">
    https://www.facebook.com/nikolay.tyaglo.3
   </a>
   ).
  </p>
  <p class="graf graf--p">
   这两个档案都显示他与其他俄罗斯公务员有联系。
  </p>
  <p class="graf graf--p">
   但更重要的是，两边的档案都包括这张令人着迷的公开照片：半裸男（也许是同事？）在桑拿房里吃小龙虾：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6434 jetpack-lazy-image" data-lazy-sizes="(max-width: 720px) 100vw, 720px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?resize=720%2C960&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?w=720&amp;ssl=1 720w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?resize=225%2C300&amp;ssl=1 225w" data-recalc-dims="1" height="960" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?resize=720%2C960&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="720"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6434" data-recalc-dims="1" height="960" sizes="(max-width: 720px) 100vw, 720px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?resize=720%2C960&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?w=720&amp;ssl=1 720w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/10.jpg?resize=225%2C300&amp;ssl=1 225w" width="720"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   请注意，LinkedIn 不允许您输入该国家/地区的某个区域的邮政编码，并显示其他区域的位置。
  </p>
  <p class="graf graf--p">
   例如，您
   <strong class="markup--strong markup--p-strong">
    不能
   </strong>
   输入 20007 作为邮政编码并列出位置在华盛顿州西雅图。
  </p>
  <p class="graf graf--p">
   相反，LinkedIn 会根据您提供的邮政编码向您反馈有限数量的位置：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6435 jetpack-lazy-image" data-lazy-sizes="(max-width: 725px) 100vw, 725px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?resize=725%2C146&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?w=725&amp;ssl=1 725w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?resize=300%2C60&amp;ssl=1 300w" data-recalc-dims="1" height="146" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?resize=725%2C146&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="725"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6435" data-recalc-dims="1" height="146" sizes="(max-width: 725px) 100vw, 725px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?resize=725%2C146&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?w=725&amp;ssl=1 725w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/11-2.png?resize=300%2C60&amp;ssl=1 300w" width="725"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   LinkedIn 允许您输入不存在的邮政编码，或者在某些情况下已经过时的邮政编码。
  </p>
  <p class="graf graf--p">
   例如，Nikulin 的“Jammiro Quatro”配置文件的邮政编码为346146，似乎已过时。 Tyaglo 的第二个 LinkedIn 个人资料 (https://www.linkedin.com/in/nikolay-tyaglo-5368653b) 将他的位置列为“美国” — 个人资料的源代码中没有邮政编码。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    总结
   </strong>
  </p>
  <p class="graf graf--p">
   LinkedIn 可以成为在线调查的重要资源。
  </p>
  <p class="graf graf--p">
   无论您是想确定某人的位置，还是确定属于您主题的电子邮件地址和电话号码，LinkedIn 个人资料都可以提供大量有用的信息，从而大大扩展您的研究范围。
  </p>
  <p class="graf graf--p">
   所有 LinkedIn 用户都可以看到有关查看其页面的人的一些详细信息，并且一些 LinkedIn 用户（高级付费会员）可以确切地看到哪些人查看了他们的页面，但设置为私密模式的用户除外。
  </p>
  <p class="graf graf--p">
   于是创建一个具有非常严格的隐私设置的配置文件很重要，或者，干脆是一个与您的真实身份完全无关的
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9f%90%e4%ba%9b%e8%a1%8c%e5%8a%a8%e8%80%85%ef%bc%8c%e4%bd%a0%e9%9c%80%e8%a6%81%e4%b8%80%e4%b8%aa%e8%a2%9c%e5%ad%90%e6%9c%a8%e5%81%b6/" href="https://www.iyouport.org/%e6%9f%90%e4%ba%9b%e8%a1%8c%e5%8a%a8%e8%80%85%ef%bc%8c%e4%bd%a0%e9%9c%80%e8%a6%81%e4%b8%80%e4%b8%aa%e8%a2%9c%e5%ad%90%e6%9c%a8%e5%81%b6/" rel="noopener noreferrer" target="_blank">
    袜子木偶
   </a>
   帐户。
  </p>
  <p class="graf graf--p">
   一旦您创建并保护了帐户，有几种方法可以识别 LinkedIn 个人资料：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    在 LinkedIn 中，通过搜索栏，选择“所有过滤器”以更好地集中搜索或使用搜索运算符。
   </li>
   <li class="graf graf--li">
    通过电子邮件，使用这个链接：
    <a class="markup--anchor markup--li-anchor" data-href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/[emailgoeshere@example.com" href="https://www.linkedin.com/sales/gmail/profile/viewByEmail/[emailgoeshere@example.com" rel="noopener noreferrer" target="_blank">
     https://www.linkedin.com/sales/gmail/profile/viewByEmail/[
     <span class="__cf_email__" data-cfemail="dbbeb6bab2b7bcb4bea8b3bea9be9bbea3bab6abb7bef5b8b4b6">
      [email protected]
     </span>
    </a>
    ]
   </li>
   <li class="graf graf--li">
    Googledork，曾经介绍过，详见《
    <a class="markup--anchor markup--li-anchor" data-href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/" href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/" rel="noopener noreferrer" target="_blank">
     高级运算符辅助开源调查
    </a>
    》。比如使用 site：运算符可以有针对性地搜索 LinkedIn headlines 和其他内容。
   </li>
  </ul>
  <p class="graf graf--p">
   以下是隐藏的搜索运算符列表：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6436 jetpack-lazy-image" data-lazy-sizes="(max-width: 1079px) 100vw, 1079px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=1079%2C1307&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?w=1079&amp;ssl=1 1079w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=248%2C300&amp;ssl=1 248w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=768%2C930&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=845%2C1024&amp;ssl=1 845w" data-recalc-dims="1" height="1307" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=1079%2C1307&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1079"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6436" data-recalc-dims="1" height="1307" sizes="(max-width: 1079px) 100vw, 1079px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=1079%2C1307&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?w=1079&amp;ssl=1 1079w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=248%2C300&amp;ssl=1 248w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=768%2C930&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/运算符.jpeg?resize=845%2C1024&amp;ssl=1 845w" width="1079"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如果您已确定了感兴趣的个人资料，则可以使用以下工具和技术查看：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    RocketReach 和 ContactOut 只是两个例子，都可以返回与 LinkedIn 个人资料相关的社交媒体资料和联系信息。
   </li>
   <li class="graf graf--li">
    查看配置文件的URL以查看所有者是否已将其更改用户名，可在其他平台上搜索。不要忘记点击“查看联系信息”，其中包含电子邮件地址、个人网站和社交媒体资料。
   </li>
   <li class="graf graf--li">
    如果您没有找到任何可能引导您获得属于目标的其他个人资料的信息，请尝试搜索相关人的社交媒体资料，这些相关人的名字需要比较特殊。在共同朋友和共同关注者列表中查找您的目标。
   </li>
   <li class="graf graf--li">
    使用
    <a class="markup--anchor markup--li-anchor" data-href="https://github.com/eth0izzle/the-endorser" href="https://github.com/eth0izzle/the-endorser" rel="noopener noreferrer" target="_blank">
     The Endorser
    </a>
    可视化关系；
   </li>
   <li class="graf graf--li">
    使用 TinEye 和 Yandex 反向搜索个人资料照片；
   </li>
   <li class="graf graf--li">
    通过识别用户在个人资料的源代码中包含的邮政编码，深入查看目标的位置。它将显示在一个如下所示的字符串中：postalCode＆quot;：＆quot; [postal code here]。
   </li>
  </ul>
  <p class="graf graf--p">
   您还有其他好玩的工具和思路吗？欢迎在留言中告诉我们。
  </p>
  <p class="graf graf--p">
   下篇文章将演示如果资料完全是假的，如何揭示？⚪️
  </p>
  <div id="atatags-1611829871-5f3ec05e64158">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6423" href="https://www.iyouport.org/%e6%8a%8a-linkedin-%e4%bd%9c%e4%b8%ba%e6%83%85%e6%8a%a5%e6%8c%96%e6%8e%98%e5%b7%a5%e5%85%b7%ef%bc%9a%e7%ae%80%e6%98%93%e6%8c%87%e5%8d%97/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6423" href="https://www.iyouport.org/%e6%8a%8a-linkedin-%e4%bd%9c%e4%b8%ba%e6%83%85%e6%8a%a5%e6%8c%96%e6%8e%98%e5%b7%a5%e5%85%b7%ef%bc%9a%e7%ae%80%e6%98%93%e6%8c%87%e5%8d%97/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/linkedin/" rel="tag">
     LinkedIn
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
   <time class="entry-date published" datetime="2019-11-01T00:04:35+08:00">
    2019年11月1日
   </time>
   <time class="updated" datetime="2019-08-28T09:14:14+08:00">
    2019年8月28日
   </time>
  </div>
 </div>
</article>

