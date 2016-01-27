var User = require('../models/User');

exports.list = function(req,res) {
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