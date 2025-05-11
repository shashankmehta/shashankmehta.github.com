---
layout: post
title: Making Captain in Golang
---

I recently had an idea for a small project for [SDSLabs](http://github.com/sdslabs) and Go seemed like the perfect choice for it.

**Problem**: We have VMs through Xen Server for our applications. So when a developer needed to access the VMs, he'd use a password. Just typing this makes me cringe. This is highly insecure. We haven't had much problem with this setup but that doesn't make it less insecure.

**Solution**: Use key based authorization. But manually managing this would be a headache. Hence, I wanted to create a tool that would help me and other admins in SDSLabs to manage permissions via keys. This still isn't super secure. A better way would be create a new user and handle file permissions via groups. We might go for that, maybe later.

The basic premise of the tool is that admins can run commands to add a person's public key to a deployment server's `.ssh/authorized_keys` file instead of having to manually do this. The tool, called captain, is tightly bound to our git server, Gitolite. Gitolite already has all our developer's public keys and it also has a list of admins. So we keep Gitolite as the _single source_ of truth. Thanks to all of this, an admin only has to run `capt grant shashankmehta 218` to give `shashankmehta` access to `x.x.x.218` _(The first three parts are common for all our servers)_. Captain ensures that the person running the command is an admin, it picks up `shashankmehta`'s keys from Gitolite, sshs to `x.x.x.218` and adds the key to `.ssh/authorized_keys` if it isn't present already.

I'm using Go basically as an alternative to a bash script. Apart from the fact that string handling is much easier in Go when compared to Bash, the biggest advantage is thanks to Go routines.

![Gopher](/images/posts/golang/gopher.jpg)

## What is a goroutine?
If you want to directly jump to code, take a look at Go by examples' page on [goroutines](https://gobyexample.com/goroutines). Basically, goroutines are lightweight thread of execution. Translated to layman terms, goroutine allows you to run multiple functions concurrently. Go also provides `channels` to deal with goroutines. A practical example of where this is highly useful:

In Captain, there's a command `capt grant shashankmehta 218 210 212`. I'm trying to give a particular user access to multiple systems. In a naive implementation of this feature, the 3 systems would have been handled sequentially. With goroutines, all three are handled concurrently. The three instances of a single function output their results to a common channel which handles displaying the results to the user who ran the command. So now running granting access to 10 systems is nearly as fast as granting access to 1 system.

The ease of writing `goroutines` was the most impressive thing for me in Go.

## Getting Started With Go
In case the above intrigued you enough to think about learning Go, here are a few pointers from my personal experience.

How did Go come about? Sorry, I'm not your history teacher. You'll have to hit Google/Wikipedia for that. I'll just say that as far as programming languages are concerned, Go is very new. Pssst, it's hip

The first thing that you will realize about Go is that when searching for something Go related on Google, you need to use Golang instead of Go.

The second thing that you'll want to do is go through the [Go Tour](http://tour.golang.org/). If you are like me, you'll be yawning after the first few chapters, not because Go is boring but because doing anything apart from writing code is boring. But my suggestion would be to finish at least till the slices chapter otherwise you are going to be googling every thing. Actually, you still will, but let's assume I didn't say that.

Done with Go Tour? So now you know that in the Go land, variable types come after variable name, unlike most of the programming languages that you must be familiar with. You know about functions and multiple returns etc. Just checking, don't get mad. Moving on...

If you stopped right at the slices chapter in Go tour, you'll have missed out on range operator. Go back and read about range. No, seriously. Inflict this upon yourself because this is something that you will come across a lot.

Now that you know about range, you will be using it in for loops a lot. One thing that stumped me initially was the fact that `if...else` has its own scope in Go. In a lot of languages, a variable defined inside the `if` scope is available outside it too, as long as you remain inside the parent function scope. This is not the case in Go. So you've got to define your variable before the `if...else` statement. Same thing for `for` loops. Get over it and enjoy the  language.


In case you are interested in reading the source of Captain, let me know and I'll post it. At SDSLabs, we try to open source most of our works but Captain is tightly bound to Gitolite.
