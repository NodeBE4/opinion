---
layout: post
title: "对特朗普推文的情感分析: Python 🐍 - iYouPort"
date: 2018-12-03T17:46:27+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%af%b9%e7%89%b9%e6%9c%97%e6%99%ae%e6%8e%a8%e6%96%87%e7%9a%84%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90-python-%f0%9f%90%8d/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-4761 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint tag-osint tag-technique tag-technology" id="post-4761">
 <header class="entry-header">
  <h1 class="entry-title">
   对特朗普推文的情感分析: Python 🐍
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
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-12-04T01:46:27+08:00">
    2018年12月4日
   </time>
   <time class="updated" datetime="2019-06-01T01:54:43+08:00">
    2019年6月1日
   </time>
  </span>
  <span class="word-count">
   5 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       的确可以从一个人的推文中获得大量数据。本文仅基于昨天发布的文章话题做一个延伸演示，以特朗普为例提取推文数据以分析情感状态。尤其是希望介绍一些工具，期待你的创意挖掘
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-4762 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1100%2C592&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?w=1170&amp;ssl=1 1170w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=300%2C162&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=768%2C414&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1024%2C551&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1100%2C592&amp;ssl=1 1100w" data-recalc-dims="1" height="592" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1100%2C592&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-4762" data-recalc-dims="1" height="592" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1100%2C592&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?w=1170&amp;ssl=1 1170w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=300%2C162&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=768%2C414&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1024%2C551&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-141.png?resize=1100%2C592&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <div class="section-inner sectionLayout--insetColumn">
   <p class="graf graf--p graf-after--figure" id="2dbd">
    <strong class="markup--strong markup--p-strong">
     — — 描述 — —
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="8515">
    在本文中我们将：
   </p>
   <ol class="postList">
    <li class="graf graf--li graf-after--p" id="b52d">
     使用 tweepy 提取 twitter 数据，并学习如何使用 pandas 处理数据；
    </li>
    <li class="graf graf--li graf-after--li" id="fdb9">
     用 numpy，matplotlib 和 seaborn 做一些基本的统计和可视化；
    </li>
    <li class="graf graf--li graf-after--li" id="dc80">
     使用 textblob 对提取的（特朗普）推文进行情绪分析。
    </li>
   </ol>
   <p class="graf graf--p graf-after--li" id="7867">
    事实上并不复杂。
   </p>
   <p class="graf graf--p graf-after--p" id="c0d5">
    <strong class="markup--strong markup--p-strong">
     我们需要什么？
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="1a6e">
    首先，我们需要安装
    <a class="markup--anchor markup--p-anchor" data-href="https://www.python.org/downloads/" href="https://www.python.org/downloads/" rel="noopener nofollow noreferrer" target="_blank">
     Python
    </a>
    。
   </p>
   <p class="graf graf--p graf-after--p" id="5c6d">
    几乎可以肯定所有代码都可以在 Python 2.7 中运行，但下文将使用的是 Python 3.6。强烈建议安装
    <a class="markup--anchor markup--p-anchor" data-href="https://www.anaconda.com/download/" href="https://www.anaconda.com/download/" rel="noopener nofollow noreferrer" target="_blank">
     Anaconda
    </a>
    ，它是一个非常有用的 Python 包管理平台，内置了很多有用的工具，例如
    <a class="markup--anchor markup--p-anchor" data-href="http://jupyter.org/" href="https://jupyter.org/" rel="noopener nofollow noreferrer" target="_blank">
     Jupyter Notebooks
    </a>
    。我会用 Jupyter Notebook 讲解本文的代码，如果你在用其它的文本编辑器，也能跑一些简单的脚本，只是需要做些适配（不难）。
   </p>
   <p class="graf graf--p graf-after--p" id="fa48">
    <strong class="markup--strong markup--p-strong">
     我们需要以下这些玩意：
    </strong>
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="c175">
     <a class="markup--anchor markup--li-anchor" data-href="http://www.numpy.org/" href="https://www.numpy.org/" rel="noopener nofollow noreferrer" target="_blank">
      NumPy
     </a>
     ：这是使用 Python 进行科学计算的基础包。除了明显的科学用途外，NumPy 还可以用作通用数据的高效多维容器。
    </li>
    <li class="graf graf--li graf-after--li" id="bd33">
     <a class="markup--anchor markup--li-anchor" data-href="http://pandas.pydata.org/" href="https://pandas.pydata.org/" rel="nofollow noopener noreferrer" target="_blank">
      Pandas
     </a>
     : 这是一个开源库，提供高性能，易于使用的数据结构和数据分析工具。
    </li>
    <li class="graf graf--li graf-after--li" id="4f89">
     <a class="markup--anchor markup--li-anchor" data-href="http://matplotlib.org/" href="https://matplotlib.org/" rel="noopener nofollow noreferrer" target="_blank">
      Matplotlib
     </a>
     ：这是一个 Python 2D 绘图库，可以生成各种硬拷贝格式和跨平台交互式环境的出版物质量数据。
    </li>
    <li class="graf graf--li graf-after--li" id="d0e1">
     <a class="markup--anchor markup--li-anchor" data-href="https://seaborn.pydata.org/" href="https://seaborn.pydata.org/" rel="noopener nofollow noreferrer" target="_blank">
      Seaborn
     </a>
     ：这是一个基于 matplotlib 的 Python 可视化库。它提供了一个高级界面，用于绘制有吸引力的统计图形。
    </li>
    <li class="graf graf--li graf-after--li" id="ac1a">
     <a class="markup--anchor markup--li-anchor" data-href="https://textblob.readthedocs.io/" href="https://textblob.readthedocs.io/" rel="noopener nofollow noreferrer" target="_blank">
      Textblob
     </a>
     ：这是一个用于处理文本数据的 Python 库。它为潜入常见的自然语言处理（NLP）任务提供了一个简单的 API。
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="c613">
    以上环境依赖都通过 pip 安装。待安装完所有软件包后，开始写代码。
   </p>
   <p class="graf graf--p graf-after--p" id="64ec">
    现在开始！
   </p>
   <h3 class="graf graf--h3 graf-after--p" id="2054">
    1、提取 twitter 数据（ tweepy + pandas ）
   </h3>
   <p class="graf graf--p graf-after--h3" id="91cf">
    <strong class="markup--strong markup--p-strong">
     1.1 导入库
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="be14">
    这将是全部过程中最困难的部分……😥
   </p>
   <p class="graf graf--p graf-after--p" id="d5f1">
    开玩笑啦，显然不会！将如下代码复制到你的 Jupyter Notebook 上就行：
   </p>
   <pre class="graf graf--pre graf-after--p" id="b498"># General:
