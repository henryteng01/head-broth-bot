const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('beep').setDescription('Replies with Boop!'),
    async execute(interaction) {
        await interaction.reply('Boop!');
    }
    // missed a comma on line 7, come back if problems happen
};