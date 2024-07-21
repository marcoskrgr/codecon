const { Answers, Questions} = require('../models');

const AnswersService = {
    createAnswersWhileCreatingQuestion: async ({ answers, questionId }) => {

        const answersDataReturn = [];

        for(const answer of answers) {
            const { title, right } = answer;

            const answerData = await Answers.create({
                questionId,
                title,
                right
            });

            answersDataReturn.push(answerData);
        }
        return answersDataReturn;
    }
}

module.exports = AnswersService;