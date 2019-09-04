const stats = array => {
    const amountOfLinks = array.length;
    const links = array.map((obj) => obj.href);
    const setUnique = new Set(links)
    return `Total: ${amountOfLinks} \nUnique: ${setUnique.size}`;
}

module.exports = stats;