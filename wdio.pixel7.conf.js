const { config } = require('./wdio.shared.conf');

config.capabilities = [{
    platformName: "Android",
    "appium:platformVersion": "13",
    "appium:deviceName": "Pixel 7 Pro",
    "appium:automationName": "UiAutomator2",
    "appium:app": "./Android-NativeDemoApp-0.4.0.apk",

    "appium:noReset": false,
    "appium:fullReset": true,

    "appium:appWaitPackage": "com.wdiodemoapp",
    "appium:appWaitActivity": "com.wdiodemoapp.SplashActivity,com.wdiodemoapp.MainActivity",

    maxInstances: 1
}];

exports.config = config;
