const statsandvalidate = array => {
    const total = array.length;
    const links = array.map(obj => obj.href);
    const fails = array.filter(obj => obj.status == 'FAIL');
    const setUnique = new Set(links);
    return `Total: ${total} \nUnique: ${setUnique.size}\n Broken: ${fails.length}`;
};
module.exports = statsandvalidate;