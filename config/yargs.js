//node .\app.js listar --limite=20 --base 10 ejecutar aplicación
// cuando no lleva ./ es porque es un paquete descargado con npm

const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    demand: true,
    alias: 'c'
}
const argv = require('yargs')
    .command('crear', 'crea un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}