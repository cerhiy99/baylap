const ReviewsController = require('../Controllers/ReviewsController');

const router=require('express')();

router.get('/getAllReviews',ReviewsController.GetAllReviews);

module.exports=router;