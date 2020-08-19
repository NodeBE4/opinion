---
layout: post
title: "Portability and Interoperability"
date: 2019-12-03T14:43:13+00:00
author: Ben Thompson
from: https://stratechery.com/2019/portability-and-interoperability/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4498 post type-post status-publish format-standard hentry category-articles topics-app-stores topics-competition topics-gdpr topics-apple-app-store topics-networks topics-regulation topics-social concepts-privacy concepts-technology-and-society companies-amazon companies-apple companies-facebook companies-google companies-instagram companies-twitter" id="post-4498">
 <header class="entry-header">
  <h1 class="entry-title">
   Portability and Interoperability
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-12-03T06:43:13-08:00">
     Tuesday, December 3, 2019
    </time>
    <time class="updated" datetime="2019-12-12T05:57:45-08:00">
     Thursday, December 12, 2019
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
   In Facebook CEO Mark Zuckerberg’s
   <a href="https://www.washingtonpost.com/opinions/mark-zuckerberg-the-internet-needs-new-rules-lets-start-in-these-four-areas/2019/03/29/9e6f0504-521a-11e9-a3f7-78b7525a8d5f_story.html">
    March 2019 op-ed in the Washington Post
   </a>
   calling for federal regulation of technology, he included something that caught some observers by surprise:
  </p>
  <blockquote>
   <p>
    Regulation should guarantee the principle of data portability. If you share data with one service, you should be able to move it to another. This gives people choice and enables developers to innovate and compete.
   </p>
   <p>
    This is important for the Internet — and for creating services people want. It’s why we built our development platform. True data portability should look more like the way people use our platform to sign into an app than the existing ways you can download an archive of your information. But this requires clear rules about who’s responsible for protecting information when it moves between services.
   </p>
  </blockquote>
  <p>
   This isn’t just talk: on Monday Facebook announced a new photo transfer tool. From
   <a href="https://about.fb.com/news/2019/12/data-portability-photo-transfer-tool/">
    the Facebook blog
   </a>
   :
  </p>
  <blockquote>
   <p>
    At Facebook, we believe that if you share data with one service, you should be able to move it to another. That’s the principle of data portability, which gives people control and choice while also encouraging innovation. Today, we’re releasing a
    <a href="https://www.facebook.com/dtp">
     tool
    </a>
    <a class="footnote-link footnote-identifier-link" href="#footnote_0_4498" id="identifier_0_4498" title="This link only works in Ireland">
     1
    </a>
    that will enable Facebook users to transfer their Facebook photos and videos directly to other services, starting with Google Photos…
   </p>
   <p>
    For almost a decade, we’ve enabled people to
    <a href="https://www.facebook.com/help/1701730696756992">
     download their information
    </a>
    from Facebook. The photo transfer tool we’re starting to roll out today is based on code developed through our participation in the open-source
    <a href="https://datatransferproject.dev/">
     Data Transfer Project
    </a>
    and will first be available to people in Ireland, with worldwide availability planned for the first half of 2020. People can access this new tool in Facebook settings within Your Facebook Information, the same place where you can download your information. We’ve kept privacy and security as top priorities, so all data transferred will be encrypted and people will be asked to enter their password before a transfer is initiated.
   </p>
  </blockquote>
  <p>
   This initiative also helps satisfy Facebook’s requirements under Europe’s General Data Protection Regulation. From
   <a href="https://gdpr-info.eu/art-20-gdpr/">
    Article 20
   </a>
   :
  </p>
  <blockquote>
   <p>
    The data subject shall have the right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided.
   </p>
  </blockquote>
  <p>
   So all is well that ends well, right? Facebook follows the law in Europe and goes above and beyond in the United States, surely leading to new innovation and competition!
  </p>
  <p>
   As you might suspect, I’m skeptical.
  </p>
  <h4>
   Data That Matters
  </h4>
  <p>
   Start with the obvious objection: why would Facebook, or the other companies that are a part of the Data Transfer Project (including Apple and Google) wish to increase competition? It seems reasonable to assume they would not.
  </p>
  <p>
   It follows, then, that the data that is being made portable — in this case images and videos — must be a complement to Facebook’s core service. After all, making it easier to give that data away devalues it, and
   <a href="https://www.joelonsoftware.com/2002/06/12/strategy-letter-v/">
    companies always seek to commoditize their complements
   </a>
   .
  </p>
  <p>
   The question that comes next is complement to what? For Facebook, the answer is easy: their social graph. Who you are friends with is the data that is much more valuable, and Facebook is not about to launch a network transfer tool.
  </p>
  <p>
   There is plenty of evidence that this is the case. Back in the days of Facebook’s Open Graph initiative — which is at the root of controversy surrounding Cambridge Analytica — Facebook was giving away all of the data developers might want, the better to get developers on the Facebook platform. The company drew the line, though, when it came to other social networks.
  </p>
  <ul>
   <li>
    In 2010,
    <a href="https://techcrunch.com/2010/06/23/twitter-facebook-friends-linkedin/">
     Twitter updated its Facebook app
    </a>
    (yes, this used to exist) to make it easy to find your Facebook friends who used Twitter; Facebook blocked the app
    <a href="https://techcrunch.com/2010/06/23/facebook-blocks-twitter/">
     within minutes
    </a>
    .
   </li>
   <li>
    In 2012, newly-acquired Instagram — which had itself grown off of Twitter’s social graph —
    <a href="https://techcrunch.com/2012/12/09/it-appears-that-instagram-photos-arent-showing-up-in-twitter-streams-at-all/">
     cut off all photos from appearing on Twitter
    </a>
    .
   </li>
   <li>
    The real crack-down came in 2013, when Facebook cut off multiple apps that accessed the social graph, including
    <a href="https://www.theverge.com/2013/1/24/3913082/facebook-has-apparently-blocked-vines-friend-finding-feature">
     Vine
    </a>
    ,
    <a href="https://beta.techcrunch.com/2013/01/24/facebook-blocks-yandex-wonder/">
     Yandex Wonder
    </a>
    ,
    <a href="https://techcrunch.com/2013/01/18/facebook-data-voxer/">
     Voxer
    </a>
    and more.
   </li>
  </ul>
  <p>
   After this crackdown Facebook “clarified” its position
   <a href="https://developers.facebook.com/blog/post/2013/01/25/clarifying-our-platform-policies/">
    in a blog post
   </a>
   :
  </p>
  <blockquote>
   <p>
    For the vast majority of developers building social apps and games, keep doing what you’re doing. Our goal is to provide a platform that gives people an easy way to login to your apps, create personalized and social experiences, and easily share what they’re doing in your apps with people on Facebook. This is how our platform has been used by the most popular categories of apps, such as games, music, fitness, news and general lifestyle apps.
   </p>
   <p>
    For a much smaller number of apps that are using Facebook to either replicate our functionality or bootstrap their growth in a way that creates little value for people on Facebook, such as not providing users an easy way to share back to Facebook, we’ve had policies against this that we are further clarifying today.
   </p>
  </blockquote>
  <p>
   This is about as concise a distillation of the “commoditize your complements” approach as you will see, at least as far as data is concerned: if you make Facebook better, you can have it all; if you don’t, or are remotely competitive, you are cut off.
  </p>
  <h4>
   The Privacy Angle
  </h4>
  <p>
   Facebook, for obvious reasons, has come to regret the entire Open Graph 1.0 era, in large part because of attention paid to privacy issues. In fact, the company had started restricting the data it shared with
   <a href="https://developers.facebook.com/blog/post/v2/2014/04/30/the-new-facebook-login/">
    the release of Graph 2.0
   </a>
   in 2014; now 3rd-party developers could only see a user’s friends if those friends also used the same app, much like the Twitter Facebook app of old.
  </p>
  <p>
   The restrictions in GDPR are even tighter; the last part of Section 20, providing for data portability, states:
  </p>
  <blockquote>
   <p>
    The right referred to in paragraph 1 [
    <em>
     excerpted above
    </em>
    ] shall not adversely affect the rights and freedoms of others.
   </p>
  </blockquote>
  <p>
   In other words, you can get your personal data out, but no data about your friends, because they didn’t give permission. This does, in a privacy context, make perfect sense. At the same time, it is ground zero for how privacy regulation can often be at odds with encouraging competition: it’s all well and good to get your old photos and videos, but its telling that the most likely first place to put those is in a photo storage app that serves a very different purpose than Facebook; a Facebook competitor would be better served with access to a user’s list of friends.
  </p>
  <h4>
   The Interoperability Contrast
  </h4>
  <p>
   A far more impactful outcome would be if Facebook’s friend data were interoperable. Suppose you created a new app that could, once you authorized yourself, incorporate access to Facebook’s graph in a way that let you connect with friends that also use the app, kind of like the Twitter Facebook app of old.
  </p>
  <hr/>
  <p>
   <em>
    Update 12/12/19: In fact, Facebook does allow this with the
    <a href="https://developers.facebook.com/docs/graph-api/reference/user/friends/">
     User Friends API
    </a>
    , and a spokesperson assured me that Twitter or Snapchat or any other social network is, after a policy change last year, free to implement said API. Of course, that entails using the Facebook Login, and all of the data sharing that follows. It’s also not nearly as compelling as being able to recruit friends to the new app in the first place (which is what I should have focused on). Regardless, I didn’t have this quite right, so consider this a correction.
   </em>
  </p>
  <hr/>
  <p>
   In this model, the 3rd party developer doesn’t actually get data from Facebook. Facebook, rather, exposes its data in a way that the user can leverage the company’s social graph to bootstrap their experience. This both significantly increases the potential for competition while also leaving the user in charge, not only of their own data but also the data about who their friends are.
  </p>
  <p>
   The problem with this approach is obvious: Facebook would have to implement it, and it has zero reasons to do so, both because of competitive reasons, and also because regulatory zeal for privacy gives the company cover to not give out any friend data at all. The reason to write this Article, though, is to show why data portability like the sort Facebook announced is such a red herring: it has the trappings of increasing competition, the better to avoid antitrust regulation, but it doesn’t really do anything of the sort, particularly relative to far more impactful interoperability.
  </p>
  <h4>
   Interoperability and the Tech Giants
  </h4>
  <p>
   This idea of comparing and contrasting portability with interoperability is another lens to understand what are the commoditizable complements versus highly differentiated core of the largest tech companies.
  </p>
  <p>
   Consider Google, another frequent target of regulators. The company has no problem giving you your data, or letting you wipe it out. What the company won’t do is make the Search Engine Results Page (SERP) interoperable. Interoperability would mean 3rd-parties being able to populate some portion of the results, or being able to use the results while providing their own ads; neither is happening anytime soon.
  </p>
  <p>
   <strike>
    In the case of Amazon, interoperability would mean making the company’s logistics service available as a service to any merchant selling through any storefront; in reality, it is only available to merchants selling on Amazon.com.
   </strike>
   [
   <em>
    This is incorrect. Amazon actually
    <a href="https://services.amazon.com/fulfillment-by-amazon/multi-channel.html">
     offers exactly this
    </a>
    . My apologies for the error.
   </em>
   ]
  </p>
  <p>
   For Apple, interoperability could happen at two levels: there could be a way to install apps on your iPhone independent of the App Store, or the App Store could allow apps that incorporate their own payment processors (or simply link to a web page to complete a purchase).
  </p>
  <p>
   I am not arguing, at least in this piece, that any of these
   <em>
    should
   </em>
   happen. The only one I feel strongly about is Apple, simply because there is no alternative for developers or customers to the App Store (there are other ways to sell to or reach end users than Amazon or Google, and other ways to find your friends than use Facebook). What is notable, though, is how interoperability for all of these companies cuts to the core of how they extract profit from their respective value chains.
  </p>
  <h4>
   Portability AND Interoperability
  </h4>
  <p>
   To be very clear, I’m pretty excited about Facebook’s announcement. Data portability is absolutely consumer friendly, and I’m glad that Facebook is making it easy to move photos and videos that have been lost to time to applications that are better suited for long-term storage.
  </p>
  <p>
   At the same time, we shouldn’t kid ourselves that this has any sort of impact on competition. It is interoperability that cuts to the core of these companies’ moats, and to the extent regulators see it worthwhile to act, interoperability should be the priority.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4498">
    This link only works in Ireland [
    <a class="footnote-link footnote-back-link" href="#identifier_0_4498">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4498" href="https://stratechery.com/2019/portability-and-interoperability/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4498" href="https://stratechery.com/2019/portability-and-interoperability/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4498" href="https://stratechery.com/2019/portability-and-interoperability/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2019/portability-and-interoperability/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

