'use strict'

const authorize = (req,res,next) => {
	let {user} = req.query
	if (user === 'john'){
		req.user = {name: 'john', id: 3}
		next()
	}else{
		res.status(401).send('Unauthorized user')
	}
}

module.exports = authorize