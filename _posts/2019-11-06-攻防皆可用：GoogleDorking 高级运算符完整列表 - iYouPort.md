---
layout: post
title: "攻防皆可用：GoogleDorking 高级运算符完整列表 - iYouPort"
date: 2019-11-06T16:04:26+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%94%bb%e9%98%b2%e7%9a%86%e5%8f%af%e7%94%a8%ef%bc%9agoogledorking-%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e5%ae%8c%e6%95%b4%e5%88%97%e8%a1%a8/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-6627 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-googledorking tag-osint tag-technique tag-technology tag-tools" id="post-6627">
 <header class="entry-header">
  <h1 class="entry-title">
   攻防皆可用：GoogleDorking 高级运算符完整列表
  </h1>
 </header>
 <div class="entry-meta">
  <span class="byline">
   <a href="https://www.iyouport.org/author/don-evans/" rel="author" title="由McCaffrey发布">
    McCaffrey
   </a>
  </span>
  <span class="cat-links">
   <a href="https://www.iyouport.org/category/knowledge-node/" rel="category tag">
    Knowledge Node
   </a>
   ,
   <a href="https://www.iyouport.org/category/osint/" rel="category tag">
    OSINT
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e7%bb%99%e8%a1%8c%e5%8a%a8%e8%80%85%e7%9a%84%e6%8a%a4%e8%ba%ab%e7%ac%a6%e5%92%8c%e6%ad%a6%e5%99%a8/" rel="category tag">
    给行动者的护身符和武器
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2019-11-07T00:04:26+08:00">
    2019年11月7日
   </time>
   <time class="updated" datetime="2019-09-30T11:26:59+08:00">
    2019年9月30日
   </time>
  </span>
  <span class="word-count">
   1 Minute
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li class="graf graf--p">
    <span style="color: #00ccff;">
     <em>
      <strong>
       既可以进攻也可以防御
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-6636 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1100%2C674&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?w=1142&amp;ssl=1 1142w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=300%2C184&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=768%2C471&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1024%2C628&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1100%2C674&amp;ssl=1 1100w" data-recalc-dims="1" height="674" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1100%2C674&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6636" data-recalc-dims="1" height="674" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1100%2C674&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?w=1142&amp;ssl=1 1142w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=300%2C184&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=768%2C471&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1024%2C628&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/头-3.png?resize=1100%2C674&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   对于那些一直在做SEO的人来说，GoogleDorking 是家常便饭；但是对于大多数希望从事深度调查工作和隐私保护工作的初学者来说，似乎对它的了解还不够全面。
  </p>
  <p class="graf graf--p">
   但正如我们一直强调的那样，GoogleDorking 是挖掘情报的捷径之一，非常值得掌握 —— 即便您不是开源情报爱好者只是对社交网络上的谎言感觉头疼，也非常值得了解它。
  </p>
  <p class="graf graf--p">
   完全免费的好用工具。
  </p>
  <p class="graf graf--p">
   我们介绍过一部分最基础的内容，详见《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/" href="https://www.iyouport.org/%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e8%be%85%e5%8a%a9%e5%bc%80%e6%ba%90%e8%b0%83%e6%9f%a5%ef%bc%9a%e5%b7%a7%e7%94%a8%e6%90%9c%e7%b4%a2%e5%bc%95%e6%93%8e%e6%8c%96%e6%8e%98%e6%83%85%e6%8a%a5/" rel="noopener noreferrer" target="_blank">
    高级运算符辅助开源调查：巧用搜索引擎挖掘情报
   </a>
   》；这篇文章中提到的部分对于一般调查来说已经足够。
  </p>
  <p class="graf graf--p">
   但是还有一些深度调查工作需要稍微复杂一些的运算符，并且，
   <strong class="markup--strong markup--p-strong">
    如果您能知道它们所有，就可以更充分地发挥创造力，实现绝佳的搭配。
   </strong>
  </p>
  <p class="graf graf--p">
   本文就是一个完整的列表。
  </p>
  <p class="graf graf--p">
   您不需要记住它们所有，只需记得要使用的时候来这里查看即可。
  </p>
  <p class="graf graf--p">
   IYP是工具箱，不是普通的新闻网站。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6628 jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1.gif?resize=963%2C166&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="166" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1.gif?resize=963%2C166&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="963"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6628" data-recalc-dims="1" height="166" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/1.gif?resize=963%2C166&amp;ssl=1" width="963"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   事实上大多数运算符都很容易记忆；它们就是你脑海中的短命令。
  </p>
  <p class="graf graf--p">
   但是，
   <strong class="markup--strong markup--p-strong">
    要想知道如何有效地使用它们，则是完全不同的事。
   </strong>
  </p>
  <p class="graf graf--p">
   就如大多数SEO都知道这些基础知识，但很少有人真正掌握它们。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    谷歌搜索运算符：完整列表
   </strong>
  </p>
  <p class="graf graf--p">
   您是否知道Google会不断杀死有用的运算符？
  </p>
  <p class="graf graf--p">
   这就是为什么大多数现有的列表都已过时且不准确的原因。
  </p>
  <p class="graf graf--p">
   本指南测试了能找到的所有运算符；也就是说目前为止它们都能用。
  </p>
  <p class="graf graf--p graf--startsWithDoubleQuote">
   “search term”
  </p>
  <p class="graf graf--p">
   强制进行完全匹配搜索。使用此选项可以优化模糊搜索的结果，或在搜索单个单词时排除同义词。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?&amp;q=%22steve+jobs%22" href="https://www.google.com/search?&amp;q=%22steve+jobs%22" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     “steve jobs”
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   OR
  </p>
  <p class="graf graf--p">
   搜索X或Y；这将返回与X或Y或两者相关的结果。注意：（|）运算符也可用于代替“OR”。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Examples:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?&amp;q=jobs+OR+gates" href="https://www.google.com/search?&amp;q=jobs+OR+gates" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     jobs OR gates
    </strong>
   </a>
   /
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?&amp;q=jobs+%7C+gates" href="https://www.google.com/search?&amp;q=jobs+%7C+gates" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     jobs | gates
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   AND
  </p>
  <p class="graf graf--p">
   搜索X和Y；这将仅返回与X和Y相关的结果。注意：对于常规搜索，它实际上并没有太大区别，因为 Google 无论如何都默认为“AND”。但是，当与其他运营商搭配时，它是非常有用的。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example
   </strong>
   :
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?&amp;q=jobs+AND+gates" href="https://www.google.com/search?&amp;q=jobs+AND+gates" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     jobs AND gates
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   –
  </p>
  <p class="graf graf--p">
   排除术语或短语。在我们的示例中，返回的任何页面都与 jobs 有关，但与Apple（公司）无关。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=jobs+-apple" href="https://www.google.com/search?q=jobs+-apple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     jobs -apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   *
  </p>
  <p class="graf graf--p">
   充当通配符，将匹配任何单词或短语。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=%22steve+*+apple" href="https://www.google.com/search?q=%22steve+*+apple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     steve * apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   ()
  </p>
  <p class="graf graf--p">
   将多个术语或搜索运算符分组以控制搜索的执行方式。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=%28ipad+OR+iphone%29+apple" href="https://www.google.com/search?q=%28ipad+OR+iphone%29+apple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     (ipad OR iphone) apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   $
  </p>
  <p class="graf graf--p">
   搜索价格。也适用于欧元（€），但不适用于英镑（£）
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=ipad+%24329" href="https://www.google.com/search?q=ipad+%24329" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     ipad $329
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   define:
  </p>
  <p class="graf graf--p">
   基本上是谷歌内置的字典，以显示单词的含义。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=define%3Aentrepreneur" href="https://www.google.com/search?q=define%3Aentrepreneur" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     define:entrepreneur
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   cache:
  </p>
  <p class="graf graf--p">
   返回网页的最新缓存版本（当然，前提是页面已被编制索引）。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="http://webcache.googleusercontent.com/search?q=cache%3Aapple.com" href="https://webcache.googleusercontent.com/search?q=cache%3Aapple.com" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     cache:apple.com
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   filetype:
  </p>
  <p class="graf graf--p">
   将结果限制为特定文件类型。例如，PDF，DOCX，TXT，PPT等。注意：也可以使用“ext：”，结果相同。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=apple+filetype%3Apdf" href="https://www.google.com/search?q=apple+filetype%3Apdf" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     apple filetype:pdf
    </strong>
   </a>
   /
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=apple+ext%3Apdf" href="https://www.google.com/search?q=apple+ext%3Apdf" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     apple ext:pdf
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   site:
  </p>
  <p class="graf graf--p">
   将搜索结果限制为特定网站。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=site%3Aapple.com" href="https://www.google.com/search?q=site%3Aapple.com" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     site:apple.com
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   related:
  </p>
  <p class="graf graf--p">
   查找与给定域名相关的网站。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=related%3Aapple.com" href="https://www.google.com/search?q=related%3Aapple.com" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     related:apple.com
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   intitle:
  </p>
  <p class="graf graf--p">
   查找标题中包含特定单词（或短语）的页面。在我们的示例中，将返回标题中包含单词“apple”的任何结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=intitle%3Aapple" href="https://www.google.com/search?q=intitle%3Aapple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     intitle:apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   allintitle:
  </p>
  <p class="graf graf--p">
   与“intitle”类似，但只返回包含 title 标签中所有指定单词的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=allintitle%3Aapple+iphone" href="https://www.google.com/search?q=allintitle%3Aapple+iphone" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     allintitle:apple iphone
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   inurl:
  </p>
  <p class="graf graf--p">
   在URL中查找包含特定单词（或短语）的页面。对于此示例，将返回URL中包含单词“apple”的任何结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=inurl%3Aapple" href="https://www.google.com/search?q=inurl%3Aapple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     inurl:apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   allinurl:
  </p>
  <p class="graf graf--p">
   与“inurl”类似，但只返回URL中包含所有指定单词的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=allinurl%3Aapple+iphone" href="https://www.google.com/search?q=allinurl%3Aapple+iphone" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     allinurl:apple iphone
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   intext:
  </p>
  <p class="graf graf--p">
   在内容中的某处查找包含特定单词（或短语）的页面。对于此示例，将返回页面内容中包含单词“apple”的任何结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=intext%3Aapple" href="https://www.google.com/search?q=intext%3Aapple" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     intext:apple
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   allintext:
  </p>
  <p class="graf graf--p">
   与“intext”类似，但只返回在页面中包含所有指定单词的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=allintext%3Aapple+iphone" href="https://www.google.com/search?q=allintext%3Aapple+iphone" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     allintext:apple iphone
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   AROUND(X)
  </p>
  <p class="graf graf--p">
   在相距X个单词的位置上包含两个制定单词或短语的页面。对于下面这个例子，意味着单词“apple”和“iphone”必须出现在内容中，并且相隔不超过四个单词。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=apple+AROUND(4)" href="https://www.google.com/search?q=apple+AROUND%284%29" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     apple AROUND(4) iphone
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   weather:
  </p>
  <p class="graf graf--p">
   查找特定位置的天气。这会显示在天气片段中，但也会返回其他“天气”网站的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=weather%3Asan+francisco" href="https://www.google.com/search?q=weather%3Asan+francisco" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     weather:san francisco
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   stocks:
  </p>
  <p class="graf graf--p">
   查看特定股票代码的股票信息（即价格等）。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=stocks%3Aaapl" href="https://www.google.com/search?q=stocks%3Aaapl" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     stocks:aapl
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   map:
  </p>
  <p class="graf graf--p">
   强制 Google 显示地理位置搜索的地图结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=map%3Asilicon+valley" href="https://www.google.com/search?q=map%3Asilicon+valley" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     map:silicon valley
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   movie:
  </p>
  <p class="graf graf--p">
   查找有关特定电影的信息。如果电影放映当前显示在您附近，也会能找到电影放映时间。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=movie%3Asteve+jobs" href="https://www.google.com/search?q=movie%3Asteve+jobs" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     movie:steve jobs
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   in
  </p>
  <p class="graf graf--p">
   将一个单位转换为另一个。适用于货币、重量、温度等。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=%24329+in+GBP" href="https://www.google.com/search?q=%24329+in+GBP" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     $329 in GBP
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   source:
  </p>
  <p class="graf graf--p">
   查找 Google 新闻中某个来源的新闻结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=apple+source%3Athe_verge&amp;tbm=nws" href="https://www.google.com/search?q=apple+source%3Athe_verge&amp;tbm=nws" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     apple source:the_verge
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   _（下划线）
  </p>
  <p class="graf graf--p">
   不完全是搜索运算符，充当自动填充的通配符。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example: apple CEO _ jobs
   </strong>
  </p>
  <p class="graf graf--p">
   #..#
  </p>
  <p class="graf graf--p">
   搜索一系列数字。在下面的示例中，将返回2010–2014年间与“WWDC视频”相关的搜索，但不会返回2015年及以后的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=wwdc+video+2010..2014" href="https://www.google.com/search?q=wwdc+video+2010..2014" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     wwdc video 2010..2014
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   inanchor:
  </p>
  <p class="graf graf--p">
   查找特定锚文本链接的页面。对于此示例，将返回锚文本中包含“apple”或“iphone”的入站链接的任何结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    Example:
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://www.google.com/search?q=inanchor%3Aapple+iphone" href="https://www.google.com/search?q=inanchor%3Aapple+iphone" rel="noopener noreferrer" target="_blank">
    <strong class="markup--strong markup--p-strong">
     inanchor:apple iphone
    </strong>
   </a>
  </p>
  <p class="graf graf--p">
   文字看累了？看一个简单的视频轻松一下：
  </p>
  <p>
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/yWLD9139Ipc" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    ⚠️安全第一！
   </strong>
  </p>
  <p class="graf graf--p">
   如果您正在考虑使用 Google dorking 作为调查技术，那么在开始之前就需要采取一些预防措施。
  </p>
  <p class="graf graf--p">
   Google dorking 操作需要了解涉及访问页面和文件的法律问题，即使它们位于公共服务器上。
  </p>
  <p class="graf graf--p">
   ⚠️虽然您在大多数情况下可以随意使用搜索引擎，但根据模糊和过度的所谓
   <a class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Computer_Fraud_and_Abuse_Act" href="https://en.wikipedia.org/wiki/Computer_Fraud_and_Abuse_Act" rel="noopener noreferrer" target="_blank">
    计算机欺诈和滥用法案
   </a>
   ，访问某些网页或从那里下载文件在某些​​情况下会被起诉，尤其是在美国。
  </p>
  <p class="graf graf--p">
   ⚠️此外，由于搜索提供商和政府会无限期地监控和存储搜索查询，因此您的搜索可能会被记录、被识别、甚至可能在将来被用于对付您（“第四公民”的导演 Laura Poitras 就是因为谷歌搜索被抓住的，从此长期遭受当局的监控骚扰和恐吓）
  </p>
  <p class="graf graf--p">
   为了保护您的调查，我们建议您在任何搜索引擎上使用 Tor 浏览器或 Tails（下载在移动硬盘上很容易使用，在这里看到《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%E8%BF%BD%E6%B1%82%E6%AD%A3%E4%B9%89%E7%9A%84%E4%BA%BA%E5%BA%94%E8%AF%A5%E5%8A%A0%E5%BC%BA%E5%8F%8D%E4%BE%A6%E6%8A%80%E5%B7%A7%E2%9D%97%EF%B8%8F-%E6%B4%8B%E8%91%B1%E5%A4%B4%E4%BC%9A/" href="https://www.iyouport.org/%E8%BF%BD%E6%B1%82%E6%AD%A3%E4%B9%89%E7%9A%84%E4%BA%BA%E5%BA%94%E8%AF%A5%E5%8A%A0%E5%BC%BA%E5%8F%8D%E4%BE%A6%E6%8A%80%E5%B7%A7%E2%9D%97%EF%B8%8F-%E6%B4%8B%E8%91%B1%E5%A4%B4%E4%BC%9A/" rel="noopener noreferrer" target="_blank">
    追求正义的人应该加强反侦技巧❗️ — — 洋葱头会让谁流泪（二）
   </a>
   》）。
  </p>
  <p class="graf graf--p">
   Tor掩盖了您的互联网流量，将您计算机的可识别性信息与您正在访问的网页分开。
  </p>
  <p class="graf graf--p">
   虽然 Tor 浏览器多年来变得更容易使用了，但它有时会使搜索更加困难。
  </p>
  <p class="graf graf--p">
   Google 和其他搜索引擎可能会要求您解决CAPTCHA，以证明您是人类。
  </p>
  <p class="graf graf--p">
   而且谷歌会怀疑您的行为，有些时候甚至完全阻止您继续使用搜索引擎。
  </p>
  <p class="graf graf--p">
   在这种情况下，您可以尝试更改线路，直到连接到未列入黑名单的出口节点。为此，请单击地址栏左侧的站点信息图标（“ⓘ”），然后选择“New Circuit for this Site”，如下所示。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6629 jetpack-lazy-image" data-lazy-sizes="(max-width: 999px) 100vw, 999px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=999%2C888&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?w=999&amp;ssl=1 999w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=300%2C267&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=768%2C683&amp;ssl=1 768w" data-recalc-dims="1" height="888" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=999%2C888&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="999"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6629" data-recalc-dims="1" height="888" sizes="(max-width: 999px) 100vw, 999px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=999%2C888&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?w=999&amp;ssl=1 999w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=300%2C267&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/07/2-11.png?resize=768%2C683&amp;ssl=1 768w" width="999"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   ⚠️请注意，根据您所在的国家/地区，使用Tor可能会将您的在线活动标记为可疑。请事先了解相关法律。
  </p>
  <p class="graf graf--p">
   除非您是高级攻击的特定目标（这种情况极少），否则Tor浏览器在防止您的身份泄漏方面相当有效；但是无法掩盖您正在使用Tor的事实。
  </p>
  <p class="graf graf--p">
   ⚠️这是您在使用 Tor 时必须愿意承担的风险。但是您也可以通过
   <strong class="markup--strong markup--p-strong">
    将Tor浏览器配置为使用“obfs4”网桥在某种程度上降低风险
   </strong>
   。
  </p>
  <p class="graf graf--p">
   💡使用网桥可在一定程度上隐藏您连接到Tor服务器的事实，使用“obfs4”则可以在一定程度上使该连接看起来像Tor流量以外的其他东西。
  </p>
  <p class="graf graf--p">
   如果您不能使用Tor，另一种选择是安全的VPN，虽然在保持匿名性方面效果较差。相关《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e4%bb%80%e4%b9%88%e6%97%b6%e5%80%99%e4%bd%a0%e9%9c%80%e8%a6%81vpn%ef%bc%9f/" href="https://www.iyouport.org/%e4%bb%80%e4%b9%88%e6%97%b6%e5%80%99%e4%bd%a0%e9%9c%80%e8%a6%81vpn%ef%bc%9f/" rel="noopener noreferrer" target="_blank">
    什么时候你需要VPN？
   </a>
   》《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/vpn%ef%bc%9f%e5%85%a5%e4%be%b5%ef%bc%9f%e6%af%94%e7%89%b9%e5%b8%81%ef%bc%9f%e4%bf%84%e7%bd%97%e6%96%af%e6%94%bb%e5%87%bb%e8%80%85%e7%a9%b6%e7%ab%9f%e6%98%af%e6%80%8e%e4%b9%88%e8%a2%ab%e5%8f%91/" href="https://www.iyouport.org/vpn%ef%bc%9f%e5%85%a5%e4%be%b5%ef%bc%9f%e6%af%94%e7%89%b9%e5%b8%81%ef%bc%9f%e4%bf%84%e7%bd%97%e6%96%af%e6%94%bb%e5%87%bb%e8%80%85%e7%a9%b6%e7%ab%9f%e6%98%af%e6%80%8e%e4%b9%88%e8%a2%ab%e5%8f%91/" rel="noopener noreferrer" target="_blank">
    检测您的VPN是否安全
   </a>
   》《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e5%ae%89%e5%85%a8%e6%89%8b%e5%86%8c%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e4%bd%a0%e9%9c%80%e8%a6%81%e7%9a%84%e5%87%a0%e4%b9%8e%e6%89%80%e6%9c%89%e5%ae%89%e5%85%a8%e4%b8%8a%e7%bd%91%e5%b7%a5%e5%85%b7/" href="https://www.iyouport.org/%e5%ae%89%e5%85%a8%e6%89%8b%e5%86%8c%ef%bc%9a%e8%bf%99%e9%87%8c%e6%98%af%e4%bd%a0%e9%9c%80%e8%a6%81%e7%9a%84%e5%87%a0%e4%b9%8e%e6%89%80%e6%9c%89%e5%ae%89%e5%85%a8%e4%b8%8a%e7%bd%91%e5%b7%a5%e5%85%b7/" rel="noopener noreferrer" target="_blank">
    值得推荐的VPN，以及其他安全工具
   </a>
   》。
  </p>
  <p class="graf graf--p">
   您还可以使用 DuckDuckGo 等类似倾向于保护隐私的搜索引擎来实施高级运算符搜索。
  </p>
  <p class="graf graf--p">
   注：您输入的术语的顺序（包括过滤器）在某些搜索引擎上很重要，因此您可以尝试调整不同的组合以获得更准确或更相关的结果。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    下面是一个小例子：在美国国土安全部网站上查找预算
   </strong>
  </p>
  <p class="graf graf--p">
   这个 dork 将为您带来包含“budget”一词的所有公开的Excel电子表格：
  </p>
  <pre class="graf graf--p">budget filetype:xls</pre>
  <p class="graf graf--p graf--startsWithSingleQuote">
   ‘filetype：’运算符不会自动识别相似文件格式的不同版本（即 doc vs. odt 或xlsx 和 csv），因此对于每种格式都必须单独进行：
  </p>
  <pre class="graf graf--p"><code>budget filetype:xlsx OR filetype:csv</code></pre>
  <p class="graf graf--p">
   这个dork将在NASA网站上返回PDF文件：
  </p>
  <pre class="graf graf--p">site:nasa.gov filetype:pdf</pre>
  <p class="graf graf--p">
   下面这个将在美国国土安全部网站上返回包含“budget”一词的.xlsx 表格：
  </p>
  <pre class="graf graf--p">budget site:dhs.gov filetype:xls</pre>
  <p class="graf graf--p">
   在各种搜索引擎中执行的查询将返回不同的结果，下面对比一下。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在谷歌 ——
   </strong>
  </p>
  <p class="graf graf--p">
   是的你必须先接受愚蠢的人类检查。
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6630 jetpack-lazy-image" data-lazy-sizes="(max-width: 1000px) 100vw, 1000px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=1000%2C709&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=768%2C545&amp;ssl=1 768w" data-recalc-dims="1" height="709" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=1000%2C709&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1000"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6630" data-recalc-dims="1" height="709" sizes="(max-width: 1000px) 100vw, 1000px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=1000%2C709&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?w=1000&amp;ssl=1 1000w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=300%2C213&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/3-11.png?resize=768%2C545&amp;ssl=1 768w" width="1000"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6631 jetpack-lazy-image" data-lazy-sizes="(max-width: 998px) 100vw, 998px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=998%2C856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?w=998&amp;ssl=1 998w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=300%2C257&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=768%2C659&amp;ssl=1 768w" data-recalc-dims="1" height="856" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=998%2C856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="998"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6631" data-recalc-dims="1" height="856" sizes="(max-width: 998px) 100vw, 998px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=998%2C856&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?w=998&amp;ssl=1 998w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=300%2C257&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/4-7.png?resize=768%2C659&amp;ssl=1 768w" width="998"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Bing ——
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6632 jetpack-lazy-image" data-lazy-sizes="(max-width: 998px) 100vw, 998px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=998%2C856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=768%2C659&amp;ssl=1 768w" data-recalc-dims="1" height="856" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=998%2C856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="998"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6632" data-recalc-dims="1" height="856" sizes="(max-width: 998px) 100vw, 998px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=998%2C856&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/5-6.png?resize=768%2C659&amp;ssl=1 768w" width="998"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 Yahoo ——
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6633 jetpack-lazy-image" data-lazy-sizes="(max-width: 998px) 100vw, 998px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=998%2C856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=768%2C659&amp;ssl=1 768w" data-recalc-dims="1" height="856" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=998%2C856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="998"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6633" data-recalc-dims="1" height="856" sizes="(max-width: 998px) 100vw, 998px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=998%2C856&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/6-6.png?resize=768%2C659&amp;ssl=1 768w" width="998"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    在 DuckDuckGo ——
   </strong>
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6634 jetpack-lazy-image" data-lazy-sizes="(max-width: 998px) 100vw, 998px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=998%2C856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=768%2C659&amp;ssl=1 768w" data-recalc-dims="1" height="856" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=998%2C856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="998"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6634" data-recalc-dims="1" height="856" sizes="(max-width: 998px) 100vw, 998px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=998%2C856&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?w=998&amp;ssl=1 998w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=300%2C257&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/07/7-5.png?resize=768%2C659&amp;ssl=1 768w" width="998"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   如您所见，搜索引擎之间的结果各不相同。于是，在从事一项调查中如果您在某一个搜索引擎上没有找到理想的结果，那么就换一个搜索引擎试试。
  </p>
  <p class="graf graf--p">
   以下是
   <strong class="markup--strong markup--p-strong">
    简单的汇总表格
   </strong>
   ，您可以参考：
  </p>
  <p class="graf graf--p">
   <img alt="" class="aligncenter size-full wp-image-6635 jetpack-lazy-image" data-lazy-sizes="(max-width: 1080px) 100vw, 1080px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=1080%2C1856&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?w=1080&amp;ssl=1 1080w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=175%2C300&amp;ssl=1 175w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=768%2C1320&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=596%2C1024&amp;ssl=1 596w" data-recalc-dims="1" height="1856" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=1080%2C1856&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1080"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-6635" data-recalc-dims="1" height="1856" sizes="(max-width: 1080px) 100vw, 1080px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=1080%2C1856&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?w=1080&amp;ssl=1 1080w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=175%2C300&amp;ssl=1 175w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=768%2C1320&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/07/8.jpeg?resize=596%2C1024&amp;ssl=1 596w" width="1080"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    除了开源调查之外 dorking 作为防御的使用方式
   </strong>
  </p>
  <p class="graf graf--p">
   💡您可以使用 dorking 来保护自己的数据并保护您负责的网站。我们称之为“防御性 dorking”，它通常采用以下两种形式之一：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    检查您管理的在线服务中的安全漏洞；
   </li>
   <li class="graf graf--li">
    无论您是否管理该网站，都可以在网站上查看有关您自己或其他人无意中泄漏的敏感信息。
   </li>
  </ul>
  <p class="graf graf--p">
   这里主要关注后一种可能性 —— 因为泄漏信息的情况非常普遍。（在制作不同在线身份以掩盖真实身份之前您必需先做一个全面清理，dorking 是查找需要清理的内容的好办法之一。延伸：《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" href="https://www.iyouport.org/%e8%a7%92%e8%89%b2%e6%89%ae%e6%bc%94%ef%bc%9a%e8%a1%8c%e5%8a%a8%e8%80%85%e5%88%9a%e9%9c%80video/" rel="noopener noreferrer" target="_blank">
    如何制作完全不同的在线身份
   </a>
   》《
   <a class="markup--anchor markup--p-anchor" data-href="https://www.iyouport.org/%e5%88%86%e8%a3%82%e4%ba%ba%e6%a0%bc%e7%9a%84%e9%ad%85%e5%8a%9b/" href="https://www.iyouport.org/%e5%88%86%e8%a3%82%e4%ba%ba%e6%a0%bc%e7%9a%84%e9%ad%85%e5%8a%9b/" rel="noopener noreferrer" target="_blank">
    如何切分敏感身份以保护行动自由
   </a>
   》）
  </p>
  <p class="graf graf--p">
   谷歌黑客数据库建议您使用不同的关键字
   <code>
    site:yoursite.org
   </code>
   过滤器，以识别出某些漏洞。
  </p>
  <p class="graf graf--p">
   虽然这些搜索可以帮助攻击者找到易受攻击的服务，但它们也可以帮助管理员保护自己 —— ⚠️关键在于谁的行动更快。
  </p>
  <p class="graf graf--p">
   我们建议您在尝试之前与您要测试的服务的技术管理员协调（当然除非您自己就是管理员）。
  </p>
  <p class="graf graf--p">
   以下是一些例子。
  </p>
  <p class="graf graf--p">
   您可以在PDF文档中搜索您的姓名：
  </p>
  <pre class="graf graf--p"><code>&lt;your name&gt; filetype:pdf</code></pre>
  <p class="graf graf--p">
   还可以使用其他可能相关的文件类型重复此搜索，例如 xls，xlsx，doc，docx，ods 或 odt。您甚至可以在一次搜索中查找多种不同的文件类型：
  </p>
  <pre class="graf graf--p"><code>&lt;your name&gt; filetype:pdf OR filetype:xlsx OR filetype:docx</code></pre>
  <p class="graf graf--p">
   还可以像下面这样。（有关您选择的搜索引擎是使用 intext: 还是 inbody: 请参阅上面表格）
  </p>
  <pre class="graf graf--p">&lt;your name&gt; intext:”&lt;personal information like a phone number or address&gt;”</pre>
  <p class="graf graf--p">
   ⚠️但是要小心！如果您搜索自己的姓名或地址、身份证号，您实际上是在向运行搜索引擎的人提供这些敏感信息。即使是Tor浏览器也无法保护您免受此类隐私泄露。
  </p>
  <p class="graf graf--p">
   您还可以搜索与服务器的IP地址关联的信息：
  </p>
  <pre class="graf graf--p"><code>ip:[your server’s IP address] filetype:pdf</code></pre>
  <p class="graf graf--p">
   还有更多示例，请查看
   <a class="markup--anchor markup--p-anchor" data-href="https://www.exploit-db.com/google-hacking-database?category=8" href="https://www.exploit-db.com/google-hacking-database?category=8" rel="noopener noreferrer" target="_blank">
    漏洞利用数据库的列表
   </a>
   。
  </p>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    重要示例：查找密码
   </strong>
  </p>
  <p class="graf graf--p">
   搜索登录名和密码信息可用作防御性 Dorking。
  </p>
  <p class="graf graf--p">
   密码有时会被存储在Web服务器上的可公开访问的文档中。Dorking 是识别此类安全漏洞的一种方法。
  </p>
  <p class="graf graf--p">
   尝试此操作的最简单方法是将搜索限制在您管理的网站或由您可以寻求许可的人管理的网站上。在不同的搜索引擎中测试以下dorks：
  </p>
  <pre class="graf graf--p">password filetype:doc site:yoursite.org

