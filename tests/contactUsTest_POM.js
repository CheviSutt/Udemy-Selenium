// let request = require('sync-request');
let ContactUs_Page = require("../pageObjects/ContactUs_Page.js");


beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {

    it('Should be able to submit a successful submission via contact us form', function (done) {
        // ContactUs_Page.setFirstName('Joe');
        // ContactUs_Page.setLastName('Blogs');
        // ContactUs_Page.setEmailAddress('joe_blogs123@outlook.com');
        // ContactUs_Page.setComments('How are you?');
        // ContactUs_Page.clickSubmitButton();
        // ContactUs_Page.confirmSuccessfulSumission();

        ContactUs_Page.submitAllInformationViaContactUsForm('Joe', 'Blogs', 'joe_blogs123@outlook.com', 'How are you?');
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        ContactUs_Page.setFirstName('Mike');
        ContactUs_Page.setLastName('Woods');
        ContactUs_Page.setEmailAddress('mike_woods@mail.com');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfulSumission();
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        ContactUs_Page.setFirstName('Sarah');
        ContactUs_Page.setEmailAddress('sarah_woods@mail.com');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfulSumission();
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        ContactUs_Page.setLastName('Jones');
        ContactUs_Page.setEmailAddress('jim_jones@mail.com');
        ContactUs_Page.clickSubmitButton();
        ContactUs_Page.confirmUnsuccessfulSumission();
    });
});