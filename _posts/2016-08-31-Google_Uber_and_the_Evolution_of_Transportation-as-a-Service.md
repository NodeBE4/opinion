---
layout: post
title: "Google, Uber, and the Evolution of Transportation-as-a-Service"
date: 2016-08-31T12:48:44+00:00
author: Ben Thompson
from: https://stratechery.com/2016/google-uber-and-the-evolution-of-transportation-as-a-service/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2258 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-ride-sharing topics-self-driving topics-transportation concepts-aggregation-theory concepts-business-models concepts-differentiation concepts-evolution-of-technology concepts-incentives concepts-making-money concepts-owning-customer-relationship concepts-product-management concepts-saas concepts-the-future companies-ford companies-google companies-tesla companies-uber" id="post-2258">
 <header class="entry-header">
  <h1 class="entry-title">
   Google, Uber, and the Evolution of Transportation-as-a-Service
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-08-31T05:48:44-07:00">
     Wednesday, August 31, 2016
    </time>
    <time class="updated" datetime="2018-03-27T01:38:13-07:00">
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
   In the eight months since I wrote
   <a href="https://stratechery.com/2016/cars-and-the-future/">
    Cars and the Future
   </a>
   , there has been an explosion in news about the future of transportation, much of it in the last few weeks:
  </p>
  <ul>
   <li>
    Ford
    <a href="https://media.ford.com/content/fordmedia/fna/us/en/news/2016/08/16/ford-targets-fully-autonomous-vehicle-for-ride-sharing-in-2021.html">
     announced plans
    </a>
    for its own car-sharing service built around self-driving Fords
   </li>
   <li>
    Elon Musk penned a
    <a href="https://stratechery.com/2016/follow-up-dollar-shave-club-cpg-and-amazon-teslas-master-plan-part-deux/">
     second master plan
    </a>
    envisioning a future car-sharing service built around self-driving Teslas
   </li>
   <li>
    Nutonomy
    <a href="https://app.ft.com/cms/s/2d6bdb28-6a7a-11e6-a0b1-d87a9fea034f">
     launched a trial in Singapore
    </a>
    of its own ride-sharing service built around Renault and Mitsubishi vehicles modified to be self-driving
   </li>
   <li>
    Uber
    <a href="http://www.bloomberg.com/news/features/2016-08-18/uber-s-first-self-driving-fleet-arrives-in-pittsburgh-this-month-is06r7on">
     announced its own self-driving trial in Pittsburgh
    </a>
    in partnership with Volvo. Uber also
    <a href="http://www.nytimes.com/2016/08/19/technology/uber-self-driving-cars-otto-trucks.html?_r=0">
     acquired self-driving startup Otto
    </a>
    , founded by former members of Google’s self-driving team
   </li>
   <li>
    And, speaking of Google, Alphabet executive David Drummond
    <a href="http://www.wsj.com/articles/alphabet-executive-david-drummond-leaves-uber-board-1472510812">
     stepped down from Uber’s board
    </a>
    a day before the company
    <a href="http://www.wsj.com/article_email/google-takes-on-uber-with-new-ride-share-service-1472584235-lMyQjAxMTA2NDM4MDkzOTAxWj">
     announced an expansion of its Waze-based ride-sharing service
    </a>
    from Israel to Uber’s home city of San Francisco
   </li>
  </ul>
  <p>
   These five bits of news are presented in roughly the order they matter; Uber and Google matter most of all.
  </p>
  <h4>
   From UberX to Google’s Self-Driving Cars
  </h4>
  <p>
   When thinking about the future of transportation-as-a-service, it’s tempting to draw a straight line from UberX to Google self-driving cars:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287.png">
    <img alt="stratechery Year One - 287" class="aligncenter size-large wp-image-2259" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287-300x225.png 300w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287-768x576.png 768w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-287-840x630.png 840w" width="640"/>
   </a>
  </p>
  <p>
   Uber CEO Travis Kalanick can certainly see the connection; he told
   <a href="http://www.bloomberg.com/news/features/2016-08-18/uber-s-first-self-driving-fleet-arrives-in-pittsburgh-this-month-is06r7on">
    Bloomberg
   </a>
   earlier this month:
  </p>
  <blockquote>
   <p>
    “The minute it was clear to us that our friends in Mountain View were going to be getting in the ride-sharing space, we needed to make sure there is an alternative [self-driving car],” says Kalanick. “Because if there is not, we’re not going to have any business.” Developing an autonomous vehicle, he adds, “is basically existential for us.”
   </p>
  </blockquote>
  <p>
   The problem for Uber is that their dominant position in the ride-sharing market is predicated on the two-sided market of riders and drivers, which I explained two years ago in
   <a href="https://stratechery.com/2014/uber-fights/">
    Why Uber Fights
   </a>
   :
  </p>
  <blockquote>
   <p>
    Driver and rider markets do interact, and it’s that interaction that creates a winner-take-all dynamic…In the case of Uber and Lyft, ride-sharing is (theoretically) habitual, both companies will ensure the prices are similar, and the primary means of differentiation is car liquidity, which works in the favor of the larger service. Over time it is reasonable to assume that the majority player will become dominant.
   </p>
  </blockquote>
  <p>
   That is indeed how the ride-sharing market has played out: as of
   <a href="http://www.bloomberg.com/news/articles/2016-04-14/lyft-is-gaining-on-uber-as-it-spends-big-for-growth">
    earlier this year
   </a>
   Uber provided over 80% of rides in the United States (the only market Lyft competes in), despite Lyft’s determination to spend hundreds of millions in subsidies and free rides. And, on the flipside, Uber
   <a href="https://stratechery.com/2016/didi-acquires-uber-china-why-uber-china-was-doomed-was-uber-china-worth-it/">
    left China earlier this month
   </a>
   , tired of spending their own billions in a futile attempt to displace the dominant Didi.
  </p>
  <p>
   Self-driving cars change these market dynamics in two important ways: first, drivers are no longer a scarce resource, which means there are no longer two-sided market forces at play. Second, the single best way to change consumer habits and preferences is through lower prices, and eliminating drivers is the most obvious way to do just that.
  </p>
  <p>
   Small wonder then that Uber is investing so heavily in self-driving cars, including
   <a href="http://www.wsj.com/articles/is-uber-a-friend-or-foe-of-carnegie-mellon-in-robotics-1433084582">
    hiring a huge number of Carnegie Mellon researchers
   </a>
   (thus the Pittsburgh location of the self-driving trial), as well as paying ~$680 million for Otto.
  </p>
  <p>
   Kalanick told
   <a href="http://www.businessinsider.com/travis-kalanick-interview-on-self-driving-cars-future-driver-jobs-2016-8">
    Business Insider
   </a>
   that Uber is still behind:
  </p>
  <blockquote>
   <p>
    I think we’re catching up. Look at some of the folks and how long they’ve been working on it. Lots of respect for an area that they’ve pioneered, and we’ve got to do some catch-up. And that’s OK, but it means we gotta wake up early and we’re going to bed late.
   </p>
  </blockquote>
  <p>
   I’ll take Kalanick at his word; Uber, though, still has some very important advantages that make this race a bit more complicated than it seems, and the journey I depicted above a lot less linear than it may appear.
  </p>
  <h4>
   The Five Components of Transportation-as-a-Service
  </h4>
  <p>
   Drivers and riders are important to understanding the future of transportation-as-a-service (TaaS), but they are not the only pieces that matter — and not the only areas where Uber still has an advantage. I see five components that really matter:
  </p>
  <ul>
   <li>
    Drivers
   </li>
   <li>
    Cars
   </li>
   <li>
    Mapping
   </li>
   <li>
    Routing
   </li>
   <li>
    Riders
   </li>
  </ul>
  <p>
   The shift from an UberX model to self-driving cars will require changes in every component.
  </p>
  <p>
   <strong>
    TaaS 1.0: UberX
   </strong>
  </p>
  <p>
   It’s clear why drivers and riders are the most important pieces here: drivers bring their own cars, existing mapping solutions are good enough, and routing is
   <em>
    relatively
   </em>
   simple. To be sure, that
   <em>
    relatively
   </em>
   modifier is important: managing millions of matches a day between drivers and riders is a hugely complicated undertaking, and the fact that Uber has been working on the underlying algorithms for years is a big advantage. It’s also an advantage that will become ever more critical.
  </p>
  <p>
   <strong>
    TaaS 1.5: UberPool
   </strong>
  </p>
  <p>
   UberPool is arguably the most important service Uber has launched to date, and looking at the pieces that go into it explain why:
  </p>
  <ul>
   <li>
    Drivers: the same as UberX
   </li>
   <li>
    Cars: the same as UberX
   </li>
   <li>
    Mapping: the same as UberX
   </li>
   <li>
    Routing: massive increase in complexity over UberX
   </li>
   <li>
    Riders: change in expectations (and behavior with regard to pick-up and drop-off points) relative to UberX
   </li>
  </ul>
  <p>
   It’s the routing piece that is the most important; Uber investor Bill Gurley has called the development of the necessary algorithms to make UberPool a success a
   <a href="http://abovethecrowd.com/2015/01/30/ubers-new-bhag-uberpool/">
    BHAG: Big Hairy Audacious Goal
   </a>
   , and it’s an investment that will be critical for Uber going forward.
  </p>
  <p>
   First, as Gurley’s title suggests, getting the algorithms behind UberPool right is an incredibly complex problem. It’s basically the
   <a href="https://en.wikipedia.org/wiki/Travelling_salesman_problem">
    traveling salesman problem
   </a>
   on steroids, and the only real way to solve it is to slowly but surely work out heuristics that work in real world situations.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2258" id="identifier_0_2258" title="Machine learning is relatively ineffective at solving this specific type of problem">
    1
   </a>
   Combine that reality with the fact that Uber has a dominant share of drivers and riders, giving the company sufficient liquidity to offer UberPool in multiple markets, and the result is that Uber is undoubtedly far ahead of competitors — present and potential — in solving these problems.
  </p>
  <p>
   The reason this matters is that building a self-driving car is like building a smartphone: it’s a hard problem, to be sure, but it’s only half of the equation when it comes to transportation-as-a-service. After all, just how useful would an iPhone or Android device be without the cloud? Similarly, a transportation-as-a-service company built around self-driving cars not only needs cars that can drive themselves, but an entire infrastructure on the back-end that tells those cars exactly where to go in a way that maximizes what will undoubtedly be a massive capital investment in the cars themselves.
  </p>
  <p>
   This is likely the motivation behind Google’s Waze-based ride-sharing service. Kalanick may be right that Google is ahead when it comes to self-driving cars, but they have a lot of catching up to do when it comes to telling those cars where to go.
  </p>
  <p>
   <strong>
    TaaS 2.0: Human Self-Driving Cars
   </strong>
  </p>
  <p>
   One of the more interesting facts about the new Waze service is that it is true ride-sharing: Google is capping the price at 54 cents a mile, which means it’s impossible to make money by simply driving-for-hire. More prosaically, that happens to be the
   <a href="https://www.irs.gov/uac/newsroom/2016-standard-mileage-rates-for-business-medical-and-moving-announced">
    IRS standard mileage rate
   </a>
   , which means Google can plausibly claim their service is facilitating, well, ride-sharing and the sharing of gas money without all of the complications of hiring contractors.
  </p>
  <p>
   Still, true ride-sharing is itself an important transportation-as-a-service evolution that
   <a href="https://stratechery.com/2015/uber-2-0-human-self-driving-cars/">
    I wrote about last year
   </a>
   . In the short to medium-term, catching a ride with someone already headed in your direction actually has even better economics than self-driving cars, given that the car is a sunk cost and the driver is going that way anyways. In that article I called this sort of car-pooling service “human-powered self-driving cars.”
  </p>
  <p>
   Note that this again marks an important shift in the components in transportation-as-a-service:
  </p>
  <ul>
   <li>
    Drivers: because they are already headed in that direction, they are effectively free
   </li>
   <li>
    Cars: because they have already been bought for the purpose of transporting the driver, they are effectively free
   </li>
   <li>
    Mapping: the same as UberX
   </li>
   <li>
    Routing: slightly more complex than UberPool
   </li>
   <li>
    Riders: similar experience to UberPool
   </li>
  </ul>
  <p>
   Uber launched UberCommute just a few weeks after that article; given that the economics of UberCommute are approaching those of self-driving cars, that means the company is ahead when it comes to figuring out the business model as well.
  </p>
  <p>
   <strong>
    TaaS 3.0: Self-Driving Cars
   </strong>
  </p>
  <p>
   Whenever self-driving cars do arrive, nearly every piece in the transportation-as-a-service puzzle will be different from today’s UberX:
  </p>
  <ul>
   <li>
    Drivers: non-existent!
   </li>
   <li>
    Cars: self-driving, which means they will likely be very expensive at least at the beginning, requiring significant capital costs
   </li>
   <li>
    Mapping: massively more detailed
   </li>
   <li>
    Routing: similar complexity to UberPool
   </li>
   <li>
    Riders: similar economics to UberCommute/Waze
   </li>
  </ul>
  <p>
   Note that there are two critical leaps that need to be made: cars
   <em>
    and
   </em>
   maps. Google is clearly well ahead in maps, but Uber is
   <a href="http://www.ft.com/cms/s/0%2Fe0dfa45e-5522-11e6-befd-2fc0c26b3c60.html?ft_site=falcon&amp;desktop=true#axzz4G0M5oyu8">
    investing $500 million
   </a>
   to catch up, even as it does the same for self-driving technology.
  </p>
  <p>
   The point of this analysis, though, is to highlight that for all the work Uber has to do, they are by no means doomed because of Google’s entry, because there isn’t a straight line from UberX to Google’s self-driving cars:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288.png">
    <img alt="stratechery Year One - 288" class="aligncenter size-large wp-image-2260" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288-300x225.png 300w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288-768x576.png 768w, https://stratechery.com/wp-content/uploads/2016/08/stratechery-Year-One-288-840x630.png 840w" width="640"/>
   </a>
  </p>
  <p>
   Indeed, Uber has their own advantages in routing, business model, and customer attachment, and those are just as formidable and potentially more defensible than Google’s tech leadership.
  </p>
  <h4>
   Handicapping the Future
  </h4>
  <p>
   With this framework in mind it’s easier to understand why I ranked those five pieces of news the way I did:
  </p>
  <ul>
   <li>
    Ford certainly knows how to build cars, but self-driving technology is a software problem; there is no evidence to suggest that Ford has the capability to leap ahead of Google or Uber. Moreover, while Ford’s relatively slim margins may make a ride-sharing service attractive, nearly every aspect of the company would need to transform itself from a product model to a service model, and that is even less likely than the company leading the way in self-driving technology. I think it is much more likely Ford will eventually partner with Google or Uber as an OEM.
   </li>
   <li>
    Tesla is a much more technologically advanced company than Ford and is already in the mindset of building computers on wheels. Moreover, it has thousands of cars on the road today both capturing data and beta-testing self-driving technology (
    <a href="https://stratechery.com/2016/the-tesla-autopilot-fatality-uber-partners-with-hertz/">
     for better or worse
    </a>
    ). However, Tesla faces several significant obstacles in building a service business: it has no routing capability; it sells its cars as products, not as a service; and, frankly, it has its hands full building the Model 3 before its negative cash flow catches up to it.
    <a class="footnote-link footnote-identifier-link" href="#footnote_1_2258" id="identifier_1_2258" title="One company I haven’t mentioned is Apple, but I put them in the same category as Tesla: they are a product company with legitimate questions about their cloud capabilities">
     2
    </a>
   </li>
   <li>
    Nutonomy is very interesting, not only because of their technology, but also because of the smart way they are dealing with perhaps the most important piece of transportation-as-a-service: the government. I have argued for years that Singapore was likely to be the first place where self-driving cars take off: the technology already works as long as you get rid of those pesky human drivers, while Singapore has placed strict limits on automobiles for years, and, to put it delicately, Singapore has the government structure to get rid of non-self-driving cars completely. By starting there Nutonomy has a big advantage when it comes to real-world experience and iteration, and could springboard from Singapore to other urban areas.
   </li>
  </ul>
  <p>
   That leaves Google and Uber, and, despite yesterday’s news, I still like Uber’s chances.
  </p>
  <p>
   First, it matters that the development of self-driving cars is, in Kalanick’s words, “existential” for the company. Never underestimate the motivating power of simple survival, and, on the flipside, keep in mind how poorly Google has done in any business that is not advertising-based.
  </p>
  <p>
   Second, I suspect Uber’s routing advantage (as infuriating as it may be when you are matched with a driver who is going the wrong way) is a real one: telling cars where to go at scale is an incredibly difficult problem and Uber has a multi-year head start.
  </p>
  <p>
   Third, any discussion of the threat self-driving cars poses to Uber tends to imagine a world where there are magically tens of thousands if not millions of self-driving cars everywhere immediately. That simply isn’t practical from a pure logistics standpoint; the time it will take to build all of those cars — and, crucially, get government approval — is time Uber has to catch up.
  </p>
  <p>
   Moreover, it’s not at all clear that Google will be willing to make the sort of investment necessary to build a self-driving fleet that could take on Uber. The company’s
   <a href="https://www.theinformation.com/articles/inside-the-battle-over-google-fiber">
    recent scale-back of Google Fiber
   </a>
   is instructive in this regard: it is very difficult for a company built on search advertising margins to stomach the capital costs entailed in building out a fleet capable of challenging Uber in more than one or two markets.
  </p>
  <p>
   Finally, as the incumbent in the transportation-as-a-service space Uber has the advantage of only needing to be good-enough. To the degree the company can build out UberPool and UberCommute, they can ensure that their own self-driving cars get first consideration from consumers trained to open their app whenever they are out and about.
  </p>
  <p>
   Needless to say, the next few years will be fascinating to watch. The only sure thing is that the Uber-Google battle in particular will be quite the ride.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2258">
    Machine learning is relatively ineffective at solving this specific type of problem [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2258">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2258">
    One company I haven’t mentioned is Apple, but I put them in the same category as Tesla: they are a product company with legitimate questions about their cloud capabilities [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2258">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2258" href="https://stratechery.com/2016/google-uber-and-the-evolution-of-transportation-as-a-service/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2258" href="https://stratechery.com/2016/google-uber-and-the-evolution-of-transportation-as-a-service/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2258" href="https://stratechery.com/2016/google-uber-and-the-evolution-of-transportation-as-a-service/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2016/google-uber-and-the-evolution-of-transportation-as-a-service/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

