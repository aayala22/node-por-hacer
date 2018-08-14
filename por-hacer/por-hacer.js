const fs = require('fs');
const colors = require('colors/safe');


let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) console.log(`No se guardo el texto ${ err}`);
    });
}
const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch {
        listadoPorHacer = [];
    }
    // console.log(listadoPorHacer);
}
const crear = (descripcion) => {

    cargarDB();
    let porHacer = {
        descripcion,
        completado: false,
    };

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}
const getListado = () => {
    cargarDB();

    return listadoPorHacer;
}
const getActualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}
const getBorrar = (descripcion) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;


    });
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    getActualizar,
    getBorrar
}