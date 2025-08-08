---
layout: post
title: Making Sense of OpenAI’s ChatGPT With GPT-5
og_image: 2025-08-08/post-header.png
---
## Status Quo
---
Until yesterday, Free Plan users were on 4o, a decent model, but clearly inferior to o3 even on simple day-to-day queries. For any serious usage with real intelligence, you needed to use o3, which required at least the Plus Plan ($20/mo).

Even with access to o3, you had to decide when to use 4o vs o3, first by figuring out which model to use (never obvious), then by managing limits (o3 had much lower limits).

For true power users who needed **high usage limits**, the Pro Plan ($200/mo) was the way to go; it was essentially about getting more limits.

## GPT-5 For Everyone: A New Baseline For AI Chat In The Market
---
With GPT-5, OpenAI has set a new baseline and a new way of interacting with models of different calibre.

GPT-5 is now the default model, which is:
- Better than o3 (in GPT-5-Thinking mode)
- Vastly superior to 4o (even without thinking mode)
- Available for all users, even Free Plan, with thinking mode

According to the benchmarks published, performance order is: **GPT-5-Thinking > o3 > GPT-5 without thinking > 4o**.

But even with GPT-5 without thinking being inferior to o3, OpenAI has a new trick up their sleeve.

### A New Way Of Accessing More Reasoning
A key feature of GPT‑5 is a **router** that automatically upgrades your queries to GPT-5-Thinking mode without making you fiddle with a poorly understood model selector.

