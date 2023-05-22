const logger = require("../../logger/logger");
const waits = require('../../framework/configData/timeouts.json')

class BaseElement {

    constructor(locator, elName) {
        this.locator = locator;
        this.elName = elName;
    }

    async isElementPresent() {
        logger.info(`Checking presence of ${this.elName}`);
        const element = await $$(this.locator);
        return element.length > 0;
    }

    async getAttribute(name) {
        logger.info(`Getting attribute of ${this.elName}`);
        const element = await $(this.locator);
        return element.getAttribute(name);
    }

    async click() {
        logger.info(`Click on ${this.elName}`);
        const element = await $(this.locator);
        return element.click();
    }

    async waitAndClick() {
        logger.info(`Click on ${this.elName} after ${waits.timeoutBeforeClick}`);
        const element = await $(this.locator);
        await element.waitForClickable(`${{timeout: waits.timeoutBeforeClick}}`);
        return element.click();
    }

    async scrollAndClick() {
        logger.info(`Click on ${this.elName}`);
        const element = await $(this.locator);
        await element.scrollIntoView();
        return element.click();
    }

    async getElementText() {
        logger.info(`Getting text from ${this.elName}`);
        const element = await $(this.locator);
        return element.getText();
    }

    async waitForPresent() {
        logger.info('Waiting for element present');
        const element = await $(this.locator);
        await element.waitForExist({timeout:waits.timeoutGeneral, interval:waits.timeoutGeneral});
    }
    
    async getElementsText() {
        logger.info(`Getting text from multiple elements ${this.elName}`);
        const elements = await $$(this.locator);
        const textarray = [];
        for await (let element of elements) {
            textarray.push(await element.getText());
        }
        return textarray;
    }



}

module.exports = BaseElement;