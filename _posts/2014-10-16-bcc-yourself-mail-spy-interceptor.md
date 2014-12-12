---
layout: post
title: "Using MailSpyInterceptor to BCC yourself"
description: "Using MailSpyInterceptor to BCC yourself"
category: Dev
tags: [ruby, rails, gems]
published: true
---

I've found very recently that when you're running a startup it's very helpful
to BCC yourself in every automated email that your application sends.
It might not be suited for big companies with tons of automated emails but it's
awesome in an early stage startup. It will certainly help you to catch
bugs and notice problems early on.

To help you with that, I created the [MailSpyInterceptor gem](https://github.com/juandazapata/mail_spy_interceptor).
Once installed, it will simply BCC the email(s) that you define in every email that your
system sends.

To use it, you just need to install the gem:

<pre>
  <code class='language-ruby'>
    # Gemfile
    gem 'mail_spy_interceptor'
  </code>
</pre>

Register the interceptor in your environment file:
<pre>
  <code class='language-ruby'>
    # config/environments/production.rb
    Mail.register_interceptor MailSpyInterceptor.new(ENV['EMAIL_RECIPIENTS'])
  </code>
</pre>

That's it. You can pass a string with a single email or a string with comma separated emails.

If you don't know about Mailer Interceptors, I recommend you to check the
[mailer guides](http://guides.rubyonrails.org/action_mailer_basics.html#intercepting-emails).

Pull requests are welcomed.
