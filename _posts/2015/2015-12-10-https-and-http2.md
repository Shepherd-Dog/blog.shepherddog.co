---
layout: post
published: 2015-12-10T21:34:17-06:00
title: HTTPS and HTTP2
author: David
profile_link: "/media/profile-pics/david-50x50@2x.jpg"
---
We are happy to announce that all of the websites we host are now served over an HTTPS connection. What does that mean to the majority of people out there that aren't nerds? 

It means that people visiting those sites will see a little lock in the browser indicating that the site is secure. It means a small potential boost in Google ranking. It means visitors to the website will probably trust the company a little bit more. And it also means that the site is safer against hacking. It is the same security that banks use on their websites.

Serving those sites over an HTTPS connection means that we can also use the HTTP 2.0 protocol instead of HTTP 1.1. And once again, for the 99% of people out there that don't know the fine details of HTTP, what does that mean? It means a faster connection. Files for the website, like images and scripts and styles, can download at the same time instead of one holding another up like a single file line. Information is transferred in binary instead of plain text so less information needs to be sent.

We are happy to announce that all but one of the sites we host are now using HTTP 2.0 and we're working on that last one.

In the grand scheme of having a website, marketing it, ensuring it is setup for search engine optimization, and that it is intuitive to customers, HTTPS and HTTP 2.0 are tiny details. And until recently, setting up the certificates for an HTTPS site were more expensive than we could recommend. But thanks to [Let's Encrypt](https://letsencrypt.org) making SSL certificates free earlier this month the choice to implement them is easy. 

We believe that every detail is important and we obsess over getting them right.