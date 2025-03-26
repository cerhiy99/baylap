const router=require('express')()
const BrednController = require('../Controllers/BrendsController')
const IsAdminMiddleWare=require('../middleWare/IsAdminMiddleWare')

router.post('/add',IsAdminMiddleWare,BrednController.Add);
router.get('/getForLetter',BrednController.GetForLetter);
router.get('/getFirst',BrednController.GetFirstLetters);
 

module.exports=router;