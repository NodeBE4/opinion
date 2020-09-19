---
layout: post
title: "C++ 对象是怎么死的？POSIX 线程篇（pthread）"
date: 2009-03-14T23:29:00+08:00
author: 编程随想
from: https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-posix.html
tags: [ 编程随想 ]
categories: [ 编程随想 ]
---

<div class="post hentry uncustomized-post-template">
 <a name="6079639881320464303">
 </a>
 <h1 class="post-title entry-title">
  <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-posix.html">
   C++ 对象是怎么死的？POSIX 线程篇（pthread）
  </a>
 </h1>
 <div class="post-header">
  <div class="post-header-line-1">
   <div class="post-inner-index">
   </div>
  </div>
 </div>
 <div class="post-body entry-content">
  <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-win32.html">
   上一个帖子
  </a>
  聊完了 Win32 环境下和线程有关的 C++ 对象死亡问题，今天该说说 POSIX 的线程库 pthread 了。如果你对 pthread 不太了解，可以先看看
  <a href="https://en.wikipedia.org/wiki/POSIX_Threads" rel="nofollow" target="_blank">
   维基百科
  </a>
  的介绍。
  <a name="more">
  </a>
  <!--program-think-->
  <br/>
  <br/>
  <h2>
   ★三种死法
  </h2>
  <br/>
  废话少说，照例先介绍三种死法。
  <br/>
  <br/>
  <h3>
   ◇自然死亡
  </h3>
  <br/>
  <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-win32.html">
   上一个帖子
  </a>
  已经介绍了 Win32 线程的自然死亡，pthread 的自然死亡和它差不多，也是线程对应的线程函数通过 return 返回。
  <br/>
  <br/>
  <h3>
   ◇自杀
  </h3>
  <br/>
  对于“自杀”，POSIX 使用 pthread_exit 函数来实现。就一种方式，相比 Win32 的自杀简单多了，此处省去不少口水。
  <br/>
  <br/>
  <h3>
   ◇它杀
  </h3>
  <br/>
  虽然 pthread 的自杀简单，但是它杀就比较复杂了。所以，我把口水转移到这里，重点说一下它杀的方式。
  <br/>
  在 pthread 库中主要使用 pthread_cancel 杀线程。用 pthread_cancel 取消线程还分两种情况：“异步取消”（PTHREAD_CANCEL_ASYNCHRONOUS）和“延迟取消”（PTHREAD_CANCEL_DEFERRED）。“异步取消”是相当粗暴的，不管三七二十一，直接把线程干掉；而“延迟取消”则比较温柔，被取消的线程会继续运行直到遇见某个“取消点”才终止。由于本帖不是 pthread 的入门扫盲帖，关于什么是“取消点”以及线程取消的其它细节，请参考 pthread API 手册。
  <br/>
  有同学可能会问了，pthread_kill 难道不是用来“它杀”的？其实 pthread_kill 只不过是给指定的线程发送信号（signal）而已。哎，当初也不知道是哪个家伙起了 pthread_kill 这个函数名，误导了不少同学。另外，使用 pthread_kill 有一点要小心，如果对应的线程【没有】处理收到的信号，则该信号可能会影响线程所在的进程，某些情况下可能会导致进程终止（相当于进程自杀）。
  <br/>
  <br/>
  <h2>
   ★类对象的析构
  </h2>
  <br/>
  <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-win32.html">
   上一个帖子
  </a>
  已经分析过，和线程有关的 C++ 对象，也就是两种局部对象。请看这两种对象在不同死法上，是否能正常析构。
  <br/>
  －－－－－－－－－－－－－－－－－－－－－－－－－－－－
  <br/>
  ｜　　　　　　　｜　局部非静态对象　｜　局部静态对象　｜
  <br/>
  ｜自然死亡　　　｜　能　　　　　　　｜　能　　　　　　｜
  <br/>
  ｜自杀　　　　　｜　不一定能　　　　｜　能　　　　　　｜
  <br/>
  ｜它杀（延迟）　｜　不一定能　　　　｜　能　　　　　　｜
  <br/>
  ｜它杀（异步）　｜　不能　　　　　　｜　能　　　　　　｜
  <br/>
  －－－－－－－－－－－－－－－－－－－－－－－－－－－－
  <br/>
  对于上述对照表中的“不一定能”，俺来详述一下，为啥是“不一定”：
  <br/>
  经俺亲自测试，在 Linux 平台（具体是 RHEL3，GCC 3.2.3）下是能够析构，但是在 Cygwin（具体是 Windows 2003，GCC 3.4.4）中不能。由于现象不一致，俺只好注明“不一定能”。
  <br/>
  由于pthread在不同的操作系统上的实现可能有差异，说不定在某些环境下，自杀和它杀的表现会和上述不一致。假如你发现自己碰到的实际情况和上述不符合，欢迎在本文留言告知俺，俺会补充到本文中 :-)
  <br/>
  从上述结果来看，“异步它杀”是最不安全的，“自然死亡”依然是最安全的。至于“自杀”和“延迟它杀”，则要看具体的环境了。
  <br/>
  <br/>
  <h2>
   ★关于主线程之死
  </h2>
  <br/>
  关于啥是主线程，
  <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-win32.html">
   上一个帖子
  </a>
  已经介绍过了，此处不再多啰嗦。在 POSIX 系统里，主线程的自然死亡也会引发 exit 被调用，从而导致其它线程被野蛮地干掉（这个情形和 Windows 系统类似）。如果你希望主线程退出【不】引发进程自杀，可以使用 pthread_exit 来结束主线程，并让其它线程继续运行。不过由于线程自杀在某些环境下也【不】安全，所以俺建议还是让主线程最后退出比较稳妥。
  <br/>
  <br/>
  POSIX 系统中，线程相关的对象析构问题，就聊到这里。
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
   <a href="https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-posix.html" id="OriginalPostUrl">
    https://program-think.blogspot.com/2009/03/cxx-object-destroy-with-thread-posix.html
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

