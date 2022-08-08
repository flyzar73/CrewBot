const { ApplicationCommandOptionType, ActionRowBuilder, ButtonBuilder } = require("discord.js")

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('creategame')
            .setEmoji('➕')
            .setLabel('Clique ICI pour créer une nouvelle partie')
            .setStyle("Success")
    )

module.exports = {
    name: 'create',
    description: 'Créer une partie',
    permissions: ['ADMINISTRATOR'],
    run: (client, message, args) => {
        message.delete()
        message.channel.send({ components: [buttons] })
    },
    runSlash: async (client, interaction) => {
        interaction.reply({ components: [buttons] })
    }
}