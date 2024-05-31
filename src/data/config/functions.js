const trainingList = require("./training.json");

module.exports.trainingRandom = () => {
    return Math.floor(Math.random() * trainingList.length)
}