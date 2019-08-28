describe('Test the Webdriver University Home Page', function () {
    it('Should return the height of the Home Page Carousel', function () {
        browser.url('/');
        browser.pause(2000);
        let divCarousel = browser.getCssProperty('#udemy-promo-thumbnail', 'height');
        console.log(divCarousel);
    })

})