import tweepy           # To consume Twitter's API
import pandas as pd     # To handle data
import numpy as np      # For number computing</pre>
   <pre class="graf graf--pre graf-after--pre" id="4d63"># For plotting and visualization:
from IPython.display import display
import matplotlib.pyplot as plt
import seaborn as sns
%matplotlib inline</pre>
   <p class="graf graf--p graf-after--pre" id="c11c">
    很好！我们现在可以运行这个代码单元并转到下一小节。
   </p>
   <p class="graf graf--p graf-after--p" id="6906">
    <strong class="markup--strong markup--p-strong">
     1.2 创建一个 Twitter 应用
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="7879">
    为了提取推文以进行后验分析，需要登录我们的推特开发者账号，并创建一个应用。进行这项操作的网站地址是：
    <a class="markup--anchor markup--p-anchor" data-href="https://apps.twitter.com/" href="https://apps.twitter.com/" rel="noreferrer noopener nofollow" target="_blank">
     https://apps.twitter.com/
    </a>
    没有账号的话，就注册一个。
   </p>
   <p class="graf graf--p graf-after--p" id="ad0e">
    从我们正在创建的这个应用程序中，将在名为 credentials.py的脚本中保存以下信息：
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="72d8">
     消费方密钥 Consumer Key (API Key)
    </li>
    <li class="graf graf--li graf-after--li" id="71c5">
     消费方机密 Consumer Secret (API Secret)
    </li>
    <li class="graf graf--li graf-after--li" id="9789">
     访问令牌密钥 Access Token
    </li>
    <li class="graf graf--li graf-after--li" id="0323">
     访问令牌机密 Access Token Secret
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="4d3f">
    此操作脚本示例如下：
   </p>
   <pre class="graf graf--pre graf-after--p" id="1bd4"># Twitter App access keys for @user</pre>
   <pre class="graf graf--pre graf-after--pre" id="79e2"># Consume:
CONSUMER_KEY    = ''
CONSUMER_SECRET = ''</pre>
   <pre class="graf graf--pre graf-after--pre" id="b3ec"># Access:
ACCESS_TOKEN  = ''
ACCESS_SECRET = ''</pre>
   <p class="graf graf--p graf-after--pre" id="f35e">
    创建这个额外文件的原因是只想导出这些变量的值，但在我们的主代码（Notebook）中看不见。我们现在可以使用 Twitter 的 API。为此，我们将创建一个允许我们进行密钥身份验证的函数。我们将在另一个代码单元中添加此函数，然后运行它：
   </p>
   <pre class="graf graf--pre graf-after--p" id="c3be"># We import our access keys:
from credentials import *    # This will allow us to use the keys as variables</pre>
   <pre class="graf graf--pre graf-after--pre" id="f01d"># API's setup:
def twitter_setup():
    """
    Utility function to setup the Twitter's API
    with our access keys provided.
    """
    # Authentication and access using keys:
    auth = tweepy.OAuthHandler(CONSUMER_KEY, CONSUMER_SECRET)
    auth.set_access_token(ACCESS_TOKEN, ACCESS_SECRET)</pre>
   <pre class="graf graf--pre graf-after--pre" id="5a19">    # Return API with authentication:
    api = tweepy.API(auth)
    return api</pre>
   <p class="graf graf--p graf-after--pre" id="5463">
    到目前为止一切都是这么的容易。事实上的确就是这样。下面开始提取推文。
   </p>
   <p class="graf graf--p graf-after--p" id="7149">
    <strong class="markup--strong markup--p-strong">
     1.3 提取推文
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="ea9d">
    现在，我们创建一个函数来设置推特 API，可以用该函数创建一个“extractor”对象。然后我们会使用 Tweepy 的函数 extractor.user_timeline(screen_name, count) 从 screen_name 的用户中提取 count 数量的推文。
   </p>
   <p class="graf graf--p graf-after--p" id="d381">
    正如标题中提到的，本文选择的用户是 @realDonaldTrump，是的，为了有趣。
   </p>
   <p class="graf graf--p graf-after--p" id="be45">
    提取 Twitter 数据的方法如下：
   </p>
   <pre class="graf graf--pre graf-after--p" id="c82a"># We create an extractor object:
extractor = twitter_setup()</pre>
   <pre class="graf graf--pre graf-after--pre" id="54d9"># We create a tweet list as follows:
