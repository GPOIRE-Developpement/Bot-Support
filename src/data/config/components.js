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
    const select = new StringSelectMenuBuilder()
		.setCustomId('certificate-choosedomain')
		.setPlaceholder('Le domaine de certification')
		.addOptions(
			new StringSelectMenuOptionBuilder()
				.setLabel('Configuration')
				.setDescription('Lors de certification configuration')
				.setValue('configuration')
                .setEmoji("🛠️"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Glua')
				.setDescription('Lors de certification Glua')
				.setValue('glua')
                .setEmoji("💻"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Mapping')
				.setDescription('Lors de certification mapping')
				.setValue('mapping')
                .setEmoji("🗺️"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Modélisation')
				.setDescription('Lors de certification modélisation')
				.setValue('modelisation')
                .setEmoji("🧰"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Reskin')
				.setDescription('Lors de certification reskin')
				.setValue('reskin')
                .setEmoji("🚗"),
			new StringSelectMenuOptionBuilder()
				.setLabel('Graphisme')
				.setDescription('Lors de certification graphisme')
				.setValue('graphisme')
                .setEmoji("🖼️"),
        );

    const row = new ActionRowBuilder()
        .addComponents(select);

    return [row]
}

module.exports.chooseDomain = () => {
	
}