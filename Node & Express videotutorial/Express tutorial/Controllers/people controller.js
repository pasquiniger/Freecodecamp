const getPeople = (req,res) => {
	res.status(200).json({success: true, data: people})
}

const sendName = (req,res) => {
	let {name} = req.body
	if (!name){
		res.status(401).json({success: false, msg: 'Invalid name'})
	}
	res.status(201).json({successs: true, person: name})
}

const createPersonPostman =  (req,res) => {
	let {name} = req.body
	if (!name){
		res.status(401).json({success: false, msg: 'Invalid name'})
	}
	res.status(201).json({successs: true, data: [...people], name})
}


const createPersonById = (req,res) => {
	let {id} = req.params,
		{name} = req.body
	let person = people.find( person => person.id === Number(id))

	if (!person){
		res.status(401).json({success: false, msg: `No person with id ${id}`})
	}
	
	let newPeople = people.map( person => {
		if (person.id === Number(id)){
			person.name = name
		}
		return person
	})
	res.status(200).json({success: true, data: newPeople})
}

const deletePerson = (req,res) => {
	let {id} = req.params
	let person = people.find( person => person.id === Number(id))
	if (!person){
		res.status(404).json({success: false, msg: `No person with id ${id}`})
	}
	let newPeople = people.filter(person => person.id !== Number(id))
	res.status(200).json({success: true, data: newPeople})
}


module.exports = {getPeople, createPersonPostman, sendName, createPersonById, deletePerson}