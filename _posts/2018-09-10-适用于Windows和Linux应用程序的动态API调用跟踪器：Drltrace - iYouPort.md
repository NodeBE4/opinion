---
layout: post
title: "适用于Windows和Linux应用程序的动态API调用跟踪器：Drltrace - iYouPort"
date: 2018-09-10T14:42:25+00:00
author: iYouPort
from: https://www.iyouport.org/%e9%80%82%e7%94%a8%e4%ba%8ewindows%e5%92%8clinux%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e7%9a%84%e5%8a%a8%e6%80%81api%e8%b0%83%e7%94%a8%e8%b7%9f%e8%b8%aa%e5%99%a8%ef%bc%9adrltrace/
tags: [ iYouPort ]
categories: [ iYouPort ]
---

<article class="post-7995 post type-post status-publish format-standard has-post-thumbnail hentry category-knowledge-node category-newsletters category-289 category-54 tag-drltrace tag-technology tag-tools" id="post-7995">
 <header class="entry-header">
  <h1 class="entry-title">
   适用于Windows和Linux应用程序的动态API调用跟踪器：Drltrace
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
   <a href="https://www.iyouport.org/category/newsletters/" rel="category tag">
    Newsletters
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af/" rel="category tag">
    技术
   </a>
   ,
   <a href="https://www.iyouport.org/category/%e6%8a%80%e6%9c%af%e9%98%b2%e8%ba%ab-%e8%87%aa%e6%88%91%e4%bf%9d%e6%8a%a4%e6%96%b9%e6%b3%95/" rel="category tag">
    技术防身/自我保护方法
   </a>
  </span>
  <span class="published-on">
   <time class="entry-date published" datetime="2018-09-10T22:42:25+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:43:52+08:00">
    2019年8月10日
   </time>
  </span>
  <span class="word-count">
   2 Minutes
  </span>
 </div>
 <div class="entry-content">
  <p>
   Drltrace是一个动态API调用跟踪器，
   <strong>
    主要用于恶意软件分析的Windows和Linux应用程序
   </strong>
   .Drltrace构建于
   <a href="http://www.dynamorio.org/" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    DynamoRIO
   </a>
   动态二进制检测框架之上。发布版本可以
   <a href="https://github.com/mxmssh/drltrace/releases" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    在这里
   </a>
   下载。
  </p>
  <p>
   <strong>
    用法
   </strong>
  </p>
  <p>
   drltrace的用法非常简单。用户需要通过以下方式指定日志目录和目标进程的名称：
  </p>
  <p>
   <code>
    drltrace -logdir . -- calc.exe
   </code>
  </p>
  <p>
   就是这样，该工具将在目标进程中注入所需的DLL，启动检测并且并行地记录有关在目标进程中执行的所有库调用的信息：
  </p>
  <p>
   <code>
    ~~43600~~ msvcrt.dll!__wgetmainargs
    <br/>
    arg 0: 0x010d2364
    <br/>
    arg 1: 0x010d2368
    <br/>
    and return to module id:0, offset:0x193a
    <br/>
    ~~43600~~ ntdll.dll!EtwEventRegister
    <br/>
    arg 0: 0x002ff994
    <br/>
    arg 1: 0x010d1490
    <br/>
    and return to module id:0, offset:0x157e
    <br/>
    ~~43600~~ ntdll.dll!EtwEventSetInformation
    <br/>
    arg 0: 0x007b4b40
    <br/>
    arg 1: 0x00000033
    <br/>
    and return to module id:0, offset:0x15a1
    <br/>
    ~~43600~~ SHELL32.dll!ShellExecuteW
    <br/>
    arg 0: &amp;lt;null&amp;gt; (type=&amp;lt;unknown&amp;gt;, size=0x0)
    <br/>
    arg 1: &amp;lt;null&amp;gt; (type=wchar_t*, size=0x0)
    <br/>
    arg 2: calculator:// (type=wchar_t*, size=0x0)
    <br/>
    arg 3: &amp;lt;null&amp;gt; (type=wchar_t*, size=0x0)
    <br/>
    arg 4: &amp;lt;null&amp;gt; (type=wchar_t*, size=0x0)
    <br/>
    arg 5: 0x1 (type=int, size=0x4)
    <br/>
    and return to module id:0, offset:0x167d
   </code>
  </p>
  <p>
   输出的格式很简单，可以通过外部脚本轻松解析：
  </p>
  <p>
   <code>
    ~~[thread id]~~ [dll name]![api call name]
    <br/>
    arg [arg #]: [value] (type=[Windows type name], size=[size of arg])
    <br/>
    and return to module id:[module unique id], offset:[offset in memory]
   </code>
  </p>
  <p>
   模块唯一标识符表打印在日志文件的末尾：
  </p>
  <p>
   <code>
    Module Table: version 3, count 70
    <br/>
    Columns: id, containing_id, start, end, entry, checksum, timestamp, path
    <br/>
    0,   0, 0x010d0000, 0x010da000, 0x010d1b80, 0x0000f752, 0xb5fe3575,  C:\Windows\SysWOW64\calc.exe
    <br/>
    1,   1, 0x6d4c0000, 0x6d621000, 0x6d563940, 0x00136d65, 0x59ce1b0b,  C:\Users\Max\Downloads\drltrace\drltrace\dynamorio\lib32\release\dynamorio.dll
    <br/>
    2,   2, 0x73800000, 0x73975000, 0x7380dbf7, 0x00000000, 0x59ce1b0f,  C:\Users\Max\Downloads\drltrace\drltrace\bin\release/drltracelib.dll
    <br/>
    3,   3, 0x742f0000, 0x742fa000, 0x742f2a00, 0x0000c877, 0x0adc52c1,  C:\Windows\System32\CRYPTBASE.dll
    <br/>
    4,   4, 0x74300000, 0x74320000, 0x7430c9b0, 0x0002c617, 0x245970b4,  C:\Windows\System32\SspiCli.dll
    <br/>
    5,   5, 0x74410000, 0x74431000, 0x74416900, 0x0002a940, 0x88a53c1d,  C:\Windows\System32\GDI32.dll
    <br/>
    6,   6, 0x74440000, 0x74500000, 0x7446fb20, 0x000cc410, 0xd343d532,  C:\Windows\System32\RPCRT4.dll
    <br/>
    7,   7, 0x74500000, 0x74525000, 0x745047d0, 0x00026737, 0xa39c8991,  C:\Windows\System32\IMM32.DLL
    <br/>
    8,   8, 0x74550000, 0x745c7000, 0x7456e8a0, 0x00081857, 0x73b971e1,  C:\Windows\System32\advapi32.dll
    <br/>
    9,   9, 0x748f0000, 0x74929000, 0x748febd0, 0x00045303, 0xa58be652,  C:\Windows\System32\cfgmgr32.dll
    <br/>
    10,  10, 0x74930000, 0x75c78000, 0x74aa09d0, 0x01377aa6, 0x4b39926b,  C:\Windows\System32\SHELL32.dll
   </code>
  </p>
  <p>
   <strong>
    Drltrace
   </strong>
  </p>
  <p>
   Drltrace可以通过指定-only_from_app选项来轻松过滤掉掉所有程序的主模块（或堆）执行的API调用，这对于生成大型日志的应用程序非常有用.Drltrace还有几个有用的外部脚本来过滤某些库的API调用，只打印可能有趣的API调用和字符串。
  </p>
  <p>
   <strong>
    执照
   </strong>
  </p>
  <p>
   Drltrace主要模块在BSD下被分发。
  </p>
  <p>
   drltrace所需的一些文件在LGPL下是distrubuted。有关详细信息，请参阅源文件
  </p>
  <p>
   <strong>
    动机
   </strong>
  </p>
  <p>
   恶意软件分析并非易事。像Themida和Armadillo这样的复杂软件包装工具当然还有数十个由恶意软件作者编写的未命名的打包器以及代码和数据加密技术，大大方便了（在某些情况下完全不可能）这些样本的静态逆向工程使得恶意软件分析师的生活变得复杂。在这种情况下，API调用跟踪可以显着减少了解实际恶意意图所需的时间，并揭示有关受保护恶意代码的大量技术细节。
  </p>
  <p>
   虽然传统的API挂钩技术已在多个解决方案中成功实施，但该方法已被恶意软件作者充分研究，并且可以轻松检测和/或绕过。此外，这些工具作为独立的重量级GUI应用程序（作为专有产品）分发，这些应用程序通常不容易在现有的恶意软件分析工作流程中集成。
  </p>
  <p>
   如果我们看看Linux世界，有一个很棒的工具叫做ltrace。使用单个bash命令，我们可以轻松获得某个可执行文件的API调用的完整跟踪。
  </p>
  <p>
   <strong>
    为什么我们不为Windows提供这样的工具（如Linux中的ltrace），这对于现代恶意软件使用的反研究技巧也是透明的？
   </strong>
  </p>
  <p>
   它转变为有一种技术可以帮助我们为Windows提供这样的工具，并对执行程序透明地跟踪API调用。这种技术称为动态二进制检测，即DBI.DBI是一种通过注入检测代码在运行时分析二进制应用程序行为的技术。
  </p>
  <p>
   但是，DBI用于恶意软件分析的应用受到了解包自动化以及指令，基本块和函数调用跟踪概念的若干证明的不应有限。据我们所知，drltrace是基于DBI的API调用跟踪的第一个工具，可以在实践中用于恶意软件分析。我们在wiki中提供了几个恶意软件分析示例，其中我们描述了drltrace如何允许在几分钟内陶醉许多关于复杂恶意样本的内部技术细节，甚至无需启动IDA或调试器。
  </p>
  <p>
   <strong>
    为什么选择Drltrace Rock？
   </strong>
  </p>
  <ul>
   <li>
    足够快，可以执行恶意样本分析，而不会被基于时间的反研究技术检测到。
   </li>
   <li>
    支持86和64（未来的ARM）。
   </li>
   <li>
    支持的Windows和Linux（将来的Mac系统）。
   </li>
   <li>
    支持自修改代码。
   </li>
   <li>
    支持所有类型的库链接（静态和动态）。
   </li>
   <li>
    通过标准的反研究方法（反钩，反调试和反仿真）无法检测到。
   </li>
   <li>
    用户可以轻松添加新的函数原型，告诉drltrace如何打印有关以前未知的API调用的更多详细信息（甚至是非系统DLL）。使用外部配置文件。
   </li>
   <li>
    易于使用和修改，用于您自己的目的（没有额外的包要求，没有重量级的GUI界面）。
   </li>
   <li>
    开源，代码清晰，文档齐全。您可以在drltrace之上自由构建和使用自己的高级解决方案。
   </li>
  </ul>
  <p>
   <strong>
    命令行选项
   </strong>
  </p>
  <p>
   <code>
    -logdir              [     .]  Log directory to print library call data
    <br/>
    -only_from_app       [ false]  Reports only library calls from the app
    <br/>
    -follow_children     [  true]  Trace child processes
    <br/>
    -print_ret_addr      [ false]  Print library call's return address
    <br/>
    -num_unknown_args    [     2]  Number of unknown libcall args to print
    <br/>
    -num_max_args        [     6]  Maximum number of arguments to print
    <br/>
    -default_config      [  true]  Use default config file.
    <br/>
    -config              [    ""]  The path to custom config file.
    <br/>
    -ignore_underscore   [ false]  Ignores library routine names starting with "_".
    <br/>
    -only_to_lib         [    ""]  Only reports calls to the library &amp;lt;lib_name&amp;gt;.
    <br/>
    -help                [ false]  Print this message.
    <br/>
    -version             [ false]  Print version number.
    <br/>
    -verbose             [     1]  Change verbosity.
    <br/>
    -use_config          [  true]  Use config file
   </code>
  </p>
  <p>
   <strong>
    配置文件语法
   </strong>
  </p>
  <p>
   Drltrace支持外部配置文件，用户可以在其中描述drltrace应如何为某些API调用打印参数。
  </p>
  <p>
   <code>
    HANDLE|CreateRemoteThread|HANDLE|SECURITY_ATTRIBUTES*|size_t|THREAD_START_ROUTINE*|VOID*|DWORD|__out DWORD*
   </code>
  </p>
  <p>
   每个函数参数都应该用|。第一个参数是返回类型，第二个参数是函数名称本身，其余参数是函数参数令牌__out用于标记输出参数，___ INOUT用于标记输入+输出参数。
  </p>
  <p>
   <strong>
    恶意软件分析示例
   </strong>
  </p>
  <p>
   您可以在
   <a href="https://github.com/mxmssh/drltrace/wiki/Malware-Analysis-Examples" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    Wiki页面
   </a>
   找到如何使用drltrace分析复杂恶意软件的示例。
  </p>
  <p>
   <strong>
    记录可视化
   </strong>
  </p>
  <p>
   为了简化日志文件的工作，这里实现了一个脚本api_calls_viz.py，可以用来生成RGB图像，其中每个像素颜色代表唯一的API调用。例如，下图显示了WannaCry恶意软件的日志文件。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7996 jetpack-lazy-image" data-lazy-sizes="(max-width: 586px) 100vw, 586px" data-lazy-src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?resize=586%2C632&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?w=586&amp;ssl=1 586w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?resize=278%2C300&amp;ssl=1 278w" data-recalc-dims="1" height="632" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?resize=586%2C632&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="586"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7996" data-recalc-dims="1" height="632" sizes="(max-width: 586px) 100vw, 586px" src="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?resize=586%2C632&amp;ssl=1" srcset="https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?w=586&amp;ssl=1 586w, https://i0.wp.com/www.iyouport.org/wp-content/uploads/2019/08/00-38.png?resize=278%2C300&amp;ssl=1 278w" width="586"/>
   </noscript>
  </p>
  <p>
   图片中的大绿域表示API调用（
   <code>
    wcscmp/wcsicmp
   </code>
   ），用于选择具有有趣扩展名的文件（例如docx，xl​​ s，py）来加密它们。紫域表示API调用（
   <code>
    FindFirstFile/FindNextFile/CryptEncrypt
   </code>
   ），用于枚举和加密磁盘上的文件和文件夹。
  </p>
  <p>
   该脚本还可以生成生成的RGB图像的HTML表示，其中可以选择每个元素以显示API调用的名称。
  </p>
  <p>
   <img alt="" class="aligncenter size-full wp-image-7997 jetpack-lazy-image" data-lazy-sizes="(max-width: 964px) 100vw, 964px" data-lazy-src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=964%2C662&amp;is-pending-load=1#038;ssl=1" data-lazy-srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?w=964&amp;ssl=1 964w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=300%2C206&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=768%2C527&amp;ssl=1 768w" data-recalc-dims="1" height="662" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=964%2C662&amp;ssl=1" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="964"/>
   <noscript>
    <img alt="" class="aligncenter size-full wp-image-7997" data-recalc-dims="1" height="662" sizes="(max-width: 964px) 100vw, 964px" src="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=964%2C662&amp;ssl=1" srcset="https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?w=964&amp;ssl=1 964w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=300%2C206&amp;ssl=1 300w, https://i1.wp.com/www.iyouport.org/wp-content/uploads/2019/08/22.png?resize=768%2C527&amp;ssl=1 768w" width="964"/>
   </noscript>
  </p>
  <p>
   这里是
   <a href="https://github.com/mxmssh/drltrace/blob/master/pictures/wannacry_truncated_log.html" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    原始HTML文件
   </a>
   。
  </p>
  <p>
   有关详细信息，请参阅
   <code>
    api_calls_viz
   </code>
   <a href="https://github.com/mxmssh/drltrace/tree/master/api_calls_viz" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    目录
   </a>
   。
  </p>
  <p>
   <strong>
    如何建立
   </strong>
  </p>
  <p>
   您可以在此
   <a href="https://github.com/mxmssh/drltrace/wiki/How-To-Build" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    Wiki页面
   </a>
   上找到详细的手册。
  </p>
  <p>
   <strong>
    OS支持
   </strong>
  </p>
  <p>
   在Windows，Linux（未来的Mac系统）。
  </p>
  <p>
   <strong>
    CPU架构支持
   </strong>
  </p>
  <p>
   x86，x64（列表中的ARM）。
  </p>
  <p>
   <strong>
    语言
   </strong>
  </p>
  <p>
   C和C ++标准库（以及用Python编写的日志处理脚本）。
  </p>
  <p>
   <strong>
    技术细节
   </strong>
  </p>
  <p>
   我们决定在动态二进制检测框架DynamoRIO之上实现我们的API调用跟踪器.Drltrace要求
   <a href="http://www.dynamorio.org/" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    DynamoRIO
   </a>
   执行LoadLibrary调用的检测，以便能够处理目标进程正在加载的新库。当进程尝试加载新库时，DynamoRIO会将控制流重定向到drltracelib.dll。反过来，drltrace枚举新加载的DLL中的导调函数，并为每个函数注册一个特殊的回调函数。因此，如果恶意软件会调用某些导出的函数，则会在此函数之前执行drltrace的回调，并且该工具将能够记录所有必要的信息，例如函数名和参数。可以在保存执行结果的函数之后注册另一个回调。
  </p>
  <p>
   为什么不是Intel Pin？决定使用DynamoRIO的原因如下：
  </p>
  <ol>
   <li>
    DynamoRIO的源代码可在github.com上获得，并在BSD许可下分发，而Intel Pin是专有软件。
   </li>
   <li>
    DynamoRIO在开发时的基本要求之一是对仪表化可执行文件的透明度。
   </li>
   <li>
    DynamoRIO使用基于代码转换的不同仪器技术，而英特尔PIN使用特殊的蹦床，这对于分析的可执行文件不透明，可能被恶意软件检测到。
   </li>
  </ol>
  <p>
   <strong>
    致谢
   </strong>
  </p>
  <p>
   Maksim Shudrak
   <a href="https://github.com/mxmssh" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    https://github.com/mxmssh
   </a>
  </p>
  <p>
   Derek Bruening
   <a href="https://github.com/derekbruening" rel="nofollow noopener" title="此链接将带您离开steemit.com">
    https://github.com/derekbruening
   </a>
  </p>
  <div id="atatags-1611829871-5f402f23bb3a0">
  </div>
  <div class="sharedaddy sd-sharing-enabled">
   <div class="robots-nocontent sd-block sd-social sd-social-icon sd-sharing">
    <h3 class="sd-title">
     共享此文章：
    </h3>
    <div class="sd-content">
     <ul>
      <li class="share-twitter">
       <a class="share-twitter sd-button share-icon no-text" data-shared="sharing-twitter-7995" href="https://www.iyouport.org/%e9%80%82%e7%94%a8%e4%ba%8ewindows%e5%92%8clinux%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e7%9a%84%e5%8a%a8%e6%80%81api%e8%b0%83%e7%94%a8%e8%b7%9f%e8%b8%aa%e5%99%a8%ef%bc%9adrltrace/?share=twitter" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Twitter 上共享">
        <span>
        </span>
        <span class="sharing-screen-reader-text">
         点击以在 Twitter 上共享（在新窗口中打开）
        </span>
       </a>
      </li>
      <li class="share-facebook">
       <a class="share-facebook sd-button share-icon no-text" data-shared="sharing-facebook-7995" href="https://www.iyouport.org/%e9%80%82%e7%94%a8%e4%ba%8ewindows%e5%92%8clinux%e5%ba%94%e7%94%a8%e7%a8%8b%e5%ba%8f%e7%9a%84%e5%8a%a8%e6%80%81api%e8%b0%83%e7%94%a8%e8%b7%9f%e8%b8%aa%e5%99%a8%ef%bc%9adrltrace/?share=facebook" rel="nofollow noopener noreferrer" target="_blank" title="点击以在 Facebook 上共享">
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
  <div class="sharedaddy sd-block sd-like jetpack-likes-widget-wrapper jetpack-likes-widget-unloaded" data-name="like-post-frame-161182987-7995-5f402f23bce2e" data-src="https://widgets.wp.com/likes/#blog_id=161182987&amp;post_id=7995&amp;origin=www.iyouport.org&amp;obj_id=161182987-7995-5f402f23bce2e" id="like-post-wrapper-161182987-7995-5f402f23bce2e">
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
    <a href="https://www.iyouport.org/tag/drltrace/" rel="tag">
     Drltrace
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
   <time class="entry-date published" datetime="2018-09-10T22:42:25+08:00">
    2018年9月10日
   </time>
   <time class="updated" datetime="2019-08-10T22:43:52+08:00">
    2019年8月10日
   </time>
  </div>
 </div>
</article>

