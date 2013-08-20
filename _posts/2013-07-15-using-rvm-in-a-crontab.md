---
layout: post
title: "Using RVM in a Crontab"
description: "How to use RVM in a crontab"
category: 
tags: []
published: true
---
If you use rvm and need to run a crontab in your server then you
know that it doesn't work out of the box. The first thing that
you might try to do is something like this:

<pre>
  <code class='language-bash'>
    1 0 * * * bundle exec ruby /your/awesome/script.rb
  </code>
</pre>

However you will see messages like Gemfile not found and
crazy stuff like that. The correct way to run it is to invoke
directly your ruby installation from your rvm gemset. Something like this:

<pre>
  <code class='language-bash'>
    1 0 * * * /usr/local/rvm/bin/ruby-1.9.2-p290@awesomeProject /your/awesome/script.rb
  </code>
</pre>

Hope it helps!
