var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = Require('../controllers/UsersController');
mongoose.connect('mongodb://localhost/laconeja');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

/* User Routes */

router.route('/user')
	.get(Users.list);
module.exports = router;
