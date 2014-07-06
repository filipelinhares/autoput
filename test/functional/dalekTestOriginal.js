module.exports = {
  'Fill input with the original value': function (test) {
    test
      .open('http://localhost:8081/test/test-original.html')
      .click('#autoput-button')
      .assert.val('.text', 'Lorem ipsun dolor', 'Input text right')
      .assert.val('.email', 'example@example.com', 'Input email right')
      .assert.val('.date', '2045-12-07', 'Input date right')
      .assert.val('.datetime', '2045-07-12T00:55', 'Input date right')
      .assert.val('.week', '2045-W02', 'Input week right')
      .assert.val('.month', '2045-12', 'Input month right')
      .assert.val('.tel', '(555) 555-5555', 'Input tel right')
      .assert.val('.url', 'http://www.example.com', 'Input tel right')
      .assert.val('.search', 'Searching for Unicorns', 'Input search right')
      .assert.attr('.radio', 'checked',false , 'Radio boxes not checked')
      .assert.attr('.radio-check', 'checked','true' , 'Radio box checked')
      .assert.attr('.checkbox', 'checked','true' , 'Checkboxes are checked')
      .assert.attr('.checkbox', 'checked','true' , 'Checkboxes are checked')
      .assert.val('.select', 'Value option5', 'Select value right')
      .assert.val('.textarea', 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.', 'Textarea value right')
      .assert.doesntExist('#autoput-button', 'The button element has not been seen')
      .done();
  }
};
