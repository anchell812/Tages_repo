const BaseForm = require('../../framework/baseform');
const Button = require('../../framework/elements/button');
const Label = require('../../framework/elements/label');
const Input = require('../../framework/elements/input');
const logger = require('../../logger/logger');


class FeedbackForm extends BaseForm {

    constructor() {
        super(new Label('//div[@id="form"]', 'Feedback Form unique element'), 'Feedback form')
    } 

    get nameInputField() {
        return new Input('//input[@placeholder="Имя*"]', 'Name');
    }

    get phoneInputField() {
        return new Input('//input[@placeholder="Телефон*"]', 'Phone');
    }

    get companyInputField() {
        return new Input('//input[@placeholder="Компания"]', 'Company');
    }

    get emailInputField() {
        return new Input('//input[@placeholder="Почта*"]', 'Email');
    }

    get commentInputField() {
        return new Input('//textarea[@placeholder="Комментарий"]', 'Name');
    }

    get sendFormButton() {
        return new Button('//button[contains(@class,"form__send")]', 'Send form button');
    }

    get successSendRequest() {
        return new Label('//div[@class="form__success-badge"]', 'Request successfully sent')
    }

    async fillinForm(name, phone, company, email, comment) {
        await this.nameInputField.sendData(name);
        await this.phoneInputField.sendData(phone);
        await this.companyInputField.sendData(company);
        await this.emailInputField.sendData(email);
        await this.commentInputField.sendData(comment)
    }

    async testRequest(name, phone, company, email, comment) {
        await this.fillinForm(name, phone, company, email, comment);
        await this.sendFormButton.click();
    }

    async checkOfSendingRequest() {
        return this.successSendRequest.isElementPresent();
    }



}

module.exports = new FeedbackForm();