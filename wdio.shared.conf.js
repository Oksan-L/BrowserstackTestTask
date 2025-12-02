exports.config = {
    services: ['appium'],

    hostname: 'localhost',
    port: 4723,
    path: '/wd/hub',

    updateJob: false,
    specs: [
        './e2e/specs/**.test.js'
    ],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    
    logLevel: 'info',
    screenshotPath: './errorShots/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
};
