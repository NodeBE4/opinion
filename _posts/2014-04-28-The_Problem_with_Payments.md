---
layout: post
title: "The Problem with Payments"
date: 2014-04-28T18:22:44+00:00
author: Ben Thompson
from: https://stratechery.com/2014/problem-payments/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-853 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-payments concepts-product-management concepts-the-user-experience" id="post-853">
 <header class="entry-header">
  <h1 class="entry-title">
   The Problem with Payments
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2014-04-28T11:22:44-07:00">
     Monday, April 28, 2014
    </time>
    <time class="updated" datetime="2019-05-06T03:28:00-07:00">
     Monday, May 6, 2019
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
   Payments are one of the eternal tech rainbows,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_853" id="identifier_0_853" title="Along with TV">
    1
   </a>
   enticing startups and established companies alike with the promise of priceless data and incredible volumes. Many who dive in, though, like Google with Wallet, find it’s incredibly tough going. Square, for example, is burning through cash and may be acquired whether they want to be or not. From
   <a href="http://online.wsj.com/news/articles/SB10001424052702303825604579513882989476424">
    the WSJ
   </a>
   :
  </p>
  <blockquote>
   <p>
    With losses widening and cash shrinking, representatives of mobile-payments startup Square Inc. have discussed a possible sale to several deeper-pocketed rivals, according to people familiar with the matter…
   </p>
   <p>
    Square recorded a loss of roughly $100 million in 2013, broader than its loss in 2012, according to two people familiar with the matter.
   </p>
   <p>
    The five-year-old company paid out roughly $110 million more in cash last year than it took in, according to two people familiar with the matter. Over the past three years, the startup has consumed more than half of the roughly $340 million it has raised from at least four rounds of equity financing since 2009, two people familiar with the company’s performance said.
   </p>
  </blockquote>
  <p>
   There are two broad categories of payment “opportunities”: building on top of credit cards, and replacing them. Square falls into the former. The challenge here is that margins are incredibly tight. Consider a $50 transaction paid for with a Visa card swiped through a Square reader:
  </p>
  <ul>
   <li>
    The interchange fee (which goes to the card-issuing bank) for swiped Visa cards is 1.51% + $0.10, which in this example is $0.855
   </li>
   <li>
    Various assessment charges (where Visa actually makes its money) come to ~.11% + $.03, which in this example is $0.085
   </li>
   <li>
    Square charges merchants 2.75% for swiped cards, which in this example is $1.375
   </li>
  </ul>
  <p>
   Square’s final takeaway is at most $0.435.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_853" id="identifier_1_853" title="I didn’t calculate the card markup fee; presumably Square gets a very favorable rate">
    2
   </a>
   Were the card issued by American Express, Square would actually lose money (assuming a $1.75 fee from a 3.50% discount rate).
  </p>
  <p>
   Those aren’t great margins, to state the obvious.
  </p>
  <p>
   Yet Square cannot really charge more. Credit card processing fees are one of the largest expenses a business faces
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_853" id="identifier_2_853" title="Said fees are Stratechery’s largest cost already">
    3
   </a>
   , and every percentage point increase is a significant incentive for said business to go to the trouble of setting up and managing their own merchant account.
  </p>
  <p>
   This is the blessing and curse of building on credit cards: you get instant ubiquity, but massive competition. The end result means Square is unprofitable, and getting the scale to make these numbers work – or, as Square tried to do, the user experience that makes paying these fees worthwhile – is a challenge that would be faced by anyone looking to build a payment system on top of credit cards, including Apple, Amazon, or Google.
  </p>
  <p>
   The alternative is to go around credit cards and build something completely new. This leaves much more room for a sustainable margin, but then you’re left with the absolutely massive network problem. If you think getting a social network off the ground is hard, when the only obstacle is getting people to enter in an email address and password, imagine having to simultaneously distribute a means of accepting payments to merchants and a means of making payment to consumers, all at the same time, because if you only have one you basically have nothing.
  </p>
  <p>
   This is why I, for the foreseeable future, expect to see little if any progress in the United States.
  </p>
  <p>
   Note the caveat, though: “in the United States.” The problem with building a new payment system or service in the US is that credit cards, all things considered, aren’t that bad. Sure the fees are high, but the network problems are largely solved; rare is the location where you can’t use a credit card (and almost always by the merchant’s choice), and almost all consumers have one. Small wonder, too: the benefits of credit cards relative to checks and/or cash far outweighed the pain it took to roll them out:
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_853" id="identifier_3_853" title="Although even then, it took decades">
    4
   </a>
  </p>
  <figure aria-describedby="caption-attachment-4179" class="wp-caption aligncenter" id="attachment_4179" style="width: 640px">
   <a href="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167.jpg">
    <img alt="How new payment systems are — or are not — adopted" class="size-large wp-image-4179" height="406" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-1024x650.jpg" srcset="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-1024x650.jpg 1024w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-300x190.jpg 300w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-768x488.jpg 768w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-992x630.jpg 992w" width="640"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-4179">
    When the benefit (vertical distance) is greater than the pain (horizontal distance) of establishing a new network, a new technology can breakthrough. However, if the benefit is only incremental, then the status quo is likely to prevail.
   </figcaption>
  </figure>
  <p>
   This is much less the case when it comes to alternative payment methods. The pain of establishing a new two-sided network remains just as significant, but the upside to the new payment systems
   <em>
    relative to credit cards
   </em>
   is much less than the benefits of credit cards relative to cash.
  </p>
  <p>
   That is why the most interesting places to think about when it comes to new payment systems are countries with low credit card penetration. Here in Taiwan, for example, when I first arrived in 2003 almost everything was cash only.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_853" id="identifier_4_853" title="Credit cards are much more widespread now">
    5
   </a>
   Just a year earlier, however, in 2002, the EasyCard Corporation née Smart Card Corporation had rolled out an RFID stored value card for use on Taipei’s new MRT (subway) system with the ability to add cash to your account at any convenience store or MRT station. Within a few years you could use the card everywhere: buses, trains, taxis, parking, government fees, and now, 10 years on, almost every retailer, and the RFID chip is no longer limited to cards, but is embedded in some phones, key fobs, and more. The EasyCard was modeled on Hong Kong’s
   <a href="http://en.wikipedia.org/wiki/Octopus_card">
    Octopus card
   </a>
   , which is even more ubiquitous in Hong Kong retail; the common thread in both systems was significantly lower credit card penetration relative to the US.
  </p>
  <p>
   The point is not to say that RFID stored-value cards are the future (although they are much more merchant-friendly than credit cards). Rather, the reason that contact-less payment systems have taken off in sectors beyond transportation is that their relevant competitor was the obviously inferior cash, not the slightly less-good credit card. The gain was worth the pain of creating a new two-sided network of merchants and consumers.
  </p>
  <p>
   The broader takeaway, though, is that more and more breakthroughs, especially those that involve significant network effects, are likely to come from outside the United States. You already see this in the messaging space:
  </p>
  <ul>
   <li>
    SMS is effectively free for most American’s on post-paid plans
   </li>
   <li>
    SMS is charged on a per-message basis in many other parts of the world
   </li>
   <li>
    Ergo, services like WhatsApp and LINE take off in non-US markets where they are a massive leap in value relative to the status quo and are worth the pain of getting all your friends on board
   </li>
  </ul>
  <p>
   The vast majority of IT innovation over the last two decades has started in the US, and the quality of services available to the US consumer is now quite high; this means the hurdle for something new to breakthrough is higher still. In many other parts of the world, though, which are only now getting connected – and usually via a smartphone, not a PC – there are all kinds of opportunities that are leaps and bounds better than what was previously available, even as they aren’t enough of an improvement over the US status quo for consumers in the US to care. Relativity matters, and both investors and startups would be well-served by looking for geographies where their ideas have leapfrog potential.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_853">
    Along with
    <a href="http://stratechery.com/2014/black-box-strategy/">
     TV
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_853">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_853">
    I didn’t calculate the card markup fee; presumably Square gets a very favorable rate [
    <a class="footnote-link footnote-back-link" href="#identifier_1_853">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_853">
    Said fees are Stratechery’s largest cost already [
    <a class="footnote-link footnote-back-link" href="#identifier_2_853">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_853">
    Although even then, it took decades [
    <a class="footnote-link footnote-back-link" href="#identifier_3_853">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_853">
    Credit cards are much more widespread now [
    <a class="footnote-link footnote-back-link" href="#identifier_4_853">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-853" href="https://stratechery.com/2014/problem-payments/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-853" href="https://stratechery.com/2014/problem-payments/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-853" href="https://stratechery.com/2014/problem-payments/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2014/problem-payments/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

