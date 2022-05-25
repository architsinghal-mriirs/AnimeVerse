const AnimeTable = require('../models/index').Anime;

const createAnime = async (data) => {
    const anime = AnimeTable.create({
        name : data.name,
        description : data.description,
        author : data.author,
        episodeCount : data.episodeCount,
        studio : data.studio
    })

    return anime;
}

module.exports = {
    createAnime
}