// Averiguar si una Variable Definida es de Tipo de Dato Numérico.

let a = 'JavaScript';
let b = '';
let c = Number('1234');
let d = new Date();

if(typeof a === 'number'){
    console.log('La variable `a` es de tipo numerica.');
}else{
    console.log('La variable `a` no es de tipo numerica.');
}

if(typeof b === 'number'){
    console.log('La variable `b` es de tipo numerica.');
}else{
    console.log('La variable `b` no es de tipo numerica.');
}

if(typeof c === 'number'){
    console.log('La variable `c` es de tipo numerica.');
}else{
    console.log('La variable `c` no es de tipo numerica.');
}

if(typeof d === 'number'){
    console.log('La variable `d` es de tipo numerica.');
}else{
    console.log('La variable `d` no es de tipo numerica.');
}

console.log(typeof d);