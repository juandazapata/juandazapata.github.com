---
layout: post
title: "Using view helpers in Rails controllers"
description: "Using view helpers in Rails controllers"
category: Dev
tags: [rails]
published: true
---

The other day I needed to use a view helper in my controller in order to
nicely format a flash message. It turns out that it's a simple thing to
do.

In my particular case, I had a helper to format a phone number using the
[phony gem](https://github.com/floere/phony){:rel="nofollow"}{:target="_blank"}.

{% highlight ruby %}
  # app/helpers/application_helper.rb
  def format_phone(phone_number)
    unless phone_number.nil?
      Phony.formatted(phone_number, spaces: '-')
    else
      ''
    end
  end
{% endhighlight %}

<!--more-->

Once you have your view helper, you can use it in any rails controller by
invoking the `view_context` object:

{% highlight ruby %}
  # app/controllers/phones_controller.rb
  def confirm
    if current_user.confirmed_phone?
      redirect_to edit_phone_path,
        notice: \
          "The phone number #{view_context.format_phone(current_user.phone)}
          is already confirmed."
    end
  end
{% endhighlight %}

You can see more about the `view_context` object in the
[api dock](http://apidock.com/rails/AbstractController/Rendering/view_context){:rel="nofollow"}{:target="_blank"}.
