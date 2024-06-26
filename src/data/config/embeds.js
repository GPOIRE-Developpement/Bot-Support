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

module.exports.certificateChooseDomain = (memberID, startDate, endDate, reason) => {
    return {
        embeds: [
            {
                color: c.support,
                title: "Cooldown Certification",
                fields: [
                    {
                        name: "Membre :",
                        value: memberID,
                    },
                    {
                        name: "Raison :",
                        value: reason,
                    },
                    {
                        name: "Début :",
                        value: startDate,
                        inline: true
                    },
                    {
                        name: "Fin :",
                        value: endDate,
                        inline: true
                    }
                ]
            }
        ],
        components: b.answerTraining(),
        ephemeral: true 
    }
}

module.exports.certificateCooldown = (fields, domain) => {
    return {
        embeds: [
            {
                color: c.support,
                title: "Cooldown Certification",
                fields: [
                    {
                        name: "Domaine :",
                        value: domain,
                    },
                    fields[0],
                    fields[1],
                    fields[2],
                    fields[3]
                ]
            }
        ]
    }
}

module.exports.confirmSuggestion = () => {
    return {
        embeds: [
            {
                title: 'Suggestion',
                color: c.done,
                description: e.done + 'Votre suggestion a bien été publié dans le salon dédié'
            }
        ]
    }
}

module.exports.suggestion = (reason) => {
    return {
        embeds: [
            {
                title: 'Nouvelle suggestion',
                color: c.support,
                description: reason
            }
        ]
    }
}