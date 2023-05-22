const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');
const logger = require('../../logger/logger');


class EventsPage extends BaseForm {
  
    constructor() {
        super(new Label('//main[@class="main"]//h1[contains(@class,"events")]', 'Events Page unique element'), 'Events Page')
    } 

}

module.exports = new EventsPage();