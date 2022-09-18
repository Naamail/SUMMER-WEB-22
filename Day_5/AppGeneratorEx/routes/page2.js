var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
   //res.send("Hi i am in router page2");

   res.render('Page2', { title: 'Express' });
});

module.exports = router;