password filetype:docx site:yoursite.org

password filetype:pdf site:yoursite.org

<span style="font-family: georgia, palatino, serif;"><code>password filetype:xls site:yoursite.org</code></span></pre>
  <p class="graf graf--p">
   ⚠️请注意这不是游戏。您必需要做到以下几点：
  </p>
  <ul class="postList">
   <li class="graf graf--li">
    不要共享任何查看到或下载到的密码，
   </li>
   <li class="graf graf--li">
    加密可能下载到的任何文件，
   </li>
   <li class="graf graf--li">
    不要测试或使用查找到的任何密码，
   </li>
   <li class="graf graf--li">
    立刻通知可能找到公开密码列表的任何网站的管理员。
   </li>
  </ul>
  <p class="graf graf--p">
   <strong class="markup--strong markup--p-strong">
    总
   </strong>
  </p>
  <p class="graf graf--p">
   谷歌 Dorks 列表从2002年被挖掘以来迅速成长为一个大型的查询词典，最终在2004年被组织成原始的谷歌黑客数据库（GHDB）。
  </p>
  <p class="graf graf--p">
   如上述的展示和以前我们的演示，它可以做很多事 —— 不仅可以支持深度调查，也能作为防御保护隐私。对于后者，
   <strong class="markup--strong markup--p-strong">
    您需要在被骇客发觉之前主动清理掉对您来说致命的一切数据
   </strong>
   。⚪️
  </p>
  <div id="atatags-1611829871-5f3ec0e4ad014">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-6627" href="https://www.iyouport.org/%e6%94%bb%e9%98%b2%e7%9a%86%e5%8f%af%e7%94%a8%ef%bc%9agoogledorking-%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e5%ae%8c%e6%95%b4%e5%88%97%e8%a1%a8/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-6627" href="https://www.iyouport.org/%e6%94%bb%e9%98%b2%e7%9a%86%e5%8f%af%e7%94%a8%ef%bc%9agoogledorking-%e9%ab%98%e7%ba%a7%e8%bf%90%e7%ae%97%e7%ac%a6%e5%ae%8c%e6%95%b4%e5%88%97%e8%a1%a8/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Facebook 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-end">
      </li>
     </ul>
    </div>
   </div>
  </div>
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-6627-5f3ec0e4ada90" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=6627&amp;origin=www.iyouport.org&amp;obj_id=161182987-6627-5f3ec0e4ada90" id="like-post-wrapper-161182987-6627-5f3ec0e4ada90">
   <h3 class="sd-title">
    赞过：
   </h3>
   <div class="likes-widget-placeholder post-likes-widget-placeholder" style="height: 55px;">
    <span class="button">
     <span>
      赞
     </span>
    </span>
    <span class="loading">
     正在加载……
    </span>
   </div>
   <span class="sd-text-color">
   </span>
   <a class="sd-link-color">
   </a>
  </div>
  <div class="jp-relatedposts" id="jp-relatedposts">
   <h3 class="jp-relatedposts-headline">
    <em>
     相关
    </em>
   </h3>
  </div>
 </div>
 <div class="entry-footer">
  <ul class="post-tags light-text">
   <li>
    Tagged
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/googledorking/" rel="tag">
     GoogleDorking
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/osint/" rel="tag">
     OSINT
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technique/" rel="tag">
     technique
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/technology/" rel="tag">
     Technology
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/tools/" rel="tag">
     tools
    </a>
   </li>
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2019-11-07T00:04:26+08:00">
    2019年11月7日
   </time>
   <time class="updated" datetime="2019-09-30T11:26:59+08:00">
    2019年9月30日
   </time>
  </div>
 </div>
</article>

