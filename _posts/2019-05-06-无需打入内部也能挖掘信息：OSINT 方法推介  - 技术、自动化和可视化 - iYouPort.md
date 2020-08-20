---
layout: post
title: "无需打入内部也能挖掘信息：OSINT 方法推介  - 技术、自动化和可视化 - iYouPort"
date: 2019-05-06T16:06:48+00:00
author: iYouPort
from: https://www.iyouport.org/%e6%97%a0%e9%9c%80%e6%89%93%e5%85%a5%e5%86%85%e9%83%a8%e4%b9%9f%e8%83%bd%e6%8c%96%e6%8e%98%e4%bf%a1%e6%81%af%ef%bc%9aosint-%e6%96%b9%e6%b3%95%e6%8e%a8%e4%bb%8b%e2%80%8a-%e6%8a%80%e6%9c%af/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-649 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-osint category-67 tag-osint tag-tech tag-technique tag-technology tag-tools" id="post-649">
 <header class="entry-header">
  <h1 class="entry-title">
   无需”打入内部”也能挖掘信息：OSINT 方法推介  – 技术、自动化和可视化
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
   <time class="entry-date published" datetime="2019-05-07T00:06:48+08:00">
    2019年5月7日
   </time>
   <time class="updated" datetime="2019-11-02T14:52:36+08:00">
    2019年11月2日
   </time>
  </span>
  <span class="word-count">
   2 Minutes
  </span>
 </div>
 <div class="entry-content">
  <ul>
   <li>
    <span style="color: #00ccff;">
     <em>
      <strong>
       社交工程、道德黑客、开源情报和信息验证，这些门类在大多数情况下是相通的，它们都需要充分的数据收集、使用的是近似的技术和思考方式，广泛应用于公民社会、调查记者、威胁防御等各种重要领域。本文继续专注于开源情报 #OSINT 收集，重在演示思路，并推荐工具（今后还有更多专门推荐创新工具的文章）希望这些内容能帮助中国的独立调查更加专业，效率更高。
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   在我的整个职业生涯中，我对从基本公开记录中学到的关于组织的知识的迷恋从未改变。大量小片段信息的聚合有时可以描绘出令人惊讶的完整图像。然后再用一些小的逻辑跳跃和推断来填补一些漏洞。
  </p>
  <p>
   这一直让我很感兴趣，因为我想知道，
   <strong>
    一个局外人在不用触及基础设施或内部人士的情况下可以了解到什么
   </strong>
   。现在，我经常希望利用这种数据来获取一系列内部知识，我可以将其作为 #社交工程 的基础，一旦进入网络，就能更好地理解我所在的网络。
  </p>
  <p>
   需要考虑的数据点有很多，但本文将重点关注网络目标（例如 IP 地址、域名和系统），同时轻微触及人员信息的收集（例如电子邮件地址、姓名、职称）。这是在准备一个新项目时首先要知道的，然后使用收集到的数据来决定你的下一步动作。
  </p>
  <p>
   管理所有这些数据的关键是自动化。初始阶段的自动化能够让手动研究更加简单，更容易组织。最后，“第4阶段”将讨论自动化和报告。让我们先来看看我们要找些什么。
  </p>
  <p>
   <strong>
    阶段1：映射网络
   </strong>
  </p>
  <p>
   首先，你要选择一个目标。虽然在网上可能很难找到目标，但大多数组织都会有一个名称和至少一个用于电子邮件的“主要”域名，因此名称和域名是一个很好的起点。入门所需的基本信息是名称（例如暴雪娱乐公司）和至少一个域名（例如
   <a data-href="http://blizzard.com/" href="http://blizzard.com/" rel="noreferrer noopener" target="_blank">
    blizzard.com
   </a>
   ）。
  </p>
  <p>
   Full Contact 营销数据库和 API 是一个很好的起点。它可以基于名称和域名提供有关组织的基本信息。Full Contact 跟踪“关键人物”（例如高管）、社交媒体档案、大致员工人数等等。这些细节很好，因为在收集数据之前我们必须知道一些公司的背景资料。这也可以从公司的 LinkedIn 资料等来源中找到。
  </p>
  <p>
   <strong>
    域名
   </strong>
  </p>
  <p>
   收集背景信息后，下一步就是域名和子域名。可以使用
   <strong>
    反向 WHOIS 查找
   </strong>
   发现其他域名。
   <a data-href="http://whoxy.com/" href="http://whoxy.com/" rel="noopener noreferrer" target="_blank">
    WhoXY
   </a>
   为此提供可靠的服务，并提供反向 WHOIS API 接口，该接口接受公司名称和关键字以对 WHOIS 记录执行搜索。这些搜索可以返回数百个其他域名。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0.jpeg?resize=1100%2C469&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="469" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0.jpeg?resize=1100%2C469&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="469" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0.jpeg?resize=1100%2C469&amp;ssl=1" width="1100"/>
   </noscript>
  </p>
  <p>
   此时，最好先停下来并看看这些新域名。一些组织将购买其近似域名，以避免有人仿冒。这些域名保持“闲置”或仅将访问者重定向到主域名和公司网站。在其中选择一些看起来很有趣的域名，然后继续进行下一步的子域名搜寻。
  </p>
  <p>
   <strong>
    请注意
   </strong>
   ，如果域名是很常见的个人姓名，例如 Henry Dorsett，反向 WHOIS 查询可能会返回数百甚至数千个不相关的结果。出于这个原因，不要急于提前并盲目地把每个反向的 WHOIS 结果都加入选择。
  </p>
  <p>
   此外，WhoXY 搜索仅返回完全匹配的内容。如果查询查找与“暴雪娱乐公司 (Blizzard Entertainment Inc)”相关的域名，则结果将不包括“暴雪娱乐公司 (Blizzard Entertainment, Inc)”或“暴雪娱乐公司 (Blizzard Entertainment Inc.)”附带的任何域名(后面有句点)。好消息是很多公司都会注册其主域名的近似域名，因此 WHOIS 记录中提取的名称一般都没什么问题。
  </p>
  <p>
   <strong>
    子域名
   </strong>
  </p>
  <p>
   有许多工具可用于执行子域名发现和暴力破解，例如 Aquatone 和 Sublist3r。
   <strong>
    暴力破解可以揭示可能永远不会被发现的子域名，但是您必须对付通配符 DNS，并且在这些早期阶段没有必要
   </strong>
   。
   <a data-href="https://dnsdumpster.com/" href="https://dnsdumpster.com/" rel="noopener noreferrer" target="_blank">
    DNS Dumpster
   </a>
   和
   <a data-href="https://www.netcraft.com/" href="https://www.netcraft.com/" rel="noopener noreferrer" target="_blank">
    Netcraft
   </a>
   可能会为目标域名提供大量已分类编目的子域名。此外，从
   <a data-href="http://crt.sh/" href="https://crt.sh/" rel="noreferrer noopener" target="_blank">
    crt.sh
   </a>
   或
   <a data-href="http://censys.io/" href="https://censys.io/" rel="noreferrer noopener" target="_blank">
    censys.io
   </a>
   中提取的 TLS 证书通常会显示这些服务尚未发现或记录的其他新子域名。具体而言，可以从证书的备用名称中提取子域名。
  </p>
  <p>
   例如，在 Censys 上搜索 “
   <a data-href="http://blizzard.com/" href="http://blizzard.com/" rel="noreferrer noopener" target="_blank">
    blizzard.com
   </a>
   ” 的证书会返回一个包含以下名称的证书：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-5.png?resize=1100%2C395&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="395" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-5.png?resize=1100%2C395&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="395" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-5.png?resize=1100%2C395&amp;ssl=1" width="1100"/>
   </noscript>
  </p>
  <p>
   <a data-href="http://censys.io/" href="https://censys.io/" rel="noreferrer noopener" target="_blank">
    Censys.io
   </a>
   将解析证书中的名称，并在 Web UI 和 API 中提供以易于摘要的列表提供它们。
  </p>
  <p>
   证书往往产生最多的子域名，并且搜索它们的速度很快。但是，在
   <a data-href="http://censys.io/" href="https://censys.io/" rel="noreferrer noopener" target="_blank">
    censys.io
   </a>
   上搜索“
   <a data-href="http://blizzard.com/" href="http://blizzard.com/" rel="noreferrer noopener" target="_blank">
    blizzard.com
   </a>
   ”这样的域名会产生一些不相关的结果，例如
   <a data-href="http://iran-blizzard.com/" href="http://iran-blizzard.com/" rel="noreferrer noopener" target="_blank">
    iran-blizzard.com
   </a>
   ，即包含查询字符串的任何域名。像这样的域名可能与目标公司有关，但很可能这些结果中的许多都是无关的，只会污染数据集。
  </p>
  <p>
   Censys 上不能搜索“.blizzard.com”或者使用正则表达式，但可以搜索特定字段。搜索 parsed.names: blizzard. com 会将结果限制为仅为“
   <a data-href="http://blizzard.com/" href="http://blizzard.com/" rel="noreferrer noopener" target="_blank">
    blizzard.com
   </a>
   ”子域名发布的证书。
  </p>
  <p>
   此外，证书透明度日志可以提供更多信息，比如可以使用 Google 透明度报告工具搜索子域名：
   <a data-href="https://transparencyreport.google.com/https/certificates" href="https://transparencyreport.google.com/https/certificates" rel="noreferrer noopener" target="_blank">
    https://transparencyreport.google.com/https/certificates
   </a>
  </p>
  <p>
   <strong>
    DNS 记录和 IP 地址
   </strong>
  </p>
  <p>
   现在我们得到了一个域名和子域名的列表，我们需要将这个列表解析为 IP 地址。这可以通过 Python 套接字（或使用 Go，Ruby 等）和检查 DNS 记录轻松完成。某些域名因某种原因无法被解析，这很好。退役的子域名和那些不固定的子域名仍然很有用，稍后还会有更多的介绍。
  </p>
  <p>
   DNS 记录在不同方面都很有用。 A 记录提供 IP 地址，其他记录提供一些有趣的情况信息。同样，这个 DNS 解析也可以很容易地用 Python 和其他语言编写成脚本。对于手动检查，
   <a data-href="http://dnsstuff.com/" href="http://dnsstuff.com/" rel="noreferrer noopener" target="_blank">
    dnsstuff.com
   </a>
   可以很方便快捷地用于检查 DNS 记录和域名所有权。
  </p>
  <p>
   <strong>
    DNS 记录：MX 和 TXT
   </strong>
  </p>
  <p>
   DMARC 和 SPF 记录（或缺少记录）将有助于确定社会工程活动中是否可以使用电子邮件欺骗。许多组织者不设置 DMARC，或者经常使用弱 SPF 记录和/或弱 DMARC 策略（例如 p=none）。这意味着该组织的电子邮件保护是失败的，没有任何措施来防止欺骗性电子邮件。
   <a data-href="https://www.bishopfox.com/blog/2017/05/how-we-can-stop-email-spoofing/" href="https://www.bishopfox.com/blog/2017/05/how-we-can-stop-email-spoofing/" rel="noopener noreferrer" target="_blank">
    这篇文章
   </a>
   很好地介绍了这些电子邮件安全设置的一些缺陷。
  </p>
  <blockquote>
   <p>
    <em>
     几乎所有的邮件传输代理，包括 Gmail 和 Microsoft Exchange Server 所使用的那些，默认情况下都依赖于 DMARC，以指导如果邮件 SPF 或 DKIM 失败，应该采取什么行动。如果发送域名没有 DMARC 记录或策略为 none，则邮件服务器将无法打开并发送电子邮件。
    </em>
   </p>
  </blockquote>
  <blockquote>
   <p>
    <em>
     这意味着如果某个域名没有 SPF，DKIM 和严格的 DMARC 记录，则可能会被欺骗。
    </em>
   </p>
  </blockquote>
  <blockquote>
   <p>
    <em>
     — — Bishop Fox 的 Alex DeFreese
    </em>
   </p>
  </blockquote>
  <p>
   <a data-href="http://dkimvalidator.com/" href="http://dkimvalidator.com/" rel="noreferrer noopener" target="_blank">
    DKIMValidator.com
   </a>
   是一个方便实用的用于分析 SPF 和 DKIM 记录的工具。
   <strong>
    如果电子邮件欺骗看上去是可能的，
   </strong>
   <a data-href="http://dkimvalidator.com/" href="http://dkimvalidator.com/" rel="noreferrer noopener" target="_blank">
    <strong>
     dkimvalidator.com
    </strong>
   </a>
   <strong>
    网站会显示电子邮件的 SpamAssassin 分数以及它是否通过了 SPF 检查。
   </strong>
  </p>
  <blockquote>
   <p>
    <em>
     作者注：这可能听起来像是一件小事，但如果没被重视就可能是一个严重的问题。有一次，我在与客户合作时，他们不得不应对恶劣的网络钓鱼事件。攻击者非常令人信服冒用他们的电子邮件地址欺骗员工和其他组织。对 DMARC 和 SPF 记录的这种简单检查帮助他们了解发生了什么。他们认为 SPF 和供应商提供的电子邮件安全解决方案在锁定方面存在欺骗行为，因此他们认为帐户遭到了入侵。但是，他们从未设置过 DMARC 记录。对于许多组织来说，欺骗是一件非常困难的事情，因为电子邮件安全性经常被误解，所以在市场营销、公关、自动提醒电子邮件和其他合法使用欺骗电子邮件的情形中，有许多例外。
    </em>
   </p>
  </blockquote>
  <p>
   此外，名称服务器可能容易受到 DNS 缓存侦听 (DNS cache snooping) 的攻击，MX 和 TXT 记录可能会泄露组织使用的服务（例如 Proofpoint，Survey Monkey）。这些都是老掉牙的伎俩，但仍然可以获得一些有趣的信息。
  </p>
  <p>
   <strong>
    DNS 记录：CNAMES
   </strong>
  </p>
  <p>
   这时也可以查找 DNS 记录中提到的内容交付网络（CDN）和云服务。这些记录将显示域名是否指向像用于 Web 托管的 S3 bucket 这样的资产。此外，一些子域名可用于域名前置（例如，一个已被删除的 S3 bucket 的悬空的 DNS 记录）。
  </p>
  <p>
   如果这对你来说是个新想法，探索这个想法就是留给你的作业了。这是一个很好的
   <a data-href="https://github.com/EdOverflow/can-i-take-over-xyz" href="https://github.com/EdOverflow/can-i-take-over-xyz" rel="noopener noreferrer" target="_blank">
    入门资源
   </a>
   。此外，
   <a data-href="http://flaws.cloud/" href="http://flaws.cloud/" rel="noreferrer noopener" target="_blank">
    flAWS.cloud
   </a>
   是学习检测和滥用许多常见 AWS 错误配置的绝佳资源，这些错误配置也可是其他云服务的（例如 Google，Azure）。
  </p>
  <p>
   本文致力于对云服务提供商，存储和服务器的审核，并更详细地探讨上述一些主题：
  </p>
  <p>
   最后，
   <a data-href="https://www.arin.net/resources/rdap.html" href="https://www.arin.net/resources/rdap.html" rel="noopener noreferrer" target="_blank">
    RDAP
   </a>
   和
   <a data-href="https://shodan.io/" href="https://shodan.io/" rel="noopener noreferrer" target="_blank">
    Shodan
   </a>
   可以填补在所有这些IP地址和域名收集的信息中的一些空白。
  </p>
  <p>
   RDAP 可以为每个 IP 地址提供一些有用的信息，例如所有者和网络块。知道一个属于亚马逊的 IP 地址本身并不是那么有趣，但知道目标 IP 地址的 65％ 为亚马逊所有就说明他们很好地利用了亚马逊网络服务。
   <strong>
    它也可能表明该组织拥有哪些资产以及哪些资产是租赁/外部托管的
   </strong>
   。这也是一些逻辑上的跳跃和推断可以发挥作用的地方。
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-2.jpeg?resize=1100%2C397&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="397" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-2.jpeg?resize=1100%2C397&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="397" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-2.jpeg?resize=1100%2C397&amp;ssl=1" width="1100"/>
   </noscript>
  </p>
  <p>
   最后，同样重要的是，Shodan 可能会提供更多有关IP地址和域名的详细信息。 Shodan 可以提供主机名，操作系统，开放端口等信息，所有这些都不需要任何基础设施。 Shodan 还可以使用已发现的网络块和域名的关键字搜索显示其他主机和域名（例如 hostname:foo.bar 和 ip:1.1.1.0/24）。
  </p>
  <p>
   <strong>
    经过所有这些步骤你会获得大量信息，任何人都难以以理智的方式进行整理。此时最好将此数据放在一边，直到报告阶段
   </strong>
   。
  </p>
  <p>
   <strong>
    阶段 2：发现联系人
   </strong>
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-3.jpeg?resize=1100%2C486&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="486" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-3.jpeg?resize=1100%2C486&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="486" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-3.jpeg?resize=1100%2C486&amp;ssl=1" width="1100"/>
   </noscript>
  </p>
  <p>
   这一阶段涉及目标组织的人员。现在你可能已经知道了一些其他域名，搜索引擎（例如 Google，Yahoo，Bing）可用于搜寻与组织用于其业务的每个域名相关联的电子邮件地址。Email Hunter 的 API，顾名思义，也可用于查找域名的电子邮件地址。销售人员可以为潜在客户查找联系人和销售线索，但任何人都可以使用它并收集电子邮件地址。有时 Hunter 还提供姓名，职位和电话号码。
  </p>
  <p>
   <strong>
    不只是电子邮件
   </strong>
  </p>
  <p>
   电子邮件地址为网络钓鱼和密码扫描提供了机会，但可以更进一步。通过 Troy Hunt 的 HaveIBeenPwned 等服务检查电子邮件地址，或安全漏洞和被丢弃的私人密码数据库，员工可以与他们过去使用的服务对应上。
  </p>
  <p>
   像目前为止收集的大多数数据一样，这些数据本身并不十分有趣。但是，它可以表明每个员工的在职时间（假设他们还没有离职），甚至可能揭示他们的工作以及组织内部使用的各种服务。当然，这也意味着他们的旧密码可能是可用的，并且可能重用于企业帐户。
  </p>
  <p>
   另外，通过在剪切版网站上（例如 pastebin，ghostbin，slexy）对电子邮件地址进行搜索可以得到一些信息量很大的信息。 HaveIBeenPwned 还有一个粘贴 API，用于快速搜索到发现这些电子邮件地址的剪切版。
   <strong>
    有些剪切版可能是死胡同，但并非总是如此，有时这些剪切版里包含密码，安全问题的答案和其他信息。这是情报数据的福音，但也是一个直接的发现，并且在报告中值得注意。
   </strong>
  </p>
  <p>
   如果剪切版里的内容已经被删除了，则可以检查 Google 的网络缓存和 Wayback Machine 以获取缓存版本。
  </p>
  <blockquote>
   <p>
    <em>
     作者注：剪切版也可能包含没有被记录在 HaveIBeenPwned 里的电子邮件地址，例如 Ashley Madison 数据泄漏出的地址。这很有趣，因为这意味着电子邮件地址已用于非公司业务和帐户，但在报告里写入这些是有问题的。在向客户交付之前，请好好判断这些剪切版的内容。
    </em>
   </p>
  </blockquote>
  <p>
   <strong>
    社交媒体资料
   </strong>
  </p>
  <p>
   在情报收集过程中，这是个很好的计划，可以通过社交媒体轻松实现。可能数十个或数百个社交媒体资料对早期的侦察来说有点多了。然而，从 LinkedIn 和 Twitter 发现一些电子邮件地址并不难。这些可以被从搜索引擎的结果中删除，使用许多与电子邮件地址相同的技巧。
  </p>
  <p>
   一些基本的谷歌搜索，如 site:linkedin.com COMPANY 可以找到 LinkedIn 个人资料，其中可能还包含电子邮件地址，职位和有趣的信息（例如“我管理公司部署的 Cylance Protect” 或“我是 Splunk 管理员” ）。这不是一门精确的科学，搜索会遇到死胡同（即查到的资料是已经离职的人的简历信息），但它可以帮助收集一些名字和信息，以帮助您入门。此外，Email Hunter 也将返回 LinkedIn 个人资料链接。
  </p>
  <p>
   Twitter handles 也可以是一个很好的情报来源，Twitter API 可以帮助验证资料。就像 LinkedIn 个人资料和电子邮件地址一样，这些 handles 会返回
   <a data-href="http://twitter.com/" href="https://twitter.com/" rel="noreferrer noopener" target="_blank">
    twitter.com
   </a>
   的搜索结果。
  </p>
  <p>
   首先，收集一些潜在的 Twitter handles，然后使用 Twitter API 验证资料是否仍然存在，并收集粉丝数，位置，简介和真实姓名等信息。虽然这些数据大部分是由用户提供的，可能是缺失、不完整或不真实的，但它确实可以作为以后更认真的搜索的良好起点。如果这能返回少量真实帐户，一些基本的链接分析可能会在以后披露更多帐户。
  </p>
  <p>
   <strong>
    关于社交媒体的一个注记
   </strong>
  </p>
  <p>
   社交媒体最好先留着的一个原因是它需要一些思考和仔细的分析。在搜索真实的人时，如果他们有活跃的账户，确定某人的身份以及他们的兴趣并不太难。虽然并非总是如此，但他们的真实自我往往反映在社交媒体上。
  </p>
  <p>
   然而，你找到的也有可能是专业运营的公众帐号，或者可能是一个完全捏造的身份。社交媒体资料无法反映帐户背后的人或人们，因此无法以表面价值获取信息。
  </p>
  <p>
   一位 CEO 的 Twitter 和 LinkedIn 帐号可能是由专人运营的，这使得你很难了解背后的人。你的分析可能只是对这位 CEO 的帐号运营者的分析。
  </p>
  <p>
   有时去除一个或两个步骤比更高价值目标更好。它们更容易被访问，不太可能被仔细监控，并且可以提供更方便的访问高价值目标的方式。
  </p>
  <p>
   <strong>
    阶段 3：云
   </strong>
  </p>
  <p>
   到目前为止，我们已经选择了大多数 OSINT 的成果，但还需要一些基本的搜索来
   <strong>
    完善现有数据。
   </strong>
  </p>
  <p>
   <strong>
    挖掘文件
   </strong>
  </p>
  <p>
   许多公司网站的域名里都有大量文件。这些文件可能已累积多年，包括从Office文档到PDF和其他各种文件的所有内容。基本的 Google 搜索，例如 site:company.com filetype:pdf 将会显示它们。可以自动下载和解析这些文档以获取元数据，元数据可能包括软件信息（例如 Office 2013）或用户名。
  </p>
  <p>
   如果有人对网站的网络根目录不小心，那么获取其他文件扩展名（如.key 或.cert）以获取更多敏感文件并不是闻所未闻。也有可能有人上传了针对少数受众的文档而没有意识到任何人都可以下载它们。如果搜索引擎将它们编入索引，则可以找到它们。
  </p>
  <p>
   <strong>
    寻找 Buckets
   </strong>
  </p>
  <p>
   说到不适合上传的文件，Amazon S3 Bucket 已经因此而臭名昭着。Bucket 搜寻现在很热门，但不要忽视
   <a data-href="https://www.digitalocean.com/products/spaces/" href="https://www.digitalocean.com/products/spaces/" rel="noopener noreferrer" target="_blank">
    Digital Ocean 的 “Spaces”
   </a>
   。Digital Ocean 推出了类似于 S3 的自己的服务，称之为 Spaces。方便的是，Digital Ocean 在设计新服务时遵循了 S3 Bucket 的行业标准。换句话说，Spaces 的运行方式与 Bucket 完全相同，如果它们指向 Digital Ocean，那么用于挖掘 Bucket 的工具将适用于 Spaces。
  </p>
  <p>
   Bucket 的存在可以通过Web请求来检查。向 Amazon 或 Digital Ocean 发出 Web 请求（例如
   <a data-href="https://fubar.s3.amazonaws.com/" href="https://fubar.s3.amazonaws.com/" rel="noreferrer noopener" target="_blank">
    https://fubar.s3.amazonaws.com/
   </a>
   或
   <a data-href="https://fubar.nyc3.digitaloceanspaces.com/" href="https://fubar.nyc3.digitaloceanspaces.com/" rel="noreferrer noopener" target="_blank">
    https://fubar.nyc3.digitaloceanspaces.com/
   </a>
   ），该服务返回一些 XML，指示 Bucket 是否存在。如果存在，XML 将指示是否可以公开访问任何数据。就是这样了。寻找这些仅仅是使用一个单词列表来创建新的 Web 请求。
  </p>
  <p>
   <strong>
    注意
   </strong>
   ：Web 请求适用于 spaces，但可能会遗漏一些 S3 buckets。最好使用 Amazon 的 awscli 或 boto/boto3 Python 库（使用 awscli）来检查 Bucket。这些工具使用亚马逊帐户进行身份验证，某些 Bucket 可能会拒绝从浏览器进行匿名访问，同时允许“经过身份验证的用户”查看其中的某些内容。
  </p>
  <p>
   由于目标是针对特定组织，因此词汇表应与公司相关。至少要包括公司的名称，他们使用的任何缩略语或缩写，他们可能拥有的替代名称，子公司以及他们的纳斯达克上市（如果有）。
  </p>
  <p>
   如果公司使用与其业务相关的其他术语，则可以而且应该扩展该词表。例如，暴雪娱乐以用数字命名团队而闻名（例如第1组，第2组，第3组）。每个号码与其中一个游戏相关联。他们还喜欢使用他们的魔兽和星际争霸故事里名字。如果目标是暴雪，那么将 team1，team2，arthas，townportal 和其他暴雪相关术语添加到列表中是有意义的。
  </p>
  <figure aria-describedby="caption-attachment-657" class="wp-caption aligncenter" id="attachment_657" style="width: 1600px">
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-4.jpeg?resize=1100%2C619&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="619" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-4.jpeg?resize=1100%2C619&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="619" src="https://i2.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-4.jpeg?resize=1100%2C619&amp;ssl=1" width="1100"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-657">
    Nuclear Launch Detected: Improve wordlists for better targeting and a higher chance of finding something interesting. 检测到核发射：改进单词列表以获得更好的目标并更有可能找到有趣的东西。
   </figcaption>
  </figure>
  <p>
   Bucket 名称必须是全局唯一的，因此最好使用关键字的不同变体。一个简单的选择是使用各种前缀和后缀，或“缀”。一些常见的缀是 qa，doc，legacy，uat 和 bak。可以将这些添加到关键字的开头和结尾，以检查 Bucket 名称的常见变体。例如，“tychus”和一些缀相结合，创建了几个新的关键词，如 “qa-tychus” 和“ tychuslegacy”。
  </p>
  <p>
   值得注意的是，除了连字符之外，Bucket 名称还可以包含句点，因此即使“
   <a data-href="http://blizzard.com/" href="http://blizzard.com/" rel="noreferrer noopener" target="_blank">
    blizzard.com
   </a>
   ”也是有效的 Bucket 名称。实际上，托管在 S3 Bucket 中的资源或网页的 Bucket 名称将解析为
   <a data-href="http://hearthstone.blizzard.com.s3.amazonaws.com/" href="http://hearthstone.blizzard.com.s3.amazonaws.com/" rel="noreferrer noopener" target="_blank">
    hearthstone.blizzard.com.s3.amazonaws.com
   </a>
   。
  </p>
  <p>
   此外，一些公司可能会添加垃圾 Bucket 名称以使其更难发现，例如 tychus-79a9ba8b089e4c022c32b964cacf6b13f2aa6d9a（tychus 的 shasum）。它们不是不可发现的，但肯定更困难，如果对目标进行更密集的搜寻，则需要在之后考虑。
  </p>
  <p>
   <strong>
    这种词汇表方法旨在捕捉可能导致信息泄漏的成果
   </strong>
   。为了提供可以找到的内容的示例，此过程一旦确定了组织开发人员使用的“内部”git 存储库。Bucket 中充满了密码，公司源代码和其他敏感信息。它被公之于众，因为该公司错误地让“任何经过身份验证的 AWS 用户”可以访问它，这意味着他们是“经过身份验证的 AWS 用户”，而不是“任何 AWS 用户”。亚马逊改进了 Web 控制台用户界面以添加对于这种错误的警告，但它仍然会发生。
  </p>
  <p>
   一旦单词列表和缀列表准备就绪，将它们揉合在一起并开始搜索。
  </p>
  <p>
   <strong>
    阶段 4：报告和自动化流程
   </strong>
  </p>
  <p>
   对于每个项目而言，所有这一切都非常繁琐。如果这是你的日常工作，你肯定不想重复这些繁琐的过程。人们已经解决了所有这一切的自动化问题。一些值得注意的工具是 Recon-ng 和 Discover Scripts。我在一个名为
   <a data-href="https://github.com/chrismaddalena/ODIN" href="https://github.com/chrismaddalena/ODIN" rel="noopener noreferrer" target="_blank">
    ODIN 的工具
   </a>
   中实现了上面所有内容的
   <strong>
    自动化
   </strong>
   ：
  </p>
  <p>
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-6.png?resize=900%2C582&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="582" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-6.png?resize=900%2C582&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="900"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="582" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-6.png?resize=900%2C582&amp;ssl=1" width="900"/>
   </noscript>
  </p>
  <p>
   <strong>
    重新造轮子？
   </strong>
  </p>
  <p>
   当前的工具无法满足我的需求。我也没有/不想运行多个模块来获取所有数据或依赖于安装外部工具。 ODIN 的目标是，现在仍然是，创建一个可以用 Python 3 在 Windows，MacOS 和 Linux 上运行的工具。不仅如此，我还希望该工具能够自动进行基本分析。ODIN 实现了这一点，并使分析师能够把更多的精力放在数据上，同时减少他们的工作量。
  </p>
  <p>
   <strong>
    ODIN 的报告和组织
   </strong>
  </p>
  <p>
   ODIN 将它收集的所有数据存储在 SQLite3 数据库中，该数据库将保存以供以后分析。你也可以根据该数据构建多页 HTML 报告，以使浏览信息就像在 Web 浏览器中打开报告一样简单。这对于非正式的评审和参考很有用，但使用这些数据可视化可以打开你的眼界。
  </p>
  <p>
   <strong>
    进入 Neo4j
   </strong>
  </p>
  <figure aria-describedby="caption-attachment-659" class="wp-caption aligncenter" id="attachment_659" style="width: 800px">
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-7.png?resize=800%2C533&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="533" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-7.png?resize=800%2C533&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="800"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="533" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-7.png?resize=800%2C533&amp;ssl=1" width="800"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-659">
    A basic schema developed for drawing relationships between all of the various entities and assets discovered during this OSINT gathering process. 为在 OSINT 收集过程中发现的所有各种实体和资产之间的关系而开发的基本模式。
   </figcaption>
  </figure>
  <p>
   我为收集上述数据时可能遇到的外部资产开发了一个简单的
   <strong>
    Neo4j 图数据库模式
   </strong>
   。一旦 ODIN 将 SQLite3 数据库转换为图形数据库，就可以创建外部边界的映射。这是一个非常基本的例子：
  </p>
  <figure aria-describedby="caption-attachment-660" class="wp-caption aligncenter" id="attachment_660" style="width: 844px">
   <img alt="" class="jetpack-lazy-image" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.png?resize=844%2C543&amp;is-pending-load=1#038;ssl=1" data-recalc-dims="1" height="543" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.png?resize=844%2C543&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="844"/>
   <noscript>
    <img alt="" data-recalc-dims="1" height="543" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/05/0-8.png?resize=844%2C543&amp;ssl=1" width="844"/>
   </noscript>
   <figcaption class="wp-caption-text" id="caption-attachment-660">
    A graph of a small network branching off of one root domain
   </figcaption>
  </figure>
  <p>
   大多数节点类型都在此图中表示。对于此示例，ODIN 在小型实验室环境中运行，因此 IP 地址是内部地址，并且没有任何 Shodan 数据（即开放端口）。
  </p>
  <p>
   您有一个组织（蓝色）绑定到域名（紫色）和该域名的子域名（绿色）。证书（红色）及其与域名和子域名的关系显示哪些节点共享证书。您还可以查看子域名解析的 IP 地址（黄色）。
  </p>
  <p>
   大型组织的完整、未经过滤的图表可能非常密集，包括多对一关系，多个IP地址和多个域名。
  </p>
  <p>
   补充分析
  </p>
  <p>
   这些图表非常适合进行可视化分析并选择有趣的资产，但这并不是关于图表的全部。 Cypher 查询可以快速轻松地获取统计信息并创建表格。例如：MATCH (p:Port) RETURN DISTINCT p.Organization
  </p>
  <p>
   上面的查询匹配 Shodan 的开放端口并返回组织列表。换句话说，它创建了一个显示组织的表格，例如 Cloudflare 或
   <a data-href="http://amazon.com/" href="https://amazon.com/" rel="noreferrer noopener" target="_blank">
    Amazon.com
   </a>
   ，在数据库中。这是了解组织使用的网络提供商的快速方法。
  </p>
  <p>
   此查询将映射网络，同时排除从未解析为 IP 地址的子域名：
  </p>
  <p>
   MATCH (org:Organization)-[r1:OWNS]-&gt;(dom:Domain)-[:RESOLVES_TO]-&gt;(add:IP)
  </p>
  <p>
   MATCH (sub:Subdomain)-[r2:SUBDOMAIN_OF|:RESOLVES_TO]-&gt;(n)
  </p>
  <p>
   MATCH (add)-[r3:HAS_PORT]-&gt;(p:Port)
  </p>
  <p>
   RETURN org,dom,sub,add,p,n,r1,r2,r3
  </p>
  <p>
   此查询首先仅匹配具有:OWNS 和 :RESOLVES_TO 关系的组织，域名和 IP 节点。然后，它匹配具有 SUBDOMAIN_OF 或 :RESOLVES_TO 关系的任何节点的子域名。最后，它匹配与其中一个匹配的 IP 节点具有 :HAS_PORT 关系的端口节点。
  </p>
  <p>
   <strong>
    结论
   </strong>
  </p>
  <p>
   上面详述的过程并不能搜集组织的全部信息。
   <strong>
    一旦您开始与非常大的组织或组织中的不同组织打交道，情报收集就会变得复杂。但是，你必须从某个地方开始，这个过程很有帮助
   </strong>
   。
  </p>
  <p>
   <strong>
    收集的数据对攻击者有价值，我认为仅凭这一点对防御者来说就是有价值的
   </strong>
   。预先警告是预先准备的，也就是说，这些数据可以极大地帮助组织意识到自己的安全弱点。它可能是一个简单的胜利，在它发生问题之前就已经被发现了。
  </p>
  <p>
   当然，OSINT 是一个有机过程，通常会超出此处详述的基本阶段。例如，在 GitHub 中搜索主机名，密码和秘密通常是值得的。目前，此处概述的流程将有助于揭示有关组织的更多信息，发现资产，并帮助指导未来和整个运营过程中的工作。
  </p>
  <p>
   通过使用 ODIN 自动执行此过程，您可以在短短10分钟左右的时间内将名称和域名转换为更多内容。
  </p>
  <p>
   ODIN 并行运行处理多个任务，因此不需要很长时间。如果它的能力引起了你的兴趣，那就试一试吧。该项目是
   <strong>
    开源的，可以反馈
   </strong>
   。我鼓励维护者利用 ODIN 或其他工具/手动分析来可视化他们的外部网络，以监控他们的资产，并密切关注他们的组织和员工可用的公共数据。
  </p>
  <p>
   最后再关联我们前段时间的小汇总：《
   <a data-href="https://medium.com/@iyouport/%E8%B6%85%E7%BA%A7%E6%83%85%E6%8A%A5%E6%94%B6%E9%9B%86%E5%B7%A5%E5%85%B7%E5%BA%93-%E5%BC%80%E6%BA%90%E9%AA%8C%E8%AF%81%E5%92%8C%E8%B0%83%E6%9F%A5%E5%B7%A5%E5%85%B7%E5%8F%8A%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95-aef21bbe3b8b" href="https://www.iyouport.org/%f0%9f%92%8e-%e8%b6%85%e7%ba%a7%e6%83%85%e6%8a%a5%e6%94%b6%e9%9b%86%e5%b7%a5%e5%85%b7%e5%ba%93%ef%bc%9a%e5%bc%80%e6%ba%90%e9%aa%8c%e8%af%81%e5%92%8c%e8%b0%83%e6%9f%a5%e5%b7%a5%e5%85%b7%e5%8f%8a/" rel="noopener noreferrer" target="_blank">
    超级情报收集工具库
   </a>
   》，今后还将有更多创新型的技术方法和工具推荐。一起来，挖真相。⚪️
  </p>
  <div id="atatags-1611829871-5f3db1f104221">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-649" href="https://www.iyouport.org/%e6%97%a0%e9%9c%80%e6%89%93%e5%85%a5%e5%86%85%e9%83%a8%e4%b9%9f%e8%83%bd%e6%8c%96%e6%8e%98%e4%bf%a1%e6%81%af%ef%bc%9aosint-%e6%96%b9%e6%b3%95%e6%8e%a8%e4%bb%8b%e2%80%8a-%e6%8a%80%e6%9c%af/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-649" href="https://www.iyouport.org/%e6%97%a0%e9%9c%80%e6%89%93%e5%85%a5%e5%86%85%e9%83%a8%e4%b9%9f%e8%83%bd%e6%8c%96%e6%8e%98%e4%bf%a1%e6%81%af%ef%bc%9aosint-%e6%96%b9%e6%b3%95%e6%8e%a8%e4%bb%8b%e2%80%8a-%e6%8a%80%e6%9c%af/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
    <a href="https://www.iyouport.org/tag/tech/" rel="tag">
     tech
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
   <time class="entry-date published" datetime="2019-05-07T00:06:48+08:00">
    2019年5月7日
   </time>
   <time class="updated" datetime="2019-11-02T14:52:36+08:00">
    2019年11月2日
   </time>
  </div>
 </div>
</article>

