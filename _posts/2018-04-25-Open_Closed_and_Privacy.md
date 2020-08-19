---
layout: post
title: "Open, Closed, and Privacy"
date: 2018-04-25T15:11:17+00:00
author: Ben Thompson
from: https://stratechery.com/2018/open-closed-and-privacy/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3439 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-android topics-competition topics-countries topics-eu topics-gdpr topics-messaging topics-mobile topics-regulation topics-social concepts-advertising concepts-business-models concepts-privacy concepts-technology-and-society concepts-unintended-consequence companies-apple companies-facebook companies-google companies-whatsapp" id="post-3439">
 <header class="entry-header">
  <h1 class="entry-title">
   Open, Closed, and Privacy
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-04-25T08:11:17-07:00">
     Wednesday, April 25, 2018
    </time>
    <time class="updated" datetime="2018-06-15T12:33:26-07:00">
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
   <em>
    Note: This article has nothing to do with open or closed source code
   </em>
  </p>
  <p>
   It was eight years ago next month that Vic Gundotra, then-VP of Engineering at Google, delivered
   <a href="https://www.youtube.com/watch?v=89xc_1Vv69k">
    a blistering attack on Apple
   </a>
   for not being open:
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_3439" id="identifier_0_3439" title="The picture is from his presentation">
    1
   </a>
  </p>
  <blockquote>
   <p>
    <img alt="A slide from Google's 2010 I/O keynote criticizing Apple" class="aligncenter size-large wp-image-3440" height="341" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-10.46.33-PM-1024x545.png" srcset="https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-10.46.33-PM-1024x545.png 1024w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-10.46.33-PM-300x160.png 300w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-10.46.33-PM-768x409.png 768w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-10.46.33-PM-1184x630.png 1184w" width="640"/>
   </p>
   <p>
    On [my] first day I met a man named Mr. Andy Rubin. Now I suspect most of you know who Andy Rubin is. At the time he was responsible for what was then a secret project codenamed Android, and on that first day Andy enthusiastically described to me the team’s mission and purpose. And as he spoke — I’ll level with you — I was skeptical. In fact, I interrupted Andy, and I said, “Andy, I don’t get it. Does the world really need another mobile operating system? Google is about advertising — shouldn’t we be on every phone?”
   </p>
   <p>
    To this day I remember Andy’s response, and he made two points. The first point Andy made was that it was critically important to provide a free mobile operating system — an open-source operating system — that would enable innovation at every level of the stack. In other words, OEMs should be free to build all kinds of devices — devices with keyboards, without keyboards, with front-facing cameras, two inches, three inches, four inches — that operators should be able to compete on the strength and coverage of their network — 2G, 3G, 4G, LTE, CDMA — and that in the end, with innovation coming at every layer, it would be the consumer who would be able to benefit by getting the best device on the best network for them.
   </p>
   <p>
    I remember Andy’s second point: he argued that if Google did not act, we faced a draconian future, a future where one man, one company, one device, one carrier, would be our only choice. That’s a future we don’t want! So if you believe in openness, if you believe in choice, if you believe in innovation from everyone, then welcome to Android.
   </p>
  </blockquote>
  <p>
   Gundotra repeated the word “open” like a mantra, appealing to the sensibilities of not just people in technology but also its critics, opposed to so-called “walled gardens”; the two primary offenders were deemed to be Apple and Facebook.
  </p>
  <p>
   This is what made Google’s low-key announcement of its latest plans for messaging on Android phones — an exclusive with
   <a href="https://www.theverge.com/2018/4/19/17252486/google-android-messages-chat-rcs-anil-sabharwal-imessage-texting">
    The Verge
   </a>
   about what it calls
   <em>
    Chat
   </em>
   — so striking: the company is introducing an open alternative to products like iMessage and WhatsApp, but only as a last resort, and the effort is being pilloried by critics to boot;
   <a href="https://twitter.com/waltmossberg/status/987190616877608960">
    Walt Mossberg was representative
   </a>
   :
  </p>
  <div align="center">
   <blockquote class="twitter-tweet" data-conversation="none" data-lang="en">
    <p dir="ltr" lang="en">
     Bottom line: Google builds an insecure messaging system controlled by carriers who are in bed with governments everywhere at exactly the time when world publics are more worried about data collection and theft than ever.
    </p>
    <p>
     — Walt Mossberg (@waltmossberg)
     <a href="https://twitter.com/waltmossberg/status/987190616877608960?ref_src=twsrc%5Etfw">
      April 20, 2018
     </a>
    </p>
   </blockquote>
   <p>
   </p>
  </div>
  <p>
   Of course Google’s critics are not criticizing
   <em>
    Chat
   </em>
   for being open; they are, like Mossberg, criticizing it for being “insecure” — that is, not end-to-end encrypted like iMessage or WhatsApp. That, though, is the rub: being “secure” and being “open” are incompatible.
  </p>
  <h4>
   How End-to-End Encryption Works
  </h4>
  <p>
   A quick primer on how end-to-end encryption works, using iMessage as an example; I’m going to dramatically simplify this explanation, but you can read
   <a href="https://www.apple.com/business/docs/iOS_Security_Guide.pdf">
    Apple’s security white paper
   </a>
   to get the specifics:
  </p>
  <ul>
   <li>
    When iMessage is turned on, “keys” are generated; these are produced in pairs, one private and one public. These two keys are related: the public key encrypts content such that it can only be decrypted by a private key; to analogize them to a safe, the public key locks the door, and the private key unlocks it.
   </li>
   <li>
    The relationship between these two keys is, well, the key to understanding how encryption works in messaging (and all communications): anyone sending an encrypted message “locks” the content using a public key, which means that the only person that can “unlock” and read the message is whoever has the corresponding private key.
   </li>
   <li>
    To that end, the private key is, as the name implies private: it is kept on the device that generated it (in fact, every device with iMessage generates its own encryption keys). The public key, meanwhile, is public: for anyone to be able to send you an encrypted message means that everyone must be able to find the public key that corresponds to your private key.
   </li>
  </ul>
  <p>
   This is the precise spot where “open” breaks down: you can, in fact, send encrypted content over open protocols like email. The problem is that the sender cannot just unilaterally decide to encrypt a message; rather, the
   <em>
    receiver
   </em>
   has to first generate a public-private key pair, then share the public key with the sender so that the email can be encrypted in a way that only the recipient — thanks to their private key — can read it. This is, needless to say, far beyond the capabilities of most users: not only do they not understand that there needs to be a conversation before the conversation, they don’t even know the language they need to use.
  </p>
  <p>
   And yet, over 100 billion messages are sent per day on WhatsApp and iMessage alone, and the reason is because both are closed. To continue with the iMessage explanation, public keys are sent to Apple’s servers to be stored in a directory service; there they (along with the public keys from all of the user’s devices) are associated with the user’s phone number or email address. This is the critical piece to making iMessage encryption easy-to-use: senders need only know the recipients phone number or email address; Apple will silently pass the appropriate public keys to the sender to encrypt the message such that only the recipient can read it.
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_3439" id="identifier_1_3439" title="Because private keys are associated with devices, iMessage actually encrypts a single message multiple times, each time using the public key for a different recipient device">
    2
   </a>
  </p>
  <p>
   In short, encryption is viable for the public at scale precisely because Apple controls everything: clients on both ends, and the server in the middle. It’s the same story with WhatsApp or any of the other encrypted messaging services: being closed makes end-to-end encryption actually usable at scale.
  </p>
  <p>
   And,
   <a href="https://stratechery.com/2018/googles-messaging-announcement-allos-go-to-market-problem-chat-the-open-alternative/">
    as I explained on Monday
   </a>
   , this option is not available to Google when it comes to Android: OEMs don’t want to deepen their Google dependence, and carriers do not want to undercut their lucrative SMS business (and Google can’t force the issue because of its looming antitrust problems). The only option was the one Gundotra lauded in 2010: an open standard that no one controls, for better or, in the case of the desire for end-to-end encryption, worse.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_3439" id="identifier_2_3439" title="To be very clear, it is technically possible to layer encryption onto RCS, but it requires the cooperation of the carriers collectively and the addition of a trusted entity like certificate authorities for https; the entire point, though, is that carriers refuse to do this.">
    3
   </a>
  </p>
  <h4>
   Encryption and Privacy
  </h4>
  <p>
   The ongoing debate about data and privacy is directly related to the question of encryption in some important ways, as Mossberg’s tweet notes: messaging content is data that users would like to keep private, and encryption accomplishes that.
  </p>
  <p>
   Of course it is not the only data generated by messaging: entailed in the ease-of-use that comes from relying on centralized servers for key exchange is the necessary collection by those servers of metadata. Obviously email addresses and/or phone numbers and/or usernames have to be stored (so that they can be associated with public keys), and the very act of connecting two accounts will generate logs of who was communicating with whom and when, and often from where (through IP addresses). Services can and do differentiate based on how long they keep that metadata; Signal,
   <a class="footnote-link footnote-identifier-link" href="#footnote_3_3439" id="identifier_3_3439" title="An example of a open-source software that is a closed service">
    4
   </a>
   for example, promises to flush metadata as soon as possible, whereas WhatsApp — which uses encryption developed by Signal — keeps such data indefinitely.
  </p>
  <p>
   That gets at the more important way that the relationship between open/closed and encryption is relevant to data and privacy: just as encryption at scale is only possible with a closed service, so it is with privacy. That is, to the extent we as a society demand privacy, the more we are by implication demanding ever more closed gardens, with ever higher walls. Just as a closed garden makes the user experience challenge of encryption manageable, so does the centralization of data make privacy — of a certain sort — a viable business model.
  </p>
  <p>
   The reality of digital services is that the amount of data each of us generates at basically all times is astronomical; your phone always knows where you are, but so does every app you use and every website you visit.
  </p>
  <figure aria-describedby="caption-attachment-3441" class="wp-caption aligncenter" id="attachment_3441" style="width: 640px">
   <img alt="A map of Stratechery readers" class="size-large wp-image-3441" height="409" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM-1024x655.png" srcset="https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM-1024x655.png 1024w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM-300x192.png 300w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM-768x491.png 768w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM-985x630.png 985w, https://stratechery.com/wp-content/uploads/2018/04/Screen-Shot-2018-04-25-at-9.45.56-PM.png 1720w" width="640"/>
   <figcaption class="wp-caption-text" id="caption-attachment-3441">
    Stratechery readers
   </figcaption>
  </figure>
  <p>
   Google, of course, knows one’s every search, for many people their every email, and thanks to the company’s ad network, control of Chrome and Google analytics, and, of course Android, pretty much everything else one does online. Facebook’s knowledge is slightly less broad but arguably deeper: your friends, your interests — both stated and revealed — and thanks to its ‘Like’ button, your web activity as well.
  </p>
  <p>
   To focus on simply Google and Facebook, though, is to miss how much other data collection is going on: ad networks are tracking you on nearly every website you visit, your credit card company is tracking your purchases (and by extension your location), your grocery store is tracking your eating habit, the list goes on and on. Moreover, the further down you go down the data food chain, the more likely it is that data is bought and sold. That, of course, is as open as it gets.
  </p>
  <h4>
   Data Collection Versus Data Leakage
  </h4>
  <p>
   Still, the contrast between Google and Facebook is worth considering: Facebook is in hot water thanks to the revelation that some amount of the data it collects was sold to Cambridge Analytica, which bragged it helped elect Donald Trump president. One does wonder how much that allegation drives the outrage about the fact that Facebook shared that data to begin with, but leaving that aside, what is noteworthy is that the outrage stems from the sharing of the data, not its collection. Yes, some are outraged by that collection — but they were outraged before the current scandal, and their objections simply didn’t register with the broader public.
  </p>
  <p>
   This view is buttressed by the fact that Google has been largely unscathed by the current controversy; what seems significant is not the fact that the company collects data, but rather that it has been careful to keep that data inside its walled garden. Indeed, that was always the irony with Gundotra’s attack on Apple: Google has always been anything but open when it came to its proprietary technology or its money-making ad apparatus (of which user data plays an important part). Its insistence that Android be open was based not on principle but on sound strategy: challengers always want to commoditize their complements, and for Google, smartphones themselves were complements to Search and ads.
  </p>
  <p>
   The implication is quite far-reaching: being open, at least to the extent that openness involved user data of any sort, is increasingly unacceptable; that new companies and user benefits might result from that data no longer matters, a fate that all-too-often befalls the not-yet-created.
  </p>
  <h4>
   The Entrenchment of Google and Facebook
  </h4>
  <p>
   This entrenches Facebook and Google in three ways:
  </p>
  <ul>
   <li>
    First, it is even more unlikely that a challenger to either will arise without meaningful access to their proprietary data. This, to be fair, was already quite unlikely: the entire industry learned from Instagram’s piggy-backing on Twitter’s social graph that sharing data with a potential competitor was a bad idea from a business perspective.
   </li>
   <li>
    Second, Google and Facebook will increasingly be the only source of innovations that leverage their data; it will be too politically risky for either to share anything with third parties. That means new features that rely on user data must be built by one of the two giants, or, as is always the case in a centrally-planned system relative to a market, not built at all.
   </li>
   <li>
    Third, Google and Facebook’s advertising advantage, already massive, is going to become overwhelming. Both companies generate the majority of their user data on their own platforms, which is to say their data collection and advertising business are integrated. Most of their competitors for digital advertising, on the other hand, are modular: some companies collect data, and other collect ads; such a model, in a society demanding ever more privacy, will be increasingly untenable.
   </li>
  </ul>
  <p>
   There are increasing expectation that this is exactly what will happen with the European Union’s General Data Protection Regulation (GDPR). From the
   <a href="https://www.wsj.com/articles/how-europes-new-privacy-rules-favor-google-and-facebook-1524536324">
    Wall Street Journal
   </a>
   :
  </p>
  <blockquote>
   <p>
    Brussels wants its new General Data Protection Regulation, or GDPR, to stop tech giants and their partners from pressuring consumers to relinquish control of their data in exchange for services. The EU would like to set an example for legislation around the world. But some of the restrictions are having an unintended consequence: reinforcing the duopoly of Facebook Inc. and Alphabet Inc.’s Google…
   </p>
   <p>
    Digital advertising companies, known as ad tech firms, say Google and Facebook’s strict interpretation of GDPR squeezes their business. The ad tech firms embed their own technology in publishers’ websites and apps, putting them in competition with the tech giants. Unlike the giants, the ad tech firms have no direct relationship with consumers. They say Google’s and Facebook’s response pressures publishers to seek consent on behalf of dozens of ad tech firms that people have never heard of.
   </p>
  </blockquote>
  <p>
   This is hardly a surprise — I
   <a href="https://stratechery.com/2017/the-gdpr-and-facebook-and-google-intelligent-tracking-prevention-data-portability-and-social-graphs/">
    predicted this months ago
   </a>
   . And, while GDPR advocates have pointed to the lobbying Google and Facebook have done against the law as evidence that it will be effective, that is to completely miss the point: of course neither company wants to incur the costs entailed in such significant regulation, which will absolutely restrict the amount of information they can collect. What is missed is that the increase in digital advertising is a secular trend driven first-and-foremost by eyeballs: more-and-more time is spent on phones, and the ad dollars will inevitably follow. The calculation that matters, then, is not how much Google or Facebook are hurt in isolation, but how much they are hurt relatively to their competitors, and the obvious answer is “a lot less”, which, in the context of that secular increase, means growth.
  </p>
  <h4>
   Privacy and Regulation
  </h4>
  <p>
   There is a broader question from GDPR specifically and the idea that the tide is pushing towards walled gardens generally: what should the seemingly inevitable regulation of tech companies look like? It seems increasingly certain that privacy will be a major focus (it obviously already is in the European Union), but to stop there would be a mistake.
  </p>
  <p>
   Specifically, if an emphasis on privacy and the non-leakage of data is a priority, it follows that the platforms that already exist will be increasingly entrenched. And, if those platforms will be increasingly entrenched, then the more valuable might regulation be that ensures an equal playing field on top of those platforms. The reality is that an emphasis on privacy will only increase the walls on those gardens; it may be fruitful to rule out the possibility of unfair expansion.
  </p>
  <p>
   <em>
    Note: I wrote
    <a href="https://stratechery.com/2018/open-closed-and-privacy-follow-up-facebooks-earnings-notes-on-facebooks-earnings/">
     a follow-up
    </a>
    in the Daily Update that you can read in this footnote:
   </em>
   <a class="footnote-link footnote-identifier-link" href="#footnote_4_3439" id="identifier_4_3439" title="So, I definitely messed up with yesterday’s article in a way none of you noticed; given that on Monday I wrote in-depth about Google’s new Chat initiative, I kind of skirted over the details in yesterday’s article, Open, Closed, and Privacy. Unfortunately, that meant I got a whole bunch of tweets and email from non-subscribers taking me to task for items, well, that I already explained (I didn’t get any from subscribers). The perils of paywalls!
