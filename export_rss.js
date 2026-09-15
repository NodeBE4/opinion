let Parser = require('rss-parser')
let fs = require('fs')
let querystring = require('querystring')
let urlMod = require('url')
let URL = urlMod.URL

let feedxUrls = {
  '火光': 'https://2049post.wordpress.com/feed/',
  '萬有引力之蟲': 'http://gravitysworm.tumblr.com/rss',
  '编程随想的博客': 'https://feeds2.feedburner.com/programthink?format=xml',
  '透視中國-YouTube': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUGekZ_Ig4dP3NDcJCdOK6aA',
  '野兽爱智慧': 'https://rsshub.app/matters/author/philosophia1979',
  'The Sociologist': 'https://sociologist.xyz/feed.xml',
  'The Sociologist TG': 'https://rsshub.app/telegram/channel/thesoc',
  '衔枚疾进': 'https://rsshub.app/telegram/channel/silentmarching',
  '政見': 'http://cnpolitics.org/feed/',
  '中國戰略分析': 'http://zhanlve.org/?feed=rss2',
  'Stratechery': 'https://stratechery.com/feed/',
  'NGOCN': 'https://rsshub.app/matters/author/ngocncat',
  '蔷蔷': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UC_Udz5R0NCgLTWbmn-QiWGA',
  '李肃Hi5': 'https://www.youtube.com/feeds/videos.xml?playlist_id=PLmp6SED1O-uyPp8NoKmnHEsm3-BwOSyg1',
  '臺大演講網': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUSgvLn9EzRHS7yOJqXcJ68Q',
  '共识沙龙': 'http://www.youtube.com/feeds/videos.xml?playlist_id=UUYHXsX3B3LXWnkl4iBsTzog',
  '共识沙龙2': 'https://www.youtube.com/feeds/videos.xml?playlist_id=UU7edaZCmZEB1oynZJgDXO5Q',
}

keys = Object.keys(feedxUrls)
jsonarr = keys.map(key => {
	return {'site': key, 'url':feedxUrls[key]}
})

let content = JSON.stringify(jsonarr, undefined, 4);
fs.writeFileSync(`./subs.json`, content)
