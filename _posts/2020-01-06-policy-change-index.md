---
layout: post
title: "Policy Change Index-阅读中国，用机器学习预测政策变化"
author: chinatimeline
date: 2020-01-06
tags: [论文, 政策, 机器学习, 经济学]
from: https://2049bbs.xyz/t/2410
hackmd: isRxTxY1ShKbje6C4F7N5A
comments: true
---

前段时间大家在分享论文，我也分享一个已经被广泛报道过的研究项目 Policy Change Index 政策变化指数

官方网站 [https://policychangeindex.org/](https://policychangeindex.org/)
## PCI-China

其中PCI-China去年已经被科技媒体广泛报道过了，这个项目是George Mason University的Mercatus Center两名经济学家Julian TszKin Chan和机器学习专家Weifeng Zhong合作的项目，受NVIDA资助。该项目用机器学习阅读中共的官方喉舌[人民日报]自1946年创建以来的所有报纸文字，并且用机器学习技术去检测该报纸在设置政策优先级的方式上的变化，从而生成单一的政策变化指数。目前，该指数以季度为最小单位，每季度更新一次，将来会升级到按月为颗粒度，每月更新一次。具体见发布页面

[https://policychangeindex.org/overview-PCI-China.html](https://policychangeindex.org/overview-PCI-China.html)

![PCI-China](https://i.imgur.com/PveU3o0.png "PCI-China and major events in China, 1951 Q1 to 2019 Q3")

我个人认为PCI-China政策变化指数整体上很make sense，且在时间上比我自己阅读新闻获得的感受要早6-12个月，所以应该是很值得长期跟踪。
## PCI-Crackdown

相比PCI-China，一个更新但更有意思的是PCI-Crackdown，同样是以人民日报为数据，通过跟8964镇压前后几个月的内容进行对比，用来预测当前香港发生64式镇压的可能性。个人认为其结果高度符合自己对媒体环境的感受。尤其是两个高峰期：8月13日左右外媒拍到深圳体育场军队集结和特朗普喊话不要镇压，10月下旬禁蒙面法之后发生暴力升级等等，以及10月1日前后和12月下旬第一阶段贸易协议临近的缓和期。非常符合直观感受。

[https://policychangeindex.org/overview-PCI-Crackdown.html](https://policychangeindex.org/overview-PCI-Crackdown.html)

![PCI-Crackdown](https://i.imgur.com/ed4qMfz.png "Figure: PCI-Crackdown for 2019 Hong Kong protests, Jun 9 to Dec 31")

PS： PCI所用的互动图插件跟我的时间线用的绘图插件都是一样的 Plotly。

## Papers在官网上列出

- Chan, Julian TszKin and Weifeng Zhong. 2019. “The ‘Value’ of Propaganda: Machine Predictions of Rare Events Based on Text Data,” Yale Journal of International Affairs (forthcoming).
- Chan, Julian TszKin and Weifeng Zhong. 2019. “Predicting Authoritarian Crackdowns: A Machine Learning Approach,” Mercatus Working Paper (forthcoming).
- Chan, Julian TszKin and Weifeng Zhong. 2019. “Reading China: Predicting Policy Change with Machine Learning.” AEI Economics Working Paper No. 2018-11 (latest version available here).
- Chan, Julian TszKin and Weifeng Zhong. 2018. “Policy Change Index: A Simulated Example.” Quantitative Notes, No. 2018-3.

###### tags: `论文` `政策` `机器学习` `经济学`