Probably the two biggest points of pushback were that Google could build an encrypted system if they wanted to (as I explained on Monday, they already tried, and they can’t really exercise Android leverage right now), and that carriers could build a federated key exchange system and/or something akin to the certificate authority framework that undergirds HTTPS. That is all true!
My point, though — and the reality that Google had to accept, as The Verge feature explained — is that the carriers are not going to do that, full stop. The only way to achieve end-to-end encryption in the real world as it exists today is to build a separate centralized service that sits on top of phones (via apps) and runs over the Internet. To put it another way, Google wasn’t choosing whether to build an encrypted service or an open one; they were choosing whether to build something better than SMS or nothing at all.
Now, does Google have a business interest in message content being unencrypted? I suppose, and as I noted on Monday, making Allo unencrypted by default was a bad look (although understandable for non-advertising related reasons, specifically the deep integration with Google Assistant). The truth, though, is that Google already knows plenty about everyone, especially those using Android. One could argue that Google didn’t fight hard enough for encryption, but to say the company actively didn’t want encryption isn’t quite right in my opinion.
Still, the clarification is useful given the comparison I was trying to draw between encryption and privacy: just as one can, in theory, envision a standard that is both open and includes encryption (like HTTPS!), one can also envision a world where users truly own their data in a secure way and carry it from service-to-service. In reality, such systems are far more viable if built into the foundation of the technology (like HTTPS!) as opposed to being retrofitted over the objection of entrenched incumbents.
Two more points of follow-up:

