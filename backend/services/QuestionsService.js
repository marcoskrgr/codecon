const { Questions, sequelize } = require('../models');
const AnswersService = require('./AnswersService');
const { Sequelize, Model, DataTypes } = require('sequelize');


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
    },
    getQuestion: async ({ rule }) => {
        if(!rule){
            const error = new Error('O campo de área de atuação não pode ser vazio.');
            error.status = 400;
            throw error;
        }

        const dataReturn = []

        const questionsEasy = await Questions.findAll({
            where:{
                rule: {rule},
                level: 5,
            },
            limit: 5,
            order: sequelize.random()
        });

        dataReturn.push(questionsEasy);

        const questionsMedium = await Questions.findAll({
            where:{
                rule: {rule},
                level: 10,
            },
            limit: 5,
            order: sequelize.random()
        });

        dataReturn.push(questionsMedium);

        const questionsHard = await Questions.findAll({
            where:{
                rule: {rule},
                level: 15,
            },
            limit: 5,
            order: sequelize.random()
        });

        dataReturn.push(questionsHard);

        return dataReturn;
    }
}

module.exports = QuestionsService;