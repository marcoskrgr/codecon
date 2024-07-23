const { AnswersService } = require('../services')

const AnswersController = {
    verifyAnswer: async (req, res) => {
        try {
            const correct = await AnswersService.verifyAnswer(req.params);
            res.status(200).json({ ...correct })
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
}

module.exports = AnswersController;
