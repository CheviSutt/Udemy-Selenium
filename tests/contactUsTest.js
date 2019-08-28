beforeEach(function() {
	browser.url('/Contact-Us/contactus.html');
});

describe('Test Contact Us form WebdriverUni', function() {
  beforeEach(function() {
    console.log('We are inside the describe block!');
  });

  it('Should be able to submit a successful submission via contact us form', function(done) {
    browser.setValue(`[name='first_name']`, 'Sam');
    browser.setValue(`[name='last_name']`, 'Selenium');
    browser.setValue(`[name='email']`, 'sam@selenium.com');
    browser.setValue(`[name='message']`, 'I will learn selenium!');
    browser.click(`[type='submit']`);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue(`[name='first_name']`, 'Mike');
    browser.setValue(`[name='last_name']`, 'Woods');
    browser.setValue(`[name='email']`, 'mike_woods@selenium.com');
    browser.setValue(`[name='message']`, 'I will learn selenium!');
    browser.click(`[type='submit']`);
    });

  
  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue(`[name='first_name']`, 'Sarah');
    browser.setValue(`[name='email']`, 'sarah_woods@selenium.com');
    browser.click(`[type='submit']`);
    });

  it('Should not be able to submit a successful submission via contact us form as all fields are required', function(done) {
    browser.setValue(`[name='first_name']`, 'Jim');
    browser.setValue(`[name='last_name']`, 'Jones');
    browser.click(`[type='submit']`);
    });
});

