
let i;
let nombres;
/*
for (i = 0; i < 5; i++){
    nombres = nombres + ', ' + prompt("Ingreso nombre del alumno: ")
}

alert("Los nombres de los alumnos son: " + nombres);
*/

//tabla de multiplicacion
/*let numero = prompt("Ingrese numero asi te digo la tabla: ")

for (i=1; i<10; i++){
    alert(numero * i);
}
*/

//promedio en un aula
/*
let cantidad = parseInt(prompt("Ingresa la cantidad de alumnos: "));
let nota;
let sumatoria = 0;

for (i=0; i<cantidad; i++){
    nota = parseInt(prompt("Ingrese la nota: "));
    sumatoria = sumatoria + nota;
}

let promedio = sumatoria / cantidad;
alert("El promedio del curso fue: " + promedio);
*/


let num1, num2;

do{
    num1 = parseInt(prompt("Ingrese un numero: "));
} while (isNaN(num1));

do{
    num2 = parseInt(prompt("Ingrese un numero: "));
} while (isNaN(num2));

let opcion = prompt("Ingrese la opcion deseada: + - * / o & para terminar")
let resultado;
let error;
while (opcion != "&"){
    switch(opcion){
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;   
        default: error = true;     
    }
    if (!error){
    alert("El resultado es: " + resultado)
    }
    let opcion = prompt("Ingrese la opcion deseada: + - * / o & para terminar")
}