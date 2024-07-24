const { QuestionsService } = require('../services')

const QuestionsController = {
    createQuestion: async (req, res) => {
        try {
            const questions = await QuestionsService.createQuestion(req.body);
            res.status(200).json({ ...questions })
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    },
    getQuestion: async (req, res) => {
        try {
            const questions = await QuestionsService.getQuestion(req.query);
            res.status(200).json({ ...questions })
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
}

module.exports = QuestionsController;
