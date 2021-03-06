---
layout: post
title: "Apple, ARM, and Intel"
date: 2020-06-16T13:02:18+00:00
author: Ben Thompson
from: https://stratechery.com/2020/apple-arm-and-intel/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-5050 post type-post status-publish format-standard hentry category-articles topics-mac topics-pcs topics-processors topics-technologies concepts-evolution-of-technology concepts-history concepts-security concepts-technology-and-society companies-apple companies-arm companies-tsmc" id="post-5050">
 <header class="entry-header">
  <h1 class="entry-title">
   Apple, ARM, and Intel
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2020-06-16T06:02:18-07:00">
     Tuesday, June 16, 2020
    </time>
    <time class="updated" datetime="2020-06-17T02:58:45-07:00">
     Wednesday, June 17, 2020
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
   Mark Gurman
   <a href="https://www.bloomberg.com/news/articles/2020-06-09/apple-plans-to-announce-move-to-its-own-mac-chips-at-wwdc?sref=5KSwFgaY">
    at Bloomberg
   </a>
   is reporting that Apple will
   <em>
    finally
   </em>
   announce that the Mac is transitioning to ARM chips at next week’s Worldwide Developer Conference (WWDC):
  </p>
  <blockquote>
   <p>
    Apple Inc. is preparing to announce a shift to its own main processors in Mac computers, replacing chips from Intel Corp., as early as this month at its annual developer conference, according to people familiar with the plans. The company is holding WWDC the week of June 22. Unveiling the initiative, codenamed Kalamata, at the event would give outside developers time to adjust before new Macs roll out in 2021, the people said. Since the hardware transition is still months away, the timing of the announcement could change, they added, while asking not to be identified discussing private plans. The new processors will be based on the same technology used in Apple-designed iPhone and iPad chips. However, future Macs will still run the macOS operating system rather than the iOS software on mobile devices from the company.
   </p>
  </blockquote>
  <p>
   I use the word “finally” a bit cheekily: while it feels like this transition has been rumored forever, until a couple of years ago I felt pretty confident it was
   <em>
    not
   </em>
   going to happen. Oh sure, the logic of Apple using its remarkable iPhone chips in Macs was obvious, even back in 2017 or so:
  </p>
  <ul>
   <li>
    Apple’s A-series chips had been competitive on single-core performance with Intel’s laptop chips for several years.
   </li>
   <li>
    Intel,
    <a href="https://stratechery.com/2018/intel-and-the-danger-of-integration/">
     by integrating design and manufacturing
    </a>
    , earned very large profit margins on its chips; Apple could leverage TSMC for manufacturing and keep that margin for itself and its customers.
   </li>
   <li>
    Apple could, as they did with iOS, deeply integrate the operating system and the design of the chip itself to both maximize efficiency and performance and also bring new features and capabilities to market.
   </li>
  </ul>
  <p>
   The problem, as I saw it, was why bother? Sure, the A-series was catching up on single-thread, but Intel was still far ahead on multi-core performance, and that was before you got to desktop machines where pure performance didn’t need to be tempered by battery life concerns. More importantly, the cost of switching was significant; I wrote in early 2018:
  </p>
  <blockquote>
   <ul>
    <li>
     First, Apple sold 260 million iOS devices over the last 12 months; that is a lot of devices over which to spread the fixed costs of a custom processor. During the same time period, meanwhile, the company only sold 19 million Macs; that’s a much smaller base over which to spread such an investment.
    </li>
    <li>
     Second, iOS was built on the ARM ISA from the beginning; once Apple began designing its own chips (instead of buying them off the shelf) there was absolutely nothing that changed from a developer perspective. That is not the case on the Mac: many applications would be fine with little more than a recompile, but high-performance applications written at lower levels of abstraction could need considerably more work (this is the challenge with emulation as well: the programs that are the most likely to need the most extensive rewrites are those that are least tolerant of the sort of performance slowdowns inherent in emulation).
    </li>
    <li>
     Third, the PC market is in the midst of its long decline. Is it really worth all of the effort and upheaval to move to a new architecture for a product that is fading in importance? Intel may be expensive and may be slow, but it is surely good enough for a product that represents the past, not the future.
    </li>
   </ul>
  </blockquote>
  <p>
   However, the takeaway from the
   <a href="https://stratechery.com/2018/the-end-of-windows-and-slack-versus-microsoft-teams-arm-on-macs-apples-commitment-to-the-mac/">
    Daily Update
   </a>
   where I wrote that was that I was changing my mind: ARM Macs felt inevitable, because of changes at both Apple and Intel.
  </p>
  <h4>
   Apple and Intel
  </h4>
  <p>
   A year before that Daily Update, Apple held
   <a href="https://daringfireball.net/2017/04/the_mac_pro_lives">
    a rather remarkable event
   </a>
   for five writers where the company seemed to admit it had neglected the Mac; from
   <a href="https://techcrunch.com/2017/04/04/apple-pushes-the-reset-button-on-the-mac-pro/">
    TechCrunch
   </a>
   :
  </p>
  <blockquote>
   <p>
    Does Apple care about the Mac anymore?
   </p>
   <p>
    That question is basically the reason that we’re here in this room. Though Apple says that it was doing its best to address the needs of pro users, it obviously felt that the way the pro community was reacting to its moves (or delays) was trending toward what it feels is a misconception about the future of the Mac.
   </p>
   <p>
    “The Mac has an important, long future at Apple, that Apple cares deeply about the Mac, we have every intention to keep going and investing in the Mac,” says Schiller in his most focused pitch about whether Apple cares about the Mac any more, especially in the face of the success of the iPhone and iPad.
   </p>
   <p>
    “And if we’ve had a pause in upgrades and updates on that, we’re sorry for that — what happened with the Mac Pro, and we’re going to come out with something great to replace it. And that’s our intention,” he says, in as clear a mea culpa as I can ever remember from Apple.
   </p>
  </blockquote>
  <p>
   Yes, Schiller was talking about the Mac Pro, which is what the event was nominally about, but that wasn’t the only Mac long in the teeth, and the ones that had been updated, particularly the laptops, were years into the butterfly keyboard catastrophe; meanwhile there was a steady-stream of new iPhones and iPads with new industrial designs and those incredible chips.
  </p>
  <p>
   Those seemingly neglected Macs, meanwhile, were stuck with Intel, and Apple saw the Intel roadmap that has only recently become apparent to the world: it has been a map to nowhere. In 2015 Intel started shipping 14nm processors in volume from fabs in Oregon, Arizona, and Ireland; chip makers usually build fabs once per node size, seeking to amortize the tremendous expense over the entire generation, before building new fabs for new nodes. Three years later, though,
   <a href="https://www.bloomberg.com/news/articles/2018-09-28/intel-boosts-spending-by-1-billion-to-head-off-pc-shortages?sref=5KSwFgaY">
    Intel had to build more 14nm capacity
   </a>
   after
   <a href="https://www.guru3d.com/news-story/samsung-is-going-to-fab-14nm-cpus-for-intelto-address-shortage.html">
    hiring Samsung
   </a>
   to help it build chips; the problem is that its 10nm chips were delayed by years (the company just started shipping 10nm parts in volume this year).
  </p>
  <p>
   Meanwhile, TSMC was racing ahead, with 7nm chips in 2017
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_5050" id="identifier_0_5050" title="Node sizes are not an exact measure; most industry experts consider TSMC’s 7nm node size to be comparable to Intel’s 10nm size">
    1
   </a>
   , and 5nm chip production
   <a href="https://www.anandtech.com/show/15219/early-tsmc-5nm-test-chip-yields-80-hvm-coming-in-h1-2020">
    starting this year
   </a>
   ; this, combined with Apple’s chip design expertise, meant that as of last fall iPhone chips were comparable in speed to the top-of-the-line iMac chips. From
   <a href="https://www.anandtech.com/show/14892/the-apple-iphone-11-pro-and-max-review/4">
    Anandtech
   </a>
   :
  </p>
  <blockquote>
   <p>
    We’ve now included the latest high-end desktop CPUs as well to give context as to where the mobile is at in terms of absolute performance.
   </p>
   <p>
    <a href="https://www.anandtech.com/show/14892/the-apple-iphone-11-pro-and-max-review/4">
     <img alt="Anandtech benchmarks showing the A13 is as fast as a desktop Intel chip" class="aligncenter size-large wp-image-5051" height="890" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2020/06/anandtech.png" srcset="https://stratechery.com/wp-content/uploads/2020/06/anandtech.png 678w, https://stratechery.com/wp-content/uploads/2020/06/anandtech-216x300.png 216w, https://stratechery.com/wp-content/uploads/2020/06/anandtech-453x630.png 453w" width="640"/>
    </a>
   </p>
   <p>
    Overall, in terms of performance, the A13 and the Lightning cores are extremely fast. In the mobile space, there’s really no competition as the A13 posts almost double the performance of the next best non-Apple SoC. The difference is a little bit less in the floating-point suite, but again we’re not expecting any proper competition for at least another 2-3 years, and Apple isn’t standing still either.
   </p>
   <p>
    Last year I’ve noted that the A12 was margins off the best desktop CPU cores. This year, the A13 has essentially matched best that AMD and Intel have to offer – in SPECint2006 at least. In SPECfp2006 the A13 is still roughly 15% behind.
   </p>
  </blockquote>
  <p>
   The
   <a href="https://www.intel.com/content/www/us/en/products/processors/core/i9-processors/i9-9900k.html">
    Intel Core i9-9900K Processor
   </a>
   in those charts
   <a href="https://pangoly.com/en/review/intel-core-i9-9900k/price-history">
    launched at price of $999
   </a>
   before settling in at a street price of around $520; it remains the top-of-the-line option for the iMac for an upgrade price of $500 above the Intel Core i5-8600K, a chip that launched at $420 and today costs $220. The A13, meanwhile, probably costs between $50~$60.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_5050" id="identifier_1_5050" title="This number is extremely hard to source; but to the degree I am off it is by the tens of dollars, not hundreds">
    2
   </a>
  </p>
  <p>
   This is what made next week’s reported announcement feel inevitable: Apple’s willingness to invest in the Mac seems to have truly turned around in 2017 — not only has the promised Mac Pro launched, but so has an entirely new MacBook line with a redesigned keyboard — even as the cost of sticking with Intel has become not simply about money but also performance.
  </p>
  <h4>
   The Implications of ARM
  </h4>
  <p>
   The most obvious implication of Apple’s shift — again, assuming the reporting is accurate — is that ARM Macs will have superior performance to Intel Macs on both a per-watt basis and a per-dollar basis. That means that the next version of the MacBook Air, for example, could be cheaper even as it has better battery life and far better performance (the i3-1000NG4 Intel processor that is the cheapest option for the MacBook Air is not yet for public sale; it probably costs around $150, with far worse performance than the A13).
  </p>
  <p>
   What remains to be seen is just how quickly Apple will push ARM into its higher-end computers. Again, the A13 is already competitive with some of Intel’s best desktop chips, and the A13 is tuned for mobile; what sort of performance gains can Apple uncover by building for more generous thermal envelopes? It is not out of the question that Apple, within a year or two, has by far the best performing laptops and desktop computers on the market, just as they do in mobile.
  </p>
  <p>
   This is where Apple’s tight control of its entire stack can really shine: first, because Apple has always been less concerned with backwards compatibility than Microsoft, it has been able to shepherd its developers into a world where this sort of transition should be easier than it would be on, say, Windows; notably the company has over the last decade deprecated its Carbon API and ended 32-bit support with the current version of macOS. Even the developers that have the furthest to go are well down the road.
  </p>
  <p>
   Second, because Apple makes its own devices, it can more quickly leverage its ability to design custom chips for macOS. Again, I’m not completely certain the economics justify this — perhaps Apple sticks with one chip family for both iOS and the Mac — but if it is going through the hassle of this change, why not go all the way (notably, one thing Apple does not need to give up is Windows support: Windows has run on ARM for the last decade, and I expect Boot Camp to continue, and for virtualization offerings to be available as well; whether this will be as useful as Intel-based virtualization remains to be seen).
  </p>
  <p>
   What is the most interesting, and perhaps the most profound, is the potential impact on the server market, which is Intel’s bread-and-butter. Linus Torvalds, the creator and maintainer of Linux,
   <a href="https://www.realworldtech.com/forum/?threadid=183440&amp;curpostid=183486">
    explained why he was skeptical
   </a>
   about ARM on the server in 2019:
  </p>
  <blockquote>
   <p>
    Some people think that “the cloud” means that the instruction set doesn’t matter. Develop at home, deploy in the cloud. That’s bullshit. If you develop on x86, then you’re going to want to deploy on x86, because you’ll be able to run what you test “at home” (and by “at home” I don’t mean literally in your home, but in your work environment). Which means that you’ll happily pay a bit more for x86 cloud hosting, simply because it matches what you can test on your own local setup, and the errors you get will translate better…
   </p>
   <p>
    Without a development platform, ARM in the server space is never going to make it. Trying to sell a 64-bit “hyperscaling” model is idiotic, when you don’t have customers and you don’t have workloads because you never sold the small cheap box that got the whole market started in the first place…
   </p>
   <p>
    The only way that changes is if you end up saying “look, you can deploy more cheaply on an ARM box, and here’s the development box you can do your work on”. Actual hardware for developers is hugely important. I seriously claim that this is why the PC took over, and why everything else died…It’s why x86 won. Do you really think the world has changed radically?
   </p>
  </blockquote>
  <p>
   ARM on Mac, particularly for developers, could be a radical change indeed that ends up transforming the server space. On the other hand, the shift to ARM could backfire on Apple: Windows, particularly given
   <a href="https://docs.microsoft.com/en-us/windows/wsl/about">
    the ability to run a full-on Linux environment without virtualization
   </a>
   , combined with Microsoft’s developer-first approach, is an extremely attractive alternative that many developers just don’t know about — but they may be very interested in learning more if that is the price of running x86 like their servers do.
  </p>
  <h4>
   Intel’s Failure
  </h4>
  <p>
   What is notable about this unknown — will developer preferences for macOS lead to servers switching to ARM (which remember, is cheaper and likely more power efficient in servers as well), or will the existing x86 installation base drive developers to Windows/Linux — is that the outcome is out of Intel’s control.
  </p>
  <p>
   What started Intel’s fall from king of the industry to observer of its fate was its momentous 2005 decision to not build chips for the iPhone; then-CEO Paul Otellini told
   <a href="http://www.theatlantic.com/technology/archive/2013/05/paul-otellinis-intel-can-the-company-that-built-the-future-survive-it/275825/">
    Alexis Madrigal at The Atlantic
   </a>
   what happened:
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_5050" id="identifier_2_5050" title="I first used this quote in Andy Grove and the iPhone SE ">
    3
   </a>
  </p>
  <blockquote>
   <p>
    “We ended up not winning it or passing on it, depending on how you want to view it. And the world would have been a lot different if we’d done it,” Otellini told me in a two-hour conversation during his last month at Intel. “The thing you have to remember is that this was before the iPhone was introduced and no one knew what the iPhone would do…At the end of the day, there was a chip that they were interested in that they wanted to pay a certain price for and not a nickel more and that price was below our forecasted cost. I couldn’t see it. It wasn’t one of these things you can make up on volume. And in hindsight, the forecasted cost was wrong and the volume was 100x what anyone thought.”
   </p>
  </blockquote>
  <p>
   What is so disappointing about this excuse is that it runs directly counter to what made Intel great; in 1965, Bob Noyce, then at Fairchild Semiconductor
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_5050" id="identifier_3_5050" title="Noyce and Gordon Moore would form Intel with a large number of Fairchild employees three years later">
    4
   </a>
   , shocked the semiconductor world by announcing that Fairchild would price its integrated circuit products at $1, despite the fact it cost Fairchild far more than that to produce them. What Noyce understood is that the integrated circuit market was destined to explode, and that by setting a low price Fairchild would not only accelerate that growth, but also drive down its costs far more quickly than it might have otherwise (chips, remember, are effectively zero marginal cost items; the primary costs are the capital costs of setting up manufacturing lines).
  </p>
  <p>
   That is the
   <em>
    exact
   </em>
   logic that Otellini “couldn’t see”, so blinded he was by the seemingly dominant PC paradigm and Intel’s enviable profit margins.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_5050" id="identifier_4_5050" title="Incredibly, Otellini then doubled-down: Intel actually sold the ARM division that Jobs had wanted access to a year later.">
    5
   </a>
   Worse, those volumes went to manufacturers like TSMC instead, providing the capital for research and development and capital investment that has propelled TSMC into the fabrication lead.
  </p>
  <hr/>
  <p>
   <em>
    CORRECTION: A source suggested that this sentence was wrong:
   </em>
  </p>
  <blockquote>
   <p>
    <em>
     What started Intel’s fall from king of the industry to observer of its fate was its momentous 2005 decision to not build chips for the iPhone.
    </em>
   </p>
  </blockquote>
  <p>
   <em>
    XScale, Intel’s ARM chips, were engineered to be fast, not power-efficient, and Intel wasn’t interested in changing their approach; this is particularly striking given that Intel had just recovered from having made the same mistake with the Pentium 4 generation of its x86 chips. Moreover, the source added, Intel wasn’t interested in doing any sort of customization for Apple: their attitude was take-it-or-leave-it for, again, a chip that wasn’t even optimized correctly. A better sentence would have read:
   </em>
  </p>
  <blockquote>
   <p>
    <em>
     Intel’s fall from king of the industry to observer of its fate was already in motion by 2005: despite the fact Intel had an ARM license for its XScale business, the company refused to focus on power efficiency and preferred to dictate designs to customers like Apple, contemplating their new iPhone, instead of trying to accommodate them (like TSMC).
    </em>
   </p>
  </blockquote>
  <p>
   <em>
    What is notable is that doesn’t change the sentiment: the root cause was Intel’s insistence on
    <a href="https://stratechery.com/2018/intel-and-the-danger-of-integration/">
     integrating design and manufacturing
    </a>
    , certain that their then-lead in the latter would leave customers no choice but to accept the former, and pay through the nose to boot. It was a view of the world that was, as I wrote, “blinded…by the seemingly dominant PC paradigm and Intel’s enviable profit margins.”
   </em>
  </p>
  <p>
   <em>
    My apologies for the error, but also deep appreciation for the correction.
   </em>
  </p>
  <hr/>
  <p>
   That is why, last month, it was TSMC that was the target of a federal government-led effort to build a new foundry in the U.S.; I explained in
   <a href="https://stratechery.com/2020/chips-and-geopolitics/">
    Chips and Geopolitics
   </a>
   :
  </p>
  <blockquote>
   <p>
    Taiwan, you will note, is just off the coast of China. South Korea, home to Samsung, which also makes the highest end chips, although mostly for its own use, is just as close. The United States, meanwhile, is on the other side of the Pacific Ocean. There are advanced foundries in Oregon, New Mexico, and Arizona, but they are operated by Intel, and Intel makes chips for its own integrated use cases only.
   </p>
   <p>
    The reason this matters is because chips matter for many use cases outside of PCs and servers — Intel’s focus — which is to say that TSMC matters. Nearly every piece of equipment these days, military or otherwise, has a processor inside. Some of these don’t require particularly high performance, and can be manufactured by fabs built years ago all over the U.S. and across the world; others, though, require the most advanced processes, which means they must be manufactured in Taiwan by TSMC.
   </p>
   <p>
    This is a big problem if you are a U.S. military planner. Your job is not to figure out if there will ever be a war between the U.S. and China, but to plan for an eventuality you hope never occurs. And in that planning the fact that TSMC’s foundries — and Samsung’s — are within easy reach of Chinese missiles is a major issue.
   </p>
  </blockquote>
  <p>
   I think the focus on TSMC was correct, and I am encouraged by TSMC’s decision to build a foundry in Arizona, even if they are moving as slowly as they can on a relatively small design; at the same time, what a damning indictment of Intel. The company has not simply lost its manufacturing lead, and is not simply a helpless observer of a potentially devastating shift in developer mindshare from x86 to ARM, but also when its own country needed to subsidize the building of a foundry for national security reasons Intel wasn’t even a realistic option, and a company from a territory claimed by China was.
  </p>
  <p>
   To that end, while I am encouraged by and fully support
   <a href="https://www.reuters.com/article/us-usa-semiconductors/u-s-lawmakers-propose-22-8-billion-in-aid-to-semiconductor-industry-idUSKBN23H39M">
    this bill by Congress
   </a>
   to appropriate $22.8 billion in aid to semiconductor manufacturers (the amount should be higher), I wonder if it isn’t time for someone to start the next great U.S. chip manufacturing company. No, it doesn’t really make economic sense, but this is an industry where aggressive federal industrial policy can and should make a difference, and it’s hard to accept the idea of taxpayer billions going to a once-great company that has long-since
   <a href="https://stratechery.com/2013/the-intel-opportunity/">
    forgotten
   </a>
   what
   <a href="https://stratechery.com/2016/andy-grove-and-the-iphone-se/">
    made it great
   </a>
   . Intel has prioritized profit margins and perceived lower risk for decades, and it is only now that the real risks of caring about
   <a href="https://stratechery.com/2020/compaq-and-coronavirus/">
    finances more than fabrication
   </a>
   are becoming apparent, for both Intel and the United States.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_5050">
    Node sizes are not an exact measure; most industry experts consider TSMC’s 7nm node size to be comparable to Intel’s 10nm size [
    <a class="footnote-link footnote-back-link" href="#identifier_0_5050">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_5050">
    This number is extremely hard to source; but to the degree I am off it is by the tens of dollars, not hundreds [
    <a class="footnote-link footnote-back-link" href="#identifier_1_5050">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_5050">
    I first used this quote in
    <a href="https://stratechery.com/2016/andy-grove-and-the-iphone-se/">
     Andy Grove and the iPhone SE
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_2_5050">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_5050">
    Noyce and Gordon Moore would form Intel with a large number of Fairchild employees three years later [
    <a class="footnote-link footnote-back-link" href="#identifier_3_5050">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_5050">
    Incredibly, Otellini then doubled-down: Intel actually sold the ARM division that Jobs had wanted access to a year later. [
    <a class="footnote-link footnote-back-link" href="#identifier_4_5050">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-5050" href="https://stratechery.com/2020/apple-arm-and-intel/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-5050" href="https://stratechery.com/2020/apple-arm-and-intel/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-5050" href="https://stratechery.com/2020/apple-arm-and-intel/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2020/apple-arm-and-intel/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

