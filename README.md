# Flashcards Mobile App

## About the app
This is a simple flashcards app. You can create new decks, giving each a title,
and then add cards to them. A card is just a question and its answer. Once you
have at least one card in a deck, you can test yourself by launching that deck's quiz.
A quiz will run through all cards in that deck, and you'll be shown your score at
the end.

## Quick guide to setting up

The app has been tested on the iOS simulator and an Android Moto G5+.

### Node.js, Expo, iOS simulator

The app requires Node.js and Expo to run. If you need to install either of these
 please follow the instructions on their respective web pages.

You can run the app via emulators for both iOS and Android (if running the apps
on your laptop/desktop). However, the iOS emulator only runs on a Mac.

Alternatively, you can run the apps on Android and iPhone devices. You will need
to download the Expo app from the appropriate app store to do this.

 *  [Node.js installation instructions](https://nodejs.org/en/download/)
 *  [Expo installation instructions](https://expo.io/learn)
 *  [Android emulator installation instructions](https://docs.expo.io/versions/v28.0.0/introduction/installation#android-emulator)
 *  [iPhone emulator installation instructions](https://docs.expo.io/versions/v28.0.0/introduction/installation#ios-simulator)
 *  [Expo for Android from the Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)
 *  [Expo for iPhone form the App Store](https://itunes.com/apps/exponent)

### Launch the App

1.  Navigate to the folder where you downloaded the app code.
1.  Run `npm start` from the console. This will launch the expo package manager.
1.  To open the app in the iOS simulator (for those on a Mac)
    1.  In the console, press `i`. This will build the JavaScript file and open the emulator.
    1.  The app should appear in the simulator window.
1.  To open the app in the Android emulator
    1.  In the console, press `a`. This will build the JavaScript file and open the Android emulator.
1.  To open the app on your device:
    1.  For Android, scan the QR code.
    1.  For iPhone, press `s` to email/text the app URL to your phone.

### App data removal

App data is stored using the AsyncStorage API on the device. You can clear the
app's data by uncommenting the lines 10, 11 and 12 in App.js at the root of the
app folder.

## If you need more more help...

The world is not perfect. If you need more help, or have trouble loading the app
 the following may help:

* [npm start](#npm-start)
* [npm run ios](#npm-run-ios)
* [npm run android](#npm-run-android)
* [Environment Variables](#environment-variables)
  * [Configuring Packager IP Address](#configuring-packager-ip-address)
* [Troubleshooting](#troubleshooting)
  * [Networking](#networking)
  * [iOS Simulator won't open](#ios-simulator-wont-open)
  * [QR Code does not scan](#qr-code-does-not-scan)

### `npm start`

Runs the app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
npm start --reset-cache
# or
yarn start --reset-cache
```

#### `npm run ios`

Like `npm start`, but also attempts to open the app in the iOS Simulator if you're on a Mac and have it installed.

#### `npm run android`

Like `npm start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

### Configuring Packager IP Address

When starting the project, you'll see something like this for the project URL:

```
exp://192.168.0.2:19000
```

The "manifest" at that URL tells the Expo app how to retrieve and load the app's JavaScript bundle, so even if you load it in the app via a URL like `exp://localhost:19000`, the Expo client app will still try to retrieve the app at the IP address that the start script provides.

In some cases, this is less than ideal. This might be the case if you need to run the project inside of a virtual machine and you have to access the packager via a different IP address than the one which prints by default. In order to override the IP address or hostname that is detected by Create React Native App, you can specify your own hostname via the `REACT_NATIVE_PACKAGER_HOSTNAME` environment variable:

Mac and Linux:

```
REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname' npm start
```

Windows:
```
set REACT_NATIVE_PACKAGER_HOSTNAME='my-custom-ip-address-or-hostname'
npm start
```

The above example would cause the development server to listen on `exp://my-custom-ip-address-or-hostname:19000`.

### Troubleshooting

#### Networking

If you're unable to load the app on your phone due to a network timeout or a refused connection, a good first step is to verify that your phone and computer are on the same network and that they can reach each other. Create React Native App needs access to ports 19000 and 19001 so ensure that your network and firewall settings allow access from your device to your computer on both of these ports.

Try opening a web browser on your phone and opening the URL that the packager script prints, replacing `exp://` with `http://`. So, for example, if underneath the QR code in your terminal you see:

```
exp://192.168.0.1:19000
```

Try opening Safari or Chrome on your phone and loading

```
http://192.168.0.1:19000
```

and

```
http://192.168.0.1:19001
```

If this works, but you're still unable to load your app by scanning the QR code, please open an issue on the [Create React Native App repository](https://github.com/react-community/create-react-native-app) with details about these steps and any other error messages you may have received.

If you're not able to load the `http` URL in your phone's web browser, try using the tethering/mobile hotspot feature on your phone (beware of data usage, though), connecting your computer to that WiFi network, and restarting the packager. If you are using a VPN you may need to disable it.

#### iOS Simulator won't open

If you're on a Mac, there are a few errors that users sometimes see when attempting to `npm run ios`:

* "non-zero exit code: 107"
* "You may need to install Xcode" but it is already installed
* and others

There are a few steps you may want to take to troubleshoot these kinds of errors:

1. Make sure Xcode is installed and open it to accept the license agreement if it prompts you. You can install it from the Mac App Store.
2. Open Xcode's Preferences, the Locations tab, and make sure that the `Command Line Tools` menu option is set to something. Sometimes when the CLI tools are first installed by Homebrew this option is left blank, which can prevent Apple utilities from finding the simulator. Make sure to re-run `npm/yarn run ios` after doing so.
3. If that doesn't work, open the Simulator, and under the app menu select `Reset Contents and Settings...`. After that has finished, quit the Simulator, and re-run `npm/yarn run ios`.

#### QR Code does not scan

If you're not able to scan the QR code, make sure your phone's camera is focusing correctly, and also make sure that the contrast on the two colors in your terminal is high enough. For example, WebStorm's default themes may [not have enough contrast](https://github.com/react-community/create-react-native-app/issues/49) for terminal QR codes to be scannable with the system barcode scanners that the Expo app uses.

If this causes problems for you, you may want to try changing your terminal's color theme to have more contrast, or running Create React Native App from a different terminal. You can also manually enter the URL printed by the packager script in the Expo app's search bar to load it manually.
