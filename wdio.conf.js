const logger = require('../Tages/logger/logger');
const testData = require('./framework/testData/testdata.json');
const configData = require('./framework/configData/configdata.json');

exports.config = {

    
    specs: [
        './project/specs/*.js'
    ],
 
    maxInstances: 10,
   
    capabilities: [{
    
    
        maxInstances: 5,
        
        browserName: 'chrome',
        acceptInsecureCerts: true
    
    }],

    logLevel: 'error',
   
    bail: 0,
 
    baseUrl: 'http://tages.ru/',
   
    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,
 
    services: ['chromedriver'],
    //services: ['chromedriver','geckodriver'],
    
    framework: 'mocha',
    
    reporters: ['spec'],


    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    
    before: async () => {
        browser.addCommand('open', async function (url) {
            logger.info(`Opening ${url}`);
            return this.url(url);
        });

        browser.addCommand('settingCookies', async function (name, value) {
            logger.info('Setting cookies');
            return this.setCookies({
                name: name,
                value: value
            })
        });

        browser.addCommand('pageRefresh', async function () {
            logger.info('Refreshing page');
            await this.refresh();
        });

        browser.addCommand('switchToNewWindow', async function(url) {
            logger.info('Switching to new window');
            await this.switchWindow(url);
        });
        
        browser.addCommand('closeNewWindow', async function(url) {
            logger.info('Closing new window');
            await this.switchWindow(url);
            return this.closeWindow();
        });

        browser.addCommand('makeScreenshot', async function(pathToFile) {
            logger.info('Saving screenshot');
            await this.saveScreenshot(pathToFile);
        })

    },

    
     beforeTest: async function () {
        await browser.maximizeWindow();

     }

}





