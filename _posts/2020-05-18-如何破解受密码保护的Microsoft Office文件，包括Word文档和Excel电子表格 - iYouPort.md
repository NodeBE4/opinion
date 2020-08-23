---
layout: post
title: "如何破解受密码保护的Microsoft Office文件，包括Word文档和Excel电子表格 - iYouPort"
date: 2020-05-18T16:04:04+00:00
author: iYouPort
from: https://www.iyouport.org/%e5%a6%82%e4%bd%95%e7%a0%b4%e8%a7%a3%e5%8f%97%e5%af%86%e7%a0%81%e4%bf%9d%e6%8a%a4%e7%9a%84microsoft-office%e6%96%87%e4%bb%b6%ef%bc%8c%e5%8c%85%e6%8b%acword%e6%96%87%e6%a1%a3%e5%92%8cexcel%e7%94%b5/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-11357 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-54 tag-hacking tag-microsoft-office tag-security tag-selfcare tag-technology" id="post-11357">
 <header class="entry-header">
  <h1 class="entry-title">
   如何破解受密码保护的Microsoft Office文件，包括Word文档和Excel电子表格
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
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2020-05-19T00:04:04+08:00">
    2020年5月19日
   </time>
   <time class="updated" datetime="2019-12-08T21:29:15+08:00">
    2019年12月8日
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
       这种攻击方法如今依旧流行
      </strong>
     </em>
    </span>
   </li>
  </ul>
  <p>
   <img alt="" class="aligncenter size-full wp-image-11358 jetpack-lazy-image" data-lazy-sizes="(max-width: 1100px) 100vw, 1100px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1100%2C718&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?w=1366&amp;ssl=1 1366w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=300%2C196&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1024%2C669&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=768%2C502&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1100%2C718&amp;ssl=1 1100w" data-recalc-dims="1" height="718" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1100%2C718&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="1100"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-11358" data-recalc-dims="1" height="718" sizes="(max-width: 1100px) 100vw, 1100px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1100%2C718&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?w=1366&amp;ssl=1 1366w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=300%2C196&amp;ssl=1 300w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1024%2C669&amp;ssl=1 1024w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=768%2C502&amp;ssl=1 768w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/12/密码.jpeg?resize=1100%2C718&amp;ssl=1 1100w" width="1100"/>
   </noscript>
  </p>
  <p class="graf graf--p">
   可以对 Microsoft Office 文件进行密码保护，以防止篡改并确保数据完整性。但事实上可能并非如此。来自 Office 早期版本的受密码保护的文档很容易使用被称为 office2john 的简单程序提取其哈希。然后可以使用 John the Ripper 和 Hashcat 来破解。
  </p>
  <p class="graf graf--p">
   使用 office2john 工具从受密码保护的 Microsoft Office 文件中提取哈希仅需要几秒钟。
  </p>
  <p class="graf graf--p">
   尽管多年来不同Office产品之间的加密标准一直在波动，但它们
   <strong class="markup--strong markup--p-strong">
    都无法抵御
   </strong>
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/run/office2john.py" href="https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/run/office2john.py" rel="noopener noreferrer" target="_blank">
    office2john
   </a>
   的哈希窃取功能。
  </p>
  <p class="graf graf--p">
   该工具是用Python编写的，可以直接在终端上运行。
  </p>
  <p class="graf graf--p">
   关于 Office 兼容性，已知可以用于 Word、Excel、PowerPoint、OneNote、Project、Access 和 Outlook，用于 Office 97、Office 2000、Office XP、Office 2003、Office 2007，Office2010、Office 2013 上创建的任何受密码保护的文件，包括 Office for Mac 版本。
  </p>
  <p class="graf graf--p">
   <iframe allowfullscreen="allowfullscreen" height="421" src="//www.youtube.com/embed/m0E8PlTIx-c" width="750">
   </iframe>
  </p>
  <p class="graf graf--p">
   以下是 null-byte 演示的操纵步骤。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     第一步：安装 Office2John
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   首先需要从
   <a class="markup--anchor markup--p-anchor" data-href="https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/run/office2john.py" href="https://github.com/magnumripper/JohnTheRipper/blob/bleeding-jumbo/run/office2john.py" rel="noopener noreferrer" target="_blank">
    GitHub 下载
   </a>
   该工具，因为标准版本的
   <a class="markup--anchor markup--p-anchor" data-href="https://null-byte.wonderhowto.com/forum/cracking-passwords-using-john-ripper-0181420/" href="https://null-byte.wonderhowto.com/forum/cracking-passwords-using-john-ripper-0181420/" rel="noopener noreferrer" target="_blank">
    John the Ripper
   </a>
   中并未包含 office2john（该版本已安装在 Kali 系统中）。使用
   <strong class="markup--strong markup--p-strong">
    wget
   </strong>
   可以轻松实现。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">~# wget https://raw.githubusercontent.com/magnumripper/JohnTheRipper/bleeding-jumbo/run/office2john.py

