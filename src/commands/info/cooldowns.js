const { ApplicationCommandType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js');

module.exports = {
    name: 'cooldown',
    description: "Vous permet de créer un cooldown de certification",
    type: ApplicationCommandType.ChatInput,
    cooldown: 1000,
    options: [
        {
            name: 'membre',
            description: 'Format Pseudo - ID',
            type: 3,
            required: true
        },
        {
            name: 'début',
            description: 'Format JJ/MM/AAAA',
            type: 3,
            required: true
        },
        {
            name: 'motif',
            description: 'Pourquoi a-t-il était refusé',
            type: 3,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const memberID = interaction.options.get('membre').value;
        const startDate = interaction.options.get('début').value;
        const reason = interaction.options.get('motif').value;
    }
}; 