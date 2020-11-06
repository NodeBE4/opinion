let Parser = require('rss-parser')
let fs = require('fs')
let querystring = require('querystring')
let urlMod = require('url')
let URL = urlMod.URL


let jsonText = fs.readFileSync('./subs.json');
let feedxUrls = JSON.parse(jsonText);
let content = JSON.stringify(feedxUrls, undefined, 4);
fs.writeFileSync(`./subs.json`, content)

async function fetchArticles(site) {

  let articles
  if (site['url']) {
    articles = await fetchFeedx(site['site'], site['url'])
  } else if (site == '中国数字时代') {
    articles = await fetchCDT()
  }

  articles.sort((x, y) => x.pubDate - y.pubDate)

  return articles
}

async function fetchFeedx(site, url) {
  let parser = new Parser({customFields: {
                              item: [
                                ['media:group', 'media:group'],
                              ]
                            }
                          })
  let feed = await parser.parseURL(url)

  return feed.items.map(item => {
    let content;
    let link;
    if(item['content:encoded']){
      content = item['content:encoded']
    }else if (item['media:group']) {
      content = item['media:group']['media:description'][0]
    }else if (item['description']) {
      content = item['description']
    }else{
      content = item.content
    }
    if (item['link']){
      link = item.link
    }else{
      link = item.guid
    }
    let author = site
    if (item['author']){
      author = item.author
    }else if (item['dc:creator']){
      author = item['dc:creator']
    }
    return {
      title: item.title.replace(/[\x00-\x1F\x7F-\x9F]/g, ""),
      content: content.replace(/[\x00-\x1F\x7F-\x9F]/g, ""),
      link: link,
      pubDate: Date.parse(item.pubDate),
      site: site,
      author: author
    }
  })
}

async function fetchCDT() {
  let parser = new Parser()
  let feed = await parser.parseURL('https://chinadigitaltimes.net/chinese/feed/')

  let emojiRegexp = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/

  let validArticles = feed.items.filter(item => {
    let categories = item.categories.filter(c => c.match(emojiRegexp))
    return categories.length > 0
  })

  return validArticles.map(item => {
    return {
      title: item.title,
      content: item['content:encoded'],
      link: item.link,
      guid: item.guid,
      pubDate: Date.parse(item.pubDate),
      site: '中国数字时代',
      author: '中国数字时代'
    }
  })
}

async function performCDT() {
  let site = '中国数字时代'
  try {
    // let siteFolder = `./news/${site}/_posts`
    let siteFolder = `./_posts`
    fs.mkdirSync(siteFolder, { recursive: true })

    let articles = await fetchCDT()

    articles.map(a => {
      generateArticle(a)
    })

    // generateList(site)
  } catch(e) {
    console.log([site, e])
  }
}

async function perform() {
  // let sites = Object.keys(feedxUrls)
  let sites = feedxUrls

  sites.map(site => {
    performSite(site)
  })
  // performCDT()
  // performSite('自由亚洲电台')
}

async function performSite(site) {
  try {
    // let siteFolder = `./news/${site}/_posts`
    let siteFolder = `./_posts`
    fs.mkdirSync(siteFolder, { recursive: true })

    let articles = await fetchArticles(site)

    articles.map(a => {
      generateArticle(a)
    })

    // generateList(site)
  } catch(e) {
    console.log([site['site'], e])
  }
}

function generateArticle(article) {
  let today = new Date()
  let md = renderMD(article)
  let pubDate = timeConverter(article.pubDate)
  if (today < pubDate) {
    pubDate = today
  }
  let dateString = pubDate.toISOString()
  let titletext = article.title.toString().replace(/"/g, '\\"').replace("...", '')
  let articlelink = new URL(article.link).href
  let header = `---
layout: post
title: "${titletext}"
date: ${dateString}
author: ${article.author}
from: ${articlelink}
tags: [ ${article.site} ]
categories: [ ${article.site} ]
---
`
  md = header + md
  let filename = `${dateString.substring(0, 10)}-${titletext.substring(0, 50)}.md`.replace(/\//g, '--')
  if (!fs.existsSync(`./_posts/${filename}`)) {
    fs.writeFileSync(`./_posts/${filename}`, md)
    console.log(`add ./_posts/${filename}`)
  }
}

function generateList(site) {
  let siteFolder = `./lists/${site}`
  if (!fs.existsSync(siteFolder)){
      fs.mkdirSync(siteFolder);
  }
  let files = fs.readdirSync(siteFolder).slice(0, 100)

  let listItems = files.map(item => {
    let title = item.match(/^\d+_([\s\S]+)\.md$/)[1]
    let timestamp = fs.readFileSync(`${siteFolder}/${item}`, 'utf8').match(/<!--(\d+)-/)
    let date = ''
    if (timestamp) {
      let gmtPlus8 = new Date(+timestamp[1] + 8 * 60 * 60 * 1000)
      date = `${gmtPlus8.getUTCMonth() + 1}-${gmtPlus8.getUTCDate()} `
    }
    return `${date}[${strip(title)}](/lists/${urlMod.resolve('', `${site}/${item}`)})\n`
  })
  let list = listItems.join("\n")
  let md = `${site}
------

${list}

[查看更多](/lists/${site})`
  fs.writeFileSync(`./lists/${site}.md`, md)
}

function strip(str) {
  return str.replace(/(^\s*|\s*$)/g, '')
}

function renderMD(item) {
  return `<!--${item.pubDate}-->
[${strip(item.title)}](${new URL(item.link).href})
------

<div>
${item.content.split("\n").map(line => strip(line)).join('')}
</div>
`
}

function timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  return a
}

perform()
