var btn = document.querySelector('button');
btn.addEventListener('click',trocaCor);// agora é usando o "addEventListener"

function random(number){
    return Math.floor(Math.random() * (number + 1));
}

function trocaCor(){
    var rndCor = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
    document.body.style.backgroundColor = rndCor;
}