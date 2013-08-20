---
layout: post
title: "Pumas on Heroku with New Relic"
description: "New Relic and Puma can play nicely in Heroku"
category: 
tags: []
published: true
---
Puma is an awesomely fast Ruby webserver with a very small memory footprint.
However if you try to use New Relic with Puma on Heroku, you will see
that no data is recorded in New Relic.

To solve that situation, you just need to setup the following
Heroku config var:

{% highlight bash %}
heroku config:add NEWRELIC_DISPATCHER=Puma
{% endhighlight %}

And voila!, now your New Relic dashboard should be displaying all
those sexy dashboards and metrics about your app.
