#!/usr/bin/env node
const limitArgsCli = require('./lib/args.js');

if(!limitArgsCli(process.argv)){
    console.log('Para utilizar mdlinksirp solo debes pasar una ruta válida.\nLas banderas que puedes utilizar son: \n--stats \n--validate ');
    return;
}

const finalPath = process.argv[2] || null;
const options = {
    validate: process.argv.indexOf('--validate') > -1,
    stats: process.argv.indexOf('--stats') > -1
};
if(process.argv[3] || process.argv[4] != '--stats' || '--validate'){
    console.log('Las banderas válidas que puedes utilizar son:\n--stats\n--validate');
    return;
}

require('./index.js')(finalPath, options);