//objetos en javascript

const futbolista = {
    nombre: "Lionel Messi",
    equipo: "PSG",
    altura: "1.60"
}

//desestructuracion

//const nombrejugador = futbolista.nombre;
//const equipoJugador = futbolista.equipo;
//const alturaJugador = futbolista.altura;

//console.log(futbolista);
//console.log(nombrejugador, equipoJugador, alturaJugador);

const{nombre, equipo, altura} = futbolista;
console.log(nombre, equipo, altura);