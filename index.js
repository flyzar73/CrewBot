const { Client, Collection, Partials } = require('discord.js');
const client = new Client({intents: 3276799, partials: [Partials.Message, Partials.Channel, Partials.GuildMember, Partials.GuildScheduledEvent, Partials.Reaction, Partials.ThreadMember, Partials.User]});

['commands', 'buttons', 'modals'].forEach(x => client[x] = new Collection());
['CommandUtil', 'EventUtil', 'ButtonUtil', 'ModalUtil'].forEach(handler => { require(`./utils/handlers/${handler}`)(client) })

process.on('exit', code => { console.log(`Bot stopped with code: ${code}`) })
process.on('uncaughtException', (err, origin) => { console.log(`${'uncaughtException'.toUpperCase()}: ${err}`, `Origin: ${origin}`)})
process.on('unhandledRejection', (reason, promise) => { console.log(`${'unhandledRejection'.toUpperCase()}: ${reason}\n`, promise)})
process.on('warning', (...args) => console.log(...args))

client.login(process.env.DISCORD_TOKEN)