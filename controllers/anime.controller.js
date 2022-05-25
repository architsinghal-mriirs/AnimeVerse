const AnimeService = require('../services/anime.service');

const createAnime = async (req,res) => {
    const response = await AnimeService.createAnime(req.body);
    return res.json({
        message : 'Successfully created the Anime',
        code : 201,
        success : true,
        data : response
    });
}

module.exports = {
    createAnime
}