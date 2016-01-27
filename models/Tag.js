var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema,
	ObjectId	= Schema.ObjectId;

var TagSchema = new Schema({
	creator: { type: ObjectId, ref: 'User' },
	title: String,
	description: String,
	coneja: { type: ObjectId, ref: 'Coneja' },
	timestamps: {
		createdAt: 'created',
		updatedAt: 'modified'
	}
});

module.exports = mongoose.model('Tag', TagSchema);