---
layout: post
title: "The Super-Aggregators and the Russians"
date: 2017-09-18T12:56:58+00:00
author: Ben Thompson
from: https://stratechery.com/2017/the-super-aggregators-and-the-russians/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2742 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-gdpr topics-networks topics-regulation topics-search topics-social topics-technologies concepts-advertising concepts-aggregation-theory concepts-business-models concepts-distribution-and-transaction-costs concepts-evolution-of-technology concepts-politics concepts-technology-and-society concepts-the-social-epoch concepts-unintended-consequence companies-facebook companies-google" id="post-2742">
 <header class="entry-header">
  <h1 class="entry-title">
   The Super-Aggregators and the Russians
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-09-18T05:56:58-07:00">
     Monday, September 18, 2017
    </time>
    <time class="updated" datetime="2018-09-06T01:48:20-07:00">
     Thursday, September 6, 2018
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
   In August 2011, just a day or two into my career at Microsoft, I sat in on a monthly review meeting for Hotmail (now known as Outlook.com); the product manager running the meeting was going through the various geographies and their relevant metrics — new users, churn, revenue, etc. — and it was, well, pretty boring. It was only later that I realized just how astounding “boring” was; a small group of people in a conference room going over numbers that represented hundreds of millions of people and dollars in revenue, and most of us cared far more about what was on the menu for lunch.
  </p>
  <p>
   I’ve
   <a href="https://twitter.com/benthompson/status/854381355026702336">
    reflected on that meeting often
   </a>
   over the years, particularly when it comes to Facebook and controversies like
   <a href="https://stratechery.com/2016/facebook-versus-the-media/">
    censoring too much
   </a>
   ,
   <a href="https://stratechery.com/2017/facebook-content-guidelines-facebook-video-amazon-prime-video-on-apple-tv/">
    censoring too little
   </a>
   , or
   <a href="https://stratechery.com/2016/fake-news/">
    “fake news”
   </a>
   , and I was reminded of it again with
   <a href="https://twitter.com/markwarner/status/908431496737935361">
    this tweet
   </a>
   :
  </p>
  <div align="center">
   <blockquote class="twitter-tweet" data-lang="en">
    <p dir="ltr" lang="en">
     And they paid in RUBLES. Seriously.
     <a href="https://t.co/D35tvhUEcj">
      https://t.co/D35tvhUEcj
     </a>
    </p>
    <p>
     — Mark Warner (@MarkWarner)
     <a href="https://twitter.com/MarkWarner/status/908431496737935361">
      September 14, 2017
     </a>
    </p>
   </blockquote>
   <p>
   </p>
  </div>
  <p>
   Mark Warner, the senior Senator from Virginia, is referring to a Russian company, thought to be linked to the Kremlin’s propaganda efforts, having bought $100,000 worth of political ads on Facebook, some number of which directly mentioned 2016 presidential candidates Donald Trump and Hillary Clinton. Facebook has
   <a href="https://newsroom.fb.com/news/2017/09/information-operations-update/">
    released limited details about the ads
   </a>
   , likely due to its
   <a href="https://www.ftc.gov/sites/default/files/documents/cases/2012/08/120810facebookdo.pdf">
    2012 consent decree with the FTC
   </a>
   , which bars the company from unilaterally making private information public, as well as the problematic precedent of releasing information without a clear order compelling said release. To that end, it was reported over the weekend that special counsel Robert Mueller received
   <a href="https://www.wsj.com/articles/facebook-gave-special-counsel-robert-mueller-more-details-on-russian-ad-buys-than-congress-1505514552?mg=prod/accounts-wsj">
    a much more comprehensive set of data
   </a>
   from Facebook
   <a href="http://money.cnn.com/2017/09/15/media/facebook-mueller-ads/index.html">
    after obtaining a search warrant
   </a>
   .
  </p>
  <p>
   Even with all that context, though, I found Senator Warner’s tweet puzzling: how else would the propaganda group have paid? Facebook’s self-service ad portal lets you buy ads in 55 different currencies, including the Russian Ruble:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2742" id="identifier_0_2742" title="For what it’s worth, Stratechery has never actually taken out a Facebook ad, or any ad for that matter">
    1
   </a>
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-18-at-5.09.22-PM-1.png">
    <img alt="" class="aligncenter size-full wp-image-2744" height="428" sizes="(max-width: 923px) 100vw, 923px" src="https://stratechery.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-18-at-5.09.22-PM-1.png" srcset="https://stratechery.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-18-at-5.09.22-PM-1.png 923w, https://stratechery.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-18-at-5.09.22-PM-1-300x139.png 300w, https://stratechery.com/wp-content/uploads/2017/09/Screen-Shot-2017-09-18-at-5.09.22-PM-1-768x356.png 768w" width="923"/>
   </a>
  </p>
  <p>
   That, though, brought me back to that Hotmail meeting: that I, and probably many more in the tech industry, find the idea of Facebook selling ads in rubles to strangers to be utterly unremarkable, even as thousands find it equally outrageous and damning, is a reminder of just how unprecedented and misunderstood aggregators like Facebook continue to be, and what a challenge it will be to regulate them.
  </p>
  <h4>
   The Cellular Network Company
  </h4>
  <p>
   Senator Warner, it should be noted, is considered one of the most technologically literate people in the entire Senate — and
   <a href="https://en.wikipedia.org/wiki/List_of_current_members_of_the_United_States_Congress_by_wealth">
    the richest
   </a>
   . Warner originally made his fortune by
   <a href="https://www.theatlantic.com/magazine/archive/2006/05/the-man-with-the-golden-phone/304777/">
    facilitating the sale of cellular phone licenses
   </a>
   ; he then co-founded
   <a href="https://www.crunchbase.com/organization/columbia-capital">
    Columbia Capital
   </a>
   , a venture capital firm which specialized in cellular businesses: the firm’s early investments included Nextel, BroadSoft, and MetroPCS.
  </p>
  <p>
   A cellular network company is certainly a new kind of business that is similar to today’s tech giants in many respects:
  </p>
  <ul>
   <li>
    At a fundamental level, cellular network companies are about the movement of information — voice and text, in Warner’s era — not physical goods. Moreover, because this information is digital, there are no marginal distribution costs in its transfer. This is the same characteristic of companies like Google and Facebook.
   </li>
   <li>
    A cellular network company has massive fixed costs and minimal marginal costs; one more minute of talk time costs practically nothing to provide, unless the network is saturated, at which point significant capital investment is necessary. Today’s internet services are similar: marginal usage is effectively free, although significant capital investments in data centers are necessary (as well as significant ongoing bandwidth costs, which are effectively zero to serve any one individual but huge in aggregate).
   </li>
   <li>
    A cellular network company is, quite obviously, a network. That means the value of the service increases as the number of customers increases. This produces a powerful virtuous cycle in which new customers increase the value of the network such that it becomes attractive to new marginal customers, further increasing the value of the network for the next set of marginal customers; this “network effect” is the most common driver of the sort of “scalable advantage in customer acquisition costs” that I discussed
    <a href="https://stratechery.com/2017/ubers-new-ceo/">
     in the case of Uber
    </a>
    , and is a hallmark of Facebook in particular (but also Google and all of the aggregators).
   </li>
   <li>
    Cellular network companies have direct relationships with their customers.
   </li>
  </ul>
  <p>
   These four characteristics may seem familiar: they are all parts of
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregation Theory
   </a>
   , and I’ve written about each of those components in the two years since I first wrote about the theory.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2742" id="identifier_1_2742" title="Yes, I’m writing about Aggregation Theory again; I explain why I do so often here ">
    2
   </a>
   There is one more piece, though, that I have only mentioned in passing: zero transaction costs. This is the piece that apparently sets Facebook beyond Senator Warner’s understanding,
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2742" id="identifier_2_2742" title="Presuming his tweet was not as cynical as it very well might have been">
    3
   </a>
   and it is perhaps the key reason why Facebook and other aggregators are unlike any other company we have seen before; oh, and it explains this Russian ad buy.
  </p>
  <h4>
   Transaction Costs
  </h4>
  <p>
   Go back to the generic cellular network company I discussed above, and think about what is entailed in adding a new customer (and leaving aside the marketing expenditure to make them aware of and desirous of the service in the first place):
  </p>
  <ul>
   <li>
    Talk with the customer on the phone or in person
   </li>
   <li>
    Collect identifying details and run a credit check
   </li>
   <li>
    Provision a SIM card and/or a phone
   </li>
   <li>
    Receive payment
   </li>
   <li>
    Manage contract renewals and cancellations and other customer service
   </li>
  </ul>
  <p>
   While some of these activities could be automated, the reality is that the cost of customer management had a linear curve: more customers meant more costs. Moreover, these costs accumulated, limiting the natural size of any company; at some point the complexity of managing some finite number of customers across some finite number of geographic areas cost more than the marginal profit of adding one more customer, and that limited how big a company could grow (which, to be clear, could be very large indeed!).
  </p>
  <p>
   What makes aggregators unique, though, is that thanks to the Internet they have zero transaction costs: for Google, or Airbnb, or Uber, or Netflix, or Amazon, or the online travel agents, adding one more customer is as simple as adding one more row in a database. Everything else is automated, from sign-up to billing to the delivery of the service in question. This is why all of these companies are global, often from day one, and, as I explained in
   <a href="https://stratechery.com/2015/beyond-disruption/">
    Beyond Disruption
   </a>
   , why they start at the high end of a market and work their way down.
  </p>
  <p>
   Note that aggregators can deal with the physical world and still have zero transaction costs, at least on the consumer side: Airbnb deals with rooms, but bears no transaction costs when it comes to signing up new customers; Amazon and Uber are similar with regards to e-commerce and transportation, respectively. Netflix doesn’t deal in physical goods (beyond its old DVD business), although it does bear significant transaction costs when it comes to sourcing content (in addition to actually paying for the content), but when it comes to customers there are no marginal costs at all.
  </p>
  <p>
   Facebook and Google, though are a special case: they are (and yes, I know this is the least imaginative term ever) super-aggregators.
  </p>
  <h4>
   Super-Aggregators
  </h4>
  <p>
   What makes Facebook and Google unique is that not only do they have zero transaction costs when it comes to serving end users, they also have zero transaction costs when it comes to both suppliers and advertisers.
  </p>
  <p>
   Start with supply: not only is the vast majority of online content accessible to Google’s search engine (unsurprisingly, the biggest exception is Facebook), but in fact that content
   <em>
    wants
   </em>
   to be discovered by Google. Nearly every site on the web has a sitemap that is intended not for humans but for web crawlers, Google’s in particularly, and there is an entire industry dedicated to search engine optimization (SEO). Netflix is on the opposite side of the spectrum here (unlike YouTube, it should be noted): the company has to actively source content and pay for it. Uber and Airbnb and Amazon are in the middle: theoretically there is an open platform for suppliers but there are costs involved in bringing them online.
  </p>
  <p>
   Facebook takes this to another level: its users are its most important content providers, and they do it for free. Professional content providers aren’t far behind, not only linking to all of their content but increasingly putting said content on Facebook directly (to the extent Facebook is paying for content it is to juice this cycle of self-interested content production on Facebook).
  </p>
  <p>
   That said, there are a few more companies that have a similar content model: Twitter, Snapchat, LinkedIn, Yelp, etc. All run on user-generated content augmented by professional content placing links or original material on their services. However, there is still one more thing that separates Facebook and Google from the rest: advertisers.
  </p>
  <p>
   Super-aggregators not only have zero transaction costs when it comes to users and content, but also when it comes to making money. This is at the very core of why Google and Facebook are so much more powerful than any of the other purely information-centric networks. The vast majority of advertisers on both networks never deal with a human (and if they do, it’s in customer support functionality, not sales and account management): they simply use the self-serve ad products like the one pictured above (or a more comprehensive tool built on the companies’ self-serve API).
  </p>
  <p>
   This is the level that the other social networks have not reached: Twitter grew revenue, but primarily through its sales team, which meant that
   <a href="https://stratechery.com/2016/googles-earnings-the-problem-with-alphabet-twitter-earnings-layoffs-vine/">
    costs increased inline with revenue
   </a>
   ; the company never gained the leverage that comes from having a self-serve ad platform (specifically, the self-serve platform costs are fixed but the revenue is marginal).
  </p>
  <p>
   <a href="https://stratechery.com/2016/googles-earnings-the-problem-with-alphabet-twitter-earnings-layoffs-vine/">
    <img alt="" class="aligncenter size-large wp-image-2340" height="381" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-7.41.16-PM-1024x610.png" srcset="https://stratechery.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-7.41.16-PM-1024x610.png 1024w, https://stratechery.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-7.41.16-PM-300x179.png 300w, https://stratechery.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-7.41.16-PM-768x458.png 768w, https://stratechery.com/wp-content/uploads/2016/11/Screen-Shot-2016-11-02-at-7.41.16-PM-1057x630.png 1057w" width="640"/>
   </a>
  </p>
  <p>
   Snap is following in Twitter’s footsteps: to date the vast majority of the company’s revenue has come from its sales team; the company has a perfunctory API for self-serve ads, but most of the volume springs from the aforementioned deals made by its sales team. Similar stories can be told about
   <a href="https://stratechery.com/2016/the-reality-of-missing-out/">
    LinkedIn, Yelp, and other advertising-based businesses
   </a>
   .
  </p>
  <p>
   This, then, is a super-aggregator: zero transaction costs not just in terms of user acquisition, but also supply acquisition, and most importantly, revenue acquisition, and Google and Facebook are the ultimate examples.
  </p>
  <h4>
   Facebook and the Russians
  </h4>
  <p>
   This is why I was confused that Senator Warner made a big deal out of the fact Facebook was paid in Russian Rubles: the entire premise of the company’s revenue model is that anyone can run an ad without having to talk to another human, and obviously a key component of such a model is supporting multiple currencies.
  </p>
  <p>
   Again, though, this is the first such model in economic history: it seems I am the one who was blinded by my having experienced the meaning of scale. In that Hotmail meeting everyone and everything was reduced to a number on a spreadsheet: the United States, Japan, Brazil, Russia, all were simply another row. So I naturally assume it is in the case of Facebook ads: that some advertisers buy in dollars, some in Yen, some in Real, others in Rubles is unremarkable to me, and, I suspect, many of the folks working at these companies.
  </p>
  <p>
   And yet, it is not at all unrealistic that this be very remarkable to everyone else, even someone with the technical and business background of Senator Warner. It would immediately be eyebrow-raising should any of the companies he managed or was invested in suddenly started transacting in Russian Rubles! For a super-aggregator, though, it is not only unremarkable, it is the system working as designed.
  </p>
  <p>
   This applies to the content of those ads, too: last week, when
   <a href="https://www.propublica.org/article/facebook-enabled-advertisers-to-reach-jew-haters">
    ProPublica reported that Facebook enabled anti-Semitic targeting
   </a>
   , I told a friend that a similar story would come out about Google within a week;
   <a href="https://www.buzzfeed.com/alexkantrowitz/google-allowed-advertisers-to-target-jewish-parasite-black">
    it only took one day
   </a>
   . When you make something
   <a href="https://stratechery.com/2013/friction/">
    frictionless
   </a>
   — which is another way of describing zero transaction costs — it becomes easier to do
   <em>
    everything
   </em>
   , both good and evil.
  </p>
  <h4>
   Regulating the Super-Aggregators
  </h4>
  <p>
   This should probably be another article — indeed, it’s an article I’ve been working towards for a long time now — but this appreciation of what Super-Aggreagators are, and how it is a Russian propaganda outfit could buy Facebook ads that likely
   <a href="https://www.law.cornell.edu/uscode/text/52/30121">
    broke the law
   </a>
   , gives insight into a number of principles that should guide people like Senator Warner as they consider potential regulation:
  </p>
  <ul>
   <li>
    <strong>
     Don’t Force the Super-Aggregators to Make Editorial Decisions:
    </strong>
    It has been distressing to see how quickly some folks have resorted to insisting that Google and Facebook start having a point-of-view on content on their platforms. The problem is not that they might be effective, but rather that it is inevitable that they will be. I wrote in
    <a href="https://stratechery.com/2017/manifestos-and-monopolies/">
     Manifestos and Monopolies
    </a>
    :
    <br>
     <blockquote>
      <p>
       My deep-rooted suspicion of Zuckerberg’s manifesto has nothing to do with Facebook or Zuckerberg; I suspect that we agree on more political goals than not. Rather, my discomfort arises from my strong belief that centralized power is both inefficient and dangerous: no one person, or company, can figure out optimal solutions for everyone on their own, and history is riddled with examples of central planners ostensibly acting with the best of intentions — at least in their own minds — resulting in the most horrific of consequences; those consequences sometimes take the form of overt costs, both economic and humanitarian, and sometimes those costs are foregone opportunities and innovations. Usually it’s both.
      </p>
     </blockquote>
     <p>
      The best solution in my estimation is enforced neutrality; to the extent limitations are put in place they should be enforced by another entity with far more accountability to the people than either of these Super-Aggregators. That probably means the government (with the obvious caveat that authoritarian governments would certainly prefer to use Facebook for their own ends).
     </p>
    </br>
   </li>
   <li>
    <p>
     <strong>
      Focus on Transparency:
     </strong>
     The personalization afforded by Super-Aggregators means their advertising is simply not comparable to anything that has come before: television commercials, radio jingles, newspaper ads, all are publicly disseminated and thus can be tracked (the one possible exception is direct mail, which, unsurprisingly, has been the home of the foulest sort of political advertising in particular). Digital ads, on the other hand, can be shown to a designated audience without anyone else knowing. It is worth debating whether this level of secrecy should be allowed in general; it seems without question,
     <a href="https://stratechery.com/2017/amazons-second-headquarters-amazons-internal-primitives-facebook-and-political-ads/">
      in my mind
     </a>
     , that it should not be allowed for political ads. Of course, that begs the question of what is a political ad, which again points towards regulation (which, per point one, is preferable to the unaccountable Google and Facebook deciding).
    </p>
   </li>
   <li>
    <p>
     <strong>
      Remember the Benefits of Zero Transaction Costs:
     </strong>
     The biggest beneficiaries of zero transaction costs on the super-aggregators are not traditional advertisers, whether that be companies like CPG conglomerates or presidential campaigns. Both have the resources to advertise anywhere and everywhere, and indeed, often find that the fine-tooth targeting on super-aggregators isn’t worth the effort required. The folks that do benefit, though, are those that wouldn’t have a voice otherwise: startups and niche offerings, both in terms of business and politics. Google and Facebook have opened the field to far more entrants, and while that means there are more folks with bad intentions, there are also a whole lot more folks with ideas that were shut out by the significant transaction costs inherent in pre-Internet platforms.
    </p>
   </li>
  </ul>
  <p>
   There’s one final consideration that should apply to regulation, broadly: given that Google and Facebook are already well-established with businesses that serve users, suppliers, and advertisers in a virtuous cycle, it is unlikely that regulation of any kind will have meaningful effects on their bottom lines. Indeed, I expect Google and Facebook to be mostly cooperative with whatever regulation comes from these recent revelations.
  </p>
  <p>
   Rather, the companies that will be hurt are those seeking to knock Google and Facebook off their perch; given that they are not yet super-aggregators, they will not have the feedback loops in place to overcome overly prescriptive regulation such that they can seriously challenge Google and Facebook.
  </p>
  <p>
   For example, consider the much-touted
   <a href="http://www.opentext.com/campaigns/99challenges/comply-with-regulations-wp?utm_source=google&amp;utm_medium=ppc&amp;utm_campaign=99-gdpr&amp;utm_content=ppc-99-gdpr-text&amp;elqcampaignid=27115&amp;gclid=EAIaIQobChMIrrbT892u1gIVSgoqCh3zTweKEAAYASAAEgLaifD_BwE">
    General Data Protection Regulation (GDPR)
   </a>
   set to take effect in the European Union next year. There is lot of excitement about how this regulation will limit Google and Facebook in particular, by, for example, limiting the use of personal data and enforcing data portability (and not just a PDF of your data — services will be required to build API access for easy export).
  </p>
  <p>
   The reality, though, is that given that Google and Facebook make most of their money on their own sites, they will be hurt far less than competitive ad networks that work across multiple sites; that means that even more digital advertising money — which will continue to grow, regardless of regulation — will flow to Google and Facebook. Similarly, given that the data portability provisions explicitly exclude your social network — exporting your friends requires explicit approval from your friends — it will be that much harder to bootstrap a competitor.
  </p>
  <p>
   This is the reality of regulation: as much as the largest incumbents may moan and groan, they are, in nearly all cases, the biggest beneficiaries. To be sure, that doesn’t mean regulation isn’t appropriate — it should be far more obvious to everyone that Russians were purchasing election-related ads on Facebook — but rather that it be expressly designed to limit the worst abuses and enable meaningful competitors, even if they accept payment in Russian Rubles.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2742">
    For what it’s worth, Stratechery has never actually taken out a Facebook ad, or any ad for that matter [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2742">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2742">
    Yes, I’m writing about Aggregation Theory again; I explain why I do so often
    <a href="https://stratechery.com/2017/the-platform-paradox-voice-assistants-vulnerable-facebook-and-russian-ads/">
     here
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2742">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2742">
    Presuming his tweet was not as cynical as it very well might have been [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2742">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2742" href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2742" href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2742" href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

