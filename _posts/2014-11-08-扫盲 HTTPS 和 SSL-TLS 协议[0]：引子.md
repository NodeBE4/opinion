---
layout: post
title: "扫盲 HTTPS 和 SSL-TLS 协议[0]：引子"
date: 2014-11-08T23:49:00+08:00
author: 编程随想
from: https://program-think.blogspot.com/2014/11/https-ssl-tls-0.html
tags: [ 编程随想 ]
categories: [ 编程随想 ]
---

<div class="post hentry uncustomized-post-template">
 <a name="7982012316885399752">
 </a>
 <h1 class="post-title entry-title">
  <a href="https://program-think.blogspot.com/2014/11/https-ssl-tls-0.html">
   扫盲 HTTPS 和 SSL/TLS 协议[0]：引子
  </a>
 </h1>
 <div class="post-header">
  <div class="post-header-line-1">
   <div class="post-inner-index">
   </div>
  </div>
 </div>
 <div class="post-body entry-content">
  <center>
   <img alt="不见图 请翻墙" src="https://lh4.googleusercontent.com/H_exzSD20W99qSJhGkLJFPwj3gU7VF_t9VGsbHS19Zkky6Vgrhcn8OG4c3--8-qr3DjL-H6lOQVfYcYEZ5qQp19yOycAvaL-Dnl29AqINsIhWK6ITliRP_tBL4nZ4z_Vw0IO"/>
  </center>
  <br/>
  今天这篇算是补之前的欠债——俺在4年前写过几篇关于 CA 证书的扫盲（“
  <a href="https://program-think.blogspot.com/2010/02/introduce-digital-certificate-and-ca.html">
   这里
  </a>
  ”和“
  <a href="https://program-think.blogspot.com/2010/02/remove-cnnic-cert.html">
   这里
  </a>
  ”），之后有不止一位热心读者建议俺写一篇关于 HTTPS 的扫盲。因为俺比较懒，当时没动笔，一拖就是两三年，都有点忘了。正好今年出了两个跟 HTTPS 相关的高危漏洞（
  <a href="https://en.wikipedia.org/wiki/Heartbleed" rel="nofollow" target="_blank">
   Heartbleed
  </a>
  和
  <a href="https://en.wikipedia.org/wiki/POODLE" rel="nofollow" target="_blank">
   PODDLE
  </a>
  ），于是俺又想起这事儿。
  <br/>
  本来想单独写一篇。等写完“背景知识”这一章节，发现篇幅已经很长了。所以就再开一个系列吧。
  <br/>
  <a name="more">
  </a>
  <!--program-think-->
  <br/>
  事先声明：
  <br/>
  既然叫做“扫盲”，所以俺尽量避免讲太具体的“技术实现细节”（当然，更不会去讲“代码实现”）。本系列侧重于：尽可能通俗地介绍“设计思路”、“实现原理”，最后再聊聊“针对 HTTPS 的攻击手法”和“相关的安全防范措施”。一开始计划写3~4篇，后来没控制住，估计要写7~8篇。
  <br/>
  虽然是扫盲，或许也能让 IT 技术人员从中获益——因为俺发现：连安全行业的某些程序员，对 HTTPS 的原理也所知甚少。
  <br/>
  <br/>
  为了方便阅读，把本系列帖子的目录整理如下（需翻墙）：
  <a name="index">
  </a>
  <br/>
  1.
  <a href="https://program-think.blogspot.com/2014/11/https-ssl-tls-1.html">
   背景知识、协议的需求、设计的难点
  </a>
  <br/>
  2.
  <a href="https://program-think.blogspot.com/2014/11/https-ssl-tls-2.html">
   可靠密钥交换的难点，以及身份认证的必要性
  </a>
  <br/>
  3.
  <a href="https://program-think.blogspot.com/2016/09/https-ssl-tls-3.html">
   扫盲几种密钥交换（密钥协商）算法
  </a>
  <br/>
  4.
  <a href="https://program-think.blogspot.com/2018/09/https-ssl-tls-4.html">
   历史版本的演变及 Record 协议的细节
  </a>
  <br/>
  5. 握手过程的细节
  <br/>
  6. 针对 HTTPS 的各种攻击手法
  <br/>
  7. 各种相应的防范措施
  <br/>
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
   <a href="https://program-think.blogspot.com/2014/11/https-ssl-tls-0.html" id="OriginalPostUrl">
    https://program-think.blogspot.com/2014/11/https-ssl-tls-0.html
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

