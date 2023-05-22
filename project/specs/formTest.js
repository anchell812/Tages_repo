const { assert } = require('chai');
const configData = require('../../framework/configData/configdata.json');
const mainpage = require('../pagesAndForms/mainpage');
const feedbackForm = require('../pagesAndForms/feedbackform');
const {loadDataFromFile} = require('../../framework/utils/utils')



describe('Feedback form validation', async function () {

        const feedbackForms = loadDataFromFile("./framework/testData/parametrizedFeedbackForm.json");
        
        feedbackForms.forEach(form => {

        it('Parametrized validation of the feedback form', async function () {
        await browser.open(configData.url);
        assert.isTrue(await mainpage.isPageOpened(), 'Main page should be opened');
        await feedbackForm.testRequest(form.name, form.phone, form.company, form.email, form.comment);
        assert.isFalse(await feedbackForm.checkOfSendingRequest(), 'Information message shouldn`t exist')
    
})  
    })
      })
