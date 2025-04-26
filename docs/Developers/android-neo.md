# SimpliPlay Neo (Android)
SimpliPlay Neo is a version of the Android app written in [Flutter](https://flutter.dev) instead of [App Inventor](https://appinventor.mit.edu/)'s block-based interface.

The Neo version, sadly, is quite buggy to the point where on many platforms other than Android (like iOS and macOS), this app remains unusable due to critical bugs like the video lagging,
controls not actually working, etc.

This version primarily uses the [video_player](https://pub.dev/packages/video_player) and [chewie](https://pub.dev/packages/chewie) packages. The video_player package is known to be 
unreliable, but migration for this side version isn't planned, but in case it happens the app will migrate to using [better_player](https://pub.dev/packages/better_player), which
works much better (get it?) on pretty much *every* platform.

That's mostly it in a summary. Oh, and also subtitles don't work in fullscreen since they're drawn on top of the video player instead of being a part of it like in the main (App Inventor/AI2)
version.
