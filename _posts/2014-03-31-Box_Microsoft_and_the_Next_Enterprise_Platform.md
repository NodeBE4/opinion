---
layout: post
title: "Box, Microsoft, and the Next Enterprise Platform"
date: 2014-03-31T18:20:38+00:00
author: Ben Thompson
from: https://stratechery.com/2014/box-microsoft-next-enterprise-platform/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-725 post type-post status-publish format-standard hentry category-articles topics-storage concepts-business-models concepts-enterprise concepts-platforms concepts-saas companies-box companies-microsoft" id="post-725">
 <header class="entry-header">
  <h1 class="entry-title">
   Box, Microsoft, and the Next Enterprise Platform
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2014-03-31T11:20:38-07:00">
     Monday, March 31, 2014
    </time>
    <time class="updated" datetime="2018-03-24T00:44:56-07:00">
     Saturday, March 24, 2018
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
   Let’s get one thing out of the way: there is nothing about
   <a href="http://www.sec.gov/Archives/edgar/data/1372612/000119312514112417/d642425ds1.htm">
    Box’s S-1 filing
   </a>
   that suggests tech is in a bubble. Indeed, the fact Aaron Levie and company are not yet profitable is a
   <em>
    good
   </em>
   thing.
  </p>
  <p>
   To understand why, you must read
   <a href="http://www.bothsidesofthetable.com/2011/12/27/should-startups-focus-on-profitability-or-not/">
    Should Startups Focus on Profitability or Not
   </a>
   by VC Mark Suster:
  </p>
  <blockquote>
   <p>
    There are certain topics that even some of the best journalists can’t fully grok. One of them is profitability. I find it amusing when a journalist writes an article about a prominent startup (either privately held or preparing for an IPO) and decries that, “They’re not even profitable!”
   </p>
   <p>
    I mention journalists here because they perpetuate the myth that focusing on profits is ALWAYS the right answer and then I hear many entrepreneurs (and certainly many “normals”) repeating the same mantra.
   </p>
   <p>
    There is a healthy tension between profits &amp; growth. To grow faster businesses need resources in today’s financial period to fund growth that may not come for 6 months to a year.
   </p>
  </blockquote>
  <p>
   The basic gist is that in situations where costs come before revenue (like, say, a sales force for selling to enterprise), chasing growth over making money
   <em>
    increases
   </em>
   the amount of long-term profitability. Seriously,
   <a href="http://www.bothsidesofthetable.com/2011/12/27/should-startups-focus-on-profitability-or-not/">
    read the whole thing
   </a>
   .
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_725" id="identifier_0_725" title="James Bright made charts to better illustrate some of the concepts made in Suster’s article">
    1
   </a>
  </p>
  <p>
   Suster’s article was not about Box specifically; for that I refer you to Dave Kellogg’s piece,
   <a href="http://kellblog.com/2014/03/27/burn-baby-burn-a-look-at-the-box-s-1/">
    Burn Baby Burn: A Look at the Box S-1
   </a>
   . He concludes that the Box numbers are very reasonable and that the business is scaling well:
  </p>
  <blockquote>
   <p>
    In many ways you see a typical “go big or go home” cloud computing firm, burning boatloads of cash but acquiring customers in a reasonably efficient manner and doing a nice job with retention/cross-sell/up-sell as judged by their retention numbers. When you look big picture, I believe they see themselves in a winner-take-all battle vs. DropBox and in this case, the strategy — while amazingly cash consumptive — does make sense.
   </p>
  </blockquote>
  <p>
   It’s a great analysis, and I also very much recommend it, but I think he got one thing wrong: Box isn’t (just) focused on beating Dropbox in storage. In fact, they are making a play to be the new Enterprise platform, and that means taking on Microsoft.
  </p>
  <h4>
   Windows: The Old Platform
  </h4>
  <p>
   Back when all computers were PCs, the dominant platform was Windows. Office obviously ran (better) on Windows, but so did an untold number of 3rd-party apps and custom-build line-of-business (LOB) apps. Considering the fact that enterprises bought most PCs, this meant Windows dominated.
  </p>
  <figure aria-describedby="caption-attachment-723" class="wp-caption aligncenter" id="attachment_723" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/03/photo-3.jpg">
    <img alt="Windows was the platform that mattered in the PC era" class="size-medium wp-image-723" height="409" src="https://stratechery.com/wp-content/uploads/2014/03/photo-3-600x409.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-723">
    Windows was the platform that mattered in the PC era
   </figcaption>
  </figure>
  <p>
   The browser began to break this hegemony apart,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_725" id="identifier_1_725" title="Microsoft killed Netscape for a reason">
    2
   </a>
   especially when it came to LOB apps, but the true fracturing has happened in just the last few years with the advent of smartphones and tablets. Now, only a portion of computing devices run Windows:
  </p>
  <div align="center">
   <blockquote class="twitter-tweet" lang="en">
    <p>
     Rather a clear trend at Microsoft.
     <a href="http://t.co/tjsDxtS4w9">
      pic.twitter.com/tjsDxtS4w9
     </a>
    </p>
    <p>
     — Benedict Evans (@BenedictEvans)
     <a href="https://twitter.com/BenedictEvans/statuses/433691981068251136">
      February 12, 2014
     </a>
    </p>
   </blockquote>
   <p>
   </p>
  </div>
  <p>
   While this chart covers the entire industry, it’s reflective of what is happening in the enterprise as well. Multiple devices with multiple operating systems are in daily use, but, at the end of the day, they all need to access the same data.
  </p>
  <p>
   Enter Box.
  </p>
  <h4>
   Data: The New Platform
  </h4>
  <p>
   Pure storage isn’t a great business. The cost is trending towards zero, as noted by Levie himself:
  </p>
  <blockquote align="center" class="twitter-tweet" lang="en">
   <p>
    Just as you don't worry about database rows when using Twitter or bandwidth on Youtube, cloud storage will eventually be free and infinite.
   </p>
   <p>
    — Aaron Levie (@levie)
    <a href="https://twitter.com/levie/statuses/444209538271436801">
     March 13, 2014
    </a>
   </p>
  </blockquote>
  <p>
  </p>
  <p>
   Data, though, is priceless; it can’t be replaced, and it’s the essence of what makes a particular organization unique. For this reason, and for regulatory ones, there are all kinds of specialized controls that IT departments need for data. This is where Box has worked diligently to differentiate themselves from consumer-focused competitors like Dropbox (for more, see my article from January
   <a href="http://stratechery.com/2014/battle-box/">
    Battle of the Box
   </a>
   ).
  </p>
  <p>
   At the same time, Box has embraced smartphones and tablets, building and updating apps on all the platforms, often well before competitors. This results in a service that looks something like this:
  </p>
  <figure aria-describedby="caption-attachment-722" class="wp-caption aligncenter" id="attachment_722" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/03/photo-4.jpg">
    <img alt="By handling the data that needs to be available everywhere, Box is well-placed to be the new platform" class="size-medium wp-image-722" height="240" src="https://stratechery.com/wp-content/uploads/2014/03/photo-4-600x240.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-722">
    By handling the data that needs to be available everywhere, Box is well-placed to be the new platform
   </figcaption>
  </figure>
  <p>
   This image explains why the arguably more significant news from Box last week was not the unveiling of their S-1, but rather the first
   <a href="http://www.cnet.com/news/box-builds-out-cloud-platform-features-ahead-of-ipo/">
    Box developer’s conference
   </a>
   . Just because the operating system is no longer the platform does not mean that the need – and opportunity – for a platform does not exist.
   <em>
    Something
   </em>
   needs to tie together all those computing devices, and data, which needs to be everywhere, is the logical place to start.
  </p>
  <p>
   This ups the stakes considerably. Platforms are multi-sided; in the case of Box, they need to have all the data, serve all the devices, and, most critically, have developers. Developers, though, are very pragmatic: they care about opportunity, and opportunity is a function of market size and ability to monetize. The latter is much less of an issue in the enterprise as compared to the consumer, which leaves scale as the most important differentiator from a developer perspective when they decide which platform to support.
  </p>
  <p>
   Spending a whole lot of money to scale quickly suddenly doesn’t seem like such a bad idea.
  </p>
  <h4>
   The Microsoft Trump Card
  </h4>
  <p>
   Last week, though, was not all good news for Box; on the same day as their developer conference, Microsoft held its own event to announce
   <a href="http://www.microsoft.com/en-us/news/press/2014/mar14/03-27mobilecloudpr.aspx">
    Office for iPad
   </a>
   . Until now, Microsoft has been largely absent from the iPhone and especially the iPad, leaving some of the most important enterprise data – Office docs – available on basic viewers or 3rd-party editors only. This worked in Box’s favor, as their excellent iPad support made Office docs accessible, if not particularly usable.
  </p>
  <p>
   Office for iPad, though, is designed to work exclusively with Microsoft’s cloud services. Now, the best solution for dealing with Office docs anywhere is to use Microsoft’s data layer. In this way Apple’s sandboxed approach and lack of inter-app communication is working very much in Microsoft’s favor; you can open files stored in Box or other Cloud services with the Office apps, but the communication is one-way. Any changes you made can only be saved to your iPad or to your Microsoft cloud account (OneDrive, OneDrive Pro, or SharePoint).
  </p>
  <p>
   To be clear, SharePoint is a pain to use, particularly for end-users, and especially relative to Box. Less-than-full access to some of your most important data, though, is very painful as well, and it’s here that Microsoft just played their trump card. Office still matters for a whole lot of businesses, and the best Office experience is only available in conjunction with the Microsoft cloud/platform.
  </p>
  <h4>
   Does Office Matter?
  </h4>
  <p>
   The opportunity that Box is pursuing is the exact reason I have been
   <a href="http://stratechery.com/2013/services-not-devices/">
    so outspoken
   </a>
   about Microsoft’s misplaced devices strategy. Steve Ballmer and his Windows obsession missed the fact that operating systems as a whole were increasingly irrelevant; Satya Nadella, whose background is in Microsoft’s cloud business, is actually pursuing the same old Microsoft strategy – use Office to prop up the Microsoft platform – he’s just leveraging it for the platform of the future, not the past.
  </p>
  <p>
   What is tricky is that future almost certainly includes fewer and fewer Office documents; the degree to which enterprises have transitioned away from ready-to-print documents to constant communication and collaboration will determine if Microsoft’s new strategy is successful – and, by extension, the degree to which Box realizes the growth they have so extravagantly invested in.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_725">
    James Bright
    <a href="https://twitter.com/jbright/status/449279622392209408">
     made charts
    </a>
    to better illustrate some of the concepts made in Suster’s article [
    <a class="footnote-link footnote-back-link" href="#identifier_0_725">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_725">
    Microsoft killed Netscape for a reason [
    <a class="footnote-link footnote-back-link" href="#identifier_1_725">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-725" href="https://stratechery.com/2014/box-microsoft-next-enterprise-platform/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-725" href="https://stratechery.com/2014/box-microsoft-next-enterprise-platform/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-725" href="https://stratechery.com/2014/box-microsoft-next-enterprise-platform/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2014/box-microsoft-next-enterprise-platform/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

