const fetch = require('node-fetch');

const validate = async array => {
    const arrayValidated = [];
    for(let i = 0; i < array.length; i++){
        const response = await fetch(array[i].href)
        .catch(err => console.log('Se encontró este links roto', array[i].href));
        array[i].status = response && response.statusText == "OK" ? "OK" : "FAIL";
        arrayValidated.push(array[i]);
    }
    return arrayValidated;  
};

module.exports = validate;
