---
layout: post
title: "Twitter and What Might Have Been"
date: 2015-04-15T11:37:05+00:00
author: Ben Thompson
from: https://stratechery.com/2015/twitter-might/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1535 post type-post status-publish format-standard has-post-thumbnail hentry category-articles tag-developers topics-networks topics-social concepts-advertising concepts-business-models concepts-incentives concepts-making-money concepts-product-management concepts-understanding-users companies-google companies-twitter" id="post-1535">
 <header class="entry-header">
  <h1 class="entry-title">
   Twitter and What Might Have Been
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2015-04-15T04:37:05-07:00">
     Wednesday, April 15, 2015
    </time>
    <time class="updated" datetime="2018-03-27T00:59:55-07:00">
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
   Twitter’s blog is generally a cheery place, with one big exception from 2012: the innocuously named
   <a href="https://blog.twitter.com/2012/changes-coming-to-twitter-api">
    Changes Coming in Version 1.1 of the Twitter API
   </a>
   , and in particular, the section called “Changes to the Developer Rules of the Road” that attempted to put the kibosh on 3rd-party Twitter clients:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1535" id="identifier_0_1535" title="The introduction originally read as follows:

  Clearly, Twitter would like you to forget one particularly controversial moment in its history:
  
  In case you can’t make out the URL, the page in question is a blog post entitled “Changes coming in Version 1.1 of the Twitter API”, and the most upsetting news was in the section called “Changes to the Developer Rules of the Road”. From The Internet Archive:

