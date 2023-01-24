//callbacks hell
//BD en arrays
let trabajadores = [
    {
        id: 1, nombre: "Josecarlos"
    }, {
        id: 2, nombre: "Marcela"
    }, {
        id: 3, nombre: "Mario"
    }
];

let salarios = [
    {
        id: 1, monto: "2000"
    }, {
        id: 2, monto: "500"
    }
];

//callbacks
//funcion para obtener trabajadores por id
const getTrabajador = (id, callback) => {
    let encontrarTrabajador = trabajadores.find(t => t.id === id);
        (!encontrarTrabajador)
        ? console.log(err)
        : callback(null, encontrarTrabajador);
}

getTrabajador(1, (err, trabajador) => {
    if (err) {
        return console.log(err)
    } else {
        console.log("Todo bien");
    }
    console.log(`El trabajador es ${trabajador.nombre}`);
});

const getSalario = ( trabajador, callback ) => {

    let encontrarSalario = salarios.find( s => s.id === trabajador.id );

    (!encontrarSalario)
        ? callback(`El usuario con id: ${id}, no tiene salario y no existe`) 
        : callback(null, {
            nombre: trabajador.nombre,
            monto:  encontrarSalario.monto,
            id: trabajador.id
        });

}


const idBuscar = 2;

getTrabajador (idBuscar, (err, trabajador) => {

    if (err) {
        return console.log(err);
    } else {
        console.log('Todo OK')
    }

    getSalario( trabajador, (err, salario) => {

        if (err) {
            return console.log(err);
        } else {
            console.log('Todo OK')
        } 
        
        console.log(`El trabajador buscado es ${trabajador.nombre} y su salario es de ${ salario.monto }`);
        
    } )


} );

