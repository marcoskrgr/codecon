const { Questions } = require('../models');
const AnswersService = require('./AnswersService');

const QuestionsService = {
    createQuestion: async ({ title, level, answers }) => {

        if (!Array.isArray(answers) || answers.length !== 4) {
            const error = new Error('O array de respostas deve conter exatamente 4 respostas.');
            error.status = 400;
            throw error;
        }

        let rightAnswers = 0;

        for(const answer of answers){
            if(answer.right){
                rightAnswers++;
            }
        }

        if(rightAnswers != 1){
            const error = new Error('A questão deve ter exatamente uma resposta correta.');
            error.status = 400;
            throw error;
        }

        const dataReturn = {
            question: {},
            answers: []
        }

        const question = await Questions.create({ title, level });
        dataReturn.question = question;

        const answersData = await AnswersService.createAnswersWhileCreatingQuestion({answers, questionId: question.id});

        dataReturn.answers.push(answersData);

        return dataReturn;
    }
}

module.exports = QuestionsService;