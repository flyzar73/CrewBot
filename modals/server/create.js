const { ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder } = require("discord.js")

const buttons = new ActionRowBuilder()
    .addComponents(
        new ButtonBuilder()
            .setCustomId('join')
            .setEmoji('✅')
            .setLabel('Rejoindre la partie')
            .setStyle(ButtonStyle.Success),
        new ButtonBuilder()
            .setCustomId('left')
            .setEmoji('❌')
            .setLabel('Quittez la partie')
            .setStyle(ButtonStyle.Primary),
        new ButtonBuilder()
            .setCustomId('close')
            .setEmoji('❌')
            .setLabel('Fermé la partie')
            .setStyle(ButtonStyle.Danger),
    )

module.exports = {
    name: 'create',
    run: (client, interaction) => {
        const piggybank = require("piggy-bank")("game.json")
        if (piggybank.get(`player.${interaction.user.id}.ingame`)) return interaction.reply({ content: 'Vous ètes deja en partie', ephemeral: true });
        const code = interaction.fields.getTextInputValue('code');
        const nameValue = interaction.fields.getTextInputValue('name');
        const name = nameValue ? code : nameValue
        const guild = interaction.guild
        guild.channels.create({ name: name, parent: guild.channels.cache.get('799941610414145547')}).then(chan => {
            const embed = new EmbedBuilder()
                .setTitle(`Partie ${name} par ${interaction.user.username}`)
                .setDescription(`Nom: \`${name}\`, Code: \`${code}\``)
                .setColor("Gold")
                .setTimestamp()
            chan.send({ components: [buttons], embeds: [embed] })
            piggybank.set(`${chan.id}.code`, code)
            piggybank.set(`${chan.id}.name`, name)
            interaction.reply({ content: `Partie créez: <#${chan.id}>`, ephemeral: true })
        })
    }
}