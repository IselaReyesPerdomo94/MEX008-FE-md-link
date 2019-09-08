#!/usr/bin/env node
const limitArgsCli = require('./lib/args.js');
const colors = require('colors/safe');

//Limiting arguments
if(!limitArgsCli(process.argv)){
    console.log(colors.green('¡Hola!'));
    console.log(colors.green('Para utilizar mdlinksirp solo debes pasar una ruta válida.\nLas banderas que puedes utilizar son:'));
    console.log(colors.yellow('--stats \n--validate'));
    return;
}

//Evaluating if user puts one argument and is not one permitted flag.
if(process.argv.length === 4){    
    if(process.argv[3] !== '--stats' && process.argv[3] !== '--validate') {
        console.log(colors.green('Las banderas validas son:'));    
        console.log(colors.yellow('--stats\n--validate'));
        return;
    }
}

//Evaluating if user puts two arguments and are not permitted flags.
const orderOption1 = process.argv[3] === '--stats' && process.argv[4] === '--validate';
const orderOption2 = process.argv[3] === '--validate' && process.argv[4] ==='--stats';
if(process.argv.length > 4 && !(orderOption1 || orderOption2)){
    console.log(colors.green('Las banderas validas son:'));    
    console.log(colors.yellow('--stats\n--validate'));
    return;
}

//handleing valid arguments.
const finalPath = process.argv[2] || null;
const options = {
    validate: process.argv.indexOf('--validate') > -1,
    stats: process.argv.indexOf('--stats') > -1
};

require('./index.js')(finalPath, options);
