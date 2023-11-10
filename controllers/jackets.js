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
exports.jackets_detail = async function(req, res) {
  console.log("detail" + req.params.id)
try {
     result = await Jacket.findById( req.params.id)
    res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};


// Handle Jackets delete form on DELETE.
exports.jackets_delete = function(req, res) {
res.send('NOT IMPLEMENTED: jackets delete DELETE ' + req.params.id);
};
// Handle Jackets update form on PUT.
exports.jackets_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body
  ${JSON.stringify(req.body)}`)
  try {
    let toUpdate = await Jacket.findById(req.params.id);

    // Do updates of properties
    if (req.body.JacketName) toUpdate.JacketName = req.body.JacketName;
    if (req.body.JacketSize) toUpdate.JacketSize = req.body.JacketSize;
    if (req.body.JacketPrice) toUpdate.JacketPrice = req.body.JacketPrice;

    let result = await toUpdate.save();
    console.log("Success " + result)
    res.send(result);
  } catch (err) {
    res.status(500).send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};
