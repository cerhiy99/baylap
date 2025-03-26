const router=require('express')();
const CategoryController = require('../Controllers/CategoryController');
const IsAdminMiddleWare=require('../middleWare/IsAdminMiddleWare')

router.post('/add',IsAdminMiddleWare,CategoryController.Add);
router.get('/get',CategoryController.Get);
router.post('/addTitlteCategory',IsAdminMiddleWare,CategoryController.AddTitlteCategory);
router.get('/getTitleCategories',CategoryController.GetTitleCategories);

module.exports=router;