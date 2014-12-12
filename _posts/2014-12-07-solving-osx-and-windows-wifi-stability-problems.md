---
layout: post
title: "Solving OSX and Windows WIFI stability problems"
description: "Solving OSX and Windows WIFI stability problems"
category: Tutorial
tags: [osx]
published: true
---

After a couple of weeks of fighting with stability problems with my OS
Yosemite, I finally solved my nightmare. _This guide has nothing to do with
software and also applies to solving stability problems with other Operating
Systems as well_.

Because of a new startup that I'm creating with a couple of friends, I recently
transformed a room in my house in a shared office. Basically we are 3 people working
in a small space with an internet connection. Soon after they moved in,
we noticed a huge drop in the stability of our WIFI connection, so I
called my ISP provider and upgraded my membership, hoping that will solve the
problems. It didn't.

After numerous visits from ISP technicians, they didn't find anything
wrong in the modem signals, or in the infrastructure inside and outside my
house. So it was clear that the problem was related to my devices or
connection layout and they needed to be solved by myself.

Definitely it wasn't my internet provider, because after I connected directly via
LAN cable the connection worked flawlessly. However, when I used a WIFI connection,
the problems arised.

## The hell
At the beginning I thought that it was a problem with our computers, since two of us
were using OSX Yosemite and the worst stability seemed to be in those computers. So
I decided to dig further more and found that Yosemite had **several problems with WIFI
and Bluetooth stability**.

After digging up a little more, I learned that a **traditional WIFI connections
use a 2.4GHz band** to stream the data, and that was a immediate red flag when I
remembered that **Bluetooth uses the same frequency**, furthermore, there are
a TON of electronic appliances that use that same frequency, some of them are
wireless phones, microwave ovens and some LCD displays that generate noise
in that same frequency. On top of that add all the noise caused by the dozens
of other WIFI signals that my laptop was able to reach.

So I decided to test the WIFI stability with all my Bluetooth devices and
my Bluetooth antenna off. It worked like magic, no stability problems at all. However,
since working without bluetooth was not an option for us (we use 3 bluetooth
headsets, 2 bluetooth keyboards, 3 bluetooth mouses and 1 bluetooth speaker) I
decided to explore a little bit more and found that there are routers that
take your WIFI signal and broadcast them in 2 channels, they are called **"Dual
band routers"**.

## The solution
After looking online for several options ranging from $30 USD to $300 USD, I
settled with a
<a href='http://www.amazon.com/TP-LINK-TL-WDR4300-Wireless-Gigabit-300Mbps/dp/B0088CJT4U' rel='nofollow' target='_blank'>TPLink 4300</a>
that costs around $55 USD in Amazon. The setup was pretty straight forward and took under 5 minutes.
Boom, stability problems no more. My internet connection has been working perfectly fine
for about 6 weeks now.

However, remember to leave open both bands (2GHz and 5Ghz) because some cheap Android devices
and some old PCs won't detect the 5GHz frequency. That's a problem when your
relatives or friends come to visit you.

So, there you have it, for 50 bucks you could prevent some stress and cursing.

