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

const getAnime = async(req,res) => {
    const response = await AnimeService.getAnime(req.params.id);
    if(!response){
        return res.json({
            message : "Anime not found",
            code : 404,
            success : false
        })
    }
    return res.json({
        message : 'Successfully fetched the Anime',
        code : 200,
        success : true,
        data : response
    });
}

module.exports = {
    createAnime,
    getAnime
}