tweets = extractor.user_timeline(screen_name="realDonaldTrump", count=200)
print("Number of tweets extracted: {}.\n".format(len(tweets)))</pre>
   <pre class="graf graf--pre graf-after--pre" id="e7b7"># We print the most recent 5 tweets:
print("5 recent tweets:\n")
for tweet in tweets[:5]:
    print(tweet.text)
    print()</pre>
   <p class="graf graf--p graf-after--pre" id="cbae">
    有了这个，我们将得到类似于这样的输出，能够将输出与 Twitter 账户进行比较（以检查是否保持一致）：
   </p>
   <p class="graf graf--p graf-after--p" id="6d15">
    Number of tweets extracted: 200.
    <br/>
    5 recent tweets:
    <br/>
    On behalf of
    <a class="markup--anchor markup--p-anchor" data-href="http://twitter.com/FLOTUS" href="https://twitter.com/FLOTUS" rel="nofollow noopener noreferrer" target="_blank" title="Twitter profile for @FLOTUS">
     @FLOTUS
    </a>
    Melania &amp; myself, THANK YOU for today’s update &amp; GREAT WORK! #SouthernBaptist
    <a class="markup--anchor markup--p-anchor" data-href="http://twitter.com/SendRelief" href="https://twitter.com/SendRelief" rel="nofollow noopener noreferrer" target="_blank" title="Twitter profile for @SendRelief">
     @SendRelief
    </a>
    ,…
    <a class="markup--anchor markup--p-anchor" data-href="https://t.co/4yZCeXCt6n" href="https://t.co/4yZCeXCt6n" rel="nofollow noopener noreferrer" target="_blank">
     https://t.co/4yZCeXCt6n
    </a>
    <br/>
    I will be going to Texas and Louisiana tomorrow with First Lady. Great progress being made! Spending weekend working at White House.
    <br/>
    Stock Market up 5 months in a row!
    <br/>
    ‘President Donald J. Trump Proclaims September 3, 2017, as a National Day of Prayer’ #HurricaneHarvey #PrayForTexas…
    <a class="markup--anchor markup--p-anchor" data-href="https://t.co/tOMfFWwEsN" href="https://t.co/tOMfFWwEsN" rel="nofollow noopener noreferrer" target="_blank">
     https://t.co/tOMfFWwEsN
    </a>
    <br/>
    Texas is healing fast thanks to all of the great men &amp; women who have been working so hard. But still so much to do. Will be back tomorrow!
   </p>
   <p class="graf graf--p graf-after--p" id="ea0d">
    我们现在有提取程序以及提取后的数据，它们在 tweets 变量中列出。必须提到该列表中的每个元素都是一个来自 Tweepy 的 tweet 对象，我们会在下部分学习怎样处理该数据。
   </p>
   <p class="graf graf--p graf-after--p" id="86dd">
    <strong class="markup--strong markup--p-strong">
     1.4 创建（pandas）DataFrame
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="c22e">
    现在有了构建 pandas DataFrame 的初始信息，可以以非常简单的方式处理这些信息。
   </p>
   <p class="graf graf--p graf-after--p" id="1e70">
    IPython 的 display 函数以浅显的方式绘制输出结果，数据帧的 head 模式允许我们可视化数据帧的前5个元素（或作为参数传递的第一个参数）。
   </p>
   <p class="graf graf--p graf-after--p" id="a5f6">
    所以，使用 Python 的列表理解：
   </p>
   <pre class="graf graf--pre graf-after--p" id="e420"># We create a pandas dataframe as follows:
data = pd.DataFrame(data=[tweet.text for tweet in tweets], columns=['Tweets'])</pre>
   <pre class="graf graf--pre graf-after--pre" id="a2cc"># We display the first 10 elements of the dataframe:
display(data.head(10))</pre>
  </div>
  <div class="section-inner sectionLayout--outsetColumn">
   <div class="aspectRatioPlaceholder is-locked">
    <img alt="" class="aligncenter size-full wp-image-4763 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1100%2C839&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?w=1140&amp;ssl=1 1140w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=300%2C229&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=768%2C586&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1024%2C781&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1100%2C839&amp;ssl=1 1100w" data-recalc-dims="1" height="839" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1100%2C839&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4763" data-recalc-dims="1" height="839" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1100%2C839&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?w=1140&amp;ssl=1 1140w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=300%2C229&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=768%2C586&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1024%2C781&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-31.jpeg?resize=1100%2C839&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </div>
  </div>
  <div>
  </div>
  <div>
   现在我们获得了一个数据排列有序的干净图表。
  </div>
  <div>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--p" id="d670">
     一个有趣的地方就是 Tweepy 中 tweets 结构具有的内部方法数量：
    </p>
    <pre class="graf graf--pre graf-after--p" id="d3b0"># Internal methods of a single tweet object:
