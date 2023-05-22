const BaseForm = require('../../framework/baseform');
const Link = require('../../framework/elements/link');
const Button = require('../../framework/elements/button');
const Label = require('../../framework/elements/label');
const logger = require('../../logger/logger');


class ContactsPage extends BaseForm {
  
    constructor() {
        super(new Label('//div[@class="section-contacts__contacts"]', 'Contacts Page unique element'), 'Contacts Page')
    } 

    get phone() {
        return new Link('//a[@aria-label="Телефон компании"]', 'Phone');
    }

    async getMail(department) {

        return new Link(`//a[contains(@href,"mailto:${department}@tages.ru")]`)
    }

    async phoneCall() {
        return this.phone.waitAndClick();
    }

    async sendEmail(toDepartment) {
        return (await this.getMail(toDepartment)).click();
    }

}

module.exports = new ContactsPage();