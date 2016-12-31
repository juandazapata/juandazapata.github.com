---
layout: post
title: "Managing your dotfiles with GNU Stow"
description: "Easily manage your dotfiles using Stow"
category: unix
tags: [programming, unix, dotfiles]
---
I recently stumbled upon a little program called
[GNU Stow](http://www.gnu.org/software/stow/){:rel='nofollow'}{:target='_blank'}.
It's a small util that follows the unix philosophy to do one thing only and do
it well.

You can read the program description in their website, but long story short,
it allows you to easily manage symlinks from different sources. It's the
perfect util to manage a **dotfiles** installation.

If you use macOS with homebrew, you can install it doing `brew install stow`.
There are also several installation methods for different operating systems, or
you can compile it from source if you want.

What I like the most about it, is that you end up with a folder structure that
makes sense to you. You can group your _dotfiles_ by program, by responsibility
or whatever you want.

### How?
You just need to create a `dotfiles` folder in your `home` directory. That
folder will contain one subfolder per each configuration group. For example,
if you have a config file for `neovim`, you need to create a structure like
this:

```
vim
└── .config
    └── nvim
        └── init.vim
```

Then you run can symlink the config to your `home` folder by running:
```
stow vim
```

This will create the following links:

```
$HOME
└── .config
    └── nvim
        └── init.vim
```

Remember that you can group them however you want, there's no predefined
structure. You could gather config files under `editors` or maybe `databases`,
etc.

It will also refuse to symlink if the target file is not a symlink, so
there's no risk of overwriting files by accident.

If you want, you can take a look at my
[personal dotfiles](https://github.com/juandazapata/dotfiles){:rel='nofollow'}{:target='_blank'}
to see an example structure that makes sense for me. I also created a
[script](https://github.com/juandazapata/dotfiles/blob/master/bin/stow-all){:rel='nofollow'}{:target='_blank'}
that stows everything for me when I run `bin/stow-all`.

I hope this is useful to you :)
