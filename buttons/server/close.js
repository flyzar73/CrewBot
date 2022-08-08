const piggyBank = require("piggy-bank")("game.json")

module.exports = {
    name: 'close',
    run: async (client, interaction) => {
        piggyBank.set(`player.${interaction.user.id}.ingame`, false, {overwrite: true})
        interaction.channel.delete()
    }
}