const reviewService = require('../services/review.service');

const createReview = async (req,res) => {
    const response = await reviewService.createReview(req.body);
    return res.json({
        message : 'Successfully created the review',
        code : 201,
        success : true,
        data : response
    });
}

const getReviews = async (req,res) => {
    const response = await reviewService.getReview(req.body.animeId);
    return res.json({
        message : 'Successfully fetched all the reviews',
        code : 200,
        success : true,
        data : response
    });
}

const deleteReview = async (req,res) => {
    const response = await reviewService.deleteReview(req.params.id);
    return res.json({
        message : 'Successfully delete the reviews',
        code : 200,
        success : true
    });
}

const editReview = async (req,res) => {
    const response = await reviewService.editReview(req.params.id, req.body);
    return res.json({
        message : 'Successfully edited the reviews',
        code : 200,
        success : true,
        data : response
    });
}

module.exports = {
    createReview,
    getReviews,
    deleteReview,
    editReview
}