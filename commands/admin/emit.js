const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: 'emit',
    description: 'Emettre un evenement',
    permissions: ['ADMINISTRATOR'],
    run: (client, message, args) => {},
    options: [{
        name: "event",
        description: 'Choisie l\'evenement a émettre',
        type: ApplicationCommandOptionType.String,
        required: true,
        choices: [
            {
                name: "guildMemberAdd",
                value: "guildMemberAdd"
            },
            {
                name: "guildMemberRemove",
                value: "guildMemberRemove"
            }
        ]
    }],
    runSlash: (client, interaction) => {
        const eventChoices = interaction.options.getString('event')
        
        if (eventChoices == "guildMemberAdd") {
            client.emit('guildMemberAdd', interaction.member)
            interaction.reply({content: 'Event Emis !', ephemeral: true })
        }
        if (eventChoices == "guildMemberRemove") {
            client.emit('guildMemberAdd', interaction.member)
            interaction.reply({content: 'Event Emis !', ephemeral: true })
        }
    }
}