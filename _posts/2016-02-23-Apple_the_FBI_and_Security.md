---
layout: post
title: "Apple, the FBI, and Security"
date: 2016-02-23T14:37:48+00:00
author: Ben Thompson
from: https://stratechery.com/2016/apple-the-fbi-and-security/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2044 post type-post status-publish format-standard hentry category-articles topics-fbi topics-government-organizations topics-regulation concepts-security concepts-technology-and-society companies-apple" id="post-2044">
 <header class="entry-header">
  <h1 class="entry-title">
   Apple, the FBI, and Security
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2016-02-23T06:37:48-08:00">
     Tuesday, February 23, 2016
    </time>
    <time class="updated" datetime="2018-05-07T15:36:51-07:00">
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
   The dispute between Apple and the FBI is a much closer question than it is being framed as in most of the tech press. In large part this is because the dispute itself is being serially mischaracterized by both Apple supporters and detractors.
  </p>
  <p>
   Apple supporters are, in my estimation, too easily conflating the security issues at hand with the more fundamental debate about encryption; detractors are trivializing the significance of the FBI’s request by suggesting they simply want Apple to unlock the phone.
  </p>
  <p>
   My goal with this piece is to, in as plain language as possible, lay out the issues at hand, give a framework to think about them, and explain why I am ultimately supporting Apple’s decision.
  </p>
  <h4>
   Three Debates
  </h4>
  <p>
   The first thing to understand about the issue at hand is that there are three separate debates going on: the issue at hand, the encryption debate, and the PR battle. To understand the issue it is necessary to separate them, but to figure out which side may win it is equally critical to understand how they relate to each other.
  </p>
  <p>
   <strong>
    The Issue At Hand
   </strong>
  </p>
  <p>
   As I
   <a href="https://stratechery.com/2016/apple-versus-the-fbi-understanding-iphone-encryption-the-risks-for-apple-and-encryption/">
    laid out last week
   </a>
   , iPhones running iOS 8 or later have all of their contents encrypted on-disk with very strong encryption that is practically unbreakable. Therefore, the most realistic way to get access to the contents of the iPhone in question in this case is to brute force — i.e. try every possible combination — the passcode on the device. This passcode, in conjunction with the iPhone’s unique ID key (UID) that is embedded at manufacture and unknown by Apple, forms a “key” that unlocks the contents of the drive.
  </p>
  <p>
   Given that this is an obvious way to break into an iPhone, Apple has instituted a number of software-based protections against brute force attacks, specifically a (user-selected) option to delete the contents of the disk after 10 failed passcode entries
   <a class="footnote-link footnote-identifier-link" href="#footnote_0_2044" id="identifier_0_2044" title="Specifically, the “key” for the disk is deleted, meaning the content is encrypted forever">
    1
   </a>
   and a five-second delay between passcode entries. In addition, the passcode must be entered on the device’s touchscreen.
  </p>
  <p>
   The FBI is asking Apple to remove these limitations: allow more than 10 passcode tries, remove the five-second delay (there would still be an 80-millisecond delay if the computation is done on the device due to a hardware limitation), and allow passcodes to be entered by a separate device instead of a human finger. The FBI cannot do this themselves because removing this limitation would require the installation of a new version of iOS, which itself requires its own key that is known only to Apple.
  </p>
  <p>
   Moreover, the FBI is insisting that this is a one-time ask for one device: Apple would be able to use the device’s Unique Device Identifier (UDID), which is
   <em>
    different
   </em>
   than the aforementioned UID and is known to Apple (and anyone else with the device), to ensure the custom version of iOS could only run on the device in question. In fact, the FBI is even offering to let Apple install the custom version of iOS themselves to ensure it does not leave Apple’s campus.
  </p>
  <p>
   <strong>
    The Encryption Debate
   </strong>
  </p>
  <p>
   What the FBI is
   <em>
    not
   </em>
   asking
   <strong>
    in this case
   </strong>
   is that Apple defeat the device’s on-disk encryption, and for good reason: as I noted above the iPhone’s on-disk encryption is practically unbreakable. Small wonder that when, in 2014 with the debut of iOS 8, Apple extended this encryption to all of an iPhone’s data, law enforcement agencies everywhere were aghast. FBI Director James Comey, in
   <a href="https://www.fbi.gov/news/speeches/going-dark-are-technology-privacy-and-public-safety-on-a-collision-course">
    an October 2014 speech at the Brookings Institute
   </a>
   stated:
  </p>
  <blockquote>
   <p>
    Encryption isn’t just a technical feature; it’s a marketing pitch. But it will have very serious consequences for law enforcement and national security agencies at all levels. Sophisticated criminals will come to count on these means of evading detection. It’s the equivalent of a closet that can’t be opened. A safe that can’t be cracked. And my question is, at what cost?…
   </p>
   <p>
    Cyber adversaries will exploit any vulnerability they find. But it makes more sense to address any security risks by developing intercept solutions during the design phase, rather than resorting to a patchwork solution when law enforcement comes knocking after the fact. And with sophisticated encryption, there might be no solution, leaving the government at a dead end—all in the name of privacy and network security.
   </p>
  </blockquote>
  <p>
   “Intercept solutions during the design phase” entail the creation of a so-called “golden key”: a built-in solution to an encryption algorithm that is independent of the user’s passcode. Basically, Comey has for a few years now been agitating for Apple’s on-disk encryption be designed like a TSA-compliant luggage lock: it opens with either the owner’s passcode or with a universal key owned by a government agency.
  </p>
  <p>
   This is an unacceptable outcome that has to date been rightly rejected by Congress. While a “golden key” can not, contrary to conventional wisdom, be guessed, it can be stolen (much like
   <a href="http://www.cio.com/article/2983185/that-tsa-approved-lock-on-your-suitcase-just-got-hacked.html">
    the TSA luggage key has been
   </a>
   ). Worse, once said key is stolen, every single device governed by said key would be vulnerable without anyone knowing any better: that includes not only devices that hold personal details, but also corporate secrets, classified information, in short, nearly everything of value that underpins the United States economy. And no one would know when and if the data was being stolen.
  </p>
  <p>
   Again, though, while Comey and the FBI have been the most outspoken advocates of this destructive golden key, that is not an issue in this current case. If it were, my support of Apple would be unequivocal, because a golden key is an issue where there is simply no compromise.
  </p>
  <p>
   <strong>
    The PR Battle
   </strong>
  </p>
  <p>
   Before I engage in such consideration, it’s important to acknowledge the PR aspect of this case: this is where details like the fact Apple helped the FBI bypass the passcode on non-encrypted iPhones goes, along with the fact that San Bernardino County, under direction from the FBI, reset the iCloud password associated with the iPhone in question. That’s not to say that PR doesn’t matter, but none of the surrounding details have anything to do with the substance of the question at hand: is Apple right to resist the FBI’s request to weaken software-based security measures (which do not entail breaking encryption)?
  </p>
  <h4>
   Three Contexts
  </h4>
  <p>
   As is the case with many contentious questions, the correct answer depends on the context with which you evaluate the problem.
  </p>
  <p>
   <strong>
    The Technology Industry’s Perspective
   </strong>
  </p>
  <p>
   Apple’s opposition to the FBI’s request, and the support they have received from most major technology companies, is completely understandable.
  </p>
  <p>
   First off, complying with this order would be a burden (the degree of said burden will be the critical factor on which the court’s decision will turn). Apple would need to design a new version of iOS, figure out a way to secure said version to ensure it doesn’t become widely available, and develop an infrastructure to deal with the inevitable flood of requests from law enforcement agencies seeking similar assistance to the FBI. It is not simply an issue of “unlocking” an iPhone: it is far more complex and dangerous than that.
  </p>
  <p>
   Secondly, Apple’s ability to resist government pressure in foreign countries — particularly China — will be severely compromised should Apple be forced to acquiesce in this case.
  </p>
  <p>
   Third, as much as it clearly irked Apple when the FBI framed the company’s opposition as a “marketing stunt,” there is no disputing the fact that the company has made privacy and security a core part of the iPhone value proposition. Forcing the company to actively undo its own security measures certainly works against that proposition.
  </p>
  <p>
   <strong>
    The FBI’s Perspective
   </strong>
  </p>
  <p>
   All that said, technologists do their case a disservice by dismissing the FBI’s position out of hand. The fact of the matter is that privacy of information is not an absolute: the
   <a href="https://en.wikipedia.org/wiki/Fourth_Amendment_to_the_United_States_Constitution">
    Fourth Amendment
   </a>
   both prohibits “unreasonable searches and seizures”
   <em>
    and
   </em>
   affirms an exception for warrants “upon probable cause”. Needless to say, the FBI has pretty damn compelling probable cause in this case,
   <a class="footnote-link footnote-identifier-link" href="#footnote_1_2044" id="identifier_1_2044" title="Not to mention the explicit permission of San Bernardino County, the owner of the phone in question">
    2
   </a>
   and I don’t doubt that future requests along these lines will be accompanied by warrants as well.
  </p>
  <p>
   Moreover, while it’s true the FBI and other law enforcement agencies have access to more information than ever before, both thanks to cloud services and also the expansion of the Communications Assistance for Law Enforcement Act (CALEA), which compels carriers and ISPs to provide the government with the capability to intercept communications, there very well may be information on devices that are never transmitted (or that is encrypted upon transmission).
  </p>
  <p>
   More broadly, while I argued an absolutists’ position above with regards to encryption, that is because absolutism is the only option: data is either securely encrypted or it’s not.
   <a class="footnote-link footnote-identifier-link" href="#footnote_2_2044" id="identifier_2_2044" title="It’s math: just as 2 + 2 can only equal 4, data is secure from everyone or no one">
    3
   </a>
   Given that, one can certainly make the argument that given the inescapable reality that some amount of data will be “dark” because of encryption, it behooves the technology industry to cooperate on all requests that don’t entail compromising on something (encryption) that, by definition, cannot be compromised on. To put it another way, I can sympathize with law enforcement’s irritation that the position of companies like Apple when it comes to security leaves no room for the FBI’s enforcement of a different type of security: that of the public at large.
  </p>
  <p>
   <strong>
    The U.S. Perspective
   </strong>
  </p>
  <p>
   That noted, the FBI’s position itself is more limited than they themselves likely realize: the FBI is primarily concerned with domestic crimes, and their perspective is that of an investigator seeking to uncover a secret.
  </p>
  <p>
   However, the United States does not exist in a vacuum: there are plenty of entities that would like nothing more than to uncover American secrets, whether those be on the individual level (compromising information, identity, credit cards, etc.), corporate level (trade secrets, financial information, strategic documents, etc.), or government level (military information, government communications, counter-espionage, etc.). Moreover, given the fact the United States is the richest country in the world with the largest economy, powered by corporations overwhelmingly based on intellectual property, defended by the largest and most sophisticated military in the world, the United States collectively has by far the most to gain from strong security. This is why people like Michael Hayden, former director of the NSA — no civil liberties ideologue, to say the least! — say the FBI is wrong. From
   <a href="http://www.usatoday.com/story/news/2016/02/21/ex-nsa-chief-backs-apple-iphone-back-doors/80660024/">
    USA Today
   </a>
   :
  </p>
  <blockquote>
   <p>
    “Look, I used to run the NSA, OK?” Hayden told USA TODAY’s weekly video newsmaker series. “Back doors are good. Please, please, Lord, put back doors in, because I and a whole bunch of other talented security services around the world — even though that back door was not intended for me — that back door will make it easier for me to do what I want to do, which is to penetrate.
   </p>
   <p>
    “But when you step back and look at the whole question of American security and safety writ large, we are a safer, more secure nation without back doors,” he says. With them, “a lot of other people would take advantage of it.”
   </p>
  </blockquote>
  <p>
   The fact that weaker security helps the FBI doesn’t change the fact that the United States has more to lose from weaker security than any other country on earth. By far.
  </p>
  <h4>
   Winning the Security Game
  </h4>
  <p>
   There’s one more way to look at the question of security in the context of the United States broadly. Consider a sports analogy: in a game like basketball you need to play both defense and offense; the FBI, given their responsibilities, is primarily concerned with offense — uncovering secrets. However, the agency’s haste to score buckets has the effect of weakening the United States’ defense.
  </p>
  <p>
   This is particularly unnecessary because the United States already has the best offense in the world! Consider the iPhone in question: the fact of the matter is that the data
   <em>
    could
   </em>
   be extracted without Apple’s help.
  </p>
  <ul>
   <li>
    The first potential method would be to leverage a zero-day exploit that would allow the device to run code that is not signed by Apple;
    <a class="footnote-link footnote-identifier-link" href="#footnote_3_2044" id="identifier_3_2044" title="We know these exist: they are the foundation of jailbreaks">
     4
    </a>
    in other words, it is almost certainly possible that someone other than Apple could install the necessary software to bypass the 10 passcode entry limitation (the National Security Agency [NSA] is
    <a href="http://www.buzzfeed.com/sheerafrenkel/the-fight-between-the-fbi-and-apple-about-setting-precedent#.thbp16nd9">
     widely thought to possess
    </a>
    several zero day exploits)
   </li>
   <li>
    The second potential method would be to extract the data from the memory chips, and then
    <a href="http://abcnews.go.com/US/san-bernardino-iphone-technically-hacked-apple-researchers/story?id=37065676&amp;nwltr=abcn_tco">
     de-cap the phone’s processor
    </a>
    to uncover the device’s unknown UID and the algorithm used to encrypt the data, and then conduct a brute force attack on the passcode using a separate computer designed to do just that
    <a class="footnote-link footnote-identifier-link" href="#footnote_4_2044" id="identifier_4_2044" title="Which, thanks to Bitcoin, are cheaper than ever before">
     5
    </a>
   </li>
  </ul>
  <p>
   Both of these processes are hugely difficult and expensive, which means they can only realistically be done by agencies with massive resources. Like, for example, the NSA — which is a big advantage for the United States. If there is strong security everywhere (i.e. everyone has the same defensive capability), then the country with the biggest advantage is the country with the most resources to overcome that security (i.e. not everyone has the same offensive capability). To lower the bar when it comes to defense is to give up one of the United States’ biggest strategic advantages.
  </p>
  <hr/>
  <p>
   Note what I have not discussed in this article: privacy. In fact, I do agree that there are significant privacy concerns around the FBI’s insistence that Apple explicitly weaken iPhone security, and I would personally lean towards the privacy side of the debate when it comes to the privacy-security tradeoff.
  </p>
  <p>
   That said, as I articulated above, I understand the FBI’s concerns about going dark, and the agency could hardly have picked a more compelling example to make their case for tech company cooperation.
   <a class="footnote-link footnote-identifier-link" href="#footnote_5_2044" id="identifier_5_2044" title="That this case is being leveraged is certainly not an accident ">
    6
   </a>
   I am not surprised that
   <a href="http://www.people-press.org/2016/02/22/more-support-for-justice-department-than-for-apple-in-dispute-over-unlocking-iphone/">
    a majority of Americans
   </a>
   say Apple “Should unlock the terror suspect’s iPhone.”
  </p>
  <p>
   That is why it is critical to make the argument that the FBI’s request
   <em>
    weakens
   </em>
   security by compelling something much deeper than merely “unlocking an iPhone.” In other words, given the context of the United States as a whole, an argument for privacy and an argument for security are not a tradeoff at all, but rather two paths to the same outcome: stronger, not weaker iPhones.
   <a class="footnote-link footnote-identifier-link" href="#footnote_6_2044" id="identifier_6_2044" title="One final point: Apple may lose, and that will be ok. This case is a close one, and such an outcome — facilitated brute force attacks — may prove to be the compromise that brings law enforcement to peace with encryption. That would be the hope anyways, because legislation limiting encryption would be a devastating outcome for everyone. One hopes Apple’s resistance in this case doesn’t lay the groundwork for an even worse outcome in the future">
    7
   </a>
  </p>
  <ol class="footnotes">
   <li class="footnote" id="footnote_0_2044">
    Specifically, the “key” for the disk is deleted, meaning the content is encrypted forever [
    <a class="footnote-link footnote-back-link" href="#identifier_0_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_1_2044">
    Not to mention the explicit permission of San Bernardino County, the owner of the phone in question [
    <a class="footnote-link footnote-back-link" href="#identifier_1_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_2_2044">
    It’s math: just as 2 + 2 can only equal 4, data is secure from everyone or no one [
    <a class="footnote-link footnote-back-link" href="#identifier_2_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_3_2044">
    We know these exist: they are the foundation of jailbreaks [
    <a class="footnote-link footnote-back-link" href="#identifier_3_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_4_2044">
    Which, thanks to Bitcoin, are cheaper than ever before [
    <a class="footnote-link footnote-back-link" href="#identifier_4_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_5_2044">
    That this case is being leveraged is certainly
    <a href="http://www.bloomberg.com/news/articles/2016-02-19/secret-memo-details-u-s-s-broader-strategy-to-crack-phones">
     not an accident
    </a>
    [
    <a class="footnote-link footnote-back-link" href="#identifier_5_2044">
     ↩
    </a>
    ]
   </li>
   <li class="footnote" id="footnote_6_2044">
    One final point: Apple may lose, and that will be ok. This case is a close one, and such an outcome — facilitated brute force attacks — may prove to be the compromise that brings law enforcement to peace with encryption. That would be the hope anyways, because legislation limiting encryption would be a devastating outcome for everyone. One hopes Apple’s resistance in this case doesn’t lay the groundwork for an even worse outcome in the future [
    <a class="footnote-link footnote-back-link" href="#identifier_6_2044">
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

