// Promocionar Valores a Tipo Cadena de Caracteres (String) Coerción => forzar la conversión de un valor a cadena de caracter.

console.log(typeof String(4));

console.log(typeof String(true));

console.log(typeof String(false));

let objeto = {nombre:'Flavio Saldaña' , id: 12453};

console.log(String(objeto));

let arr = [1,2,3,4,5];

console.log(String(arr));

console.log(arr.join('a'))

let sumar = (a,b) => {console.log(a+b)};

console.log(String(sumar)); //devuelve la representación literal de la función.