print(dir(tweets[0]))</pre>
    <p class="graf graf--p graf-after--pre" id="ce9a">
     这将输出以下列表：
    </p>
    <p class="graf graf--p graf-after--p" id="71f3">
     [‘__class__’, ‘__delattr__’, ‘__dict__’, ‘__dir__’, ‘__doc__’, ‘__eq__’, ‘__format__’, ‘__ge__’, ‘__getattribute__’, ‘__getstate__’, ‘__gt__’, ‘__hash__’, ‘__init__’, ‘__init_subclass__’, ‘__le__’, ‘__lt__’, ‘__module__’, ‘__ne__’, ‘__new__’, ‘__reduce__’, ‘__reduce_ex__’, ‘__repr__’, ‘__setattr__’, ‘__sizeof__’, ‘__str__’, ‘__subclasshook__’, ‘__weakref__’, ‘_api’, ‘_json’, ‘author’, ‘contributors’, ‘coordinates’, ‘created_at’, ‘destroy’, ‘entities’, ‘favorite’, ‘favorite_count’, ‘favorited’, ‘geo’, ‘id’, ‘id_str’, ‘in_reply_to_screen_name’, ‘in_reply_to_status_id’, ‘in_reply_to_status_id_str’, ‘in_reply_to_user_id’, ‘in_reply_to_user_id_str’, ‘is_quote_status’, ‘lang’, ‘parse’, ‘parse_list’, ‘place’, ‘possibly_sensitive’, ‘retweet’, ‘retweet_count’, ‘retweeted’, ‘retweets’, ‘source’, ‘source_url’, ‘text’, ‘truncated’, ‘user’]
    </p>
    <p class="graf graf--p graf-after--p" id="37ac">
     这里有趣的部分是单个推文中包含的元数据数量。如果我们想要获取创建日期或创建源等数据，就可以使用此属性访问信息。一个例子如下：
    </p>
    <pre class="graf graf--pre graf-after--p" id="2926"># We print info from the first tweet:
print(tweets[0].id)
print(tweets[0].created_at)
print(tweets[0].source)
print(tweets[0].favorite_count)
print(tweets[0].retweet_count)
print(tweets[0].geo)
print(tweets[0].coordinates)
print(tweets[0].entities)</pre>
    <p class="graf graf--p graf-after--pre" id="0512">
     然后获得这样的输出：
    </p>
    <p class="graf graf--p graf-after--p" id="ac86">
     903778130850131970
     <br/>
     2017–09–02 00:34:32
     <br/>
     Twitter for iPhone
     <br/>
     24572
     <br/>
     5585
     <br/>
     None
     <br/>
     None
     <br/>
     {‘hashtags’: [{‘text’: ‘SouthernBaptist’, ‘indices’: [90, 106]}], ‘symbols’: [], ‘user_mentions’: [{‘screen_name’: ‘FLOTUS’, ‘name’: ‘Melania Trump’, ‘id’: 818876014390603776, ‘id_str’: ‘818876014390603776’, ‘indices’: [13, 20]}, {‘screen_name’: ‘sendrelief’, ‘name’: ‘Send Relief’, ‘id’: 3228928584, ‘id_str’: ‘3228928584’, ‘indices’: [107, 118]}], ‘urls’: [{‘url’: ‘
     <a class="markup--anchor markup--p-anchor" data-href="https://t.co/4yZCeXCt6n'" href="https://t.co/4yZCeXCt6n%27" rel="nofollow noopener noreferrer" target="_blank">
      https://t.co/4yZCeXCt6n’
     </a>
     , ‘expanded_url’: ‘
     <a class="markup--anchor markup--p-anchor" data-href="https://twitter.com/i/web/status/903778130850131970'" href="https://twitter.com/i/web/status/903778130850131970%27" rel="nofollow noopener noreferrer" target="_blank">
      https://twitter.com/i/web/status/903778130850131970′
     </a>
     , ‘display_url’: ‘twitter.com/i/web/status/9…’, ‘indices’: [121, 144]}]}
    </p>
    <p class="graf graf--p graf-after--p" id="ee40">
     我们现在能够调用相关数据并将其添加到我们的数据帧中。
    </p>
    <p class="graf graf--p graf-after--p" id="1fd7">
     <strong class="markup--strong markup--p-strong">
      1.5 将相关信息添加到数据帧
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="0e98">
     我们可以看到，通过一条推文就能获得大量的数据。但并非所有这些数据对特定的目标来说总是有用的。在本文的例子中，我们只需要向数据帧中添加一些数据。为此，我们将使用 Pythons 列表理解，只需在方括号之间添加内容名称并分配内容，就可以将新列添加到数据帧中。代码如这样：
    </p>
    <pre class="graf graf--pre graf-after--p" id="cf49"># We add relevant data:
data['len']  = np.array([len(tweet.text) for tweet in tweets])
data['ID']   = np.array([<a class="markup--anchor markup--pre-anchor" data-href="http://tweet.id/" href="http://tweet.id/" rel="noreferrer noopener nofollow" target="_blank">tweet.id</a> for tweet in tweets])
data['Date'] = np.array([tweet.created_at for tweet in tweets])
data['Source'] = np.array([tweet.source for tweet in tweets])
data['Likes']  = np.array([tweet.favorite_count for tweet in tweets])
data['RTs']    = np.array([tweet.retweet_count for tweet in tweets])</pre>
    <p class="graf graf--p graf-after--pre" id="f89c">
     再次显示 dataframe 以查看我们刚才的更改…：
    </p>
    <pre class="graf graf--pre graf-after--p" id="448c"># Display of first 10 elements from dataframe:
