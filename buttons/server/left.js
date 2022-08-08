const piggyBank = require("piggy-bank")("game.json")

module.exports = {
    name: 'left',
    run: async (client, interaction) => {
        piggyBank.set(`player.${interaction.user.id}.ingame`, false, {overwrite: true})
        interaction.reply({ content: `${interaction.user.username} à quittez la partie !` }).then(msg => {
            setTimeout(() => interaction.delete(), 5000);
        })
    }
}