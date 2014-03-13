window.addEventListener('DOMContentLoaded', function(e) {

  //# Create the button element.
  var btn = document.createElement('button');

  //# Put css style to button.
  btn.style.position = "absolute";
  btn.style.top = "0";

  //# Put a value into button.
  btn.appendChild(document.createTextNode('AutoPut'));

  //# Append the button in body.
  document.body.appendChild(btn);

  //# When button is clicked insert 'Test' value.
  btn.addEventListener('click', function(e) {
    var inputs = document.querySelectorAll('input[type="text"]');
    var i = 0;
    for (i; i < inputs.length; i++) {
      inputs[i].value = 'Test';
    }
    document.body.removeChild(btn);
  });
});
