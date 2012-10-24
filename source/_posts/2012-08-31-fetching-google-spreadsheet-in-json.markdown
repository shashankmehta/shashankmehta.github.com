---
layout: post
title: "Fetching Google Spreadsheet in JSON"
date: 2012-08-31 16:22
comments: true
categories: [google drive, JSON, hubot]
---
Recently I was working on using data from a Google Drive spreadsheet in a [Hubot](http://hubot.github.com/ 'Hubot') script. I needed to fetch the sheet in JSON format in order to easily parse it using [coffeescript](http://coffeescript.org 'coffeescript'). But it turned out that Google doesn't provide an easy way of getting this done. Here's the indirect method: 

<script src="https://gist.github.com/3551495.js?file=gspjson.txt"></script> 

Since this option doesn't exist in the dropdown it may not be supported by Google in the future. Safer solution would be to output to csv and convert it to json.