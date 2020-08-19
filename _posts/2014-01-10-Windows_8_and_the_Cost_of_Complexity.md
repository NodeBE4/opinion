---
layout: post
title: "Windows 8 and the Cost of Complexity"
date: 2014-01-10T16:34:44+00:00
author: Ben Thompson
from: https://stratechery.com/2014/windows-8-cost-complexity/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-649 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-app-stores topics-pcs topics-windows topics-windows-app-store concepts-product-management concepts-the-user-experience companies-microsoft" id="post-649">
 <header class="entry-header">
  <h1 class="entry-title">
   Windows 8 and the Cost of Complexity
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2014-01-10T08:34:44-08:00">
     Friday, January 10, 2014
    </time>
    <time class="updated" datetime="2018-03-27T05:39:44-07:00">
     Tuesday, March 27, 2018
    </time>
   </span>
   <span class="byline">
    <span class="author vcard">
     <span class="screen-reader-text">
      Author
     </span>
     by
     <a class="url fn n" href="https://stratechery.com/author/stratechery/">
      Ben Thompson
     </a>
    </span>
   </span>
  </div>
  <!-- .entry-meta -->
 </header>
 <!-- .entry-header -->
 <div class="entry-content">
  <p>
   PCs just suffered their worse quarter ever.
   <a href="http://online.wsj.com/news/articles/SB10001424052702303754404579310950982181302">
    From the WSJ
   </a>
   :
  </p>
  <blockquote>
   <p>
    World-wide PC shipments fell 10% last year, research firms Gartner Inc. and IDC said Thursday, the worst-ever sales slump for the industry. Both companies have been tracking personal computer sales since the 1980s. Computer makers have been hurt as consumers and businesses spend more time on smartphones and tablets, and are slower to replace aging PCs.
   </p>
  </blockquote>
  <p>
   Here are the last 10 years of PC Sales from IDC (thanks to
   <a href="https://twitter.com/charlesarthur">
    Charles Arthur
   </a>
   , who wrote a great column today
   <a href="http://www.theguardian.com/technology/2014/jan/09/pc-value-trap-windows-chrome-hp-dell-lenovo-asus-acer">
    about PC OEMs
   </a>
   , for the full set of numbers):
  </p>
  <p>
   <a href="http://stratechery.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-11-at-12.01.59-AM.png">
    <img alt="PC sales for the last 10 years" class="aligncenter size-medium wp-image-650" height="340" src="https://stratechery.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-11-at-12.01.59-AM-600x340.png" width="600"/>
   </a>
  </p>
  <p>
   The WSJ – and prevailing wisdom – blames two factors for the decline of PCs: PCs have become “good enough,” lengthening the replacement cycle, and more and more time is being spent on tablets and other appliance-like devices.
  </p>
  <p>
   However, I don’t think these factors are independent; it’s not just that tablets occupy more of a user’s time, but that by doing so they make any performance issues on one’s PC less pressing simply because you use it less. To put it another way, users are likely to have a higher standard for their primary computing device than they are a secondary one; as PCs become secondary devices for more and more people the standard for “good enough” becomes lower and lower.
  </p>
  <p>
   Looking at year-over-year growth certainly suggests that tablets are the bigger factor – note the step decrease in growth in 2010, the year the iPad was released:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_649" id="identifier_0_649" title="The plummet in 2008-9 was due to the Great Recession; the peak in 2009-10 was pent-up demand from said recession">
    1
   </a>
  </p>
  <p>
   <a href="http://stratechery.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-11-at-12.02.33-AM.png">
    <img alt="Year-over-Year Growth in PC Sales" class="aligncenter size-medium wp-image-651" height="335" src="https://stratechery.com/wp-content/uploads/2014/01/Screen-Shot-2014-01-11-at-12.02.33-AM-600x335.png" width="600"/>
   </a>
  </p>
  <p>
   This was particularly worrisome for Microsoft; the only way that Microsoft makes money (in the consumer market) is through users buying new computers and the associated licenses (this is why Bing’s failure was so critical; by failing to build profitable online services, Microsoft has no way of monetizing consumers over time). This means that people
   <em>
    using
   </em>
   Windows are in effect worthless to Microsoft; they need people to
   <em>
    buy
   </em>
   Windows, which usually means buying a new computer.
  </p>
  <p>
   This was the context for Windows 8, which was meant to address both of the problems facing PCs:
  </p>
  <ul>
   <li>
    By making touch a central part of the interface, customers would find that their current non-touch PCs were not good enough, and thus be motivated to buy new hardware (and new Windows licenses)
   </li>
   <li>
    By having touch and an app store, customers would spend more time on their PCs, once again making them the primary device and raising the expectation for performance, reducing the upgrade cycle
   </li>
  </ul>
  <p>
   However, the exact opposite happened. Look again at the year-over-year growth chart: there is the big change I alluded to in 2010, and another big change in 2012, when Windows 8 came out. It seems clear that Windows 8 made things
   <em>
    worse.
   </em>
  </p>
  <p>
   I laid out the reason why in
   <a href="http://stratechery.com/2014/chromebooks-cost-complexity/">
    Chromebooks and the Cost of Complexity
   </a>
   :
  </p>
  <blockquote>
   <p>
    It’s not simply that the additional performance is not valued by your customers; rather, the bigger problem is that the additional complexity that necessarily accompanies said performance is actively harmful to your customer’s user experience. Your product is not only becoming more expensive, but it’s actually becoming worse from your customer’s point-of-view.
   </p>
  </blockquote>
  <p>
   In other words, instead of alleviating the problems facing PCs – no reason to buy – Windows 8’s increased complexity added a reason
   <em>
    not
   </em>
   to buy. That was certainly the case in my family: in early 2013, when my father asked me for advice on a Windows computer,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_649" id="identifier_1_649" title="A necessity for his workplace">
    2
   </a>
   I found myself advising him to seek out Windows 7.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_649" id="identifier_2_649" title="I also realized it was time to find a new job!">
    3
   </a>
   Were he to have had a suitable computer, I likely would have advised him to do nothing at all.
  </p>
  <p>
   It’s difficult to see where Microsoft goes from here; contrary to what you might expect, there is still minimal overlap between Windows 8 and Windows Phone, meaning apps made for one are incompatible with the other.
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_649" id="identifier_3_649" title="Remember this from this article?">
    4
   </a>
   Abandoning either means effectively starting from zero in that respective form factor – and pissing off a lot of partners. Yet there’s little question in my mind that the touch environment is hastening the decline of PCs suited for the Windows desktop, even as the desktop ruins what is honestly a rather delightful tablet experience.
  </p>
  <p>
   Microsoft’s trump card remains Office,
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_649" id="identifier_4_649" title="Of course Office is itself partially to blame for the failure of Windows RT; it was because Office failed to make a Metro version that the desktop environment even existed">
    5
   </a>
   a product with power that remains under-appreciated by most in Silicon Valley (e.g. my dad’s job). However, the complexities of Windows are rapidly dragging Office down; one of the most critical decisions facing the next CEO
   <a class="footnote-link footnote-identifier-link" href="#footnote_5_649" id="identifier_5_649" title="The sort of CEO Microsoft needs will demand Gates and Ballmer leave the board; by all accounts this isn’t going to happen. Thus, stalemate">
    6
   </a>
   is whether or not to
   <a href="http://stratechery.com/2013/services-not-devices/">
    unburden Office
   </a>
   from the
   <a href="http://stratechery.com/2013/another-nokia-explanation-the-same-conclusion/">
    Windows strategy tax
   </a>
   and leave Windows to figure it out on its own.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_649">
    The plummet in 2008-9 was due to the Great Recession; the peak in 2009-10 was pent-up demand from said recession [
    <a class="footnote-link footnote-back-link" href="#identifier_0_649">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_649">
    A necessity for his workplace [
    <a class="footnote-link footnote-back-link" href="#identifier_1_649">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_649">
    I also realized it was time to find a new job! [
    <a class="footnote-link footnote-back-link" href="#identifier_2_649">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_649">
    Remember
    <a href="http://www.bonkersworld.net/organizational-charts/">
     this
    </a>
    from
    <a href="http://stratechery.com/2013/why-microsofts-reorganization-is-a-bad-idea/">
     this article
    </a>
    ? [
    <a class="footnote-link footnote-back-link" href="#identifier_3_649">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_649">
    Of course Office is itself partially to blame for the failure of Windows RT; it was because Office failed to make a Metro version that the desktop environment even existed [
    <a class="footnote-link footnote-back-link" href="#identifier_4_649">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_649">
    The sort of CEO Microsoft needs will demand Gates and Ballmer leave the board; by
    <a href="http://recode.net/2014/01/08/microsoft-ceo-selection-unlikely-to-come-in-january-as-candidate-list-contracts-and-expands/">
     all accounts
    </a>
    this isn’t going to happen. Thus, stalemate [
    <a class="footnote-link footnote-back-link" href="#identifier_5_649">
     ↩
    </a>
    ]
   </li>
  </ol>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-649" href="https://stratechery.com/2014/windows-8-cost-complexity/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-649" href="https://stratechery.com/2014/windows-8-cost-complexity/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-649" href="https://stratechery.com/2014/windows-8-cost-complexity/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2014/windows-8-cost-complexity/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
        <span>
         Email
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
     Related
    </em>
   </h3>
  </div>
 </div>
 <!-- .entry-content -->
</article>

