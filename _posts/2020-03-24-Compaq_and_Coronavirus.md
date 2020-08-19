---
layout: post
title: "Compaq and Coronavirus"
date: 2020-03-24T13:08:00+00:00
author: Ben Thompson
from: https://stratechery.com/2020/compaq-and-coronavirus/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4767 post type-post status-publish format-standard hentry category-articles topics-content-moderation topics-covid19 topics-social concepts-ethics-and-mores concepts-evolution-of-technology concepts-history concepts-technology-and-society companies-compaq" id="post-4767">
 <header class="entry-header">
  <h1 class="entry-title">
   Compaq and Coronavirus
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2020-03-24T06:08:00-07:00">
     Tuesday, March 24, 2020
    </time>
    <time class="updated" datetime="2020-07-24T18:17:52-07:00">
     Friday, July 24, 2020
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
   To live in a moment that will be in history books is not a particularly pleasant experience; history, though, has another cruelty: those that are not remembered at all.
  </p>
  <h4>
   Compaq’s Impact
  </h4>
  <p>
   Consider Compaq: it was one of the most important companies in tech history, and today it is all-but forgotten. For example, look at this brief history of the IBM PC
   <a href="https://stratechery.com/2013/apple-open-and-learning-from-history/">
    I wrote in 2013
   </a>
   :
  </p>
  <blockquote>
   <p>
    You’ve heard the phrase, “No one ever got fired for buying IBM.” That axiom in fact predates Microsoft or Apple, having originated during IBM’s System/360 heyday. But it had a powerful effect on the PC market.
   </p>
   <p>
    In the late 1970s and very early 1980s, a new breed of personal computers were appearing on the scene, including the Commodore, MITS Altair, Apple II, and more. Some employees were bringing them into the workplace, which major corporations found unacceptable, so IT departments asked IBM for something similar. After all, “No one ever got fired…”
   </p>
   <p>
    IBM spun up a separate team in Florida to put together something they could sell IT departments. Pressed for time, the Florida team put together a minicomputer using mostly off-the shelf components; IBM’s RISC processors and the OS they had under development were technically superior, but Intel had a CISC processor for sale immediately, and a new company called Microsoft said their OS – DOS – could be ready in six months. For the sake of expediency, IBM decided to go with Intel and Microsoft.
   </p>
   <p>
    The rest, as they say, is history.
   </p>
  </blockquote>
  <p>
   But wait, there was one critical part of this story that I excluded! IBM wasn’t completely stupid: while much of the IBM PC was outsourced, the BIOS —
   <strong>
    B
   </strong>
   asic
   <strong>
    I
   </strong>
   nput/
   <strong>
    O
   </strong>
   utput
   <strong>
    S
   </strong>
   ystem, which was the firmware that that actually turned on the PC hardware and loaded the operating system — was copyrighted, and, IBM presumed, defensible in court. Compaq, though, figured out how to reverse-engineer the BIOS anyways. Rod Canion, who co-founded Compaq, explained on the
   <a href="http://www.internethistorypodcast.com/2014/05/the-incredible-true-story-behind-amcs-halt-and-catch-fire-how-compaq-cloned-ibm-and-created-an-empire/">
    Internet History Podcast
   </a>
   :
  </p>
  <blockquote>
   <p>
    What our lawyers told us was that, not only can you not use it [the copyrighted code] anybody that’s even looked at it — glanced at it — could taint the whole project. (…) We had two software people. One guy read the code and generated the functional specifications. So, it was like, reading hieroglyphics. Figuring out what it does, then writing the specification for what it does. Then, once he’s got that specification completed, he sort of hands it through a doorway or a window to another person who’s never seen IBM’s code, and he takes that spec and starts from scratch and writes our own code to be able to do the exact same function…
   </p>
   <p>
    [We had] just a bull-headed commitment to making all the software run. We were shocked when we found out none of our competitors had done it to the same degree. We could speculate on why they had stopped short of complete compatibility: It was hard. It took a long time. And there was a natural rush to get to market. People wanted to be first. There was only one thing for us: we didn’t have a product if we couldn’t run the IBM-PC software. And if you didn’t run all of it, how would anyone be confident enough to buy your computer, if they didn’t know they were always going to be able to run new software? We took it very, very seriously.
   </p>
  </blockquote>
  <p>
   The result was a company that came to dominate the market; in fact, Compaq was the fastest startup to hit $100 million in revenue, then the youngest firm to break into the Fortune 500, then the fastest company to hit $1 billion in revenue. By 1994 Compaq was the largest PC maker in the world.
  </p>
  <h4>
   Compaq’s Virtualization
  </h4>
  <p>
   Canion was, by that point, long gone; the board had ousted him in 1991 when the company was struggling to compete with direct-to-consumer PC makers selling “good enough” computers that were not nearly as well-engineered as Compaqs, but were faster to market and much cheaper. New CEO Eckhard Pfeiffer introduced the low-cost Presario line, which leveraged cheaper parts to break the sub-$1,000 price point, leading to Compaq achieving that first place position. By 1996, though, growth was again slowing, and Pfeiffer needed a new plan. Part 1 was expanding into more markets;
   <a href="https://www.bloomberg.com/news/articles/1996-07-21/compaq-at-the-crossroads">
    Bloomberg explains part 2
   </a>
   :
  </p>
  <blockquote>
   <p>
    The second part of the formula — for producing profits along with growth — will involve wider use of outsourcing and partnership deals. That’s because the new financial yardstick — return on assets — will force the divisions to slash investment in assets such as plant, inventory, and overhead wherever possible. If the $3 billion home-PC business can cut its asset base, for instance, it can still deliver a 20% annual return to the company — even though price competition in home PCs will likely keep operating margins at around 2%.
   </p>
   <p>
    To get there, Compaq has already started “virtualizing” parts of its business. After cutting $57 off the cost of each home PC last year by building the chassis at its plant in Shenzhen, China, the company went a step further in cutting the cost of business desktop PCs: Instead of investing millions to expand the Shenzhen plant, Gregory E. Petsch, senior vice-president for operations, persuaded a Taiwanese supplier to build a new factory adjacent to Compaq’s to build the mechanicals for the business models. The best part of the deal: The Taiwanese supplier owns the inventory until it arrives at Compaq’s door in Houston. “This is the right way to do it,” says Sanford C. Bernstein &amp; Co. computer analyst Vadim D. Zlotnikov.
   </p>
  </blockquote>
  <p>
   It worked for a time: Compaq’s stock price surged over the next two years as the company rode the Internet wave and outsourced not only the building of PCs and eventually their design, but also their new businesses:
  </p>
  <blockquote>
   <p>
    To compete in the big-iron business profitably, Compaq is counting on a series of relationships with other companies that can supply the kind of handholding that companies such as IBM are famous for. Instead of investing in legions of field technicians and programmers — and building up costly assets — the computer maker will use the resources of systems integrator Andersen Consulting and software maker SAP, among others. These companies have the personnel to install and maintain systems the way IBM or HP do. So Compaq gets to play in the big-iron market without incurring the costs of running its own services or software businesses. Using these partners, Compaq is already delivering packages of networks, servers, and services to big customers including General Motors, British Telecommunications, First Interstate Bancorp, and Deutsche Bundespost.
   </p>
   <p>
    Compaq, however, may not be able to play through their intermediaries forever. “The real solution is to create your own capability. It takes longer and is more painful, but ultimately, it is more successful,” says Graham Kemp, president of G2 Research Inc.
   </p>
  </blockquote>
  <p>
   Compaq never did bother; the engineering determination exemplified by Canion was long gone, and soon Compaq was as well: the company merged with HP in 2002 (resulting in a
   <a href="https://fortune.com/2011/08/21/why-carlys-big-bet-is-failing-fortune-classics-2005/">
    huge destruction in shareholder value
   </a>
   ), served as the badge for HP’s cheapest computers for a decade, and in 2012 was
   <a href="https://www.bizjournals.com/sanfrancisco/news/2012/05/24/decade-later-compaq-costs-hp-1-billion.html">
    written down completely
   </a>
   for $1.2 billion.
  </p>
  <p>
   And no one even noticed.
  </p>
  <h4>
   Coronavirus Action
  </h4>
  <p>
   Compaq’s demise was, to be fair, first and foremost about the value chain within which it competed. The entire reason Compaq could build the business it did was because as long as you had an IBM-compatible BIOS, an x86 processor, and a license for Windows, you could sell a PC that was compatible with all of the software out there. That, though, meant commoditization in the long-run, which is exactly what happened to Compaq and, it should be noted, basically all of its competitors.
  </p>
  <p>
   Still, while I could not ascertain exactly which Taiwanese manufacturer it was that Compaq persuaded to build its PCs and hold them on its balance sheet, I suspect there is a good chance it is still in business: companies like Quanta and Compal took over PC manufacturing in the 1990s, and PC design entirely in the 2000s. Brand names were simply that: names, and not much more. This, of course, made for a fantastic return on assets; it was not so great for long-term sustainable revenue and profits.
  </p>
  <p>
   It is at this point, 1400+ words in, that I must make what is probably an obvious analogy to the historical moment we are in. While there may have been an opportunity to stop SARS-CoV-2 late last year, by January (when the
   <a href="https://twitter.com/WHO/status/1217043229427761152">
    W.H.O. parroted China’s insistence that there was no human-to-human transmission
   </a>
   ), worldwide spread was probably inevitable; the New York Times
   <a href="https://www.nytimes.com/interactive/2020/03/22/world/coronavirus-spread.html">
    brilliantly illustrated the travel patterns that explain why
   </a>
   .
  </p>
  <p>
   Since then, though, there has been divergence between countries that
   <em>
    acted
   </em>
   and countries that
   <em>
    talked
   </em>
   . Taiwan, where I live, is perhaps the best example of the former; Dr. Jason Wang wrote
   <a href="https://jamanetwork.com/journals/jama/fullarticle/2762689?guestAccessKey=2a3c6994-9e10-4a0b-9f32-cc2fb55b61a5&amp;utm_source=For_The_Media&amp;utm_medium=referral&amp;utm_campaign=ftm_links&amp;utm_content=tfl&amp;utm_term=030320">
    an overview of Taiwan’s actions
   </a>
   (and
   <a href="https://cdn.jamanetwork.com/ama/content_public/journal/jama/0/jvp200035supp1_prod.pdf?Expires=2147483647&amp;Signature=bIZCLS7ZLWTJd~U~H40JgiEGdFb3ggVUJpBvJ7KdANK7HgK1zaj4uWHvqweGym1nWfO~nXt9Y5i1vX79pF7zjjqfzmJAy3udTdpVVZQe07xnQIPcBMXLwZ5XjgTO8yKFXVIpxsXhrmOu8sGSpKiEmQ86ZCKfOTar7fMAGmUCtjiYVFwf31K3REWAA-r3hZyoZpqz3QKpVgpsRpF9fV9thQCq0~yvbvRKTH4PcoB~CZgmXH7rpVb6bILXQn5zBCphf6pyLAa4zIebUEKfCdCYdSdi9LeIEUsesqsYpNWgHJcr4K1LC0hFlst0RHQz-vZ7I-OvrX~5jel6zjjtuDQzjQ__&amp;Key-Pair-Id=APKAIE5G5CRDK6RD3PGA">
    published a list of 124 action items
   </a>
   ), including:
  </p>
  <ul>
   <li>
    Passengers on flights from Wuhan were screened for fever starting in December, and banned from entry in January; the rest of Hubei Province, and then China as a whole — including non-Chinese who had recently visited China — soon followed.
   </li>
   <li>
    Data from the National Immigration Agency was integrated into the National Health Insuance Administration, allowing officials to quickly match-up COVID-19 symptoms with recent travel history; full access was given to hospitals in late February.
   </li>
   <li>
    People designated for home quarantine are
    <a href="https://www.reuters.com/article/us-health-coronavirus-taiwan-surveillanc/taiwans-new-electronic-fence-for-quarantines-leads-wave-of-virus-monitoring-idUSKBN2170SK">
     tracked via their smartphones
    </a>
    , and fined heavily for any violations.
   </li>
  </ul>
  <p>
   What stood out to me was mask production; on January 23, the day that China locked down Wuhan, Taiwan had the capability of producing 2.44 million masks a day; this week Taiwan is expected to
   <a href="https://focustaiwan.tw/society/202003230016">
    exceed 13 million masks a day
   </a>
   , a sufficient number for not only medical workers but also the general public. The mobilization
   <a href="https://focustaiwan.tw/society/202003240015">
    bridged government, industry, and workers
   </a>
   , and is ongoing — the plan is for Taiwan to be able to export masks soon.
  </p>
  <p>
   The public has done its part as well: most restaurants and buildings check the temperature of anyone who enters, and far more people than usual are wearing said masks, which
   <a href="https://medium.com/@adrien.burch/whats-the-evidence-on-face-masks-5f3c27a18cc">
    worked to stop the spread of SARS in 2003
   </a>
   , and which are likely particularly effective in the case of asymptomatic carriers of SARS-CoV-2.
  </p>
  <h4>
   The Great Resignation
  </h4>
  <p>
   The contrast with Western countries is stark: to the extent government officials across the Western world were discussing the coronavirus a month ago, it was to express support for China or insist that life carry on as before;
   <a href="https://stratechery.com/2020/zero-trust-information/">
    I already praised the role Twitter played in sounding the alarm
   </a>
   — often in the face of
   <a href="https://www.theatlantic.com/technology/archive/2020/03/what-really-doomed-americas-coronavirus-response/608596/">
    downplaying from the media
   </a>
   — but even that was, by definition, talk. What does not appear to have happened anywhere across the West is any sort of meaningful
   <em>
    action
   </em>
   until it was far too late.
  </p>
  <p>
   This has resulted in two problems: first, by the time Western governments acted, the only available option has been widespread lockdowns. Second, the talk itself is missing even the possibility of action.  For example, over the last 48 hours there has been increasing discussion about trade-offs, specifically the trade-off between limiting the spread of the coronavirus and the halt in economic activity that is required to do so. Given how much I write about tradeoffs, I must surely consider this a good thing, no?
  </p>
  <p>
   In fact, I think it is incredibly tragic, but not for the reasons you might think. The fact of the matter is that we do make tradeoffs between human lives and economic activity all the time — speed limits are perhaps the most banal example. What is truly tragic is the utter lack of resolve and lack of a bias for action in this so-called tradeoff. The only options are to give up the economy or give in to the virus: the possibility of actually beating the damn thing is completely missing from the conversation. To put it another way, the West feels like Compaq in the 1990s, relying on its brand name and partnerships with other entities to do the actual work, forgetting that it was hard work and determination that made it great in the first place.
  </p>
  <p>
   The best overview of how actual hard work could make a difference was written by Tomas Pueyo in this article entitled
   <a href="https://medium.com/@tomaspueyo/coronavirus-the-hammer-and-the-dance-be9337092b56">
    The Hammer and the Dance
   </a>
   ; to briefly summarize, the idea is to lockdown now to stop the uncontrolled spread of SARS-CoV-2, and then leverage the same sort of epidemilogical tools that countries like Taiwan have, including aggressive quarantining of known infections and extensive contact tracing.
  </p>
  <p>
   This gets to the second reason why the current discussion of tradeoffs is so disappointing: not only is it debating a tradeoff that we don’t necessarily need to make, at least in the long run, it is also foreclosing discussions on tradeoffs we absolutely need to consider. Consider this picture:
  </p>
  <p>
   <img alt="Police scooters checking on a quarantined citizen" class="aligncenter size-large wp-image-4768" height="394" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1-1024x630.jpg" srcset="https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1-1024x630.jpg 1024w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1-300x184.jpg 300w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1-768x472.jpg 768w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1-1025x630.jpg 1025w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-Information-1.jpg 1280w" width="640"/>
  </p>
  <p>
   That was taken by me, outside of my apartment building; apparently one of my neighbors just returned from America and the police were checking on his home quarantine. In fact, look more closely at what Taiwan has done to contain SARS-CoV-2 to-date — you can reframe everything in a far more problematic way:
  </p>
  <ul>
   <li>
    Restrict international movement and close borders (including banning all non-resident foreigners this week)
   </li>
   <li>
    Integrate and share private data across government agencies and with hospitals.
   </li>
   <li>
    Track private individual movements via their smartphones.
   </li>
  </ul>
  <p>
   Even the mask production I praised required requisitioning private property by the government, and the refusal of local businesses to serve customers without masks or insist on taking their temperature is probably surprising to many in the West.
  </p>
  <p>
   And yet, life here is normal. Kids are in school, restaurants are open, the grocery stores are well-stocked. I would be lying if I didn’t admit that the rather shocking assertions of government authority and surveillance that make this possible, all of which I would have decried a few months ago, feel pretty liberating even as it is troubling. We need to talk about this!
  </p>
  <h4>
   Policing Talk
  </h4>
  <p>
   The first problem of being a society of talk, not action, is the inability to even consider hard work as a solution; the second is a blindness to the real trade-offs at play. The third, though, is the most sinister of all: if talk is all that matters, then policing talk becomes an end to itself.
  </p>
  <p>
   I know, for example, that I am going to get pushback on this Article, telling me to stick in my lane, and leave discussions of the coronavirus to the experts or government officials. Never mind that so many of those experts and officials have made mistake after mistake — it’s all in the memory hole now!
  </p>
  <p>
   This is not at all to say that non-experts have the answers either;
   <a href="https://stratechery.com/2020/defining-information/">
    as I wrote last week
   </a>
   the amount of misinformation is exploding. Rather, the point is that this is a situation with an unmatched-in-my-lifetime combination of massive uncertainty with unfathomable stakes. It follows, then, that the likelihood of any one person or entity having the correct answer is low, while the imperative to allow the right answer to bubble up — or, more accurately, be discovered step-by-step, idea-after-discarded-idea — is high. There is more value than ever in verifying or disproving ideas and information, and far more danger than ever in policing them.
  </p>
  <p>
   Moreover, if the real tradeoffs to consider are about trading away civil liberties — which is exactly what has happened in Taiwan, at least to some extent — then the imperative to preserve debate about these matters is even more important. The most precious civil liberty of all is the ability to talk. Indeed, that is the terrible irony of losing the capability and will for action: it ultimately endangers the only thing we seem to be good at, and in this case, the potential writedown to too terrible to consider.
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4767" href="https://stratechery.com/2020/compaq-and-coronavirus/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4767" href="https://stratechery.com/2020/compaq-and-coronavirus/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4767" href="https://stratechery.com/2020/compaq-and-coronavirus/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2020/compaq-and-coronavirus/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

