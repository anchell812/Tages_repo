const BaseForm = require('../../framework/baseform');
const Label = require('../../framework/elements/label');
const logger = require('../../logger/logger');


class BlogPage extends BaseForm {
  
    constructor() {
        super(new Label('//ul[contains(@class,"posts-tags")]', 'Academy Page unique element'), 'Academy Page')
    } 

}

module.exports = new BlogPage();