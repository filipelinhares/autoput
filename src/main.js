window.addEventListener('DOMContentLoaded', function(e) {

  //Cria o elemento button
  var btn = document.createElement('button');

  //Coloca position absolute, pra n precisar se preocupar com nada
  btn.style.position = "absolute";
  btn.style.top = "0";

  //Coloca um texto pra conseguirmos achar o botão
  btn.appendChild(document.createTextNode('AutoPut'));

  //Coloca o botão no body para ser usado
  document.body.appendChild(btn);

  //Declara o evento, para que ele seja acionado quando clicar
  btn.addEventListener('click', function(e) {
    var inputs = document.querySelectorAll('input[type="text"]');
    var i = 0;
    for (i; i < inputs.length; i++) {
      inputs[i].value = 'Test';
    }
    document.body.removeChild(btn);
  });
});