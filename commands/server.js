const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('server').setDescription('Replies with server info'),
    async execute(interaction) {
        await interaction.reply(`Server info: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
    }
    // missed a comma on line 7, come back if problems happen
};