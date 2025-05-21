---
layout: post
title: Vibe Coding, The Ultimate On-Ramp For Coding Again
---
Vibe coding got me back to coding like nothing ever has.

Wait, vibe coding? Highly likely that your head’s now thinking if I’m a n00b coder or something. Well, I’ve been coding software products since 2011, until I fully transitioned into a product role in 2017. And I think I was fairly good at it too. Heck, some of my code and features that I built still run across 100s of millions of devices.

But it’s been much longer now that I have not been coding vs when I was. 8 years and counting. 

Honestly, it’s not that I haven’t tried. I miss the extremely fast feedback loop that coding provides. You write something and within seconds you can try it out. How many roles have this? But each time I’d try to get back to it, it would feel like I’m starting far too much from scratch. 

Every few years the most in use frameworks change, new tools come out and the whole coding toolchain starts looking different. I’d gone from `jquery` to `backbone` to `angular` to `react` in just 6 years of active coding. I learnt `Java` in 2013 to make android apps and the next time I tried picking it up again, everything was in `Kotlin`.

Let’s take this website itself. I first made it in 2013 using Jekyll, the preferred static website framework for GitHub Pages. It’s in `ruby`, so I learnt some basics and actively maintained it till 2015. Since then, I’ve tried to get back to it 3 times. 2018, 2020, 2025. Each time it’s been a nightmare, fighting with ruby/gem/bundler/mac’s ruby oddities. In fact, in 2020, I gave up and moved to [Substack](https://shashankmehta.substack.com/). 

Whenever I’d think of something creative to make, I’d get stalled by the friction of restarting and fighting the tools. 

Vibe coding changed that, by reducing the friction to go from intent to something tangible.

![Website Commit Stats](/images/posts/2025-05-20/website-commit-stats.png)

## Vibe coding my way back
My first real tryst with vibe coding happened a few months back, in March 2025. I used Replit to make a full fledged medical prescription tracker for Neerja’s recovery from a fracture. While Replit did the initial setup and feature set heavy lifting, I then synced the code to GitHub and started using Cursor for further feature development. 38 commits from Cursor, 18 from Replit agent.

This was made using `node`, `typescript`, `express`, `react`, `radix ui`, `tailwind`, `drizzle` & `neon db`. I’ve only used `node` + `express` + `react` before this. 8 years ago.

![neermeds](/images/posts/2025-05-20/neermeds.png){.img-limit-height}

Beyond vibe coding simple apps, it has also made it significantly easier to get started with open source code. Some time back I came across an interesting project called [Meridian](https://github.com/iliane5/meridian):

> **Presidential-level intelligence briefings, built with AI, tailored for you.**
> Meridian cuts through news noise by scraping hundreds of sources, analyzing stories with AI, and delivering concise, personalized daily briefs.

It uses a whole lot of tooling that’s new for me. But all it took is a bit of prompting and I had detailed docs on how it works, what each module is doing, breakdown of core logic etc.

![Meridian Documentation](/images/posts/2025-05-20/meridian-1.png)

![Meridian Documentation](/images/posts/2025-05-20/meridian-2.png)

About a week ago, I took another stab at building this website. Initially, I struggled to get the ruby code to run again. Lot of ruby gems needed updating, some were not compatible with latest version of ruby, and some shit just couldn’t be solved with easy googling. I almost gave up, again, until I remembered that every dev’s been equipped with a phenomenal junior developer, thanks to AI. So I asked Claude to fix things. 

It took some trial and error iterations, but boy did it get there! Far faster than I would have, without giving up.

![Website Fixes by Claude](/images/posts/2025-05-20/website-claude.png){.img-limit-height}

And that was just the start. Since then, I’ve completely rewritten the core with `eleventy` & built a new theme with `pico.css`, while both frameworks were completely new to me. All of this in a few hours of coding effort spread over a week or so. All because I could just ask AI whenever I needed help with something.

Coding with AI is fun. It takes away a lot of the not-fun parts. And supercharges the ability to learn. I don’t feel like I’m stuck doing meta work, like learning how a framework works. Instead, I can speed run through samples with an AI to teach me whatever I want to focus on, take its help to get boilerplate made quickly, brainstorm with it in a super contextual discussion and get features built out without having to write everything from scratch. Ultimately, it reduces the friction to go from idea to MVP and that’s fun.

Yes, copilots for coders are great. For me, copilot gave me the fastest on-ramp to getting back to coding. And I appreciate it.