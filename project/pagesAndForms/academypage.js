const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');



class AcademyPage extends BaseForm {
  
    constructor() {
        super(new Label('//main[@class="main"]//h1[contains(@class,"academy")]', 'Academy Page unique element'), 'Academy Page')
    } 

}

module.exports = new AcademyPage();