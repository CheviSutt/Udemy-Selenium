beforeEach(function () {
    browser.url("/Ajax-Loader/index.html");
})

describe('Validate whether the click me button is visible', function () {
    it('Validate whether the click me button code is visible within the DOM', function (done) {
        this.timeout(20000);
        var clickMeButton = "//p[text()='CLICK ME!']"; // See #62 selenium course for xpath
        browser.waitForExist(clickMeButton, 8000, false);
    });

    it('Validate whether the click me button appears once the Ajax loader fully loads', function (done) {
        this.timeout(20000);
        var clickMeButton = "//p[text()='CLICK ME!']";
        browser.waitForVisible(clickMeButton, 8000, false);
    });

});