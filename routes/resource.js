var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var jackets_controller = require('../controllers/jackets');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/jackets', jackets_controller.jackets_create_post);
// DELETE request to delete Costume.
router.delete('/jackets/:id', jackets_controller.jackets_delete);
// PUT request to update Costume.
router.put('/jackets/:id', jackets_controller.jackets_update_put);
// GET request for one Costume.
router.get('/jackets/:id', jackets_controller.jackets_detail);
// GET request for list of all Costume items.
router.get('/jackets', jackets_controller.jackets_list);
module.exports = router;

