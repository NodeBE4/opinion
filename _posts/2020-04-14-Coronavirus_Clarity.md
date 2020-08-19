---
layout: post
title: "Coronavirus Clarity"
date: 2020-04-14T14:36:32+00:00
author: Ben Thompson
from: https://stratechery.com/2020/coronavirus-clarity/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4804 post type-post status-publish format-standard hentry category-articles topics-covid19 concepts-aggregation-theory concepts-antitrust concepts-distribution-and-transaction-costs concepts-technology-and-society companies-amazon companies-apple companies-facebook companies-google companies-microsoft" id="post-4804">
 <header class="entry-header">
  <h1 class="entry-title">
   Coronavirus Clarity
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2020-04-14T07:36:32-07:00">
     Tuesday, April 14, 2020
    </time>
    <time class="updated" datetime="2020-05-07T09:55:22-07:00">
     Thursday, May 7, 2020
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
   Apple and Google, who last Friday
   <a href="https://www.apple.com/newsroom/2020/04/apple-and-google-partner-on-covid-19-contact-tracing-technology/">
    jointly
   </a>
   |
   <a href="https://blog.google/inside-google/company-announcements/apple-and-google-partner-covid-19-contact-tracing-technology">
    announced
   </a>
   new capabilities for contact tracing coronavirus carriers at scale, released a new statement yesterday clarifying that no government would tell them what to do. Or, to put it in the gentler terms conveyed by
   <a href="https://www.cnbc.com/2020/04/13/apple-and-google-contact-tracing-technology-cannot-be-mandatory.html">
    CNBC
   </a>
   :
  </p>
  <blockquote>
   <p>
    Apple and Google, normally arch-rivals, announced on Friday that they teamed up to build technology that enables public health agencies to write contact-tracing apps. The partnership is being closely watched: The two Silicon Valley giants are responsible for the two dominant mobile operating systems globally, iOS and Android, which together run almost 100% of smartphones sold, according to data from Statcounter…The fact that the apps work best when a lot of people use them have raised fears that governments could force citizens to use them. But representatives from both companies insist they won’t allow the technology to become mandatory…
   </p>
   <p>
    The way the system is envisioned, when someone tests positive for Covid-19, local public health agencies will verify the test, then use these apps to notify anybody who may have been within 10 or 15 feet of them in the past few weeks. The identity of the person who tested positive would never be revealed to the companies or to other users; their identity would be tracked using scrambled codes on phones that are unlocked only when they test positive. Only public health authorities will be allowed access these APIs, the companies said. The two companies have drawn a line in the sand in one area: Governments will not be able to require its citizens to use contact-tracing software built with these APIs — users will have to opt-in to the system, senior representatives said on Monday.
   </p>
  </blockquote>
  <p>
   The reality that tech companies, particularly the big five (Apple, Microsoft, Google, Amazon, and Facebook), effectively set the rules for their respective domains has been apparent for some time. You see this in debates about what content to police on Facebook or YouTube, what apps to allow and what rules to apply to them on iOS and Android, and the increasing essentiality of AWS and Azure to enterprise. What is critical to understand about this dominance is why it arises, why current laws and regulations don’t seem to matter, and what signal it is that actually drives big company decision-making.
  </p>
  <h4>
   Scale and Zero Marginal Costs
  </h4>
  <p>
   Tech, from the very beginning of Silicon Valley, has been about scale in a way few other industries have ever been: silicon, the core element in computer chips, is basically free, which meant the implication of zero marginal costs — and relatedly, the importance of investing in massive fixed costs — has been at the core of business from the time of Fairchild Semiconductor. From
   <a href="https://www.harpercollins.com/9780062226761/the-intel-trinity/">
    The Intel Trinity
   </a>
   by Michael Malone:
  </p>
  <blockquote>
   <p>
    What Noyce explained and Sherman Fairchild eventually believed was that by using silicon as the substrate, the base for its transistors, the new company was tapping into the most elemental of substances. Fire, earth, water, and air had, analogously, been seen as the elements of the universe by the pre-Socratic Greek philosophers. Noyce told Fairchild that these basic substance — essentially sand and metal wire — would make the material cost of the next generation of transistors essentially zero, that the race would shift to fabrication, and that Fairchild could win that race. Moreover, Noyce explained, these new cheap but powerful transistors would make consumer products and appliances so inexpensive that it would soon be cheaper to toss out and replace them with a more powerful version than to repair them.
   </p>
  </blockquote>
  <p>
   This single paragraph remains the most important lens with which to understand technology. Consider the big 5:
  </p>
  <ul>
   <li>
    Apple certainly incurs marginal costs when it comes to manufacturing devices, but those devices are sold with massively larger margins than Apple’s competitors
    <a href="https://stratechery.com/2016/everything-as-a-service/">
     thanks to software differentiation
    </a>
    ; software has huge fixed costs and zero marginal costs. That differentiation created the App Store platform, where developers differentiate Apple’s devices on Apple’s behalf without Apple having to pay them; in fact, Apple takes 30% of their revenue.
   </li>
   <li>
    Microsoft built its empire on software: Windows created the same sort of platform as iOS, while Azure is first-and-foremost about spending an overwhelming amount of money on hardware and then charging companies to rent it (followed by software differentiation with platform services); Office, meanwhile, has shifted from the very profitable model of writing software and then duplicating it endlessly for license fees to the extremely profitable model of writing software and then renting it endlessly for subscription payments.
   </li>
   <li>
    Google spends massively on software, data centers, and data collection to create virtuous cycles where users access its servers to gain access to 3rd-party content, whether that be web pages, videos, or ad-supported content, which incentivizes suppliers to create even more content that Google can leverage to make itself better and more valuable to users.
   </li>
   <li>
    AWS is the same model as Azure; Amazon.com has invested massive amounts of money on logistic capabilities — with huge marginal costs, to be clear, which has always
    <a href="https://stratechery.com/2018/amazon-go-and-the-future/">
     made Amazon unique
    </a>
    — to create an indispensable platform for suppliers and 3rd-party merchants.
   </li>
   <li>
    Facebook, like Google, spends massively on software, data centers, and data collection to create virtuous cycles where users access its servers to gain access to third-party content, but the real star of the show is first-party content that is exclusive to Facebook — making it incredibly valuable — and yet free to obtain.
   </li>
  </ul>
  <p>
   None of the activities I just detailed are illegal by any traditional reading of antitrust law (some of
   <a href="https://stratechery.com/2019/tech-and-antitrust/">
    Google’s activities
   </a>
   and
   <a href="https://stratechery.com/2018/antitrust-the-app-store-and-apple/">
    Apple’s App Store policies
   </a>
   come closest). The core problem are the returns to scale inherent in a world of zero marginal costs — first in the case of chips, and then in the case of software — that result in bigger companies becoming more attractive to both users and suppliers the larger they become, not less.
  </p>
  <h4>
   Understanding Versus Approval
  </h4>
  <p>
   Facebook, earlier this year, took this reality to its logical conclusion, at least as far as its battered image in the media was concerned. CEO Mark Zuckerberg, on the
   <a href="https://seekingalpha.com/article/4320025-facebook-inc-fb-ceo-mark-zuckerberg-on-q4-2019-results-earnings-call-transcript">
    company’s earnings call in January
   </a>
   , said:
  </p>
  <blockquote>
   <p>
    We’re also focused on communicating more clearly what we stand for. One critique of our approach for much of the last decade was that because we wanted to be liked, we didn’t always communicate our views as clearly because we were worried about offending people. So this led to some positive but shallow sentiment towards us and towards the company. And my goal for this next decade isn’t to be liked, but to be understood. Because in order to be trusted, people need to know what you stand for.
   </p>
   <p>
    So we’re going to focus more on communicating our principles, whether that’s standing up for giving people a voice against those who would censor people who don’t agree with them, standing up for letting people build their own communities against those who say that the new types of communities forming on social media are dividing us, standing up for encryption against those who say that privacy mostly helps bad people, standing up for giving small businesses more opportunity and sophisticated tools against those who say that targeted advertising is a problem, or standing up for serving every person in the world against those who say that you have to pay a premium in order to really be served.
   </p>
   <p>
    These positions aren’t always going to be popular, but I think it’s important for us to take these debates head-on. I know that there are a lot of people who agree with these principles, and there are a whole lot more who are open to them and want to see these arguments get made. So expect more of that this year.
   </p>
  </blockquote>
  <p>
   The social network, for once, was ahead of the curve, as the coronavirus showed just how critical it was to allow the free flow of information, something I detailed in
   <a href="https://stratechery.com/2020/zero-trust-information/">
    Zero Trust Information
   </a>
   :
  </p>
  <blockquote>
   <p>
    The implication of the Internet making everyone a publisher is that there is far more misinformation on an absolute basis, but that also suggests there is far more valuable information that was not previously available:
   </p>
   <p>
    <a href="https://stratechery.com/2020/zero-trust-information/">
     <img alt="A drawing of The Implication of More Information" class="size-large wp-image-4730" height="509" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2-1024x815.png" srcset="https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2-1024x815.png 1024w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2-300x239.png 300w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2-768x611.png 768w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2-791x630.png 791w, https://stratechery.com/wp-content/uploads/2020/03/Stratechery-2020-03-11-23.15.55-2.png 1280w" width="640"/>
    </a>
   </p>
   <p>
    It is hard to think of a better example than the last two months and the spread of COVID-19. From January on there has been extensive information about SARS-CoV-2 and COVID-19 shared on Twitter in particular, including supporting blog posts, and links to medical papers published at astounding speed, often in defiance of traditional media. In addition multiple experts including epidemiologists and public health officials have been offering up their opinions directly.
   </p>
   <p>
    Moreover, particularly in the last several weeks, that burgeoning network has been sounding the alarm about the crisis hitting the U.S. Indeed, it is only because of Twitter that we knew that the crisis had long since started (to return to the distribution illustration, in terms of impact the skew goes in the opposite direction of the volume).
   </p>
  </blockquote>
  <h4>
   The Problem With Experts
  </h4>
  <p>
   If I can turn solipsistic for a moment, while preparing that piece, I warned a friend that it would be controversial, and he couldn’t understand why. In fact, though, I turned out to be right: lots of members of
   <a href="https://overcast.fm/+QL2dcYbqY/2:28">
    the traditional media
   </a>
   didn’t like the piece at all, not because I attacked the traditional media — which I mostly didn’t, and in fact relied on its reporting, as I consistently do on Stratechery — but because I dared to suggest that a world without gatekeepers had upside, not just downside.
  </p>
  <p>
   I went further two weeks ago in
   <a href="https://stratechery.com/2020/unmasking-twitter/">
    Unmasking Twitter
   </a>
   , arguing that the media’s overreliance on experts was precisely why social media should not be censored:
  </p>
  <blockquote>
   <p>
    It sure seems like multiple health authorities — the experts Twitter is going to rely on — have told us that masks “are known to be ineffective”: is Twitter going to delete the many, many, many tweets — some of which informed this article — arguing the opposite?
   </p>
   <p>
    The answer, obviously, is that Twitter won’t, because this is another example of where Twitter has been a welcome antidote to “experts”; what is striking, though, is how explicitly this shows that Twitter’s policy is a bad idea, not just because it allows countries like China to indirectly influence its editorial decisions, but also because it limits the search for truth.
   </p>
  </blockquote>
  <p>
   Interestingly,
   <a href="https://www.vox.com/recode/2020/4/13/21214114/media-coronavirus-pandemic-coverage-cdc-should-you-wear-masks">
    this self-reflective piece
   </a>
   by Peter Kafka, appears to agree with at least the first part of that argument:
  </p>
  <blockquote>
   <p>
    As we head into the next phase of the pandemic, and as the stakes mount, it’s worth looking back to ask how the media could have done better as the virus broke out of China and headed to the US. Why didn’t we see this coming sooner? And once we did, why didn’t we sound the alarm with more vigor?
   </p>
   <p>
    If you read the stories from that period, not just the headlines, you’ll find that most of the information holding the pieces together comes from authoritative sources you’d want reporters to turn to: experts at institutions like the World Health Organization, the CDC, and academics with real domain knowledge.
   </p>
   <p>
    The problem, in many cases, was that that information was wrong, or at least incomplete. Which raises the hard question for journalists scrutinizing our performance in recent months: How do we cover a story where neither we nor the experts we turn to know what isn’t yet known? And how do we warn Americans about the full range of potential risks in the world without ringing alarm bells so constantly that they’ll tune us out?
   </p>
  </blockquote>
  <p>
   What is striking about Kafka’s assessment — which to be clear, should be applauded for its self-awareness and honesty — is the degree to which it effectively accepts the premise that journalists ought not think for themselves, but rather rely on experts.
  </p>
  <blockquote>
   <p>
    But when it came to grappling with a new disease they knew nothing about, journalists most often turned to experts and institutions for information, and relayed what those experts and institutions told them to their audience.
   </p>
  </blockquote>
  <p>
   Again, I appreciate the honesty; it backs up my argument in
   <em>
    Unmasking Twitter
   </em>
   that this reflected the traditional role the media played:
  </p>
  <blockquote>
   <p>
    In the analog world, politicians and experts needed the media to reach the general population; debates happened between experts, and the media reported their conclusions. Today, though, politicians and experts can go direct to people — note that I used nothing but tweets from experts above. That should be freeing for the media in particular, to not see Twitter as opposition, but rather as a source to challenge experts and authority figures, and make sure they are telling the truth and re-visiting their assumptions.
   </p>
  </blockquote>
  <p>
   This, notably, is another area where the biggest tech companies are far ahead.
  </p>
  <h4>
   The Waning of East Coast Media
  </h4>
  <p>
   Yesterday the
   <em>
    New York Times
   </em>
   wrote an article entitled,
   <a href="https://www.nytimes.com/2020/04/13/us/politics/coronavirus-response-california-washington-oregon.html">
    The East Coast, Always in the Spotlight, Owes a Debt to the West
   </a>
   :
  </p>
  <blockquote>
   <p>
    The ongoing effort of three West Coast states to come to the aid of more hard-hit parts of the nation has emerged as the most powerful indication to date that the early intervention of West Coast governors and mayors might have mitigated, at least for now, the medical catastrophe that has befallen New York and parts of the Midwest and South.
   </p>
   <p>
    Their aggressive imposition of stay-at-home orders has stood in contrast to the relatively slower actions in New York and elsewhere, and drawn widespread praise from epidemiologists. As of Saturday afternoon, there had been 8,627 Covid-19 related deaths in New York, compared with 598 in California, 483 in Washington and 48 in Oregon. New York had 44 deaths per 100,000 people. California had two.
   </p>
   <p>
    But these accomplishments have been largely obscured by the political attention and praise directed to New York, and particularly its governor, Andrew M. Cuomo. His daily briefings — informed and reassuring — have drawn millions of viewers and mostly flattering media commentary…
   </p>
   <p>
    This disparity in perception reflects a longstanding dynamic in America politics: The concentration of media and commentators in Washington and New York has often meant that what happens in the West is overlooked or minimized. It is a function of the time difference — the three Pacific states are three hours behind New York — and the sheer physical distance. Jerry Brown, the former governor of California, a Democrat, found that his own attempts to run for president were complicated by the state where he worked and lived.
   </p>
  </blockquote>
  <p>
   Jerry Brown ran for President in 1976, 1980, and 1992; this analysis was likely correct then — before the Internet. What seems more likely, now, though, is that this article takes a dose of my previous solipsism and doubles down: the
   <em>
    New York Times
   </em>
   may not pay particular attention to the West, but that is not necessarily reflective of the rest of the world.
  </p>
  <p>
   Critically, it is not reflective of tech companies: what has been increasingly whitewashed in the story of California and Washington’s success in battling the coronavirus
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_4804" id="identifier_0_4804" title="Above-and-beyond the whitewashing about what happened in the San Francisco Bay Area ">
    1
   </a>
   is the role tech companies played: the first work-from-home orders started
   <a href="https://stratechery.com/2020/covid-19-cancellations-apple-china-and-data-what-we-might-know/">
    around March 1st
   </a>
   , and
   <a href="https://stratechery.com/2020/disney-and-covid-19-the-coronavirus-ipo-in-defense-of-twitter/">
    within a week
   </a>
   nearly all tech companies had closed their doors; local governments followed another week later.
  </p>
  <p>
   This action by local governments was, to be clear, before the rest of the country, and without question saved thousands of lives; it should not be forgotten, though, that executives who listened not to the media but primarily to social and non-traditional media were the furthest ahead of the curve. In other words, it increasingly doesn’t matter who or what the media covers, or when: success comes from independent thought and judgment.
  </p>
  <h4>
   Coronavirus Clarity
  </h4>
  <p>
   This gets at why the biggest news to come out of Apple and Google’s announcement is, well, the lack of it. Specifically, we have a situation where two dominant companies — a clear oligopoly — are creating a means to track civilians, and there is no pushback. Moreover, it is baldly obvious that the only obstacle to this being involuntary is not the government, but rather Apple and Google. What is especially noteworthy is that the coronavirus crisis is the one time we might actually wish for central authorities to overcome privacy concerns, but these companies —
   <a href="https://stratechery.com/2020/the-apple-google-partnership-how-to-contain-the-coronavirus-apple-google-policy/">
    at least for now
   </a>
   — won’t do it.
  </p>
  <p>
   This is, in other words, the instantiation of Zuckerberg’s declaration that Facebook — and, apparently, tech broadly — would henceforth seek understanding, not necessarily approval. Apple and Google are leaning into their dominant position, not obscuring it or minimizing it. And, because it is about the coronavirus, we all accept it.
  </p>
  <p>
   It is, in fact, a perfect example of what I wrote about
   <a href="https://stratechery.com/2020/apple-amazon-and-common-enemies/">
    last week
   </a>
   :
  </p>
  <blockquote>
   <p>
    At the same time, I think there is a general rule of thumb that will hold true: the coronavirus crisis will not so much foment drastic changes as it will accelerate trends that were already happening. Changes that might have taken 10 or 15 years, simply because of the stickiness of the status quo, may now happen in far less time.
   </p>
  </blockquote>
  <p>
   This seems likely to be the case when it comes to tech dominance, or at least the acceptance thereof. The truth is we have been living in a world where tech answers to no one, including the media, but we have all — both tech and the media — pretended otherwise. Those days seem over.
  </p>
  <p>
   The truth, though, is that this is, unequivocally, a good thing. To have pretended otherwise — for Facebook to have curried favor, or Apple to pretend like it didn’t have market power — was a convenient lie for everyone involved. The media was able to feel powerful, and tech companies were able to consolidate their position without true accountability.
  </p>
  <p>
   What we desperately need is a new conversation that deals with the world as it will be and increasingly is, not as we delude ourselves into what once was and wish still were. Tech companies are powerful, but antitrust laws, formulated for oil and railroad companies, don’t really apply. East coast media may dominate traditional channels, but those channels are just one of many on social media, all commoditized in personalized feeds. Centralized governments, predicated on leveraging scale, may be no match for either hyperscale tech companies or, on the flipside, the micro companies that are unlocked by the existence of platforms.
  </p>
  <p>
   I don’t have all of the answers here, although I think new national legislative approaches, built on the assumption of zero marginal costs, in conjunction with a dramatic reduction in local regulatory red-tape, gets at what better approaches might look like. Figuring out those approaches, though, means clarity about where we actually are; for that, it turns out, a virus, so difficult to understand, is tremendously helpful.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4804">
    Above-and-beyond the whitewashing about
    <a href="https://missionlocal.org/2020/04/covid-atlantic-london-breed/">
     what happened in the San Francisco Bay Area
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_4804">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4804" href="https://stratechery.com/2020/coronavirus-clarity/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4804" href="https://stratechery.com/2020/coronavirus-clarity/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4804" href="https://stratechery.com/2020/coronavirus-clarity/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2020/coronavirus-clarity/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

