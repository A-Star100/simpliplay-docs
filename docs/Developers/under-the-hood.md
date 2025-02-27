# SimpliPlay: Under The Hood
SimpliPlay is a simple-to-use video player app that supports HLS and MPEG-DASH on almost every platform (except iOS native, there only HLS is supported out of the two streaming protocols).

But under the hood how it works can get complicated, especially for the native versions. Let's dive in.

## Android
SimpliPlay Android uses [ExoPlayer 2](https://www.google.com/search?q=exoplayer+2&rlz=1C5CHFA_enUS919US919&oq=exoplayer+2&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQRRg7MgYIAhBFGDsyBggDEEUYOzIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg80gEIMTQyMWowajmoAgCwAgE&sourceid=chrome&ie=UTF-8) under the hood, even though [Media3](https://developer.android.com/media/media3) is the latest Android media player library in the ExoPlayer series, but due to the development starting with ExoPlayer 2 (although the library is deprecated) because of cost issues, it is still used in the SimpliPlay app for Android platforms (unless you're using the Neo version. Learn more about it [here](https://simpliplay-docs.readthedocs.io/en/latest/General/two-versions/)).

ExoPlayer and Media3 ExoPlayer are Android-native media player libraries developed by Google. Unlike the dated MediaPlayer library, there is less system integration (ExoPlayer often
requires the use of packages inside your app for features like MPEG-DASH, HLS, RTSP, VP8/VP9, and more), and the library is more third-party-esque.

SimpliPlay for Android supports a lot of things:
1. Embedded audio and subtitle tracks
2. Subtitle tracks
3. Playlists
4. HLS and MPEG-DASH
5. Most video formats that ExoPlayer and MediaPlayer support
______________

Under the hood, ExoPlayer does a lot of the work, whereas MediaPlayer is an alternative video player users may choose from. It's important to understand how these video players work.
To do that, please read the [Android Developer docs](https://developer.android.com/media/audio-and-video).

ExoPlayer 2 (in a simplified summary) is an activity in all Android apps that use it. Other activities can interact with the use of connectors. In Media3, connectors are no longer needed
since most APIs like media broadcasting (so Google Assistant may control playback) and MediaSession (that's harder to explain, please read the docs for an in-depth talk abaout it) are
integrated with each other.

MediaPlayer is also an activity, but *any* interaction with most useful APIs requires the use of the MediaCompat library, which is officially deprecated, since MediaPlayer was designed to be bare-bones. MediaPlayer isn't recommended by
Google anymore to be used in media playback apps, since even deprecated versions of ExoPlayer like ExoPlayer 2 provide a *far* superior experience and feature set compared to MediaPlayer.

MediaCompat was also usable in ExoPlayer, but modern use practices stray away from MediaCompat and use newer APIs like MediaSession and MediaBroadcast that are integrated with ExoPlayer 2,
and best integrated with Media3.

## iOS
SimpliPlay iOS uses [AVPlayer](https://developer.apple.com/documentation/avfoundation/avplayer/) under the hood, which is a native Apple-exclusive media player framework part of the
[AVFoundation](https://developer.apple.com/documentation/avfoundation/), dedicated to providing top-notch media playback libraries for Apple devices.

AVPlayer, being made by Apple, doesn't support as many third-party formats. Most formats supported are ones Apple has a relationship with, like HEVC (a.k.a H.265), because they patented the codec along
with many other companies like Samsung and Microsoft, or HLS, which is a streaming protocol they made competitive to MPEG-DASH, and because of this competition some people will choose
HLS, meaning that others like Android *have* to support HLS to be on everyone's good side.

AVPlayer comes with [AirPlay](https://www.apple.com/airplay/) support without any extra work, code, or even just thinking, however, which is a benefit of Apple. They add support for their things, whereas to use
Chromecast with ExoPlayer 2 or Media3 ExoPlayer, you have to add a package to your app and add more code to integrate the casting functionality, although not much code has to be added.

AVPlayer is simpler compared to ExoPlayer, not that many complex APIs are revealed out of the box, and ones that are usually had integration with each other from the start and were easy to
use, unlike ExoPlayer 2's connectors, which we had to wait until 2021 to even see a glance of improving!

But Apple is also closed, too, yet Google is open, so it is what it is I guess.

SimpliPlay iOS, by the way, relies on Swift and SwiftUI to work, and was tested on various iPhone simulators, including the iPhone 16 Pro Max, the iPhone SE 3rd Gen, and more.

## Desktop
SimpliPlay Desktop uses [FFmpeg](https://ffmpeg.org) under the hood, which [Electron](https://electronjs.org) uses [Chromium](https://www.chromium.org/) for, which uses it for media playback.

As you might already know, the desktop version of SimpliPlay was built in Electron, using a proprietary-codec-free version of FFmpeg, that supports MP4 (relies on device), WEBM (codecs
included), Matroska video and audio (codecs included), and many more formats and codecs.

The lite version was built with [Neutralinojs](https://neutralino.js.org/), however, but since it uses the built-in web view, codec and format support largely depends on your operating system
But since HLS and MPEG-DASH support in the desktop app uses [HLS.js](https://github.com/video-dev/hls.js) and [DASH.js](https://github.com/Dash-Industry-Forum/dash.js), and since
even the built-in web view along with Chromium supports MSE, HLS and MPEG-DASH will still work even in the Lite version without much issue.

FFmpeg is used mostly for its decoding and hardware acceleration, and powers many other media players, including [VLC](https://www.videolan.org/vlc/) and [MPV](https://mpv.io/).
Even ExoPlayer uses FFmpeg to an extent. Almost everybody does. Making your own decoders for media is pretty much useless now thanks to FFmpeg, but at least we don't
have to develop our own media decoders like VLC used to in its earlier days... :)

_____________

To learn more about SimpliPlay under-the-hood, it's best to [install the app first](https://simpliplay-docs.readthedocs.io/en/latest/General/user-install/).
You can emulate it, hack it, whatever. It's open-source anyway. So as long as you don't use the app for *any* malicious purposes, we're OK with whatever path you take :)
