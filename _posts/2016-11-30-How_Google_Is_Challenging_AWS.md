---
layout: post
title: "How Google Is Challenging AWS"
date: 2016-11-30T14:37:58+00:00
author: Ben Thompson
from: https://stratechery.com/2016/how-google-cloud-platform-is-challenging-aws/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2366 post type-post status-publish format-standard hentry category-articles topics-ai-machine-learning topics-aws topics-cloud-computing topics-google-cloud concepts-business-models concepts-company-structure concepts-enterprise concepts-hardware concepts-incentives concepts-platforms concepts-saas companies-amazon companies-google" id="post-2366">
 <header class="entry-header">
  <h1 class="entry-title">
   How Google Is Challenging AWS
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-11-30T06:37:58-08:00">
     Wednesday, November 30, 2016
    </time>
    <time class="updated" datetime="2018-03-27T00:51:30-07:00">
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
   Big companies are often criticized for having “missed” the future — from the comfortable perch of a present where said future has come to pass, of course — but while the future is still the future incumbents are first more often than not. Probably
   <a href="https://stratechery.com/2014/microsofts-mobile-muddle/">
    the best example is Microsoft
   </a>
   : the company didn’t “miss mobile” — Windows Mobile came out in 2000 — but rather was handicapped by its allegiance to its license-based modular business model and inability to envision a world where its core product (Windows) was a planet orbiting mobile’s sun; everything about Windows Mobile’s design presumed the exact opposite.
  </p>
  <p>
   One could make the same argument about Google and the enterprise; both G Suite (née Google Apps for Your Domain) and Google Docs launched a decade ago and enjoyed modest success, particularly in smaller businesses and education; unsurprisingly, both markets share broadly similar characteristics to Google’s core consumer user base — limited configurability and a low price were good things. Traction was harder to come by in larger enterprises, though, and in fact over the last few years Office 365 has
   <a href="http://www.cio.com/article/2992546/office-software/why-companies-are-switching-from-google-apps-to-office-365.html">
    well out-paced
   </a>
   G Suite, not only growing faster but winning back customers.
  </p>
  <p>
   Still, for all the success Microsoft has had with Office 365, the real giant of cloud computing — which is to say the future of enterprise computing — is, as is so often the case, a company no one saw coming: the same year Google decided to take on Microsoft
   <a href="https://stratechery.com/2015/the-aws-ipo/">
    Amazon launched Amazon Web Services
   </a>
   . What makes AWS so compelling is the way that it reflects Amazon itself: it is built for scale and with clearly-defined and hardened interfaces. Customers — first Amazon but also companies around the world — access “primitives” that can be mixed-and-matched to build a more efficient, scalable, and secure back-end than nearly any company could build on its own.
  </p>
  <h4>
   AWS’ Primitives
  </h4>
  <p>
   Earlier this year in
   <a href="https://stratechery.com/2016/the-amazon-tax/">
    The Amazon Tax
   </a>
   I explained how Amazon’s AWS strategy sprang from the same approach that made the company successful in the first place:
  </p>
  <blockquote>
   <p>
    The company is organized with multiple relatively independent teams, each with their own P&amp;L, accountabilities, and distributed decision-making. [
    <a href="http://brad-stone.com/book/">
     The Everything Store
    </a>
    author Brad] Stone explained an early Bezos initiative (emphasis mine):
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
  </blockquote>
  <p>
   AWS’ offering has certainly expanded far beyond infrastructure like (virtualized) processors, hard drives, and databases, both in terms of further abstraction (e.g. Lambda “serverless” computing) and up the stack into platform and software services, but the foundation of its success continues to be Amazon’s pure platform approach: they provide the pieces for enterprises to build just about anything they want.
  </p>
  <h4>
   Google is a Product Company
  </h4>
  <p>
   Google, meanwhile, has never really been a platform company; in fact, while Google is often cast as Apple’s opposite — the latter is called a product company, and the former a services one — that only makes sense if you presume that only hardware can be a product. A more expansive definition of “product” — a fully realized solution presented to end users — would show the two companies are in fact quite similar.
  </p>
  <p>
   Make no mistake: the differences between cloud services and hardware are profound (which I explored at length in
   <a href="https://stratechery.com/2016/apples-organizational-crossroads/">
    Apple’s Organizational Crossroads
   </a>
   ), but so are the differences between being a product company and being a platform one. The ideal product, whether it be a smartphone or a search box, achieves simplicity and a great user experience through tremendous effort in design and engineering that, ideally, is never seen by the end user. Indeed,
   <a href="https://stratechery.com/2013/clayton-christensen-got-wrong/">
    this is why integrated products win in consumer markets
   </a>
   , and make no mistake, Google’s consumer-focused services
   <a href="https://plus.google.com/+RipRowan/posts/eVeouesvaVX">
    have traditionally been as integrated on the back-end
   </a>
   as iPhones are.
  </p>
  <p>
   Note, though, that this is the exact opposite of the model employed by not just Amazon but also Microsoft, the pre-eminent platform company of
   <a href="https://stratechery.com/2016/the-it-era-and-the-internet-revolution/">
    the IT era
   </a>
   : instead of integrating pieces to deliver a product AWS went in the opposite direction, breaking down all of the pieces that go into building back-end services into fully modular parts; Microsoft did the same with its Win32 API. Yes, this meant that Windows was
   <em>
    by design
   </em>
   a worse platform in terms of the end user experience than, say, Mac OS, but it was far more powerful and extensible, an approach that paid off with millions of line of business apps that even today keep Windows at the center of business. AWS has done the exact same thing for back-end services, and the flexibility and modularity of AWS is the chief reason why it crushed Google’s initial cloud offering, Google App Engine, which launched back in 2008. Using App Engine entailed accepting a lot of decisions that Google made on your behalf; AWS let you build exactly what you needed.
  </p>
  <h4>
   Google’s Platform Antidote
  </h4>
  <p>
   The Windows example is instructive when it comes to thinking about how Google has since changed its approach: the massive ecosystem built around Microsoft’s extensive API ended up being the ultimate lock-in. Most obviously the apps built for Windows were not easily ported to other operating systems, but just as important was the huge network of partners and value-added resellers that made Windows the only viable choice for enterprise. Amazon is hard at work building the exact same sort of ecosystem.
  </p>
  <p>
   And yet, it has never been more viable to
   <em>
    not
   </em>
   use Windows, first for consumers but also for enterprise, and the reason is the web: here was a new runtime that sat on top of Windows but did not depend on it,
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2366" id="identifier_0_2366" title="ActiveX notwithstanding">
    1
   </a>
   and on the consumer side Google was the biggest winner. Indeed, the rise of the browser explains AWS as well: any new business application is built for the web (including apps that run on web-based APIs) and it is accessible on any device.
  </p>
  <p>
   It turns out that over the last couple of years Google has undertaken a sort of browser approach to enterprise computing .
   <a href="https://www.wired.com/2014/06/google-kubernetes/">
    In 2014
   </a>
   Google announced Kubernetes, an open-source container cluster manager based on Google’s internal
   <a href="https://research.google.com/pubs/pub43438.html">
    Borg
   </a>
   service that abstracts Google’s massive infrastructure such that any Google service can instantly access all of the computing power they need without worrying about the details. The central precept is containers, which
   <a href="https://stratechery.com/2014/docker-integrated-open-source-company/">
    I wrote about in 2014
   </a>
   : engineers build on a standard interface that retains (nearly) full flexibility without needing to know anything about the underlying hardware or operating system (in this it’s an evolutionary step beyond virtual machines).
  </p>
  <p>
   Where Kubernetes differs from Borg is that it is fully portable: it runs on AWS, it runs on Azure, it runs on the Google Cloud Platform, it runs on on-premise infrastructure, you can even run it in your house. More relevantly to this article, it is the perfect antidote to AWS’ ten year head-start in infrastructure-as-a-service: while Google has made great strides in its own infrastructure offerings, the potential impact of Kubernetes specifically and container-based development broadly is to make irrelevant which infrastructure provider you use. No wonder it is one of the fastest growing open-source projects of all time: there is no lock-in.
  </p>
  <p>
   But how does that help Google? After all, even if Kubernetes becomes the standard for enterprise clouds Amazon’s broader ecosystem lock-in is still present (and the company has its own container strategy that further locks customers into AWS); Google needs a differentiator.
  </p>
  <h4>
   Costs Versus Experience
  </h4>
  <p>
   Here again the desktop is instructive: the open nature of the web running on platform-agnostic browsers did not make Google successful per se; rather, the openness of the web created the conditions for the best technology to win. And not only did Google have the best search engine, but the reason it was the best — its reliance on links instead of simply page content — meant that as the web got bigger Google, unlike its competitors, got better.
  </p>
  <p>
   I think this is an idea that can be abstracted to be broadly applicable; indeed, it’s a core piece of
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregation Theory
   </a>
   : as distribution (or switching) costs decrease, the importance of the user experience increases. To put it another way, when you can access any service, whether that be news or car-sharing or hotels or video or search etc., the one that is the best will not only win initially but will see its advantages compound.
  </p>
  <p>
   This is Google’s bet when it comes to the enterprise cloud: open-sourcing Kubernetes was Google’s attempt to effectively build a browser on top of cloud infrastructure and thus decrease switching costs; the company’s equivalent of Google Search will be machine learning.
  </p>
  <h4>
   Machine Learning and Data
  </h4>
  <p>
   It seems certain that machine learning will be increasingly dominated by cloud services: both are about processing scale and massive amounts of data, and only a select few behemoths will have the financial capability to not only build out the infrastructure required but also have the wherewithal to employ the best machine learning engineers in the world. That, by extension, means that for most enterprises the differentiation arising from machine learning will derive first and foremost from whether or not their data is in the cloud (there will be on-premise solutions, but I expect them to fall more and more behind over time), but secondly from which cloud provider they choose.
  </p>
  <p>
   That raises the stakes for cloud providers themselves; superior machine learning offerings can not only be a differentiator but a sustainable one: being better will attract more customers and thus more data, and data is the fuel by which machine learning improvement comes about. And it is because of data that Google is AWS’ biggest threat in the cloud.
  </p>
  <p>
   I described how Google’s enterprise business was limited by its consumer focus above, but the big advantage that Google has is that it has been working with massive amounts of data for nearly two decades, and developing powerful machine learning algorithms for the last several years. Still, it’s the data that matters most-of-all, and the best evidence that is the case came last year when Google open-sourced TensorFlow, a blueprint for machine learning: as I noted in
   <a href="https://stratechery.com/2015/tensorflow-and-monetizing-intellectual-property/">
    TensorFlow and Monetizing Intellectual Property
   </a>
   Google’s willingness to share its approach was an implicit admission that its superior data and processing infrastructure was a sustainable advantage.
  </p>
  <p>
   We’re just now starting to see that advantage applied to Google’s cloud offering. Just before Thanksgiving Google made
   <a href="https://cloudplatform.googleblog.com/2016/11/Cloud-Machine-Learning-family-grows-with-new-API-editions-and-pricing.html">
    a series of product announcements
   </a>
   that clearly leveraged its data advantage:
  </p>
  <ul>
   <li>
    The Cloud Natural Language API, which uses machine learning to analyze text, graduated to general availability
   </li>
   <li>
    A premium edition of the Cloud Translation API, which uses machine learning to massively improve accuracy in translating eight languages (above-and-beyond the standard edition that supports over 100 languages)
   </li>
   <li>
    A big price reduction for the Cloud Vision API, which uses machine learning to analyze images
   </li>
   <li>
    A new Cloud Jobs API that uses machine learning to match potential employees with jobs
   </li>
  </ul>
  <p>
   These four join the Cloud Prediction API that uses machine learning to, well, make predictions. It, along with the first three APIs above, is clearly derived from various Google consumer products; the Jobs API likely builds on an internal Google tool, as well as Google’s wealth of data from all over the web. In each case Google has spent years honing its algorithms so that by the time they are applied to a corporate data set the results are very likely superior, or at least far down the training funnel. I expect this advantage to persist and be meaningful.
  </p>
  <p>
   Still, Google will have to do more, which is why the other big announcement was the creation of the Google Cloud Machine Learning group headed by Fei-Fei Li and Jia Li: this group will be charged with building new machine learning APIs specifically for business; to put it another way, they are tasked with productizing Google’s machine learning capabilities.
  </p>
  <p>
   That, in a roundabout way, gets to the genius of Google’s strategy: the company was outpaced by Amazon in the first wave of cloud computing because success rested on being the best platform; by open-sourcing Kubernetes in an attempt to shift the industry to vendor-agnostic containers, Google is trying to move the plane of competition to products. After all, it’s often easier to change the rules of competition than to change your fundamental nature as a company.
  </p>
  <hr/>
  <p>
   To be sure, Google’s success is not assured: the company still has to grapple with a new business model — sales versus ads — and build up the sort of organization that is necessary for not just sales but also enterprise support. Both are areas where Amazon has a head start, along with a vastly larger partner ecosystem and a larger feature set generally.
  </p>
  <p>
   And, of course, AWS has its own machine learning API, along with IBM and Microsoft. Microsoft is likely to prove particularly formidable in this regard: not only has the company engaged in years of research, but the company also has experience productizing technology for business specifically; Google’s longstanding consumer focus may at times be a handicap. And as popular as Kubernetes may be broadly, it’s concerning that Google is
   <a href="https://www.nextplatform.com/2016/11/08/google-wants-kubernetes-rule-world/">
    not yet eating its own dog food
   </a>
   .
  </p>
  <p>
   Still, Google will be a formidable competitor: its strategy is sound and, perhaps more importantly, the urgency to find a new line of business is far more pressing today than it was in 2006. Most importantly, the shift to cloud computing is still in its beginning stages, and while Amazon seems to be living the furthest in the future, the future has not happened yet; it will be fascinating to watch Google’s attempt to change the rules under which said future will operate.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2366">
    ActiveX notwithstanding [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2366">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2366" href="https://stratechery.com/2016/how-google-cloud-platform-is-challenging-aws/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2366" href="https://stratechery.com/2016/how-google-cloud-platform-is-challenging-aws/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2366" href="https://stratechery.com/2016/how-google-cloud-platform-is-challenging-aws/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2016/how-google-cloud-platform-is-challenging-aws/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

