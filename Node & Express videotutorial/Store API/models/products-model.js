const {Schema, model} = require('mongoose')

const productSchema = new Schema({
	name: {
		type: String,
		required: [true, 'must type a name']
	},
	price: {
		type: Number,
		required: [true, 'must type a price']
	},
	featured: {
		type: Boolean,
		default: false
	},
	rating: {
		type: Number,
		default: 4.5
	},
	createdAt: {
		type: Date,
		default: Date.now
	},
	company: {
		type: String,
		enum: {
			values:	['ikea', 'liddy', 'caressa', 'marcos'],
			message: '{VALUE} is not supported'  //mensaje de error
		}
	}
})


module.exports = model('products', productSchema)

