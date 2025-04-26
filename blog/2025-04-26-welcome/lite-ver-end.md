---
slug: lite-ver-end
title: Lite Ver. Discontinued
authors: [anirudh]
tags: [discontinued]
---
The Lite version of SimpliPlay has been a way to experience the app on lower-end desktop hardware.
However, today, on April 26, 2025, we announce its discontinuation.

<!-- truncate -->

We feel that the Lite version doesn't fit with the project anymore, especially since you can
just use a more lightweight web browser and boot up the web version.

The Lite version just uses the built in web view to render the page, and lacks support for file picking
due to the way the internal framework, [Neutralinojs](https://neutralino.js.org), works.

It will still be available for download in the archive section of the website,
but it will **no longer receive critical patches**, such as the memory leak fix
for the desktop and web versions that had it, and will **not receive further security updates**.

Therefore we recommend you stay away from using it.

You may still download it [here](https://simpliplay.netlify.app/archive/lite) in case you want to.