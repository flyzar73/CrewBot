const { InteractionType } = require('discord.js');
module.exports = {
    name: 'interactionCreate',
    once: false,
    async execute(client, interaction) {
        if (interaction.type === InteractionType.ApplicationCommand) {
            const cmd = client.commands.get(interaction.commandName)
            if (!cmd) return interaction.reply({ content: 'Sorry, This command don\'t exist ! Err0r: 404', ephemerel: true })

            if (!interaction.member.permissions.has([cmd.permissions])) return interaction.reply({ content: "Vous n'avez pas la/les permission(s) requise !", ephemeral: true })

            cmd.runSlash(client, interaction)
        } else if (interaction.isButton()) {
            const btn = client.buttons.get(interaction.customId)
            if (!btn) return interaction.reply({ content: 'Sorry, This button don\'t exist ! Err0r: 404', ephemeral: true })
            btn.run(client, interaction)
        } else if (interaction.type === InteractionType.ModalSubmit) {
            const modal = client.modals.get(interaction.customId)
            if (!modal) return interaction.reply({ content: 'Sorry, This form don\'t exist ! Err0r: 404', ephemeral: true })
            modal.run(client, interaction)
        }
    }
}