const SubcategoryController = require("../Controllers/SubcategoryController");
const IsAdminMiddleWare = require("../middleWare/IsAdminMiddleWare");

const router=require("express")();

router.post('/add',IsAdminMiddleWare,SubcategoryController.Add);

module.exports=router;