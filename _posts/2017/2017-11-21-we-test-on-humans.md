---
layout: post
published: 2017-11-21T18:10:35-06:00
title: We Test on Humans
author: David
profile_link: "/media/profile-pics/david-50x50@2x.jpg"
featured_image_link: "/media/2017/11/robot-testing-chair.jpg"
excerpt: "An industrial designer imagines the most beautiful chair ever. She sketches it out and then renders it in a software design tool. That tool is able to test the structure of her design..."
---

![Picture of Robot Testing Chair]({{ site.url }}/media/2017/11/robot-testing-chair.jpg)

An industrial designer imagines the most beautiful chair ever. She sketches it out and then renders it in a software design tool. That tool is able to test the structure of her design to make sure that it will be able to hold people of all sizes. Plus, since computers are great at math the design tool is able to optimize the design to use the fewest materials possible, reducing costs and weight while being environmentally friendly.

It is easy to get wrapped up in the wonder of the technology and forget the most important question about that chair — is it comfortable? 

Recently two different companies that I respect, [Omni Group](https://www.omnigroup.com) and [Basecamp](https://basecamp.com), have gone out of their way to talk about how much they value human testers for their software. Omni Group has a new podcast and [the first episode features Kristina Sontag](https://theomnishow.omnigroup.com/episode/kristina-sontag-software-test-manager), their Software Test Manager. She said "Products that are used by humans need to be tested with that in mind". [DHH wrote a blog post and here’s part of what he said:](https://m.signalvnoise.com/the-value-of-human-exploratory-testing-2dabcc371b3b) "Testing by hand, or exploratory testing, is a crucial technique for ferreting out issues off the happy path." 

We also highly value human testing and I thought it would be a good time to talk through why we do, our process/workflow, and who are the right people to do the testing and, more importantly, who shouldn’t be doing it.

## Why Test on Humans?
Firstly I must admit that human testing will cost more than automated testing in the short term. But we strongly believe that in the long term it will pay for itself because of three factors:

1. We will find bugs before our customers and our clients' customers: We've recently had a poor experience with a software we use daily to help us do our jobs. They've recently rolled out some major updates, and we keep running into bugs in their application because no one has tested it in the specific ways we use it. We're filling their role of human testing for them (or maybe they're using us as guinea pigs) and it has pushed us towards looking for another vendor.
2. We will build a better experience for humans: The right human (we’ll get into who the right human is shortly) will sense clunky workflows or a confusing UI in a way that automated tests simply can’t.
3. Humans can raise the bar: I build better software because I know Brandy will be testing it and finding all those things mentioned in the previous point. As time moves forward our quality improves simply because a human has raised the bar. Automated testing can’t do that.

## Our Process/Workflow
Our process works because Brandy has a broad skill set and can take on many challenges. That being said, we’d look for people with similar skill sets to operate in a similar fashion when we're ready to expand our team in these areas. So here’s how it works — on projects Brandy fills the roles of Business Analyst, Project Manager, Designer, and Tester. The beautiful thing about this quartet of roles is that she defines what the software should do at the beginning of the process and therefore already knows all the details when she gets to the testing phase. She doesn’t need to spend time ramping up to figure out what’s going on.

So our workflow is:

1. Business Analysis (figure out what we need to build)
2. Create Requirements & Design Documentation (put that information in a shareable format)
3. Build to the Requirements (build the thing)
4. Test to the Requirements (make sure the thing is what it is supposed to be)

Brandy does steps 1, 2, and 4 and all Danielle and I have to do is step 3. Boy do we have it easy.

## Who Should/Shouldn’t Be Testing?
I’ll keep it simple:

Shouldn’t:
*  Developers
*  Clients (although they do need to review it to ensure it covers the needs of the business)
*  Customer Service Reps
*  Front-line Employees
*  Anyone with Another Full-time Job

Should:
*  Normals[^1] with a healthy grasp on both what makes humans tick and how technology works at a high level

<hr>

[^1]: Normals are people who don’t see the world through the lens of technology so they don’t know too much about how things work and fall into the trap of testing things the way they are supposed to work rather than the way humans will use them.