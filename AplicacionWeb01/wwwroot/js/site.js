// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.




//window.alert('vamooos');

// datos para sumar y restar
let valorActual = 0;
const inputNumero = document.getElementById("numero");
const botonSumar = document.getElementById("sumar");
const botonRestar = document.getElementById("restar");
var Actual = parseInt(valorActual);
const divAzul = document.querySelector(".Azul");
const divRojo = document.querySelector(".Rojo");
const divVerde = document.querySelector(".Verde");
const botonAzul = document.querySelector("#Azul");
const botonRojo = document.querySelector("#Rojo");
const botonVerde = document.querySelector("#Verde");
botonSumar.addEventListener("click", function () {
    // Función para sumar
    Actual++;
    inputNumero.value = Actual;
});

botonRestar.addEventListener("click", function () {
    // Función para restar
    Actual--;
    inputNumero.value = Actual;
});
// FIN de evento sumar y restar

// cambio de color
function generarColorAleatorio() {
        const rojo = Math.floor(Math.random() * 256);
        const verde = Math.floor(Math.random() * 256);
        const azul = Math.floor(Math.random() * 256);
    return `rgb(${rojo}, ${verde}, ${azul})`;
    }
const botonColoricos = document.getElementById("coloricos");
botonColoricos.addEventListener("click", function () {
    const colorAleatorio = generarColorAleatorio();
    document.body.style.backgroundColor = colorAleatorio;
});

// FIN CAMBIO DE COLOR GENERAL

function generarColorAleatorioRojo() {
        const rojo = Math.floor(Math.random() * 256);
        return `rgb(${rojo}, 0, 0)`;
}
const botonColorRojo = document.getElementById("Rojo");
botonColorRojo.addEventListener("click", function () {
        const colorAleatorioRojo = generarColorAleatorioRojo();
        //divRojo.style.backgroundColor = colorAleatorioRojo;
        botonRojo.style.backgroundColor = colorAleatorioRojo;
    });

function generarColorAleatorioVerde() {
    const verde = Math.floor(Math.random() * 256);
    return `rgb(0, ${verde},0)`;
}
const botonColorVerde = document.getElementById("Verde");
botonColorVerde.addEventListener("click", function () {
    const colorAleatorioVerde = generarColorAleatorioVerde();
    //divVerde.style.backgroundColor = colorAleatorioVerde;
    botonVerde.style.backgroundColor = colorAleatorioVerde;
});
function generarColorAleatorioAzul() {
    const azul = Math.floor(Math.random() * 256);
    return `rgb(0, 0, ${azul})`;
}
const botonColorAzul = document.getElementById("Azul");
botonColorAzul.addEventListener("click", function () {
    const colorAleatorioAzul = generarColorAleatorioAzul();
    //divAzul.style.backgroundColor = colorAleatorioAzul;
    botonAzul.style.backgroundColor = colorAleatorioAzul;
});



















// let boton = document.getElementById("Boton");
// boton.addEventListener("mouseover", mueveBoton, false)


//function mueveBoton() {
    //window.alert('vamooos');
 //   let vm = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) -100;
 //   let vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) - 100;
 //   let posX = getRandomInt(0, vm);
 //   let posY = getRandomInt(0, vh);
 //   boton.style.left = posX + 'px';
 //   boton.style.top = posY + 'px';
//}
// function getRandomInt(min, max){
  //  min = Math.ceil(min);
//    max = Math.floor(max);
//    return Math.floor(Math.random() * (max - min) + min);
//    window.alert('boton1');
//}

function changeColor(newColor) {
    var elem = document.getElementById("para");
    elem.style.color = newColor;
}