---
layout: post
title: "The Uber Dilemma"
date: 2017-08-14T14:36:29+00:00
author: Ben Thompson
from: https://stratechery.com/2017/the-uber-dilemma/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2694 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-law topics-lawsuits topics-venture-capital concepts-business-models concepts-company-structure concepts-ethics-and-mores concepts-incentives concepts-technology-and-society companies-benchmark companies-uber" id="post-2694">
 <header class="entry-header">
  <h1 class="entry-title">
   The Uber Dilemma
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-08-14T07:36:29-07:00">
     Monday, August 14, 2017
    </time>
    <time class="updated" datetime="2018-03-26T23:08:59-07:00">
     Monday, March 26, 2018
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
   By far the most well-known “game” in game theory is the Prisoners’ Dilemma. Albert Tucker, who formalized the game and gave it its name in 1950,
   <a href="https://en.wikipedia.org/wiki/Prisoner%27s_dilemma">
    described it as such
   </a>
   :
  </p>
  <blockquote>
   <p>
    Two members of a criminal gang are arrested and imprisoned. Each prisoner is in solitary confinement with no means of communicating with the other. The prosecutors lack sufficient evidence to convict the pair on the principal charge. They hope to get both sentenced to a year in prison on a lesser charge. Simultaneously, the prosecutors offer each prisoner a bargain. Each prisoner is given the opportunity either to: betray the other by testifying that the other committed the crime, or to cooperate with the other by remaining silent. The offer is:
   </p>
   <ul>
    <li>
     If A and B each betray the other, each of them serves 2  years in prison
    </li>
    <li>
     If A betrays B but B remains silent, A will be set free and B will serve 3 years in prison (and vice versa)
    </li>
    <li>
     If A and B both remain silent, both of them will only serve 1 year in prison (on the lesser charge)
    </li>
   </ul>
  </blockquote>
  <p>
   The dilemma is normally presented in a payoff matrix like the following:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2017/08/Untitled-13.png">
    <img alt="" class="aligncenter size-large wp-image-2697" height="494" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/08/Untitled-13-1024x790.png" srcset="https://stratechery.com/wp-content/uploads/2017/08/Untitled-13-1024x790.png 1024w, https://stratechery.com/wp-content/uploads/2017/08/Untitled-13-300x231.png 300w, https://stratechery.com/wp-content/uploads/2017/08/Untitled-13-768x592.png 768w, https://stratechery.com/wp-content/uploads/2017/08/Untitled-13-817x630.png 817w, https://stratechery.com/wp-content/uploads/2017/08/Untitled-13.png 1337w" width="640"/>
   </a>
  </p>
  <p>
   What makes the Prisoners’ Dilemma so fascinating is that the result of both prisoners behaving rationally — that is betraying the other, which always leads to a better outcome for the individual — is a worse outcome overall: two years in prison instead of only one (had both prisoners behaved irrationally and stayed silent). To put it in more technical terms, mutual betrayal is the only
   <a href="https://en.wikipedia.org/wiki/Nash_equilibrium">
    Nash equilibrium
   </a>
   : once both prisoners realize that betrayal is the optimal individual strategy, there is no gain to unilaterally changing it.
  </p>
  <h4>
   TIT FOR TAT
  </h4>
  <p>
   What, though, if you played the game multiple times in a row, with full memory of what had occurred previously (this is known as an iterated game)? To test what would happen, Robert Axelrod set up a tournament and invited fourteen game theorists to submit computer programs with the algorithm of their choice; Axelrod described the winner in
   <a href="https://catalog.loc.gov/vwebv/search?searchCode=ISBL&amp;searchArg=0465021220&amp;searchType=1">
    The Evolution of Cooperation
   </a>
   :
  </p>
  <blockquote>
   <p>
    TIT FOR TAT, submitted by Professor Anatol Rapoport of the University of Toronto, won the tournament. This was the simplest of all submitted programs and it turned out to be the best! TIT FOR TAT, of course, starts with a cooperative choice, and thereafter does what the other player did on the previous move…
   </p>
   <p>
    Analysis of the results showed that neither the discipline of the author, the brevity of the program—nor its length—accounts for a rule’s relative success…Surprisingly, there is a single property which distinguishes the relatively high-scoring entries from the relatively low-scoring entries. This is the property of being nice, which is to say never being the first to defect.
   </p>
  </blockquote>
  <p>
   This is the exact opposite outcome of a single-shot Prisoners’ Dilemma, where the rational strategy is to be mean; when you’re playing for the long run it is better to be nice — you’ll make up any short-term losses with long-term gains.
  </p>
  <h4>
   Silicon Valley’s Iterated Game
  </h4>
  <p>
   What happens in Silicon Valley is far more complex than what can be described in a simple game of Prisoners’ Dilemma: instead of two actors, there are millions, and “games” are witnessed by even more. That, though, accentuates the degree to which Silicon Valley as a whole is an iterated game writ large: sure, short-term outcomes matter, but long-term outcomes matter most of all.
  </p>
  <p>
   That, for example, is why few folks are willing to criticize their colleagues or former companies:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2694" id="identifier_0_2694" title="Above and beyond problematic arbitration agreements ">
    1
   </a>
   today’s former co-worker or former manager is tomorrow’s angel investor or job reference, and memories are long and reputations longer.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2694" id="identifier_1_2694" title="This isn’t always a good thing: one reason serious issues like sexual harassment by venture capitalists go underreported is that the harassed worry about the long-term effect on their reputation — will future investors simply see them as trouble?">
    2
   </a>
   That holds particularly true for venture capitalists: as Marc Andreessen
   <a href="http://ritholtz.com/2017/05/mib-marc-andreessen-venture-capitalist-a16z/">
    told Barry Ritholtz on a recent podcast
   </a>
   , “We make our money on the [startups] that work and we make our reputation on the ones that don’t.”
  </p>
  <p>
   Note the use of plurals: a venture capitalist will invest in tens if not hundreds of companies over their career, while most founders will only ever start one company; that means that for the venture capitalist investing is an iterated game. Sure, there may be short-term gain in screwing over a founder or bailing on a floundering company, but it simply is not worth it in the long-run: word will spread, and a venture capitalists’ deal flow is only as good as their reputation.
  </p>
  <p>
   The most famous example of this is cemented in Valley lore. From
   <a href="http://www.simonandschuster.com/books/The-Facebook-Effect/David-Kirkpatrick/9781439102121">
    The Facebook Effect
   </a>
   :
  </p>
  <blockquote>
   <p>
    Facebook’s success was beginning to make waves. And in Silicon Valley, success attracts money. More and more investors were calling. Zuckerberg was uninterested. One of the supplicants was Sequoia Capital. Among the bluest of blue chip VCs, Sequoia had funded a string of giants—Apple, Cisco, Google, Oracle, PayPal, Yahoo, and YouTube, among many others. The firm is known in the Valley for a certain humorlessness and a willingness to play hardball. Sequoia eminence grise and consummate power player Michael Moritz had been on Plaxo’s board and was well acquainted with Sean Parker. It was not a mutual admiration society. Parker saw Moritz as having contributed to his downfall. [
    <em>
     Parker was fired from the company he founded by the board, including Moritz
    </em>
    ] “There was no way we were ever going to take money from Sequoia, given what they’d done to me,” says Parker.
   </p>
  </blockquote>
  <p>
   Plaxo raised a total of $19.3 million in the
   <a href="https://www.crunchbase.com/organization/plaxo#/entity">
    rounds in which Sequoia participated
   </a>
   ; was whatever percentage of that $19.3 million Sequoia put in worth missing out on the chance to invest in one of the greatest grand slams in the history of venture investing?
  </p>
  <p>
   The entire point of venture investing is to
   <a href="http://cdixon.org/2015/06/07/the-babe-ruth-effect-in-venture-capital/">
    hit grand slams
   </a>
   , and that calls for more swings of the bat. After all, the most a venture capitalist might lose on a deal — beyond time and opportunity cost, of course — is however much they invested; the downside is capped. Potential returns, though, can be many multiples of that investment. That is why, particularly as capital has flooded the Valley over the last decade, preserving the chance to make grand slam investments has been paramount. No venture capitalist wants to repeat Sequoia’s mistake: better to be “nice”, or, as they say in the Valley, “founder friendly.”
  </p>
  <h4>
   Benchmark Sues Kalanick
  </h4>
  <p>
   This is why what happened last week was so shocking: the venture capital firm Benchmark Capital filed suit against former Uber CEO Travis Kalanick for fraud, break of contract, and breach of fiduciary duty. From
   <a href="https://www.axios.com/benchmark-capital-sues-travis-kalanick-for-fraud-2471455477.html">
    Axios
   </a>
   :
  </p>
  <blockquote>
   <p>
    The suit revolves around the June 2016 decision to expand the size of Uber’s board of voting directors from eight to 11, with Kalanick having the sole right to designate those seats. Kalanick would later name himself to one of those seats following his resignation, since his prior board seat was reserved for the company’s CEO. The other two seats remain unfilled. Benchmark argues that it never would have granted Kalanick those three extra seats had it known about his “gross mismanagement and other misconduct at Uber” — which Benchmark claims included “pervasive gender discrimination and sexual harassment,” and the existence of confidential findings (a.k.a. The Stroz Report) that recently-acquired self-driving startup Otto had “allegedly harbored trade secrets stolen from a competitor.” Benchmark argues that this alleged nondisclosure of material information invalidates Benchmark’s vote to enlarge the board.
   </p>
   <p>
    Moreover, Benchmark alleges that Kalanick pledged in writing — as part of his resignation agreement — that the two empty board seats would be independent and subject to approval by the entire board (something Benchmark says was the reason it didn’t sue for fraud at the time). But, according to the complaint, Kalanick has not been willing to codify those changes via an amended voting agreement.
   </p>
  </blockquote>
  <p>
   Giving three extra seats on the board to the CEO was certainly founder friendly; that the expansion happened at the same time Uber
   <a href="https://www.nytimes.com/2016/06/02/technology/uber-investment-saudi-arabia.html?_r=0">
    accepted a $3.5 billion investment from Saudi Arabia’s Public Investment Fund
   </a>
   , which came with a board seat, suggests Benchmark viewed the board expansion as a way to protect its own interests and influence as well. After all, longtime Benchmark general partner and Uber board member Bill Gurley had been pursuing ride-sharing years before Uber came along, and the investor had penned multiple essays on his
   <a href="http://abovethecrowd.com">
    widely-read blog
   </a>
   defending and extolling Kalanick and company.
  </p>
  <p>
   Then again, by June 2016, when the board was expanded and the Saudi investment was announced, Gurley’s posts had taken a much sterner tone: specifically, in
   <a href="http://abovethecrowd.com/2015/02/25/investors-beware/">
    February 2015
   </a>
   Gurley warned that late-stage financing was very different than an IPO, and that it had “perverse effects on a company’s operating discipline.” A year later, in
   <a href="http://abovethecrowd.com/2016/04/21/on-the-road-to-recap/">
    April 2016
   </a>
   , Gurley said that the “Unicorn financing market just became dangerous…for all involved”, and that included Benchmark:
  </p>
  <blockquote>
   <p>
    For the most part, early investors in Unicorns are in the same position as founders and employees. This is because these companies have raised so much capital that the early investor is no longer a substantial portion of the voting rights or the liquidation preference stack. As a result, most of their interests are aligned with the common, and key decisions about return and liquidity are the same as for the founder. This investor will also be wary of the dirty term sheet which has the ability to wrestle away control of the entire company. This investor will also have sufficient angst about the difference between paper return and real return, and the lack of overall liquidity in the market. Or at least they should.
   </p>
  </blockquote>
  <p>
   I suspect this, more than anything, explains this unprecedented lawsuit.
  </p>
  <h4>
   The Uber Outlier
  </h4>
  <p>
   Benchmark is one of those most successful venture firms ever. Founded in 1995 with a commitment to early stage funding, the firm has, going by this chart
   <a href="https://www.cbinsights.com/research/benchmark-capital-teardown/">
    from CB Insights
   </a>
   been an investor in 14 IPOs, 11 in the last five years (the chart shows 13 and 10; I added Snapchat, which IPO’d earlier this year).
  </p>
  <p>
   <a href="https://www.cbinsights.com/research/benchmark-capital-teardown/">
    <img alt="" class="aligncenter size-large wp-image-2695" height="223" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/08/exits.benchmark.teardown_2.16-1024x356.jpg" srcset="https://stratechery.com/wp-content/uploads/2017/08/exits.benchmark.teardown_2.16-1024x356.jpg 1024w, https://stratechery.com/wp-content/uploads/2017/08/exits.benchmark.teardown_2.16-300x104.jpg 300w, https://stratechery.com/wp-content/uploads/2017/08/exits.benchmark.teardown_2.16-768x267.jpg 768w, https://stratechery.com/wp-content/uploads/2017/08/exits.benchmark.teardown_2.16.jpg 1102w" width="640"/>
   </a>
  </p>
  <p>
   The company’s investments include Twitter, Dropbox, Instagram, Zendesk, Hortonworks, New Relic, WeWork, Grubhub, OpenTable, and
   <a href="https://www.crunchbase.com/organization/benchmark/exits">
    many more
   </a>
   ; according to
   <a href="https://www.cbinsights.com">
    CB Insight
   </a>
   , since 2007, the companies Benchmark has invested in have exited (via IPO or acquisition) for a combined $75.96 billion.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2694" id="identifier_2_2694" title="According to CB Insight, IPO valuation is based on first day closing price; acquisition valuation is based on public pronouncements or whisper valuations">
    3
   </a>
  </p>
  <p>
   That, though, simply highlights what an outlier Uber is, at least on paper. Uber’s most recent valuation of $68.5 billion nearly matches the worth of
   <em>
    every successful Benchmark-funded startup since 2007
   </em>
   . Sure, it might make sense to treat company X and founder Y with deference; after all, there are other fish in the pond. Uber, though, is not another fish: it is the catch of a lifetime.
  </p>
  <p>
   That almost assuredly changed Benchmark’s internal calculus when it came to filing this lawsuit. Does it give the firm a bad reputation, potentially keeping it out of the next Facebook? Unquestionably. The sheer size of Uber though, and the potential return it represents, means that Benchmark is no longer playing an iterated game. The point now is not to get access to the next Facebook: it is to ensure the firm captures its share of the current one.
  </p>
  <p>
   This, I would note, is a lesson founders should learn: Kalanick was resolutely opposed to an IPO,
   <a href="http://www.businessinsider.com/uber-ceo-travis-kalanick-ipo-plan-2016-6">
    claiming
   </a>
   he would wait “as long as humanly possible”; his delay, though, completely flipped the incentives of Kalanick and his early investors. While in most companies the venture capitalists have to worry about their reputation along with their capital, in the case of Uber there is simply too much money at stake: transforming a $68 billion paper return to a real return (and guaranteeing a per partner return in the nine figures) is worth whatever reputational damage is incurred along the way.
  </p>
  <p>
   In other words, an iterated game is good for founders: it ensures venture capitalists are nice. Single move games, though, which Uber has become, often end badly for everyone, particularly founders.
  </p>
  <h4>
   Diminished Uber
  </h4>
  <p>
   Understanding that Benchmark is focused on achieving liquidity on its all-time greatest investment suggests two potential outcomes:
  </p>
  <ul>
   <li>
    The most straightforward is that Benchmark hopes to push Uber to an IPO sooner-rather-than-later; clearly Kalanick was an obstacle as CEO, and
    <a href="https://www.theinformation.com/kalanick-took-steps-to-regain-board-control-at-uber">
     according to reports
    </a>
    , has sought to reestablish control of the company via his control of the board,
    <a href="https://www.nytimes.com/2017/07/30/technology/uber-search-for-new-ceo-kalanick-huffington-whitman.html">
     driving away Meg Whitman
    </a>
    , who was reportedly Benchmark’s choice for CEO.
    <a class="footnote-link footnote-identifier-link" href="#footnote_3_2694" id="identifier_3_2694" title="Whitman is most famous for her stewardship of eBay, Benchmark’s first big breakthrough investment">
     4
    </a>
    This also explains the urgency of this suit: Benchmark is trying to prevent Kalanick from naming two more members to the board, further complicating the CEO selection process.
   </li>
   <li>
    The other potential outcome is that Benchmark is looking for an exit. Softbank, which is
    <a href="https://stratechery.com/2017/uber-and-yandex-grab-raises-2-billion-softbank-ride-sharing-and-capital/">
     looking to dominate car-sharing globally
    </a>
    , has reportedly
    <a href="https://www.theinformation.com/at-45-billion-price-softbank-talks-enflame-uber-tensions">
     had discussions with Benchmark and other investors
    </a>
    about buying their shares; reports have been mixed as to who wants to make a deal — Kalanick or Benchmark — but if it is the latter a lawsuit is an excellent way of getting the former to agree to a sale.
   </li>
  </ul>
  <p>
   There is a third possibility: that Uber broadly and Kalanick specifically are in big trouble when it comes to Waymo’s lawsuit against the company, and that Benchmark is making clear that it is not culpable. A full six pages
   <a href="https://www.documentcloud.org/documents/3922911-67730336-DE-Verified-Complaint-FINAL.html">
    of Benchmark’s lawsuit
   </a>
   were dedicated to describing Kalanick’s role in the Otto acquisition and Benchmark’s obliviousness to alleged wrongdoing;
   <a href="https://stratechery.com/2017/waymos-lawsuit-against-uber-existential-logic-uber-and-googles-miscalculation/">
    I noted when the lawsuit was filed
   </a>
   that it, more than any of Uber’s scandals, had the potential to be Kalanick’s doom, and apparently Benchmark agrees (although, of course, one should question why Gurley, then an Uber board member, apparently declined to do more digging on a $680 million acquisition).
  </p>
  <p>
   What is without question, though, is that whatever outcome results from this mess will be a suboptimal one; most Uber critics still fail to appreciate that the ride-sharing market is
   <a href="https://stratechery.com/2014/uber-fights/">
    demand driven
   </a>
   , which meant Uber really did have a chance to be the transportation behemoth of much of the world. Now the company is retreating throughout Asia, is on the regulatory run in Europe, and stuck in a fight it should have never drawn out with Lyft in the United States. Perhaps Benchmark will get its all-time great return, reputations be damned. It seems unlikely its return will be what it once might have been.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2694">
    Above and beyond
    <a href="https://www.wired.com/story/uber-susan-fowler-travis-kalanick-arbitration/">
     problematic arbitration agreements
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2694">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2694">
    This isn’t always a good thing: one reason serious issues like
    <a href="https://stratechery.com/2017/the-justin-caldbeck-affair-the-enablers-avis-hertz-waymo-and-apple/">
     sexual harassment by venture capitalists
    </a>
    go underreported is that the harassed worry about the long-term effect on their reputation — will future investors simply see them as trouble? [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2694">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2694">
    According to CB Insight, IPO valuation is based on first day closing price; acquisition valuation is based on public pronouncements or whisper valuations [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2694">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2694">
    Whitman is most famous for her stewardship of eBay, Benchmark’s first big breakthrough investment [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2694">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2694" href="https://stratechery.com/2017/the-uber-dilemma/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2694" href="https://stratechery.com/2017/the-uber-dilemma/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2694" href="https://stratechery.com/2017/the-uber-dilemma/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/the-uber-dilemma/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

