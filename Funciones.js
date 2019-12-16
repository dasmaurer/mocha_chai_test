/* 3 - Hacer una funcion que dado una frase borre todos los espacios y devuelva un nuevo string; */

function BorrarEspacios(frase){
    //var frase = prompt("ingrese una frase");
    if(isNaN(frase)){
        var nuevaFrase = frase.replace(/\s/g,"");  
        return nuevaFrase;  
    }
    return ("No incluya números en la frase");
} 

module.exports = BorrarEspacios;









/* FUNCIONES
1 - Hacer una funcion que reciba una palabra y un caracter. Debe borrar el primer caracter de la palabra que se envió;
2 - Hacer una funcion que dado un array de numeros devolver el mayor;

4 - Hacer una funcion qe devuelva si es multiplo o no;
*/