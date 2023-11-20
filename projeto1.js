// vai gerar um numero aleatorio
function random(number){
     return Math.floor(Math.random() * (number + 1));// 1 ... 255 
}


// quando você clicar no botao vai gerar um numeros aleatorios entre 1 e 255 e isso gerará uma cor diferente
function trocaCor(){
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCor;
}


