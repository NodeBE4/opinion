---
layout: post
title: "WannaCry About Business Models"
date: 2017-05-15T14:04:28+00:00
author: Ben Thompson
from: https://stratechery.com/2017/wannacry-and-the-power-of-business-models/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2577 post type-post status-publish format-standard has-post-thumbnail hentry category-articles tag-wannacry topics-cloud-computing topics-regulation concepts-business-models concepts-security concepts-saas concepts-subscriptions concepts-technology-and-society companies-microsoft" id="post-2577">
 <header class="entry-header">
  <h1 class="entry-title">
   WannaCry About Business Models
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-05-15T07:04:28-07:00">
     Monday, May 15, 2017
    </time>
    <time class="updated" datetime="2018-05-07T15:32:26-07:00">
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
   For the users and administrators of the estimated 200,000 computers affected by “WannaCry” — a number that is expected to rise as new variants come online (the original was
   <a href="https://www.malwaretech.com/2017/05/how-to-accidentally-stop-a-global-cyber-attacks.html">
    killed serendipitously
   </a>
   by a security researcher) — the answer to the question implied in the name is “Yes.”
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2017/05/wannacryscreenshotpng.jpeg">
    <img alt="wannacryscreenshotpng" class="aligncenter size-full wp-image-2578" height="360" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/05/wannacryscreenshotpng.jpeg" srcset="https://stratechery.com/wp-content/uploads/2017/05/wannacryscreenshotpng.jpeg 640w, https://stratechery.com/wp-content/uploads/2017/05/wannacryscreenshotpng-300x169.jpeg 300w" width="640"/>
   </a>
  </p>
  <p>
   WannaCry is a type of malware called “ransomware”: it encrypts a computers’ files and demands payment to decrypt them. Ransomware is not new; what made WannaCry so destructive was that it was built on top of a computer worm — a type of malware that replicates itself onto other computers on the same network (said network, of course, can include the Internet).
  </p>
  <p>
   Worms have always been the most destructive type of malware — and the most famous: even non-technical readers may recognize names like Conficker (an estimated $9 billion of damage in 2008), ILOVEYOU (an estimated $15 billion of damage in 2000), or MyDoom (an estimated $38 billion of damage in 2004). There have been many more, but not so many the last few years: the 2000s were the sweet spot when it came to hundreds of millions of computers being online with an operating system — Windows XP — that was horrifically insecure, operated by users given to clicking and paying for scams to make the scary popups go away.
  </p>
  <p>
   Over the ensuing years Microsoft has, from Windows XP Service Pack 2 on, gotten a lot more serious about security, network administrators have gotten a lot smarter about locking down their networks, and users have at least improved in not clicking on things they shouldn’t. Still, as this last weekend shows, worms remain a threat, and as usual, everyone is looking for someone to blame. This, time, though, there is a juicy new target: the U.S. government.
  </p>
  <h4>
   The WannaCry Timeline
  </h4>
  <p>
   Microsoft President and Chief Legal Officer Brad Smith didn’t mince any words on
   <a href="https://blogs.microsoft.com/on-the-issues/2017/05/14/need-urgent-collective-action-keep-people-safe-online-lessons-last-weeks-cyberattack/#sm.0001073229cgeeznzsj2526jzi8w2">
    The Microsoft Blog
   </a>
   (“WannaCrypt” is an alternative name for WannaCry”):
  </p>
  <blockquote>
   <p>
    Starting first in the United Kingdom and Spain, the malicious “WannaCrypt” software quickly spread globally, blocking customers from their data unless they paid a ransom using Bitcoin. The WannaCrypt exploits used in the attack were drawn from the exploits stolen from the National Security Agency, or NSA, in the United States. That theft was publicly reported earlier this year. A month prior, on March 14, Microsoft had released a security update to patch this vulnerability and protect our customers. While this protected newer Windows systems and computers that had enabled Windows Update to apply this latest update, many computers remained unpatched globally. As a result, hospitals, businesses, governments, and computers at homes were affected.
   </p>
  </blockquote>
  <p>
   Smith mentions a number of key dates, but it’s important to get the timeline right, so let me summarize it as best as I understand it:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2577" id="identifier_0_2577" title="I will update this section as necessary and note said updates in this footnote">
    1
   </a>
  </p>
  <ul>
   <li>
    <strong>
     2001:
    </strong>
    The bug in question was first introduced in Windows XP and has hung around in every version of Windows since then
   </li>
   <li>
    <strong>
     2001–2015:
    </strong>
    At some point the NSA (likely the
    <a href="https://arstechnica.com/security/2015/02/how-omnipotent-hackers-tied-to-the-nsa-hid-for-14-years-and-were-found-at-last/">
     Equation Group
    </a>
    , allegedly a part of the NSA) discovered the bug and built an exploit named EternalBlue, and may or may not have used it
   </li>
   <li>
    <strong>
     2012–2015:
    </strong>
    An NSA contractor allegedly stole more than 75% of the NSA’s library of hacking tools
   </li>
   <li>
    <strong>
     August, 2016:
    </strong>
    A group called “ShadowBrokers”
    <a href="https://arstechnica.com/security/2016/08/group-claims-to-hack-nsa-tied-hackers-posts-exploits-as-proof/">
     published hacking tools
    </a>
    they claimed were from the NSA; the tools appeared to
    <a href="https://arstechnica.com/security/2016/08/code-dumped-online-came-from-omnipotent-nsa-tied-hacking-group/">
     come from the Equation Group
    </a>
   </li>
   <li>
    <strong>
     October, 2016:
    </strong>
    The aforementioned NSA contractor was charged with stealing NSA data
   </li>
   <li>
    <strong>
     January, 2017:
    </strong>
    ShadowBrokers put a number of Windows exploits up for sale, including a SMB zero day exploit — likely the “EternalBlue” exploit used in WannaCry — for 250 BTC (around $225,000 at that time)
   </li>
   <li>
    <strong>
     March, 2017:
    </strong>
    Microsoft, without fanfare,
    <a href="https://technet.microsoft.com/en-us/library/security/ms17-010.aspx">
     patched a number of bugs
    </a>
    without giving credit to whomever discovered them; among them was the EternalBlue exploit, and it seems very possible
    <a href="https://www.emptywheel.net/2017/04/14/the-shadow-brokers-vulnerability-equities-process-nsa-has-had-at-least-96-days-to-warn-microsoft-about-these-files/">
     the NSA warned them
    </a>
   </li>
   <li>
    <strong>
     April, 2017:
    </strong>
    ShadowBrokers
    <a href="https://arstechnica.com/security/2017/04/purported-shadow-brokers-0days-were-in-fact-killed-by-mysterious-patch/">
     released a new batch of exploits
    </a>
    , including EternalBlue, perhaps because Microsoft had already patched them (dramatically reducing the value of zero day exploits in particular)
   </li>
   <li>
    <strong>
     May, 2017:
    </strong>
    WannaCry, based on the EternalBlue exploit, was released and spread to around 200,000 computers before its kill switch was inadvertently triggered; new versions have already begun to spread
   </li>
  </ul>
  <p>
   It is axiomatic to note that the malware authors bear ultimate responsibility for WannaCry; hopefully they will be caught and prosecuted to the full extent of the law.
  </p>
  <p>
   After that, though, it gets a bit murky.
  </p>
  <h4>
   Spreading Blame
  </h4>
  <p>
   The first thing to observe from this timeline is that, as with all Windows exploits, the initial blame lies with Microsoft. It is Microsoft that developed Windows without a strong security model for networking in particular, and while the company has done a lot of work to fix that, many fundamental flaws still remain.
  </p>
  <p>
   Not all of those flaws are Microsoft’s fault: the default assumption for personal computers has always been to give applications mostly unfettered access to the entire computer, and all attempts to limit that have been met with howls of protest. iOS created a new model, in which applications were put in a sandbox and limited to carefully defined hooks and extensions into the operating system; that model, though, was only possible because iOS was new. Windows, in contrast, derived all of its market power from the established base of applications already in the market, which meant overly broad permissions couldn’t be removed retroactively without ruining Microsoft’s business model.
  </p>
  <p>
   Moreover, the reality is that software is hard: bugs are inevitable, particularly in something as complex as an operating system. That is why Microsoft, Apple, and basically any conscientious software developer regularly issues updates and bug fixes; that products can be fixed after the fact is inextricably linked to why they need to be fixed in the first place!
  </p>
  <p>
   To that end, though, it’s important to note that Microsoft did fix the bug two months ago: any computer that applied the March patch — which, by default, is installed automatically — is protected from WannaCry; Windows XP is an exception, but Microsoft stopped selling that operating system in 2008
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2577" id="identifier_1_2577" title="Windows XP was still available for Netbooks until 2010">
    2
   </a>
   and stopped supporting it in 2014 (despite that fact, Microsoft did release a
   <a href="https://blogs.technet.microsoft.com/msrc/2017/05/12/customer-guidance-for-wannacrypt-attacks/">
    Windows XP patch to Fix the bug
   </a>
   on Friday night). In other words, end users and the IT organizations that manage their computers bear responsibility as well. Simply staying up-to-date on critical security patches would have kept them safe.
  </p>
  <p>
   Still, staying up-to-date is expensive, particularly in large organizations, because updates break stuff. That “stuff” might be critical line-of-business software, which may be from 3rd-party vendors, external contractors, or written in-house: that said software is so dependent on one particular version of an OS is itself a problem, so you can blame those developers too. The same goes for hardware and its associated drivers: there are stories from the UK’s National Health Service of MRI and X-ray machines that only run on Windows XP, critical negligence by the manufacturers of those machines.
  </p>
  <p>
   In short, there is plenty of blame to go around; how much, though, should go into the middle part of that timeline — the government part?
  </p>
  <h4>
   Blame the Government
  </h4>
  <p>
   Smith writes in that blog post:
  </p>
  <blockquote>
   <p>
    This attack provides yet another example of why the stockpiling of vulnerabilities by governments is such a problem. This is an emerging pattern in 2017. We have seen vulnerabilities stored by the CIA show up on WikiLeaks, and now this vulnerability stolen from the NSA has affected customers around the world. Repeatedly, exploits in the hands of governments have leaked into the public domain and caused widespread damage. An equivalent scenario with conventional weapons would be the U.S. military having some of its Tomahawk missiles stolen.
   </p>
  </blockquote>
  <p>
   This comparison, frankly, is ridiculous, even if you want to stretch and say that the impact of WannaCry on places like hospitals may actually result in physical harm (albeit much less than a weapon of war!).
  </p>
  <p>
   First, the U.S. government creates Tomahawk missiles, but it is Microsoft that created the bug (even if inadvertently). What the NSA did was
   <em>
    discover
   </em>
   the bug (and subsequently exploit it), and that difference is critical. Finding bugs is hard work, requiring a lot of money and effort. It’s worth considering why, then, the NSA was willing to do just that, and the answer is right there in the name: national security. And, as we’ve seen through examples like
   <a href="https://en.wikipedia.org/wiki/Stuxnet">
    Stuxnet
   </a>
   , these exploits can be a powerful weapon.
  </p>
  <p>
   Here is the fundamental problem: insisting that the NSA hand over exploits immediately is to effectively demand that the NSA not find the bug in the first place. After all, a patched (and thus effectively published) bug isn’t worth nearly as much, both monetarily as ShadowBrokers found out, or militarily, which means the NSA would have no reason to invest the money and effort to find them. To put it another way, the alternative is not that the NSA would have told Microsoft about EternalBlue years ago, but that the underlying bug would have remained un-patched for even longer than it was (perhaps to be discovered by other entities like China or Russia; the NSA is not the only organization searching for bugs).
  </p>
  <p>
   In fact, the real lesson to be learned with regard to the government is not that the NSA should be Microsoft’s QA team, but rather that leaks happen: that is why, as
   <a href="https://stratechery.com/2016/apple-the-fbi-and-security/">
    I argued last year in the context of Apple and the FBI
   </a>
   , government efforts to weaken security by fiat or the insertion of golden keys (as opposed to discovering pre-existing exploits) are wrong. Such an approach is much more in line with Smith’s Tomahawk missile argument, and given the indiscriminate and immediate way in which attacks can spread, the country that would lose the most from such an approach would be the one that has the most to lose (i.e. the United States).
  </p>
  <h4>
   Blame the Business Model
  </h4>
  <p>
   Still, even if the U.S. government is less to blame than Smith insists, nearly two decades of dealing with these security disasters suggests there is a systematic failure happening, and I think it comes back to business models. The fatal flaw of software, beyond the various technical and strategic considerations I outlined above, is that for the first several decades of the industry software was sold for an up-front price, whether that be for a package or a license.
  </p>
  <p>
   This resulted in problematic incentives and poor decision-making by all sides:
  </p>
  <ul>
   <li>
    Microsoft is forced to support multiple distinct code bases, which is expensive and difficult and not tied to any monetary incentives (thus, for example, the end of support for Windows XP).
   </li>
   <li>
    3rd-party vendors are inclined to view a particular version of an operating system as a fixed object: after all, Windows 7 is distinct from Windows XP, which means it is possible to specify that only XP is supported. This is compounded by the fact that 3rd-party vendors have no ongoing monetary incentive to update their software; after all, they have already been paid.
   </li>
   <li>
    The most problematic impact is on buyers: computers and their associated software are viewed as capital costs, which are paid for once and then depreciated over time as the value of the purchase is realized. In this view ongoing support and security are an additional cost divorced from ongoing value; the only reason to pay is to avoid a future attack, which is impossible to predict both in terms of timing and potential economic harm.
   </li>
  </ul>
  <p>
   The truth is that software — and thus security — is never finished; it makes no sense, then, that payment is a one-time event.
  </p>
  <h4>
   SaaS to the Rescue
  </h4>
  <p>
   Four years ago I wrote about why
   <a href="https://stratechery.com/2013/adobes-subscription-model-why-platform-owners-should-care/">
    subscriptions are better
   </a>
   for both developers and end users in the context of Adobe’s move away from packaged software:
  </p>
  <blockquote>
   <p>
    <a href="https://stratechery.com/2013/adobes-subscription-model-why-platform-owners-should-care/">
     <img alt="surplus2" class="aligncenter size-large wp-image-307" height="480" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2013/05/surplus2-1024x768.jpg" srcset="https://stratechery.com/wp-content/uploads/2013/05/surplus2.jpg 1024w, https://stratechery.com/wp-content/uploads/2013/05/surplus2-300x225.jpg 300w, https://stratechery.com/wp-content/uploads/2013/05/surplus2-768x576.jpg 768w, https://stratechery.com/wp-content/uploads/2013/05/surplus2-840x630.jpg 840w" width="640"/>
    </a>
   </p>
  </blockquote>
  <p>
   That article was about the benefit of better matching Adobe’s revenue with the value gained by its users: the price of entry is lower while the revenue Adobe extracts over time is more commensurate with the value it delivers. And, as I noted, “Adobe is well-incentivised to maintain the app to reduce churn, and users always have the most recent version.”
  </p>
  <p>
   This is
   <em>
    exactly
   </em>
   what is necessary for good security: vendors need to keep their applications (or in the case of Microsoft, operating systems) updated, and end users need to always be using the latest version. Moreover, pricing software as a service means it is no longer a capital cost with all of the one-time payment assumptions that go with it: rather, it is an ongoing expense that implicitly includes maintenance, whether that be by the vendor or the end user (or, likely, a combination of the two).
  </p>
  <p>
   I am, of course, describing Software-as-a-service, and that category’s emergence, along with cloud computing generally (both easier to secure
   <em>
    and
   </em>
   with massive incentives to be secure), is the single biggest reason to be optimistic that WannaCry is the dying gasp of a bad business model (although it will take a very long time to get out of all the sunk costs and assumptions that fully-depreciated assets are “free”).
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2577" id="identifier_2_2577" title="The answer for individual security is encryption">
    3
   </a>
   In the long run, there is little reason for the typical enterprise or government to run any software locally, or store any files on individual devices. Everything should be located in a cloud, both files and apps, accessed through a browser that is continually updated, and paid for with a subscription. This puts the incentives in all the right places: users are paying for security and utility simultaneously, and vendors are motivated to earn it.
  </p>
  <p>
   To Microsoft’s credit the company has been moving in this direction for a long time: not only is the company focused on Azure and Office 365 for growth, but even its traditional software has long been monetized through subscription-like offerings. Still, implicit in this cloud-centric model is a lot less lock-in and a lot more flexibility in terms of both devices and services: the reality is that for as much of a headache Windows security has been for Microsoft, those headaches are inextricably tied up with the reasons that Microsoft has been one of the most profitable companies of all time.
  </p>
  <p>
   The big remaining challenge will be hardware: the business model for software-enabled devices will likely continue to be upfront payment, which means no incentives for security; the costs are externalities to be borne by the targets of
   <a href="https://www.wired.com/2016/12/botnet-broke-internet-isnt-going-away/">
    botnets like Mirai
   </a>
   . Expect little progress and lots of blame, the hallmark of the sort of systematic breakdown that results from a mismatched business model.
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2577">
    I will update this section as necessary and note said updates in this footnote [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2577">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2577">
    Windows XP was still available for Netbooks until 2010 [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2577">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2577">
    The answer for individual security is encryption [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2577">
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
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2577" href="https://stratechery.com/2017/wannacry-and-the-power-of-business-models/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2577" href="https://stratechery.com/2017/wannacry-and-the-power-of-business-models/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2577" href="https://stratechery.com/2017/wannacry-and-the-power-of-business-models/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/wannacry-and-the-power-of-business-models/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

