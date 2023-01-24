// Callbacks
// No es más que una función dentro otra función
// Responde al ejecutarse

//setTimeout(function(){
//    console.log("hola mundo");
//}, 5000);

//console.log("buenas tardes");

//setTimeout(function(){
//  console.log("kinal");
//}, 3000)

//const getUserById = (id) => {
//   const usuario ={
//        id, 
//        nombre: "Josecarlos"
//    }
//    if (id == 20) {
//        console.log("el id es 20 y existe");
//    } else{
//        console.log("el id no existe");
//    }
//}

//getUserById(20, (err, usuario) => {
//    if (err) {
//        return console.log(err);
//    }
//    console.log("Usuario en la base de datos",usuario);
//})

const getUserById = (id, callback) =>{

    const usuario ={
        id,
        nombre: "Josecarlos"
    }
// if (id === 20) {
//     callback(`el usuario con id: ${id}, no existe en la db`);
// } else {
//     console.log(null, usuario);
// }

id === 20
    ?  callback(`el usuario con id: ${id}, no existe en la db`)
    :  callback(null, usuario);

}

getUserById(20, (err, usuario) =>{
    if (err) {
        return console.log(err);
    }
    console.log("usuario en la base de datos "+ usuario)
});