display(data.head(10))</pre>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4764 jetpack-lazy-image" data-lazy-sizes="(max-width: 1079px) 100vw, 1079px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=1079%2C1318&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?w=1079&amp;ssl=1 1079w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=246%2C300&amp;ssl=1 246w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=768%2C938&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=838%2C1024&amp;ssl=1 838w" data-recalc-dims="1" height="1318" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=1079%2C1318&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1079"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4764" data-recalc-dims="1" height="1318" sizes="(max-width: 1079px) 100vw, 1079px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=1079%2C1318&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?w=1079&amp;ssl=1 1079w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=246%2C300&amp;ssl=1 246w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=768%2C938&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-32.jpeg?resize=838%2C1024&amp;ssl=1 838w" width="1079"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   现在我们已经以易于处理的有序方式提取和获取了数据，已经准备好进行一些操作以可视化一些图并收集一些统计数据。这篇文章的第一部分已经完成。
  </div>
  <div>
   <h3 class="graf graf--h3 graf-after--p" id="df0f">
    2.可视化和基本统计
   </h3>
   <p class="graf graf--p graf-after--h3" id="80cb">
    <strong class="markup--strong markup--p-strong">
     2.1 平均值和受欢迎程度
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="c013">
    我们首先想要计算一些基本的统计数据，例如所有推文的字符长度的平均值，带有更多点赞和转推等等。
   </p>
   <p class="graf graf--p graf-after--p" id="fb2f">
    只需要添加以下代码。为了获得平均值，使用 numpy：
   </p>
   <pre class="graf graf--pre graf-after--p" id="4bfe"># We extract the mean of lenghts:
mean = np.mean(data['len'])</pre>
   <pre class="graf graf--pre graf-after--pre" id="c4a1">print("The lenght's average in tweets: {}".format(mean))</pre>
   <p class="graf graf--p graf-after--pre" id="ccf4">
    The lenght’s average in tweets: 125.925
   </p>
   <p class="graf graf--p graf-after--p" id="073c">
    为了提取更多数据，还要使用一些 pandas 的功能：
   </p>
   <pre class="graf graf--pre graf-after--p" id="02d9"># We extract the tweet with more FAVs and more RTs:</pre>
   <pre class="graf graf--pre graf-after--pre" id="3834">fav_max = np.max(data['Likes'])
rt_max  = np.max(data['RTs'])</pre>
   <pre class="graf graf--pre graf-after--pre" id="2bd2">fav = data[data.Likes == fav_max].index[0]
rt  = data[data.RTs == rt_max].index[0]</pre>
   <pre class="graf graf--pre graf-after--pre" id="050f"># Max FAVs:
print("The tweet with more likes is: \n{}".format(data['Tweets'][fav]))
print("Number of likes: {}".format(fav_max))
print("{} characters.\n".format(data['len'][fav]))</pre>
   <pre class="graf graf--pre graf-after--pre" id="99b9"># Max RTs:
print("The tweet with more retweets is: \n{}".format(data['Tweets'][rt]))
print("Number of retweets: {}".format(rt_max))
print("{} characters.\n".format(data['len'][rt]))</pre>
   <p class="graf graf--p graf-after--pre" id="d89d">
    The tweet with more likes is:
    <br/>
    The United States condemns the terror attack in Barcelona, Spain, and will do whatever is necessary to help. Be tough &amp; strong, we love you!
    <br/>
    Number of likes: 222205
    <br/>
    144 characters.
    <br/>
    The tweet with more retweets is:
    <br/>
    The United States condemns the terror attack in Barcelona, Spain, and will do whatever is necessary to help. Be tough &amp; strong, we love you!
    <br/>
    Number of retweets: 66099
    <br/>
    144 characters.
   </p>
   <p class="graf graf--p graf-after--p" id="5be5">
    点赞多的推文也是转发多的推文，这似乎很常见，但并不一定是个规律。现在正在做的是使用 Numpy 的 max 函数找出‘likes’列里面的最大点赞数和‘RTs’中的最大转发数，只需寻找两列中每一列里满足最大值条件的索引。由于转发数与点赞数（最大值）相同的推文可能不止一条，我们只需取用找到的第一个结果，所以我们使用 .index[0] 将索引分配给变量 fa 和 rt。要想输出满足条件的推文，我们访问数据的方式和访问矩阵或任何索引对象的方式是一样的。
   </p>
   <p class="graf graf--p graf-after--p" id="b1c1">
    现在已经准备好绘制一些东西了。
   </p>
   <p class="graf graf--p graf-after--p" id="586d">
    <strong class="markup--strong markup--p-strong">
     2.2. Time series
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="81ec">
    Pandas 有自己的时间序列对象。由于我们有一个带有创建日期的整个向量，所以分别按照推文长度、点赞数和转发数来构造数据的时序。
   </p>
   <p class="graf graf--p graf-after--p" id="4e4b">
    方式是这样的：
   </p>
   <pre class="graf graf--pre graf-after--p" id="a02a"># We create time series for data:</pre>
   <pre class="graf graf--pre graf-after--pre" id="c43b">tlen = pd.Series(data=data['len'].values, index=data['Date'])
tfav = pd.Series(data=data['Likes'].values, index=data['Date'])
tret = pd.Series(data=data['RTs'].values, index=data['Date'])</pre>
   <p class="graf graf--p graf-after--pre" id="39ab">
    如果想绘制时间序列，可以使用 Pandas 在对象中的方法。绘制方法如下：
   </p>
   <pre class="graf graf--pre graf-after--p" id="7f1f"># Lenghts along time:
tlen.plot(figsize=(16,4), color='r');</pre>
   <p class="graf graf--p graf-after--pre" id="edf5">
    这将创建以下输出：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4765 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1100%2C317&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?w=1846&amp;ssl=1 1846w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=300%2C86&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=768%2C221&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1024%2C295&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1100%2C317&amp;ssl=1 1100w" data-recalc-dims="1" height="317" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1100%2C317&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4765" data-recalc-dims="1" height="317" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1100%2C317&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?w=1846&amp;ssl=1 1846w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=300%2C86&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=768%2C221&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1024%2C295&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-142.png?resize=1100%2C317&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="d440">
    并在同一图表中绘制出点赞数和转发数对比的方式为：
   </p>
   <pre class="graf graf--pre graf-after--p" id="9d06"># Likes vs retweets visualization:
