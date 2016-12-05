---
layout: post
title: "Using RVM in a Crontab"
description: "How to use RVM in a crontab"
category: Dev
tags: [rvm, osx]
published: true
---
If you use `rvm` and need to run a `crontab` in your server, then you
know that it doesn't work out of the box. The first thing that
you might try to do would be something like this:

{% highlight bash %}
  1 0 * * * bundle exec ruby /your/awesome/script.rb
{% endhighlight %}

However you will see all kind of error messages like `Gemfile` not found and
similar errors.

<!--more-->

The correct way to run it, is to invoke directly your ruby installation from
your `rvm` gemset:

{% highlight bash %}
  1 0 * * * /usr/local/rvm/bin/ruby-1.9.2-p290@awesomeProject /your/awesome/script.rb
{% endhighlight %}

I hope this is helpful.
