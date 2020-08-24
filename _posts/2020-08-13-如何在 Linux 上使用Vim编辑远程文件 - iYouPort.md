---
layout: post
title: "如何在 Linux 上使用Vim编辑远程文件 - iYouPort"
date: 2020-08-13T16:01:32+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-linux-%e4%b8%8a%e4%bd%bf%e7%94%a8vim%e7%bc%96%e8%be%91%e8%bf%9c%e7%a8%8b%e6%96%87%e4%bb%b6/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-13408 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-linux tag-technology tag-vim" id="post-13408">
 <header class="entry-header">
  <h1 class="entry-title">
   如何在 Linux 上使用Vim编辑远程文件
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
   <time class="entry-date published" datetime="2020-08-14T00:01:32+08:00">
    2020年8月14日
   </time>
   <time class="updated" datetime="2020-07-30T16:48:53+08:00">
    2020年7月30日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <p class="graf graf--p">
   Vim 是最好的、可高度自由配置的文本编辑器之一，它具有许多其他文本编辑器中找不到的独特功能。
  </p>
  <p class="graf graf--p">
   本文将讨论一项有用的功能 —— 从本地系统编辑远程系统的文件。即：您可以编辑存储在远程 Linux 系统中的文件，而无需实际通过SSH或任何其他方法登录。
  </p>
  <p class="graf graf--p">
   从 Vim 7.x 版本开始，将 netrw.vim 插件安装为标准插件。该插件可让您通过 ftp，rcp，scp 或 http 编辑文件。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    什么是 Netrw 插件？
   </strong>
  </h3>
  <p class="graf graf--p">
   Netrw（面向网络的读取、写入和浏览）插件支持跨网络进行本地和远程编辑、读取和写入文件。它还支持浏览本地和远程目录。下面具体说明一下。
  </p>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Linux 上使用 Vim 编辑远程文件
   </strong>
  </h3>
  <p class="graf graf--p">
   使用Vim编辑远程文件非常简单，只需要这样：
  </p>
  <pre class="graf graf--pre">vim scp://<a class="__cf_email__" data-cfemail="c7b2b4a2b587b5a2aaa8b3a2b4beb4b3a2aa" href="/cdn-cgi/l/email-protection">[email protected]</a>//path_to_file</pre>
  <p class="graf graf--p">
   例子：我的远程系统中有一个名为 info.txt 的文本文件，其内容如下。
  </p>
  <pre class="graf graf--pre">Welcome to OSTechNix</pre>
  <p class="graf graf--p">
   现在，我将编辑该文件，并对其进行一些更改，然后保存并关闭该文件。全部来自我的本地系统。
  </p>
  <p class="graf graf--p">
   为此，只需运行以下命令：
  </p>
  <pre class="graf graf--pre">$ vim scp://<a class="__cf_email__" data-cfemail="a8dbc3e899919a86999e90869a9a9d869a9a" href="/cdn-cgi/l/email-protection">[email protected]</a>/info.txt</pre>
  <p class="graf graf--p">
   在这里，您应注意以下三件事。
  </p>
  <p class="graf graf--p">
   1、
   <a class="__cf_email__" data-cfemail="02777167704270676f6d7667717b7176676f" href="/cdn-cgi/l/email-protection">
    [email protected]
   </a>
   (例如
   <a class="__cf_email__" data-cfemail="44372f04757d766a75727c6a7676716a7676" href="/cdn-cgi/l/email-protection">
    [email protected]
   </a>
   ) —— sk是远程系统的用户名。 192.168.225.22 是远程系统的IP地址。
  </p>
  <p class="graf graf--p">
   2、Single slash (/) —— 如果要编辑存储在远程系统 $ HOME 目录中的文件，则必须使用斜杠将远程系统的IP地址或主机名与文件路径分开。在以上情况下，我已将 info.txt 文件存储在$ HOME目录中，因此使用了单斜杠。
  </p>
  <p class="graf graf--p">
   3、// (Double slashes) —— 要指定文件的完整路径，必须使用双斜杠。一个斜杠（/）用于将远程系统的IP地址或主机名与实际文件路径分开；另一个斜杠用于表示远程文件的完整路径。
  </p>
  <p class="graf graf--p">
   例如，假设您正在编辑一个名为 info.txt 的文件，该文件位于远程系统的 /home/sk/Documents/ 目录中。在这种情况下，命令将是：
  </p>
  <pre class="graf graf--pre">$ vim scp://<a class="__cf_email__" data-cfemail="c0b3ab80f1f9f2eef1f6f8eef2f2f5eef2f2" href="/cdn-cgi/l/email-protection">[email protected]</a>//home/sk/Documents/info.txt</pre>
  <p class="graf graf--p">
   请注意，双斜杠在远程系统的IP地址和文件路径之间。仅在提及远程文件的绝对路径时才需要双斜杠。
  </p>
  <p class="graf graf--p">
   验证本地系统中远程文件的内容：
  </p>
  <pre class="graf graf--pre">$ ssh <a class="__cf_email__" data-cfemail="14677f54252d263a25222c3a2626213a2626" href="/cdn-cgi/l/email-protection">[email protected]</a> cat info.txt
