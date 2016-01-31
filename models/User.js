var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema,
	ObjectId	= Schema.ObjectId;

var UserSchema = new Schema({
	username: String,
	password: String,
	email: String,
	isFacebook: Boolean,
	accessToken: String,
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

module.exports = mongoose.model('User', UserSchema);