---
layout: post
title: "C-C++ 中一个简单的 enum 手法（idiom）"
date: 2009-04-18T23:21:00+08:00
author: 编程随想
from: https://program-think.blogspot.com/2009/04/c-cxx-enum-idiom.html
tags: [ 编程随想 ]
categories: [ 编程随想 ]
---

<div class="post hentry uncustomized-post-template">
 <a name="1022729887606912193">
 </a>
 <h1 class="post-title entry-title">
  <a href="https://program-think.blogspot.com/2009/04/c-cxx-enum-idiom.html">
   C/C++ 中一个简单的 enum 手法（idiom）
  </a>
 </h1>
 <div class="post-header">
  <div class="post-header-line-1">
   <div class="post-inner-index">
   </div>
  </div>
 </div>
 <div class="post-body entry-content">
  <h2>
   ★引子
  </h2>
  <br/>
  今天写程序的时候，又用到这个 idiom 了，于是顺便贴出来。这个 idiom 蛮简单的，估计很多人都用过。今天主要是贴出来给新手参考（老手们就甭费时看此帖了）。
  <a name="more">
  </a>
  <!--program-think-->
  <br/>
  为了说明这个手法具体该咋用，咱举一个简单的例子来说事儿。比方说要开发一个网络程序，其中需要统计各种网络协议的数据包数量。
  <br/>
  <br/>
  <h2>
   ★版本1
  </h2>
  <br/>
  假设一开始只需要处理 HTTP 和 FTP 两种协议。有些同学不假思索，立即会声明如下两个整数用于统计：
  <br/>
  <div class="source">
   <pre><span></span><span class="kt">int</span> <span class="n">nCntHttp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kt">int</span> <span class="n">nCntFtp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
</pre>
  </div>
  <br/>
  猛一看，似乎没啥问题。但是，如果需求发生变更，又要增加两种协议：SMTP 和 SSH。然后，该同学会继续扩展上述代码，变为如下：
  <br/>
  <div class="source">
   <pre><span></span><span class="kt">int</span> <span class="n">nCntHttp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kt">int</span> <span class="n">nCntFtp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kt">int</span> <span class="n">nCntSmtp</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
<span class="kt">int</span> <span class="n">nCntSsh</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span>
</pre>
  </div>
  <br/>
  这时候，问题开始显露出来了。比方说要打印上述4统计值，就得写4个 printf 语句；再假如要用断言确保所有统计值大于零，也得写4个 assert 断言。这都是挺烦人的事儿。（当然啦，有些同学会把4个变量的打印写在一个 printf 中，但还是一样烦人）
  <br/>
  <br/>
  <h2>
   ★版本2
  </h2>
  <br/>
  这可咋办捏？有点小聪明的程序猿就灵机一动，把上述代码修改为数组形式，上述的4个统计值【依次】放入数组中。具体如下：
  <br/>
  <div class="source">
   <pre><span></span><span class="kt">int</span> <span class="n">nCntProto</span><span class="p">[</span><span class="mi">4</span><span class="p">];</span>
<span class="cm">/* 第0个是HTTP，第1个是FTP，第2个是SMTP，第3个是SSH */</span>
</pre>
  </div>
  <br/>
  这样一来，无论是打印还是断言，用一个 for 循环就搞定，貌似挺方便滴。
  <br/>
  但这么一来，引入了另一个问题：假设我在程序中要用到 SMTP 的统计数字，就得这么写代码：
  <br/>
  <div class="source">
   <pre><span></span><span class="n">nCntProto</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span>
</pre>
  </div>
  <br/>
  这就造成了很不雅观的“
  <a href="https://en.wikipedia.org/wiki/Magic_number_(programming)#Unnamed_numerical_constant" rel="nofollow" target="_blank">
   Magic Number
  </a>
  ”！要知道，Magic Number 可是代码的臭味之一啊（其弊端在“
  <a href="https://program-think.blogspot.com/2009/02/defect-of-java-beginner-3-code-style.html#magic_number">
   这篇博文
  </a>
  ”中曾经介绍过）。万一将来，数组中的存放顺序发生变化，那就完蛋了：好多用到 Magic Number 的代码都得跟着改。一旦漏改某处，引出 Bug 无数！
  <br/>
  <br/>
  <h2>
   ★版本3
  </h2>
  <br/>
  为了消除 Magic Number，增加代码可读性和可维护性，有些同学开始打起 enum 的主意。在代码中增加了一组 enum，具体如下：
  <br/>
  <div class="source">
   <pre><span></span><span class="k">enum</span> <span class="n">PROTO</span>
