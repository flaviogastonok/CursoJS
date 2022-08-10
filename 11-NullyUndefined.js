// Diferencias entre null y undefined.
let a; // a esta declarada, pero no definida --> undefined.

let b = null; // b esta declarada y se le asigna el valor null (Literal de ausencia de valor) != a undefined.

console.log(typeof a);

console.log(typeof b);

console.log(a===b)