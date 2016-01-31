var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Users = require('../controllers/UsersController');
mongoose.connect('mongodb://localhost/laconeja');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Main' });
});

/* User Routes */

router.route('/user')
	.get(Users.index)
	.put(Users.register);
router.route('/user/:user_id')
	.put(Users.update)
	.get(Users.view);

module.exports = router;
