const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('user').setDescription('Replies with user info'),
    async execute(interaction) {
        await interaction.reply(`Your tag: ${interaction.user.tag}\nYour username: ${interaction.user.username}`);
    }
    // missed a comma on line 7, come back if problems happen
};