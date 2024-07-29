const { RankingService } = require('../services');

const RankingController = {
    getRanking: async(req, res) => {
        try {
            const ranking = await RankingService.getRanking(req.query);
            res.status(200).json({...ranking});
        } catch (e) {
            res.status(400).json({error: e.message});
        }
    }
}

module.exports = RankingController