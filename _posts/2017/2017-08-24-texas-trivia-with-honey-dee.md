---
layout: post
published: 2017-08-24T14:02:35-05:00
title: Texas Trivia with Honey Dee
author: David
profile_link: "/media/profile-pics/david-50x50@2x.jpg"
excerpt: "Today we are proud to announce that we've released Texas Trivia with Honey Dee, a trivia game for iOS..."
---
## Overview

Today we are proud to announce that we've released Texas Trivia with Honey Dee, a trivia game for iOS that we built for James Rumpf. This game is outside of our comfort zone of "tools for small businesses" but we're really proud of what we were able to build through the hard work put in by all the contributors to it.

Texas Trivia with Honey Dee is a quiz game with exciting game play whether you're playing to beat the global high score or in a head-to-head challenge against your friends through Game Center.

Texas Trivia with Honey Dee is free to download and has various in-app purchases for helpers and to remove ads. Go get it now and try to beat the high scores we racked up during testing!

[![Download Texas Trivia with Honey Dee in the App Store]({{ site.url }}/media/2017/08/Download_on_the_App_Store_Badge_US-UK_135x40.svg)](https://itunes.apple.com/us/app/texas-trivia-with-honey-dee/id1231684864?mt=8){:class="img-small"}

## Backstory

It has been over a year since we started talking with James Rumpf, owner of [HoneyDee.co](http://honeydee.co/), and once again we owe our opportunity to work with a client to Bear Cahill who was kind enough to refer James our way.

James inherited a handful of cartoon characters created by Joe Oriolo, who was James' father's business partner in the early 1980s and also the creator of Felix the Cat. One of those characters, Honey Dee, is the host of Texas Trivia.

James came to us wanting to make his second trivia game in the iOS App Store. He already had a game called THAT80SAPP but wanted a bit more out of this next game, like the ability to play against friends, that the developer he was working with couldn't deliver. We talked about the idea for months before he gave us the green light to get started earlier this year.

## The Game
Like any software, games have to be rigorously tested to ensure there aren't any weird bugs that will affect players. Brandy had an unexpectedly tough time testing this time around because she regularly caught herself trying to get the answer right even when she was trying to test getting it wrong or running out of time. Eventually she pushed her way through though. Of course, like other great trivia games it is fun to try to get the questions right and that 20 second timer counting down really makes you want to move quickly.

It is likely that you've played trivia games before so you probably know how it works but I'll step you through Texas Trivia so you can see how it all came together.

You start a game, either by yourself or with a friend:

![Main menu of Texas Trivia with Honey Dee]({{ site.url }}/media/2017/08/iPhone-7-Plus-Jet-Black-vertical-home.png)

You answer questions as quickly as you can:

![Main menu of Texas Trivia with Honey Dee]({{ site.url }}/media/2017/08/iPhone-7-Plus-Jet-Black-vertical-question.png)

You win tools that will help you beat your friends:

![Main menu of Texas Trivia with Honey Dee]({{ site.url }}/media/2017/08/iPhone-7-Plus-Jet-Black-vertical-helper.png)

And you try to get the highest score possible:

![Main menu of Texas Trivia with Honey Dee]({{ site.url }}/media/2017/08/iPhone-7-Plus-Jet-Black-vertical-game-over.png)

## What We Learned

Despite everything we already know, we're constantly learning — this industry demands it. We learned 3 big things working on this project:

0. Testing multiplayer functionality takes much longer than we expected: we greatly underestimated how long this app would take to build and a big chunk of that was due to creating and testing the multiplayer functionality that lets you play against a friend. The combination of switching back and forth between devices and stepping back and forth through questions really ate up the hours. At one point Brandy and I spent several hours on a Sunday afternoon playing against each other to try to recreate and fix a bug. We'll know to be generous with our estimates involving multiplayer in the future.

0. App download size matters: We made a mistake on the initial release and it wasn't downloadable over cellular service because it was too large and over 100 megs in size. In our final push to get the app out we overlooked some cleanup we needed to do to reduce the app size, like removing unused images, resizing images to the size they appear in the app, and only including the right video (since we are using a slightly different video for iPhone and iPad) for the right device. Fortunately software can always be updated and we've corrected that mistake in the latest release.

0. How to add stickers: This has been our first chance to create a sticker pack! Turns out it is really easy to do — pretty much you just drag images into Xcode — but as usual there is a huge difference between "that should be easy" and "that was easy". Now we know for sure.

## Some Technical Details

We built this game on top of Apple's Game Center platform using the latest version of Swift for the code and Storyboards for the user interface. We customized the game for both both iPhones and iPads.

## Some Numbers

In total we've spent 108.37 hours on this app, including design, development, functionality documentation, project management, and testing, over a 4 month period.

## The Future

James has more trivia categories that he'd like to create games for in the future so we expect to be re-using what we built here to power more games hosted by Honey Dee. Stay tuned!