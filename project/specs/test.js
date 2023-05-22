const { assert } = require('chai');
const testdata = require('../../framework/testData/testdata.json');
const configData = require('../../framework/configData/configdata.json');
const mainpage = require('../pagesAndForms/mainpage');
const aboutCompanyPage = require('../pagesAndForms/aboutcompanypage');
const academyPage = require('../pagesAndForms/academypage');
const eventsPage = require('../pagesAndForms/eventspage');
const blogPage = require('../pagesAndForms/blogpage');
const vacanciespage = require('../pagesAndForms/vacanciespage');
const contactsPage = require('../pagesAndForms/contactspage');
const policyPage = require('../pagesAndForms/policypage');
const feedbackForm = require('../pagesAndForms/feedbackform');



describe('Tages page testing', () => {
    it('Checking header`s links', async () => {

        await browser.open(configData.url);
        assert.isTrue(await mainpage.isPageOpened(), 'Main page should be opened');
        await mainpage.goToAboutPageLink();
        assert.isTrue(await aboutCompanyPage.isPageOpenedafterWait(), 'About Company page should be opened');
        await mainpage.goToAcademyPage();
        assert.isTrue(await academyPage.isPageOpenedafterWait(), 'Academy page should be opened');
        await mainpage.goToEventsPage();
        assert.isTrue(await eventsPage.isPageOpenedafterWait(), 'Events page should be opened');
        await mainpage.goToBlogPage();
        assert.isTrue(await blogPage.isPageOpenedafterWait(), 'Blog page should be opened');
        await mainpage.goToVacanciesPage();
        assert.isTrue(await vacanciespage.isPageOpenedafterWait(), 'Vacancies page should be opened');
        await mainpage.goToContactsPage();
        assert.isTrue(await contactsPage.isPageOpenedafterWait(), 'Contacts page should be opened');
        await mainpage.goToMainPage();
        assert.isTrue(await mainpage.isPageOpenedafterWait(), 'Main page should be opened');
    }),

    it('Checking footer`s and partners` links', async () => {

        await browser.open(configData.url);
        assert.isTrue(await mainpage.isPageOpened(), 'Main page should be opened');
        await mainpage.goToPolicy();
        assert.isTrue(await policyPage.isPageOpenedafterWait(), 'Policy page should be opened');
        await mainpage.goToMainPage();
        const listOfPartnersLinks = await mainpage.getListOfPartnersHref();
        assert.equal(listOfPartnersLinks, testdata.listOfPartners);
        await mainpage.goToTelegram();
        await browser.switchWindow(testdata.titleOfTelegramPage); 
        assert.equal(await browser.getUrl(), testdata.tagesTelegram, 'Telegram window should be opened');
        await browser.switchWindow(configData.url);
        await mainpage.goToVK();
        await browser.switchWindow(testdata.titleOfVK);
        assert.equal(await browser.getUrl(), testdata.tagesVK, 'VK window should be opened');
        await browser.switchWindow(configData.url);
        await mainpage.goToYoutube();
        await browser.switchWindow(testdata.urlOfYoutube);
        assert.equal(await mainpage.getChannelName(), testdata.youtubeChannelName, 'YouTube window should be opened')
    }),

    it('Validation of emails and calls', async () => {

        await browser.open(configData.url);
        assert.isTrue(await mainpage.isPageOpened(), 'Main page should be opened');
        await mainpage.goToContactsPage();
        await contactsPage.phoneCall();
        await contactsPage.sendEmail(testdata.toSecretary);
        await browser.pause(5000);
    }),


    it('Send a valid request by feedback form', async () => {

        await browser.open(configData.url);
        assert.isTrue(await mainpage.isPageOpened(), 'Main page should be opened');
        await feedbackForm.testRequest(testdata.feedbackFormData);
        assert.isTrue(await feedbackform.checkOfSendingRequest(), 'Information message should exist');
    })

})