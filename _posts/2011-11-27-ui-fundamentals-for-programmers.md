---
layout: post
title: "UI fundamentals for programmers"
description: "My talk about UI fundamentals for programmers"
category: 
tags: []
---
Last Nov 24th, I participated in the _Bogodev meetup_ and 
gave a talk titled "**UI fundamentals for programmers**". My objective with this talk was to share 
my **personal** experiences with other developers and to have a nice and animated conversation 
around those experiences. Since my talk was given in spanish, I'm going to share the key parts of it in this blog post.


## Disclaimer
I consider this field to be very subjective, because of that, the content of the speech is **VERY** 
biased by my personal experience. I'm very lucky to have 
a [brother](http://twitter.com/elrichardini "El Richardini") who happens to be an 
awesome graphic designer, so a lot of this content is also based on his 
experiences too.


## Motivation
So, I sued a guy that owed me some money (long story), and then I heard
that our government just deployed an 'awesome tool' to check the status
of the legal process... and I found this **piece of shit**:

![UI Crap](/assets/posts/ui-fundamentals/ui-crap.png "UI Crap")

Really? Man, this made my eyes bleed. This made me really sad, sad to
realize that there are coders who apparently code with no attention to
detail at all...

I didn't use that 'awesome tool' at all. I just closed the tab window and
went to take a cold shower, made a prayer for his lost soul and prepared
the talk about **UI fundamentals**.


## UI is software
Having worked for a long time developing applications for marketing
teams, I found that for people with little to no experience in the
technical field, the **UI is the software itself**. They do not care if
there are database servers, amazon buckets or any other technological
component behind. For them, **the software is what they see and what
they feel**.

I think that the UI should be treated with the same (or more?)
importance as your models design, infrastructure choices, etc. **It's
the FIRST LAYER OF YOUR SOFTWARE**, give it some respect.


## We make software for people
Unless you're coding something in cobol, chances are that you're coding
something inteded to be used for humans. A videogame, a corporate
website, a blog, even an API are examples of code that will be used by
human, keep that in mind.


## Fitt's law
Here the idea is pretty simple: **'Do not put negative actions near to
positive actions'**. In english that'd be: **'Do not put the _delete post_
button, next to the _edit post_ button'**, that'll create frustration in
the user when using the UI, because the chances of messing up will be
high.


## Color psycology
This is a very interesting and extensive matter. I didn't go into a lot
of deep here, but you should be aware of the basic concepts. Being
able to understand [why a 'delete' button should be 'red' instead of
'blue' won't hurt you](https://www.google.com/search?q=color+pshycology+for+web&aq=f&oq=color+pshycology+for+web&aqs=chrome.0.57.3883&sourceid=chrome&ie=UTF-8).


## Tools for rapid prototyping
This one is easy... currently there's no excuse for a programmer to
deliver a piece of crap like the one that I exposed early. 

When [Twitter Bootstrap](http://twitter.github.com/bootstrap/)  and
[Foundation Framework](http://foundation.zurb.com/) entered in the game,
everything changed. Those frameworks are easily customizable and you could have great
results with the [right guidance](http://sachagreif.com/color-theory-for-startups/).

## Resources
Here are some resources that you might find useful:

- **[Don't make me think](http://www.amazon.com/Dont-Make-Me-Think-Usability/dp/0321344758)**: For some designers this is the holy grail of web usability. Highly recommended.
- **[ OS X Human Interface Guidelines ](https://developer.apple.com/library/mac/#documentation/UserExperience/Conceptual/AppleHIGuidelines/Menus/Menus.html#//apple_ref/doc/uid/TP30000356-TP6)**: This is a beautiful gem if you are designing something intended
to be displayed on a laptop or a desktop computer.
- **[ iOS Human Interface Guidelines ](http://developer.apple.com/library/ios/#documentation/UserExperience/Conceptual/MobileHIG/Introduction/Introduction.html)**: Same as above but intended for mobile applications.


### Presentation video
Below you'll find my complete speech (remember that it's in spanish).

<iframe width="640" height="480" src="http://www.youtube.com/embed/oHlO8Vt7RrU" frameborder="0" allowfullscreen></iframe>

### Presentation slides
Here are the presentation slides (also in spanish).
<script async class="speakerdeck-embed" data-id="50105482ac941a000205a30a" data-ratio="1.33333333333333" src="//speakerdeck.com/assets/embed.js"></script>

