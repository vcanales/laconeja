var User = require('../models/User');

exports.index = function(req,res) {
	console.log(req.isAuthenticated());
	User.find(function(err,users) {
		if (err) {
			return res.json({ status: 'error', error: err });
		}
		if (users === null) {
			return res.json({ status: 'error', error: 'No users found' });
		}
		return res.json({ status: 'ok', data: users });
	});
};
exports.view = function(req,res) {
	User.findById(function(err,user) {
		if (err) {
			return res.json({ status: 'error', message: 'Could not find the user' });
		}
		return res.json({ status: 'ok', data: user });
	});
};
exports.register = function(req,res) {
	var user = new User();
	var put = req.body;

	// set user attributes
	user.username = put.username;
	user.password = put.password;
	user.email = put.email;
	user.isFacebook = false;

	user.save(function(err) {
		if (err) {
			return res.json({ status: 'error', error: err });
		}
		return res.json({ status: 'ok', data: user });
	});
};
exports.update = function(req,res) {
	var user_id = req.body.user_id;
	User.findById(user_id,function(err, user) {
		if (err) {
			return res.json({ status: 'error', message: 'Could not update the user' });
		}
		return res.json({ status: 'ok', data: user });
	});
};