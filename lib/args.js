const limitArgsCli = cliArguments => {
    if (cliArguments.length <= 2 || cliArguments.length > 5) {
        return false;
    }
    return true;
};

module.exports = limitArgsCli;