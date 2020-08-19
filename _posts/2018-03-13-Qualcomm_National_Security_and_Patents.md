---
layout: post
title: "Qualcomm, National Security, and Patents"
date: 2018-03-13T11:14:53+00:00
author: Ben Thompson
from: https://stratechery.com/2018/qualcomm-national-security-and-patents/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3119 post type-post status-publish format-standard hentry category-articles topics-cfius topics-government-organizations topics-law topics-patents concepts-antitrust concepts-company-structure concepts-evolution-of-technology concepts-incentives concepts-making-money concepts-politics concepts-privacy concepts-technology-and-society concepts-the-future companies-broadcom companies-qualcomm" id="post-3119">
 <header class="entry-header">
  <h1 class="entry-title">
   Qualcomm, National Security, and Patents
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-03-13T04:14:53-07:00">
     Tuesday, March 13, 2018
    </time>
    <time class="updated" datetime="2018-04-16T20:38:51-07:00">
     Monday, April 16, 2018
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
   From the
   <a href="https://www.nytimes.com/2018/03/12/technology/trump-broadcom-qualcomm-merger.html">
    New York Times
   </a>
   :
  </p>
  <blockquote>
   <p>
    President Trump on Monday blocked Broadcom’s $117 billion bid for the chip maker Qualcomm, citing national security concerns and sending a clear signal that he was willing to take extraordinary measures to promote his administration’s increasingly protectionist stance. In a presidential order, Mr. Trump said “credible evidence” had led him to believe that if Singapore-based Broadcom were to acquire control of Qualcomm, it “might take action that threatens to impair the national security of the United States.” The acquisition, if it had gone through, would have been the largest technology deal in history.
   </p>
   <p>
    Mr. Trump’s decision to prohibit the blockbuster deal underscored the lengths that he is willing to go to shelter American companies from foreign competition. In recent weeks, the president has turned to an arsenal of tools — including tariffs and an obscure government review panel — to ward off foreign control in American industries and, in particular, thwart the rise of China. The president has focused many of these actions on the technology industry. While the United States has long claimed an advantage in tech, it is now facing emboldened rivals in China, where the government has heavily invested in everything from semiconductors to wireless networks to artificial intelligence. Through its recent actions, the White House has revealed its view that the country’s national security is tied to its advancement of those technologies.
   </p>
  </blockquote>
  <p>
   I can see why the New York Times (and most other commentators) immediately attributed this decision to protectionism: not only does that match President Trump’s rhetoric both on the campaign trail and also in office, but it follows closely on the decision to impose tariffs on imported steel. Moreover, Broadcom is a Singapore-based company (and Singapore is a U.S. ally) that had
   <a href="https://www.reuters.com/article/us-qualcomm-m-a-broadcom/singapore-based-broadcom-to-redomicile-to-u-s-by-april-3-idUSKCN1GO15X">
    promised to move back to the U.S.
   </a>
   . National security, at least at first glance, looks like a fig leaf.
  </p>
  <p>
   In fact, though, I think the Trump administration got this right.
  </p>
  <h4>
   Understanding Qualcomm
  </h4>
  <p>
   To understand why, go back to
   <a href="https://stratechery.com/2014/daily-update-facebook-crushes-earnings-qualcomms-china-problem/">
    this Daily Update I wrote about Qualcomm in 2014
   </a>
   :
  </p>
  <blockquote>
   <p>
    Qualcomm’s situation is a little hard to understand, so let me try to unpack it. Please note I’ll likely oversimplify a bit!
   </p>
   <ul>
    <li>
     Qualcomm has two primary businesses: selling chips (they are most famous for their systems-on-a-chip, but actually most of their revenue is from their communications chips) and licensing (Qualcomm has the vast majority of patents used in CDMA, and a good portion of LTE)
    </li>
    <li>
     Chips drive more revenue than do licenses (they sell for much higher prices, but they also cost money to make), but licenses drive the most profit (all of the costs are amortized)
    </li>
    <li>
     Qualcomm’s chip business, particularly its SoC’s, are threatened by the same headwinds that
     <a href="http://stratechery.com/2014/smartphone-truths-samsungs-inevitable-decline/">
      Samsung is facing
     </a>
     : they are a premium product in a market where prices are dropping rapidly. And, just as Apple is locking Samsung and others out of the premium market for smartphones as a whole, Apple’s use of their own chips means the exact same thing is happening to Qualcomm. Meanwhile, just as Chinese manufacturers are eating Samsung on the low end, other SoC makers — especially MediaTek — are doing the same to Qualcomm on the low-end
    </li>
    <li>
     This is not all bad news for Qualcomm: what makes their business so impressive is that they
     <em>
      still
     </em>
     make money on every phone for which they don’t supply chips because of their licensing business. Moreover, as I noted above, licensing has much higher margins, which helps drive Qualcomm’s profitability. This final point helps explain how Qualcomm’s earnings continue to increase while Samsung’s are starting to go down.
    </li>
    <li>
     The problem for Qualcomm is that their licensing business is much riskier: unlike the chip business, where payment is very straitforward (I give you X, you pay me Y), licensing depends on contractual agreements, and contractual agreements depend on the regulatory environment in which they are struck. And needless to say, China’s regulatory environment – from which Qualcomm derives 50% of its revenue – is an uncertain one
    </li>
   </ul>
  </blockquote>
  <p>
   That Daily Update was about China’s investigation of Qualcomm’s licensing practices, but the takeaway is not specifically about China: rather, note that Qualcomm’s business model is two pronged, that one prong is far more profitable, and that the other is far more cash intensive. This division has attracted activist investors eager to split the company apart; from a
   <a href="https://stratechery.com/2015/in-defense-of-markets-the-qualcomm-mess-uber-and-de-blasio/">
    2015 Daily Update
   </a>
   in the wake of pressure from Jana Partners:
  </p>
  <blockquote>
   <p>
    I don’t think there is any question that Qualcomm’s licensing unit in particular would be worth significantly more were it to be spun-out. That’s why, ultimately, I can’t really blame Jana Partners for pushing for a break-up…Qualcomm’s licenses by themselves would be a money gusher, at least for a few years, and while I think most investors are more long-term oriented than people think, I can absolutely understand the temptation — and associated price premium — associated with money in hand now.
   </p>
  </blockquote>
  <p>
   Again, these Daily Updates were written in 2014 and 2015, when Qualcomm’s position was stronger than it is today: Android price points were higher (which directly impacted Qualcomm’s royalties), the company hadn’t
   <a href="https://stratechery.com/2015/daily-update-felix-salmon-thinks-journalism-bad-idea-qualcomms-china-settlement-amc-added-sling-tv/">
    lost its antitrust case in China
   </a>
   , and Apple had neither started sourcing modems from Intel nor
   <a href="https://stratechery.com/2017/qualcomm-sued-by-ftc-apple-the-cases-against-qualcomm-google-buys-google-ads/">
    sued Qualcomm
   </a>
   about its licensing fees.
  </p>
  <h4>
   Broadcom’s Plan
  </h4>
  <p>
   This is the context of Broadcom’s proposed $117 billion acquisition, which was to be
   <a href="https://www.bloomberg.com/news/articles/2018-02-12/broadcom-lines-up-106-billion-of-debt-funding-for-qualcomm-deal">
    financed with $106 billion in debt
   </a>
   ; the way these deals work is that acquirers — usually private equity firms, but sometimes companies (although one could argue that the current iteration of Broadcom is a chip-focused private equity firm) — use debt to acquire cash flow-rich companies, use that cash flow to pay off the debt, and in the meantime strip out all of the parts that don’t contribute to said cash flow. Oftentimes this is justified for reasons that go beyond maximizing cash flow — lots of companies would do better to return profits to shareholders than pursue management fantasies for which the company is fundamentally unsuited — but I’m not sure Qualcomm falls in that category. To go back to that 2015 update:
  </p>
  <blockquote>
   <p>
    The bigger question, of course, is whether “maximizing shareholder value” is always the best course of action; more specifically, what is the proper time horizon? In the case of Qualcomm, licensing and chip-making may be very different from a financial perspective, but they’re wonderful complements from a strategic and sustainability point-of-view: chip-making produces patents, which in turn generate outsized profits that enable Qualcomm to invest significant resources into developing new chips. It’s a virtuous cycle. It’s also one that pays off over the very long run: licensing revenues are not maximized (because of potential antitrust issues), and some portion of the profits is funneled into the lower margin chip business with the promise that said investment will result in licenses in the future, a somewhat risky bet that itself won’t fully pay off because some of that profit will itself be reinvested…
   </p>
   <p>
    Again, as I noted in the beginning, management tends to be very biased towards spending profits for its own ends and calling it long-term thinking; I don’t think it’s the worst thing in the world when investors insert some more accountability into capital allocation decisions. I do think Qualcomm is an exception though: I believe its current struggles are largely unrelated to its structure, and while that structure may not be ideal for short term returns, it is responsible for a remarkably innovative and durable company. I suspect this viewpoint will win out in the end, and to be fair, Qualcomm does have a lot of fat to trim when you compare its cost structure to that of rivals like Texas Instruments.
   </p>
  </blockquote>
  <p>
   One can certainly make the argument that I got the balance wrong — as I noted above, Qualcomm is in even worse shape than they were when I wrote that. Perhaps, from a pure shareholder perspective, squeezing every last dime out of Qualcomm’s licenses was the best thing to do.
  </p>
  <p>
   That, though, is precisely where the national security concerns come in. From the
   <a href="https://www.qcomvalue.com/wp-content/uploads/2018/03/Letter-from-Treasury-Department-to-Broadcom-and-Qualcomm-regarding-CFIUS.pdf">
    Committee on Foreign Investment in the United States’ (CFIUS’s) letter to Broadcom
   </a>
   :
  </p>
  <blockquote>
   <p>
    Reduction in Qualcomm’s long-term technological competitiveness and influence in standard setting would significantly impact U.S. national security. This is in large part because a weakening of Qualcomm’s position would leave an opening for China to expand its influence on the 5G standard-setting process. Chinese companies, including Huawei, have increased their engagement in 5G standardization working groups as part of their efforts to build out a 5G technology…While the United States remains dominant in the standards-setting space currently, China would likely compete robustly to fill any void left by Qualcomm as a result of this hostile takeover. Given well-known U.S. national security concerns about Huawei and other Chinese telecommunications companies, a shift to Chinese dominance in 5G would have substantial negative national security consequences for the United States.
   </p>
   <p>
    CFIUS, during the investigative period, will continue to assess the likelihood that acquisition of Qualcomm by Broadcom could result in a weakening of Qualcomm’s position in maintaining its long-term technological competitiveness. Specifically, Broadcom’s statements indicate that it is looking to take a “private-equity”-style direction if it acquires Qualcomm, which means reducing long-term investment, such as R&amp;R, and focusing on short-term profitability.
   </p>
  </blockquote>
  <p>
   This is why the focus on Broadcom’s Singaporean domicile misses the point — and why Broadcom’s promise to re-domicile in the U.S. didn’t matter either (as for Broadcom’s further promise to not halt investment in 5G, well, that process is nearly over — the issue is really about 6G and beyond). The entire issue is that the structure of the deal itself said far more clearly than anything else that Broadcom wanted to feast off of Qualcomm’s past innovations and contribute far less to future ones than Qualcomm would on its own. And, given
   <a href="https://stratechery.com/2018/att-pulls-out-of-huawei-deal-apples-other-china-problem-youtubes-logan-paul-decision/">
    ever-increasing Chinese dominance of wireless
   </a>
   , that is indeed a national security problem.
  </p>
  <h4>
   The Patent Problem
  </h4>
  <p>
   That noted, to the extent that Broadcom’s acquisition was a national security problem because of how future Qualcomm investment would be curtailed, the U.S. is lucky that Broadcom happened to be a foreign company — that is precisely why CFIUS’s review and President Trump’s order were even legal. Had Broadcom been a domestic entity CFIUS wouldn’t be involved at all, and President Trump would have much less discretionary power.
  </p>
  <p>
   To be sure, there would still be ways to block the deal, particularly the antitrust issues that would be raised by combining the two companies. The more significant issue, though, is that at least one company and a whole host of willing financiers agree with activist investors that Qualcomm would be better off milking licenses than in inventing new technologies.
  </p>
  <p>
   Again, some of the issues are structural: Apple’s dominance of the high-end market leaves would-be differentiated suppliers like Qualcomm stuck in the low-end. It’s worth noting, though, that other structural issues result from the U.S. government — specifically, patents. One more time from that 2015 update:
  </p>
  <blockquote>
   <p>
    I’d also add that this entire episode is ultimately about the distorting power of patents: the entire reason why Qualcomm’s licensing unit is so valuable and such a reliable source of cash is because of government-granted monopolies. Jana Partners’ core dispute with the company is that it is using the results of its innovation to innovate more instead of simply collecting rent, an outcome certainly at odds with the reason the patent system was created in the first place.
   </p>
  </blockquote>
  <p>
   There is a certain amount of irony here: the government is intervening in the private market to stop the sale of a company that is being bought because of government-granted monopolies. Sadly, I doubt it will occur to anyone in government to fix the problem at its root, and Qualcomm would be the first to fight against the precise measures — patent overhaul — that would do more than anything to ensure the company remains independent and incentivized to spend even more on innovation, because its future would depend on innovation to a much greater degree than it does now.
  </p>
  <p>
   The reality is that
   <a href="https://stratechery.com/2017/lexmark-and-patent-exhaustion-patents-and-first-principles-lexmark-and-apple-versus-qualcomm/">
    technology has flipped the entire argument for patents — that they spur innovation — completely on its head
   </a>
   . The very nature of technology — that
   <a href="https://stratechery.com/2018/lessons-from-spotify/">
    costs are fixed
   </a>
   and best maximized over huge user-bases, along with the presence of network effects — mean there are greater returns to innovation than ever before. The removal of most technology patents would not reduce the incentive to innovate; indeed, given that a huge number of software patents in particular are violated on accident (unsurprising, given that software is ultimately math), their removal would spur more. And, as Qualcomm demonstrates, one could even argue such a shift would be good for national security.
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3119" href="https://stratechery.com/2018/qualcomm-national-security-and-patents/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3119" href="https://stratechery.com/2018/qualcomm-national-security-and-patents/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3119" href="https://stratechery.com/2018/qualcomm-national-security-and-patents/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/qualcomm-national-security-and-patents/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

