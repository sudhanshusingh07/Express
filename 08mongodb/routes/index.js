var express = require('express');
var router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//create a user
router.get("/create",async function (req, res, next) {
await userModel.create({
  username:"Rain",
  age: 12,
  name: "Rain"
 });
 res.send("User Created");
});


//get all users
router.get("/alluser",async function (req, res, next) {
 let alluser = await userModel.find();
 res.send(alluser);
});


//get user by id
router.get("/user/:id",async function (req, res, next) {
 let user = await userModel.findById(req.params.id);
 res.send(user);
});

//delete user by id
router.get("/delete/:id",async function (req, res, next) {
 let user = await userModel.findByIdAndDelete(req.params.id);
 res.send(user);
});
module.exports = router;
