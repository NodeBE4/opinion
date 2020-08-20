---
layout: post
title: "全球搜罗：用于信息验证的基本地理定位工具 #OSINT 开源调查技术继续 - iYouPort"
date: 2018-08-26T16:15:23+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%85%a8%e7%90%83%e6%90%9c%e7%bd%97%ef%bc%9a%e7%94%a8%e4%ba%8e%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%e7%9a%84%e5%9f%ba%e6%9c%ac%e5%9c%b0%e7%90%86%e5%ae%9a%e4%bd%8d%e5%b7%a5%e5%85%b7-osint-%e5%bc%80/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-2429 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-activism tag-osint tag-technique tag-technology tag-truth" id="post-2429">
 <header class="entry-header">
  <h1 class="entry-title">
   全球搜罗：用于信息验证的基本地理定位工具 #OSINT 开源调查技术继续
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-08-27T00:15:23+08:00">
    2018年8月27日
   </time>
   <time class="updated" datetime="2019-05-03T00:31:54+08:00">
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
     <em>
      真相不能一直被权力把控着。事实上民间独立组织和个人完全可以使用基本技术和智慧构建自己的“情报系统”。在没有国界的地球村中，发挥你更大的潜力。欢迎关注我们的开源调查系列文章，希望它们能成为您的得力助手
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2431 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1100%2C681&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=300%2C186&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=768%2C476&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1024%2C634&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1100%2C681&amp;ssl=1 1100w" data-recalc-dims="1" height="681" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1100%2C681&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2431" data-recalc-dims="1" height="681" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1100%2C681&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=300%2C186&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=768%2C476&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1024%2C634&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-15.jpeg?resize=1100%2C681&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="ac91">
   有很多工具可以用来验证信息，以及协助开源调查，我们陆续展示过一些，包括预先存在的工具，例如 Google Earth 和过去几年来陆续被开发出的新工具。在本文中，我们将继续研究其中的一些工具，以及它们在验证和调查过程中的不同用途。然后再玩一个小游戏。
  </p>
  <p class="graf graf--p graf-after--p" id="947f">
   <strong class="markup--strong markup--p-strong">
    Googling Earth
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="c647">
   我们一直在建议普通人远离谷歌，因为它真的很可怕。但对于开源调查
   <a class="markup--anchor markup--p-anchor" data-href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/5b768a8ec09172001452be72/edit/search/posts?query=%23OSINT" href="https://www.wix.com/dashboard/6fc0666c-c125-4701-93b5-303f8db9aa33/blog/5b768a8ec09172001452be72/edit/search/posts?query=%23OSINT" rel="nofollow noopener noreferrer" target="_blank">
    #OSINT
   </a>
   工作来说，它惊人的数据量能提供非常强大的帮助。
  </p>
  <p class="graf graf--p graf-after--p" id="043c">
   对于许多调查来说，Google Earth 都是验证图像和视频的关键工具，在地理定位过程中发挥着极其重要的作用。
  </p>
  <p class="graf graf--p graf-after--p" id="6b5c">
   地理位置是一种值得强调的信息验证方法，可以将照片或视频中可见的地标和特征与其他图像（通常是卫星图像）进行比较，以确认记录图像的真实地理位置。从最基本的角度来看，GoogleEarth 允许
   <strong class="markup--strong markup--p-strong">
    从全球访问卫星图像，这是地理定位的关键资源
   </strong>
   。它还具有许多其他有用的功能，这些功能也可以在验证中发挥作用。
  </p>
  <p class="graf graf--p graf-after--p" id="98fa">
   经常被忽视的一个特征是就是
   <strong class="markup--strong markup--p-strong">
    历史图像
   </strong>
   ，可以在“视图”菜单下轻松找到。
  </p>
  <p class="graf graf--p graf-after--p" id="f6fd">
   通过启用此功能，用户将看到一个滑块，允许他们将显示的图像更改为 GoogleEarth 上可用的任何历史图像。出于多种原因，这将非常高效; 例如，卫星在记录图像时的位置可能会为您提供建筑物某一侧的一个视图，而在不同时间拍摄的其他图像可能会为您提供完全不同角度的建筑视图，这在您尝试使照片或视频中的建筑物的特征与卫星图像相匹配的过程中非常有用。
  </p>
  <p class="graf graf--p graf-after--p" id="5299">
   以下示例显示了两个不同日期的相同位置，提供了建筑物两个不同侧面的视图。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2432 jetpack-lazy-image" data-lazy-sizes="(max-width: 877px) 100vw, 877px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=877%2C511&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?w=877&amp;ssl=1 877w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=300%2C175&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=768%2C447&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=740%2C430&amp;ssl=1 740w" data-recalc-dims="1" height="511" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=877%2C511&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="877"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2432" data-recalc-dims="1" height="511" sizes="(max-width: 877px) 100vw, 877px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=877%2C511&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?w=877&amp;ssl=1 877w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=300%2C175&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=768%2C447&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-16.jpeg?resize=740%2C430&amp;ssl=1 740w" width="877"/>
   </noscript>
   <img alt="" class="aligncenter size-full wp-image-2433 jetpack-lazy-image" data-lazy-sizes="(max-width: 883px) 100vw, 883px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=883%2C513&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?w=883&amp;ssl=1 883w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=300%2C174&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=768%2C446&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=740%2C430&amp;ssl=1 740w" data-recalc-dims="1" height="513" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=883%2C513&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="883"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2433" data-recalc-dims="1" height="513" sizes="(max-width: 883px) 100vw, 883px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=883%2C513&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?w=883&amp;ssl=1 883w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=300%2C174&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=768%2C446&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/00.jpeg?resize=740%2C430&amp;ssl=1 740w" width="883"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="21b9">
   另一个有用的功能是“照片”layer ，它显示照片的多个来源，但
   <strong class="markup--strong markup--p-strong">
    最重要的是
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="http://www.panoramio.com/" href="https://www.panoramio.com/" rel="noopener nofollow noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     Panoramio
    </strong>
   </a>
   。Panoramio 是一个用户可以上传带有地理标记的照片的网站，这些照片在 GoogleEarth 上均可见，为您可能有兴趣详细查看地点的地面图像提供了有用的来源。
  </p>
  <p class="graf graf--p graf-after--p" id="2464">
   <strong class="markup--strong markup--p-strong">
    街景
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="6e4f">
   除此之外，地面图像的另一个来源是 GoogleMaps、GoogleEarth 以及俄罗斯网站 Yandex Maps 上提供的街景图像。虽然很多人都熟悉谷歌街景，而
   <strong class="markup--strong markup--p-strong">
    Yandex 地图并不为人所熟知，但它拥有自己的街景图像集，其中大部分属于谷歌街景尚未提供的位置。❗️
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="22e0">
   这些图像对于地理定位来说非常有用，但考虑记录的日期对街景图像来说也很重要。例如，验证记录 MH17 相关视频的位置，Yandex 地图图像显示有问题的位置没有在地理定位的视频中可见的广告牌。然而，谷歌地球卫星图像显示该广告牌是该地区的新建标记，并且在广告牌建成之前 Yandex 地图图像就把这个位置记录下来了。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2434 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1100%2C500&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?w=1141&amp;ssl=1 1141w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=300%2C136&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=768%2C349&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1024%2C466&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1100%2C500&amp;ssl=1 1100w" data-recalc-dims="1" height="500" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1100%2C500&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2434" data-recalc-dims="1" height="500" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1100%2C500&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?w=1141&amp;ssl=1 1141w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=300%2C136&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=768%2C349&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1024%2C466&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-17.jpeg?resize=1100%2C500&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p graf-after--figure" id="e5aa">
   通过将来自 Yandex 地图的其他图像与该区域的其他信息（例如，最近建造的教堂）进行比较，可以验证 Yandex 地图图像的日期。
   <strong class="markup--strong markup--p-strong">
    这表明了地理定位和验证的另一个被忽视的方面：即 不仅需要验证您正在调查的图像，而且验证参考图像也很有价值。像地标这样的东西可能是不准确的或可被改变的，因此这是在强大的验证过程中所需的重点
   </strong>
   。
  </p>
  <p class="graf graf--p graf-after--p" id="6c74">
   <strong class="markup--strong markup--p-strong">
    全球地标
   </strong>
  </p>
  <p class="graf graf--p graf-after--p" id="5e9b">
   两年前开发的一个新平台使得地理标记作为验证过程的一部分更加有用了。
   <a class="markup--anchor markup--p-anchor" data-href="http://www.yomapic.com/" href="http://www.yomapic.com/" rel="noopener nofollow noreferrer" target="_blank">
    Yomapic
   </a>
   是一个免费的网站，允许地理搜索流行的俄罗斯社交媒体网站 VKontakte 和 Instagram 的地理标记图像。在下面的例子中，Yomapic 显示出了从被伊斯兰国控制的 Raqqa 镇发出的图像：
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2435 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1100%2C532&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?w=1881&amp;ssl=1 1881w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=300%2C145&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=768%2C371&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1024%2C495&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1100%2C532&amp;ssl=1 1100w" data-recalc-dims="1" height="532" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1100%2C532&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2435" data-recalc-dims="1" height="532" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1100%2C532&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?w=1881&amp;ssl=1 1881w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=300%2C145&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=768%2C371&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1024%2C495&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-18.jpeg?resize=1100%2C532&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p>
   Yomapic 的一个有趣功能是可以通过点击用户名来选择个人帐户，显示帐户上的所有图像，看是否有进行地理标记。下图显示了 Instagram 上的用户，他们从塞舌尔到肯尼亚、然后到土耳其、最后到叙利亚的 Raqqa。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-2436 jetpack-lazy-image" data-lazy-sizes="(max-width: 919px) 100vw, 919px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=919%2C711&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?w=919&amp;ssl=1 919w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=300%2C232&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=768%2C594&amp;ssl=1 768w" data-recalc-dims="1" height="711" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=919%2C711&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="919"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-2436" data-recalc-dims="1" height="711" sizes="(max-width: 919px) 100vw, 919px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=919%2C711&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?w=919&amp;ssl=1 919w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=300%2C232&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-19.jpeg?resize=768%2C594&amp;ssl=1 768w" width="919"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="a891">
    Yomapic 的替代品是
    <a class="markup--anchor markup--p-anchor" data-href="https://www.echosec.net/" href="https://www.echosec.net/" rel="noopener nofollow noreferrer" target="_blank">
     EchoSec
    </a>
    ，其搜索中包括更多社交媒体网站，比如 Twitter，Facebook，YouTube，Panoramio 和 Flickr。
    <strong class="markup--strong markup--p-strong">
     它还具有日期范围搜索，允许搜索特定日期范围，这在调查过去事件时非常有用
    </strong>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="8cd7">
    虽然 Yomapic 和 EchoSec 的明显用途是寻找与某个区域中特定事件相关的帖子，但它在其他方面也很有用。
   </p>
   <p class="graf graf--p graf-after--p" id="8803">
    当地理定位图像时，可能无法找到街景图像或 Panoramio 照片，但是感谢 Yomapic 和 EchoSec，可以看到本地区域是否有人发布了 Instagram 照片或 YouTube 视频显示了您感兴趣的这个位置，这增加了搜索参考图像作为任何地理位置的一部分时所具有的选项范围，并且通过
    <strong class="markup--strong markup--p-strong">
     组合这些工具
    </strong>
    ，它可以更有效地验证内容。
   </p>
   <h3 class="graf graf--h3 graf-after--p" id="8e48">
    — — 加快速度！让它自动化起来 — —
   </h3>
   <p class="graf graf--p graf-after--h3" id="5b11">
    在对照片进行地理定位时，部分工作涉及查看可能位于感兴趣区域内的照片通过各种网站（Flickr，Panoramio，Wikimapia 等）。为了提升效率你完全可以自动化这个过程：创建一个带有照片拼贴的 HTML 页面，以便您可以滚动浏览，如果看到匹配的图像，当您点击它时，它将把您带到 Google地图上的该位置。很简单的步骤，会比在地图上点击或不得不在网站上不断提交手动搜索那些笨方法，更快地浏览照片。
   </p>
   <p class="graf graf--p graf-after--p" id="cdcf">
    我们将使用的第一个照片共享网站是 Panoramio。它允许人们上传这些照片时标签位置。Panoramio 专注于地方而不是人，因此它是协助地理定位照片工作的好选择。
   </p>
   <p class="graf graf--p graf-after--p" id="b344">
    <strong class="markup--strong markup--p-strong">
     安装 Python 和 Pip
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="536c">
    Python 2.7.9 及更高版本包括 Pip，这是一个简单的 Python 包管理系统，允许我们快速轻松地向 Python 添加 API。启动和运行 Python 的最快方法是……找找教程啦，网上有很多的。
   </p>
   <p class="graf graf--p graf-after--p" id="1ead">
    您可以使用任何文本编辑器（如 Notepad（Windows）或 TextEdit（Mac））编写 Python 脚本，但我建议您安装 WingIDE（
    <a class="markup--anchor markup--p-anchor" data-href="http://wingide.com/downloads/wingide-101" href="http://wingide.com/downloads/wingide-101" rel="noopener nofollow noreferrer" target="_blank">
     免费版
    </a>
    ）的副本，您可以
    <a class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=UPPLxWurcAc" href="https://www.youtube.com/watch?v=UPPLxWurcAc" rel="noopener nofollow noreferrer" target="_blank">
     在此处
    </a>
    观看快速教程。
   </p>
   <p class="graf graf--p graf-after--p" id="c5b2">
    <strong class="markup--strong markup--p-strong">
     Panoramio API
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="2d49">
    现在我假设您已经安装了所有东西，我们将利用一个名为 Pynoramio 的 Python 库，它专门用于使用 Python 与 Panoramio API 进行交互。第一步是安装它，如果你忘了怎么做，请参阅上一节有关安装和使用 pip 的内容。
   </p>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <figure class="graf graf--figure graf--layoutOutsetCenter graf-after--p" data-scroll="native" id="e3a1">
    <div class="aspectRatioPlaceholder is-locked">
     <img class="graf-image jetpack-lazy-image" data-action="zoom" data-action-value="1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg" data-height="48" data-image-id="1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg" data-lazy-src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg?w=1100&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" data-width="1484" src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg?w=1100&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/>
     <noscript>
      <img class="graf-image" data-action="zoom" data-action-value="1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg" data-height="48" data-image-id="1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg" data-recalc-dims="1" data-width="1484" src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bfCy_V1Z7X8EMYIhwJLs5Q.jpeg?w=1100&amp;ssl=1"/>
     </noscript>
    </div>
   </figure>
  </div>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="db3d">
    现在我们可以开始研究如何实际使用 API​​。Panoramio API 需要一个边界框才能搜索照片。
   </p>
   <p class="graf graf--p graf-after--p" id="772a">
    <strong class="markup--strong markup--p-strong">
     边界框
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="ba7f">
    可以将边界框视为覆盖地理区域的虚构矩形。许多 API 使用边界框来返回地理标记结果。在很多情况下，一个边界框是通过测量目标的西南角和东北角的经纬度得来。在其他情况下，它们称之为最小/最大纬度和经度，这与最小值是西南角最大值是东北角是一回事。
   </p>
   <p class="graf graf--p graf-after--p" id="b776">
    这里
    <a class="markup--anchor markup--p-anchor" data-href="http://www.automatingosint.com/blog/geographic-bounding-box-drawing-tool/" href="http://www.automatingosint.com/blog/geographic-bounding-box-drawing-tool/" rel="noopener nofollow noreferrer" target="_blank">
     有一个工具
    </a>
    可以帮助解决这个问题。
   </p>
   <p class="graf graf--p graf-after--p" id="dffa">
    简单地使用该工具，示例：
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="26fc">
     在位置框中输入不带引号的“Raqqah Syria”。
    </li>
    <li class="graf graf--li graf-after--li" id="a935">
     单击“跳转到位置”按钮。
    </li>
    <li class="graf graf--li graf-after--li" id="4efe">
     调整地图上的缩放级，以便可以看到所有 Raqqah。
    </li>
    <li class="graf graf--li graf-after--li" id="e376">
     单击地图顶部的小矩形绘图按钮。
    </li>
    <li class="graf graf--li graf-after--li" id="3f67">
     在所有 Raqqah 周围画一个矩形，调整大小并按照你认为合适的方式移动它。
    </li>
   </ul>
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-2437 jetpack-lazy-image" data-lazy-sizes="(max-width: 623px) 100vw, 623px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?resize=623%2C545&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?w=623&amp;ssl=1 623w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?resize=300%2C262&amp;ssl=1 300w" data-recalc-dims="1" height="545" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?resize=623%2C545&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="623"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-2437" data-recalc-dims="1" height="545" sizes="(max-width: 623px) 100vw, 623px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?resize=623%2C545&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?w=623&amp;ssl=1 623w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-13.png?resize=300%2C262&amp;ssl=1 300w" width="623"/>
    </noscript>
   </div>
   <div>
    <p class="graf graf--p graf-after--figure" id="ebb5">
     如果向下滚动页面，您将看到各种边界框坐标，然后我们可以将其复制粘贴到 Python 脚本中。
    </p>
    <p class="graf graf--p graf-after--p" id="7653">
     <strong class="markup--strong markup--p-strong">
      编码 Panoramio 搜索
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="cf80">
     在你选择的任何编辑器中打开一个新的 Python 脚本，然后输入以下代码：
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-2438 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1100%2C334&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?w=1480&amp;ssl=1 1480w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=300%2C91&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=768%2C234&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1024%2C311&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1100%2C334&amp;ssl=1 1100w" data-recalc-dims="1" height="334" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1100%2C334&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-2438" data-recalc-dims="1" height="334" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1100%2C334&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?w=1480&amp;ssl=1 1480w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=300%2C91&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=768%2C234&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1024%2C311&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-20.jpeg?resize=1100%2C334&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
    <div class="section-inner sectionLayout--insetColumn">
     <p class="graf graf--p graf-after--figure" id="4e49">
      值得注意的是，以＃开头的任何行都意味着它是一个代码注释，以帮助理解代码的作用，您可以选择将它们写出来：
     </p>
     <ul class="postList">
      <li class="graf graf--li graf-after--p" id="e366">
       第1–3 行：这些是 Python 导入。import 关键字告诉 Python 我们想从这些库中提取代码。您可以看到我们正在使用 pip 来安装 pynoramio 库。
      </li>
      <li class="graf graf--li graf-after--li" id="0763">
       第 6 行：这里只是命名正在执行的搜索。
      </li>
      <li class="graf graf--li graf-after--li" id="97dc">
       第 9 行和第 10 行：这里使用边界框工具粘贴值。将您自己的值粘贴到此处。
      </li>
      <li class="graf graf--li graf-after--li" id="f21a">
       第 13 和 14 行：这里将逗号分隔值拆分成两个单独的数字。这只是为了节省时间，因此我们不用从边界框工具中复制和粘贴一大堆值。
      </li>
     </ul>
     <p class="graf graf--p graf-after--li" id="abf9">
      好了，将文件保存为 auto_image_search.py 并添加更多代码。
     </p>
    </div>
    <div class="section-inner sectionLayout--outsetColumn">
     <div class="aspectRatioPlaceholder is-locked">
      <img alt="" class="aligncenter size-full wp-image-2439 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1100%2C577&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=300%2C157&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=768%2C403&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1024%2C538&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1100%2C577&amp;ssl=1 1100w" data-recalc-dims="1" height="577" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1100%2C577&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
      <noscript>
       <img alt="" class="aligncenter size-full wp-image-2439" data-recalc-dims="1" height="577" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1100%2C577&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?w=1482&amp;ssl=1 1482w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=300%2C157&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=768%2C403&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1024%2C538&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-21.jpeg?resize=1100%2C577&amp;ssl=1 1100w" width="1100"/>
      </noscript>
     </div>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   解释一下：
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <ul class="postList">
     <li class="graf graf--li graf-after--p" id="0940">
      第 20 行：DEF 关键字意味着正在创建 Python 中的功能。此特定功能将用于执行 Panoramio 搜索，并且只需一个参数。这个名为 fd 的参数是所谓的文件描述符，因此我们可以将搜索结果写入 HTML 文件。想象一下文件描述符，就像你必须在桌面上拿一张实物纸一样，用笔在上面书写。
     </li>
     <li class="graf graf--li graf-after--li" id="1cd7">
      第 22 行：这是初始化 Pynoramio API 的地方，以便可以使用它。
     </li>
     <li class="graf graf--li graf-after--li" id="eccc">
      第 25 行：这里我们告诉 Pynoramio API 根据使用边界框设置的纬度和经度值进行搜索。
     </li>
     <li class="graf graf--li graf-after--li" id="e258">
      第 28 行：现在正在检查我们的搜索是否有任何结果，开始遍历每个搜索结果，以便可以将它添加到我们的 HTML 文件中。
     </li>
     <li class="graf graf--li graf-after--li" id="5cc8">
      第 33 行：这是在每个搜索结果上循环的地方。
     </li>
     <li class="graf graf--li graf-after--li" id="815c">
      第 36 行：这里将搜索结果格式化为 Google地图链接，以便在我们加载 HTML 页面时，可以点击 Panoramio 中的图片并显示该照片的标记位置。
     </li>
    </ul>
    <p class="graf graf--p graf-after--li" id="817b">
     好啦重点部分完成。注意，在代码中看到缩进的地方，您必须完全按照示例中的方式缩进（使用键盘上的 TAB 键）。Python 依靠这个缩进来处理你的代码。
    </p>
    <p class="graf graf--p graf-after--p" id="b588">
     继续添加更多代码，然后就可以开始使用它了。
    </p>
    <p>
     <img alt="" class="aligncenter size-full wp-image-2440 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1100%2C418&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?w=1490&amp;ssl=1 1490w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=300%2C114&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=768%2C292&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1024%2C389&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1100%2C418&amp;ssl=1 1100w" data-recalc-dims="1" height="418" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1100%2C418&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-2440" data-recalc-dims="1" height="418" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1100%2C418&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?w=1490&amp;ssl=1 1490w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=300%2C114&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=768%2C292&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1024%2C389&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2018/08/0-22.jpeg?resize=1100%2C418&amp;ssl=1 1100w" width="1100"/>
     </noscript>
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <div class="section-inner sectionLayout--insetColumn">
      <p class="graf graf--p graf-after--figure" id="be29">
       好了。来看看这里有什么：
      </p>
      <ul class="postList">
       <li class="graf graf--li graf-after--p" id="ca2a">
        第 42–43 行：我们想为新 HTML 文件创建一个文件夹，所以这里只是检查是否已经有一个文件夹，如果没有，使用 os.mkdir 来创建一个新文件夹名称。
       </li>
       <li class="graf graf--li graf-after--li" id="1717">
        第 46 行：这里打开 HTML 文件，以便可以将搜索结果写入其中。代码的 ％s 部分将采用我们的 search_name 变量并替换它。所以在这种情况下已经创建了一个新文件夹 “BellingcatRaqqah”，然后创建了一个位于“BellingcatRaqqah\BellingcatRaqqah.html”的新 HTML 文件。
       </li>
       <li class="graf graf--li graf-after--li" id="9a10">
        第 49 行：这里只是创建 HTML 文件的第一部分，以便浏览器可以正确打开它。
       </li>
       <li class="graf graf--li graf-after--li" id="d445">
        第 52 行：这是神奇诞生的地方。调用之前创建的 panoramio_search 函数来执行实际搜索并更新 HTML 文件。
       </li>
       <li class="graf graf--li graf-after--li" id="4bc9">
        第 55–56 行：这里只是写出日志文件并关闭文件。
       </li>
      </ul>
      <p class="graf graf--p graf-after--li" id="7504">
       准备运行它。如果将其保存到桌面，可以通过双击来运行，也可以使用命令行执行以下操作：
      </p>
     </div>
     <div class="section-inner sectionLayout--outsetColumn">
      <figure class="graf graf--figure graf--layoutOutsetCenter graf-after--p" data-scroll="native" id="4e26">
       <div class="aspectRatioPlaceholder is-locked">
        <img class="graf-image jetpack-lazy-image" data-action="zoom" data-action-value="1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg" data-height="54" data-image-id="1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg" data-lazy-src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg?w=1100&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" data-width="1484" src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg?w=1100&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"/>
        <noscript>
         <img class="graf-image" data-action="zoom" data-action-value="1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg" data-height="54" data-image-id="1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg" data-recalc-dims="1" data-width="1484" src="https://i2.wp.com/cdn-images-1.medium.com/max/1920/1*bLWtF_2fGgiqqMMOl1q8Ig.jpeg?w=1100&amp;ssl=1"/>
        </noscript>
       </div>
      </figure>
     </div>
     <div class="section-inner sectionLayout--insetColumn">
      <p class="graf graf--p graf-after--figure" id="9086">
       您应该在桌面上看到一个名为“BellingcatRaqqah”的新文件夹，其中包含一个 HTML 文件。如果您双击 HTML 文件，应该会看到一个巨大的页面，其中包含一张又一张照片。点击照片，您的浏览器应该会打开一个新窗口，突出显示它在 Google 地图上的位置。
      </p>
      <p class="graf graf--p graf-after--p" id="d62f">
       挖掘真相是一个非常有意思的工作，
       <strong class="markup--strong markup--p-strong">
        开源调查建立在对互联网庞大数据世界的深入探索上
       </strong>
       ，顺手的工具非常重要，能帮你发现很多好东西哦。一起来玩。
      </p>
     </div>
    </div>
   </div>
  </div>
  <div id="atatags-1611829871-5f3de67c35485">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-2429" href="https://www.iyouport.org/%e5%85%a8%e7%90%83%e6%90%9c%e7%bd%97%ef%bc%9a%e7%94%a8%e4%ba%8e%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%e7%9a%84%e5%9f%ba%e6%9c%ac%e5%9c%b0%e7%90%86%e5%ae%9a%e4%bd%8d%e5%b7%a5%e5%85%b7-osint-%e5%bc%80/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-2429" href="https://www.iyouport.org/%e5%85%a8%e7%90%83%e6%90%9c%e7%bd%97%ef%bc%9a%e7%94%a8%e4%ba%8e%e4%bf%a1%e6%81%af%e9%aa%8c%e8%af%81%e7%9a%84%e5%9f%ba%e6%9c%ac%e5%9c%b0%e7%90%86%e5%ae%9a%e4%bd%8d%e5%b7%a5%e5%85%b7-osint-%e5%bc%80/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/truth/" rel="tag">
     truth
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-08-27T00:15:23+08:00">
    2018年8月27日
   </time>
   <time class="updated" datetime="2019-05-03T00:31:54+08:00">
    2019年5月3日
   </time>
  </div>
 </div>
</article>

