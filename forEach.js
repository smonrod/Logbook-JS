/*
const pendientes = ['Tarea','Comer', 'Proyecto', 'Estudiar'];

// Función Normal

pendientes.forEach(function( pendiente, indice){
    console.log(`${indice} - ${pendiente}`);
});


// Arrow Function
pendientes.forEach( ( pendiente, indice) => {
    console.log(`${indice} - ${pendiente}`);
});
*/

const carrito = [
    {nombre: 'Monitor 27', precio: 500},
    {nombre: 'Televisión', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700},
];
const nuevoArreglo1 = carrito.forEach(producto => producto.nombre);

const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo1);
console.log(nuevoArreglo2);

/*
carrito.forEach(producto => console.log(producto.nombre));
*/
