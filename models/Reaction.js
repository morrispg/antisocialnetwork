const { Schema, } = require('mongoose');

const reactionSchema = new Schema(

	{
		thoughtText: {
			type: String,
			required: true,
			maxlength: 280,
			minlength: 1,
		},

		reactionBody: {
			type: String,
			required: true,
			maxlength: 280,
			minlength: 1,
		},

		username: {
			type: String,
			required: true,
		},


		createdAt: {
			type: Date,
			default: Date.now("<YYYY-mm-dd THH:MM:ss>"),
		},

	},

	{
		toJSON: {
			virtuals: true,
		},
		id: false,

	}
)

module.exports = reactionSchema;
