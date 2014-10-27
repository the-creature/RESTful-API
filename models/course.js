//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema
var productSchema = new mongoose.Schema({
	courses:[{
		name:String,
		courseid: Number,
		status: String,
		sections:[{
			name: String,
			sectionid: Number,
			sectioncode: Number,
			status: String
		}]
	}]
});

//Return model
module.exports = restful.model('Products', productSchema); 