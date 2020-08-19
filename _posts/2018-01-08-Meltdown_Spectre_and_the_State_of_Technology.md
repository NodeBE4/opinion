---
layout: post
title: "Meltdown, Spectre, and the State of Technology"
date: 2018-01-08T12:21:08+00:00
author: Ben Thompson
from: https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2990 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-cloud-computing topics-processors topics-technologies concepts-privacy concepts-technology-and-society concepts-unintended-consequence companies-intel" id="post-2990">
 <header class="entry-header">
  <h1 class="entry-title">
   Meltdown, Spectre, and the State of Technology
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-01-08T04:21:08-08:00">
     Monday, January 8, 2018
    </time>
    <time class="updated" datetime="2018-06-15T13:10:03-07:00">
     Friday, June 15, 2018
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
   You’ve heard the adage “It’s all 1s and 0s”, but that’s not a figure of speech: the transistor, the fundamental building block of computers, is simply a switch that is either on (“1”) or off (“0”). It turns out, though, as Chris Dixon chronicled in a wonderful essay entitled
   <a href="https://www.theatlantic.com/technology/archive/2017/03/aristotle-computer/518697/">
    How Aristotle Created the Computer
   </a>
   , that 1s and 0s, through the combination of mathematical logic and transistors, are all you need:
  </p>
  <blockquote>
   <p>
    The history of computers is often told as a history of objects, from the abacus to the Babbage engine up through the code-breaking machines of World War II. In fact, it is better understood as a history of ideas, mainly ideas that emerged from mathematical logic, an obscure and cult-like discipline that first developed in the 19th century.
   </p>
  </blockquote>
  <p>
   Dixon’s essay — which
   <a href="https://stratechery.com/2017/the-arrival-of-artificial-intelligence/">
    I’ve linked to previously
   </a>
   — is well worth a read, but the relevant point for this article is perhaps a surprising one: computers are really stupid; what makes them useful is that they are stupid really quickly.
  </p>
  <h4>
   The Problem with Processor Vulnerabilities
  </h4>
  <p>
   Last week the technology world was shaken by
   <a href="https://security.googleblog.com/2018/01/todays-cpu-vulnerability-what-you-need.html?m=1">
    the disclosure of two vulnerabilities in modern processors
   </a>
   : Meltdown and Spectre. The announcement was a bit haphazard, thanks to the fact that the disclosure date was moved up by a week due to widespread speculation about the nature of the vulnerability (probably driven by updates to the Linux kernel), but also because Meltdown and Spectre are similar in some respects, but different in others.
  </p>
  <p>
   Start with the similarities: the outcome for both vulnerabilities is the same — a non-privileged user can access information on the computer they should not be able to, like secret keys or passwords or any other type of data owned by other users. This is a particularly big problem for cloud services like AWS, where multiple “tenants” use the same physical hardware:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2.png">
    <img alt="" class="aligncenter size-large wp-image-2991" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2-1024x768.png" srcset="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2-1024x768.png 1024w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2-300x225.png 300w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2-768x576.png 768w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-2-840x630.png 840w" width="640"/>
   </a>
  </p>
  <p>
   This multi-tenant architecture is achieved through the use of virtual machines: there is specialized software that runs on a single physical computer that allows each individual user to operate as if they have their own computer, when in fact they are sharing. This is a win-win: single-user computers sit idle the vast majority of the time (they are stupid really quickly), but if multiple users can use one computer then the hardware can be utilized far more efficiently. And, in the case of cloud services, that same concept can be scaled up to millions of physical computers sharing even more fundamental infrastructure like cooling, networking, administration, etc.
  </p>
  <p>
   The entire edifice, though, is predicated on a fundamental assumption: that users in one virtual machine cannot access data from another. That assumption, by extension, relies on trust in the integrity of the virtual machine software, which relies on trust in the integrity of the underlying operating system, which ultimately relies on trust in the processor at the heart of a server. From the
   <a href="https://meltdownattack.com/meltdown.pdf">
    Meltdown white paper
   </a>
   (
   <em>
    emphasis mine
   </em>
   ):
  </p>
  <blockquote>
   <p>
    To load data from the main memory into a register, the data in the main memory is referenced using a virtual address. In parallel to translating a virtual address into a physical address, the CPU also checks the permission bits of the virtual address, i.e., whether this virtual address is user accessible or only accessible by the kernel. As already discussed in Section 2.2,
    <strong>
     this hardware-based isolation through a permission bit is considered secure and recommended by the hardware vendors. Hence, modern operating systems always map the entire kernel into the virtual address space of every user process.
    </strong>
    As a consequence, all kernel addresses lead to a valid physical address when translating them, and the CPU can access the content of such addresses. The only difference to accessing a user space address is that the CPU raises an exception as the current permission level does not allow to access such an address. Hence, the user space cannot simply read the contents of such an address.
   </p>
  </blockquote>
  <p>
   The kernel is the core part of the operating system that should be inaccessible by normal users; it has its own memory to store not only core system data but also data from all of the users (for example, when it has to be written to or read from permanent storage). Even here, though, the system relies on virtualization — that memory is the same physical memory users utilize for their applications. It is up to the CPU to keep track of what parts of memory belong to whom, and this is where the vulnerabilities come in.
  </p>
  <h4>
   Speculative Execution
  </h4>
  <p>
   I just referenced three critical parts of a computer: the processor, memory, and permanent storage. In fact, the architecture for storing data is even more complex than that:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1.jpg">
    <img alt="" class="aligncenter size-large wp-image-2987" height="418" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-1024x668.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-1024x668.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-300x196.jpg 300w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-768x501.jpg 768w, https://stratechery.com/wp-content/uploads/2018/01/Paper.stratechery-Year-One.1-966x630.jpg 966w" width="640"/>
   </a>
  </p>
  <ul>
   <li>
    Registers are the fastest form of memory, accessible every single clock cycle (that is, a 2.0 GHz processor can access registers two billion times a second). They are also the smallest, usually only containing the inputs and outputs for the current calculation.
   </li>
   <li>
    There are then various levels of cache (L1, L2, etc.) that are increasingly slower and, on the flipside, increasingly larger and less expensive. This cache is located in a hierarchy: data that is needed immediately will be moved from the registers to L1 cache, for example; slightly less necessary data will be in L2, then L3, etc.
   </li>
   <li>
    The next major part of the memory hierarchy is main memory, that is system RAM. While the amount of cache is dependent on the processor model, the amount of memory is up to the overall system builder. This memory is massively slower than cache, but it is also massively larger and far less expensive.
   </li>
   <li>
    The last part of the memory hierarchy, at least on a single computer, is permanent storage — the hard drive. Solid-state drives (SSDs) have made a huge difference in speed here, but even then permanent memory is massively slower than main memory, with the same tradeoffs: you can have a lot more of it at a much lower price.
   </li>
   <li>
    While not part of the traditional memory hierarchy, cloud applications often have permanent memory on a separate physical server on the same network; the usual tradeoffs apply — very slow access in exchange for other benefits, in this case keeping data separate from its application.
   </li>
  </ul>
  <p>
   To be sure, “very slow” is all relative — we are talking about nanoseconds here.
   <a href="https://blog.codinghorror.com/the-infinite-space-between-words/">
    This post by Jeff Atwood
   </a>
   puts it in human terms:
  </p>
  <blockquote>
   <p>
    That infinite space “between” what we humans feel as time is where computers spend all their time. It’s an entirely different timescale. The book
    <a href="http://www.amazon.com/dp/0133390098/">
     Systems Performance: Enterprise and the Cloud
    </a>
    has a great table that illustrates just how enormous these time differentials are. Just translate computer time into arbitrary seconds:
   </p>
   <table>
    <tr>
     <td>
      1 CPU cycle
     </td>
     <td>
      0.3 ns
     </td>
     <td>
      1 s
     </td>
    </tr>
    <tr>
     <td>
      Level 1 cache access
     </td>
     <td>
      0.9 ns
     </td>
     <td>
      3 s
     </td>
    </tr>
    <tr>
     <td>
      Level 2 cache access
     </td>
     <td>
      2.8 ns
     </td>
     <td>
      9 s
     </td>
    </tr>
    <tr>
     <td>
      Level 3 cache access
     </td>
     <td>
      12.9 ns
     </td>
     <td>
      43 s
     </td>
    </tr>
    <tr>
     <td>
      Main memory access
     </td>
     <td>
      120 ns
     </td>
     <td>
      6 min
     </td>
    </tr>
    <tr>
     <td>
      Solid-state disk I/O
     </td>
     <td>
      50-150 μs
     </td>
     <td>
      2-6 days
     </td>
    </tr>
    <tr>
     <td>
      Rotational disk I/O
     </td>
     <td>
      1-10 ms
     </td>
     <td>
      1-12 months
     </td>
    </tr>
    <tr>
     <td>
      Internet: SF to NYC
     </td>
     <td>
      40 ms
     </td>
     <td>
      4 years
     </td>
    </tr>
    <tr>
     <td>
      Internet: SF to UK
     </td>
     <td>
      81 ms
     </td>
     <td>
      8 years
     </td>
    </tr>
    <tr>
     <td>
      Internet: SF to Australia
     </td>
     <td>
      183 ms
     </td>
     <td>
      19 years
     </td>
    </tr>
    <tr>
     <td>
      OS virtualization reboot
     </td>
     <td>
      4 s
     </td>
     <td>
      423 years
     </td>
    </tr>
    <tr>
     <td>
      SCSI command time-out
     </td>
     <td>
      30 s
     </td>
     <td>
      3000 years
     </td>
    </tr>
    <tr>
     <td>
      Hardware virtualization reboot
     </td>
     <td>
      40 s
     </td>
     <td>
      4000 years
     </td>
    </tr>
    <tr>
     <td>
      Physical system reboot
     </td>
     <td>
      5 m
     </td>
     <td>
      32 millenia
     </td>
    </tr>
   </table>
   <p>
    […]
   </p>
   <p>
    The late, great
    <a href="http://en.wikipedia.org/wiki/Jim_Gray_(computer_scientist)">
     Jim Gray
    </a>
    …also
    <a href="http://loci.cs.utk.edu/dsi/netstore99/docs/presentations/keynote/sld023.htm">
     had an interesting way of explaining this
    </a>
    . If the CPU registers are how long it takes you to fetch data from your brain, then going to disk is the equivalent of fetching data from Pluto.
   </p>
   <p>
    <a href="http://loci.cs.utk.edu/dsi/netstore99/docs/presentations/keynote/sld023.htm">
     <img alt="" class="aligncenter size-full wp-image-2989" height="547" sizes="(max-width: 666px) 100vw, 666px" src="https://stratechery.com/wp-content/uploads/2018/01/storage-latency-how-far-away-is-the-data.png" srcset="https://stratechery.com/wp-content/uploads/2018/01/storage-latency-how-far-away-is-the-data.png 666w, https://stratechery.com/wp-content/uploads/2018/01/storage-latency-how-far-away-is-the-data-300x246.png 300w" width="666"/>
    </a>
   </p>
  </blockquote>
  <p>
   Gray presented this slide while at Microsoft, to give context to that that “Olympia, Washington” reference. Let me extend his analogy:
  </p>
  <p>
   <em>
    Suppose you were a college student interning for the summer at Microsoft in Redmond, and you were packing clothes at home in Olympia. Now Seattle summers can be quite finicky — it could be blustery and rainy, or hot and sunny. It’s often hard to know what the weather will be like until the morning of. To that end, the prudent course of action would not be to pack only one set of clothes, but rather to pack clothes for either possibility. After all, it is far faster to change clothes from a suitcase than it is to drive home to Olympia every time the weather changes.
   </em>
  </p>
  <p>
   This is where the analogy starts to fall apart: what modern processors do to alleviate the time it takes to fetch data is not only fetch more data than they might need, but actually do calculations on that data ahead-of-time. This is known as speculative execution, and it is the heart of these vulnerabilities. To put this analogy in algorithmic form:
  </p>
  <ul>
   <li>
    Check the weather (execute multiple sub-processes that trigger sensors, relay data, etc.)
    <ul>
     <li>
      If the weather is sunny, wear shorts-and-t-shirt
     </li>
     <li>
      Else wear jeans-and-sweatshirt
     </li>
    </ul>
   </li>
  </ul>
  <p>
   Remember, computers are stupid, but they are stupid fast: executing “wear shorts-and-t-shirt” or “wear jeans-and-sweatshirt” takes nanoseconds — what takes time is waiting for the weather observation. So to save time the processor will get you dressed before it knows the weather, usually based on history — what was the weather the last several days? That means you can decide on footwear, accessories, etc., all while waiting for the weather observation. That’s the other thing about processors: they can do a lot of things at the same time. To that end the fastest possible way to get something done is to guess what the final outcome will be and backtrack if necessary.
  </p>
  <h4>
   Meltdown
  </h4>
  <p>
   Now, imagine the algorithm was changed to the following:
  </p>
  <ul>
   <li>
    Check your manager’s calendar to see if they will be in the office
    <ul>
     <li>
      If they will be in the office, wear slacks and collared-shirt
     </li>
     <li>
      If they will not be in the office, wear shorts-and-t-shirt
     </li>
    </ul>
   </li>
  </ul>
  <p>
   There’s just one problem: you’re not supposed to have access to your manager’s calendar. Keep in mind that computers are stupid: the processor doesn’t know this implicitly, it has to actually check if you have access. So in practice this algorithm is more like this:
  </p>
  <ul>
   <li>
    Check your manager’s calendar to see if they will be in the office
    <ul>
     <li>
      Check if this intern has access to their manager’s calendar
      <ul>
       <li>
        If the intern has access, access the calendar
        <ul>
         <li>
          If they will be in the office, wear slacks and collared-shirt
         </li>
         <li>
          If they will not be in the office, wear shorts-and-t-shirt
         </li>
        </ul>
       </li>
       <li>
        If the intern does not have access, stop getting dressed
       </li>
      </ul>
     </li>
    </ul>
   </li>
  </ul>
  <p>
   Remember, though, computers are very good at doing lots of things at once, and not very good at looking up data; in this case the processor will, under certain conditions, look at the manager’s calendar and decide what to wear
   <em>
    before it knows whether or not it should look at the calendar
   </em>
   . If it later realizes it shouldn’t have access to the calendar it will undo everything, but the clothes might end up slightly disheveled, which means you might be able to back out the answer you weren’t supposed to know.
  </p>
  <p>
   I already said that the analogy was falling apart; it is now in complete tatters but this, in broad-strokes, is Meltdown: the processor will speculatively fetch and execute privileged data before it knows if it should or not; that process, though, leaves traces in cache, and those traces can be captured by a non-privileged user.
  </p>
  <h4>
   Explaining Spectre
  </h4>
  <p>
   Spectre is even more devious, but harder to pull off: remember, multiple users are using the same processor — roommates, if you will. Suppose I pack my suitcase the same as you, and then I “train” the processor to always expect sunny days (perhaps I run a simulation program and make every day sunny). The processor will start choosing shorts-and-t-shirt ahead of time. Then, when you wake up, the processor will have already chosen shorts-and-t-shirt; if it is actually rainy, it will put the shorts-and-t-shirt back, but ever-so-slightly disheveled.
  </p>
  <p>
   This analogy has gone from tatters to total disintegration — it really doesn’t work here. Your data isn’t simply retrieved from main memory speculatively, it is momentarily parked in cache while the processor follows the wrong branch; it is quickly removed once the processor fixes it error, but I can still figure out what data was there — which means I’ve now stolen your data.
  </p>
  <p>
   Meltdown is easier to explain because — Intel’s protestation to the contrary (Meltdown also affects Apple’s processors) — it is due to a design flaw. The processor is responsible for checking if data can be accessed, and to check too slowly, such that the data can be stolen, is a bug. That is also why Meltdown can be worked around in software (basically, there will be an extra step checking permissions before using the data, which is why the patch causes a performance hit).
  </p>
  <p>
   Spectre is something else entirely: this is the processor acting
   <em>
    as designed
   </em>
   . Computers do basic calculations unfathomably quickly, but take forever to get the data to make those calculations: therefore doing calculations without waiting for bottlenecks, based on best guesses, is the best possible way to leverage this fundamental imbalance. Most of the time you will get results far more quickly, and if you guess wrong you are no slower than you would have been had you done everything in order.
  </p>
  <p>
   This, too, is why Spectre affects all processors: the speed gains from leveraging modern processors’ parallelism and execution speed are so massive that speculative execution is an obvious choice; that the branch predictor might be trained by another user such that cache changes could be tracked simply didn’t occur to anyone
   <a href="https://www.wired.com/story/meltdown-spectre-bug-collision-intel-chip-flaw-discovery/">
    until the last year
   </a>
   (that we know of).
  </p>
  <p>
   And, by extension, Spectre can’t be fixed by software: specific implementations can be blocked, but the vulnerability is built-in. New processors will need to be designed, but the billions of processors in use aren’t going anywhere. We’re going to have to muddle through.
  </p>
  <h4>
   Spectre and the State of Technology
  </h4>
  <p>
   I ended 2017 without my customary “State of Technology” post, and just as well: Spectre is a far better representation than anything I might have written. Faced with a fundamental imbalance (data fetch slowness versus execution speed), processor engineers devised an ingenious system optimized for performance, but having failed to envision the possibility of bad actors abusing the system, everyone was left vulnerable.
  </p>
  <p>
   The analogy is obvious: faced with a fundamental imbalance (the difficulty of gaining and retaining users versus the ease of rapid iteration and optimization), Internet companies devised ingenious systems optimized for engagement, but having
   <a href="https://stratechery.com/2017/the-pollyannish-assumption/">
    failed to envision the possibility of bad actors abusing the system
   </a>
   , everyone was left vulnerable.
  </p>
  <p>
   Spectre, though, helps illustrate why these issues are so vexing:
  </p>
  <ul>
   <li>
    I don’t believe anyone intended to create this vulnerability
   </li>
   <li>
    The vulnerability might be worth it — the gains from faster processors have been absolutely massive!
   </li>
   <li>
    Regardless, decisions made in the past are in the past: the best we can do is muddle through
   </li>
  </ul>
  <p>
   So it is with the effects of Facebook, Google/YouTube, etc., and the Internet broadly. Power comes from
   <a href="https://stratechery.com/2015/aggregation-theory/">
    giving people what they want
   </a>
   — hardly a bad motivation! — and the benefits still may — probably? — outweigh the downsides. Regardless, our only choice is to move forward.
  </p>
  <p>
   <em>
    I wrote a follow-up to this article in
    <a href="https://stratechery.com/2018/vulnerabilities-philosophies-and-ad-blockers-intels-response-the-advantage-of-serverless/">
     this Daily Update
    </a>
    .
   </em>
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2990" href="https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2990" href="https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2990" href="https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

