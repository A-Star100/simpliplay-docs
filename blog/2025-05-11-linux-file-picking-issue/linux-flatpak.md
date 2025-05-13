---
slug: linux-flatpak
title: Linux Flatpak
authors: [anirudh]
tags: [idea]
sidebar_position: 7
---
Linux users have been given an AppImage to install SimpliPlay with, but it has
some issues that don't occur with Flatpak installations.

<!-- truncate -->
One big issue is usability. You can't launch an AppImage application like you can
a Flatpak in the Applications menu. You have to use the command line, and *then* you 
might run into security issues, like the OS whining about an improperly configured sandbox.

I only discovered these issues because I set up a VM in [VirtualBox](https://www.virtualbox.org/) using Ubuntu 25.04.

That's when a Flatpak of SimpliPlay came to mind.
It would allow for desktop file picking because Flatpaks support it (unlike AppImages), and would also increase usability.

Sooner or later, we'll be offering an alternative way to use SimpliPlay for Linux users.
Just you wait!