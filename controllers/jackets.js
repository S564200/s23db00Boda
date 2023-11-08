var Jacket = require('../models/jacketsSchema');

// List of all Jackets
exports.jackets_list = async function(req, res) {
    try{
    thejackets = await Jacket.find();
    res.send(thejackets);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

    // Handle Jackets create on POST.
    exports.jackets_create_post = async function (req, res) {
        console.log(req.body);
        let jacket = new Jacket();
        jacket.JacketName = req.body.JacketName;
        jacket.JacketSize = req.body.JacketSize;
        jacket.JacketPrice = req.body.JacketPrice;
        try {
          let result = await jacket.save();
          res.send(result);
        } catch (err) {
          res.status(500).send(`{"error": "${err}"}`);
        }
      };

      exports.jackets_view_all_Page = async function(req, res) {
        try{
        thejackets = await Jacket.find();
        res.render('jackets', { title: 'Jackets Search Results', results: thejackets });
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
    };
      
    

// for a specific Jackets.
exports.jackets_detail = function(req, res) {
res.send('NOT IMPLEMENTED: jackets detail: ' + req.params.id);
};

// Handle Jackets delete form on DELETE.
exports.jackets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: jackets delete DELETE ' + req.params.id);
};
// Handle Jackets update form on PUT.
exports.jackets_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: jackets update PUT' + req.params.id);
};
