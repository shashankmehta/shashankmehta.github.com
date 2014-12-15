---
layout: post
title: IIT Roorkee, Placements, Twitter and Automation
---
December. A very bitter sweet time in IITs, at least for final year students. It's the placement season, you see. For the last 3 years my involvement included finding out which senior got placed where so that I could extract that grand treat out of him / her. I awaited my own 4th year December for as long as I can remember but, luckily, I didn't have to go through the rigmarole of suiting up and answering questions like "Where do you see yourself in 5 years?" for the sake of pleasing the other side of the table in a quest to land a job, something that is considered to be the ultimate aim of college, engineering and life. I was lucky enough to have a few offers that allowed me to skip the circus. So when the ringmaster started releasing results on a cold December 1st morning, I had been away from the process long enough to not realize that the main event had begun. There I was, sitting in my room, working hard for Intel India Embedded Challenge, while my friends were getting placed. 

Initially, I took up to scanning my Facebook feed to see who got placed where. Then I switched to refreshing the placement's results page for the same. And after pressing F5 a few times, I got bored of it enough to think of automating it. And that is what I did. I wrote a Node.JS script that utilized [`request`](https://www.npmjs.org/package/request) and [`cheerio`](https://github.com/cheeriojs/cheerio) to fetch the results page every few minutes, parse it, see if any new results got announced and if they did then fire a desktop notification for it. A simple 15 minutes job. 

<div class="center">
    <img src="/images/posts/placements/desktop.png" alt="">
</div>

I was satisfied with this but [Rushil](https://twitter.com/rushil92), who was at home and hence couldn't access the placement portal, wanted me to push the data to him too. And he wasn't the only one interested. So I could have created a receive endpoint on a server and a rendering endpoint for these folks. But I didn't want to make this data available publicly. I'd have to add a simple login page. Also, these people would have to manually check for new results, kind of beating the initial automation purpose. I can do better, right? So I used Twitter.

I created a protected Twitter account for the script. Each time new results were announce, the script would tweet the number of people selected by a company and who are they. For notification purposes, I enabled push notification for tweets from this account on the Twitter android app. 

All the publicity that I did for this was a post on Facebook and a similar one on Twitter.

<div class="center">
    <img src="/images/posts/placements/fb.png" alt="">
</div>

Every now and then I would approve followers who are IIT Roorkee alumni or current students. And through this super simple setup I was able to broadcast results and also have push notifications. The Twitter account currently has around 60 followers at the time of writing. Not too bad for a 30 minute job which was supposed to be for only myself and a few friends.

<div class="center">
    <img src="/images/posts/placements/twitter.png" alt="">
</div>

## Why the need for privacy?
Some people asked me why did I have to make the account protected? I had multiple reasons for this. One, while this data is open to everyone inside the campus, this isn't my data to make public. Two, the Indian Media goes crazy over the placement results. They give importance to the wrong stuff. I have very strong opinions on this but a senior has written about this issue very well. Read it [here](http://buff.ly/1CHIlmG). I did not want to hand over the entire Roorkee placement data to these people on a platter.

## Show me the code
Quite a few people asked me how did I make this thing, which was also the initial trigger for writing this post. I have posted the code as a GitHub gist. 

Link: [GitHub Gist](https://gist.github.com/shashankmehta/d7d0233d8e919aaa5c35)

For posting to a Twitter account, you will need to create an account on twitter and get the oauth keys to post as that account. Look in `twitter.js` for the set of functions that will help you in getting these. You will also need your Channeli `PHPSESSID` since the results page is behind a login wall. This, along with twitter creds, is all that is needed to run the main script, `placements.js`. 

For desktop notifications, you need `notify-osd` setup, which is normally pre-installed on Ubuntu systems. Otherwise, you can utilize [node-notifier](https://github.com/mikaelbr/node-notifier) for other systems.

Just comment on the gist in case something isn't clear.