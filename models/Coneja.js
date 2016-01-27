var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema,
	ObjectId	= Schema.ObjectId;

var ConejaSchema = new Schema({
	creator: { type: ObjectId, ref: 'User' },
	title: String,
	url: String,
	description: String,
	carrots: [ type: ObjectId, ref: 'Carrot' ],
	tags: [ type: ObjectId, ref: 'Tag' ],
	timestamps: {
		createdAt: 'created',
		updatedAt: 'modified'
	}
});

module.exports = mongoose.model('Coneja', ConejaSchema);