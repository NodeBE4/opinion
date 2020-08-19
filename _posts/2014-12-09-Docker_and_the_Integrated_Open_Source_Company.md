---
layout: post
title: "Docker and the Integrated Open Source Company"
date: 2014-12-09T12:54:25+00:00
author: Ben Thompson
from: https://stratechery.com/2014/docker-integrated-open-source-company/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-1300 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-cloud-computing topics-open-source concepts-business-models concepts-disruption-theory concepts-enterprise concepts-incentives concepts-making-money concepts-modular-versus-integrated concepts-saas companies-docker companies-github" id="post-1300">
 <header class="entry-header">
  <h1 class="entry-title">
   Docker and the Integrated Open Source Company
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2014-12-09T04:54:25-08:00">
     Tuesday, December 9, 2014
    </time>
    <time class="updated" datetime="2018-03-27T04:54:44-07:00">
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
   It’s been a long time since an open source project has gotten as much buzz and attention as Docker. The easiest way to explain the concept is, well, to look at the logo of the eponymous
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_1300" id="identifier_0_1300" title="For the grammar nerds, I subscribe to the notion that eponymous can be used in either direction ">
    1
   </a>
   company that created and manages the project:
  </p>
  <p>
   <a href="http://stratechery.com/wp-content/uploads/2014/12/docker.png">
    <img alt="docker" class="aligncenter size-large wp-image-1301" height="203" src="https://stratechery.com/wp-content/uploads/2014/12/docker-600x203.png" width="600"/>
   </a>
  </p>
  <p>
   The reference in the logo is to shipping containers, one of the most important inventions of the 20th century. Actually, the word “invention” is not quite right: the idea of putting bulk goods into consistently-sized boxes goes back at least a few hundred years.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_1300" id="identifier_1_1300" title="According to Wikipedia ">
    2
   </a>
   What changed the world was the
   <em>
    standardization
   </em>
   of containers by a trucking magnate named Malcom McLean and Keith Tantlinger, his head engineer. Tantlinger developed much of the technology undergirding the intermodal container, especially its corner casting and Twistlock mechanism that allowed the containers to be stacked on ships, transported by trucks, and moved by crane. More importantly, Tantlinger convinced McLean to release the patented design for anyone to copy without license, knowing that the technology would only be valuable if it were deployed in every port and on every transport ship in the world. Tantlinger, to put it in software terms, open-sourced the design.
  </p>
  <p>
   Shipping containers really are a perfect metaphor for what Docker is building: standardized containers for applications.
  </p>
  <ul>
   <li>
    Just as the idea of a container wasn’t invented by Tantlinger, Docker is building on a concept that has been around for quite a while. Companies like Oracle, HP, and IBM have used containers for many years, and Google especially has a very similar implementation to Docker that they use for internal projects. Docker, though, by being open source and
    <a href="https://github.com/docker/docker">
     community-centric
    </a>
    , offers the promise of standardization
   </li>
   <li>
    It doesn’t matter what is inside of a shipping container; the container itself will fit on any ship, truck, or crane in the world. Similarly, it doesn’t matter what app (and associated files, frameworks, dependencies, etc.) is inside of a docker container; the container will run on any Linux distribution and, more importantly, just about every cloud provider including AWS, Azure, Google Cloud Platform, Rackspace, etc.
   </li>
   <li>
    When you move abroad, you can literally have a container brought to your house, stick in your belongings, and then have the entire thing moved to a truck to a crane to a ship to your new country. Similarly, containers allow developers to build and test an application on their local machine and have confidence that the application will behave the exact same way when it is pushed out to a server. Because everything is self-contained, the developer does not need to worry about there being different frameworks, versions, and other dependencies in the various places the application might be run
   </li>
  </ul>
  <p>
   The implications of this are far-reaching: not only do containers make it easier to manage the lifecycle of an application, they also (theoretically) commoditize cloud services through the age-old hope of “write once run anywhere.” More importantly, at least for now, docker containers offer the potential of being far more efficient than virtual machines. Relative to a container, using virtual machines is like using a car transport ship to move cargo: each unique entity on the ship is self-powered, which means a lot of wasted resources (those car engines aren’t very useful while crossing the ocean). Similarly, each virtual machine has to deal with the overhead of its own OS; containers, on the other hand, all share the same OS resulting in huge efficiency gains.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_1300" id="identifier_2_1300" title="Security is one of the biggest questions facing Docker: is it possible to guarantee that apps cannot interact or interfere with each other? Currently the conventional wisdom is that containers shouldn’t be used for multi-tenant applications, but that security is good enough for multiple applications from a single tenant">
    3
   </a>
  </p>
  <p>
   In short, Docker is a really big deal from a technical perspective. What excites me, though, is that the company is also innovating when it comes to their business model.
  </p>
  <hr/>
  <p>
   The problem with monetizing open source is self-evident: if the software is freely available, what exactly is worth paying for? And, unlike media, you can’t exactly stick an advertisement next to some code!
  </p>
  <p>
   For many years the default answer has been to “be like Red Hat.” Red Hat is the creator and maintainer of the Red Hat Enterprise Linux (RHEL) distribution, which, like all Linux distributions, is freely available.
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_1300" id="identifier_3_1300" title="Technically, the source code is available, but any derivatives must strip-out all Red Hat trademarks">
    4
   </a>
   Red Hat, however, makes money by offering support, training, a certification program, etc. for enterprises looking to use their software. It is very much a traditional enterprise model – make money on support! – just minus the up-front license fees.
  </p>
  <p>
   This sort of business is certainly still viable; Hortonworks is
   <a href="http://blogs.wsj.com/digits/2014/12/01/ipo-bound-hortonworks-drops-out-of-billion-dollar-startup-club/">
    set to IPO
   </a>
   with a similar model based on Hadoop, albeit at a much lower valuation than it received during its last VC round. That doesn’t surprise me: I don’t think this is a particularly great model from a business perspective.
  </p>
  <p>
   To understand why it’s useful to think about there being three distinct parts of any company that is based on open source: the open source project itself, any value-added software built on top of that project, and the actual means of making money:
  </p>
  <figure aria-describedby="caption-attachment-1302" class="wp-caption aligncenter" id="attachment_1302" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/12/opensourcepaper.jpg">
    <img alt="There are three parts of an open source business: the project itself, the value-added software on top of that project, and the means of monetization" class="size-large wp-image-1302" height="179" src="https://stratechery.com/wp-content/uploads/2014/12/opensourcepaper-600x179.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-1302">
    There are three parts of an open source business: the project itself, the value-added software on top of that project, and the means of monetization
   </figcaption>
  </figure>
  <p>
   The problem with the “Red Hat” model is the complete separation of all three of these parts: Red Hat doesn’t control the core project (Linux), and their value-added software (RHEL) is free, leaving their money-making support program to stand alone. To the company’s credit they have pulled this model off, but I think a big reason is because utilizing Linux was so much more of a challenge back in the 90s.
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_1300" id="identifier_4_1300" title="Fun fact: Red Hat was the first version of Linux I ever installed. It did not go well">
    5
   </a>
   I highly doubt Red Hat could successfully build a similar business from scratch today.
  </p>
  <figure aria-describedby="caption-attachment-1303" class="wp-caption aligncenter" id="attachment_1303" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/12/redhatpaper.jpg">
    <img alt="The three parts of Red Hat's business are separate and more difficult for the company to control and monetize" class="size-large wp-image-1303" height="242" src="https://stratechery.com/wp-content/uploads/2014/12/redhatpaper-600x242.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-1303">
    The three parts of Red Hat’s business are separate and more difficult for the company to control and monetize
   </figcaption>
  </figure>
  <p>
   GitHub, the repository hosting service, is exploring what is to my mind a more compelling model. GitHub’s value-added software is a hosting service based on Git, an open-source project designed by Linux creator Linus Torvalds. Crucially, GitHub is seeking to monetize that hosting service directly, both through a SaaS model and through an on-premise enterprise offering
   <a class="footnote-link footnote-identifier-link" href="#footnote_5_1300" id="identifier_5_1300" title="BitBucket from Atlassian is similar; from a business model perspective the primary difference is that GitHub prices per repository while Atlassian prices per user">
    6
   </a>
   . This means that, in comparison to Red Hat, there is one less place to disintermediate GitHub: you can’t get their value-added software (for private projects – public is free) unless you’re willing to pay.
  </p>
  <figure aria-describedby="caption-attachment-1304" class="wp-caption aligncenter" id="attachment_1304" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/12/githubpaper.jpg">
    <img alt="While GitHub does not control Git, their value-added software and means of monetization are unified, making the latter much easier and more sustainable" class="size-large wp-image-1304" height="240" src="https://stratechery.com/wp-content/uploads/2014/12/githubpaper-600x240.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-1304">
    While GitHub does not control Git, their value-added software and means of monetization are unified, making the latter much easier and more sustainable
   </figcaption>
  </figure>
  <p>
   Docker takes the GitHub model a step further: the company controls everything from the open source project itself to the value-added software (DockerHub) built on top of that, and, just last week,
   <a href="http://blog.docker.com/2014/12/docker-announces-docker-hub-enterprise/">
    announced a monetization model
   </a>
   that is very similar to GitHub’s enterprise offering. Presuming Docker continues its present momentum and finds success with this enterprise offering, they have the potential to be a fully integrated open source software company: project, value-added software, and monetization all rolled into one.
  </p>
  <figure aria-describedby="caption-attachment-1305" class="wp-caption aligncenter" id="attachment_1305" style="width: 600px">
   <a href="http://stratechery.com/wp-content/uploads/2014/12/dockerpaper.jpg">
    <img alt="Docker controls all the parts of their business: they are a fully integrated open source company." class="size-large wp-image-1305" height="307" src="https://stratechery.com/wp-content/uploads/2014/12/dockerpaper-600x307.jpg" width="600"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-1305">
    Docker controls all the parts of their business: they are a fully integrated open source company.
   </figcaption>
  </figure>
  <p>
   This is exciting, and, to be honest, a little scary. What is exciting is that very few movements have had such a profound effect as open source software, and not just on the tech industry. Open source products are responsible for end user products like this blog; more importantly, open source technologies have enabled exponentially more startups to get off the ground with minimal investment, vastly accelerating the rate of innovation and iteration in tech.
   <a class="footnote-link footnote-identifier-link" href="#footnote_6_1300" id="identifier_6_1300" title="In fact, one could argue that open source is the number one argument against there being a bubble: there are so many startups not because there is an inordinate amount of money available, but because it is so damn cheap to get off the ground. Moreover, the standards for gaining meaningful funding are now way higher: because it is so much cheaper to build, test, and iterate on an idea, a startup needs traction before investors will write a check">
    7
   </a>
   The ongoing challenge for any open source project, though, is funding, and Docker’s business model is a potentially sustainable solution not just for Docker but for future open source technologies.
  </p>
  <p>
   That said, if Docker is successful, over the long run commercial incentives will steer the Docker open source project in a way that benefits Docker the company, which may not be what is best for the community broadly. That is what is scary about this: might open source in the long run be subtly corrupted by this business model? The makers of CoreOS, a stripped-down Linux distribution that is a perfect complement for Docker,
   <a href="https://coreos.com/blog/rocket/">
    argued that was the case
   </a>
   last week:
  </p>
  <blockquote>
   <p>
    We thought Docker would become a simple unit that we can all agree on. Unfortunately, a simple re-usable component is not how things are playing out. Docker now is building tools for launching cloud servers, systems for clustering, and a wide range of functions: building images, running images, uploading, downloading, and eventually even overlay networking, all compiled into one monolithic binary running primarily as root on your server. The standard container manifesto was removed. We should stop talking about Docker containers, and start talking about the Docker Platform. It is not becoming the simple composable building block we had envisioned.
   </p>
  </blockquote>
  <p>
   This, I suppose, is the beauty of open source: if you disagree, fork, which is essentially what CoreOS did, launching their own “Rocket” container.
   <a class="footnote-link footnote-identifier-link" href="#footnote_7_1300" id="identifier_7_1300" title="It’s not precisely a fork; Rocket is new from the ground up but designed to do what Docker does and nothing more">
    8
   </a>
   It also shows that Docker’s business model – and any business model that contains open source – will never be completely defensible: there will always be a disintermediation point. I suspect, though, that Rocket will fail and Docker’s momentum will continue: the logic of there being one true container is inexorable, and Docker has already built up quite a bit of infrastructure and – just maybe – a business model to make it sustainable.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_1300">
    For the grammar nerds, I subscribe to the notion that
    <em>
     eponymous
    </em>
    can be used
    <a href="http://grammarist.com/usage/eponymous/">
     in either direction
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_0_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_1300">
    According to
    <a href="http://en.wikipedia.org/wiki/Containerization">
     Wikipedia
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_1_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_1300">
    Security is one of the biggest questions facing Docker: is it possible to guarantee that apps cannot interact or interfere with each other? Currently the conventional wisdom is that containers shouldn’t be used for multi-tenant applications, but that security is good enough for multiple applications from a single tenant [
    <a class="footnote-link footnote-back-link" href="#identifier_2_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_1300">
    Technically, the source code is available, but any derivatives must strip-out all Red Hat trademarks [
    <a class="footnote-link footnote-back-link" href="#identifier_3_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_1300">
    Fun fact: Red Hat was the first version of Linux I ever installed. It did not go well [
    <a class="footnote-link footnote-back-link" href="#identifier_4_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_1300">
    BitBucket from Atlassian is similar; from a business model perspective the primary difference is that GitHub prices per repository while Atlassian prices per user [
    <a class="footnote-link footnote-back-link" href="#identifier_5_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_6_1300">
    In fact, one could argue that open source is the number one argument
    <em>
     against
    </em>
    there being a bubble: there are so many startups not because there is an inordinate amount of money available, but because it is so damn cheap to get off the ground. Moreover, the standards for gaining meaningful funding are now way higher: because it is so much cheaper to build, test, and iterate on an idea, a startup needs traction before investors will write a check [
    <a class="footnote-link footnote-back-link" href="#identifier_6_1300">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_7_1300">
    It’s not precisely a fork; Rocket is new from the ground up but designed to do what Docker does and nothing more [
    <a class="footnote-link footnote-back-link" href="#identifier_7_1300">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-1300" href="https://stratechery.com/2014/docker-integrated-open-source-company/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-1300" href="https://stratechery.com/2014/docker-integrated-open-source-company/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-1300" href="https://stratechery.com/2014/docker-integrated-open-source-company/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2014/docker-integrated-open-source-company/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