<a class="__cf_email__" data-cfemail="a4d7cfe4959d968a95929c8a9696918a9696" href="/cdn-cgi/l/email-protection">[email protected]</a>'s password: 
Welcome to OSTechNix blog</pre>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-13409 jetpack-lazy-image" data-lazy-sizes="(max-width: 779px) 100vw, 779px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=779%2C230&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?w=779&amp;ssl=1 779w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=300%2C89&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=768%2C227&amp;ssl=1 768w" data-recalc-dims="1" height="230" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=779%2C230&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="779"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13409" data-recalc-dims="1" height="230" sizes="(max-width: 779px) 100vw, 779px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=779%2C230&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?w=779&amp;ssl=1 779w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=300%2C89&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2020/04/1-3.png?resize=768%2C227&amp;ssl=1 768w" width="779"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   看到没？我在 info.txt 文件中添加了一个额外的单词“ blog”。
  </p>
  <p class="graf graf--p">
   有时，出于安全考虑，您可能已更改了默认SSH端口。在这种情况下，请像下面那样提及SSH端口。
  </p>
  <pre class="graf graf--pre">$ vim scp://<a class="__cf_email__" data-cfemail="11627a512028233f2027293f2323243f2323" href="/cdn-cgi/l/email-protection">[email protected]</a>:2200/info.txt</pre>
  <p class="graf graf--p">
   将2200替换为您的SSH端口号。
  </p>
  <p class="graf graf--p">
   如果您没有 ssh / scp 访问权限，则可以使用其他协议，例如ftp，如下所示。
  </p>
  <pre class="graf graf--pre">$ vim ftp://<a class="__cf_email__" data-cfemail="0b7e786e794b796e66647f6e7872787f6e66" href="/cdn-cgi/l/email-protection">[email protected]</a>/path/to/file</pre>
  <h3 class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Vim 会话中编辑远程文件
   </strong>
  </h3>
  <p class="graf graf--p">
   如果您已经在Vim会话中，则可以从本地系统编辑远程文件，如下所示。
  </p>
  <p class="graf graf--p">
   通过运行以下命令从Vim的新缓冲区中打开文件：
  </p>
  <pre class="graf graf--pre">:e scp://<a class="__cf_email__" data-cfemail="cebda58efff7fce0fff8f6e0fcfcfbe0fcfc" href="/cdn-cgi/l/email-protection">[email protected]</a>/info.txt</pre>
  <p class="graf graf--p">
   在文件中进行更改，然后按ESC键并键入 :wq 以保存并关闭文件。
  </p>
  <p class="graf graf--p">
   下面是视觉演示：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-13410 jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2.gif?resize=779%2C472&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="472" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2.gif?resize=779%2C472&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="779"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-13410" data-recalc-dims="1" height="472" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2020/04/2.gif?resize=779%2C472&amp;ssl=1" width="779"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如您在上面的输出中看到的，
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    从本地系统打开了Vim编辑器，
   </li>
   <li class="graf graf--li">
    然后，在Vim会话的新缓冲区中打开了名为 info.txt 的远程文件，
   </li>
   <li class="graf graf--li">
    然后在文件中进行一些更改，
   </li>
   <li class="graf graf--li">
    最后，保存更改并关闭文件 (ESC 和 :wq)
   </li>
  </ul>
  <p class="graf graf--p">
   您还可以通过运行以下命令在新选项卡中打开文件：
  </p>
  <pre class="graf graf--pre">:tabe scp://<a class="__cf_email__" data-cfemail="85f6eec5b4bcb7abb4b3bdabb7b7b0abb7b7" href="/cdn-cgi/l/email-protection">[email protected]</a>/info.txt</pre>
  <p class="graf graf--p">
   希望本文能对您有所帮助。⚪️
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.ostechnix.com/vim-tips-edit-remote-files-with-vim-on-linux/" href="https://www.ostechnix.com/vim-tips-edit-remote-files-with-vim-on-linux/" rel="noopener noreferrer" target="_blank">
    Vim Tips — Edit Remote Files With Vim On Linux
   </a>
  </p>
  <div id="atatags-1611829871-5f43b2f16b4c3">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-13408" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-linux-%e4%b8%8a%e4%bd%bf%e7%94%a8vim%e7%bc%96%e8%be%91%e8%bf%9c%e7%a8%8b%e6%96%87%e4%bb%b6/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-13408" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e5%9c%a8-linux-%e4%b8%8a%e4%bd%bf%e7%94%a8vim%e7%bc%96%e8%be%91%e8%bf%9c%e7%a8%8b%e6%96%87%e4%bb%b6/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-13408-5f43b2f16bb81" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=13408&amp;origin=www.iyouport.org&amp;obj_id=161182987-13408-5f43b2f16bb81" id="like-post-wrapper-161182987-13408-5f43b2f16bb81">
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
   <li>
    <a href="https://www.iyouport.org/tag/vim/" rel="tag">
     Vim
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2020-08-14T00:01:32+08:00">
    2020年8月14日
   </time>
   <time class="updated" datetime="2020-07-30T16:48:53+08:00">
    2020年7月30日
   </time>
  </div>
 </div>
</article>

