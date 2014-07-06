module.exports = {
  'Fill input with the custom value': function (test) {
    test
      .open('http://localhost:8081/test/test-custom.html')
      .click('#autoput-button')
      .assert.val('.text', 'Other text', 'Input text right')
      .assert.val('.email', 'other@email.com', 'Input email right')
      .assert.val('.date', '2000-04-04', 'Input date right')
      .assert.val('.datetime', '2000-10-16T12:12', 'Input date right')
      .assert.val('.week', '2000-W12', 'Input week right')
      .assert.val('.month', '2000-11', 'Input month right')
      .assert.val('.tel', '(1) 555-111-333', 'Input tel right')
      .assert.val('.url', 'http://www.webplatform.org', 'Input tel right')
      .assert.val('.search', 'Found Unicorns OMG!', 'Input search right')
      .assert.attr('.radio', 'checked',false , 'Radio boxes not checked')
      .assert.attr('.radio-check', 'checked',false , 'Radio box checked')
      .assert.attr('.checkbox', 'checked',false , 'Checkboxes are checked')
      .assert.attr('.checkbox', 'checked',false , 'Checkboxes are checked')
      .assert.doesntExist('#autoput-button', 'The button element has not been seen')
      .done();
  }
};
