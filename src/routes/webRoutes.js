const expres = require('express');
const routes= express.Routes();
const path = require('path');
const webController= require (path.resolve(__dirname, '../controllers/webControllers'));
router.get('/',webController.index);
router.get('nosotros',webController.nosotros);
module.export=router;