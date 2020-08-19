---
layout: post
title: "Why Web Pages Suck"
date: 2015-07-15T07:59:55+00:00
author: Ben Thompson
from: https://stratechery.com/2015/why-web-pages-suck/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1755 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-digital topics-publishing concepts-advertising concepts-business-models concepts-disruption-theory concepts-evolution-of-technology concepts-history concepts-media concepts-media-and-advertising concepts-modular-versus-integrated" id="post-1755">
 <header class="entry-header">
  <h1 class="entry-title">
   Why Web Pages Suck
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2015-07-15T00:59:55-07:00">
     Wednesday, July 15, 2015
    </time>
    <time class="updated" datetime="2018-03-27T02:46:18-07:00">
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
   John Gruber
   <a href="http://daringfireball.net/2015/07/safari_content_blocker_imore">
    had strong words
   </a>
   about Apple news site
   <a href="http://daringfireball.net/2015/07/safari_content_blocker_imore">
    iMore
   </a>
   :
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1755" id="identifier_0_1755" title="I excerpted most of Gruber’s post — his writing is impressively tight! — with permission">
    1
   </a>
  </p>
  <blockquote>
   <p>
    I love iMore. I think they’re the best staff covering Apple today, and their content is great. But
    <a href="http://pxlnv.com/linklog/safari-content-blockers-shit-ass-websites/">
     count me in with Nick Heer
    </a>
    — their website is shit-ass. Rene Ritchie’s response acknowledges the problem, but a web page like that — Rene’s 537-word all-text response — should not
    <a href="http://d.pr/i/19HMF">
     weigh 14 MB.1
    </a>
    .
   </p>
   <p>
    It’s not just the download size, long initial page load time, and the ads that cover valuable screen real estate as fixed elements. The fact that these JavaScript trackers hit the network for a full-minute after the page has completed loaded is downright criminal. Advertising should have minimal effect on page load times and device battery life. Advertising should be respectful of the user’s time, attention, and battery life. The industry has gluttonously gone the other way. iMore is not the exception — they’re the norm. 10+ MB page sizes, minute-long network access, third-party networks tracking you across unrelated websites — those things are all par for the course today, even when serving pages to mobile devices. Even on a site like iMore, staffed by good people who truly have deep respect for their readers.
   </p>
  </blockquote>
  <p>
   It’s that last line that should give Gruber, or anyone else complaining about crappy websites, pause. After all, if iMore respects their readers, the only alternative explanation is that their development team is incompetent. Unless, of course, iMore, along with the vast majority of ad-supported sites on the web, has basically no choice in the matter.
  </p>
  <h4>
   Advertisers and the Early Web
  </h4>
  <p>
   Gruber talks about publishers and readers, but if you begin with the premise that web pages need to be free,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_1755" id="identifier_1_1755" title="The experience of the vast majority of publishers is that readers will not pay for content; the exception are sites like this one that keep costs extremely low and focus on primarily analysis, not original reporting">
    2
   </a>
   then the list of stakeholders for most websites is incomplete without the inclusion of advertisers. After all, they’re the ones that pay the bills.
  </p>
  <p>
   Back when the web first became an important medium it actually wasn’t particularly great for advertisers. In the pre-Internet days an advertiser could buy ads in the local paper, perhaps a TV spot or two, put up a billboard and call it a day, confident they were reaching their entire target segment as well as they could. To do the same with web ads, on the other hand, required somehow knowing what websites your target customers were visiting, which could number in the hundreds or thousands, and then buying ads on those websites and crossing your fingers your customers actually saw your ad (although you would never know if they did). It was a mess.
  </p>
  <p>
   The problem was one of scale, and in two dimensions:
  </p>
  <ul>
   <li>
    There were way more places to advertise than before, which sounds great in theory but actually stunk in practice, because who has the time and resources to deal with hundreds or thousands of different ad sales teams?
   </li>
   <li>
    Any one website only knew what its visitors were interested in on that particular website, which meant the targeting ability a website could sell to advertisers was scarcely better than a physical newspaper selling a spot in the Sports section to a gym
   </li>
  </ul>
  <p>
   The result is that
   <a href="http://www.kpcb.com/blog/june-2010-internet-trends">
    as late as 2010
   </a>
   , when Mary Meeker for the first time used the following slide in her
   <a href="http://www.kpcb.com/internet-trends">
    annual Internet Trends report
   </a>
   , the Internet’s share of advertising was significantly less than its share of attention:
  </p>
  <p>
   <a href="http://www.kpcb.com/blog/june-2010-internet-trends">
    <img alt="meeker2010" class="aligncenter size-large wp-image-1760" height="479" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/meeker2010-1024x767.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/meeker2010-1024x767.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/meeker2010-300x225.png 300w, https://stratechery.com/wp-content/uploads/2015/07/meeker2010-768x575.png 768w, https://stratechery.com/wp-content/uploads/2015/07/meeker2010-841x630.png 841w" width="640"/>
   </a>
  </p>
  <p>
   Ad networks and programmatic advertising, though, changed everything.
  </p>
  <h4>
   The Rise of Ad Networks
  </h4>
  <p>
   Ad networks solved both scale problems:
  </p>
  <ul>
   <li>
    Instead of buying ads on a plethora of (relatively-speaking) little websites, advertisers could centralize their buying with an ad network that promised to place their ads across said plethora.
   </li>
   <li>
    By virtue of having ads — and their associated trackers — across the aforementioned plethora of sites, networks could get a much richer picture of individual visitors giving advertisers the ability to much more finely target their ads.
   </li>
  </ul>
  <p>
   The way it actually works is a little complicated: unlike print ads, which were delivered days ahead of time and inserted along with editorial copy before going to press, ads today are delivered “programmatically”. The process is actually kind of amazing, and consists of several different pieces (my reference to “ad networks” has been a bit simplistic):
  </p>
  <ul>
   <li>
    When a user requests a URL, the publisher checks to see if they have any directly sold ads available (because of the scale problems noted above, fewer and fewer publishers have fewer and fewer directly-sold ads; advertisers just aren’t interested)
   </li>
   <li>
    If they don’t, the publisher asks an ad exchange for an ad
   </li>
   <li>
    The ad exchange, which has built up a profile of the user across all the different sites where the ad exchange is used, sends the (anonymized) user profile and website description to a variety of demand-side platforms (DSPs) (which actually sell the ads)
   </li>
   <li>
    The DSPs examine the user profile and website description and a host of other factors and offers up the price they are willing to pay to serve an ad to the user
   </li>
   <li>
    The ad exchange selects the highest price, retrieves the ad, and sends it to the publisher to display
   </li>
  </ul>
  <p>
   All of this happens on a just-in-time basis, and you can see why advertisers love it: to a greater extent than ever before they are reaching exactly who they want to reach at the most efficient price possible. The result has been a huge increase in advertising on the Internet; look at Meeker’s equivalent slide
   <a href="http://www.kpcb.com/blog/2015-internet-trends">
    from 2015
   </a>
   :
  </p>
  <p>
   <a href="http://www.kpcb.com/blog/2015-internet-trends">
    <img alt="meeker2015" class="aligncenter size-large wp-image-1761" height="479" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/meeker2015-1024x766.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/meeker2015-1024x766.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/meeker2015-300x224.png 300w, https://stratechery.com/wp-content/uploads/2015/07/meeker2015-768x574.png 768w, https://stratechery.com/wp-content/uploads/2015/07/meeker2015-843x630.png 843w" width="640"/>
   </a>
  </p>
  <p>
   Advertisers’ strong preference for programmatic advertising is why it’s so problematic to only discuss publishers and users when it comes to the state of ad-supported web pages: if advertisers are only spending money — and a lot of it — on programmatic advertising, then it follows that the only way for publishers to make money is to use programmatic advertising.
  </p>
  <h4>
   The Modularization of Publishing
  </h4>
  <p>
   From publishers’ perspective, the fixed cost of a printing press not only provided a moat from competition, it also meant that publishers displayed ads on their terms. To use the
   <a href="https://stratechery.com/2015/netflix-and-the-conservation-of-attractive-profits/">
    Conservation of Attractive Profits model
   </a>
   that I discussed last week, publishers were exceptionally profitable for having integrated content and ads in this way:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2015/07/print.png">
    <img alt="print" class="aligncenter size-large wp-image-1757" height="98" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/print-1024x157.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/print-1024x157.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/print-300x46.png 300w, https://stratechery.com/wp-content/uploads/2015/07/print-768x118.png 768w, https://stratechery.com/wp-content/uploads/2015/07/print-1200x184.png 1200w, https://stratechery.com/wp-content/uploads/2015/07/print.png 1900w" width="640"/>
   </a>
  </p>
  <p>
   As the description of programmatic advertising should make clear, though, that is no longer the case. Ad spots are effectively black boxes from the publisher perspective, and direct windows to the user from the ad network’s perspective. This has both modularized content and moved ad networks closer to users:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2015/07/internet.png">
    <img alt="internet" class="aligncenter size-large wp-image-1756" height="149" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2015/07/internet-1024x238.png" srcset="https://stratechery.com/wp-content/uploads/2015/07/internet-1024x238.png 1024w, https://stratechery.com/wp-content/uploads/2015/07/internet-300x70.png 300w, https://stratechery.com/wp-content/uploads/2015/07/internet-768x178.png 768w, https://stratechery.com/wp-content/uploads/2015/07/internet-1200x279.png 1200w, https://stratechery.com/wp-content/uploads/2015/07/internet.png 1887w" width="640"/>
   </a>
  </p>
  <p>
   Here’s the simple truth: if you’re competing in a modular market, as today’s publishers are, profits are slim at best, and you generally take what you can get from a revenue perspective. To put it another way, publishers today have about as much bargaining power as do Uber drivers, and we’ve seen how that has gone.
  </p>
  <h4>
   So What Now?
  </h4>
  <p>
   To this point I’ve discussed ad networks from the advertisers’ perspective; Gruber’s critique, though, was that of a user: he is absolutely correct that the price of efficiency for advertisers is the user experience of the reader. The problem for publishers, though, is that dollars and cents — which come from advertisers — are a far more scarce resource than are page views, leaving publishers with a binary choice: provide a great user experience and go out of business, or muddle along with all of the baggage that relying on advertising networks entails.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_1755" id="identifier_2_1755" title="Advertisers and ad networks, unfortunately, don’t really have an incentive to improve the user experience; there is an effectively unlimited amount of inventory on the web">
    3
   </a>
  </p>
  <p>
   Again, the solution is not that publishers should try harder to have better ads. The New York Times, arguably the gold standard when it comes to both brand and quality impressions,
   <a href="http://investors.nytco.com/files/doc_financials/annual/2014/2014-Annual-Report-(FINAL).pdf">
    noted in its annual report
   </a>
   :
  </p>
  <blockquote>
   <p>
    Digital advertising networks and exchanges, real-time bidding and other programmatic buying channels that allow advertisers to buy audiences at scale are also playing a more significant role in the advertising marketplace and causing downward pricing pressure.
   </p>
  </blockquote>
  <p>
   If the New York Times cannot resist programmatic advertising, what chance does iMore or the vast majority of online publications have? If anything this puts Facebook’s Instant Articles initiative in a far more positive light: the social network is offering to not only improve the user experience by displaying articles instantly — thanks, primarily, to the lack of programmatic advertising cruft — but also to help monetize said content by selling ads against it and sharing 70%, backed by profile data that is far superior to even the ad networks.
  </p>
  <p>
   Indeed, arguably the biggest takeaway should be that the chief objection to Facebook’s offer — that publishers are giving up their independence — is a red herring. Publishers are already slaves to the ad networks, and their primary decision at this point is which master — ad networks or Facebook — is preferable?
  </p>
  <p>
   This too provides additional context to Apple’s new News app, which looks an awful lot like Facebook’s offer: publishers put their articles in a common repository that is monetized collectively through iAd, thus achieving advertising scale (and, it should be noted,
   <a href="https://developer.apple.com/library/prerelease/ios/documentation/General/Conceptual/News_Publishing_Guide/MonetizingonNews.html#//apple_ref/doc/uid/TP40015407-CH18-SW1">
    more user data
   </a>
   than
   <a href="https://stratechery.com/2015/tim-cooks-unfair-and-unrealistic-privacy-speech-strategy-credits-the-privacy-priority-problem/">
    Apple’s rhetoric
   </a>
   would suggest). Apple, of course — and this is what prompted this entire discussion — is providing not only a carrot but a stick. Gruber concludes:
  </p>
  <blockquote>
   <p>
    With Safari Content Blockers, Apple is poised to allow users to fight back. Apple has zeroed in on what we need: not a way to block ads per se, but a way to block obnoxious JavaScript code. A reckoning is coming.
   </p>
  </blockquote>
  <p>
   It absolutely is, as I
   <a href="https://stratechery.com/2015/facebook-reckoning/">
    noted when Facebook’s Instant Articles launched
   </a>
   . The future for most publishers is likely that of pure content production only, save for the few —
   <a href="http://daringfireball.net/feeds/sponsors/">
    like Gruber
   </a>
   — who are destination sites capable of selling native advertising in stream (or selling subscriptions,
   <a href="https://stratechery.com/membership/">
    like this site
   </a>
   ). What is very much in question is exactly how users will feel when they finally get what they claim they wish for.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1755">
    I excerpted most of Gruber’s post — his writing is impressively tight! — with permission [
    <a class="footnote-link footnote-back-link" href="#identifier_0_1755">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_1755">
    The experience of the vast majority of publishers is that readers will not pay for content; the exception are sites like this one that keep costs extremely low and focus on primarily analysis, not original reporting [
    <a class="footnote-link footnote-back-link" href="#identifier_1_1755">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_1755">
    Advertisers and ad networks, unfortunately, don’t really have an incentive to improve the user experience; there is an effectively unlimited amount of inventory on the web [
    <a class="footnote-link footnote-back-link" href="#identifier_2_1755">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-1755" href="https://stratechery.com/2015/why-web-pages-suck/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-1755" href="https://stratechery.com/2015/why-web-pages-suck/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-1755" href="https://stratechery.com/2015/why-web-pages-suck/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2015/why-web-pages-suck/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

