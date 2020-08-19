---
layout: post
title: "Redmond and Reality"
date: 2015-02-18T08:53:58+00:00
author: Ben Thompson
from: https://stratechery.com/2015/redmond-reality/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1455 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-cloud-computing topics-mobile concepts-business-models concepts-company-structure concepts-enterprise concepts-incentives concepts-saas companies-microsoft" id="post-1455">
 <header class="entry-header">
  <h1 class="entry-title">
   Redmond and Reality
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2015-02-18T00:53:58-08:00">
     Wednesday, February 18, 2015
    </time>
    <time class="updated" datetime="2018-03-27T01:19:39-07:00">
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
   There’s reality, and there’s Redmond, and if one thing marked the last few years of Steve Ballmer’s tenure as the CEO of Microsoft, it was the sense that those were two distinct locales. In reality, Android (plus AOSP in China) and iOS were carving up the world phone market; in Redmond Ballmer doubled-down on the losing Window Phone bet by buying Nokia. In reality Office was losing relevance because of its absence on the mobile platforms that mattered; in Redmond Ballmer personally delayed Office on iOS until the Windows Modern née Metro version was finished.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1455" id="identifier_0_1455" title="Ignore the pro-Ballmer spin that he is responsible for iOS Office. Sure, he allowed it to be built; he also didn’t allow it to be released">
    1
   </a>
   And in reality, all kinds of startups were taking aim at the Microsoft enterprise stack; in Redmond, Microsoft was determined to own it all, just as they had in the PC era.
  </p>
  <p>
   This attitude was laid out clearly in Ballmer’s
   <a href="http://allthingsd.com/20130711/heres-microsofts-strategy-essay-and-reorg-announcement-memos/">
    One Microsoft memo
   </a>
   that introduced his
   <a href="http://stratechery.com/2013/why-microsofts-reorganization-is-a-bad-idea/">
    misguided reorganization of Microsoft
   </a>
   :
  </p>
  <blockquote>
   <p>
    We will reshape how we interact with our customers, developers and key innovation partners, delivering a more coherent message and family of product offerings. The evangelism and business development team will drive partners across our integrated strategy and its execution. Our marketing, advertising and all our customer interaction will be designed to reflect one company with integrated approaches to our consumer and business marketplaces.
   </p>
  </blockquote>
  <p>
   The problem with an integrated approach for Microsoft in particular is that the company’s bread-and-butter – enterprise software – was even then undergoing a dramatic transformation from on-premise software to cloud-based services. The benefits of cloud offerings are well known: flexibility, scalability, access from anywhere, automatic seamless updates, predictable operating expenses instead of lumpy capital expenditures, the list goes on and on. There is, though, in the penumbras and emanations of these well-known advantages, particularly flexibility and seamless updates, an even more significant – and disruptive – advantage to the cloud.
  </p>
  <p>
   Consider your typical Chief Information Officer in the pre-Cloud era: for various reasons she has bought in to some aspect of the Microsoft stack (likely Exchange). So, in order to support Exchange, the CIO must obviously buy Windows Server. And Windows Server includes Active Directory, so obviously that will be the identity service. However, now that the CIO has parts of the Microsoft stack in place, she is likely to be much more inclined to go with other Microsoft products as well, whether that be SQL Server, Dynamics CRM, SharePoint, etc. True, the Microsoft product may not always be the best in a vacuum, but no CIO operates in a vacuum: maintenance and service costs are a huge concern, and there is a lot to be gained by buying from fewer vendors rather than more. In fact, much of Microsoft’s growth over the last 15 years can be traced to Ballmer’s cleverness in exploiting this advantage through both new products and also new pricing and licensing agreements that heavily incentivized Microsoft customers to buy ever more from the company.
  </p>
  <p>
   The cloud, though, changes that. Once you remove the burden of support and maintenance – that’s handled by the service provider – it suddenly doesn’t necessarily make sense to buy from only one vendor simply because they are integrated. There is more freedom to evaluate a particular product on different characteristics, like, say, how easy it is to use, or how well it supports mobile. And it’s here that Microsoft products, particularly the hated SharePoint, were found to be lacking.
  </p>
  <p>
   This is the context to view yesterday’s announcement from the
   <a href="http://blogs.office.com/2015/02/17/new-cloud-storage-integration-office/">
    Microsoft Office team
   </a>
   :
  </p>
  <blockquote>
   <p>
    We want Office to be the preferred way to work with documents no matter where they’re stored.  In November we announced a special partnership with Dropbox to make it easy to access, edit and share Dropbox files from the Office apps.  And today, in addition to the existing Dropbox integrations, we’re pleased to announce two new integration features for an even broader set of cloud services: First, file picker integration for the iPad and iPhone; and second, Office Online integration for viewing and editing.
   </p>
  </blockquote>
  <p>
   The file picker is pretty straightforward: on iOS devices you can use the built-in picker to open, edit, and save documents from any storage service that is plugged in to the document picker extension, whether that be Dropbox, iCloud Drive, Box, or even Google Drive. The Office Online integration, though, is even more interesting: you could, for example, access your Box folder through any browser, click on a Word document, and edit and save it from Word online (just as you can do today through One Drive).
  </p>
  <p>
   Continuing with the blog post:
  </p>
  <blockquote>
   <p>
    While these may seem like small enhancements, these new features represent a big step forward for Office integration into the apps and services that are important to our customers.
   </p>
  </blockquote>
  <p>
   This move is more than a big step forward for Office integration; it’s a big step forward in Microsoft’s fundamental positioning when it comes to the cloud. To date Microsoft’s cloud strategy, particularly around Office 365, has mostly mimicked their behind-the-firewall strategy: leverage one service to drive usage (and revenue) from another. Thus, Office 365 only worked with SharePoint, for example. In the cloud, though, absent a CIO’s desire for an integrated solution, this is a purely artificial limitation that instead of propping up SharePoint threatened to hold Office 365 back.
  </p>
  <p>
   That is because there is in fact a need for an integrated solution on mobile. Look at Box, for example: the company obviously has a cloud component, but they also have
   <a href="https://app.box.com/apps/">
    multiple apps
   </a>
   for every relevant – and non-relevant! –  platform resulting in much better functionality than what Microsoft previously had to offer. Multiply that advantage across a whole host of services and it starts to make sense for the CIO to modularize her backend services in order to achieve integration when it comes to how those services are accessed:
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_1455" id="identifier_1_1455" title="This is exact way to understand Microsoft’s acquisition of Accompli (since re-branded Outlook) and Sunrise: Exchange is only as relevant as its mobile experience, and Microsoft has far more money than they do time. I wrote about this at the time in the Daily Update; Felix Salmon posted a public version of that update here ">
    2
   </a>
  </p>
  <p>
   <a href="http://stratechery.com/wp-content/uploads/2015/02/image-30.jpg">
    <img alt="image-30" class="aligncenter size-large wp-image-1456" height="450" src="https://stratechery.com/wp-content/uploads/2015/02/image-30-600x450.jpg" width="600"/>
   </a>
  </p>
  <p>
   Before today, though, Office was disadvantaged in two ways: first, the productivity applications couldn’t fully partake in this new modularity because they weren’t well tied-in to other services. Secondly, though, and most importantly, this limitation meant the mobile experience just wasn’t as good as it could be. And to not be good at mobile is to not be good period.
  </p>
  <p>
   Office 365 cannot afford to risk not being good on mobile, because there is one final piece to this puzzle: identity. The primary reason all of these modularized services work together is because access is tied to a centrally-managed identity store, and a very important feature of Office 365 is that it includes Azure Active Directory, the cloud-version of Microsoft’s identity service. This is Microsoft’s single best hold on the enterprise, and thus making Office 365 as useful as possible not only makes the service itself attractive but also positions Microsoft well to continue its hold on identity.
  </p>
  <p>
   All that said, I must admit, as much as I think this move makes sense, I didn’t see it coming. When Microsoft announced the previous deal with Dropbox
   <a href="http://stratechery.com/2014/daily-update-apple-pay-might-fail-dropbox-office-amazon-prime-adds-cloud-storage/">
    I wrote in the Daily Update
   </a>
   (
   <em>
    members-only
   </em>
   ):
  </p>
  <blockquote>
   <p>
    I highly doubt that Microsoft will ever strike a similar deal with Box: the company is simply too competitive with SharePoint, one of Microsoft’s core offerings.
   </p>
  </blockquote>
  <p>
   That sort of integration strategy is dead, though, killed by the cloud with an assist from mobile. And, fortunately for Microsoft, it seems the alternate reality that a mere year-and-a-half ago made said integration the company’s stated strategy is just as dead.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_1455" id="identifier_2_1455" title="This piece originally concluded: “Welcome to reality Redmond. It’s the the first stop on the road to relevance.” I think it came across the wrong way">
    3
   </a>
  </p>
  <hr/>
  <p>
   <em>
    There will be no Daily Update February 19-20 as I will be celebrating Chinese New Year
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1455">
    Ignore the pro-Ballmer spin that he is responsible for iOS Office. Sure, he allowed it to be built; he also didn’t allow it to be released [
    <a class="footnote-link footnote-back-link" href="#identifier_0_1455">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_1455">
    This is exact way to understand Microsoft’s acquisition of Accompli (since re-branded Outlook) and Sunrise: Exchange is only as relevant as its mobile experience, and Microsoft has far more money than they do time. I wrote about this at the time in the Daily Update; Felix Salmon posted a public version of that update
    <a href="http://fusion.net/story/45024/the-ingredients-of-a-great-newsletter/">
     here
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_1_1455">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_1455">
    This piece originally concluded: “Welcome to reality Redmond. It’s the the first stop on the road to relevance.” I think it came across the wrong way [
    <a class="footnote-link footnote-back-link" href="#identifier_2_1455">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-1455" href="https://stratechery.com/2015/redmond-reality/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-1455" href="https://stratechery.com/2015/redmond-reality/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-1455" href="https://stratechery.com/2015/redmond-reality/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2015/redmond-reality/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

