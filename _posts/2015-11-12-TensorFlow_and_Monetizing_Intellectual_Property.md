---
layout: post
title: "TensorFlow and Monetizing Intellectual Property"
date: 2015-11-12T12:23:04+00:00
author: Ben Thompson
from: https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1934 post type-post status-publish format-standard hentry category-articles topics-ai-machine-learning topics-open-source concepts-differentiation concepts-product-management companies-amazon companies-apple companies-facebook companies-google companies-tensorflow" id="post-1934">
 <header class="entry-header">
  <h1 class="entry-title">
   TensorFlow and Monetizing Intellectual Property
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2015-11-12T04:23:04-08:00">
     Thursday, November 12, 2015
    </time>
    <time class="updated" datetime="2018-03-20T22:41:06-07:00">
     Tuesday, March 20, 2018
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
   Ten years ago
   <a href="http://www.cnet.com/news/gates-taking-a-seat-in-your-den/4/">
    Bill Gates suggested
   </a>
   that open source software was the province of “modern-day sort of communists” whose views on intellectual property were hopelessly outdated:
  </p>
  <blockquote>
   <p>
    The idea that the United States has led in creating companies, creating jobs, because we’ve had the best intellectual property system — there’s no doubt about that in my mind, and when people say they want to be the most competitive economy, they’ve got to have the incentive system. Intellectual property is the incentive system for the products of the future.
   </p>
  </blockquote>
  <p>
   Gates’ perspective was understandable: he had built Microsoft into the biggest company in technology and one of the biggest in the world by, for all intents and purposes, selling licenses to text. Sure, that’s a dramatic over-simplification of Windows and the other software Microsoft sold, but that didn’t change what a seachange the Redmond-based company seemed to represent: one where the pure expression of ideas could make you the richest person in the world. Yet those antediluvian open-source zealots wanted to simply give it all away.
  </p>
  <h4>
   The Open-Sourcing of TensorFlow
  </h4>
  <p>
   Microsoft is still a big company — their market cap was $427 billion at yesterday’s market close — but an even bigger company today is Alphabet ($506 billion), which has a decidedly different approach:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1934" id="identifier_0_1934" title="Microsoft has since embraced open source">
    1
   </a>
   earlier this week its Google subsidiary announced it was open-sourcing TensorFlow, its formerly proprietary machine learning system. From the
   <a href="https://googleblog.blogspot.com/2015/11/tensorflow-smarter-machine-learning-for.html">
    official Google blog
   </a>
   :
  </p>
  <blockquote>
   <p>
    Just a couple of years ago, you couldn’t talk to the Google app through the noise of a city sidewalk, or read a sign in Russian using Google Translate, or instantly find pictures of your Labradoodle in Google Photos. Our apps just weren’t smart enough. But in a short amount of time they’ve gotten much, much smarter. Now, thanks to machine learning, you can do all those things pretty easily, and a lot more. But even with all the progress we’ve made with machine learning, it could still work much better.
   </p>
   <p>
    So we’ve built an entirely new machine learning system, which we call “TensorFlow.” TensorFlow is faster, smarter, and more flexible than our old system, so it can be adapted much more easily to new products and research. It’s a highly scalable machine learning system — it can run on a single smartphone or across thousands of computers in datacenters. We use TensorFlow for everything from speech recognition in the Google app, to Smart Reply in Inbox, to search in Google Photos. It allows us to build and train neural nets up to five times faster than our first-generation system, so we can use it to improve our products much more quickly.
   </p>
   <p>
    We’ve seen firsthand what TensorFlow can do, and we think it could make an even bigger impact outside Google. So today we’re also open-sourcing TensorFlow. We hope this will let the machine learning community — everyone from academic researchers, to engineers, to hobbyists — exchange ideas much more quickly, through working code rather than just research papers. And that, in turn, will accelerate research on machine learning, in the end making technology work better for everyone.
   </p>
  </blockquote>
  <p>
   Machine learning is super important to Google; just a couple of weeks ago,
   <a href="http://seekingalpha.com/article/3596706-alphabet-goog-q3-2015-results-earnings-call-transcript?part=single">
    on Alphabet’s Q3 earnings call
   </a>
   , Google CEO Sundar Pichai stated in his opening remarks, “I also want to point out that our investments in machine learning and artificial intelligence are a priority for us”, and followed that up with a series of examples where machine learning was serving as a differentiator for Google. Pichai later added, in response to a question:
  </p>
  <blockquote>
   <p>
    Machine learning is a core transformative way by which we are rethinking everything we are doing. We’ve been investing in this area for a while. We believe we are state-of-the-art here. And the progress particularly in the last two years has been pretty dramatic. And so we are thoughtfully applying it across all our products, be it search, be it ads, be it YouTube and Play et cetera. And we are in early days, but you will see us in a systematic manner, think about how we can apply machine learning to all these areas.
   </p>
  </blockquote>
  <p>
   At a superficial level, this doesn’t make sense: if machine learning is core to Google’s future, then what is the point of giving it away? Does the company not care about making money? Are they — gasp — communists, or more charitably, as former head of Google’s Webspam team
   <a href="https://plus.google.com/+MattCutts/posts/NjgvJ3HPVgz">
    Matt Cutts put it
   </a>
   , “releasing technology so that the entire world can benefit, not just Google”?
  </p>
  <p>
   To be sure, there is a lovely PR angle to this news, but I think Google’s thinking is a lot more strategic than that. Open-sourcing TensorFlow makes a ton of sense, and the lessons as to why are broadly applicable.
  </p>
  <h4>
   Differentiating Software
  </h4>
  <p>
   Think carefully about what differentiates today’s technology companies. To take a few of the most prominent examples:
  </p>
  <ul>
   <li>
    Apple’s devices are differentiated first and foremost by their software, but the company makes money by selling hardware. Or, to be more precise, they make money by selling devices at scale that integrate software, hardware, and services, and to do that requires not simply an operating system but also a world-class industrial design team and an all-but-impossible-to-replicate supply chain that stretches from
    <a href="https://www.apple.com/supplier-responsibility/pdf/Apple_Supplier_List_2015.pdf">
     well over 200 suppliers
    </a>
    all over the world to almost 500 Apple retailer stores and tens of thousands of resellers
   </li>
   <li>
    Amazon isn’t simply a website but also a massive logistics network that connects tens of thousands of vendors to customers via nearly 100 distribution and sortation centers in North America alone, while AWS
    <a href="http://www.enterprisetech.com/2014/11/14/rare-peek-massive-scale-aws/">
     probably has
    </a>
    nearly another 100 data centers with millions of servers and an increasingly rich ecosystem of partners dedicated to getting companies onto AWS’ cloud
   </li>
   <li>
    Facebook’s value comes not from its software but from the fact that the social network has over 1.5 billion monthly active users, over a billion of whom use the service daily, plus three other services (WhatsApp, Messenger, and Instagram) with active user bases numbering in the (high) hundreds of millions; all of those users are connected to each other
   </li>
  </ul>
  <p>
   The examples go on-and-on: companies that are built on software but differentiated by a difficult-to-replicate complement to said software. And this, I think, is the way to understand Google’s decision to open-source TensorFlow.
  </p>
  <h4>
   Google’s Machine Learning Advantage
  </h4>
  <p>
   I’m hardly qualified to judge the technical worth of TensorFlow, but I feel pretty safe in assuming that
   <a href="http://deliprao.com/archives/98">
    it is excellent
   </a>
   and likely far beyond what any other company could produce. Machine learning, though, is about a whole lot more than a software system: specifically, it’s about a whole lot of data, and an infrastructure that can process that data. And, unsurprisingly, those are two areas where Google has a dominant position.
  </p>
  <p>
   Indeed, as good as TensorFlow might be, I bet it’s the weakest of these three pieces Google needs to truly apply machine learning to all its various business, both those of today and those of the future. Why not, then, leverage the collective knowledge of machine learning experts all over the world to make TensorFlow better? Why not make a move to ensure the machine learning experts of the future grow up with TensorFlow as the default? And why not ensure that the industry’s default machine learning system utilizes standards set in place by Google itself, with a design already suited for Google’s infrastructure?
  </p>
  <p>
   After all, contra Gates’ 2005 claim, it turns out the value of pure intellectual property is not derived from government-enforced exclusivity, but rather from the complementary pieces that surround that intellectual property which are far more difficult to replicate. Google is betting that its lead in both data and infrastructure are significant and growing, and that’s a far better bet in my mind than an all-too-often futile attempt to derive value from an asset that by its very nature can be replicated endlessly.
  </p>
  <h4>
   The Android Example
  </h4>
  <p>
   Indeed, Google has already demonstrated that this approach can be devastatingly effective. Gates was right to fear the open-source threat to Windows: in the smartphone era Google took Microsoft’s former position as the default operating system for the masses by open-sourcing Android. I absolutely believe that Android would not have achieved the dominant position that it has without that step, and Google was able to do so because its business model of advertising was a complement to its software, not because it sold software itself.
  </p>
  <p>
   It’s fair to object that open-sourcing Android ensured it would never be a real money-maker for Google;
   <a href="https://stratechery.com/2015/the-facebook-epoch/">
    I’ve made that case myself
   </a>
   . But remember, Android was originally intended as a
   <a href="https://stratechery.com/2013/the-android-detour/">
    defensive measure
   </a>
   for Google’s search business. And, from that perspective, it wildly succeeded.
  </p>
  <p>
   I suspect open-sourcing TensorFlow will have a far more positive effect on Google’s bottom-line. Google is approaching machine learning from a position of strength: the company already has the most data and the most imposing infrastructure, and as noted open-sourcing TensorFlow accelerates the removal of the primary limitation to leveraging that advantage: the quality of the system itself.
  </p>
  <h4>
   Broader Lessons
  </h4>
  <p>
   There’s a parallel to be drawn to my piece last week about
   <a href="https://stratechery.com/2015/grantland-and-the-surprising-future-of-publishing/">
    Grantland and the (Surprising) Future of Publishing
   </a>
   . The fundamental nature of the Internet makes monetizing infinitely reproducible intellectual property akin to selling ice to an Eskimo: it can be done, but it better be some really darn incredible ice, and even then the market is limited. A far more attainable and sustainable strategy is to instead focus on monetizing complements to said intellectual property, resulting in an outcome where everyone wins: intellectual property consumers, intellectual property copiers, and above all intellectual property creators.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1934">
    Microsoft has since embraced open source [
    <a class="footnote-link footnote-back-link" href="#identifier_0_1934">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-1934" href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-1934" href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-1934" href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

