---
layout: post
title: "Using MailSpyInterceptor to BCC yourself"
description: "Using MailSpyInterceptor to BCC yourself"
category: Dev
tags: [ruby, rails, gems]
published: true
---

I've found recently that when you're running an early stage startup, it's
helpful to BCC yourself in every transactional email that your application
sends. It might not be suited for big companies with tons of automated emails
but it's handy in this particular case. It will certainly help you to catch
bugs and notice problems early on.

<!--more-->

I created the [MailSpyInterceptor gem](https://github.com/juandazapata/mail_spy_interceptor){:rel="nofollow"}{:target="_blank"}.
Once installed, it will simply BCC the email(s) that you define in every email
that your system sends.

To use it, you just need to install the gem:

{% highlight ruby %}
  # Gemfile
  gem 'mail_spy_interceptor'
{% endhighlight %}

...and register the interceptor in your environment file:
{% highlight ruby %}
  # config/environments/production.rb
  Mail.register_interceptor(
    MailSpyInterceptor.new(ENV['EMAIL_RECIPIENTS'])
  )
{% endhighlight %}

That's it. You can pass a string with a single email or a string with comma
separated emails.

If you don't know about Mailer Interceptors, I recommend you to check the
[mailer guides](http://guides.rubyonrails.org/action_mailer_basics.html#intercepting-emails){:rel="nofollow"}{:target="_blank"}
