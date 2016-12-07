---
layout: post
title: "Don't pollute your HTML with Bootstrap classes"
description: "Don't pollute your HTML with Bootstrap classes"
category: Coding
tags: [dev, html, css, coding]
published: true
---
When coding HTML templates, we have to make sure that we don't pollute the view
with presentation classes. The rule of thumb would be:

<div class="update">
  Use HTML for structure and CSS for presentation
</div>

If we don't follow this simple rule, it will be harder to maintain a growing
codebase, and let's not talk about what a nightmare it would be if we ever need
to upgrade to a newer version of Bootstrap.

It's easy to fall for this specially when using bootstrap column classes.
Let's see an hypothetical example:

```haml
/ DON'T DO THIS PLEASE
.appointments.col-md-6.col-sm-12
  .week.col-sm-12.pull-right
    / Something here
```

In the previous example, we're forcing all the `appointments` to have the same
_presentation_ (everything with `.col-md-6.col-sm-12`), so
if there's a _theme_ that requires the `appointments` to have a `.col-md-3` we
will run into some troubles.

A more maintainable way, would be to use the HTML to define
**only the structure** like this:

```haml
.appointments
  .week
    / Something here
```

Then in the SASS file we can use bootstrap mixins to **define the presentation**
like this:

```scss
.appointments {
  @include make-md-column(6);
  @include make-sm-column(12);

  .week {
    @include make-sm-column(12);
    @extend pull-right;
  }
}
```

By doing this, we won't couple the HTML to the styling, and we will be able to
freely change the presentation.

Please take a look into
[Bootstrap grid mixins](http://getbootstrap.com/css/#mixins){:rel="nofollow"}{:target="_blank"}
if you want to see all the available mixins.
