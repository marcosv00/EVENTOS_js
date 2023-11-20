// cada evento dispónível possui um manipulador de eventos, que é um bloco de código(geralmente uma função JavaScript definida pelo usuário) que será executado quando o evento for disparado
// você pode declarar um evento através de: Manipuladores de eventos in-line, Propriedades do manipulador de eventos e por "addEventListener()"


//Manipulador de evento por função criada
var b2 = document.getElementById("btn2");
b2.onclick = function() { alert('Propriedades do manipulador de eventos');};


//Manipulador de evento por "addEventListener()"
var b3 = document.getElementById("btn3");
b3.addEventListener("click",function(){alert("addEventListener");},false);

//OBS: você deve evitar o uso inline pois não é uma boa prática de programação, enquanto os outros dois você pode usar e o melhor para usar é o terceiro.

