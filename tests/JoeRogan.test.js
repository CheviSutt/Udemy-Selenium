// var webdriver = require('selenium-webdriver');
// var chromedriver = require('chromedriver');
// var chrome = require('selenium-webdriver/chrome');
// var chromeCapabilities = webdriver.Capabilities.chrome();
// chromeCapabilities.set('chromeOptions', {args: ['--headless', '--window-size=1920, 1080', '--disable-gpu', '--disable-extension', '--start-maximized']});
//
// var chai = require('chai');
// var expect = chai.expect;
// var assert = chai.assert;
//
//
// describe('This is my testing suite', function(){
//     this.timeout(50000);
//
//     beforeEach(async function(){
//         let driver = new webdriver.Builder().forBrowser('chrome').build();
//         await driver.get('https://www.youtube.com');
//         await driver.sleep(1000);
//     });
//
//     afterEach(async function(){
//         await driver.quit();
//     });
//
//     it('should open youtube and be pretty chill', async function(){
//         await driver.sleep(5000);
//
//         let youTubeTitle;
//
//         await driver.getTitle().then(function(title){
//             console.log(title);
//             youTubeTitle = title;
//         });
//
//         await driver.sleep(1000);
//
//         assert.equal(youTubeTitle, 'YouTube');
//     });
//
//     it('should click search for Joe Rogan', async function() {
//         await driver.sleep(5000);
//
//         await driver.wait(webdriver.until.elementIsVisible(await driver.findElement(webdriver.By.xpath('//*[@id="search"]'))));
//         await driver.sleep(1000);
//         await driver.findElement(webdriver.By.xpath('//*[@id="search"]')).sendKeys('Joe Rogan');
//         await driver.findElement(webdriver.By.xpath('//*[@id="search"]')).sendKeys(webdriver.Key.ENTER);
//
//         await driver.sleep(5000);
//
//     });
//
// });
//
//
