var express = require('express');
const jackets_controllers= require('../controllers/jackets');
var router = express.Router();

// GET home page. 
router.get('/', jackets_controllers.jackets_view_all_Page );

/* GET detail costume page */
router.get('/detail', jackets_controllers.jackets_view_one_Page);

router.get('/create', jackets_controllers.jackets_create_Page);

router.get('/update', jackets_controllers.jackets_update_Page);

router.get('/delete', jackets_controllers.jackets_delete_Page);



module.exports = router;