tfav.plot(figsize=(16,4), label="Likes", legend=True)
tret.plot(figsize=(16,4), label="Retweets", legend=True);</pre>
   <p class="graf graf--p graf-after--pre" id="9c15">
    这将创建以下输出：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4766 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1100%2C306&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?w=1840&amp;ssl=1 1840w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=300%2C83&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=768%2C214&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1024%2C285&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1100%2C306&amp;ssl=1 1100w" data-recalc-dims="1" height="306" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1100%2C306&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4766" data-recalc-dims="1" height="306" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1100%2C306&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?w=1840&amp;ssl=1 1840w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=300%2C83&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=768%2C214&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1024%2C285&amp;ssl=1 1024w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-143.png?resize=1100%2C306&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <p class="graf graf--p graf-after--figure" id="1884">
    <strong class="markup--strong markup--p-strong">
     2.3 饼图绘制来源
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="473b">
    第二部分已经差不多完成了。现在要在饼图中绘制，因为我们意识到并非每条推文都是同一个来源的 (😱🤔)。我们首先清理所有来源：
   </p>
   <pre class="graf graf--pre graf-after--p" id="3a93"><em class="markup--em markup--pre-em"># We obtain all possible sources:</em>
sources = []
<strong class="markup--strong markup--pre-strong">for</strong> source <strong class="markup--strong markup--pre-strong">in</strong> data['Source']:
    <strong class="markup--strong markup--pre-strong">if</strong> source <strong class="markup--strong markup--pre-strong">not</strong> <strong class="markup--strong markup--pre-strong">in</strong> sources:
        sources.append(source)</pre>
   <pre class="graf graf--pre graf-after--pre" id="6b95"><em class="markup--em markup--pre-em"># We print sources list:</em>
print("Creation of content sources:")
<strong class="markup--strong markup--pre-strong">for</strong> source <strong class="markup--strong markup--pre-strong">in</strong> sources:
    print("* {}".format(source))</pre>
   <p class="graf graf--p graf-after--pre" id="18c5">
    通过以下输出，我们意识到基本上特朗普这个 Twitter 帐户有两个来源： Creation of content sources: * Twitter for iPhone * Media Studio
   </p>
   <p class="graf graf--p graf-after--p" id="bfdc">
    我们现在计算每个来源的数量并创建一个饼图。你会注意到这个代码单元不是最优化的…凑合一下吧。
   </p>
   <pre class="graf graf--pre graf-after--p" id="32d3"><em class="markup--em markup--pre-em"># We create a numpy vector mapped to labels:</em>
percent = np.zeros(len(sources))</pre>
   <pre class="graf graf--pre graf-after--pre" id="6f9d"><strong class="markup--strong markup--pre-strong">for</strong> source <strong class="markup--strong markup--pre-strong">in</strong> data['Source']:
    <strong class="markup--strong markup--pre-strong">for</strong> index <strong class="markup--strong markup--pre-strong">in</strong> range(len(sources)):
        <strong class="markup--strong markup--pre-strong">if</strong> source == sources[index]:
            percent[index] += 1
            <strong class="markup--strong markup--pre-strong">pass</strong></pre>
   <pre class="graf graf--pre graf-after--pre" id="d864">percent /= 100</pre>
   <pre class="graf graf--pre graf-after--pre" id="7193"><em class="markup--em markup--pre-em"># Pie chart:</em>
pie_chart = pd.Series(percent, index=sources, name='Sources')
pie_chart.plot.pie(fontsize=11, autopct='%.2f', figsize=(6, 6));</pre>
   <p class="graf graf--p graf-after--pre" id="8a38">
    然后我们得到像这样的输出：
   </p>
   <p>
    <img alt="" class="aligncenter size-full wp-image-4767 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1100%2C603&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?w=1174&amp;ssl=1 1174w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=300%2C165&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=768%2C421&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1024%2C562&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1100%2C603&amp;ssl=1 1100w" data-recalc-dims="1" height="603" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1100%2C603&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
    <noscript>
     <img alt="" class="aligncenter size-full wp-image-4767" data-recalc-dims="1" height="603" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1100%2C603&amp;ssl=1" srcset="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?w=1174&amp;ssl=1 1174w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=300%2C165&amp;ssl=1 300w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=768%2C421&amp;ssl=1 768w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1024%2C562&amp;ssl=1 1024w, https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-33.jpeg?resize=1100%2C603&amp;ssl=1 1100w" width="1100"/>
    </noscript>
   </p>
   <div class="section-inner sectionLayout--insetColumn">
    <p class="graf graf--p graf-after--figure" id="b80c">
     我们可以看到每个来源的推文百分比。现在可以继续进行情感分析了。
    </p>
    <h3 class="graf graf--h3 graf-after--p" id="b753">
     3. 情感分析
    </h3>
    <p class="graf graf--p graf-after--h3" id="31fc">
     <strong class="markup--strong markup--p-strong">
      3.1 导入 textblob
     </strong>
    </p>
    <p class="graf graf--p graf-after--p" id="8e33">
     正如本文开头所提到的，textblob 将允许我们以非常简单的方式进行情绪分析。我们还将使用 Python 中的 re 库，它用于处理正则表达式。为此，我将为您提供两个实用程序函数：a）清理文本（这意味着任何与字母数字值不同的符号将重新映射到满足此条件的新符号），b）创建分析器在清洗文本后分析每条推文的归一性。
    </p>
    <p class="graf graf--p graf-after--p" id="2afe">
     代码如下：
    </p>
    <pre class="graf graf--pre graf-after--p" id="a2c5"><strong class="markup--strong markup--pre-strong">from</strong> textblob <strong class="markup--strong markup--pre-strong">import</strong> TextBlob
