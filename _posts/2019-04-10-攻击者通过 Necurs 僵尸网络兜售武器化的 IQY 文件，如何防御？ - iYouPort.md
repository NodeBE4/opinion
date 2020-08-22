---
layout: post
title: "攻击者通过 Necurs 僵尸网络兜售武器化的 IQY 文件，如何防御？ - iYouPort"
date: 2019-04-10T15:56:14+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%94%bb%e5%87%bb%e8%80%85%e9%80%9a%e8%bf%87-necurs-%e5%83%b5%e5%b0%b8%e7%bd%91%e7%bb%9c%e5%85%9c%e5%94%ae%e6%ad%a6%e5%99%a8%e5%8c%96%e7%9a%84-iqy-%e6%96%87%e4%bb%b6%ef%bc%8c%e5%a6%82%e4%bd%95/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-8032 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 category-67 tag-security tag-selfcare tag-social-engineering tag-technology" id="post-8032">
 <header class="entry-header">
  <h1 class="entry-title">
   攻击者通过 Necurs 僵尸网络兜售武器化的 IQY 文件，如何防御？
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
   <time class="entry-date published" datetime="2019-04-10T23:56:14+08:00">
    2019年4月10日
   </time>
   <time class="updated" datetime="2019-08-11T00:04:30+08:00">
    2019年8月11日
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
     <em>
      <strong>
       人的弱点依旧是最薄弱环节
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-8037 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=1000%2C667&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=272%2C182&amp;ssl=1 272w" data-recalc-dims="1" height="667" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=1000%2C667&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8037" data-recalc-dims="1" height="667" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=1000%2C667&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=300%2C200&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=768%2C512&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/0-41.jpeg?resize=272%2C182&amp;ssl=1 272w" width="1000"/>
   </noscript>
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="0bf9">
   你有没有走过一家商店，发现了一件看起来很奇怪的物品，但你还是把它放进了你的购物车里？也许它很有吸引力，因为它是你想要弄来琢磨一番的新东西；也许它看起来很闪亮 — 你必须拥有它 …… 如果是这样，你可能危险了，攻击者正在寻找和你一样的购物者。他们不断发布新的“产品”，通常是狡猾的电子邮件，以吸引毫无戒心的用户。最近出现的一波恶意“产品”已经通过互联网查询文件（IQY）附件的未经请求的电邮形式进入虚拟“购物街”。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="0672">
   <strong class="ju kz">
    什么是 IQY？
   </strong>
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="dd8a">
   什么是 IQY 文件附件？为什么它成为了攻击者当月的主流风格？Microsoft Excel 使用此类型的文件将数据从 Internet 提取到电子表格中，为此，URL 被嵌入到 IQY 文件中，该文件便于从指定的网页中提取数据。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="f456">
   虽然 IQY 文件扩展名对许多用户来说听起来有点陌生，但是如果你看一下使用 SharePoint 的企业级网络，例如一个与 Microsoft Office 集成的基于 Web 的协作平台，你肯定会找到许多使用 IQY 文件的实例。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="af49">
   这些文件可帮助网络用户共享和编辑 Excel 电子表格，以及其他用途。可以想象，
   <strong class="ju kz">
    带有嵌入式 URL 的常见文件可以很容易地被用于恶意目的
   </strong>
   。这就是为什么这些类型的文件不会在不与用户交互的情况下运行代码的原因。为防止其内容自动加载，文件中内置了一个安全提示，询问用户打开 IQY 文件时是否要“启用”数据连接。
  </p>
  <figure aria-describedby="caption-attachment-8033" class="wp-caption aligncenter" id="attachment_8033" style="width: 393px">
   <img alt="" class="size-full wp-image-8033 jetpack-lazy-image" data-lazy-sizes="(max-width: 393px) 100vw, 393px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?resize=393%2C234&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?w=393&amp;ssl=1 393w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?resize=300%2C179&amp;ssl=1 300w" data-recalc-dims="1" height="234" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?resize=393%2C234&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="393"/>
   <noscript>
    <img alt="" class="size-full wp-image-8033" data-recalc-dims="1" height="234" sizes="(max-width: 393px) 100vw, 393px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?resize=393%2C234&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?w=393&amp;ssl=1 393w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/2-22.png?resize=300%2C179&amp;ssl=1 300w" width="393"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8033">
    Warning box asking user to “enable” or “disable” a data connection in an IQY file (Source: IBM X-Force)
   </figcaption>
  </figure>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="f6e1">
   <strong class="ju kz">
    为什么攻击者很喜欢 IQY 文件？
   </strong>
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="224c">
   出于几个原因，IQY 文件对攻击者来说很有吸引力。首先，它们很容易创建，使用文本编辑程序就可以创建 IQY 文件。攻击者可以将其恶意指令与可操作的 URL 一起插入文本编辑器，并使用“.iqy”扩展名保存。然后，他们可以使用该文件直接从感染区域传递恶意代码。IQY 也很小且很不显眼，使得它们更容易植入未经请求的电子邮件中。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="3a25">
   这种类型的文件附件相对不常见，并且通常不会附加到电子邮件中，这就是攻击者可能感兴趣的原因。攻击者不断在其垃圾邮件活动中随机插放文件类型，目标就是那些毫无戒心的用户。他们还试图防范安全解决方案，特别是那些过滤网络钓鱼和恶意软件感染活动中最常见的文件类型和扩展的解决方案。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="72fc">
   IBM X-Force 研究最近的一些统计数据显示，近几个月来，在垃圾邮件活动中使用 IQY 文件的情况一直在增加。从 2018 年 5 月 25 日开始，首次被观察到一个主要的恶意垃圾邮件分销商 Necurs 僵尸网络使用了
   <a class="bj cu lg lh li lj" href="https://exchange.xforce.ibmcloud.com/collection/Necurs-spreads-FlawedAmmyy-RAT-using-Excel-Internet-Query-attachments-c34ee7d56e1c32ab3592e47bae9f9f53">
    武器化的 IQY 文件附件
   </a>
   。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="ff55">
   从2018年5月下旬到7月中旬，IBM X-Force 研究人员在其垃圾邮件陷阱中捕获了来自 Necurs 资源的 780,000 多封垃圾邮件，所有这些消息都包含 IQY 附件。
  </p>
  <figure aria-describedby="caption-attachment-8034" class="wp-caption aligncenter" id="attachment_8034" style="width: 1260px">
   <img alt="" class="size-full wp-image-8034 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1100%2C524&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?w=1260&amp;ssl=1 1260w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=768%2C366&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1024%2C488&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1100%2C524&amp;ssl=1 1100w" data-recalc-dims="1" height="524" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1100%2C524&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="size-full wp-image-8034" data-recalc-dims="1" height="524" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1100%2C524&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?w=1260&amp;ssl=1 1260w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=300%2C143&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=768%2C366&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1024%2C488&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/3-20.png?resize=1100%2C524&amp;ssl=1 1100w" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8034">
    IQY attachment spam campaigns spewed by the Necurs Botnet (Source: IBM X-Force)
   </figcaption>
  </figure>
  <figure aria-describedby="caption-attachment-8035" class="wp-caption aligncenter" id="attachment_8035" style="width: 520px">
   <img alt="" class="size-full wp-image-8035 jetpack-lazy-image" data-lazy-sizes="(max-width: 520px) 100vw, 520px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?resize=520%2C302&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?w=520&amp;ssl=1 520w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?resize=300%2C174&amp;ssl=1 300w" data-recalc-dims="1" height="302" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?resize=520%2C302&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="520"/>
   <noscript>
    <img alt="" class="size-full wp-image-8035" data-recalc-dims="1" height="302" sizes="(max-width: 520px) 100vw, 520px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?resize=520%2C302&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?w=520&amp;ssl=1 520w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/4-12.png?resize=300%2C174&amp;ssl=1 300w" width="520"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-8035">
    Example of email message with IQY attachment (Source: IBM X-Force)
   </figcaption>
  </figure>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="3f98">
   进一步分析在垃圾邮件陷阱中捕获的电子邮件后，确认 IQY 附件包含恶意 URL。一旦用户被诱骗执行与嵌入式 URL 的连接，设备上的感染链就会启动。这导致最终设备被下载
   <a class="bj cu lg lh li lj" href="https://exchange.xforce.ibmcloud.com/collection/FlawedAmmyy-Remote-Access-Trojan-RAT-fd8c71d2be02ec2aff3d0c5b11517b54">
    FlawedAmmy RAT
   </a>
   ，这是一种恶意的远程访问工具，其源代码在2018年3月泄露，引发了大量的攻击活动，将这种恶意软件传播给数十万用户。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="1602">
   以下是一些恶意 URL 的示例包含在 X-Force 活动中的 Necurs IQY 附件里：
  </p>
  <ul class="">
   <li class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf ln lo lp" data-selectable-paragraph="" id="e59c">
    <a class="bj cu lg lh li lj" href="http://clodflarechk/">
     http://clodflarechk
    </a>
    [.]com/2.dat
   </li>
   <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="41a8">
    <a class="bj cu lg lh li lj" href="http://brembotembo/">
     http://brembotembo
    </a>
    [.]com/2.dat
   </li>
   <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="b0e9">
    <a class="bj cu lg lh li lj" href="http://thespecsupportservice/">
     http://thespecsupportservice
    </a>
    [.]com/duo.dat
   </li>
   <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="ab0f">
    <a class="bj cu lg lh li lj" href="http://brtt7/">
     http://brtt7
    </a>
    [.]com/preload.gif
   </li>
   <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="8bf7">
    <a class="bj cu lg lh li lj" href="http://169.239.0.129/">
     http://169.239.129
    </a>
    [.]17/404
   </li>
   <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="2751">
    <a class="bj cu lg lh li lj" href="http://t69c/">
     http://t69c
    </a>
    [.]com/A
   </li>
  </ul>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="532b">
   <strong class="ju kz">
    <em class="lv">
     延伸阅读：《
    </em>
   </strong>
   <a class="bj cu lg lh li lj" href="https://www.iyouport.org/%e7%bd%91%e7%bb%9c%e6%88%98%ef%bc%9a%e2%9d%97%ef%b8%8f%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e5%ad%a6%e6%ad%a3%e8%a2%ab%e5%85%a8%e7%90%83%e5%bd%93%e6%9d%83%e8%80%85%e5%88%a9%e7%94%a8%e6%9d%a5%e6%94%bb/">
    <strong class="ju kz">
     <em class="lv">
      网络战：❗️社交工程学正被全球当权者利用来攻击活动家、异议人士和记者，如何抵御？
     </em>
    </strong>
   </a>
   <strong class="ju kz">
    <em class="lv">
     》
    </em>
   </strong>
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="8997">
   <strong class="ju kz">
    足够的 IQY 文件可供使用
   </strong>
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="929e">
   在 2018 年7月中旬，一个名为
   <a class="bj cu lg lh li lj" href="https://exchange.xforce.ibmcloud.com/collection/f7859111aa14bde08e8af6268b8f0aa7/report/64eb3b0dd07e148d6e9c0aad152b94c6/URL/0utlook.bid">
    DarkHydrus
   </a>
   的攻击组织也开始使用恶意 IQY 附件。DarkHydrus 的网络钓鱼邮件隐藏了武器化 IQY 文件的 Roshal Archive Compressed（RAR）。根据 SecurityWeek 的说法，IQY 文件中的 URL 导致在受害者的设备上运行 PowerShell 脚本来设置后门。此次攻击被认为具有国家政府动机。
  </p>
  <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="50b4">
   另一个例子：最近观察到的恶意 IQY 附件的使用来自 Marap 下载程序恶意软件。Marap 网络钓鱼电子邮件活动始于 2018 年 8 月，IBM X-Force 研究人员从 2018 年8月10日开始捕获此活动的电子邮件，确认其中包含恶意 IQY 文件附件。
  </p>
  <div class="lx l">
   <figure aria-describedby="caption-attachment-8036" class="wp-caption aligncenter" id="attachment_8036" style="width: 490px">
    <img alt="" class="size-full wp-image-8036 jetpack-lazy-image" data-lazy-sizes="(max-width: 490px) 100vw, 490px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?resize=490%2C208&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?w=490&amp;ssl=1 490w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?resize=300%2C127&amp;ssl=1 300w" data-recalc-dims="1" height="208" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?resize=490%2C208&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="490"/>
    <noscript>
     <img alt="" class="size-full wp-image-8036" data-recalc-dims="1" height="208" sizes="(max-width: 490px) 100vw, 490px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?resize=490%2C208&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?w=490&amp;ssl=1 490w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/5-10.png?resize=300%2C127&amp;ssl=1 300w" width="490"/>
    </noscript>
    <figcaption class="wp-caption-text" id="caption-attachment-8036">
     Necurs-borne email hauling IQY attachment that fetches the Marap malware (Source: IBM X-Force)
    </figcaption>
   </figure>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="1832">
    <strong class="ju kz">
     IQY — 你知道为什么……
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="5e5f">
    在垃圾邮件中使用各种经常是鲜为人知的文件类型和扩展名是在主要僵尸网络和垃圾邮件分发者中不断增长的趋势。为了确保他们的恶意电子邮件能够抵达收件人、并且不会被电子邮件过滤器阻止，网络犯罪组织一直在改变他们的策略，全年提供多种形状的诱杀文件。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="b346">
    由于 IQY 文件在许多企业网络中具有固有的实用性和普遍性，因此某些安全实践可以帮助降低与它们相关的风险，而无需完全阻止这些文件的使用。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="03ca">
    <strong class="ju kz">
     给防御者的提示
    </strong>
   </p>
   <ul class="">
    <li class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf ln lo lp" data-selectable-paragraph="" id="f777">
     最好的防御策略之一是宣传流行的垃圾邮件发送者策略。确保组织中的每个人都了解 IQY 文件带来的危险。随着他们在垃圾邮件活动中的使用量的迅速提升，需要将 IQY 文件纳入反垃圾邮件和网络钓鱼知识的培训。
    </li>
    <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="159c">
     如果您的环境中未使用 IQY 文件，则可以使用组策略阻止它们。系统管理员可以
     <strong class="ju kz">
      修改信任中心设置
     </strong>
     以禁用从 Excel 电子表格中启动的数据连接。
    </li>
    <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="313a">
     如果您单位的网络上需要 IQY 文件，请使用高级电子邮件过滤规则。某些电子邮件安全解决方案提供了检查电子邮件附件内容的选项。
     <strong class="ju kz">
      阻止附件中的特定恶意内容仍然可以允许合法的 IQY 文件被通过
     </strong>
     。
    </li>
    <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="e35f">
     在电子邮件过滤规则中使用 IP 白名单，以获取 IQY 文件的允许发件人。
     <strong class="ju kz">
      请谨慎使用域名白名单规则
     </strong>
     ，因为攻击者通常会在鱼叉式网络钓鱼攻击中尝试欺骗电子邮件域。
    </li>
    <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="fef9">
     <strong class="ju kz">
      及时了解新出现的威胁和妥协指标（IoC）
     </strong>
     阻止访问当前的攻击者在 IQY 文件中使用的已知恶意 URL IoC。
    </li>
    <li class="js jt ce bc ju b jv lq jx lr jz ls kb lt kd lu kf ln lo lp" data-selectable-paragraph="" id="2b83">
     确保您的安全信息与事件管理（SIEM）系统可以识别威胁，尤其是未知威胁。
    </li>
   </ul>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="a9a6">
    来自 Verizon 的 “2018年数据泄露调查报告” 的数据表明，网络钓鱼仍然是诱骗用户的一种非常有效的方式。安全研究人员经常强调警惕骗局，就如我们，介绍并演示了很多关于 社交工程攻击 的实例，人性弱点是所有防御中最为薄弱的环节。但太多的恶意电子邮件仍然可以突破企业防御并以危险的速度提供给最终用户。根据 “IBM X-Force 威胁情报指数”，2017 年遭受攻击的被调查者中有 12％ 属于攻击者试图利用无意中的内部弱点所导致的结果。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="44ff">
    以下列举一些最常见的电子邮件安全威胁。不论是活动家、调查记者、人权捍卫者、时政作者和律师，还是公司员工，都应该小心。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="73d7">
    <strong class="ju kz">
     恶意链接
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="244e">
    电子邮件中的恶意链接会将收件人引向将盗取其凭据的网站。用户误认为自己在安全的网站上，并且通常会回复查询信息（例如，“点击此处验证您的信息”）。一旦攻击者获得了来自毫无戒心的用户的关键信息，他们就可以访问公司网络或其他敏感数据。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="ef30">
    <strong class="ju kz">
     删除恶意软件
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="863b">
    如果邮件包含恶意附件，则只需打开该文件即可感染，例如勒索软件或键盘记录软件。用户通常被要求打开声称包含财务信息的附件，例如发票或账单，从而被欺骗。这是一种在商业环境中非常有效的攻击技术。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="94d9">
    <strong class="ju kz">
     商业电子邮件妥协
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="c506">
    近年来，企业电子邮件诈骗（BEC）案件正稳步增长。它也被称为捕鲸，攻击者冒充高级管理人员并试图诱骗员工或客户转移资金或敏感数据。根据互联网犯罪投诉中心（IC3）的“2017年互联网犯罪报告”，BEC 和电子邮件帐户妥协（EAC）造成的损失最大，使受害者损失超过 6.76 亿美元。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="5e2b">
    <strong class="ju kz">
     评估安全性
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="9c91">
    评估当前防御策略的一种方法是从网络钓鱼模拟开始。让您的安全团队制作模拟网络钓鱼电子邮件并将其发送给用户。分析结果将成为评估组织内安全教育和意识水平的良好开端。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="7f72">
    组织还应对其入站和出站电子邮件进行更多技术评估，以确定每天有多少恶意邮件通过公司服务器，并确保不与外部方共享敏感信息。渗透测试人员可以使用电子邮件创建更具针对性的攻击模拟，并提供有关人员和技术方面存在弱点的反馈以及他们如何访问敏感信息。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="5250">
    一旦安全经理了解了电子邮件安全状态，下一步就是制定一个支持防御的策略。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="dcf4">
    <strong class="ju kz">
     考虑安全托管服务
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="82e8">
    安全托管服务（MSS）提供专业知识，帮助您满足电子邮件安全的需求，评估当前战略和平台的执行情况，并提出有关软件和硬件升级的建议。电子邮件安全服务提供商可以提供一般指导并帮助您设置集成垃圾邮件检测和过滤、防病毒和反间谍软件，扫描邮件和附件中的病毒和蠕虫，以及出站电子邮件加密的解决方案。这些服务通常通过订阅模式提供，足够灵活，允许现场管理员设置满足其组织独特需求的策略和控制。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="48a5">
    <strong class="ju kz">
     投资安全意识培训
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="261d">
    全面的提高认识计划应该教育最终用户有关恶意附件、危险链接、常见电子邮件诈骗以及鱼叉式网络钓鱼活动中使用的技术。寻找一个能够根据您组织的个人风险状况定制培训的提供者。请记住，攻击者用于针对在金融服务公司的工作人员所使用的网络钓鱼技术将与用于针对医疗保健诊所的最终用户的策略有所不同。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="c024">
    <strong class="ju kz">
     采用分层方法保护电子邮件安全
    </strong>
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="6fc8">
    外部扫描、周边保护、内部网络邮件服务器和反垃圾邮件解决方案、以及安全意识培训，放在一起使用时更有效。电子邮件安全的分层方法的目标是构建一组多样化的防御，如果其中一层被违反，您还可以依赖另一层作为防备。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="5891">
    电子邮件安全的分层方法需要技术和教育的结合。这些层可能包括外部和内部的保护，以及相关教育，因此员工往往是最后的防线。
   </p>
   <p class="js jt ce bc ju b jv jw jx jy jz ka kb kc kd ke kf" data-selectable-paragraph="" id="41c9">
    尽管现在可以使用所有其他类型的消息传递平台进行通信，但电子邮件不会很快消失。只要企业使用电子邮件，犯罪分子就会利用它作为攻击媒介。评估您的电子邮件安全性对于采取可靠全面的方法来防范违规行为是至关重要的。◾️
   </p>
  </div>
  <div id="atatags-1611829871-5f406bd4e506c">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-8032" href="https://www.iyouport.org/%e6%94%bb%e5%87%bb%e8%80%85%e9%80%9a%e8%bf%87-necurs-%e5%83%b5%e5%b0%b8%e7%bd%91%e7%bb%9c%e5%85%9c%e5%94%ae%e6%ad%a6%e5%99%a8%e5%8c%96%e7%9a%84-iqy-%e6%96%87%e4%bb%b6%ef%bc%8c%e5%a6%82%e4%bd%95/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-8032" href="https://www.iyouport.org/%e6%94%bb%e5%87%bb%e8%80%85%e9%80%9a%e8%bf%87-necurs-%e5%83%b5%e5%b0%b8%e7%bd%91%e7%bb%9c%e5%85%9c%e5%94%ae%e6%ad%a6%e5%99%a8%e5%8c%96%e7%9a%84-iqy-%e6%96%87%e4%bb%b6%ef%bc%8c%e5%a6%82%e4%bd%95/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-8032-5f406bd4e601f" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=8032&amp;origin=www.iyouport.org&amp;obj_id=161182987-8032-5f406bd4e601f" id="like-post-wrapper-161182987-8032-5f406bd4e601f">
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
    <a href="https://www.iyouport.org/tag/social-engineering/" rel="tag">
     social engineering
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-04-10T23:56:14+08:00">
    2019年4月10日
   </time>
   <time class="updated" datetime="2019-08-11T00:04:30+08:00">
    2019年8月11日
   </time>
  </div>
 </div>
</article>

