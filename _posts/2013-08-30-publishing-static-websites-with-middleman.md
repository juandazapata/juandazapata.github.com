---
layout: post
title: "Publishing static websites with Middleman"
description: "Learn how to host static sites with Middleman"
category: 
tags: []
published: false
---

There are sometimes in which we need to build a simple
website such as a marketing site for an iPhone app, an _SPA_ using Ember or
Angular or whatever, etc...Creating such website using **rails** would
be an overkill but here comes [middleman](http://middlemanapp.com) to the rescue.

### Why?
Because it's super simple, there're virtually no security concerns (you
don't have a database) and you can host it on **Amazon S3** and serve
it using **Amazon Cloudfront**, so your website will be superfast and
scalable with no hassle.

### Initial setup
<pre>
  <code class='language-bash'>
    $ gem install middleman
    $ middleman init my-website-name
  </code>
</pre>

Those lines install the **middleman** gem and initialize a new
middleman project. If you're not familiar with middleman, just go ahead and
check out [the docs](http://middlemanapp.com/getting-started/) (which are
great), they have a lot of cool stuff over there.

My favorite features are the
[asset pipeline](http://middlemanapp.com/asset-pipeline/), the
[pretty URLs](http://middlemanapp.com/pretty-urls/), the
[LiveReload](http://middlemanapp.com/livereload/) and my personal
favorite of all time, the [local data](http://middlemanapp.com/advanced/local-data/).
Go ahead and check them out.


### Publish to Amazon S3
When your website is ready, then we need something to host it. Since
middleman spits **plain html files** you can use a simple cheap hosting
(Apache and nginx are VERY good at serving static files). In our case we
will use **Amazon S3** to host our files and then we'll setup a
**Cloudfront** distribution, so our website will be DAMN FAST. This
approach has several advantages:

- You don't need to setup a server.
- You have almost no security concerns:
  - No database, so there's no _sql injection_ risk.
  - No server, so there's no need to setup a firewall and worry about
    ports, ftp permissions, etc. As long as you keep your Amazon
    security tokens in a safe place you'll have no risks.
- It's cheap.
- If your website hits the frontpage on Hacker news it won't go down
  because S3/Cloudfront scales 'infinitely' by default without any action
  needed on your end.

#### The config file
  - My config plugins

Create a bucket in Amazon S3
Cloudfront setup (default document and CNAMES)
Invalidation plugin
Point your DNS to Cloudfront
middleman build
middleman invalidate

### Docs
Check middleman docs
Some websites in middleman (Ember site)

![Pie chart](/assets/posts/custom_active_admin_pages/pie_chart.png)

That's it! Happy charting!
