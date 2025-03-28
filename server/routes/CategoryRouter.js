const router=require('express')();
const CategoryController = require('../Controllers/CategoryController');
const IsAdminMiddleWare=require('../middleWare/IsAdminMiddleWare')

router.post('/add',IsAdminMiddleWare,CategoryController.Add);
router.get('/get',CategoryController.Get);
module.exports=router;