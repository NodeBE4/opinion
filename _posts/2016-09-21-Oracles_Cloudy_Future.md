---
layout: post
title: "Oracle’s Cloudy Future"
date: 2016-09-21T19:33:25+00:00
author: Ben Thompson
from: https://stratechery.com/2016/oracles-cloudy-future/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2286 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-cloud-computing topics-databases topics-technologies concepts-business-models concepts-enterprise concepts-evolution-of-technology concepts-history concepts-incentives concepts-making-money concepts-product-management concepts-product-market-fit concepts-saas concepts-understanding-users companies-oracle" id="post-2286">
 <header class="entry-header">
  <h1 class="entry-title">
   Oracle’s Cloudy Future
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-09-21T12:33:25-07:00">
     Wednesday, September 21, 2016
    </time>
    <time class="updated" datetime="2018-03-27T00:30:08-07:00">
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
   Everyone knows the story of how IBM gave away the castle to Microsoft (and Intel): besieged by customers demanding low-powered personal computers, the vertically-integrated mainframe-centric company tasked a team in Boca Raton, Florida, far from the company’s headquarters in Armonk, New York, to create something quickly to appease these low-margin requests. Focused on speed and cost said team decided to outsource nearly everything, including the operating system and processor. The approach paid off, at least when it came to IBM’s goals: while IBM’s integrated products normally took half a decade to develop and launch, the Boca Raton team moved from concept to shipping product in only 12 months. However, the focus on standard parts meant that all of the subsequent value in the PC, which massively exceeded the mainframe business, went to the two exclusive suppliers: Microsoft and Intel.
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2286" id="identifier_0_2286" title="IBM did force Intel to share its design with AMD to ensure dual suppliers">
    1
   </a>
  </p>
  <p>
   Fewer are aware that the PC wasn’t IBM’s only internal-politics-driven value giveaway; one of the most important software applications on those mainframes was IBM’s
   <a href="https://en.wikipedia.org/wiki/IBM_Information_Management_System">
    Information Management System (IMS)
   </a>
   . This was a hierarchical database, and let me pause for a necessary caveat: for those that don’t understand databases, I’ll try to simplify the following explanation as much as possible, and for those that do, I’m sorry for bastardizing this overview!
  </p>
  <h4>
   Database Types
  </h4>
  <p>
   A hierarchical database is, well, a hierarchy of data:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291.png">
    <img alt="stratechery-year-one-291" class="aligncenter size-large wp-image-2290" height="255" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291-1024x408.png" srcset="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291-1024x408.png 1024w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291-300x120.png 300w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291-768x306.png 768w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-291-1200x478.png 1200w" width="640"/>
   </a>
  </p>
  <p>
   Any particular piece of data in a hierarchical database can be found by either of two methods: either know the
   <em>
    parent
   </em>
   and find its
   <em>
    children
   </em>
   , or know the
   <em>
    children
   </em>
   and find its
   <em>
    parent
   </em>
   . This is the easiest sort of database to understand, and, at least for early computers, it was the easiest to implement: define the structure, enter data, and find that data layer by traversing the hierarchy until you find the relevant
   <em>
    parent
   </em>
   or
   <em>
    child
   </em>
   . Or, more realistically, leverage your knowledge of the hierarchy to go to a specific spot.
  </p>
  <p>
   However, there were two big limitations with hierarchical databases: first, relationships were pre-determined; what was a
   <em>
    parent
   </em>
   and what was a
   <em>
    child
   </em>
   were decisions made before any data was actually entered. This made it extremely difficult to alter a database once it was in use. Secondly, queries analyzing the children of different parents are impractical: you would need to traverse the hierarchy to retrieve information for every potential item before discarding the vast majority to get the data set you wish to analyze.
  </p>
  <p>
   In 1969, an IBM computer scientist named
   <a href="https://en.wikipedia.org/wiki/Edgar_F._Codd">
    Edgar F. Codd
   </a>
   wrote a seminal paper called
   <a href="http://www.seas.upenn.edu/~zives/03f/cis550/codd.pdf">
    A Relational Model of Data for Large Shared Data Banks
   </a>
   that proposed a new approach. The introduction is remarkably lucid, even for laypeople:
  </p>
  <blockquote>
   <p>
    Future users of large data banks must be protected from having to know how the data is organized in the machine (the internal representation). A prompting service which supplies such information is not a satisfactory solution. Activities of users at terminals and most application programs should remain unaffected when the internal representation of data is changed and even when some aspects of the external representation are changed. Changes in data representation will often be needed as a result of changes in query, update, and report traffic and natural growth in the types of stored information.
   </p>
  </blockquote>
  <p>
   This paper was the foundation of what became known as relational databases: instead of storing data in a hierarchy, where the relationship between said data defines its location in the database, relational databases contain tables; every piece of data is thus defined by its table name, column name, and key value,
   <em>
    not by the data itself
   </em>
   (which is stored elsewhere). That by extension means that you can understand data according to its relationship to all of the other data in the database; a table name could also be a column name, just as a key value could also be a table name.
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292.png">
    <img alt="stratechery-year-one-292" class="aligncenter size-large wp-image-2289" height="442" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292-1024x707.png" srcset="https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292-1024x707.png 1024w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292-300x207.png 300w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292-768x530.png 768w, https://stratechery.com/wp-content/uploads/2016/09/stratechery-Year-One-292-913x630.png 913w" width="640"/>
   </a>
  </p>
  <p>
   This approach had several huge benefits: first, databases could be expanded with new data categories without any impact on previous data, or needing to completely rewrite the hierarchy; just add new tables. Two, databases could scale to accommodate arbitrary amounts and types of data because the data wasn’t actually in the database; remember it was abstracted away in favor of integers and strings of text. Third, using a “structured query language” (SQL) you could easily generate reports on those relationships (
   <em>
    What were the 10 most popular books ordered by customers over 40?
   </em>
   ), and because said queries were simply examining the relationship between integers and strings you could ask almost anything. After all, figuring out the relationship between locations in the database is no longer scanning a tree — which is inherently slow and mostly blind, if you don’t know what you’re looking for — but is math. Granted, it was very hard math — many at the time thought it was too hard — but the reality of Moore’s Law was slowly being realized; it wouldn’t be hard math forever.
  </p>
  <p>
   Phew. I’d imagine that was as painful to read as it was to write, but this is the takeaway: hierarchical databases are limited in both capability and scalability by virtue of being pre-defined; relational databases are far more useful and scalable by virtue of abstracting away the data in favor of easily computable values.
  </p>
  <h4>
   Oracle’s Rise
  </h4>
  <p>
   Dr. Codd’s groundbreaking idea was almost completely ignored by IBM for several years in part because of the aforementioned IMS; Codd was basically saying that one of IBM’s biggest moneymakers was obsolete for many potential database applications, and that was a message IBM’s management was not particularly interested in hearing. In fact, even when IBM finally did build the first-ever relational database in 1977 (it was called
   <a href="https://en.wikipedia.org/wiki/IBM_System_R">
    System R
   </a>
   and included a new query language called SQL),
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2286" id="identifier_1_2286" title="Amazingly, IBM kept Codd separate from the engineering team">
    2
   </a>
   they didn’t release it commercially; only in 1982 did the company release its first relational database software called SQL/DS. Naturally it only ran on IBM mainframes, albeit small ones; IMS ran on the big iron.
  </p>
  <p>
   Meanwhile, a young programmer named Larry Ellison had formed a company called Software Development Laboratories, originally to do contract work, but quickly decided that selling packaged software was a far better proposition: doing the work once and reselling it multiple times was an excellent way to get rich. They just needed a product, and IBM effectively gave it to them; because the System R team was being treated as a research project, not a commercial venture, they happily wrote multiple papers explaining how System R worked, and published the SQL spec. Software Development Laboratories implemented it and called it Oracle, and in 1979 sold it to the CIA; a condition of the contract was that it run on IBM mainframes.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2286" id="identifier_2_2286" title="To be fair to IBM, SQL/DS and their later mainframe product, DB2, were far more reliable than Oracle’s earliest versions">
    3
   </a>
  </p>
  <p>
   In other words, IBM not only created the conditions for the richest packaged software company ever to emerge (Microsoft), they basically gave an instruction manual to the second.
  </p>
  <h4>
   The Packaged Software Business
  </h4>
  <p>
   The packaged software industry was a bit of a hybrid between the traditional businesses of the past and the pure digital businesses of the Internet era (after all, there was no Internet). On the one hand, as Ellison quickly realized, software had zero marginal costs: once you had written a particular program, you could make an infinite number of copies. On the other hand, distribution was as much a challenge as ever; in the case of Oracle’s relational database, Relational Software Inc. (née Software Development Laboratories; the company would name itself “Oracle Systems Corporation” in 1982, and then today’s Oracle Corporation in 1995) had to build a sales force to get their product into businesses that could use it (and then ship the actual product on tape).
  </p>
  <p>
   The most economical way to do that was to build the sort of product that was mostly what most customers wanted, and then work with them to get it actually working. Part of the effort was on the front-end — Oracle was quickly rewritten in the then-new programming language C, which had compilers for most platforms, allowing the company to pitch portability — but even more came after the sale: the customer had to get Oracle installed, get it working, import their data, and only then, months or years after the original agreement, would they start to see a return.
  </p>
  <p>
   Eventually this became the business model: Oracle’s customers didn’t just buy software, they engaged in a multi-year relationship with the company, complete with licensing, support contracts, and audits to ensure Oracle was getting their just dues. And while customers grumbled, they certainly weren’t going anywhere: those relational databases and the data in them were what made those companies what they were; they’d already put in the work to get them up-and-running, and who wanted to go through
   <em>
    that
   </em>
   again with another company? Indeed, given that they were already running Oracle databases and had that existing relationship, it was often easier to turn to Oracle for the applications that ran on top of those databases. And so, over the following three decades, Oracle leveraged their initial advantage to an ever-increasing share of their customers’ IT spend. Better the devil you know!
  </p>
  <h4>
   Amazon’s Optionality
  </h4>
  <p>
   The proposition behind Amazon Web Services (AWS) could not be more different: companies don’t make up-front commitments or engage in years-long integration projects. Rather, you sign-up online, and you’re off. To be fair, this is an oversimplification when it comes to Amazon’s biggest customers, who negotiate prices and make long-term commitments, but that’s a recent development; AWS’ core constituency has always been startups
   <a href="https://stratechery.com/2015/venture-capital-and-the-internets-impact/">
    taking advantage of server infrastructure that used to cost millions of dollars
   </a>
   to build minimum viable products where all of their costs are variable: use AWS more (because you’re gaining customers), pay more; use it hardly at all, because you can’t find product-market fit, and you’re out little more than the opportunity cost of not doing something else.
  </p>
  <p>
   It’s the option value that makes AWS so valuable: need more capacity? Just press a button. Need to build a new feature? AWS likely has a pre-built service for you to incorporate. Sure, it can get expensive — a common myth is that AWS is winning on price, but actually Amazon is among the more expensive options — but how much is it worth to have exactly what you need when you need it?
  </p>
  <p>
   Ellison, meanwhile, got up on stage at the company OpenWorld conference this week and
   <a href="http://venturebeat.com/2016/09/18/larry-ellison-says-amazons-lead-is-over-as-oracle-unveils-new-cloud-infrastructure/">
    declared that “Amazon’s lead is over”
   </a>
   when it comes to Infrastructure-as-a-Service, all because Oracle’s top-of-the-line server instance was faster and cheaper than Amazon. Well sure, but hierarchical databases were faster than relational databases too; speed isn’t everything, nor is price. Optionality and scalability matter just as much as they always have, and in this case Oracle’s quite basic offering isn’t remotely competitive.
  </p>
  <p>
   Ellison’s statement is even more ridiculous when you look at the number that really matters when it comes to cloud services: capital expenditures. Over the last twelve months Oracle has totaled $1.04 billion in capital expenditures; Amazon spent $3.36 billion in the last
   <em>
    quarter
   </em>
   ,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_2286" id="identifier_3_2286" title="Specifically, Amazon spent $1.7 billion in capital expenditures and $1.7 billion in capital lease commitments">
    4
   </a>
   and $10.9 billion in the last twelve months.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_2286" id="identifier_4_2286" title="This expenditure includes distribution centers for the retail business; however, no matter how your split it, Amazon is spending a lot more">
    5
   </a>
   Infrastructure-as-a-Service is not something you build-to-order; it’s the fact that the infrastructure and all the attendant services that rest on top of that infrastructure are already built that makes AWS’s offering so alluring. Oracle is not only not catching up, they are falling further behind.
  </p>
  <h4>
   SaaS Focus
  </h4>
  <p>
   <a href="https://www.youtube.com/watch?v=expwuJ4ovZ0">
    In his keynote
   </a>
   Ellison argued that infrastructure spending wasn’t necessarily the place to gauge Oracle’s cloud commitment; instead he pointed out that the company has spent a decade moving its various applications to the cloud. Indeed, the company spent a significant 17% of revenues last quarter on research-and-development, and Ellison bragged that Oracle now had 30+ SaaS applications and that the sheer number mattered:
  </p>
  <blockquote>
   <p>
    What is Oracle’s strategy: what do we think customers want, what do we do in in SaaS? It’s the same thing: if we can figure out what customers want and deliver that customers are going to pick our stuff and buy our stuff. And we think what they want is complete and integrated suites of products, not one-off products. Customers don’t want to have to integrate fifty different products from fifty different vendors. It’s just too hard. It’s simply too hard and the associated security risks and labor costs and reliability problems is just too much. So our big focus is not delivering one, two, three, four applications, but delivering complete suites of applications, for ERP, for human capital management, for customer relationship management, sometimes called customer experience, or CX. That’s our strategy in SaaS: complete and integrated suites.
   </p>
  </blockquote>
  <p>
   What Ellison is arguing was absolutely correct when it came to on-premise software; I wrote about exactly this dynamic
   <a href="https://stratechery.com/2015/redmond-reality/">
    with regards to Microsoft
   </a>
   in 2015:
  </p>
  <blockquote>
   <p>
    Consider your typical Chief Information Officer in the pre-Cloud era: for various reasons she has bought in to some aspect of the Microsoft stack (likely Exchange). So, in order to support Exchange, the CIO must obviously buy Windows Server. And Windows Server includes Active Directory, so obviously that will be the identity service. However, now that the CIO has parts of the Microsoft stack in place, she is likely to be much more inclined to go with other Microsoft products as well, whether that be SQL Server, Dynamics CRM, SharePoint, etc. True, the Microsoft product may not always be the best in a vacuum, but no CIO operates in a vacuum: maintenance and service costs are a huge concern, and there is a lot to be gained by buying from fewer vendors rather than more. In fact, much of Microsoft’s growth over the last 15 years can be traced to Ballmer’s cleverness in exploiting this advantage through both new products and also new pricing and licensing agreements that heavily incentivized Microsoft customers to buy ever more from the company.
   </p>
  </blockquote>
  <p>
   As noted above, this was the exact same strategy as Oracle. However, enterprise IT decision-making is undergoing dramatic changes: first, without the need for significant up-front investment, there is much less risk in working with another vendor, particularly since trials usually happen at the team or department level. Second, without ongoing support and maintenance costs there is much less of a variable cost argument for going with one vendor as well. True, that leaves the potential hassle of incorporating those fifty different vendors Ellison warned about, but it also means that things like the actual quality of the software and the user experience figure much more prominently in the decision-making — and the point about team-based decision-making makes this even more important, because the buyer is also the user.
  </p>
  <h4>
   Oracle in the Middle
  </h4>
  <p>
   In short, what Ellison was selling as the new Oracle looks an awful lot like the old Oracle: a bunch of products that are mostly what most customers want, at least in theory, but with neither the flexibility and scalability of AWS’ infrastructure on one side nor the focus and commitment to the user experience of dedicated SaaS providers on the other. To put it in database terms, like a hierarchical database Oracle is pre-deciding what its customers want and need with no flexibility. Meanwhile, AWS and dedicated SaaS providers are the relational databases, offering enterprises optionality and scalability to build exactly what they need for their business when they need it; sure, it may not all be working yet, but the long-term trends couldn’t be more obvious.
  </p>
  <p>
   It should be noted that much of this analysis primarily concerns new companies that are building out their IT systems for the first time; Oracle’s lock on its existing customers, including the vast majority of the largest companies and governments in the world, remains very strong. And to that end its strategy of basically replicating its on-premise business in the cloud (or even moving its cloud hardware on-premise) makes total sense; it’s the same sort of hybrid strategy that Microsoft is banking on. Give their similarly old-fashioned customers the benefit of reducing their capital expenditures (increasing their return on invested capital) and hopefully buy enough time to adapt to a new world where users actually matter and flexible and focused clouds are the best way to serve them.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2286">
    IBM did force Intel to share its design with AMD to ensure dual suppliers [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2286">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2286">
    Amazingly, IBM kept Codd separate from the engineering team [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2286">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2286">
    To be fair to IBM, SQL/DS and their later mainframe product, DB2, were far more reliable than Oracle’s earliest versions [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2286">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2286">
    Specifically, Amazon spent $1.7 billion in capital expenditures and $1.7 billion in capital lease commitments [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2286">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_2286">
    This expenditure includes distribution centers for the retail business; however, no matter how your split it, Amazon is spending a lot more [
    <a class="footnote-link footnote-back-link" href="#identifier_4_2286">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2286" href="https://stratechery.com/2016/oracles-cloudy-future/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2286" href="https://stratechery.com/2016/oracles-cloudy-future/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2286" href="https://stratechery.com/2016/oracles-cloudy-future/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2016/oracles-cloudy-future/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

