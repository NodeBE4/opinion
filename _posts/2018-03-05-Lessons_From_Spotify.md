---
layout: post
title: "Lessons From Spotify"
date: 2018-03-05T14:45:29+00:00
author: Ben Thompson
from: https://stratechery.com/2018/lessons-from-spotify/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3099 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-audio topics-music-streaming topics-venture-capital concepts-advertising concepts-aggregation-theory concepts-business-models concepts-customer-acquisition concepts-media concepts-media-and-advertising concepts-media-and-subscriptions concepts-owning-customer-relationship concepts-product-management concepts-saas concepts-subscriptions companies-spotify" id="post-3099">
 <header class="entry-header">
  <h1 class="entry-title">
   Lessons From Spotify
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-03-05T06:45:29-08:00">
     Monday, March 5, 2018
    </time>
    <time class="updated" datetime="2018-06-15T12:41:28-07:00">
     Friday, June 15, 2018
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
   The two dominant business models for venture-backed startups are advertising for consumer-focused companies, and Software-as-a-Service (SaaS) for business-focused ones. On one level, these business models are quite different: the former gives away software for free with the hope of convincing a third party to pay for access to users; the latter charges some portion of users directly. The underlying economics of both, though, are more similar than you might think — indeed, both are very much in line with venture-backed startups of the past.
  </p>
  <h4>
   Venture Outcomes
  </h4>
  <p>
   Silicon Valley is, unsurprisingly given the name, built on silicon-based computer chips, and that goes for Silicon Valley venture capital, as well. Silicon-based chips have minimal marginal costs — sand is cheap! — but massive fixed costs: R&amp;D on one hand, and the equipment to actually make the chips on the other. And while those two costs live on different parts of the income statement — the latter is a cost of revenue that impacts gross margins, while the former is “under the line” and an operational cost that only impacts overall profitability — the fundamental economic rationale for taking on venture capital is the same: spend a lot of money up-front to develop and build a product, and take advantage of minimal marginal costs to make it up in volume.
  </p>
  <p>
   You can see how this model translated perfectly to software: marginal costs were even lower, and an even greater percentage of costs were R&amp;D. Companies needed lots of money to get started, but those that succeeded could generate returns that vastly exceeded the amount of investment. This is certainly the case for today’s business models.
  </p>
  <p>
   Advertising-based consumer companies spend huge amounts on R&amp;D building products that appeal to users, although usually not a lot on sales and marketing to acquire users; consumer companies that break through to the scale necessary to support advertising rely on viral network effects. Where the sales and marketing spend comes is in courting advertisers; however, the most valuable consumers companies of all — the
   <a href="https://stratechery.com/2017/defining-aggregators/">
    super-aggregators
   </a>
   — generate the same sort of network effects allowing them to add advertisers in a scalable way as well.
  </p>
  <p>
   This produces the ideal venture outcome: a company where users and revenue grow far more quickly than costs.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341.jpg">
    <img alt="Graph of a Venture Company's Costs" class="aligncenter size-large wp-image-3108" height="466" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341-1024x746.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341-1024x746.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341-300x219.jpg 300w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341-768x559.jpg 768w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.341-865x630.jpg 865w" width="640"/>
   </a>
  </p>
  <p>
   Again, this is possible because there are minimal marginal costs — more users are not necessarily more expensive. Of course fixed costs grow over time, but they only grow linearly — earning ever-increasing revenue on a relatively stable cost basis is the definition of scale.
  </p>
  <p>
   SaaS businesses have the same sort of profile — the big difference is that revenue comes from users, and thus sales and marketing expenses are spent on gaining said users, not advertisers, but minimal marginal costs are the common thread.
  </p>
  <h4>
   Spotify’s Operational Costs
  </h4>
  <p>
   In
   <a href="https://stripe.com/atlas/guides/business-of-saas">
    The Business of SaaS
   </a>
   , one of the guides offered by
   <a href="https://stripe.com/atlas">
    Stripe Atlas
   </a>
   ,
   <a href="https://twitter.com/patio11">
    Patrick McKenzie
   </a>
   writes:
  </p>
  <blockquote>
   <p>
    Margins, to a first approximation, don’t matter. Most businesses care quite a bit about their cost-of-goods-sold (COGS), the cost to satisfy a marginal customer. While some platform businesses (like AWS) have material COGS, at the typical SaaS company, the primary source of value is the software and it can be replicated at an extremely low COGS. SaaS companies frequently spend less than 5~10% of their marginal revenue per customer on delivering the underlying service.
   </p>
   <p>
    This allows SaaS entrepreneurs to almost ignore every factor of their unit economics except customer acquisition cost (CAC; the marginal spending on marketing and sales per customer added). If they’re quickly growing, the company can ignore every expense that doesn’t scale directly with the number of customers (i.e. engineering costs, general and administrative expenses, etc), on the assumption that growth at a sensible CAC will outrun anything on the expenses side of the ledger.
   </p>
  </blockquote>
  <p>
   In other words, operational costs don’t matter in the long run, which is good news for Spotify, a venture-backed company with definite SaaS characteristics that
   <a href="https://www.sec.gov/Archives/edgar/data/1639920/000119312518063434/d494294df1.htm">
    filed for a direct listing last week
   </a>
   . Spotify has increased monthly active users by 43% over the last three years and revenue by 448% over the last five; its fixed costs have largely tracked revenue:
  </p>
  <div align="center">
   SPOTIFY REVENUE AND FIXED COSTS (IN MILLIONS OF EUROS)
  </div>
  <table>
   <thead>
    <tr>
     <th>
     </th>
     <th>
      Revenue
     </th>
     <th>
      R&amp;D (% Rev)
     </th>
     <th>
      S&amp;M (% Rev)
     </th>
     <th>
      G&amp;A (% Rev)
     </th>
     <th>
      Total (% Rev)
     </th>
    </tr>
   </thead>
   <tbody>
    <tr>
     <td>
      2013
     </td>
     <td>
      746
     </td>
     <td>
      73 (10%)
     </td>
     <td>
      111 (15%)
     </td>
     <td>
      42 (6%)
     </td>
     <td>
      226 (30%)
     </td>
    </tr>
    <tr>
     <td>
      2014
     </td>
     <td>
      1,085
     </td>
     <td>
      114 (11%)
     </td>
     <td>
      184 (17%)
     </td>
     <td>
      67 (6%)
     </td>
     <td>
      365 (34%)
     </td>
    </tr>
    <tr>
     <td>
      2015
     </td>
     <td>
      1,940
     </td>
     <td>
      136 (7%)
     </td>
     <td>
      219 (11%)
     </td>
     <td>
      106 (5%)
     </td>
     <td>
      461 (26%)
     </td>
    </tr>
    <tr>
     <td>
      2016
     </td>
     <td>
      2,952
     </td>
     <td>
      207 (7%)
     </td>
     <td>
      368 (12%)
     </td>
     <td>
      175 (6%)
     </td>
     <td>
      750 (25%)
     </td>
    </tr>
    <tr>
     <td>
      2017
     </td>
     <td>
      4,090
     </td>
     <td>
      396 (10%)
     </td>
     <td>
      567 (14%)
     </td>
     <td>
      264 (6%)
     </td>
     <td>
      1,227 (30%)
     </td>
    </tr>
   </tbody>
  </table>
  <p>
   This looks like a well-managed SaaS company:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM.png">
    <img alt="Spotify Revenue and Operational Costs" class="aligncenter size-large wp-image-3106" height="351" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM-1024x561.png" srcset="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM-1024x561.png 1024w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM-300x164.png 300w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM-768x421.png 768w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM-1150x630.png 1150w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.59-PM.png 1770w" width="640"/>
   </a>
  </p>
  <p>
   There’s just one problem: Spotify’s marginal costs.
  </p>
  <h4>
   Spotify’s Marginal Cost Problem
  </h4>
  <p>
   It is not exactly groundbreaking analysis to note that Spotify has significant marginal costs — specifically, the royalties it pays the music industry (not just record labels but also songwriters and publishers). Those are represented by Spotify’s Cost of Revenue:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM.png">
    <img alt="Spotify Revenue and Cost of Revenue" class="aligncenter size-large wp-image-3103" height="354" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM-1024x566.png" srcset="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM-1024x566.png 1024w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM-300x166.png 300w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM-768x424.png 768w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM-1140x630.png 1140w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.08.16-PM.png 1766w" width="640"/>
   </a>
  </p>
  <p>
   Spotify
   <a href="https://stratechery.com/2017/spacex-reuses-a-rocket-the-music-industry-winning-and-whining-spotify-universal-agree-to-new-deal/">
    negotiated new deals with the record labels
   </a>
   last summer that resulted in lower royalty rates in exchange for guaranteed subscriber growth and the ability for the labels to make some releases exclusive to Spotify’s paid tier; you can see those lower rates reflected in Spotify’s increased margins.
  </p>
  <h4>
   Spotify’s Missing Profit Potential
  </h4>
  <p>
   That, though, is precisely the problem: Spotify’s margins are completely at the mercy of the record labels, and even after the rate change, the company is not just unprofitable, its losses are growing, at least in absolute euro terms:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM.png">
    <img alt="Spotify Gross and Net Profit" class="aligncenter size-large wp-image-3107" height="544" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM-1024x871.png" srcset="https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM-1024x871.png 1024w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM-300x255.png 300w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM-768x653.png 768w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM-741x630.png 741w, https://stratechery.com/wp-content/uploads/2018/03/Screen-Shot-2018-03-05-at-10.11.01-PM.png 1766w" width="640"/>
   </a>
  </p>
  <p>
   Moreover, it seems highly unlikely Spotify’s Cost of Revenue will improve much in the short-term: those record deals are locked in until at least next year, and they include “most-favored nation” provisions, which means that Spotify has to get Universal Music Group, Sony Music Entertainment, Warner Music Group, and Merlin (the representative for many independent labels),  which own 85% of the music on Spotify as measured by streams, to all agree to reduce rates collectively. Making matters worse, the U.S. Copyright Royalty Board just increased the amount to be paid out to songwriters; Spotify said the change isn’t material, but it certainly isn’t in the right direction either.
  </p>
  <p>
   That leaves two options:
  </p>
  <ul>
   <li>
    Most obviously Spotify could try and lower its operational costs. This, though, is harder than it might seem for two reasons: first, Spotify is already a pretty frugal company; Dropbox, for example,
    <a href="https://stratechery.com/2018/the-dropbox-comp/">
     which filed its S-1 the same week
    </a>
    , spends 77% of revenue on operational costs as compared to Spotify’s 30%.
   </li>
   <li>
    Spotify could grow its revenue without increasing its operational costs. How, though, will it grow revenue if it cannot increase its spending on R&amp;D and Sales &amp; Marketing? The typical pattern for non-social network companies is for Sales &amp; Marketing to grow less efficient over time, which means it would need to
    <em>
     increase
    </em>
    as a percentage of revenue, not decrease (and remember, Spotify can’t afford to miss its growth numbers or its royalty rates go up).
   </li>
  </ul>
  <p>
   There is one more possibility: Spotify could one day cut out the labels altogether — the idea certainly makes sense on a conceptual level. Spotify is in one sense an aggregator, in that it increasingly controls access to music listeners, and to the company’s credit, it has
   <a href="https://stratechery.com/2017/music-versus-publishing-spotifys-increasing-power/">
    demonstrated the ability to exercise power
   </a>
   via its control of music discovery and popular playlists.
  </p>
  <p>
   The problem is that the music labels, as I wrote in
   <a href="https://stratechery.com/2017/the-great-unbundling/">
    The Great Unbundling
   </a>
   , have been strengthened by Spotify as well:
  </p>
  <blockquote>
   <p>
    The music industry, meanwhile, has, at least relative to newspapers, come out of the shift to the Internet in relatively good shape; while piracy drove the music labels into the arms of Apple, which unbundled the album into the song, streaming has rewarded the integration of back catalogs and new music with bundle economics: more and more users are willing to pay $10/month for access to everything, significantly increasing the average revenue per customer. The result is an industry that looks remarkably similar to the pre-Internet era:
   </p>
   <p>
    <a href="https://stratechery.com/2017/the-great-unbundling/">
     <img alt="" class="aligncenter size-large wp-image-2412" height="224" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/01/IMG_0112-1024x358.png" srcset="https://stratechery.com/wp-content/uploads/2017/01/IMG_0112-1024x358.png 1024w, https://stratechery.com/wp-content/uploads/2017/01/IMG_0112-300x105.png 300w, https://stratechery.com/wp-content/uploads/2017/01/IMG_0112-768x269.png 768w, https://stratechery.com/wp-content/uploads/2017/01/IMG_0112-1200x420.png 1200w" width="640"/>
    </a>
   </p>
   <p>
    Notice how little power Spotify and Apple Music have; neither has a sufficient user base to attract suppliers (artists) based on pure economics, in part because they don’t have access to back catalogs. Unlike newspapers, music labels built an integration that transcends distribution.
   </p>
  </blockquote>
  <p>
   Spotify is an impressive product and company, and CEO Daniel Ek and team deserve credit for reaching this point. Being a true aggregator, though, means gaining power over supply; Spotify doesn’t have that — the company doesn’t even have control over its marginal costs — and it’s hard to see where the profits come from.
  </p>
  <h4>
   Lessons from Spotify
  </h4>
  <p>
   The power of the record labels and the resultant linkage of Spotify’s marginal costs to its overall revenue certainly makes Spotify a unique case compared to most zero marginal cost venture-backed companies:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340.jpg">
    <img alt="Graph of Company with Marginal Costs Linked to Revenue" class="aligncenter size-large wp-image-3109" height="459" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340-1024x734.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340-1024x734.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340-300x215.jpg 300w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340-768x551.jpg 768w, https://stratechery.com/wp-content/uploads/2018/03/Paper.stratechery-Year-One.340-879x630.jpg 879w" width="640"/>
   </a>
  </p>
  <p>
   It’s worth noting, though, that Spotify is hardly the only well-known startup that has its cost of revenue linked to total revenue — at least from a certain perspective. Over the last few years there has been a third model of startup that has emerged: the so-called sharing economy, or Assets-as-a-Service (AaaS). When you spend $10 on an Uber or Lyft ride, around $7 goes to the driver; when you spend $100 on an Airbnb, $85 goes to the host,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_3099" id="identifier_0_3099" title="Minus service fees to cover payment processing">
    1
   </a>
   and so on and so forth.
  </p>
  <p>
   This isn’t how these companies necessarily keep their books, to be clear: the top line number should exclude whatever is paid out to the driver or host etc. When thinking about how these companies should be managed, though, the situation isn’t much different than Spotify. Specifically:
  </p>
  <ul>
   <li>
    AaaS companies can’t assume that operational expenses are “free”, because gross marginal costs are going to eat up a huge portion of gross revenue growth.
   </li>
   <li>
    AaaS companies should focus Sales &amp; Marketing spending on increasing demand, and allow demand to draw supply. Doing it the other way — spending Sales &amp; Marketing to increase supply in the hope of drawing demand — may make sense competitively, but it is a disaster financially, as the company is basically spending to increase its costs (imagine if Spotify were paying millions to court the record labels!)
   </li>
   <li>
    AaaS companies that can’t lower their operational costs or grow revenue relatively faster than Sales &amp; Marketing will be left rolling the dice on eliminating marginal costs entirely. Granted, self-driving cars or
    <a href="https://stratechery.com/2017/airbnb-reportedly-building-apartments-apple-hires-new-general-counsel-ubers-board-saga-ends/">
     owned-and-operated apartments
    </a>
    may both be more viable than getting rid of the record labels, but it still seems a better bet to become far more disciplined when it comes to operational costs.
   </li>
  </ul>
  <p>
   I still believe in a future where
   <a href="https://stratechery.com/2016/everything-as-a-service/">
    Everything is a Service
   </a>
   , and there’s no question that creating networks for everything will need a lot of venture capital. And make no mistake — there will continue to be capital available, because a network, once made, absolutely offers the sort of scalable revenue generation that makes generating significant profits an inevitability.
  </p>
  <p>
   To that end, it is surely Spotify’s hope that the streaming market ends up being so big that the company’s low gross margin in percentage terms ends up large in absolute ones; even then those profits will come from operational excellence and efficient customer acquisition, not simply top-line growth.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2018/could-spotify-be-netflix-calculating-spotifys-ltv-and-cac/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3099">
    Minus service fees to cover payment processing [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3099">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3099" href="https://stratechery.com/2018/lessons-from-spotify/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3099" href="https://stratechery.com/2018/lessons-from-spotify/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3099" href="https://stratechery.com/2018/lessons-from-spotify/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/lessons-from-spotify/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

