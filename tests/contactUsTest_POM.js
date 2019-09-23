// let request = require('sync-request');
let ContactUs_Page = require("../pageObjects/ContactUs_Page.js");


beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {

    // let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    // let contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    // let firstNameInputSelector = "[name='first_name']";
    // let lastNameInputSelector = "[name='last_name']";
    // let emailInputSelector = "[name='email']";
    // let commentInputSelector = "textarea";
    // let successfulSubmissonSelector = "#contact_reply h1";
    // let unSuccessfulSubmissonSelector = "body";
    // let submitButtonSelector = "[type='submit']";

    function setFirstName(firstName) {
        return ContactUs_Page.firstName.setValue(firstName);
    }

    function setLastName(lastName) {
        return ContactUs_Page.lastName.setValue(lastName);
    }

    function setEmailAddress(emailAddress) {
        return ContactUs_Page.emailAddressP_O_M.setValue(emailAddress);
    }

    function setComments(comment) {
        return ContactUs_Page.comments.setValue(comment);
    }

    function clickSubmitButton() {
        return ContactUs_Page.submitButton.click();
    }

    function confirmSuccessfulSumission() {
        let validateSubmissionHeader = browser.waitUntil(function () {
            return ContactUs_Page.successfulSubmissionHeader.getText() == "Thank You for your Message!"
        }, 3000);
        expect(validateSubmissionHeader, 'Successful submission Message does not exist').to.be.true;
    }

    function confirmUnsuccessfulSumission() {
        let validateSubmissionHeader = browser.waitUntil(function () {
            return ContactUs_Page.unSuccessfulSubmissionHeader.getText() == "Error: all fields are required"
        }, 3000);
        expect(ContactUs_Page.unSuccessfulSubmissionHeader.getText()).to.include("Error: all fields are required");
    }

    it('Should be able to submit a successful submission via contact us form', function (done) {
        setFirstName('Joe');
        setLastName('Blogs');
        setEmailAddress('joe_blogs123@outlook.com');
        setComments('How are you?');
        clickSubmitButton();
        confirmSuccessfulSumission();
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setFirstName('Mike');
        setLastName('Woods');
        setEmailAddress('mike_woods@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSumission();
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setFirstName('Sarah');
        setEmailAddress('sarah_woods@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSumission();
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        setLastName('Jones');
        setEmailAddress('jim_jones@mail.com');
        clickSubmitButton();
        confirmUnsuccessfulSumission();
    });
});