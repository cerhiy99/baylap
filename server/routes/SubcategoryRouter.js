const SubcategoryController = require("../Controllers/SubcategoryController");
const IsAdminMiddleWare = require("../middleWare/IsAdminMiddleWare");

const router=require("express")();

router.post('/add',IsAdminMiddleWare,SubcategoryController.Add);
router.get('/get',SubcategoryController.Get);

module.exports=router;