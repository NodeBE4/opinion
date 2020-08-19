---
layout: post
title: "A Framework for Regulating Content on the Internet"
date: 2019-04-09T13:48:55+00:00
author: Ben Thompson
from: https://stratechery.com/2019/a-regulatory-framework-for-the-internet/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4127 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-content-moderation topics-copyrights topics-gdpr topics-law topics-regulation topics-social concepts-advertising concepts-aggregation-theory concepts-business-models concepts-distribution-and-transaction-costs concepts-ethics-and-mores concepts-free concepts-owning-customer-relationship concepts-platforms concepts-technology-and-society companies-facebook companies-google companies-youtube" id="post-4127">
 <header class="entry-header">
  <h1 class="entry-title">
   A Framework for Regulating Content on the Internet
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-04-09T06:48:55-07:00">
     Tuesday, April 9, 2019
    </time>
    <time class="updated" datetime="2020-07-24T18:37:20-07:00">
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
  <p>
   This week, when the U.K.’s Secretary of State for Digital, Culture, Media and Sport and the Secretary of State for the Home Department released
   <a href="https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/793360/Online_Harms_White_Paper.pdf">
    a white paper
   </a>
   calling for significantly increased regulation for tech companies, the scope of the debate was predictable. The
   <a href="https://www.technologyreview.com/s/613285/the-uks-online-laws-could-be-the-future-of-the-internetand-thats-got-people-worried/">
    MIT Technology Review
   </a>
   laid it out succinctly:
  </p>
  <blockquote>
   <p>
    Technology giants will be forced to have a “duty of care” for their users, if a proposal announced by the government on Monday becomes law. The proposal — a “white paper,” in UK legal parlance, which is one of the first stages of a formal government policy — is, on the surface at least, sweeping in scope and is a serious shot across the bows for big tech companies. But it has also raised some serious concerns about how it will be implemented and the possible consequences it might have on citizens’ free speech…
   </p>
   <p>
    The proposals have raised interest among academics and observers, and alarm among privacy campaigners. The former note that while the document is scant on details despite being tens of thousands of words long, it sets out a clear direction in a way few countries have been willing to do. But the latter fear that the way it is implemented could easily lead to censorship for users of social networks rather than curbing the excesses of the networks themselves.
   </p>
  </blockquote>
  <p>
   This proposal comes on the tail of an exposé in Bloomberg entitled
   <a href="https://www.bloomberg.com/news/features/2019-04-02/youtube-executives-ignored-warnings-letting-toxic-videos-run-rampant">
    YouTube Executives Ignored Warnings, Letting Toxic Videos Run Rampant
   </a>
   ; the debate around that piece, which I wrote about last week in two Daily Updates (
   <a href="https://stratechery.com/2019/youtube-and-toxic-videos-youtubes-problematic-incentives-sins-of-omission-and-commission/">
    here
   </a>
   and
   <a href="https://stratechery.com/2019/the-wall-street-journal-and-apple-news-the-problem-with-regulating-content-australias-terrible-new-law/">
    here
   </a>
   ), not only touched on the question of free speech, but also the sheer scale of the problem — and, relatedly, the sheer scale of Facebook of Google.
  </p>
  <h4>
   Problematic Regulation
  </h4>
  <p>
   In short, there are clear questions that arise around all of these exposés and proposals:
  </p>
  <ul>
   <li>
    First, what content should be regulated, if any, and by whom?
   </li>
   <li>
    Second, what is a viable way to monitor the content generated on these platforms?
   </li>
   <li>
    Third, how can privacy, competition, and free expression be preserved?
   </li>
  </ul>
  <p>
   You can see how these questions quickly arrive at competing answers when looking at recent attempts at regulation:
  </p>
  <ul>
   <li>
    GDPR has certainly increased the number of website click-throughs; it has also strengthened Facebook and
    <a href="https://stratechery.com/2019/mark-zuckerbergs-proposal-the-copyright-directive-and-sunk-costs-you-say-you-want-some-regulation/">
     especially Google’s competitive position
    </a>
    exactly
    <a href="https://stratechery.com/2017/the-gdpr-and-facebook-and-google-intelligent-tracking-prevention-data-portability-and-social-graphs/">
     as predicted
    </a>
    .
   </li>
   <li>
    The
    <a href="https://stratechery.com/2018/the-european-union-versus-the-internet/">
     European Copyright Directive
    </a>
    , specifically Article 13, makes platforms liable for copyright violations, and while the European Parliament took care to state that this wasn’t a requirement for a content filter, there is no other viable solution. Content filters are not only extremely difficult and expensive to develop (Google
    <a href="https://www.blog.google/outreach-initiatives/public-policy/protecting-what-we-love-about-internet-our-efforts-stop-online-piracy/">
     has spent $100 million plus on ContentID
    </a>
    ), entrenching the largest players that have the resources to fund development and the leverage to pay for it, they will also necessarily be overly strict, limiting user expression.
   </li>
   <li>
    Even more egregious than the Copyright Directive, amazingly enough, is
    <a href="https://stratechery.com/2019/the-wall-street-journal-and-apple-news-the-problem-with-regulating-content-australias-terrible-new-law/">
     Australia’s new law
    </a>
    about “abhorrent violent material” like the live-streaming of the horrific Christchurch mass shooting. Companies are liable if such content is discovered on their service
    <em>
     period
    </em>
    — being told it exists is sufficient evidence of recklessness — and worse, every company in the stack is liable, from ISPs to cloud providers to social networks. That leaves no choice but to spy on all user traffic or, for small-and-medium-sized platforms outside of Australia, avoid the country altogether.
   </li>
  </ul>
  <p>
   At the same times, the Christchurch video and its spread are clearly problematic — there is something off about the current state of affairs.
  </p>
  <h4>
   The Christchurch Video
  </h4>
  <p>
   It hardly bears noting that in a pre-Internet world there would be no widespread video of the Christchurch hate crime. Capturing video required specialized equipment, and more importantly, broadcasting video was limited to a small number of television stations, all of which, even if they had the video, would have exercised their editorial judgment to keep it off the air.
  </p>
  <p>
   What is critical to note, though, is that it is not a direct leap from “pre-Internet” to the Internet as we experience it today. The terrorist in Christchurch didn’t set up a server to livestream video from his phone; rather, he used Facebook’s built-in functionality. And, when it came to the video’s spread, the culprit was not email or message boards, but social media generally. To put it another way, to have spread that video on the Internet would be possible but difficult; to spread it on social media was trivial.
  </p>
  <p>
   The core issue is business models: to set up a live video streaming server is somewhat challenging, particularly if you are not technically inclined, and it costs money. More expensive still are the bandwidth costs of actually reaching a significant number of people. Large social media sites like Facebook or YouTube, though, are happy to bear those costs in service of a larger goal: building their advertising businesses.
  </p>
  <p>
   The key differentiator of
   <a href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/">
    Super-Aggregators
   </a>
   is that they have three-sided markets: users, content providers (which may include users!), and advertisers. Both content providers and advertisers want the user’s attention, and the latter are willing to pay for it. This leads to a beautiful business model from the perspective of a Super-Aggregator:
  </p>
  <ul>
   <li>
    Content providers provide content for free, facilitated by the Super-Aggregator
   </li>
   <li>
    Users view that content, and provide their own content, facilitated by the Super-Aggregator
   </li>
   <li>
    Advertisers can reach the exact users they want by paying the Super-Aggregator
   </li>
  </ul>
  <p>
   Everything is aligned from the Super-Aggregator perspective: users give attention that content providers work to earn, and advertisers compete to buy their way in.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309.png">
    <img alt="The three-way market of a Super-Aggregator" class="aligncenter size-large wp-image-4129" height="271" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309-1024x434.png" srcset="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309-1024x434.png 1024w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309-300x127.png 300w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309-768x325.png 768w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.309-1200x509.png 1200w" width="640"/>
   </a>
  </p>
  <p>
   Moreover, this arrangement allows Super-Aggregators to be relatively unconcerned with
   <em>
    what
   </em>
   exactly flows across their network: advertisers simply want eyeballs, and the revenue from serving them pays for the infrastructure to not only accommodate users but also give content suppliers the tools to provide whatever sort of content those users may want.
  </p>
  <p>
   That, there, is the rub: given that these platforms are basically
   <a href="https://stratechery.com/2019/the-alexandria-ocasio-cortez-phenomenon-ninjas-2018-facebook-and-the-human-condition/">
    reflections of humanity
   </a>
   , what users want varies from the beautiful to the profane — and things far more ugly than that. And worse, there is no editorial judgment to keep users from what they want, or suppliers from providing it. Indeed, that such sordid content can exist on YouTube and Facebook is testament to just how popular they are; that such content is effectively incentivized speaks to the fact that YouTube and Facebook’s moneymaking mechanism is completely divorced from this content match-making.
  </p>
  <h4>
   Market Failure
  </h4>
  <p>
   This is, in its own way, a market failure, albeit not, to be clear, in an economic sense: the allocation of goods and services by a Super-Aggregator is not only efficient, but also generates significant consumer surpluses. The failure, rather, comes from videos like that of the Christchurch massacre, or problematic YouTube content. It is not good for society that terrorists be able to freely broadcast their videos, or that
   <a href="https://www.buzzfeednews.com/article/charliewarzel/youtube-will-add-more-human-moderators-to-stop-its-child#.xtm3KJv1GP">
    child-exploitation videos spread on YouTube
   </a>
   .
  </p>
  <p>
   The problem is that there is no way to check this behavior: the vast majority of Facebook and YouTube users self-select away from this content, and while advertisers raise a fuss if they find out their ads are alongside this content, they have no incentive to leave the platforms entirely. That leaves Facebook and YouTube themselves, but while they would surely like to avoid PR black eyes, what they like even more is the limitless supply of attention and content that comes from making it easier for anyone anywhere to upload and view content of any type.
  </p>
  <p>
   Note how much different this is than a traditional customer-supplier relationship, even one mediated by a market-maker: users disgusted by Uber, for example, could switch to Lyft, directly impacting Uber’s bottom-line. Or go back a few years, when GoDaddy expressed support for SOPA copyright legislation: the company was
   <a href="https://www.theverge.com/2011/12/23/2657930/godaddy-withdraws-sopa-support-in-face-of-massive-protests">
    forced to change its position
   </a>
   in the face of widespread boycotts (including by yours truly). When users pay they have power; when users and those who pay are distinct, as is the case with these advertising-supported Super-Aggregators, the power of persuasion — that is, the power of the market — is absent.
  </p>
  <h4>
   The Three Frees
  </h4>
  <p>
   There are, in Internet parlance, three types of “free”:
  </p>
  <ul>
   <li>
    “Free as in speech” means the freedom or right to do something
   </li>
   <li>
    “Free as in beer” means that you get something for free without any additional responsibility
   </li>
   <li>
    “Free as in puppy” means that you get something for free, but the longterm costs are substantial
   </li>
  </ul>
  <p>
   Most in the West agree, at least in theory, with the idea that the Internet should preserve “free as in speech”; China in particular represents a cautionary tale as to how technology can be leveraged in the opposite direction. The question that should be asked, though, is if preserving “free as in speech” should also mean preserving “free as in beer.”
  </p>
  <p>
   Specifically, Facebook and YouTube offer “free as in speech” in conjunction with “free as in beer”: content can be created and proliferated without any responsibility, including cost. Might it be better if content that society deemed problematic were still “free as in speech”, but also “free as in puppy” — that is, with costs to the supplier that aligned with the costs to society?
  </p>
  <h4>
   A Regulatory Framework for the Internet
  </h4>
  <p>
   This distinction might square some of the circles I presented at the beginning: how might society regulate content without infringing on rights or destroying competitive threats to the largest incumbents?
  </p>
  <p>
   Start with this precept: the Internet ought to be available to anyone without any restriction. This means banning content blocking or throttling at the ISP level with regulation designed for the Internet. It also means that platform providers generally speaking should continue to not be liable for content posted on their services (platform providers include everything from AWS to Azure to shared hosts, and everything in-between); these platform providers can, though, choose to
   <em>
    not
   </em>
   host content suppliers they do not want to, whether because of their own corporate values or because they fear boycott from other customers.
  </p>
  <p>
   I think, though, that platform providers that primarily monetize through advertising should be in their own category: as I noted above, because these platform providers separate monetization from content supply and consumption, there is no price or payment mechanism to incentivize them to be concerned with problematic content; in fact, the incentives of an advertising business drive them to focus on engagement, i.e. giving users what they want, no matter how noxious.
  </p>
  <p>
   This distinct categorization is critical to developing regulation that actually addresses problems without adverse side effects. Australia, for example, has no need to be concerned about shared hosting sites, but rather Facebook and YouTube; similarly, Europe wants to rein in tech giants without — and I will give the E.U. the benefit of the doubt here — burdening small online businesses with massive amounts of red tape. And, from a theoretical perspective, the appropriate place for regulation is where there is market failure; constraining the application to that failure is what is so difficult.
  </p>
  <p>
   The result is a regulatory framework that looks like this:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310.png">
    <img alt="The regulatory framework for the Internet" class="aligncenter size-large wp-image-4128" height="312" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310-1024x499.png" srcset="https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310-1024x499.png 1024w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310-300x146.png 300w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310-768x374.png 768w, https://stratechery.com/wp-content/uploads/2019/04/Paper.stratechery-Year-One-copy.310-1200x585.png 1200w" width="640"/>
   </a>
  </p>
  <p>
   “Free as in speech” is guaranteed at the infrastructure level, the market polices platform providers generally (i.e. “free as in puppy”), while regulation is narrowly limited to businesses that are primarily monetized through advertising (i.e. “free as in beer”) and thus impervious to traditional content marketplace pressures.
  </p>
  <hr/>
  <p>
   This framework, to be clear, leaves many unanswered questions: what regulations, for example, are appropriate for companies like YouTube and Facebook? Are they even constitutional in the United States? Should we be concerned about the lack of competition in these regulated categories, or encouraged that there will now be a significant incentive to build competitive services that do not rely on advertising? What about VC-funded companies that have not yet specified their business models?
  </p>
  <p>
   Still, I think this framework provides a very important foundation for addressing many of the flaws in today’s regulatory proposals, particularly the unintended effects on small-and-medium sized businesses and the platforms that support them which, I believe, are critical for the economy of the future. Regulators and lawmakers should, as always, be wary that in the well-meaning attempt to shape the world as it is they foreclose the world that might be.
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4127" href="https://stratechery.com/2019/a-regulatory-framework-for-the-internet/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4127" href="https://stratechery.com/2019/a-regulatory-framework-for-the-internet/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4127" href="https://stratechery.com/2019/a-regulatory-framework-for-the-internet/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2019/a-regulatory-framework-for-the-internet/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

