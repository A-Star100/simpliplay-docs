# User Installation Guide
Go to [SimpliPlay's official download page](https://simpliplay.netlify.app/#download-options), and download SimpliPlay. Your platform should be automatically selected based on your
operating system, but if not just click on the spinner and change your platform if the detected result was incorrect.

Next, you'll need to figure out your device's architecture. We assume you as the user already know this, but if not [here's a guide online](https://www.chiefarchitect.com/support/article/KB-01230/determining-if-your-computer-is-32-bit-or-64-bit.html#:~:text=In%20the%20Run%20dialog%20that,that%20uses%2032%2Dbit%20architecture.).

Once you've figured that out, click the appropriate download button and wait for the app to download. If you're on Android, scroll down and download an `.apk` file from the latest release (or whichever release you want to download).

If you're on iOS, you'll need to install [XCode](https://developer.apple.com/xcode/) (which is only possible on a Mac) and compile from source. In that case, take a look at the [developer installation guide](installation.md).

Once the app has downloaded, simply open the file and do whatever you would when an app installs. For bypassing security warnings, read the guide below:

# Desktop

## On Windows:
You will see a Windows SmartScreen dialog when trying to open the installer/app. Click More Info..., then Run Anyway.

## On macOS:
### Sonoma and older:
First, open the app normally. You should see a warning. Then, right-click and press Open. In that warning dialog, you should now see an extra button called Open. Press it and the app should launch.

### Sequoia and newer:
First, open the app normally. You should see a warning. Go to Settings >> Privacy and Security, and then you should see a warning saying "The app SimpliPlay was not allowed to open..., or something similar. Click Open Anyway, enter your username and password, and the app should launch.
On Linux:
This depends on your distro. Try talking with your distro's open-source community to learn more about possible issues with your distro.

# Mobile

## On Android:
When attempting to install the app, you should see a warning that says For your security, [App name] is not allowed to install unknown apps on this device. Click Settings in that dialog, then toggle the switch Allow installing unknown apps. Depending on your device's firmware, you may see more warnings. For example, if your Android device was manafactured by Xiaomi, you'll see a warning with a red background addressing the dangers of enabling unknown apps. But if your phone was manafactured by Samsung or Google, you won't see any warnings.
*If you are publishing via the Play Store you won't need to worry about this.*

## On iOS:
The iOS app available is only source code, NOT a compiled app. If you compiled it yourself without signing it properly, you won't be able to install it unless you use your iOS device for testing via a USB connection, which requires a mobileprovision profile to allow testing your apps this way on your devices only. Unless you do this, testing will be disallowed on your iOS device. If you compiled an unsigned IPA or self-signed IPA instead of using a certificate that Apple signed, the app won't install on any devices other than ones with a mobileprovision profile in your Apple Developer account. If you used a certificate that Apple has signed, and aren't publishing on the App Store, users using iOS 16 or above will need to enable Developer Mode, which allows iOS users to install properly signed apps outside of the App Store.
*If you are publishing via the App Store you won't need to worry about this.*

________________________________________________________________________________________________

Note that if you have an antivirus installed you'll have to go to their website and take a look at how to bypass security warnings there.



