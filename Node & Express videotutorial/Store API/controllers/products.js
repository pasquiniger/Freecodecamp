'use strict'
const Products = require('../models/products-model.js')


const getAllProductsStatic = async(req,res) =>{
	let search = 'ab'
	let products = await Products.find({
//		name : {$regex : search, $options : 'i'}  //buscar para que sirve regex, o ver mediante postman
	
	}).select('name price')
	res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async(req,res) =>{
	let {featured, company, name, sort, field, numericFilters} = req.query
	let queryObject = {}
	if(featured){
		queryObject.featured = featured === 'true' ? true : false
	}

	if(company){
		queryObject.company = company
	}

	if(name){
		queryObject.name = {$regex : name, $options : 'i'} 
	}

	if(numericFilters){
		let operatorMap = {
			">" : "$gt",
			">=" : "$gte",
			"=" : "$eq",
			"<" : "$lt",
			"<=" : "$lte"
		}
		let regEx = /\b(<|>|>=|<=|=)\b/g

		let filters = numericFilters.replace(
			regEx,
			(match) => `-${operatorMap[match]}-`)
		console.log('filters: '+ filters)
		let options = ['price', 'rating']
		filters = filters.split(',').forEach(item => {
			var [field, operator, value] = item.split('-')
			if(options.includes(field)){
				queryObject[field] = { [operator] : Number(value)}
			}
		})
	}

	let result = Products.find(queryObject)

	if(sort){
		var sortList = sort.split(',').join(' ')
		result = result.sort(sortList)
	}else{
		result = result.sort('createdAt')
	}

	if(field){
		var fieldList = field.split(',').join(' ')
		result = result.select(fieldList)
	}else{
		result = result.select('-_id')
	}



	console.log(queryObject)

	let limit = Number(req.query.limit) || 10
	let page = Number(req.query.page) || 1
	let skip = (page-1) * limit

	result.skip(skip)
	result.limit(limit)

	let products = await result

	res.status(200).json({products, nbHits: products.length})
}


module.exports = {getAllProducts, getAllProductsStatic}