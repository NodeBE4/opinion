---
layout: post
title: "iCloud and Apple’s Founding Myth"
date: 2014-09-04T16:55:30+00:00
author: Ben Thompson
from: https://stratechery.com/2014/icloud-apples-founding-myth/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1122 post type-post status-publish format-standard hentry category-articles topics-cloud-computing concepts-company-culture concepts-evolution-of-technology concepts-history concepts-incentives concepts-security concepts-technology-and-society companies-apple" id="post-1122">
 <header class="entry-header">
  <h1 class="entry-title">
   iCloud and Apple’s Founding Myth
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2014-09-04T09:55:30-07:00">
     Thursday, September 4, 2014
    </time>
    <time class="updated" datetime="2018-05-07T15:20:21-07:00">
     Monday, May 7, 2018
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
   From a certain perspective, what is happening to Apple this week is unfair. Both OS X and especially iOS are more secure than their competitors, and Apple has regularly prioritized security over features that customers have demanded. For example, Android has long supported custom keyboards, but Apple is only adding them in iOS 8. The difference, though, is that Apple’s solution makes it impossible for the substitute keyboard to be a keylogger sending the keys to another server (without explicit user authorization), and can’t be used in secure password fields at all. No such limitation exists in Android.
  </p>
  <p>
   On the other hand, Apple very much deserves all of the terrible publicity they are getting. Even if the vast majority of photos were stolen through means like password resets, phishing, and  social engineering, the reality is that Apple’s reservoir of goodwill when it comes to the cloud is deservedly empty. And, having bugs like a missing rate limiter, or recommending that people use two-factor authorization that wouldn’t have actually helped, only makes the distrust worse.
  </p>
  <p>
   I think the most useful way to understand Apple’s troubles with the cloud is to think about the A-series chips. Jonathan Goldberg described why making chips is so difficult in a
   <a href="http://digitstodollars.com/2014/08/30/a-new-model-for-semiconductor-investing/">
    recent blog post
   </a>
   :
  </p>
  <blockquote>
   <p>
    Designing hardware is much harder than designing software, and by ‘hard’ I really mean expensive. If you design a web site, the whole product can be built around the idea of iteration. The first version will not work perfectly, so plan for that, and fix it in upgrades. And upgrades on the web or in the cloud are very easy. In hardware, everything has to be right before you ship the product. And not just before you ship, but really before you even start to build it. Returns are prohibitively expensive, and hardware cannot be readily fixed on the fly or in the field. This problem is even more acute in semiconductors. First, those chips have to get designed into other things, and that means even longer preparation times. Secondly, the complexity of the semiconductor manufacturing process are hard for the human mind to grasp. The industry requires incredibly tight specifications, as you can imagine for circuits many times smaller than a human hair.
   </p>
  </blockquote>
  <p>
   It turns out, though, that Apple is really good at designing chips! The A7 is still the only 64-bit ARM processor on the market, and Apple looks likely to extend their lead with the presumed A8 in the iPhone 6. Still, the process of making a semiconductor – or hardware generally – is very clearly in Apple’s DNA. Just think back to the original Macintosh. From the invaluable
   <a href="http://www.folklore.org/StoryView.py?story=Signing_Party.txt">
    Folklore.org
   </a>
   :
  </p>
  <blockquote>
   <p>
    The Mac team had a complicated set of motivations, but the most unique ingredient was a strong dose of artistic values. First and foremost, Steve Jobs thought of himself as an artist, and he encouraged the design team to think of ourselves that way, too. The goal was never to beat the competition, or to make a lot of money; it was to do the greatest thing possible, or even a little greater…
   </p>
   <p>
    Since the Macintosh team were artists, it was only appropriate that we sign our work. Steve came up with the awesome idea of having each team member’s signature engraved on the hard tool that molded the plastic case, so our signatures would appear inside the case of every Mac that rolled off the production line. Most customers would never see them, since you needed a special tool to look inside, but we would take pride in knowing that our names were in there, even if no one else knew.
   </p>
  </blockquote>
  <p>
   To me this is one of the defining “founding myths” of Apple,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1122" id="identifier_0_1122" title="Yes, I know the Macintosh was not even close to being the first Apple product, and that the Apple II made most of the money for years after the Macintosh came out. However, to my mind it was the Macintosh that laid the foundation for what Apple stood for">
    1
   </a>
   and founding myths are really important. They define culture, and what is important and valued, and in the case of Apple, what is valued is creating the “greatest things possible” through an effort that most customers will never see.
  </p>
  <p>
   Other companies have founding myths too:
  </p>
  <ul>
   <li>
    Google’s founding myth is the creation of BackRub and PageRank. These were highly iterative projects that got better the more they were used. This myth created a culture that values iteration and data
   </li>
   <li>
    Microsoft’s founding myth is Bill Gates and Paul Allen selling both Altair BASIC and Windows 1.0
    <em>
     without an actual product.
    </em>
    They built exactly what their customers needed after making the deal, and Microsoft’s culture has always been very responsive and heavily influenced by customer requirements
   </li>
   <li>
    Facebook’s founding myth is Mark Zuckerberg in his dorm room creating a means of connecting with other students through any means possible. Even today Facebook highly values “hacking” and constantly changing things to ever more highly engage users
   </li>
  </ul>
  <p>
   I’m painting with broad strokes to be sure, but to me the most compelling evidence for these founding myths is to look at the sort of products that these companies have traditionally been bad at:
  </p>
  <ul>
   <li>
    Facebook has been a rough go for developers, because hacking and breaking stuff doesn’t make for a good platform
   </li>
   <li>
    Microsoft has always struggled with consumer software, because building for a the mass market requires having an innate understanding of what the majority needs, not simply asking them
   </li>
   <li>
    Google’s products don’t always have the best fit-and-finish, because the tendency is to make something that is “good enough” and ship as soon as possible, the better to start iterating
   </li>
  </ul>
  <p>
   And, for Apple, making something perfect behind closed doors is the exact opposite sort of approach that is needed for the cloud. Effective cloud services are all about iteration based on data from usage – the Google model – and that’s not the sort of approach that Apple values.
  </p>
  <p>
   This also applies to security generally. Apple has a much greater degree of control over the attack vectors on its operating systems; when it comes to Internet services, on the other hand, the number of attack vectors are exponentially larger. You need a lot of people helping you harden your infrastructure, but that requires transparency, and that’s not something Apple values.
  </p>
  <hr/>
  <p>
   It’s important to be clear about who exactly is to blame for this theft: the thieves. But stepping back, there is a bigger problem with Internet security generally, and that’s our reliance on passwords. Passwords are really difficult to manage even for advanced users; for normal folks it’s a real nightmare.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_1122" id="identifier_1_1122" title="Anecdotally, multiple Stratechery members request a password reset every week, and that’s for a more technically inclined audience">
    2
   </a>
   That’s why Apple and other services include things like security questions to help you get into your account, even though that makes the account even more insecure. There is a fundamental tradeoff between security and ease-of-use, and that too works against Apple here; their entire differentiation is predicated on the user experience, and
   <em>
    not
   </em>
   having
   <a href="http://daringfireball.net/2014/09/security_tradeoffs">
    backup-by-default
   </a>
   or enforcing two-factor authentication is counter to that, even if it would be more “secure”.
  </p>
  <p>
   It’s here, though, that Apple has gone the farthest down the road towards fixing what seems to be an intractable problem: TouchID. TouchID works really well, and it removes the temptation to have a simple password on your phone or for your Apple account. When and if Apple has Touch ID everywhere – on iPads
   <em>
    and
   </em>
   on Macs
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_1122" id="identifier_2_1122" title="I’m generally skeptical of the whole OS X on ARM argument, but Touch ID and its secure enclave are an argument in favor">
    3
   </a>
   – it would be much more plausible for them to enforce very strong passwords, encryption everywhere, two-factor authorization, etc., because most people would just use their fingerprint most of the time.
  </p>
  <p>
   Moreover, TouchID is something that is very Apple-esque, for lack of a better term. It’s something that is hardware-based, and it requires incredible attention to detail on both the implementation and experience. It’s not something that lends itself to a minimum viable product + iteration approach; instead it depends on deep integration of hardware and software – Apple’s forte.
  </p>
  <p>
   The problem, though, is that TouchID isn’t there yet. We’re still in the world of passwords and security questions, and while Apple has often let problem issues fester until they can come up with something perfect – think copy-and-paste or multitasking in iOS – that sort of approach is irresponsible when it comes to the cloud. This break-in may not ultimately be Apple’s direct responsibility, but the lack of trust so many have in anything related to Apple’s cloud is.
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_1122" id="identifier_3_1122" title="Honestly, the rate limiter bug – whether or not it had anything to do with this specific theft – was grossly negligent">
    4
   </a>
  </p>
  <p>
   There’s no question the cloud is critical to Apple’s future and is a major piece of the iPhone value proposition; from a strategic perspective it is core to Apple. But Tim Cook needs to seriously evaluate if Apple has or ever will have the cultural DNA to do the cloud right. And, if not, it may be time to work even more closely with a company whose very survival depends on delivering superior cloud services; I’m quite sure Satya Nadella would answer the call.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1122">
    Yes, I know the Macintosh was not even close to being the first Apple product, and that the Apple II made most of the money for years after the Macintosh came out. However, to my mind it was the Macintosh that laid the foundation for what Apple stood for [
    <a class="footnote-link footnote-back-link" href="#identifier_0_1122">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_1122">
    Anecdotally, multiple Stratechery members request a password reset
    <em>
     every week
    </em>
    , and that’s for a more technically inclined audience [
    <a class="footnote-link footnote-back-link" href="#identifier_1_1122">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_1122">
    I’m generally skeptical of the whole OS X on ARM argument, but Touch ID and its secure enclave are an argument in favor [
    <a class="footnote-link footnote-back-link" href="#identifier_2_1122">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_1122">
    Honestly, the rate limiter bug – whether or not it had anything to do with this specific theft – was grossly negligent [
    <a class="footnote-link footnote-back-link" href="#identifier_3_1122">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-1122" href="https://stratechery.com/2014/icloud-apples-founding-myth/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-1122" href="https://stratechery.com/2014/icloud-apples-founding-myth/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-1122" href="https://stratechery.com/2014/icloud-apples-founding-myth/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2014/icloud-apples-founding-myth/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

