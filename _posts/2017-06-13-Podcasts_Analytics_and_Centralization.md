---
layout: post
title: "Podcasts, Analytics, and Centralization"
date: 2017-06-13T13:59:32+00:00
author: Ben Thompson
from: https://stratechery.com/2017/podcasts-analytics-and-centralization/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2628 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-audio topics-podcasts concepts-advertising concepts-aggregation-theory concepts-business-models concepts-commoditizing-suppliers companies-apple" id="post-2628">
 <header class="entry-header">
  <h1 class="entry-title">
   Podcasts, Analytics, and Centralization
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-06-13T06:59:32-07:00">
     Tuesday, June 13, 2017
    </time>
    <time class="updated" datetime="2018-03-27T00:10:46-07:00">
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
   Tucked into the last day of WWDC was a
   <a href="https://developer.apple.com/videos/play/wwdc2017/512/">
    session on podcasting
   </a>
   , and it contained some big news for the burgeoning industry. Before getting into the specific announcements, though, the session itself is worth a bit of analysis, particularly the opening from Apple Podcasts Business Manager James Boggs:
  </p>
  <blockquote>
   <p>
    First we want to talk for a moment about how we think about modern podcasts. Long-form and audio. We get excited about episodic content that entertains, informs, and inspires. We get excited and many of our users have gotten excited too.
   </p>
  </blockquote>
  <p>
   I went on to transcribe the next 500 or so words of Boggs’s presentation, which included various statistics on downloads, catalog size, and reach; a listing of Apple “partners” organized by media and broadcast organizations, public media, and independents; and even started in on Boggs’s review/promotion of individual podcasts like “Up and Vanished” and “Masters of Scale” before I realized Boggs was never going to actually say “how [Apple] think[s] about modern podcasts.” I won’t make you read the transcript — take my word when I say that there was nothing there.
  </p>
  <p>
   Still, that itself was telling; Boggs’s presentation perfectly reflects the state of podcasting today: Apple is an essential piece, even as they really don’t have anything to do with what is going on (but naturally, are happy to take credit).
  </p>
  <h4>
   A Brief History of Podcasts
  </h4>
  <p>
   Probably the first modern podcast was
   <a href="http://www.econtentmag.com/Articles/ArticleReader.aspx?ArticleID=13515">
    created by Dave Winer in 2003
   </a>
   , although it wasn’t called a “podcast”: that was coined
   <a href="https://www.theguardian.com/media/2004/feb/12/broadcasting.digitalmedia">
    by Ben Hammersley in 2004
   </a>
   , and the inspiration was Apple’s iPod. Still, while the media had a name, the “industry”, such that it was, was very much the wild west: a scattering of podcast creators, podcatchers (software for downloading the podcasts), and podcast listeners, finding each other by word-of-mouth.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267.png">
    <img alt="stratechery Year One - 267" class="aligncenter size-large wp-image-2629" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267-300x225.png 300w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267-768x576.png 768w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267-840x630.png 840w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-267.png 2048w" width="640"/>
   </a>
  </p>
  <p>
   A year later Apple made the move that cemented their current position as the accidental gorilla of the industry: iTunes 4.9 included support for podcasts and, crucially, the iTunes Music Store created a directory (Apple did not — and still does not — host the podcast files themselves). The landscape of podcasting was completely transformed:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268.png">
    <img alt="stratechery Year One - 268" class="aligncenter size-large wp-image-2630" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268-300x225.png 300w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268-768x576.png 768w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268-840x630.png 840w, https://stratechery.com/wp-content/uploads/2017/06/stratechery-Year-One-268.png 2048w" width="640"/>
   </a>
  </p>
  <p>
   Centralization occurs in industry after industry for a reason: everyone benefits, at least in the short term. Start with the users: before iTunes 4.9 subscribing and listening to a podcast was a multi-step process, and most of those steps were so obscure as to be effective barriers for all but the most committed of listeners.
  </p>
  <ul>
   <li>
    Find a podcast
   </li>
   <li>
    Get a podcatcher
   </li>
   <li>
    Copy the URL of the podcast feed into the podcatcher
   </li>
   <li>
    Copy over the audio file from the podcatcher into iTunes
   </li>
   <li>
    Sync the audio file to an iPod
   </li>
   <li>
    Listen to the podcast
   </li>
   <li>
    Delete the podcast from the iPod the next time you sync’d
   </li>
  </ul>
  <p>
   iTunes 4.9 made this far simpler:
  </p>
  <ul>
   <li>
    Find a podcast in the iTunes Store and click ‘Subscribe’
   </li>
   <li>
    Sync your iPod
   </li>
   <li>
    Listen
   </li>
  </ul>
  <p>
   Recounting this simplification may seem pedantic, but there is a point: this was the most important improvement for podcast creators as well. Yes, the iTunes Music Store offered an important new discovery mechanism, but it was the dramatic improvement to the user experience that, for the vast majority of would-be listeners, made podcasts even worth discovering in the first place. Centralized platforms win because they make things easier for the user; producers willingly follow.
  </p>
  <p>
   Interestingly, though, beyond that initial release, which was clearly geared towards selling more iPods, Apple largely left the market alone, with one important exception: in 2012 the company released a standalone Podcasts app for iOS in the App Store, and in 2014 the app was built-in to iOS 8. At that point the power of defaults did its job: according to the
   <a href="https://iabtechlab.com/wp-content/uploads/2016/07/Podcast-Metrics_September_2016.pdf">
    IAB Podcast Ad Metrics Guidelines
   </a>
   released last fall, the Apple Podcast App accounts for around 50% of all podcast players across all operating systems (iTunes is a further ~10%).
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2628" id="identifier_0_2628" title="For what it’s worth, Exponent has a much different profile: Apple Podcasts has about 13% share, while Overcast leads the way with 26% share, followed by (surprisingly!) Mobile Safari with 23%">
    1
   </a>
  </p>
  <h4>
   The Business of Podcasting
  </h4>
  <p>
   It’s not clear when the first podcast advertisement was recorded; a decent guess is
   <a href="https://twit.tv/shows/this-week-in-tech/episodes/67?autostart=false">
    Episode 67 of This Week in Tech
   </a>
   , recorded on September 3, 2006 (Topic: “Does the Google CEO’s place on Apple’s board presage a Sun merger?”). The sponsor was surprisingly familiar — Visa (“Safer, better money. Life takes Visa.”), and Dell joined a week later.
  </p>
  <p>
   Over the ensuing years, though, the typical podcast sponsor was a bit less of a name brand — unless, of course, you were a regular podcast listener, in which case you quickly knew the brands by heart: Squarespace, Audible, Casper Mattress, Blue Apron, and recent favorite MeUndies (because who doesn’t want to hear a host-read endorsement for underwear!). Companies like Visa or Dell were few and far between: a study by
   <a href="https://fivethirtyeight.com/features/but-first-a-word-from-100-podcast-sponsors/">
    FiveThirtyEight
   </a>
   suggested brand advertisers were less than five percent of ad reads.
  </p>
  <p>
   The reason is quite straightforward: for podcasts there is neither data nor scale. The data part is obvious: while podcasters can (self-)report download numbers, no one knows whether or not a podcast is played, or if the ads are skipped. The scale bit is more subtle: podcasts are both too small and too big. They are too small in that it is difficult to buy ads at scale (and there is virtually no quality control, even with centralized ad sellers like Midroll); they are too large in that the audience, which may be located anywhere in the world listening at any time, is impossible to survey in order to measure ad effectiveness.
  </p>
  <p>
   That is why the vast majority of podcast advertisers are actually quite similar: nearly all are transaction-initiated subscription-based services. The “transaction-initiated” bit means that there is a discrete point at which the customer can indicate where they heard about the product, usually through a special URL, while the “subscription-based” part means these products are evaluating their marketing spend relative to expected lifetime value. In other words, the only products that find podcast advertising worthwhile are those that expect to convert a listener in a measurable way
   <em>
    and
   </em>
   make a significant amount of money off of them, justifying the hassle.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2628" id="identifier_1_2628" title="This shows why Casper mattresses are the exception that proves the rule: mattresses are not a subscription service, but they are much more expensive than most products bought online, which achieves the same effect as far as lifetime value is concerned">
    2
   </a>
  </p>
  <p>
   The result is an industry that, from a monetization perspective, looks a lot like podcasting before iTunes 4.9; there are small businesses to be built, but the industry as a whole is stunted.
  </p>
  <h4>
   Apple Podcast Analytics
  </h4>
  <p>
   This is the context for what Apple actually announced. Jason Snell had a good summary at
   <a href="https://sixcolors.com/post/2017/06/apple-makes-major-podcast-updates/">
    Six Colors
   </a>
   :
  </p>
  <blockquote>
   <p>
    New extensions to Apple’s podcast feed specification will allow podcasts to define individual seasons and explain whether an episode is a teaser, a full episode, or bonus content. These extensions will be read by the Podcast app and used to present a podcast in a richer way than the current, more linear, approach…
   </p>
   <p>
    The other big news out of today’s session is for podcasters (and presumably for podcast advertisers): Apple is opening up in-episode analytics of podcasts. For the most part, podcasters only really know when an episode’s MP3 file is downloaded. Beyond that, we can’t really tell if anyone listens to an episode, or how long they listen—only the apps know for sure. Apple said today that it will be using (anonymized) data from the app to show podcasters how many people are listening and where in the app people are stopping or skipping. This has the potential to dramatically change our perception of how many people really listen to a show, and how many people skip ads, as well as how long a podcast can run before people just give up.
   </p>
  </blockquote>
  <p>
   The new extensions are a nice addition, and a way in which Apple can enhance the user experience to the benefit of everyone. As you might expect, though, I’m particularly interested in the news about analytics. Problem solved, right? Or is it problem caused? What happens when advertisers realize that everyone is skipping their ads?
  </p>
  <h4>
   Advertisers: Not Idiots
  </h4>
  <p>
   In fact, I expect these analytics to have minimal impact, at least in the short run. For one, every indication is that analytics will only be available to the podcast publishers, although certainly advertisers will push to have them shared.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2628" id="identifier_2_2628" title="I’m less worried about the fact other podcast players may not offer similar analytics: the Apple Podcast app will be used as a proxy, although this may hurt podcasts that have a smaller share of downloads via the Apple Podcast app (as total listeners may be undercounted absent similar analytics from other apps) ">
    3
   </a>
   More pertinently, though, all of the current podcast advertisers know exactly what they are getting: X amount of podcast ads results in Y number of conversions that result in Z amount of lifetime value.
  </p>
  <p>
   Indeed, contrary to what many folks seem to believe, advertisers, whether they leverage podcasts, Facebook, Google, or old school formats like radio or TV, are not idiots blindly throwing money over a wall in the vague hopes that it will drive revenue, ever susceptible to being shocked, shocked! that their ads are being ignored. Particularly in the case of digital formats advertisers are quite sophisticated, basing advertising decisions off of well-known ROI calculations. That is certainly the case with podcasts: knowing to a higher degree of precision how many ads are skipped doesn’t change the calculation for the current crop of podcast advertisers in the slightest.
  </p>
  <p>
   What more data does do is open the door to more varied types of advertisers beyond the subscription services that dominate the space. Brand advertisers, in particular, are more worried about reaching a guaranteed number of potential customers than they are tracking directly to conversion, and Apple’s analytics will help podcasters tell a more convincing story in that regard.
  </p>
  <p>
   In truth, though, Apple’s proposed analytics aren’t nearly enough: advertisers still won’t know who they are reaching or where they are located, and while brand advertisers may not have the expectation of tracking-to-purchase no one wants to throw money to the wind either. The problem of surveying effectively to measure things like brand lift is as acute as ever, and it simply isn’t worth the trouble to do a bunch of relatively small media buys with zero quality control.
  </p>
  <h4>
   Apple’s Opportunity
  </h4>
  <p>
   This, though, is why Apple’s centralized role is so intriguing. Remember, the web was thought to be a wasteland for advertising until Google provided a centralized point that aggregated users and could be sold to advertisers. Similarly, mobile was thought to monetize even worse than the (desktop) web until Facebook provided a centralized point that aggregated users and could be sold to advertisers. I expect a similar dynamic in podcasts: the industry will remain the province of web hosting and underwear absent centralization and aggregation, and the only entity that can accomplish that is Apple.
  </p>
  <p>
   One can envision the broad outlines of what the business for a centralized aggregator for podcasts might look like:
  </p>
  <ul>
   <li>
    The centralized aggregator would likely offer hosting to podcast creators, not only to secure the user experience and get better analytics (including on downloads through other apps) but also to dynamically insert advertisements. Those advertisements would also be available to smaller podcasts that are currently not worth the effort to advertisers.
   </li>
   <li>
    Advertisers would get their own dashboard for those analytics and, more importantly, the opportunity to buy ads at far greater scale across a large enough audience to make it worth their while. Ideally, at least from their perspective, they would actually be able to target their advertising buys as well.
   </li>
   <li>
    Users would, at least in theory, benefit from a far broader array of content made possible by the growth in revenue for the industry broadly.
   </li>
  </ul>
  <p>
   There are already companies trying to do just this: I wrote about E.W. Scripps’ Midroll and their acquisition of podcast player Stitcher
   <a href="https://stratechery.com/2016/the-future-of-podcasting/">
    last year
   </a>
   . The problem is that Stitcher only has around 5% of listeners, and it is the ownership of users/listeners, not producers/podcast from which true market power derives. Apple has that ownership, and thus that power; the question is will they use it?
  </p>
  <p>
   Surely the safe bet is “no”. iAd, Apple’s previous effort at building an advertising business,
   <a href="https://stratechery.com/2016/apple-scales-back-iads-the-apple-news-mess/">
    failed spectacularly
   </a>
   , and Apple’s anti-advertising rhetoric has only deepened since then. That’s a problem not only in terms of image but culture: Apple seems highly unlikely to be willing to put in the effort necessary to build a real advertising business, and given how small such a business might be even in the best-case scenario relative to the rest of the company, that’s understandable.
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_2628" id="identifier_3_2628" title="It’s Google’s challenge in building a real hardware business in reverse">
    4
   </a>
  </p>
  <p>
   To be sure, should Apple decline to seize this opportunity it will
   <a href="https://marco.org/2016/05/07/apple-role-in-podcasting">
    be celebrated by many
   </a>
   , particularly those doing well in the current ecosystem. Podcasting is definitely more open than not, with no real gatekeepers in terms of either distribution or monetization. That, though, is why the money is so small: gatekeepers are moneymakers, and while podcasts may continue to grow, it is by no means inevitable that, absent a more active Apple, the money will follow.
  </p>
  <p>
   <em>
    Disclosure:
    <a href="http://exponent.fm">
     Exponent
    </a>
    , the podcast I host with
    <a href="https://twitter.com/jamesallworth">
     James Allworth
    </a>
    , does have a (single) sponsor; the revenue from this sponsorship makes up a very small percentage of Stratechery’s overall revenue and does not impact the views in this article
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2628">
    For what it’s worth, Exponent has a much different profile: Apple Podcasts has about 13% share, while
    <a href="https://overcast.fm/">
     Overcast
    </a>
    leads the way with 26% share, followed by (surprisingly!) Mobile Safari with 23% [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2628">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2628">
    This shows why Casper mattresses are the exception that proves the rule: mattresses are not a subscription service, but they are much more expensive than most products bought online, which achieves the same effect as far as lifetime value is concerned [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2628">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2628">
    I’m less worried about the fact other podcast players may not offer similar analytics: the Apple Podcast app will be used as a proxy, although this may hurt podcasts that have a smaller share of downloads via the Apple Podcast app (as total listeners may be undercounted absent similar analytics from other apps)  [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2628">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2628">
    It’s Google’s challenge in building a real hardware business in reverse [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2628">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2628" href="https://stratechery.com/2017/podcasts-analytics-and-centralization/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2628" href="https://stratechery.com/2017/podcasts-analytics-and-centralization/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2628" href="https://stratechery.com/2017/podcasts-analytics-and-centralization/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/podcasts-analytics-and-centralization/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

