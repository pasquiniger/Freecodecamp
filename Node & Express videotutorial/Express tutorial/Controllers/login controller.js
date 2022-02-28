const login = (req,res) => {
	let {name} = req.body
	if (name){
		res.status(200).send(`Welcome ${name}`)
	}
	res.status(401).send('Invalid name')
}

module.exports = login