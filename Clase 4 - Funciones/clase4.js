
function saludar(){
    alert("Hola mundo");
}

saludar();

function sumar (num1, num2){
    alert(num1+num2);
}

sumar(5,6);
sumar(2,1);


function numeroValido(){
    let num;
    do { num = prompt("Ingrese un numero: ")
    } while (isNaN(num));
    return num;
}

num1 = numeroValido();
alert("El numero ingresao es: " + num1);
