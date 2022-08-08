const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'guildMemberAdd',
    once: false,
    async execute(client, member) {
        member.roles.add(member.guild.roles.cache.get('801173797469552680'))
        const embed = new EmbedBuilder()
            .setTitle(`Bienvenue ${member.user.username} sur \`Crewlink Francais\`!`)
            .setDescription(`Binevenue sur le serveur nouveau CrewMate ! Nous somme \`${member.guild.memberCount}\` CrewMake !`)
            .setColor("Green")
            .setTimestamp()
            member.guild.channels.cache.get('807565693351493662').send({embeds: [embed]})
    }
}