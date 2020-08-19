---
layout: post
title: "AWS, MongoDB, and the Economic Realities of Open Source"
date: 2019-01-14T12:43:44+00:00
author: Ben Thompson
from: https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3886 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-app-stores topics-audio topics-aws topics-cloud-computing topics-databases topics-apple-app-store topics-music-streaming topics-open-source topics-record-labels topics-technologies concepts-business-models concepts-differentiation concepts-disruption-theory concepts-enterprise concepts-evolution-of-technology concepts-history concepts-product-management concepts-saas concepts-subscriptions concepts-the-future concepts-the-user-experience companies-amazon companies-apple companies-google companies-microsoft companies-mongodb companies-spotify" id="post-3886">
 <header class="entry-header">
  <h1 class="entry-title">
   AWS, MongoDB, and the Economic Realities of Open Source
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-01-14T04:43:44-08:00">
     Monday, January 14, 2019
    </time>
    <time class="updated" datetime="2019-01-15T19:25:39-08:00">
     Tuesday, January 15, 2019
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
   In 1999, music industry revenue in the United States peaked at $14.6 billion (all numbers are from the
   <a href="https://www.riaa.com/u-s-sales-database/">
    RIAA
   </a>
   ). It is important to be precise, though, about what was being sold:
  </p>
  <ul>
   <li>
    $12.8 billion was from the sale of CDs
   </li>
   <li>
    $1.1 billion was from the sale of cassettes
   </li>
   <li>
    $378 million was from the sale of music videos on physical media
   </li>
   <li>
    $222.4 million was from the sale of CD singles
   </li>
  </ul>
  <p>
   In short, the music industry was primarily selling plastic discs in jewel cases; the music encoded on those discs was a means of differentiating those pieces of plastic from other ones, but music itself was not being sold.
  </p>
  <p>
   This may sounds like a stupid distinction, but it explains what happened after that peak:
  </p>
  <p>
   <a href="https://www.riaa.com/u-s-sales-database/">
    <img alt="U.S. music industry sales over time" class="aligncenter size-large wp-image-3887" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-300x225.png 300w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-768x576.png 768w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-840x630.png 840w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM.png 1530w" width="640"/>
   </a>
  </p>
  <p>
   Music industry revenue plummeted, even as the distribution and availability of music skyrocketed: the issue is that people were no longer buying plastic discs, which is what the music industry was selling; they were simply downloading music directly.
  </p>
  <h4>
   Selling Convenience
  </h4>
  <p>
   The problem is that recorded music has always been worthless: once a recording is made, it can be copied endlessly, which means the supply is effectively infinite; it follows that to capture value from a recording depends on the imposition of scarcity. That is exactly what plastic discs were: a finite supply of a physical good differentiated by their being the most convenient way to get music. Pirating MP3s from sites like Napster or its descendants, though, was even more convenient — and cheaper.
  </p>
  <p>
   As you can see from the chart, the industry started to stabilize in 2010, and in 2016 returned to growth; 2018 looks to be up around 10% from 2017’s $8.7 billion number, and it seems likely the industry will pass that 1999 peak in the not-too-distant future.
  </p>
  <p>
   What happened is that the music industry — prodded in large part by Spotify, and then Apple — found something new to sell. No, they are still not selling music; in fact, they are beating piracy at its own game: the music industry is selling convenience. Get nearly any piece of recorded music ever made, for a mere $10/month.
  </p>
  <h4>
   DocumentDB (with MongoDB compatibility)
  </h4>
  <p>
   Last week, from the
   <a href="https://aws.amazon.com/blogs/aws/new-amazon-documentdb-with-mongodb-compatibility-fast-scalable-and-highly-available/">
    AWS blog
   </a>
   :
  </p>
  <blockquote>
   <p>
    Today we are launching
    <a href="https://aws.amazon.com/documentdb/">
     Amazon DocumentDB (with MongoDB compatibility)
    </a>
    , a fast, scalable, and highly available document database that is designed to be compatible with your existing MongoDB applications and tools. Amazon DocumentDB uses a purpose-built SSD-based storage layer, with 6x replication across 3 separate Availability Zones. The storage layer is distributed, fault-tolerant, and self-healing, giving you the the performance, scalability, and availability needed to run production-scale MongoDB workloads.
   </p>
  </blockquote>
  <p>
   The specifics of MongoDB and now DocumentDB are not particularly important to this article; basically, MongoDB created a type of database that is more flexible and better suited to large
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_3886" id="identifier_0_3886" title="“Mongo” comes from the word humongous">
    1
   </a>
   amounts of both structured and unstructured data, making it useful for large scale applications that traditional
   <a href="https://stratechery.com/2016/oracles-cloudy-future/">
    relational databases
   </a>
   were never designed to accommodate.
  </p>
  <p>
   And now you can run it on AWS. Kind of.
  </p>
  <h4>
   Open Source Licensing
  </h4>
  <p>
   Like an increasing number of such projects, MongoDB is open source…or it was anyways. MongoDB Inc., a venture-backed company that IPO’d in October, 2017, made its core database server product available under the
   <a href="https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License">
    GNU Affero General Public License (AGPL)
   </a>
   .
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_3886" id="identifier_1_3886" title="I’m sorry, but this next bit is going to be dry; bear with me please">
    2
   </a>
  </p>
  <p>
   AGPL is a close relative of the
   <a href="https://en.wikipedia.org/wiki/GNU_General_Public_License">
    GPL
   </a>
   , the copyleft license created by
   <a href="https://en.wikipedia.org/wiki/Richard_Stallman">
    Richard Stallman
   </a>
   . “Copyleft” means that the license allows for the free distribution, use, and modification of copyrighted material (in this case software), with the stipulation that those same rights extend to all derivative works; that means that any project built using GPL code must itself have a GPL license. This is in contrast to “permissive” open source licenses that allow others to use the copyrighted material however they wish, without a stipulation that derivative works also be open-sourced. AGPL extended the GPL to apply to software accessed over a network; since the software is only being used, not copied, the GPL would not triggered, but the end result is even more onerous than the GPL.
  </p>
  <p>
   Both GPL and especially AGPL tend to be very problematic for companies: Apple, for example,
   <a href="https://www.zdnet.com/article/android-vs-iphone-the-gpl-question/">
    does not allow software licensed with the GPL on the App Store
   </a>
   , because the App Store requires that apps be licensed for a single user; apps with permissive licenses are fine — their license can be replaced — but the GPL, once applied, cannot be removed. AGPL is worse, because its provisions are triggered by users simply using the software; that’s why Google bans its use internally. The company notes in its
   <a href="https://opensource.google.com/docs/using/agpl-policy/">
    open source documentation
   </a>
   :
  </p>
  <blockquote>
   <p>
    The license places restrictions on software used over a network which are extremely difficult for Google to comply with. Using AGPL software requires that anything it links to must also be licensed under the AGPL. Even if you think you aren’t linking to anything important, it still presents a huge risk to Google because of how integrated much of our code is. The risks heavily outweigh the benefits.
   </p>
  </blockquote>
  <p>
   There is one addendum to the policy:
  </p>
  <blockquote>
   <p>
    In some cases, we may have alternative licenses available for AGPL licensed code.
   </p>
  </blockquote>
  <p>
   This is MongoDB’s business.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_3886" id="identifier_2_3886" title="To be clear, I’m not saying that Google has a license; rather, that MongoDB offers alternative licenses">
    3
   </a>
  </p>
  <h4>
   MongoDB’s Business Model
  </h4>
  <p>
   MongoDB explained in their
   <a href="https://www.sec.gov/Archives/edgar/data/1441816/000104746917006014/a2233365zs-1.htm">
    S-1
   </a>
   :
  </p>
  <blockquote>
   <p>
    We believe we have a highly differentiated business model that combines the developer mindshare and adoption benefits of open source with the economic benefits of a proprietary software subscription business model. To encourage developer usage, familiarity and adoption of our platform, we offer Community Server as an open source offering, analogous to a “freemium” offering. Community Server is a free-to-download version of our database that does not include all of the features of our commercial platform. This allows developers to evaluate our platform in a frictionless manner, which we believe has contributed to our platform’s popularity among developers and driven enterprise adoption of our subscription offering…
   </p>
   <p>
    Unlike software companies built around third-party open source projects, we own the intellectual property of our offerings since we are the creators of the software, enabling our proprietary software subscription business model…Our primary subscription package is MongoDB Enterprise Advanced, our comprehensive offering for enterprise customers that can be run in the cloud, on-premise or in a hybrid environment. MongoDB Enterprise Advanced includes our proprietary database server, advanced security, enterprise management capabilities, our graphical user interface, analytics integrations, technical support and a commercial license to our platform. We also offer MongoDB Atlas, our cloud hosted database-as-a-service, or DBaaS, offering that includes comprehensive infrastructure and management of our Community Server offering.
   </p>
  </blockquote>
  <p>
   Basically, MongoDB sells three things on top of its open source database server:
  </p>
  <ul>
   <li>
    Additional tools for enterprise companies to implement MongoDB
   </li>
   <li>
    A hosted service for smaller companies to use MongoDB
   </li>
   <li>
    Legal certainty
   </li>
  </ul>
  <p>
   The importance of this last one can not be overstated: MongoDB’s enterprise version and hosted service are not governed by the AGPL — or, as of late last year, a new MongoDB-created license called the
   <a href="https://www.mongodb.com/blog/post/mongodb-now-released-under-the-server-side-public-license">
    Server Side Public License (SSPL)
   </a>
   . The SSPL is like the AGPL on steroids: it compels companies selling MongoDB-as-a-service to not only open-source their modifications, but also open-source their entire stack.
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_3886" id="identifier_3_3886" title="I’m not going to get into the SSPL, but it is very controversial: many detractors argue it is not an open source license because it does not abide by the freedom to run a program for any purpose, and it may not not be enforceable">
    4
   </a>
  </p>
  <h4>
   What AWS Sells
  </h4>
  <p>
   The largest company selling software-as-a-service is, of course, Amazon. That, though, does not mean that Amazon is selling “software.” The reality is that software is no different than music: it is infinitely reproducible, and thus, in isolation, worth nothing.
  </p>
  <p>
   Instead, the value of software is typically realized in three ways:
  </p>
  <ul>
   <li>
    First is hardware. The most famous example is the iPhone, which is the only way to obtain iOS, but there are countless other examples.
   </li>
   <li>
    Second is licenses. This was Microsoft’s core business for decades: licenses sold to OEMs (for the consumer market) or to companies directly (for the enterprise market). Indeed, there is a bit of irony in that both Microsoft and open source, for all their historical opposition to each other, both depended on copyright, strong legal regimes, and companies doing the right thing.
   </li>
   <li>
    Third is software-as-a-service. This is Microsoft’s new model, as well as Amazon’s, and almost all new enterprise software companies.
    <a class="footnote-link footnote-identifier-link" href="#footnote_4_3886" id="identifier_4_3886" title="I’m using software-as-a-service as an umbrella term for infrastructure-as-a-service and platform-as-a-service">
     5
    </a>
    In this case what is being sold is not the software per se, but rather the utility of the software: the company doing the selling does everything else, including making the software available reliably.
   </li>
  </ul>
  <p>
   With that in mind, read again what AWS announced last week:
  </p>
  <blockquote>
   <p>
    The storage layer is distributed, fault-tolerant, and self-healing, giving you the the performance, scalability, and availability needed to run production-scale MongoDB workloads.
   </p>
  </blockquote>
  <p>
   AWS is not selling MongoDB: what they are selling is “performance, scalability, and availability.” DocumentDB is just one particular area of many where those benefits are manifested on AWS.
  </p>
  <p>
   Make no mistake: these benefits are valuable. There is a secular shift in enterprise computing moving to the cloud, not because it is necessarily cheaper (although costs are more closely aligned to usage), but because performance, scalability, and availability are hard problems that have little to do with the core competency and point of differentiation of most companies.
  </p>
  <p>
   Those are, though, the core competency of AWS, which can bring unmatched scale to bear on solving them: by effectively operating the servers for millions of customers Amazon can apply more resources to all of those issues than any one company could on its own, as well as develop its own customer architecture, from datacenter software down to custom chips (and drive a hard bargain for hardware from suppliers like Intel).
  </p>
  <p>
   The result is that “performance, scalability, and availability” is a tremendously attractive business: the more customers AWS has not only drive that much more recurring revenue, but also deepen AWS’ moat by allowing the company to bring that many more resources to bear on ever more obscure use cases, making AWS that much more attractive to new customers. Microsoft is competing but is a distant second; Google is even further behind. In fact, even MongoDB’s managed service runs on the three giants: it simply makes no sense to go it alone.
  </p>
  <h4>
   The Open Source Conundrum
  </h4>
  <p>
   Thus we have arrived at a conundrum for open source companies:
  </p>
  <ul>
   <li>
    MongoDB leveraged open source to gain mindshare.
   </li>
   <li>
    MongoDB Inc. built a successful company selling additional tools for enterprises to run MongoDB.
   </li>
   <li>
    More and more enterprises don’t want to run their own software: they want to hire AWS (or Microsoft
    <a class="footnote-link footnote-identifier-link" href="#footnote_5_3886" id="identifier_5_3886" title="Which, by the way, has its own MongoDB compatible offering">
     6
    </a>
    or Google) to run it for them, because they value performance, scalability, and availability.
   </li>
  </ul>
  <p>
   This leaves MongoDB Inc. not unlike the record companies after the advent of downloads: what they sold was not software but rather the tools that made that software usable, but those tools are increasingly obsolete as computing moves to the cloud. And now AWS is selling what enterprises really want.
  </p>
  <p>
   Worse, because AWS doesn’t have access to MongoDB (it is only matching the API) it only supports MongoDB 3.6; the current version is 4.0.5. It is possible that if AWS’ service becomes popular MongoDB will effectively stagnate: sure, you can get a better version from MongoDB Inc., but then you have to manage it yourself or go the effort to tie in all of your AWS services with MongoDB’s offering (then again, the potential for differentiation may be MongoDB’s salvation, and an important lesson for other companies).
  </p>
  <p>
   Not that permissive licensing would necessarily help: Redis Labs offers its Redis database under a permissive license; that means that
   <a href="https://aws.amazon.com/redis/">
    AWS’ offering
   </a>
   is usually up-to-date, which is good for Redis development, but doesn’t help Redis Labs make any money. That compelled Redis Labs to
   <a href="https://www.zdnet.com/article/open-source-licensing-war-commons-clause/">
    change the licensing on its add-on modules
   </a>
   to add the “Commons Clause”; this compels service providers to pay for their use, effectively making them proprietary software.
  </p>
  <p>
   It’s hard to not be sympathetic to MongoDB Inc. and Redis Labs: both spent a lot of money and effort building their products, and now Amazon is making money off of them. But that’s the thing: Amazon isn’t making money by selling software, they are making money by providing a service that enterprises value, and both MongoDB and Redis are popular in large part because they were open source to begin with.
  </p>
  <h4>
   Economic Realities and the Future
  </h4>
  <p>
   Little of what I wrote is new to folks in the open source community: the debate over the impact of cloud services on open source has been a strident one for a while now. I think, though, that the debate gets sidetracked by (understandable) discussions about “fairness” and what AWS supposedly owes open source. Yes, companies like MongoDB Inc. and Redis Labs worked hard, and yes, AWS is largely built on open source, but the world is governed by economic realities, not subjective judgments of fairness.
  </p>
  <p>
   And that is why I started with music: it wasn’t necessarily “fair” that music industry sales plummeted, and yes, companies like Apple with its iPod business made billions off of piracy. The only reality that mattered, though, was that music itself, thanks to its infinite reproducibility, was as pure a commodity as there could be.
  </p>
  <p>
   It’s the same situation with software: bits on a disk are fundamentally free — just ask Richard Stallman. In his seminal essay
   <a href="https://www.gnu.org/philosophy/shouldbefree.en.html">
    Why Software Should Be Free
   </a>
   Stallman wrote:
   <a class="footnote-link footnote-identifier-link" href="#footnote_6_3886" id="identifier_6_3886" title="To be clear, I don’t agree with Stallman on a whole host of things; that doesn’t diminish his importance as a thinker or influence on the industry, though, or his insights on the nature of software">
    7
   </a>
  </p>
  <blockquote>
   <p>
    A copy of a program has nearly zero marginal cost (and you can pay this cost by doing the work yourself), so in a free market, it would have nearly zero price. A license fee is a significant disincentive to use the program. If a widely useful program is proprietary, far fewer people will use it.
   </p>
   <p>
    It is easy to show that the total contribution of a program to society is reduced by assigning an owner to it. Each potential user of the program, faced with the need to pay to use it, may choose to pay, or may forego use of the program. When a user chooses to pay, this is a zero-sum transfer of wealth between two parties. But each time someone chooses to forego use of the program, this harms that person without benefiting anyone. The sum of negative numbers and zeros must be negative.
   </p>
   <p>
    But this does not reduce the amount of work it takes to develop the program. As a result, the efficiency of the whole process, in delivered user satisfaction per hour of work, is reduced.
   </p>
  </blockquote>
  <p>
   This tradeoff is inescapable, and it is fair to wonder if the golden age of VC-funded open source companies will start to fade (although not open source generally). The monetization model depends on the friction of on-premise software; once cloud computing is dominant, the economic model is much more challenging.
  </p>
  <p>
   That, though, should give pause to AWS, Microsoft, and Google. It is hard to imagine them ever paying for open source software, but at the same time, writing (public-facing) software isn’t necessarily the core competency of their cloud businesses. They too have benefited from open-source companies: they provide the means by which their performance, scalability, and availability are realized. Right now everyone is winning: simply following economic realities could, in the long run, mean everyone is worse off.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2019/mongodb-follow-up-aws-incentives-batteries-the-iphones-missing-miss/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3886">
    “Mongo” comes from the word
    <em>
     humongous
    </em>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_3886">
    I’m sorry, but this next bit is going to be dry; bear with me please [
    <a class="footnote-link footnote-back-link" href="#identifier_1_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_3886">
    To be clear, I’m not saying that Google has a license; rather, that MongoDB offers alternative licenses [
    <a class="footnote-link footnote-back-link" href="#identifier_2_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_3886">
    I’m not going to get into the SSPL, but it is very controversial: many detractors argue it is not an open source license because it does not abide by the freedom to run a program for any purpose, and it
    <a href="https://www.processmechanics.com/2018/10/18/the-server-side-public-license-is-flawed/">
     may not not be enforceable
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_3_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_3886">
    I’m using software-as-a-service as an umbrella term for infrastructure-as-a-service and platform-as-a-service [
    <a class="footnote-link footnote-back-link" href="#identifier_4_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_3886">
    Which, by the way, has its own
    <a href="https://docs.microsoft.com/en-us/azure/cosmos-db/mongodb-introduction">
     MongoDB compatible offering
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_5_3886">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_6_3886">
    To be clear, I don’t agree with Stallman on a whole host of things; that doesn’t diminish his importance as a thinker or influence on the industry, though, or his insights on the nature of software [
    <a class="footnote-link footnote-back-link" href="#identifier_6_3886">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3886" href="https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3886" href="https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3886" href="https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