While I didn’t say so explicitly, I think I at least strongly implied on Monday that I would not expect Apple to support Chat. They certainly could — remember, this is basically SMS 2.0, and Apple obviously supports SMS — but it is difficult for me to imagine any scenario where Apple doesn’t hold its ground with the (very legitimate!) excuse that Chat is not encrypted. More importantly, it is even more difficult for me to see any way that carriers could exert leverage on Apple; their lack of leverage is why iMessage exists in the first place.
The blockchain is, of course, a theoretical solution, but as I’ve noted previously, the real blockchain upside with regards to this debate is the entire undoing of aggregators through decentralization. To be sure, that is by no means a sure thing, for many of the principles laid out in this article, particularly the trade-off between a user experience that scales and such decentralization. Regardless, any such solution is quite a ways in the future.

As for the final bit about regulation, stay tuned. It has been top-of-mind for a long time.">
    5
   </a>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_3439">
    The picture is from his presentation [
    <a class="footnote-link footnote-back-link" href="#identifier_0_3439">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_3439">
    Because private keys are associated with devices, iMessage actually encrypts a single message multiple times, each time using the public key for a different recipient device [
    <a class="footnote-link footnote-back-link" href="#identifier_1_3439">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_3439">
    To be very clear, it is technically possible to layer encryption onto RCS, but it requires the cooperation of the carriers collectively and the addition of a trusted entity like certificate authorities for https; the entire point, though, is that carriers refuse to do this. [
    <a class="footnote-link footnote-back-link" href="#identifier_2_3439">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_3439">
    An example of a open-source software that is a closed service [
    <a class="footnote-link footnote-back-link" href="#identifier_3_3439">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_3439">
    So, I definitely messed up with yesterday’s article in a way none of you noticed; given that
    <a href="https://stratechery.com/2018/googles-messaging-announcement-allos-go-to-market-problem-chat-the-open-alternative/">
     on Monday I wrote in-depth about Google’s new
     <em>
      Chat
     </em>
     initiative
    </a>
    , I kind of skirted over the details in yesterday’s article,
    <a href="https://stratechery.com/2018/open-closed-and-privacy/">
     Open, Closed, and Privacy
    </a>
    . Unfortunately, that meant I got a whole bunch of tweets and email from non-subscribers taking me to task for items, well, that I already explained (I didn’t get any from subscribers). The perils of paywalls!
   </li>
  </ol>
 </div>
</article>
