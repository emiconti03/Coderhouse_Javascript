
let cantidad = parseInt(prompt("Ingrese la cantidad de operaciones a realizar o & para finalizar: "));

while (cantidad != "&") {
    for (let i=0; i<cantidad; i++) {
        let num1 = parseInt(prompt("Ingrese el primer numero: "));
        let num2 = parseInt(prompt("Ingrese el segundo numero:"));
        let operacion = prompt("Ingrese la operacion a realizar (+ o -):");
        let resultado;

        if (operacion = "+") {
            resultado = num1 + num2;
            alert("El resultado de la suma es: " + resultado);
        } else if (operacion = "-") {
            resultado = num1 - num2;
            alert("El resultado de la resta es: " + resultado);
        } else {
            alert("El signo ingresado es incorrecto");
        }
    }
    cantidad = parseInt(prompt("Ingrese la cantidad de operaciones a realizar o & para finalizar: "));
}