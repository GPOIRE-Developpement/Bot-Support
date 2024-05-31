const { ApplicationCommandType } = require('discord.js');

module.exports = {
    name: 'entrainement',
    description: "Vous permet de répondre à différentes questions",
    type: ApplicationCommandType.ChatInput,
    cooldown: 1000,
    run: async (client, interaction) => {
        random = client.functions.trainingRandom()
        interaction.reply(client.embeds.giveTraining(interaction.member.id, random, client.training[random].question));
    }
};