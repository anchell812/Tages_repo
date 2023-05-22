const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');
const logger = require('../../logger/logger');


class PolicyPage extends BaseForm {
  
    constructor() {
        super(new Label('//div[contains(@class,"page_policy")]', 'Policy Page unique element'), 'Policy Page')
    } 

}

module.exports = new PolicyPage();