const { join } = require('path')

exports.config = {
    port: 4723,
    specs: [
        './test/specs/**/*.js'
    ],
    framework: 'mocha',
    capabilities: [{
        "hostname": '127.0.0.1',
        "path": "/",
        "appium:platformName": "Android",
        "appium:platformVersion": "14.0",
        "appium:deviceName": "Pixel_Teste",
        "appium:automationName": "UiAutomator2",
        "appium:app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appium:appWaitActivity": 'com.wdiodemoapp.MainActivity',
        "appium:fullReset": true
    }]
}