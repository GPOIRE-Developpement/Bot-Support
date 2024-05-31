const client = require('..');

client.on('interactionCreate', async interaction => {
    if(!interaction.isModalSubmit()) return;

    if(interaction.customId == "training-answer"){
        answer = interaction.fields.getTextInputValue('answer-text');
        memberID = interaction.message.content.match(/<@(\d+)>/)[1]
        questionID = (interaction.message.embeds[0].fields[0].name.match(/Question n°(\d+)\s*:/)[1])-1

        client.channels.fetch(client.getChannels.resultats).then(channel => {
            channel.send(client.embeds.sendTrainingToFormer(interaction.member, questionID, client.training[questionID].question, client.training[questionID].answer, answer))
        });

        interaction.message.delete()

        interaction.reply(client.embeds.sendTrainingConfirm())
    }else if(interaction.customId == "training-formeranswer"){
        memberID = interaction.message.content.match(/<@(\d+)>/)[1]
        comment = interaction.fields.getTextInputValue('answer-text');

        interaction.message.edit(client.embeds.sendTrainingAnswer(interaction.message.embeds[0].fields, interaction.message.embeds[0].fields[3].name, interaction.message.embeds[0].fields[3].value+" "+comment)).then(message => {
            client.users.fetch(memberID).then(member => {
                if(!member){
                    interaction.reply(client.embeds.error)
                    return
                }
    
                member.send({embeds: [message.embeds[0]]}).then(message => {
                    interaction.message.edit({components: []})
                    interaction.reply(client.embeds.sendTrainingConfirm())
                })
            })
        })
    }
})