var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/failed', function(req, res){
  req.flash("age", 12);
  res.send("done 1")
});

router.get("/check", function (req, res) {
 console.log(req.flash("age")); //acess data from other route.
 res.send("done");
});


module.exports = router;
