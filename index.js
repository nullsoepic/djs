const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client({
	intents: [Discord.Intents.FLAGS.GUILDS],
	presence: {
		status: 'online',
		afk: false,
		activities: [{
			name: 'something',
			type: 'PLAYING'
		}],
	},
});

client.commands = new Discord.Collection();

const functions = fs.readdirSync("./functions").filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync("./events").filter(file => file.endsWith('.js'));
const commandFolders = fs.readdirSync("./commands");

(async () => {
	for (file of functions) {
		require(`./functions/${file}`)(client);
	}

	client.handleEvents(eventFiles, "./events")
	client.handleCommands(commandFolders, "./commands")
	client.login(process.env['secret']);
})();
