require("dotenv").config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ]
});

client.once('ready', () => {
    console.log('Ready!');
});

client.on("messageCreate", async message => {
    if (message.content.startsWith(">")) {
        if (message.content.substring(1).toLowerCase() === "ping") {
            message.reply("Pong");
        }
    }
});

client.login(process.env.DISCORD_TOKEN);