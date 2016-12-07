---
layout: post
title: "Rmagick gem and Imagemagick with Homebrew"
description: "How to solve the problems with rmagick and imagemagick after upgrading OsX"
category: Dev
tags: [ruby, osx, homebrew, gems]
published: true
---
Dependency management is **hard**. Some of us are still stucked with
[rmagick](https://github.com/rmagick/rmagick){:rel="nofollow"}{:target="_blank"}, and sadly this library hasn't
been updated in years. I think that
[minimagick](https://github.com/minimagick/minimagick){:rel="nofollow"}{:target="_blank"} is a good replacement,
but sometimes we just can't control all our dependencies.

After upgrading `imagemagick` via `homebrew`, you try to run your rails project,
and you get all kind of messages telling you that your **rmagick gem** does not
work anymore...we've all been there.

<!--more-->

After poking around in the `homebrew` documentation, I finally found a
combination of commands that worked for me. Try running the following in your
terminal:

{% highlight bash %}
  cd /usr/local/Cellar/imagemagick/6.8.0-10/lib
  ln -s libMagick++-Q16.7.dylib   libMagick++.dylib
  ln -s libMagickCore-Q16.7.dylib libMagickCore.dylib
  ln -s libMagickWand-Q16.7.dylib libMagickWand.dylib
{% endhighlight %}

After relinking the libraries, you can try to install the gem again and you
should have no problems.

I hope it helps.

<div class="update">
  <strong>Update</strong>: It seems that rmagick is under development again and
  the compatibility problems are now solved.
</div>
