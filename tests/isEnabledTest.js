beforeEach(function() {
  browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
  browser.setViewportSize({
		width: 1200,
		height: 800
	})
	browser.pause(2000);
})

describe('Test Enabled Dropdown Menus, Checkboxes & Radio Buttons', function() {
  it('Dropdown item orange is disabled therefore should return false', function(done) {
      option[value='orange']
  });
  
  it('Dropdown item grape is enabled therefore should return true', function(done) {
    option[value='grape']
  });
  
  it('Option2 is enabled therefore should return true', function(done) {
    input[value='option-2']
  });
  
  it('Radio button pumpkin is enabled therefore should be true', function(done) {
    input[value='pumpkin']
  });
  
  it('Radio button cabbage is disabled therefore should be false', function(done) {
    input[value='cabbage']
  });
});