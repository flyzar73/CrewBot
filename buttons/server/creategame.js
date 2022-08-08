const { ActionRowBuilder, ModalBuilder, TextInputBuilder, TextInputStyle } = require('discord.js');

module.exports = {
    name: 'creategame',
    run: async (client, interaction) => {
        const modal = new ModalBuilder()
			.setCustomId('create')
			.setTitle('Créer une partie');
        const code = new TextInputBuilder()
			.setCustomId('code')
		    // The label is the prompt the user sees for this input
			.setLabel("Code de la partie (récupérable en jeux)")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);
        const name = new TextInputBuilder()
			.setCustomId('name')
		    // The label is the prompt the user sees for this input
			.setLabel("Nom de la partie (C'est votre choix)")
		    // Short means only a single line of text
			.setStyle(TextInputStyle.Short);
		const firstActionRow = new ActionRowBuilder().addComponents(code);
		const secondActionRow = new ActionRowBuilder().addComponents(name);
	
		modal.addComponents(firstActionRow, secondActionRow);

		await interaction.showModal(modal);
    }
}