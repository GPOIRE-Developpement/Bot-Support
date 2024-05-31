const client = require('..');
const { ModalBuilder, TextInputBuilder, TextInputStyle, ActionRowBuilder } = require('discord.js');

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if(interaction.customId == "training-dontknow"){
        memberid = interaction.message.content.match(/<@(\d+)>/)[1]

        if(interaction.member.id != memberid){
            interaction.reply(client.embeds.fail("Vous n'avez pas la permission !", true))
            return
        }

        interaction.message.delete()
    }else if(interaction.customId == "training-answer"){
        memberid = interaction.message.content.match(/<@(\d+)>/)[1]

        if(interaction.member.id != memberid){
            interaction.reply(client.embeds.fail("Vous n'avez pas la permission !", true))
            return
        }

        const modal = new ModalBuilder()
			.setCustomId('training-answer')
			.setTitle(interaction.message.embeds[0].fields[0].name);

		const answer = new TextInputBuilder()
			.setCustomId('answer-text')
			.setLabel("Qu'elle est votre réponse à la question ?")
			.setStyle(TextInputStyle.Paragraph);

		const information = new ActionRowBuilder().addComponents(answer);
		modal.addComponents(information);

		await interaction.showModal(modal);
    }
})