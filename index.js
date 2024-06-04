require('dotenv').config();
const fs = require('fs');
const { Client, GatewayIntentBits, Partials, Collection } = require('discord.js')
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
client.embeds = require('./scr/data/config/embeds');
client.e = require('./scr/data/config/emotes');
client.c = require('./scr/data/config/colors');
client.functions = require('./data/config/functions');
client.training = require('./data/config/training.json');
client.getChannels = require('./data/config/channels.json');

module.exports = client;

fs.readdirSync('./src/handlers').forEach((handler) => {
    require(`./handlers/${handler}`)(client);
});

client.login(process.env.BOT_TOKEN);