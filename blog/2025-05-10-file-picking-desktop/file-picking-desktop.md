---
slug: file-picking-desktop
title: Desktop file picking
authors: [anirudh]
tags: [update]
sidebar_position: 6
---
The previous versions of the desktop version of SimpliPlay have always
had issues with opening files in SimpliPlay via your file browser
on platforms other than macOS.

We changed that today as of version [1.0.6](https://github.com/A-Star100/simpliplay-desktop/releases/tag/release-1.0.6).

<!-- truncate -->
Several issues were in the code previously.
For one, Linux never had file picking cases, so it was just left out while macOS had all the glory and Windows had buggy glory.

On Windows, an infamous bug was file picking working only once. Then you would have to close and open the app again.
The reason why has been fixed, and is due to this *one* event listener:

```js
const winFileURL = pathToFileURL(filePath).href; // ✅ Convert and encode file path
mainWindow.webContents.once("did-finish-load", () => {
  mainWindow.webContents.send("play-media", winFileURL);
});
```

The following code could previously be found inside the
`openFileSafely()` function for platforms other than macOS, which relies on a command line argument
sent by the OS instead of macOS-only `open-file` event listener.

This meant that only **once** the current instance of the app finished loading,
only the **first time**, would it send the message to actually **play** the
file path sent by the OS, and previously it wasn't even URL encoded until [patch 1.0.5.2](https://github.com/A-Star100/simpliplay-desktop/releases/tag/release-1.0.5.2-win), which was a Windows-only patch!

Now, the event listener has been removed, meaning file picking should work every time now.
Please help us test on every platform! This is a small project and we don't have much operating systems available to us
right now at a steady pace.

Thank you guys!