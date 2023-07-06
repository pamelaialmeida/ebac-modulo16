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
        "appium:app": join(process.cwd(), './app/android/wcandroid-13.8.apk'),
        "appium:appWaitActivity": 'com.woocommerce.android.ui.login.LoginActivity',
        "appium:fullReset": true
    }]
}