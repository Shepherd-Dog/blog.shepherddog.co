---
layout: post
published: 2015-11-05T22:49:37-06:00
title: Teaching Notebook
author: David
---
Today we are proud to announce that our first Shepherd Dog app is now available. It is called Teaching Notebook and [you can find it in the App Store for $9.99](https://itunes.apple.com/WebObjects/MZStore.woa/wa/viewSoftware?id=1022006227&mt=8).

This project has been in the works for a couple years but we didn't really get started on it until this past February when we started Shepherd Dog.

We think it is an interesting story that we'd love to share with you.

## Backstory
Brandy started taking Metalsmithing classes at the [Craft Guild of Dallas](http://www.craftguildofdallas.com) a little over two years ago. She's always wanted to learn how to make jewelry and finally took the step to finding and enrolling in a class. Since then she's made some really nice pieces of jewelry, mostly driven by her talent, patience, and attention to detail. But a huge factor has also been her instructor, Ed Barker.

Ed has been teaching metalsmithing for over 40 years. He is immensely talented but these days he is most proud of his students. Through his instruction he has been able to inspire the creation of far more beauty in this world than he could have by simply making jewelry on his own.

Not long after starting classes -- it couldn't have been more than a few months in -- Brandy told Ed that I make apps. Ed described a problem he had. He said that it would be nice to have a way to keep track of his students' work because it was difficult to keep track of where each student was from week to week in his head. It would be great if he could take a picture and notes to help him remember. And it would be nice to track attendance too, a welcome improvement over printing off Excel sheets for every class.

Brandy thought I might be up for the idea of creating that app for him and I was. It just took a little time to getting around to doing it.

## The App
At its core, Teaching Notebook has a simple concept. It is meant for anyone who teaches in a visual medium -- metalsmithing, painting, ceramics, woodworking, anything that has students creating things. It organizes students into classes and breaks classes up into individual meeting times for attendance tracking. It keeps track of a student's progress for both the teacher's sake and the student's. The teacher can provide better instruction by remembering where the student is and what they've struggled with in the past. The student can see their progress and how far they've come over time in a quick, simple scroll.

![Note Images]({{ site.url }}/media/2015/11/NoteImages.JPG)

We made things that were minor irritations in Ed's former workflow much smoother. He has quick access to his students' email addresses and phone numbers and can email all the students in a class, in the case of a class being cancelled or some other sort of announcement, with just a few taps.

For tracking attendance, the app sorts classes over the next week into their own group. This lets Ed quickly get to the information for the next class in just a couple taps. He can also easily track when a student has missed a class and needs to make it up.

![Main Screen]({{ site.url }}/media/2015/11/MainScreen.JPG)

Brandy did most of the work on the design. You can thank her for those lovely old-school-notebook inspired green hues. She did the icon also, tying in the same theme.

Overall, we're very proud of what we've created and we're thrilled that we've been able to take Ed's problems and his inkling of an idea of a solution and turn it into an app that he can use every day.

## Technical Details
We wrote this app in Swift (and upgraded to Swift 2.0 halfway through) and we're targeting the two latest version of iOS in iOS 8 and 9. Most of the user interface was built using Storyboards and all the class, student, notes, and attendance information is stored using Core Data.

## Some Numbers
This app has been a side project for the last 9 months meaning it rarely got full attention and therefore took longer than we wanted it to take. In total we've spent 151 hours on it including design, development, and testing.

## The Future
We have a lot we want to do with this app still. We're trying to walk the line between releasing too early and holding onto it too long and we think we've hit that sweet spot. But having an app in development for 9 months means that a lot can change in the middle of it. For us, our tastes changed and refined as we got better at what we do. Now we see a lot of rough edges that we would have missed just a few months ago and we want to polish those. We also see potential for better calendar integration and sharing of the attendance information with schools.

And of course, if Ed comes across something he knows would make his job easier, we'll be on it.
