const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');
const logger = require('../../logger/logger');


class VacanciesPage extends BaseForm {
  
    constructor() {
        super(new Label('//div[@class="vacancies__navigation-panel"]', 'Vacancies Page unique element'), 'Vacancies Page')
    } 
}

module.exports = new VacanciesPage();