--2019-02-05 14:34:45--  https://raw.githubusercontent.com/magnumripper/JohnTheRipper/bleeding-jumbo/run/office2john.py
Resolving raw.githubusercontent.com (raw.githubusercontent.com)... 151.101.148.133
Connecting to raw.githubusercontent.com (raw.githubusercontent.com)|151.101.148.133|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 131690 (129K) [text/plain]
Saving to: ‘office2john.py’

office2john.py                        100%[=======================================================================&gt;] 128.60K  --.-KB/s    in 0.09s

2019-02-05 14:34:46 (1.45 MB/s) - ‘office2john.py’ saved [131690/131690]</code></pre>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     第二步：确保所有内容都在同一目录中
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   为了使用 Python 运行 office2john，需要切换到与安装相同的目录。
  </p>
  <p class="graf graf--p">
   对于大多数人来说，默认情况下是 Home（只需输入cd），但是可以随时创建一个单独的目录。
  </p>
  <p class="graf graf--p">
   接下来需要一个适当的文件对其进行测试。在此使用的是自己创建的简单DOCX文件 “ dummy.docx”，并使用 Word 2007 对其进行了密码保护。
  </p>
  <p class="graf graf--p">
   <a class="markup--anchor markup--p-anchor" data-href="https://www.mediafire.com/file/z8vfcj5tw95qh1c/dummy.docx/file" href="https://www.mediafire.com/file/z8vfcj5tw95qh1c/dummy.docx/file" rel="noopener noreferrer" target="_blank">
    下载
   </a>
   并继续。您会发现密码是 “ password123”。您还可以下载使用
   <a class="markup--anchor markup--p-anchor" data-href="https://www.mediafire.com/file/r87tdglm0lcrfjg/themotherload.docx/file" href="https://www.mediafire.com/file/r87tdglm0lcrfjg/themotherload.docx/file" rel="noopener noreferrer" target="_blank">
    Word 2010
   </a>
   和
   <a class="markup--anchor markup--p-anchor" data-href="https://www.mediafire.com/file/9i9s68c54clrpar/Something_Super_Secret.docx/file" href="https://www.mediafire.com/file/9i9s68c54clrpar/Something_Super_Secret.docx/file" rel="noopener noreferrer" target="_blank">
    Word 2016
   </a>
   （显示2013）制作的文档，以用于更多示例。这些文档的密码也是 “ password123”。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     第三步：使用 Office2john 提取哈希
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   需要做的第一件事是提取受密码保护的Office文件的哈希。运行以下命令，并将输出传递到 “ hash.txt”，以供以后使用。
  </p>
  <pre class="graf graf--pre"><code>~# python office2john.py dummy.docx &gt; hash.txt</code></pre>
  <p class="graf graf--p">
   要验证哈希是否已成功提取，请使用
   <strong class="markup--strong markup--p-strong">
    cat
   </strong>
   。可以看到这里保存的哈希对应于 Microsoft Office2007。整洁。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">~# cat hash.txt

dummy.docx:$office$*2007*20*128*16*a7c7a4eadc2d90fb22c073c6324b6b49*abc5f80409f5f96f97e184e44aacd0b7*930b0c48a7eb5e13a57af4f3030b48e9402b6870</code></pre>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     第四步：破解刚刚保存的哈希
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   如前所述，这里将向您展示两种破解从密码保护的 Microsoft Office 文件中提取的哈希的方法。两种方法都很好用，所以这完全取决于您的偏好。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    方法一：使用 John
   </span>
  </h3>
  <p class="graf graf--p">
   用
   <strong class="markup--strong markup--p-strong">
    — wordlist
   </strong>
   指定字典（可以对字典再添加规则）。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">~# john --wordlist=/usr/share/wordlists/nmap.lst hash.txt

