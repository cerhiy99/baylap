const router=require('express')();
const GoodsControllers = require('../Controllers/GoodsControllers');
const IsAdminMiddleWare=require('../middleWare/IsAdminMiddleWare')

router.post('/add',IsAdminMiddleWare,GoodsControllers.Add);

module.exports=router;