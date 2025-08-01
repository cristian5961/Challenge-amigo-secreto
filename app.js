//Variables
let amigos = [];
//Agrega los amigos
function agregarAmigo() {
    //Capturo el nombre ingresado
    let obtenerNombreAmigo = document.getElementById('amigo').value;
    //Valida que se haya ingresado un nombre valido
    if (obtenerNombreAmigo === ''){
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
//Actualiza la lista de amigos
function actualizarAmigos() {
    document.getElementById('listaAmigos').innerHTML = '';//Limpia los elementos
    for (let i = 0; i < amigos.length; i++) {
        insertarElemento('listaAmigos', 'li', amigos[i]);
    }
}
//Función para sortear el amigo secreto
function sortearAmigo() {
    //Genera un número random
    let numeroAleatorio = Math.floor(Math.random()*amigos.length);
    //Valida que el array tenga elementos
    if (amigos.length > 0) {
        document.getElementById('resultado').innerHTML = ''; //Limpia el elemento
        insertarElemento('resultado', 'li', `¡El amigo secreto es ${amigos[numeroAleatorio]}!🎁`);
    } else {
        alert('Agrega amigos para poder sortear.');
    }
}

function insertarElemento(elemento, nuevoElemento, texto) {
    let lista = document.getElementById(elemento); //Obtengo el elemento
    let nuevoLi = document.createElement(nuevoElemento); //Creo un nuevo elemento
    nuevoLi.innerHTML = texto; //Agrego el texto
    lista.appendChild(nuevoLi); //Agrego el elemento lista 
}