Using default input encoding: UTF-8
Loaded 1 password hash (Office, 2007/2010/2013 [SHA1 128/128 SSE2 4x / SHA512 128/128 SSE2 2x AES])
Cost 1 (MS Office version) is 2007 for all loaded hashes
Cost 2 (iteration count) is 50000 for all loaded hashes
Will run 4 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status</code></pre>
  <p class="graf graf--p">
   John 将开始破解，时间取决于密码的复杂性，当找到匹配项时，它就会结束。按任意键可以查看当前状态。
  </p>
  <p class="graf graf--p">
   破解哈希后，屏幕上会显示一条消息，其中包含文档的密码：由于此案例的密码非常简单，因此只需几秒钟即可破解它。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">password123      (dummy.docx)
1g 0:00:00:03 DONE (2019-02-05 15:00) 0.2824g/s 415.8p/s 415.8c/s 415.8C/s lacoste..cooldude
Use the "--show" option to display all of the cracked passwords reliably
Session completed</code></pre>
  <p class="graf graf--p">
   也可以使用
   <strong class="markup--strong markup--p-strong">
    — show
   </strong>
   来显示它，如下所示：
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">~# john --show hash.txt

dummy.docx:password123

1 password hash cracked, 0 left</code></pre>
  <p class="graf graf--p">
   下面来看看另一种方法，使用功能强大的工具 Hashcat。被称为世界上最快的密码破解软件。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #00ccff;">
    <strong class="markup--strong markup--p-strong">
     方法二：使用 Hashcat
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   可以先显示 Hashcat 的帮助菜单（
   <strong class="markup--strong markup--p-strong">
    — help
   </strong>
   ）。这将为您提供大量信息，包括使用选项、哈希模式和其他功能。如果您真的想了解 Hashcat，应该深入研究下它。
  </p>
  <pre class="graf graf--pre"><code>~# hashcat --help</code></pre>
  <p class="graf graf--p">
   基于本案例，输出中只对 MS Office 哈希模式感兴趣。在帮助菜单底部附近可以找到 MS Office 模式选项及其相应编号。
  </p>
  <p class="graf graf--p">
   从哈希中您可以知道这是一个 Office 2007 文件，因此找到其编号 ID
   <strong class="markup--strong markup--p-strong">
    9400
   </strong>
   。
  </p>
  <p class="graf graf--p">
   现在可以使用以下命令设置其余选项。
  </p>
  <pre class="graf graf--pre"><code>~# hashcat -a 0 -m 9400 --username -o cracked_pass.txt hash.txt /usr/share/wordlists/nmap.lst</code></pre>
  <ul class="postList">
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     -a
    </strong>
    将攻击类型设置为默认模式
    <strong class="markup--strong markup--li-strong">
     0
    </strong>
    。
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     -m
    </strong>
    指定要使用的模式。
   </li>
   <li class="graf graf--li">
    <strong class="markup--strong markup--li-strong">
     — username
    </strong>
    忽略哈希文件中的任何用户名。
   </li>
   <li class="graf graf--li">
    使用
    <strong class="markup--strong markup--li-strong">
     -o
    </strong>
    将输出文件指定为 cracked.txt。
   </li>
   <li class="graf graf--li">
    最后一步和方法一相同。
   </li>
  </ul>
  <p class="graf graf--p">
   然后，Hashcat 将开始破解。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">hashcat (v5.1.0) starting...

* Device #2: Not a native Intel OpenCL runtime. Expect massive speed loss.
             You can use --force to override, but do not report related errors.
OpenCL Platform #1: Intel(R) Corporation
========================================
* Device #1: Intel(R) Core(TM) i5 CPU       M 480  @ 2.67GHz, 934/3736 MB allocatable, 4MCU</code></pre>
  <p class="graf graf--p">
   一段时间后，状态将显示为“已破解”，准备好查看密码。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">Session..........: hashcat
Status...........: Cracked
Hash.Type........: MS Office 2007
Hash.Target......: $office$*2007*20*128*16*a7c7a4eadc2d90fb22c073c6324...2b6870
Time.Started.....: Tue Feb  5 15:08:00 2019 (4 secs)
Time.Estimated...: Tue Feb  5 15:08:04 2019 (0 secs)
Guess.Base.......: File (/usr/share/wordlists/nmap.lst)
Guess.Queue......: 1/1 (100.00%)
Speed.#1.........:      610 H/s (8.51ms) @ Accel:512 Loops:128 Thr:1 Vec:4
Recovered........: 1/1 (100.00%) Digests, 1/1 (100.00%) Salts
Progress.........: 2048/5084 (40.28%)
Rejected.........: 0/2048 (0.00%)
Restore.Point....: 0/5084 (0.00%)
Restore.Sub.#1...: Salt:0 Amplifier:0-1 Iteration:49920-50000
Candidates.#1....: #!comment:  ***********************IMPORTANT NMAP LICENSE TERMS************************ -&gt; Princess

