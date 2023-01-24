//Async - Await
//Al agregar Async a una funcion devuelve una promesa

let getNombre = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Josecarlos Anzueto")
        }, 5000);
    });
}

let saludar = async() =>{
let nombre = await getNombre();
return `Que onda tas wapo ${nombre}`
}

saludar().then(msg =>{
    console.log(msg);
})