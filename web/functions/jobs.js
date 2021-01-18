const fetch = require('node-fetch')
const xml2js = require('xml2js-es6-promise')
// const fs = require('fs')

// background function (todo)
// grab data every 10 minutes
// compare data pulled vs file
// update file if changes and kick off a new build

exports.handler = async (event, context) => {
  const feed = `http://recruitingbypaycor.com/career/CareerAtomFeed.action?clientId=8a78858b5e748ace015e7d8826af113e`
  const response = await fetch(feed)
  const xml = await response.text()
  const data = await xml2js(xml)
  const json = JSON.stringify(data.feed.entry)

  return {
    statusCode: 200,
    body: json,
  }
}
