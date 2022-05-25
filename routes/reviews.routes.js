const reviewController = require('../controllers/review.controller');

const routes = (app) => {
    app.post('/animeverse/api/v1/writeReview', reviewController.createReview);
    app.get('/animeverse/api/v1/getReviews', reviewController.getReviews);
    app.delete('/animeverse/api/v1/deleteReview/:id', reviewController.deleteReview);
    app.patch('/animeverse/api/v1/editReview/:id', reviewController.editReview);
}

module.exports = routes;