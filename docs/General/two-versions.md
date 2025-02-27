# SimpliPlay: Two Versions 
In SimpliPlay, there are two different desktop and mobile versions.

The first one is the Neo Android version, which was developed in [Flutter](https://flutter.dev).
This version (unlike the main version developed in [App Inventor](http://appinventor.mit.edu/)) uses Media3, but is quite buggy compared to the more stable main version.
The Neo version has an *even* simpler UI, however, so for those that want it you can check out the latest Neo (labeled as Flutter in releases) release at [GitHub Releases](https://github.com/A-Star100/simpliplay-android/releases/).

The second one is the lite version, a smaller version for desktop because the main version uses [Electron](https://electronjs.org), which is a good framework, but it takes up a lot of space
and resources. The lite version, however, *relies* on the built-in web view, which may not support as many media codecs and formats as the main version. But fret not, for HLS and MPEG-DASH
will still work.
