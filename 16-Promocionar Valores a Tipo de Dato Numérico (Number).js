// Promocionar Valores a Tipo de Dato Numérico (Number)

let cadena = '1.414216';
const CONSTANTE_PITAGORICA = Number(cadena);
console.log(typeof CONSTANTE_PITAGORICA);

console.log(Number(false));
console.log(Number(true));
console.log()
console.log(Number(null));
console.log(Number(undefined));
console.log(Number(NaN));
console.log();
console.log(Number('')); // La ausencia de valor es representada como 0.
console.log(Number('1.25486y')); // El caracter final no permite el parseo. Resuelve a NaN.

