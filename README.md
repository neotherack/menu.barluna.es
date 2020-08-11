<<<<<<< HEAD
# Menú Bar Luna - Sahagún (menu.barluna.es)

This is the menu web app for Bar Luna, Sahagún (León - Spain)

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
Web mode:
```bash
quasar dev
```
Android app mode:
```bash
quasar dev -m capacitor -T android
```

### Build the app for production
Web mode:
```bash
quasar build
```
Android app mode:
```bash
quasar build -m capacitor -T android
```

### Workaround gradle issues
Go for: src-capacitor\android\build.gradle
Add compile options
```
compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
```
Go for: src-capacitor\android\gradle.properties
```
org.gradle.java.home=C:\\Program Files\\Java\\jdk1.8.0_221
android.enableJetifier=true
android.useAndroidX=true
```
### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
=======
# menu.barluna.es
>>>>>>> a0b4145dc81174b957e2d0b01a322541ed737dcb
