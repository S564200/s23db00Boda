var express = require('express');
const jackets_controllers= require('../controllers/jackets');
var router = express.Router();

/* GET home page. 
router.get('/', jackets_controllers.jackets_view_all_Page );*/

/* GET detail costume page */
router.get('/detail', jackets_controllers.jackets_view_one_Page);

module.exports = router;