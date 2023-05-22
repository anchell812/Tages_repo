const BaseForm = require('../../framework/baseform');
const Link = require('../../framework/elements/link');
const Button = require('../../framework/elements/button');
const Label = require('../../framework/elements/label');
const Section = require('../../framework/elements/section');
const logger = require('../../logger/logger');


class MainPage extends BaseForm {
  
    constructor() {
        super(new Label('//section[contains(@class,"section-what-we-do")]', 'Main Page unique element'), 'Main Page')
    } 

    get aboutLink() {
        return new Link('//a[contains(@href,"about")]', 'About company link');
    }

    get academyLink() {
        return new Link('//a[contains(@href,"academy")]', 'Academy link');
    }

    get eventsLink() {
        return new Link('//a[contains(@href,"events")]', 'Events link');
    }

    get blogLink() {
        return new Link('//a[contains(@href,"blog")]', 'Blog link');
    }

    get vacanciesLink() {
        return new Link('//a[contains(@href,"vacancies")]', 'Vacancies link');
    }

    get contactsLink() {
        return new Link('//a[contains(@href,"contacts")]', 'Contacts link');
    }

    get companyLogo() {
        return new Label('//a[contains(@class,"logo")]', 'Logo label')
    }

    get companyPolicy() {
        return new Link('//div[contains(@class,"footer__item_policy")]', 'Policy link')
    }

    get partnersList() {
        return new Section('//li[contains(@class,"partners__item")]/a', 'Partners list');
    }

    get telegramLink() {
        return new Link('//li[contains(@class,"social")]', 'Telegram link');
    }

    get vkLink() {
        return new Link('//li[contains(@class,"social")][2]', 'VK link');
    }

    get youtubeLink() {
        return new Link('//li[contains(@class,"social")][3]', 'YouTube link')
    }

    get channelName() {
        return new Label('//div[contains(@class,"channel-name")]', 'Channel name');
    }

    async getChannelName() {
        return this.channelName.getElementText();
    }

    async goToTelegram() {
        return this.telegramLink.scrollAndClick();
    }

    async goToVK() {
        return this.vkLink.scrollAndClick();
    }

    async goToYoutube() {
        return this.youtubeLink.scrollAndClick();
    }


    async getListOfPartnersHref() {
        return this.partnersList.getElementsHref();
    }

    async goToAboutPageLink() {
        return this.aboutLink.waitAndClick();
    }

    async goToMainPage() {
        return this.companyLogo.click();
    }

    async goToAcademyPage() {
        return this.academyLink.click();
    }

    async goToEventsPage() {
        return this.eventsLink.click();
    }

    async goToBlogPage() {
        return this.blogLink.click();
    }

    async goToVacanciesPage() {
        return this.vacanciesLink.click();
    }

    async goToContactsPage() {
        return this.contactsLink.click();
    }

    async goToPolicy() {
        return this.companyPolicy.scrollAndClick();
    }



    get addProjectButton() {
        return new Button('//a[@href="addProject"]', 'Add project button'); 
    }

    async getProjectLink(projectName) {
        return new Link(`//a[text()='${projectName}']`, `Link to ${projectName} page`)
    }

    async getProjectId(projectName) {
        logger.info('Getting projectId')
        const linkOfProject = await this.getProjectLink(projectName);
        const href = await linkOfProject.getAttribute('href');
        return stringUtils.getLastStrSymbol(href);
    }

    async clickAddProjectButton() {
        return this.addProjectButton.waitAndClick();
    }

    async goToProjectPage(projectName) {
        await (await this.getProjectLink(projectName)).waitAndClick();
    }

    async getVersionNumber() {
        return this.versionNumber.getElementText();
    }

    async checkNewProjectExists(projectName) {
        const newProject = await this.getProjectLink(projectName);
        return newProject.isElementPresent();
    }
 }

 module.exports = new MainPage();