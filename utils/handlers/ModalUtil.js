const { glob } = require("glob");
const { promisify } = require("util");

const pGlob = promisify(glob);

module.exports = async (client) => {
    (await pGlob(`D:/Users/JEUX/Desktop/BOT/crewlink/modals/*/*.js`)).map(async modalFile => {
        const modal = require(modalFile)
        console.log(`Form: ${modal.name}`)
        if (!modal.name) return console.log(`\n-----\nERROR: modal: No Name\nFile: ${modalFile}\n-----\n`)
        client.modals.set(modal.name, modal)
    })
}