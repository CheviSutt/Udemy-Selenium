beforeEach(function () {
    browser.url("https://www.w3schools.com/html/html5_video.asp");
})

//Injects a snippet of JavaScript into the page for execution in the context of the currently selected frame.
browser.addCommand('isVideoPaused', function () {
    let isPaused = browser.execute(function () {
        console.log();
        let video = document.querySelector('#video1');
        return video.paused;
    })
    return isPaused.value;
});

describe('Video test', function () {
    it('Validate that the video is paused when accessing the page', function (done) {
        this.timeout(20000);
		// browser.pause(6000); // uncomment to inspect the webdriver browser console for console log('Outputted inside the console').
        let isPaused = browser.isVideoPaused();
        expect(isPaused).to.be.true;
        browser.pause(3000);
    });

    it('Alter the width of the video', function (done) {
        let videoWidth = browser.execute(function () {
            let video = document.querySelector('#video1');
            return video.style.width = "300px"
        })
        browser.pause(3000);
    });
});
