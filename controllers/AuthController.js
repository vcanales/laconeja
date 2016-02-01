var passport = require('passport');
var Strategy = require('passport-local').Strategy;
var User = require('../models/User');
var User 				= require('../models/User');

exports.login = function(req,res,next) {
	passport.authenticate('local', function(err, user, info) {
		if (err) {
			return res.json({ status: 'error', error: err });
		}
		if (!user) {
			return res.json({ status: 'error', message: 'User or password invalid' });
		}
		req.logIn(user,function(err,data) {
			if (err) {
				return res.json({ status: 'error', error: err });
			}
			return res.json({ status: 'ok', data: user });
		});
	})(req,res,next);
};
exports.passport = function(passport) {
	passport.serializeUser(function(user,callback) {
		callback(null, user);
	});
	passport.deserializeUser(function(user, callback) {
		User.findById(id, function(err, user) {
			if (err) {
				return callback(err);
			}
			callback(null,user);
		});
	});
		
	passport.use(new Strategy(
		{
			usernameField: 'email'
		},
		function(email, password, callback) {
			User.findOne({ email: email }, function(err, user) {
				if (err) {
					return callback(err);
				}
				if (!user) {
					return callback(null,false);
				}
				user.verifyPassword(password,function(err,isMatch) {
					if (err) {
						return callback(err);
					}
					if (!isMatch) {
						return callback(null,false);
					}
					return callback(null,user);
				});
			});
		}
	));
}


