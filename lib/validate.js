const fetch = require('node-fetch');

const petition = href => {
    return new Promise((resolve, reject) => {
        fetch(href).then((response) => resolve(response))
            .catch(err => {
                console.log('Se encontró este links roto', href);
                reject(err);
            });
    });

};

const validate = async array => {
    const arrayValidated = [];
    for (let i = 0; i < array.length; i++) {
        const response = await petition(array[i].href);
        Object.assign(array[i], { status: response && response.statusText == 'OK' ? 'OK' : 'FAIL' });
        arrayValidated.push(array[i]);
    }
    return arrayValidated;
};
module.exports = validate;