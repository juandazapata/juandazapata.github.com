---
layout: post
title: "Rmagick gem and Imagemagick with Homebrew"
description: "How to solve the problems with rmagick and imagemagick after upgrading"
category: 
tags: []
published: true
---
Let me begin by saying that you should be really ashamed if you're
still using [rmagick](https://github.com/rmagick/rmagick) since that
shit has not been updated in YEARS.
I think that [minimagick](https://github.com/minimagick/minimagick) might
be a good option to replace it. However, sometimes we just can't control
all our dependencies.

So...you just told homebrew to upgrade
[imagemagick](http://www.imagemagick.org/script/index.php) and when you
try to run your rails project, you get all kind of messages telling you
that your **rmagick gem** does not work anymore...you're fucked up.  

Try running the following commands in your terminal:

<pre>
  <code class='language-bash'>
   $ cd /usr/local/Cellar/imagemagick/6.8.0-10/lib
   $ ln -s libMagick++-Q16.7.dylib   libMagick++.dylib
   $ ln -s libMagickCore-Q16.7.dylib libMagickCore.dylib
   $ ln -s libMagickWand-Q16.7.dylib libMagickWand.dylib
  </code>
</pre>

After relinking the libs, you can try to install the gem again and you
should have no problems.

Hope it helps!

<hr />

_**Update:** It seems that **rmagick** is under development again and the
compatibility problems are now solved._

