const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');


class AboutCompanyPage extends BaseForm {
  
    constructor() {
        super(new Label('//main[contains(@class,"main")]//span[@class="accent"]', 'About conpany Page unique element'), 'About company Page')
    } 
}

module.exports = new AboutCompanyPage();