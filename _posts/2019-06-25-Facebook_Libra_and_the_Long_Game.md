---
layout: post
title: "Facebook, Libra, and the Long Game"
date: 2019-06-25T14:32:14+00:00
author: Ben Thompson
from: https://stratechery.com/2019/facebook-libra-and-the-long-game/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-4249 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-bitcoin topics-cryptocurrencies topics-libra topics-payments concepts-aggregation-theory concepts-incentives concepts-making-money concepts-owning-customer-relationship companies-facebook" id="post-4249">
 <header class="entry-header">
  <h1 class="entry-title">
   Facebook, Libra, and the Long Game
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2019-06-25T07:32:14-07:00">
     Tuesday, June 25, 2019
    </time>
    <time class="updated" datetime="2019-06-26T09:41:25-07:00">
     Wednesday, June 26, 2019
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
   When I get things wrong — and I was very much wrong about Facebook’s blockchain plans — the reason is usually a predictable one: confirmation bias. That is, I already have an idea of what a company’s motivations are, and then view news through that lens, failing to think critically about what parts of that news might actually disconfirm my assumptions.
  </p>
  <p>
   So it was last month when the
   <a href="https://www.wsj.com/articles/facebook-building-cryptocurrency-based-payments-system-11556837547">
    Wall Street Journal reported
   </a>
   that Facebook was building a cryptocurrency-based payment system. I wrote in a
   <a href="https://stratechery.com/2019/facebooks-cryptocurrency-the-problem-and-benefit-of-credit-cards-the-facebook-payment-network/">
    Daily Update
   </a>
   :
  </p>
  <blockquote>
   <p>
    Start with the obvious: this isn’t a Bitcoin competitor. And why would it be? The entire point of Bitcoin is to be distributed; Facebook’s power come from its centralization. Indeed, this is probably the single most important prism through which to examine whatever it is that Facebook does in the space: the company is not going betray its dominant position, but rather seek to strengthen it. That is why I am not too concerned about not knowing the implementation details: take it as a given that whatever role users have to play in this network, Facebook will have final control.
   </p>
  </blockquote>
  <p>
   I stand by the first part of that excerpt: for all of
   <a href="https://www.wired.com/story/ambitious-plan-behind-facebooks-cryptocurrency-libra/">
    the positive attributes
   </a>
   Facebook is highlighting about Project Libra — which Facebook, in conjunction with the newly formed
   <a href="https://libra.org/en-US/">
    Libra Association
   </a>
   ,
   <a href="https://www.wsj.com/articles/facebook-unveils-crypto-wallet-based-on-currency-libra-11560850141">
    announced last week
   </a>
   — it is unreasonable to expect that Facebook would invest significant resources in something that would weaken its position. What I got wrong was presuming that meant overt Facebook control. Frustratingly, it was an error that should have both been obvious in my original analysis and also clear in the broader view of the Internet I have explained through
   <a href="https://stratechery.com/concept/aggregation-theory/">
    Aggregation Theory
   </a>
   .
  </p>
  <h4>
   What is Libra
  </h4>
  <p>
   Libra is being presented as a cryptocurrency based on a blockchain: transactions are recorded on a shared ledger and verified by “miners” independently solving cryptographic problems and arriving at a consensus that the transaction is legitimate and should be added to the ledger permanently.
  </p>
  <p>
   In practice, it is much more complicated: while a limited set of “validators” — aka miners — share a history of transactions in (individual) blocks that are chained together (i.e. a blockchain), what Libra actually exposes is the current state of the ledger. In practice this means that adding new transactions can be much quicker and more efficient — more akin to adding a line to a spreadsheet than rebuilding the entire spreadsheet from scratch.
  </p>
  <p>
   In other words, there is a trade-off between trust and efficiency: whereas anyone can “rebuild the spreadsheet” in the case of a cryptocurrency like Bitcoin, where the blockchain is fully exposed, normal users have to trust Libra’s validators.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_4249" id="identifier_0_4249" title="To clarify, this roadmap on the Libra developers blog includes plans to allow anyone to “rebuild the spreadsheet”:

  Validator APIs to support full nodes (nodes that have a full replica of the blockchain but do not participate in consensus). This feature allows for the creation of replicas that can support scaling access to the blockchain and the auditing of the correct execution of transactions.

