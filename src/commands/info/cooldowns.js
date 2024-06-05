const { ApplicationCommandType, ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js');
const date = new Date();

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

        regexMember = /^[a-zA-Z0-9_-]+ - \d+$/
        if(!regexMember.test(memberID)) return interaction.reply(client.embeds.fail(`Merci d'entrer un format de membre valide !`, true));

        regexDate = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/
        if(!regexDate.test(startDate)) return interaction.reply(client.embeds.fail(`Merci d'entrer un format de date valide !`, true));

        const [day, month, year] = startDate.split('/').map(Number);
        const date = new Date(year, month - 1, day);

        const nextMonthDate = new Date(date);
        nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);

        function formatDate(date) {
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }

        interaction.reply(client.embeds.certificateChooseDomain(memberID, formatDate(date), formatDate(nextMonthDate), reason))
    }
}; 