---
layout: post
published: 2015-12-10T21:34:01-06:00
title: Changing Vendors – Server Leasing
author: David
---
We strongly believe that the decisions we make reflect our values. So we put a lot of effort into researching and discussing every decision we make as a company to ensure that we are upholding our values. Sometimes that gets challenging when our values conflict with each other. We'd like to share our decision process behind choosing our new Server Leasing Vendor so you can understand our thought process and see our value system at work.

## Backstory

For years I've been leasing a server from a small company in Austin called [Midas Green Tech](http://www.midasgt.com). I chose them for three reasons. First, they sponsored some of my favorite podcasts on 5by5. Second, they use a technology for cooling their servers that allows them to reduce their data center cooling costs by 60%. Their secret is submerging their servers in an oil which allows better heat dissipation than air. Third, since they are in Austin they are semi-local and in most cases I'd like to support a local company over a non-local one. Their service cost about 30% more than the rest of the market but that amount was worth supporting a somewhat local, smaller company that cared about reducing electricity consumption.

Unfortunately, I've been frustrated with Midas Green Tech several times over the time I've been with them. My biggest issue was that they had a few unplanned outages which made me feel like the service was unreliable. They also they lacked in communicating with their clients -- when they had an outage I had no way of knowing the cause or how long it would last. Each outage pushed me towards looking at alternatives. One company that caught my interest was [Linode](https://www.linode.com) so I sent them a tweet asking about how they source the energy for their data centers. I never heard back from them on that.

Somewhere along the way Midas Green Tech split off their server hosting into a separate company called [CH3 Data](https://www.ch3data.com/?lang=en). Nothing changed for me as a customer other than the invoices came from a different company. No big deal. But the next time I went on their site to price out another server I found that the server type I needed, a virtual private server, was missing. This lowered my confidence in the company to a new low. 

As my confidence in CH3 Data decreased, my interest in Linode continued to grow as people in my Twitter feed continued to rave about it as they did another nice thing for their customers like going to all SSD drives with no increase in cost. And Linode's servers cost $10 a month less for something with just about twice the performance specifications. But I still didn't know about their environmental impact and our current server's performance wasn't bad, it just wasn't as good as it could be. 

We decided to stick with CH3 Data. And when we started Shepherd Dog we built our site and a couple of sites for clients on this server.

## Deciding to Migrate

We regularly think about the vendors we use and whether they are best serving us and our clients. And once we had client websites on our server we grew increasingly uneasy with CH3 Data's operations. It is one thing for our own website to go down but a whole other for our clients', who have trusted us to handle this properly. The worst part is the helplessness we feel when a site we are responsible for is down and we can do nothing about it. This pushed us to the decision to find a new Server Leasing Vendor.

Coming into this decision we were weighing 3 values:

* Environmental Responsibility
* Duty to our Clients
* Preferring Local Business

Preferring local business was the first value that we had to compromise. We still want to buy most things locally, but we've decided that some things can't be done as well by local businesses. Two of those things I can think of right now are computer manufacturing and server hosting. We buy our computers from Apple because they make the best machines in the world and no local business can compare. We believe that CH3 Data cannot compare in the ways we need them to to best serve our clients. In particular, we need them to be highly responsive to customer service calls and allow us to start up a new server in minutes when we need them.

We could not compromise our value of environmental responsibility the same way we did our value of preferring local business. So we got back to researching.

We knew that Linode's servers were located in other companies' data centers. So one day we had the bright idea of figuring out how those companies use renewable energy. We found out that Linode's Dallas servers live in a Softlayer data center. Softlayer was recently purchased by IBM. Once we knew that information we could use Google to hopefully find out more.

The first results we found were from 2011 -- a Softlayer press release stating that they were purchasing energy credits for Texas wind power to offset 10% of their energy usage. That is something -- at least they are showing that they acknowledge that helping the environment is good. But 10% is a low number. 10% felt like compromising another of our values. We wondered if we'd have to do that to best serve our clients.

Fortunately, further Googling lead to something that made the decision much easier -- [this IBM press release from April of this year](https://www.ibm.com/ibm/environment/news/softlayer_gpp_2015.shtml) states that 3 of Softlayer's data centers in Texas are purchasing Texas wind power credits to offset 100% of their energy usage and have been since April 2014.

That was it. That pushed us over the edge to decide to migrate our servers.

## Our Experience with Linode

We migrated our servers about a month ago and our experience with Linode has been excellent. Their documentation is some of the best I've read -- what they tell you to do actually works the first time you try it. If that seems like a low bar then I don't think you've tried to use much technical documentation.

Setting up servers is simple and we can fire up a new one whenever we need. The better performance specifications are noticeable, we have had no outages, and we are paying $10 less per month on servers. We highly recommend Linode if you're looking for a Linux server.