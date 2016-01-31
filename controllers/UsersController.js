var User = require('../models/User');

exports.index = function(req,res) {
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
			console.log(err);
			res.send(err);
		}
		console.log(user);
		res.json({ status: 'ok', data: user });
	});
};