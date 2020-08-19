---
layout: post
title: "Data Factories"
date: 2018-10-02T16:46:10+00:00
author: Ben Thompson
from: https://stratechery.com/2018/data-factories/
tags: [ Stratechery ]
categories: [ Stratechery ]
---

<article class="post-3727 post type-post status-publish format-standard has-post-thumbnail hentry category-articles topics-networks topics-regulation topics-search topics-social topics-technologies concepts-advertising concepts-aggregation-theory concepts-antitrust concepts-business-models concepts-commoditizing-suppliers concepts-distribution-and-transaction-costs concepts-owning-customer-relationship concepts-privacy concepts-technology-and-society companies-facebook companies-google companies-instagram companies-whatsapp" id="post-3727">
 <header class="entry-header">
  <h1 class="entry-title">
   Data Factories
  </h1>
  <div class="entry-meta">
   <span class="posted-on">
    <span class="screen-reader-text">
     Posted on
    </span>
    <time class="entry-date published" datetime="2018-10-02T09:46:10-07:00">
     Tuesday, October 2, 2018
    </time>
    <time class="updated" datetime="2018-10-05T05:56:29-07:00">
     Friday, October 5, 2018
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
   I’m generally annoyed by the cliché “If you’re not paying you’re the product”;
   <a href="http://powazek.com/posts/3229">
    Derek Powazek has explained
   </a>
   why the implications of this statement are usually misleading and often wrong, something that is particularly problematic in the context of
   <a href="https://stratechery.com/2015/aggregation-theory/">
    Aggregators
   </a>
   . After all, if a company’s market power flows from controlling demand — that is, users — that means said company is incentivized to keep those users satisfied; it is suppliers that have to “take it or leave it”.
  </p>
  <p>
   This explains why the idea of an Aggregator being a monopoly is hard to get one’s head around; in the physical world where market power comes from controlling distribution — think AT&amp;T, or your local cable company, or a utility company — there is no incentive to treat end users well, because users have no choice in the matter. On the Internet, though, where distribution is effectively free, alternatives are only a click away; Aggregators are extremely motivated to make sure that click doesn’t happen, which means giving the users what they want (the technical term is “increasing engagement”). Users are a priority, not a product.
  </p>
  <p>
   And yet, as is so often the case, clichés persist because there is some truth to them. Facebook and Google — the two
   <a href="https://stratechery.com/2017/the-super-aggregators-and-the-russians/">
    Super Aggregators
   </a>
   — make money through ads, and advertisers come to Facebook and Google because they want to reach consumers. From an advertiser perspective users — or to be more precise, access to users’ attention — is a product they are absolutely paying for.
  </p>
  <h4>
   Views on Facebook
  </h4>
  <p>
   This seeming dichotomy — prioritizing users on one hand, and selling access to their attention on the other — makes more sense if you first think of Super Aggregators as two distinct businesses: Aggregator and advertising-seller. To use Facebook as an example (as I will for the rest of the article, although nearly everything applies to Google as well), it is both an Aggregator that content providers clamor to reach, as well as the gatekeeper for consumers advertisers wish to sell to:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1.png">
    <img alt="Two views on Facebook's business" class="aligncenter size-large wp-image-3731" height="281" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1-1024x449.png" srcset="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1-1024x449.png 1024w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1-300x132.png 300w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1-768x337.png 768w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1-1200x526.png 1200w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.326-copy-1.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   Still, this isn’t quite right, because Facebook the company is not simply the so-called “Blue App” but also several other businesses, most notably Instagram and WhatsApp (there is also Messenger, but given its user-facing network is the same as the Blue App I don’t really consider it to be distinct). Once you add those to the mix Facebook the company looks like this:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328.png">
    <img alt="Facebook's conglomerate" class="aligncenter size-large wp-image-3730" height="399" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328-1024x638.png" srcset="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328-1024x638.png 1024w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328-300x187.png 300w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328-768x479.png 768w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328-1011x630.png 1011w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.328.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   You’ll note that I’ve taken to using the term “Blue App” to distinguish Facebook the network from Facebook the company; the question, though, is what exactly is the company anyways?
  </p>
  <h4>
   The Data Factory
  </h4>
  <p>
   At a superficial level, Facebook is a sort of holding company for social networks; back in 2014 I called it
   <a href="https://stratechery.com/2014/social-conglomerate/">
    The Social Conglomerate
   </a>
   . That, though, is very much a user-centric perspective; to that end, if you consider the advertising perspective, you could argue that Facebook the company is an advertising dashboard and sales force.
  </p>
  <p>
   I think, though, that sells short the functionality of Facebook the company. Specifically, Facebook is a data factory.
   <a href="https://en.wikipedia.org/wiki/Factory">
    Wikipedia
   </a>
   defines a factory thusly:
  </p>
  <blockquote>
   <p>
    A factory or manufacturing plant is an industrial site, usually consisting of buildings and machinery, or more commonly a complex having several buildings, where workers manufacture goods or operate machines processing one product into another.
   </p>
  </blockquote>
  <p>
   Facebook quite clearly isn’t an industrial site (although it operates multiple data centers with lots of buildings and machinery), but it most certainly processes data from its raw form to something uniquely valuable both to Facebook’s products (and by extension its users and content suppliers) and also advertisers (and again, all of this analysis applies to Google as well):
  </p>
  <ul>
   <li>
    Users are better able to connect with others, find content they are interested in, form groups and manage events, etc., thanks to Facebook’s data.
   </li>
   <li>
    Content providers are able to reach far more readers than they would on their own, most of whom would not even be aware those content providers exist, much less visit of their own volition.
   </li>
   <li>
    Advertisers are able to maximize the return on their advertising dollar by only showing ads to individuals they believe are predisposed to like their product, making it more viable than ever before to target niches (to the benefit of their customers as well).
   </li>
  </ul>
  <p>
   And then, in exchange for these benefits that derive from data, Facebook sucks in data from all three entities:
  </p>
  <ul>
   <li>
    Users provide Facebook with data directly, both through information and media they upload, and also through their actions on Facebook properties.
   </li>
   <li>
    Content is not simply data in its own right, but also a catalyst for generating user action data.
   </li>
   <li>
    Advertisers, like content providers, not only provide data in its own right, which acts as a catalyst for generating user action data, but also upload huge amounts of data directly in order to better target prospective customers.
   </li>
  </ul>
  <p>
   Those aren’t the only avenues through which Facebook collects data: the company has deals with multiple third-party data collection companies, gathering everything from web traffic to offline store receipts, and also has incentivized an untold number of websites — particularly content providers — to include Facebook links on their sites that collect data from those sites.
  </p>
  <p>
   That results in a much fuller picture of Facebook’s business:
  </p>
  <p>
   <a href="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329.png">
    <img alt="The Facebook Data Factory" class="aligncenter size-large wp-image-3732" height="421" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329-1024x674.png" srcset="https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329-1024x674.png 1024w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329-300x198.png 300w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329-768x506.png 768w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329-957x630.png 957w, https://stratechery.com/wp-content/uploads/2018/10/Paper.stratechery-Year-One.329.png 1300w" width="640"/>
   </a>
  </p>
  <p>
   Data comes in from anywhere, and value — also in the form of data — flows out, transformed by the data factory.
  </p>
  <h4>
   Regulating the Internet
  </h4>
  <p>
   Two weeks ago, in
   <a href="https://stratechery.com/2018/the-european-union-versus-the-internet/">
    The European Union Versus the Internet
   </a>
   , I argued that effective regulation of tech companies, particularly Super Aggregators like Facebook and Google, had to work with the fundamental principles of the Internet, not against them; otherwise, the likely outcome would be to entrench these Internet giants with little gain to consumers.
  </p>
  <p>
   First and foremost regulators need to understand that the power of Aggregators comes from controlling demand, not supply. Specifically, consumers voluntarily use Google and Facebook, and “suppliers” like content providers, advertisers, and users themselves, have no choice but to go where consumers are. To that end:
  </p>
  <blockquote>
   <p>
    Facebook’s ultimate threat can never come from publishers or advertisers, but rather demand — that is, users. The real danger, though, is not from users also using competing social networks (although Facebook has always been paranoid about exactly that); that is not enough to break the virtuous cycle. Rather, the only thing that could undo Facebook’s power is users actively rejecting the app. And, I suspect, the only way users would do that en masse would be if it became accepted fact that Facebook is actively bad for you — the online equivalent of smoking.
   </p>
   <p>
    For Facebook, the Cambridge Analytica scandal was akin to the Surgeon General’s report on smoking: the threat was not that regulators would act, but that users would, and nothing could be more fatal. That is because the regulatory corollary of Aggregation Theory is that the ultimate form of regulation is user generated.
   </p>
   <p>
    If regulators, EU or otherwise, truly want to constrain Facebook and Google — or, for that matter, all of the other ad networks and companies that in reality are far more of a threat to user privacy — then the ultimate force is user demand, and the lever is demanding transparency on exactly what these companies are doing.
   </p>
  </blockquote>
  <p>
   What, though, does transparency mean in the context of enabling “user generated regulation”, and what might meaningful regulation look like that achieves the goal of forcing said transparency in a way that fosters competition instead of inhibiting it? The answer goes back to data factories.
  </p>
  <h4>
   Raw Data Versus Processed Data
  </h4>
  <p>
   The first challenge with a data factory is that it is impossible to peer inside. Both
   <a href="https://www.facebook.com/settings?tab=your_facebook_information">
    Facebook
   </a>
   and
   <a href="https://myaccount.google.com/dashboard">
    Google
   </a>
   offer customers ways to view their data, but not only is the presentation overwhelming, the data is precisely what you gave them. It is the raw inputs.
  </p>
  <p>
   Advertisers, interestingly enough,
   <a href="https://www.facebook.com/business/help/community/question/?id=10153634450022812">
    cannot download custom audiences
   </a>
   once uploaded, but given that data is (also) their business, it is extremely likely that they retain the list of email addresses they uploaded in the first place; the same thing applies to 3rd party data providers. Websites, meanwhile, are completely in the dark: that Facebook badge or like button may provide a page view or two, but it doesn’t give any data back in return.
  </p>
  <p>
   What no one gets is the final product: the melding of all that data from all those sources to build a far more detailed profile of every Facebook user than they provided on their own. There is no question, though, that it is happening. Last week
   <a href="https://gizmodo.com/facebook-is-giving-advertisers-access-to-your-shadow-co-1828476051">
    Gizmodo had an excellent write-up
   </a>
   of
   <a href="https://mislove.org/publications/PII-PETS.pdf">
    a paper in the journal Proceedings on Privacy Enhancing Technologies
   </a>
   detailing how Facebook users could be targeted for ads with a whole host of information that was never provided by the user, including landline numbers, unpublished email addresses, and phone numbers provided for two-factor authentication:
  </p>
  <blockquote>
   <p>
    They found that when a user gives Facebook a phone number for two-factor authentication or in order to receive alerts about new log-ins to a user’s account, that phone number became targetable by an advertiser within a couple of weeks. So users who want their accounts to be more secure are forced to make a privacy trade-off and allow advertisers to more easily find them on the social network. When asked about this, a Facebook spokesperson said that “we use the information people provide to offer a more personalized experience, including showing more relevant ads.” She said users bothered by this can set up two-factor authentication without using their phone numbers; Facebook stopped making a phone number mandatory for two-factor authentication
    <a href="https://www.facebook.com/notes/facebook-security/two-factor-authentication-for-facebook-now-easier-to-set-up/10155341377090766/">
     four months ago
    </a>
    .
   </p>
  </blockquote>
  <p>
   That quote from the spokesperson is an acknowledgement of the data factory: Facebook doesn’t care where it gets data, it is all just an input in service of the output — a targetable profile.
  </p>
  <p>
   This lack of care about what precisely goes into a finished product is hardly unique to Facebook. One of the most famous examples is Nike:
  </p>
  <figure aria-describedby="caption-attachment-3728" class="wp-caption aligncenter" id="attachment_3728" style="width: 640px">
   <a href="https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339.jpg">
    <img alt="A boy sewing Nike soccer balls" class="size-large wp-image-3728" height="418" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339-1024x668.jpg" srcset="https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339-1024x668.jpg 1024w, https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339-300x196.jpg 300w, https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339-768x501.jpg 768w, https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339-966x630.jpg 966w, https://stratechery.com/wp-content/uploads/2018/10/P1-BP885_NIKE3_GR_20140421170339.jpg 1242w" width="640"/>
   </a>
   <figcaption class="wp-caption-text" id="caption-attachment-3728">
    According to the Internet, this is the photo from Life Magazine. I could not find a copy to be sure.
   </figcaption>
  </figure>
  <p>
   That image is from the June, 1986, issue of Life Magazine, which detailed how children in Pakistan were manufacturing soccer balls for pennies a day. Nike executives, in a refrain that is vaguely familiar, were initially aggrieved; after all, soccer balls were not inflated until after they were shipped, which meant the photo was staged.
  </p>
  <p>
   That was surely correct, and yet such a complaint utterly missed the point: Nike didn’t really care where it got its soccer balls, or shoes or clothes or anything else. It simply paid the factory owners and washed its hands of the problem. That photo, and the decades of protests and boycotts that followed, forced the company to do better.
  </p>
  <h4>
   The Privacy Obstacle
  </h4>
  <p>
   Unfortunately, while Nike could not stop a photographer from traveling to Pakistan (and, truth be told, stage a photo), the general public has no way to see inside the Facebook or Google factories — and this is where regulators come in.
  </p>
  <p>
   The most important thing that regulators could do is force Facebook and Google — and all data collectors — to disclose their factory output. Give users the ability to see not simply what they put in — which again, Google and Facebook do (and which GDPR requires), but also what comes out after all of the inputs are mixed and matched.
  </p>
  <p>
   Make no mistake, no company will do this on its own, and not simply for business reasons. Note the Facebook spokesman’s response to Gizmodo when asked about the use of uploaded contact information:
  </p>
  <blockquote>
   <p>
    “People own their address books,” a Facebook spokesperson said by email. “We understand that in some cases this may mean that another person may not be able to control the contact information someone else uploads about them.”
   </p>
  </blockquote>
  <p>
   This gets at how it is privacy regulations in particular go wrong: in the attempt to make rules that protect people without their agency, those wishing to take said agency cannot even know what exactly Facebook knows about them because, well, privacy. Meanwhile, websites throw up pop-ups and overlays that no one reads, or ban entire continents, not because their users care but because a regulator said so.
  </p>
  <h4>
   Privacy Realities
  </h4>
  <p>
   Here is the other reality regulators need to grapple with: most users don’t care about privacy, particularly if it saves them money. I came across this tweet in response to an interview clip of Tim Cook talking about privacy and it rather succinctly made the point:
  </p>
  <p>
   <a href="https://twitter.com/Mantisness/status/1046891343060951040">
    <img alt="A tweet from someone that would sacrifice privacy for cheaper iPhones" class="aligncenter size-large wp-image-3733" height="948" sizes="(max-width: 640px) 100vw, 640px" src="https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM-691x1024.png" srcset="https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM-691x1024.png 691w, https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM-202x300.png 202w, https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM-768x1139.png 768w, https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM-425x630.png 425w, https://stratechery.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-02-at-11.34.10-PM.png 974w" width="640"/>
   </a>
  </p>
  <p>
   Frankly, I don’t blame the apathy of most users: what Facebook and Google and all of the other ad-supported services and sites on the Internet provide is immensely valuable. Moreover, I’m the first (and often only!) to defend personalized ads: I think they are a critical component of building a future where anyone can build a niche business thanks to the Internet making the entire world an addressable market — if only they can find their customers.
  </p>
  <p>
   At the same time, most users truly have no idea what data these companies hold. Might they change their minds if they actually saw the processed data, not simply the raw inputs? I don’t know, but I do think it is their decision to make.
  </p>
  <p>
   Moreover, establishing clear requirements that users be able to view not only the data they uploaded but their entire processed profile — the output of the data factory — would be far less burdensome to new and smaller companies that seek to challenge these behemoths. Data export controls could be built in from the start, even as they are free to build factories as complex as the big companies they are challenging — or, as a potential selling point, show off that they don’t have a factory at all. This is much easier than trying to abide by rules that apply to every user — whether they want the protection or not — and which were designed with Facebook and Google in mind, not an understaffed startup.
  </p>
  <p>
   Indeed, that is the crux of the matter: regulators need to trust users to take care of their own privacy, and enable them to do so — and, by extension, create the conditions for users to actually know what is going on with their data. And, if they decide they don’t care, so be it. The market will have spoken, an outcome that should be the regulator’s goal in the first place.
  </p>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon-text sd-sharing">
    <h3 class="sd-title">
     Share
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon" data-shared="sharing-facebook-3727" href="https://stratechery.com/2018/data-factories/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Facebook">
        <span>
         Facebook
        </span>
       </a>
      </li>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon" data-shared="sharing-twitter-3727" href="https://stratechery.com/2018/data-factories/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on Twitter">
        <span>
         Twitter
        </span>
       </a>
      </li>
      <li class="share-linkedin">
       <a class="share-linkedin sd-button share-icon" data-shared="sharing-linkedin-3727" href="https://stratechery.com/2018/data-factories/?share=linkedin" rel="nofollow noopener noreferrer" target="_blank" title="Click to share on LinkedIn">
        <span>
         LinkedIn
        </span>
       </a>
      </li>
      <li class="share-email">
       <a class="share-email sd-button share-icon" data-shared="" href="https://stratechery.com/2018/data-factories/?share=email" rel="nofollow noopener noreferrer" target="_blank" title="Click to email this to a friend">
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

