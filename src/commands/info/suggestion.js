const { ApplicationCommandType} = require('discord.js');

module.exports = {
    name: 'suggestion',
    description: "Vous permet de déposer une suggestion sur le dashboard",
    type: ApplicationCommandType.ChatInput,
    cooldown: 1000,
    options: [
        {
            name: 'raison',
            description: 'Merci de détailler au maximum votre demande',
            type: 3,
            required: true
        }
    ],
    run: async (client, interaction) => {
        const reason = interaction.options.get('raison').value;

        client.channels.fetch(client.getChannels.suggestion).then(channel => {
            channel.send(client.embeds.suggestion(reason)).then(async message => {
                const discussThread = await message.startThread({
                    name: 'Donner votre avis',
                    autoArchiveDuration: 72,
                    reason: '.'
                });
            })

            interaction.reply(client.embeds.confirmSuggestion())
        }).catch(error => {
            interaction.reply(client.embeds.error)
        })
    }
}; 