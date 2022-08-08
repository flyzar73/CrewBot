const piggyBank = require("piggy-bank")("game.json")

module.exports = {
    name: 'join',
    run: async (client, interaction) => {
        if(piggyBank.get(`player.${interaction.user.id}.ingame`)) return interaction.reply({ content: 'Vous ètes deja en partie', ephemeral: true });
        piggyBank.set(`player.${interaction.user.id}.ingame`, true, {overwrite: true})
        interaction.reply({ content: `${interaction.user.username} à rejoin la partie !` }).then(msg => {
            setTimeout(() => interaction.deleteReply(), 10000);
        })
    }
}