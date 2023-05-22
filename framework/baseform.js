const logger = require('../logger/logger');
const waits = require('./configData/timeouts.json')


class BaseForm {

    constructor(uniqElement, pageName) {
        this.uniqElement = uniqElement;
        this.pageName = pageName;
    }

    async isPageOpened () {
        logger.info(`Check if ${this.pageName} opens`);
        return this.uniqElement.isElementPresent();
    }

    async isPageOpenedafterWait () {
        logger.info(`Check if ${this.pageName} opens after ${waits.timeoutGeneral}`);
        await this.uniqElement.waitForPresent();
        return this.uniqElement.isElementPresent();
    }
}

module.exports = BaseForm;