

let request = require('sync-request');

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {

    let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
    let contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    let firstNameInputSelector = "[name='first_name']";
    let lastNameInputSelector = "[name='last_name']";
    let emailInputSelector = "[name='email']";
    let commentInputSelector = "textarea";
    let successfulSubmissonSelector = "#contact_reply h1";
    let unSuccessfulSubmissonSelector = "body";
    let submitButtonSelector = "[type='submit']";

    function setFirstName(firstName) {
        return browser.setValue(firstNameInputSelector, firstName);
    }

    function setLastName(lastName) {
        return browser.setValue(lastNameInputSelector, lastName);
    }

    function setEmailAddress(emailAddress) {
        return browser.setValue(emailInputSelector, emailAddress);
    }

    function setComments(comment) {
        return browser.setValue(commentInputSelector, comment);
    }

    function clickSubmitButton() {
        return browser.click(submitButtonSelector);
    }

    function confirmSuccessfulSumission() {
        let validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissonSelector) == "Thank You for your Message!"
        }, 3000);
        expect(validateSubmissionHeader, 'Successful submission Message does not exist').to.be.true;
    }

    function confirmUnsuccessfulSumission() {
        let validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(unSuccessfulSubmissonSelector) == "Error: all fields are required"
        }, 3000);
        expect(browser.getText(unSuccessfulSubmissonSelector)).to.include("Error: all fields are required");
    }

    contactUsDetails.forEach(function (contactDetail) {
        it('Should be able to submit a successful submission via contact us form', function (done) {
            setFirstName('Joe');
            setLastName('Blogs');
            setEmailAddress(contactDetail.email);
            setComments(contactDetail.body);
            clickSubmitButton();
            confirmSuccessfulSumission();
        });
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