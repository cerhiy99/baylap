const router = require('express')();
const brendRouter=require('./BrendRouter');
const categoryRouter=require('./CategoryRouter');
const subcategoryRouter=require('./SubcategoryRouter');
const reviewsRouter=require('./ReviewsRouter');
const filterCategoryRouter=require('./FilterCategoryRouter');
const countryMadeRouter=require('./CountryMadeRouter');
const goodsRouter=require('./GoodsRouter');


router.use('/brend', brendRouter);
router.use('/category',categoryRouter);
router.use('/subcategory',subcategoryRouter)
router.use('/reviews',reviewsRouter)
router.use('/filterCategory',filterCategoryRouter)
router.use('/countryMade',countryMadeRouter)
router.use('/goods',goodsRouter)

module.exports = router;
