---
layout: post
title: "Bitcoin and Diversity"
date: 2016-03-08T15:05:43+00:00
author: Ben Thompson
from: https://stratechery.com/2016/bitcoin-and-diversity/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2058 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-bitcoin topics-cryptocurrencies topics-fintech concepts-business-models concepts-company-culture concepts-company-structure concepts-ethics-and-mores concepts-incentives concepts-technology-and-society companies-facebook" id="post-2058">
 <header class="entry-header">
  <h1 class="entry-title">
   Bitcoin and Diversity
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-03-08T07:05:43-08:00">
     Tuesday, March 8, 2016
    </time>
    <time class="updated" datetime="2018-03-27T01:48:04-07:00">
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
   The Bitcoin community is in a bit of a civil war; I hope readers whose eyes glaze over at the crypto-currency’s mention will bear with me as I explain what is going on, and why some of the fundamental ideas in question matter broadly.
  </p>
  <h4>
   The Block Size Debate
  </h4>
  <p>
   Briefly — and let me say up front, I am both simplifying and not taking sides — Satoshi Nakamoto, the mysterious creator of Bitcoin, added a 1MB size limitation to “blocks”, which, if you think of the Bitcoin blockchain as a ledger, are individual pages. This, as you might expect, limits the number of transactions that can be verified per block (there is a new block created about every ten minutes or so).
  </p>
  <p>
   The current “war” is about whether or not this transaction size should be increased in the near future. Bitcoin Classic supporters are, contra their implementation’s name, advocating a “hard fork” of Bitcoin that would simply double the block size limit to 2MB; it’s called a “hard fork” because it is not backwards compatible. Meanwhile, Bitcoin Core supporters, which, naturally, include the core developers of Bitcoin, advocate a solution called “Segregated Witness” that would be a “soft fork”, i.e. backwards compatible, although it would take more development work not only for the core but for many other companies in the Bitcoin ecosystem.
  </p>
  <p>
   What makes this brouhaha so interesting is there in the word “fork”: after all, the solution to a dispute in most open-source communities like, say, Linux, is to simply fork the project and build your own version. That is why there are a seemingly endless number of Linux distributions with names like Mint, Debian, and Ubuntu.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2058" id="identifier_0_2058" title="There are theoretically thousands if not millions of distributions, and effectively hundreds that are actively maintained">
    1
   </a>
   And indeed, there are scores of Bitcoin-like crypto-currencies like Ethereum, Ripple, and Dogecoin.
  </p>
  <h4>
   Unitary Bitcoin
  </h4>
  <p>
   Crucially, though, none of these “forks” work with Bitcoin; unlike an effectively self-contained Linux distribution that uses widely accepted protocols to communicate with other computers, Bitcoin
   <em>
    is the network
   </em>
   and all the component pieces of that network. This is why, even if a Bitcoin alternative may be technically superior, Bitcoin’s “market cap”
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2058" id="identifier_1_2058" title="The value of all of the Bitcoins in your fiat money of choice">
    2
   </a>
   is
   <a href="https://coinmarketcap.com">
    more than 8x
   </a>
   that of the next most valuable crypto-currency: Satoshi’s creation benefits from the network effects of hundreds of thousands
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2058" id="identifier_2_2058" title="Probably not millions ">
    3
   </a>
   of Bitcoin owners, miners, node operators, wallet providers, exchanges, etc.
  </p>
  <p>
   It is this quality that makes this current dispute so charged: the loser in the block size debate can’t simply up and start their own currency without giving up millions of dollars in collective value. In short, the outcome is zero sum: one side will win, and the other will lose.
  </p>
  <p>
   In this the debate about Bitcoin mirrors what it is that makes Bitcoin and the blockchain technology on which it is based so interesting: the entire idea is that there is one — and only one — record of all transactions; said record is added to by miners (incented by Bitcoin and transaction fees) and stored by nodes (wallet-holders, although the number of nodes is decreasing as people increasingly use centralized services), each of which, through a delicate balance of incentives, continually agrees on what is in the master ledger and what is not. And, when it comes to adding to the blockchain, only one block will win.
  </p>
  <p>
   There are other parallels between Bitcoin broadly and this debate in particular. For example, while everyone agrees that the idea of the blockchain is brilliant and a real breakthrough in computer science (digital scarcity was thought to be impossible), there is a lot of disagreement about exactly what blockchains generally and Bitcoin specifically are good for: currency is the most cited application, but things like smart contracts and micro-exchanges are just as (if not more) interesting.
  </p>
  <p>
   Similarly, there are a surprisingly wide array of opinions surrounding the block size debate, many of which are directly linked to underlying beliefs of what Bitcoin’s purpose is. Some want faster or more transactions, others are worried about ensuring nodes remain distributed (bigger blocks need more bandwidth), still others have security concerns. And, just as some Bitcoin adherents see a digital currency as a desirable alternative to traditional fiat currencies, some of those opposing a change are simply opposed to change period, at least to changing anything specifically designed by Satoshi.
  </p>
  <h4>
   Appealing to “Rules”
  </h4>
  <p>
   When the block size debate was first heating up last summer, Bitcoin Core developer Gregory Maxwell
   <a href="https://lists.linuxfoundation.org/pipermail/bitcoin-dev/2015-May/007880.html">
    put his finger on the philosophy of Bitcoin issue
   </a>
   :
  </p>
  <blockquote>
   <p>
    Fundamentally this question exposes ideological differences between people interested in Bitcoin. Is Bitcoin more of a digital gold or is it more of a competitor to Square? Is Bitcoin something that should improve personal and commercial autonomy from central banks? From commercial banks? Or from just the existing status-quo commercial banks?   What are people’s fundamental rights with Bitcoin? Do participants have a right to mine? How much control should third parties have over their transactions? How much security must be provided? Is there a deadline for world domination or bust? Is Bitcoin only for the developed world? Must it be totally limited by the most impoverished parts of the world? Bitcoin exists at the intersection of many somewhat overlapping belief systems.
   </p>
  </blockquote>
  <p>
   What I found most interesting, though, was what Maxwell stated in the previous paragraph:
  </p>
  <blockquote>
   <p>
    We’re talking about tuning one of the fundamental scarcities of the Bitcoin Economy and cryptosystem — leaving the comfort of “rule by math” — and venturing into the space of political decisions.
   </p>
  </blockquote>
  <p>
   Maxwell has made similar comments elsewhere, including in
   <a href="https://bitcointalk.org/index.php?topic=1343716.msg13702313#msg13702313">
    this forum thread
   </a>
   :
  </p>
  <blockquote>
   <p>
    The rules
    <em>
     are
    </em>
    Bitcoin. The stability of Bitcoin’s rules
    <em>
     is
    </em>
    the soundness of the currency. If the rules can be easily rewritten against the will of some users by others according to political whim then what can be trusted? Is the supply fixed? Will coins be confiscated and awarded to others? If that gate is crossed then there is almost always some excuses which is “good enough” — as was lamented in some of Bitcoin’s earliest announcements…
   </p>
   <p>
    I think governance is incredibly hard and that the development history of fiat currencies shows that mankind is ill-equipped to create a strong and sound system via human governance — not through lack of trying, but because mankind is fundamentally not cut out for it: there is always some excuse that makes people feel justified in compromising the property rights of some for the benefit of (potentially many) others. Bitcoin was specifically created and promoted to replace that kind of subjectivity with machines, but it can’t do it if we go around undermining it.
   </p>
  </blockquote>
  <p>
   I find this perspective fascinating,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_2058" id="identifier_3_2058" title="To be clear, I completely disagree with it">
    4
   </a>
   and for reasons that have nothing to do with the block size debate (which, again, I’m not stating an opinion on!). I can certainly see the allure of a system that seeks to take all decision-making authority out of the hands of individuals: it’s math!
  </p>
  <p>
   The problem, though, is that the
   <em>
    consequence
   </em>
   of embracing this sort of “Them’s the rules” philosophy is itself the sort of political statement that Maxwell is so eager to avoid. After all, in the case of the block size, the implication of not changing Satoshi’s “rules” is to limit the number of transactions and support the “Bitcoin is digital gold” worldview. If humans made the rules, then appealing to the rules can never be non-political. Indeed, it’s arguably worse, because an appeal to “rules” forecloses debate on the real world effects of said rules.
  </p>
  <h4>
   The Diversity Blind Spot
  </h4>
  <p>
   Today is International Women’s Day; I’m tempted to cynically pretend that it was my idea all along to use this fact as a segue, but the fact of the matter is I’m an oblivious male who found out via Facebook:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2.jpg">
    <img alt="FullSizeRender 2" class="aligncenter size-large wp-image-2060" height="438" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2-1024x700.jpg" srcset="https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2-1024x700.jpg 1024w, https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2-300x205.jpg 300w, https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2-768x525.jpg 768w, https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2-922x630.jpg 922w, https://stratechery.com/wp-content/uploads/2016/03/FullSizeRender-2.jpg 1242w" width="640"/>
   </a>
  </p>
  <p>
   Facebook has over the last few years self-documented just how unrepresentative they are when it comes to demographic diversity: only 16% of technical jobs and only 23% of senior positions are held by women, and only 9% of the work-force is not white or Asian. Other Silicon Valley giants are barely better — women hold 20% of technical jobs at Apple, 17% at Google and LinkedIn — while Twitter is significantly worse: only 10% of technical employees are women.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_2058" id="identifier_4_2058" title="Data from this article">
    5
   </a>
  </p>
  <p>
   It was Twitter that exposed me to fact that I, despite my expressed support for women and diversity, had my own blind spots. Last spring in
   <a href="https://stratechery.com/2015/twitter-needs-new-leadership/">
    Twitter Needs New Leadership
   </a>
   I painstakingly laid out how the service’s minuscule growth and seeming inability to evolve the product were a significant problem necessitating change; the next day I was
   <a href="https://twitter.com/Spacekatgal/status/594177366961856512">
    called out on Twitter
   </a>
   for not even mentioning Twitter’s abuse problem.
  </p>
  <p>
   The criticism was absolutely fair: a platform that is inhospitable for 50% of the world’s population will by definition have a growth problem, and while I still don’t think it’s
   <a href="https://stratechery.com/2016/how-facebook-squashed-twitter/">
    the primary reason
   </a>
   Twitter’s growth has stalled, to not even acknowledge the effect of abuse was a pretty bad oversight on my part that falls uncomfortably close to my International Women’s Day observance: being a male I had to be hit over the head by it.
  </p>
  <p>
   You could certainly say the same thing about Twitter the company: Dick Costolo, the CEO I was criticizing, did
   <a href="http://www.theverge.com/2015/2/4/7982099/twitter-ceo-sent-memo-taking-personal-responsibility-for-the">
    finally admit Twitter had an abuse problem
   </a>
   , and current CEO Jack Dorsey has
   <a href="https://blog.twitter.com/2016/announcing-the-twitter-trust-safety-council">
    taken some steps
   </a>
   to address it, but said problem may be intractable thanks to decisions made in the earliest days of Twitter, particularly the allowance of anonymous accounts that can @-mention anyone on the service.
   <a class="footnote-link footnote-identifier-link" href="#footnote_5_2058" id="identifier_5_2058" title="I am aware that forcing real names has its own problems, including in cases of domestic abuse, stalkers, and more">
    6
   </a>
   Does it come as any surprise that, if Nick Bilton’s
   <a href="http://hatchingtwitter.com">
    Hatching Twitter
   </a>
   is to be believed, the internal Odeo team that first developed Twitter was all male, and the first female on the service had spent her first few months at work fending off Dorsey despite her repeated protestations that she had a boyfriend?
  </p>
  <p>
   This is why diversity matters — and it arguably matters even more at new companies that are right now creating the “rules” of their products that, should they be successful, will be all but impossible to change. For years Twitter ignored that it had a problem,
   <a href="http://www.npr.org/sections/alltechconsidered/2013/03/21/174858681/on-its-7th-birthday-is-twitter-still-the-free-speech-party">
    insisting it represented
   </a>
   the “free speech wing of the free speech party”, ignorant of just how much speech was being suppressed by allegedly neutral “rules” that, by virtue of who made them, were blind to the impact they would have on women.
   <a class="footnote-link footnote-identifier-link" href="#footnote_6_2058" id="identifier_6_2058" title="This problem isn’t limited to GamerGate. Check out this story in Sports Illustrated about what women in the sports world have to deal with">
    7
   </a>
  </p>
  <h4>
   There Is No Neutral
  </h4>
  <p>
   The importance of understanding the inherently political nature of rules goes deeper than simply saying diversity is important; it also gets at how we as an industry should think about solutions. It is tempting to argue that companies should simply double-down on meritocracy and ensure they are selecting the best possible candidate; remove human judgment to the greatest degree possible. But then it must be asked, on what criteria would hiring decisions be made? Specifically,
   <em>
    who
   </em>
   would be making these neutral “rules”?
  </p>
  <p>
   I get the allure of simply declaring that from now on everything is equal: men and women will be treated the same, we will be color-blind, etc. It’s neat, like math.
   <a class="footnote-link footnote-identifier-link" href="#footnote_7_2058" id="identifier_7_2058" title="I mean it when I say I sympathize with this position: in my younger years I used to write exactly that">
    8
   </a>
   It’s also unserious: foreclosing on measures that address past injustices ensures the effects of those injustices become cemented in place; to be “color-blind” or “gender-neutral” is neutral in language but fundamentally political when it comes to its effect.
  </p>
  <p>
   Ultimately, I don’t know what will happen to Bitcoin, but I’m skeptical of folks who are attracted to it because it allegedly removes humans from the equation: that is and always has been an idea that only makes sense in the very narrowest view of a single Bitcoin transaction, as we are seeing all too clearly in the community’s inability to address a relatively minor issue.
   <a class="footnote-link footnote-identifier-link" href="#footnote_8_2058" id="identifier_8_2058" title="And, I’d add, a relatively small number of miners actually have nearly complete power when it comes to deciding this">
    9
   </a>
  </p>
  <p>
   More broadly, I hope that the fundamental humanity that goes into any decision — product, policy, or otherwise — is appreciated by everyone in tech. Just as products and companies are either growing or dying, so too efforts to make the technology industry more accurately reflect, and thus better serve (and better monetize!) the diversity of the human race, are either explicitly improving the status quo or implicitly embracing it. There are no neutral “rules.”
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2058">
    There are theoretically thousands if not millions of distributions, and effectively hundreds that are actively maintained [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2058">
    The value of all of the Bitcoins in your fiat money of choice [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2058">
    <a href="http://bitscan.com/bitnews/item/how-many-people-really-own-bitcoins-and-why-does-it-matter">
     Probably not millions
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2058">
    To be clear, I completely disagree with it [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_2058">
    Data from
    <a href="http://fortune.com/2014/08/29/how-tech-companies-compare-in-employee-diversity/">
     this article
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_4_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_2058">
    I am aware that forcing real names has its own problems, including in cases of domestic abuse, stalkers, and more [
    <a class="footnote-link footnote-back-link" href="#identifier_5_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_6_2058">
    This problem isn’t limited to GamerGate. Check out
    <a href="http://www.si.com/cauldron/2015/09/27/twitter-threats-vile-remarks-women-sports-journalists">
     this story in Sports Illustrated
    </a>
    about what women in the sports world have to deal with [
    <a class="footnote-link footnote-back-link" href="#identifier_6_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_7_2058">
    I mean it when I say I sympathize with this position: in my younger years I used to write exactly that [
    <a class="footnote-link footnote-back-link" href="#identifier_7_2058">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_8_2058">
    And, I’d add, a relatively small number of miners actually have nearly complete power when it comes to deciding this [
    <a class="footnote-link footnote-back-link" href="#identifier_8_2058">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2058" href="https://stratechery.com/2016/bitcoin-and-diversity/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2058" href="https://stratechery.com/2016/bitcoin-and-diversity/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2058" href="https://stratechery.com/2016/bitcoin-and-diversity/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2016/bitcoin-and-diversity/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

