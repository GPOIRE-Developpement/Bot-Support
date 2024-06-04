const { description } = require('../../commands/info/training');
const c = require('./colors');
const b = require('./components');
const e = require('./emotes');
const { embedLength } = require('discord.js');

module.exports.loading = {
    embeds: [
        {
            description: e.pending + 'Loading...',
            color: c.pending,
        }
    ]
}

module.exports.cooldown = (duration) => {
    return {
        embeds: [
            {
                description: e.pending + `You are on a \`${duration}\` cooldown.`,
                color: c.pending
            }
        ]
    }
}

module.exports.fail = (desc, ephem) => {
    return {
        embeds: [
            {
                description: e.fail +"**"+ desc+"**",
                color: c.fail
            }
        ], ephemeral: ephem,
    }
}

module.exports.error = {
    embeds: [
        {
            description: e.error + 'Oh non, il y a un problème avec ce bot !',
            color: c.error
        }
    ], ephemeral: true,
}

module.exports.done = (desc) => {
    return {
        embeds: [
            {
                description: e.done + desc,
                color: c.done
            }
        ]
    }
}

module.exports.giveTraining = (userID, id, text) => {
    return {
        content: `<@${userID}>`,
        embeds: [
            {
                color: c.support,
                title: `📝 - Situation d'entrainement`,
                fields: [
                    {
                        name: `Question n°${id+1} :`,
                        value: text,
                    }
                ]
            }
        ],
        components: b.giveTraining(),
    }
}

module.exports.sendTrainingToFormer = (member, questionID, question, expectedAnswer, answer) => {
    return {
        content: `<@${member.id}>`,
        embeds: [
            {
                color: c.support,
                title: `📝 - Situation d'entrainement`,
                fields: [
                    {
                        name: `Question n°${questionID+1} :`,
                        value: question,
                    },
                    {
                        name: `Réponse attendue :`,
                        value: expectedAnswer,
                    },
                    {
                        name: `Réponse de ${member.user.username} :`,
                        value: answer,
                    }
                ]
            }
        ],
        components: b.answerTraining()
    }
}

module.exports.sendTrainingConfirm = () => {
    return {
        content: "",
        embeds: [
            {
                color: c.done,
                description: "Votre réponse a bien été transmise !",
            }
        ],
        components: [],
        ephemeral: true
    }
}

module.exports.sendTrainingAnswer = (fields, commentAuthor, comment) => {
    return {
        embeds: [
            {
                color: c.support,
                title: `📝 - Situation d'entrainement`,
                fields: [
                    fields[0],
                    fields[1],
                    fields[2],
                    {
                        name: commentAuthor,
                        value: comment
                    }
                ]
            }
        ]
    }
}