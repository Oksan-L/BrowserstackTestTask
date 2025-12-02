const { config } = require('./wdio.shared.conf');

config.capabilities = [{
    platformName: "Android",
    // "appium:platformVersion": "16", // for local testing
    "appium:platformVersion": "16.0",
    // "appium:deviceName": "Pixel 9", // for local testing
    "appium:deviceName": "Pixel 9",
    "appium:automationName": "UiAutomator2",
    // "appium:app": "./Android-NativeDemoApp-0.4.0.apk", // for local testing
    "appium:app": process.env.BROWSERSTACK_APP_ID,

    "appium:noReset": false,
    "appium:fullReset": true,

    "appium:appWaitPackage": "com.wdiodemoapp",
    "appium:appWaitActivity": "com.wdiodemoapp.SplashActivity,com.wdiodemoapp.MainActivity",

    // maxInstances: 1
}];

exports.config = config;
