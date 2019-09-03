const stats = array => {
    const amountOfLinks = array.length;
    const unique = array.length;
    const links = array.map((obj) => {
        return obj.href;
    })
    console.log(`Total: ${amountOfLinks} \nUnique: ${unique}`)
}

module.exports = stats;

const arr = [{
        href: 'https://github.com',
        text: 'github',
        path: './mockfiles/prueba.md'
    },
    {
        href: 'https://github.com',
        text: 'github',
        path: './mockfiles/prueba.md'
    },
]

stats(arr)