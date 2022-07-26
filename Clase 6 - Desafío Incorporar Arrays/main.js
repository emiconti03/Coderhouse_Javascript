
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

