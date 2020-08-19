---
layout: post
title: "Defining Aggregators"
date: 2017-09-26T14:27:17+00:00
author: Ben Thompson
from: https://stratechery.com/2017/defining-aggregators/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2759 post type-post status-publish format-standard hentry category-articles topics-app-stores topics-apple-app-store topics-networks topics-regulation topics-ride-sharing topics-search topics-social topics-technologies topics-transportation concepts-aggregation-theory concepts-antitrust concepts-commoditizing-suppliers concepts-distribution-and-transaction-costs concepts-owning-customer-relationship concepts-smiling-curve concepts-technology-and-society companies-apple companies-facebook companies-google companies-netflix companies-uber" id="post-2759">
 <header class="entry-header">
  <h1 class="entry-title">
   Defining Aggregators
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-09-26T07:27:17-07:00">
     Tuesday, September 26, 2017
    </time>
    <time class="updated" datetime="2018-11-07T00:11:45-08:00">
     Wednesday, November 7, 2018
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
   (
   <em>
    Note: this is not a typical Stratechery article; there is no over-arching narrative or reference to current news. Rather, the primary goal is to provide a future point of reference
   </em>
   )
  </p>
  <p>
   Aggregation Theory describes how platforms (i.e. aggregators) come to dominate the industries in which they compete in a systematic and predictable way. Aggregation Theory should serve as a guidebook for aspiring platform companies, a warning for industries predicated on controlling distribution, and a primer for regulators addressing the inevitable antitrust concerns that are the endgame of Aggregation Theory.
  </p>
  <p>
   Aggregation Theory was first coined in
   <a href="https://stratechery.com/2015/aggregation-theory/">
    this eponymously-titled 2015 article
   </a>
   . That article followed on the heels of a series of posts about
   <a href="https://stratechery.com/2015/airbnb-and-the-internet-revolution/">
    Airbnb
   </a>
   ,
   <a href="https://stratechery.com/2015/netflix-and-the-conservation-of-attractive-profits/">
    Netflix
   </a>
   , and
   <a href="https://stratechery.com/2015/why-web-pages-suck/">
    web publishing
   </a>
   that, I realized, fit together into a broader framework that was applicable to a range of Internet-enabled companies. Over the ensuing two years I have significantly fleshed out the ideas in that original article, yet subsequent articles necessarily link to an article that marked the beginning of Aggregation Theory, not the current state.
  </p>
  <p>
   That noted,
   <a href="https://stratechery.com/2015/aggregation-theory/">
    the original article
   </a>
   is very much worth reading, particularly its description of how value has shifted away from companies that control the distribution of scarce resources to those that control demand for abundant ones; the purpose of this article is to catalog exactly what the latter look like.
  </p>
  <h4>
   The Characteristics of Aggregators
  </h4>
  <p>
   Aggregators have all three of the following characteristics; the absence of any one of them can result in a very successful business (in the case of Apple, arguably the most successful business in history), but it means said company is not an aggregator.
  </p>
  <p>
   <strong>
    Direct Relationship with Users
   </strong>
  </p>
  <p>
   This point is straight-forward, yet the linchpin on which everything else rests: aggregators have a direct relationship with users. This may be a payment-based relationship, an account-based one, or simply one based on regular usage (think Google and non-logged in users).
  </p>
  <p>
   <strong>
    Zero Marginal Costs For Serving Users
   </strong>
  </p>
  <p>
   Companies traditionally have had to incur (up to) three types of marginal costs when it comes to serving users/customers directly.
  </p>
  <ul>
   <li>
    The cost of goods sold (COGS), that is, the cost of producing an item or providing a service
   </li>
   <li>
    Distribution costs, that is the cost of getting an item to the customer (usually via retail) or facilitating the provision of a service (usually via real estate)
   </li>
   <li>
    Transaction costs, that is the cost of executing a transaction for a good or service, providing customer service, etc.
   </li>
  </ul>
  <p>
   Aggregators incur none of these costs:
  </p>
  <ul>
   <li>
    The goods “sold” by an aggregator are digital and thus have zero marginal costs (they may, of course, have significant fixed costs)
    <a class="footnote-link footnote-identifier-link" href="#footnote_0_2759" id="identifier_0_2759" title="And yes, in the very long run, all fixed costs are marginal costs; that said, while the amount of capital costs for aggregators is massive, their userbase is so large that even over the long run the fixed costs per user are infinitesimal, particularly relative to revenue generated">
     1
    </a>
   </li>
   <li>
    These digital goods are delivered via the Internet, which results in zero distribution costs
    <a class="footnote-link footnote-identifier-link" href="#footnote_1_2759" id="identifier_1_2759" title="In terms of the marginal customer; in aggregate there are of course significant bandwidth costs, but see the previous footnote">
     2
    </a>
   </li>
   <li>
    Transactions are handled automatically through automatic account management, credit cards payments, etc.
    <a class="footnote-link footnote-identifier-link" href="#footnote_2_2759" id="identifier_2_2759" title="Credit card fees are a significant transaction cost that do limit some types of businesses, but will generally be ignored in this analysis">
     3
    </a>
   </li>
  </ul>
  <p>
   This characteristic means that businesses like Apple hardware and Amazon’s traditional retail operations are not aggregators; both bear significant costs in serving the marginal customer (and, in the case of Amazon in particular, have achieved such scale that the service’s relative cost of distribution is actually a moat).
  </p>
  <p>
   <strong>
    Demand-driven Multi-sided Networks with Decreasing Acquisition Costs
   </strong>
  </p>
  <p>
   Because aggregators deal with digital goods, there is an abundance of supply; that means users reap value through discovery and curation, and most aggregators get started by delivering superior discovery.
  </p>
  <p>
   Then, once an aggregator has gained some number of end users, suppliers will come onto the aggregator’s platform on the aggregator’s terms, effectively commoditizing and modularizing themselves. Those additional suppliers then make the aggregator more attractive to more users, which in turn draws more suppliers, in a virtuous cycle.
  </p>
  <p>
   This means that for aggregators, customer acquisition costs decrease over time; marginal customers are attracted to the platform by virtue of the increasing number of suppliers. This further means that aggregators enjoy winner-take-all effects: since the value of an aggregator to end users is continually increasing it is exceedingly difficult for competitors to take away users or win new ones.
  </p>
  <p>
   This is in contrast to non-aggregator and non-platform companies that face
   <em>
    increasing
   </em>
   customer acquisition costs as their user base grows. That is because initial customers are often a perfect product-market fit; however, as that fit decreases, the surplus value from the product decreases as well and quickly turns negative. Generally speaking, any business that creates its customer value in-house is not an aggregator because eventually its customer acquisition costs will limit its growth potential.
  </p>
  <p>
   One additional note: the aforementioned Apple and Amazon do have businesses that qualify as aggregators, at least to a degree: for Apple, it is the App Store (as well as the Google Play Store). Apple owns the user relationship, incurs zero marginal costs in serving that user, and has a network of App Developers continually improving supply in response to demand. Amazon, meanwhile, has Amazon Merchant Services, which is a two-sided network where Amazon owns the end user and passes all marginal costs to merchants (i.e. suppliers).
  </p>
  <h4>
   Classifying Aggregators
  </h4>
  <p>
   Aggregation is fundamentally about owning the user relationship and being able to scale that relationship; that said, there are different levels of aggregation based on the aggregator’s relationship to suppliers:
  </p>
  <p>
   <strong>
    Level 1 Aggregators: Supply Acquisition
   </strong>
  </p>
  <p>
   Level 1 Aggregators acquire their supply; their market power springs from their relationship with users, but is primarily manifested through superior buying power. That means these aggregators take longer to build and are more precarious in the short-term.
  </p>
  <p>
   The best example of a Level 1 Aggregator is Netflix. Netflix owns the user relationship and bears no marginal costs in terms of COGS, distribution costs,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_2759" id="identifier_3_2759" title="Obviously bandwidth in the aggregate is a particularly large cost of Netflix">
    4
   </a>
   or transaction costs.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_2759" id="identifier_4_2759" title="In all cases, credit card fees excepted">
    5
   </a>
   Moreover, Netflix does not create shows, but it does acquire them (increasingly exclusively to Netflix); the more content Netflix acquires, the more its value grows to potential users. And, the more users Netflix gains, the more it can spend on acquiring content in a virtuous cycle.
  </p>
  <p>
   Level 1 aggregators typically operate in industries where supply is highly differentiated, and are susceptible to competitors with deeper pockets or orthogonal business models.
  </p>
  <p>
   <strong>
    Level 2 Aggregators: Supply Transaction Costs
   </strong>
  </p>
  <p>
   Level 2 Aggregators do not own their supply; however, they do incur transaction costs in bringing suppliers onto their platform. That limits the growth rate of Level 2 aggregators absent the incursion of significant supplier acquisition costs.
  </p>
  <p>
   Uber is a Level 2 Aggregator (and Airbnb in some jurisdictions due to local regulations). Uber owns the user relationship and bears no marginal costs in terms of COGS, distribution costs, or transaction costs. Moreover, Uber does not own cars; those are supplied by drivers who sign up for the platform directly. At that point, though Uber needs to undertake steps like background checks, vehicle verification, etc. that incur transaction costs both in terms of money as well as time. This limits supply growth which ultimately limits demand growth.
  </p>
  <p>
   Level 2 aggregators typically operate in industries with significant regulatory concerns that apply to the quality and safety of suppliers.
  </p>
  <p>
   <strong>
    Level 3 Aggregators: Zero Supply Costs
   </strong>
  </p>
  <p>
   Level 3 Aggregators do not own their supply and incur no supplier acquisition costs (either in terms of attracting suppliers or on-boarding them).
  </p>
  <p>
   Google is the prototypical Level 3 Aggregator: suppliers (that is, websites) are not only accessible by Google by default, but in fact actively make themselves more easily searchable and discoverable (indeed, there is an entire industry — search engine optimization (SEO) — that is predicated on suppliers
   <em>
    paying
   </em>
   to get themselves onto Google more effectively).
  </p>
  <p>
   Social networks are also Level 3 Aggregators: initial supply is provided by users (who are both users and suppliers); over time, as more and more attention is given to the social networks, professional content creators add their content to the social network for free.
  </p>
  <p>
   Level 3 aggregators are predicated on massive numbers of users, which means they are usually advertising-based (which means they are free to users). An interesting exception is the aforementioned App Stores: in this case the limited market size (relatively speaking) is made up by the significantly increased revenue-per-customer available to app developers with suitable business models (primarily consumable in-app purchases).
  </p>
  <p>
   <strong>
    The Super-Aggregators
   </strong>
  </p>
  <p>
   Super-Aggregators operate multi-sided markets with at least
   <em>
    three
   </em>
   sides — users, suppliers, and advertisers — and have zero marginal costs on all of them. The only two examples are Facebook and Google, which in addition to attracting users and suppliers for free, also have self-serve advertising models that generate revenue without corresponding variable costs (other social networks like Twitter and Snapchat rely to a much greater degree on sales-force driven ad sales).
  </p>
  <p>
   For more about Super-Aggregators see
   <a href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/">
    this article
   </a>
   .
  </p>
  <h4>
   Regulating Aggregators
  </h4>
  <p>
   Given the winner-take-all nature of Aggregators, there is, at least in theory, a clear relationship between
   <a href="https://stratechery.com/2016/antitrust-and-aggregation/">
    Antitrust and Aggregation
   </a>
   . However, traditional jurisprudence is limited by three factors:
  </p>
  <ul>
   <li>
    The key characteristic of Aggregators is that they own the user relationship. Critically, the user chooses this relationship because the aggregator offers a superior service. This makes it difficult to make antitrust arguments based on consumer welfare (the standard for U.S. jurisprudence for the last 35 years).
   </li>
   <li>
    The nature of digital markets is such that aggregators may be inevitable; traditional regulatory relief, like breaking companies up or limiting their addressable markets will likely result in a new aggregator simply taking their place.
   </li>
   <li>
    Aggregators make it dramatically simpler and cheaper for suppliers to reach customers (which is why suppliers work so hard to be on their platform). This increases the types of new businesses that can be created by virtue of the aggregators existing (YouTube creators, Amazon merchants, small publications, etc.); regulators should take care to preserve these new opportunities (and even protect them).
   </li>
  </ul>
  <p>
   These are guidelines for regulation; determining specifics is an ongoing project for Stratechery, as are the definitions in this article.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2759">
    And yes, in the very long run, all fixed costs are marginal costs; that said, while the amount of capital costs for aggregators is massive, their userbase is so large that even over the long run the fixed costs per user are infinitesimal, particularly relative to revenue generated [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2759">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2759">
    In terms of the marginal customer; in aggregate there are of course significant bandwidth costs, but see the previous footnote [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2759">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2759">
    Credit card fees are a significant transaction cost that do limit some types of businesses, but will generally be ignored in this analysis [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2759">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2759">
    Obviously bandwidth in the aggregate is a particularly large cost of Netflix [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2759">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_2759">
    In all cases, credit card fees excepted [
    <a class="footnote-link footnote-back-link" href="#identifier_4_2759">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2759" href="https://stratechery.com/2017/defining-aggregators/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2759" href="https://stratechery.com/2017/defining-aggregators/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2759" href="https://stratechery.com/2017/defining-aggregators/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/defining-aggregators/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