<strong class="markup--strong markup--pre-strong">import</strong> re</pre>
    <pre class="graf graf--pre graf-after--pre" id="df38"><strong class="markup--strong markup--pre-strong">def</strong> <strong class="markup--strong markup--pre-strong">clean_tweet</strong>(tweet):
    '''
    Utility function to clean the text in a tweet by removing 
    links and special characters using regex.
    '''
    <strong class="markup--strong markup--pre-strong">return</strong> ' '.join(re.sub("(@[A-Za-z0-9]+)|([^0-9A-Za-z \t])|(\w+:\/\/\S+)", " ", tweet).split())</pre>
    <pre class="graf graf--pre graf-after--pre" id="6c3a"><strong class="markup--strong markup--pre-strong">def</strong> <strong class="markup--strong markup--pre-strong">analize_sentiment</strong>(tweet):
    '''
    Utility function to classify the polarity of a tweet
    using textblob.
    '''
    analysis = TextBlob(clean_tweet(tweet))
    <strong class="markup--strong markup--pre-strong">if</strong> analysis.sentiment.polarity &gt; 0:
        <strong class="markup--strong markup--pre-strong">return</strong> 1
    <strong class="markup--strong markup--pre-strong">elif</strong> analysis.sentiment.polarity == 0:
        <strong class="markup--strong markup--pre-strong">return</strong> 0
    <strong class="markup--strong markup--pre-strong">else</strong>:
        <strong class="markup--strong markup--pre-strong">return</strong> -1</pre>
    <p class="graf graf--p graf-after--pre" id="0d68">
     因为 Textblob 提供训练好的分析器，所以事情就好办多了。Textblob 能使用多种不同的自然语言处理模型。如果你想训练你自己的分类器（或者想知道它的工作方式），点击
     <a class="markup--anchor markup--p-anchor" data-href="https://textblob.readthedocs.io/en/dev/classifiers.html" href="https://textblob.readthedocs.io/en/dev/classifiers.html" rel="noopener nofollow noreferrer" target="_blank">
      这个链接
     </a>
     。
    </p>
    <p class="graf graf--p graf-after--p" id="7ec2">
     效果应该差不多，因为我们用的是预训练模型。
    </p>
    <p class="graf graf--p graf-after--p" id="0046">
     总之回到代码部分，向数据中再添加一列。这个列会包含语义分析，我们可以绘制出 dataframe 查看更新结果：
    </p>
    <pre class="graf graf--pre graf-after--p" id="eb4d"><em class="markup--em markup--pre-em"># We create a column with the result of the analysis:</em>
data['SA'] = np.array([ analize_sentiment(tweet) <strong class="markup--strong markup--pre-strong">for</strong> tweet <strong class="markup--strong markup--pre-strong">in</strong> data['Tweets'] ])</pre>
    <pre class="graf graf--pre graf-after--pre" id="b5aa"><em class="markup--em markup--pre-em"># We display the updated dataframe with the new column:</em>
display(data.head(10))</pre>
    <p class="graf graf--p graf-after--pre" id="23ee">
     获取新的输出：
    </p>
   </div>
   <div class="section-inner sectionLayout--outsetColumn">
    <div class="aspectRatioPlaceholder is-locked">
     <img alt="" class="aligncenter size-full wp-image-4768 jetpack-lazy-image" data-lazy-sizes="(max-width: 1079px) 100vw, 1079px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=1079%2C1219&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?w=1079&amp;ssl=1 1079w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=266%2C300&amp;ssl=1 266w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=768%2C868&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=906%2C1024&amp;ssl=1 906w" data-recalc-dims="1" height="1219" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=1079%2C1219&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1079"/>
     <noscript>
      <img alt="" class="aligncenter size-full wp-image-4768" data-recalc-dims="1" height="1219" sizes="(max-width: 1079px) 100vw, 1079px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=1079%2C1219&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?w=1079&amp;ssl=1 1079w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=266%2C300&amp;ssl=1 266w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=768%2C868&amp;ssl=1 768w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/06/0-34.jpeg?resize=906%2C1024&amp;ssl=1 906w" width="1079"/>
     </noscript>
    </div>
   </div>
  </div>
  <div>
  </div>
  <div>
   <p class="graf graf--p graf-after--figure" id="6377">
    可以看到，最后一列包含了语义分析结果（SA）。现在只需检查结果。
   </p>
   <p class="graf graf--p graf-after--p" id="1447">
    <strong class="markup--strong markup--p-strong">
     分析结果
    </strong>
   </p>
   <p class="graf graf--p graf-after--p" id="937c">
    我们以简单的方式检查语义分析结果，分别计算出包含正面情绪、负面情绪和中性情绪的推文，及其比例。
   </p>
   <pre class="graf graf--pre graf-after--p" id="4975">pos_tweets = [ tweet for index, tweet in enumerate(data['Tweets']) if data['SA'][index] &gt; 0]
neu_tweets = [ tweet for index, tweet in enumerate(data['Tweets']) if data['SA'][index] == 0]
neg_tweets = [ tweet for index, tweet in enumerate(data['Tweets']) if data['SA'][index] &lt; 0]</pre>
   <p class="graf graf--p graf-after--pre" id="ee11">
    现在我们获得了列表，只需打印出比例：
   </p>
   <pre class="graf graf--pre graf-after--p" id="0e9c">print("Percentage of positive tweets: {}%".format(len(pos_tweets)*100/len(data['Tweets'])))
