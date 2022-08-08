const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'guildMemberRemove',
    once: false,
    async execute(client, member) {
        const embed = new EmbedBuilder()
            .setTitle(`Aurevoir ${member.user.username}, revien bientot sur \`Crewlink Francais\`!`)
            .setDescription(`Aurevoir ! Nous ne somme plus que \`${member.guild.memberCount}\` CrewMake !`)
            .setColor("Red")
            .setTimestamp()
            member.guild.channels.cache.get('807565693351493662').send({embeds: [embed]})
    }
}