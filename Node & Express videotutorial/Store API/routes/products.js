'use strict'
const {getAllProducts, getAllProductsStatic} = require('../controllers/products.js'),
	express = require('express'),
	router = express.Router()


router.get('/', getAllProducts)
router.get('/static', getAllProductsStatic)

module.exports = router