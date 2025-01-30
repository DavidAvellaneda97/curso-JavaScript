
const postres = [];

// Agregar un postres al final del arreglo.
postres.push("Pastel de Guayaba");
postres.push("Flan", "Gelatina");

console.log(  postres ); // ["Pastel de Guayaba", "Flan", "Gelatina"]

// Eliminar un postre del final del arreglo.
console.log(`Elemento eliminado con pop() ${postres.pop()}`); // Gelatina
console.log(  postres ); // ["Pastel de Guayaba", "Flan"]
