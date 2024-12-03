const pendientes = ['Tarea','Comer', 'Proyecto', 'Estudiar'];

// Función Normal
/*
pendientes.forEach(function( pendiente, indice){
    console.log(`${indice} - ${pendiente}`);
});
*/

// Arrow Function
pendientes.forEach( ( pendiente, indice) => {
    console.log(`${indice} - ${pendiente}`);
});
