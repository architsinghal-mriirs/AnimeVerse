const AnimeController = require('../controllers/anime.controller');

const routes = (app) => {
    app.post('/animeverse/api/v1/createAnime', AnimeController.createAnime);
}

module.exports = routes;