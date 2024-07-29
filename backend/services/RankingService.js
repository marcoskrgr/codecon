const { Users, History } = require('../models');

const RankingService = {
    getRanking: async ({ pages, size }) => {
        let page = pages || 1; // Página atual
        let pageSize = size || 10; // Tamanho da página

        const offset = (page - 1) * pageSize;
        const limit = pageSize;

        const ranking = await Users.findAndCountAll({
            include: {
                model: History,
                required: true,
            },
            limit: limit,
            offset: offset,
            order: [
                [History, 'points', 'DESC'],
                [History, 'time', 'DESC'],
            ],
        });

        return ranking;
    }
}

module.exports = RankingService;