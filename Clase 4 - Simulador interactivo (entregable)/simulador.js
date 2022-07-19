let cantidadPersonas = parseInt(prompt("Ingrese la cantidad de personas: "));
let contador = 0;
for (let i=0; i< cantidadPersonas; i++){
    let edad = parseInt(prompt("Ingrese la edad de la persona " + i + ": "));
    contador = contador + edad;
}

alert("El promedio de edad de las personas es " + (contador/cantidadPersonas));