Started: Tue Feb  5 15:07:50 2019
Stopped: Tue Feb  5 15:08:05 2019</code></pre>
  <p class="graf graf--p">
   只需
   <strong class="markup--strong markup--p-strong">
    cat
   </strong>
   指定输出文件，它将显示哈希，并在末尾附加明文密码。
  </p>
  <pre class="graf graf--pre"><code class="markup--code markup--pre-code">~# cat cracked_pass.txt

$office$*2007*20*128*16*a7c7a4eadc2d90fb22c073c6324b6b49*abc5f80409f5f96f97e184e44aacd0b7*930b0c48a7eb5e13a57af4f3030b48e9402b6870:password123</code></pre>
  <p class="graf graf--p">
   成功！
  </p>
  <p class="graf graf--p">
   以上是使用 office2john 从受密码保护的 Microsoft Office 文件中提取哈希后破解出密码的两种方法。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     如何防止被破解
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   对于任何形式的密码破解都一样，最好的防御技术是使用相对安全的密码实践。这意味着使用更长且不容易猜到的唯一密码。结合使用大小写字母，数字和符号。
  </p>
  <p class="graf graf--p">
   更好是随机生成的长密码，几乎不可能破解它们。
  </p>
  <p class="graf graf--p">
   关于此特定攻击，由于 office2john 旨在在早期版本的Office上工作，因此使用 Microsoft Office 2016 或 2019 或更高版本的文档可能无效。
  </p>
  <p class="graf graf--p">
   但是，如您在上面看到的，Office 2016可能会在用户不知情的情况下吐出2013的文档，因此这并不意味着无法破解“新”文件。
  </p>
  <p class="graf graf--p">
   另外，仍然有大量较旧的 Microsoft Office 文档随处可见，并且一些组织继续使用这些较旧的版本，从而使该攻击直到今天仍然非常流行。
  </p>
  <h3 class="graf graf--p">
   <span style="color: #339966;">
    <strong class="markup--strong markup--p-strong">
     最后
    </strong>
   </span>
  </h3>
  <p class="graf graf--p">
   现在您知道了，受密码保护的 Microsoft Office 文件的安全性远不如人意。
  </p>
  <p class="graf graf--p">
   这些类型的文件今天仍然很常用，因此，如果您自己或朋友的文件忘了密码，请放心，有一种方法可以将其破解。⚪️
  </p>
  <div id="atatags-1611829871-5f426b4c2520d">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-11357" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e7%a0%b4%e8%a7%a3%e5%8f%97%e5%af%86%e7%a0%81%e4%bf%9d%e6%8a%a4%e7%9a%84microsoft-office%e6%96%87%e4%bb%b6%ef%bc%8c%e5%8c%85%e6%8b%acword%e6%96%87%e6%a1%a3%e5%92%8cexcel%e7%94%b5/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-11357" href="https://www.iyouport.org/%e5%a6%82%e4%bd%95%e7%a0%b4%e8%a7%a3%e5%8f%97%e5%af%86%e7%a0%81%e4%bf%9d%e6%8a%a4%e7%9a%84microsoft-office%e6%96%87%e4%bb%b6%ef%bc%8c%e5%8c%85%e6%8b%acword%e6%96%87%e6%a1%a3%e5%92%8cexcel%e7%94%b5/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-11357-5f426b4c25bf5" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=11357&amp;origin=www.iyouport.org&amp;obj_id=161182987-11357-5f426b4c25bf5" id="like-post-wrapper-161182987-11357-5f426b4c25bf5">
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
    <a href="https://www.iyouport.org/tag/hacking/" rel="tag">
     hacking
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/microsoft-office/" rel="tag">
     microsoft-office
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/security/" rel="tag">
     Security
    </a>
   </li>
   <li>
    <a href="https://www.iyouport.org/tag/selfcare/" rel="tag">
     selfcare
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
   <time class="entry-date published" datetime="2020-05-19T00:04:04+08:00">
    2020年5月19日
   </time>
   <time class="updated" datetime="2019-12-08T21:29:15+08:00">
    2019年12月8日
   </time>
  </div>
 </div>
</article>

