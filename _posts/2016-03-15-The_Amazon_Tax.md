---
layout: post
title: "The Amazon Tax"
date: 2016-03-15T14:33:20+00:00
author: Ben Thompson
from: https://stratechery.com/2016/the-amazon-tax/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2069 post type-post status-publish format-standard has-post-thumbnail hentry category-articles tag-developers topics-aws topics-cloud-computing concepts-business-models concepts-company-structure concepts-e-commerce concepts-incentives concepts-leverage concepts-platforms concepts-strategy companies-amazon" id="post-2069">
 <header class="entry-header">
  <h1 class="entry-title">
   The Amazon Tax
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-03-15T07:33:20-07:00">
     Tuesday, March 15, 2016
    </time>
    <time class="updated" datetime="2018-03-27T01:47:31-07:00">
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
   Ten years ago yesterday Amazon evangelist Jeff Barr posted
   <a href="https://aws.amazon.com/blogs/aws/amazon_s3/">
    a 222-word post
   </a>
   on the Amazon Web Services Blog
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2069" id="identifier_0_2069" title="Hosted on Typepad">
    1
   </a>
   that opened:
  </p>
  <blockquote>
   <p>
    Earlier today we rolled out Amazon S3, our reliable, highly scalable, low-latency data storage service.
   </p>
  </blockquote>
  <p>
   Until then Amazon Web Services had primarily been about providing developers with a way to tap into the Amazon retail store; S3, though, had nothing at all to do with retail,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2069" id="identifier_1_2069" title="Contrary to popular myth, Amazon was not selling excess capacity">
    2
   </a>
   at least not directly.
  </p>
  <h4>
   The Origin of AWS
  </h4>
  <p>
   As Brad Stone detailed in
   <a href="http://brad-stone.com/book/">
    The Everything Store
   </a>
   , by the early 2000s Amazon was increasingly constrained by the fact the various teams in the company were all served by one monolithic technical team that had to authorize and spin up resources for every project. Stone wrote:
  </p>
  <blockquote>
   <p>
    At the same time, Bezos became enamored with a book called Creation, by Steve Grand, the developer of a 1990s video game called Creatures that allowed players to guide and nurture a seemingly intelligent organism on their computer screens. Grand wrote that his approach to creating intelligent life was to focus on designing simple computational building blocks, called primitives, and then sit back and watch surprising behaviors emerge.
   </p>
   <p>
    The book…helped to crystallize the debate over the problems with the company’s own infrastructure. If Amazon wanted to stimulate creativity among its developers, it shouldn’t try to guess what kind of services they might want; such guesses would be based on patterns of the past. Instead, it should be creating primitives — the building blocks of computing — and then getting out of the way. In other words, it needed to break its infrastructure down into the smallest, simplest atomic components and allow developers to freely access them with as much flexibility as possible.
   </p>
  </blockquote>
  <p>
   The “primitives” model modularized Amazon’s infrastructure, effectively transforming raw data center components into storage, computing, databases, etc. which could be used on an ad-hoc basis not only by Amazon’s internal teams but also outside developers:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274.png">
    <img alt="stratechery Year One - 274" class="aligncenter size-large wp-image-2073" height="461" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274-1024x738.png" srcset="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274-1024x738.png 1024w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274-300x216.png 300w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274-768x553.png 768w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274-874x630.png 874w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-274.png 2000w" width="640"/>
   </a>
  </p>
  <p>
   This AWS layer in the middle has several key characteristics:
  </p>
  <ul>
   <li>
    AWS has massive fixed costs but benefits tremendously from economies of scale
   </li>
   <li>
    The cost to build AWS was justified because the first and best customer is Amazon’s e-commerce business
   </li>
   <li>
    AWS’s focus on “primitives” meant it could be sold as-is to developers beyond Amazon, increasing the returns to scale and, by extension, deepening AWS’ moat
   </li>
  </ul>
  <p>
   This last point was a win-win: developers would have access to enterprise-level computing resources with zero up-front investment; Amazon, meanwhile, would get that much more scale for a set of products for which they would be the first and best customer.
  </p>
  <h4>
   The AWS Tax
  </h4>
  <p>
   To say that AWS succeeded in its mission is a wild understatement: the impact on developers is exactly what AWS head Andy Jassy wrote in his vision statement. Stone summarized thusly:
  </p>
  <blockquote>
   <p>
    The paper laid out the expanded AWS mission: “to enable developers and companies to use Web services to build sophisticated and scalable applications”…
   </p>
   <p>
    “We tried to imagine a student in a dorm room who would have at his or her disposal the same infrastructure as the largest companies in the world,” Jassy says. “We thought it was a great playing-field leveler for startups and smaller companies to have the same cost structure as big companies.”
   </p>
  </blockquote>
  <p>
   It was, and nearly every startup of note to be founded in the last several years has started on AWS or one of its competitors. The true measure of AWS’ impact, though, was the way it transformed the ecosystem around developers,
   <a href="https://stratechery.com/2015/venture-capital-and-the-internets-impact/">
    including venture capital
   </a>
   .
  </p>
  <p>
   The effect on Amazon has been equally significant: I
   <a href="https://stratechery.com/2015/the-aws-ipo/">
    detailed last year
   </a>
   how the revelation of AWS’ financial results was effectively a Facebook-level IPO, and subsequent earnings reports in which AWS has demonstrated the power of scale — increased revenue plus increased margins — have only solidified the fact that AWS will be a substantial driver of Amazon’s revenue and (eventual!) profits for a long time to come. Social+Capital Founder Chamath Palihapitiya, when asked what company he would invest in if he could only choose one,
   <a href="https://www.quora.com/Chamath-Palihapitiya-If-you-had-to-put-ALL-of-your-money-in-one-investment-today-with-a-10-year-holding-period-what-would-it-be">
    responded on Quora
   </a>
   :
  </p>
  <blockquote>
   <p>
    AWS is a tax on the compute economy. So whether you care about mobile apps, consumer apps, IoT, SaaS etc, more companies than not will be using AWS vs building their own infrastructure. Ecommerce was AMZN’s way to dogfood AWS, and continue to do so so that it was mission grade. If you believe that over time the software industry is a multi, deca-trillion industry, then ask yourself how valuable a company would be who taxes the majority of that industry? 1%, 2%, 5%  — it doesn’t matter because the numbers are so huge — the revenues, profits, profit margins etc. I don’t see any cleaner monopoly available to buy in the public markets right now.
   </p>
  </blockquote>
  <p>
   The monopoly Palihapitiya is referring to is based on the scale effects I noted above: the larger AWS becomes, the greater advantage Amazon has in pricing AWS’ services, which means they can earn ever more business, which increases their advantage even more. The net result is that for all but the largest cloud-based companies
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2069" id="identifier_2_2069" title="I will discuss Dropbox’s recent announcement that they are moving away from AWS in tomorrow’s Daily Update ">
    3
   </a>
   this advantage, combined with the flexibility AWS affords (which is critical both operationally and financially), will lead to the inevitable conclusion that Amazon ought to service all their infrastructure needs; the payments they make for this service are Palihapitiya’s “tax”.
  </p>
  <p>
   What is worth considering, though, is the possibility that just as AWS’ effect on developers spread out into the broader startup ecosystem, it increasingly seems that AWS’ impact on Amazon itself goes far beyond its already substantial contribution to the bottom line. Amazon may have started as, to use Stone’s title, “The Everything Store,” but its future is to be a tax collector for a whole host of industries that benefit from the economies of scale, and AWS is the model.
  </p>
  <h4>
   The Transformation of Amazon’s E-Commerce Business
  </h4>
  <p>
   Longtime readers will recall that I
   <a href="https://stratechery.com/2014/losing-amazon-religion/">
    went through my Amazon bear phase
   </a>
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_2069" id="identifier_3_2069" title="It’s like puberty for tech analysts">
    4
   </a>
   back in 2014;
   <a href="https://stratechery.com/2015/the-aws-ipo/">
    it was AWS
   </a>
   that led me to recant. Even when I recanted, though, I argued that my bearish analysis about Amazon’s e-commerce business had been sound:
  </p>
  <ul>
   <li>
    Amazon’s “Media” business of books, CDs, DVDs, and video games was providing the vast majority of “profits”, but this business was shrinking as a percentage of Amazon’s total sales and, given secular trends in media, likely to continue to shrink on an absolute basis
   </li>
   <li>
    “Electronics and General Merchandise”
    <a class="footnote-link footnote-identifier-link" href="#footnote_4_2069" id="identifier_4_2069" title="This nomenclature is from Amazon’s financial reports">
     5
    </a>
    was growing rapidly, but the nature of goods being sold meant there was relatively little margin to be had
   </li>
  </ul>
  <p>
   What, though, if Amazon is content with making no margin on the sale of “Electronics and General Merchandise”? I don’t mean this in the
   <a href="http://www.slate.com/blogs/moneybox/2013/01/29/amazon_q4_profits_fall_45_percent.html">
    Mathew Yglesias sense
   </a>
   , that Amazon “is a charitable organization being run by elements of the investment community for the benefit of consumers”; rather, what if the business model of Amazon’s e-commerce business has changed to “tax” collection?
  </p>
  <p>
   Consider Costco: last year the wholesale retailer had net income of $2.3 billion on sales of $114 billion to its over 81 million members; the total sum of membership fees was $2.5 billion. In other words, Costco’s 11% gross margin didn’t even quite cover the cost of running the business; the difference, along with all of the profit, came from a “tax” levied on Costco customers.
  </p>
  <p>
   I would contend Prime memberships play the same role for Amazon: the non-AWS parts of the business last year generated $2.6 billion in operating profit;
   <a class="footnote-link footnote-identifier-link" href="#footnote_5_2069" id="identifier_5_2069" title="This isn’t comparable to the Costco number which was net income">
    6
   </a>
   meanwhile, Consumer Intelligent Research Partners (CIRP) estimates that Amazon now has 54 million Prime members, which at $99/member would generate $5.3 billion in revenue; the difference in profitability for Amazon’s e-commerce business, such as it is, comes from a “tax” levied on Amazon’s best customers.
  </p>
  <p>
   In fact, though, I think even this analysis is too narrow: e-commerce is
   <a href="http://www.bloomberg.com/gadfly/articles/2016-01-29/wall-street-is-still-trying-to-figure-amazon-out">
    inexorably taking over
   </a>
   more and more of the U.S. retail sector in particular, and Amazon is
   <a href="http://www.marketwatch.com/story/amazon-will-account-for-more-than-half-of-2015-e-commerce-growth-says-macquarie-2015-12-22">
    taking over 50%
   </a>
   of that e-commerce growth. Combine this reality with the growth in Prime and Amazon is effectively on its way towards collecting a tax on all of retail.
  </p>
  <p>
   Again, though, just as is the case with AWS, this tax is one that consumers willingly embrace: Prime is a super experience with superior prices and superior selection, and it too feeds into a scale play. The result is a business that looks like this:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275.png">
    <img alt="stratechery Year One - 275" class="aligncenter size-large wp-image-2072" height="461" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275-1024x738.png" srcset="https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275-1024x738.png 1024w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275-300x216.png 300w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275-768x553.png 768w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275-874x630.png 874w, https://stratechery.com/wp-content/uploads/2016/03/stratechery-Year-One-275.png 1876w" width="640"/>
   </a>
  </p>
  <p>
   That is, of course, the same structure as AWS — and it shares similar characteristics:
  </p>
  <ul>
   <li>
    E-commerce distribution has massive fixed costs but benefits tremendously from economies of scale
   </li>
   <li>
    The cost to build-out Amazon’s fulfillment centers was justified because the first and best customer is Amazon’s e-commerce business
   </li>
   <li>
    That last bullet point may seem odd, but in fact 40% of Amazon’s sales (on a unit basis) are sold by 3rd-party merchants; most of these merchants leverage Fulfilled-by-Amazon, which means their goods are stored in Amazon’s fulfillment centers and covered by Prime. This increases the return to scale for Amazon’s fulfillment centers, increases the value of Prime, and deepens Amazon’s moat
   </li>
  </ul>
  <p>
   The “tax” analogy extends beyond Prime; for example, Amazon is taking a portion of these 3rd-party sales, and a greater portion of revenue from goods they sell directly. The effect, though, is consistent: Amazon is collecting a “tax” on a massive industry and no one minds because Amazon’s scale ensures the best prices and the best experience.
  </p>
  <h4>
   Logistics and the Echo
  </h4>
  <p>
   It seems increasingly clear that Amazon intends to repeat the model when it comes to logistics: after
   <a href="https://stratechery.com/2015/amazon-unveils-new-drone-video-amazon-flying-airplanes-amazon-the-logistics-company/">
    experimenting with six planes last year
   </a>
   the company recently
   <a href="http://www.wsj.com/articles/amazon-finds-air-freight-partner-1457538676">
    leased 20 more
   </a>
   to flesh out its private logistics network; this is on top of
   <a href="http://www.reuters.com/article/us-amazon-com-freight-idUSKCN0US2YW">
    registering its China subsidiary
   </a>
   as an ocean freight forwarder. No surprise that,
   <a href="http://blogs.wsj.com/digits/2016/01/29/amazon-hints-at-new-shipping-business/">
    as the Wall Street Journal noted
   </a>
   :
  </p>
  <blockquote>
   <p>
    In a securities filing, Amazon for the first time identified “companies that provide fulfillment and logistics services for themselves or for third parties, whether online or offline” as competition. And it referred to itself as a “transportation service provider.” In both cases, it marked the first time Amazon included such language in its annual report, known as a 10-K.
   </p>
  </blockquote>
  <p>
   So how might this play out?
  </p>
  <p>
   Well, start with the fact that Amazon itself would be this logistics network’s first-and-best customer, just as was the case with AWS. This justifies the massive expenditure necessary to build out a logistics network that competes with UPS, Fedex,
   <em>
    et al
   </em>
   , and most outlets are framing these moves as a way for Amazon to rein in shipping costs and improve reliability, especially around the holidays.
  </p>
  <p>
   However, I think it is a mistake to think that Amazon will stop there: just as they have with AWS and e-commerce distribution I expect the company to offer its logistics network to third parties, which will increase the returns to scale, and, by extension, deepen Amazon’s eventual moat.
   <a class="footnote-link footnote-identifier-link" href="#footnote_6_2069" id="identifier_6_2069" title="To be sure, UPS, Fedex, et al have a big head start, but their networks and cost structures are focused on businesses; Amazon will focus on consumers">
    7
   </a>
  </p>
  <p>
   The
   <a href="https://stratechery.com/2016/amazon-echo-expand-the-nest-failure-microsoft-and-slack/">
    much-buzzed about Echo
   </a>
   fits this model too: all of the usual suspects can build out the various pieces of the connected home; Amazon will simply provide the linchpin, the Echo’s cost a “tax” on the connected home.
  </p>
  <h4>
   A Primitive Organization
  </h4>
  <p>
   Bezos’
   <a href="http://media.corporate-ir.net/media_files/irol/97/97664/reports/Shareholderletter97.pdf">
    famed 1997 shareholder letter
   </a>
   makes clear the roots of this model were in place from the beginning. Specifically, Bezos is very focused on the power of scale:
  </p>
  <blockquote>
   <p>
    The stronger our market leadership, the more powerful our economic model. Market leadership can translate directly to higher revenue, higher profitability, greater capital velocity, and correspondingly stronger returns on invested capital…we choose to prioritize growth because we believe that scale is central to achieving the potential of our business model.
   </p>
  </blockquote>
  <p>
   It’s equally clear, though, that Bezos didn’t then fully appreciate that his model would extend far beyond e-commerce; that, though, is why Amazon’s internal organization is such a strength. The company is organized with multiple relatively independent teams, each with their own P&amp;L, accountabilities, and distributed decision-making. Stone explains an early Bezos initiative (
   <em>
    emphasis mine
   </em>
   ):
  </p>
  <blockquote>
   <p>
    The entire company, he said, would restructure itself around what he called “two-pizza teams.” Employees would be organized into autonomous groups of fewer than ten people — small enough that, when working late, the team members could be fed with two pizza pies. These teams would be independently set loose on Amazon’s biggest problems…Bezos was applying a kind of chaos theory to management, acknowledging the complexity of his organization by
    <strong>
     breaking it down to its most basic parts
    </strong>
    in the hopes that surprising results might emerge.
   </p>
  </blockquote>
  <p>
   Stone later writes that two-pizza teams didn’t ultimately make sense everywhere, but as he noted in
   <a href="http://www.bloomberg.com/news/articles/2013-10-15/careers-at-amazon-why-its-so-hard-to-climb-jeff-bezoss-corporate-ladder">
    a follow-up article
   </a>
   the company remains very flat with responsibility widely distributed. And there, in those “most basic parts”, are the primitives that lend themselves to both scale and experimentation. Remember the quote above describing how Bezos and team arrived at the idea for AWS:
  </p>
  <blockquote>
   <p>
    If Amazon wanted to stimulate creativity among its developers, it shouldn’t try to guess what kind of services they might want; such guesses would be based on patterns of the past. Instead, it should be creating primitives — the building blocks of computing — and then getting out of the way.
   </p>
  </blockquote>
  <p>
   Steven Sinofsky is fond of noting that organizations tend to ship their org chart, and while I began by suggesting Amazon was duplicating the AWS model, it turns out that the AWS model was in many respects a representation of Amazon itself (just as the iPhone in many respects reflects Apple’s unitary organization): create a bunch of primitives, get out of the way, and take a nice skim off the top.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2069">
    <a href="https://web.archive.org/web/20060316053138/http://aws.typepad.com/aws/2006/03/amazon_s3.html">
     Hosted on Typepad
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2069">
    Contrary to popular myth, Amazon was not selling excess capacity [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2069">
    I will discuss Dropbox’s recent announcement that they are moving away from AWS in tomorrow’s
    <a href="https://stratechery.com/membership/">
     Daily Update
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2069">
    It’s like puberty for tech analysts [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_2069">
    This nomenclature is from Amazon’s financial reports [
    <a class="footnote-link footnote-back-link" href="#identifier_4_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_2069">
    This isn’t comparable to the Costco number which was net income [
    <a class="footnote-link footnote-back-link" href="#identifier_5_2069">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_6_2069">
    To be sure, UPS, Fedex,
    <em>
     et al
    </em>
    have a big head start, but their networks and cost structures are focused on businesses; Amazon will focus on consumers [
    <a class="footnote-link footnote-back-link" href="#identifier_6_2069">
     ↩
    </a>
    ]
   </li>
  </ol>
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

