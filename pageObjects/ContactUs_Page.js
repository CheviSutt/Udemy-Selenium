class ContactUs_Page {

    get firstName() {
        return $("[name='first_name']")
    }

    get lastName() {
        return $("[name='last_name']")
    }

    get comments() {
        return $("textarea")
    }

    get emailAddressP_O_M() {
        return $("[name='email']")
    }

    get submitButton() {
        return $("[type='submit']")
    }

    setFirstName(firstName) {
        return this.firstName.setValue(firstName);
    }

    setLastName(lastName) {
        return this.lastName.setValue(lastName);
    }

    setEmailAddress(emailAddress) {
        return this.emailAddressP_O_M.setValue(emailAddress);
    }

    setComments(comment) {
        return this.comments.setValue(comment);
    }

    clickSubmitButton() {
        return this.submitButton.click();
    }


    submitAllInformationViaContactUsForm(firstName, lastName, emailAddress, comments) {
        if (firstName) {
            return this.firstName.setValue(firstName);
        }
        if (lastName) {
            return this.lastName.setValue(lastName);
        }
        if (emailAddress) {
            return this.emailAddressP_O_M.setValue(emailAddress);
        }
        if (comments) {
            return this.comments.setValue(comments);
        }
        this.submitButton.click();
        this.confirmSuccessfulSumission();
    }

    confirmSuccessfulSumission() {
        let successfulSubmissionHeader = "#contact_reply h1";
        let validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(successfulSubmissionHeader) == "Thank You for your Message!"
        }, 3000);
        expect(validateSubmissionHeader, 'Successful submission Message does not exist').to.be.true;
    }

    confirmUnsuccessfulSumission() {
        let unSuccessfulSubmissionHeader = "body";
        let validateSubmissionHeader = browser.waitUntil(function () {
            return browser.getText(unSuccessfulSubmissionHeader) == "Error: all fields are required"
        }, 3000);
        expect(browser.getText(unSuccessfulSubmissionHeader)).to.include("Error: all fields are required");
    }
}

module.exports = new ContactUs_Page();