const { EmbedBuilder } = require("discord.js")

module.exports = {
    name: 'guildMemberUpdate',
    once: false,
    async execute(client, oldMember, newMember) {
        const oldStatus = oldMember.premiumSince
        const newStatus = newMember.premiumSince
        
        if(!oldStatus && newStatus) {
            const embed = new EmbedBuilder()
            .setTitle(`Merci ${new newMember.user.username} d'avoir booster le serveur \`Crewlink Francais\`!`)
            .setDescription(`Merci beaucoup d'avoir booster le serveur !`)
            .setColor("Purple")
            .setTimestamp()
            newMember.guild.channels.cache.get('807565693351493662').send({embeds: [embed]})
        }
        if(oldStatus && !newStatus) {
            const unembed = new EmbedBuilder()
                .setTitle(`Dommage, ${new newMember.user.username} à arrétée de booster le serveur \`Crewlink Francais\`!`)
                .setDescription(`Merci beaucoup d'avoir ancienement booster le serveur !`)
                .setColor("Red")
                .setTimestamp()
            newMember.guild.channels.cache.get('807565693351493662').send({embeds: [unembed]})
        }
    }
}