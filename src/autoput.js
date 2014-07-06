var Autoput = (function() {
  'use strict';

  function merge(obj1, obj2) {
    var obj3 = {};
    for (var x in obj1) {
      obj3[x] = obj1[x];
    }
    for (var y in obj2) {
      obj3[y] = obj2[y];
    }

    return obj3;
  }

  function buttonCreate() {
    var button = document.createElement('button');
    button.style.position = 'absolute';
    button.style.top = 0;
    button.style.left = 0;
    button.id = 'autoput-button';
    button.textContent = 'Click to Autoput';
    document.body.appendChild(button);

    return button;
  }

  function originalOptions() {
    var properts = {
      text: 'Lorem ipsun dolor',
      email: 'example@example.com',
      date: '2045-12-07',
      datetime: '2045-07-12T00:55',
      week: '2045-W02',
      month: '2045-12',
      tel: '(555) 555-5555',
      baseNumber: 10,
      url: 'http://www.example.com',
      search: 'Searching for Unicorns',
      radio: true,
      checkbox: true,
      range: 100
    };

    return properts;
  }

  var custom;

  function customOptions(values) {
    custom = values;

    /* test-code */
    window.api_test = values;
    /* end-test-code */
  }


  function whenClicked() {
    var original = originalOptions(),
      options = merge(original, custom),
      inputs = document.querySelectorAll('input'),
      area = document.querySelectorAll('textarea'),
      opt = document.querySelectorAll('option');

    //# Fill inputs from all type
    var i = 0;
    for (i; i < inputs.length; i++) {

      switch (inputs[i].type) {
        case 'text':
          inputs[i].value = options.text;
          break;
        case 'email':
          inputs[i].value = options.email;
          break;
        case 'date':
          inputs[i].value = options.date;
          break;
        case 'datetime-local':
          inputs[i].value = options.datetime;
          break;
        case 'week':
          inputs[i].value = options.week;
          break;
        case 'month':
          inputs[i].value = options.month;
          break;
        case 'tel':
          inputs[i].value = options.tel;
          break;
        case 'number':
          inputs[i].value = Math.floor(Math.random() * options.baseNumber + 1);
          break;
        case 'url':
          inputs[i].value = options.url;
          break;
        case 'search':
          inputs[i].value = options.search;
          break;
        case 'radio':
          inputs[i].setAttribute('checked', options.radio);
          break;
        case 'checkbox':
          inputs[i].setAttribute('checked', options.checkbox);
          break;
        case 'range':
          inputs[i].value = Math.floor(Math.random() * options.range + 1);
          break;
      }
    }

    //# Fill textarea
    var x = 0;
    for (x; x < area.length; x++) {
      area[x].value = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.';
    }

    //# Fill select box
    var y = 0;
    for (y; y < opt.length; y++) {
      opt[y].parentNode.value = opt[y].value;
    }

    //# Remove the button
    document.body.removeChild(this);
  }

  function on() {
    var button = buttonCreate();
    button.addEventListener('click', whenClicked, false);
  }

  return {
    customOptions: customOptions,
    on: on
  };

}());
