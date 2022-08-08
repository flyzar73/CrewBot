const { glob } = require("glob");
const { promisify } = require("util");

const pGlob = promisify(glob);

module.exports = async (client) => {
    (await pGlob(`D:/Users/JEUX/Desktop/BOT/crewlink/buttons/*/*.js`)).map(async btnFile => {
        const btn = require(btnFile)
        if (!btn.name) return console.log(`\n-----\nERROR: btn: No Name\nFile: ${btnFile}\n-----\n`)
        client.buttons.set(btn.name, btn)
    })
}