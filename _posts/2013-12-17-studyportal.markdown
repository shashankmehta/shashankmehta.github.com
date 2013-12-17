---
title: Study Portal, IITR's knowledge hub
layout: post
---

It’s pretty common to see links in HN to some course page by a professor of some top US university which has a well detailed description of the course, syllabus, reading assignments, office hours, maybe even videos and class transcripts. Sadly, this isn't the case in IIT Roorkee. Forget about course pages, the syllabus of courses are in a PDF that’s buried deep in the institute website. Braver men than me have dared to venture in there and failed.

Last month I read a [story](http://alumni.berkeley.edu/california-magazine/just-in/2013-11-21/cal-lecturers-email-students-goes-viral-why-i-am-not) about a professor's mail to his students that went viral. I can safely say this cannot happen in IITR. In my two and half years in college, I have had just one professor who has ever sent us a mail on the class' google group. One out of nearly 25.  

There are a few exceptions. That one prof who used email to communicate is one. Other was my Computer Architecture and Processors' prof who had an immaculately maintained course page. I ended up writing a script that would shoot me a mail the moment he updated the course page. Ah, bliss!

##Situation of Study Material
There's a LecTut portal where professors can upload slides/files/notes etc. but most do not. I have had professors who prefer if a student collects the stuff from them in a USB drive and who would then put it up in Drive/Dropbox to share with everyone. Most of the time, we get the slides from our seniors who got it from their's, who got it from _their's_ and it goes on. This is the side effect of a course structure that changes once in a decade or two.

Apart from the fact that this is kind of medieval, one big problem with this is that if I am interested in a course that is not in my academic structure, I'll have to catch hold of someone who does and ask him to share the files. 

While we can't do much about professor-student communication, we could do something about this issue. By we, I mean [SDSLabs](/archive/2012/working-at-sdslabs.html). 

##Enter Study Portal

<div style="float:right; padding: 5px 0px 5px 5px;">
	<img src="/images/posts/sp/sp6.png" alt="">
</div>

Study Portal aims to be the knowledge hub of IIT Roorkee. Every course's information, slides, data should be hosted here. In its current version 1 form, it deals with files. 

Any student can upload files to any course. These could be professor's slides, MIT OCW, videos, papers etc. Anyone can download from any course.

###Stats
SP was launched on 24th October, 2013. Till 24th November, 2013:

- Total files in SP: 3500+
- Total Downloads: 20,000+
- Courses: 300+

![Study Portal](/images/posts/sp/sp5.png)

###What's in V2.0?
I mentioned above that our course structure isn't revised that frequently. Even if it was, there'd still be a lot that would not be taught in classroom. For eg, the Electronics Section in Hobbies Clubs of IITR conducts public lectures on Arduino+Microprocessors, Image Processing etc. SDSLabs conducts lectures on algos, web development, Git etc. These people do not have access to LecTut. There is no central place for such courses which are normally conducted by student groups. That's next in SP. Non academic courses.

By January 2014, we hope to have courses on Arduino, Node.JS, Backbone, Image Processing etc on Study Portal so that everyone can benefit. These are sort of _micro_-courses where the lecturer uses a presentation to introduce the basics. Along with it, there are supporting files, links and videos.

##Tech
Study Portal is written in PHP. I made a custom MVC architecture on top of a microframework, [Toro](http://toroweb.org/), which handles routing. The ORM wrapper being used is [RedBean](http://www.redbeanphp.com). 

While we do have designers in SDSLabs, they are either overburdened with too many tasks or missing from action. The logo and icons were made by [Chetty Arun](https://www.facebook.com/chetty.arun.nani) (He is one heck of a designer, catch him on [fiverrr](http://fiverr.com/chettyarun/)!). For the layout, I went through one mockup stage in Pinta, one in browser, one implementation to get things forward and then one complete redesign. [Masonry](http://masonry.desandro.com) is the spine of the current design.

![Mockup for left bar](http://25.media.tumblr.com/32d48ed0a25a693682d03f096ad350a6/tumblr_mxdyhaKfFY1shzytjo1_1280.jpg)    
Mockups for left bar

One issue that we had was how to get a course-code course-title mapping. Initially we found one list that seemed to have all the course codes atleast. But that turned out to be for only autumn semester. I had to eventually scrape departmental websites for the list but not all departments had a maintained list of courses offered. [Abhay Rana](http://captnemo.in) pitched in another list which formed the final one. 

For Non Academic courses, we need to embed presentations. Thanks to a 2AM-5AM Mon-Fri internet blackout, we cannot use SpeakerDeck/SlideShare. I wrote a jQuery dependent library for this called Slick.js _(it will be open sourced after some battle testing!)_.

At SDSLabs, we try to open source as many of [our projects](http://github.com/sdslabs) as we can. Sadly this one cannot be. For user accounts and login, we use one central API. This API is heavily utilised in our apps and is currently not ready for public release. Maybe when it is, we could.