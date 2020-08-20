---
layout: post
title: "如何使用社交工程来攻击 2FA？ - iYouPort"
date: 2019-08-01T16:02:14+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%9d%a5%e6%94%bb%e5%87%bb-2fa%ef%bc%9f/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-3735 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-41 category-54 category-67 tag-2fa tag-privacy tag-security tag-selfcare tag-social-engineering tag-technique" id="post-3735">
 <header class="entry-header">
  <h1 class="entry-title">
   如何使用社交工程来攻击 2FA？
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
   <a href="https://www.iyouport.org/category/%e5%bf%83%e7%90%86%e5%ad%a6%e5%92%8c%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b/" rel="category tag">
    心理学和社交工程
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
   <time class="entry-date published" datetime="2019-08-02T00:02:14+08:00">
    2019年8月2日
   </time>
   <time class="updated" datetime="2019-05-12T00:20:19+08:00">
    2019年5月12日
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
       双因素身份认证被认为是相对可靠的保护措施。但是它很可能并没那么安全，使用社交工程伎俩就可以令2FA失败。如何做到的？
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-3736 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1100%2C380&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?w=1174&amp;ssl=1 1174w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=300%2C104&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=768%2C266&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1024%2C354&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1100%2C380&amp;ssl=1 1100w" data-recalc-dims="1" height="380" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1100%2C380&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-3736" data-recalc-dims="1" height="380" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1100%2C380&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?w=1174&amp;ssl=1 1174w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=300%2C104&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=768%2C266&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1024%2C354&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-318.png?resize=1100%2C380&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如今，许多服务都使用双因素身份验证（2FA）来提高用户帐户的安全性。在大多数情况下，2FA 使用密码和通过短信或电子邮件发送的代码作为验证的两个因素。与仅使用密码方法相比，2FA 显著更强、并提供更好的安全性。
  </p>
  <p class="graf graf--p">
   但是，2FA 也容易受到攻击。最值得注意的是，攻击者可以使用社交工程策略绕过2FA并侵入用户帐户。因此，重要的是要充分了解社交工程如何运作以及如何最好地应对社交工程。
  </p>
  <p class="graf graf--p">
   作为一名安全专家，您可能已经知道这一点，但您组织中的大多数人可能都不知道。社交工程利用人类行为特征、思维弱点和心理学以实现有效的攻击和入侵。通过使用情绪触发器、以及其他心理策略，攻击者可以说服用户放弃他们的个人信息和其他致命的细节。
  </p>
  <p class="graf graf--p">
   正因为社交工程使用的是人类心理学基本特征，所以并没有万无一失的反击方法。几乎没有软件或工具可以有效阻止社交工程攻击。
  </p>
  <p class="graf graf--p">
   这就是为什么人类是反对社交工程攻击的第一道也是唯一的防线。如果用户知道社交工程攻击是什么以及如何执行，就更有可能识别它、并且不会因此陷入困境。
  </p>
  <p class="graf graf--p">
   反社交工程的第一步是了解它的运作方式。以下是攻击者可以绕过双因素身份验证的一些
   <strong class="markup--strong markup--p-strong">
    最常见
   </strong>
   的情况。
  </p>
  <p class="graf graf--p">
   攻击者使用各种策略来执行社交工程攻击。说到 2FA，两种最常见的社会工程攻击类型遵循下面解释的方案。
  </p>
  <p class="graf graf--p">
   场景1: 攻击者知道您的用户名和密码
  </p>
  <p class="graf graf--p">
   数据泄漏在当今的数字世界中是很常见的。即使是大公司和在线零售商也会受到影响。在此类数据泄漏期间，大量的用户数据（包括登录用户名和密码）被转储到黑客站点上。
  </p>
  <p class="graf graf--p">
   任何攻击者都可以访问这些数据并获取您的登录凭据。但是使用双因素身份验证的话，攻击者就无法仅使用用户名和密码来登录。因此，攻击者会使用社交工程来获取第二步验证的代码。
  </p>
  <p class="graf graf--p">
   在这种攻击期间，攻击者可以向用户发送警告消息。此消息说明了以下内容：如果IP不属于您，则您的用户帐户已从可疑IP地址访问，请使用发送到您的号码的验证码进行回复。
  </p>
  <p class="graf graf--p">
   在幕后，攻击者使用您的用户名和密码登录该服务。然后该服务会将验证码发送到您的手机。
  </p>
  <p class="graf graf--p">
   如果用户使用验证码响应了那个虚假的警告消息，则攻击者就能够使用它来绕过2FA的第二步。登录后，攻击者还窃取会话 cookie 并对用户帐户进行完全未经授权的访问。
  </p>
  <p class="graf graf--p">
   场景2：攻击者没有任何用户数据
  </p>
  <p class="graf graf--p">
   现在考虑这种情况。攻击者不知道您的用户名、密码、电话号码或验证码。而且，他仍然可以使用社交工程攻击来获得所有这些信息，以及更多致命信息。
  </p>
  <p class="graf graf--p">
   这种类型的攻击使用钓鱼网站 — — 伪装成真正网站的虚假网站。网络钓鱼网站通常使用与真实网站十分相似的网址，仅仅差一个字母的区别，例如 Gmaiil. com 而不是 Gmail. com 或 LunkedIn. com 而不是 LinkedIn. com。
  </p>
  <p class="graf graf--p">
   攻击者会首先创建一个有说服力的电子邮件，看起来它来自您认识的人或来自服务本身。该电子邮件的链接看起来很真实，并且您被要求登录。一旦您点击该链接，您将被带到虚假网站。
  </p>
  <p class="graf graf--p">
   在假网站上，系统会要求您提供登录用户名和密码。当您提供这些详细信息时，攻击者会使用它们在真实的登录网站上登录。真实的网站会向您的号码发送验证码。当您在虚假登录站点上输入此代码时，攻击者也会获取代码并使用它来完成真实网站上的登录。
  </p>
  <p class="graf graf--p">
   通过这种方式，攻击者就能够绕过 2FA 并获得对服务或网站上的用户帐户的访问权限。
  </p>
  <p class="graf graf--p">
   现在我们已经看到攻击者如何使用社交工程来绕过 2FA，现在是时候探索可以防止社交工程黑客的一些方法了。使用这些工具和技巧，您可以自己避免社交工程陷阱，并指导工作场所的同事和其他朋友。
  </p>
  <p class="graf graf--p">
   1、安全密钥是 2FA 中使用的另一种身份验证形式。这些是包含带有一个或多个密码的硬件芯片的物理密钥。这些密码由服务识别，并被接受为身份验证中合法的第二个因素。
  </p>
  <p class="graf graf--p">
   安全密钥还具有内置机制，用于在提供存储在其上的密码之前确定网站是否合法。通过这种方式，它们可以防止网络钓鱼网站和虚假登录页面获取用户登录信息。
  </p>
  <p class="graf graf--p">
   2、大多数社交工程策略使用网络钓鱼攻击和会话劫持来获取用户详细信息。高质量的安全 VPN 可以加密数据流量并保护浏览会话。这减少了社交工程攻击的可能性。
  </p>
  <p class="graf graf--p">
   VPN 还可以有效抵御针对虚假站点使用 HTTPS 的高级网络钓鱼和社交工程攻击。您必须投资信誉良好的 VPN 才能获得对社交工程的良好保护。这是因为即使是一些著名的 VPN，例如Avast Secureline，也会出现严重的漏洞。在这里看到安全VPN的一些推荐《
   <a class="markup--anchor markup--p-anchor" data-href="https://steemit.com/life/@iyouport/7nfymr" href="https://www.iyouport.org/%e5%ae%89%e5%85%a8%e6%89%8b%e5%86%8c%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e4%bd%a0%e9%9c%80%e8%a6%81%e7%9a%84%e5%87%a0%e4%b9%8e%e6%89%80%e6%9c%89%e5%ae%89%e5%85%a8%e4%b8%8a%e7%bd%91%e5%b7%a5%e5%85%b7/" rel="noopener noreferrer" target="_blank">
    安全手册
   </a>
   》
  </p>
  <p class="graf graf--p">
   3、防范意识是对抗社交工程的最重要方式。了解社交工程是什么以及如何工作的用户通常可以更有效地避免社交工程攻击。
  </p>
  <p class="graf graf--p">
   组织和团队可以投资于社交工程意识培训，以使其成员能够抵御社交工程攻击。渗透测试和模拟场景是帮助用户了解社交工程如何工作的好方法。
  </p>
  <p class="graf graf--p">
   您非常有必要让您身边的人与您保持一致的安全意识和习惯，否则他们中的任何一个人都有可能将您和您的整个团队拉入火坑。
  </p>
  <div id="atatags-1611829871-5f3e18b62ae3e">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-3735" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%9d%a5%e6%94%bb%e5%87%bb-2fa%ef%bc%9f/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-3735" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e4%bd%bf%e7%94%a8%e7%a4%be%e4%ba%a4%e5%b7%a5%e7%a8%8b%e6%9d%a5%e6%94%bb%e5%87%bb-2fa%ef%bc%9f/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/2fa/" rel="tag">
     2FA
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/privacy/" rel="tag">
     privacy
    </a>
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
    <a href="https://www.iyouport.org/tag/technique/" rel="tag">
     technique
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-08-02T00:02:14+08:00">
    2019年8月2日
   </time>
   <time class="updated" datetime="2019-05-12T00:20:19+08:00">
    2019年5月12日
   </time>
  </div>
 </div>
</article>

