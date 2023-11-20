const container = document.querySelector('#container');
container.addEventListener('click', trocarCor);

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

function trocarCor(e) {
  var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  e.target.style.backgroundColor = rndCor;// target vai fazer com que você mude a cor no elemento clicado.
}