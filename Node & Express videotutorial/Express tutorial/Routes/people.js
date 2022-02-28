const express = require('express'),
	router = express.Router(),
	{	getPeople, 
		createPersonPostman, 
		sendName, 
		createPersonById, 
		deletePerson
	} = require('../Controllers/people controller.js')

let {people} = require('../Express first steps/example-objects.js')


router.get('/', getPeople)


router.post('/postman', createPersonPostman)


router.post('/', sendName)


router.put('/:id', createPersonById)



router.delete('/:id', deletePerson)



module.exports = router