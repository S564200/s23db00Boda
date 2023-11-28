var express = require('express');
const jackets_controllers= require('../controllers/jackets');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
// GET home page. 
router.get('/', jackets_controllers.jackets_view_all_Page );

/* GET detail costume page */
router.get('/detail',secured, jackets_controllers.jackets_view_one_Page);

router.get('/create',secured, jackets_controllers.jackets_create_Page);

router.get('/update',secured, jackets_controllers.jackets_update_Page);

router.get('/delete',secured, jackets_controllers.jackets_delete_Page);



module.exports = router;