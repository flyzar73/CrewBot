module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log('Je suis prêt !')

        const devGuild = await client.guilds.cache.get('799314318515634186');
        devGuild.commands.set(client.commands.map(cmd => cmd));
    }
}