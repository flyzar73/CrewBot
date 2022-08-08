module.exports = {
    name: 'ping',
    description: 'description',
    permissions: [],
    run: (client, message, args) => {
        message.reply("Pong❗ 🏓")
    },
    runSlash: (client, interaction) => {
        interaction.reply("Pong❗ 🏓")
    }
}