// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.
//Variables
let amigos = [];

function agregarAmigo() {
    //Capturo el nombre ingresado
    let obtenerNombreAmigo = document.getElementById('amigo').value;
    //Valida que se haya ingresado un nombre valido
    if (obtenerNombreAmigo == ''){
        alert('Por favor, inserte un nombre.');
    } else {
        //Actualizo el array
        amigos.push(obtenerNombreAmigo);
        console.log(amigos);
        //Limpiar caja
        document.querySelector('#amigo').value = '';
        //Actualizo amigos en la lista
        actualizarAmigos();
    }
    return;
}

function actualizarAmigos() {
    let lista = document.getElementById('listaAmigos'); //Obtengo la lista
    let nuevoLi = document.createElement('li'); //Creo nuevos elementos en la lista
    nuevoLi.innerHTML = ''; //Limpio la lista

    for (let i = 0; i < amigos.length; i++) {
        nuevoLi.innerHTML = amigos[i]; //Agrego los alementos a la lista
        lista.appendChild(nuevoLi); //Agrega los nuevos <li> a <ul>
    }
}

function sortearAmigo() {
    //Genera un número random
    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    console.log(numeroAleatorio);
    //Valida que el array tenga elementos
    if (amigos.length > 0) {
        let lista = document.getElementById('resultado');
        let nuevoLi = document.createElement('li');
        lista.innerHTML = '';
        nuevoLi.innerHTML = amigos[numeroAleatorio];
        lista.appendChild(nuevoLi);
    } else {
        alert('Agrega amigos para poder sortear.');
    }
}