

let boton = document.getElementById("btnPrincipal")
boton.onclick = respuestaClick;

function respuestaClick(){
    alert("Respuesta evento");
}
function hacer_click(){
    alert("Me haz dado un click");
}
function hacer_hover(){
    alert("Estas sobre mi!");
}
function salir_del_hover(){
    alert("Adios!");
}
function cargar_pagina()
{alert("Ya se ha cargado el sitio web");}

/*

let saludos = ["Buen dia!!", "Bienvenido a la mejor pagina web", "Bienvenido! Aca podras encontrar todo lo que necesitas"];
alert(saludos[1]);
alert(saludos[2]);


let titulo = document.getElementById("titulo");
let parrafo = document.getElementById("parrafo");

titulo.innerText("Clase numero 8 - DOM - Entrega parcial");
console.log(titulo);
console.log(parrafo);

let nombre1 = prompt("Ingrese el nombre de la persona: ");
let edad1 = prompt("Ingrese la edad de la persona: ");

const personas = [{id=1, nombre="Emiliano",edad=32},
{id=2, nombre="Corina", edad=22},
{id=3, nombre="Daniel", edad=65},
{id=4, nombre="Sonia", edad=55},
{id=5, nombre="Simon", edad=2},
{id=6, nombre=nombre1, edad=edad1}]

for (const persona of personas){
    let conteiner = document.createElement("div");
    conteiner.innerHTML = `<h2> ID: ${persona.id} </h2>
                            <p> Nombre: ${persona.nombre}</p>
                            <p> Edad: ${persona.edad}</p> `
    document.body.appendChild(conteiner);
}

*/