const { ButtonBuilder, ButtonStyle, ActionRowBuilder, StringSelectMenuBuilder, StringSelectMenuOptionBuilder} = require('discord.js');
const e = require("./emotes")

module.exports.giveTraining = () => {
    const answer = new ButtonBuilder()
		.setCustomId('training-answer')
		.setLabel('Répondre')
		.setStyle(ButtonStyle.Success);

	const cancel = new ButtonBuilder()
		.setCustomId('training-dontknow')
		.setLabel('Cancel')
		.setStyle(ButtonStyle.Danger);

	const button = new ActionRowBuilder()
		.addComponents(answer, cancel);

    return [button]
}

module.exports.answerTraining = () => {
    /*const answer = new ButtonBuilder()
    .setCustomId('training-formeranswer')
    .setLabel('Répondre')
    .setStyle(ButtonStyle.Primary);

    const button = new ActionRowBuilder()
        .addComponents(answer);

    return [button]*/

    const select = new StringSelectMenuBuilder()
		.setCustomId('training-formeranswer')
		.setPlaceholder('Votre réponse')
		.addOptions(
			new StringSelectMenuOptionBuilder()
				.setLabel('Accepter')
				.setDescription('Accepter sa question et ajouter un commentaire !')
				.setValue('accept-traininganswer')
                .setEmoji("✅"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Refuser')
				.setDescription('Refuser sa question et ajouter un commentaire !')
				.setValue('refuse-traininganswer')
                .setEmoji("❌"),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    return [row]
}