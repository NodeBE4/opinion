---
layout: post
title: "Trustworthy Networking"
date: 2017-10-03T14:00:53+00:00
author: Ben Thompson
from: https://stratechery.com/2017/trustworthy-networking/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2764 post type-post status-publish format-standard hentry category-articles topics-elections topics-government topics-networks topics-social concepts-advertising concepts-aggregation-theory concepts-business-models concepts-distribution-and-transaction-costs concepts-evolution-of-technology concepts-politics concepts-technology-and-society concepts-the-social-epoch concepts-unintended-consequence companies-facebook companies-microsoft" id="post-2764">
 <header class="entry-header">
  <h1 class="entry-title">
   Trustworthy Networking
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-10-03T07:00:53-07:00">
     Tuesday, October 3, 2017
    </time>
    <time class="updated" datetime="2018-03-26T23:37:34-07:00">
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
   Fifteen years on, this paragraph from a Bill Gates’ memo is a bit cringe-inducing:
  </p>
  <blockquote>
   <p>
    The events of last year — from September’s terrorist attacks to a number of malicious and highly publicized computer viruses — reminded every one of us how important it is to ensure the integrity and security of our critical infrastructure, whether it’s the airlines or computer systems.
   </p>
  </blockquote>
  <p>
   Equivocating computer viruses with the worst terrorist attack in U.S. history may be a bit over-the-top, but for Microsoft, anyways, 2001 was a period of real crisis: the company’s software was hit by seven different worms,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2764" id="identifier_0_2764" title="The Anna Kournikova, Sadmind, Sircam, Code Red, Code Red II, Nimda, and Klez worms, respectively">
    1
   </a>
   all following on the heels of the previous year’s massively damaging ILOVEYOU worm. More and more consumers were scared to even use their computers.
  </p>
  <p>
   That was the context for perhaps the second-most famous Gates’ memo —
   <a href="https://www.wired.com/2002/01/bill-gates-trustworthy-computing/">
    Trustworthy Computing
   </a>
   — from which the above excerpt was taken. This was the core takeaway:
  </p>
  <blockquote>
   <p>
    There are many changes Microsoft needs to make as a company to ensure and keep our customers’ trust at every level – from the way we develop software, to our support efforts, to our operational and business practices. As software has become ever more complex, interdependent and interconnected, our reputation as a company has in turn become more vulnerable. Flaws in a single Microsoft product, service or policy not only affect the quality of our platform and services overall, but also our customers’ view of us as a company…
   </p>
   <p>
    In the past, we’ve made our software and services more compelling for users by adding new features and functionality, and by making our platform richly extensible. We’ve done a terrific job at that, but all those great features won’t matter unless customers trust our software. So now, when we face a choice between adding features and resolving security issues, we need to choose security. Our products should emphasize security right out of the box, and we must constantly refine and improve that security as threats evolve.
   </p>
  </blockquote>
  <p>
   ‘Trustworthy Computing’ was in many respects the inevitable counterpart to Gates’ most-famous memo: 1995’s
   <a href="https://www.wired.com/2010/05/0526bill-gates-internet-memo/">
    The Internet Tidal Wave
   </a>
   :
  </p>
  <blockquote>
   <p>
    In this memo I want to make clear that our focus on the Internet is crucial to every part of our business. The Internet is the most important single development to come along since the IBM PC was introduced in 1981. It is even more important than the arrival of the graphical user interface (GUI).
   </p>
  </blockquote>
  <p>
   Obviously Gates was right, but the memo went further: it is packed with ideas about how Microsoft can “superset the Web” in order to “make it clear that Windows machines are the best choice for the Internet”; to that end Gates wrote, “I want every product plan to try and go overboard on Internet features.” And, when Microsoft did exactly that, the result was a set of products with massive security holes, resulting in a crisis. The faster you move towards the future, the more unintended consequences — security debt, if you will — there inevitably will be.
  </p>
  <p>
   The analogy to Facebook is straightforward: operating with the motto of “Move Fast and Break Things” the company has spent the last decade going overboard, as it were, on connecting everyone and everything. And then, to handle the deluge of information that resulted, the company helpfully presents an algorithmically curated News Feed that shows exactly what it thinks its users will enjoy seeing the most (engagement being a necessary proxy for enjoyment). It is truly a marvel: individual customization at global scale.
  </p>
  <p>
   There have, though, been side effects.
  </p>
  <h4>
   Russian Ads
  </h4>
  <p>
   I wrote about Russian political ads on Facebook
   <a href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/">
    two weeks ago
   </a>
   , explaining how the ads were bought through Facebook’s self-serve ad model; this allows the company’s five million advertisers — given that number, by definition the vast majority are small and medium-sized businesses — to run ads without having to interact with another human.
  </p>
  <p>
   This, I argued, was a good thing, and I absolutely stand by it. From that article:
  </p>
  <blockquote>
   <p>
    The biggest beneficiaries of zero transaction costs on the super-aggregators are not traditional advertisers, whether that be companies like CPG conglomerates or presidential campaigns. Both have the resources to advertise anywhere and everywhere, and indeed, often find that the fine-tooth targeting on super-aggregators isn’t worth the effort required. The folks that do benefit, though, are those that wouldn’t have a voice otherwise: startups and niche offerings, both in terms of business and politics. Google and Facebook have opened the field to far more entrants, and while that means there are more folks with bad intentions, there are also a whole lot more folks with ideas that were shut out by the significant transaction costs inherent in pre-Internet platforms.
   </p>
  </blockquote>
  <p>
   That line, “folks with bad intentions”, should sound familiar: that is exactly what led to Microsoft’s crisis in 2001. Instead of building for local networks that were protected by the fact that access was non-scalable (i.e. physical access was required), Microsoft products were now on the Internet where they could be attacked from anywhere by anyone. And, when you have to defend against anyone, the likelihood of facing “folks with bad intentions” becomes a certainty. So it is with Facebook self-serve ads.
  </p>
  <p>
   What is just as important to note, though, is that a scalable solution is also required. In the case of Microsoft, it obviously wasn’t viable to simply rip out Internet connectivity from its products; it is similarly foolhardy to suggest that Facebook abandon all of the benefits of the self-serve model by, for example, reviewing every ad.
  </p>
  <p>
   To reiterate the point, this is
   <em>
    impossible
   </em>
   . To use the Russian ad numbers as a proxy, consider the math:
  </p>
  <ul>
   <li>
    The $100,000 spent by 470 inauthentic account
    <a href="https://newsroom.fb.com/news/2017/09/information-operations-update/">
     identified by Facebook
    </a>
    was good for 3,000 ads, which means each ad cost an average of $30.
   </li>
   <li>
    As a quick but essential aside, this exercise is going to be a
    <em>
     very
    </em>
    rough approximation, because the price paid for an ad varies hugely depending on how finely targeted it is, and how competitive said targeting opportunities are. In the case of these ads,
    <a href="https://newsroom.fb.com/news/2017/10/hard-questions-russian-ads-delivered-to-congress/">
     Facebook revealed yesterday
    </a>
    that for 50% of the ads less than $3 was spent, and for 99% of the ads less than $1,000 was spent (and 25% weren’t even shown because they failed to win the auction for the audience they targeted). However, given that Facebook only reveals the percentage change in its average price per ad, not the actual amount, $30 is the best we can do.
   </li>
   <li>
    Last quarter Facebook had $9.2 billion in ad revenue, which was an increase of 47% over the year prior. Using that $30/ad number, that means last quarter there were approximately 276 million unique ads on Facebook (each of which could be shown multiple times, of course).
   </li>
  </ul>
  <p>
   Again, the actual number could be different than this by a huge margin — it is very likely that this Russian ad buy is not at all representative — but that margin could go in either direction. The important takeaway is that looking at every ad means effectively killing self-serve, which not only kills Facebook’s revenue model, but, far more importantly, removes a truly accessible and
   <a href="https://stratechery.com/2016/facebooks-earnings-facebook-and-new-market-disruption-facebooks-share-reclassification/">
    disruptive
   </a>
   advertising channel for small and medium businesses, particularly those uniquely enabled by the Internet.
  </p>
  <h4>
   Fixing Facebook Ads
  </h4>
  <p>
   What makes far more sense is for Facebook to find a point of leverage; for Microsoft, this was relatively easy — harden the operating system, which the company did with XP Service Pack 2. Facebook’s challenge is harder, but the point of leverage seems clear: advertisers themselves, not advertisements; after all, 5 million all-time is a much more manageable number than 276 million a quarter. To that end,
   <a href="https://newsroom.fb.com/news/2017/10/improving-enforcement-and-transparency/">
    the company also announced yesterday
   </a>
   a change in how it handled U.S. political advertisers:
  </p>
  <blockquote>
   <p>
    <strong>
     Increasing requirements for authenticity.
    </strong>
    We’re updating our policies to require more thorough documentation from advertisers who want to run US federal election-related ads. Potential advertisers will have to confirm the business or organization they represent before they can buy ads. As Mark said, we won’t catch everyone immediately, but we can make it harder to try to interfere.
   </p>
  </blockquote>
  <p>
   This is the right point of leverage, but this policy change is inadequate. The only advertisers affected here are those that explicitly declare they are running ads for US federal elections; what about state elections, or other countries, or, pertinent to this case, bad actors?
  </p>
  <p>
   Facebook should increase requirements for authenticity from
   <em>
    all advertisers
   </em>
   , at least those that spend significant amounts of money or place a large number of ads. I do believe it is important to make it easy for small companies to come online as advertisers, so perhaps documentation could be required for a $1,000+ ad buy, or a cumulative $5,0000, or after 10 ads (these are just guesses; Facebook should have a much clearer idea what levels will increase the hassle for bad actors yet make the platform accessible to small businesses). This will make it more difficult for bad actors in elections of all kinds, or those pushing scummy advertising generally.
  </p>
  <p>
   Secondly, the most scalable counterweight to bad ads is massively increased transparency. Facebook took steps in this regard as well; from the same post:
  </p>
  <blockquote>
   <p>
    <strong>
     Making advertising more transparent.
    </strong>
    We believe that when you see an ad, you should know who ran it and what other ads they’re running — which is why we show you the Page name for any ads that run in your feed. To provide even greater transparency for people and accountability for advertisers, we’re now building new tools that will allow you to see the other ads a Page is running as well — including ads that aren’t targeted to you directly. We hope that this will establish a new standard for our industry in ad transparency. We try to catch content that shouldn’t be on Facebook before it’s even posted — but because this is not always possible, we also take action when people report ads that violate our policies. We’re grateful to our community for this support, and hope that more transparency will mean more people can report inappropriate ads.
   </p>
  </blockquote>
  <p>
   This will eliminate so-called
   <a href="https://www.wired.com/story/trump-dark-post-facebook-ads/">
    Dark Ads
   </a>
   which could only be seen by those targeted; again, though, Facebook didn’t go far enough. These ads can still only be seen by going to the actual pages, which are impossible to know about unless you are shown an ad; the company should have a central, searchable, repository of all those hundreds of millions of ads. Again, it is worth pointing out that this will hurt some small businesses (larger competitors can easily pick up on their marketing strategies), but the tradeoff when it comes to oversight of not just political ads but ads of all types is worth it.
  </p>
  <p>
   What Facebook has to realize is that while both of these proposals are likely to hurt the bottom line — the first will increase friction in advertisers coming on board (or ramping up spend), while the second will have a commodification effect on ads — this scandal is, to use Gates’ words, “not only affect[ing] the quality of our platform and services overall, but also [their] customers’ view of [them] as a company.” This matters because Facebook’s biggest risk is government regulation, and that is ultimately a political question, where the opinion of the body politic matters greatly.
  </p>
  <h4>
   Filter Bubbles
  </h4>
  <p>
   All that said, its worth stepping back for a moment and putting this scandal in context. I gently mocked Gates for equivocating computer viruses to terrorist attacks, but the suggestion that $100,000 in Facebook ads — of which only 46% ran before the election — swung the presidential results is just as questionable. Frankly, if spending $100,000 on Facebook had that level of return, the company would be worth many multiples of the $492 billion it is today! It is concerning and frustrating to me as a citizen to see so many spend far more time prosecuting these ads at the expense of a broader reflection on the state of the country.
  </p>
  <p>
   That includes Facebook, by the way. I actually tend to agree with Zuckerberg’s post-election comment — which he
   <a href="https://www.facebook.com/zuck/posts/10104067130714241?pnref=story">
    since apologized for
   </a>
   — that it was “crazy” to think that ‘Fake News’ influenced the election; my view is that
   <a href="https://stratechery.com/2016/fake-news/">
    Fake News
   </a>
   is a symptom of a far more serious problem:
   <a href="https://stratechery.com/2016/the-real-problem-with-facebook-and-the-news/">
    filter bubbles
   </a>
   .
  </p>
  <p>
   To that end, the Zuckerberg statement that truly concerned me was on the company’s
   <a href="https://seekingalpha.com/article/3992427-facebook-fb-mark-elliot-zuckerberg-q2-2016-results-earnings-call-transcript?part=single">
    Q2 2016 earnings call
   </a>
   ; this was a few months after
   <a href="https://stratechery.com/2016/defending-facebook-amazon-video-direct/">
    the brouhaha
   </a>
   over alleged bias in the Trending Topics module, and Zuckerberg was asked about the filter bubble problem:
  </p>
  <blockquote>
   <p>
    So we have studied the effect that you’re talking about, and published the results of our research that show that Facebook is actually, and social media in general, are the most diverse forms of media that are out there. And basically what — the way to think about this is that, even if a lot of your friends come from the same kind of background or have the same political or religious beliefs, if you know a couple of hundred people, there’s a good chance that even maybe a small percent, maybe 5% or 10% or 15% of them will have different viewpoints, which means that their perspectives are now going to be shown in your News Feed.
   </p>
   <p>
    And if you compare that to traditional media where people will typically pick a newspaper or a TV station that they want to watch and just get 100% of the view from that, people are actually getting exposed to much more different kinds of content through social media than they would have otherwise or have been in the past. So it’s a good sounding theory, and I can get why people repeat it, but it’s not true. So I think that that’s something that if folks read the research that we put out there, then they’ll see that.
   </p>
  </blockquote>
  <p>
   Actually,
   <em>
    this
   </em>
   is…questionable news (I can’t quite bring myself to use the obvious term). The Facebook-commissioned study Zuckerberg referenced had
   <a href="https://stratechery.com/2016/google-v-oracle-round-3-ftc-re-opening-google-search-investigation-facebook-and-filter-bubbles/">
    massive problems
   </a>
   , including a non-representative sample, a non-reviewable proprietary data set (thus making the study non-reviewable), and beyond that, the study’s results actually did support the idea of filter bubbles.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2764" id="identifier_1_2764" title="Further references here, here, here, and here ">
    2
   </a>
  </p>
  <p>
   It’s rather a meta problem: I suspect
   <a href="https://stratechery.com/2017/manifestos-and-monopolies/">
    Zuckerberg’s own bubble
   </a>
   makes him inclined to dismiss the possibility of filter bubbles, while the bubble Facebook’s most strident critics live in means they too are focusing on the wrong thing. Certainly this is a conversation where everyone has more to lose; those scapegoating Facebook probably don’t want to think about their own responsibility, such that it may be, for an election result they disagree with, and the stakes are even higher for Facebook: giving people what they want to see is far more important to the company’s business model than $100,000 in illegal ads,
   <a href="https://stratechery.com/2016/the-voters-decide/">
    unintended consequences
   </a>
   or not.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2764">
    The Anna Kournikova, Sadmind, Sircam, Code Red, Code Red II, Nimda, and Klez worms, respectively [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2764">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2764">
    Further references
    <a href="https://socialmediacollective.org/2015/05/07/the-facebook-its-not-our-fault-study/">
     here
    </a>
    ,
    <a href="https://medium.com/message/how-facebook-s-algorithm-suppresses-content-diversity-modestly-how-the-newsfeed-rules-the-clicks-b5f8a4bb7bab#.rh8tk7180">
     here
    </a>
    ,
    <a href="https://thesocietypages.org/cyborgology/2015/05/07/facebook-fair-and-balanced/">
     here
    </a>
    , and
    <a href="http://crookedtimber.org/2015/05/07/why-doesnt-science-publish-important-methods-info-prominently/">
     here
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2764">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2764" href="https://stratechery.com/2017/trustworthy-networking/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2764" href="https://stratechery.com/2017/trustworthy-networking/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2764" href="https://stratechery.com/2017/trustworthy-networking/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/trustworthy-networking/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

