---
layout: post
title: "Privacy Fundamentalism"
date: 2019-08-27T13:41:54+00:00
author: Ben Thompson
from: https://stratechery.com/2019/privacy-fundamentalism/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4342 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-gdpr topics-regulation concepts-privacy concepts-technology-and-society concepts-unintended-consequence companies-apple companies-facebook companies-google companies-stratechery" id="post-4342">
 <header class="entry-header">
  <h1 class="entry-title">
   Privacy Fundamentalism
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-08-27T06:41:54-07:00">
     Tuesday, August 27, 2019
    </time>
    <time class="updated" datetime="2019-08-28T10:34:54-07:00">
     Wednesday, August 28, 2019
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
   Farhad Manjoo,
   <a href="https://www.nytimes.com/interactive/2019/08/23/opinion/data-internet-privacy-tracking.html">
    in the New York Times
   </a>
   , ran an experiment on themself:
  </p>
  <blockquote>
   <p>
    Earlier this year, an editor working on The Times’s Privacy Project asked me whether I’d be interested in having all my digital activity tracked, examined in meticulous detail and then published — you know, for journalism…I had to install a version of the Firefox web browser that was created by privacy researchers to monitor how websites track users’ data. For several days this spring, I lived my life through this Invasive Firefox, which logged every site I visited, all the advertising tracking servers that were watching my surfing and all the data they obtained. Then I uploaded the data to my colleagues at The Times, who reconstructed my web sessions into the gloriously invasive picture of my digital life you see here. (The project brought us all very close; among other things, they could see my physical location and my passwords, which I’ve since changed.)
   </p>
   <p>
    What did we find? The big story is as you’d expect: that everything you do online is logged in obscene detail, that you have no privacy. And yet, even expecting this, I was bowled over by the scale and detail of the tracking; even for short stints on the web, when I logged into Invasive Firefox just to check facts and catch up on the news, the amount of information collected about my endeavors was staggering.
   </p>
  </blockquote>
  <p>
   Here is a shrunk-down version of the graphic that resulted (click it to see the whole thing on the New York Times site):
  </p>
  <p>
   <a href="https://www.nytimes.com/interactive/2019/08/23/opinion/data-internet-privacy-tracking.html">
    <img alt="Farhad Manjoo's online tracking" class="aligncenter size-large wp-image-4343" height="790" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic-830x1024.jpg" srcset="https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic-830x1024.jpg 830w, https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic-243x300.jpg 243w, https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic-768x947.jpg 768w, https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic-511x630.jpg 511w, https://stratechery.com/wp-content/uploads/2019/08/nytimes-graphic.jpg 1300w" width="640"/>
   </a>
  </p>
  <p>
   Notably — at least from my perspective! — Stratechery is on the graphic:
  </p>
  <p>
   <img alt="Stratechery's trackers" class="aligncenter size-medium wp-image-4347" height="246" sizes="(max-width: 300px) 100vw, 300px" src="https://stratechery.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-4.59.50-PM-1-300x246.png" srcset="https://stratechery.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-4.59.50-PM-1-300x246.png 300w, https://stratechery.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-4.59.50-PM-1-768x630.png 768w, https://stratechery.com/wp-content/uploads/2019/08/Screen-Shot-2019-08-27-at-4.59.50-PM-1.png 950w" width="300"/>
  </p>
  <p>
   Wow, it sure looks like I am up to some devious behavior! I guess it is all of the advertising trackers on my site which doesn’t have any advertising…or perhaps Manjoo, as seems to so often be the case with privacy scare pieces, has overstated their case by a massive degree.
  </p>
  <h4>
   Stratechery “Trackers”
  </h4>
  <p>
   The narrow problem with Manjoo’s piece is a definitional one. This is what it says at the top of the graphic:
  </p>
  <p>
   <a href="https://www.nytimes.com/interactive/2019/08/23/opinion/data-internet-privacy-tracking.html">
    <img alt="What the Times considers a tracker" class="aligncenter size-large wp-image-4348" height="330" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2019/08/graphics-key-1024x528.jpg" srcset="https://stratechery.com/wp-content/uploads/2019/08/graphics-key-1024x528.jpg 1024w, https://stratechery.com/wp-content/uploads/2019/08/graphics-key-300x155.jpg 300w, https://stratechery.com/wp-content/uploads/2019/08/graphics-key-768x396.jpg 768w, https://stratechery.com/wp-content/uploads/2019/08/graphics-key.jpg 1140w" width="640"/>
   </a>
  </p>
  <p>
   This strikes me as an overly broad definition of tracking; as best I can tell, Manjoo and their team counted every single script, image, or cookie that was loaded from a 3rd-party domain, no matter its function.
  </p>
  <p>
   Consider Stratechery: the page in question, given the timeframe of Manjoo’s research and the apparent
   <a href="https://www.techmeme.com/190604/p21#a190604p21">
    link
   </a>
   from Techmeme, is probably
   <a href="https://stratechery.com/2019/apples-audacity/">
    The First Post-iPhone Keynote
   </a>
   . On that page I count 31 scripts, images, fonts, and XMLHttpRequests (XHR for short, which can be used to set or update cookies) that were loaded from a 3rd-party domain.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_4342" id="identifier_0_4342" title="This matches the 31 dots in Manjoo’s graphic; I did not count HTML documents or CSS files">
    1
   </a>
   The sources are as follows (in decreasing number by 3rd-party service):
  </p>
  <ul>
   <li>
    Stripe (11 images, 5 JavaScript files, 2 XHRs)
   </li>
   <li>
    Typekit (1 image, 1 JavaScript file, 5 fonts)
   </li>
   <li>
    Cloudfront (3 JavaScript files)
   </li>
   <li>
    New Relic (2 JavaScript files)
   </li>
   <li>
    Google (1 image, 1 JavaScript file)
   </li>
   <li>
    WordPress.com (1 JavaScript file)
   </li>
  </ul>
  <p>
   You may notice that, in contrast to the graphic, there is nothing from Amazon specifically. There
   <em>
    is
   </em>
   Cloudfront, which is a content delivery service offered by Amazon Web Services, but suggesting that Stratechery includes trackers from Amazon because I rely on AWS is ridiculous. In the case of Cloudfront, one JavaScript file is from
   <a href="https://memberful.com">
    Memberful
   </a>
   , my subscription management service, and the other two are public JavaScript libraries used on countless sites on the Internet (
   <a href="https://jquery.com">
    jQuery
   </a>
   and
   <a href="https://github.com/izuzak/pmrpc">
    Pmrpc
   </a>
   ). As for the rest:
  </p>
  <ul>
   <li>
    <a href="https://stripe.com">
     Stripe
    </a>
    is the payment processor for Stratechery memberships.
   </li>
   <li>
    <a href="https://fonts.adobe.com/typekit">
     Typekit
    </a>
    is Adobe’s web-font service (Stratechery uses
    <a href="https://fonts.adobe.com/fonts/freight-sans">
     Freight Sans Pro
    </a>
    ).
   </li>
   <li>
    <a href="https://newrelic.com">
     New Relic
    </a>
    is an analytics package used to diagnose website issues and improve performance.
   </li>
   <li>
    Google is
    <a href="https://marketingplatform.google.com/about/analytics/">
     Google Analytics
    </a>
    , which I use for counting page views and conversions to free and paid subscribers (this last bit is mostly theoretical; Memberful integrates with Google Analytics, but I haven’t run any campaigns — Stratechery relies on word-of-mouth).
   </li>
   <li>
    WordPress.com is for the
    <a href="https://jetpack.com">
     Jetpack service
    </a>
    from Automattic, which I use for site monitoring, security, and backups, as well as the recommended article carousel under each article.
   </li>
  </ul>
  <p>
   The only service here remotely connected to advertising is Google Analytics, but I have chosen to not share that information with Google (there is no need because I don’t need access to Google’s advertising tools); the truth is that all of these “trackers” make Stratechery possible.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_4342" id="identifier_1_4342" title="I do address these services and others in the Stratechery Privacy Policy ">
    2
   </a>
  </p>
  <h4>
   The Internet’s Nature
  </h4>
  <p>
   This narrow critique of Manjoo’s article — wrongly characterizing multiple resources as “trackers” — gets at a broader philosophical shortcoming: technology can be used for both good things and bad things, but in the haste to highlight the bad, it is easy to be oblivious to the good. Manjoo, for example, works for the New York Times, which makes most of its revenue from subscriptions;
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_4342" id="identifier_2_4342" title="Let’s be charitable and ignore the fact that the most egregious trackers from Manjoo’s article — by far — are news sites, including nytimes.com">
    3
   </a>
   given that, I’m going to assume they do not object to my including 3rd-party resources on Stratechery that support my own subscription business?
  </p>
  <p>
   This applies to every part of my stack: because information is so easily spread across the Internet via infrastructure maintained by countless companies for their own positive economic outcome, I can write this Article from my home and you can read it in yours. That this isn’t even surprising is a testament to the degree to which we take the Internet for granted: any site in the world is accessible by anyone from anywhere, because the Internet makes moving data free and easy.
  </p>
  <p>
   Indeed, that is why my critique of Manjoo’s article specifically and the ongoing privacy hysteria broadly is not simply about definitions or philosophy. It’s about fundamental assumptions. The default state of the Internet is the endless propagation and collection of data: you have to do work to
   <em>
    not
   </em>
   collect data on one hand, or leave a data trail on the other. This is the exact opposite of how things work in the physical world: there data collection is an explicit positive action, and anonymity the default.
  </p>
  <p>
   That is not to say that there shouldn’t be a debate about this data collection, and how it is used. Even that latter question, though, requires an appreciation of just how different the digital world is from the analog one. Consider one of the most fearsome surveillance entities of all time, the East German Stasi. From
   <a href="https://www.wired.com/2017/05/adrian-fish-the-stasi-archives/">
    Wired
   </a>
   :
  </p>
  <blockquote>
   <p>
    <a href="https://www.wired.com/2017/05/adrian-fish-the-stasi-archives/">
     <img alt="The Stasi's files" class="aligncenter size-large wp-image-4346" height="427" src="https://stratechery.com/wp-content/uploads/2019/08/Fish_012-1024x683.jpg" width="640"/>
    </a>
   </p>
   <p>
    The German Democratic Republic dissolved in 1990 with the fall of communism, but the documents assembled by the Ministry for State Security, or Stasi, remain. This massive archive includes 69 miles of shelved documents, 1.8 million images, and 30,300 video and audio recordings housed in 13 offices throughout Germany. Canadian photographer Adrian Fish got a rare peek at the archives and meeting rooms of the Berlin office for his series Deutsche Demokratische Republik: The Stasi Archives. “The archives look very banal, just like a bunch of boring file holders with a bunch of paper,” he says. “But what they contain are the everyday results of a people being spied upon.”
   </p>
  </blockquote>
  <p>
   That the files are paper makes them terrifying, because anyone can read them individually; that they are paper, though, also limits their reach. Contrast this to Google or Facebook: that they are digital means they reach everywhere; that, though, means they are read in aggregate, and stored in a way that is only decipherable by machines.
  </p>
  <p>
   To be sure, a Stasi compare and contrast is hardly doing Google or Facebook any favors in this debate: the popular imagination about the danger this data collection poses, though, too often seems derived from the former, instead of the fundamentally different assumptions of the latter. This, by extension, leads to privacy demands that exacerbate some of the Internet’s worst problems.
  </p>
  <ul>
   <li>
    Facebook’s crackdown on API access after Cambridge Analytica
    <a href="https://medium.com/@Snurb/facebook-research-data-18662cf2cacb">
     has severely hampered research
    </a>
    into the effects of social media, the spread of disinformation, etc.
   </li>
   <li>
    Privacy legislation like GDPR has
    <a href="https://stratechery.com/2019/mark-zuckerbergs-proposal-the-copyright-directive-and-sunk-costs-you-say-you-want-some-regulation/">
     strengthened incumbents
    </a>
    like Facebook and Google, and made it more difficult for challengers to succeed.
   </li>
   <li>
    Criminal networks from terrorism to child abuse can flourish on social networks, but while content can be stamped out private companies, particularly domestically, are often limited as to how proactively they can go to law enforcement; this is exacerbated once encryption enters the picture.
   </li>
  </ul>
  <p>
   Again, this is not to say that privacy isn’t important: it is one of many things that are important. That, though, means that online privacy in particular should not be the end-all be-all but rather one part of a difficult set of trade-offs that need to be made when it comes to dealing with this new reality that is the Internet. Being an absolutist will lead to bad policy (although encryption
   <a href="https://stratechery.com/2016/apple-the-fbi-and-security/">
    may be the exception that proves the rule
   </a>
   ).
  </p>
  <h4>
   Apple’s Fundamentalism
  </h4>
  <p>
   This doesn’t just apply to governments: consider Apple, a company which is staking its reputation on privacy. Last week the WebKit team released a new
   <a href="https://webkit.org/tracking-prevention-policy/">
    Tracking Prevention Policy
   </a>
   that is taking clear aim at 3rd-party trackers:
  </p>
  <blockquote>
   <p>
    We have implemented or intend to implement technical protections in WebKit to prevent all tracking practices included in this policy. If we discover additional tracking techniques, we may expand this policy to include the new techniques and we may implement technical measures to prevent those techniques.
   </p>
  </blockquote>
  <p>
   Of particular interest to Stratechery — and, per the opening of this article, Manjoo — is this definition and declaration:
  </p>
  <blockquote>
   <p>
    <strong>
     Cross-site tracking
    </strong>
    is tracking across multiple first party websites; tracking between websites and apps; or the retention, use, or sharing of data from that activity with parties other than the first party on which it was collected.
   </p>
   <p>
    […]
   </p>
   <p>
    WebKit will do its best to
    <strong>
     prevent
    </strong>
    all covert tracking, and all cross-site tracking (even when it’s not covert). These goals apply to all types of tracking listed above, as well as tracking techniques currently unknown to us.
   </p>
  </blockquote>
  <p>
   In case you were wondering,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_4342" id="identifier_3_4342" title="Or if you think I’m biased, although, for the record, I conceptualized this article before this policy was announced">
    4
   </a>
   yes, this will affect sites like Stratechery, and the WebKit team knows it (emphasis mine to highlight potential impacts on Stratechery):
  </p>
  <blockquote>
   <p>
    There are practices on the web that we do not intend to disrupt, but which may be inadvertently affected because they rely on techniques that can also be used for tracking. We consider this to be unintended impact. These practices include:
   </p>
   <ul>
    <li>
     Funding websites using targeted or personalized advertising (see Private Click Measurement below).
    </li>
    <li>
     Measuring the effectiveness of advertising.
    </li>
    <li>
     <strong>
      Federated login using a third-party login provider.
     </strong>
    </li>
    <li>
     Single sign-on to multiple websites controlled by the same organization.
    </li>
    <li>
     Embedded media that uses the user’s identity to respect their preferences.
    </li>
    <li>
     “Like” buttons, federated comments, or other social widgets.
    </li>
    <li>
     <strong>
      Fraud prevention.
     </strong>
    </li>
    <li>
     <strong>
      Bot detection.
     </strong>
    </li>
    <li>
     <strong>
      Improving the security of client authentication.
     </strong>
    </li>
    <li>
     <strong>
      Analytics in the scope of a single website.
     </strong>
    </li>
    <li>
     <strong>
      Audience measurement.
     </strong>
    </li>
   </ul>
   <p>
    When faced with a tradeoff, we will typically prioritize user benefits over preserving current website practices. We believe that that is the role of a web browser, also known as the user agent.
   </p>
  </blockquote>
  <p>
   Don’t worry, Stratechery is not going out of business (although there may be a fair bit of impact on the user experience, particularly around subscribing or logging in). It is disappointing, though, that the maker of one of the most important and the most unavoidable browser technologies in the world (WebKit is the only option on iOS) has decided that an absolutist approach that will ultimately improve the competitive position of massive first party advertisers like Google and Facebook, even as it harms smaller sites that rely on 3rd-party providers for not just ads but all aspects of their business, is what is best for everyone.
  </p>
  <p>
   What makes this particularly striking is that it was only a month ago that Apple was revealed to be
   <a href="https://www.theguardian.com/technology/2019/jul/26/apple-contractors-regularly-hear-confidential-details-on-siri-recordings">
    hiring contractors to listen to random Siri recordings
   </a>
   ; unlike
   <a href="https://www.amazon.com/gp/help/customer/display.html/ref=kinw_myk_alxa_faq_us?ie=UTF8&amp;nodeId=201602230&amp;pop-up=1">
    Amazon
   </a>
   (but like
   <a href="https://www.theverge.com/2019/7/11/20690020/google-assistant-home-human-contractors-listening-recordings-vrt-nws">
    Google
   </a>
   ), Apple didn’t disclose that fact to users. Furthermore, unlike both
   <a href="https://www.amazon.com/hz/mycd/myx/#/home/alexaPrivacy/home">
    Amazon
   </a>
   and
   <a href="https://myactivity.google.com/myactivity">
    Google
   </a>
   , Apple didn’t give users any way to see what recordings Apple had or delete them after-the-fact. Many commentators have seized on the irony of Apple having the worst privacy practices for voice recordings given their rhetoric around being a privacy champion, but I think the more interesting insight is twofold.
  </p>
  <p>
   First, this was, in my estimation, a far worse privacy violation than the sort of online tracking the WebKit team is determined to stamp out, for the simple reason that the Siri violation crossed the line between the physical and digital world. As I noted above the digital world is inherently transparent when it comes to data; the physical world, though — particularly somewhere like your home — is inherently private.
  </p>
  <p>
   Second, I do understand why Apple has humans listening to Siri recordings: anyone that has used Siri can appreciate that the service needs to accelerate its feedback loop and improve more quickly. What happens, though, when improving the product means invading privacy? Do you look for good trade-offs, like explicit consent and user control, or do you fear a fundamentalist attitude that declares privacy more important than anything, and try to sneak a true privacy violation behind everyone’s back like some sort of rebellious youth fleeing religion? Being an absolutist also leads to bad behavior, because after all, everyone is already a criminal.
  </p>
  <h4>
   Towards Trade-offs
  </h4>
  <p>
   The point of this article is not to argue that companies like Google and Facebook are in the right, and Apple in the wrong — or, for that matter, to argue my self-interest. The truth, as is so often the case, is somewhere in the middle, in the gray.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_4342" id="identifier_4_4342" title="And frankly, probably closer to Apple than the others, the last section notwithstanding">
    5
   </a>
   To that end, I believe the privacy debate needs to be reset around these three assumptions:
  </p>
  <ol>
   <li>
    Accept that privacy online entails trade-offs; the corollary is that an absolutist approach to privacy is a surefire way to get policy wrong.
   </li>
   <li>
    Keep in mind that the widespread creation and spread of data is inherent to computers and the Internet, and that these qualities have positive as well as negative implications; be wary of what good ideas and positive outcomes are extinguished in the pursuit to stomp out the negative ones.
   </li>
   <li>
    Focus policy on the physical and digital divide. Our behavior online is one thing: we both benefit from the spread of data and should in turn be more wary of those implications. Making what is offline online is quite another.
   </li>
  </ol>
  <p>
   This is where the Stasi example truly resonates: imagine all of those files, filled with all manner of physical movements and meetings and utterings, digitized and thus searchable, shareable, inescapable. That goes beyond a new medium lacking privacy from the get-go: it is taking privacy away from a world that previously had it. And yet the proliferation of cameras, speakers, location data, etc. goes on with a fraction of the criticism levied at big tech companies. Like too many fundamentalists, we are in danger of missing the point.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2019/privacy-fundamentalism-follow-up-pelotons-s-1-peloton-and-disruption/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4342">
    This matches the 31 dots in Manjoo’s graphic; I did not count HTML documents or CSS files [
    <a class="footnote-link footnote-back-link" href="#identifier_0_4342">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_4342">
    I do address these services and others in the Stratechery
    <a href="https://stratechery.com/privacy-policy/">
     Privacy Policy
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_1_4342">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_4342">
    Let’s be charitable and ignore the fact that the most egregious trackers from Manjoo’s article — by far — are news sites, including nytimes.com [
    <a class="footnote-link footnote-back-link" href="#identifier_2_4342">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_4342">
    Or if you think I’m biased, although, for the record, I conceptualized this article before this policy was announced [
    <a class="footnote-link footnote-back-link" href="#identifier_3_4342">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_4342">
    And frankly, probably closer to Apple than the others, the last section notwithstanding [
    <a class="footnote-link footnote-back-link" href="#identifier_4_4342">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-4342" href="https://stratechery.com/2019/privacy-fundamentalism/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-4342" href="https://stratechery.com/2019/privacy-fundamentalism/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-4342" href="https://stratechery.com/2019/privacy-fundamentalism/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2019/privacy-fundamentalism/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