print("Percentage of neutral tweets: {}%".format(len(neu_tweets)*100/len(data['Tweets'])))
print("Percentage de negative tweets: {}%".format(len(neg_tweets)*100/len(data['Tweets'])))</pre>
   <p class="graf graf--p graf-after--pre" id="32d8">
    获得如下结果：
   </p>
   <p class="graf graf--p graf-after--p" id="61a5">
    Percentage of positive tweets: 51.0% Percentage of neutral tweets: 27.0% Percentage de negative tweets: 22.0%
   </p>
   <p class="graf graf--p graf-after--p" id="bf2d">
    不过考虑到我们只收集了特朗普推特账户的 200 条推文，如果想获得更高的准确度，可以收集更多推文。
   </p>
   <p class="graf graf--p graf-after--p" id="1aaf">
    从本文我们可以看到，使用 Python 能够完成提取数据、处理数据、可视化数据和分析数据这一套流程。希望本文能对大家使用 Python 进行文本处理有所帮助。
   </p>
   <p class="graf graf--p graf-after--p" id="7911">
    工具：
   </p>
   <ul class="postList">
    <li class="graf graf--li graf-after--p" id="8e4f">
     <a class="markup--anchor markup--li-anchor" data-href="http://tweepy.readthedocs.io/en/v3.5.0/" href="https://tweepy.readthedocs.io/en/v3.5.0/" rel="noopener nofollow noreferrer" target="_blank">
      Official documentation — Tweepy
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="80a1">
     <a class="markup--anchor markup--li-anchor" data-href="https://docs.scipy.org/doc/numpy-dev/index.html" href="https://docs.scipy.org/doc/numpy-dev/index.html" rel="noopener nofollow noreferrer" target="_blank">
      Official documentation — NumPy
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="5de9">
     <a class="markup--anchor markup--li-anchor" data-href="https://docs.scipy.org/doc/numpy-dev/user/quickstart.html" href="https://docs.scipy.org/doc/numpy-dev/user/quickstart.html" rel="noopener nofollow noreferrer" target="_blank">
      Official tutorial — NumPy
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="235c">
     <a class="markup--anchor markup--li-anchor" data-href="https://pandas.pydata.org/pandas-docs/stable/tutorials.html" href="https://pandas.pydata.org/pandas-docs/stable/tutorials.html" rel="noopener nofollow noreferrer" target="_blank">
      Official tutorial — Pandas
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="9351">
     <a class="markup--anchor markup--li-anchor" data-href="https://pandas.pydata.org/pandas-docs/stable/index.html" href="https://pandas.pydata.org/pandas-docs/stable/index.html" rel="noopener nofollow noreferrer" target="_blank">
      Official documentation — Pandas
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="15d3">
     <a class="markup--anchor markup--li-anchor" data-href="http://matplotlib.org/index.html" href="https://matplotlib.org/index.html" rel="noopener nofollow noreferrer" target="_blank">
      Official documentation — Matplotlib
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="a9bf">
     <a class="markup--anchor markup--li-anchor" data-href="http://matplotlib.org/users/pyplot_tutorial.html" href="https://matplotlib.org/users/pyplot_tutorial.html" rel="noopener nofollow noreferrer" target="_blank">
      Official tutorial — Pyplot
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="e545">
     <a class="markup--anchor markup--li-anchor" data-href="https://seaborn.pydata.org/" href="https://seaborn.pydata.org/" rel="noopener nofollow noreferrer" target="_blank">
      Official website — Seaborn
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="1134">
     O
     <a class="markup--anchor markup--li-anchor" data-href="https://textblob.readthedocs.io/en/dev/" href="https://textblob.readthedocs.io/en/dev/" rel="noopener nofollow noreferrer" target="_blank">
      fficial documentation — TextBlob
     </a>
    </li>
    <li class="graf graf--li graf-after--li" id="ccd1">
     <a class="markup--anchor markup--li-anchor" data-href="https://textblob.readthedocs.io/en/dev/classifiers.html" href="https://textblob.readthedocs.io/en/dev/classifiers.html" rel="noopener nofollow noreferrer" target="_blank">
      Tutorial: Building a Text Classification System — TextBlob
     </a>
    </li>
   </ul>
   <p class="graf graf--p graf-after--li" id="4455">
    正如您所看到的，可以使用 Python 以非常简单的方式提取、操作、可视化和分析数据。希望读者能使用这些工具实现创新性的探索。⚪️
   </p>
  </div>
  <div id="atatags-1611829871-5f3e500db0b13">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-4761" href="https://www.iyouport.org/%e5%af%b9%e7%89%b9%e6%9c%97%e6%99%ae%e6%8e%a8%e6%96%87%e7%9a%84%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90-python-%f0%9f%90%8d/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-4761" href="https://www.iyouport.org/%e5%af%b9%e7%89%b9%e6%9c%97%e6%99%ae%e6%8e%a8%e6%96%87%e7%9a%84%e6%83%85%e6%84%9f%e5%88%86%e6%9e%90-python-%f0%9f%90%8d/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  </ul>
 </div>
 <div class="entry-author-wrapper">
  <div class="site-posted-on">
   <strong>
    Published
   </strong>
   <time class="entry-date published" datetime="2018-12-04T01:46:27+08:00">
    2018年12月4日
   </time>
   <time class="updated" datetime="2019-06-01T01:54:43+08:00">
    2019年6月1日
   </time>
  </div>
 </div>
</article>

