const argv = require('./config/yargs.js').argv;

const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'crear':
        let estaTarea = porHacer.crear(argv.descripcion);
        console.log(estaTarea);
        break;
    case 'listar':
        let listado = porHacer.getListado(argv.descripcion);

        for (let lis of listado) {
            console.log('============================='.green);
            console.log(lis.descripcion);
            console.log('Estado ', lis.completado);
            console.log('============================='.green);
        }
        break;
    case 'actualizar':
        let actualizar = porHacer.getActualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = porHacer.getBorrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando non es reconocido');
        break;
}