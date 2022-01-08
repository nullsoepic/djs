const { SlashCommandBuilder } = require('@discordjs/builders');
const simplydjs = require("simply-djs");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Pong!'),
	async execute(interaction) {
    interaction.reply({ content: 'Pong!' })
	},
};
