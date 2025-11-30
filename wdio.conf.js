require('dotenv').config();

exports.config = {
    // services: ['browserstack'],
    // user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
    // key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

    services: ['appium'],

    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    updateJob: false,
    specs: [
      './e2e/specs/**.test.js'
    ],
    exclude: [],
  
    // capabilities: [{
    //   platformName: 'Android',
    //   project: "First Webdriverio Android Project",
    //   build: 'Webdriverio Android',
    //   name: 'first_test',
    //   // device: 'Pixel 3',
    //   'appium:deviceName': 'emulator-5554',
    //   'appium:platformVersion': '9.0',
    //   //'appium:app': process.env.BROWSERSTACK_APP_ID,
    //   'appium:app': join(process.cwd(), 'Android-NativeDemoApp-0.4.0.apk'),
    //   'appium:automationName': 'UiAutomator2',
    //   'browserstack.debug': true,
    //   'appium:fullReset': true,
    //   'appium:noReset': false
    // }],

    capabilities: [{
      platformName: "Android",
      "appium:platformVersion": "16",
      "appium:deviceName": "emulator-5554",
      "appium:automationName": "UiAutomator2",
      "appium:app": "D:\\Oksana\\Work\\0-LuxeQuality\\BrowserstackTestTask\\Android-NativeDemoApp-0.4.0.apk",

      "appium:noReset": false,
      "appium:fullReset": true,

      "appium:appWaitPackage": "com.wdiodemoapp",
      "appium:appWaitActivity": "com.wdiodemoapp.SplashActivity,com.wdiodemoapp.MainActivity",

      "appium:uiautomator2ServerLaunchTimeout": 60000,
      "appium:uiautomator2ServerInstallTimeout": 60000,
      maxInstances: 1
  }],

  reporters: [
    'spec',
    ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]
],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };