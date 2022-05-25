const AnimeTable = require('../models/index').Anime;

const createAnime = async (data) => {
    const anime = await AnimeTable.create({
        name : data.name,
        description : data.description,
        author : data.author,
        episodeCount : data.episodeCount,
        studio : data.studio
    })

    return anime;
}

const getAnime = async (animeId) => {
    const anime = await AnimeTable.findOne({
        where : {
            id : animeId
        }
    });

    return anime;
}

const deleteAnime = async(animeId) => {
    const anime = await AnimeTable.destroy({
        where : {
            id : animeId
        }
    });

    return anime;
}

const updateAnime = async(animeId, data) => {
    const anime = await AnimeTable.update({
        name : data.name,
        description : data.description,
        author : data.author,
        studio : data.studio,
        episodeCount : data.episodeCount,
    },{
    where : {
            id : animeId
    
    }});
    return anime;
}

module.exports = {
    createAnime,
    getAnime,
    deleteAnime,
    updateAnime
}