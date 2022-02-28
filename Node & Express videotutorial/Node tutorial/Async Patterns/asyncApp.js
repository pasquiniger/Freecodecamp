const {readFile} = require('fs')

const getText = path => {
	return new Promise((resolve,reject)=>{
		readFile(path,'utf-8', (err,data) => {
		if (err){
			reject(err)
		}else{
			resolve(data)
		}
		})
	})
}


const start = async()=>{
	try{
		let first = await getText('../folder/first.txt')
		let second = await getText('../folder/second.txt')
		console.log(first, second)		
	}catch(err){
		console.log(err)
	}

}

start()


/*
getText('./../folder/first.txt')
	.then(result => console.log(result))
	.catch(err => console.log(err))
*/