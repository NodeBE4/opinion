---
layout: post
title: "The Aggregator Paradox"
date: 2018-02-21T17:09:23+00:00
author: Ben Thompson
from: https://stratechery.com/2018/the-aggregator-paradox/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3067 post type-post status-publish format-standard hentry category-articles topics-digital topics-publishing concepts-advertising concepts-aggregation-theory concepts-antitrust concepts-business-models concepts-commoditizing-suppliers concepts-disruption-theory concepts-distribution-and-transaction-costs concepts-incentives concepts-leverage concepts-making-money concepts-media concepts-media-and-advertising concepts-modular-versus-integrated concepts-owning-customer-relationship concepts-product-management concepts-strategy concepts-technology-and-society concepts-the-user-experience companies-facebook companies-google" id="post-3067">
 <header class="entry-header">
  <h1 class="entry-title">
   The Aggregator Paradox
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-02-21T09:09:23-08:00">
     Wednesday, February 21, 2018
    </time>
    <time class="updated" datetime="2018-06-15T12:59:16-07:00">
     Friday, June 15, 2018
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
   Which one of these options sounds better?
  </p>
  <ul>
   <li>
    Fast loading web pages with responsive designs that look great on mobile, and ads that are respectful of the user experience
   </li>
   <li>
    The elimination of pop-up ads, ad overlays, and autoplaying videos with sounds
   </li>
  </ul>
  <p>
   Google is promising both; is the company’s offer too good to be true?
  </p>
  <h4>
   Why Web Pages Suck Redux
  </h4>
  <p>
   2015 may have been the nadir in terms of the user experience of the web, and in
   <a href="https://stratechery.com/2015/why-web-pages-suck/">
    Why Web Pages Suck
   </a>
   , I pinned the issue on publishers’ broken business model:
  </p>
  <blockquote>
   <p>
    If you begin with the premise that web pages need to be free, then the list of stakeholders for most websites is incomplete without the inclusion of advertisers…Advertisers’ strong preference for programmatic advertising is why it’s so problematic to only discuss publishers and users when it comes to the state of ad-supported web pages: if advertisers are only spending money — and a lot of it — on programmatic advertising, then it follows that the only way for publishers to make money is to use programmatic advertising…
   </p>
   <p>
    The price of efficiency for advertisers is the user experience of the reader. The problem for publishers, though, is that dollars and cents — which come from advertisers — are a far more scarce resource than are page views, leaving publishers with a binary choice: provide a great user experience and go out of business, or muddle along with all of the baggage that relying on advertising networks entails.
   </p>
  </blockquote>
  <p>
   My prediction at the time was that Facebook Instant Articles — the Facebook-native format that the social network promised would speed up load times and enhance the reading experience, thus driving more engagement with publisher content — would become increasingly important to publishers:
  </p>
  <blockquote>
   <p>
    Arguably the biggest takeaway should be that the chief objection to Facebook’s offer — that publishers are giving up their independence — is a red herring. Publishers are already slaves to the ad networks, and their primary decision at this point is which master — ad networks or Facebook — is preferable?
   </p>
  </blockquote>
  <p>
   In fact, the big winner to date has been Google’s Accelerated Mobile Pages (AMP) initiative, which launched later that year with similar goals — faster page loads and a better reading experience. From
   <a href="https://www.recode.net/2018/2/15/17013618/google-facebook-traffic-publishers-amp-chartbeat">
    Recode
   </a>
   :
  </p>
  <blockquote>
   <p>
    During its developer conference this week, Google announced that 31 million websites are using AMP, up 25 percent since October. Google says these fast-loading mobile webpages keep people from abandoning searches and by extension drive more traffic to websites.
   </p>
   <p>
    The result is that in the first week of February, Google sent 466 million more pageviews to publishers — nearly 40 percent more — than it did in January 2017. Those pageviews came predominantly from mobile and AMP. Meanwhile, Facebook sent 200 million fewer, or 20 percent less. That’s according to Chartbeat, a publisher analytics company whose clients include the New York Times, CNN, the Washington Post and ESPN. Chartbeat says that the composition of its network didn’t materially change in that time.
   </p>
   <p>
    <img alt="" class="aligncenter size-large wp-image-3068" height="416" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM-1024x666.png" srcset="https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM-1024x666.png 1024w, https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM-300x195.png 300w, https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM-768x500.png 768w, https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM-968x630.png 968w, https://stratechery.com/wp-content/uploads/2018/02/Screen-Shot-2018-02-22-at-12.36.08-AM.png 1752w" width="640"/>
   </p>
  </blockquote>
  <p>
   This chart doesn’t include Instant Articles specifically, but most accounts suggest the initiative is faltering: the
   <a href="https://www.cjr.org/tow_center/are-facebook-instant-articles-worth-it.php">
    Columbia Journalism Review posited
   </a>
   that more than half of Instant Articles’ launch partners had abandoned the format, and Jonah Peretti, the CEO of BuzzFeed, the largest publisher to remain committed to the format, has taken to
   <a href="https://www.recode.net/2018/2/13/17006870/buzzfeed-ceo-jonah-peretti-facebook-share-revenue-traffic">
    repeatedly criticizing Facebook
   </a>
   for not sharing sufficient revenue with publications committed to the platform.
  </p>
  <h4>
   Aggregation Management
  </h4>
  <p>
   The relative success of Instant Articles versus AMP is a reminder that
   <a href="https://stratechery.com/2015/from-products-to-platforms/">
    managing an ecosystem is a different skill that building one
   </a>
   . Facebook and Google are both
   <a href="https://stratechery.com/2017/defining-aggregators/">
    super-aggregators
   </a>
   :
  </p>
  <blockquote>
   <p>
    Super-Aggregators operate multi-sided markets with at least three sides — users, suppliers, and advertisers — and have zero marginal costs on all of them. The only two examples are Facebook and Google, which in addition to attracting users and suppliers for free, also have self-serve advertising models that generate revenue without corresponding variable costs (other social networks like Twitter and Snapchat rely to a much greater degree on sales-force driven ad sales).
   </p>
  </blockquote>
  <p>
   Super-Aggregators are the ultimate rocket ships, and during the ascent ecosystem management is easy: keep the rocket pointed up-and-to-the-right with regards to users and publishers and suppliers will have no choice but to clamor for their own seat on the spaceship.
  </p>
  <p>
   The problem — and forgive me if I stretch this analogy beyond the breaking point — comes when the oxygen is gone. The implication of Facebook and Google effectively taking all digital ad growth is that publishers increasingly can’t breathe, and while that is neither company’s responsibility on an individual publisher basis, it is a problem in aggregate, as Instant Articles is demonstrating. Specifically, Facebook is losing influence over the future of publishing to Google in particular.
  </p>
  <p>
   A core idea of
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregation Theory
   </a>
   is that suppliers — in the case of Google and Facebook, that is publishers — commoditize themselves to fit into the modular framework that is their only route to end users owned by the aggregator. Critically, suppliers do so out of their own self-interest; consider the entire SEO industry, in which Google’s suppliers pay consultants to better make their content into the most Google-friendly commodity possible, all in the pursuit of greater revenue and profits.
  </p>
  <p>
   This is a point that Facebook seems to have missed: the power that comes from directing lots of traffic towards a publisher stems from the revenue that results from said traffic, not the traffic itself. To that end, Facebook’s too-slow rollout of Instant Articles monetization, and continued underinvestment (if not outright indifference) to the Facebook Audience Network (for advertisements everywhere
   <em>
    but
   </em>
   the uber-profitable News Feed) has left an opening for Google: the search giant responded by iterating AMP far more quickly, not just in terms of formatting but especially monetization.
  </p>
  <p>
   Critically, that monetization was not limited to Google’s own ad networks: from the beginning AMP has
   <a href="https://googleblog.blogspot.tw/2015/10/introducing-accelerated-mobile-pages.html">
    been committed to supporting multiple ad networks
   </a>
   , which sidestepped the trap Facebook found itself in. By not taking responsibility for publisher monetization Google made AMP more attractive than Instant Articles, which took responsibility and then failed to deliver.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_3067" id="identifier_0_3067" title="Instant Articles allows publishers to sell their own ads directly, but explicitly bans third party ad networks">
    1
   </a>
  </p>
  <p>
   I get Facebook’s excuse: News Feed ads are so much more profitable for the company than Facebook Audience Network ads, that from a company perspective it makes more sense to devote the vast majority of the company’s resources to the former; from an ecosystem perspective, though, the neglect of Facebook Audience Network has been a mistake. And that, by extension, is why Google’s approach was so smart: Google has the
   <a href="https://stratechery.com/2018/googles-earnings-amazons-earnings/">
    same incentives as Facebook to focus on its own advertising
   </a>
   , but it also has the ecosystem responsibility to ensure the incentives in place for its suppliers pay off. Effectively offloading that payoff to third party networks both ensures publishers get paid even as Google’s own revenue generation is focused on the search results surrounding those AMP articles.
  </p>
  <h4>
   Google’s Sticks
  </h4>
  <p>
   Search, of course, is the far more important reason why AMP is a success: Google prioritizes the format in search results. Indeed, for all of the praise I just heaped on AMP with regards to monetization, AMP CPMs are still significantly lower than traditional mobile web pages; publishers, though, are eager to support the format because a rush of traffic from Google more than makes up for it.
  </p>
  <p>
   Here too Facebook failed to apply its power as an aggregator: if monetization is a carrot, favoring a particular format is a stick, and Facebook never wielded it. Contrary to expectations the social network never gave Instant Articles higher prominence in the News Feed algorithm, which meant publishers basically had the choice between more-difficult-to-monetize-but-faster-to-load Instant Articles or easier-to-monetize-and-aren’t-our-resources-better-spent-fixing-our-web-page? traditional web pages. Small wonder the latter won out!
  </p>
  <p>
   In fact, for all of the criticism Facebook has received for its approach to publishers generally and around Instant Articles specifically, it seems likely that the company’s biggest mistake was that it did
   <em>
    not
   </em>
   leverage its power in the way that Google was more than willing to.
  </p>
  <p>
   That’s not the only Google stick in the news: the company is also starting to block ads in Chrome. From the
   <a href="https://www.wsj.com/articles/publishers-warm-to-googles-ad-blocker-but-chafe-at-companys-power-1518690600">
    Wall Street Journal
   </a>
   :
  </p>
  <blockquote>
   <p>
    Beginning Thursday, Google Chrome, the world’s most popular web browser, will begin flagging advertising formats that fail to meet standards adopted by the Coalition for Better Ads, a group of advertising, tech and publishing companies, including Google, a unit of Alphabet Inc…
   </p>
   <p>
    Sites with unacceptable ad formats—annoying ads like pop-ups, auto-playing video ads with sound and flashing animated ads—will receive a warning that they’re in violation of the standards. If they haven’t fixed the problem within 30 days, all of their ads — including ads that are compliant — will be blocked by the browser. That would be a major blow for publishers, many of which rely on advertising revenue.
   </p>
   <p>
    The decision to curtail junk ads is partly a defensive one for both Google and publishers. Third-party ad blockers are exploding, with as many as 615 million devices world-wide using them, according to some estimates. Many publishers expressed optimism that eliminating annoying ads will reduce the need for third-party ad blockers, raise ad quality and boost the viability of digital advertising.
   </p>
  </blockquote>
  <p>
   Nothing quite captures the relationship between suppliers and their aggregator like the expression of optimism that one of the companies actually destroying the viability of digital advertising for publishers will actually save it; then again, that is why Google’s carrots, while perhaps less effective than its sticks, are critical to making an ecosystem work.
  </p>
  <h4>
   Aggregation’s Antitrust Paradox
  </h4>
  <p>
   The problem with Google’s actions should be obvious: the company is leveraging its monopoly in search to push the AMP format, and the company is leveraging its dominant position in browsers to punish sites with bad ads. That seems bad!
  </p>
  <p>
   And yet, from a user perspective, the options I presented at the beginning — fast loading web pages with responsive designs that look great on mobile and the elimination of pop-up ads, ad overlays, and autoplaying videos with sounds — sounds pretty appealing!
  </p>
  <p>
   This is the fundamental paradox presented by aggregation-based monopolies: by virtue of gaining users through the provision of a superior user experience, aggregators gain power over suppliers, which come onto the aggregator’s platforms on the aggregator’s terms, resulting in an even better experience for users, resulting in virtuous cycle. There is no better example than Google’s actions with AMP and Chrome ad-blocking: Google is quite explicitly dictating exactly how it is its suppliers will access its customers, and it is hard to argue that the experience is
   <em>
    not
   </em>
   significantly better because of it.
  </p>
  <p>
   At the same time, what Google is doing seems nakedly uncompetitive — thus the paradox. The point of antitrust law — both the consumer-centric U.S. interpretation and the European competitor-centric one — is ultimately to protect consumer welfare. What happens when protecting consumer welfare requires acting uncompetitively? Note that implicit in my analysis of Instant Articles above is that Facebook was not ruthless enough!
  </p>
  <h4>
   The Ad Advantage
  </h4>
  <p>
   That Google might be better for users by virtue of acting like a bully isn’t the only way in which aggregators mess with our preconceived assumptions about the world. Consider advertising: many commentators assume that user annoyance with ads will be the downfall of companies like Google and Facebook.
  </p>
  <p>
   That, though, is far too narrow an understanding of “user experience”; The “user experience” is not simply user interface, but rather the totality of an app or web page. In the case of Google, it has superior search, it is now promising faster web pages and fewer annoying ads, and oh yeah, it is free to use. Yes, consumers are giving up their data, but even there Google has the user experience advantage: consumer data is far safer with Google than it is with random third party ad networks desperate to make their quarterly numbers.
  </p>
  <p>
   Free matters in another way: in disruption theory integrated incumbents are thought to lose not only because of innovation in modular competing systems, but also because modular systems are cheaper: the ad advantage, though, is that the integrated incumbents — Google and Facebook — are free to end users. That means potential challengers have to have that much more of a superior user experience in every other aspect, because they can’t be cheaper.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_3067" id="identifier_1_3067" title="This, as an aside, is perhaps the biggest advantage of cryptonetworks: I’ve already noted in Tulips, Myths, and Cryptocurrencies that cryptonetworks are “probably the most viable way out from the antitrust trap created by Aggregation Theory”; that was in reference to decentralization, but that there is money to be made is itself an advantage when the competition is free. More on this tomorrow.">
    2
   </a>
  </p>
  <p>
   In other words, we can have our cake and eat it too — and it’s free to boot. Hopefully it’s not poisonous.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2018/more-on-chrome-and-amp-the-case-against-google-chris-dixon-on-decentralization/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3067">
    Instant Articles allows publishers to sell their own ads directly, but
    <a href="https://developers.facebook.com/docs/instant-articles/policy">
     explicitly bans
    </a>
    third party ad networks [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3067">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_3067">
    This, as an aside, is perhaps the biggest advantage of cryptonetworks: I’ve already noted in
    <a href="https://stratechery.com/2017/tulips-myths-and-cryptocurrencies/">
     Tulips, Myths, and Cryptocurrencies
    </a>
    that cryptonetworks are “probably the most viable way out from
    <a href="https://stratechery.com/2016/antitrust-and-aggregation/">
     the antitrust trap created by Aggregation Theory
    </a>
    ”; that was in reference to decentralization, but that there is money to be made is itself an advantage when the competition is free. More on this tomorrow. [
    <a class="footnote-link footnote-back-link" href="#identifier_1_3067">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3067" href="https://stratechery.com/2018/the-aggregator-paradox/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3067" href="https://stratechery.com/2018/the-aggregator-paradox/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3067" href="https://stratechery.com/2018/the-aggregator-paradox/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/the-aggregator-paradox/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

