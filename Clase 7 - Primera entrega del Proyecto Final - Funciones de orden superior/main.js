


let personasEdad = [13,45,96,63,25,46,79,13,25,36,14,15,24,36];

let contador = 0;
let cantidadPersonas = 0;
for (let i=0; i<personasEdad.length; i++){
    contador = contador + personasEdad[i];
}

let respuesta = prompt("Quiere ingresar la edad de otra persona? (si/no)");
while (respuesta == "si"){
    let edad = parseInt(prompt("Ingrese la edad de la persona: "));
    contador = contador + edad;
    cantidadPersonas = cantidadPersonas + 1;
    respuesta = prompt("Quiere ingresar la edad de otra persona? (Si/No)");
}

function promedio(num1, num2){
    promedio = num1 / num2;
    return promedio;
}

cantidadPersonas = cantidadPersonas + personasEdad.length;
alert("El promedio de edad de las personas es " + (promedio(contador,cantidadPersonas)));

let nombres = ['Emiliano','Juan','Enzo','Javier','Ivan'];
let nombre = prompt("Ingrese un nombre para ver si esta dentro del array o & para finalizar: ");
while (nombre != "&"){
    condicion = nombres.includes(nombre)
    if (condicion == true) {
        alert("El nombre se encontro en el array");
    } else {
        alert("El nombre no se encontro en el array");
    }
    nombre = prompt("Ingrese un nombre para ver si esta dentro del array o & para finalizar: ");
}


function Auto (marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

const auto1 = new Auto("Ferrari",1995);
const auto2 = new Auto("Toyota",2001);
const auto3 = new Auto("Chevrolet",1999);
const auto4 = new Auto("Fiat",2005);

alert("El auto 1 es el: " + auto1["marca"]);
alert("El auto 3 es el: " + auto1["marca"]);
