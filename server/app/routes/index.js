'use strict';
var router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/products', require('./products'));
router.use('/reviews', require('./reviews'));
router.use('/orders', require('./orders'));
router.use('/cart', require('./cart'));
router.use('/promos', require('./promos'));
router.use("/pay", function(req,res,next){
  console.log(req.body);
});

// Make sure this is after all of
// the registered routes!
router.use(function (req, res) {
    res.status(404).end();
});
