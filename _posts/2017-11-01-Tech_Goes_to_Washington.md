---
layout: post
title: "Tech Goes to Washington"
date: 2017-11-01T16:53:17+00:00
author: Ben Thompson
from: https://stratechery.com/2017/tech-goes-to-washington/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2812 post type-post status-publish format-standard hentry category-articles topics-government-organizations topics-networks topics-search topics-social topics-technologies topics-us-congress concepts-aggregation-theory concepts-distribution-and-transaction-costs concepts-evolution-of-technology concepts-owning-customer-relationship concepts-politics concepts-privacy concepts-technology-and-society concepts-the-social-epoch companies-facebook companies-google companies-twitter" id="post-2812">
 <header class="entry-header">
  <h1 class="entry-title">
   Tech Goes to Washington
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-11-01T09:53:17-07:00">
     Wednesday, November 1, 2017
    </time>
    <time class="updated" datetime="2019-01-30T12:47:03-08:00">
     Wednesday, January 30, 2019
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
   There was a striking moment during the Senate hearing about Facebook, Twitter, and Google’s role in the 2016 U.S. election, that suggested the entire endeavor would be a bit of a farce, marked by out-of-tech Senators oblivious to how the Internet actually works. The three companies’ home-state Senator, Diane Feinstein, had just finished asking about the ability to target custom audiences (including a request that Sean Edgett, Twitter’s acting general counsel, explain what ‘impressions’ were), and handed the floor to Nebraska Senator Ben Sasse:
  </p>
  <div align="center">
   <div class="video-player" id="v-LNgUSm6s-1">
    <iframe allowfullscreen="" frameborder="0" height="360" src="https://videopress.com/embed/LNgUSm6s?hd=1&amp;loop=0&amp;autoPlay=0&amp;permalink=1" width="640">
    </iframe>
   </div>
  </div>
  <p>
   Did you catch Feinstein in the background asking “Did he say 330 million?” with surprise in her voice? What might she have thought had it been noted that Facebook has 2 billion users! At that moment it was hard to see this hearing amounting to anything; the next Senator, Dick Durbin of Illinois, asked why Facebook didn’t, and I quote, “hold the phone” when a Russian intelligence agency took out the ads. A few Senators later Richard Blumenthal demanded Twitter determine how many people declined to vote after seeing tweets suggesting voters could text their choice, and that Facebook reveal whom may have taught the Russian intelligence agency how to do targeting; both requests are, quite obviously, unknowable by the companies in question.
  </p>
  <p>
   Meanwhile, the tech companies were declaring at every possible opportunity that they understood that the Russian problem was serious, and that they were committed to fixing it. “We do believe these tools are powerful, and yet we have a responsibility to make sure they’re not used to inflame division,” said Colin Stretch, Facebook’s general counsel. He later stated, “We want our ad tools to be used for political discourse, certainly. But we do not want our ad tools to be used to inflame and divide.” It seemed like a concerted PR effort designed to sooth Senators animated more by scoring political points than by actually understanding the issues at hand: yes, the problem is serious, yes, we are committed to fixing it, and of course, it is so complicated that only we can.
  </p>
  <p>
   What made the hearing worth watching, though, were three lines of questioning that blew this position apart.
  </p>
  <h4>
   Senator John Kennedy on Facebook’s Power
  </h4>
  <p>
   The single most compelling line of questioning came from Louisiana junior Senator John Kennedy;
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2812" id="identifier_0_2812" title="No relation to the Massachusetts political family">
    1
   </a>
   first, he exposed the company’s implied claims that they could actually fix the problem as a sham:
  </p>
  <div align="center">
   <div class="video-player" id="v-UEHiTnbq-1">
    <iframe allowfullscreen="" frameborder="0" height="360" src="https://videopress.com/embed/UEHiTnbq?hd=1&amp;loop=0&amp;autoPlay=0&amp;permalink=1" width="640">
    </iframe>
   </div>
  </div>
  <p>
   This is the exact issue I discussed in
   <a href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/">
    The Super Aggregators and the Russians
   </a>
   :
  </p>
  <blockquote>
   <p>
    Super-aggregators not only have zero transaction costs when it comes to users and content, but also when it comes to making money. This is at the very core of why Google and Facebook are so much more powerful than any of the other purely information-centric networks. The vast majority of advertisers on both networks never deal with a human (and if they do, it’s in customer support functionality, not sales and account management): they simply use the self-serve ad products like the one pictured above (or a more comprehensive tool built on the companies’ self-serve API).
   </p>
  </blockquote>
  <p>
   I added up the numbers in
   <a href="https://stratechery.com/2017/trustworthy-networking/">
    Trustworthy Networking
   </a>
   , estimating that Facebook served 276 million unique ads per quarter, and my entire point was the same as Kennedy’s: there is no way that Facebook could ever review every ad, much less investigate who is behind them, without completely ruining their revenue model.
  </p>
  <p>
   Kennedy wasn’t done, though: he went on to press Stretch in particular about just how much data Facebook has about, well, everyone:
  </p>
  <div align="center">
   <div class="video-player" id="v-4wYTzYZS-1">
    <iframe allowfullscreen="" frameborder="0" height="360" src="https://videopress.com/embed/4wYTzYZS?hd=1&amp;loop=0&amp;autoPlay=0&amp;permalink=1" width="640">
    </iframe>
   </div>
  </div>
  <p>
   Stretch was insistent that Facebook would never look up the data on any one individual, both because of internal policies as well as the way the company’s data store was engineered. What Kennedy was driving at, though, is that Facebook
   <em>
    could
   </em>
   ; here is the transcription:
  </p>
  <blockquote>
   <p>
    <strong>
     Kennedy:
    </strong>
    Let’s suppose your CEO came to you — not you, but somebody who could do it in your company — maybe you could — and said, “I want to know everything we can find out about Senator Graham. I want to know the movies he likes, I want to know the bars he goes to. I want to know who his friends are. I want to know what schools he goes — went to.” You could do that, couldn’t you?
   </p>
   <p>
    <strong>
     Stretch:
    </strong>
    The answer is absolutely not. We have limitations in place on our ability to —
   </p>
   <p>
    <strong>
     Kennedy:
    </strong>
    No, no, I’m not asking about your rules. I’m saying you have the ability to do that. Don’t you?
   </p>
   <p>
    <strong>
     Stretch:
    </strong>
    Again, Senator. the answer is no. we’re not —
   </p>
   <p>
    <strong>
     Kennedy:
    </strong>
    You can’t put a name to a face to a piece of data? You’re telling me that?
   </p>
   <p>
    <strong>
     Stretch:
    </strong>
    So we have designed our systems to prevent exactly that, to protect the privacy of our users.
   </p>
   <p>
    <strong>
     Kennedy:
    </strong>
    I understand. But you can get around that to find that identity, can’t you?
   </p>
   <p>
    <strong>
     Stretch:
    </strong>
    No, Senator. I cannot.
   </p>
   <p>
    <strong>
     Kennedy:
    </strong>
    That’s your testimony under oath.
   </p>
   <p>
    <strong>
     Stretch:
    </strong>
    Yes, it is.
   </p>
  </blockquote>
  <p>
   Senator Kennedy is an interesting character. He speaks with a Southern drawl — the contrast to Stretch, a Harvard-law educated former Supreme Court clerk who sounded exactly like his biography, was stark. Kennedy, though, is impressive in his own right: after graduating magna cum laude from Vanderbilt he received his J.D. from Virginia, and then was a Rhodes Scholar, receiving a Bachelor of Civil Law with first class honours from Oxford. After a winding career in politics, including a switch from the Democratic party to the Republicans, he was elected to the Senate last fall.
  </p>
  <p>
   What Kennedy surely realized — and what Stretch, apparently, did not — is that Facebook had already effectively answered Kennedy’s question: the very act of investigating the accounts used by Russian intelligence entailed doing the sort of sleuthing that Kennedy wanted Stretch to say was possible. Facebook dived deep into an account by choice, came to understand everything about it, and then shut it down and delivered the results to Congress. It follows that Facebook
   <em>
    could
   </em>
   — not would, but could — do that to Senator Graham or anyone else.
  </p>
  <p>
   To be clear, Stretch made clear that Facebook did this because the accounts in question had been deemed inauthenetic; that removed all of the external legal, internal policy, and business model limitations that would prevent Facebook from doing such forensic work to an individual account.
  </p>
  <p>
   Still, Kennedy’s two lines of questions combined revealed the tech companies’ testimony for the paradox it was: on the one hand, their sheer scale means it is impossible to fully stamp out activities like Russian meddling; on the other, that same scale means they all have the most intimate information on nearly everyone.
  </p>
  <h4>
   Senator Ted Cruz on Bias
  </h4>
  <p>
   Senator Ted Cruz’s line of questioning highlighted just how problematic this power is:
  </p>
  <div align="center">
   <div class="video-player" id="v-9pE7n0Vv-1">
    <iframe allowfullscreen="" frameborder="0" height="360" src="https://videopress.com/embed/9pE7n0Vv?hd=1&amp;loop=0&amp;autoPlay=0&amp;permalink=1" width="640">
    </iframe>
   </div>
  </div>
  <p>
   Try, but for a moment, to set your personal politics aside; Cruz is driving at a very fundamental question: is what is acceptable driven by what is right or what is collectively decided? The temptation is surely to choose the former: right is right! And indeed, I suspect that most of my readers believe that Cruz is wrong about most political questions. It is worth, though, considering the alternative: what if the powers that be decide unilaterally?
  </p>
  <p>
   This line of questioning highlights the problems raised by Kennedy: if the powers that be also happen to have massive investigatory power over basically everyone, then at what point do the internal rules and norms against utilizing that power become overwhelmed by the demand that right thinking be enforced? The tech companies argued throughout this testimony that they took their responsibility seriously, and would snuff out bad actors. Who, though, decides who those bad actors are?
  </p>
  <p>
   The point of democracy has never been about having the most efficient form of government; no company, for example, would make decisions in such a manner. The best companies are in many respects totalitarian: CEOs have the final say, and employees either get on board or get out. That, though, is only viable because the downside is merely financial; when governments go wrong, on the other hand, far worse can result. That is democracy’s upside: it may not get the most done, but that applies to good outcomes as well as bad.
  </p>
  <p>
   This also highlights the absurdity in Stretch’s declaration that “We want our ad tools to be used for political discourse, certainly. But we do not want our ad tools to be used to inflame and divide.” Politics is inflammatory, and it does divide. To endeavor to stamp out inflammatory and divisive statements is, by definition, to exercise a degree of power that is clearly latent in Facebook et al, and clearly corrosive to the democratic process.
  </p>
  <h4>
   Senator Al Franken on Tech’s Vulnerability
  </h4>
  <p>
   Cruz’s statement acknowledged that the junior Senator from Minnesota had been very critical of his presidential candidacy; indeed, it is hard to imagine two politicians that fall further apart on the political spectrum. To that end, Franken took a very different tack than Cruz: while the latter was concerned with the tech companies’ lack of neutrality, Franken was disgusted by their lack of action:
  </p>
  <div align="center">
   <div class="video-player" id="v-fBEfcEe1-1">
    <iframe allowfullscreen="" frameborder="0" height="360" src="https://videopress.com/embed/fBEfcEe1?hd=1&amp;loop=0&amp;autoPlay=0&amp;permalink=1" width="640">
    </iframe>
   </div>
  </div>
  <p>
   There are two levels to this exchange: technically, Franken is off the mark. To reduce Russian interference to buying political ads with rubles is to skate over the complexity of this issue: how do you know what is a political ad, for one, and simply looking at currency is almost certainly a relatively useless signal, for another.
  </p>
  <p>
   Rhetorically, though, Franken is devastating. Befitting his background as a comedian, Franken has a knack for framing the question at hand in a way that is easy for laypeople to understand, and all but impossible for Facebook to answer. Stretch looks like a fool, not because he is wrong, but because he is right.
  </p>
  <p>
   This matters; the biggest thing the tech companies have going for them is that
   <a href="https://www.cnbc.com/2017/10/14/anti-tech-propaganda-based-on-false-premises-commentary.html">
    they are popular
   </a>
   , and this controversy is largely centered within the coastal tech-media bubble. What Franken demonstrated, though, is that this position is potentially more fragile than it seems.
  </p>
  <hr/>
  <p>
   I still believe that, on balance, blaming tech companies for the last election is, more than anything, a convenient way to avoid larger questions about what drove the outcome. And, as I noted, the fact is that tech companies remain popular with the broader public.
  </p>
  <p>
   What this hearing highlighted, though, is the degree to which the position of Facebook in particular has become more tenuous. The fact of the matter is that Facebook (and Google)
   <em>
    is
   </em>
   more powerful than any entity we have seen before. Magnifying the problem is that, over the last year, Facebook has decided to “take responsibility”, and what is that but a commitment to exercise their control over what people see?
  </p>
  <p>
   Indeed, this is where Facebook’s inescapable internal bias surely played a role: the “safest” position for the company to take would be the sort of neutrality demanded by Cruz — a refusal to do any sort of explicit policing of content, no matter how objectionable. That, though, was unacceptable to the company’s employee base specifically, and Silicon Valley broadly: traumatized by the election of a candidate deemed unacceptable Facebook has
   <a href="https://stratechery.com/2017/manifestos-and-monopolies/">
    committed itself to exercising its power
   </a>
   , and that is in itself a cause for alarm.
  </p>
  <p>
   More broadly, it is hard to escape the conclusion that tech companies have been unable to resist the ring of power: the end game of
   <a href="https://stratechery.com/2015/aggregation-theory/">
    aggregation
   </a>
   is unprecedented control over what people see; the only way to handle that power without risking the abuse of it is a commitment to true neutrality. That Facebook, Twitter, and Google — which, by the way, holds just as much if not more power than Facebook, but without the attendant media scrutiny — have committed to fixing the Russian problem is itself more problematic than those urging they do just that may realize.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2812">
    No relation to the Massachusetts political family [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2812">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2812" href="https://stratechery.com/2017/tech-goes-to-washington/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2812" href="https://stratechery.com/2017/tech-goes-to-washington/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2812" href="https://stratechery.com/2017/tech-goes-to-washington/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/tech-goes-to-washington/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