> GPT‑5 is a unified system with a **smart, efficient model** that answers most questions, a **deeper reasoning model** (GPT‑5 thinking) for harder problems, and a **real‑time router** that quickly decides which to use - [OpenAI Blog](https://openai.com/index/introducing-gpt-5/)

If you don’t want to depend on the router (and early testing seems to indicate that router isn’t perfect yet), there’s an official, new interesting way of accessing more intelligence/reasoning: ask the model to “think longer”.

For majority users, this is a better UX than the earlier model selector one. It is still quite clunky and not user friendly enough *(when should I ask it to think longer, why do I need to ask it to think longer??)*. But far better than the model selector UX.

They have also added a dropdown toggle for “think longer”. But I feel we are still in super early days of UX interaction design for talking with AI. Neither of these are natural ways of thinking deeper in a human to human conversation.

IMO we need a UX that more closely mimics this behavior in real human to human conversation. Something like:
- from top of my mind (when giving a quick, shallow answer)
- let me think deeper about this (when conveying that this is my deeper thought)

For Paid Plans they do have GPT-5-Thinking model selector but OpenAI’s preferred way for paid plan users to get more reasoning is still via “think longer”.

## Cost Economics
---
Why did OpenAI wait till GPT-5 before changing the default? They already had o3 which was great. The answer seems to lie in cost economics.

On one hand OpenAI has made a far more powerful model available as **default** for **Free Plan** users. At the same time, they have harped about how GPT-5 is more token effective than o3:

> GPT-5 (with “thinking” mode) achieves similar or better accuracy than o3 while using 50–80% fewer output tokens across tasks like visual reasoning, agentic coding, and graduate-level scientific problem solving. - [OpenAI Blog](https://openai.com/index/introducing-gpt-5/)

While I doubt OpenAI is too bothered with cost of running ChatGPT generally, it looks like o3 was still cost prohibitive enough to not become a default. It was only accessible in paid plans and wasn’t the default model on Plus/Pro Plans either. 4o was the default.

**GPT-5 hence seems to be even more about setting a new baseline for the market. Better than o3 performance, for everyone, for free**.

## GPT-5 Experience vs Free/4o users vs Paid/o3 users
---
### GPT-5 vs 4o / Free Plan User’s Experience
For the free users, going from 4o to GPT-5 will feel like a massive upgrade. There’s no question that GPT-5 is significantly better than 4o in performance. And with the automatic router to GPT-5-Thinking, the performance difference will be even more significant.

I think some people will debate if the personality/writing style of GPT-5 is better than 4o or not, but that’s an immaterial point imo, maybe even guided by aversion to change.

If you need the **bleeding edge of intelligence**, you can also ask the model to “think longer”, which requests the router behind the scenes to use GPT-5-Thinking. Most importantly, this is **available for free users**.

For free users, this is like going from a Prius to a Tesla Roadster.

**IMO, the upgrade for free users of ChatGPT was the highlight of today’s announcement.**

### GPT-5 & Paid Plan User’s Experience
For users on o3, GPT-5 isn’t drastically better in reasoning. Heck, GPT-5 without the Thinking mode is actually inferior to o3, with all benchmarks showing so.

Hence I believe that Paid Plan users who were manually selecting o3 will still continue to use GPT-5-Thinking mode over GPT-5. They won’t depend on the router. But there’s still a twist, one that changes the positioning of Plus Plan.

Plus Plan used to be about access to better models primarily. To get o3, you needed the Plus Plan at least. It also had higher limits, but imo Plus Plan was justified for most users because of access to better models than limits. This seems to be changing. 

Free Plan users have access to both GPT-5 and GPT-5-Thinking but with low limits:
- GPT-5 with 10 messages every 5 hours
- GPT-5-Thinking with 1 thinking message per day

Plus Plan users in addition to exact same models, now have:
* ability to directly select GPT-5-Thinking instead of using “thinking longer”
* GPT-5 with 80 messages every 3 hours
* GPT-5-Thinking with 200 messages per week

_Source: [OpenAI Help Article for GPT-5](https://help.openai.com/en/articles/11909943-gpt-5-in-chatgpt)

This is actually very similar to older Plus Plan:
- model selector for 4o vs o3
- 4o with 80 messages every 3 hours
- o3 with 100 messages per week

There is one major difference though: **automatic upgrades of queries to GPT-5-Thinking through the router** **do not count towards the weekly limits**. It’s a model control vs limits tradeoff, with key dependency on router’s efficiency. It's interesting, because OpenAI has put a limit on GPT-5-Thinking but also given unlimited access via the router!

In my view, this is OpenAI literally saying that Plus Plans are now about more limits and not about access. If you want more usage or even better models (GPT-5-Pro), you need to upgrade to $200/mo Pro Plan. **This is a major positioning difference for the Plus Plan.**

### GPT-5 vs o3: Effectiveness via Proactiveness
Keeping access and limits aside, there’s a key, subtle difference that makes GPT-5 more *effective* than o3. For most people, the challenge with using ChatGPT is still that you need to ask it to do things but you don’t fully understand what can it do. **GPT-5 is now smarter about *anticipating* what you may need, and *proactively suggests/does things* for you too.**

Ethan Mollick has written a great article on this [GPT-5: It Just Does Stuff](https://www.oneusefulthing.org/p/gpt-5-it-just-does-stuff?publication_id=1180644&post_id=170319557&isFreemail=true&r=3o9&triedRedirect=true). I have felt quite similar in my own testing too. Where earlier I would have to ask the somewhat obvious follow up questions, now it seems to answer some of them proactively.

It’s still not fully there but I think this is going to be the next phase of model improvements: **getting them to practically read your mind**.

A quick example: A friend was prescribed a magnesium supplement due to low serum magnesium levels. I asked ChatGPT about the prescribed medication, with the intent behind my question being:
- Should she be taking a supplement given the serum levels
- Is this medication the most appropriate one? I had heard different Mg supplements have different absorption rates

Now power users know that more context you share, you get a better answer. But just think about how people google search. They aren’t used to entering all the details.

Here’s o3: it answered whether it's ok to supplement. But I had to follow up to ask if this specific medication is the most appropriate one.

![O3 Screenshot](/images/posts/2025-08-08/o3.png)

<br />

Here’s GPT-5-Thinking: It answered both parts without any follow up question

![GPT-5 Screenshot](/images/posts/2025-08-08/gpt-5.png)

<br />
The future models will be many more steps ahead of our queries, trying to predict the real what behind the poorly formed queries. GPT-5 is an upgrade in that sense over o3 and while power users might feel underwhelmed by the delta between GPT-5 and o3, for most users, this is a major step up.

---

If you liked this post, please retweet/like on X: 