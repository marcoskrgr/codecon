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
    },
    verifyAnswer: async ({ answerId }) => {
        const { dataValues: verifiedAnswer } = await Answers.findByPk(answerId);

        let questionAnswers = await Answers.findAll({ where: {questionId: verifiedAnswer.questionId} })

        let correctAnswer = questionAnswers.filter(answer => answer.right);

        return {
            question: verifiedAnswer.questionId,
            correctAnswer: correctAnswer[0],
            userAnswer: {
                id: verifiedAnswer.id,
                isCorrect: verifiedAnswer.right
            }
        };
    }
}

module.exports = AnswersService;