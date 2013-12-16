---
layout: post
title: "Github, Octopress and Blogging"
date: 2012-05-21 22:52
comments: true
categories: [blogging, octopress, github]
---

_17 Dec, 2013 Update: I have moved to plain Jekyll instead of Octopress_

I have tried [Tumblr](http://tumblr.com "Tumblr"), [Blogger](http://blogger.com "Blogger"), [Posterous](http://posterous.com "Posterous"), [Wordpress.com](http://wordpress.com "Wordpress") and most recently [Scriptogram](http://scriptogr.am "Scriptogram"). 
With all the above mentioned blogging platforms there's this feeling of lack of control over your data and blog. Then there's the ever present friction of having to login on their website to create a post. Then you have to change how the page looks using _their_ pretty limited controls. Some of the platforms do offer "email to post" option but the formatting nearly always sucks if your article is a combination of text, images, videos etc. Posterous does a pretty good job in this department. 

While reading random articles online I came across a blog that had a ["scriptogr.am"](http://scriptogr.am "Scriptogram") tag. That's how I found out about [dropbox](http://db.tt/uuEJCPh "Dropbox")+[markdown](http://daringfireball.net/projects/markdown "Markdown") based blogging. Basically you write your post using markdown syntax and save it in a specific folder in your dropbox. Then Scriptogram take those files, convert them into html and post them on their servers. It seemed nearly perfect for me. I could write posts in my favourite editor (I prefer Sublime Text), save it in my Dropbox folder which I'm already using and voila, my blogs updated! Ummm not quite. I have to go to Scriptogram's website and click on sync to post my data. Friction again. Then there's this huge problem of this service being in beta. I don't know when these guys might just pack up their bags and leave me only with my markdown format files. The solution to this would be to buy server space to host my blog and probably use wordpress as the platform. I would get high amount of control over my data. There would still exist the friction but I can accept that as a tradeoff between control and friction even though it doesn't have to be. Enter GitHub pages.

<!-- more -->
My senior here in IITR, [Abhay Rana](http://captnemo.in "Abhay Rana"), was already using GitHub pages and that's how I first came to know about it. GitHub allows you to create a static webpage in a repository named as [yourusername].github.com. This in turn hosts the static page on [yourusername].github.com. 
If you can create a static webpage, a static blog can also be created then. This is done using Jekyll.
>Jekyll is a simple, blog aware, static site generator. It takes a template directory (representing the raw form of a website), runs it through Textile or Markdown and Liquid converters, and spits out a complete, static website suitable for serving with Apache or your favorite web server. This is also the engine behind GitHub Pages, which you can use to host your project’s page or blog right here from GitHub.

<img src="http://octopress.org/images/logo.png?1337552852" style="float: right; margin: 5px 0px 20px 20px;" title="Octopress"/> 

Abhay has used Jekyll to set up his webpage. Now, using Jekyll directly isn't very easy. Enter [Octopress](http://octopress.org "Octopress"). It takes the heat out of the setup. Few simple steps and you have your blog ready and hosted on github. With this setup, my workflow invloves Sublime text and Terminal. That's it. After the initial setup, all that I have to do to update my blog is 

{% highlight ruby %}
rake generate
rake deploy
{% endhighlight %}

GitHub is an established website and won't just shutdown leaving me with my posts. In fact, even if they did shutdown this feature, I can easily take the files and host them somewhere else for I have the complete html, css, javascript etc needed for the blog in my repository.

Setting up GitHub pages using Octopress is pretty easy. Even then I did get stuck at one point when I misinterpreted the documentation and named the repo as leostatic instead of leostatic.github.com. Next few steps included editing of the configurations, playing around with the plugins and beautification of the blog. 

PS: The tagline of Octopress is 
>A blogging framework for hackers