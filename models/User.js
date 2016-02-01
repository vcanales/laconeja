var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema,
	ObjectId	= Schema.ObjectId;
var bcrypt		= require('bcrypt-nodejs');

var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		get: toLowerCase
	},
	isFacebook: Boolean,
	accessToken: String,
	active: {
		type: Boolean,
		default: true // @TODO: set to false when activation is working / required
	},
	carrots: [{ 
		type: ObjectId, 
		ref: 'Carrot' 
	}],
}, {
	timestamps: {
		createdAt: 'created',
		updatedAt: 'modified'
	}
});

// User model pre functions
UserSchema.pre('save', function(callback) {
	var user = this;
	  // Break out if the password hasn't changed
	if (!user.isModified('password')) {
		return callback();
	}

	bcrypt.genSalt(5, function(err,salt) {
			if (err) return callback(err);
			bcrypt.hash(user.password, salt, null, function(err,hash) {
				if (err) return callback(err);
				user.password = hash;
				callback();
			});
		});
});

// User model verify password
UserSchema.methods.verifyPassword = function(password,cb) {
	var self = this;
	bcrypt.compare(password, self.password, function(err,isMatch) {
		if (cb) {
			if (err) { 
				return cb(err);
			}
			return cb(null,isMatch);	
		}
	});
};
// Getter functions
function toLowerCase(v) {
	return v.toLowerCase();
}

module.exports = mongoose.model('User', UserSchema);