var mongoose 	= require('mongoose');
var Schema 		= mongoose.Schema,
	ObjectId	= Schema.ObjectId;

var CarrotSchema = new Schema({
	author: { 
		type: ObjectId, 
		ref: 'User' 
	},
	coneja: { 
		type: ObjectId, 
		ref: 'Coneja' 
	}
}, {
	timestamps: {
		createdAt: 'created',
		updatedAt: 'modified'
	}
});

module.exports = mongoose.module('Carrot', CarrotSchema);