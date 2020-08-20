---
layout: post
title: "构建你的自定义OSINT机器（第五部分） - iYouPort"
date: 2019-11-13T16:04:54+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%94%e9%83%a8%e5%88%86%ef%bc%89/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6949 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-activism tag-diy tag-osint tag-security tag-technique tag-technology tag-tools tag-virtualbox tag-yubikey" id="post-6949">
 <header class="entry-header">
  <h1 class="entry-title">
   构建你的自定义OSINT机器（第五部分）
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
   <time class="entry-date published" datetime="2019-11-14T00:04:54+08:00">
    2019年11月14日
   </time>
   <time class="updated" datetime="2019-07-24T00:38:56+08:00">
    2019年7月24日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       现在马上就能大功告成了
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6955 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1100%2C825&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1024%2C768&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1100%2C825&amp;ssl=1 1100w" data-recalc-dims="1" height="825" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1100%2C825&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6955" data-recalc-dims="1" height="825" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1100%2C825&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?w=1280&amp;ssl=1 1280w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=300%2C225&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=768%2C576&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1024%2C768&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/0-10.jpg?resize=1100%2C825&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   这里是本系列的最后一部分，专注于保护工作。
  </p>
  <p class="graf graf--p">
   如果您还没有读过前面的部分，可以在这里回顾：“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%80%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第一部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%8c%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第二部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%b8%89%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第三部分
   </a>
   ”、“
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e5%9b%9b%e9%83%a8%e5%88%86%ef%bc%89/" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e5%9b%9b%e9%83%a8%e5%88%86%ef%bc%89/" rel="noopener noreferrer" target="_blank">
    第四部分
   </a>
   ”。
  </p>
  <p class="graf graf--p">
   本系列文章的前四个部分介绍了如何构建自己的自定义 Buscador 风格 OSINT 虚拟机 ——
   <strong class="markup--strong markup--p-strong">
    这是一个能帮助您成为专业人士的工作环境
   </strong>
   。
  </p>
  <p class="graf graf--p">
   本指南全部内容均适用于对 Linux 和/或开源情报 OSINT 的入门级人士，并且第五部分会继续这一原则。
  </p>
  <p class="graf graf--p">
   也就是说，
   <strong class="markup--strong markup--p-strong">
    使用本指南不需要任何基础，只要您对真相感兴趣，并愿意模仿，它就是您的
   </strong>
   。
  </p>
  <p class="graf graf--p">
   本文将介绍如何克隆和备份虚拟机以及如何将其导出到其他计算机上。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    备份和克隆虚拟机
   </strong>
  </p>
  <p class="graf graf--p">
   虚拟机的一大优势正是如此，一旦你创建了它、并且按照你喜欢的方式设置它，就可以精确地克隆机器。
  </p>
  <p class="graf graf--p">
   这有几个
   <strong class="markup--strong markup--p-strong">
    好处
   </strong>
   。
  </p>
  <p class="graf graf--p">
   首先，如果您花了很长时间创建虚拟机，并根据需要进行了自定义，则克隆意味着可以按照完整的工作顺序制作 VM 的精确副本。
  </p>
  <p class="graf graf--p">
   这样一来，即便虚拟机被破坏或损坏至无法修复，也可以通过使用克隆轻松创建新虚拟机，而不必担心从头开始的麻烦。
  </p>
  <p class="graf graf--p">
   其次，您的OSINT研究很可能需要被用作公司调查、执法或其他一些法律程序的某种证据（
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e6%83%85%e6%8a%a5%e4%b8%8d%e6%98%af%e7%ae%80%e5%8d%95%e7%9a%84%e4%bf%a1%e6%81%af%ef%bc%9aiyouport-%e7%ad%94%e8%af%bb%e8%80%85%e9%97%ae%ef%bc%9a%e5%85%b3%e4%ba%8e%e6%88%91%e4%bb%ac/" href="https://www.iyouport.org/%e6%83%85%e6%8a%a5%e4%b8%8d%e6%98%af%e7%ae%80%e5%8d%95%e7%9a%84%e4%bf%a1%e6%81%af%ef%bc%9aiyouport-%e7%ad%94%e8%af%bb%e8%80%85%e9%97%ae%ef%bc%9a%e5%85%b3%e4%ba%8e%e6%88%91%e4%bb%ac/" rel="noopener noreferrer" target="_blank">
    情报不是简单的信息
   </a>
   ，情报结论必须指导具体行动）；所以，您可以采用 “一个调查案例一个VM” 的方法，在一个 VM 中完成所有工作，然后保存、散列和导出。
  </p>
  <p class="graf graf--p">
   尤其对于大型的调查项目来说，这样做很有必要。
  </p>
  <p class="graf graf--p">
   Virtualbox 非常容易实现克隆。确保 VM 已关闭，并且在主 Vbox 菜单中看起来像这样：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6950 jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-19.png?resize=247%2C57&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="57" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-19.png?resize=247%2C57&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="247"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6950" data-recalc-dims="1" height="57" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1-19.png?resize=247%2C57&amp;ssl=1" width="247"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   现在只需右键单击它，然后选择“克隆”：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6951 jetpack-lazy-image" data-lazy-sizes="(max-width: 306px) 100vw, 306px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?resize=306%2C464&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?w=306&amp;ssl=1 306w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?resize=198%2C300&amp;ssl=1 198w" data-recalc-dims="1" height="464" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?resize=306%2C464&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="306"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6951" data-recalc-dims="1" height="464" sizes="(max-width: 306px) 100vw, 306px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?resize=306%2C464&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?w=306&amp;ssl=1 306w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-16.png?resize=198%2C300&amp;ssl=1 198w" width="306"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   然后给克隆机器起个名字：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6952 jetpack-lazy-image" data-lazy-sizes="(max-width: 576px) 100vw, 576px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?resize=576%2C451&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?w=576&amp;ssl=1 576w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?resize=300%2C235&amp;ssl=1 300w" data-recalc-dims="1" height="451" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?resize=576%2C451&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="576"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6952" data-recalc-dims="1" height="451" sizes="(max-width: 576px) 100vw, 576px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?resize=576%2C451&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?w=576&amp;ssl=1 576w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-16.png?resize=300%2C235&amp;ssl=1 300w" width="576"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   选择“完全克隆”作为类型：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6953 jetpack-lazy-image" data-lazy-sizes="(max-width: 568px) 100vw, 568px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?resize=568%2C452&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?w=568&amp;ssl=1 568w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?resize=300%2C239&amp;ssl=1 300w" data-recalc-dims="1" height="452" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?resize=568%2C452&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="568"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6953" data-recalc-dims="1" height="452" sizes="(max-width: 568px) 100vw, 568px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?resize=568%2C452&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?w=568&amp;ssl=1 568w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-11.png?resize=300%2C239&amp;ssl=1 300w" width="568"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   几分钟后，Virtualbox 就会生成第二个虚拟机，它与第一个完全相同。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6954 jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-10.png?resize=235%2C106&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="106" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-10.png?resize=235%2C106&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="235"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6954" data-recalc-dims="1" height="106" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-10.png?resize=235%2C106&amp;ssl=1" width="235"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   出于备份目的，可以简单地创建虚拟机的快照，而不是进行完整克隆。
  </p>
  <p class="graf graf--p">
   如果出现问题或想要尝试新设置，创建快照会为您提供一个还原点，以便在需要时返回。
  </p>
  <p class="graf graf--p">
   关于如何做快照，可以参看这个视频：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/Qte4X-rdr2Q" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   简单说就5步：
  </p>
  <p class="graf graf--p">
   1）完全关闭虚拟机
  </p>
  <p class="graf graf--p">
   2）在 VirtualBox 菜单中，单击右上角的 Snapshots 按钮
  </p>
  <p class="graf graf--p">
   3）点击蓝色相机图标“take a snapshot”
  </p>
  <p class="graf graf--p">
   4）创建名称和任何注释以提醒您机器的状态，例如“新安装” 等等。
  </p>
  <p class="graf graf--p">
   5）单击“确定”。
  </p>
  <p class="graf graf--p">
   您现在可以正常使用虚拟机。如果您想要恢复到快照时存在的机器确切状态，请按照以下说明操作：
  </p>
  <p class="graf graf--p">
   1）完全关闭虚拟机
  </p>
  <p class="graf graf--p">
   2）在 VirtualBox 菜单中，单击右上角的 Snapshots 按钮
  </p>
  <p class="graf graf--p">
   3）选择要应用的所需快照
  </p>
  <p class="graf graf--p">
   4）点击带箭头的蓝色相机图标“恢复快照”
  </p>
  <p class="graf graf--p">
   5）单击“还原”
  </p>
  <p class="graf graf--p">
   完成。
  </p>
  <p class="graf graf--p">
   或者，如果您想要删除快照，只需使用带有红色X的图标。这将删除数据文件以消除浪费的空间，但是一旦删除就无法恢复。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    导出虚拟机
   </strong>
  </p>
  <p class="graf graf--p">
   您还可以保存和导出虚拟机。
  </p>
  <p class="graf graf--p">
   这意味着它可以转移或共享到其他设备如 Buscador。
  </p>
  <p class="graf graf--p">
   要在 Virtualbox 中导出VM，只需转到文件&gt;导出设备&gt;选择要导出的VM&gt;选择 OVA。
  </p>
  <p class="graf graf--p">
   OVA 和 OVF 格式（理论上）兼容 Virtualbox 和 VMWare。
  </p>
  <p class="graf graf--p">
   OVA 是一个更简单的单文件包，而 OVF 将虚拟机拆分为几个不同的文件。OVA 文件适用于小型、简单的 VM。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    简单说 VirtualBox
   </strong>
  </p>
  <p class="graf graf--p">
   VirtualBox 是免费的，足以满足大多数调查的需要。
  </p>
  <p class="graf graf--p">
   一些用户更喜欢使用适用于 Windows 的 VMWare Workstation 或适用于 Mac 的 VMWare Fusion 。当然，任何这些选项都可以帮助您入门。
  </p>
  <p class="graf graf--p">
   VirtualBox 安装和配置（极简陈述）：
  </p>
  <p class="graf graf--p">
   *请确保您有最新版本的
   <a class="markup--anchor markup--p-anchor" data-href="https://www.virtualbox.org/wiki/Downloads" href="https://www.virtualbox.org/wiki/Downloads" rel="noopener noreferrer" target="_blank">
    VirtualBox
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="https://www.virtualbox.org/wiki/Downloads" href="https://www.virtualbox.org/wiki/Downloads" rel="noopener noreferrer" target="_blank">
    VirtualBox 扩展包
   </a>
   安装
  </p>
  <p class="graf graf--p">
   1）在 VirtualBox 菜单中，单击文件&gt;导入设备
  </p>
  <p class="graf graf--p">
   2）导航到下载的 OVA 文件（Buscador）
  </p>
  <p class="graf graf--p">
   3）选择此文件并选择“导入”
  </p>
  <p class="graf graf--p">
   4）在启动新机器之前，突出显示它并选择“设置”
  </p>
  <p class="graf graf--p">
   5）在 General&gt; Basic 下，根据需要重命名该机器（Buscador？）
  </p>
  <p class="graf graf--p">
   6）在“General &gt; Advanced”下，将“共享剪贴板”更改为“双向”
  </p>
  <p class="graf graf--p">
   7）在 System&gt; Motherboard 下，如果你有足够多的资源，就增加 RAM
  </p>
  <p class="graf graf--p">
   8）在 “Display &gt; Screen” 下，将视频内存增加到128MB可用
  </p>
  <p class="graf graf--p">
   9）在共享文件夹下，单击右侧的“加号”，选择要存储证据的文件夹，选择“自动挂载”
  </p>
  <p class="graf graf--p">
   10）单击“确定”两次，然后启动新机器（双击）
  </p>
  <p class="graf graf--p">
   11）启动后，使用 osint 密码登录用户
  </p>
  <p class="graf graf--p">
   12）在 VirtualBox 菜单中，选择 Devices&gt;“Insert Guest Additions CD Image”
  </p>
  <p class="graf graf--p">
   13）弹出对话框时单击“取消”。
  </p>
  <p class="graf graf--p">
   14）打开终端（Tilex）
  </p>
  <p class="graf graf--p">
   15）在终端中创建一个名为 vbox: mkdir ~/Desktop/vbox 的目录
  </p>
  <p class="graf graf--p">
   16）将桌面上所有内容复制到粘贴到 vbox 文件夹
  </p>
  <p class="graf graf--p">
   17）在终端中，输入以下命令：
  </p>
  <p class="graf graf--p">
   cd Desktop/vbox
   <br/>
   chmod +x *.sh
   <br/>
   ./autorun.sh
   <br/>
   (出现提示时输入密码)
  </p>
  <p class="graf graf--p">
   18）允许安装映像，并在完成后重新启动。
  </p>
  <p class="graf graf--p">
   19）在新VM中启动终端并键入 sudo adduser osint vboxsf
  </p>
  <p class="graf graf--p">
   20）根据需要提供密码
  </p>
  <p class="graf graf--p">
   21）重新启动
  </p>
  <p class="graf graf--p">
   您现在应该可以访问共享目录，以便将数据（也就是您的调查证据）保存到主机操作系统。在文件管理器（主页）中找到，开头是 “sf_” 后跟着它所连接的文件夹的名称。
  </p>
  <p class="graf graf--p">
   此共享文件夹也将位于桌面上，以便于访问。您可以使机器全屏，复制和粘贴图像，然后您就可以开始使用这些应用程序了。
  </p>
  <p class="graf graf--p">
   此外，
   <strong class="markup--strong markup--p-strong">
    您可以使用 Yubikey 作为从虚拟机登录的双因素验证
   </strong>
   ：
  </p>
  <p class="graf graf--p">
   在终端复制/粘贴每一行，然后单击 Enter：
  </p>
  <pre class="graf graf--pre">wget "https://raw.githubusercontent.com/Yubico/yubikey-personalization/master/69-yubikey.rules" -O /tmp/69-yubikey.rules
