---
layout: post
title: "Spotify’s Podcast Aggregation Play"
date: 2019-02-07T15:40:32+00:00
author: Ben Thompson
from: https://stratechery.com/2019/spotifys-podcast-aggregation-play/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4010 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-audio topics-music-streaming topics-podcasts concepts-advertising concepts-aggregation-theory concepts-business-models concepts-commoditizing-suppliers concepts-distribution-and-transaction-costs concepts-incentives concepts-making-money concepts-media concepts-media-and-subscriptions concepts-owning-customer-relationship concepts-subscriptions concepts-the-internet-and-media companies-anchor companies-apple companies-gimlet-media companies-midroll companies-spotify companies-stitcher" id="post-4010">
 <header class="entry-header">
  <h1 class="entry-title">
   Spotify’s Podcast Aggregation Play
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-02-07T07:40:32-08:00">
     Thursday, February 7, 2019
    </time>
    <time class="updated" datetime="2019-02-11T19:18:09-08:00">
     Monday, February 11, 2019
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
   Credit Spotify CEO Daniel Ek with honesty; in
   <a href="https://newsroom.spotify.com/2019-02-06/audio-first/">
    a blog post announcing a major move into the podcast space
   </a>
   , Ek wrote:
  </p>
  <blockquote>
   <p>
    More than 10 years ago we founded Spotify to give consumers something they couldn’t get — music any time, anywhere, and at the right price. Along the way, we broke the grip piracy had on our industry and restored the growth of global music through paid on-demand streaming. I’m proud of what we’ve accomplished, but what I didn’t know when we launched to consumers in 2008 was that audio — not just music — would be the future of Spotify.
   </p>
  </blockquote>
  <p>
   There is a lot packed into this paragraph. First and foremost, Ek is absolutely justified in taking a victory lap: as I
   <a href="https://stratechery.com/2019/aws-mongodb-and-the-economic-realities-of-open-source/">
    noted last month
   </a>
   music revenue is growing sharply; over the next few years the industry’s total revenue will likely exceed the peak of the CD era, something that seemed unthinkable a decade ago.
  </p>
  <p>
   <a href="https://www.riaa.com/u-s-sales-database/">
    <img alt="U.S. music industry sales over time" class="aligncenter size-large wp-image-3887" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-300x225.png 300w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-768x576.png 768w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM-840x630.png 840w, https://stratechery.com/wp-content/uploads/2019/01/Screen-Shot-2019-01-14-at-1.27.11-AM.png 1530w" width="640"/>
   </a>
  </p>
  <p>
   What happened is that Spotify dragged the record labels into a completely new business model that relied on Internet assumptions, instead of fighting them: if duplicating and distributing digital media is free (on a marginal basis), don’t try to make it scarce, but instead make it abundant and charge for the convenience of accessing just about all of it.
  </p>
  <p>
   The problem for Spotify is that the company’s financial returns are not nearly representative of its impact on the music industry. The company did make
   <a href="https://www.businesswire.com/news/home/20190206005298/en/">
    its first operating profit of last quarter
   </a>
   on revenues of €1.5 billion, but the biggest driver was the fact its operating costs were down 17% due to lower “accrued social costs” in Sweden that resulted from Spotify’s stock price going down. To be fair, Spotify said it would have made a small profit even without that adjustment, but the long-term outlook is tough when the company’s gross profit is, as it was last quarter, only 27%.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_4010" id="identifier_0_4010" title="This number was slightly inflated due to a one time accounting change">
    1
   </a>
  </p>
  <p>
   The issue, as I laid out last year in
   <a href="https://stratechery.com/2018/lessons-from-spotify/">
    Lessons From Spotify
   </a>
   , is that Spotify’s primary cost driver is not, like most tech companies, fixed investments in R&amp;D or Sales &amp; Marketing, but rather marginal payouts to record labels. Basically, the more revenue Spotify makes the more its costs increase, which can be overcome at large enough revenue numbers — see last quarter — but limits the company’s long-term upside.
  </p>
  <p>
   At least, that is, as long as Spotify was a music company; thus the new declaration from Ek that Spotify is now about audio — the honesty was his admission that he didn’t originally see this coming.
  </p>
  <h4>
   Podcasts Versus Music
  </h4>
  <p>
   The shift in purpose from “music” to “audio” is, for now anyways, about podcasts. And, at least from a user perspective, it is a natural extension: playing music and playing podcasts entail downloading or streaming some sort of digital file, decoding it on a device, and playing it back through some sort of speaker. That one involved melodies and harmonies and the other primarily the spoken word (although there are plenty of music podcasts) is, from a technical perspective, a distinction without meaning.
  </p>
  <p>
   From a value chain perspective, though, music and podcasts could not be more different:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts.png">
    <img alt="The music value chain versus the podcast value chain" class="aligncenter size-large wp-image-4014" height="643" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-1020x1024.png" srcset="https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-1020x1024.png 1020w, https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-150x150.png 150w, https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-300x300.png 300w, https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-768x771.png 768w, https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts-628x630.png 628w, https://stratechery.com/wp-content/uploads/2019/02/music-v-podcasts.png 1024w" width="640"/>
   </a>
  </p>
  <ul>
   <li>
    Music is primarily controlled by three large labels; podcasts are controlled by individual podcasters
   </li>
   <li>
    Music can only be played legally through licensed services or via licensed downloads; podcasts can be played by anyone
   </li>
   <li>
    Music generated $8.7 billion in revenue in the U.S. in 2017; podcasts generated only around $300 million in the U.S.
   </li>
  </ul>
  <p>
   This last point is directly related to the first two: the money that can be made from a value chain is directly related to the degree of friction and centralization in that value chain. Consider Spotify’s two primary business models:
  </p>
  <ul>
   <li>
    Subscriptions capture money directly from consumers who, as noted above, are paying for the convenience of accessing all of the music they want (i.e. overcoming friction) in one centralized place.
   </li>
   <li>
    Advertisements capture money from advertisers who wish to reach listeners; effectively selling advertising, though, means having one place for advertisers to go to reach a large number of listeners.
   </li>
  </ul>
  <p>
   This importance of centralization to an advertising business model is best seen by the fact that Spotify drove €542 million ($616 million) in advertising revenue last year, far outpacing all of podcasting, even though half of the company’s users didn’t hear any ads at all. Moreover, the total amount of advertising revenue driven by music is even greater when you add in YouTube.
  </p>
  <h4>
   Podcasts and the Web
  </h4>
  <p>
   The current state of podcast advertising is a situation not so different from the early web: how many people remember this?
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM.png">
    <img alt='The old "punch the monkey" display ad' class="aligncenter size-large wp-image-4013" height="191" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM-1024x306.png" srcset="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM-1024x306.png 1024w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM-300x90.png 300w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM-768x229.png 768w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM-1200x358.png 1200w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.32.53-PM.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   These ads were
   <a href="http://www.mikeonads.com/2007/03/01/punch-the-monkey/">
    elaborate affiliate marketing schemes
   </a>
   ; you really could get a free iPod if you signed up for several credit cards, a Netflix account, subscription video courses, you get the idea. What all of these marketers had in common was an anticipation that new customers would have large lifetime values, justifying large payouts to whatever dodgy companies managed to sign them up.
  </p>
  <p>
   The parallels to podcasting should be obvious: why is Squarespace on seemingly every podcast? Because customers paying monthly for a website have huge lifetime values. Sure, they may only set up the website once, but they are likely to maintain it for a very long time, particularly if they grabbed a “free” domain along the way. This makes the hassle of coordinating ad reads and sponsorship codes across a plethora of podcasts worth the trouble; it’s the same story with
   <a href="https://medium.com/@magellanblog/october-robinhood-advertises-on-250-podcasts-adt-joins-the-top-15-e8072c462189">
    other prominent podcast sponsors
   </a>
   like ZipRecruiter or SimpliSafe.
  </p>
  <p>
   The problem is that the affiliated marketing for large lifetime-value purchases segment is not a particularly large one; that meant that the amount of consumer attention paid to the Internet far exceeded the amount of advertising spend. From Mary Meeker’s 2005 Internet Trends report:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM.png">
    <img alt="A slide from Mary Meeker's 2005 Internet trends report showing how the Internet was under-monetized" class="aligncenter size-large wp-image-4012" height="476" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM-1024x762.png" srcset="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM-1024x762.png 1024w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM-300x223.png 300w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM-768x572.png 768w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM-846x630.png 846w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-8.39.17-PM.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   It seems very likely that were a similar slide to be made about podcasting it would look very similar: according to
   <a href="http://www.edisonresearch.com/wp-content/uploads/2018/03/Infinite-Dial-2018.pdf">
    Edison Research
   </a>
   73 million people in the U.S. listen to podcasts monthly, and 48 million weekly; the average listener listens to seven podcasts a week. That seems like it should be worth a lot more than $300 million or so!
  </p>
  <h4>
   Ad Centralization
  </h4>
  <p>
   Again, what happened to the web is likely instructive: in 2003 Google launch AdSense, an advertising network for websites. Now advertisers could buy ads in one centralized place, and those ads could be better targeted by one company that spread its cookies across the entire Internet (and, of course, combined them with data from search, email, etc.).
  </p>
  <p>
   By 2010, five years after the above slide, Meeker had an update:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM.png">
    <img alt="A slide from Mary Meeker's 2010 report showing how web monetization had improved" class="aligncenter size-large wp-image-4011" height="481" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM-1024x770.png" srcset="https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM-1024x770.png 1024w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM-300x226.png 300w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM-768x578.png 768w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM-837x630.png 837w, https://stratechery.com/wp-content/uploads/2019/02/Screen-Shot-2019-02-07-at-9.28.02-PM.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   Internet attention still outpaced monetization, but the gap was significantly closer: yes, the ad formats were still mostly the same, but increased centralization brought far more advertisers on board.
  </p>
  <p>
   To be sure there have been attempts to centralize podcast advertising as well: a company called
   <a href="http://www.midroll.com">
    Midroll
   </a>
   , which was acquired by E.W. Scripps in 2015, is the largest player in the space. Midroll sits between advertisers and mostly larger podcasts like the Bill Simmons Podcast or WTF with Marc Maron, and handles the nitty gritty of coordinating ad reads and distributing discount codes and specialized URLs in exchange for about a third of revenue.
  </p>
  <p>
   Three years ago Midroll also acquired a podcast player called Stitcher; as I
   <a href="https://stratechery.com/2016/the-future-of-podcasting/">
    explained at the time
   </a>
   there was a lot of value to be gained from controlling both the listening experience and ad sales, particularly in terms of data: with better data Midroll could more easily sell podcast advertising inventory to companies with business models that did not rely on generating outsized lifetime values.
  </p>
  <p>
   The problem for Midroll, though, is that Stitcher never gained a meaningful share of the market, which meant Midroll never achieved the sort of data necessary to expand the podcast advertising market. Sure, some brand advertisers are dipping their toes in the market, but the leading advertisers are the same sort of companies they have always been, and while users no longer need to punch any monkeys, they do still need to punch in those discount codes and specialized URLs.
  </p>
  <p>
   Meanwhile Apple, which does have the users thanks to the dominance of the iOS Podcast app,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_4010" id="identifier_1_4010" title="iTunes is very important to podcasting, but it is only a directory of podcasts that are hosted elsewhere; that means it is not a means to collect user data">
    2
   </a>
   has shown little inclination of being that centralized player. I wrote about the company’s
   <a href="https://stratechery.com/2017/podcasts-analytics-and-centralization/">
    opportunities in the space two years ago
   </a>
   , but despite the
   <a href="https://stratechery.com/2019/apple-earnings-apple-the-services-company-for-real/">
    shift in strategy to services
   </a>
   nothing has changed.
  </p>
  <h4>
   The Value of Gimlet Media
  </h4>
  <p>
   All of this is critical context for understanding Spotify’s strong interest in the podcasting space. Spotify needs (1) a way to differentiate its service from Apple Music in particular, and (2) content that it does not have to pay for on a marginal cost basis.
  </p>
  <p>
   Gimlet Media fits the bill in both cases. While the company’s current roster of podcasts will remain freely available, future podcasts will almost certainly be exclusive to Spotify. More importantly, it seems likely that Spotify bought the company not simply for its library but also its management: expect a big jump in output with additional investment.
  </p>
  <p>
   It’s worth considering why it is exclusivity in podcasts will likely play out differently in podcasts than in music. CEO Daniel Ek said
   <a href="https://www.fool.com/earnings/call-transcripts/2019/02/06/spotify-technology-sa-spot-q4-2018-earnings-confer.aspx">
    on the company’s earnings call yesterday
   </a>
   :
  </p>
  <blockquote>
   <p>
    I think these are two very, very different businesses. We’ve spoken in the past about the music industry and not being a space, where exclusivity makes sense for a number of different reasons, but including one of them, that music, radio can put any piece of music up. So exclusivities won’t have the same effect, as you won’t be able to keep it exclusive.
   </p>
   <p>
    And the second thing obviously is the artists and the label have the incentive to push the content out in many places as possible, because so much of an artist revenue derives from touring. I think in audio and certainly in podcast, the dynamics is very, very different, and what we’re doing here and what we’re excited about is really building the market, it’s at a very, very different stage of maturity. So we’re investing in that and we think we can be one of the tent-pole players in that space.
   </p>
  </blockquote>
  <p>
   Basically, the wall that Spotify can put up around podcasts is much stronger than the one it can put up around music, and podcasters have fewer alternatives. Or, to put it another way, podcasts are a market where Spotify — to the extent they are willing to pay — actually has power over supply.
  </p>
  <p>
   Meanwhile, for Spotify podcasts are fixed costs: that means that driving more listening flows directly to the company’s bottom line in a way that increased music listening does not. This is a very big deal — it is entirely possible that if Spotify succeeds in the space that podcasts will drive a relatively small percentage of revenue and a much larger percentage of profit.
  </p>
  <h4>
   Spotify’s Aggregation Play
  </h4>
  <p>
   At the same time, the Gimlet Media acquisition on its own does not seem like a sustainable strategy: paying three-quarters of the amount generated in annual revenue by an entire industry for 25 or so podcasts does not scale. That, though, is where the Anchor acquisition comes in: Anchor is a service for easily making and distributing podcasts, with a nascent advertising service for monetization.
  </p>
  <p>
   To put it another way, Anchor is a means of generating supply, and it is supply that has always stood in the way of Spotify’s ambitions to be an
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregator
   </a>
   . Aggregators bring suppliers onto the platform
   <a href="https://stratechery.com/2017/defining-aggregators/">
    on their terms
   </a>
   ; Spotify, on the other hand, has had to scratch and claw to get labels to give them the music they needed to be viable. And again, the acquisition of Gimlet Media, while better from a long-term leverage perspective, is not a big improvement: Spotify almost certainly overpaid if the only goal was to obtain supply.
  </p>
  <p>
   What I think Spotify senses, though, is that while podcasts, at least in theory, solve many of their business model problems, Spotify is also uniquely positioned to solve the problems of many podcasters/suppliers. To wit:
  </p>
  <ul>
   <li>
    Increasing advertising revenue for the entire industry requires a centralized player that can leverage a large userbase. Spotify is still a distant second to Apple in podcasts, but they are growing fast. Just as importantly, Spotify already has a strongly growing advertising business — again, larger than the entire podcast market — that it can extend to podcasts.
   </li>
   <li>
    The open nature of podcasts means it is very difficult to monetize users directly; Spotify, though, has already built an entire infrastructure around monetizing users directly. Podcasts exclusive to Spotify can likely make meaningful money from Spotify subscribers that still gives Spotify far higher margin than music.
   </li>
  </ul>
  <p>
   This explains Spotify’s multi-prong approach:
  </p>
  <ul>
   <li>
    Anchor provides a way to capture new podcasters, leading them either to Spotify advertising or, in the case of rising stars, to Spotify exclusives. Critically, because Spotify has access to all of the data, they can likely bring those suppliers on board at a far lower rate than they have to pay for established creators like Gimlet Media.
   </li>
   <li>
    Spotify Advertising, as I just suggested, makes a strong play to be the dominant provider for the entire podcasting industry. Spotify Advertising is already operating at a far larger scale than Midroll, the incumbent player, and Spotify has access to the data of the second largest podcast player in the market.
   </li>
   <li>
    Gimlet Media becomes an umbrella brand for a growing stable of Spotify exclusive podcasts. Critically, as I noted above, the majority of these podcasts come to Spotify not because Spotify pays them millions of dollars but simply because Spotify is better at monetizing than anyone else.
   </li>
  </ul>
  <p>
   This will be the determinant as to whether or not Spotify’s podcast gambit succeeds: being an Aggregator doesn’t simply mean acquiring a large pool of captive customers, it means controlling the value chain such that suppliers come on to your platform on your terms because you monetize them better than anyone else, even as you capture the excess value.
  </p>
  <hr/>
  <p>
   To that last point, it’s worth highlighting this comment from Gimlet Media co-founder Matt Lieber to Peter Kafka on the
   <a href="https://www.recode.net/2019/2/7/18214941/alex-blumberg-matt-lieber-gimlet-spotify-deal-acquisition-peter-kafka-media-podcast-audio-interview">
    Recode Media podcast
   </a>
   :
  </p>
  <blockquote>
   <p>
    We did tell [Gimlet Media employees] that based on what we were talking about this would be a great thing for the company because really what everyone here is motivated by is making amazing shows for listeners who crave more, and…being acquired by Spotify puts us with the world’s largest audio platform that’s reaching more than 200 million people globally, so it’s a way for our storytelling and our work to have a lot more impact. So generally people are really excited about it.
   </p>
  </blockquote>
  <p>
   This is the Aggregator’s advantage: particularly when it comes to media, whether it be print, video, or audio, suppliers are often motivated to simply reach the most people and make a living doing so. It is a fundamentally short-term outlook that is entirely understandable and defensible. That, though, leaves the Aggregator with an arbitrage advantage: by controlling access to customers and, by extension, the most attractive means of monetization, Aggregators can offer the best relative deal to suppliers that is still, in absolute terms, a great deal for the Aggregator.
  </p>
  <p>
   To that end, it is worth considering if this is good for the podcasting industry generally. After all, to return to the web analogy, the price of the Internet finally monetizing effectively was the shift of content to centralized platforms like Facebook. Is the web better today than it was when we were punching monkeys?
  </p>
  <p>
   I do think the answer is yes, but I don’t mind if you disagree: granted, most supply has moved to Facebook and other social networks; it is no longer possible to build a viable web business with display ads. At the same time, the web is still as open as can be, which means there is room for new business models like subscriptions, a model that has only gotten started and is already producing far better content than the old mass market media model ever did (I’m obviously biased in this regard!).
  </p>
  <p>
   I can see a similar future for podcasts: Spotify, if they are successful, may end up being the biggest player, but that doesn’t mean new and different business models that directly link suppliers and consumers won’t emerge. It will, in other words, look like everything else touched by the Internet: very large winners on one end, and small niche winners on the other.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4010">
    This number was slightly inflated due to a one time accounting change [
    <a class="footnote-link footnote-back-link" href="#identifier_0_4010">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_4010">
    iTunes is very important to podcasting, but it is only a directory of podcasts that are hosted elsewhere; that means it is not a means to collect user data [
    <a class="footnote-link footnote-back-link" href="#identifier_1_4010">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4010" href="https://stratechery.com/2019/spotifys-podcast-aggregation-play/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4010" href="https://stratechery.com/2019/spotifys-podcast-aggregation-play/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4010" href="https://stratechery.com/2019/spotifys-podcast-aggregation-play/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2019/spotifys-podcast-aggregation-play/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

