---
slug: back-with-a-bang
title: Back with a Bang!
authors: [anirudh]
tags: [update]
sidebar_position: 8
---
The SimpliPlay Chrome extension recieved a **huge** update, along with some new discoveries regarding
the desktop app.

<!-- truncate -->
## Chrome Extension
New Features:

- **Side Panel:** You can now open SimpliPlay in a side panel, which works even if you interact with apps other than SimpliPlay
- **New Tab:** As well as the side panel, inside of *that* you can open SimpliPlay in a new, regular browser tab

## Desktop app
Regarding the [Windows & Linux file picking issue](/docs/blog/file-picking-desktop), the `.once` event listener described in that post was actually **not** the cause
of the issue. There wasn't really an issue in the first place, so we've determined that it is mostly a fault with Electron (that has
probably been fixed since Electron v36, which is the current Electron version we're using).

The `.once` event listener was for when the app **just** loaded, so **ONCE** the app finished loading if it was still in the middle of loading when the file picking was triggered, the file would be picked, otherwise everything would function as normal.