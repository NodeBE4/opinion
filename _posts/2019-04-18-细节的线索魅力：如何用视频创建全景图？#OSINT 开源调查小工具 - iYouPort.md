---
layout: post
title: "细节的线索魅力：如何用视频创建全景图？#OSINT 开源调查小工具 - iYouPort"
date: 2019-04-18T09:46:04+00:00
author: iYouPort
from: https://www.iyouport.org/%e7%bb%86%e8%8a%82%e7%9a%84%e7%ba%bf%e7%b4%a2%e9%ad%85%e5%8a%9b%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8%e8%a7%86%e9%a2%91%e5%88%9b%e5%bb%ba%e5%85%a8%e6%99%af%e5%9b%be%ef%bc%9fosint-%e5%bc%80%e6%ba%90/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-600 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-osint tag-tech tag-technique tag-technology tag-tools" id="post-600">
 <header class="entry-header">
  <h1 class="entry-title">
   细节的线索魅力：如何用视频创建全景图？#OSINT 开源调查小工具
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
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-04-18T17:46:04+08:00">
    2019年4月18日
   </time>
   <time class="updated" datetime="2019-06-19T14:11:33+08:00">
    2019年6月19日
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
     <em>
      <strong>
       一个拍摄得很糟糕的视频，就像很多中国民间流传的视频那样，由于拍摄者不专业，角度非常差，要么是斜的，要么全是俯视或仰视的。
      </strong>
     </em>
    </span>
    <br/>
    <span style="color: #00ccff;">
     <em>
      <strong>
       ⚠️ 但是这个视频非常重要，它是大屠杀的唯一证据！
      </strong>
     </em>
    </span>
    <br/>
    <span style="color: #00ccff;">
     <em>
      <strong>
       如何从混乱中取证？
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p id="b3ef">
   我们在上一篇开源调查操作的演示文章《”谷歌地图”是比詹姆斯邦德更棒的间谍》中提到了一个很有用的小工具 — — 用视频创建全景图，以发现其中隐藏的调查线索。本文将详细介绍它的用法。
  </p>
  <p id="774d">
   视频中的全景图像或 Photomosaic 经常
   <strong>
    对人权研究非常有用
   </strong>
   ，尤其适用于将地标等视觉特征与卫星图像相匹配，就如我们曾经操作过的那样。人权观察组织在 2014 年1月关于叙利亚房屋被拆毁的报告中就使用了 Photomosaic（在这里
   <a data-href="http://www.hrw.org/sites/default/files/reports/syria0114webwcover.pdf" href="https://www.hrw.org/sites/default/files/reports/syria0114webwcover.pdf" rel="noopener nofollow noreferrer" target="_blank">
    见第22页
   </a>
   ）。
  </p>
  <p id="c591">
   以下教程将采取的是来自阿勒颇的视频。
  </p>
  <p id="cb25">
   使用的工具：
  </p>
  <ul>
   <li id="1c43">
    <a data-href="http://www.videolan.org/vlc/index.html" href="https://www.videolan.org/vlc/index.html" rel="noopener nofollow noreferrer" target="_blank">
     VLC 视频播放器
    </a>
   </li>
   <li id="1d24">
    <a data-href="http://hugin.sourceforge.net/" href="http://hugin.sourceforge.net/" rel="noopener nofollow noreferrer" target="_blank">
     Hugin Panorama Stichter
    </a>
   </li>
  </ul>
  <p id="d056">
   <strong>
    第1步：从视频中选择帧
   </strong>
  </p>
  <p id="ec80">
   在 VLC 视频播放器中打开视频并播放。考虑让视频以慢动作运行，以帮助识别适当的帧。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-82.jpeg?resize=488%2C342&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="342" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-82.jpeg?resize=488%2C342&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="488"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="342" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-82.jpeg?resize=488%2C342&amp;ssl=1" width="488"/>
   </noscript>
  </p>
  <p id="5a91">
   关于选择帧的提示：当相机在相对较短的时间内扫过您想要覆盖的区域时查找视频的片段。理想的图像组在每个相邻图像之间具有至少半个帧宽的重叠。如果做不到这点照片拼接程序将有困难。
  </p>
  <p id="1dfc">
   <strong>
    第2步：拍摄视频快照
   </strong>
  </p>
  <p id="2853">
   如果您已经识别出可以从中拉取帧的适当片段，则可以开始拍摄多个快照或“屏幕截图”，稍后将这些快照或“屏幕截图”拼接在一起，以创建一个单独的图像。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-83.jpeg?resize=662%2C437&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="437" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-83.jpeg?resize=662%2C437&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="662"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="437" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-83.jpeg?resize=662%2C437&amp;ssl=1" width="662"/>
   </noscript>
  </p>
  <p id="ba48">
   重复此步骤，直到有足够多的帧。
  </p>
  <p id="a71e">
   <strong>
    第3步：将快照放入一个文件夹
   </strong>
  </p>
  <p id="41ec">
   接下来，将从视频中提取的所有单个快照放入单独的文件夹中。（注意：在 Mac 上默认情况下快照将保存在图片文件夹中）。
  </p>
  <p id="7f21">
   <strong>
    第4步：在
    <em>
     Hugin
    </em>
    中加载图像并“对齐”
   </strong>
  </p>
  <p id="fefd">
   打开
   <em>
    Hugin
   </em>
   ，单击“加载图像”，然后选择从视频中提取的所有快照。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-84.jpeg?resize=642%2C510&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="510" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-84.jpeg?resize=642%2C510&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="642"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="510" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-84.jpeg?resize=642%2C510&amp;ssl=1" width="642"/>
   </noscript>
  </p>
  <p id="2c63">
   提示：当程序要求 HFOV 时，请尝试“35”
  </p>
  <p id="9a69">
   单击“对齐”后，请等待处理完成并打开“快速全景预览”。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-85.jpeg?resize=794%2C535&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="535" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-85.jpeg?resize=794%2C535&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="794"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="535" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-85.jpeg?resize=794%2C535&amp;ssl=1" width="794"/>
   </noscript>
  </p>
  <p id="e9d0">
   看看图像是否自动连接良好？如果是，跳到下面第6步。
  </p>
  <p id="d76f">
   如果图像看起来断开或未对齐，请继续执行下一步。
  </p>
  <p id="0fdc">
   <strong>
    第5步：编辑控制点（如有必要的话）
   </strong>
  </p>
  <p id="aa74">
   关闭“快速全景预览”窗口，然后单击
   <em>
    Hugin
   </em>
   主窗口中的“控制点”选项卡。
  </p>
  <p id="8292">
   关于控制点的一般
   <strong>
    建议
   </strong>
   ：控制点是每对重叠图像之间的重叠点。理想的控制点位于静止物体上，这些物体具有可在照片之间匹配的清晰的角落或线条。每个重叠对之间应至少有4或5个点。
  </p>
  <p id="55e3">
   确保每个相关图像对之间的自动猜测控制点正确。在“优化工具”标签中，点击“立即优化”。
  </p>
  <p id="5437">
   再次打开快速全景预览，然后继续下一步。
  </p>
  <p id="8fd0">
   <strong>
    第6步：调整全景规格
   </strong>
  </p>
  <p id="1042">
   在这里，您有几个选项可以为您的 mosaic 提供最终的触感。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-86.jpeg?resize=762%2C425&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="425" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-86.jpeg?resize=762%2C425&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="762"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="425" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-86.jpeg?resize=762%2C425&amp;ssl=1" width="762"/>
   </noscript>
  </p>
  <ul>
   <li id="8a50">
    调整投影：尝试不同的投影，看看哪个看起来最好（经验上看 Cylindrica 和 Equirectangular 运作良好）
   </li>
   <li id="f7b4">
    可选：在图像边缘调整垂直和/或水平视野滑块
   </li>
   <li id="b033">
    移动/拖动：单击并拖动图像以移动和/或旋转全景图
   </li>
   <li id="03a4">
    裁剪：将裁剪边缘调整到所需大小
   </li>
  </ul>
  <p id="26b3">
   <strong>
    第7步：创建全景图
   </strong>
  </p>
  <p id="9112">
   关闭“快速全景预览”后，您可以在“Stichter”选项卡下选择输出格式（例如.jpg）。
  </p>
  <p id="fabf">
   单击“Stitch”创建全景图（它将保存在包含视频快照的同一文件夹中）
   <a data-href="https://citizenevidence.files.wordpress.com/2014/04/vlcsnap-2013-10-31-14h31m23s98-vlcsnap-2013-10-31-14h34m56s133.jpg" href="https://citizenevidence.files.wordpress.com/2014/04/vlcsnap-2013-10-31-14h31m23s98-vlcsnap-2013-10-31-14h34m56s133.jpg" rel="noopener nofollow noreferrer" target="_blank">
    在这里
   </a>
   看到清晰版。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-87.jpeg?resize=1100%2C169&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="169" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-87.jpeg?resize=1100%2C169&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="169" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-87.jpeg?resize=1100%2C169&amp;ssl=1" width="1100"/>
   </noscript>
  </p>
  <h3 id="210d">
   — — 细节致胜 — —
  </h3>
  <p id="f330">
   全景图将可以更好地展示细节线索，对调查非常有用。细节真的很～重要，下面尝试一个实例可以说明这个问题。
  </p>
  <p id="a323">
   这里是一个拍摄得很糟糕的视频，就像很多中国民间流传的视频那样，由于拍摄者不专业，角度非常差，要么是斜的，要么全是俯视或仰视的。但是这个视频
   <strong>
    非常重要
   </strong>
   ，它记录的是埃及拉巴广场屠杀事件 — — 当时埃及前总统穆尔西的支持者在进行静坐抗议。此前一个月，穆尔西在军事政变中被赶下台。 埃及现任总统塞西参与了推翻穆尔西的政变，他也领导了袭击行动。根据人权观察的统计，屠杀事件中被杀害的平民有 817 人，不过实际上的死亡数字很可能超过了一千人。
  </p>
  <p id="da0d">
   该视频记录的是一名妇女被袭击受伤（或许死亡）的过程。在下面看到视频：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="314" src="//www.youtube.com/embed/NwbGZncVaPc" width="560">
   </iframe>
  </p>
  <p id="0afd">
   这个拍摄技术让调查很难对周围区域有太多了解。但是我们可以从视频中收集到一些信息，并结合 Rabaa 发生袭击事件的事实，可以缩小搜索范围。现在开始：
  </p>
  <p id="4352">
   首先，视频中显示的建筑物：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-88.jpeg?resize=400%2C228&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="228" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-88.jpeg?resize=400%2C228&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="228" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-88.jpeg?resize=400%2C228&amp;ssl=1" width="400"/>
   </noscript>
  </p>
  <p id="055f">
   上图是从视频中摘取的三个帧，展示了相当多的有用信息。在左图中，可以看到视频中的人物以一个看似坚固的结构做掩体，可能是墙壁或建筑物的角落。因为拍摄者距离很近，所以无法了解该建筑物的大小，只是知道它就在那。还可以看到一些多层的建筑，在远处的屋顶上有一个广告牌，在左边可以看到某种空中塔楼。
  </p>
  <p id="9d78">
   在中间的图像中，看到一条道路，似乎相当宽阔，有少量的绿色植物，无论是在路中间还是在远处。图片中间的建筑物与其两侧的建筑物面向道路的一面有所不同。
  </p>
  <p id="8323">
   在右侧图像中，可以看到第三个建筑物，它似乎与第一个图像中的建筑物具有相似的设计。相机的位置似乎位于第三栋建筑的前面，看起来所有三栋建筑都非常靠近。
  </p>
  <p id="229b">
   从这里我们可以整理出该地区的草图。下面是一个比较粗糙的 MS Paint 草图（当然你可以用纸和笔来画，不怕丑能看得明白就行）：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-89.jpeg?resize=400%2C130&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="130" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-89.jpeg?resize=400%2C130&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="130" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-89.jpeg?resize=400%2C130&amp;ssl=1" width="400"/>
   </noscript>
  </p>
  <p id="2309">
   圆圈代表摄像机的大致位置，十字方框是塔楼的大致位置。我们知道地点是在 Rabaa，并且有 Google Maps，Wikimapia 和 Bing Maps，有我们可以检查的区域的卫星地图。一些新闻网站也制作了地图，显示了抗议发生的位置，例如BBC，这都可以帮助我们缩小搜索范围。
  </p>
  <p id="e14e">
   了解我们已经知道的东西，可以开始消除某些领域。我们知道这些建筑物的形状，它们相对于道路的位置，以及对道路的粗略概念。以下是可以消除的一些示例：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-90.jpeg?resize=276%2C400&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="400" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-90.jpeg?resize=276%2C400&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="276"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="400" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-90.jpeg?resize=276%2C400&amp;ssl=1" width="276"/>
   </noscript>
  </p>
  <p>
   这样可以直接看到右侧的建筑物可能相距太远了。如果你将卫星图像上的车辆尺寸与建筑物之间的间隙进行比较的话就会发现距离不对，而且建筑物也与我们在视频中看到的形状不符。可以立即看到建筑物相对于道路处于完全错误的位置，于是这个地区很容易被驳回。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-91.jpeg?resize=400%2C187&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="187" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-91.jpeg?resize=400%2C187&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="187" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-91.jpeg?resize=400%2C187&amp;ssl=1" width="400"/>
   </noscript>
  </p>
  <p id="74ab">
   再看这个。道路的中心显然有很多绿色，从阴影投射的方式和一些绿色区域与道路重叠的方式来判断，几乎可以肯定这些是树木，而不是灌木丛。
  </p>
  <p id="dc15">
   除卫星地图外，我们的工具包中还有另一种工具。在Google地图上，您只需点击并将左上角的标记拖到蓝色框上即可显示在那里拍摄的照片，并且在某些国家/地区可以使用 Google 街景视图。
  </p>
  <p id="013b">
   埃及行动海报突出显示了一个可能的区域，其中包括附近空中塔楼的图像，可能与视频中的那个相匹配：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-92.jpeg?resize=400%2C287&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="287" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-92.jpeg?resize=400%2C287&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="287" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-92.jpeg?resize=400%2C287&amp;ssl=1" width="400"/>
   </noscript>
  </p>
  <p>
   在图像的右上角，有一个小边缘可能是公寓楼顶部的广告牌，如果是从图片右侧拍摄的话，那将与视频形成匹配。这当然意味着该领域值得仔细研究，所以回到
   <a data-href="https://maps.google.com/maps?q=City+Center+Cinema,+Al+Manteqah+as+Sadesah,+Nasr+City,+Cairo+Governorate,+Egypt&amp;hl=en&amp;ll=30.06885,31.340314&amp;spn=0.001476,0.00327&amp;oq=city+ce&amp;hq=City+Center+Cinema,&amp;hnear=Al+Manteqah+as+Sadesah,+Nasr+City,+Cairo+Governorate,+Egypt&amp;t=k&amp;z=19" href="https://maps.google.com/maps?q=City+Center+Cinema,+Al+Manteqah+as+Sadesah,+Nasr+City,+Cairo+Governorate,+Egypt&amp;hl=en&amp;ll=30.06885,31.340314&amp;spn=0.001476,0.00327&amp;oq=city+ce&amp;hq=City+Center+Cinema,&amp;hnear=Al+Manteqah+as+Sadesah,+Nasr+City,+Cairo+Governorate,+Egypt&amp;t=k&amp;z=19" rel="noopener nofollow noreferrer" target="_blank">
    卫星地图
   </a>
   。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-93.jpeg?resize=400%2C223&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="223" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-93.jpeg?resize=400%2C223&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="223" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-93.jpeg?resize=400%2C223&amp;ssl=1" width="400"/>
   </noscript>
  </p>
  <p>
   空中塔楼将位于最右侧，由于道路北侧没有建筑物，我们可以看看道路南侧的三座建筑物位置很清晰。在这里略微旋转它们，为匹配我做的粗略草图：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-94.jpeg?resize=886%2C896&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="896" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-94.jpeg?resize=886%2C896&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="886"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="896" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-94.jpeg?resize=886%2C896&amp;ssl=1" width="886"/>
   </noscript>
  </p>
  <p id="3309">
   似乎是个很好的匹配，建筑物的轮廓匹配，并且在道路的北侧，在相机看起来的位置左侧有一个作为“掩体”的小建筑。
  </p>
  <p id="d596">
   下面是那个作为掩体的小建筑：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-95.jpeg?resize=400%2C278&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="278" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-95.jpeg?resize=400%2C278&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="400"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="278" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-95.jpeg?resize=400%2C278&amp;ssl=1" width="400"/>
   </noscript>
   这里是掩体在视频中的状况：
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-96.jpeg?resize=320%2C315&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="315" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-96.jpeg?resize=320%2C315&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="320"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="315" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/04/0-96.jpeg?resize=320%2C315&amp;ssl=1" width="320"/>
   </noscript>
  </p>
  <p id="4ad7">
   请注意墙壁上的剥落表面，边缘上缺失的那块墙皮似乎略高于左侧。还要注意屋顶的边缘和墙顶的白色海报。在照片和视频中他们都能匹配。利用现有的所有证据，100％肯定这就是拍摄视频的确切位置，
   <strong>
    在 Rabaa Adawiya 清真寺以东约800米处，那里有许多伤者和死者
   </strong>
   。
  </p>
  <p id="8545">
   上述展示的是一些可用于确认视频拍摄地点的技术。即使是短片并且拍摄得很糟糕的片段，您依然可以提取大量有用的信息。
  </p>
  <p id="1b37">
   开源调查需要一些思维方式的训练，除逻辑学之外这类训练其实很简单，即 观察的能力，就如我们在社交工程学攻击和防御演示中所强调的：平日有意增加您的观察细节的习惯，久而久之您会发现得到了更为精湛的能力。一起来试试吧。
  </p>
  <div id="atatags-1611829871-5f3db1bef2a55">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-600" href="https://www.iyouport.org/%e7%bb%86%e8%8a%82%e7%9a%84%e7%ba%bf%e7%b4%a2%e9%ad%85%e5%8a%9b%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8%e8%a7%86%e9%a2%91%e5%88%9b%e5%bb%ba%e5%85%a8%e6%99%af%e5%9b%be%ef%bc%9fosint-%e5%bc%80%e6%ba%90/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-600" href="https://www.iyouport.org/%e7%bb%86%e8%8a%82%e7%9a%84%e7%ba%bf%e7%b4%a2%e9%ad%85%e5%8a%9b%ef%bc%9a%e5%a6%82%e4%bd%95%e7%94%a8%e8%a7%86%e9%a2%91%e5%88%9b%e5%bb%ba%e5%85%a8%e6%99%af%e5%9b%be%ef%bc%9fosint-%e5%bc%80%e6%ba%90/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/tech/" rel="tag">
     tech
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
   <time class="entry-date published" datetime="2019-04-18T17:46:04+08:00">
    2019年4月18日
   </time>
   <time class="updated" datetime="2019-06-19T14:11:33+08:00">
    2019年6月19日
   </time>
  </div>
 </div>
</article>