wget "https://raw.githubusercontent.com/Yubico/yubikey-personalization/master/70-yubikey.rules" -O /tmp/70-yubikey.rules
sudo mv /tmp/69-yubikey.rules /etc/udev/rules.d/69-yubikey.rules
sudo mv /tmp/70-yubikey.rules /etc/udev/rules.d/70-yubikey.rules</pre>
  <p class="graf graf--p">
   完全关闭 Buscador；
  </p>
  <p class="graf graf--p">
   将 Yubikey 插入计算机；
  </p>
  <p class="graf graf--p">
   VirtualBox &gt;设置&gt;端口&gt; USB&gt;单击带绿色“+”的图标，选择 Yubikey，单击确定；
  </p>
  <p class="graf graf--p">
   移除 Yubikey；
  </p>
  <p class="graf graf--p">
   启动虚拟机，进入 Buscador；
  </p>
  <p class="graf graf--p">
   插入 Yubikey；
  </p>
  <p class="graf graf--p">
   连接 Yubikey，在 VirtualBox &gt; Device &gt; USB ；
  </p>
  <p class="graf graf--p">
   在终端中，键入：
  </p>
  <pre class="graf graf--p">wget “https://raw.githubusercontent.com/beast-fighter/saves_the_day/master/activate_yubikey.sh"
