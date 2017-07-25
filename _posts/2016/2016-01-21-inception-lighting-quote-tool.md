---
layout: post
published: 2016-01-21T18:14:45-06:00
title: Inception Lighting Quote Tool
author: David
---
We've said many times that one of our favorite things is to see companies spend time, money, and effort to build technological tools for their employees. Our story about building the Quote Tool for [Inception Lighting](http://inceptionlighting.com) is one of those stories with a slight twist -- due to the nature of their business the Quote Tool also serves as a sales and marketing tool.

## Backstory
When we started our business with the goal of serving other small businesses we thought it was a good idea. But even so, we didn't fathom how many small businesses are out there. Still today, after doing this for nearly a year, the numbers boggle our mind. And these businesses are doing all kinds of things. Things where when you hear about it you say "well yeah, that's a great idea for a business, I can't believe I haven't heard of it before now." Inception Lighting is one of those types of businesses.

We owe our opportunity to work with Inception Lighting to [Bear Cahill](http://brainwashinc.com). He wanted to take the project but couldn't fit it into his schedule at that time so he pointed to us. We met with Scott and Matt and shortly after we were building.

Back to what Inception Lighting does. We've tried different ways to explain it since we've started working with them and the best way we've come up with is to say that they make permanent, LED, Christmas lights. Permanent in that you install them once every ten years instead of putting lights up yourself, or paying someone else to do it, every year. But calling them Christmas lights simplifies things a bit too much because these lights aren't limited to just one time of the year. Since they are up year round they can be used for any holiday, celebration, or Tuesday. And since you can control them remotely to be whatever color or pattern you want you can celebrate with your local sports team's colors as easy as red, white, and blue for the 4th of July.

But these lights aren't only for homes. They are great for commercial installations like office buildings or downtown shops.

If you're in Denton and want to see what the lights look like then go to the Square at night. Notice the lights along the top of the roof lines, including the Wells Fargo building. I know I'm biased but I think they look great.

![Lights In Downtown Denton]({{ site.url }}/media/2016/01/LightsInDowntownDenton.JPG)

## The App
As its name implies, the app's purpose is to be a tool to make the process of quoting the installation price of Inception Lighting's products easier and more accurate. These lighting systems are far more advanced than normal Christmas lights and therefore require more components -- it isn't as simple as buying five strings of lights. Due to the additional components, the manual quote process could take hours and one miscalculation in the middle of it could mean redoing everything.

This brings us to the slight twist we described earlier because this tool isn't just for Inception Lighting's employees -- it is for dealers. That's where the sales and marketing part of the tool comes in, because if a dealer has a choice of whether to sell two competing products and one is easy to quote and the other isn't then you can guess which one they'll sell. So one of our goals in building this app was to make the process as easy as possible and we think we delivered on that.

![Quote Tool Main Screen]({{ site.url }}/media/2016/01/QuoteToolMainScreen-2.JPG)

![Quote Tool Choose Location]({{ site.url }}/media/2016/01/QuoteToolChooseLocation-2.JPG)

The app guides the user through a step by step process with instructions along the way. First, it asks for the install address. Next, the app uses that address to pull up a map of that location which includes the image of the buildings. The user can easily zoom in and out to place the install location in the middle of the screen. Next, the user is prompted to place the light controllers, the devices that make the system as smart as it is, and also to provide any relevant information including taking a picture of the install location or adding special instructions about the installation. Then the user is prompted to draw directly on the map -- she follows the lines of the buildings with her finger. The app stores everything throughout this process, including the lines that have been drawn. In the penultimate step, the user connects all the components together from the light controllers to the wires that connect everything to the lights themselves, prompting the user if any of the components are outside of preset specifications. At the end, the user submits the quote to Inception Lighting's web application.

The entire process is highly interactive. You draw on the building itself, and tap on different items throughout the process to provide information about each of them.

After the quote has been submitted, the web application sends an email to the person that created the quote that includes cost estimates and installation instructions that include the pictures from creating the quote. And that web application creates a wish list which can easily be added to a shopping cart and purchased. It is really cool how everything works together.

![Quote Tool Submission]({{ site.url }}/media/2016/01/QuoteToolSubmission-2.JPG)

## Technical Details
We wrote this app in Swift (and upgraded to Swift 2.0 after release) and we’re targeting the two latest version of iOS in iOS 8 and 9. Most of the user interface was built using Storyboards and all the quote information is stored using Core Data.

The app is designed for both iPhone and iPad.

## Some Numbers
In total we’ve spent 206.5 hours on this app, including design, development, and testing, over a couple of months.

## The Future
We're in the middle of another project with Inception Lighting right now that we are psyched out of our mind about and we can't wait to show the world. We've also got some thoughts on ways to make the Quote Tool even easier to use that we hope to add soon.