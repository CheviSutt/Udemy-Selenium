let request = require('sync-request');

browser.addCommand("submitDataViaContactUsForm", function (firstName, lastName, emailAddress, comments) {


    // ? Josh example
    // setValueIfNotNull(firstName, '[Nmae=asdf');
    //
    //
    // firstName ? browser.setValue('asdf', firstName) : null;
    // lastName ? browser.setValue('asdf', firstName) : null;
    // firstName ? browser.setValue('asdf', firstName) : null;
    // firstName ? browser.setValue('asdf', firstName) : null;

    // ? As written incourse
    // if (firstName) {
    // browser.setValue("[name='first_name']", firstName);
    // }


    // Could stop after one false value: undefined
    if (firstName || lastName || emailAddress || comments) {
        browser.setValue("[name='first_name']", firstName);
        browser.setValue("[name='last_name']", lastName);
        browser.setValue("[name='email']", emailAddress);
        browser.setValue("[name='message']", comments);
        browser.click("[type='submit']");
    }
})

function setValueIfNotnull(value, selector) {
    if (!value) return;

    browser.setValue(selector, value);
}

beforeEach(function () {
    browser.url('/Contact-Us/contactus.html');
})

describe('Test Contact Us form WebdriverUni', function () {

    let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');

    let contactUsDetails = JSON.parse(res.getBody().toString('utf8'));

    beforeEach(function () {
        console.log('Inside the describe block!');
    })


    contactUsDetails.forEach(function (contactDetail) {

        it('Should be able to submit a successful submission via contact us form', function (done) {
            browser.submitDataViaContactUsForm('Joe', 'Blogs', contactDetail.email, contactDetail.body);

            // use < null > to skip a input field see below, same as above but implementing null.
            // browser.submitDataViaContactUsForm(null, 'Blogs', contactDetail.email, contactDetail.body);

            // Code below before reformatting
            // browser.setValue("[name='first_name']", 'Joe');
            // browser.setValue("[name='last_name']", 'Blogs');
            // browser.setValue("[name='email']", contactDetail.email);
            // browser.setValue("[name='message']", contactDetail.body);
            // browser.click("[type='submit']");

            var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
            expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.true;

            var successfulSubmission = browser.getText('#contact_reply h1');
            expect(successfulSubmission).to.equal('Thank You for your Message!');
        })
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'Mike');
        browser.setValue("[name='last_name']", 'Woods');
        browser.setValue("[name='email']", 'mike_woods@mail.com');
        browser.click("[type='submit']");

        var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });


    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'Sarah');
        browser.setValue("[name='email']", 'sarah_woods@mail.com');
        browser.click("[type='submit']");

        var successfulContactConfirmation = browser.isExisting('#contact_reply h1');
        expect(successfulContactConfirmation, 'Successful submission Message does not exist').to.be.false;
    });

    it('Should not be able to submit a successful submission via contact us form as all fields are required', function (done) {
        browser.setValue("[name='first_name']", 'Jim');
        browser.setValue("[name='last_name']", 'Jomes');
        browser.click("[type='submit']");

        var errorText = browser.getText('body');
        expect(errorText).to.include('Error: all fields are required');

        var errorText = browser.isVisible('body');
        expect(errorText, 'Error message is not visible').to.be.true;
    });
});