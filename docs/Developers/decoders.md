# SimpliPlay's Decoders
SimpliPlay uses different media decoders on different platforms. Here's a list of them:

## Android
On Android, SimpliPlay **relies on your system's decoders**. This decreases the size of the app by a large amount but does introduce some potential issues (that aren't likely to
happen on modern devices):

- Older devices often come with less media decoders for formats. Versions of Android older than 5.0 (Lollipop) lack native support for HEVC, and
  versions older than 4.4 (KitKat) lack native support for VP9. This means that no media player in SimpliPlay can play those formats on those versions of Android.
  This affects many formats, although if you're using a modern version of Android (like Android 10+), you shouldn't have to worry about format and codec support.

- Some (rare) devices come shipped with customized/broken decoders. These decoders may have trouble interacting with the media players supported in SimpliPlay, thus resulting in a
  different playback experience on those devices, which increases inconsistency and unreliability. But due to this, most Android firmware sticks to the original decoders.

But there are many benefits (which is why the Android version uses the system decoders), including:

- Decoders have access to core parts of the device. This means that they can easily take advantage of the CPU and GPU as much as possible, making performance better all around.

- System decoders are built-in and integrated with Android media players like ExoPlayer and MediaPlayer, which means you will get a mostly seamless playback experience.

- Decoders in the system also tend to be more lightweight and optimized compared to custom decoders like FFmpeg, which means a much lighter and smaller app that brings you highly optimized performance.

- Many custom decoders have limited support for certain operating systems. FFmpegKit, a cross-platform implementation of FFmpeg, became deprecated recently. With system decoders, you can ensure they are always maintained and usable on most Android devices.

So that is why we use system decoders on Android.

## iOS
On iOS, SimpliPlay also relies on your system decoders. This (again) decreases the size of the app and introduces issues and benefits, but one core thing about iOS's decoders is,
Apple themselves. Apple has patented certain codecs so they only support codecs they are associated with in some way. Codecs like VP9 are only supported because of how many people
use them, and they don't work outside of Safari.

This introduces a lot of limits on iOS, including: 

- No MPEG-DASH, VP9, VP8, or Matroska support. Only Apple-related and professional/very common, essential codecs (like EC-3 and AC-3 for professional audio by Dolby, or MP3 and WAV, commonly used for audio) are supported, especially on native iOS media players like AVPlayer, which is used in SimpliPlay.

- No legacy support for formats. Formats like QuickTime Movies often don't play on iOS if they were encoded using legacy versions of the specification. Android, in comparison, is the opposite and even supports H.263 and 3GP/3GPP video, a very old video codec and very old video format respectively.

But the few benefits are so good that we can't afford to lose it:

- Native, fast, and optimized performance for the formats and codecs iOS does support.

- Unlike ExoPlayer, no need for setup of controls, ExoPlayer builders, etc, everything is simplified.

- Built-in AirPlay support.

So yeah. Same story pretty much.

## Desktop
Unlike Android and iOS, we use FFmpeg and system decoders **combined** in the desktop version. FFmpeg allows for the support of VP8, VP9, MKV, and common formats used on the web, which
iOS lacks and Android sometimes has limited support for, while system decoders allow for the support of proprietary codecs without legal issues, including H.264 and HEVC (a.k.a, H.265).

In the lite version however, only system decoders are used. But in the main version, both FFmpeg *and* system decoders are used.

____

So yeah, you get it now.
