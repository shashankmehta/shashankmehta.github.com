---
layout: post
title: "Sublime Text, Dropbox and Git based ToDo setup"
date: 2012-05-22 16:35
comments: true
categories: [github, dropbox, todo, sublime text]
published: true
---
Every guy needs a To Do list for his daily life to make some sense. Atleast I believe that every guy needs a To Do list especially if he has a *lot* to do. If you are one of those seemingly mythical creature who manages to stay on top of their work without this _list_ well then, hats off to you _sir_. I for one do need such a list in order to keep track of what I have to do in near future and what I would like to do in some distant future. I tried out numerous applications and none seemed to fit the bill. My main requirements are:

- Offline Access
- Online Access
- Easy backup
- I should be able to carry it in a usb drive if I want to
- Easy input method

<!-- more -->

Many apps failed to tick all the checkboxes. Some managed to do so but they literally had to crawl on their fours for that. In other words, I did not like any app that I tried.
If you have read my previous blog post [[Github, Octopress and Blogging]](http://shashankmehta.in/archive/2012/github-octopress-and-blogging.html) then you'd know that my workflow already involves Sublime Text, Dropbox, Git among other stuff. And you might have also realised that I like to stick to this workflow for things that I normally associate the word "procrastination" with. This time, there was no GitHub Page or Octopress type solution like I had last time. [ToDo.txt](http://todotxt.com "ToDo.txt") by Gina Trapani does come a bit close to what I want but nay, I prefer my current setup. 

My current setup, as you might have guessed, involves

1. Sublime Text: For the creation and editing of my simple self created format for Todo list
2. Dropbox: For syncing and an online copy
3. Git: For interesting stuff

Thanks to Dropbox, the file is available to me everywhere.
I save my ToDo file as .css so that I get simple highlighting for my sections which I name as #SectionName.
Example ToDo list:
This is how it looks in Sublime Text:

![ToDo example](/images/posts/todoeg.png)

\#Today and \#Tomorrow section are for planning out my tasks. I add all tasks with a deadline in #Time_Constraint. Apart from these three sections, rest keep changing as and how I need them to be. I nest tasks in order to break down bigger tasks into smaller, one-at-a-time doable tasks. 
If most of your tasks have a time constraint then this might not work for you. You don't need a list, you need a calendar then my friend.

My ToDo list currently has ~180 lines with, on an average, less than 5 tasks in #Time_Constraint. So this setup works perfectly for me. 

Now comes the interesting part. I use git to track changes over the period. I can easily go back in time to see which task was removed when. Its not very user friendly but with "tig" its manageable. Also, I make commits as and when I see fit with the commit messages being mostly like a short diary entry. I'd love to make a gui app which basically has a slider at the bottom and I can move it to see the state of my todo list at a particular point in time. Hmmm, I should file that in tasks for future.