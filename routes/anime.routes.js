const AnimeController = require('../controllers/anime.controller');

const routes = (app) => {
    app.post('/animeverse/api/v1/createAnime', AnimeController.createAnime);
    app.get('/animeverse/api/v1/getAnime/:id', AnimeController.getAnime);
    app.delete('/animeverse/api/v1/deleteAnime/:id', AnimeController.deleteAnime);
    app.put('/animeverse/api/v1/updateAnime/:id', AnimeController.updateAnime);
}

module.exports = routes;