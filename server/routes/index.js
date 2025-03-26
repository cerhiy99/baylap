const router = require('express')();
const brendRouter=require('./BrendRouter');
const categoryRouter=require('./CategoryRouter');
const subcategoryRouter=require('./SubcategoryRouter');
const reviewsRouter=require('./ReviewsRouter');


router.use('/brend', brendRouter);
router.use('/category',categoryRouter);
router.use('/subcategory',subcategoryRouter)
router.use('/reviews',reviewsRouter)

module.exports = router;
