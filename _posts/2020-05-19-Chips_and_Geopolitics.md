---
layout: post
title: "Chips and Geopolitics"
date: 2020-05-19T14:56:23+00:00
author: Ben Thompson
from: https://stratechery.com/2020/chips-and-geopolitics/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4952 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-china topics-countries topics-processors topics-taiwan topics-technologies topics-united-states concepts-disruption-theory concepts-evolution-of-technology concepts-history concepts-modular-versus-integrated concepts-politics concepts-technology-and-society companies-intel companies-tsmc" id="post-4952">
 <header class="entry-header">
  <h1 class="entry-title">
   Chips and Geopolitics
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2020-05-19T07:56:23-07:00">
     Tuesday, May 19, 2020
    </time>
    <time class="updated" datetime="2020-05-19T16:13:29-07:00">
     Tuesday, May 19, 2020
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
  <div class="podcastlinks">
   <a href="https://stratechery.com/podcasts/">
    Manage your Stratechery subscription.
   </a>
  </div>
  <p>
   The debate around who belongs on the Mount Rushmore of tech would be a long one; what is certain is that Morris Chang should be on the list. He certainly leads the way in terms of impact relative to name recognition.
  </p>
  <h4>
   Integration and Modularization
  </h4>
  <p>
   Clayton Christensen, in 2003’s
   <a href="https://claytonchristensen.com/books/the-innovators-solution/">
    <em>
     The Innovator’s Solution
    </em>
   </a>
   , explained how the natural course of industries was from interdependent architectures to modular ones:
  </p>
  <blockquote>
   <p>
    Customers will not buy your product unless it solves an important problem for them. But what constitutes a “solution” differs across the two circumstances in Figure 5-1: whether products are not good enough or are more than good enough. The advantage, we have found, goes to integration when products are not good enough, and to outsourcing — or specialization and dis-integration when products are more than good enough.
   </p>
   <p>
    <img alt="" class="aligncenter size-large wp-image-4954" height="583" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2020/05/CleanShot-2020-05-19-at-17.58.08@2x.png" srcset="https://stratechery.com/wp-content/uploads/2020/05/CleanShot-2020-05-19-at-17.58.08@2x.png 960w, https://stratechery.com/wp-content/uploads/2020/05/CleanShot-2020-05-19-at-17.58.08@2x-300x273.png 300w, https://stratechery.com/wp-content/uploads/2020/05/CleanShot-2020-05-19-at-17.58.08@2x-768x699.png 768w, https://stratechery.com/wp-content/uploads/2020/05/CleanShot-2020-05-19-at-17.58.08@2x-692x630.png 692w" width="640"/>
   </p>
   <p>
    The left side of Figure 5-1 indicates that when there is a performance gap — when product functionality and reliability are not yet good enough to address the needs of customers in a given tier of the market — companies must compete by making the best possible products. In the race to do this, firms that build their products around proprietary, interdependent architectures enjoy an important competitive advantage against competitors whose product architectures are modular, because the standardization inherent in modularity takes too many degrees of design freedom away from engineers, and they cannot not optimize performance.
   </p>
  </blockquote>
  <p>
   This makes intuitive sense: optimizing everything results in better performance, at the cost of long-term reliability and flexibility. Sure, long-term reliability and flexibility are nice-to-have, but they are lesser priorities. Once that top priority is met, though, these secondary priorities come to the forefront.
  </p>
  <blockquote>
   <p>
    Overshooting does not mean that customers will no longer pay for improvements. It just means that the type of improvement for which they will pay a premium price will change. Once their requirements for functionality and reliability have been met, customers begin to redefine what is not good enough. What becomes not good enough is that customers can’t get exactly what they want exactly when they need it, as conveniently as possible. Customers become willing to pay premium prices for improved performance along this new trajectory of innovation in speed, convenience, and customization. When this happens, we say that the basis of competition in a tier of the market has changed.
   </p>
  </blockquote>
  <p>
   This is a big problem for firms that are dominant in a market undergoing this transition; after all, the reason said firms are dominant is because they are the highest performing, which is to say that they are highly integrated, and to unwind said integration is usually untenable for both business model and more deep-rooted cultural reasons. That opens the door for new entrants:
  </p>
  <blockquote>
   <p>
    The pressure of competing along this new trajectory of improvement forces a gradual evolution in product architecture, as depicted in Figure 5-1 — away from the interdependent, proprietary architectures that had the advantage in the not-good-enough era toward modular designs in the era of performance surplus. Modular architectures help companies to compete on the dimensions that matter in the lower-right portions of the disruption diagram. Companies can introduce new products faster because they can upgrade individual subsystems without having to redesign everything. Although standard interfaces invariably force compromises in system performance, firms have the slack to trade away some performance with these customers because functionality is more than good enough.
   </p>
   <p>
    Modularity has a profound impact on industry structure because it enables independent, nonintegrated organizations to sell, buy, and assemble components and subsystems. Whereas in the interdependent world you had to make all of the key elements of the system in order to make any of them, in a modular world you can prosper by outsourcing or by supplying just one element. Ultimately, the specifications for modular interfaces will coalesce as industry standards. When that happens, companies can mix and match components from best-of-breed suppliers in order to respond conveniently to the specific needs of individual customers.
   </p>
  </blockquote>
  <p>
   Taiwan Semiconductor Manufacturing Company (TSMC), the company Chang founded in 1987, is arguably the single best example of the process Christensen described.
  </p>
  <h4>
   Intel and TSMC
  </h4>
  <p>
   Intel invented the microprocessor in 1971, and for decades to come, it was not good enough. The 4-bit Intel 4004 was followed by the 8-bit Intel 8008, and then the Intel 8080. Then, in 1978, came the Intel 8086, a 16-bit processor that was backwards compatible with programs written for the 8080 and 8008. That was followed by the Intel 80286, and in 1985, the 32-bit Intel 80386. It was the 80386 that defined the baseline x86 instruction set that undergirds modern processors in most laptops, desktops, and servers, but x86 has its roots in the 8008. Intel, by integrating design, manufacture, and software from the 1970s, would go on to define and dominate the processor market for decades.
  </p>
  <p>
   It would take a very long time for this integrated approach to overshoot the market. Intel’s 80386 was succeeded by the 80486, then the Pentium, and every release made computers so much faster that use cases unimaginable only one or two years prior suddenly seemed within reach, if only Intel could continue its rate of improvement. And, to the company’s credit — and with a solid push from AMD into a 64-bit variant that retained backwards compatibility to the 80386 — Intel did just that.
  </p>
  <p>
   Still, Intel made general purpose processors; processors that were created for a specific task would be much faster, at least in theory, but it was hard to get started: Chang, then a long-time executive at Texas Instruments, observed in the 1980s that it cost $50~$100 million dollars to start a new chip company, primarily because of the cost of manufacturing. You could contract production from Intel or Texas Instruments or Motorola, but it wasn’t reliable — and they were also your competitor!
  </p>
  <p>
   A few years later, in 1987, Chang was invited home to Taiwan, and asked to put together a business plan for a new government initiative to create a semiconductor industry. Chang
   <a href="https://www.semi.org/en/Oral-History-Interview-Morris-Chang">
    explained in an interview with the Computer History Museum
   </a>
   that he didn’t have much to work with:
  </p>
  <blockquote>
   <p>
    I paused to try to examine what we have got in Taiwan. And my conclusion was that [we had] very little. We had no strength in research and development, or very little anyway. We had no strength in circuit design, IC product design. We had little strength in sales and marketing, and we had almost no strength in intellectual property. The only possible strength that Taiwan had, and even that was a potential one, not an obvious one, was semiconductor manufacturing, wafer manufacturing. And so what kind of company would you create to fit that strength and avoid all the other weaknesses? The answer was pure-play foundry…
   </p>
   <p>
    In choosing the pure-play foundry mode, I managed to exploit, perhaps, the only strength that Taiwan had, and managed to avoid a lot of the other weaknesses. Now, however, there was one problem with the pure-play foundry model and it could be a fatal problem which was, “Where’s the market?”
   </p>
  </blockquote>
  <p>
   What happened is exactly what Christensen would describe several years later: TSMC created the market by “enabl[ing] independent, nonintegrated organizations to sell, buy, and assemble components and subsystems.” Specifically, Chang made it possible for chip designers to start their own companies:
  </p>
  <blockquote>
   <p>
    When I was at TI and General Instrument, I saw a lot of IC [
    <em>
     Integrated Circuit
    </em>
    ] designers wanting to leave and set up their own business, but the only thing, or the biggest thing that stopped them from leaving those companies was that they couldn’t raise enough money to form their own company. Because at that time, it was thought that every company needed manufacturing, needed wafer manufacturing, and that was the most capital intensive part of a semiconductor company, of an IC company. And I saw all those people wanting to leave, but being stopped by the lack of ability to raise a lot of money to build a wafer fab. So I thought that maybe TSMC, a pure-play foundry, could remedy that. And as a result of us being able to remedy that then those designers would successfully form their own companies, and they will become our customers, and they will constitute a stable and growing market for us.
   </p>
  </blockquote>
  <p>
   It worked. Graphics processors were an early example: Nvidia was started in 1993 with only $20 million, and never owned its own fab.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_4952" id="identifier_0_4952" title="The very first Nvidia chips were manufactured by SGS-Thomson Microelectronics, but have been manufactured by TSMC from the original GeForce on">
    1
   </a>
   Qualcomm, after losing millions manufacturing its earliest designs, spun off its chip-making unit in 2001 to concentrate on design, and Apple started building its own chips without a fab a decade later. Today there are thousands of chip designers in all kinds of niches creating specialized chips for everything from appliances to fighter jets, and none of them have their own foundry.
  </p>
  <p>
   There was one other thing that happened along the way: as I detailed in
   <a href="https://stratechery.com/2018/intel-and-the-danger-of-integration/">
    2018’s Intel and the Danger of Integration
   </a>
   , TSMC eventually surpassed Intel in not just flexibility but also pure performance:
  </p>
  <blockquote>
   <p>
    In time, though, TSMC got better, in large part because it had no choice: soon its manufacturing capabilities were only one step behind industry standards, and within a decade had caught-up (although Intel remained ahead of everyone). Meanwhile, the fact that TSMC existed created the conditions for an explosion in “fabless” chip companies that focused on nothing but design…the increased business let TSMC invest even more in its manufacturing capabilities.
   </p>
  </blockquote>
  <p>
   In short, TSMC is the best chipmaker in the world, no matter what vector of performance you care about. And with that came an entirely new class of problems, not just for TSMC, but also Taiwan.
  </p>
  <h4>
   Geopolitical Concerns
  </h4>
  <p>
   The international status of Taiwan is, as they say, complicated. So, for that matter, are U.S.-China relations. These two things can and do overlap to make entirely new, even more complicated complications.
  </p>
  <p>
   Geography is much more straightforward:
  </p>
  <p>
   <img alt="A map of the Pacific" class="aligncenter size-large wp-image-4953" height="244" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2020/05/tsmc-2-1024x391.png" srcset="https://stratechery.com/wp-content/uploads/2020/05/tsmc-2-1024x391.png 1024w, https://stratechery.com/wp-content/uploads/2020/05/tsmc-2-300x115.png 300w, https://stratechery.com/wp-content/uploads/2020/05/tsmc-2-768x293.png 768w, https://stratechery.com/wp-content/uploads/2020/05/tsmc-2-1200x458.png 1200w, https://stratechery.com/wp-content/uploads/2020/05/tsmc-2.png 1280w" width="640"/>
  </p>
  <p>
   Taiwan, you will note, is just off the coast of China. South Korea, home to Samsung, which also makes the highest end chips, although mostly for its own use, is just as close. The United States, meanwhile, is on the other side of the Pacific Ocean. There are advanced foundries in Oregon, New Mexico, and Arizona, but they are operated by Intel, and Intel makes chips for its own integrated use cases only.
  </p>
  <p>
   The reason this matters is because chips matter for many use cases outside of PCs and servers — Intel’s focus — which is to say that TSMC matters. Nearly every piece of equipment these days, military or otherwise, has a processor inside. Some of these don’t require particularly high performance, and can be manufactured by fabs built years ago all over the U.S. and across the world; others, though, require the most advanced processes, which means they must be manufactured in Taiwan by TSMC.
  </p>
  <p>
   This is a big problem if you are a U.S. military planner. Your job is not to figure out if there will ever be a war between the U.S. and China, but to plan for an eventuality you hope never occurs. And in that planning the fact that TSMC’s foundries — and Samsung’s — are within easy reach of Chinese missiles is a major issue.
  </p>
  <p>
   China, meanwhile, is investing heavily in catching up, although Semiconductor Manufacturing International Corporation (SMIC), its Shanghai-based champion, only just started manufacturing on a 14nm process, years after TSMC, Samsung, and Intel. In the long run, though, the U.S. faced a scenario where China had its own chip supplier, even as it threatened the U.S.’s chip supply chain.
  </p>
  <h4>
   TSMC’s Announcement
  </h4>
  <p>
   This was the context for last week’s announcement that TSMC is building a fab in the United States. From the
   <a href="https://www.wsj.com/articles/taiwan-company-to-build-advanced-semiconductor-factory-in-arizona-11589481659">
    Wall Street Journal
   </a>
   :
  </p>
  <blockquote>
   <p>
    Taiwan Semiconductor Manufacturing Co., the world’s largest contract manufacturer of silicon chips, said Friday it would spend $12 billion to build a chip factory in Arizona, as U.S. concerns grow about dependence on Asia for the critical technology. TSMC said the project, disclosed earlier Thursday by The Wall Street Journal, has the support of the federal government and the state of Arizona. It comes as the Trump administration has sought to jump-start development of new chip factories in the U.S. due to rising fears about the U.S.’s heavy reliance on Taiwan, China and South Korea to produce microelectronics and other key technologies.
   </p>
   <p>
    TSMC made the decision to go ahead with the project at a board meeting on Tuesday in Taiwan, according to people familiar with the matter, adding that both the State and Commerce Departments are involved in the plans. Construction will begin next year with production targeted for 2024, the company said in a statement. TSMC’s new plant would make chips branded as having 5-nanometer transistors, the tiniest, fastest and most power-efficient ones manufactured today. TSMC just started rolling out 5-nanometer chips at a factory in Taiwan in recent months. TSMC said the plant would make 20,000 wafers a month, making it a relatively small facility for a company that made more than 12 million wafers last year alone. TSMC’s Fab 18 in Taiwan, which currently produces its 5-nanometer chips, was targeted for 100,000 wafers a month when it broke ground in 2018.
   </p>
  </blockquote>
  <p>
   First off, while this announcement has superficial similarities to the star-crossed Foxconn factory in Wisconsin, that project reeked of political theater from the start, and, more pertinently, never made much sense for anyone involved. The current outcome —
   <a href="https://www.theverge.com/2020/4/12/21217060/foxconn-wisconsin-innovation-centers-empty-buildings">
    empty innovation centers and a still-unfinished factory
   </a>
   that has already been re-purposed — was frankly the default outcome.
  </p>
  <p>
   This TSMC project is different for several reasons. First, you don’t halfway build a foundry; TSMC is either in for billions, or they’re in for nothing. Second, it seems clear that the federal government is contributing significantly to the cost. And third, that is exactly what the federal government should do, because the national security implications are real.
  </p>
  <p>
   This does raise the question about just how committed TSMC is to this project. As the Wall Street Journal notes, the Arizona fab is quite small, relatively speaking, and while 5-nanometer chips are top-of-the-line today, they won’t be in 2024, when the fab opens. Moreover, it is worth noting that TSMC has a fab in Washington that it opened in 1998; it still operates, but TSMC didn’t make any additional investments in the U.S. until now.
  </p>
  <p>
   I think, though, that this is an overly pessimistic reading of this news, at least from a U.S. perspective. First off, of course TSMC is going to start small, and with technology it has already figured out how to build. It is one thing to build a massive “gigafab” next door to the ones you have already built in Taiwan, even as your best employees, who have pushed TSMC to the top over the last thirty years, figure out the next processing node; it is quite another to attempt something similar across the ocean.
  </p>
  <p>
   What is a much bigger deal, though, is that the Taiwan of 2020 is not last in line when it comes to processor technology, but first, and the government — which retains a significant ownership stake in TSMC — has been committed to keeping TSMC’s best technology in Taiwan. That this move is happening at all suggests the sort of momentous choice not simply on TSMC’s part but also Taiwan’s that is hard to undo: when it comes to the U.S. and China, ambiguously sitting in the middle, selling to both, was no longer an option.
  </p>
  <h4>
   Lessons for Tech
  </h4>
  <p>
   There are three big lessons for tech specifically and America broadly in this news.
  </p>
  <p>
   First, while we
   <a href="https://stratechery.com/2016/the-voters-decide/">
    learned in 2016
   </a>
   that technology was inseparable from domestic politics, the lesson in 2020 should be that technology is inseparable from geopolitics. It is chips that gave Silicon Valley its name, and everything about this chip decision is about geopolitics, not economics.
  </p>
  <p>
   Second, at some point every tech company is going to have to make a choice between the U.S. and China. It is tempting to blame the tension between the two countries on Trump, but the truth is that China, particularly under Xi Jinping, has been significantly hardening its rhetoric and actions since before Trump was elected, and has been committed to not just catching but surpassing the U.S. in technology
   <a href="https://www.foreignaffairs.com/articles/china/2019-08-27/chinas-long-march-technological-supremacy">
    for years
   </a>
   . There is a
   <a href="https://stratechery.com/2019/china-leverage-and-values/">
    fundamental clash of values
   </a>
   between the West and China, and it is clear that
   <a href="https://stratechery.com/2019/china-leverage-and-values/">
    China is interested in exporting theirs
   </a>
   . At some point everyone will be stuck in the middle, like TSMC, and
   <a href="https://www.nytimes.com/2020/05/19/business/economy/china-taiwan-huawei-tsmc.html">
    Switzerland won’t be an option
   </a>
   .
  </p>
  <p>
   Third, Intel,
   <a href="https://stratechery.com/2020/compaq-and-coronavirus/">
    much like Compaq
   </a>
   , is an allegory for where the U.S. seems to have lost its way. Locked in an endless pursuit of efficiency and shareholder value, the U.S. gave up its flexibility and resiliency in favor of top-end performance. Intel is one of the most advanced chip makers in the world, but it turns out that capability is far too constrained to its own needs to be of general applicability. Worse, to the extent Intel was willing to become a contract manufacturer, it
   <a href="https://s.wsj.net/public/resources/documents/intel%20letter.pdf">
    wanted the federal government to pay for it
   </a>
   , the better to satisfy shareholders. The government, rightly, in my mind, chose an operator that was actually used to operating in the world as it is, not once was.
  </p>
  <p>
   At the same time, TSMC’s justifiable carefulness in building a U.S. fab gives Intel an opportunity. Back in 2013, in one of the first Stratechery articles,
   <a href="https://stratechery.com/2013/the-intel-opportunity/">
    I urged the company
   </a>
   to embrace manufacturing and give up its integration, margins be damned. Intel specifically, and the U.S. generally, would be in far better shape had they acted then. As the saying goes, though, the second best time to start is now — and that applies not only to Intel, which should spend the money to get into contract manufacturing on its own, but also to the U.S. The world has changed, and it’s time to act accordingly.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4952">
    The very first Nvidia chips were manufactured by SGS-Thomson Microelectronics, but have been manufactured by TSMC from the original GeForce on [
    <a class="footnote-link footnote-back-link" href="#identifier_0_4952">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4952" href="https://stratechery.com/2020/chips-and-geopolitics/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4952" href="https://stratechery.com/2020/chips-and-geopolitics/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4952" href="https://stratechery.com/2020/chips-and-geopolitics/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2020/chips-and-geopolitics/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

