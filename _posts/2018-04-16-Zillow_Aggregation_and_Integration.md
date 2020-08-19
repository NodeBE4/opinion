---
layout: post
title: "Zillow, Aggregation, and Integration"
date: 2018-04-16T15:47:52+00:00
author: Ben Thompson
from: https://stratechery.com/2018/zillow-aggregation-and-integration/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3422 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-industries topics-real-estate concepts-aggregation-theory concepts-commoditizing-suppliers concepts-company-structure concepts-disruption-theory concepts-distribution-and-transaction-costs concepts-incentives concepts-modular-versus-integrated concepts-owning-customer-relationship companies-zillow" id="post-3422">
 <header class="entry-header">
  <h1 class="entry-title">
   Zillow, Aggregation, and Integration
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-04-16T08:47:52-07:00">
     Monday, April 16, 2018
    </time>
    <time class="updated" datetime="2019-03-06T16:38:31-08:00">
     Wednesday, March 6, 2019
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
   Last Friday something truly remarkable happened: a public company that had grown its valuation from $539 million to nearly $7 billion in seven years announced it was changing its business model. The company was Zillow, and the stock market quickly put a price on how big of a risk the company was taking; from
   <a href="https://www.cnbc.com/2018/04/13/zillow-shares-plunge-on-plan-to-start-flipping-homes-rival-opendoor.html">
    CNBC
   </a>
   :
  </p>
  <blockquote>
   <p>
    Zillow shares plunged 9 percent on Friday after the online real estate database company announced it will begin buying and selling homes, a capital-intensive endeavor. With Zillow’s new program, announced on Thursday, home sellers in the test markets of Phoenix and Las Vegas will be able to use Zillow’s platform to compare offers from potential buyers — and Zillow. When Zillow purchases a home, it will aim to quickly flip the home, making updates and repairs and listing it as soon as possible. An agent will represent Zillow in each transaction.
   </p>
   <p>
    “We’re entering that market and think we have huge advantages because we have access to the huge audience of sellers and buyers,” Zillow CEO Spencer Rascoff said on CNBC’s “Squawk Alley.” “After testing for a year in a marketplace model, we’re ready to be an investor in our own marketplace.”
   </p>
   <p>
    But investors are less enthusiastic. Flipping homes, a model that’s being utilized by start-up Opendoor, is very different than operating an internet marketplace. It carries additional risk associated with buying and selling homes and requires a hefty investment in operations. And it also potentially puts Zillow in direct competition with the realtors on its platform. Zillow sank $5, or 9.3 percent, to $48.77 as of mid-day on Friday, knocking more than $900 million off its stock market value.
   </p>
  </blockquote>
  <p>
   That’s a lot of money to bet on…well, what exactly? What kind of company is Zillow today, and what kind of company does it hope to be in the future?
  </p>
  <h4>
   Zillow and Aggregation Theory
  </h4>
  <p>
   Last fall I refined
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregation Theory
   </a>
   by
   <a href="https://stratechery.com/2017/defining-aggregators/">
    Defining Aggregators
   </a>
   . To quickly summarize, I wrote that Aggregators as a whole share three characteristics:
  </p>
  <ul>
   <li>
    A direct relationship with users
   </li>
   <li>
    Zero marginal costs to serve those users
   </li>
   <li>
    Demand-driven multi-sided networks that result in decreasing acquisition costs
   </li>
  </ul>
  <p>
   This allows Aggregators to leverage an initial user experience advantage with a relatively small number of users into power over some number of suppliers, which come onto the platform on the Aggregator’s terms, enhancing the user experience and attracting more users, setting off a virtuous cycle of an ever-increasing user base leading to ever-increasing power over suppliers.
  </p>
  <p>
   Not all Aggregators are the same, though; they vary based on the cost of supply:
  </p>
  <ul>
   <li>
    Level 1 Aggregators have to acquire their supply and win by leveraging their user base into superior buying power (i.e. Netflix).
   </li>
   <li>
    Level 2 Aggregators do not own their supply but incur significant marginal costs in scaling supply (i.e. Airbnb or Uber).
   </li>
   <li>
    Level 3 Aggregators have zero supply costs (i.e. App Stores or social networks)
   </li>
  </ul>
  <p>
   Where, then, does Zillow fit? It certainly has the hallmarks of an Aggregator: users go to Zillow directly to look for homes, Zillow incurs zero marginal costs to serve those users, and the company has created a two-sided market where its suppliers (home sellers) are incentivized to come onto the platform on Zillow’s terms in order to reach Zillow’s end users, thus making the platform more attractive to those end users.
  </p>
  <p>
   The question of supply is more complicated; in North America real estate listings are gathered in hundreds of local multiple listing services (MLSs) run by local realtor associations, and access is restricted to brokers in that local region. Redfin got access to those listings by becoming a broker itself, but Zillow, at least at the beginning, relied on brokers uploading listings themselves — which they were willing to do, thanks to the userbase Zillow had already built up thanks in part to its Zestimate house valuation tool.
  </p>
  <p>
   This was Aggregation Theory in action: gain users with a new kind of user experience, then leverage that user base to get suppliers to come onto your platform on your terms, further improving the user experience. And, eventually, Zillow was able to parlay that user base into direct access to those MLS services, first via the owners of Realtor.com, and then,
   <a href="https://www.housingwire.com/articles/33482-d-day-arrives-for-zillow-and-listhub">
    when they pulled the agreement
   </a>
   , via local MLSs and brokers directly who
   <a href="http://www.inman.com/2015/04/07/deal-or-no-deal-mlss-talk-terms-with-zillow-group/">
    understood how important it was to stay on Zillow
   </a>
   .
  </p>
  <p>
   Interestingly, this means that Zillow arguably started out as a Level 3 Aggregator, and then stepped down to a hybrid of Level 1 and Level 2: cutting all of those deals is expensive, and the company does pay for the data, but it’s not exclusive by any means. And this, by extension, gets at why Zillow, despite having so many of the characteristics of an Aggregator, just doesn’t seem nearly as important as companies like Netflix or Airbnb or Facebook: it has accommodated itself to the real estate industry; it hasn’t transformed it.
  </p>
  <h4>
   The Real Estate Media Company
  </h4>
  <p>
   The first sentence in
   <a href="https://www.sec.gov/Archives/edgar/data/1334814/000119312511100697/ds1.htm">
    Zillow’s S-1
   </a>
   was its mission statement: “Our mission is to build the most trusted and vibrant home-related marketplace to empower consumers with information and tools to make intelligent decisions about homes.” In 2014, though, the company coined a new description for itself: a “real-estate media company.”
  </p>
  <p>
   The occasion was the purchase of Trulia: both companies made money selling ads to real estate agents eager to get their listings at the top of the two real estate aggregators that were the top two starting points for real estate searches; by emphasizing they were both media companies Zillow could claim they both had many competitors and weren’t competitive with real estate agents all at the same time.
  </p>
  <p>
   It also had the benefit of being true (until last week). The real estate business in North America has long been an expensive quagmire, for reasons I laid out
   <a href="https://stratechery.com/2014/daily-update-zillow-acquires-trulia-samsung-delays-tizen-china-investigating-microsoft/">
    when Zillow bought Trulia
   </a>
   :
  </p>
  <blockquote>
   <ul>
    <li>
     While real estate transactions in the aggregate are very frequent, for individual buyers and sellers they are very rare. Thus there is little incentive to push for a simpler solution.
    </li>
    <li>
     A real estate transaction is usually the largest transaction most buyers and sellers will undertake, which makes them very risk averse and unwilling to try an unconventional service.
    </li>
    <li>
     There is a lot of regulation and paperwork associated with a real estate transaction, where assistance is very valuable. And, as just noted, transactions are rare, which means there is little incentive to learn how to deal with said regulations and paperwork on your own.
    </li>
   </ul>
  </blockquote>
  <p>
   Combine the reticence of consumers to push for change with the local realtor association-controlled MLSs, and a willingness by realtors to punish anyone changing the status quo (by not showing a house, or pointing out flaws that would kill a sale), and the best outcome for Zillow was to be an aggregator but not an integrator: the company was completely removed from the purchase process.
  </p>
  <h4>
   Integration and Aggregation
  </h4>
  <p>
   This gets at why Zillow, for all of its success, seems so underwhelming compared to other Aggregators. One of the key theories underpinning Aggregation Theory is Clayton Christensen’s Conservation of Attractive Profits, which
   <a href="https://stratechery.com/2015/netflix-and-the-conservation-of-attractive-profits/">
    I explored in the context of Netflix
   </a>
   while developing the theory:
  </p>
  <blockquote>
   <p>
    The Law of Conservation of Attractive Profits
    <a class="footnote-link footnote-identifier-link" href="#footnote_0_3422" id="identifier_0_3422" title="Later renamed the Law of Conservation of Modularity">
     1
    </a>
    [was] first explained by Clayton Christensen in his 2003 book
    <a href="http://www.amazon.com/Innovators-Solution-Creating-Sustaining-Successful-ebook/dp/B000U684Y8/ref=tmm_kin_swatch_0?_encoding=UTF8&amp;sr=&amp;qid=">
     The Innovator’s Solution
    </a>
    :
   </p>
   <blockquote>
    <p>
     Formally, the law of conservation of attractive profits states that in the value chain there is a requisite juxtaposition of modular and interdependent architectures, and of reciprocal processes of commoditization and de-commoditization, commoditization, that exists in order to optimize the performance of what is not good enough. The law states that when modularity and commoditization cause attractive profits to disappear at one stage in the value chain, the opportunity to earn attractive profits with proprietary products will usually emerge at an adjacent stage.
    </p>
   </blockquote>
   <p>
    That’s a bit of a mouthful, but the example that follows in the book shows how powerful this observation is:
   </p>
   <blockquote>
    <p>
     If you think about it in a hardware context, because historically the microprocessor had not been good enough, then its architecture inside was proprietary and optimized and that meant that the computer’s architecture had to be modular and conformable to allow the microprocessor to be optimized. But in a little hand held device like the RIM BlackBerry, it’s the device itself that’s not good enough, and you therefore cannot have a one-size-fits-all Intel processor inside of a BlackBerry, but instead, the processor itself has to be modular and conformable so that it has on it only the functionality that the BlackBerry needs and none of the functionality that it doesn’t need. So again, one side or the other needs to be modular and conformable to optimize what’s not good enough.
    </p>
   </blockquote>
   <p>
    Did you catch that? That was Christensen, a full four years before the iPhone, explaining why it was that Intel was doomed in mobile even as ARM would become ascendent.
    <a class="footnote-link footnote-identifier-link" href="#footnote_1_3422" id="identifier_1_3422" title="I have my differences with Christensen, but as I’ve said repeatedly my criticism comes from an attempt to build on his brilliant work, not tear it down">
     2
    </a>
    When the basis of competition changed away from pure processor performance to a low-power
    <em>
     system
    </em>
    the chip architecture needed to switch from being integrated (Intel) to being modular (ARM), the latter enabling an integrated BlackBerry then, and an integrated iPhone four years later.
    <a class="footnote-link footnote-identifier-link" href="#footnote_2_3422" id="identifier_2_3422" title="As I’ve noted, the iPhone is in fact modular at the component level; the integration is between the completed phone and the software. Not appreciating that the point of integration (or modularity) can be anywhere in the value chain is, I believe, at the root of a lot of mistaken analysis about the iPhone in particular">
     3
    </a>
   </p>
   <figure aria-describedby="caption-attachment-1750" class="wp-caption aligncenter" id="attachment_1750" style="width: 640px">
    <a href="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212.png">
     <img alt="The PC is a modular system whose integrated parts earn all the profit. Blackberry (and later iPhones) on the other hand was an integrated system that used modular pieces." class="size-large wp-image-1750" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212-300x225.png 300w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212-768x576.png 768w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212-840x630.png 840w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-212.png 2048w" width="640"/>
    </a>
    <figcaption class="wp-caption-text" id="caption-attachment-1750">
     The PC is a modular system whose integrated parts earn all the profit. Blackberry (and later iPhones) on the other hand was an integrated system that used modular pieces. Do note that this is a drastically simplified illustration.
    </figcaption>
   </figure>
   <p>
    More broadly, breaking up a formerly integrated system — commoditizing and modularizing it — destroys incumbent value while simultaneously allowing a new entrant to integrate a different part of the value chain and thus capture new value.
   </p>
   <figure aria-describedby="caption-attachment-1749" class="wp-caption aligncenter" id="attachment_1749" style="width: 640px">
    <a href="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213.png">
     <img alt="Commoditizing an incumbent's integration allows a new entrant to create new integrations -- and profit -- elsewhere in the value chain." class="size-large wp-image-1749" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213-300x225.png 300w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213-768x576.png 768w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213-840x630.png 840w, https://stratechery.com/wp-content/uploads/2015/07/stratechery-Year-One-213.png 2048w" width="640"/>
    </a>
    <figcaption class="wp-caption-text" id="caption-attachment-1749">
     Commoditizing an incumbent’s integration allows a new entrant to create new integrations — and profit — elsewhere in the value chain.
    </figcaption>
   </figure>
   <p>
    This is exactly what is happening with Airbnb, Uber, and Netflix too.
   </p>
  </blockquote>
  <p>
   This is the original piece of
   <em>
    Aggregation Theory
   </em>
   that was missing from last year’s
   <em>
    Defining Aggregators
   </em>
   : it is one thing to sit on top of an existing industry and, well, be a media company/lead generation tool. There have been a whole host of businesses that did exactly that, and while there is plenty of money to be made, without some sort of integration into the value chain of the industry itself they simply aren’t transformative. To put it another way, aggregation doesn’t transform value chains; integration does.
  </p>
  <p>
   Why aggregation matters is that it is the means by which new integrations are achieved:
  </p>
  <ul>
   <li>
    Netflix leveraged its position as an aggregator of video content into the integration of the customer relationship and content creation, undoing the integration of linear channels and content creation
   </li>
   <li>
    Airbnb/Uber and other similar services integrate the customer relationship with the driver/homeowner relationship, undoing the integration of cars/property with payment
   </li>
   <li>
    Google and Facebook integrated content discovery with advertising, undoing the integration of editorial and advertising
   </li>
  </ul>
  <p>
   More broadly — and this really gets at why Zillow is different — Aggregators that change industries (including Aggregator-like Amazon and Apple that deal with physical goods) integrate the customer relationship with however it is their industry generates revenue; Zillow, on the other hand, was completely divorced from the home selling-and-buying process.
  </p>
  <h4>
   The Threat to Zillow — and the Opportunity
  </h4>
  <p>
   Again, not all companies need to be Aggregators, and as I noted at the beginning, Zillow has become a very successful company by getting half-way there. And, to return to that Daily Update about their purchase of Trulia, I didn’t think it was even possible for them to go all the way:
  </p>
  <blockquote>
   <p>
    So then, perhaps this deal isn’t anticompetitive, but rather the key to building a company big enough to finally shake up the homebuying process? That’s Brad Stone’s argument
    <a href="http://www.businessweek.com/articles/2014-07-28/zillow-trulia-merger-will-it-change-how-we-buy-and-sell-real-estate">
     in Bloomberg Businessweek
    </a>
    …But remember, Zillow/Trulia are marketing tools; who is paying for that tool? Stone has the answer in the next paragraph:
   </p>
   <blockquote>
    <p>
     The companies, which rely on advertising from real estate agents for the bulk of their revenues, are being careful about how they discuss the future of their combined efforts.
    </p>
   </blockquote>
   <p>
    What Stone characterizes as “careful” I characterize “prudent” and “truthful”, because let’s be honest: Zillow/Trulia are not going to bite the hand that feeds them. Nor should they! It would be irresponsible to their shareholders, employees, and all their other stakeholders. It’s very easy to fantasize about disruption; it’s much more productive to simply follow the money. (This is why Redfin is the more interesting company in this space; they use their own network of real estate agents. It’s also why they are much smaller, despite having had a head start.)
   </p>
  </blockquote>
  <p>
   This is why last week’s news was such a surprise, to me anyways; granted, Zillow had been experimenting with
   <a href="https://www.housingwire.com/articles/40191-gamechanger-zillow-getting-into-home-selling-business-with-instant-offers">
    facilitating sales to investors
   </a>
   , but to fundamentally change your capital structure, margin profile, and compete with your customers in one fell swoop feels like something else entirely — and Wall Street agreed!
  </p>
  <p>
   I can, though, see where Zillow is coming from: no one thinks the North American real estate market is the way it is because that is somehow optimal or good for consumers; the only folks that benefit from the status quo are real estate agents that continue to collect 6% of the purchase price even as their responsibilities, particularly in the case of the buying agent, run in the opposite direction of their incentives. Zillow did well to capture a portion of that 6% for itself through its realtor ad model, but that only meant that Zillow was as dependent on the status quo as the realtors.
  </p>
  <p>
   To be sure, Zillow has long been a better bet than Redfin, which has admirably IPO’d with a business that basically adds a tech layer (and thus superior lead generation) to a traditional real estate agency; the reality is that simply adding a tech layer doesn’t change industries — that requires new business models. This, though, is where Opendoor, the startup
   <a href="https://stratechery.com/2016/opendoor-a-startup-worth-emulating/">
    I wrote about in 2016
   </a>
   , is compelling: buying houses with the click-of-a-button solves a major problem for sellers, the most disadvantaged party in the entire value chain under the status quo (and thus the most open to something new). And, by definition, it means the company (and competitors like
   <a href="https://www.offerpad.com/">
    OfferPad
   </a>
   ) are involved with the transaction that drives the value chain — the actual buying and selling of homes.
  </p>
  <p>
   Make no mistake,
   <a href="https://stratechery.com/2016/opendoor-follow-up-fitbit-buys-pebble-assets-gopro-closes-entertainment-unit/">
    the business model is risky
   </a>
   , but that is another way of saying the potential return is massive as well: truly becoming a market maker for an industry that does $900 billion worth of transactions every year has massive upside. And, by extension, massive downside for the status quo — which again, includes Zillow. That is one reason to act.
  </p>
  <p>
   Even so, that might not have been enough for Zillow to make such a shift: remember, this is a public company accountable to shareholders, and sometimes doubling down is the most prudent course of action. That, though, is why I spent so much time discussing integration: there is a massive amount of upside for Zillow in this move as well.
  </p>
  <p>
   Remember, Zillow is in nearly every respect already an Aggregator: it is by far the number one place people go when they want to look for a new house, and at a minimum the starting point for research when they want to sell one. They own the customer relationship! What has always been missing is the integration with the purchase itself — until last week. Zillow is making a play to be a true Aggregator — one that transforms its industry by integrating the customer relationship with the most important transaction in its respective value chain — by becoming directly involved in the buying and selling of houses.
  </p>
  <h4>
   The Zillow Experiment
  </h4>
  <p>
   This absolutely could go sidewise: Zillow is already being hammered in the stock market — investors aren’t generally fans of high-margin companies entering low-margin businesses, with huge amounts of volatility risk to boot. Moreover, Zillow is embracing a model that, should it be successful, tears down the status quo: this will not only enrage Zillow’s customers, but also endanger Zillow’s primary revenue stream.
  </p>
  <p>
   Here, though, Zillow’s status as an almost-Aggregator looms large: we now have years’ worth of evidence that realtors will do what it takes to ensure their listings appear on Zillow, because Zillow controls end users. It very well may be the case that realtors will find themselves with no choice but to continue giving Zillow the money the company needs to disrupt their industry.
  </p>
  <p>
   I will certainly be watching closely: how Zillow fares will result in lessons that may be applicable broadly. Think of Spotify, for example: I was
   <a href="https://stratechery.com/2018/lessons-from-spotify/">
    a bit bearish on the company last month
   </a>
   because of the power of Spotify’s suppliers; the bull case is that Spotify’s ownership of the customer relationship will allow the company to build out the capability to sidestep the record labels even as the record labels can’t punish Spotify because they need them. That’s exactly what Zillow is testing right now: just how much power comes from being an Aggregator, and how much an industry can be transformed when that power is wielded.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3422">
    Later renamed the Law of Conservation of Modularity [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3422">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_3422">
    I
    <a href="https://stratechery.com/2013/clayton-christensen-got-wrong/">
     have my differences with Christensen
    </a>
    , but as I’ve said repeatedly my criticism comes from an attempt to build on his brilliant work, not tear it down [
    <a class="footnote-link footnote-back-link" href="#identifier_1_3422">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_3422">
    <a href="https://stratechery.com/2015/apples-new-market/">
     As I’ve noted
    </a>
    , the iPhone is in fact modular at the component level; the integration is between the completed phone and the software. Not appreciating that the point of integration (or modularity) can be anywhere in the value chain is, I believe, at the root of a lot of mistaken analysis about the iPhone in particular [
    <a class="footnote-link footnote-back-link" href="#identifier_2_3422">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3422" href="https://stratechery.com/2018/zillow-aggregation-and-integration/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3422" href="https://stratechery.com/2018/zillow-aggregation-and-integration/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3422" href="https://stratechery.com/2018/zillow-aggregation-and-integration/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/zillow-aggregation-and-integration/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

