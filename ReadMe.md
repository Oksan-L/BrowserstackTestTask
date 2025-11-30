# Repo with test task for browserstack

## Task
1.  Clone repo and install all dependencies.
2.  Upload app Android-NativeDemoApp to browserstack using API ([Link](https://www.browserstack.com/docs/app-automate/api-reference/appium/apps#upload-an-app)) and add unique ID to the ```wdio.conf.js```.
3.  Create test 5 test cases (locators can be found using [Appium Inspector](https://github.com/appium/appium-inspector/releases) that conected to the Browserstack account).
4.  Create workflow with using secrets (for user and key in capabilities)([description of secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)).
5.  Create 2 config files (with different devices)

## Tips
1.  You can create multiple accounts in browserstack (demo trial - 100 minutes).
2.  First of all find all necessary locators.
3.  In the Appium Inspector at the header choose ```Select Cloud Providers -> Browserstack``` and into ```JSON Representation``` insert the next:
```
{
  "appium:protocol": "https",
  "appium:hostname": "hub.browserstack.com",
  "appium:path": "/wd/hub",
  "appium:maxInstances": 1,
  "appium:app": "Your App ID is here",
  "appium:os_version": "9.0",
  "appium:deviceName": "Google Pixel 3",
  "platformName": "Android",
  "appium:autoAcceptAlerts": "true",
  "appium:browserstack.appium_version": "1.22.0"
}
```
