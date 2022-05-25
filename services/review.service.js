const reviewTable = require('../models/index').Reviews;

const createReview = async (data) => {
    const review = await reviewTable.create({
        reviewText : data.reviewText,
        animeId : data.animeId
    });

    return review;
}

const getReview = async(animeId) => {
    const review = await reviewTable.findAll({
        where:{
            animeId : animeId
        }
    });

    return review;
}

const deleteReview = async(reviewId) => {
    const review = await reviewTable.destroy({
        where:{
            id : reviewId
        }
    });
    return review;
}

const editReview = async(reviewId, data) => {
    const review = await reviewTable.update({
        reviewText : data.reviewText
    },{
    where :{
        id : reviewId
    }});

    return review;
}

module.exports = {
    createReview,
    getReview,
    editReview,
    deleteReview
}
