const BaseElement = require('./baseElement');
const logger = require("../../logger/logger");

class Section extends BaseElement {

    constructor(locator, name) {
        super(locator, name)
    }

    async getElementsHref() {
        logger.info(`Getting href from multiple elements ${this.elName}`);
        const elements = await $$(this.locator);
        const element = await $(this.locator);
        await element.scrollIntoView();
        const hrefarray = [];
        for await (let element of elements) {
            hrefarray.push(await element.getAttribute('href'));
        }
        return hrefarray;
    }
}

module.exports = Section;