However, only validators can actually validate transactions (unlike Bitcoin where anyone can be a miner/validator) ">
    1
   </a>
   On the other hand, Bitcoin, thanks to the overhead of communicating and verifying every transaction, can only manage around 7 transactions a second; Libra is promising 1,000 transactions per second.
  </p>
  <h4>
   The Validators
  </h4>
  <p>
   Who, then, are the validators? Well, Facebook is one, but only one: currently there are 28 “Founding Members”, including merchants, venture capitalists, and payment networks, that meet two of the following three criteria:
  </p>
  <ul>
   <li>
    More than $1 billion USD in market value or more than $500 million USD in customer cash flow
   </li>
   <li>
    Reach more than 20 million people a year
   </li>
   <li>
    Recognition as a top-100 industry leader by a third-party association such as Fortune or S&amp;P
   </li>
  </ul>
  <p>
   These “Founding Members” are required to make a minimum investment of $10 million and provide computing power to the network. In addition, there are separate requirements for non-profit organizations and academic institutions that rely on a mixture of budget, track record, and rankings; a minimum investment may not be necessary. Libra intends to have 100 Founding Members by the time it launches next year.
  </p>
  <p>
   Here is the important thing to understand about the Libra Association: while its members — who again, are the validators — do control the Libra protocol, Facebook does not control the validators. Which, by extension, means that Facebook will not control Libra.
  </p>
  <h4>
   Libra Versus a Facebook Coin
  </h4>
  <p>
   To understand the distinction, consider an alternative route that Facebook could have taken: a so-called “Facebook Coin”. In that case Facebook would have had total control over the protocol, and to be sure, this would have distinct advantages for Facebook specifically and the usability of a “Facebook Coin” generally:
  </p>
  <ul>
   <li>
    Efficiency and scalability would be maximized because Facebook could coordinate perfectly with itself
   </li>
   <li>
    Development would be significantly accelerated because Facebook would not have to achieve consensus
   </li>
   <li>
    Facebook would have perfect knowledge of all transactions on the system because it would control all entry points
   </li>
  </ul>
  <p>
   This is the Trust-Efficiency tradeoff taken to the opposite extreme from Bitcoin:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5.jpeg">
    <img alt="A theoretical Facebook Coin would be the opposite of Bitcoin" class="aligncenter size-full wp-image-4250" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5.jpeg" srcset="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5.jpeg 1024w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5-300x225.jpeg 300w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5-768x576.jpeg 768w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-5-840x630.jpeg 840w" width="1024"/>
   </a>
  </p>
  <p>
   With Bitcoin, there is no need to trust anyone — you can verify the entire blockchain yourself — but at the cost of efficiency of transactions. A Facebook Coin, on the other hand, would require complete trust of Facebook, but transactions would be far more efficient as a result.
  </p>
  <p>
   The most obvious example of this is WeChat Pay: WeChat handles the transactions, stores the money, and is the sole source of authority about who owns what, and thanks to the ubiquity of WeChat and the efficiency of this model, WeChat Pay (along with Alipay) has become the default payment mechanism in China.
  </p>
  <p>
   Unsurprisingly, WeChat doesn’t use any sort of blockchain-based technology. Why would it? The entire point of a blockchain is to distribute a ledger across multiple parties, which is fundamentally less efficient than simply storing the entire ledger in a single database managed by one party.
  </p>
  <h4>
   Trust Versus Efficiency
  </h4>
  <p>
   This gets at the error in analysis I referenced above: because I was anchored on the idea of Facebook capturing transaction data, I missed that when the Wall Street Journal reported last month that Facebook was using some sort of blockchain technology (leaving aside the quibble on the definition noted above) it was an obvious signal that whatever Facebook was announcing would
   <em>
    not
   </em>
   be completely controlled by Facebook, because if the goal were Facebook control of a Facebook Coin then a blockchain would be a silly way to implement it.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3.jpeg">
    <img alt="A decentralized blockchain versus a centralized database" class="aligncenter size-full wp-image-4253" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3.jpeg" srcset="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3.jpeg 1024w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3-300x225.jpeg 300w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3-768x576.jpeg 768w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-3-840x630.jpeg 840w" width="1024"/>
   </a>
  </p>
  <p>
   The best way to understand Libra, then, is as a sort of distributed ledger that is a compromise between a fully public blockchain and an internal database:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2.jpeg">
    <img alt="A distributed ledger as a compromise between a decentralized blockchain and a centralized database" class="aligncenter size-full wp-image-4252" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2.jpeg" srcset="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2.jpeg 1024w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2-300x225.jpeg 300w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2-768x576.jpeg 768w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-2-840x630.jpeg 840w" width="1024"/>
   </a>
  </p>
  <p>
   This means that the overall system is much more efficient than Bitcoin, while the necessary level of trust is spread out to multiple entities, not one single company:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4.jpeg">
    <img alt="Bitcoin versus Libra versus a theoretical Facebook coin" class="aligncenter size-full wp-image-4251" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4.jpeg" srcset="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4.jpeg 1024w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4-300x225.jpeg 300w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4-768x576.jpeg 768w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-4-840x630.jpeg 840w" width="1024"/>
   </a>
  </p>
  <p>
   The trade-off is that Libra is not fully permissionless, although the
   <a href="https://libra.org/en-US/white-paper/">
    Libra White Paper
   </a>
   does say that is the long-term goal:
  </p>
  <blockquote>
   <p>
    To ensure that Libra is truly open and always operates in the best interest of its users, our ambition is for the Libra network to become permissionless. The challenge is that as of today we do not believe that there is a proven solution that can deliver the scale, stability, and security needed to support billions of people and transactions across the globe through a permissionless network. One of the association’s directives will be to work with the community to research and implement this transition, which will begin within five years of the public launch of the Libra Blockchain and ecosystem.
   </p>
  </blockquote>
  <p>
   Time will tell if this is possible: if you flip the “trust” axis in the above graphs the current state of affairs looks like this:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1.jpeg">
    <img alt="Is there an efficiency frontier when it comes to no-trust and efficiency?" class="aligncenter size-full wp-image-4254" height="768" sizes="(max-width: 1024px) 100vw, 1024px" src="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1.jpeg" srcset="https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1.jpeg 1024w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1-300x225.jpeg 300w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1-768x576.jpeg 768w, https://stratechery.com/wp-content/uploads/2019/06/IMG_A8EB77772EB3-1-840x630.jpeg 840w" width="1024"/>
   </a>
  </p>
  <p>
   It may very well prove to be the case that there is a sort of
   <a href="https://en.wikipedia.org/wiki/Efficient_frontier">
    efficient frontier
   </a>
   when it comes to “no-trust” versus “efficiency”: that is, any decrease in necessary trust requires a corresponding decrease in efficiency. From my perspective the safest assumption about Libra’s future is that efficiency will be the ultimate priority, which means that the more that Libra is used the more difficult it will be to ever transition to a permission-less model.
  </p>
  <h4>
   The Credit Card Challenge
  </h4>
  <p>
   Still, even if Libra remains controlled by an ever-expanding-but-still-limited set of validators, that is likely to be a far easier “sale” than a Facebook Coin controlled by a single company. Leaving aside the fact Facebook is not exactly swimming in trust these days when it comes to users, why would any other large company want to adopt a currency with a single point of corporate control?
  </p>
  <p>
   Keep in mind the situation in the United States and other developed countries is much different than China: credit cards have their flaws, particularly in terms of fees, but they are widely accepted by merchants and widely used by consumers. China, on the other hand, mostly leapfrogged credit cards entirely; this meant that WeChat Pay’s (and Alipay’s) competition was cash: in that case the relative advantages of WeChat Pay relative to cash (which are massive) could overcome any concerns around centralized control.
  </p>
  <p>
   A theoretical Facebook Coin’s relative advantage to credit cards, on the other hand, would be massively smaller, which means obstacles to widespread adoption — like trusting Facebook exclusively — would likely be insurmountable:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167.jpg">
    <img alt="How new payment systems are — or are not — adopted" class="size-full wp-image-4179" height="1466" sizes="(max-width: 2309px) 100vw, 2309px" src="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167.jpg" srcset="https://stratechery.com/wp-content/uploads/2014/04/IMG_0167.jpg 2309w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-300x190.jpg 300w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-768x488.jpg 768w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-1024x650.jpg 1024w, https://stratechery.com/wp-content/uploads/2014/04/IMG_0167-992x630.jpg 992w" width="2309"/>
   </a>
  </p>
  <p>
   Thus the federation of trust inherent in Libra, despite the loss of efficiency that entails: by
   <em>
    not
   </em>
   being in control, and by actively including corporations like Spotify and Uber that will provide places to use Libra outside of Facebook, and payment networks like Visa and PayPal that will facilitate such usage, Facebook is increasing the chances that Libra will actually be used instead of credit cards.
  </p>
  <h4>
   Aggregation and the Long Game
  </h4>
  <p>
   I do think it is overly cynical to completely dismiss the advertised benefits of Libra: remittances, for example, have been the go-to example of how cryptocurrencies can have societal benefit for a long time for a very good reason — the current system exacts major fees from the population that can least afford to bear them. And, while I just spent an entire section on credit cards, the reality is that credit card penetration is much lower amongst the poor in developed countries and in developing countries generally: a digital currency ultimately premised on owning a smartphone has the potential to significantly expand markets to the benefits of both consumers and service providers.
  </p>
  <p>
   To put it another way, Libra has the potential to significantly decrease friction when it comes to the movement of money; of course this potential is hardly limited to Libra — the reduction in friction is one of the selling points of digital currencies generally — but by virtue of being supported by Facebook, particularly the
   <a href="https://newsroom.fb.com/news/2019/06/coming-in-2020-calibra/">
    Calibra wallet
   </a>
   that will be both a standalone app and also built into Facebook Messenger and WhatsApp, accessing Libra will likely be much simpler than accessing other cryptocurrencies. When it comes to decreasing friction, simplifying the user experience matters just as much as eliminating intermediary institutions.
  </p>
  <p>
   There is also another component of trust beyond caring about who is verifying transactions: confidence that the value of Libra will be stable. This is the reason why Libra will have a fully-funded reserve denominated in a basket of currencies. This does not foreclose Libra becoming a fully standalone currency in the long run, but for now both users and merchants will be able to trust that the value of Libra will be sufficiently stable to use it for transactions.
  </p>
  <p>
   If all of these bets pay off — that users and merchants will trust a consortium more than Facebook; that Libra will be cheaper and easier to use, more accessible, and more flexible than credit cards; and that Libra itself will be a reliable store of value — then that decrease in friction will be realized at scale.
  </p>
  <p>
   And this is when this bet would pay off for Facebook (and the second point I missed in my earlier analysis): the implication that digital currencies will do for money what the Internet did for information is that the very long-term trend will be towards centralization around Aggregators. When there is no friction, control shifts
   <a href="https://stratechery.com/2017/goodbye-gatekeepers/">
    from gatekeepers
   </a>
   controlling supply to
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregators controlling demand
   </a>
   . To that end, by pioneering Libra, building what will almost certainly be the first wallet for the currency, and bringing to bear its unmatched network for facilitating payments, Facebook is betting it will offer the best experience for digital currency flows, giving it power not by controlling Libra but rather by controlling the most users of Libra.
  </p>
  <h4>
   Will It Work?
  </h4>
  <p>
   Libra’s success, if it comes, will likely proceed in stages, with different challenges and competitors at each stage:
  </p>
  <ul>
   <li>
    Initially the most obvious use case for Facebook’s Calibra wallet application will be peer-to-peer payments, which means the competitor will be applications like PayPal’s Venmo. Here Facebook’s biggest advantage will be leveraging its network and messaging applications.
   </li>
   <li>
    The second use case will be using Libra to transact with merchants, who stand to benefit both from reduced fees relative to credit cards as well as larger addressable markets (i.e. potential users who don’t have credit cards). Note that none of Libra’s Founding Members are banks, which impose the largest percentage of credit card fees; Visa and Mastercard, on the other hand, are, like PayPal, happy to sit on top of Libra.
   </li>
   <li>
    The largest leap will come last: Libra as a genuine currency, not simply a medium for transaction. This will be a function of volume in the previous two use cases, and is understandably concerning to governments all over the world. This, though, is another advantage of Facebook giving up direct control of Libra: while regulators will be able to limit wallets like Calibra (which will fully abide by Know-Your-Customer and Anti-Money-Laundering regulations), Libra — particularly if it achieves a fully permission-less-model — would be much more difficult to control.
   </li>
  </ul>
  <p>
   It is easy to see how Facebook, given its size, would thrive in that final state, for the reasons I detailed above. Just as
   <a href="https://twitter.com/asymco/status/417647326665400321/photo/1">
    Google long boasted
   </a>
   that the more people use the Internet the more revenue Google generates, it stands to reason that the more people use digital money the more it would benefit dominant digital companies like Facebook, whether that be through advertising, transactions, or simply making networks that much more valuable.
  </p>
  <p>
   That, though, is also a reason to be skeptical: the idea of Google making more money by people using the Internet more was once viewed as a happy alignment of incentives that justified Google’s services being free; today the centralization — and thus money-making potential — that follows a reduction in friction is much better understood, and there is much more concern about just how much power these Aggregators have.
  </p>
  <p>
   This is particularly the case with Facebook: despite all of the company’s efforts to design a system that does
   <em>
    not
   </em>
   entail trusting Facebook exclusively — again, this is not a Facebook Coin — Libra is already widely known as a Facebook initiative. Unless the consumer benefits are truly extraordinary, that may be enough to prevent Libra from ever gaining escape velocity. This applies even more to the Calibra wallet: Facebook promises not to mix transaction data with profile data, but that entails, well, trust that Facebook may have already lost.
  </p>
  <p>
   Still, that doesn’t mean digital currencies will never make it: I do think that Libra gets closer to a workable balance between trust and efficiency than Bitcoin, at least when it comes to being usable for transactions and not simply a
   <a href="https://stratechery.com/2017/tulips-myths-and-cryptocurrencies/">
    store of value
   </a>
   ; the question is who can actually get such a currency off the ground. Certainly Facebook’s audacity and ambition should not be underestimated, and the company’s network is the biggest reason to believe Libra will work;
   <a href="https://stratechery.com/2018/the-facebook-brand/">
    Facebook’s brand
   </a>
   is the biggest reason to believe it will not.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_4249">
    To clarify,
    <a href="https://developers.libra.org/blog/2019/06/18/the-path-forward">
     this roadmap on the Libra developers blog
    </a>
    includes plans to allow anyone to “rebuild the spreadsheet”:
   </li>
  </ol>
 </div>
</article>
