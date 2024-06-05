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

        [day, month, year] = startDate.split('/').map(Number);
        dateObj = new Date(year, month-1, day);
    
        endDate = new Date(dateObj.setMonth(dateObj.getMonth()+1))

        console.log(dateObj)
        console.log(endDate)

        console.log(dateObj.getDay()+"/"+dateObj.getMonth()+"/"+dateObj.getFullYear())
        console.log(endDate.getDay()+"/"+endDate.getMonth()+"/"+endDate.getFullYear())

        interaction.reply(client.embeds.certificateChooseDomain(memberID, dateObj.getDay()+"/"+dateObj.getMonth()+"/"+dateObj.getFullYear(), endDate.getDay()+"/"+endDate.getMonth()+"/"+endDate.getFullYear(), reason))
    }
}; 