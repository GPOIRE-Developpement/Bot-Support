const client = require('..');
const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder} = require('discord.js');

client.on('interactionCreate', async interaction => {
    if(interaction.componentType != 3) return;

    if(interaction.customId == "training-formeranswer"){
        if(interaction.values[0] == "accept-traininganswer"){
            interaction.message.edit(client.embeds.sendTrainingAnswer(interaction.message.embeds[0].fields, `Avis de ${interaction.member.user.username} :`, "✅ - "))
        }else{
            interaction.message.edit(client.embeds.sendTrainingAnswer(interaction.message.embeds[0].fields, `Avis de ${interaction.member.user.username} :`, "❌ - "))
        }
        
        const modal = new ModalBuilder()
        .setCustomId('training-formeranswer')
        .setTitle(interaction.message.embeds[0].fields[0].name);

        const answer = new TextInputBuilder()
            .setCustomId('answer-text')
            .setLabel("Qu'avez-vous à rajouter ?")
            .setStyle(TextInputStyle.Paragraph);

        const information = new ActionRowBuilder().addComponents(answer);
        modal.addComponents(information);

        await interaction.showModal(modal);
    }
})