It turns out the blog post was moved, not deleted. I apologize for the mistake">
    1
   </a>
  </p>
  <blockquote>
   <p>
    If you are building a Twitter client application that is accessing the home timeline, account settings or direct messages API endpoints (typically used by traditional client applications) or are using our User Streams product, you will need our permission if your application will require more than 100,000 individual user tokens.
   </p>
  </blockquote>
  <p>
   As you might expect, as with any decision by a big company to lock out 3rd-party developers, people were upset. Twitter’s move, though, cut far more deeply: it wasn’t just that people really loved their 3rd-party apps; rather there was a deep sense of
   <em>
    betrayal
   </em>
   because 3rd-party app developers were unusually responsible for Twitter’s success up to that point.
  </p>
  <h4>
   A Brief History of Twitter and 3rd-Party Developers
  </h4>
  <p>
   Twitter launched as an SMS service, but quickly the web app became the company’s primary focus. No surprise: at that time, the conventional wisdom was that websites would be the dominant interaction layer for a good long time. Of course that idea seems positively quaint: we now know that on phones, the platform with by far the largest share of both computers and attention, apps are far more important than the web, and the companies that recognized that shift early have benefited tremendously. Twitter is on that list, but not by their own doing.
  </p>
  <p>
   Just months after the first iPhone’s release
   <a href="http://furbo.org/2007/08/19/mobiletwitterrific/">
    Craig Hockenberry
   </a>
   built Twitterrific, the first mobile Twitter client, and the use case was so compelling that all sorts of people who would normally not consider jailbreaking did it anyway just for his app. In fact, I would not be surprised if Hockenberry’s app had a direct impact on Apple’s decision to open up the App Store. The impact on Twitter was just as profound: it turned out that character-limited tweets and a timeline focused on the here-and-now were a brilliant match for a computer that was in your pocket and thus available in found moments and unusual happenings. Over the next few years Twitterrific and a host of competitors honed the Twitter user experience, and these developers — and users — pioneered many of Twitter’s most important features, making the company, by 2011, worth $8 billion and on the road to a 2013 IPO. And Twitter was slamming the door in their face!
  </p>
  <h4>
   Twitter’s Mistake
  </h4>
  <p>
   In fact, I think Twitter’s decision was absolutely justified: in
   <a href="https://blog.twitter.com/2010/hello-world">
    April 2010
   </a>
   Twitter launched promoted tweets on their website, but as just noted, it was already clear that for most users the website was a secondary platform for consuming Twitter. If Twitter were to succeed in advertising it needed to place those promoted tweets and any other advertising inventory it might devise into Twitter apps. The problem, though, was that by definition Twitter had little control over how its content was presented in apps built by 3rd-party developers. And so, three days before the promoted tweets announcement,
   <a href="https://blog.twitter.com/2010/twitter-iphone-0">
    Twitter bought Tweetie
   </a>
   , an app many (including myself) thought was the best 3rd-party Twitter app of all.
  </p>
  <p>
   This was the context for the aforementioned post: advertising works best at scale but 3rd-party apps were peeling away too much of Twitter’s audience. That is why the company made such a big mistake: they didn’t kill 3rd-party apps completely. The post noted:
  </p>
  <blockquote>
   <p>
    We will not be shutting down client applications that use those endpoints and are currently over those token limits. If your application already has more than 100,000 individual user tokens, you’ll be able to maintain and add new users to your application until you reach 200% of your current user token count (as of today) — as long as you comply with our Rules of the Road. Once you reach 200% of your current user token count, you’ll be able to maintain your application to serve your users, but you will not be able to add additional users without our permission.
   </p>
  </blockquote>
  <p>
   The funny/sad thing about this entire episode is that Twitter was clearly trying to bend over backwards for its 3rd-party developers: it was strategically stupid and financially unwise to let them continue to exist, but Twitter left this massive loophole open that limited growth but didn’t kill successful apps like Twitterrific or Tweetbot. And yet, the company was pilloried and tarred with a reputation for being especially unfriendly to developers, a reputation
   <a href="http://www.marco.org/2014/10/20/wsj-twitter-peace-offering">
    that strongly persists
   </a>
   to this day.
  </p>
  <h4>
   Meerkat and Datasift
  </h4>
  <p>
   The reason this history matters is that Twitter has spent the last month cracking down once again. The first target, famously, was Meerkat, an app that allows you to stream live from your phone to anyone else with the Meerkat app. Within days of its release the app was a huge hit in tech circles, aided by its use of the Twitter graph: you signed in with your Twitter login and were immediately able to follow anyone you already followed on Twitter. Just two weeks after its launch, though, and on the eve of South-by-Southwest, Twitter
   <a href="http://www.buzzfeed.com/mathonan/twitter-chokes-off-meerkats-access-to-its-social-graph#.my82508ZQ">
    cut them off
   </a>
   .
  </p>
  <p>
   The second target was more surprising, but in retrospect — like the app situation — telegraphed by Twitter. A year ago
   <a href="https://blog.twitter.com/2014/twitter-welcomes-gnip-to-the-flock">
    Twitter acquired Gnip
   </a>
   , at the time one of only four companies with access to the full Twitter firehose of every tweet passing through the service. And then, over the weekend, came the other shoe:
   <a href="http://recode.net/2015/04/11/twitter-cutting-ties-with-all-data-resellers-including-datasift/">
    Twitter is going to cut off Gnip-competitor Datasift and everyone else
   </a>
   .
  </p>
  <h4>
   Twitter’s Justification
  </h4>
  <p>
   Both of Twitter’s decisions are correct, albeit for different reasons:
  </p>
  <ul>
   <li>
    The most obvious justification for killing Meerkat was that Twitter was on the verge of launching Periscope, an app that does basically the exact same thing (
    <a href="https://blog.twitter.com/2015/introducing-periscope">
     Periscope has since launched
    </a>
    ). Why should Twitter be expected to give its direct competitor a leg up?
    <p>
     Still, I think that Twitter’s decision would have been justifiable even if they weren’t about to launch Periscope. A fundamental part of Twitter, first established by Twitterrific on a jailbroken iPhone, was its sense of immediacy and incredible ability to broadcast information about what was happening
     <em>
      right now
     </em>
     from anywhere in the world to anywhere in the world. That, though, is exactly what makes Meerkat/Periscope so amazing: immediate access to what is happening anywhere in the world is exactly what they provide, but in a superior format: video. Twitter risked being unbundled, and given their floundering user growth, the company simply can’t afford to lose its claim on
     <a href="http://stratechery.com/2014/twitter-market/">
      its most marketable attribute
     </a>
     .
     <a class="footnote-link footnote-identifier-link" href="#footnote_1_1535" id="identifier_1_1535" title="That’s why I don’t really object to the celebrity pressure either.">
      2
     </a>
    </p>
   </li>
   <li>
    <p>
     Datasift is a little more troublesome. For one thing, in the same post where Twitter announced the 3rd-party app limitation, the company promoted data analysis as an opportunity for 3rd parties to build on the platform:
    </p>
    <blockquote>
     <p>
      Today on Twitter we see a broad and deep variety of individual developers and companies building applications using data and content from the Twitter API…with our new API guidelines, we’re trying to encourage activity in the upper-left, lower-left and lower right quadrants, and limit certain use cases that occupy the upper-right quadrant.
     </p>
     <p>
      <a href="http://web.archive.org/web/20120817151018/https://dev.twitter.com/blog/changes-coming-to-twitter-api">
       <img alt="dev_chart" class="aligncenter size-large wp-image-1536" height="352" src="https://stratechery.com/wp-content/uploads/2015/04/dev_chart-600x352.png" width="600"/>
      </a>
     </p>
    </blockquote>
    <p>
     Datasift falls squarely in the lower-left bracket, which means Twitter’s decision is a complete reversal of their previous stated stance, a stance that led to investments worth hundreds of millions of dollars. It’s an ugly move.
    </p>
    <p>
     The problem for Twitter is the aforementioned user growth: it’s even uglier. Last quarter the company was celebrated for adding 13~16 million users, but I was far more troubled by the company’s explanation that it lost 4 million users because of iOS 8. What actually happened was that if you ever signed up for Twitter on iOS 7, Safari kept syncing your tweets whether or not you used the service. iOS 8 fixed that, which means those 4 millions users were only counted as active because of an iOS bug! Given that Twitter’s reported metric is monthly active users, how many of their 288 millions active users are actually humans reading their timeline as opposed to randomly updating apps or visits by an abandoned user to a page with an embedded tweet?
    </p>
    <p>
     The company has responded by doubling down on monetization, and that’s where this decision makes sense. Wall Street actually loved last quarter, because Twitter monetizes so well, and in the absence of user growth the company is clearly focused on growing revenue per user instead, and data is a low-hanging fruit.
    </p>
   </li>
  </ul>
  <p>
   Still, even though all of Twitter’s decisions are understandable, I can’t shake the feeling that the company could have chosen a very different path.
  </p>
  <h4>
   What Might Have Been
  </h4>
  <p>
   It’s interesting to ponder why it is that Twitter is able to monetize effectively – and if they can keep it up – even as they are surpassed in active users by social networks like Instagram and (soon-if-not-already) Snapchat, never mind Facebook. I
   <a href="http://stratechery.com/2013/might-twitter-maximize-potential/">
    made this argument
   </a>
   at the time of Twitter’s IPO offering:
  </p>
  <blockquote>
   <p>
    Whereas Google is valuable because it knows what I want, when I want to get it, Facebook knows who I am, and who I know. Ideally, they also know who and what I like, but it’s a much weaker signal. Twitter, on the other hand, knows exactly what I like and what I’m interested in. It’s obvious both from what I tweet about, but especially based on who I follow. If an advertiser wants to reach someone like me – and they certainly do, given my spending habits – Twitter is by far the best way to find me. Were Twitter able to consistently capture this signal and deliver effective ad units that caught their user’s attention, they could command some of the highest average revenues per user on the Internet.
   </p>
  </blockquote>
  <p>
   Indeed, I would argue that what makes Twitter the company valuable is not Twitter the app or 140 characters or @names or anything else having to do with the product: rather, it’s the
   <em>
    interest
   </em>
   graph that is nearly priceless. More specifically, it is Twitter identities and the understanding that can be gleaned from how those identities are used and how they interact that matters.
  </p>
  <p>
   If one starts with that sort of understanding — that Twitter the company is about the graph, not the app — one would make very different decisions. For one, the clear priority would not be increasing ad inventory on the Twitter timeline (which in this understanding is but one manifestation of an interest graph) but rather ensuring as many people as possible have and use a Twitter identity. And what would be the best way to do that? Through 3rd-parties, of course! And by no means should those 3rd-parties be limited to recreating the Twitter timeline: they should build all kinds of apps that have a need to connect people with common interests: publishers would be an obvious candidate, and maybe even an app that streams live video. Heck, why not a social network that requires a
   <em>
    minimum
   </em>
   of 140 characters, or a killer messaging app? Try it all, anything to get more people using the Twitter identity and the interest graph.
  </p>
  <p>
   As for monetization, Twitter actually already nailed it: that’s exactly what MoPub should have been focused on. I
   <a href="http://stratechery.com/2013/twitter-acquires-mopub/">
    hoped at the time
   </a>
   of the acquisition:
  </p>
  <blockquote>
   <p>
    I think it’s very likely MoPub is Twitter’s AdSense: Twitter has a great signal about its users — whom I follow is a great approximation for what I’m interested in. That’s even more valuable than whom I know. However, Twitter is not a great platform for any sort of display advertising; the targeting would have to be much more precise than what is possible with current technology for users to tolerate anything more than promoted tweets. MoPub solves this riddle; Twitter can serve up highly targeted ads everywhere but Twitter proper. It’s a great acquisition.
   </p>
  </blockquote>
  <p>
   Mostly right, I think, except for the focus on display ads: native advertising is exactly
   <a href="http://stratechery.com/2015/facebook-reckoning/">
    what works best on mobile
   </a>
   , which is why Twitter
   <a href="https://blog.twitter.com/2014/welcoming-namo-media-to-the-flock">
    bought native advertising company Namo
   </a>
   last summer. Twitter’s offering is an attractive alternative for mobile publishers in particular, it’s just a shame that all those publishers aren’t building on top of Twitter’s identity, but then again, who can trust the company? The past is not dead…
  </p>
  <h4>
   Twitter and Google
  </h4>
  <p>
   Twitter’s story in many respects makes me think of Google: both companies started out benefiting greatly from openness and the power of both connecting users to what they were interested in and opening up powerful APIs to developers. The monetization model is even similar: note the AdSense reference above. Over time, though, Google has pulled more and more of its utility onto its own pages (and the revenue balance in the company has followed), just as Twitter focused on its own apps, and now Google is even starting to eat its best customers like travel websites and
   <a href="http://stratechery.com/2015/daily-update-peak-google-car-insurance-handicapping-internet-things/">
    insurance agents
   </a>
   (
   <em>
    members-only
   </em>
   ), just like Twitter ate Datasift.
  </p>
  <p>
   Frankly, the arc of both companies is simultaneously understandable and saddening to me. I’ve loved them both for the ways they have connected me to truly new ideas and new people, and it’s frustrating to see the growth imperative push both companies to turn increasingly inwards. One does wonder if they might find salvation in each other.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_1535" id="identifier_2_1535" title="This eternal rumor was repeated this week; for the record, I think it’s highly unlikely, first and foremost because Twitter is simply too expensive now. And, I might add, Twitter is doing (surprisingly) ok for now, at least in the stock market; missed potential doesn’t mean outright failure. The long-term danger of slowing user growth is real though: advertisers will want to consolidate which means the revenue growth not only won’t be sustainable but could actually decline">
    3
   </a>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1535">
    The introduction originally read as follows:
   </li>
  </ol>
 </div>
</article>