<span class="p">{</span>
    <span class="n">PROTO_HTTP</span><span class="p">,</span>
    <span class="n">PROTO_FTP</span><span class="p">,</span>
    <span class="n">PROTO_SMTP</span><span class="p">,</span>
    <span class="n">PROTO_SSH</span><span class="p">,</span>
<span class="p">};</span>

<span class="kt">int</span> <span class="n">nCntProto</span><span class="p">[</span><span class="mi">4</span><span class="p">];</span>
</pre>
  </div>
  <br/>
  这样，如果我需要用到 SMTP 的统计数字，我就不用写
  <br/>
  <div class="source">
   <pre><span></span><span class="n">nCntProto</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span>
</pre>
  </div>
  而是写
  <br/>
  <div class="source">
   <pre><span></span><span class="n">nCntProto</span><span class="p">[</span><span class="n">PROTO_SMTP</span><span class="p">]</span>
</pre>
  </div>
  显然，可读性明显好多了。即使将来数组中的存放顺序发生变化，也没关系：只需稍微调整 enum 中常量的顺序即可，其它代码不用动。
  <br/>
  <br/>
  <h2>
   ★版本4
  </h2>
  <br/>
  但是，还是有一个不爽的地方。定义数组的语句用到了“4”这个 Magic Number。万一将来需求继续变更，继续增加协议，那这个数字还得不断调整。还是有点不爽！
  <br/>
  咋办捏？这时候，终极版本隆重登场。请看如下代码：
  <br/>
  <div class="source">
   <pre><span></span><span class="k">enum</span> <span class="n">PROTO</span>
<span class="p">{</span>
    <span class="n">PROTO_HTTP</span><span class="p">,</span>
    <span class="n">PROTO_FTP</span><span class="p">,</span>
    <span class="n">PROTO_SMTP</span><span class="p">,</span>
    <span class="n">PROTO_SSH</span><span class="p">,</span>

    <span class="n">PROTO_NUM</span>  <span class="cm">/* 表示协议数量 */</span>
<span class="p">};</span>

<span class="kt">int</span> <span class="n">nCntProto</span><span class="p">[</span><span class="n">PROTO_NUM</span><span class="p">];</span>
</pre>
  </div>
  <br/>
  这种写法的好处在于，【没有任何一个】Magic Number 出现在代码中。不管是引用某个统计值还是循环遍历数组，都使用的是定义好的常量。
  <br/>
  就算未来发生需求变更，要增加新的协议，只要往 enum 中增加相应的 enum 常量即可（但要记得保证 PROTO_NUM 位于 enum 定义的末尾）。由于 PROTO_NUM 会自动跟着增长，所以其它的代码几乎不会受到影响。
  <br/>
  <br/>
  <h2>
   ★C++ 的补充说明
  </h2>
  <br/>
  上述代码同时适用于 C 和 C++。不过捏，某些 C++ 程序员或许看不惯原始数组，觉得 STL 的容器类看起来比较顺眼。那也没啥大关系：只要把上述代码中声明数组的那句修改为如下，其它的代码基本照旧。
  <br/>
  <div class="source">
   <pre><span></span><span class="n">std</span><span class="o">::</span><span class="n">vector</span><span class="o">&lt;</span><span class="kt">int</span><span class="o">&gt;</span> <span class="n">vctCntProto</span><span class="p">(</span><span class="n">PROTO_NUM</span><span class="p">);</span>
</pre>
  </div>
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
   <a href="https://program-think.blogspot.com/2009/04/c-cxx-enum-idiom.html" id="OriginalPostUrl">
    https://program-think.blogspot.com/2009/04/c-cxx-enum-idiom.html
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