chmod +x activate_yubikey.sh
./activate_yubikey.sh</pre>
  <p class="graf graf--p">
   出现提示时，按Enter键；
  </p>
  <p class="graf graf--p">
   提示“提交”时，键入y并按Enter键；
  </p>
  <p class="graf graf--p">
   彻底关闭 Buscador；
  </p>
  <p class="graf graf--p">
   移除 Yubikey；
  </p>
  <p class="graf graf--p">
   重启系统；
  </p>
  <p class="graf graf--p">
   插入 Yubikey，登录（成功）您可能需要尝试两次密码。
  </p>
  <p class="graf graf--p">
   最后这部分是可选的。完成导出时您已经完成了所有必要的工作，可以开始您最伟大的调查工作了。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    随着真相事业的价值越来越高，希望能有更多中国朋友加入进来
   </strong>
   。好运！⚪️
  </p>
  <div id="atatags-1611829871-5f3edd11014ef">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6949" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%94%e9%83%a8%e5%88%86%ef%bc%89/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6949" href="https://www.iyouport.org/%e6%9e%84%e5%bb%ba%e4%bd%a0%e7%9a%84%e8%87%aa%e5%ae%9a%e4%b9%89osint%e6%9c%ba%e5%99%a8%ef%bc%88%e7%ac%ac%e4%ba%94%e9%83%a8%e5%88%86%ef%bc%89/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-6949-5f3edd1101ceb" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=6949&amp;origin=www.iyouport.org&amp;obj_id=161182987-6949-5f3edd1101ceb" id="like-post-wrapper-161182987-6949-5f3edd1101ceb">
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
    <a href="https://www.iyouport.org/tag/activism/" rel="tag">
     Activism
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/diy/" rel="tag">
     DIY
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
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
    <a href="https://www.iyouport.org/tag/virtualbox/" rel="tag">
     VirtualBox
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/yubikey/" rel="tag">
     Yubikey
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-11-14T00:04:54+08:00">
    2019年11月14日
   </time>
   <time class="updated" datetime="2019-07-24T00:38:56+08:00">
    2019年7月24日
   </time>
  </div>
 </div>
</article>

