---
layout: post
title: "The Pollyannish Assumption"
date: 2017-12-05T14:22:42+00:00
author: Ben Thompson
from: https://stratechery.com/2017/the-pollyannish-assumption/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-2949 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-ai-machine-learning topics-networks topics-search topics-social topics-technologies topics-user-generated-video topics-video concepts-aggregation-theory concepts-business-models concepts-distribution-and-transaction-costs concepts-platforms concepts-politics concepts-product-management concepts-technology-and-society concepts-the-user-experience concepts-unintended-consequence companies-facebook companies-google companies-twitter companies-youtube" id="post-2949">
 <header class="entry-header">
  <h1 class="entry-title">
   The Pollyannish Assumption
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2017-12-05T06:22:42-08:00">
     Tuesday, December 5, 2017
    </time>
    <time class="updated" datetime="2018-05-08T15:20:44-07:00">
     Tuesday, May 8, 2018
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
   There was an interesting aside about Apple’s bad week that
   <a href="https://stratechery.com/2017/apples-bad-week-reputation-risk-integration-and-focus/">
    I wrote about yesterday
   </a>
   . It turns out that a user posted the macOS login-as-root bug to Apple’s support forums back on November 13:
  </p>
  <blockquote>
   <p>
    On startup, click on “Other”
   </p>
   <p>
    Enter username: root and leave the password empty. Press enter. (Try twice)
    <br>
     If you’re able to log in (hurray, you’re the admin now), then head over to System Preferences&gt;Users &amp; Groups and create a new Admin account.
    </br>
   </p>
   <p>
    Now restart and login to the new Admin Account (you may need a new Apple Id). Once you’re logged into this new Admin Id, you can again proceed to your System Preferences&gt;Users &amp; Groups. Open the Lock Icon with your new Admin ID/Password. Assign “Allow user to administer this computer” to your original Apple ID. Restart.
   </p>
  </blockquote>
  <p>
   Most of the discussion about this tidbit has centered on the fact that this user later noted that they had found this solution on some other forum — they couldn’t remember which (this reply has now been hidden on the original thread, but Daring Fireball quoted it
   <a href="https://daringfireball.net/2017/11/high_sierra_root_login_two_weeks_ago">
    here
   </a>
   ); observers have largely given Apple a pass on having missed the posting on their  own forums because those forums are mostly user-generated content (both questions and answers) and Apple
   <a href="https://developer.apple.com/support/forums/">
    explicitly asks posters
   </a>
   to file bug reports with Apple directly. It’s understandable that the company missed this post two weeks ago.
  </p>
  <p>
   For the record, I agree. Managing user-generated content is really hard.
  </p>
  <h4>
   The User-Generated Content Conundrum
  </h4>
  <p>
   Three recent bits of news bring this point about user-generated content home.
  </p>
  <p>
   First, Twitter; from
   <a href="https://www.bloomberg.com/news/articles/2017-12-01/twitter-changes-reason-for-allowing-trump-s-anti-muslim-retweets">
    Bloomberg
   </a>
   :
  </p>
  <blockquote>
   <p>
    Twitter Inc. said it allowed anti-Muslim videos that were retweeted by President Donald Trump because they didn’t break rules on forbidden content, backtracking from an earlier rationale that newsworthiness justified the posts. On Thursday, a Twitter spokesperson said “there may be the rare occasion when we allow controversial content or behavior which may otherwise violate our rules to remain on our service because we believe there is a legitimate public interest in its availability.”
   </p>
  </blockquote>
  <p>
   Second, Facebook; from
   <a href="https://www.thedailybeast.com/women-are-getting-banned-from-facebook-for-calling-men-scum">
    The Daily Beast
   </a>
   :
  </p>
  <blockquote>
   <p>
    In the wake of the #MeToo movement, countless women have taken to Facebook to express their frustration and disappointment with men and have been promptly shut down or silenced, banned from the platform for periods ranging from one to seven days. Women have posted things as bland as “men ain’t shit,” “all men are ugly,” and even “all men are allegedly ugly” and had their posts removed…In late November, after the issue was raised in a private Facebook group of nearly 500 female comedians, women pledged to post some variation of “men are scum” to Facebook on Nov. 24 in order to stage a protest. Nearly every women who carried out the pledge was banned…
   </p>
   <p>
    When reached for comment a Facebook spokesperson said that the company is working hard to remedy any issues related to harassment on the platform and stipulated that all posts that violate community standards are removed. When asked why a statement such as “men are scum” would violate community standards, a Facebook spokesperson said that the statement was a threat and hate speech toward a protected group and so it would rightfully be taken down.
   </p>
  </blockquote>
  <p>
   Third, YouTube. From
   <a href="https://www.buzzfeed.com/charliewarzel/youtube-will-add-more-human-moderators-to-stop-its-child?utm_term=.nlJJGeEwpR#.xtm3KJv1GP">
    BuzzFeed
   </a>
   :
  </p>
  <blockquote>
   <p>
    YouTube is adding more human moderators and increasing its machine learning in an attempt to curb its child exploitation problem, the company’s CEO, Susan Wojcicki, said in a blog post on Monday evening. The company plans to increase its content moderation workforce to more than 10,000 employees in 2018 in order to help screen videos and train the platform’s machine learning algorithms to spot and remove problematic children’s content. Sources familiar with YouTube’s workforce numbers say this represents a 25% increase from where the company is today.
   </p>
   <p>
    In the last two weeks, YouTube has removed hundreds of thousands of videos featuring children in disturbing and possibly exploitative situations, including being duct-taped to walls, mock-abducted, and even forced into washing machines. The company said it will employ the same approach it used this summer as it worked to eradicate violent extremist content from the platform.
   </p>
  </blockquote>
  <p>
   I’m going to be up front with you: I don’t have any clear cut answers here. One of the seminal Stratechery posts is called
   <a href="https://stratechery.com/2013/friction/">
    Friction
   </a>
   , and while I’ve linked it many times this line is particularly apt:
  </p>
  <blockquote>
   <p>
    Friction makes everything harder, both the good we can do, but also the unimaginably terrible. In our zeal to reduce friction and our eagerness to celebrate the good, we ought not lose sight of the potential bad.
   </p>
  </blockquote>
  <p>
   This is exactly the root of the problem: I don’t believe these platforms so much drive this abhorrent content (the
   <a href="https://www.buzzfeed.com/charliewarzel/youtube-is-addressing-its-massive-child-exploitation-problem?utm_term=.qgoqmPAM7N#.obyKbjp4lD">
    YouTube videos
   </a>
   are just horrible) as they make it easier than ever before for humans to express themselves, and the reality of what we are is both more amazing and more awful than most anyone ever appreciated.
  </p>
  <p>
   This is something I have started to come to grips with personally: the exact same lack of friction that results in an unprecedented explosion in culture, music, and art of all kinds, the telling of stories about underrepresented and ignored parts of the population, and yes, the very existence of a business like mine,
   <em>
    also
   </em>
   results in awful videos being produced and consumed in shocking numbers, abuse being widespread, and even the
   <a href="https://stratechery.com/2016/the-voters-decide/">
    upheaval of our politics
   </a>
   .
  </p>
  <p>
   The problem is that the genie is out of the bottle: lamenting the loss of friction will not only not bring it back, it makes it harder to figure out what to do next. I think, though, the first place to start — for me anyways — is to acknowledge and fully internalize what I wrote back then: focusing on the upsides without acknowledging the downsides is to misevaluate risk and court disaster. And, for those inclined to see the negatives of the Internet, focusing on the downsides without acknowledging the upsides is to misevaluate reward and endanger massive future opportunities. We have to find a middle way, and neither side can do that without acknowledging and internalizing the inevitable truth of the other.
  </p>
  <h4>
   Content Policing
  </h4>
  <p>
   Go back to the Apple forum anecdote: policing millions of comments posted by hundreds of thousands of posters (I’m guesstimating on numbers here) is really hard, and it’s understandable that Apple missed the post in question; as bad as this bug was, it is still the case that the return on the investment that would have been required to catch this one comment simply doesn’t make sense.
  </p>
  <p>
   Apple is the easy one, and I started with them on purpose: using a term like “return on investment” gets a whole lot more problematic when dealing with abuse and human exploitation. That doesn’t mean it isn’t a real calculation made by relevant executives though: in the case of Apple, I think most people would agree that whatever investment in forum moderation would be effective enough to catch this post before it was surfaced on Twitter a couple of weeks later would be far better spent buttressing the internal quality control teams that missed the bug in the first place.
  </p>
  <p>
   That the post was surfaced on Twitter is relevant too; the developer
   <a href="https://twitter.com/lemiorhan/status/935578694541770752">
    who tweeted about the bug
   </a>
   wrote a
   <a href="https://medium.com/@lemiorhan/the-story-behind-anyone-can-login-as-root-tweet-33731b5ded71">
    post on Medium
   </a>
   explaining his tweet:
  </p>
  <blockquote>
   <p>
    A week ago the infrastructure staff at the company I work for stumbled on the issue while trying to help one of my colleagues recover access to his local admin account. The staff noticed the issue and used the flaw to recover my colleague’s account. On Nov 23, the staff members informed Apple about it. They also searched online and saw the issue mentioned in a few places already, even in Apple Developer Forum from Nov 13. It seemed like the issue had been revealed, but Apple had not noticed yet.
   </p>
  </blockquote>
  <p>
   The tweet certainly got noticed, and the bug was fixed within the day. Now to be clear, this isn’t the appropriate way to disclose a vulnerability (to that point, Apple should clarify what exactly happened around that November 23rd disclosure), but broadly speaking, the power of social media is what got this bug fixed as quickly as it was.
  </p>
  <p>
   Outside visibility and public demands for accountability are what drove the YouTube changes as well: BuzzFeed
   <a href="https://www.buzzfeed.com/charliewarzel/youtube-is-addressing-its-massive-child-exploitation-problem?utm_term=.qgoqmPAM7N#.obyKbjp4lD">
    reported on the child exploitation issue last month
   </a>
   after being tipped off by an activist named Matan Uziel who had been rebuffed in his own efforts to contact YouTube. That YouTube was allegedly not receptive to his reach-outs is a bad thing; that there are plenty of ways to raise a ruckus such that they must respond is a good one.
  </p>
  <p>
   It also gives some outline about how YouTube can better approach the problem in the future: yes, the company is building machine learning algorithms, and yes, the company provides an option for viewers to report content — although it is buried in a submenu:
  </p>
  <p>
   <a href="https://stratechery.com/2017/tech-goes-to-washington/">
    <img alt="" class="aligncenter size-large wp-image-2951" height="166" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM-1024x265.png" srcset="https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM-1024x265.png 1024w, https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM-300x78.png 300w, https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM-768x199.png 768w, https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM-1200x311.png 1200w, https://stratechery.com/wp-content/uploads/2017/12/Screen-Shot-2017-12-05-at-10.10.05-PM.png 1906w" width="640"/>
   </a>
  </p>
  <p>
   The point of user reports is to leverage the scale of the Internet to police its own unfathomable scale: there are far more YouTube viewers than there could ever be moderators; meanwhile, there are 400 hours of video uploaded to YouTube every minute.
  </p>
  <p>
   That approach, though, clearly isn’t enough: it is rooted in the pollyannish view of the Internet I described above — the idea that everything is mostly good but for some bad apples. A more realistic view — that humanity is capable of both great beauty and tremendous evil, and that the Internet makes it easier to express both — demands a more proactive approach. And, conveniently, YouTube already has tools in place.
  </p>
  <h4>
   YouTube’s Flawed Approach
  </h4>
  <p>
   On Google’s
   <a href="https://seekingalpha.com/article/4117116-alphabet-goog-q3-2017-results-earnings-call-transcript?part=single">
    last earnings call
   </a>
   CEO Sundar Pichai said:
  </p>
  <blockquote>
   <p>
    YouTube now has over 1.5 billion users. On average, these users spend 60 minutes a day on mobile. But this growth isn’t just happening on desktop and mobile. YouTube now gets over 100 million hours of watch time in the living room every day, and that’s up 70% in the past year alone.
   </p>
  </blockquote>
  <p>
   A major factor driving this growth is YouTube’s machine-learning algorithm for watching more videos; as BuzzFeed noted:
  </p>
  <blockquote>
   <p>
    Thanks to YouTube’s autoplay feature for recommended videos, when users watch one popular disturbing children’s video, they’re more likely to stumble down an algorithm-powered exploitative video rabbit hole. After BuzzFeed News screened a series of these videos, YouTube began recommending other disturbing videos from popular accounts like ToysToSee.
   </p>
  </blockquote>
  <p>
   The recommendation works hand-in-hand with search which — as you would expect given its parent company — YouTube is very good at. Individuals that want disturbing content can find what they’re looking for, and then, in the name of engagement and pushing up those viewing numbers, YouTube gives them more.
  </p>
  <p>
   This should expose the obvious flaw in YouTube’s current reporting-based policing strategy: the nature of search and recommendation algorithms is such that most YouTube viewers, who would be rightly concerned and outraged about videos of child exploitation, never even see the videos that need to be reported. In other words, YouTube’s design makes its attempt to leverage the Internet broadly as moderator doomed to fail.
  </p>
  <p>
   Those exact same search and algorithmic capabilities, though, made it trivial for Uziel and BuzzFeed to find a whole host of exploitive videos. The key difference between Uziel/BuzzFeed and generic YouTube viewers is that the former was looking for them.
  </p>
  <p>
   Herein lies the fundamental failing of YouTube moderation: to date the video platform has operated under the assumption that 1) YouTube has too much content to review it all and 2) The best way to moderate is to depend on its vast user base. It is a strategy that makes perfect sense with the pollyannish assumption that the Internet by default produces good outcomes with but random exceptions.
  </p>
  <p>
   A far more realistic view — because again, the Internet is ultimately a reflection of humanity, full of both goodness and its opposite — would assume that
   <em>
    of course
   </em>
   there will be bad content of YouTube.
   <em>
    Of course
   </em>
   there will be extremist videos recruiting for terrorism,
   <em>
    of course
   </em>
   there will be child exploitation,
   <em>
    of course
   </em>
   there will all manner of content deemed unacceptable by the vast majority of not just the United States but humanity generally.
  </p>
  <p>
   Such a view would engender a far different approach to moderation. Consider this paragraph from YouTube CEO Susan Wojcicki about YouTube’s
   <a href="https://youtube.googleblog.com/2017/12/expanding-our-work-against-abuse-of-our.html">
    latest changes
   </a>
   :
  </p>
  <blockquote>
   <p>
    We understand that people want a clearer view of how we’re tackling problematic content. Our Community Guidelines give users notice about what we do not allow on our platforms and we want to share more information about how these are enforced. That’s why in 2018 we will be creating a regular report where we will provide more aggregate data about the flags we receive and the actions we take to remove videos and comments that violate our content policies. We are looking into developing additional tools to help bring even more transparency around flagged content.
   </p>
  </blockquote>
  <p>
   Make no mistake, transparency is a very good thing (more on this in a moment). What is striking, though, is the reliance on flags: YouTube’s current moderation approach is inherently reactive, whether it be to viewer reports or, increasingly, to machine learning algorithms flagging content. Machine learning is a Google strength, without question, but ultimately the company is built on giving people what they want — including bad actors.
  </p>
  <h4>
   Understanding Demand
  </h4>
  <p>
   A core precept of
   <a href="https://stratechery.com/2017/defining-aggregators/">
    Aggregation Theory
   </a>
   is that digital markets are driven by demand, not supply. This, by extension, is why Google and Facebook in particular dominate: in a world of effectively infinite web pages, the search engine that can pick out the proverbial needle in a haystack is king. It follows, then, that a content moderation approach that starts with supply is inherently inferior to one that starts with demand.
  </p>
  <p>
   This is why it is critical that YouTube lose its pollyannish assumptions: were the company’s moderation approach to start with the assumption of bad actors, then child exploitation would be perhaps the most obvious place to look for problematic videos. Moreover, we know it works: that is exactly what Uziel and BuzzFeed did. If you know what you are looking for, you will, thanks to Google/YouTube’s search capabilities and recommendation algorithms, find it.
  </p>
  <p>
   And then you can delete it.
  </p>
  <p>
   Moreover, you can delete it
   <em>
    efficiently
   </em>
   . Despite my lecture about humanity containing both good and evil, I strongly suspect that the vast majority of those 400 hours uploaded every minute contain unobjectionable — even beautiful, or educational, or entertaining — content. What is the point, then, of even trying to view it all, a Sisyphean task if there ever was one? Starting with the assumption of bad actors and actively looking for their output — using YouTube and Google’s capabilities as aggregators — makes far more sense.
  </p>
  <p>
   That, though, means letting go of the convenient innocence inherent to the worldview of most tech executives. I know the feeling: I want to believe that the Internet’s removal of friction and enabling of anyone to publish content is an inherent good thing, because I personally am, like these executives, a massive beneficiary. Reality is far more complicated; accepting reality, though, is always the first step towards policies that actually work.
  </p>
  <h4>
   Facebook, Twitter, and Politics
  </h4>
  <p>
   I would like to end this essay here; alas, most content moderation policies are not so clean cut at YouTube and child exploitation. That is why I included the Twitter and Facebook excerpts above. Both demonstrate the potential downside of the approach I am recommending for YouTube: being proactive is a sure recipe for false positives.
  </p>
  <p>
   I am reminded, though, of the famous Walt Whitman quote:
  </p>
  <div align="center">
   <em>
    <strong>
     Do I contradict myself?
     <br>
      Very well then I contradict myself,
      <br/>
      (I am large, I contain multitudes.)
     </br>
    </strong>
   </em>
  </div>
  <p>
   It is impossible to navigate the Internet — that is, to navigate humanity — without dealing in shades of gray. And the challenges faced by Twitter and Facebook are perfect examples. I, for one, found President Trump’s retweets disgusting, and Facebook’s bans unreasonable. On the other hand, who is Twitter to define what the President of the United States can or cannot post, and Facebook is at least acting consistently with their policies.
  </p>
  <p>
   Indeed, these two examples are exactly why I have consistently called on these platforms to focus on being neutral. Taking political sides always sounds good to those who presume the platforms will adopt positions consistent with their own views; it turns out, though, that while most of us may agree that child exploitation is wrong, a great many other questions are unsettled.
  </p>
  <p>
   That is why I think the line is clearer than it might otherwise appear: these platform companies should actively seek out and remove content that is
   <em>
    widely
   </em>
   considered objectionable, and they should take a strict hands-off policy to everything that isn’t (while — and I’m looking at you, Twitter — making it much easier to avoid unwanted abuse from people you don’t want to hear from). Moreover, this approach should be accompanied by far more transparency than currently exists: YouTube, Facebook, and Twitter should make explicitly clear what sort of content they are actively policing, and what they are not; I know this is complicated, and policies will change, but that is fine — those changes can be transparent too.
  </p>
  <hr/>
  <p>
   The phrase “With great power comes great responsibility” is commonly attributed to Spider-Man, but it in fact
   <a href="https://quoteinvestigator.com/2015/07/23/great-power/#note-11700-1">
    stems from the French Revolution
   </a>
   :
  </p>
  <blockquote>
   <p>
    Ils doivent envisager qu’une grande responsabilité est la suite inséparable d’un grand pouvoir.
   </p>
   <p>
    English translation: They must consider that great responsibility follows inseparably from great power.
   </p>
  </blockquote>
  <p>
   Documenting why and how these platforms have power has, in many respects, been the ultimate theme of Stratechery over the last four-and-a-half year: this is a call to exercise it, in part, and a request to not, in another. There is a line: what is broadly deemed unacceptable, and what is still under dispute; the responsibility of these new powers that be is to actively search out the former, and keep their hands — and algorithms and policies — off the latter. Said French Revolution offers hints at fates if this all goes wrong.
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-2949" href="https://stratechery.com/2017/the-pollyannish-assumption/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-2949" href="https://stratechery.com/2017/the-pollyannish-assumption/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-2949" href="https://stratechery.com/2017/the-pollyannish-assumption/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2017/the-pollyannish-assumption/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

