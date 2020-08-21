---
layout: post
title: "隐藏 bash 历史命令的小技巧 - iYouPort"
date: 2018-09-10T14:44:50+00:00
author: iYouPort
from: https://www.iyouport.org/%e9%9a%90%e8%97%8f-bash-%e5%8e%86%e5%8f%b2%e5%91%bd%e4%bb%a4%e7%9a%84%e5%b0%8f%e6%8a%80%e5%b7%a7/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-8001 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-289 category-54 tag-linux tag-technology" id="post-8001">
 <header class="entry-header">
  <h1 class="entry-title">
   隐藏 bash 历史命令的小技巧
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-09-10T22:44:50+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:47:12+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   0 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   如果你登录过 Linux 系统，并敲过一些命令，那你应该知道，bash history 会记录你输入的所有命令。这个操作其实是有一定风险的。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-8002 jetpack-lazy-image" data-lazy-sizes="(max-width: 958px) 100vw, 958px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=958%2C492&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?w=958&amp;ssl=1 958w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=768%2C394&amp;ssl=1 768w" data-recalc-dims="1" height="492" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=958%2C492&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="958"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-8002" data-recalc-dims="1" height="492" sizes="(max-width: 958px) 100vw, 958px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=958%2C492&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?w=958&amp;ssl=1 958w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=300%2C154&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-39.png?resize=768%2C394&amp;ssl=1 768w" width="958"/>
   </noscript>
  </p>
  <p>
   我个人经常使用 Linux，所以我想着研究一番，看看如何隐藏 bash history。下面就是我整理的一些方法，仅供大家参考：
  </p>
  <p>
   <strong>
    ·
   </strong>
   exit normally – history 记录正常写入
  </p>
  <p>
   <strong>
    ·
   </strong>
   kill&lt;bash process ID&gt; – 服务器端运行 -kill bash 进程ID后就不会再记录 history 了。我检查过是否需要加-9参数，不过不用，只需要一个基本的 kill 命令，就可以杀掉进程并阻止它写入文件。
  </p>
  <p>
   <strong>
    ·
   </strong>
   kill&lt;ssh process ID&gt; – 客户端运行–kill ssh 进程 ID，即时加了-9参数还是会有历史记录。
  </p>
  <p>
   <strong>
    ·
   </strong>
   set +o history – 不会将任何当前会话写入日志。可以在会话期间任何时间运行，并隐藏所有命令。
  </p>
  <p>
   <strong>
    ·
   </strong>
   set -o history – 重启日志记录，但是会记录 set 命令，所以会发生一些明显的变化。
  </p>
  <p>
   <strong>
    ·
   </strong>
   unset HISTFILE – 清除记录历史文件位置的变量，这样就不会存储任何东西
  </p>
  <p>
   <strong>
    ·
   </strong>
   history -c – 彻底清除历史。这条命令作用非常明显，因为所有的历史命令都没了。
  </p>
  <p>
   <strong>
    ·
   </strong>
   export HISTIGNORE=“ls
   <em>
    :cat
   </em>
   ” – 这条命令是不记录引号中以冒号为分隔符的命令。这条命令可以使用shell模式，有点类似正则，但不尽相同
  </p>
  <p>
   <strong>
    ·
   </strong>
   export HISTFILESIZE=10 – 设置历史记录数量为10。如果你已经完成了想要隐藏的操作，但又想保留其他的命令，请重新计算，将记录数的大小设置为小于总数并继续执行。这样，所有之前的命令就会不可见，看起来会有一些可疑，但是因为历史记录中还是有内容，所以人们可能不会注意到。
  </p>
  <p>
   <strong>
    ·
   </strong>
   editing the.bash_history file – 如果你在会话期间编辑这个文件，编辑的内容将会出现在会话的命令之前，这样你其实可以在 history 中添加一些你实际并没有运行过的命令，所以这也不失为一个好办法。
  </p>
  <p>
   <strong>
    ·
   </strong>
   using multiple sessions – 一个会话终止时才会写入 bash history。那我们可以使用两个会话，第一个会话终止会写入history，然后第二个会话的内容会在第一个会话终止时才开始写入 history
  </p>
  <p>
   <strong>
    ·
   </strong>
   putting a space before a command（命令前面加一个空格） – 根据配置，在命令前加一个空格，就会不进行记录。如果你已经输入了你不想记录的命令，那么这个功能就没什么用，但如果想让几条好不相关的命令看似一条的话，使用这个还是不错的。在使用之前请先进行测试，因为根据发行版和用户配置不同，情况会有所不同。另请阅读：
   <a href="https://www.linuxjournal.com/content/using-bash-history-more-efficiently-histcontrol" rel="nofollow noopener" title="This link will take you away from steemit.com">
    更高效地使用 bash history:HISTCONTROL
   </a>
  </p>
  <p>
   <strong>
    ·
   </strong>
   history -r – 这条命令会重新读取 history 文件，能够将历史记录重置为你登录时的状态。这条命令似乎非常有用，尤其是你可以编辑 history 文件，添加命令时，然后关掉 shell。这会写入经过你修改的 history，不留任何痕迹。
  </p>
  <p>
   上面这些命令，好像“set +o history”是最好用的也是最通用的方法，因为它会隐藏当前会话的所有命令，但是会保留之前的命令。
  </p>
  <p>
   不过根据场景不同，其他的命令也是非常有效的。
  </p>
  <p>
   在你使用这些命令之前，一定要先自己测试一遍。当你已经登录了一个系统，而且意识到需要隐藏某些命令时，不要慌张，history 只会在会话结束时写入，所以只要会话还没有结束，你就可以停下来思考，怎么去隐藏命令，希望本文的内容能够帮到你。◾️
  </p>
  <div id="atatags-1611829871-5f402f2aa5f1e">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-8001" href="https://www.iyouport.org/%e9%9a%90%e8%97%8f-bash-%e5%8e%86%e5%8f%b2%e5%91%bd%e4%bb%a4%e7%9a%84%e5%b0%8f%e6%8a%80%e5%b7%a7/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-8001" href="https://www.iyouport.org/%e9%9a%90%e8%97%8f-bash-%e5%8e%86%e5%8f%b2%e5%91%bd%e4%bb%a4%e7%9a%84%e5%b0%8f%e6%8a%80%e5%b7%a7/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-8001-5f402f2aa7560" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=8001&amp;origin=www.iyouport.org&amp;obj_id=161182987-8001-5f402f2aa7560" id="like-post-wrapper-161182987-8001-5f402f2aa7560">
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
    <a href="https://www.iyouport.org/tag/linux/" rel="tag">
     Linux
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
   <time class="entry-date published" datetime="2018-09-10T22:44:50+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:47:12+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

