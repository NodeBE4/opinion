---
layout: post
title: "Uber’s Bundles"
date: 2018-08-28T14:20:36+00:00
author: Ben Thompson
from: https://stratechery.com/2018/ubers-bundles/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3661 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-ride-sharing topics-self-driving topics-transportation concepts-aggregation-theory concepts-bundling-and-unbundling concepts-business-models concepts-horizontal-versus-vertical concepts-incentives concepts-making-money concepts-owning-customer-relationship companies-google companies-lyft companies-moviepass companies-toyota companies-uber companies-waymo" id="post-3661">
 <header class="entry-header">
  <h1 class="entry-title">
   Uber’s Bundles
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-08-28T07:20:36-07:00">
     Tuesday, August 28, 2018
    </time>
    <time class="updated" datetime="2018-09-07T15:16:07-07:00">
     Friday, September 7, 2018
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
   With Uber, nothing is easy.
  </p>
  <p>
   Start with profitability, or the lack thereof: two weeks ago the company reported its quarterly “earnings”,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_3661" id="identifier_0_3661" title="Uber voluntarily shares high level numbers with media outlets (the Wall Street Journal has collected them here), but the numbers are selective, unaudited, and come with no financial documents">
    1
   </a>
   and once again the losses were massive: $891 million on $2.8 billion in revenue. Clearly the business is failing, no?
  </p>
  <p>
   Well, like I said, it’s not that easy: unlike a company
   <a href="https://stratechery.com/2018/moviepass-finally-value-chains-and-unit-costs-atlassian-and-slack/">
    like MoviePass
   </a>
   , Uber has positive unit economics — that is, the company makes money on each ride. This is clear intuitively: Uber keeps somewhere between 20%–30% of each fare,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_3661" id="identifier_1_3661" title="The company now deducts the amount spent on driver incentives and promotions, in addition to driver earnings on a percentage basis, from its overall bookings; this is a very welcome improvement to the company’s reporting. Previously it was unclear whether or not this spending was accounted for correctly">
    2
   </a>
   from which it pays insurance costs, credit card fees, etc., and keeps the rest.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_3661" id="identifier_2_3661" title="You can see an old breakdown from a 2015 leaked document here ">
    3
   </a>
   According to last quarter’s numbers “the rest” totaled $1.5 billion, for a gross profit margin of 55% (13% of Uber’s total bookings). Moreover, margin is improving — it was 47% a year ago — mostly because Uber is managing to both take a higher percentage of fares even as it has reduced its spending on promotions and driver incentives (Cost of Revenue, meanwhile, appears to correspond very closely to gross bookings).
  </p>
  <p>
   The problem for Uber is trifold: first, the company continues to spend massive amounts of money on “below-the-line” costs: $2.2 billion for Operations and Support, Sales and Marketing,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_3661" id="identifier_3_3661" title="As noted in an earlier footnote, Uber does appear to be deducting promotional expenses that apply to specific rides from booking, so these are non-unit marketing costs">
    4
   </a>
   Research and Development, General and Administrative, and Depreciation and Amortization. Second, it seems likely that a good portion of the company’s improving margin stems from exiting more difficult markets like
   <a href="https://stratechery.com/2017/uber-and-yandex-grab-raises-2-billion-softbank-ride-sharing-and-capital/">
    Russia
   </a>
   and
   <a href="https://stratechery.com/2018/uber-sells-out-in-southeast-asia-ubers-self-driving-tragedy-doing-the-right-thing-inevitably/">
    Southeast Asia
   </a>
   , as opposed to improvements in its core markets in the United States, Europe, and Oceania. And most concerning of all,
   <a href="https://www.usatoday.com/story/tech/talkingtech/2018/05/15/uber-lost-market-share-lyft-after-year-scandals-emarketer-says/612348002/">
    Lyft seems to be outgrowing Uber
   </a>
   .
  </p>
  <h4>
   Uber’s Lyft Problem
  </h4>
  <p>
   Lyft is a problem for Uber with riders, investors, and drivers.
  </p>
  <p>
   From a rider perspective, Lyft has, unsurprisingly, benefited from the
   <a href="https://stratechery.com/2017/ubers-new-ceo/">
    self-inflicted disaster that was 2017
   </a>
   (although to be fair, 2017 was the year of revelations of problems that had been in place
   <a href="https://stratechery.com/2017/crisis-at-uber-ubers-culture-who-is-responsible/">
    for years
   </a>
   ). The consumer benefit of services like Uber and Lyft has always been clear, and Uber’s aggressive expansion paid off when the service became the default choice for a large portion of the market, something that is critical for a commodity offering with two-sided network effects. The problem is that Uber gave riders plenty of reasons to question their default choice with not just a sexual harassment scandal, and not just a lawsuit alleging the theft of intellectual property from Google, and not just allegations of brazenly circumventing local regulators, but all three (and honestly, this understates things).
  </p>
  <p>
   This was particularly problematic because that two-sided network effect wasn’t that strong: sure, Uber was more likely to monopolize driver time given its larger user base, but as long as drivers are independent contractors Uber can’t do anything to prevent them from multihoming, that is, being available on both Uber and Lyft’s networks at the same time. Lyft was ready-and-able to absorb unhappy Uber riders, because they were effectively using Uber’s drivers to accommodate them.
  </p>
  <p>
   The timing could not have been worse: it was only a few months prior that
   <a href="https://stratechery.com/2016/ubers-problematic-google-deal-lyfts-sales-pitch-twitters-live-hail-mary/">
    Lyft appeared to be for sale
   </a>
   and
   <a href="https://stratechery.com/2016/ubers-problematic-google-deal-lyfts-sales-pitch-twitters-live-hail-mary/">
    unable to find a buyer
   </a>
   ; it seemed that former-CEO Travis Kalanick was going to win one of his biggest gambles, turning down an offer to acquire Lyft in 2014 in exchange for 18% of Uber.
  </p>
  <p>
   It proved to be Kalanick’s biggest mistake, at least from a business perspective: within weeks of the Uber scandal explosion Lyft
   <a href="https://stratechery.com/2017/microsoft-ebay-and-tencent-invest-in-flipkart-the-indian-e-commerce-market-lyft-raises-500-million/">
    raised $600 million
   </a>
   , and a month later
   <a href="https://stratechery.com/2017/the-uber-disaster-round-up-waymo-and-lyft-form-partnership/">
    formed a partnership with Waymo
   </a>
   , Google’s self-driving car company. Suddenly the best way to invest in the most promising self-driving technology was Lyft; unsurprisingly Lyft has since raised an additional $2.3 billion, including an investment from Google Capital.
  </p>
  <h4>
   Uber’s Competitive Context
  </h4>
  <p>
   The reason this context matters is that a proper analysis of Uber’s business is fundamentally different today than it was two years ago — or four years ago, when I wrote
   <a href="https://stratechery.com/2014/uber-fights/">
    Why Uber Fights
   </a>
   . That is when I made the argument that even though Uber’s two-sided network effects were relatively weak thanks to the lack of driver lock-in, the fact that ride-sharing was a commodity market meant its head start and brand would lead to slow-but-steady growth in marketshare, eventually starving Lyft due to an inability to raise funds based on increasingly inferior financial results.
  </p>
  <p>
   I stand by that analysis: it is exactly what happened, and Uber came very close to knocking Lyft out. At the same time, it is also no longer applicable, because Lyft no longer has any problem raising money, while Uber appears to be having a hard time holding onto its market share (as an indirect indicator of Uber’s waning power with consumers, note Uber’s
   <a href="https://stratechery.com/2018/uber-loses-in-new-york-city-the-modern-medallion-driver-pay-floors/">
    recent inability to defeat a cap on ride-sharing in New York
   </a>
   , after doing just that
   <a href="https://stratechery.com/2015/in-defense-of-markets-the-qualcomm-mess-uber-and-de-blasio/">
    three years ago
   </a>
   ). To that end, the prospect of Lyft being present in the market for the foreseeable future means Uber’s needs a new strategy than simply squeezing Lyft dry.
  </p>
  <p>
   Welcome to bundles, Uber-style.
  </p>
  <h4>
   Uber’s Consumer Bundle: Transportation-as-a-Service
  </h4>
  <p>
   Uber CEO Dara Khosrowshahi laid out a new vision for the Uber app in
   <a href="https://www.recode.net/2018/5/31/17390076/uber-ceo-dara-khosrowshahi-code-conference">
    an interview with Kara Swisher
   </a>
   earlier this year at the Code Conference:
  </p>
  <blockquote>
   <p>
    <strong>
     DK:
    </strong>
    We are thinking about alternative forms of transport. If you look at Jump,
    <a href="https://stratechery.com/2018/uber-acquires-jump-background-on-bikes-ubers-new-strategy/">
     the dockless bicycle startup Uber acquired
    </a>
    earlier this year, the average length of a trip at Jump is 2.6 miles. That is, 30 to 40 percent of our trips in San Francisco are 2.6 miles or less. Jump is much, much cheaper than taking an UberX. To some extent it’s like, “Hey, let’s cannibalize ourselves.” Let’s create a cheaper form of transportation from A to B, and for you to come to Uber, and Uber not just being about cars, and Uber not being about what the best solution for us is, but really being about the best solution for here.
   </p>
   <p>
    <strong>
     KS:
    </strong>
    So bikes, scooters?
   </p>
   <p>
    <strong>
     DK:
    </strong>
    Bikes, perhaps scooters. I wanna get the bus network on. I wanna get the BART, or the Metro, etc., onto Uber. So, any way for you to get from point A to B.
   </p>
   <p>
    <strong>
     KS:
    </strong>
    Wait, you wanna start your own BART? No.
   </p>
   <p>
    <strong>
     DK:
    </strong>
    No, no, no. We’re not gonna go vertical. Just like Amazon sells third-party goods, we are going to also offer third-party transportation services. So, we wanna kinda be the Amazon for transportation, and we want to offer the BART as an alternative. There’s a company called Masabi that is connecting Metro, etc., into a payment system. So we want you to be able to say, “Should I take the BART? Should I take a bike? Should I take an Uber?” All of it to be real-time information, all of it to be optimized for you, and all of it to be done with the push of a button.
   </p>
   <p>
    <strong>
     KS:
    </strong>
    So, any transportation?
   </p>
   <p>
    <strong>
     DK:
    </strong>
    Any transportation, totally frictionless, real time.
   </p>
  </blockquote>
  <p>
   In case you had any question about how serious Khosrowshahi is about the concept, he told the
   <a href="https://www.ft.com/content/986d878a-a7c4-11e8-8ecf-a7ae1beff35b">
    Financial Times in an interview
   </a>
   yesterday:
  </p>
  <blockquote>
   <p>
    During rush hour, it is very inefficient for a one-tonne hulk of metal to take one person 10 blocks…We’re able to shape behaviour in a way that’s a win for the user. It’s a win for the city. Short-term financially, maybe it’s not a win for us, but strategically long term we think that is exactly where we want to head…
   </p>
   <p>
    We are willing to trade off short-term per-unit economics for long-term higher engagement…I’ve found in my career that engagement over the long term wins wars and sometimes it’s worth it to lose battles in order to win wars.
   </p>
  </blockquote>
  <p>
   This is very much a bundle, and
   <a href="http://cdixon.org/2012/07/08/how-bundling-benefits-sellers-and-buyers/">
    like any bundle
   </a>
   , what makes the economics work in the long run is earning a larger total spend from consumers even if they spend less on any particular item. To that end, as Khosrowshahi notes, the real enemy is the car in the garage; to the extent Uber can replace
   <em>
    that
   </em>
   the greater its opportunity is.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372.jpg">
    <img alt="Uber's consumer bundle" class="aligncenter size-large wp-image-3662" height="378" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372-1024x604.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372-1024x604.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372-300x177.jpg 300w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372-768x453.jpg 768w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.372-1068x630.jpg 1068w" width="640"/>
   </a>
  </p>
  <p>
   Moreover, the more that Uber can handle all of an end user’s transportation needs through the sort of complexity inherent in building such a service, the stickier Uber becomes for consumers. Granted,
   <a href="https://www.recode.net/2018/6/7/17435634/lyft-shared-rides-transit-uber-google-maps">
    Lyft is promising to build the same thing
   </a>
   , but Uber is a bit ahead and still has the bigger war chest, which may prove more helpful in a land grab as opposed to the current war of attrition. Moreover, Uber still has a significant geographic advantage over Lyft, which only
   <a href="https://www.recode.net/2017/11/13/16643254/lyft-international-expansion-toronto-canada-uber">
    just started
   </a>
   expanding internationally, making it a better option for travelers.
  </p>
  <h4>
   Uber’s Driver Bundle: Uber Eats
  </h4>
  <p>
   Uber Eats, meanwhile, has the potential to be a very attractive business in its own right: Khosrowshahi
   <a href="https://www.recode.net/2018/5/31/17390076/uber-ceo-dara-khosrowshahi-code-conference">
    said at Code Conference
   </a>
   that the business has “a $6 billion bookings run rate, growing over 200 percent.” Uber takes 30% of that ($1.6 billion), as well as a $5 delivery fee from customers, out of which it pays drivers a pickup fee, drop-off fee, and per-mile rate (of which it keeps 25%);
   <a href="https://www.theinformation.com/articles/how-uber-eats-became-a-hit-business">
    according to The Information
   </a>
   , the service isn’t making money yet, but it is much more profitable than Uber’s ride-sharing business was at a similar scale.
  </p>
  <p>
   Leaving aside the drivers for a moment, this is a classic
   <a href="https://stratechery.com/2015/aggregation-theory/">
    aggregation
   </a>
   play, where owning consumer demand gives Uber the ability to attract suppliers, increasing consumer demand in a virtuous cycle. Jason Droege, the Uber Vice President and Head of UberEverything,
   <a href="https://www.eater.com/2018/6/29/17511590/uber-eats-jason-droege-eater-upsell-podcast-listen">
    told Eater in an interview
   </a>
   this past summer:
  </p>
  <blockquote>
   <p>
    I think that we’re all here to service the consumer, right? And the eater. And I think eaters today want convenience, they want value, they want flexibility, and they want choice. And delivery offers all of those things. And restaurants choose to participate in delivery. And so if they don’t believe it’s valuable as a channel to connect to their consumers, or maybe new consumers, or reach new people with their brand, then that’s okay. We’re here to provide a conduit between the two. Not to tell them how to run their business.
   </p>
  </blockquote>
  <p>
   It certainly is an open question as to whether services like Uber Eats help or hurt established restaurants; this
   <a href="https://www.newyorker.com/culture/annals-of-gastronomy/are-delivery-apps-killing-restaurants">
    New Yorker article
   </a>
   recounts a number of anecdotes about restauranteurs who are a bit fuzzy on exactly how much Uber Eats is costing them, much like Uber drivers that forget to account for the wear-and-tear on their cars. At the same time, Uber is creating entirely new opportunities for restaurants focused on delivery, just as it did for drivers that only wanted to work sometimes, or couldn’t find any other job at all, as well as companies to service them like
   <a href="https://hyrecar.com">
    HyreCar
   </a>
   .
  </p>
  <p>
   Moreover, Uber Eats has a leg-up in the space because of Uber itself: the latter can acquire customers from the former (both because of owned-and-operated advertising as well as reducing drop-off because Uber already has payment details), and all of those huge marketing and G&amp;A expenses from building out teams in every city Uber operates is easily leveraged for Uber Eats. This of course applies to driver acquisition costs as well.
  </p>
  <p>
   The biggest payoff, though, comes from effectively bundling opportunities for drivers. The problem for any standalone restaurant delivery app is that the vast majority of orders come at lunch and dinner, but the driver may wish to work at other times of the day as well. With Uber that is easy: just pick up riders (Uber drivers can drive for just Uber, just Uber Eats, or both). In other words, Uber has more and more ways to monopolize a driver’s time, to the driver’s benefit personally and Uber’s benefit competitively.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373.jpg">
    <img alt="Uber's driver bundle" class="aligncenter size-large wp-image-3664" height="443" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373-1024x708.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373-1024x708.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373-300x207.jpg 300w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373-768x531.jpg 768w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373-912x630.jpg 912w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.373.jpg 1877w" width="640"/>
   </a>
  </p>
  <p>
   To be sure a GrubHub driver, to take one Uber Eats competitor at random, could also drive for Lyft (or Uber, for that matter), but that is where
   <a href="https://therideshareguy.com/the-best-strategies-and-hacks-for-uber-quest/">
    rewarding drivers for a certain number of rides
   </a>
   in a given time period is particularly effective: because drivers can complete their “Quests” with Uber ride-sharing trips or Uber Eats trips, it often makes more sense to simply stick with Uber.
  </p>
  <p>
   More broadly, the challenge Uber faces with drivers derives from the same fungibility that makes the service possible in the first place. To that end, the best way to approach the driver market is not to compete against this reality but to embrace it, and having multiple services that utilize the same driver pool accomplishes exactly that.
  </p>
  <h4>
   Self-Driving Cars: A Bundle as the Way Forward
  </h4>
  <p>
   Self-driving cars, meanwhile, remain Uber’s white whale. The company received a
   <a href="https://www.wsj.com/articles/toyota-investing-500-million-in-uber-in-driverless-car-pact-1535393774">
    $500 million investment from Toyota yesterday
   </a>
   , and will work to incorporate its technology into Toyota Sienna minivans.
  </p>
  <p>
   This is definitely not the divesture of the unit that
   <a href="https://www.theinformation.com/articles/ubers-losses-mount-at-self-driving-car-unit?shared=04ea07bc5ebb0413">
    The Information says has been mooted
   </a>
   ; the unit has apparently cost Uber $2 billion over the last two years. Of course, as I noted above, that cost pales in comparison to the strategic impact of losing Google as a potential partner to Lyft.
  </p>
  <p>
   Still, it is never too late to consider doing the right thing: I
   <a href="https://stratechery.com/2017/waymos-lawsuit-against-uber-existential-logic-uber-and-googles-miscalculation/">
    continue to believe
   </a>
   that Uber’s investment in self-driving cars was a strategic mistake. Yes, its biggest cost is drivers, and a theoretical Google ride-sharing service could, were it at scale, completely undercut Uber, but that is the shallowest possible way to analyze how this market might have played out.
  </p>
  <p>
   Keep in mind the point I just made about drivers: sure it sounds attractive to convert your most expensive supply input, which must be paid on a marginal basis and that you don’t control, into a fixed cost that you have exclusive rights to. That, though, means massively more capital expenditures for a business that is currently losing around a billion dollars a
   <em>
    quarter
   </em>
   . Worse, it means competing with Google in an area — machine learning — where the search giant has a massive advantage.
  </p>
  <p>
   Moreover, in the long run it seems unlikely that Google would want to build up a vertical Uber competitor: it remains far more logical, both financially and in terms of Google’s historical margin profile, to license out their technology. To be sure, if Waymo’s technology were superior, they would have wholesale transfer pricing power, which
   <a href="https://25iq.com/2013/06/12/wholesale-transfer-pricing-and-the-free-parking-business-model/">
    Tren Griffin describes
   </a>
   as:
  </p>
  <blockquote>
   <p>
    The bargaining power of company A that supplies a unique product XYZ to Company B which may enable company A to take the profits of company B by increasing the wholesale price of XYZ
   </p>
  </blockquote>
  <p>
   Here’s the thing though: Uber is better equipped than anyone else to deal with Waymo’s potential ability to extract margin for superior self-driving technology. After all, the company is already paying for driving technology — the technology just happens to be a human!
  </p>
  <p>
   Of course that doesn’t mean Uber should settle for paying Waymo instead of drivers: the ride-sharing service remains the best possible way to go-to-market for everyone working on self-driving technology. To that end Uber should be willing to partner with anyone and everyone — and to share its technology with whoever wants it. In the long run Uber has market power thanks to its network, and it will best exploit that power to the extent it can engender competition amongst suppliers in the self-driving car space.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374.jpg">
    <img alt="Uber's self-driving bundle" class="aligncenter size-large wp-image-3663" height="315" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374-1024x504.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374-1024x504.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374-300x148.jpg 300w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374-768x378.jpg 768w, https://stratechery.com/wp-content/uploads/2018/08/Paper.stratechery-Year-One.374-1200x591.jpg 1200w" width="640"/>
   </a>
  </p>
  <p>
   Moreover, it seems certain that whenever self-driving cars come along (and
   <a href="https://www.theinformation.com/articles/waymos-big-ambitions-slowed-by-tech-trouble?shared=4596b7125469ea51">
    even Waymo is having trouble
   </a>
   ), they will not be suitable for all of the environments Uber operates in. That makes Uber uniquely suited to bundle self-driving car service with traditional Uber car service, as well as all of the other transportation services it plans to offer to consumers. This “bundle” will allow self-driving technology to come-to-market gradually when and where it makes sense, while still giving riders the confidence they can get from anywhere to anywhere.
  </p>
  <p>
   To be fair, Khosrowshahi has signaled the desire to partner with multiple self-driving partners, including Google. I suspect, though, that will be hard to accomplish as long as Uber is pursuing its own exclusive technology. To that end Khosrowshahi should cut the cord with Uber’s self-driving program sooner rather than later, or perhaps even open-source it; the money savings are in fact the second most important potential benefit.
  </p>
  <hr/>
  <p>
   There was a certain satisfying simplicity to the brutality of Uber’s original strategy under Kalanick: be as aggressive as possible to establish an early lead, and then leverage Uber’s seemingly limitless ability to raise money to spend its competitors into submission. In the end, though, that same brutality did Kalanick in, and his strategy along with it.
  </p>
  <p>
   That left Khosrowshahi with a much more complicated situation: not only did he need to fix Uber internally, he needed to create an entirely new strategy to win in a market that was fundamentally altered because of Uber’s crisis. The bundling of services for users, of opportunities for drivers, and ideally of technologies for self-driving makes sense as an alternative.
  </p>
  <p>
   This strategy is, though, befitting the nature of the situation, considerably more complicated, and the commensurate chances of success — and ultimately, of profitability — a fair bit lower. In other words, Uber’s boardroom drama may be over, but the company remains perhaps the most compelling in tech.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2018/uber-follow-up-globalfoundries-abandons-7nm-pricing-power-differentiation-and-integration/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3661">
    Uber voluntarily shares high level numbers with media outlets (the Wall Street Journal has collected them
    <a href="https://www.wsj.com/graphics/uber-financials/">
     here
    </a>
    ), but the numbers are selective, unaudited, and come with no financial documents [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3661">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_3661">
    The company now deducts the amount spent on driver incentives and promotions, in addition to driver earnings on a percentage basis, from its overall bookings; this is a very welcome improvement to the company’s reporting. Previously
    <a href="https://stratechery.com/2017/blue-apron-files-for-ipo-network-effects-and-customer-acquisition-costs-uber-concerns/">
     it was unclear
    </a>
    whether or not this spending was accounted for correctly [
    <a class="footnote-link footnote-back-link" href="#identifier_1_3661">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_3661">
    You can see an old breakdown from a 2015 leaked document
    <a href="https://www.foxbusiness.com/features/leaked-documents-show-ubers-cost-structure-best-performing-cities">
     here
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_2_3661">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_3661">
    As noted in an earlier footnote, Uber does appear to be deducting promotional expenses that apply to specific rides from booking, so these are non-unit marketing costs [
    <a class="footnote-link footnote-back-link" href="#identifier_3_3661">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3661" href="https://stratechery.com/2018/ubers-bundles/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3661" href="https://stratechery.com/2018/ubers-bundles/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3661" href="https://stratechery.com/2018/ubers-bundles/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/ubers-bundles/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

